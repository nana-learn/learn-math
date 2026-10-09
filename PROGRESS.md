## 2026-10-08 Toan 7 g7-b35 circumcircle fix (`94c6e81`)
- **Issue**: two errors: (1) yellow O dot at (140,140) (midpoint of base BC) instead of circumcenter (140,95); (2) dashed circumcircle r=78 centered (140,95) didn't pass through triangle vertices (actual r=109.66).
- **Fix**: redesigned triangle (A=(40,80), B=(140,140), C=(40,140)) with circumcenter O=(90,110) and r=58.3, so the circle passes through all vertices and the O dot marks the center correctly.
- **Verified**: syntax, smoke 84/52, render 0 failures.

## 2026-10-08 Toan 9 c5-b16 cut-circle dots (`d256ba3`)
- **Issue**: the "cắt nhau" panel's 2 intersection dots at (32,70)/(98,70) were at radius 36.2 from the center (65,55), but the circle is r=40 and the secant line y=70 meets it at radius 40 (x=65±37.1) — the dots sat 4px inside the circle instead of on it.
- **Fix**: moved the dots to (28,70)/(102,70) so both lie exactly on the circle (radius 39.92 ≈ 40).
- **Verified**: syntax, smoke 84/52, render 0 failures.

## 2026-10-08 Toan 9 c2-b6 open-dot figure fix (`99c663b`)
- **Issue**: the number-line figure's bottom "x < 3" dot used fill=#333333 (dark solid), contradicting the figcaption "chấm rỗng cho <, >" — it should be an open/hollow dot. The top "x ≤ −3" dot was correctly solid yellow (closed dot).
- **Fix**: changed the bottom dot's fill to #FFFFFF so it renders hollow with the yellow ring, matching the closed/open convention.
- **Verified**: syntax, smoke 84/52, render 0 failures.

## 2026-10-08 Toan 7 g7-b36 figcaption typo (`94c47e6`)
- **Issue**: the figure caption said "Sàn toàn phần" (floor) instead of "Diện tích toàn phần" (total surface area). The lesson body already uses "Diện tích toàn phần S = 2(ab + bh + ha)".
- **Fix**: corrected the figcaption to "Diện tích toàn phần = 2(ab + bh + ha)".
- **Verified**: syntax, smoke 84/52, render 0 failures.

## 2026-10-08 Toan 9 c9-b29 figure geometry (`1450b5f`)
- **Issue**: the cyclic-quadrilateral figure's four vertices (180,15)/(272,105)/(180,195)/(88,105) were at radii 90/92 from the circle's center (180,105) while the circle is r=95 — so the vertices sat inside the circle, and the diamond was NOT cyclic (unequal diagonals 180 vs 184).
- **Fix**: moved the vertices onto the circle at the cardinal points (180,10)/(275,105)/(180,200)/(85,105), making a cyclic square-diamond inscribed in r=95 (all angles 90°, so ∠A+∠C=∠B+∠D=180° holds). Adjusted the A/B/C/D vertex labels accordingly.
- **Verified**: syntax, SVG XML well-formed (xmllint), all 4 vertices on the circle, smoke 84/52, render 0 failures.

## 2026-10-08 Thi-10 tv10-6 memory title (`5504d78`)
- **Issue**: tv10-6's `.memory` block (a formula recap right after its `.check`, mid-lesson at 59%) was the only untitled memory among the Thi-10 skill lessons — tv10-1/2/3/4/5/8 all use `<strong>Nhớ nhanh.</strong>`.
- **Fix**: added the `<strong>Nhớ nhanh.</strong>` title to tv10-6's memory. (tv10-7's "Ba câu hay dùng." and tv10-9's untitled closing formula memory keep the author's intentional closing-memory style.)
- **Verified**: syntax, KaTeX balanced (18/18), tag balance clean, smoke 84/52, render 0 failures.

