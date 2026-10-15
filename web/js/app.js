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

function examCard() {
  const course = COURSES.find((c) => c.id === "thi10");
  if (!course) return "";
  const n = course.lessons.length;
  const done = n ? Object.keys(progressFor(course.id)).length : 0;
  return `
    <a class="card" href="#/g/${course.id}">
      <span class="stamp">Toán · Hà Nội</span>
      <h3>${escapeHtml(course.title)}</h3>
      <p>${n ? `${done}/${n} bài · đề không chuyên` : "Sắp có bài"}</p>
    </a>`;
}

function chapterStamp(ch) {
  return ch.label || `Chương ${ch.id}`;
}

function chapterHeading(ch) {
  const name = escapeHtml(ch.title);
  return ch.label ? `${escapeHtml(ch.label)}. ${name}` : `Chương ${ch.id}. ${name}`;
}

function homeView() {
  const th = COURSES.filter((c) => c.level === "Tiểu học");
  const thcs = COURSES.filter((c) => c.level === "THCS");
  const thpt = COURSES.filter((c) => c.level === "THPT");
  const thSection = th.length
    ? `<p class="section-label">Tiểu học</p>
    <div class="grid grades">${th.map(gradeCard).join("")}</div>`
    : "";
  return `
    <section class="hero">
      <h1>Xin chào, cùng học Toán.</h1>
      <p class="lede">
        Bài học theo chương trình GDPT 2018, bám sát SGK Kết nối tri thức.
        Chọn lớp để vào bài. Làm xong, trang nhớ chỗ em đã tới trên máy này.
      </p>
    </section>
    <p class="section-label">Thi vào 10</p>
    <div class="grid">${examCard()}</div>
    ${thSection}
    <p class="section-label">Trung học cơ sở</p>
    <div class="grid grades">${thcs.map(gradeCard).join("")}</div>
    <p class="section-label">Trung học phổ thông</p>
    <div class="grid grades">${thpt.map(gradeCard).join("")}</div>
  `;
}

function paperLinks(items) {
  if (!items || !items.length) return "";
  return `<div class="paper-links">${items
    .map(
      (p) =>
        `<a class="btn ghost" href="${escapeHtml(p.href)}" target="_blank" rel="noopener">${escapeHtml(p.label)}</a>`
    )
    .join("")}</div>`;
}

function paperView(lesson) {
  const pages = lesson.pages || [];
  const files = lesson.files || [];
  if (!pages.length && !files.length) return "";
  const imgs = pages
    .map(
      (src) =>
        `<a href="${escapeHtml(src)}" target="_blank" rel="noopener"><img src="${escapeHtml(src)}" alt="Trang đề gốc"></a>`
    )
    .join("");
  return `
    <p class="note">Đề gốc ở ngay dưới. Phần chữ là câu hỏi. Mở “Đáp án” sau khi đã tự làm.</p>
    ${paperLinks(files)}
    ${imgs ? `<div class="paper-pages">${imgs}</div>` : ""}
  `;
}

