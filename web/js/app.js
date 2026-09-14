const STORE_NAME = "htoan";
const OLD_STORE = "htoan9";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORE_NAME)) || {};
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORE_NAME, JSON.stringify(state));
}

function getState() {
  const s = loadState();
  if (!s.progress || typeof s.progress !== "object" || Array.isArray(s.progress)) {
    s.progress = {};
  }
  const first = Object.keys(s.progress)[0];
  if (
    first &&
    !s.progress["9"] &&
    s.progress[first] &&
    typeof s.progress[first].score === "number"
  ) {
    s.progress = { "9": s.progress };
    saveState(s);
  }
  try {
    const old = JSON.parse(localStorage.getItem(OLD_STORE) || "null");
    if (old && old.progress && Object.keys(s.progress["9"] || {}).length === 0) {
      const p = old.progress;
      s.progress["9"] =
        p["9"] && typeof p["9"] === "object" && p["9"].score == null ? p["9"] : p;
      saveState(s);
    }
  } catch {
    /* ignore */
  }
  return s;
}

function progressFor(courseId) {
  const s = getState();
  if (!s.progress[courseId]) s.progress[courseId] = {};
  return s.progress[courseId];
}

function markLesson(courseId, id, score, total) {
  const s = getState();
  if (!s.progress[courseId]) s.progress[courseId] = {};
  s.progress[courseId][id] = { score, total, at: Date.now() };
  saveState(s);
}

function courseById(id) {
  return COURSES.find((c) => c.id === String(id));
}

function typeset(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }
}

function youtubeIdFor(lesson) {
  const raw =
    (typeof VIDEOS !== "undefined" && VIDEOS[lesson.id]) || lesson.youtube || "";
  const id = String(raw).trim();
  return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
}

function videoBlock(lesson) {
  const id = youtubeIdFor(lesson);
  if (!id) return "";
  const src =
    "https://www.youtube-nocookie.com/embed/" +
    encodeURIComponent(id) +
    "?rel=0&modestbranding=1&playsinline=1";
  return `
    <section class="watch">
      <h2>Xem giải thích</h2>
      <div class="video">
        <iframe
          src="${src}"
          title="Video bài ${lesson.num}"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>`;
}

function setChrome(course) {
  document.title = course ? `${course.title} · Học Toán` : "Học Toán";
  const nav = document.getElementById("main-nav");
  if (!nav) return;
  nav.innerHTML = course
    ? `<a href="#/">Các lớp</a><a href="#/g/${course.id}/lessons">Bài học</a>`
    : `<a href="#/">Các lớp</a>`;
}

function gradeCard(course) {
  const n = course.lessons.length;
  const done = n ? Object.keys(progressFor(course.id)).length : 0;
  const inner = `
    <span class="stamp">${escapeHtml(course.level)}</span>
    <p class="grade-num">${course.grade}</p>
    <h3>${escapeHtml(course.title)}</h3>
    <p>${n ? `${done}/${n} bài` : "Sắp có bài học"}</p>`;
  if (!n) return `<article class="card soon">${inner}</article>`;
  return `<a class="card" href="#/g/${course.id}">${inner}</a>`;
}

function homeView() {
  const thcs = COURSES.filter((c) => c.level === "THCS");
  const thpt = COURSES.filter((c) => c.level === "THPT");
  return `
    <section class="hero">
      <h1>Xin chào, cùng học Toán.</h1>
      <p class="lede">
        Bài học theo chương trình GDPT 2018, bám sát SGK Kết nối tri thức.
        Chọn lớp để vào bài. Làm xong, trang nhớ chỗ em đã tới trên máy này.
      </p>
    </section>
    <p class="section-label">Trung học cơ sở</p>
    <div class="grid grades">${thcs.map(gradeCard).join("")}</div>
    <p class="section-label">Trung học phổ thông</p>
    <div class="grid grades">${thpt.map(gradeCard).join("")}</div>
  `;
}