## 2026-10-08 Toan 9 c7-b22 figure nesting (`38c9e7d`)
- **Issue**: c7-b22 was the ONLY Toan 9 lesson whose `<figure>` was nested inside a `<div class="example">` (a bar-chart of the frequency table) — all 25 other figure lessons keep figures standalone.
- **Fix**: moved the figure out of the example div to standalone (between the example and the `Hiểu nhanh` idea), matching the convention.
- **Verified**: syntax, tag balance clean (line/rect are SVG self-closing tags — false positives), KaTeX balanced, SVG well-formed (xmllint), smoke 84/52, render 0 failures.
- **Post-fix scan**: all 26 Toan 9 figure lessons now have standalone figures.

## 2026-10-08 Toan 9 c1-b1 two-warn merge (`9448e7e`)
- **Issue**: c1-b1 was the only Toan 9 lesson with TWO `.warn` blocks — one mid-lesson at 50% ("Cái gì trông giống mà không phải", not right after the first idea) and a stranded closing warn at 96% ("Sai lầm thường gặp") left behind by the earlier end-warn relocation.
- **Fix**: merged all unique points into a single "Sai lầm thường gặp" warn right after the first `.idea` (11%), deduped the `0x+0y=3` point. Removed both old warns.
- **Verified**: syntax, smoke (84 lessons/52 figures), KaTeX 0, tag balance clean, render 0 failures.
- **Post-fix scan**: all 32 Toan 9 warns now sit right after their first `.idea` (c7-b23 after its opening `.definition` — no early idea exists, first idea at 87%; intentional). No lesson has 2+ warns.
## 2026-10-09 Toán 9 animations pass (grade 9 visual lessons with animations)

Added step-by-step animations to 10 lessons:

- `c5-b13`: Circle with radius and points (animate circle, points, radius labels)
- `c4-b11`: Right triangle with trig labels (animate hypotenuse, legs, angles)
- `c5-b16`: Line-circle positions (3 panels: intersect, tangent, no-intersection)
- `c9-b27`: Inscribed angle with central angle comparison
- `c9-b28`: Circumcircle and incircle of a triangle
- `c6-b18`: Parabola y = ax² (both a>0 and a<0 cases)
- `c3-b7`: Square root with geometric interpretation (square 49 m² → side 7 m)
- `c7-b22`: Frequency table and bar chart (chart axes, grid lines, bars, labels)
- `c10-b31`: Cylinder and cone (ellipse bases, vertical lines, labels R, h, l)
- `c10-b32`: Sphere with cross-section (circle with chord, distance d, radii R and r)

All animations use:
- Drawing effect for lines/curves via `stroke-dasharray`/`stroke-dashoffset`
- Fade-in for text/points via `opacity` transitions
- Step-by-step reveal following pedagogical flow

Modified files:
- `web/js/animations.js` — added 10 animation configs with step-by-step reveals
- `web/js/lessons.js` — added `data-animation` attributes and SVG modifications

Committed `6a98acb`, `a141f47`, `1794189`, `ae44dc2`, `cc029dd`.

## 2026-10 (session 3)

