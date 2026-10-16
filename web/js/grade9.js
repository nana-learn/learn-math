/**
 * Grade 9 Math lessons
 * Geometry: Circle, Triangle, Polygon topics
 */

const G9_CHAPTERS = [
  { id: 9, title: "Đường tròn" },
  { id: 10, title: "Góc với đường tròn" },

  {
    id: "c9-ch1-quiz",
    num: 99,
    chapter: 1,
    title: "Chương 1: Căn bậc hai. Căn bậc ba - Trắc nghiệm",
    summary: "Luyện tập căn bậc hai và căn bậc ba.", youtube: "dQw4w9WgXcQ",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về căn bậc hai và căn bậc ba.</p>`,
    exercises: [
      { type: "mc", prompt: "Câu 1: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "√16 = 4." },
      { type: "mc", prompt: "Câu 2: √(25/9) =", choices: ["5/3", "-5/3", "±5/3", "25/3"], correct: 0, hint: "√(a/b) = √a/√b.", explain: "√(25/9) = 5/3." },
      { type: "mc", prompt: "Câu 3: √(16·9) =", choices: ["12", "24", "36", "48"], correct: 0, hint: "√(ab) = √a·√b = 4·3 = 12.", explain: "12." },
      { type: "mc", prompt: "Câu 4: √(25-16) =", choices: ["3", "9", "√9", "√41"], correct: 0, hint: "25-16=9, √9=3.", explain: "3." },
      { type: "mc", prompt: "Câu 5: 2√3 + √3 =", choices: ["3√3", "2√6", "3√6", "√9"], correct: 0, hint: "2√3 + 1√3 = 3√3.", explain: "3√3." },
      { type: "mc", prompt: "Câu 6: ∛8 =", choices: ["2", "-2", "±2", "4"], correct: 0, hint: "2³ = 8.", explain: "∛8 = 2." },
      { type: "mc", prompt: "Câu 7: Rút gọn √(12) =", choices: ["2√3", "3√2", "4√3", "6"], correct: 0, hint: "12 = 4·3, √(4·3) = 2√3.", explain: "2√3." },
      { type: "mc", prompt: "Câu 8: Điều kiện xác định của √(x-3) là?", choices: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"], correct: 0, hint: "Biểu thức dưới dấu căn ≥ 0.", explain: "x ≥ 3." },
    ],
  },
  {
    id: "c9-ch2-quiz",
    num: 100,
    chapter: 2,
    title: "Chương 2: Hàm số bậc nhất - Trắc nghiệm",
    summary: "Luyện tập hàm số bậc nhất y = ax + b.", youtube: "dQw4w9WgXcQ",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về hàm số bậc nhất.</p>`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = 3x - 2 có hệ số góc là?", choices: ["3", "-2", "2", "-3"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "3." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -2x + 1 cắt trục Oy tại điểm?", choices: ["(0,1)", "(1,0)", "(0,-1)", "(-1,0)"], correct: 0, hint: "x=0 → y=1.", explain: "(0,1)." },
      { type: "mc", prompt: "Câu 3: Hai đường thẳng y = 2x + 1 và y = 2x - 3:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
      { type: "mc", prompt: "Câu 4: Hàm số y = -x + 5 là:", choices: ["Nghịch biến", "Đồng biến", "Không đổi", "Không xác định"], correct: 0, hint: "a = -1 < 0 nên nghịch biến.", explain: "Nghịch biến." },
      { type: "mc", prompt: "Câu 5: Đường thẳng y = ax + 3 đi qua (1,5) thì a =", choices: ["2", "3", "4", "5"], correct: 0, hint: "5 = a·1 + 3 → a = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 6: Đồ thị hàm số y = 4 là:", choices: ["Đường thẳng ngang", "Đường thẳng dọc", "Đường xiên", "Parabol"], correct: 0, hint: "y = 4 là đường thẳng y = 0x + 4.", explain: "Đường thẳng ngang." },
      { type: "mc", prompt: "Câu 7: Hệ số góc của đường thẳng qua (0,2) và (2,6) là?", choices: ["2", "3", "4", "1"], correct: 0, hint: "k = (6-2)/(2-0) = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 8: Hai đường thẳng vuông góc khi:", choices: ["k₁·k₂ = -1", "k₁·k₂ = 1", "k₁ = k₂", "k₁ + k₂ = 0"], correct: 0, hint: "Tích hệ số góc = -1.", explain: "k₁·k₂ = -1." },
    ],
  },

  {
    id: "g9-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Căn bậc hai",
    summary: "Đề kiểm tra 45 phút chương Căn bậc hai.",
    body: String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p>`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "4." },
      { type: "mc", prompt: "Câu 2: √(25/9) =", choices: ["5/3", "-5/3", "±5/3", "25/3"], correct: 0, hint: "√(25/9) = 5/3.", explain: "5/3." },
      { type: "text", prompt: "Rút gọn biểu thức √12.", answer: "2√3", accept: ["2√3", "2*sqrt(3)"], hint: "√12 = √(4·3) = 2√3.", explain: "2√3." },
      { type: "mc", prompt: "Câu 4: Điều kiện xác định của √(x-5) là?", choices: ["x ≥ 5", "x > 5", "x ≤ 5", "x < 5"], correct: 0, hint: "Biểu thức dưới dấu căn ≥ 0.", explain: "x ≥ 5." },
    ],
  },
  {
    id: "g9-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Hàm số bậc nhất",
    summary: "Đề kiểm tra 45 phút chương Hàm số bậc nhất.",
    body: String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p>`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = 4x - 1 có hệ số góc là?", choices: ["4", "-1", "1", "-4"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "4." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -3x + 2 cắt trục Oy tại điểm?", choices: ["(0,2)", "(2,0)", "(0,-2)", "(-2,0)"], correct: 0, hint: "x=0 → y=2.", explain: "(0,2)." },
      { type: "text", prompt: "Tìm giao điểm của y=2x+1 và y=-x+4.", answer: "(1,3)", accept: ["(1,3)", "x=1,y=3"], hint: "2x+1=-x+4 → 3x=3 → x=1, y=3.", explain: "(1,3)." },
      { type: "mc", prompt: "Câu 4: Hai đường thẳng y=2x+3 và y=2x-1:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
    ],
  },
];