function courseView(course) {
  const n = course.lessons.length;
  const done = Object.keys(progressFor(course.id)).length;
  const first = course.lessons[0];
  return `
    <p class="back"><a href="#/">← Các lớp</a></p>
    <section class="hero">
      <span class="stamp">${escapeHtml(course.level)}</span>
      <h1>${escapeHtml(course.title)}</h1>
      <p class="lede">${escapeHtml(course.subtitle || course.blurb)}</p>
      ${
        n
          ? `<div class="actions">
              <a class="btn" href="#/g/${course.id}/lessons">Vào bài học</a>
              ${first ? `<a class="btn ghost" href="#/g/${course.id}/lesson/${first.id}">Bắt đầu từ Bài 1</a>` : ""}
            </div>
            <p class="note">Đã hoàn thành ${done}/${n} bài.</p>`
          : `<p class="note">${escapeHtml(course.blurb)}</p>`
      }
    </section>
    ${
      n
        ? `<div class="grid">
        ${course.chapters
          .map(
            (ch) => `
          <article class="card">
            <span class="stamp">Chương ${ch.id}</span>
            <h3>${escapeHtml(ch.title)}</h3>
            <p>${course.lessons.filter((l) => l.chapter === ch.id).length} bài</p>
          </article>`
          )
          .join("")}
      </div>`
        : ""
    }
  `;
}

function lessonsView(course) {
  const progress = progressFor(course.id);
  const blocks = course.chapters
    .map((ch) => {
      const items = course.lessons.filter((l) => l.chapter === ch.id);
      if (!items.length) return "";
      return `
      <section>
        <h2>Chương ${ch.id}. ${escapeHtml(ch.title)}</h2>
        <div class="lesson-list">
          ${items
            .map((l) => {
              const p = progress[l.id];
              const mark = p ? `<span class="done">Đã làm ${p.score}/${p.total}</span>` : "";
              return `
                <a class="lesson-row" href="#/g/${course.id}/lesson/${l.id}">
                  <div class="meta"><span>Bài ${l.num}</span>${mark}</div>
                  <strong>${escapeHtml(l.title)}</strong>
                  <p>${escapeHtml(l.summary)}</p>
                </a>`;
            })
            .join("")}
        </div>
      </section>`;
    })
    .join("");
  return `<p class="back"><a href="#/g/${course.id}">← ${escapeHtml(course.title)}</a></p>${blocks || `<p class="note">${escapeHtml(course.blurb)}</p>`}`;
}

function lessonView(course, id) {
  const lesson = course.lessons.find((l) => l.id === id);
  if (!lesson) {
    return `<p>Không tìm thấy bài.</p><p><a href="#/g/${course.id}/lessons">Về danh sách</a></p>`;
  }
  const ch = course.chapters.find((c) => c.id === lesson.chapter);
  const idx = course.lessons.findIndex((l) => l.id === id);
  const prev = course.lessons[idx - 1];
  const next = course.lessons[idx + 1];
  const exercises = lesson.exercises
    .map((ex, i) => {
      const hint = ex.hint
        ? `<details class="hint"><summary>Gợi ý</summary>${ex.hint}</details>`
        : "";
      if (ex.type === "mc") {
        const choices = ex.choices
          .map(
            (c, j) =>
              `<label><input type="radio" name="q${i}" value="${j}"> <span>${c}</span></label>`
          )
          .join("");
        return `<div class="q" data-i="${i}" data-type="mc">
          <p><strong>Câu ${i + 1}.</strong> ${ex.prompt}</p>
          <div class="choices">${choices}</div>
          ${hint}
          <div class="feedback" hidden></div>
          <div class="explain" hidden>${ex.explain}</div>
        </div>`;
      }
      return `<div class="q" data-i="${i}" data-type="${ex.type}">
        <p><strong>Câu ${i + 1}.</strong> ${ex.prompt}</p>
        <input type="text" name="q${i}" inputmode="${ex.type === "num" ? "decimal" : "text"}" placeholder="Đáp án">
        ${hint}
        <div class="feedback" hidden></div>
        <div class="explain" hidden>${ex.explain}</div>
      </div>`;
    })
    .join("");
  return `
    <p class="back"><a href="#/g/${course.id}/lessons">← Tất cả bài học</a></p>
    <article class="article">
      <span class="stamp">${escapeHtml(course.title)} · Chương ${lesson.chapter}</span>
      <h1>${escapeHtml(lesson.title)}</h1>
      <p class="lede">${escapeHtml(ch ? ch.title : "")}</p>
      <div class="body">${lesson.body}</div>
      ${videoBlock(lesson)}
      <section class="quiz">
        <h2>Luyện tập</h2>
        <form id="quiz-form">${exercises}
          <button class="btn" type="submit">Kiểm tra</button>
        </form>
      </section>
      <p class="actions" style="margin-top:1.2rem">
        ${prev ? `<a class="btn ghost" href="#/g/${course.id}/lesson/${prev.id}">Bài trước</a>` : ""}
        ${next ? `<a class="btn" href="#/g/${course.id}/lesson/${next.id}">Bài tiếp</a>` : ""}
      </p>
    </article>
  `;
}