- Repo refocused on the public GitHub Pages site: removed `serve.sh` (local `python3 http.server`) — the site is viewed at https://nana-learn.github.io/learn-math/ only.
- Rewrote `README.md` around the Pages workflow (push `main` → Actions deploys `web/`); fixed the stale "only Toán 9" note (Toán 7 and Thi vào 10 are also populated).
- `.gitignore`: dropped `data/` and `*.db` (leftover from the abandoned local SQLite plan).
- Content pass (item 2): added figures to the four figureless visual lessons — Toán 9 `c10-b31` (trụ/nón with R, h, l) and `c10-b32` (mặt cắt hình cầu: right triangle O–chân vuông góc–P), Toán 7 `g7-b18` (quạt tròn 25/40/35%) and `g7-b19` (đoạn thẳng with tăng/không đổi/giảm, using the lesson's 20°/23°/23°/21° data).
- Toàn 7 `.warn` pass (largest measured consistency gap, 0/37): added a `sai lầm thường gặp` box to all 37 lessons, one commit per chapter (ch1..ch10), placed after the first `.idea` block matching the Toán 9 template.
- Toàn 7 `.check` pass: added a `<details class="check">` self-test (`Tự kiểm tra`, `<em>— answer</em>` pairs) to all 37 lessons, one commit per chapter, placed right after each `.warn` block.
- Thi-10 `.warn` pass: added `Sai lầm thường gặp` boxes to the six skill lessons lacking one (`tv10-4..tv10-9`); the three raw mock-paper lessons (`tv10-10..12`) stay as exam content (9/12 `.warn`).
- Toàn 9 `.check` pass: added a `<details class="check">` self-test to the 27 lessons still missing one (Toán 9 had only 5/32), placed right before the last "Ví dụ làm chậm." example and reusing each lesson's `.warn` trap material — commits `fbe7899`, `9c78c98`, `d5a240a`, `ea1b11e`, `1ae64a1`, `42ef945`; now 32/32.
- Toàn 9 figure pass (geometry/visual lessons): added inline SVG figures to the figureless lessons that are naturally visual, matching the house figure style (palette `#DDDDDD`/`#58C4DD`/`#FC6255`/`#83C167`/`#9A72AC`, font 12–13, Vietnamese labels, plain-text `<figcaption>`):
  - ch9 geometry `c9-b27`..`c9-b30` (góc nội tiếp, đường tròn ngoại/nội tiếp, tứ giác nội tiếp, đa giác đều) — geometry verified numerically (circumcenter/incenter, 60°-spaced hexagon, inscribed/central angles) — commit `4ce3f60`.
  - ch7–8 statistics `c7-b22`..`c7-b24`, `c8-b25`..`c8-b26` (cột tần số cỡ giày, cột tần số tương đối, biểu đồ ghép nhóm, bảng liên kết xúc xắc–đồng xu 6×2=12, xúc xắc thuận lợi {2,4,5,6}) — commit `c69c297`.
  - algebra with natural visuals `c2-b5` (trục số đảo chiều khi ×(−1)), `c3-b7` (hình vuông 49 m²), `c6-b21` (sân bóng x·(x+30)=1800), `c3-b10` (khối lập phương 27 cm³) — commits `5d849c3`, `b90c5f5`.
  - Intentionally left figureless (purely symbolic algebra, no natural diagram): `c1-b3`, `c2-b4`, `c3-b8`, `c3-b9`, `c6-b19`, `c6-b20`. Figures there would be forced and add no pedagogical value.
- Thi-10 pedagogy pass (exam.js): the 9 skill lessons were the least-developed course. Added a `<details class="check">` self-test (`Tự kiểm tra`, reusing each lesson's `.warn` trap material, placed after the `.warn` block) to `tv10-1..tv10-9` — commit `d0d0f93`; then `Nhớ nhanh` `.memory` blocks to the six still-missing skill lessons `tv10-1..tv10-5` and `tv10-8` — commit `7bbf507`. The three raw mock-paper lessons (`tv10-10..12`) stay as exam content (no warn/self-test/memory).
- Thi-10 figure pass: added 3 inline SVG figures to the genuinely visual lessons — `tv10-1` (cột tần số ghép nhóm: Hà Nội 2026 heights 10/18/14/6/2, bars proportional at 7.2 px/unit), `tv10-6` (hình trụ S_xq=2πRh, V=πR²h bên cạnh hình cầu S=4πR²), `tv10-7` (tứ giác AHDC nội tiếp đường kính HC, ∠HAC=∠HDC=90° verified numerically) — commit `727b47a`. Geometry/bar heights checked numerically; XML well-formedness verified via xmllint (resvg renderer broken in this environment).
- Toàn 7 figure pass (visual lessons): added 5 inline SVG figures — `g7-b17` (cột tần số số anh chị em 3/5/3/1, n=12, bars ~33 px/unit), `g7-b22` (đồ thị tỉ lệ thuận y=16x qua gốc, point (5;80), verified collinear), `g7-b23` (đồ thị tỉ lệ nghịch xy=36 máy-giờ, point (6;6), all points on the hyperbola), `g7-b29` (xúc xắc sáu mặt, biến cố chẵn {2,4,6}), `g7-b30` (hai đồng xu Ω={SS,SN,NS,NN}, ít nhất một ngửa P=3/4) — commit `8f38adc`. Now 23/37 figures; the 14 remaining figureless (ch1 số hữu tỉ/luỹ thừa/thập phân/căn, b20–b21 tỉ lệ thức, b24–b28 đa thức) are purely symbolic algebra, intentionally skipped.
- Toán 9 definition pass: added a formal `.definition` block to the 10 lessons that lacked one — `c1-b3` (quy trình lập hệ), `c2-b4` (phương trình tích + ĐKXĐ), `c3-b8` (căn của tích/thương), `c3-b9` (đưa thừa số ra/vào dấu căn, khử mẫu), `c4-b12` (hệ thức cạnh-góc tam giác vuông), `c6-b21` (quy trình lập phương trình), `c7-b22` (tần số), `c7-b24` (nhóm [a;b) và bảng ghép nhóm), `c8-b25` (phép thử ngẫu nhiên, không gian mẫu Ω), `c8-b26` (xác suất P(E)=n(E)/n(Ω)) — commits `acc0824` + `58f0028`. Now `.definition` 32/32. (Note: the first commit stripped LaTeX backslashes because the defs were authored inside JS template literals; regenerated them as separate .html files and re-inserted with proper `\(` escapes — `58f0028`.)
- Toán 7 definition pass: added a formal `.definition` block to all 30 lessons that lacked one — `b2` (số hữu tỉ & phép tính), `b4` (thứ tự phép tính), `b5` (thập phân vô hạn tuần hoàn), `b7` (số thực), `b9` (đường thẳng song song), `b10` (tiên đề Euclid), `b11` (định lí & chứng minh), `b12` (tổng ba góc tam giác), `b15` (bằng nhau tam giác vuông), `b17` (dữ liệu rời rạc/liên tục, tần số), `b18` (biểu đồ quạt tròn), `b19` (biểu đồ đoạn thẳng), `b20` (tỉ lệ thức), `b21` (dãy tỉ số bằng nhau), `b22` (tỉ lệ thuận), `b23` (tỉ lệ nghịch), `b24` (biểu thức đại số), `b25` (đa thức một biến), `b26` (đơn thức đồng dạng), `b27` (nhân đa thức), `b28` (chia đa thức), `b29` (biến cố), `b30` (xác suất), `b31` (cạnh–góc đối diện), `b32` (đường vuông góc/xiên), `b33` (bất đẳng thức tam giác), `b34` (trung tuyến/trọng tâm/phân giác), `b35` (trung trực/đường cao), `b36` (hình hộp/lập phương), `b37` (lăng trụ đứng) — commit `d29ea09`. Now `.definition` 37/37. (Escaped inline-math delimiters as `\(`/`\)` in the script to avoid the template-literal backslash-stripping bug.)
- Thi-10 structural fix: repaired 6 broken `<details class="check">` closing tags (`tv10-1`..`tv10-5`, `tv10-8`) — the `.memory` insertion pass had split `</details>` so the `>` landed on a stray line after the memory div, leaving the self-check `<details>` unclosed on the live site. Now tag-balanced (commit `5442a16`). Full smoke test also confirmed: all 84 lessons load with no missing bodies, 63 inline SVGs all XML well-formed, zero figure/figcaption/tag-balance issues, and every `de/*`/`exam-docs/*` exam-paper file reference exists.
- Toan 9 warn relocation: moved the `.warn` (Sai lầm thường gặp) block from the very end of each lesson (≈94% of the body, after the `.check`, `.memory`, and all examples) to right after the first `.idea` block — matching the Toan 7 convention and the house template, so students see the common-mistake warning before the trap examples (30 lessons; commit `ff23e86`). `c7-b23` keeps its warn after its late first idea because that lesson opens with a definition + examples (no early idea).
- Toan 9 `.check` relocation (`c1-b3`): the lone stranded `.check` was the last body block at 95% (after all examples and the `examq`), far from its slow example. Moved it to right before the `Ví dụ làm chậm` example (58%), matching the other 31 lessons' convention. Verified: no other lesson has a check as the final body block, no other broken `</details>` tags exist. Smoke/KaTeX/tag-balance/render all clean. Commit `67bb7b1`.
- Thi-10 warn relocation (`tv10-2`, `tv10-3`): two skill lessons still had `.warn` stranded after the examq worked examples (63%, 69%) — inconsistent with the other 7 skill lessons (warn early) and the house template. Moved `tv10-2`'s warn to right after its first `.idea` (now 18%) and `tv10-3`'s warn to right after its opening intro paragraph (now 8%, no early `.idea` there). Their `.check` blocks intentionally stay after the examq examples because they reference that material (8-card box, P-integer). Commit `c9217ca`.
- Thi-10 course subtitle fix: the subtitle named only "đề thử Mỹ Đình 2" and omitted `tv10-11` (tám đề thử khác ở Hà Nội — Cầu Giấy, Đống Đa, Thái Thịnh, ...). Updated to "đề thử các trường Hà Nội (Mỹ Đình 2, Cầu Giấy, Đống Đa, ...)". Commit `02bc5e2`.

## GitHub Pages

- Repo moved to `git@github.com:nana-learn/learn-math.git` (public).
- Hosting strategy: GitHub Pages from `web/` via `.github/workflows/pages.yml` (Actions), not Cloudflare Tunnel.
- Live URL: https://nana-learn.github.io/learn-math/
- Hash routes (`#/lessons`) fit Pages (no server rewrite).
- Login removed: the Pages site is public, so the classroom gate was dropped.
- Layout is multi-grade: home picks lớp 6–12; only Toán 9 has lessons. Routes `#/g/{grade}/…`, progress keyed per grade.

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
- Toàn 9 `.warn` relocation (`ff23e86`): moved the `.warn` block from the end of each lesson to right after the first `.idea`, matching Toàn 7 / the house template — students see the common-mistake warning before the trap examples. 30 lessons moved; `c1-b3` and `c7-b23` were left (warn already before `.check`) — later confirmed still stranded at 85–88%, so moved them too (`move-warn-g9-2.mjs`): `c1-b3` warn → right after first `.idea`, `c7-b23` warn → right after its opening `.definition` (lesson has no early `.idea`). All Toàn 9 warns now early (0 stranded at end).
- Headless render smoke test (`render-test.mjs`): stub DOM/localStorage/location, load all data files + `app.js`, run `render()` for 11 routes (home, course, lessons, chapter, lesson for g7/g9/thi10, and a raw-paper lesson). All render without runtime errors; `renderMathInElement` exposed as a global in the harness (it is a window global in browsers).
- Exercise-schema check: every lesson's `exercises` have valid `prompt`/`type` and matching `correct`/`answer`/`accept`/`choices`; mc `correct` always in range. None issues. Only the 4 raw-paper lessons (`tv10-hn2026/2025/2024`, `tv10-12`) intentionally have no interactive quiz — their questions sit in-body with closed `<details class="check">` answers.
- Placeholder scan (TODO/FIXME/lorem/undefined/…): none in any body/summary/title.
- Toàn 9 `.memory` placement verified: blocks sit after a trap example and before the closing "Kĩ năng cần luyện" idea (the author's intended trap → memory → practice sequence), and memory-after-check matches Toàn 7/Thi-10 convention — no change.
- Thi-10 `.warn` placement: verified all warns precede `.check` (0 warn-after-check). One stranded warn found (`tv10-1` @86%, after both examq blocks, with an early `.idea` @3%) — moved it right after the first `.idea` via `move-warn-tv10-1.mjs`. All Thi-10 warns now early (0 stranded at >80%). Committed `ff64708` (Toan 9) and this one.
## 2026-01-10 Grade 8 Part 2 lessons g8-b22 through g8-b24 (eb1e6bb)

Added Grade 8 Part 2 lessons covering Chapter VI: Phân thức đại số (Algebraic Fractions):

- g8-b22: Tính chất cơ bản của phân thức đại số
  - Properties 1-3: multiply/divide numerator/denominator by same non-zero polynomial
  - Quy đồng mẫu thức (common denominator)
  - 6 interactive exercises with hints and detailed explanations

- g8-b23: Phép cộng và phép trừ phân thức đại số
  - Addition/subtraction with common denominators
  - Common denominator finding (MTC)
  - 6 interactive exercises with hints and detailed explanations

- g8-b24: Phép nhân và phép chia phân thức đại số
  - Multiplication and division of algebraic fractions
  - Simplification before computing
  - 6 interactive exercises with hints and detailed explanations

Each lesson follows Vietnamese pedagogy:
- Situation (tình huống) → Definitions → Examples (slow down → easy → hard → pitfalls)
- Look Back (nhìn lại) → Self-check (tự kiểm tra) → Practice exercises (luyện dạng SBT)

Files modified:
- web/js/lessons.js: +137 lines for 3 new lessons

Committed eb1e6bb (eb1e6bb). Pushed to GitHub Pages main branch.

## 2026-01-10 Grade 8 Part 2 lessons g8-b25 through g8-b29 (c1c5be9)

Added Grade 8 Part 2 lessons covering Chapter VII: Phương trình bậc nhất và hàm số bậc nhất (Linear equations and linear functions):

- g8-b25: Phương trình bậc nhất một ẩn (Linear equations with one variable)
  - Definition: ax + b = 0 (a ≠ 0)
  - Two transformation rules for equations
  - 6 interactive exercises with hints and detailed explanations

- g8-b26: Giải bài toán bằng cách lập phương trình (Solve problems by setting up equations)
  - 5-step problem solving process: choose variable, set condition, express quantities, set equation, solve and verify
  - Real-world problems (age, geometry, travel)
  - 6 interactive exercises with hints and detailed explanations

- g8-b27: Khái niệm hàm số và đồ thị của hàm số (Concept of function and graph)
  - Function definition: each x has exactly one y
  - Graph: set of all points (x;f(x)) on coordinate plane
  - 6 interactive exercises with hints and detailed explanations

- g8-b28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất (Linear functions and their graphs)
  - Linear function: y = ax + b (a ≠ 0)
  - Graph is a straight line
  - y-intercept (tung độ gốc) and slope (hệ số góc)
  - 6 interactive exercises with hints and detailed explanations

- g8-b29: Hệ số góc của đường thẳng (Slope of a line)
  - Slope a = tan(α) represents steepness
  - a > 0: increasing, a < 0: decreasing
  - |a| large: steeper
  - Perpendicular lines: a₁·a₂ = -1
  - 6 interactive exercises with hints and detailed explanations

Each lesson follows Vietnamese pedagogy:
- Situation (tình huống) → Definitions → Examples (slow down → easy → hard → pitfalls)
- Look Back (nhìn lại) → Self-check (tự kiểm tra) → Practice exercises (luyện dạng SBT)

Files modified:
- web/js/lessons.js: +472 lines for 5 new lessons

Committed c1c5be9. Pushed to GitHub Pages main branch.

## 2026-01-10 Grade 8 Part 2 lessons g8-b30 through g8-b32 (c1c5bd1)

Added Grade 8 Part 2 lessons covering Chapter VIII: Mở đầu về tính xác suất của biến cố (Introduction to probability of events):

- g8-b30: Kết quả có thể và kết quả thuận lợi (Possible outcomes and favorable outcomes)
  - Sample space Ω, possible outcomes, events, favorable outcomes
  - Probability P(E) = number of favorable outcomes / number of possible outcomes
  - 6 interactive exercises with hints and detailed explanations

- g8-b31: Cách tính xác suất của biến cố bằng tỉ số (Calculating probability using ratio)
  - Formula P(E) = m/n where n = number of possible outcomes, m = number of favorable outcomes
  - 6 interactive exercises with hints and detailed explanations

- g8-b32: Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng (Relationship between experimental probability and theoretical probability)
  - Experimental probability P_n(E) = number of favorable outcomes / number of trials
  - Theoretical probability P(E)
  - Law of large numbers: P_n(E) → P(E) as n → ∞
  - 6 interactive exercises with hints and detailed explanations

Each lesson follows Vietnamese pedagogy:
- Situation (tình huống) → Definitions → Examples (slow down → easy → hard → pitfalls)
- Look Back (nhìn lại) → Self-check (tự kiểm tra) → Practice exercises (luyện dạng SBT)

Files modified:
- web/js/lessons.js: +286 lines for 3 new lessons

Committed c1c5bd1. Pushed to GitHub Pages main branch.

**Note**: The insertion script `insert_g8_b30_32.py` was fixed to add a comma to the previous lesson's closing brace before inserting new lessons, ensuring valid JavaScript array syntax.