const G9_LESSONS = [
  {
    id: "c9-b27",
    num: 27,
    chapter: 9,
    title: "Góc nội tiếp",
    summary: "Góc nội tiếp nhìn cung từ rìa đường tròn, nên bằng nửa góc ở tâm nhìn cùng cung ấy.", spoken: "Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung. ∠nội tiếp = 1/2 ∠ở tâm.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Ta biết góc ở tâm \\(BOC\\) bằng số đo cung \\(BC\\). Còn góc \\(BAC\\) — đỉnh nằm trên đường tròn — liên hệ với cung ấy thế nào?</p>
      <div class="definition">
        <p><strong>Góc nội tiếp</strong> của đường tròn là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó. Cung nằm bên trong góc được gọi là <strong>cung bị chắn</strong>.</p>
      </div>
      <div class="definition">
        <p><strong>Định lí.</strong> Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của cung bị chắn:</p>
        \[
          \widehat{ACB} = \frac{1}{2} \operatorname{sd} \wideparen{AB}
        \]
        <p>(với cung \\(AB\\) không chứa \\(C\\)).</p>
      </div>
      
      <figure class="figure" data-animation="c9-b27-inscribed">
        <svg viewBox="0 0 360 210" role="img" aria-label="Góc nội tiếp BAC bằng nửa góc ở tâm BOC, cùng chắn cung BC" id="fig-c9-b27">
          <circle cx="180" cy="100" r="85" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="534" stroke-dashoffset="534"/>
          <circle cx="180" cy="100" r="3" fill="#DDDDDD"/>
          <text x="180" y="115" font-size="11" fill="#DDDDDD">O</text>
          <circle cx="100" cy="140" r="3" fill="#83C167" opacity="0"/>
          <text x="90" y="158" font-size="12" fill="#83C167" opacity="0">A</text>
          <circle cx="260" cy="140" r="3" fill="#58C4DD" opacity="0"/>
          <text x="268" y="158" font-size="12" fill="#58C4DD" opacity="0">B</text>
          <circle cx="180" cy="25" r="3" fill="#FC6255" opacity="0"/>
          <text x="180" y="18" font-size="12" fill="#FC6255" opacity="0">C</text>
          <path d="M100,140 L260,140 L180,25 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <path d="M180,100 L100,140" fill="none" stroke="#83C167" stroke-width="2"/>
          <path d="M180,100 L260,140" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <path d="M180,100 L180,25" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="165" y="65" font-size="11" fill="#9A72AC">\u0302ACB = 1/2 sd\u0302AB</text>
        </svg>
        <figcaption>Góc nội tiếp \\(\widehat{ACB}\\) bằng nửa số đo cung bị chắn \\(\wideparen{AB}\\).</figcaption>
      </figure>
      
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Góc ở tâm là "góc nhìn từ tâm", góc nội tiếp là "góc nhìn từ rìa". Vì vậy góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung.</p>
        <p>Ví dụ: Cung \\(AB\\) đo \\(120^\circ\\) thì góc ở tâm \\(AOB = 120^\circ\\), góc nội tiếp \\(ACB = 60^\circ\\).</p>
      </div>
      
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Nhầm góc nội tiếp với góc ở tâm: góc nội tiếp nhỏ hơn góc ở tâm cùng chắn cung.</li>
          <li>Quên điều kiện: góc nội tiếp phải có đỉnh trên đường tròn, không phải bên trong hay bên ngoài.</li>
          <li>Sai cung bị chắn: cung nằm bên trong góc, không phải cung chứa đỉnh.</li>
        </ul>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ.</strong> Trong đường tròn (O), cung \\(AB = 80^\circ\\). Góc ở tâm \\(AOB = 80^\circ\\), góc nội tiếp \\(ACB = 40^\circ\\).</p>
        <p>Góc \\(ADB = 40^\circ\\) vì cũng chắn cung \\(AB\\). Mọi góc nội tiếp cùng chắn một cung thì bằng nhau.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cho đường tròn (O, R), cung \\(BC = 100^\circ\\). Góc ở tâm \\(BOC = 100^\circ\\).</p>
        <p>Góc nội tiếp \\(BAC\\) chắn cung \\(BC\\) (không chứa \\(A\\)): \\(\widehat{BAC} = 50^\circ\\).</p>
        <p>Góc \\(BDC\\) cũng chắn cung \\(BC\\): \\(\widehat{BDC} = 50^\circ\\). Tất cả bằng nhau.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Cung \\(EF = 60^\circ\\) → góc ở tâm \\(EOF = 60^\circ\\) → góc nội tiếp \\(EGF = 30^\circ\\).</p>
        <p>Cung nửa đường tròn (\\(180^\circ\\)) → góc nội tiếp chắn cung này = \\(90^\circ\\). Đây là định lí: góc nội tiếp chắn nửa đường tròn là góc vuông.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác \\(ABC\\) nội tiếp đường tròn (O), \\(\widehat{A} = 60^\circ\\). Cung \\(BC = 120^\circ\\).</p>
        <p>Góc \\(\widehat{B} = 50^\circ\\) → cung \\(AC = 100^\circ\\). Góc \\(\widehat{C} = 70^\circ\\) → cung \\(AB = 140^\circ\\).</p>
        <p>Tổng cung: \\(120^\circ + 100^\circ + 140^\circ = 360^\circ\\). Kiểm tra lại.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Góc \\(\widehat{ADB}\\) không chắn cung \\(AB\\) nếu \\(D\\) nằm trên cung \\(AB\\). Phải xác định cung nào không chứa đỉnh.</p>
        <p>Đừng nhầm: góc ở ngoài đường tròn khác góc nội tiếp. Góc ở ngoài lớn hơn góc nội tiếp.</p>
      </div>
      
      <div class="memory"><p><strong>Nhìn lại.</strong> Góc nội tiếp = 1/2 cung bị chắn. Góc ở tâm = số đo cung. Cùng cung → góc bằng nhau. Nửa đường tròn → góc vuông.</p></div>
      
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>Cung \\(MN = 140^\circ\\). Góc nội tiếp chắn cung này bằng bao nhiêu? <em>— 70^\circ.</em></p>
        <p>Góc nội tiếp \\(PQR = 45^\circ\\). Cung bị chắn bằng bao nhiêu? <em>— 90^\circ.</em></p>
      </div>
      
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Đường tròn (O), cung \\(AB = 100^\circ\\). Góc \\(\widehat{ACB} = 50^\circ\\), góc \\(\widehat{ADB} = 50^\circ\\) (cùng chắn cung \\(AB\\)).</p>
        <p>Đường tròn (O), \\(\widehat{XYZ} = 35^\circ\\). Cung \\(XZ = 70^\circ\\). Góc ở tâm \\(XOZ = 70^\circ\\).</p>
      </div>
    `,
          exercises: [
        { type: "mc", prompt: "Góc nội tiếp bằng", choices: ["Nửa số đo cung bị chắn", "Số đo cung bị chắn", "Góc ở tâm", "Nửa góc ở tâm"], correct: 0, hint: "Định lí góc nội tiếp.", explain: "Nửa số đo cung bị chắn." },
        { type: "mc", prompt: "Hai góc nội tiếp bằng nhau thì", choices: ["Cùng chắn một cung", "Chắn hai cung bằng nhau", "Đều là góc vuông", "Không có mối quan hệ"], correct: 0, hint: "Định lí đảo.", explain: "Cùng chắn một cung hoặc chắn hai cung bằng nhau." },
        { type: "text", prompt: "Cung AB có số đo 80°. Góc nội tiếp chắn cung AB bằng", answer: "40°", accept: ["40°", "40"], hint: "Góc nội tiếp = 1/2 số đo cung.", explain: "40°." },
      { type: "mc", prompt: "Góc nội tiếp = 40°. Cung bị chắn bằng bao nhiêu?", choices: ["40°", "80°", "120°", "160°"], correct: 1, hint: "40° × 2 = 80°.", explain: "Cung bị chắn = 2 × góc nội tiếp = 80°." },
      { type: "num", prompt: "Đường tròn (O), góc ở tâm AOB = 100°. Góc nội tiếp ACB (cùng chắn cung AB) bằng bao nhiêu?", answer: 50, accept: ["50", "50°"], hint: "100° : 2 = 50°.", explain: "Góc nội tiếp = 1/2 góc ở tâm = 50°." },
      { type: "text", prompt: "Góc nội tiếp chắn nửa đường tròn là góc gì?", answer: "vuông", accept: ["vuông", "90°", "90"], hint: "Nửa đường tròn = 180°.", explain: "Góc nội tiếp = 1/2 × 180° = 90° (góc vuông)." },
    ],
  },
  {
    id: "c9-b28",
    num: 28,
    chapter: 9,
    title: "Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác",
    summary: "Trung trực cách đều hai đỉnh, nên giao ba trung trực là tâm đường tròn qua ba đỉnh. Phân giác cách đều hai cạnh.", spoken: "Giao ba trung trực là tâm đường tròn ngoại tiếp tam giác. Giao ba phân giác là tâm đường tròn nội tiếp.",
    body: String.raw`
      <div class="definition">
        <p><strong>Đường tròn ngoại tiếp</strong> một tam giác là đường tròn đi qua ba đỉnh của tam giác đó; khi đó ta nói tam giác nội tiếp đường tròn. Tâm của nó là giao điểm của ba đường trung trực của tam giác.</p>
        <p><strong>Đường tròn nội tiếp</strong> một tam giác là đường tròn tiếp xúc với cả ba cạnh của tam giác. Tâm của nó là giao điểm của ba đường phân giác trong của tam giác.</p>
      </div>
      
      <div class="definition">
        <p><strong>Đường tròn ngoại tiếp tam giác vuông</strong> có tâm là trung điểm của cạnh huyền và bán kính bằng một nửa cạnh huyền.</p>
        <p><strong>Đường tròn nội tiếp tam giác đều</strong> cạnh \\(a\\) có tâm là trọng tâm của tam giác và bán kính \\(r = \dfrac{\sqrt{3}}{6}a\\).</p>
      </div>
      
      <figure class="figure" data-animation="c9-b28-triangle">
        <svg viewBox="0 0 360 210" role="img" aria-label="Tam giác với đường tròn ngoại tiếp qua ba đỉnh và đường tròn nội tiếp chạm ba cạnh" id="fig-c9-b28">
          <circle cx="180" cy="105" r="88" fill="none" stroke="#58C4DD" stroke-width="2" stroke-dasharray="6 4" stroke-dashoffset="6" opacity="0"/>
          <circle cx="195" cy="80" r="39.35" fill="none" stroke="#FC6255" stroke-width="2" stroke-dasharray="6 4" stroke-dashoffset="6" opacity="0"/>
          <polygon points="165,192 150,22 256,61" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="250" stroke-dashoffset="250"/>
          <circle cx="165" cy="192" r="3" fill="#83C167" opacity="0"/>
          <text x="169" y="202" font-size="13" fill="#83C167" opacity="0">A</text>
          <circle cx="150" cy="22" r="3" fill="#83C167" opacity="0"/>
          <text x="146" y="36" font-size="13" fill="#83C167" opacity="0">B</text>
          <circle cx="256" cy="61" r="3" fill="#83C167" opacity="0"/>
          <text x="258" y="70" font-size="13" fill="#83C167" opacity="0">C</text>
          <circle cx="180" cy="105" r="2.5" fill="#9A72AC" opacity="0"/>
          <text x="184" y="112" font-size="13" fill="#9A72AC" opacity="0">O</text>
          <circle cx="195" cy="80" r="2.5" fill="#9A72AC" opacity="0"/>
          <text x="200" y="87" font-size="13" fill="#9A72AC" opacity="0">I</text>
          <line x1="180" y1="105" x2="165" y2="192" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <line x1="180" y1="105" x2="150" y2="22" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <line x1="180" y1="105" x2="256" y2="61" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <line x1="195" y1="80" x2="165" y2="192" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <line x1="195" y1="80" x2="150" y2="22" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <line x1="195" y1="80" x2="256" y2="61" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
        </svg>
        <figcaption>Đường tròn ngoại tiếp (xanh) đi qua ba đỉnh, tâm O giao ba đường trung trực. Đường tròn nội tiếp (đỏ) chạm ba cạnh, tâm I giao ba đường phân giác.</figcaption>
      </figure>
      
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đường trung trực cách đều hai đầu mút nên điểm giao ba đường trung trực cách đều ba đỉnh — đó là tâm đường tròn đi qua cả ba đỉnh. Đường phân giác cách đều hai cạnh nên giao ba phân giác cách đều ba cạnh — tâm đường tròn chạm cả ba cạnh. Với tam giác vuông, góc nội tiếp chắn nửa đường tròn là góc vuông (Bài 27!) nên đường tròn đường kính huyền đi qua đỉnh vuông.</p>
      </div>
      
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm tâm ngoại tiếp (giao <em>đường trung trực</em>) với tâm nội tiếp (giao <em>đường phân giác</em>).</li>
          <li>Với tam giác vuông, quên công thức nhanh \\(R = \dfrac{\text{cạnh huyền}}{2}\\) và đi tính vòng vo.</li>
          <li>Nhầm \\(r = \dfrac{\sqrt{3}}{6}a\\) (nội tiếp) với \\(R = \dfrac{a}{\sqrt{3}}\\) (ngoại tiếp) của tam giác đều.</li>
        </ul>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ.</strong> Tam giác \\(ABC\\) có ba đường trung trực cắt nhau tại \\(O\\). Khi đó \\(OA = OB = OC\\), nên \\(A, B, C\\) cùng nằm trên đường tròn (O).</p>
        <p> Tam giác \\(MNP\\) có ba đường phân giác cắt nhau tại \\(I\\). Khi đó \\(I\\) cách đều ba cạnh \\(MN, NP, PM\\), nên đường tròn (I, r) tiếp xúc với cả ba cạnh.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tam giác vuông \\(ABC\\) tại \\(A\\), cạnh huyền \\(BC = 10\\). Đường tròn ngoại tiếp có tâm là trung điểm \\(O\\) của \\(BC\\), bán kính \\(R = 5\\).</p>
        <p> Tam giác đều \\(DEF\\) cạnh \\(a = 6\\). Bán kính đường tròn nội tiếp \\(r = \dfrac{\sqrt{3}}{6} \cdot 6 = \sqrt{3} \approx 1.732\\). Bán kính ngoại tiếp \\(R = \dfrac{6}{\sqrt{3}} = 2\sqrt{3} \approx 3.464\\).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác \\(XYZ\\) vuông tại \\(Z\\), \\(XY = 8\\). \\(R = 4\\), tâm là trung điểm \\(XY\\).</p>
        <p> Tam giác đều \\(PQR\\) cạnh \\(4\\). \\(r = \dfrac{\sqrt{3}}{6} \cdot 4 = \dfrac{2\sqrt{3}}{3} \approx 1.155\\).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác \\(ABC\\) có \\(AB = 5, BC = 6, CA = 7\\). Tìm bán kính đường tròn nội tiếp.</p>
        <p>Nửa chu vi \\(p = \dfrac{5+6+7}{2} = 9\\). Diện tích \\(S = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{9 \cdot 4 \cdot 3 \cdot 2} = \sqrt{216} = 6\sqrt{6}\\).</p>
        <p>Bán kính \\(r = \dfrac{S}{p} = \dfrac{6\sqrt{6}}{9} = \dfrac{2\sqrt{6}}{3} \approx 1.633\\).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác \\(ABC\\) cân tại \\(A\\), \\(AB = AC = 5, BC = 6\\). Đừng nhầm tâm nội tiếp với tâm ngoại tiếp.</p>
        <p>Đường cao \\(AH = 4\\) (vì \\(3-4-5\\)). Tâm nội tiếp nằm trên \\(AH\\) nhưng không phải trung điểm.</p>
        <p>Chu vi \\(p = 8\\), diện tích \\(S = 12\\), \\(r = S/p = 1.5\\). Tâm nội tiếp cách \\(A\\) khoảng \\(4 - 1.5 = 2.5\\).</p>
      </div>
      
      <div class="memory"><p><strong>Nhìn lại.</strong> Ngoại tiếp: giao trung trực, cách đều ba đỉnh. Nội tiếp: giao phân giác, cách đều ba cạnh. Vuông: tâm là trung điểm huyền. Đều: \\(r = \dfrac{\sqrt{3}}{6}a, R = \dfrac{a}{\sqrt{3}}\\).</p></div>
      
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p> Tam giác vuông có cạnh huyền 13. Bán kính đường tròn ngoại tiếp bằng bao nhiêu? <em>— 6.5.</em></p>
        <p> Tam giác đều cạnh 6. Bán kính đường tròn nội tiếp bằng bao nhiêu? <em>— \\(\sqrt{3} \approx 1.732\\).</em></p>
      </div>
      
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Tam giác \\(MNP\\) vuông tại \\(M\\), \\(NP = 15\\). \\(R = 7.5\\).</p>
        <p> Tam giác đều \\(ABC\\) cạnh \\(8\\). \\(r = \dfrac{4\sqrt{3}}{3} \approx 2.309\\), \\(R = \dfrac{8}{\sqrt{3}} \approx 4.619\\).</p>
      </div>
    `,
          exercises: [
        { type: "mc", prompt: "Góc tạo bởi tia tiếp tuyến và dây cung bằng", choices: ["Nửa số đo cung bị chắn", "Số đo cung bị chắn", "Góc nội tiếp", "Nửa góc ở tâm"], correct: 0, hint: "Định lí góc giữa tiếp tuyến và dây.", explain: "Nửa số đo cung bị chắn." },
        { type: "mc", prompt: "Góc tạo bởi tiếp tuyến và dây cung chắn cung 100° thì bằng", choices: ["50°", "100°", "80°", "20°"], correct: 0, hint: "100°/2 = 50°.", explain: "50°." },
        { type: "text", prompt: "Đường tròn (O), tiếp tuyến At, dây AB. Góc tAB = 35°. Số đo cung AB =", answer: "70°", accept: ["70°", "70"], hint: "2×35° = 70°.", explain: "70°." },
      { type: "mc", prompt: "Tam giác đều cạnh a. Bán kính đường tròn nội tiếp là:", choices: ["a/2", "a/√3", "(√3/6)a", "(√3/3)a"], correct: 2, hint: "r = (√3/6)a.", explain: "r = (√3/6)a." },
      { type: "num", prompt: "Tam giác ABC vuông tại A, AB=3, AC=4. Bán kính đường tròn ngoại tiếp bằng bao nhiêu?", answer: 2.5, accept: ["2.5", "5/2"], hint: "BC = 5 (3-4-5), R = BC/2.", explain: "BC = √(9+16) = 5, R = 5/2 = 2.5." },
      { type: "text", prompt: "Tâm đường tròn nội tiếp tam giác là giao điểm của ba đường gì?", answer: "phân giác", accept: ["phân giác", "phân giác trong"], hint: "Cách đều hai cạnh.", explain: "Tâm nội tiếp là giao ba đường phân giác trong." },
    ],
  },
  {
    id: "c9-b29",
    num: 29,
    chapter: 9,
    title: "Tứ giác nội tiếp",
    summary: "Tứ giác nội tiếp có bốn đỉnh nằm trên một đường tròn. Điều kiện: tổng hai góc đối bằng 180°.",
    body: String.raw`
      <div class="definition">
        <p><strong>Tứ giác nội tiếp</strong> là tứ giác có bốn đỉnh cùng nằm trên một đường tròn. Khi đó ta nói đường tròn đó là <strong>đường tròn ngoại tiếp</strong> của tứ giác.</p>
      </div>
      
      <div class="definition">
        <p><strong>Dấu hiệu nhận biết.</strong> Một tứ giác nội tiếp khi và chỉ khi tổng hai góc đối bằng \\(180^\circ\\).</p>
        <p>Nếu \\(\widehat{A} + \widehat{C} = 180^\circ\\) hoặc \\(\widehat{B} + \widehat{D} = 180^\circ\\) thì tứ giác \\(ABCD\\) nội tiếp được.</p>
      </div>
      
      <figure class="figure" data-animation="c9-b29-cyclic">
        <svg viewBox="0 0 360 210" role="img" aria-label="Tứ giác nội tiếp với tổng hai góc đối bằng 180 độ" id="fig-c9-b29">
          <circle cx="180" cy="100" r="80" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="502" stroke-dashoffset="502"/>
          <polygon points="100,160 260,140 260,40 100,60" fill="none" stroke="#9A72AC" stroke-width="2" stroke-dasharray="400" stroke-dashoffset="400"/>
          <circle cx="100" cy="160" r="3" fill="#83C167" opacity="0"/>
          <text x="90" y="178" font-size="12" fill="#83C167" opacity="0">A</text>
          <circle cx="260" cy="140" r="3" fill="#58C4DD" opacity="0"/>
          <text x="268" y="158" font-size="12" fill="#58C4DD" opacity="0">B</text>
          <circle cx="260" cy="40" r="3" fill="#FC6255" opacity="0"/>
          <text x="268" y="34" font-size="12" fill="#FC6255" opacity="0">C</text>
          <circle cx="100" cy="60" r="3" fill="#9A72AC" opacity="0"/>
          <text x="88" y="78" font-size="12" fill="#9A72AC" opacity="0">D</text>
          <text x="120" y="120" font-size="11" fill="#83C167" opacity="0">\u0302A + \u0302C = 180^\circ</text>
          <text x="200" y="100" font-size="11" fill="#58C4DD" opacity="0">\u0302B + \u0302D = 180^\circ</text>
        </svg>
        <figcaption>Tứ giác \\(ABCD\\) nội tiếp đường tròn: \\(\widehat{A} + \widehat{C} = \widehat{B} + \widehat{D} = 180^\circ\\).</figcaption>
      </figure>
      
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Tứ giác nội tiếp = "nằm trong đường tròn". Điều kiện dễ nhớ: tổng hai góc đối bằng 180°. Điều này xuất phát từ góc nội tiếp: mỗi góc bằng 1/2 cung bị chắn, và hai góc đối chắn hai cung cộng lại bằng cả đường tròn (360°).</p>
        <p>Ví dụ: hình chữ nhật, hình vuông, hình thang cân đều nội tiếp được.</p>
      </div>
      
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm với tứ giác ngoại tiếp (có đường tròn nội tiếp). Tứ giác ngoại tiếp có tổng hai cạnh đối bằng nhau.</li>
          <li>Quên điều kiện "cả bốn đỉnh" — chỉ ba đỉnh nằm trên đường tròn thì chưa đủ.</li>
          <li>Sai dấu: \\(\widehat{A} + \widehat{C} = 180^\circ\\) là điều kiện cần và đủ, không phải chỉ đủ.</li>
        </ul>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ.</strong> Hình chữ nhật \\(ABCD\\) luôn nội tiếp được vì \\(\widehat{A} = \widehat{B} = \widehat{C} = \widehat{D} = 90^\circ\\), nên \\(\widehat{A} + \widehat{C} = 180^\circ\\).</p>
        <p>Tâm đường tròn ngoại tiếp là giao điểm hai đường chéo (trung điểm mỗi đường chéo).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tứ giác \\(ABCD\\) có \\(\widehat{A} = 100^\circ, \widehat{C} = 80^\circ\\). \\(\widehat{A} + \widehat{C} = 180^\circ\\) → tứ giác nội tiếp.</p>
        <p>Nếu \\(\widehat{B} = 110^\circ\\) thì \\(\widehat{D} = 70^\circ\\) (vì \\(\widehat{B} + \widehat{D} = 180^\circ\\)).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình vuông luôn nội tiếp được. Hình thang cân luôn nội tiếp được.</p>
        <p>Tứ giác \\(MNPQ\\) có \\(\widehat{M} = 75^\circ, \widehat{O} = 105^\circ\\) (hai góc đối). \\(75^\circ + 105^\circ = 180^\circ\\) → nội tiếp.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác \\(ABC\\) nội tiếp (O), điểm \\(D\\) trên cung \\(BC\\) không chứa \\(A\\). Tứ giác \\(ABDC\\) nội tiếp vì \\(\widehat{A} + \widehat{D} = 180^\circ\\).</p>
        <p>Điều này dùng trong nhiều bài toán chứng minh tứ giác nội tiếp bằng cách tìm góc bằng nhau hoặc bù nhau.</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tứ giác \\(ABCD\\) có \\(\widehat{A} = 120^\circ, \widehat{C} = 60^\circ\\), nhưng \\(\widehat{B} = 100^\circ, \widehat{D} = 80^\circ\\). \\(120^\circ + 60^\circ = 180^\circ\\) → nội tiếp. Kiểm tra cả hai cặp.</p>
        <p>Đừng chỉ kiểm tra một cặp góc. Nhưng nếu một cặp đã bằng 180° thì cặp kia tự động bằng 180° (tổng bốn góc = 360°).</p>
      </div>
      
      <div class="memory"><p><strong>Nhìn lại.</strong> Tứ giác nội tiếp ⇔ tổng hai góc đối = 180°. Hình chữ nhật, hình vuông, hình thang cân luôn nội tiếp được.</p></div>
      
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tứ giác có \\(\widehat{A} = 95^\circ, \widehat{C} = 85^\circ\\). Nó có nội tiếp được không? <em>— Có, vì 95° + 85° = 180°.</em></p>
        <p>Hình thang cân có đáy lớn 100°. Các góc còn lại bằng bao nhiêu? <em>— 80°, 100°, 80°.</em></p>
      </div>
      
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Tứ giác \\(ABCD\\) có \\(\widehat{B} = 130^\circ, \widehat{D} = 50^\circ\\). \\(130^\circ + 50^\circ = 180^\circ\\) → nội tiếp.</p>
        <p> Hình bình hành \\(MNPQ\\) có \\(\widehat{M} = 70^\circ\\). \\(\widehat{Q} = 70^\circ\\), \\(\widehat{N} = \widehat{P} = 110^\circ\\). \\(70^\circ + 110^\circ = 180^\circ\\) → nội tiếp khi và chỉ khi là hình chữ nhật (tức \\(\widehat{M} = 90^\circ\\)).</p>
      </div>
    `,
          exercises: [
        { type: "mc", prompt: "Góc có đỉnh ở bên trong đường tròn bằng", choices: ["Trung bình cộng số đo hai cung bị chắn", "Trung bình hiệu hai cung bị chắn", "Số đo cung lớn", "Nửa số đo cung nhỏ"], correct: 0, hint: "Định lí góc trong đường tròn.", explain: "Trung bình cộng hai cung." },
        { type: "mc", prompt: "Góc có đỉnh ở bên ngoài đường tròn bằng", choices: ["Trung bình hiệu hai cung bị chắn", "Trung bình cộng hai cung", "Số đo cung lớn", "Nửa số đo cung nhỏ"], correct: 0, hint: "Định lí góc ngoài đường tròn.", explain: "Trung bình hiệu hai cung." },
        { type: "text", prompt: "Hai cung bị chắn có số đo 120° và 60°. Góc có đỉnh trong đường tròn bằng", answer: "90°", accept: ["90°", "90"], hint: "(120°+60°)/2 = 90°.", explain: "90°." },
      { type: "num", prompt: "Tứ giác nội tiếp có \\(\widehat{A} = 110^\circ\\). Góc đối \\(\widehat{C} = ?\\)", answer: 70, accept: ["70", "70°"], hint: "180° - 110° = 70°.", explain: "\\(\widehat{C} = 180^\circ - 110^\circ = 70^\circ\\)." },
      { type: "text", prompt: "Hình thang cân có đáy lớn bằng 120°. Góc kề đáy lớn bằng bao nhiêu?", answer: 60, accept: ["60", "60°"], hint: "Hai góc kề cạnh bên bù nhau.", explain: "Góc kề = 180° - 120° = 60°." },
      { type: "mc", prompt: "Hình bình hành nội tiếp được khi nào?", choices: ["Luôn luôn", "Không bao giờ", "Khi là hình chữ nhật", "Khi có một góc vuông"], correct: 2, hint: "Tổng hai góc kề = 180°, cần cả hai góc đối = 90°.", explain: "Hình bình hành nội tiếp ⇔ là hình chữ nhật." },
    ],
  },
  {
    id: "c9-b30",
    num: 30,
    chapter: 9,
    title: "Đa giác đều",
    summary: "Đa giác đều có tất cả cạnh bằng nhau và tất cả góc bằng nhau. Mọi đa giác đều nội tiếp được.",
    body: String.raw`
      <div class="definition">
        <p><strong>Đa giác đều</strong> là đa giác lồi có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.</p>
        <p>Ký hiệu: \\(n\\)-giác đều có \\(n\\) cạnh, \\(n\\) đỉnh, \\(n\\) góc.</p>
      </div>
      
      <div class="definition">
        <p><strong>Công thức.</strong></p>
        <ul>
          <li>Tổng các góc trong: \\((n - 2) \cdot 180^\circ\\)</li>
          <li>Mỗi góc trong: \\(\dfrac{(n - 2) \cdot 180^\circ}{n}\\)</li>
          <li>Góc ở tâm (đa giác nội tiếp): \\(\dfrac{360^\circ}{n}\\)</li>
          <li>Số đường chéo: \\(\dfrac{n(n - 3)}{2}\\)</li>
        </ul>
      </div>
      
      <figure class="figure" data-animation="c9-b30-regular">
        <svg viewBox="0 0 360 210" role="img" aria-label="Đa giác đều với tâm và các góc bằng nhau" id="fig-c9-b30">
          <circle cx="180" cy="100" r="80" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="502" stroke-dashoffset="502"/>
          <polygon points="180,20 260,60 260,140 180,180 100,140 100,60" fill="none" stroke="#9A72AC" stroke-width="2" stroke-dasharray="480" stroke-dashoffset="480"/>
          <circle cx="180" cy="100" r="3" fill="#DDDDDD"/>
          <text x="180" y="92" font-size="11" fill="#DDDDDD">O</text>
          <line x1="180" y1="100" x2="180" y2="20" stroke="#83C167" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <line x1="180" y1="100" x2="260" y2="60" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="4 3" stroke-dashoffset="4" opacity="0"/>
          <text x="185" y="60" font-size="10" fill="#9A72AC" opacity="0">Góc ở tâm = 360°/6 = 60°</text>
          <text x="180" y="135" font-size="11" fill="#83C167" opacity="0">\u0302Mỗi góc trong = (6-2)·180°/6 = 120°</text>
        </svg>
        <figcaption>Lục giác đều với tâm \\(O\\): góc ở tâm = \\(60^\circ\\), mỗi góc trong = \\(120^\circ\\).</figcaption>
      </figure>
      
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đa giác đều = "đều cả cạnh và góc". Mọi đa giác đều đều nội tiếp được (và ngoại tiếp được). Tam giác đều, hình vuông, lục giác đều là các đa giác đều thường gặp.</p>
        <p>Ví dụ: lục giác đều chia đường tròn thành 6 phần bằng nhau, mỗi cung \\(60^\circ\\).</p>
      </div>
      
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm đa giác đều với đa giác cân: đa giác đều phải đều cả cạnh VÀ góc.</li>
          <li>Sai công thức góc trong: \\(\dfrac{(n-2) \cdot 180^\circ}{n}\\), không phải \\((n-2) \cdot 180^\circ\\).</li>
          <li>Sai góc ở tâm: \\(\dfrac{360^\circ}{n}\\), không phải \\(\dfrac{180^\circ}{n}\\).</li>
        </ul>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ.</strong> Lục giác đều \\(ABCDEF\\) nội tiếp đường tròn (O).</p>
        <p>Mỗi góc trong = \\(\dfrac{(6-2) \cdot 180^\circ}{6} = 120^\circ\\). Góc ở tâm \\(AOB = \dfrac{360^\circ}{6} = 60^\circ\\).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Ngũ giác đều (5 cạnh).</p>
        <p>Tổng góc trong: \\((5-2) \cdot 180^\circ = 540^\circ\\). Mỗi góc: \\(540^\circ : 5 = 108^\circ\\).</p>
        <p>Góc ở tâm: \\(360^\circ : 5 = 72^\circ\\). Số đường chéo: \\(\dfrac{5(5-3)}{2} = 5\\).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác đều: mỗi góc \\(60^\circ\\), góc ở tâm \\(120^\circ\\).</p>
        <p>Hình vuông: mỗi góc \\(90^\circ\\), góc ở tâm \\(90^\circ\\).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Đa giác đều có mỗi góc trong bằng \\(150^\circ\\). Tìm số cạnh.</p>
        <p>\\(\dfrac{(n-2) \cdot 180^\circ}{n} = 150^\circ\\) → \\((n-2) \cdot 180 = 150n\\) → \\(180n - 360 = 150n\\) → \\(30n = 360\\) → \\(n = 12\\).</p>
        <p>Đây là thập lục giác đều (12 cạnh).</p>
      </div>
      
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tứ giác có bốn cạnh bằng nhau nhưng không phải hình vuông (thoi). Đây KHÔNG phải đa giác đều vì góc không bằng nhau.</p>
        <p>Đa giác đều yêu cầu CẢ cạnh VÀ góc đều. Thoi chỉ có cạnh đều, không đều góc.</p>
      </div>
      
      <div class="memory"><p><strong>Nhìn lại.</strong> Đa giác đều n cạnh: góc trong = \\(\dfrac{(n-2) \cdot 180^\circ}{n}\\), góc ở tâm = \\(\dfrac{360^\circ}{n}\\). Tam giác đều, hình vuông, lục giác đều là các đa giác đều thường gặp.</p></div>
      
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình vuông có mỗi góc bằng bao nhiêu? <em>— 90°.</em></p>
        <p>Ngũ giác đều có mỗi góc bằng bao nhiêu? <em>— 108°.</em></p>
      </div>
      
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Lục giác đều cạnh \\(a\\). Góc trong = 120°, góc ở tâm = 60°.</p>
        <p> Đa giác đều có góc trong 144°. \\(\dfrac{(n-2) \cdot 180}{n} = 144\\) → \\(n = 10\\) (mười giác đều).</p>
      </div>
    `,
          exercises: [
        { type: "mc", prompt: "Tứ giác nội tiếp đường tròn là", choices: ["Có bốn đỉnh nằm trên một đường tròn", "Có bốn cạnh bằng nhau", "Có hai cặp cạnh song song", "Có tất cả góc bằng 90°"], correct: 0, hint: "Định nghĩa tứ giác nội tiếp.", explain: "Bốn đỉnh trên một đường tròn." },
        { type: "mc", prompt: "Tứ giác nào sau đây luôn nội tiếp?", choices: ["Hình chữ nhật", "Hình bình hành", "Hình thang", "Tứ giác thường"], correct: 0, hint: "Hình chữ nhật có 4 góc vuông.", explain: "Hình chữ nhật." },
        { type: "text", prompt: "Tứ giác ABCD nội tiếp (O). ∠A = 110°. ∠C =", answer: "70°", accept: ["70°", "70"], hint: "∠A + ∠C = 180°.", explain: "70°." },
      { type: "mc", prompt: "Đa giác đều có góc ở tâm bằng 30°. Nó có bao nhiêu cạnh?", choices: ["10", "12", "15", "18"], correct: 2, hint: "360 / 30 = 12.", explain: "n = 360° / 30° = 12." },
      { type: "num", prompt: "Ngũ giác đều có mỗi góc trong bằng bao nhiêu độ?", answer: 108, accept: ["108", "108°"], hint: "(5-2)·180 / 5 = 108.", explain: "Mỗi góc trong = 108°." },
      { type: "mc", prompt: "Tứ giác có bốn cạnh bằng nhau nhưng không vuông là:", choices: ["Đa giác đều", "Hình thoi", "Hình vuông", "Cả B và C"], correct: 1, hint: "Hình thoi có cạnh đều nhưng không đều góc.", explain: "Hình thoi không phải đa giác đều vì góc không bằng nhau." },
    ],
  },

  {
    id: "c9-ch1-quiz",
    num: 99,
    chapter: 1,
    title: "Chương 1: Căn bậc hai. Căn bậc ba - Trắc nghiệm",
    summary: "Luyện tập căn bậc hai và căn bậc ba.", youtube: "dQw4w9WgXcQ",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về căn bậc hai và căn bậc ba.</p>`,
    exercises: [
      { type: "mc", prompt: "Câu 1: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "√16 = 4." },
      { type: "mc", prompt: "Câu 2: √(25/9) =", choices: ["5/3", "-5/3", "±5/3", "25/3"], correct: 0, hint: "√(a/b) = √a/√b.", explain: "√(25/9) = 5/3." },
      { type: "mc", prompt: "Câu 3: √(16·9) =", choices: ["12", "24", "36", "48"], correct: 0, hint: "√(ab) = √a·√b = 4·3 = 12.", explain: "12." },
      { type: "mc", prompt: "Câu 4: √(25-16) =", choices: ["3", "9", "√9", "√41"], correct: 0, hint: "25-16=9, √9=3.", explain: "3." },
      { type: "mc", prompt: "Câu 5: 2√3 + √3 =", choices: ["3√3", "2√6", "3√6", "√9"], correct: 0, hint: "2√3 + 1√3 = 3√3.", explain: "3√3." },
      { type: "mc", prompt: "Câu 6: ∛8 =", choices: ["2", "-2", "±2", "4"], correct: 0, hint: "2³ = 8.", explain: "∛8 = 2." },
      { type: "mc", prompt: "Câu 7: Rút gọn √(12) =", choices: ["2√3", "3√2", "4√3", "6"], correct: 0, hint: "12 = 4·3, √(4·3) = 2√3.", explain: "2√3." },
      { type: "mc", prompt: "Câu 8: Điều kiện xác định của √(x-3) là?", choices: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"], correct: 0, hint: "Biểu thức dưới dấu căn ≥ 0.", explain: "x ≥ 3." },
    ],
  },
  {
    id: "c9-ch2-quiz",
    num: 100,
    chapter: 2,
    title: "Chương 2: Hàm số bậc nhất - Trắc nghiệm",
    summary: "Luyện tập hàm số bậc nhất y = ax + b.", youtube: "dQw4w9WgXcQ",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về hàm số bậc nhất.</p>`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = 3x - 2 có hệ số góc là?", choices: ["3", "-2", "2", "-3"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "3." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -2x + 1 cắt trục Oy tại điểm?", choices: ["(0,1)", "(1,0)", "(0,-1)", "(-1,0)"], correct: 0, hint: "x=0 → y=1.", explain: "(0,1)." },
      { type: "mc", prompt: "Câu 3: Hai đường thẳng y = 2x + 1 và y = 2x - 3:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
      { type: "mc", prompt: "Câu 4: Hàm số y = -x + 5 là:", choices: ["Nghịch biến", "Đồng biến", "Không đổi", "Không xác định"], correct: 0, hint: "a = -1 < 0 nên nghịch biến.", explain: "Nghịch biến." },
      { type: "mc", prompt: "Câu 5: Đường thẳng y = ax + 3 đi qua (1,5) thì a =", choices: ["2", "3", "4", "5"], correct: 0, hint: "5 = a·1 + 3 → a = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 6: Đồ thị hàm số y = 4 là:", choices: ["Đường thẳng ngang", "Đường thẳng dọc", "Đường xiên", "Parabol"], correct: 0, hint: "y = 4 là đường thẳng y = 0x + 4.", explain: "Đường thẳng ngang." },
      { type: "mc", prompt: "Câu 7: Hệ số góc của đường thẳng qua (0,2) và (2,6) là?", choices: ["2", "3", "4", "1"], correct: 0, hint: "k = (6-2)/(2-0) = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 8: Hai đường thẳng vuông góc khi:", choices: ["k₁·k₂ = -1", "k₁·k₂ = 1", "k₁ = k₂", "k₁ + k₂ = 0"], correct: 0, hint: "Tích hệ số góc = -1.", explain: "k₁·k₂ = -1." },
    ],
  },

  {
    id: "g9-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Căn bậc hai",
    summary: "Đề kiểm tra 45 phút chương Căn bậc hai.",
    body: String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p>`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "4." },
      { type: "mc", prompt: "Câu 2: √(25/9) =", choices: ["5/3", "-5/3", "±5/3", "25/3"], correct: 0, hint: "√(25/9) = 5/3.", explain: "5/3." },
      { type: "text", prompt: "Rút gọn biểu thức √12.", answer: "2√3", accept: ["2√3", "2*sqrt(3)"], hint: "√12 = √(4·3) = 2√3.", explain: "2√3." },
      { type: "mc", prompt: "Câu 4: Điều kiện xác định của √(x-5) là?", choices: ["x ≥ 5", "x > 5", "x ≤ 5", "x < 5"], correct: 0, hint: "Biểu thức dưới dấu căn ≥ 0.", explain: "x ≥ 5." },
    ],
  },
  {
    id: "g9-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Hàm số bậc nhất",
    summary: "Đề kiểm tra 45 phút chương Hàm số bậc nhất.",
    body: String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p>`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = 4x - 1 có hệ số góc là?", choices: ["4", "-1", "1", "-4"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "4." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -3x + 2 cắt trục Oy tại điểm?", choices: ["(0,2)", "(2,0)", "(0,-2)", "(-2,0)"], correct: 0, hint: "x=0 → y=2.", explain: "(0,2)." },
      { type: "text", prompt: "Tìm giao điểm của y=2x+1 và y=-x+4.", answer: "(1,3)", accept: ["(1,3)", "x=1,y=3"], hint: "2x+1=-x+4 → 3x=3 → x=1, y=3.", explain: "(1,3)." },
      { type: "mc", prompt: "Câu 4: Hai đường thẳng y=2x+3 và y=2x-1:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
    ],
  },
];