function examLessonsBlock(course) {
  const exams = course.lessons.filter((l) => l.pages && l.pages.length);
  if (!exams.length) return "";
  const order = ["tv10-hn2026", "tv10-hn2025", "tv10-hn2024", "tv10-10", "tv10-12"];
  exams.sort((a, b) => {
    const ia = order.indexOf(a.id);
    const ib = order.indexOf(b.id);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  const rows = exams
    .map(
      (l) => `
      <a class="lesson-row" href="#/g/${course.id}/lesson/${l.id}">
        <div class="meta"><span>Đề</span></div>
        <strong>${escapeHtml(l.title)}</strong>
        <p>${escapeHtml(l.summary)}</p>
      </a>`
    )
    .join("");
  return `<section>
    <h2>Đề</h2>
    <p class="note">Bấm tên đề để xem câu hỏi. Đáp án nằm trong bài và đang đóng.</p>
    <div class="lesson-list">${rows}</div>
  </section>`;
}

function papersBlock(course) {
  const papers = course.papers || [];
  if (!papers.length) return "";
  const cards = papers
    .map((p) => {
      const page = (p.pages && p.pages[0]) || "";
      const thumb = page
        ? `<img src="${escapeHtml(page)}" alt="${escapeHtml(p.title)}">`
        : "";
      const lessonHref = p.lessonId ? `#/g/${course.id}/lesson/${p.lessonId}` : "";
      const heading = lessonHref
        ? `<a href="${lessonHref}"><h3>${escapeHtml(p.title)}</h3></a>`
        : `<h3>${escapeHtml(p.title)}</h3>`;
      return `<article class="card">
        ${lessonHref ? `<a href="${lessonHref}">${thumb}</a>` : thumb}
        ${heading}
        <p>${escapeHtml(p.note || "")}</p>
        ${paperLinks(p.files)}
      </article>`;
    })
    .join("");
  return `<section>
    <h2>File gốc</h2>
    <p class="note">Ảnh và PDF. Bấm tên đề để vào bài có câu hỏi và đáp án.</p>
    <div class="grid">${cards}</div>
  </section>`;
}

function parentGuideBlock(course) {
  const guide = course.parentGuide;
  if (!guide) return "";
  const progress = progressFor(course.id);
  const chapters = course.chapters || [];
  let focusCh = null;
  let focusNote = "";
  for (const ch of chapters) {
    const items = course.lessons.filter((l) => l.chapter === ch.id);
    if (!items.length) continue;
    const done = items.filter((l) => progress[l.id]).length;
    if (done < items.length) {
      focusCh = ch;
      focusNote =
        done === 0
          ? `Con chưa làm chủ đề này — nên bắt đầu từ đây nếu đang học đúng tiến độ lớp.`
          : `Con đã làm ${done}/${items.length} bài trong chủ đề này — nên hoàn thành nốt trước khi sang chủ đề mới.`;
      break;
    }
  }
  if (!focusCh && chapters.length) {
    focusCh = chapters[chapters.length - 1];
    focusNote = "Con đã chạm mọi chủ đề trên máy này. Có thể ôn Mini đề hoặc bài còn điểm thấp.";
  }
  const tips = (guide.tips || [])
    .map((t) => `<li>${escapeHtml(t)}</li>`)
    .join("");
  const focusMeta =
    guide.chapterFocus && focusCh
      ? guide.chapterFocus.find((c) => c.id === focusCh.id)
      : null;
  return `
    <section class="parent-guide">
      <h2>Gợi ý cho phụ huynh</h2>
      <p>${escapeHtml(guide.intro || "")}</p>
      ${
        focusCh
          ? `<p class="note"><strong>Gợi ý hôm nay:</strong> Chủ đề ${focusCh.id}. ${escapeHtml(
              focusCh.title
            )}${focusMeta ? ` · ${escapeHtml(focusMeta.focus)}` : ""}. ${escapeHtml(
              focusNote
            )} <a href="#/g/${course.id}/ch/${focusCh.id}">Mở chủ đề</a></p>`
          : ""
      }
      <details>
        <summary>Xem thêm mẹo ôn</summary>
        <ul>${tips}</ul>
      </details>
    </section>`;
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
    ${parentGuideBlock(course)}
    ${examLessonsBlock(course)}
    ${papersBlock(course)}
    ${
      n
        ? `<div class="grid">
        ${course.chapters
          .map(
            (ch) => `
          <a class="card" href="#/g/${course.id}/ch/${ch.id}">
            <span class="stamp">${escapeHtml(chapterStamp(ch))}</span>
            <h3>${escapeHtml(ch.title)}</h3>
            <p>${course.lessons.filter((l) => l.chapter === ch.id).length} bài</p>
          </a>`
          )
          .join("")}
      </div>`
        : ""
    }
  `;
}

function lessonLink(course, lesson, progress) {
  const p = progress[lesson.id];
  const kid = course.id === "2" || course.level === "Tiểu học";
  const mark = p
    ? `<span class="done">${kid ? "Xong " : "Đã làm "}${p.score}/${p.total}</span>`
    : kid
      ? `<span class="todo">Chưa làm</span>`
      : "";
  const heading = kid ? lesson.summary || lesson.title : lesson.title;
  const sub = kid ? lesson.title : lesson.summary;
  return `
    <a class="lesson-row" href="#/g/${course.id}/lesson/${lesson.id}">
      <div class="meta"><span>Bài ${lesson.num}</span>${mark}</div>
      <strong>${escapeHtml(heading)}</strong>
      <p>${escapeHtml(sub)}</p>
    </a>`;
}

function lessonsView(course) {
  const progress = progressFor(course.id);
  const blocks = course.chapters
    .map((ch) => {
      const items = course.lessons.filter((l) => l.chapter === ch.id);
      if (!items.length) return "";
      return `
      <section>
        <h2>${chapterHeading(ch)}</h2>
        <div class="lesson-list">
          ${items.map((l) => lessonLink(course, l, progress)).join("")}
        </div>
      </section>`;
    })
    .join("");
  return `<p class="back"><a href="#/g/${course.id}">← ${escapeHtml(course.title)}</a></p>${blocks || `<p class="note">${escapeHtml(course.blurb)}</p>`}`;
}

function chapterView(course, chapterId) {
  const ch = course.chapters.find((c) => String(c.id) === String(chapterId));
  if (!ch) {
    return `<p>Không tìm thấy chương.</p><p><a href="#/g/${course.id}">← ${escapeHtml(course.title)}</a></p>`;
  }
  const items = course.lessons.filter((l) => String(l.chapter) === String(ch.id));
  const progress = progressFor(course.id);
  const rows = items.map((l) => lessonLink(course, l, progress)).join("");
  const kid = course.id === "2" || course.level === "Tiểu học";
  const done = items.filter((l) => progress[l.id]).length;
  return `
    <p class="back"><a href="#/g/${course.id}">← ${escapeHtml(course.title)}</a></p>
    <section class="${kid ? "grade-2" : ""}">
      <span class="stamp">${escapeHtml(kid ? "Toán lớp 2" : chapterStamp(ch))}</span>
      <h2>${escapeHtml(ch.title)}</h2>
      ${ch.intro ? `<p class="lede kid-today">${escapeHtml(ch.intro)}</p>` : ""}
      ${(() => {
        if (!kid || !items.length) return "";
        const nxt = items.find((l) => !progress[l.id]) || items[0];
        return `<p class="quiz-lead">${done}/${items.length} bài đã làm.</p>
        <p class="actions" style="margin:0.6rem 0 1rem"><a class="btn" href="#/g/${course.id}/lesson/${nxt.id}">Học tiếp: Bài ${nxt.num}</a></p>`;
      })()}
      ${
        ch.tips && ch.tips.length
          ? `<ul class="ch-tips">${ch.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>`
          : ""
      }
      ${
        ch.groups && ch.groups.length
          ? ch.groups
              .map((g) => {
                const part = items.filter((l) => l.num >= g.from && l.num <= g.to);
                if (!part.length) return "";
                return `<h3 class="ch-group">${escapeHtml(g.title)}</h3>
                ${g.tip ? `<p class="quiz-lead">${escapeHtml(g.tip)}</p>` : ""}
                <div class="lesson-list">${part.map((l) => lessonLink(course, l, progress)).join("")}</div>`;
              })
              .join("")
          : rows
            ? `<div class="lesson-list">${rows}</div>`
            : `<p class="note">Chương này chưa có bài học.</p>`
      }
    </section>`;
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
  const kid = course.id === "2" || course.level === "Tiểu học";
  const exercises = lesson.exercises
    .map((ex, i) => {
      const hint = ex.hint
        ? `<details class="hint"><summary>${kid ? "Cần gợi ý?" : "Gợi ý"}</summary>${ex.hint}</details>`
        : "";
      const qLabel = kid ? `Câu ${i + 1}` : `Câu ${i + 1}.`;
      if (ex.type === "mc") {
        const choices = ex.choices
          .map(
            (c, j) =>
              `<label><input type="radio" name="q${i}" value="${j}"> <span>${c}</span></label>`
          )
          .join("");
        return `<div class="q" data-i="${i}" data-type="mc">
          <p><strong>${qLabel}.</strong> ${ex.prompt}</p>
          <div class="choices">${choices}</div>
          ${hint}
          <div class="feedback" hidden></div>
          <div class="explain" hidden>${ex.explain}</div>
        </div>`;
      }
      return `<div class="q" data-i="${i}" data-type="${ex.type}">
        <p><strong>${qLabel}.</strong> ${ex.prompt}</p>
        <input type="text" name="q${i}" inputmode="${ex.type === "num" ? "decimal" : "text"}" placeholder="${kid ? "Viết đáp án ở đây" : "Đáp án"}">
        ${hint}
        <div class="feedback" hidden></div>
        <div class="explain" hidden>${ex.explain}</div>
      </div>`;
    })
    .join("");
  return `
    <p class="back"><a href="#/g/${course.id}/lessons">${kid ? "← Các bài học" : "← Tất cả bài học"}</a></p>
    <article class="article${kid ? " grade-2" : ""}">
      <span class="stamp">${escapeHtml(kid ? "Toán lớp 2" : course.title)} · ${kid ? "Chủ đề" : "Chương"} ${lesson.chapter}</span>
      <h1>${escapeHtml(lesson.title)}</h1>
      <p class="lede">${escapeHtml(ch ? ch.title : "")}</p>
      ${paperView(lesson)}
      <div class="body">${lesson.body}</div>
      ${videoBlock(lesson)}
      ${
        lesson.exercises.length
          ? `<section class="quiz">
        <h2>${kid ? "Làm bài nào!" : "Luyện tập"}</h2>
        ${kid ? `<p class="quiz-lead">Em làm từng câu. Không biết thì bấm “Cần gợi ý?”.</p>` : ""}
        <form id="quiz-form">${exercises}
          <button class="btn" type="submit">${kid ? "Xem đúng chưa" : "Kiểm tra"}</button>
        </form>
      </section>`
          : ""
      }
      <p class="actions" style="margin-top:1.2rem">
        ${prev ? `<a class="btn ghost" href="#/g/${course.id}/lesson/${prev.id}">${kid ? "← Bài trước" : "Bài trước"}</a>` : ""}
        ${next ? `<a class="btn" href="#/g/${course.id}/lesson/${next.id}">${kid ? "Bài tiếp →" : "Bài tiếp"}</a>` : ""}
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
      const raw = String(form[`q${i}`].value).replace(/\s/g, "").replace(",", ".").trim();
      const val = Number(raw);
      ok = val === ex.answer;
    } else {
      const fold = (s) =>
        String(s)
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/\s+/g, " ");
      const val = fold(form[`q${i}`].value);
      const accept = (ex.accept || [ex.answer]).map(fold);
      ok = accept.includes(val);
    }
    fb.hidden = false;
    explain.hidden = false;
    fb.className = "feedback " + (ok ? "ok" : "bad");
    const kid = courseId === "2";
    fb.textContent = ok
      ? kid
        ? "Đúng rồi, giỏi lắm!"
        : "Đúng."
      : kid
        ? "Chưa đúng. Xem gợi ý rồi thử lại nhé."
        : "Chưa đúng.";
    if (ok) score += 1;
  });
  markLesson(courseId, id, score, lesson.exercises.length);
}