function gradeQuiz(courseId, id) {
  const course = courseById(courseId);
  const lesson = course.lessons.find((l) => l.id === id);
  const form = document.getElementById("quiz-form");
  let score = 0;
  lesson.exercises.forEach((ex, i) => {
    const box = form.querySelector(`.q[data-i="${i}"]`);
    const fb = box.querySelector(".feedback");
    const explain = box.querySelector(".explain");
    let ok = false;
    if (ex.type === "mc") {
      const picked = form.querySelector(`input[name="q${i}"]:checked`);
      ok = picked && Number(picked.value) === ex.correct;
    } else if (ex.type === "num") {
      const val = Number(String(form[`q${i}`].value).replace(",", ".").trim());
      ok = val === ex.answer;
    } else {
      const val = String(form[`q${i}`].value).trim();
      ok = (ex.accept || []).includes(val);
    }
    fb.hidden = false;
    explain.hidden = false;
    fb.className = "feedback " + (ok ? "ok" : "bad");
    fb.textContent = ok ? "Đúng." : "Chưa đúng.";
    if (ok) score += 1;
  });
  markLesson(courseId, id, score, lesson.exercises.length);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function render() {
  const app = document.getElementById("app");
  const hash = location.hash.slice(1) || "/";

  if (hash === "/lessons") {
    location.replace("#/g/9/lessons");
    return;
  }
  const oldLesson = hash.match(/^\/lesson\/([^/]+)/);
  if (oldLesson) {
    location.replace(`#/g/9/lesson/${oldLesson[1]}`);
    return;
  }

  const lessonMatch = hash.match(/^\/g\/([^/]+)\/lesson\/([^/]+)/);
  const listMatch = hash.match(/^\/g\/([^/]+)\/lessons\/?$/);
  const courseMatch = hash.match(/^\/g\/([^/]+)\/?$/);

  let course = null;
  if (lessonMatch) {
    course = courseById(lessonMatch[1]);
    app.innerHTML = course
      ? lessonView(course, lessonMatch[2])
      : `<p>Không tìm thấy lớp.</p><p><a href="#/">Về trang chủ</a></p>`;
  } else if (listMatch) {
    course = courseById(listMatch[1]);
    app.innerHTML = course
      ? lessonsView(course)
      : `<p>Không tìm thấy lớp.</p><p><a href="#/">Về trang chủ</a></p>`;
  } else if (courseMatch) {
    course = courseById(courseMatch[1]);
    app.innerHTML = course
      ? courseView(course)
      : `<p>Không tìm thấy lớp.</p><p><a href="#/">Về trang chủ</a></p>`;
  } else {
    app.innerHTML = homeView();
  }

  setChrome(course);
  typeset(app);

  const quiz = document.getElementById("quiz-form");
  if (quiz && lessonMatch) {
    const courseId = lessonMatch[1];
    const id = lessonMatch[2];
    quiz.addEventListener("submit", (e) => {
      e.preventDefault();
      gradeQuiz(courseId, id);
    });
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
