/**
 * Grade 11 Math lessons
 * Algebra and Geometry topics (Part 1 & 2)
 */

const G11_CHAPTERS = [
  { id: 1, title: "Hàm số lượng giác và phương trình lượng giác" },
  { id: 2, title: "Tổ hợp và xác suất" },
  { id: 3, title: "Dãy số. Cấp số cộng và cấp số nhân" },
  { id: 4, title: "Giới hạn" },
  { id: 5, title: "Đạo hàm" },
  { id: 6, title: "Phép dời hình và phép đồng dạng trong mặt phẳng" },
  { id: 7, title: "Đường thẳng và mặt phẳng trong không gian" },
  { id: 8, title: "Vectơ trong không gian. Quan hệ vuông góc" },
];

const G11_LESSONS = [
  {
    id: "g11-b1",
    num: 1,
    chapter: 1,
    title: "Hàm số lượng giác",
    summary: "sin, cos, tan, cot: chu kỳ, tính chẵn lẻ, khoảng biến thiên.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Một con lắc đơn dao động theo hàm số \(y = \sin(t)\). Khi nào con lắc ở vị trí cao nhất, thấp nhất? Sau bao lâu nó lặp lại chuyển động?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(y = \sin(t)\): khi \(t = \frac{\pi}{2}\) thì \(y = 1\) (cao nhất), khi \(t = \frac{3\pi}{2}\) thì \(y = -1\) (thấp nhất). Chu kỳ là \(2\pi\): sau mỗi \(2\pi\) giây, con lắc lặp lại trạng thái.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> sin và cos có chu kỳ \(2\pi\), tan và cot có chu kỳ \(\pi\). sin là hàm lẻ, cos là hàm chẵn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Tìm tập xác định của \(y = \tan(x)\). tan(x) không xác định khi \(\cos(x) = 0\), tức \(x = \frac{\pi}{2} + k\pi\). Vậy tập xác định là \(\mathbb{R} \setminus \{\frac{\pi}{2} + k\pi \mid k \in \mathbb{Z}\}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Hàm số \(y = \cos(2x)\) có chu kỳ \(\pi\), không phải \(2\pi\). Hệ số 2 trong cosine làm chu kỳ ngắn đi 2 lần.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> \(\sin^2(x) + \cos^2(x) = 1\) luôn đúng. Đừng viết \(\sin^2(x) = 1 - \cos(x)\) — phải là \(\cos^2(x)\).</p>
      </div>
    `,
    exercises: [
      { type: "mc", prompt: "Hàm số nào sau đây là hàm chẵn?", choices: ["cos(x)", "sin(x)", "tan(x)", "cot(x)"], correct: 0, hint: "cos(−x) = cos(x).", explain: "cos(x) là hàm chẵn." },
      { type: "mc", prompt: "Chu kỳ của hàm số y = sin(3x) là", choices: ["2π/3", "2π", "π/3", "π"], correct: 0, hint: "Chu kỳ = 2π / hệ số x.", explain: "2π/3." },
      { type: "text", prompt: "Tìm tập xác định của y = cot(x).", answer: "ℝ \ {kπ | k ∈ ℤ}", accept: ["ℝ \ {kπ | k ∈ ℤ}", "R \ {kπ | k ∈ Z}"], hint: "cot(x) = cos(x)/sin(x), sin(x) ≠ 0.", explain: "x ≠ kπ." },
    ],
  },
  {
    id: "g11-b2",
    num: 2,
    chapter: 1,
    title: "Phương trình lượng giác cơ bản",
    summary: "Giải sin x = a, cos x = a, tan x = a, cot x = a.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Một điểm chuyển động tròn đều, góc quay thỏa mãn sin(α) = 1/2. Hỏi α có thể bằng bao nhiêu?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> sin(α) = 1/2 khi α = 30° hoặc α = 150° (trong khoảng 0° đến 180°). Vì sin tuần hoàn chu kỳ 360°, nên α = 30° + k·360° hoặc α = 150° + k·360°, với k nguyên.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> sin x = a (|a| ≤ 1) có nghiệm \(x = \arcsin(a) + k2\pi\) hoặc \(x = \pi - \arcsin(a) + k2\pi\). cos x = a có nghiệm \(x = \arccos(a) + k2\pi\) hoặc \(x = -\arccos(a) + k2\pi\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> cos(x) = −1/2. Trong [0, 2π), cos(x) = −1/2 khi x = 2π/3 hoặc x = 4π/3. Nghiệm tổng quát: \(x = \frac{2\pi}{3} + k2\pi\) hoặc \(x = \frac{4\pi}{3} + k2\pi\).</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> tan(x) = 1 có nghiệm \(x = \frac{\pi}{4} + k\pi\), không phải chỉ \(\frac{\pi}{4}\). tan tuần hoàn chu kỳ π, nên thêm kπ.</p>
      </div>
    `,
    exercises: [
      { type: "mc", prompt: "Nghiệm của phương trình sin(x) = 0 là", choices: ["x = kπ", "x = kπ/2", "x = π/2 + kπ", "x = 2kπ"], correct: 0, hint: "sin(x) = 0 khi x = 0, π, 2π,...", explain: "x = kπ." },
      { type: "mc", prompt: "Phương trình cos(x) = −1 có nghiệm", choices: ["x = π + k2π", "x = kπ", "x = 2kπ", "x = π/2 + kπ"], correct: 0, hint: "cos(x) = −1 khi x = π, 3π,...", explain: "x = π + k2π." },
      { type: "text", prompt: "Giải phương trình tan(x) = √3.", answer: "x = π/3 + kπ", accept: ["x = π/3 + kπ", "x = pi/3 + k*pi"], hint: "tan(π/3) = √3.", explain: "x = π/3 + kπ." },
    ],
  },
];

