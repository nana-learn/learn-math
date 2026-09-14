const STORE_NAME = "htoan9";

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
  if (!s.progress) s.progress = {};
  if (s.byUser && Object.keys(s.progress).length === 0) {
    for (const u of Object.keys(s.byUser)) {
      const p = s.byUser[u] && s.byUser[u].progress;
      if (p) Object.assign(s.progress, p);
    }
  }
  if (s._legacyProgress && Object.keys(s.progress).length === 0) {
    s.progress = s._legacyProgress;
  }
  if (s.byUser || s.authUser || s._legacyProgress) {
    delete s.byUser;
    delete s.authUser;
    delete s._legacyProgress;
    saveState(s);
  }
  return s;
}

function markLesson(id, score, total) {
  const s = getState();
  s.progress[id] = { score, total, at: Date.now() };
  saveState(s);
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

function lessonById(id) {
  return LESSONS.find((l) => l.id === id);
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

function homeView() {
  const done = Object.keys(getState().progress).length;
  return `
    <section class="hero">
      <h1>Xin chào, cùng học Toán 9.</h1>
      <p class="lede">
        Bài học bám sát SGK Toán 9 – Kết nối tri thức với cuộc sống (GDPT 2018):
        Chương I–V, Bài 1–17 của tập một. Làm bài xong, trang nhớ chỗ em đã tới.
        Sau này AI sẽ soạn thêm bài đúng với chỗ đang vướng.
      </p>
      <div class="actions">
        <a class="btn" href="#/lessons">Vào bài học</a>
        <a class="btn ghost" href="#/lesson/c1-b1">Bắt đầu từ Bài 1</a>
      </div>
      <p class="note">Đã hoàn thành ${done}/${LESSONS.length} bài trên trang này.</p>
    </section>
    <div class="grid">
      ${CHAPTERS.map(
        (ch) => `
        <article class="card">
          <span class="stamp">Chương ${ch.id}</span>
          <h3>${escapeHtml(ch.title)}</h3>
          <p>${LESSONS.filter((l) => l.chapter === ch.id).length} bài hiện có</p>
        </article>`
      ).join("")}
    </div>
  `;
}

function lessonsView() {
  const progress = getState().progress;
  const blocks = CHAPTERS.map((ch) => {
    const items = LESSONS.filter((l) => l.chapter === ch.id);
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
                <a class="lesson-row" href="#/lesson/${l.id}">
                  <div class="meta"><span>Bài ${l.num}</span>${mark}</div>
                  <strong>${escapeHtml(l.title)}</strong>
                  <p>${escapeHtml(l.summary)}</p>
                </a>`;
            })
            .join("")}
        </div>
      </section>`;
  }).join("");
  return `<p class="back"><a href="#/">← Trang chủ</a></p>${blocks}`;
}

function lessonView(id) {
  const lesson = lessonById(id);
  if (!lesson) return `<p>Không tìm thấy bài.</p><p><a href="#/lessons">Về danh sách</a></p>`;
  const ch = CHAPTERS.find((c) => c.id === lesson.chapter);
  const idx = LESSONS.findIndex((l) => l.id === id);
  const prev = LESSONS[idx - 1];
  const next = LESSONS[idx + 1];
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
    <p class="back"><a href="#/lessons">← Tất cả bài học</a></p>
    <article class="article">
      <span class="stamp">Chương ${lesson.chapter}</span>
      <h1>${escapeHtml(lesson.title)}</h1>
      <p class="lede">${escapeHtml(ch.title)}</p>
      <div class="body">${lesson.body}</div>
      ${videoBlock(lesson)}
      <section class="quiz">
        <h2>Luyện tập</h2>
        <form id="quiz-form">${exercises}
          <button class="btn" type="submit">Kiểm tra</button>
        </form>
      </section>
      <p class="actions" style="margin-top:1.2rem">
        ${prev ? `<a class="btn ghost" href="#/lesson/${prev.id}">Bài trước</a>` : ""}
        ${next ? `<a class="btn" href="#/lesson/${next.id}">Bài tiếp</a>` : ""}
      </p>
    </article>
  `;
}

function gradeQuiz(id) {
  const lesson = lessonById(id);
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
  markLesson(id, score, lesson.exercises.length);
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
  const lessonMatch = hash.match(/^\/lesson\/([^/]+)/);
  if (hash === "/lessons") app.innerHTML = lessonsView();
  else if (lessonMatch) app.innerHTML = lessonView(lessonMatch[1]);
  else app.innerHTML = homeView();
  typeset(app);

  const quiz = document.getElementById("quiz-form");
  if (quiz) {
    const id = lessonMatch[1];
    quiz.addEventListener("submit", (e) => {
      e.preventDefault();
      gradeQuiz(id);
    });
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
