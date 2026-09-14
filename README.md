# Học Toán 9

Static site for cousins learning **Toán lớp 9** (Vietnam GDPT 2018, sách Kết nối tri thức, Tập 1).

**Live:** https://nana-learn.github.io/learn-math/

The site is a hash-routed SPA in `web/` (no server). GitHub Pages deploys that folder on every push to `main`.

## Local

```sh
./serve.sh
```

Open http://127.0.0.1:8090/

Progress is stored in the browser (`localStorage`). There is no login.

## Videos

Unlisted YouTube IDs go in `web/js/videos.js` (`"c1-b1": "xxxxxxxxxxx"`). YouTube cannot lock a video to this domain; Unlisted is the practical combo.

## What is not in git

Textbook PDF and page images (`images/`, `*.pdf`) stay on the machine that built the lessons. They are gitignored.

## Later

If this works well, point a custom domain at the same Pages site. AI-generated extra lessons can still be added as static files.
