# Học Toán

Static site for learning **Vietnamese math** (GDPT 2018, Kết nối tri thức). Home is a grade picker (lớp 6–12). Only **Toán 9 Tập 1** has lessons so far; other grades are placeholders.

**Live:** https://nana-learn.github.io/learn-math/

The site is a hash-routed SPA in `web/` (no server). GitHub Pages deploys that folder on every push to `main`.

Routes: `#/` grades · `#/g/9` course · `#/g/9/lessons` · `#/g/9/lesson/c1-b1`.

## Local

```sh
./serve.sh
```

Open http://127.0.0.1:8090/

Progress is stored in the browser (`localStorage`), per grade. There is no login.

## Adding a grade

Put chapters and lessons on the matching object in `COURSES` inside `web/js/lessons.js` (see the Toán 9 entry). Cards on the home page light up once `lessons.length > 0`.

## Videos

Unlisted YouTube IDs go in `web/js/videos.js` (`"c1-b1": "xxxxxxxxxxx"`). YouTube cannot lock a video to this domain; Unlisted is the practical combo.

## What is not in git

Textbook PDF and page images (`images/`, `*.pdf`) stay on the machine that built the lessons. They are gitignored.
