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
  if (!s.byUser) s.byUser = {};
  if (s.progress) {
    s._legacyProgress = s.progress;
    delete s.progress;
    saveState(s);
  }
  return s;
}

function findUser(username) {
  const key = String(username || "").trim().toLowerCase();
  return (typeof USERS !== "undefined" ? USERS : []).find(
    (u) => u.user.toLowerCase() === key
  );
}

function currentAccount() {
  const s = getState();
  if (!s.authUser) return null;
  return findUser(s.authUser) || null;
}

function userBucket() {
  const s = getState();
  const acc = currentAccount();
  if (!acc) return { progress: {} };
  if (!s.byUser[acc.user]) s.byUser[acc.user] = { progress: {} };
  if (!s.byUser[acc.user].progress) s.byUser[acc.user].progress = {};
  return s.byUser[acc.user];
}

function login(username, password) {
  const acc = findUser(username);
  if (!acc || acc.pass !== String(password ?? "")) return false;
  const s = getState();
  s.authUser = acc.user;
  if (!s.byUser[acc.user]) s.byUser[acc.user] = { progress: {} };
  if (
    s._legacyProgress &&
    Object.keys(s.byUser[acc.user].progress || {}).length === 0
  ) {
    s.byUser[acc.user].progress = s._legacyProgress;
    delete s._legacyProgress;
  }
  saveState(s);
  return true;
}

function logout() {
  const s = getState();
  delete s.authUser;
  saveState(s);
}

function markLesson(id, score, total) {
  const s = getState();
  const acc = currentAccount();
  if (!acc) return;
  if (!s.byUser[acc.user]) s.byUser[acc.user] = { progress: {} };
  s.byUser[acc.user].progress[id] = { score, total, at: Date.now() };
  saveState(s);
}

function setChrome(loggedIn) {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("who-btn");
  nav.hidden = !loggedIn;
  if (!loggedIn) {
    btn.hidden = true;
    return;
  }
  const acc = currentAccount();
  btn.hidden = false;
  btn.textContent = acc ? acc.name : "Tài khoản";
  btn.title = "Đăng xuất";
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

function loginView() {
  return `
    <section class="login">
      <h1>Đăng nhập</h1>
      <p class="lede">Trang học dành cho lớp. Em nhập tài khoản thầy/cô đã cấp.</p>
      <form id="login-form" class="login-form">
        <label>Tên đăng nhập
          <input name="user" autocomplete="username" required>
        </label>
        <label>Mật khẩu
          <input name="pass" type="password" autocomplete="current-password" required>
        </label>
        <p class="login-error" id="login-error" hidden>Sai tên đăng nhập hoặc mật khẩu.</p>
        <button class="btn" type="submit">Vào học</button>
      </form>
    </section>
  `;
}

function homeView() {
  const acc = currentAccount();
  const done = Object.keys(userBucket().progress).length;
  const hello = acc ? `Xin chào ${escapeHtml(acc.name)}` : "Xin chào";
  return `
    <section class="hero">
      <h1>${hello}, cùng học Toán 9.</h1>
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
  const progress = userBucket().progress;
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
  setChrome(true);
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

  if (!currentAccount()) {
    setChrome(false);
    app.innerHTML = loginView();
    const form = document.getElementById("login-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const ok = login(data.get("user"), data.get("pass"));
      const err = document.getElementById("login-error");
      if (!ok) {
        err.hidden = false;
        return;
      }
      render();
    });
    return;
  }

  setChrome(true);
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

document.getElementById("who-btn").addEventListener("click", () => {
  if (!currentAccount()) return;
  if (confirm("Đăng xuất?")) {
    logout();
    location.hash = "#/";
    render();
  }
});

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