function playGrade2Figures() {
  document.querySelectorAll(".figure-controls").forEach((el) => {
    const fig = el.closest(".figure");
    const id = fig && fig.getAttribute("data-animation");
    if (id && id.startsWith("g2-")) el.remove();
  });
  document.querySelectorAll('.figure[data-animation^="g2-"] svg').forEach((svg) => {
    const grouped = svg.querySelector(":scope > .g2s1");
    const parts = grouped
      ? [...svg.querySelectorAll(":scope > .g2s1, :scope > .g2s2, :scope > .g2s3, :scope > .g2s4")]
      : [...svg.children];
    const gap = parts.length > 6 ? 0.16 : 0.42;
    parts.forEach((el, i) => {
      if (el.classList && el.classList.contains("g2-hand")) return;
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = `g2in 0.5s ease ${i * gap}s both`;
    });
  });
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
  const chapterMatch = hash.match(/^\/g\/([^/]+)\/ch\/([^/]+)\/?$/);
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
  } else if (chapterMatch) {
    course = courseById(chapterMatch[1]);
    app.innerHTML = course
      ? chapterView(course, chapterMatch[2])
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

  if (typeof AnimationManager !== "undefined" && AnimationManager.init) {
    AnimationManager.init();
  }
  playGrade2Figures();

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
