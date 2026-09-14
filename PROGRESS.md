# Progress

## GitHub Pages

- Repo moved to `git@github.com:nana-learn/learn-math.git` (public).
- Hosting strategy: GitHub Pages from `web/` via `.github/workflows/pages.yml` (Actions), not Cloudflare Tunnel.
- Live URL: https://nana-learn.github.io/learn-math/
- Hash routes (`#/lessons`) fit Pages (no server rewrite).
- Login stays in `web/js/users.js` as a classroom gate only — credentials are visible in a public repo.

## 2026-06 (session 2)

- Rewrote `web/js/lessons.js` to follow SGK Toán 9 – Kết nối tri thức (Tập 1) exactly: 5 chapters, Bài 1–17, book-wording definitions, SGK examples.
- Added pedagogy layer per lesson: tình huống mở đầu, hiểu nhanh (`.idea`), sai lầm thường gặp (`.warn`), cách nhớ (`.memory`), tự kiểm tra (`.check`), 18 inline SVG figures, hints on all 51 exercises.
- Added login gate: hard-coded accounts in `web/js/users.js`; per-user progress in `localStorage` (`htoan9.byUser.<user>`); old progress migrated on first login; nav + logout via header button.
- Restyled figures to 3Blue1Brown look using official manim palette (`manimlib/default_config.yml`): `#333333` camera background, GREY_A strokes, BLUE_C/RED_C/YELLOW_C/GREEN_C/PURPLE_C accents; site accents (BLUE_E links, GOLD_C stamps, YELLOW_E definition bars).
- Added video slots: `web/js/videos.js` maps lesson id → YouTube ID (Unlisted); lesson page embeds `youtube-nocookie.com` in a 16:9 manim-dark frame only after login. YouTube cannot hard-lock to a domain — Unlisted + site login is the practical combo.
- `.gitignore`: `images/` (book page PNGs) and `*.pdf` (textbook) stay local.

## 2026-03-22

- Initialized a local Git repository on `main`.
- Added `README.md` describing the goal: an AI-powered math teaching site that customizes lessons and exercises from each student's current progress.
- Committed `README.md` (`2b51371`).
- Committed `PROGRESS.md` (`6ed36cb`).
- Decided scope: personal site for cousins first; local SQLite for answers; free Cloudflare Tunnel for testers in Vietnam; buy a domain later only if it works.
- Looked up Vietnam Grade 9 math (GDPT 2018 / Kết nối tri thức): 10 chapters covering systems of linear equations, inequalities, square/cube roots, right-triangle trigonometry, circles, quadratics and Vieta, frequency tables, probability, inscribed/circumscribed circles, and solids.
- Built a first website in `web/`: home page, 11 lessons with explanations and practice questions, progress stored in the browser.
- Committed the website (`d9d9638`).
- Set remote to `git@github.com:nana-learn/online-learning.git` and pushed `main`.
