// Bài học bám sát SGK Toán 9 – Kết nối tri thức với cuộc sống (Tập 1).
// Chương I–V, Bài 1–17, theo mục lục sách.
// Mỗi bài gồm: tình huống mở đầu → khái niệm (ngôn ngữ SGK) → hiểu nhanh →
// ví dụ mẫu → sai lầm thường gặp → luyện tập có gợi ý.
const CHAPTERS = [
  { id: 1, title: "Phương trình và hệ hai phương trình bậc nhất hai ẩn" },
  { id: 2, title: "Phương trình và bất phương trình bậc nhất một ẩn" },
  { id: 3, title: "Căn bậc hai và căn bậc ba" },
  { id: 4, title: "Hệ thức lượng trong tam giác vuông" },
  { id: 5, title: "Đường tròn" },
];

const LESSONS = [
  // ============ CHƯƠNG I ============
  {
    id: "c1-b1",
    num: 1,
    chapter: 1,
    title: "Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
    summary: "Phương trình ax + by = c, nghiệm (x; y), và hệ hai phương trình cùng lúc.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Quýt, cam mười bảy quả tươi, dem chia cho một trăm người cùng vui…
      Trong bài toán cổ này có <em>hai</em> điều chưa biết cùng lúc: số quýt và số cam. Một ẩn \(x\) không đủ nữa — ta cần <strong>hai ẩn</strong> \(x\) và \(y\).</p>
      <div class="definition">
        <p><strong>Phương trình bậc nhất hai ẩn</strong> \(x\) và \(y\) là hệ thức dạng</p>
        \[
          ax + by = c,
        \]
        <p>trong đó \(a\), \(b\), \(c\) là các số đã biết \((a \neq 0 \text{ hoặc } b \neq 0)\). Nếu tại \(x = x_0,\ y = y_0\) ta có \(ax_0 + by_0 = c\) là một khẳng định đúng thì cặp số \((x_0;\ y_0)\) được gọi là một <em>nghiệm</em> của phương trình.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Phương trình bậc nhất hai ẩn chỉ là <em>một điều kiện</em> đặt lên hai con số. Ví dụ \(x + 2y = 3\) nói: "gấp đôi \(y\) rồi cộng \(x\), phải ra 3". Với vô số cặp số thoả mãn, mỗi cặp là một điểm — nên toàn bộ nghiệm vẽ ra là <strong>một đường thẳng</strong> trong mặt phẳng toạ độ.</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 320 200" role="img" aria-label="Tập nghiệm của phương trình bậc nhất hai ẩn là một đường thẳng">
          <line x1="30" y1="165" x2="305" y2="165" stroke="#BBBBBB" stroke-width="1.5"/>
          <line x1="50" y1="18" x2="50" y2="180" stroke="#BBBBBB" stroke-width="1.5"/>
          <line x1="62" y1="42" x2="295" y2="178" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="170" cy="110" r="4.5" fill="#FC6255"/>
          <text x="180" y="106" font-size="13">(3; 2)</text>
          <circle cx="236" cy="146" r="4.5" fill="#58C4DD"/>
          <text x="243" y="142" font-size="13">(6; 0.5)</text>
          <text x="293" y="180" font-size="12">x</text>
          <text x="36" y="28" font-size="12">y</text>
        </svg>
        <figcaption>Mỗi nghiệm là một điểm; mọi nghiệm của \(x + 2y = 3\) nằm trên cùng một đường thẳng.</figcaption>
      </figure>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Trong các hệ thức \(4x + 3y = 5\), \(0x + y = -1\), \(0x + 0y = 3\): hai hệ thức đầu là phương trình bậc nhất hai ẩn; hệ thức \(0x + 0y = 3\) có \(a = b = 0\) nên <strong>không</strong> phải. Cặp \((2;\ -1)\) là nghiệm của \(4x + 3y = 5\) vì \(4 \cdot 2 + 3 \cdot (-1) = 5\); cặp \((1;\ 0)\) không phải vì \(4 \cdot 1 + 3 \cdot 0 = 4 \neq 5\).</p>
      </div>
      <div class="definition">
        <p>1) Một cặp gồm hai phương trình bậc nhất hai ẩn \(ax + by = c\) và \(a'x + b'y = c'\) được gọi là một <strong>hệ hai phương trình bậc nhất hai ẩn</strong>, thường viết</p>
        \[
          \begin{cases} ax + by = c \\ a'x + b'y = c'. \end{cases}
        \]
        <p>2) Mỗi cặp số \((x_0;\ y_0)\) được gọi là một <strong>nghiệm</strong> của hệ nếu nó đồng thời là nghiệm của cả hai phương trình (nghiệm chung của hai phương trình).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Một phương trình là một điều kiện; hệ hai phương trình là <em>hai điều kiện cùng lúc</em>. Cặp số muốn "đậu" thì phải qua cả hai vòng thiệt. Về hình học: nghiệm của hệ là <strong>giao điểm</strong> của hai đường thẳng.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nghiệm là <em>cặp số</em> \((x;\ y)\), không phải hai số rời rạc — kết luận bài giải luôn viết \((x;\ y) = (...;\ ...)\).</li>
          <li>\(0x + 0y = c\) không phải phương trình bậc nhất hai ẩn, dù "trông giống".</li>
          <li>Một phương trình bậc nhất hai ẩn luôn có <strong>vô số nghiệm</strong> — đừng tìm "một nghiệm duy nhất".</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Hệ thức nào là phương trình bậc nhất hai ẩn?",
        choices: [String.raw`\(3x + 2y = 5\)`, String.raw`\(x^2 + y = 3\)`, String.raw`\(0x + 0y = 1\)`, String.raw`\(xy = 6\)`],
        correct: 0,
        hint: "Phải có đúng dạng ax + by = c với a ≠ 0 hoặc b ≠ 0.",
        explain: "Phải có dạng ax + by = c với a ≠ 0 hoặc b ≠ 0. Các hệ thức còn lại có ẩn bậc hai, hai ẩn đều bằng 0, hoặc ẩn tích.",
      },
      {
        type: "num",
        prompt: String.raw`Biết \((2;\ y_0)\) là nghiệm của \(3x + 2y = 10\). Giá trị \(y_0\) là bao nhiêu?`,
        answer: 2,
        hint: "Thế x = 2 vào rồi giải phương trình một ẩn theo y.",
        explain: "3·2 + 2y = 10 ⇒ 2y = 4 ⇒ y = 2.",
      },
      {
        type: "mc",
        prompt: "Trên mặt phẳng toạ độ, tập nghiệm của phương trình bậc nhất hai ẩn là:",
        choices: ["Một đường tròn", "Một đường thẳng", "Một nửa mặt phẳng", "Một điểm"],
        correct: 1,
        hint: "Mỗi nghiệm (x; y) là một điểm — các điểm ấy nằm ở đâu?",
        explain: "Tập các điểm thoả mãn ax + by = c là đường thẳng ax + by = c.",
      },
    ],
  },
  {
    id: "c1-b2",
    num: 2,
    chapter: 1,
    title: "Giải hệ hai phương trình bậc nhất hai ẩn",
    summary: "Phương pháp thế, phương pháp cộng đại số; hệ có thể có một, vô số hoặc không có nghiệm.",
    body: String.raw`
      <p>Mục tiêu của bài này: biến hệ <strong>hai ẩn</strong> về phương trình <strong>một ẩn</strong> (đã biết giải từ lớp 8). Có hai cách "biến" — thế và cộng đại số.</p>
      <div class="definition">
        <p><strong>Cách giải hệ phương trình bằng phương pháp thế:</strong></p>
        <p><em>Bước 1.</em> Từ một phương trình của hệ, biểu diễn một ẩn theo ẩn kia rồi thế vào phương trình còn lại của hệ để được phương trình chỉ còn chứa một ẩn.</p>
        <p><em>Bước 2.</em> Giải phương trình một ẩn vừa nhận được, từ đó suy ra nghiệm của hệ đã cho.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> "Thế" nghĩa là <em>thay người</em>: từ phương trình thứ nhất, \(y\) nói với chúng ta "tao bằng \(2x - 3\)". Ta mang câu trả lời đó "đeo mặt nạ" vào phương trình thứ hai — chỉ còn \(x\) để giải.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Giải \(\begin{cases} 2x - y = 3 \\ x + 2y = 4 \end{cases}\) bằng phương pháp thế.</p>
        <p>Từ phương trình thứ nhất: \(y = 2x - 3\). Thế vào phương trình thứ hai: \(x + 2(2x - 3) = 4\), hay \(5x - 6 = 4\), suy ra \(x = 2\).</p>
        <p>Từ đó \(y = 2 \cdot 2 - 3 = 1\). Vậy hệ có nghiệm là \((2;\ 1)\).</p>
      </div>
      <div class="definition">
        <p><strong>Cách giải hệ phương trình bằng phương pháp cộng đại số</strong> (khi hệ số của cùng một ẩn nào đó trong hai phương trình bằng nhau hoặc đối nhau):</p>
        <p><em>Bước 1.</em> Cộng hay trừ từng vế của hai phương trình trong hệ để được phương trình chỉ còn chứa một ẩn.</p>
        <p><em>Bước 2.</em> Giải phương trình một ẩn vừa nhận được, từ đó suy ra nghiệm của hệ đã cho.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Giải \(\begin{cases} -2x + 5y = 12 \\ 2x + 3y = 4 \end{cases}\): hệ số của \(x\) đối nhau nên cộng từng vế: \((-2x + 2x) + (5y + 3y) = 12 + 4\), tức \(8y = 16\), suy ra \(y = 2\). Thế vào phương trình thứ hai: \(2x + 6 = 4\), suy ra \(x = -1\). Vậy nghiệm là \((-1;\ 2)\).</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 100 90" width="110" role="img" aria-label="Hai đường thẳng cắt nhau">
              <line x1="12" y1="75" x2="88" y2="18" stroke="#58C4DD" stroke-width="2"/>
              <line x1="12" y1="25" x2="88" y2="72" stroke="#FC6255" stroke-width="2"/>
              <circle cx="50" cy="46" r="4" fill="#FFFF00"/>
            </svg>
            <p>Một nghiệm<br>(hai đường cắt nhau)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 100 90" width="110" role="img" aria-label="Hai đường thẳng song song">
              <line x1="15" y1="30" x2="85" y2="18" stroke="#58C4DD" stroke-width="2"/>
              <line x1="15" y1="70" x2="85" y2="58" stroke="#FC6255" stroke-width="2"/>
            </svg>
            <p>Vô nghiệm<br>(song song)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 100 90" width="110" role="img" aria-label="Hai đường thẳng trùng nhau">
              <line x1="15" y1="48" x2="85" y2="42" stroke="#FFFF00" stroke-width="6" opacity="0.45"/>
              <line x1="15" y1="48" x2="85" y2="42" stroke="#58C4DD" stroke-width="2"/>
            </svg>
            <p>Vô số nghiệm<br>(trùng nhau)</p>
          </div>
        </div>
        <figcaption>Số nghiệm của hệ = số giao điểm của hai đường thẳng.</figcaption>
      </figure>
      <p><strong>Nhận xét (SGK).</strong> Hệ có thể <strong>vô nghiệm</strong>: với \(\begin{cases} x - y = -2 \\ 2x - 2y = 8 \end{cases}\), thế \(x = y - 2\) ta được \(0y - 4 = 8\) — không có \(y\) nào thoả mãn. Hệ cũng có thể có <strong>vô số nghiệm</strong>: với \(\begin{cases} -x + y = -2 \\ 3x - 3y = 6 \end{cases}\), khử mẫu ta được \(0x = 0\), hệ có nghiệm \((x;\ x - 2)\) với \(x \in \mathbb{R}\) tuỳ ý.</p>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao phương pháp cộng đại số cần hệ số của một ẩn bằng nhau hoặc đối nhau? <em>— Vì khi đó cộng (hoặc trừ) từng vế sẽ triệt tiêu ẩn đó: \(2x + (-2x) = 0\), còn lại phương trình một ẩn.</em></p>
      </details>
      <p>Máy tính cầm tay có chức năng giải hệ: máy báo "Infinite Sol" nghĩa là hệ vô số nghiệm, "No–Solution" nghĩa là hệ vô nghiệm.</p>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Tìm ra \(x = 2\) rồi dừng — chưa tìm \(y\) và chưa viết nghiệm là cặp \((2;\ y)\).</li>
          <li>Thế biểu diễn vào <em>chính</em> phương trình vừa rút nó ra (vòng lặp vô nghĩa) — phải thế vào phương trình <em>còn lại</em>.</li>
          <li>Sai dấu khi khử ngoặc: \(x + 2(2x - 3) = 4\) là \(x + 4x - 6\), không phải \(x + 4x + 6\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "text",
        prompt: String.raw`Nghiệm của \(\begin{cases} x+y=10 \\ x-y=2 \end{cases}\) là cặp (x; y). Viết dạng 6;4`,
        accept: ["6;4", "6; 4", "(6;4)", "(6; 4)"],
        hint: "Hệ số của y đối nhau: cộng từng vế để triệt tiêu y.",
        explain: "Cộng từng vế: 2x = 12 ⇒ x = 6. Thế vào: y = 4.",
      },
      {
        type: "mc",
        prompt: String.raw`Hệ \(\begin{cases} x+y=4 \\ 2x+2y=8 \end{cases}\) có bao nhiêu nghiệm?`,
        choices: ["Một nghiệm", "Vô nghiệm", "Vô số nghiệm", "Hai nghiệm"],
        correct: 2,
        hint: "Chia cả hai vế phương trình sau cho 2 rồi so sánh với phương trình trước.",
        explain: "Phương trình sau gấp đôi phương trình trước: hai đường thẳng trùng nhau nên hệ vô số nghiệm.",
      },
      {
        type: "mc",
        prompt: String.raw`Với \(\begin{cases} x - y = -2 \\ 2x - 2y = 8 \end{cases}\), sau khi thế \(x = y - 2\) ta được \(0y - 4 = 8\). Kết luận:`,
        choices: ["Hệ có một nghiệm", "Hệ vô nghiệm", "Hệ vô số nghiệm", "Hệ có hai nghiệm"],
        correct: 1,
        hint: "Có giá trị y nào nhân 0 rồi trừ 4 lại bằng 8 được không?",
        explain: "Không có giá trị nào của y thoả mãn 0y − 4 = 8 nên hệ vô nghiệm.",
      },
    ],
  },
  {
    id: "c1-b3",
    num: 3,
    chapter: 1,
    title: "Giải bài toán bằng cách lập hệ phương trình",
    summary: "Ba bước: lập hệ phương trình, giải hệ, kiểm tra và trả lời.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Một vật hợp kim 124 g gồm đồng và kèm, 1 cm³ đồng nặng 8,9 g, 1 cm³ kèm nặng 7 g…
      Đề bài "kể hai câu chuyện" (về khối lượng, về thể tích) — mỗi câu chuyện là một phương trình, ghép lại thành hệ.</p>
      <div class="definition">
        <p><strong>Các bước giải một bài toán bằng cách lập hệ phương trình:</strong></p>
        <p><em>Bước 1. Lập hệ phương trình:</em> chọn ẩn số (thường chọn hai ẩn số) và đặt điều kiện thích hợp cho các ẩn; biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết; lập hệ phương trình biểu thị mối quan hệ giữa các đại lượng.</p>
        <p><em>Bước 2.</em> Giải hệ phương trình.</p>
        <p><em>Bước 3. Trả lời:</em> kiểm tra xem trong các nghiệm tìm được của hệ phương trình, nghiệm nào thoả mãn, nghiệm nào không thoả mãn điều kiện của ẩn, rồi kết luận.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đọc đề, hãy tự hỏi: "<em>Hai đại lượng chưa biết nào đang bị so sánh, cộng, trừ, nhân chia?</em>" Hai mối quan hệ rõ ràng nhất trong đề = hai phương trình. Điều kiện ẩn (nguyên? dương? nhỏ hơn?) nên ghi ngay từ đầu để bước 3 có chỗ mà kiểm tra.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Tìm hai số tự nhiên có tổng bằng 1 006, biết rằng nếu lấy số lớn chia cho số nhỏ thì được thương là 2 và số dư là 124.</p>
        <p><em>Bước 1.</em> Gọi hai số là \(x\) và \(y\) (\(x < y\)). Vì chia \(y\) cho \(x\) dư 124 nên \(x > 124\); điều kiện: \(x, y \in \mathbb{N},\ 124 < x < y\). Tổng bằng 1 006: \(x + y = 1006\). Chia \(y\) cho \(x\) được thương 2, dư 124: \(y = 2x + 124\).</p>
        <p><em>Bước 2.</em> \(\begin{cases} x + y = 1\,006 \\ y = 2x + 124 \end{cases} \Rightarrow 3x + 124 = 1\,006 \Rightarrow x = 294,\ y = 712.\)</p>
        <p><em>Bước 3.</em> Hai số 294 và 712 thoả mãn điều kiện của ẩn. Vậy hai số cần tìm là 294 và 712.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Kết luận ngay sau bước 2: nghiệm của hệ chưa chắc thoả mãn điều kiện thực tế (số nguyên? số dương?).</li>
          <li>Gọi ẩn xong <em>quên</em> ghi điều kiện — đến bước 3 không có gì để đối chiếu.</li>
          <li>Nhầm "thương 2, dư 124" thành \(y = 2x - 124\); nhớ công thức bị chia = chia × thương + dư.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Tổng hai số là 30, hiệu là 8. Số lớn hơn bằng bao nhiêu?",
        answer: 19,
        hint: "Cộng hai phương trình x + y = 30 và x − y = 8 sẽ triệt tiêu y.",
        explain: "x + y = 30, x − y = 8 ⇒ 2x = 38 ⇒ x = 19 (số nhỏ là 11).",
      },
      {
        type: "mc",
        prompt: "Bước nào KHÔNG thuộc ba bước giải bài toán bằng cách lập hệ phương trình?",
        choices: ["Lập hệ phương trình", "Giải hệ phương trình", "Kiểm tra điều kiện của ẩn rồi kết luận", "Xoá hết nghiệm âm dù đề bài cho phép"],
        correct: 3,
        hint: "Nghiệm bị loại chỉ khi vi phạm điều kiện của ẩn đã đặt.",
        explain: "Chỉ những nghiệm thoả mãn điều kiện của ẩn mới được dùng để kết luận; chưa xét điều kiện thì chưa được loại bỏ nghiệm nào.",
      },
      {
        type: "text",
        prompt: "Hai số có tổng 20 và hiệu 4. Viết hai số (số nhỏ trước), dạng 8;12",
        accept: ["8;12", "8; 12", "(8;12)", "(8; 12)"],
        hint: "Gọi số nhỏ là x, số lớn là y: x + y = 20 và y − x = 4.",
        explain: "x + y = 20, y − x = 4 ⇒ y = 12, x = 8.",
      },
    ],
  },

  // ============ CHƯƠNG II ============
  {
    id: "c2-b4",
    num: 4,
    chapter: 2,
    title: "Phương trình quy về phương trình bậc nhất một ẩn",
    summary: "Giải phương trình tích và phương trình chứa ẩn ở mẫu thức.",
    body: String.raw`
      <p>Hai dạng phương trình hay gặp mà chỉ cần một "chiêu" đưa về phương trình bậc nhất: <strong>tách nhân tử</strong> và <strong>khử mẫu</strong>.</p>
      <div class="idea">
        <p><strong>Hiểu nhanh (phương trình tích).</strong> Tích hai số bằng 0 thì <em>ít nhất một</em> trong hai số bằng 0. Vậy \((ax+b)(cx+d)=0\) "tra tấn" ta phải xét hai trường hợp nhỏ, mỗi trường hợp là một phương trình bậc nhất quen thuộc.</p>
      </div>
      <div class="definition">
        <p><strong>Phương trình tích.</strong> Để giải phương trình tích \((ax + b)(cx + d) = 0\), ta giải hai phương trình \(ax + b = 0\) và \(cx + d = 0\). Sau đó lấy tất cả các nghiệm của chúng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ 1 (SGK).</strong> \((2x + 1)(3x - 1) = 0\) nên \(2x + 1 = 0\) hoặc \(3x - 1 = 0\), suy ra \(x = -\dfrac{1}{2}\) hoặc \(x = \dfrac{1}{3}\).</p>
        <p><strong>Ví dụ 2 (SGK).</strong> Giải \(x^2 - x = -2x + 2\): chuyển vế \(x^2 - x + 2x - 2 = 0\), phân tích theo nhóm \(x(x - 1) + 2(x - 1) = 0\), tức \((x + 2)(x - 1) = 0\). Suy ra \(x = -2\) hoặc \(x = 1\).</p>
      </div>
      <div class="definition">
        <p><strong>Cách giải phương trình chứa ẩn ở mẫu thức:</strong></p>
        <p><em>Bước 1.</em> Tìm điều kiện xác định của phương trình.</p>
        <p><em>Bước 2.</em> Quy đồng mẫu hai vế của phương trình rồi khử mẫu.</p>
        <p><em>Bước 3.</em> Giải phương trình vừa tìm được.</p>
        <p><em>Bước 4 (Kết luận).</em> Trong các giá trị tìm được của ẩn ở Bước 3, giá trị nào thoả mãn điều kiện xác định chính là nghiệm của phương trình đã cho.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Bước 4 là "cửa kiểm tra": khi khử mẫu ta đã <em>nhân cả hai vế với biểu thức chứa ẩn</em> — phép nhân đó có thể tạo ra "nghiệm giả" làm mẫu số bằng 0. Giá trị làm mẫu bằng 0 thì phương trình gốc chẳng có nghĩa gì, phải loại.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ 4 (SGK).</strong> Giải \(\dfrac{2}{x + 1} + \dfrac{1}{x - 2} = \dfrac{3}{(x + 1)(x - 2)}\).</p>
        <p>Điều kiện xác định: \(x \neq -1\) và \(x \neq 2\). Quy đồng, khử mẫu: \(2(x - 2) + (x + 1) = 3\), giải được \(x = 2\).</p>
        <p>Nhưng \(x = 2\) <strong>không</strong> thoả mãn điều kiện xác định. Vậy phương trình đã cho vô nghiệm.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Khử mẫu xong quên luôn ĐKXĐ — lấy \(x = 2\) làm nghiệm là sai (chính là Ví dụ 4).</li>
          <li>Ghi ĐKXĐ dạng "x ≠ −1 hoặc x ≠ 2" — phải là <em>và</em>: \(x \neq -1\) và \(x \neq 2\).</li>
          <li>Chuyển vế quên đổi dấu: \(x^2 - x = -2x + 2\) phải thành \(x^2 - x + 2x - 2 = 0\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Nghiệm của phương trình \((x - 3)(x + 2) = 0\) là:`,
        choices: [String.raw`\(x = 3\) hoặc \(x = -2\)`, "chỉ x = 3", "chỉ x = −2", "vô nghiệm"],
        correct: 0,
        hint: "Tích bằng 0 ⇒ xét từng nhân tử bằng 0.",
        explain: "Phương trình tích: x − 3 = 0 hoặc x + 2 = 0.",
      },
      {
        type: "num",
        prompt: String.raw`Phương trình \(x^2 - 4x = 0\) có hai nghiệm, nghiệm nhỏ hơn là bao nhiêu?`,
        answer: 0,
        hint: "Đặt nhân tử chung x rồi áp dụng phương trình tích.",
        explain: "x(x − 4) = 0 ⇒ x = 0 hoặc x = 4. Nghiệm nhỏ là 0.",
      },
      {
        type: "mc",
        prompt: "Giải xong phương trình chứa ẩn ở mẫu, trước khi kết luận nghiệm ta phải:",
        choices: ["Nhân hai vế với −1", "Đối chiếu với điều kiện xác định", "Cộng thêm 1", "Đổi dấu hai vế"],
        correct: 1,
        hint: "Khử mẫu có thể sinh ra nghiệm giả làm mẫu số bằng 0.",
        explain: "Giá trị của ẩn không thoả mãn điều kiện xác định phải bị loại.",
      },
    ],
  },
  {
    id: "c2-b5",
    num: 5,
    chapter: 2,
    title: "Bất đẳng thức và tính chất",
    summary: "Hệ thức a < b, a > b, a ≤ b, a ≥ b; tính chất bắc cầu, liên hệ với cộng và nhân.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Biển báo "tốc độ tối thiểu 60 km/h" nghĩa là vận tốc \(a\) (km/h) phải thoả \(a \geq 60\). Đời sống đầy những quan hệ "hơn – kém – ít nhất – nhiều nhất", và toán học gọi chúng là bất đẳng thức.</p>
      <div class="definition">
        <p>Ta gọi hệ thức dạng \(a > b\) (hay \(a < b,\ a \geq b,\ a \leq b\)) là <strong>bất đẳng thức</strong> và gọi \(a\) là vế trái, \(b\) là vế phải của bất đẳng thức.</p>
        <p>Số \(a\) lớn hơn hoặc bằng số \(b\), tức là \(a > b\) hoặc \(a = b\), kí hiệu là \(a \geq b\). Số \(a\) nhỏ hơn hoặc bằng số \(b\) kí hiệu là \(a \leq b\).</p>
      </div>
      <p><strong>Chú ý.</strong> Hai bất đẳng thức \(1 < 2\) và \(-3 < -2\) (hay \(6 > 3\) và \(8 > 5\)) được gọi là <em>hai bất đẳng thức cùng chiều</em>. Hai bất đẳng thức \(1 < 2\) và \(-2 > -3\) (hay \(6 > 3\) và \(5 < 8\)) được gọi là <em>hai bất đẳng thức ngược chiều</em>.</p>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Hãy hình dung trục số: "lớn hơn" là <em>đứng xa hơn về bên phải</em>. Cộng cùng một số vào hai vế = dịch cả hai người đi cùng một đoạn — ai trước vẫn trước. Nhân với số dương = "kéo giãn" cùng tỉ lệ — thứ tự giữ. Nhân với số âm = "soi gương" qua 0 — ai trước hoá sau!</p>
      </div>
      <div class="definition">
        <p><strong>Tính chất bắc cầu của bất đẳng thức.</strong> Nếu \(a < b\) và \(b < c\) thì \(a < c\).</p>
        <p><strong>Liên hệ giữa thứ tự và phép cộng.</strong> Khi cộng cùng một số vào hai vế của một bất đẳng thức ta được bất đẳng thức mới cùng chiều với bất đẳng thức đã cho: nếu \(a < b\) thì \(a + c < b + c\) (tương tự cho \(\leq,\ >,\ \geq\)).</p>
        <p><strong>Liên hệ giữa thứ tự và phép nhân.</strong> Nếu \(a < b\) và \(c > 0\) thì \(ac < bc\). Nếu \(a < b\) và \(c < 0\) thì \(ac > bc\).</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> "<em>Cộng số nào, chiều hay giữ. Nhân dương giữ, nhân âm đổi.</em>"</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Chứng minh \(\dfrac{2024}{2023} > \dfrac{2021}{2022}\): ta có \(\dfrac{2024}{2023} = 1 + \dfrac{1}{2023} > 1\) và \(\dfrac{2021}{2022} = 1 - \dfrac{1}{2022} < 1\); một số lớn hơn 1, một số nhỏ hơn 1, nên theo tính chất bắc cầu \(\dfrac{2024}{2023} > \dfrac{2021}{2022}\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhân hai vế với số âm mà quên đổi chiều: từ \(a < b\) kết luận \(-3a < -3b\) là <strong>sai</strong>.</li>
          <li>Cộng <em>hai số khác nhau</em> vào hai vế rồi bảo "giữ nguyên chiều" — chỉ đúng khi cộng <em>cùng một</em> số.</li>
          <li>Với \(a < b\), kết luận \(-a < -b\): sai, vì \(-1\) là số âm (đúng là \(-a > -b\)).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Nếu \(a < b\) thì khẳng định nào sau đây đúng?`,
        choices: [String.raw`\(a + 5 < b + 5\)`, String.raw`\(a + 5 > b + 5\)`, String.raw`\(a + 5 = b + 5\)`, "Không kết luận được"],
        correct: 0,
        hint: "Cộng cùng một số vào hai vế thì chiều bất đẳng thức thế nào?",
        explain: "Cộng cùng một số vào hai vế giữ nguyên chiều bất đẳng thức.",
      },
      {
        type: "mc",
        prompt: String.raw`Nếu \(a < b\) thì khẳng định nào sau đây đúng?`,
        choices: [String.raw`\(-3a < -3b\)`, String.raw`\(-3a > -3b\)`, String.raw`\(-3a = -3b\)`, "Không so sánh được"],
        correct: 1,
        hint: "−3 là số âm hay số dương? Nhớ cách nhớ: nhân âm đổi chiều.",
        explain: "Nhân hai vế với số âm phải đổi chiều: a < b ⇒ −3a > −3b.",
      },
      {
        type: "mc",
        prompt: String.raw`Biết \(a < b\) và \(b < c\). Khi đó:`,
        choices: [String.raw`\(a > c\)`, String.raw`\(a < c\)`, String.raw`\(a = c\)`, "Không kết luận được"],
        correct: 1,
        hint: "Trên trục số: a đứng bên trái b, b đứng bên trái c.",
        explain: "Tính chất bắc cầu: a < b < c ⇒ a < c.",
      },
    ],
  },
  {
    id: "c2-b6",
    num: 6,
    chapter: 2,
    title: "Bất phương trình bậc nhất một ẩn",
    summary: "Nghiệm của bất phương trình; giải ax + b > 0, nhớ đảo chiều khi nhân số âm.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Thanh có 100 000 đồng, đã có sẵn 18 000 đồng tiền giấy vở, mỗi quyển vở 7 000 đồng. Mua được <em>tối đa</em> bao nhiêu quyển? Câu hỏi "tối đa" — đâu phải phương trình — đây là lúc bất phương trình vào việc.</p>
      <div class="definition">
        <p><strong>Bất phương trình bậc nhất một ẩn \(x\)</strong> là bất phương trình chỉ có một ẩn \(x\), ẩn này có bậc nhất, và có dạng</p>
        \[
          ax + b > 0 \quad (\text{hoặc } ax + b < 0,\ ax + b \geq 0,\ ax + b \leq 0),
        \]
        <p>trong đó \(a\), \(b\) là hai số đã biết với \(a \neq 0\).</p>
      </div>
      <div class="definition">
        <p>Số \(x_0\) là một <strong>nghiệm</strong> của bất phương trình \(A(x) < B(x)\) nếu \(A(x_0) < B(x_0)\) là khẳng định đúng. Giải một bất phương trình là tìm tất cả các nghiệm của bất phương trình đó.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Khác với phương trình (nghiệm là những điểm riêng lẻ), nghiệm của bất phương trình thường là <em>cả một nửa trục số</em>. Trên hình vẽ: chấm <strong>đặc</strong> khi dấu \(\leq\) hoặc \(\geq\) (lấy cả điểm ranh giới), chấm <strong>rỗng</strong> khi dấu \(<\) hoặc \(>\) (không lấy).</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 340 110" role="img" aria-label="Biểu diễn tập nghiệm trên trục số">
          <line x1="30" y1="35" x2="310" y2="35" stroke="#BBBBBB" stroke-width="1.5"/>
          <circle cx="190" cy="35" r="5" fill="#FFFF00"/>
          <line x1="190" y1="35" x2="45" y2="35" stroke="#FC6255" stroke-width="2.5"/>
          <polygon points="45,35 55,30 55,40" fill="#FC6255"/>
          <text x="184" y="24" font-size="12">−3</text>
          <text x="230" y="39" font-size="13">x ≤ −3</text>
          <line x1="30" y1="85" x2="310" y2="85" stroke="#BBBBBB" stroke-width="1.5"/>
          <circle cx="190" cy="85" r="5" fill="#333333" stroke="#FFFF00" stroke-width="1.5"/>
          <line x1="190" y1="85" x2="45" y2="85" stroke="#58C4DD" stroke-width="2.5"/>
          <polygon points="45,85 55,80 55,90" fill="#58C4DD"/>
          <text x="184" y="74" font-size="12">3</text>
          <text x="230" y="89" font-size="13">x &lt; 3</text>
        </svg>
        <figcaption>Chấm đặc cho \(\leq, \geq\); chấm rỗng cho \(&lt;, &gt;\).</figcaption>
      </figure>
      <div class="definition">
        <p>Bất phương trình bậc nhất một ẩn \(ax + b < 0\) (\(a \neq 0\)) được giải như sau: \(ax < -b\);</p>
        <ul>
          <li>nếu \(a > 0\) thì \(x < -\dfrac{b}{a}\);</li>
          <li>nếu \(a < 0\) thì \(x > -\dfrac{b}{a}\).</li>
        </ul>
        <p><strong>Chú ý.</strong> Các bất phương trình \(ax + b > 0\), \(ax + b \leq 0\), \(ax + b \geq 0\) được giải tương tự.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ 2 (SGK).</strong> Giải \(-2x - 4 > 0\): \(-2x > 4\), nhân hai vế với số âm \(-\dfrac{1}{2}\) và đổi chiều: \(x < -2\). Vậy nghiệm là \(x < -2\).</p>
        <p><strong>Ví dụ 4a (SGK).</strong> \(2x + 5 < 3x - 4 \Rightarrow 2x - 3x < -4 - 5 \Rightarrow -x < -9 \Rightarrow x > 9\).</p>
        <p><strong>Ví dụ 3 (SGK — quay lại tình huống mở đầu).</strong> \(7x + 18 \leq 100 \Rightarrow 7x \leq 82 \Rightarrow x \leq \dfrac{82}{7}\). Vì số vở là số tự nhiên nên Thanh mua được nhiều nhất 11 quyển.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Giải \(-x < -9\): bạn An viết \(x < 9\), bạn Bình viết \(x > 9\). Ai đúng, vì sao? <em>— Bình đúng: chia hai vế cho −1 (số âm) phải đổi chiều bất đẳng thức.</em></p>
      </details>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Chia cho số âm mà quên đảo chiều — lỗi phổ biến nhất của cả chương.</li>
          <li>Kết luận bài toán thực tế bằng phân số: "mua \(\dfrac{82}{7}\) quyển" vô nghĩa — phải làm tròn <em>xuống</em> theo ngữ cảnh (tối đa 11 quyển).</li>
          <li>Quên rằng \(a \neq 0\): \(0x + 3 > 0\) không phải bất phương trình bậc nhất một ẩn.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Tập nghiệm của \(-3x \geq 9\) là:`,
        choices: [String.raw`\(x \geq -3\)`, String.raw`\(x \leq -3\)`, String.raw`\(x \geq 3\)`, String.raw`\(x \leq 3\)`],
        correct: 1,
        hint: "Chia hai vế cho −3 — số âm — rồi nhớ đảo chiều.",
        explain: "Chia hai vế cho −3 (số âm) và đảo chiều: x ≤ −3.",
      },
      {
        type: "num",
        prompt: String.raw`Bất phương trình \(x + 5 > 0\) có nghiệm \(x > k\). Giá trị \(k\) là bao nhiêu?`,
        answer: -5,
        hint: "Chuyển 5 sang vế phải và đổi dấu.",
        explain: "x + 5 > 0 ⇒ x > −5, vậy k = −5.",
      },
      {
        type: "mc",
        prompt: "Bất phương trình nào là bất phương trình bậc nhất một ẩn?",
        choices: [String.raw`\(-3x + 7 \leq 0\)`, String.raw`\(x^3 > 0\)`, String.raw`\(x^2 < 9\)`, String.raw`\(xy \geq 0\)`],
        correct: 0,
        hint: "Chỉ một ẩn và ẩn có bậc nhất.",
        explain: "Chỉ có một ẩn x, ẩn có bậc nhất. Các bất phương trình còn lại có ẩn bậc ba, bậc hai, hoặc hai ẩn.",
      },
    ],
  },

  // ============ CHƯƠNG III ============
  {
    id: "c3-b7",
    num: 7,
    chapter: 3,
    title: "Căn bậc hai và căn thức bậc hai",
    summary: "Căn bậc hai của số không âm; √(a²) = |a|; điều kiện xác định của căn thức.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Việc cạnh hình vuông khi biết diện tích 49 m²: cần một số mà <em>bình phương</em> lên bằng 49. Toán học đặt tên cho phép "hỏi ngược" ấy là khai căn bậc hai.</p>
      <div class="definition">
        <p><strong>Căn bậc hai</strong> của số thực không âm \(a\) là số thực \(x\) sao cho \(x^2 = a\).</p>
      </div>
      <p><strong>Nhận xét.</strong></p>
      <ul>
        <li>Số âm không có căn bậc hai;</li>
        <li>Số 0 có một căn bậc hai duy nhất là 0;</li>
        <li>Số dương \(a\) có đúng hai căn bậc hai đối nhau là \(\sqrt{a}\) (<em>căn bậc hai số học</em> của \(a\)) và \(-\sqrt{a}\).</li>
      </ul>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Khai căn là "hỏi ngược": 9 bình phương ra 81, \((-9)\) cũng bình phương ra 81 — nên 81 có <em>hai</em> căn. Nhưng kí hiệu \(\sqrt{a}\) được quy ước <strong>chỉ dành cho căn không âm</strong>: \(\sqrt{81} = 9\), không bao giờ là \(-9\). Muốn nói căn âm phải tự viết dấu trừ: \(-\sqrt{81} = -9\).</p>
      </div>
      <div class="definition">
        <p><strong>Tính chất:</strong> \(\sqrt{a^2} = |a|\) với mọi số thực \(a\).</p>
      </div>
      <div class="example">
        <p>\(\sqrt{(-3)^2} = |-3| = 3\), nên \(\sqrt{(-3)^2} + 3 = 6\). Nếu viết \(\sqrt{(-3)^2} = -3\) thì đã sai — kết quả khai căn không thể âm.</p>
      </div>
      <div class="definition">
        <p><strong>Căn thức bậc hai</strong> là biểu thức có dạng \(\sqrt{A}\), trong đó \(A\) là một biểu thức đại số; \(A\) được gọi là biểu thức lấy căn hoặc biểu thức dưới dấu căn.</p>
        <p>\(\sqrt{A}\) xác định khi \(A\) lấy giá trị không âm và ta thường viết là \(A \geq 0\). Ta nói \(A \geq 0\) là <strong>điều kiện xác định</strong> (hay điều kiện có nghĩa) của \(\sqrt{A}\).</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> "Căn hỏi bình phương — âm không có mặt. Dấu \(\sqrt{\ }\) chỉ dành cho <strong>không âm</strong>. Ra khỏi căn phải qua cửa \(|a|\)."</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>\(\sqrt{a^2} = a\) cho mọi \(a\) — sai khi \(a < 0\); đúng phải là \(\sqrt{a^2} = |a|\).</li>
          <li>Tìm căn bậc hai của 121 mà chỉ trả lời 11 — đề hỏi "các căn" thì là 11 <em>và</em> \(-11\).</li>
          <li>Chưa xét điều kiện xác định: \(\sqrt{2x-1}\) chỉ "sống" khi \(2x - 1 \geq 0\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Giá trị của \(\sqrt{49}\) là:`,
        answer: 7,
        hint: "Kí hiệu √a luôn chỉ căn không âm.",
        explain: "Căn bậc hai số học của 49 là 7.",
      },
      {
        type: "mc",
        prompt: String.raw`\(\sqrt{x^2}\) bằng:`,
        choices: ["x", "|x|", "−x", "x²"],
        correct: 1,
        hint: "Thử với x = −3: √((−3)²) ra số dương hay −3?",
        explain: "Tính chất √(a²) = |a| với mọi số thực x.",
      },
      {
        type: "mc",
        prompt: String.raw`Biểu thức \(\sqrt{2x - 1}\) xác định khi:`,
        choices: [String.raw`\(x > 1\)`, String.raw`\(x \geq \dfrac{1}{2}\)`, String.raw`\(x \leq \dfrac{1}{2}\)`, "mọi x"],
        correct: 1,
        hint: "Biểu thức dưới dấu căn phải không âm: 2x − 1 ≥ 0.",
        explain: "Điều kiện xác định: 2x − 1 ≥ 0 ⇔ x ≥ 1/2.",
      },
    ],
  },
  {
    id: "c3-b8",
    num: 8,
    chapter: 3,
    title: "Khai căn bậc hai với phép nhân và phép chia",
    summary: "√(AB) = √A·√B và √A : √B = √(A:B) với điều kiện xác định.",
    body: String.raw`
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Căn bậc hai chỉ chơi thân với nhân và chia: một tích/thương dưới dấu căn có thể <em>tách</em> thành từng mảnh rồi tính riêng, hoặc ngược lại <em>gom</em> nhiều căn thành một. Tính \(\sqrt{25 \cdot 49}\) thẳng tay là mệt; tách ra \(\sqrt{25}\cdot\sqrt{49} = 5 \cdot 7 = 35\) thì làm nhẩm được.</p>
      </div>
      <div class="definition">
        <p><strong>Khai căn bậc hai và phép nhân.</strong> Nếu \(A, B\) là các biểu thức với \(A \geq 0,\ B \geq 0\) thì</p>
        \[
          \sqrt{AB} = \sqrt{A} \cdot \sqrt{B}.
        \]
      </div>
      <p><strong>Nhận xét.</strong> Nếu \(A \geq 0,\ B \geq 0,\ C \geq 0\) thì \(\sqrt{A^2 B^2 C^2} = ABC\).</p>
      <div class="example">
        <p>\(\sqrt{2^2 \cdot 3^2 \cdot 5^2} = \sqrt{2^2} \cdot \sqrt{3^2} \cdot \sqrt{5^2} = 2 \cdot 3 \cdot 5 = 30\).</p>
        <p>Rút gọn \(\sqrt{25a^2b^2}\) với \(a \geq 0,\ b < 0\): \(\sqrt{25a^2b^2} = 5|a| \cdot |b| = -5ab\).</p>
      </div>
      <div class="definition">
        <p><strong>Khai căn bậc hai và phép chia.</strong> Nếu \(A, B\) là các biểu thức với \(A \geq 0,\ B > 0\) thì</p>
        \[
          \frac{\sqrt{A}}{\sqrt{B}} = \sqrt{\frac{A}{B}}.
        \]
      </div>
      <div class="example">
        <p><strong>Ví dụ 5 (SGK).</strong> a) \(\sqrt{8} : \sqrt{2} = \sqrt{8 : 2} = \sqrt{4} = 2\).</p>
        <p>b) Với \(a > 0\): \(\sqrt{52a^3} : \sqrt{13a} = \sqrt{52a^3 : 13a} = \sqrt{4a^2} = \sqrt{(2a)^2} = |2a| = 2a\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Phân phối căn qua phép <strong>cộng</strong>: \(\sqrt{A + B} \neq \sqrt{A} + \sqrt{B}\). Bằng chứng: \(\sqrt{9 + 16} = 5\) nhưng \(\sqrt{9} + \sqrt{16} = 7\). Căn chỉ chơi thân với nhân và chia!</li>
          <li>Áp dụng \(\sqrt{AB} = \sqrt{A}\sqrt{B}\) khi \(A < 0\) — số âm không có căn bậc hai.</li>
          <li>Quên \(|a|\): \(\sqrt{a^2b} = a\sqrt{b}\) chỉ đúng khi \(a \geq 0\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Tính nhanh \(\sqrt{25 \cdot 49}\):`,
        choices: ["35", "70", "175", String.raw`\(35\sqrt{2}\)`],
        correct: 0,
        hint: "Tách tích: √25 · √49.",
        explain: "√(25·49) = √25 · √49 = 5 · 7 = 35.",
      },
      {
        type: "num",
        prompt: String.raw`\(\sqrt{72} : \sqrt{2} = \sqrt{k}\). Giá trị \(k\) là bao nhiêu?`,
        answer: 36,
        hint: "Gom thương về dưới một dấu căn: √(72 : 2).",
        explain: "√72 : √2 = √(72 : 2) = √36 = 6, nên k = 36.",
      },
      {
        type: "mc",
        prompt: "Đẳng thức nào SAI?",
        choices: [String.raw`\(\sqrt{16 \cdot 9} = 12\)`, String.raw`\(\sqrt{16} : \sqrt{4} = 2\)`, String.raw`\(\sqrt{16 + 9} = 7\)`, String.raw`\(\sqrt{4 \cdot 4 \cdot 4} = 4\sqrt{4}\)`],
        correct: 2,
        hint: "Căn không phân phối qua phép cộng. Kiểm tra: √25 bằng bao nhiêu, √16 + √9 bằng bao nhiêu?",
        explain: "√(16 + 9) = √25 = 5, còn √16 + √9 = 4 + 3 = 7. Căn bậc hai không phân phối qua phép cộng."
      },
    ],
  },
  {
    id: "c3-b9",
    num: 9,
    chapter: 3,
    title: "Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai",
    summary: "Đưa thừa số ra ngoài/vào trong dấu căn, khử mẫu của biểu thức lấy căn.",
    body: String.raw`
      <p>Bộ ba thao tác cơ bản để "dọn dẹp" mọi biểu thức chứa căn bậc hai: <em>đưa ra ngoài</em>, <em>khử mẫu</em>, <em>đưa vào trong</em>.</p>
      <div class="definition">
        <p><strong>Đưa thừa số ra ngoài dấu căn.</strong> Với \(b \geq 0\): \(\sqrt{a^2 b} = |a|\sqrt{b}\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Tìm trong biểu thức dưới dấu căn các <em>thừa số chính phương</em> (4, 9, 16, 25, …) — đó là những phần "xuống được": \(\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}\). Căn bậc hai của 12 tồn tại nhưng \(2\sqrt{3}\) nhìn gọn và tính tiếp dễ hơn.</p>
      </div>
      <div class="example">
        <p>\(\sqrt{12} = \sqrt{2^2 \cdot 3} = 2\sqrt{3}\); &nbsp; \(3\sqrt{27} = 3\sqrt{3^2 \cdot 3} = 9\sqrt{3}\); &nbsp; \(5\sqrt{48} = 5\sqrt{4^2 \cdot 3} = 20\sqrt{3}\).</p>
      </div>
      <p><strong>Chú ý (khử mẫu của biểu thức lấy căn — SGK).</strong> Khi tính toán với những căn thức bậc hai mà biểu thức dưới dấu căn có mẫu, ta thường khử mẫu của biểu thức lấy căn — tức biến đổi căn thức đó thành một biểu thức mà trong căn thức không còn mẫu:</p>
      <div class="example">
        <p>\(\sqrt{\dfrac{4}{7}} = \sqrt{\dfrac{4 \cdot 7}{7^2}} = \sqrt{\left(\dfrac{2}{7}\right)^2 \cdot 7} = \dfrac{2\sqrt{7}}{7}\).</p>
      </div>
      <div class="definition">
        <p><strong>Đưa thừa số vào trong dấu căn.</strong></p>
        <ul>
          <li>Nếu \(a\) và \(b\) là hai số không âm thì \(a\sqrt{b} = \sqrt{a^2 b}\).</li>
          <li>Nếu \(a\) là số âm và \(b\) là số không âm thì \(a\sqrt{b} = -\sqrt{a^2 b}\).</li>
        </ul>
      </div>
      <p><strong>Tranh luận (SGK).</strong> Bạn Vuông viết \(\sqrt{(-2)^2 \cdot 5} = -2\sqrt{5}\). Bạn có đồng ý không? <em>Không</em> — vì \(\sqrt{(-2)^2 \cdot 5} = |{-2}|\sqrt{5} = 2\sqrt{5}\); kết quả khai căn không bao giờ âm.</p>
      <p>Hai căn thức bậc hai gọi là <em>đồng dạng</em> nếu có cùng biểu thức lấy căn; khi đó có thể cộng, trừ chúng như cộng, trừ các đơn thức đồng dạng, ví dụ \(\sqrt{2} + 3\sqrt{2} = 4\sqrt{2}\).</p>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Đưa số âm vào trong căn không đổi dấu: \(-2\sqrt{5} = \sqrt{(-2)^2 \cdot 5} = 2\sqrt{5}\) là <strong>sai</strong> — phải là \(-\sqrt{20}\).</li>
          <li>Cộng tùy tiện các căn không đồng dạng: \(\sqrt{2} + \sqrt{3} \neq \sqrt{5}\) (kiểm tra: \(\sqrt{2} + \sqrt{3} \approx 3{,}15\), còn \(\sqrt{5} \approx 2{,}24\)).</li>
          <li>Tách sai thừa số chính phương: \(\sqrt{50} = 5\sqrt{2}\) chứ không phải \(\sqrt{50} = 2\sqrt{25}\) (25 xuống được, 2 mới ở lại).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`\(\sqrt{50}\) bằng:`,
        choices: [String.raw`\(5\sqrt{2}\)`, String.raw`\(2\sqrt{5}\)`, String.raw`\(25\sqrt{2}\)`, "10"],
        correct: 0,
        hint: "Tìm thừa số chính phương lớn nhất của 50: 25.",
        explain: "√50 = √(5²·2) = 5√2.",
      },
      {
        type: "num",
        prompt: String.raw`Rút gọn \(\sqrt{45}\) được \(k\sqrt{5}\). Giá trị \(k\) là bao nhiêu?`,
        answer: 3,
        hint: "45 = 9 · 5.",
        explain: "√45 = √(3²·5) = 3√5, nên k = 3.",
      },
      {
        type: "mc",
        prompt: String.raw`\(\sqrt{(-2)^2 \cdot 5}\) bằng:`,
        choices: [String.raw`\(-2\sqrt{5}\)`, String.raw`\(2\sqrt{5}\)`, String.raw`\(-4\sqrt{5}\)`, "10"],
        correct: 1,
        hint: "Ra khỏi căn phải qua cửa giá trị tuyệt đối: |−2|.",
        explain: "√((−2)²·5) = |−2|√5 = 2√5.",
      },
    ],
  },
  {
    id: "c3-b10",
    num: 10,
    chapter: 3,
    title: "Căn bậc ba và căn thức bậc ba",
    summary: "Mọi số thực đều có duy nhất một căn bậc ba; (∛a)³ = ∛(a³) = a.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Hình lập phương thể tích 27 cm³ có cạnh bao nhiêu? Lại là câu hỏi "hỏi ngược": số nào <em>lập phương</em> lên bằng 27? Đây là phép khai căn bậc ba.</p>
      <div class="definition">
        <p><strong>Căn bậc ba</strong> của số thực \(a\) là số thực \(x\) thoả mãn \(x^3 = a\).</p>
      </div>
      <p><strong>Chú ý.</strong> Mỗi số \(a\) đều có duy nhất một căn bậc ba. Căn bậc ba của số \(a\) được kí hiệu là \(\sqrt[3]{a}\). Trong kí hiệu \(\sqrt[3]{a}\), số 3 được gọi là <em>chỉ số của căn</em>. Phép tìm căn bậc ba của một số gọi là <em>phép khai căn bậc ba</em>.</p>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> So với căn bậc hai, căn bậc ba "rộng rãi" hơn nhiều: bình phương luôn ra số không âm nên số âm không có căn bậc hai; nhưng lập phương giữ nguyên dấu — \((-3)^3 = -27\) — nên <strong>mọi số thực, kể cả số âm, đều có đúng một căn bậc ba</strong>: \(\sqrt[3]{-27} = -3\).</p>
      </div>
      <div class="example">
        <p>Vì \(4^3 = 64\) nên \(\sqrt[3]{64} = 4\). Vì \(0^3 = 0\) nên \(\sqrt[3]{0} = 0\). Vì \((-3)^3 = -27\) nên \(\sqrt[3]{-27} = -3\).</p>
      </div>
      <div class="definition">
        <p><strong>Nhận xét.</strong> Từ định nghĩa căn bậc ba, ta có</p>
        \[
          \bigl(\sqrt[3]{a}\bigr)^3 = \sqrt[3]{a^3} = a \quad \text{với mọi số thực } a.
        \]
      </div>
      <p><strong>Căn thức bậc ba</strong> là biểu thức có dạng \(\sqrt[3]{A}\), trong đó \(A\) là một biểu thức đại số. Khác với căn thức bậc hai, \(\sqrt[3]{A}\) xác định với mọi giá trị của \(A\) — ví dụ \(\sqrt[3]{-8} = -2\) vẫn có nghĩa.</p>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> "<em>Căn bậc hai kén chọn (chỉ nhận không âm), căn bậc ba dễ tính (ai cũng có một căn).</em>"</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Cho rằng \(\sqrt[3]{-8}\) không xác định — đó là tính chất của căn bậc <strong>hai</strong>, không phải bậc ba.</li>
          <li>Quên dấu trừ khi lập phương: \((-2)^3 = -8\), không phải \(8\).</li>
          <li>Nhầm \(\sqrt[3]{a} + \sqrt[3]{b}\) với \(\sqrt[3]{a + b}\): \(\sqrt[3]{8} + \sqrt[3]{27} = 2 + 3 = 5 \neq \sqrt[3]{35}\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`\(\sqrt[3]{125}\) bằng bao nhiêu?`,
        answer: 5,
        hint: "Số nào nhân với chính nó ba lần ra 125?",
        explain: "Vì 5³ = 125 nên ∛125 = 5.",
      },
      {
        type: "mc",
        prompt: String.raw`\(\sqrt[3]{-8}\) bằng:`,
        choices: ["−2", "2", "−4", "không xác định"],
        correct: 0,
        hint: "(−2)³ = ?",
        explain: "(−2)³ = −8 nên ∛(−8) = −2. Căn bậc ba của số âm là số âm.",
      },
      {
        type: "mc",
        prompt: String.raw`Với mọi số thực \(a\), \(\bigl(\sqrt[3]{a}\bigr)^3\) bằng:`,
        choices: [String.raw`\(a\)`, String.raw`\(|a|\)`, String.raw`\(a^3\)`, "không xác định với a < 0"],
        correct: 0,
        hint: "So sánh với căn bậc hai: tại sao ở đây không cần giá trị tuyệt đối?",
        explain: "Tính chất (∛a)³ = ∛(a³) = a đúng với mọi số thực a.",
      },
    ],
  },

  // ============ CHƯƠNG IV ============
  {
    id: "c4-b11",
    num: 11,
    chapter: 4,
    title: "Tỉ số lượng giác của góc nhọn",
    summary: "sin, cosin, tang, cốtang của góc nhọn; giá trị của góc 30°, 45°, 60°; hai góc phụ.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Làm sao biết "độ dốc" của một con đèo mà không cần leo lên đo từng mét? Người ta so sánh <em>chiều cao</em> với <em>độ dài đoạn dốc</em> — đó chính là một tỉ số giữa các cạnh của tam giác vuông. Tỉ số ấy đặc trưng cho góc dốc: góc như nhau thì tỉ số như nhau, dù tam giác to hay nhỏ.</p>
      <p>Cho tam giác \(ABC\) vuông tại \(A\). Xét góc nhọn \(B\): cạnh \(AC\) gọi là <em>cạnh đối</em> của góc \(B\) (đối diện, không chạm vào \(B\)), cạnh \(AB\) gọi là <em>cạnh kề</em> của góc \(B\) (nằm kề bên góc), cạnh \(BC\) là <em>cạnh huyền</em> (đối diện góc vuông).</p>
      <figure class="figure">
        <svg viewBox="0 0 360 205" role="img" aria-label="Tam giác vuông với cạnh đối, cạnh kề, cạnh huyền">
          <polygon points="50,170 300,170 300,35" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <rect x="50" y="150" width="18" height="18" fill="none" stroke="#DDDDDD" stroke-width="1.5"/>
          <path d="M 266 170 A 34 34 0 0 1 272 152" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="243" y="161" font-size="15" fill="#FC6255">α</text>
          <text x="160" y="188" font-size="13" fill="#58C4DD">cạnh kề</text>
          <text x="306" y="105" font-size="13" fill="#83C167">cạnh đối</text>
          <text x="120" y="82" font-size="13" fill="#9A72AC" transform="rotate(-28 150 95)">cạnh huyền</text>
          <text x="40" y="188" font-size="13">A</text>
          <text x="306" y="188" font-size="13">B</text>
          <text x="306" y="30" font-size="13">C</text>
        </svg>
        <figcaption>Cạnh huyền luôn dài nhất, đứng đối diện góc vuông.</figcaption>
      </figure>
      <div class="definition">
        <p>Cho góc nhọn \(\alpha\). Trong tam giác vuông có góc nhọn \(\alpha\):</p>
        <ul>
          <li>Tỉ số giữa cạnh đối của góc \(\alpha\) và cạnh huyền gọi là <strong>sin</strong> của \(\alpha\), kí hiệu \(\sin\alpha\);</li>
          <li>Tỉ số giữa cạnh kề của góc \(\alpha\) và cạnh huyền gọi là <strong>côsin</strong> của \(\alpha\), kí hiệu \(\cos\alpha\);</li>
          <li>Tỉ số giữa cạnh đối và cạnh kề của góc \(\alpha\) gọi là <strong>tang</strong> của \(\alpha\), kí hiệu \(\tan\alpha\);</li>
          <li>Tỉ số giữa cạnh kề và cạnh đối của góc \(\alpha\) gọi là <strong>côtang</strong> của \(\alpha\), kí hiệu \(\cot\alpha\).</li>
        </ul>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ</strong> (viết tắt đầu chữ): Sin = <strong>Đ</strong>ối/<strong>H</strong>uyền, Cos = <strong>K</strong>ề/<strong>H</strong>uyền, Tan = <strong>Đ</strong>ối/<strong>K</strong>ề, Cot = <strong>K</strong>ề/<strong>Đ</strong>ối → "<em>Đề Hà Khỏe, Khỏe Đề Kề</em>" hay bốn cặp: ĐH – KH – ĐK – KĐ.</p>
      </div>
      <p><strong>Chú ý.</strong> \(\cot\alpha = \dfrac{1}{\tan\alpha}\), và \(\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}\). Trong tam giác vuông, \(\sin\alpha\) và \(\cos\alpha\) luôn dương và bé hơn 1 vì cạnh huyền dài nhất.</p>
      <p><strong>Giá trị lượng giác của các góc \(30^\circ, 45^\circ, 60^\circ\)</strong> (chứng minh bằng tam giác vuông cân và tam giác đều trong SGK):</p>
      <table>
        <tr><th>\(\alpha\)</th><th>\(30^\circ\)</th><th>\(45^\circ\)</th><th>\(60^\circ\)</th></tr>
        <tr><td>\(\sin\alpha\)</td><td>\(\dfrac{1}{2}\)</td><td>\(\dfrac{\sqrt{2}}{2}\)</td><td>\(\dfrac{\sqrt{3}}{2}\)</td></tr>
        <tr><td>\(\cos\alpha\)</td><td>\(\dfrac{\sqrt{3}}{2}\)</td><td>\(\dfrac{\sqrt{2}}{2}\)</td><td>\(\dfrac{1}{2}\)</td></tr>
        <tr><td>\(\tan\alpha\)</td><td>\(\dfrac{\sqrt{3}}{3}\)</td><td>\(1\)</td><td>\(\sqrt{3}\)</td></tr>
        <tr><td>\(\cot\alpha\)</td><td>\(\sqrt{3}\)</td><td>\(1\)</td><td>\(\dfrac{\sqrt{3}}{3}\)</td></tr>
      </table>
      <div class="idea">
        <p><strong>Mẹo học bảng.</strong> Chỉ cần nhớ hàng \(\sin\): \(\dfrac{1}{2},\ \dfrac{\sqrt{2}}{2},\ \dfrac{\sqrt{3}}{2}\) (tăng dần) — hàng \(\cos\) chính là hàng \(\sin\) đọc <em>ngược</em>; hàng \(\cot\) là hàng \(\tan\) đọc ngược. Vì 30° và 60° là hai góc phụ nên \(\sin 30^\circ = \cos 60^\circ\).</p>
      </div>
      <div class="definition">
        <p><strong>Tỉ số lượng giác của hai góc phụ nhau.</strong> Nếu hai góc phụ nhau thì sin góc này bằng côsin góc kia, tang góc này bằng cốtang góc kia:</p>
        \[
          \sin\alpha = \cos\beta,\quad \cos\alpha = \sin\beta,\quad \tan\alpha = \cot\beta,\quad \cot\alpha = \tan\beta.
        \]
      </div>
      <div class="example">
        <p>\(\sin 60^\circ = \cos(90^\circ - 60^\circ) = \cos 30^\circ\); &nbsp; \(\tan 80^\circ = \cot(90^\circ - 80^\circ) = \cot 10^\circ\).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Trong tam giác vuông, vì sao \(\sin\alpha\) luôn nhỏ hơn 1? <em>— Vì \(\sin\alpha = \dfrac{\text{cạnh đối}}{\text{cạnh huyền}}\) mà cạnh huyền dài nhất, nên tử số luôn nhỏ hơn mẫu số.</em></p>
      </details>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm "đối" với "kề" — chúng đổi vai khi đổi góc xét: cạnh đối của \(\widehat{B}\) là cạnh kề của \(\widehat{C}\). Luôn tự hỏi "tôi đang đứng ở góc nào?"</li>
          <li>Viết \(\sin 30^\circ + \sin 60^\circ = \sin 90^\circ\) — tỉ số lượng giác không cộng thế được.</li>
          <li>Quên rằng tỉ số là <em>số thuần</em> (không có đơn vị cm, m…).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`\(\sin 60^\circ\) bằng:`,
        choices: [String.raw`\(\dfrac{1}{2}\)`, String.raw`\(\dfrac{\sqrt{3}}{2}\)`, "1", String.raw`\(\sqrt{3}\)`],
        correct: 1,
        hint: "Hàng sin: 1/2, √2/2, √3/2 ứng với 30°, 45°, 60°.",
        explain: "Theo bảng: sin 60° = √3/2.",
      },
      {
        type: "num",
        prompt: String.raw`\(\tan 45^\circ\) bằng:`,
        answer: 1,
        hint: "Tam giác vuông cân: đối = kề.",
        explain: "tan 45° = 1 (và cot 45° = 1).",
      },
      {
        type: "mc",
        prompt: String.raw`Vì sao \(\sin 35^\circ = \cos 55^\circ\)?`,
        choices: [
          "Vì 35° và 55° là hai góc bằng nhau",
          "Vì 35° và 55° phụ nhau: sin góc này bằng côsin góc kia",
          "Vì sin và cos là một",
          "Vì 35° + 55° = 100°",
        ],
        correct: 1,
        hint: "Cộng hai góc lại xem được bao nhiêu độ?",
        explain: "35° + 55° = 90° nên hai góc phụ nhau, áp dụng định lí tỉ số lượng giác của hai góc phụ.",
      },
    ],
  },
  {
    id: "c4-b12",
    num: 12,
    chapter: 4,
    title: "Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",
    summary: "Cạnh góc vuông theo huyền và sin/cos; theo cạnh góc vuông kia và tan/cot; giải tam giác vuông.",
    body: String.raw`
      <p>Bài 11 cho ta tỉ số; bài này biến tỉ số thành <strong>công cụ tính cạnh</strong>: biết cạnh nào, góc nào thì tìm được cạnh còn lại — đó là cách người ta đo chiều cao toà nhà mà không cần trèo lên.</p>
      <p>Cho tam giác \(ABC\) vuông tại \(A\), cạnh huyền \(a\) và hai cạnh góc vuông \(b\), \(c\).</p>
      <div class="definition">
        <p><strong>Định lí 1.</strong> Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh huyền nhân với sin góc đối hoặc nhân với côsin góc kề.</p>
        <p><strong>Chú ý.</strong> Trong tam giác \(ABC\) vuông tại \(A\): \(b = a \cdot \sin B = a \cdot \cos C\); &nbsp; \(c = a \cdot \sin C = a \cdot \cos B\).</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 360 205" role="img" aria-label="Tam giác vuông với các cạnh a, b, c">
          <polygon points="50,170 300,170 300,35" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <rect x="50" y="150" width="18" height="18" fill="none" stroke="#DDDDDD" stroke-width="1.5"/>
          <path d="M 266 170 A 34 34 0 0 1 272 152" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="243" y="161" font-size="15" fill="#FC6255">B</text>
          <text x="40" y="188" font-size="13">A</text>
          <text x="306" y="188" font-size="13">B</text>
          <text x="306" y="30" font-size="13">C</text>
          <text x="170" y="188" font-size="15" fill="#FC6255">c</text>
          <text x="306" y="105" font-size="15" fill="#83C167">b</text>
          <text x="150" y="88" font-size="15" fill="#58C4DD" transform="rotate(-28 160 95)">a</text>
        </svg>
        <figcaption>\(b = a\sin B = a\cos C\) và \(c = a\sin C = a\cos B\); &nbsp; \(b = c\tan B = c\cot C\), \(c = b\tan C = b\cot B\).</figcaption>
      </figure>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Muốn tính một cạnh góc vuông, nhìn xem <em>bạn của nó là ai</em>: cạnh huyền → dùng sin (góc đối) hoặc cos (góc kề); cạnh góc vuông kia → dùng tan (góc đối) hoặc cot (góc kề). Huyền thì "sin/cos", kề thì "tan/cot".</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ 1 (SGK).</strong> Một máy bay bay lên với vận tốc 500 km/h, đường bay tạo với phương ngang góc \(30^\circ\). Sau 1,2 phút (\(= \tfrac{1}{50}\) giờ), máy bay đi được \(AB = 500 \cdot \tfrac{1}{50} = 10\) km (đường bay = cạnh huyền). Theo Định lí 1, độ cao \(BH = AB \cdot \sin 30^\circ = 10 \cdot \tfrac{1}{2} = 5\) km.</p>
      </div>
      <div class="definition">
        <p><strong>Định lí 2.</strong> Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh góc vuông kia nhân với tang góc đối hoặc nhân với cốtang góc kề.</p>
        <p><strong>Chú ý.</strong> \(b = c \cdot \tan B = c \cdot \cot C\); &nbsp; \(c = b \cdot \tan C = b \cdot \cot B\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ 2 (SGK).</strong> Tia nắng tạo với mặt đất góc \(34^\circ\), bóng của toà tháp dài 8,6 m. Độ cao của tháp (đối diện góc \(34^\circ\)) là \(h = 8{,}6 \cdot \tan 34^\circ \approx 6\) m.</p>
      </div>
      <div class="definition">
        <p><strong>Giải tam giác vuông</strong> là tìm các cạnh và các góc (chưa biết) của tam giác vuông khi biết hai yếu tố (trong đó có ít nhất một cạnh). Ta dùng định lí Pythagore cùng Định lí 1, Định lí 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ 3 (SGK).</strong> Tam giác vuông \(ABC\) vuông tại \(A\), \(AB = 5\), \(AC = 8\). Theo Pythagore: \(BC = \sqrt{5^2 + 8^2} \approx 9{,}4\). Ta có \(\tan C = \dfrac{AB}{AC} = \dfrac{5}{8} = 0{,}625\), suy ra \(\widehat{C} \approx 32^\circ\) và \(\widehat{B} \approx 90^\circ - 32^\circ = 58^\circ\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhân với sin góc <em>kề</em> thay vì góc <em>đối</em> — đọc lại Định lí 1: cạnh nào thì "sin góc đối diện nó".</li>
          <li>Quên đổi đơn vị thời gian (1,2 phút phải thành \(\tfrac{1}{50}\) giờ trước khi nhân vận tốc).</li>
          <li>Dùng máy tính ở chế độ radian thay vì độ (DEG) — kết quả sẽ lệch hoàn toàn.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Tam giác vuông có cạnh huyền 10 và một góc nhọn \(30^\circ\). Cạnh đối diện góc đó dài bao nhiêu?`,
        answer: 5,
        hint: "Định lí 1: cạnh đối = huyền · sin góc.",
        explain: "Cạnh đối = huyền · sin 30° = 10 · 1/2 = 5.",
      },
      {
        type: "mc",
        prompt: "Trong tam giác ABC vuông tại A (cạnh huyền a, cạnh góc vuông b, c), cạnh b bằng:",
        choices: [String.raw`\(a \cdot \sin B\)`, String.raw`\(c \cdot \sin B\)`, String.raw`\(a \cdot \tan B\)`, String.raw`\(b \cdot \cos B\)`],
        correct: 0,
        hint: "b là cạnh góc vuông; bạn của nó là cạnh huyền a, dùng sin góc đối B.",
        explain: "Định lí 1: b = a·sin B (B là góc đối của b) = a·cos C.",
      },
      {
        type: "num",
        prompt: String.raw`Bóng trên mặt đất của một cây dài 25 m, tia nắng tạo với mặt đất góc \(40^\circ\). Chiều cao cây gần bằng bao nhiêu mét (làm tròn đến mét)?`,
        answer: 21,
        hint: "Cần tìm cạnh đối, biết cạnh kề (bóng) → dùng tan.",
        explain: "h = 25 · tan 40° ≈ 25 · 0,839 ≈ 21 m.",
      },
    ],
  },

  // ============ CHƯƠNG V ============
  {
    id: "c5-b13",
    num: 13,
    chapter: 5,
    title: "Mở đầu về đường tròn",
    summary: "Định nghĩa đường tròn (O; R), vị trí điểm so với đường tròn, tính đối xứng.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Bạn Oanh có một mảnh giấy hình tròn nhưng mất dấu tâm. Làm sao tìm lại tâm? Bài này cho em công cụ để trả lời: hiểu rõ đường tròn là gì và nó đối xứng ra sao.</p>
      <div class="definition">
        <p><strong>Đường tròn</strong> tâm \(O\) bán kính \(R\) (\(R > 0\)), kí hiệu là \((O;\ R)\), là hình gồm tất cả các điểm cách điểm \(O\) một khoảng bằng \(R\).</p>
        <p>Khi không cần để ý đến bán kính ta kí hiệu đường tròn tâm \(O\) là \((O)\). Nếu \(A\) là một điểm của đường tròn \((O)\) thì ta viết \(A \in (O)\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đường tròn là <em>ranh giới</em>; còn toàn bộ miếng giấy (ranh giới + bên trong) là <em>hình tròn</em>. Compa chính là "máy vẽ đường tròn": chấu compa ghim ở tâm, mở một khoảng \(R\), xoay một vòng.</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 260 220" role="img" aria-label="Vị trí điểm so với đường tròn">
          <circle cx="120" cy="110" r="80" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="120" cy="110" r="3" fill="#FFFF00"/>
          <text x="104" y="126" font-size="13">O</text>
          <line x1="120" y1="110" x2="177" y2="53" stroke="#FC6255" stroke-width="2"/>
          <text x="140" y="70" font-size="14" fill="#FC6255">R</text>
          <circle cx="177" cy="53" r="4" fill="#83C167"/>
          <text x="185" y="48" font-size="13">A ∈ (O)</text>
          <circle cx="140" cy="88" r="4" fill="#58C4DD"/>
          <text x="148" y="92" font-size="13">C trong</text>
          <circle cx="222" cy="150" r="4" fill="#9A72AC"/>
          <text x="196" y="168" font-size="13">B ngoài</text>
        </svg>
        <figcaption>\(OM = R\): trên; \(OM &lt; R\): trong; \(OM &gt; R\): ngoài.</figcaption>
      </figure>
      <p><strong>Nhận xét (SGK).</strong> Cho đường tròn \((O;\ R)\) và điểm \(M\): \(M\) nằm <em>trên</em> đường tròn nếu \(OM = R\); nằm <em>trong</em> đường tròn nếu \(OM < R\); nằm <em>ngoài</em> đường tròn nếu \(OM > R\). Nếu \(O\) là trung điểm của đoạn \(AB\) thì \((O)\) còn gọi là <em>đường tròn đường kính</em> \(AB\).</p>
      <div class="definition">
        <p>Hai điểm \(M\) và \(M'\) gọi là <em>đối xứng</em> với nhau qua điểm \(I\) nếu \(I\) là trung điểm của đoạn thẳng \(MM'\); gọi là <em>đối xứng</em> với nhau qua đường thẳng \(d\) nếu \(d\) là đường trung trực của đoạn thẳng \(MM'\).</p>
        <p><strong>Đường tròn là hình có tâm đối xứng; tâm của đường tròn là tâm đối xứng của nó. Đường tròn là hình có trục đối xứng; mỗi đường thẳng qua tâm của đường tròn là một trục đối xứng của nó.</strong></p>
      </div>
      <div class="idea">
        <p><strong>Quay lại tình huống mở đầu.</strong> Gấp mảnh giấy tròn đôi lần này qua lần kia: đường gấp luôn đi qua tâm. Hai nếp gấp không song song cắt nhau — điểm cắt chính là tâm. Đó là sức mạnh của tính đối xứng!</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm đường tròn (ranh giới) với hình tròn (cả vùng bên trong).</li>
          <li>Trục đối xứng "bất kì": trục đối xứng của đường tròn phải đi qua tâm.</li>
          <li>Viết \((O; R)\) với \(R < 0\) — bán kính phải dương.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Điểm \(M\) nằm trên đường tròn \((O;\ R)\) khi:`,
        choices: [String.raw`\(OM > R\)`, String.raw`\(OM = R\)`, String.raw`\(OM < R\)`, String.raw`\(OM \geq 2R\)`],
        correct: 1,
        hint: "Đường tròn gồm các điểm cách O đúng một khoảng bằng bao nhiêu?",
        explain: "Theo định nghĩa, đường tròn gồm các điểm cách O đúng một khoảng R.",
      },
      {
        type: "mc",
        prompt: "Đường tròn có bao nhiêu trục đối xứng?",
        choices: ["Không có", "Một", "Hai", "Vô số (mỗi đường thẳng qua tâm)"],
        correct: 3,
        hint: "Đường tròn tròn tuyệt đối — quay quanh tâm thì luôn khớp.",
        explain: "Mỗi đường thẳng đi qua tâm đường tròn là một trục đối xứng của đường tròn.",
      },
      {
        type: "mc",
        prompt: "Tâm của đường tròn đường kính AB là:",
        choices: ["Điểm A", "Trung điểm của AB", "Một điểm bất kì trên AB", "Trọng tâm tam giác"],
        correct: 1,
        hint: "Đường kính đi qua tâm; tâm cách A và B đúng bằng nhau.",
        explain: "Đường tròn đường kính AB có tâm là trung điểm của AB, bán kính bằng nửa AB.",
      },
    ],
  },
  {
    id: "c5-b14",
    num: 14,
    chapter: 5,
    title: "Cung và dây của một đường tròn",
    summary: "Dây, đường kính là dây lớn nhất; góc ở tâm, cung tròn và số đo của cung.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Cây cung tên: sợi dây căng giữa hai đầu cây tre, cong lại thành một phần đường tròn — dây của đường tròn vậy. Cung và dây là "cặp bài trùng" của chương này.</p>
      <div class="definition">
        <p><strong>Dây</strong> (hay dây cung) của đường tròn là đoạn thẳng nối hai điểm tuỳ ý của một đường tròn. Mỗi dây đi qua tâm là một <strong>đường kính</strong> của đường tròn; đường kính của đường tròn bán kính \(R\) có độ dài bằng \(2R\).</p>
      </div>
      <div class="definition">
        <p><strong>Định lí (SGK).</strong> Trong một đường tròn, đường kính là dây cung lớn nhất.</p>
      </div>
      <div class="idea">
        <p><strong>Vì sao?</strong> Lấy dây \(AB\) không qua tâm, gọi \(O\) là tâm. Tam giác \(OAB\) cân: \(AB < OA + OB = 2R\) (bất đẳng thức tam giác). Dây nào càng "lệch" khỏi tâm càng ngắn; dây đi qua tâm chiếm trọn \(2R\) — dài nhất.</p>
      </div>
      <div class="definition">
        <p>Cho hai điểm \(A\) và \(B\) cùng thuộc một đường tròn. Hai điểm ấy chia đường tròn thành hai phần, mỗi phần gọi là một <strong>cung tròn</strong> (hay <strong>cung</strong>); \(A\), \(B\) gọi là hai mút của mỗi cung.</p>
        <p><strong>Góc ở tâm</strong> là góc có đỉnh trùng với tâm của đường tròn.</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 280 230" role="img" aria-label="Dây, đường kính, góc ở tâm và cung">
          <circle cx="140" cy="115" r="88" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="140" cy="115" r="3" fill="#FFFF00"/>
          <text x="145" y="131" font-size="13">O</text>
          <line x1="52" y1="115" x2="228" y2="115" stroke="#9A72AC" stroke-width="2"/>
          <text x="44" y="120" font-size="13">A</text>
          <text x="233" y="120" font-size="13">B</text>
          <text x="132" y="108" font-size="12" fill="#9A72AC">đường kính AB = 2R</text>
          <line x1="140" y1="115" x2="196" y2="40" stroke="#58C4DD" stroke-width="2"/>
          <line x1="140" y1="115" x2="72" y2="48" stroke="#58C4DD" stroke-width="2"/>
          <path d="M 115 92 A 34 34 0 0 1 162 92" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="128" y="82" font-size="13" fill="#FC6255">α</text>
          <line x1="72" y1="48" x2="196" y2="40" stroke="#FC6255" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="200" y="32" font-size="12">D</text>
          <text x="52" y="42" font-size="12">C</text>
          <text x="108" y="30" font-size="12" fill="#FC6255">góc α chắn cung CD</text>
        </svg>
        <figcaption>Góc ở tâm \(\alpha\) chắn cung; cung nhỏ có số đo \(&lt; 180^\circ\), cung lớn \(&gt; 180^\circ\).</figcaption>
      </figure>
      <p><strong>Chú ý (SGK).</strong> Khi góc \(AOB\) không bẹt thì cung nằm trong góc \(AOB\) gọi là <em>cung nhỏ</em> (kí hiệu gọn \(\widehat{AB}\)); cung còn lại gọi là <em>cung lớn</em>. Khi góc \(AOB\) bẹt thì mỗi cung \(AB\) được gọi là một <em>nửa đường tròn</em>. Ta còn nói góc \(AOB\) <em>chắn</em> cung \(AB\) hay cung \(AB\) <em>bị chắn</em> bởi góc \(AOB\).</p>
      <p><strong>Số đo của cung:</strong> số đo của cung nhỏ bằng số đo của góc ở tâm chắn cung đó (nghĩa là nhỏ hơn \(180^\circ\)); số đo của cung lớn bằng \(360^\circ\) trừ số đo của cung nhỏ.</p>
      <div class="example">
        <p>Cho \(\widehat{AOB} = 120^\circ\) với \(O\) là tâm. Khi đó cung nhỏ \(AB\) có số đo \(120^\circ\); cung lớn \(AmB\) có số đo \(360^\circ - 120^\circ = 240^\circ\).</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> "Góc ở tâm là <em>ông trùm số đo</em> — ông chắn cung nào, cung ấy mang số đo của ông (nếu là cung nhỏ); cung lớn thì trừ đi từ \(360^\circ\)."</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nghĩ mọi dây đều là đường kính — đường kính là dây đi <em>qua tâm</em>.</li>
          <li>Quên cộng trừ \(360^\circ\): cung lớn = \(360^\circ\) − số đo cung nhỏ, không phải gấp đôi.</li>
          <li>Nhầm cung (phần <em>đường cong</em>) với hình quạt (mảnh <em>bánh</em> có tâm — bài sau).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Trong một đường tròn, dây cung lớn nhất là:",
        choices: ["Một dây bất kì", "Dây không đi qua tâm", "Đường kính", "Bán kính"],
        correct: 2,
        hint: "Dây nào dài bằng đúng 2R?",
        explain: "Định lí: đường kính là dây cung lớn nhất, có độ dài 2R.",
      },
      {
        type: "num",
        prompt: String.raw`Góc ở tâm \(AOB\) chắn một cung nhỏ có số đo \(120^\circ\). Số đo của cung lớn có hai mút \(A, B\) là bao nhiêu độ?`,
        answer: 240,
        hint: "Cả hai cung cộng lại trọn một vòng tròn 360°.",
        explain: "Số đo cung lớn = 360° − 120° = 240°.",
      },
      {
        type: "num",
        prompt: String.raw`Góc ở tâm chắn một cung nhỏ bằng \(100^\circ\). Số đo của cung lớn là bao nhiêu độ?`,
        answer: 260,
        hint: "360 trừ đi 100.",
        explain: "360° − 100° = 260°.",
      },
    ],
  },
  {
    id: "c5-b15",
    num: 15,
    chapter: 5,
    title: "Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên",
    summary: "C = 2πR; l = (n/180)πR; Sq = (n/360)πR² = lR/2; Sv = π(R² − r²).",
    body: String.raw`
      <p>Tỉ số giữa chu vi và đường kính của một đường tròn luôn bằng một số vô tỉ không đổi gọi là số \(\pi\) (đọc là pi); trong đời sống ta thường lấy \(\pi \approx 3{,}14\).</p>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Cung \(n^\circ\) là mảnh \(\dfrac{n}{360}\) của "cái bánh" tròn. Muốn độ dài cung: lấy chu vi nhân \(\dfrac{n}{360}\). Muốn diện tích mảnh quạt: lấy diện tích hình tròn nhân \(\dfrac{n}{360}\). Một công thức, hai lần dùng!</p>
      </div>
      <div class="definition">
        <p>Độ dài \(C\) của đường tròn \((O;\ R)\), đường kính \(d = 2R\):</p>
        \[
          C = \pi d = 2\pi R. \tag{1}
        \]
        <p>Độ dài \(l\) của cung \(n^\circ\) trên đường tròn \((O;\ R)\):</p>
        \[
          l = \frac{n}{180}\pi R. \tag{2}
        \]
        <p><strong>Nhận xét.</strong> Từ (1) và (2): \(\dfrac{l}{C} = \dfrac{n}{360}\) — tỉ số giữa độ dài cung \(n^\circ\) và độ dài đường tròn (cùng bán kính) đúng bằng \(\dfrac{n}{360}\).</p>
      </div>
      <div class="definition">
        <p><strong>Hình quạt tròn</strong> là phần hình tròn giới hạn bởi một cung tròn và hai bán kính đi qua hai đầu mút của cung đó.</p>
        <p><strong>Hình vành khuyên</strong> (còn gọi là hình vành khăn) là phần nằm giữa hai đường tròn có cùng tâm và bán kính khác nhau (hai <em>đường tròn đồng tâm</em>).</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 200 200" width="150" role="img" aria-label="Hình quạt tròn">
              <circle cx="100" cy="105" r="75" fill="none" stroke="#DDDDDD" stroke-width="1.5"/>
              <path d="M 100 105 L 100 30 A 75 75 0 0 1 165 141 Z" fill="#FFFF00" fill-opacity="0.28" stroke="#FC6255" stroke-width="2"/>
              <text x="104" y="78" font-size="13" fill="#FC6255">n°</text>
              <text x="128" y="60" font-size="13">R</text>
              <text x="112" y="122" font-size="13">O</text>
            </svg>
            <p>Hình quạt tròn: \(S_q = \dfrac{n}{360}\pi R^2 = \dfrac{l \cdot R}{2}\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 200 200" width="150" role="img" aria-label="Hình vành khuyên">
              <path d="M 100 15 a 85 85 0 1 0 0.001 0 Z M 100 55 a 45 45 0 1 1 -0.001 0 Z" fill="#58C4DD" fill-opacity="0.28" fill-rule="evenodd" stroke="#DDDDDD" stroke-width="1.5"/>
              <line x1="100" y1="100" x2="178" y2="55" stroke="#FC6255" stroke-width="2"/>
              <text x="140" y="70" font-size="13">R</text>
              <line x1="100" y1="100" x2="132" y2="82" stroke="#83C167" stroke-width="2"/>
              <text x="115" y="84" font-size="13" fill="#83C167">r</text>
            </svg>
            <p>Hình vành khuyên: \(S_v = \pi(R^2 - r^2)\)</p>
          </div>
        </div>
        <figcaption>Vành khuyên = hình tròn lớn trừ hình tròn nhỏ (đồng tâm).</figcaption>
      </figure>
      <div class="definition">
        <p>Diện tích \(S_q\) của hình quạt tròn bán kính \(R\) ứng với cung \(n^\circ\) (với \(l\) là độ dài cung):</p>
        \[
          S_q = \frac{n}{360}\pi R^2 = \frac{l \cdot R}{2}. \tag{3}
        \]
        <p>Diện tích \(S_v\) của hình vành khuyên tạo bởi hai đường tròn đồng tâm có bán kính \(R\) và \(r\):</p>
        \[
          S_v = \pi\left(R^2 - r^2\right) \quad (R > r). \tag{4}
        \]
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Hình vành khuyên giữa hai đường tròn đồng tâm bán kính 3 m và 5 m có diện tích \(S_v = \pi(5^2 - 3^2) = 16\pi\) (m²).</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> cung n° và quạt n° đều là mảnh \(\dfrac{n}{360}\): <em>cung lấy phần chu vi, quạt lấy phần diện tích</em>. Và \(S_q = \dfrac{lR}{2}\) — "cung nhân bán kính, chia đôi" (như tam giác: đáy × cao ÷ 2).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm 180 với 360: độ dài cung chia cho \(180\), diện tích quạt chia cho \(360\) — nhớ từ công thức gốc (2) và (3).</li>
          <li>Đơn vị: bán kính 9 cm thì độ dài ra cm, diện tích ra cm² — đừng trộn.</li>
          <li>Vành khuyên nhân nhầm: \(\pi R^2 - \pi r^2 = \pi(R^2 - r^2)\), không phải \(\pi(R - r)^2\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Độ dài cung \(40^\circ\) của đường tròn bán kính 9 cm là \(l = k\pi\) (cm). Giá trị \(k\) là bao nhiêu?`,
        answer: 2,
        hint: "l = (n/180)·πR với n = 40, R = 9.",
        explain: "l = (40/180)·π·9 = 2π cm, nên k = 2.",
      },
      {
        type: "mc",
        prompt: String.raw`Diện tích hình quạt tròn bán kính \(R\) ứng với cung \(90^\circ\) là:`,
        choices: [String.raw`\(\dfrac{\pi R^2}{4}\)`, String.raw`\(\dfrac{\pi R^2}{2}\)`, String.raw`\(\pi R^2\)`, String.raw`\(\dfrac{2\pi R^2}{3}\)`],
        correct: 0,
        hint: "90° là bao nhiêu phần của 360°?",
        explain: "Sq = (90/360)·πR² = πR²/4.",
      },
      {
        type: "num",
        prompt: String.raw`Hình vành khuyên giữa hai đường tròn đồng tâm bán kính 3 m và 5 m có diện tích \(k\pi\) (m²). Giá trị \(k\) là bao nhiêu?`,
        answer: 16,
        hint: "π(R² − r²) = π(5² − 3²) = π · ?",
        explain: "Sv = π(5² − 3²) = 16π m².",
      },
    ],
  },
  {
    id: "c5-b16",
    num: 16,
    chapter: 5,
    title: "Vị trí tương đối của đường thẳng và đường tròn",
    summary: "Cắt nhau (d < R), tiếp xúc (d = R), không giao nhau (d > R); dấu hiệu nhận biết tiếp tuyến.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Gieo một đồng xu lên tờ giấy có các đường thẳng song song cách đều: đồng xu có thể đè lên một đường, không chạm đường nào, hoặc che nhiều đường. Ba cảnh ấy chính là ba vị trí tương đối của đường thẳng và đường tròn.</p>
      <div class="definition">
        <p>Cho đường thẳng \(a\) và đường tròn \((O)\):</p>
        <p>1) \(a\) và \((O)\) gọi là <strong>cắt nhau</strong> nếu chúng có đúng hai điểm chung.</p>
        <p>2) \(a\) và \((O)\) gọi là <strong>tiếp xúc</strong> với nhau nếu chúng có duy nhất một điểm chung \(H\). Điểm chung ấy gọi là <strong>tiếp điểm</strong>; khi đó đường thẳng \(a\) còn gọi là <strong>tiếp tuyến</strong> của đường tròn \((O)\) tại \(H\).</p>
        <p>3) \(a\) và \((O)\) gọi là <strong>không giao nhau</strong> nếu chúng không có điểm chung.</p>
      </div>
      <div class="definition">
        <p><strong>Nhận xét.</strong> Cho đường thẳng \(a\) và đường tròn \((O;\ R)\), gọi \(d\) là khoảng cách từ \(O\) đến \(a\): cắt nhau khi \(d < R\); tiếp xúc với nhau khi \(d = R\); không giao nhau khi \(d > R\). Nếu đường thẳng \(a\) tiếp xúc với đường tròn \((O)\) tại \(H\) thì \(OH \perp a\).</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 130 130" width="120" role="img" aria-label="Đường thẳng cắt đường tròn">
              <circle cx="65" cy="55" r="40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="65" cy="55" r="2.5" fill="#FFFF00"/>
              <line x1="8" y1="70" x2="122" y2="70" stroke="#58C4DD" stroke-width="2"/>
              <circle cx="32" cy="70" r="4" fill="#FC6255"/>
              <circle cx="98" cy="70" r="4" fill="#FC6255"/>
              <line x1="65" y1="55" x2="65" y2="70" stroke="#9A72AC" stroke-width="1.8"/>
              <text x="70" y="67" font-size="11">d</text>
              <text x="38" y="93" font-size="11" fill="#83C167">d &lt; R</text>
            </svg>
            <p>Cắt nhau: 2 điểm chung</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 130 130" width="120" role="img" aria-label="Đường thẳng tiếp xúc đường tròn">
              <circle cx="65" cy="55" r="40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="65" cy="55" r="2.5" fill="#FFFF00"/>
              <line x1="8" y1="95" x2="122" y2="95" stroke="#58C4DD" stroke-width="2"/>
              <circle cx="65" cy="95" r="4" fill="#FC6255"/>
              <line x1="65" y1="55" x2="65" y2="95" stroke="#9A72AC" stroke-width="1.8"/>
              <text x="70" y="80" font-size="11">d = R</text>
              <text x="70" y="108" font-size="11">H</text>
              <rect x="65" y="88" width="8" height="7" fill="none" stroke="#DDDDDD" stroke-width="1"/>
            </svg>
            <p>Tiếp xúc: 1 tiếp điểm, \(OH \perp a\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 130 130" width="120" role="img" aria-label="Đường thẳng không giao đường tròn">
              <circle cx="65" cy="52" r="40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="65" cy="52" r="2.5" fill="#FFFF00"/>
              <line x1="8" y1="112" x2="122" y2="112" stroke="#58C4DD" stroke-width="2"/>
              <line x1="65" y1="52" x2="65" y2="112" stroke="#9A72AC" stroke-width="1.8"/>
              <text x="70" y="90" font-size="11">d</text>
              <text x="38" y="104" font-size="11" fill="#83C167">d &gt; R</text>
            </svg>
            <p>Không giao nhau: 0 điểm chung</p>
          </div>
        </div>
        <figcaption>Khoảng cách \(d\) từ tâm tới đường thẳng quyết định mọi thứ.</figcaption>
      </figure>
      <div class="definition">
        <p><strong>Định lí 1 (dấu hiệu nhận biết tiếp tuyến).</strong> Nếu một đường thẳng đi qua một điểm nằm trên một đường tròn và vuông góc với bán kính đi qua điểm đó thì đường thẳng ấy là một tiếp tuyến của đường tròn.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Muốn chứng minh một đường thẳng là tiếp tuyến: chỉ đường thẳng <em>đi qua điểm trên đường tròn</em> rồi chứng minh nó <em>vuông góc bán kính</em> tại điểm ấy. Hai điều kiện, không thiếu một.</p>
      </div>
      <div class="definition">
        <p><strong>Định lí 2 (hai tiếp tuyến cắt nhau).</strong> Nếu hai tiếp tuyến của đường tròn \((O)\) cắt nhau tại điểm \(M\) thì:</p>
        <ul>
          <li>điểm \(M\) cách đều hai tiếp điểm;</li>
          <li>\(MO\) là tia phân giác của góc tạo bởi hai tiếp tuyến;</li>
          <li>\(OM\) là tia phân giác của góc tạo bởi hai bán kính qua hai tiếp điểm.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ 2 (SGK).</strong> Cho hai tiếp tuyến \(MA\), \(MB\) của \((O;\ R)\) với \(A\), \(B\) là hai tiếp điểm, \(R = 2\) cm và \(MO = 4\) cm. Theo Định lí 2, \(OM\) là tia phân giác của \(\widehat{AOB}\), nên trong tam giác cân \(AOB\), \(OM \perp AB\). Tam giác \(OAM\) vuông tại \(A\): \(AM^2 = OM^2 - OA^2 = 4^2 - 2^2 = 12\), suy ra \(AM = 2\sqrt{3}\) cm và \(BM = 2\sqrt{3}\) cm.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Điều kiện tiếp xúc là \(d = R\) — viết \(d \leq R\) là sai (d nhỏ hơn thì cắt nhau ở hai điểm).</li>
          <li>Định lí 1 cần <em>cả hai</em>: đi qua điểm trên đường tròn <em>và</em> vuông góc bán kính qua điểm đó; chỉ vuông góc thôi chưa đủ.</li>
          <li>Hai tiếp tuyến cắt nhau: nhớ cả ba hệ quả (cách đều, phân giác góc tiếp tuyến, phân giác góc bán kính), đừng chỉ nhớ MA = MB.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Điểm \(O\) cách đường thẳng \(a\) một khoảng 4 cm. Đường tròn \((O;\ 5\ \text{cm})\) và \(a\):`,
        choices: ["không giao nhau", "tiếp xúc nhau", "cắt nhau", "cắt nhau tại đúng 1 điểm"],
        correct: 2,
        hint: "So sánh d = 4 với R = 5.",
        explain: "d = 4 < R = 5 nên đường thẳng và đường tròn cắt nhau (có đúng hai điểm chung).",
      },
      {
        type: "mc",
        prompt: String.raw`Nếu đường thẳng \(a\) tiếp xúc với đường tròn \((O)\) tại \(H\) thì:`,
        choices: [String.raw`\(OH \perp a\)`, String.raw`\(OH \parallel a\)`, String.raw`\(OH = 2R\)`, String.raw`\(H\) là tâm của đường tròn`],
        correct: 0,
        hint: "Bán kính đứng thẳng ở đúng chỗ chạm.",
        explain: "Bán kính qua tiếp điểm vuông góc với tiếp tuyến: OH ⊥ a.",
      },
      {
        type: "mc",
        prompt: "Hai tiếp tuyến của một đường tròn cắt nhau tại M thì:",
        choices: [
          "M cách đều hai tiếp điểm",
          "M gần tiếp điểm thứ nhất hơn",
          "MO không có tính chất gì đặc biệt",
          "Hai tiếp điểm trùng nhau",
        ],
        correct: 0,
        hint: "Định lí 2 liệt kê ba tính chất — chọn câu đúng trong số đó.",
        explain: "Theo Định lí 2: M cách đều hai tiếp điểm; MO và OM lần lượt là tia phân giác của góc tạo bởi hai tiếp tuyến và của góc tạo bởi hai bán kính qua hai tiếp điểm.",
      },
    ],
  },
  {
    id: "c5-b17",
    num: 17,
    chapter: 5,
    title: "Vị trí tương đối của hai đường tròn",
    summary: "Cắt nhau, tiếp xúc ngoài/trong, ngoài nhau, đựng nhau — so sánh OO' với R và R'.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Nguyệt thực: Mặt Trăng chui vào bóng Trái Đất — hai hình tròn đè lên nhau theo nhiều kiểu. Toán học xếp hết các kiểu ấy thành một bảng, chỉ bằng cách so sánh khoảng cách hai tâm \(OO'\) với hai bán kính \(R\), \(R'\).</p>
      <p>Sau đây, khi nói hai đường tròn mà không có giải thích gì thêm, ta hiểu đó là hai <em>đường tròn phân biệt</em>. Đặt \((O;\ R)\) và \((O';\ R')\) với \(R \geq R'\).</p>
      <div class="definition">
        <p>Nếu hai đường tròn có đúng hai điểm chung thì ta nói đó là <strong>hai đường tròn cắt nhau</strong>. Hai điểm chung gọi là hai <em>giao điểm</em> của chúng. Hai đường tròn cắt nhau khi</p>
        \[
          R - R' < OO' < R + R' \quad (R > R').
        \]
      </div>
      <div class="definition">
        <p>Nếu hai đường tròn có duy nhất một điểm chung thì ta nói đó là <strong>hai đường tròn tiếp xúc nhau</strong>. Điểm chung gọi là <strong>tiếp điểm</strong> của chúng. Người ta phân biệt hai trường hợp: <em>tiếp xúc ngoài</em> và <em>tiếp xúc trong</em>.</p>
        <p><strong>Nhận xét.</strong> Hai đường tròn tiếp xúc ngoài khi \(OO' = R + R'\); tiếp xúc trong khi \(OO' = R - R'\) (\(R > R'\)). Nếu hai đường tròn tiếp xúc với nhau thì <strong>tiếp điểm thẳng hàng với hai tâm</strong>.</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 140 110" width="120" role="img" aria-label="Hai đường tròn cắt nhau">
              <circle cx="50" cy="55" r="40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="88" cy="55" r="32" fill="none" stroke="#58C4DD" stroke-width="2"/>
              <line x1="50" y1="55" x2="88" y2="55" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
              <circle cx="50" cy="55" r="2" fill="#FFFF00"/>
              <circle cx="88" cy="55" r="2" fill="#FFFF00"/>
              <text x="76" y="49" font-size="11">OO′</text>
            </svg>
            <p>Cắt nhau<br>\(R - R' &lt; OO' &lt; R + R'\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 140 110" width="120" role="img" aria-label="Hai đường tròn tiếp xúc ngoài">
              <circle cx="45" cy="55" r="27" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="95" cy="55" r="23" fill="none" stroke="#58C4DD" stroke-width="2"/>
              <line x1="45" y1="55" x2="95" y2="55" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
              <circle cx="70" cy="55" r="3.5" fill="#FC6255"/>
              <text x="61" y="70" font-size="11">tiếp điểm</text>
            </svg>
            <p>Tiếp xúc ngoài<br>\(OO' = R + R'\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 140 110" width="120" role="img" aria-label="Hai đường tròn tiếp xúc trong">
              <circle cx="58" cy="55" r="44" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="82" cy="55" r="20" fill="none" stroke="#58C4DD" stroke-width="2"/>
              <line x1="58" y1="55" x2="82" y2="55" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
              <circle cx="102" cy="55" r="3.5" fill="#FC6255"/>
              <text x="86" y="44" font-size="11">tiếp điểm</text>
            </svg>
            <p>Tiếp xúc trong<br>\(OO' = R - R'\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 140 110" width="120" role="img" aria-label="Hai đường tròn ngoài nhau">
              <circle cx="38" cy="55" r="30" fill="none" stroke="#DDDDDD" stroke-width="2"/>
              <circle cx="103" cy="55" r="24" fill="none" stroke="#58C4DD" stroke-width="2"/>
              <line x1="38" y1="55" x2="103" y2="55" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
              <text x="58" y="48" font-size="11">OO′</text>
            </svg>
            <p>Ngoài nhau<br>\(OO' &gt; R + R'\)</p>
          </div>
        </div>
        <figcaption>Bốn "kiểu chạm" — còn kiểu thứ năm là \((O)\) đựng \((O')\): \(OO' &lt; R - R'\).</figcaption>
      </figure>
      <div class="definition">
        <p>Nếu hai đường tròn không có điểm chung nào thì ta nói đó là <strong>hai đường tròn không giao nhau</strong>: hai đường tròn <em>ngoài nhau</em> khi \(OO' > R + R'\); đường tròn \((O;\ R)\) <em>đựng</em> đường tròn \((O';\ R')\) khi \(R > R'\) và \(OO' < R - R'\). Đặc biệt, khi \(O\) trùng với \(O'\) và \(R \neq R'\) thì ta có hai đường tròn <em>đồng tâm</em>.</p>
      </div>
      <table>
        <tr><th>Vị trí tương đối của \((O;\ R)\) và \((O';\ R')\) \((R \geq R')\)</th><th>Số điểm chung</th><th>Hệ thức giữa \(OO'\) với \(R, R'\)</th></tr>
        <tr><td>Cắt nhau</td><td>2</td><td>\(R - R' < OO' < R + R'\)</td></tr>
        <tr><td>Tiếp xúc ngoài / tiếp xúc trong</td><td>1</td><td>\(OO' = R + R'\) / \(OO' = R - R' > 0\)</td></tr>
        <tr><td>Không giao nhau: ngoài nhau / \((O)\) đựng \((O')\)</td><td>0</td><td>\(OO' > R + R'\) / \(OO' < R - R'\)</td></tr>
      </table>
      <div class="example">
        <p><strong>Ví dụ 1 (SGK).</strong> Với \(OO' = 5\) cm, hai đường tròn \((O;\ 4\ \text{cm})\) và \((O';\ 3\ \text{cm})\): đặt \(R = 4, R' = 3\), ta thấy \(1 < 5 < 7\), tức \(R - R' < OO' < R + R'\), nên hai đường tròn cắt nhau.</p>
        <p><strong>Ví dụ 3 (SGK).</strong> \((O;\ 3\ \text{cm})\) và \((O';\ 5\ \text{cm})\) với \(OO' > 8\) cm: vì \(OO' > 8 = R + R'\) nên hai đường tròn ngoài nhau.</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ.</strong> Cộng \(R + R'\): <em>đè nổi hay không?</em> Trừ \(R - R'\): <em>nhét vừa hay không?</em> Khoảng cách hai tâm nằm giữa hai mốc này thì hai vòng "cài cài" nhau — cắt nhau; chạm đúng mốc thì tiếp xúc; vọt ngoài hai mốc thì xa nhau hoặc nhốt nhau.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Tiếp xúc trong chỉ xảy ra khi \(R > R'\); hai đường tròn bằng nhau không tiếp xúc trong.</li>
          <li>Quên trường hợp đựng (đồng tâm là ca đặc biệt: tâm trùng, bán kính khác).</li>
          <li>Khi tính, luôn đặt \(R \geq R'\) trước để tránh trừ ra số âm gây rối.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: String.raw`Hai đường tròn \((O;\ R)\) và \((O';\ R')\) với \(OO' = 8\) cm, \(R = 5\) cm, \(R' = 3\) cm. Hai đường tròn:`,
        choices: ["cắt nhau", "tiếp xúc ngoài", "tiếp xúc trong", "ngoài nhau"],
        correct: 1,
        hint: "Tính R + R′ rồi so với OO′.",
        explain: "OO′ = 8 = 5 + 3 = R + R′ nên hai đường tròn tiếp xúc ngoài.",
      },
      {
        type: "mc",
        prompt: String.raw`Hai đường tròn cắt nhau khi:`,
        choices: [
          String.raw`\(R - R' < OO' < R + R'\)`,
          String.raw`\(OO' = R + R'\)`,
          String.raw`\(OO' < R - R'\)`,
          String.raw`\(OO' > R + R'\)`,
        ],
        correct: 0,
        hint: "Xem lại bảng tổng kết — dòng có 2 điểm chung.",
        explain: "Hai đường tròn có đúng hai điểm chung (cắt nhau) khi khoảng cách hai tâm thoả R − R′ < OO′ < R + R′.",
      },
      {
        type: "num",
        prompt: String.raw`Cho \((O;\ 5\ \text{cm})\) và điểm \(I\) cách \(O\) một khoảng 2 cm. Hai đường tròn \((O;\ 5\ \text{cm})\) và \((I;\ 4\ \text{cm})\) có bao nhiêu điểm chung?`,
        answer: 2,
        hint: "Tính R − r và R + r rồi xem OI = 2 nằm ở đâu giữa chúng.",
        explain: "R − r = 1 < OI = 2 < R + r = 9 nên hai đường tròn cắt nhau, có đúng 2 giao điểm.",
      },
    ],
  },
];

function courseStub(grade, level) {
  return {
    id: String(grade),
    grade,
    title: "Toán " + grade,
    level,
    subtitle: "",
    blurb: "Bài học sẽ được thêm dần.",
    chapters: [],
    lessons: [],
  };
}

const COURSES = [
  courseStub(6, "THCS"),
  courseStub(7, "THCS"),
  courseStub(8, "THCS"),
  {
    id: "9",
    grade: 9,
    title: "Toán 9",
    level: "THCS",
    subtitle: "Tập 1 · Kết nối tri thức với cuộc sống",
    blurb: "Chương I–V, Bài 1–17 của tập một.",
    chapters: CHAPTERS,
    lessons: LESSONS,
  },
  courseStub(10, "THPT"),
  courseStub(11, "THPT"),
  courseStub(12, "THPT"),
];
