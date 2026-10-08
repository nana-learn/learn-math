# Học Toán

Public static site for learning **Vietnamese math** (GDPT 2018, Kết nối tri thức). Home is a grade picker (lớp 6–12). Populated courses: **Toán 7**, **Toán 9** (both volumes), and **Thi vào 10** (Hanoi grade-10 math exam); other grades are placeholders.

**Live:** https://nana-learn.github.io/learn-math/

## Publishing

The site is a hash-routed SPA in `web/` (no server, no build step). Push to `main` and GitHub Pages deploys `web/` automatically via `.github/workflows/pages.yml`.

One-time setup (already done): repo **Settings → Pages → Source: GitHub Actions**.

Hash routes (`#/…`) are used deliberately so Pages needs no server-side rewrites. Progress is stored in the browser (`localStorage`), per grade; there is no login.

Routes: `#/` grades · `#/g/thi10` Hanoi grade-10 exam · `#/g/{grade}` course · `#/g/{grade}/ch/{n}` chapter lessons · `#/g/{grade}/lessons` · `#/g/{grade}/lesson/{id}`.

## Adding a grade

Put chapters and lessons on the matching object in `COURSES` inside `web/js/lessons.js` (see the Toán 9 entry; `web/js/grade7.js` is another example — it attaches lessons to the stub at the bottom of the file). Cards on the home page light up once `lessons.length > 0`.

## Videos

Unlisted YouTube IDs go in `web/js/videos.js` (`"c1-b1": "xxxxxxxxxxx"`). YouTube cannot lock a video to this domain; Unlisted is the practical combo.

## What is not in git

Textbook PDF and page images (`sgk/`, `images/`, `*.pdf` outside `exam-docs/` and `web/de/`) stay on the machine that built the lessons. They are gitignored — do not publish copyrighted SGK material.
