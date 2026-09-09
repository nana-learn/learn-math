const CHAPTERS = [
  { id: 1, title: "Phương trình và hệ hai phương trình bậc nhất hai ẩn" },
  { id: 2, title: "Phương trình và bất phương trình bậc nhất một ẩn" },
  { id: 3, title: "Căn bậc hai và căn bậc ba" },
  { id: 4, title: "Hệ thức lượng trong tam giác vuông" },
  { id: 5, title: "Đường tròn" },
  { id: 6, title: "Hàm số y = ax². Phương trình bậc hai một ẩn" },
  { id: 7, title: "Tần số và tần số tương đối" },
  { id: 8, title: "Xác suất của biến cố" },
  { id: 9, title: "Đường tròn ngoại tiếp và nội tiếp" },
  { id: 10, title: "Một số hình khối trong thực tiễn" },
];

const LESSONS = [
  {
    id: "c1-b1",
    chapter: 1,
    title: "Hệ phương trình bậc nhất hai ẩn là gì?",
    summary: "Một cặp giá trị (x; y) thỏa cả hai phương trình cùng lúc.",
    body: String.raw`
      <p>Ở lớp 8 em đã giải phương trình một ẩn, ví dụ \(3x - 1 = 5\). Sang lớp 9, nhiều bài toán có <strong>hai ẩn</strong> — thường gọi là \(x\) và \(y\).</p>
      <p>Một phương trình bậc nhất hai ẩn có dạng \(ax + by = c\), với \(a, b\) không đồng thời bằng 0. Một nghiệm là một cặp số \((x; y)\) làm đẳng thức đúng.</p>
      <p>Ví dụ \(x + y = 5\) có vô số nghiệm: \((1; 4)\), \((2; 3)\), \((0; 5)\), … Tất cả nằm trên một đường thẳng.</p>
      <p><strong>Hệ hai phương trình bậc nhất hai ẩn</strong> là hai phương trình viết cùng lúc:</p>
      \[
        \begin{cases}
          a_1x + b_1y = c_1 \\
          a_2x + b_2y = c_2
        \end{cases}
      \]
      <p>Nghiệm của hệ là cặp \((x; y)\) thỏa <em>cả hai</em> phương trình. Về hình học, đó là giao điểm của hai đường thẳng.</p>
      <div class="example">
        <p><strong>Ví dụ.</strong> Hệ</p>
        \[
          \begin{cases}
            x + y = 5 \\
            x - y = 1
          \end{cases}
        \]
        <p>có nghiệm \((x; y) = (3; 2)\), vì \(3+2=5\) và \(3-2=1\).</p>
      </div>
      <p>Một hệ có thể có <strong>một nghiệm</strong> (hai đường cắt nhau), <strong>vô số nghiệm</strong> (hai đường trùng nhau), hoặc <strong>vô nghiệm</strong> (hai đường song song).</p>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Cặp nào là nghiệm của hệ \(\begin{cases} x+y=7 \\ x-y=3 \end{cases}\)?`,
        choices: ["(5; 2)", "(4; 3)", "(7; 0)", "(2; 5)"],
        correct: 0,
        explain: "5 + 2 = 7 và 5 − 2 = 3.",
      },
      {
        type: "mc",
        prompt: "Hệ hai đường thẳng song song khác nhau thì:",
        choices: ["Có một nghiệm", "Vô nghiệm", "Có vô số nghiệm", "Có đúng hai nghiệm"],
        correct: 1,
        explain: "Hai đường song song không cắt nhau nên hệ vô nghiệm.",
      },
    ],
  },
  {
    id: "c1-b2",
    chapter: 1,
    title: "Giải hệ: phương pháp thế và cộng",
    summary: "Hai cách làm việc mỗi ngày: rút một ẩn, hoặc cộng để khử ẩn.",
    body: String.raw`
      <p><strong>Phương pháp thế.</strong> Từ một phương trình, rút một ẩn theo ẩn còn lại, rồi thế vào phương trình kia.</p>
      <div class="example">
        <p>Giải \(\begin{cases} y = 2x - 1 \\ 3x + y = 9 \end{cases}\)</p>
        <p>Thế \(y\) vào phương trình sau: \(3x + (2x - 1) = 9 \Rightarrow 5x = 10 \Rightarrow x = 2\).</p>
        <p>Suy ra \(y = 3\). Nghiệm: \((2; 3)\).</p>
      </div>
      <p><strong>Phương pháp cộng đại số.</strong> Nhân các phương trình với số thích hợp rồi cộng (hoặc trừ) để một ẩn bị triệt tiêu.</p>
      <div class="example">
        <p>Giải \(\begin{cases} 2x + 3y = 8 \\ 2x - y = 4 \end{cases}\)</p>
        <p>Trừ từng vế: \((2x + 3y) - (2x - y) = 8 - 4 \Rightarrow 4y = 4 \Rightarrow y = 1\).</p>
        <p>Thế vào phương trình dưới: \(2x - 1 = 4 \Rightarrow x = 2{,}5\). Nghiệm: \((2{,}5; 1)\).</p>
      </div>
      <p>Nên thử lại nghiệm bằng cách thế vào cả hai phương trình ban đầu.</p>
    `,
    exercises: [
      {
        type: "text",
        prompt: String.raw`Nghiệm của \(\begin{cases} x+y=10 \\ x-y=2 \end{cases}\) là cặp (x; y). Viết dạng 6;4`,
        accept: ["6;4", "6; 4", "(6;4)", "(6; 4)"],
        explain: "Cộng hai phương trình: 2x = 12 ⇒ x = 6. Thế vào: y = 4.",
      },
      {
        type: "mc",
        prompt: String.raw`Hệ \(\begin{cases} x+y=4 \\ 2x+2y=8 \end{cases}\) có bao nhiêu nghiệm?`,
        choices: ["Một nghiệm", "Vô nghiệm", "Vô số nghiệm", "Hai nghiệm"],
        correct: 2,
        explain: "Phương trình sau gấp đôi phương trình trước: hai đường trùng nhau.",
      },
    ],
  },
  {
    id: "c1-b3",
    chapter: 1,
    title: "Bài toán thực tế: lập hệ phương trình",
    summary: "Đặt ẩn rõ ràng, viết hai mối liên hệ, rồi giải.",
    body: String.raw`
      <p>Nhiều bài toán lớp 9 (và đề vào 10) giải bằng cách lập hệ.</p>
      <ol>
        <li>Chọn ẩn: thường là hai đại lượng cần tìm.</li>
        <li>Viết hai phương trình từ đề bài.</li>
        <li>Giải hệ, đối chiếu điều kiện thực tế (số dương, số nguyên, …).</li>
      </ol>
      <div class="example">
        <p>Một hình chữ nhật có chu vi 26 cm, chiều dài hơn chiều rộng 3 cm. Tìm hai cạnh.</p>
        <p>Đặt rộng \(x\), dài \(y\). Khi đó:</p>
        \[
          \begin{cases}
            2(x + y) = 26 \\
            y = x + 3
          \end{cases}
          \Rightarrow
          \begin{cases}
            x + y = 13 \\
            y = x + 3
          \end{cases}
        \]
        <p>Thế: \(x + (x + 3) = 13 \Rightarrow x = 5\), \(y = 8\). Rộng 5 cm, dài 8 cm.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Tổng hai số là 30, hiệu là 8. Số lớn hơn bằng bao nhiêu?",
        answer: 19,
        explain: "x + y = 30, x − y = 8 ⇒ 2x = 38 ⇒ x = 19.",
      },
    ],
  },
  {
    id: "c2-b6",
    chapter: 2,
    title: "Bất phương trình bậc nhất một ẩn",
    summary: "Giải ax + b > 0 và nhớ đảo chiều khi nhân số âm.",
    body: String.raw`
      <p>Bất phương trình bậc nhất một ẩn có dạng \(ax + b > 0\) (hoặc \(<\), \(\geq\), \(\leq\)), với \(a \neq 0\).</p>
      <p>Cách giải giống phương trình: chuyển vế, chia hai vế cho \(a\). <strong>Nếu chia (hoặc nhân) một số âm thì đảo chiều bất đẳng thức.</strong></p>
      <div class="example">
        <p>\(-2x + 6 > 0 \Rightarrow -2x > -6\). Chia cho \(-2\), đảo chiều: \(x < 3\).</p>
        <p>Tập nghiệm là khoảng \((-\infty; 3)\).</p>
      </div>
      <p>Trên trục số, nghiệm của \(x < 3\) là nửa đường thẳng bên trái 3, không lấy điểm 3. Nếu là \(x \leq 3\) thì lấy cả điểm 3.</p>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Tập nghiệm của \(-3x \geq 9\) là:`,
        choices: [String.raw`\(x \geq -3\)`, String.raw`\(x \leq -3\)`, String.raw`\(x \geq 3\)`, String.raw`\(x \leq 3\)`],
        correct: 1,
        explain: "Chia hai vế cho −3 và đảo chiều: x ≤ −3.",
      },
    ],
  },
  {
    id: "c3-b7",
    chapter: 3,
    title: "Căn bậc hai",
    summary: "√a chỉ có khi a ≥ 0, và √a luôn là số không âm.",
    body: String.raw`
      <p>Số \(b\) gọi là căn bậc hai của \(a\) nếu \(b^2 = a\). Số dương có hai căn bậc hai, đối nhau. Số 0 có một căn. Số âm không có căn bậc hai trong số thực.</p>
      <p><strong>Căn bậc hai số học</strong> \(\sqrt{a}\) (với \(a \geq 0\)) là căn <em>không âm</em>. Vậy \(\sqrt{9} = 3\), không phải \(-3\).</p>
      <p>Hằng đẳng thức quan trọng:</p>
      \[
        \sqrt{A^2} = |A|
      \]
      <p>và với \(A \geq 0\), \(B \geq 0\):</p>
      \[
        \sqrt{AB} = \sqrt{A}\sqrt{B}, \qquad
        \sqrt{\frac{A}{B}} = \frac{\sqrt{A}}{\sqrt{B}} \ (B > 0)
      \]
      <div class="example">
        <p>\(\sqrt{36} = 6\), \(\sqrt{4\cdot 25} = 2 \cdot 5 = 10\), \(\sqrt{(-5)^2} = 5\).</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Giá trị của \(\sqrt{49}\) là:`,
        answer: 7,
        explain: "Căn bậc hai số học của 49 là 7.",
      },
      {
        type: "mc",
        prompt: String.raw`\(\sqrt{x^2}\) bằng:`,
        choices: ["x", "|x|", "−x", "x²"],
        correct: 1,
        explain: "√(x²) = |x| với mọi x.",
      },
    ],
  },
  {
    id: "c3-b9",
    chapter: 3,
    title: "Rút gọn biểu thức chứa căn",
    summary: "Đưa thừa số ra ngoài căn, khử mẫu, rồi rút gọn.",
    body: String.raw`
      <p>Ba thao tác hay dùng:</p>
      <ul>
        <li>Đưa thừa số ra ngoài: \(\sqrt{a^2 b} = |a|\sqrt{b}\) (khi \(b \geq 0\)).</li>
        <li>Đưa thừa số vào trong: \(a\sqrt{b} = \sqrt{a^2 b}\) khi \(a \geq 0\), \(b \geq 0\).</li>
        <li>Khử mẫu: \(\dfrac{1}{\sqrt{a}} = \dfrac{\sqrt{a}}{a}\) (\(a > 0\)).</li>
      </ul>
      <div class="example">
        <p>\(\sqrt{12} = \sqrt{4\cdot 3} = 2\sqrt{3}\).</p>
        <p>\(\dfrac{6}{\sqrt{3}} = \dfrac{6\sqrt{3}}{3} = 2\sqrt{3}\).</p>
      </div>
      <p>Căn bậc ba \(\sqrt[3]{a}\) xác định với mọi số thực \(a\). Ví dụ \(\sqrt[3]{-8} = -2\).</p>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`\(\sqrt{50}\) bằng:`,
        choices: [String.raw`\(5\sqrt{2}\)`, String.raw`\(2\sqrt{5}\)`, String.raw`\(25\sqrt{2}\)`, "10"],
        correct: 0,
        explain: "√50 = √(25·2) = 5√2.",
      },
    ],
  },
  {
    id: "c4-b11",
    chapter: 4,
    title: "Tỉ số lượng giác của góc nhọn",
    summary: "sin, cos, tan — đối, kề, huyền trong tam giác vuông.",
    body: String.raw`
      <p>Trong tam giác vuông, với góc nhọn \(\alpha\):</p>
      \[
        \sin \alpha = \frac{\text{đối}}{\text{huyền}}, \quad
        \cos \alpha = \frac{\text{kề}}{\text{huyền}}, \quad
        \tan \alpha = \frac{\text{đối}}{\text{kề}}
      \]
      <p>Hệ quả hay nhớ:</p>
      \[
        \sin^2\alpha + \cos^2\alpha = 1, \qquad
        \tan \alpha = \frac{\sin \alpha}{\cos \alpha}
      \]
      <p>Góc đặc biệt:</p>
      <ul>
        <li>\(\sin 30^\circ = \dfrac{1}{2}\), \(\cos 30^\circ = \dfrac{\sqrt{3}}{2}\), \(\tan 30^\circ = \dfrac{1}{\sqrt{3}}\)</li>
        <li>\(\sin 45^\circ = \cos 45^\circ = \dfrac{\sqrt{2}}{2}\), \(\tan 45^\circ = 1\)</li>
        <li>\(\sin 60^\circ = \dfrac{\sqrt{3}}{2}\), \(\cos 60^\circ = \dfrac{1}{2}\), \(\tan 60^\circ = \sqrt{3}\)</li>
      </ul>
      <div class="example">
        <p>Tam giác vuông có huyền 10, góc nhọn \(30^\circ\). Cạnh đối diện góc đó là \(10 \cdot \sin 30^\circ = 5\).</p>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`\(\sin 60^\circ\) bằng:`,
        choices: [String.raw`\(\dfrac{1}{2}\)`, String.raw`\(\dfrac{\sqrt{3}}{2}\)`, "1", String.raw`\(\sqrt{3}\)`],
        correct: 1,
        explain: "sin 60° = √3 / 2.",
      },
      {
        type: "num",
        prompt: String.raw`\(\tan 45^\circ\) bằng:`,
        answer: 1,
        explain: "tan 45° = 1.",
      },
    ],
  },
  {
    id: "c6-b19",
    chapter: 6,
    title: "Phương trình bậc hai một ẩn",
    summary: "ax² + bx + c = 0 và biệt thức Δ.",
    body: String.raw`
      <p>Phương trình bậc hai: \(ax^2 + bx + c = 0\) với \(a \neq 0\).</p>
      <p>Biệt thức \(\Delta = b^2 - 4ac\):</p>
      <ul>
        <li>\(\Delta > 0\): hai nghiệm phân biệt \(x = \dfrac{-b \pm \sqrt{\Delta}}{2a}\)</li>
        <li>\(\Delta = 0\): nghiệm kép \(x = \dfrac{-b}{2a}\)</li>
        <li>\(\Delta < 0\): vô nghiệm thực</li>
      </ul>
      <p>Nếu \(\Delta\) là số chính phương, có thể tính \(\Delta' = \bigl(\dfrac{b}{2}\bigr)^2 - ac\) khi \(b\) chẵn cho gọn.</p>
      <div class="example">
        <p>\(x^2 - 5x + 6 = 0\). \(\Delta = 25 - 24 = 1\), \(x = \dfrac{5 \pm 1}{2}\), nên \(x = 3\) hoặc \(x = 2\).</p>
      </div>
      <p>Đồ thị \(y = ax^2\) (\(a \neq 0\)) là parabol đỉnh gốc tọa độ, mở lên nếu \(a > 0\), mở xuống nếu \(a < 0\).</p>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Số nghiệm thực của \(x^2 + 1 = 0\) là:`,
        choices: ["0", "1", "2", "3"],
        correct: 0,
        explain: "Δ = −4 < 0, vô nghiệm thực.",
      },
      {
        type: "text",
        prompt: String.raw`Các nghiệm của \(x^2 - 5x + 6 = 0\), viết số nhỏ trước, dạng 2;3`,
        accept: ["2;3", "2; 3", "(2;3)", "(2; 3)"],
        explain: "Δ = 1, nghiệm 2 và 3.",
      },
    ],
  },
  {
    id: "c6-b20",
    chapter: 6,
    title: "Định lí Viète",
    summary: "Tổng và tích hai nghiệm: x₁ + x₂ = −b/a, x₁x₂ = c/a.",
    body: String.raw`
      <p>Nếu \(ax^2 + bx + c = 0\) có hai nghiệm \(x_1, x_2\) thì:</p>
      \[
        x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}
      \]
      <p>Dùng để lập phương trình khi biết tổng và tích, hoặc tính nhanh \(x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2\).</p>
      <div class="example">
        <p>\(x^2 - 3x + 2 = 0\) có tổng nghiệm 3, tích 2. Đúng là nghiệm 1 và 2.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Tổng hai nghiệm của \(x^2 - 7x + 10 = 0\) bằng:`,
        answer: 7,
        explain: "Tổng = −b/a = 7.",
      },
    ],
  },
  {
    id: "c8-b25",
    chapter: 8,
    title: "Xác suất: phép thử và biến cố",
    summary: "P = số kết quả thuận lợi / số kết quả có thể.",
    body: String.raw`
      <p>Một <strong>phép thử ngẫu nhiên</strong> có nhiều kết quả, không biết trước kết quả nào xảy ra (gieo xúc xắc, bốc một viên bi, …).</p>
      <p><strong>Không gian mẫu</strong> \(\Omega\) là tập mọi kết quả có thể. <strong>Biến cố</strong> là một tập con của \(\Omega\).</p>
      <p>Khi mọi kết quả đồng khả năng:</p>
      \[
        P(A) = \frac{|A|}{|\Omega|}
      \]
      <p>\(0 \leq P(A) \leq 1\). Biến cố chắc chắn có xác suất 1; biến cố không thể có xác suất 0.</p>
      <div class="example">
        <p>Gieo một xúc xắc cân đối. Xác suất ra số chẵn: các mặt 2, 4, 6 — vậy \(P = 3/6 = 1/2\).</p>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Gieo một đồng xu cân đối. Xác suất ra ngửa là:",
        choices: ["0", "1/4", "1/2", "1"],
        correct: 2,
        explain: "Hai mặt đồng khả năng, một mặt ngửa.",
      },
    ],
  },
  {
    id: "c10-b31",
    chapter: 10,
    title: "Hình trụ, hình nón, hình cầu",
    summary: "Công thức diện tích và thể tích dùng trong đời sống.",
    body: String.raw`
      <p>Đây là phần hình học gắn với lon sữa, cái phễu, quả bóng, …</p>
      <p><strong>Hình trụ</strong> (bán kính đáy \(r\), chiều cao \(h\)):</p>
      \[
        S_{xq} = 2\pi r h, \qquad V = \pi r^2 h
      \]
      <p><strong>Hình nón</strong> (đường sinh \(l\)):</p>
      \[
        S_{xq} = \pi r l, \qquad V = \frac{1}{3}\pi r^2 h
      \]
      <p><strong>Hình cầu</strong>:</p>
      \[
        S = 4\pi r^2, \qquad V = \frac{4}{3}\pi r^3
      \]
      <div class="example">
        <p>Quả bóng đường kính 6 cm thì \(r = 3\), thể tích \(\dfrac{4}{3}\pi \cdot 27 = 36\pi\) (cm³).</p>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Thể tích hình cầu bán kính 3 bằng:`,
        choices: [String.raw`\(36\pi\)`, String.raw`\(12\pi\)`, String.raw`\(9\pi\)`, String.raw`\(4\pi\)`],
        correct: 0,
        explain: "V = (4/3)πr³ = (4/3)π·27 = 36π.",
      },
    ],
  },
];
