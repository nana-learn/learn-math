// Bài học theo mạch Toán 9 – Kết nối tri thức (Tập 1 & Tập 2), Chương I–X, Bài 1–32.
// Viết để học sinh hiểu vì sao, không chỉ chép định nghĩa. Mỗi bài: vì sao → cách nghĩ →
// ví dụ làm chậm → luyện tập. Bài 1–10 viết lại cho hiểu; mỗi bài có ví dụ làm chậm.
const CHAPTERS = [
  { id: 1, title: "Phương trình và hệ hai phương trình bậc nhất hai ẩn" },
  { id: 2, title: "Phương trình và bất phương trình bậc nhất một ẩn" },
  { id: 3, title: "Căn bậc hai và căn bậc ba" },
  { id: 4, title: "Hệ thức lượng trong tam giác vuông" },
  { id: 5, title: "Đường tròn" },
  { id: 6, title: "Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn" },
  { id: 7, title: "Tần số và tần số tương đối" },
  { id: 8, title: "Xác suất của biến cố trong một số mô hình xác suất đơn giản" },
  { id: 9, title: "Đường tròn ngoại tiếp và đường tròn nội tiếp" },
  { id: 10, title: "Một số hình khối trong thực tiễn" },
];

const LESSONS = [
  // ============ CHƯƠNG I ============
  {
    id: "c1-b1",
    num: 1,
    chapter: 1,
    title: "Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
    summary: "Một điều kiện cho hai số thì còn vô số cặp nghiệm, vẽ thành một đường thẳng. Hệ là hai điều kiện cùng lúc.",
    body: String.raw`
      <p><strong>Vì sao cần hai ẩn?</strong> Phương trình một ẩn như \(2x + 5 = 11\) thường khoá chết một số: chỉ có \(x = 3\) làm hai vế bằng nhau. Nhiều bài toán không như thế. Có <em>hai</em> số chưa biết, mà ta mới biết <em>một</em> mối liên hệ giữa chúng.</p>
      <p>Mai mua quýt và cam. Quýt 15 nghìn một quả, cam 20 nghìn một quả, trả đúng 90 nghìn. Gọi \(x\) là số quýt, \(y\) là số cam. Câu chuyện tiền chỉ cho một hệ thức:</p>
      \[
        15x + 20y = 90.
      \]
      <p>Chia cả hai vế cho 5 thì các cặp nghiệm không đổi, vì hai vế bị chia cùng một số khác 0. Phương trình gọn hơn là \(3x + 4y = 18\). Nó <strong>chưa</strong> nói Mai mua mấy quả mỗi loại. Nó chỉ nói: tiền quýt cộng tiền cam phải bằng 90 nghìn.</p>
      <div class="idea">
        <p><strong>Thử một cách, rồi đổi cách.</strong> Chọn mua 2 quýt, tức \(x = 2\). Thế vào: \(3 \cdot 2 + 4y = 18\), nên \(6 + 4y = 18\), \(4y = 12\), \(y = 3\). Cặp \((2;\ 3)\) làm phương trình đúng. Kiểm lại bằng tiền: \(15 \cdot 2 + 20 \cdot 3 = 90\).</p>
        <p>Mua 6 quýt: \(3 \cdot 6 + 4y = 18\), tức \(y = 0\). Cặp \((6;\ 0)\) cũng đúng — 6 quýt, không mua cam.</p>
        <p>Mua 1 quýt thì \(4y = 15\), \(y = \dfrac{15}{4}\). Về số, cặp \(\left(1;\ \dfrac{15}{4}\right)\) vẫn là nghiệm. Không mua được 3,75 quả là điều kiện của bài toán thực tế, chưa nằm trong phương trình.</p>
      </div>
      <p>Điểm cần nắm trước định nghĩa: <strong>một phương trình hai ẩn không khoá cả hai số</strong>. Ta được chọn một số, số kia bị kéo theo. Đổi số đã chọn thì được nghiệm khác. Vì vậy thường có vô số nghiệm. Đừng đi tìm "một nghiệm duy nhất" như với phương trình một ẩn.</p>
      <div class="definition">
        <p><strong>Phương trình bậc nhất hai ẩn</strong> \(x\) và \(y\) là hệ thức dạng</p>
        \[
          ax + by = c,
        \]
        <p>trong đó \(a\), \(b\), \(c\) là số đã biết, và \(a \neq 0\) hoặc \(b \neq 0\): ít nhất một ẩn thật sự có mặt ở bậc 1.</p>
        <p>Cặp \((x_0;\ y_0)\) là một <em>nghiệm</em> nếu thế \(x = x_0\), \(y = y_0\) thì \(ax_0 + by_0 = c\) là câu đúng. Nghiệm là cả cặp, không phải từng số đứng riêng.</p>
      </div>
      <div class="idea">
        <p><strong>Đọc từng chữ.</strong> \(a\), \(b\), \(c\) đã biết; \(x\), \(y\) chưa biết. "Bậc nhất" nghĩa là mỗi ẩn chỉ đứng ở bậc 1: không có \(x^2\), không có \(xy\), không có \(\dfrac{1}{x}\). "Hai ẩn" vẫn đúng khi một hệ số bằng 0. \(0x + y = -1\) là phương trình bậc nhất hai ẩn, vì \(b = 1 \neq 0\): nó bắt \(y = -1\), còn \(x\) muốn bao nhiêu cũng được. Trên hình, đó là đường thẳng nằm ngang.</p>
      </div>
      <div class="example">
        <p><strong>Kiểm tra một cặp — làm chậm.</strong> Xét \(4x + 3y = 5\).</p>
        <p>Cặp \((2;\ -1)\): vế trái \(4 \cdot 2 + 3 \cdot (-1) = 8 - 3 = 5\), bằng vế phải. Đúng, nên \((2;\ -1)\) là nghiệm.</p>
        <p>Cặp \((1;\ 0)\): vế trái \(4 \cdot 1 + 3 \cdot 0 = 4\), mà \(4 \neq 5\). Không phải nghiệm. Lệch một chút là loại; không có "gần đúng".</p>
      </div>
      <div class="memory">
        <p><strong>Cách tìm thêm nghiệm.</strong> Chọn một giá trị cho \(x\) (hoặc cho \(y\)). Thế vào, được phương trình một ẩn. Giải ẩn còn lại. Viết cặp \((x;\ y)\). Đổi số đã chọn thì được nghiệm khác.</p>
      </div>
      <div class="example">
        <p><strong>Làm với</strong> \(x + 2y = 3\). Câu này nói: lấy \(x\), cộng thêm gấp đôi \(y\), phải ra 3.</p>
        <table>
          <tr><th>Chọn</th><th>Phương trình còn lại</th><th>Cặp nghiệm</th></tr>
          <tr><td>\(y = 0\)</td><td>\(x = 3\)</td><td>\((3;\ 0)\)</td></tr>
          <tr><td>\(y = 1\)</td><td>\(x + 2 = 3\)</td><td>\((1;\ 1)\)</td></tr>
          <tr><td>\(y = 2\)</td><td>\(x + 4 = 3\)</td><td>\((-1;\ 2)\)</td></tr>
          <tr><td>\(x = 5\)</td><td>\(5 + 2y = 3\)</td><td>\((5;\ -1)\)</td></tr>
        </table>
        <p>Bốn cặp đều đúng. Không cặp nào "đúng hơn" cặp kia.</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 320 200" role="img" aria-label="Tập nghiệm của x + 2y = 3 là một đường thẳng">
          <line x1="22" y1="124" x2="306" y2="124" stroke="#BBBBBB" stroke-width="1.5"/>
          <line x1="100" y1="16" x2="100" y2="186" stroke="#BBBBBB" stroke-width="1.5"/>
          <g stroke="#BBBBBB" stroke-width="1.2">
            <line x1="64" y1="120" x2="64" y2="128"/>
            <line x1="136" y1="120" x2="136" y2="128"/>
            <line x1="172" y1="120" x2="172" y2="128"/>
            <line x1="208" y1="120" x2="208" y2="128"/>
            <line x1="96" y1="88" x2="104" y2="88"/>
            <line x1="96" y1="52" x2="104" y2="52"/>
          </g>
          <g font-size="11">
            <text x="64" y="140" text-anchor="middle">-1</text>
            <text x="136" y="140" text-anchor="middle">1</text>
            <text x="172" y="140" text-anchor="middle">2</text>
            <text x="208" y="140" text-anchor="middle">3</text>
            <text x="90" y="92" text-anchor="end">1</text>
            <text x="108" y="56">2</text>
          </g>
          <line x1="40" y1="40" x2="280" y2="160" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="64" cy="52" r="4.5" fill="#FC6255"/>
          <text x="56" y="70" font-size="13" text-anchor="end">(-1; 2)</text>
          <circle cx="136" cy="88" r="4.5" fill="#58C4DD"/>
          <text x="146" y="78" font-size="13">(1; 1)</text>
          <text x="294" y="116" font-size="12">x</text>
          <text x="108" y="24" font-size="12">y</text>
        </svg>
        <figcaption>\((-1;\ 2)\) và \((1;\ 1)\) đều thoả \(x + 2y = 3\). Đường thẳng còn cắt trục \(x\) tại \((3;\ 0)\).</figcaption>
      </figure>
      <p>Vì sao là đường thẳng, không phải đường cong? Giải \(y\) theo \(x\): \(2y = 3 - x\), nên \(y = -\dfrac{1}{2}x + \dfrac{3}{2}\). Mỗi lần \(x\) tăng 2, \(y\) giảm đúng 1. Mức đổi không đổi, nên các điểm nằm thẳng hàng. Mọi nghiệm là một điểm trên đường đó; mọi điểm trên đường đó là một nghiệm.</p>
      <div class="warn">
        <p><strong>Cái gì trông giống mà không phải.</strong></p>
        <ul>
          <li>\(x^2 + y = 3\): \(x\) bậc hai, không viết được dạng \(ax + by = c\).</li>
          <li>\(xy = 6\): hai ẩn nhân với nhau, không phải tổng \(ax + by\).</li>
          <li>\(0x + 0y = 3\): cả \(a\) và \(b\) đều bằng 0, không còn ẩn bậc nhất. Vế trái luôn là 0, mà \(0 = 3\) sai với mọi cặp.</li>
          <li>\(0x + y = -1\): <em>có</em> phải. \(y\) bị khoá bằng \(-1\), \(x\) tự do.</li>
        </ul>
      </div>
      <p><strong>Khi một điều kiện chưa đủ.</strong> Biết \(3x + 4y = 18\) thì Mai còn rất nhiều cách mua. Thêm một câu: tổng số quả là 5, tức \(x + y = 5\). Một cặp muốn được nhận phải làm <em>cả hai</em> câu đúng cùng lúc.</p>
      <div class="definition">
        <p>Hai phương trình bậc nhất hai ẩn viết cùng nhau là một <strong>hệ hai phương trình bậc nhất hai ẩn</strong>:</p>
        \[
          \begin{cases} ax + by = c \\ a'x + b'y = c'. \end{cases}
        \]
        <p>Cặp \((x_0;\ y_0)\) là nghiệm của hệ khi nó là nghiệm của phương trình thứ nhất <em>và</em> của phương trình thứ hai. Đúng một vế, sai vế kia: chưa phải nghiệm của hệ.</p>
      </div>
      <div class="example">
        <p><strong>So hai cặp của Mai.</strong> Hệ là \(\begin{cases} 3x + 4y = 18 \\ x + y = 5. \end{cases}\)</p>
        <p>\((2;\ 3)\): tiền \(3 \cdot 2 + 4 \cdot 3 = 18\), đúng; số quả \(2 + 3 = 5\), đúng. Vậy \((2;\ 3)\) là nghiệm của hệ.</p>
        <p>\((6;\ 0)\): tiền \(18 + 0 = 18\), đúng; số quả \(6 + 0 = 6 \neq 5\), sai. Đây là nghiệm của phương trình tiền, <strong>không</strong> phải nghiệm của hệ.</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 120 90" width="140" role="img" aria-label="Một đường thẳng mang nhiều nghiệm">
              <line x1="14" y1="68" x2="106" y2="20" stroke="#58C4DD" stroke-width="2"/>
              <circle cx="37" cy="56" r="3.5" fill="#FC6255"/>
              <circle cx="60" cy="44" r="3.5" fill="#FFFF00"/>
              <circle cx="83" cy="32" r="3.5" fill="#58C4DD"/>
            </svg>
            <p>Một phương trình:<br>cả đường đều là nghiệm</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 120 90" width="140" role="img" aria-label="Hai đường thẳng cắt nhau tại một nghiệm">
              <line x1="16" y1="70" x2="104" y2="18" stroke="#58C4DD" stroke-width="2"/>
              <line x1="18" y1="20" x2="102" y2="68" stroke="#FC6255" stroke-width="2"/>
              <circle cx="60" cy="44" r="4" fill="#FFFF00"/>
            </svg>
            <p>Hệ hai phương trình:<br>chỉ giao điểm mới đậu</p>
          </div>
        </div>
        <figcaption>Thêm một điều kiện là thêm một đường. Nghiệm của hệ là điểm chung.</figcaption>
      </figure>
      <div class="idea">
        <p><strong>Ba khả năng, nhìn trước đã.</strong> Hai đường thường cắt nhau tại một điểm: hệ có một nghiệm. Song song, không cắt: vô nghiệm. Trùng nhau: mọi điểm trên đường đó đều thoả cả hai phương trình, hệ có vô số nghiệm. Bài sau học cách tìm giao điểm bằng tính toán. Bài này cần thấy nghiệm của hệ là gì, và biết kiểm tra một cặp.</p>
      </div>
      <div class="example">
        <p><strong>Kiểm tra, chưa cần giải.</strong> Hệ \(\begin{cases} x + y = 5 \\ x - y = 1. \end{cases}\)</p>
        <p>\((3;\ 2)\): \(3 + 2 = 5\) và \(3 - 2 = 1\). Cả hai đúng, nên \((3;\ 2)\) là nghiệm của hệ.</p>
        <p>\((4;\ 1)\): \(4 + 1 = 5\) đúng, nhưng \(4 - 1 = 3 \neq 1\). Loại.</p>
        <p>\((2;\ 3)\): tổng bằng 5, nhưng \(2 - 3 = -1 \neq 1\). Cũng loại. Đúng một phương trình thì chưa được nhận.</p>
      </div>
      <div class="memory">
        <p><strong>Bốn câu mang theo.</strong></p>
        <ul>
          <li>Một phương trình hai ẩn là một điều kiện: thường vô số cặp, vẽ thành một đường thẳng.</li>
          <li>Nghiệm luôn là cặp \((x;\ y)\), không phải hai số viết rời.</li>
          <li>Kiểm tra: thế cả hai số. Tìm thêm nghiệm: chọn một ẩn, giải ẩn kia.</li>
          <li>Hệ là hai điều kiện cùng lúc. Đúng một phương trình chưa đủ.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao \(x + 2y = 3\) có nghiệm \((1;\ 1)\) mà vẫn còn nghiệm khác? <em>— Mới có một điều kiện cho hai số. Chọn \(y\) khác 1, giải ra \(x\) khác, vẫn thoả cùng phương trình. Các cặp ấy nằm trên cùng một đường thẳng.</em></p>
        <p>Cặp \((6;\ 0)\) có phải nghiệm của hệ \(\begin{cases} 3x + 4y = 18 \\ x + y = 5 \end{cases}\) không? <em>— Không. Nó đúng phương trình tiền, sai phương trình số quả.</em></p>
      </details>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Xét \(\begin{cases} 2x + y = 7 \\ x + y = 4. \end{cases}\)</p>
        <p>Cặp \((3;\ 1)\): \(2 \cdot 3 + 1 = 7\) và \(3 + 1 = 4\). Đúng cả hai, nên là nghiệm của hệ.</p>
        <p>Cặp \((2;\ 3)\): \(2 \cdot 2 + 3 = 7\), đúng phương trình thứ nhất; \(2 + 3 = 5 \neq 4\), sai phương trình thứ hai. Không phải nghiệm của hệ.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Viết \(x = 2\), \(y = 3\) rồi quên kết luận là cặp \((2;\ 3)\).</li>
          <li>Tìm được một nghiệm của \(ax + by = c\) và dừng, như thể chỉ có một. Một phương trình hai ẩn không hoạt động như \(2x + 5 = 11\).</li>
          <li>Thấy \(0x + 0y = 3\) "có dạng \(ax + by = c\)" nên nhận. Thiếu điều kiện \(a \neq 0\) hoặc \(b \neq 0\).</li>
          <li>Cặp đúng với phương trình thứ nhất đã gọi là nghiệm của hệ. Phải kiểm tra nốt phương trình thứ hai.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Hệ thức nào là phương trình bậc nhất hai ẩn?",
        choices: [String.raw`\(3x + 2y = 5\)`, String.raw`\(x^2 + y = 3\)`, String.raw`\(0x + 0y = 1\)`, String.raw`\(xy = 6\)`],
        correct: 0,
        hint: "Phải viết được ax + by = c, và ít nhất một trong hai hệ số a, b khác 0.",
        explain: String.raw`\(3x + 2y = 5\) đúng dạng, với \(a = 3 \neq 0\). \(x^2 + y = 3\) có ẩn bậc hai; \(0x + 0y = 1\) không còn ẩn bậc nhất; \(xy = 6\) là tích hai ẩn.`,
      },
      {
        type: "mc",
        prompt: "Hệ thức nào vẫn là phương trình bậc nhất hai ẩn?",
        choices: [String.raw`\(0x + y = -1\)`, String.raw`\(0x + 0y = 3\)`, String.raw`\(x^2 + y = 1\)`, String.raw`\(xy = 2\)`],
        correct: 0,
        hint: "Một hệ số bằng 0 vẫn được, miễn là ẩn kia còn bậc 1.",
        explain: String.raw`\(0x + y = -1\) có \(b = 1 \neq 0\): nó bắt \(y = -1\), \(x\) tự do. \(0x + 0y = 3\) không còn ẩn bậc nhất.`,
      },
      {
        type: "num",
        prompt: String.raw`Biết \((2;\ y_0)\) là nghiệm của \(3x + 2y = 10\). Giá trị \(y_0\) là bao nhiêu?`,
        answer: 2,
        hint: "Chọn sẵn x = 2, thế vào, giải phương trình một ẩn theo y.",
        explain: String.raw`\(3 \cdot 2 + 2y_0 = 10\), nên \(6 + 2y_0 = 10\), \(y_0 = 2\). Cặp nghiệm là \((2;\ 2)\).`,
      },
      {
        type: "mc",
        prompt: String.raw`Cặp nào là nghiệm của \(x + 2y = 3\)?`,
        choices: [String.raw`\((3;\ 2)\)`, String.raw`\((1;\ 1)\)`, String.raw`\((6;\ 0{,}5)\)`, String.raw`\((2;\ 2)\)`],
        correct: 1,
        hint: "Thế cả hai số vào. Vế trái phải bằng 3, không phải chỉ trông giống một điểm trên hình.",
        explain: String.raw`\(1 + 2 \cdot 1 = 3\). Các cặp kia cho 7, 7 và 6, không phải 3.`,
      },
      {
        type: "mc",
        prompt: "Trên mặt phẳng toạ độ, tập nghiệm của một phương trình bậc nhất hai ẩn thường là:",
        choices: ["Một điểm", "Một đường thẳng", "Một nửa mặt phẳng", "Một đường tròn"],
        correct: 1,
        hint: "Chọn một ẩn tự do, ẩn kia bị kéo theo với mức đổi không đổi.",
        explain: "Mỗi nghiệm là một điểm, và các điểm ấy nằm trên một đường thẳng. Một điểm mới là nghiệm của cả hệ, khi có thêm điều kiện thứ hai.",
      },
      {
        type: "mc",
        prompt: String.raw`Cặp nào là nghiệm của hệ \(\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}\)?`,
        choices: [String.raw`\((4;\ 1)\)`, String.raw`\((2;\ 3)\)`, String.raw`\((3;\ 2)\)`, String.raw`\((5;\ 0)\)`],
        correct: 2,
        hint: "Phải đúng cả hai phương trình, không chỉ phương trình tổng.",
        explain: String.raw`\((3;\ 2)\): \(3 + 2 = 5\) và \(3 - 2 = 1\). \((4;\ 1)\) và \((2;\ 3)\) đúng tổng nhưng sai hiệu. \((5;\ 0)\) sai cả hai.`,
      },
    ],
  },
  {
    id: "c1-b2",
    num: 2,
    chapter: 1,
    title: "Giải hệ hai phương trình bậc nhất hai ẩn",
    summary: "Đưa hai điều kiện về một phương trình một ẩn bằng cách thế hoặc cộng. Kết quả có thể là một nghiệm, không có nghiệm, hoặc vô số nghiệm.",
    body: String.raw`
      <p>Bài trước ta biết kiểm tra một cặp. Bài này học <strong>tìm</strong> cặp ấy. Mỗi phương trình là một đường thẳng; giải hệ là tìm giao điểm bằng tính, không bằng cách thử lần lượt.</p>
      <p>Mấu chốt: hai ẩn là nhiều. Ta biến hệ thành một phương trình <em>một</em> ẩn, giải ẩn đó, rồi kéo ẩn kia theo. Có hai cách biến: thế, và cộng đại số.</p>
      <div class="definition">
        <p><strong>Phương pháp thế.</strong></p>
        <p><em>Bước 1.</em> Từ một phương trình, rút một ẩn theo ẩn kia. Thế biểu thức đó vào phương trình <em>còn lại</em>. Được một phương trình một ẩn.</p>
        <p><em>Bước 2.</em> Giải ẩn đó, suy ra ẩn kia, viết cặp \((x;\ y)\). Thế cặp vào cả hai phương trình gốc để kiểm tra.</p>
      </div>
      <div class="idea">
        <p><strong>Vì sao phải thế vào phương trình còn lại?</strong> Phương trình vừa dùng để rút \(y\) đã tiêu hết thông tin của nó. Nhét \(y\) trở lại chính nó chỉ cho một câu luôn đúng, kiểu \(3 = 3\), không tìm được số. Phương trình kia mới là điều kiện thứ hai — đó mới là chỗ cần dùng.</p>
      </div>
      <div class="example">
        <p><strong>Giải</strong> \(\begin{cases} 2x - y = 3 \\ x + 2y = 4. \end{cases}\)</p>
        <p>Từ phương trình thứ nhất, chuyển vế: \(2x - 3 = y\), tức \(y = 2x - 3\). Câu này nói: nếu cặp đúng phương trình thứ nhất thì \(y\) phải bằng \(2x - 3\).</p>
        <p>Cặp còn phải đúng phương trình thứ hai. Thay \(y\) bằng \(2x - 3\) vào đó:</p>
        \[
          x + 2(2x - 3) = 4.
        \]
        <p>Mở ngoặc: \(2(2x - 3) = 4x - 6\), không phải \(4x + 6\). Ta được \(x + 4x - 6 = 4\), tức \(5x = 10\), \(x = 2\).</p>
        <p>Kéo \(y\) theo: \(y = 2 \cdot 2 - 3 = 1\). Cặp ứng viên là \((2;\ 1)\).</p>
        <p>Kiểm tra cả hai phương trình gốc. Thứ nhất: \(2 \cdot 2 - 1 = 3\), đúng. Thứ hai: \(2 + 2 \cdot 1 = 4\), đúng. Vậy nghiệm của hệ là \((2;\ 1)\).</p>
      </div>
      <div class="definition">
        <p><strong>Phương pháp cộng đại số.</strong> Hai câu đều đúng với cùng một cặp, nên cộng từng vế — hoặc trừ từng vế — vẫn được một câu đúng. Nếu hệ số của một ẩn bằng nhau hoặc đối nhau, ẩn đó biến mất, còn một phương trình một ẩn.</p>
        <p>Nếu hệ số chưa bằng nhau và chưa đối nhau, nhân cả một phương trình với một số khác 0 trước. Nhân như vậy không đổi tập nghiệm của phương trình đó, cùng lí do bài trước chia hoá đơn của Mai cho 5. Chọn số nhân sao cho một ẩn có hệ số đối nhau, rồi cộng.</p>
      </div>
      <div class="example">
        <p><strong>Hệ số đã đối nhau.</strong> Giải \(\begin{cases} -2x + 5y = 12 \\ 2x + 3y = 4. \end{cases}\)</p>
        <p>Hệ số của \(x\) là \(-2\) và \(2\). Cộng từng vế:</p>
        \[
          (-2x + 2x) + (5y + 3y) = 12 + 4, \quad 8y = 16, \quad y = 2.
        \]
        <p>Thế \(y = 2\) vào phương trình thứ hai: \(2x + 6 = 4\), \(2x = -2\), \(x = -1\). Cặp \((-1;\ 2)\).</p>
        <p>Kiểm tra. Thứ nhất: \(-2 \cdot (-1) + 5 \cdot 2 = 12\). Thứ hai: \(2 \cdot (-1) + 3 \cdot 2 = 4\). Đúng.</p>
      </div>
      <div class="example">
        <p><strong>Hệ số chưa sẵn.</strong> Giải \(\begin{cases} 2x + y = 7 \\ 3x + 2y = 12. \end{cases}\)</p>
        <p>Muốn hệ số của \(y\) bằng nhau, nhân cả phương trình thứ nhất với 2 — cả vế trái lẫn vế phải:</p>
        \[
          \begin{cases} 4x + 2y = 14 \\ 3x + 2y = 12. \end{cases}
        \]
        <p>Trừ từng vế: \((4x + 2y) - (3x + 2y) = 14 - 12\), tức \(x = 2\). Thế vào \(2x + y = 7\): \(4 + y = 7\), \(y = 3\). Cặp \((2;\ 3)\).</p>
        <p>Kiểm tra: \(2 \cdot 2 + 3 = 7\), \(3 \cdot 2 + 2 \cdot 3 = 12\). Đúng. Nhân trước rồi mới trừ: đó là bước dễ bị bỏ qua khi hệ số chưa đối nhau sẵn.</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 100 90" width="110" role="img" aria-label="Hai đường thẳng cắt nhau">
              <line x1="12" y1="72" x2="88" y2="18" stroke="#58C4DD" stroke-width="2"/>
              <line x1="12" y1="22" x2="88" y2="68" stroke="#FC6255" stroke-width="2"/>
              <circle cx="50" cy="45" r="4" fill="#FFFF00"/>
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
      <p>Hình và phép tính nói cùng một chuyện. Cắt nhau: sau khi thế hoặc cộng, ra một giá trị, rồi một cặp. Song song: phép tính dẫn tới một câu sai, kiểu \(-4 = 8\), không có số nào cứu được. Trùng nhau: phép tính dẫn tới \(0 = 0\), câu luôn đúng, mọi điểm trên đường đó đều là nghiệm.</p>
      <div class="example">
        <p><strong>Vô nghiệm.</strong> \(\begin{cases} x - y = -2 \\ 2x - 2y = 8. \end{cases}\)</p>
        <p>Từ phương trình thứ nhất, \(x = y - 2\). Thế vào phương trình thứ hai: \(2(y - 2) - 2y = 8\), tức \(2y - 4 - 2y = 8\), nên \(-4 = 8\). Không có \(y\) nào làm \(-4\) thành \(8\).</p>
        <p>Nhìn hệ số cũng thấy. Gấp đôi phương trình thứ nhất phải là \(2x - 2y = -4\). Đề lại viết \(2x - 2y = 8\). Cùng vế trái, vế phải khác: hai đường song song, không giao.</p>
      </div>
      <div class="example">
        <p><strong>Vô số nghiệm.</strong> \(\begin{cases} -x + y = -2 \\ 3x - 3y = 6. \end{cases}\)</p>
        <p>Chia phương trình thứ hai cho \(-3\): \(-x + y = -2\). Đó chính là phương trình thứ nhất. Hai câu là một câu viết hai lần, hai đường trùng nhau.</p>
        <p>Từ câu đó, \(y = x - 2\). Mọi cặp \((x;\ x - 2)\) đều là nghiệm, với \(x\) tuỳ ý. Ví dụ \((0;\ -2)\), \((2;\ 0)\), \((5;\ 3)\). Đừng viết "vô số" rồi dừng — hãy mô tả các cặp ấy.</p>
      </div>
      <div class="memory">
        <p><strong>Chọn cách nào?</strong> Một phương trình dễ rút ẩn, hệ số \(1\) hoặc \(-1\), thì thế cho gọn. Hệ số đã đối nhau hoặc bằng nhau thì cộng hoặc trừ ngay. Chưa sẵn thì nhân một phương trình để làm chúng đối nhau, rồi cộng.</p>
        <p>Dù cách nào, kết thúc bằng cặp \((x;\ y)\) và một lần thế lại vào cả hai phương trình gốc.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Với \(y = 2x - 3\) rút từ phương trình thứ nhất, vì sao không thế vào chính phương trình thứ nhất? <em>— Sẽ ra một đẳng thức luôn đúng, không tìm được \(x\). Phải thế vào phương trình còn lại.</em></p>
        <p>Cộng xong được \(y = 2\). Đã giải xong hệ chưa? <em>— Chưa. Còn tìm \(x\), viết cặp, và kiểm tra cả hai phương trình gốc.</em></p>
      </details>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Giải \(\begin{cases} x + y = 9 \\ x - y = 1. \end{cases}\)</p>
        <p>Hệ số của \(y\) đối nhau, cộng từng vế: \(2x = 10\), \(x = 5\). Thế vào câu thứ nhất: \(5 + y = 9\), \(y = 4\). Cặp \((5;\ 4)\).</p>
        <p>Kiểm tra cả hai câu gốc: \(5 + 4 = 9\) và \(5 - 4 = 1\). Đúng.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Tìm ra \(x = 2\) rồi dừng. Nghiệm của hệ là cặp, chưa có \(y\) thì chưa xong.</li>
          <li>Thế biểu thức vào đúng phương trình vừa rút nó ra. Phải thế vào phương trình còn lại.</li>
          <li>Sai dấu khi mở ngoặc: \(2(2x - 3) = 4x - 6\), không phải \(4x + 6\).</li>
          <li>Nhân một phương trình với 2 nhưng quên nhân vế phải. Cả hai vế phải được nhân.</li>
          <li>Thấy \(0 = 0\) thì kết luận vô nghiệm. \(0 = 0\) là câu đúng: hệ vô số nghiệm. Vô nghiệm là câu sai, kiểu \(-4 = 8\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "text",
        prompt: String.raw`Nghiệm của \(\begin{cases} x+y=10 \\ x-y=2 \end{cases}\) là cặp (x; y). Viết dạng 6;4`,
        accept: ["6;4", "6; 4", "(6;4)", "(6; 4)"],
        hint: "Hệ số của y đối nhau: cộng từng vế để triệt tiêu y, rồi tìm nốt x.",
        explain: String.raw`Cộng từng vế: \(2x = 12\), nên \(x = 6\). Thế vào \(x + y = 10\): \(y = 4\). Cặp \((6;\ 4)\). Kiểm tra: \(6 + 4 = 10\), \(6 - 4 = 2\).`,
      },
      {
        type: "mc",
        prompt: String.raw`Hệ \(\begin{cases} x+y=4 \\ 2x+2y=8 \end{cases}\) có bao nhiêu nghiệm?`,
        choices: ["Một nghiệm", "Vô nghiệm", "Vô số nghiệm", "Hai nghiệm"],
        correct: 2,
        hint: "Chia cả hai vế phương trình sau cho 2 rồi so sánh với phương trình trước.",
        explain: String.raw`Phương trình sau chính là phương trình trước nhân 2. Hai đường trùng nhau, mọi cặp thoả \(x + y = 4\) đều là nghiệm.`,
      },
      {
        type: "mc",
        prompt: String.raw`Với \(\begin{cases} x - y = -2 \\ 2x - 2y = 8 \end{cases}\), sau khi thế \(x = y - 2\) ta được \(-4 = 8\). Kết luận:`,
        choices: ["Hệ có một nghiệm", "Hệ vô nghiệm", "Hệ vô số nghiệm", "Hệ có hai nghiệm"],
        correct: 1,
        hint: "Có giá trị y nào làm −4 thành 8 được không?",
        explain: String.raw`\(-4 = 8\) là câu sai, không phụ thuộc \(y\). Hệ vô nghiệm. Nếu ra \(0 = 0\) thì mới là vô số nghiệm.`,
      },
      {
        type: "mc",
        prompt: String.raw`Đã rút \(y = 2x - 3\) từ phương trình thứ nhất. Phải thế biểu thức này vào đâu?`,
        choices: ["Vào chính phương trình thứ nhất", "Vào phương trình còn lại", "Vào cả hai, rồi cộng kết quả", "Không cần thế, y đã biết"],
        correct: 1,
        hint: "Phương trình vừa dùng để rút y không còn tin mới.",
        explain: "Thế lại vào chính phương trình vừa rút sẽ ra một đẳng thức luôn đúng. Điều kiện thứ hai nằm ở phương trình còn lại.",
      },
      {
        type: "num",
        prompt: String.raw`Hệ \(\begin{cases} x + y = 8 \\ x - y = 2 \end{cases}\) có nghiệm \((x;\ y)\). Giá trị của \(y\) là bao nhiêu?`,
        answer: 3,
        hint: "Cộng từng vế để tìm x, rồi thế lại để tìm y.",
        explain: String.raw`Cộng: \(2x = 10\), \(x = 5\). Thế vào \(x + y = 8\): \(y = 3\). Kiểm tra: \(5 - 3 = 2\).`,
      },
    ],
  },
  {
    id: "c1-b3",
    num: 3,
    chapter: 1,
    title: "Giải bài toán bằng cách lập hệ phương trình",
    summary: "Đọc đề thành hai câu về hai ẩn, giải hệ, rồi đối chiếu điều kiện. Nghiệm của hệ chưa chắc là đáp số.",
    body: String.raw`
      <p>Bài trước giải hệ khi phương trình đã có sẵn. Bài này học việc khó hơn: <strong>đọc một câu chuyện và tự viết hệ</strong>. Đề không đưa \(ax + by = c\). Đề kể hai mối liên hệ. Mỗi mối liên hệ là một phương trình.</p>
      <div class="idea">
        <p><strong>Ba câu hỏi trước khi viết.</strong></p>
        <p>1. Đề đang hỏi hai đại lượng nào? Đó là hai ẩn. Ghi luôn điều kiện: số tự nhiên, số dương, số quả nguyên, số lớn hơn số kia…</p>
        <p>2. Đề cho hai câu nào về hai đại lượng đó? Tìm chữ "tổng", "hiệu", "gấp", "còn lại", "tất cả", "mỗi". Mỗi câu là một phương trình.</p>
        <p>3. Sau khi giải, cặp tìm được có đúng điều kiện đã ghi không? Không đúng thì không được đưa vào đáp số, dù nó là nghiệm của hệ.</p>
      </div>
      <div class="example">
        <p><strong>Một bài đếm được.</strong> Chuồng có gà và thỏ, tất cả 10 con, đếm được 28 chân. Gà 2 chân, thỏ 4 chân. Hỏi mỗi loài mấy con?</p>
        <p>Gọi \(x\) là số gà, \(y\) là số thỏ. Điều kiện: \(x, y\) là số tự nhiên, \(x \geq 0\), \(y \geq 0\). Hai câu trong đề:</p>
        \[
          \begin{cases} x + y = 10 \\ 2x + 4y = 28. \end{cases}
        \]
        <p>Câu thứ nhất là số con. Câu thứ hai là số chân. Rút \(y = 10 - x\), thế vào câu chân: \(2x + 4(10 - x) = 28\), tức \(2x + 40 - 4x = 28\), \(-2x = -12\), \(x = 6\). Vậy \(y = 4\).</p>
        <p>Kiểm tra điều kiện: 6 và 4 đều là số tự nhiên. Kiểm tra đề: \(6 + 4 = 10\) con, \(2 \cdot 6 + 4 \cdot 4 = 28\) chân. Đáp số: 6 gà và 4 thỏ.</p>
      </div>
      <div class="memory">
        <p><strong>Cách đọc đề.</strong> Một câu về "bao nhiêu con, bao nhiêu người, tổng hai số" thường là phương trình không nhân. Một câu về "bao nhiêu chân, bao nhiêu tiền, bao nhiêu kilôgam" thường nhân mỗi ẩn với một đơn giá rồi cộng. Đừng trộn hai câu ấy vào một phương trình.</p>
      </div>
      <div class="example">
        <p><strong>Thương và dư.</strong> Tìm hai số tự nhiên có tổng 1 006. Số lớn chia cho số nhỏ được thương 2 và dư 124.</p>
        <p>Gọi số nhỏ là \(x\), số lớn là \(y\). Điều kiện viết trước khi giải: \(x, y \in \mathbb{N}\) và \(x < y\). Dư phải nhỏ hơn số chia, nên \(124 < x\).</p>
        <p>Tổng: \(x + y = 1006\). "Bị chia = chia × thương + dư", nên \(y = 2x + 124\), không phải \(y = 2x - 124\). Dư được cộng vào, không bị trừ.</p>
        <p>Thế: \(x + (2x + 124) = 1006\), \(3x = 882\), \(x = 294\), \(y = 2 \cdot 294 + 124 = 712\).</p>
        <p>Đối chiếu điều kiện: 294 và 712 là số tự nhiên, \(294 > 124\), và \(294 < 712\). Kiểm tra chia: \(294 \cdot 2 + 124 = 712\). Hai số cần tìm là 294 và 712.</p>
      </div>
      <div class="example">
        <p><strong>Khi nghiệm của hệ không được nhận.</strong> Tìm hai số tự nhiên có tổng 10 và hiệu 12.</p>
        <p>Gọi số lớn \(x\), số nhỏ \(y\), điều kiện \(x, y \in \mathbb{N}\). Hệ \(x + y = 10\), \(x - y = 12\). Cộng từng vế: \(2x = 22\), \(x = 11\), \(y = -1\).</p>
        <p>Cặp \((11;\ -1)\) đúng là nghiệm của hệ. Nhưng \(-1\) không phải số tự nhiên, vi phạm điều kiện đã đặt. Bài toán vô nghiệm trong phạm vi đề yêu cầu. Kết luận "hai số là 11 và \(-1\)" là sai, dù phép giải hệ không sai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hai số có tổng 15 và hiệu 3. Tìm số lớn.</p>
        <p>Gọi số lớn là \(x\), số nhỏ là \(y\). Điều kiện: \(x > y\), cả hai dương. Hai câu trong đề: \(x + y = 15\) và \(x - y = 3\).</p>
        <p>Cộng từng vế: \(2x = 18\), \(x = 9\), rồi \(y = 6\). Cả hai dương và \(9 > 6\), nhận. Số lớn là 9. Kiểm tra: tổng 15, hiệu 3.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Giải xong hệ là viết đáp số ngay. Phải đối chiếu điều kiện: nguyên, dương, lớn hơn dư, không âm…</li>
          <li>Quên ghi điều kiện lúc gọi ẩn. Đến lúc kiểm tra không biết loại cặp nào.</li>
          <li>Nhầm thương và dư: bị chia \(=\) chia \(\times\) thương \(+\) dư. Dư cộng vào, và dư nhỏ hơn số chia.</li>
          <li>Gộp "số con" và "số chân" vào một phương trình. Hai câu chuyện là hai phương trình.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao bài gà và thỏ cần hai phương trình, không viết một phương trình \(2x + 4y + x + y = 38\)? <em>— Gộp như vậy mất một điều kiện. \(3x + 5y = 38\) có vô số cặp; đề cho hai câu riêng, phải giữ hai phương trình.</em></p>
      </details>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Tổng hai số là 30, hiệu là 8. Số lớn hơn bằng bao nhiêu?",
        answer: 19,
        hint: "Gọi số lớn là x, số nhỏ là y: x + y = 30 và x − y = 8. Cộng từng vế.",
        explain: String.raw`\(x + y = 30\), \(x - y = 8\). Cộng: \(2x = 38\), \(x = 19\). Số nhỏ là \(11\). Cả hai dương, nhận được.`,
      },
      {
        type: "mc",
        prompt: String.raw`Tìm hai số tự nhiên có tổng 10 và hiệu 12. Giải hệ ra \(x = 11\), \(y = -1\). Kết luận đúng là:`,
        choices: ["Hai số là 11 và −1", "Bài toán vô nghiệm trong số tự nhiên", "Hai số là 11 và 1", "Hệ phương trình giải sai"],
        correct: 1,
        hint: "Cặp (11; −1) đúng với hệ, nhưng điều kiện của đề là số tự nhiên.",
        explain: String.raw`Hệ giải đúng, nhưng \(y = -1\) không phải số tự nhiên. Không có cặp nào vừa là nghiệm của hệ vừa thoả điều kiện. Không được sửa thành 1.`,
      },
      {
        type: "text",
        prompt: "Hai số có tổng 20 và hiệu 4. Viết hai số (số nhỏ trước), dạng 8;12",
        accept: ["8;12", "8; 12", "(8;12)", "(8; 12)"],
        hint: "Gọi số nhỏ là x, số lớn là y: x + y = 20 và y − x = 4.",
        explain: String.raw`\(x + y = 20\), \(y - x = 4\). Cộng: \(2y = 24\), \(y = 12\), \(x = 8\).`,
      },
      {
        type: "num",
        prompt: "Chuồng có gà và thỏ, tất cả 8 con, 22 chân. Gà 2 chân, thỏ 4 chân. Có mấy con thỏ?",
        answer: 3,
        hint: "Gọi x là số gà, y là số thỏ: x + y = 8 và 2x + 4y = 22.",
        explain: String.raw`\(y = 8 - x\), thế vào số chân: \(2x + 4(8 - x) = 22\), nên \(x = 5\), \(y = 3\). Kiểm tra: 5 gà và 3 thỏ có \(10 + 12 = 22\) chân.`,
      },
      {
        type: "mc",
        prompt: String.raw`Số lớn \(y\) chia cho số nhỏ \(x\) được thương 2 và dư 5. Phương trình đúng là:`,
        choices: [String.raw`\(y = 2x - 5\)`, String.raw`\(y = 2x + 5\)`, String.raw`\(x = 2y + 5\)`, String.raw`\(y = 5x + 2\)`],
        correct: 1,
        hint: "Bị chia = chia × thương + dư. Số lớn là số bị chia.",
        explain: String.raw`Số lớn là số bị chia: \(y = x \cdot 2 + 5\). Dư được cộng, không bị trừ. Còn phải nhớ điều kiện \(x > 5\).`,
      },
    ],
  },

  // ============ CHƯƠNG II ============
  {
    id: "c2-b4",
    num: 4,
    chapter: 2,
    title: "Phương trình quy về phương trình bậc nhất một ẩn",
    summary: "Tích bằng 0 thì một nhân tử bằng 0. Khử mẫu có thể sinh nghiệm giả: phải loại giá trị làm mẫu bằng 0.",
    body: String.raw`
      <p>Nhiều phương trình trông rối, nhưng chỉ cần đưa về phương trình bậc nhất đã biết giải. Hai đường hay gặp: phương trình tích, và phương trình có ẩn ở mẫu.</p>
      <div class="idea">
        <p><strong>Vì sao tích bằng 0 thì một thừa số bằng 0?</strong> Nếu cả hai số đều khác 0, tích của chúng khác 0. Muốn tích bằng 0, ít nhất một thừa số phải bằng 0. Phương trình \((ax + b)(cx + d) = 0\) vì vậy tách thành hai phương trình bậc nhất: \(ax + b = 0\) hoặc \(cx + d = 0\). Lấy cả hai nghiệm, không bỏ nghiệm âm.</p>
      </div>
      <div class="example">
        <p><strong>Làm chậm một phương trình tích.</strong> Giải \((2x + 1)(3x - 1) = 0\).</p>
        <p>Trường hợp 1: \(2x + 1 = 0\), \(x = -\dfrac{1}{2}\). Trường hợp 2: \(3x - 1 = 0\), \(x = \dfrac{1}{3}\).</p>
        <p>Kiểm tra. Với \(x = -\dfrac{1}{2}\), thừa số thứ nhất bằng 0 nên tích bằng 0. Với \(x = \dfrac{1}{3}\), thừa số thứ hai bằng 0. Cả hai đều là nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Khi đề chưa viết sẵn dạng tích.</strong> Giải \(x^2 - x = -2x + 2\).</p>
        <p>Chuyển hết sang một vế, nhớ đổi dấu: \(x^2 - x + 2x - 2 = 0\), tức \(x^2 + x - 2 = 0\). Nhóm: \(x(x - 1) + 2(x - 1) = 0\), nên \((x + 2)(x - 1) = 0\).</p>
        <p>Vậy \(x = -2\) hoặc \(x = 1\). Kiểm tra vào phương trình gốc. \(x = -2\): vế trái \(4 - (-2) = 6\), vế phải \(4 + 2 = 6\). \(x = 1\): hai vế đều bằng 0. Đúng cả hai.</p>
      </div>
      <div class="idea">
        <p><strong>Ẩn ở mẫu là chuyện khác.</strong> Phân số chỉ có nghĩa khi mẫu khác 0. Điều kiện xác định phải viết <em>trước</em> khi khử mẫu, và phải là "và": mọi mẫu đều khác 0 cùng lúc. Viết "\(x \neq -1\) hoặc \(x \neq 2\)" là sai, vì câu đó gần như luôn đúng.</p>
        <p>Khử mẫu là nhân hai vế với một biểu thức chứa \(x\). Nếu biểu thức ấy bằng 0 tại một giá trị, phép nhân có thể biến một câu vô nghĩa thành một phương trình có nghiệm. Giá trị làm mẫu bằng 0 phải bị loại, dù nó lọt ra sau khi giải.</p>
      </div>
      <div class="example">
        <p><strong>Nghiệm giả.</strong> Giải \(\dfrac{2}{x + 1} + \dfrac{1}{x - 2} = \dfrac{3}{(x + 1)(x - 2)}\).</p>
        <p>Mẫu bằng 0 khi \(x = -1\) hoặc \(x = 2\). Điều kiện: \(x \neq -1\) và \(x \neq 2\).</p>
        <p>Nhân hai vế với \((x + 1)(x - 2)\): \(2(x - 2) + (x + 1) = 3\). Mở ngoặc: \(2x - 4 + x + 1 = 3\), \(3x - 3 = 3\), \(x = 2\).</p>
        <p>\(x = 2\) làm mẫu bằng 0, nên loại. Không còn giá trị nào khác. Phương trình vô nghiệm. Đừng viết "nghiệm là 2" chỉ vì phép tính ra số 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Giải \((x - 4)(2x + 6) = 0\). Tích bằng 0 khi ít nhất một nhân tử bằng 0.</p>
        <p>Trường hợp 1: \(x - 4 = 0\), nên \(x = 4\). Trường hợp 2: \(2x + 6 = 0\), nên \(x = -3\). Không bỏ nghiệm âm.</p>
        <p>Kiểm tra. \(x = 4\): nhân tử thứ nhất bằng 0, tích bằng 0. \(x = -3\): nhân tử thứ hai bằng 0, tích bằng 0.</p>
        <p>Một phương trình có mẫu, làm đủ bốn bước: \(\dfrac{3}{x - 1} = 2\). Điều kiện xác định: \(x \neq 1\). Nhân hai vế với \(x - 1\): \(3 = 2(x - 1)\), \(x = \dfrac{5}{2}\). Giá trị này khác 1, nên nhận. Kiểm tra: \(\dfrac{3}{\frac{5}{2} - 1} = \dfrac{3}{\frac{3}{2}} = 2\).</p>
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
        explain: String.raw`Tích bằng 0 khi \(x - 3 = 0\) hoặc \(x + 2 = 0\). Cả hai nghiệm đều nhận: \(x = 3\) và \(x = -2\).`,
      },
      {
        type: "num",
        prompt: String.raw`Phương trình \(x^2 - 4x = 0\) có hai nghiệm, nghiệm nhỏ hơn là bao nhiêu?`,
        answer: 0,
        hint: "Đặt nhân tử chung x rồi áp dụng phương trình tích.",
        explain: String.raw`\(x(x - 4) = 0\), nên \(x = 0\) hoặc \(x = 4\). Nghiệm nhỏ hơn là 0. Kiểm tra: cả hai làm một thừa số bằng 0.`,
      },
      {
        type: "mc",
        prompt: "Giải xong phương trình chứa ẩn ở mẫu, trước khi kết luận nghiệm ta phải:",
        choices: ["Nhân hai vế với −1", "Đối chiếu với điều kiện xác định", "Cộng thêm 1", "Đổi dấu hai vế"],
        correct: 1,
        hint: "Khử mẫu có thể sinh ra nghiệm giả làm mẫu số bằng 0.",
        explain: String.raw`Khử mẫu có thể sinh nghiệm làm mẫu bằng 0. Giá trị ấy không được nhận, vì phương trình gốc không có nghĩa tại đó.`,
      },
    ],
  },
  {
    id: "c2-b5",
    num: 5,
    chapter: 2,
    title: "Bất đẳng thức và tính chất",
    summary: "Lớn hơn là đứng bên phải trên trục số. Cộng cùng một số thì thứ tự giữ. Nhân số âm thì thứ tự đảo.",
    body: String.raw`
      <p>Phương trình hỏi "bằng bao nhiêu". Bất đẳng thức hỏi "nhiều hơn, ít hơn, ít nhất, nhiều nhất". Biển "tốc độ tối thiểu 60 km/h" không bắt vận tốc bằng 60. Nó bắt \(a \geq 60\): 60 được, 80 được, 59 thì không.</p>
      <div class="idea">
        <p><strong>Nhìn trên trục số.</strong> Số lớn hơn đứng bên phải. \(-2 < 5\) vì \(-2\) ở bên trái 5. \(a \geq b\) nghĩa là \(a\) trùng \(b\) hoặc đứng bên phải \(b\). \(a \leq b\) là trùng hoặc đứng bên trái.</p>
        <p>Hai bất đẳng thức <em>cùng chiều</em> khi dấu cùng hướng, như \(1 < 2\) và \(-3 < -2\). <em>Ngược chiều</em> khi một dấu mở sang phải, một dấu mở sang trái, như \(1 < 2\) và \(-2 > -3\). Hai câu ấy nói cùng một sự thật, chỉ viết ngược nhau.</p>
      </div>
      <div class="definition">
        <p>Nếu \(a < b\) và \(b < c\) thì \(a < c\). Đó là tính chất bắc cầu: trên trục số, ai đứng bên trái người đứng bên trái mình thì càng ở bên trái.</p>
        <p>Cộng cùng một số vào hai vế thì chiều giữ: nếu \(a < b\) thì \(a + c < b + c\). Cả hai người đi cùng một đoạn, ai trước vẫn trước.</p>
        <p>Nhân với số dương thì chiều giữ. Nhân với số âm thì chiều đổi: nếu \(a < b\) và \(c < 0\) thì \(ac > bc\). Nhân số âm là soi gương qua 0, trái thành phải.</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ.</strong> Cộng số nào, chiều hay giữ. Nhân dương giữ, nhân âm đổi. Chỉ được cộng <em>cùng một</em> số. Cộng 3 vào vế trái và 5 vào vế phải thì không còn gì để kết luận.</p>
      </div>
      <div class="example">
        <p><strong>So hai phân số mà không cần quy đồng lớn.</strong> \(\dfrac{2024}{2023} = 1 + \dfrac{1}{2023} > 1\). \(\dfrac{2021}{2022} = 1 - \dfrac{1}{2022} < 1\). Một số đứng bên phải 1, một số đứng bên trái 1, nên số thứ nhất lớn hơn số thứ hai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Bắt đầu từ \(-3 < 1\). Trên trục số, \(-3\) đứng bên trái \(1\).</p>
        <p>Cộng 4 vào cả hai vế: \(1 < 5\). Chiều giữ, vì cả hai người đi cùng một đoạn.</p>
        <p>Nhân hai vế với 2: \(-6 < 2\). Chiều vẫn giữ, vì 2 dương.</p>
        <p>Nhân hai vế của \(-3 < 1\) với \(-2\): \(6 > -2\). Chiều đổi, vì nhân số âm là soi gương qua 0. Sau phép soi, 6 đứng bên phải \(-2\).</p>
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
    summary: "Nghiệm thường là cả một nửa trục số. Chia cho số âm thì đổi chiều. Bài thực tế phải làm tròn theo câu hỏi.",
    body: String.raw`
      <p>Phương trình thường có vài nghiệm rời. Bất phương trình thường có cả một đoạn trên trục số. "Tối đa", "ít nhất", "không quá" là dấu hiệu của bất phương trình, không phải phương trình.</p>
      <p>Thanh có 100 000 đồng, đã chi 18 000 đồng tiền giấy, mỗi quyển vở 7 000 đồng. Gọi \(x\) là số quyển, \(x\) là số tự nhiên. "Mua được" nghĩa là tiền không vượt quá số đang có:</p>
      \[
        7x + 18 \leq 100
      \]
      <p>với đơn vị nghìn đồng. Đây chưa phải "tìm một số \(x\) cho đúng bằng". Nhiều giá trị \(x\) đều mua được.</p>
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
      <div class="idea">
        <p><strong>Chia cho số âm là chỗ dễ sai.</strong> \(ax + b < 0\) đưa về \(ax < -b\). Nếu \(a > 0\), chia giữ chiều: \(x < -\dfrac{b}{a}\). Nếu \(a < 0\), chia phải đổi chiều: \(x > -\dfrac{b}{a}\). Dấu \(>,\ \leq,\ \geq\) làm giống vậy. Giải xong, thử một điểm trong tập nghiệm và một điểm ngoài.</p>
      </div>
      <div class="example">
        <p><strong>Quay lại chuyện mua vở.</strong> \(7x + 18 \leq 100\). Hệ số của \(x\) dương, chiều giữ: \(7x \leq 82\), \(x \leq \dfrac{82}{7}\). \(\dfrac{82}{7} = 11\dfrac{5}{7}\), khoảng 11,7.</p>
        <p>Số vở là số tự nhiên, và câu hỏi là tối đa. 11,7 không mua được. Lấy số tự nhiên lớn nhất không vượt 11,7, tức 11. Kiểm tra: 11 quyển tốn \(7 \cdot 11 + 18 = 95 \leq 100\). 12 quyển tốn \(84 + 18 = 102 > 100\), không mua được. Thanh mua nhiều nhất 11 quyển.</p>
      </div>
      <div class="example">
        <p><strong>Khi phải đổi chiều.</strong> Giải \(-2x - 4 > 0\). Chuyển \(-4\): \(-2x > 4\). Chia cho \(-2\), đổi chiều: \(x < -2\).</p>
        <p>Thử. \(x = -3\): \(6 - 4 = 2 > 0\), đúng. \(x = -2\): bằng 0, không thoả dấu \(>\), nên chấm rỗng. \(x = 0\): \(-4 > 0\) sai.</p>
        <p>Một bài có \(x\) hai vế: \(2x + 5 < 3x - 4\). Gom \(x\) về một vế: \(2x - 3x < -4 - 5\), tức \(-x < -9\). Nhân \(-1\), đổi chiều: \(x > 9\). Thử \(x = 10\): \(25 < 26\), đúng. \(x = 9\): \(23 < 23\) sai.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Giải \(-x < -9\): bạn An viết \(x < 9\), bạn Bình viết \(x > 9\). Ai đúng, vì sao? <em>— Bình đúng: chia hai vế cho −1 (số âm) phải đổi chiều bất đẳng thức.</em></p>
      </details>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Giải \(5 - 2x \geq 1\).</p>
        <p>Chuyển 5 sang phải: \(-2x \geq -4\). Chia cho \(-2\), là số âm, phải đổi chiều: \(x \leq 2\).</p>
        <p>Kiểm tra ba điểm, đừng tin mỗi phép biến đổi. \(x = 2\): \(5 - 4 = 1\), lấy vì dấu \(\geq\). \(x = 0\): \(5 \geq 1\), đúng. \(x = 3\): \(5 - 6 = -1\), mà \(-1 \geq 1\) sai. Đúng là mọi số nhỏ hơn hoặc bằng 2.</p>
      </div>
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
    summary: "Bình phương không bao giờ âm, nên số âm không có căn bậc hai. Dấu √ chỉ lấy căn không âm.",
    body: String.raw`
      <p>Hình vuông diện tích 49 m². Cạnh là một số không âm mà bình phương bằng 49. \(7^2 = 49\) và \((-7)^2 = 49\), nhưng cạnh không âm, nên cạnh là 7. Phép hỏi ngược của bình phương gọi là khai căn bậc hai.</p>
      <div class="definition">
        <p><strong>Căn bậc hai</strong> của số không âm \(a\) là số \(x\) sao cho \(x^2 = a\).</p>
      </div>
      <div class="idea">
        <p><strong>Vì sao số âm không có căn bậc hai?</strong> Bình phương của mọi số thực là 0 hoặc dương. Không có số nào bình phương ra \(-4\). Số 0 có đúng một căn, là 0. Số dương \(a\) có đúng hai căn, đối nhau: một dương và một âm, vì cả hai bình phương cho cùng một kết quả.</p>
        <p>Kí hiệu \(\sqrt{a}\) chỉ dành cho căn không âm, gọi là căn bậc hai số học. \(\sqrt{81} = 9\), không bao giờ là \(-9\). Muốn nói căn âm phải tự viết dấu trừ: \(-\sqrt{81} = -9\). Đề hỏi "các căn bậc hai" thì trả lời cả hai. Đề hỏi \(\sqrt{a}\) thì chỉ trả lời số không âm.</p>
      </div>
      <div class="example">
        <p><strong>Vì sao \(\sqrt{a^2} = |a|\), không phải \(a\)?</strong> \(a^2\) không âm, nên căn tồn tại, và kết quả của dấu \(\sqrt{\ }\) phải không âm. Nếu \(a \geq 0\), kết quả là \(a\). Nếu \(a < 0\), kết quả là \(-a\). Cả hai trường hợp chính là \(|a|\).</p>
        <p>\(\sqrt{(-3)^2} = |-3| = 3\), nên \(\sqrt{(-3)^2} + 3 = 6\). Viết \(\sqrt{(-3)^2} = -3\) là sai: dấu căn không trả về số âm.</p>
      </div>
      <div class="definition">
        <p>\(\sqrt{A}\) chỉ có nghĩa khi biểu thức dưới căn không âm: \(A \geq 0\). Đó là điều kiện xác định. \(\sqrt{2x - 1}\) chỉ sống khi \(2x - 1 \geq 0\), tức \(x \geq \dfrac{1}{2}\).</p>
      </div>
      <div class="memory">
        <p><strong>Ba cửa.</strong> Dưới căn phải không âm. Dấu \(\sqrt{\ }\) chỉ cho ra số không âm. Ra khỏi \(\sqrt{a^2}\) phải đi qua \(|a|\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình vuông diện tích 64 m² có cạnh \(\sqrt{64} = 8\) m. Không lấy \(-8\): độ dài không âm, và kí hiệu \(\sqrt{\ }\) chỉ lấy căn không âm.</p>
        <p>\(\sqrt{(-5)^2} = |-5| = 5\). Bình phương đã xoá dấu; căn số học không trả dấu âm lại. Viết \(\sqrt{(-5)^2} = -5\) là sai.</p>
        <p>\(\sqrt{3x - 6}\) chỉ có nghĩa khi \(3x - 6 \geq 0\), tức \(x \geq 2\). Với \(x = 2\), căn bằng 0. Với \(x = 1\), dưới căn là \(-3\), không có căn bậc hai.</p>
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
    summary: "Căn tách được qua nhân và chia, vì bình phương của tích là tích của các bình phương. Căn không tách qua phép cộng.",
    body: String.raw`
      <p>Tính \(\sqrt{25 \cdot 49}\) bằng cách nhân 25 với 49 rồi tìm căn là mệt. Tách ra \(\sqrt{25} \cdot \sqrt{49} = 5 \cdot 7 = 35\) thì nhẩm được. Phép này đúng, nhưng chỉ với nhân và chia.</p>
      <div class="idea">
        <p><strong>Vì sao được tách tích?</strong> Nếu \(A \geq 0\) và \(B \geq 0\) thì \(\sqrt{A} \cdot \sqrt{B}\) không âm, và bình phương của nó là \(A \cdot B\). Số không âm mà bình phương bằng \(AB\) chính là \(\sqrt{AB}\). Vậy \(\sqrt{AB} = \sqrt{A} \cdot \sqrt{B}\).</p>
        <p>Cộng thì không. \((\sqrt{9} + \sqrt{16})^2 = 9 + 16 + 2 \cdot 3 \cdot 4 = 49\), không phải 25. Nên \(\sqrt{9 + 16} = 5\), trong khi \(\sqrt{9} + \sqrt{16} = 7\). Căn không đi xuyên qua dấu cộng.</p>
      </div>
      <div class="example">
        <p>\(\sqrt{2^2 \cdot 3^2 \cdot 5^2} = 2 \cdot 3 \cdot 5 = 30\), vì mỗi bình phương ra khỏi căn thành chính số dương ấy.</p>
        <p>Với \(a \geq 0\) và \(b < 0\): \(\sqrt{25a^2b^2} = 5|a|\,|b|\). \(|b| = -b\), nên kết quả là \(-5ab\). Quên giá trị tuyệt đối sẽ sai dấu.</p>
      </div>
      <div class="idea">
        <p><strong>Chia cũng tách được.</strong> Nếu \(B > 0\) thì \(\dfrac{\sqrt{A}}{\sqrt{B}}\) không âm và bình phương của nó là \(\dfrac{A}{B}\). Đó chính là \(\sqrt{\dfrac{A}{B}}\).</p>
      </div>
      <div class="example">
        <p>\(\sqrt{8} : \sqrt{2} = \sqrt{8 : 2} = \sqrt{4} = 2\).</p>
        <p>Với \(a > 0\): \(\sqrt{52a^3} : \sqrt{13a} = \sqrt{4a^2} = |2a| = 2a\). Điều kiện \(a > 0\) mới được bỏ dấu giá trị tuyệt đối.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(\sqrt{16 \cdot 9} = \sqrt{16} \cdot \sqrt{9} = 4 \cdot 3 = 12\). Căn tách được qua phép nhân. Không được viết \(\sqrt{16} + \sqrt{9} = 7\): căn không tách qua phép cộng, và \(\sqrt{16 + 9} = 5\), không phải 7.</p>
        <p>\(\sqrt{50} : \sqrt{2} = \sqrt{50 : 2} = \sqrt{25} = 5\). Cùng kết quả nếu rút gọn trước: \(\sqrt{50} = 5\sqrt{2}\), rồi \(\dfrac{5\sqrt{2}}{\sqrt{2}} = 5\).</p>
        <p>Với \(a = -3\) và \(b = 4\): \(\sqrt{a^2 b} = |a|\sqrt{b} = 3 \cdot 2 = 6\). Viết \(a\sqrt{b} = -6\) là sai, vì \(a\) âm không được kéo ra ngoài căn mà quên giá trị tuyệt đối.</p>
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
    summary: "Đưa thừa số chính phương ra ngoài căn. Số âm đi vào căn phải để dấu trừ ở ngoài. Chỉ cộng các căn cùng loại.",
    body: String.raw`
      <p>\(\sqrt{12}\) đã là một số, nhưng \(2\sqrt{3}\) gọn hơn và dễ cộng tiếp. Ba thao tác dùng đi dùng lại: đưa thừa số ra ngoài, khử mẫu dưới căn, đưa thừa số vào trong.</p>
      <div class="idea">
        <p><strong>Đưa ra ngoài.</strong> Tìm thừa số chính phương lớn nhất dưới căn: 4, 9, 16, 25, … Phần ấy "xuống" được. Với \(b \geq 0\),</p>
        \[
          \sqrt{a^2 b} = |a|\sqrt{b}.
        \]
        <p>Có \(|a|\) vì kết quả của dấu căn không âm. \(\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}\). \(3\sqrt{27} = 3\sqrt{9 \cdot 3} = 9\sqrt{3}\). \(5\sqrt{48} = 5\sqrt{16 \cdot 3} = 20\sqrt{3}\).</p>
      </div>
      <div class="example">
        <p><strong>Khử mẫu dưới căn.</strong> \(\sqrt{\dfrac{4}{7}}\) còn mẫu trong căn. Nhân tử và mẫu với 7 để mẫu thành số chính phương:</p>
        \[
          \sqrt{\dfrac{4}{7}} = \sqrt{\dfrac{4 \cdot 7}{7^2}} = \sqrt{\left(\dfrac{2}{7}\right)^2 \cdot 7} = \dfrac{2\sqrt{7}}{7}.
        \]
        <p>Giá trị không đổi, chỉ dạng gọn hơn. Kiểm tra thô: \(\sqrt{4/7} \approx 0{,}76\) và \(2\sqrt{7}/7 \approx 0{,}76\).</p>
      </div>
      <div class="idea">
        <p><strong>Đưa vào trong.</strong> Nếu \(a \geq 0\) và \(b \geq 0\) thì \(a\sqrt{b} = \sqrt{a^2 b}\). Nếu \(a < 0\), dấu căn không tạo được số âm, nên dấu trừ phải đứng ngoài: \(a\sqrt{b} = -\sqrt{a^2 b}\).</p>
        <p>Bạn Vuông viết \(\sqrt{(-2)^2 \cdot 5} = -2\sqrt{5}\). Sai. \(\sqrt{(-2)^2 \cdot 5} = |-2|\sqrt{5} = 2\sqrt{5}\). Kết quả khai căn không âm.</p>
        <p>Chỉ cộng được các căn <em>cùng loại</em>, cùng biểu thức dưới căn: \(\sqrt{2} + 3\sqrt{2} = 4\sqrt{2}\), như cộng 1 quả và 3 quả. \(\sqrt{2} + \sqrt{3}\) không gộp thành \(\sqrt{5}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Rút gọn \(\sqrt{72}\). Tìm thừa số chính phương: \(72 = 36 \cdot 2\), nên \(\sqrt{72} = 6\sqrt{2}\).</p>
        <p>Khử mẫu: \(\sqrt{\dfrac{9}{2}} = \sqrt{\dfrac{18}{4}} = \dfrac{\sqrt{18}}{2} = \dfrac{3\sqrt{2}}{2}\). Mẫu đã ra khỏi dấu căn.</p>
        <p>Đưa số âm vào trong căn phải giữ dấu trừ bên ngoài: \(-2\sqrt{3} = -\sqrt{12}\). Không được viết \(-2\sqrt{3} = \sqrt{12}\).</p>
      </div>
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
    summary: "Lập phương giữ nguyên dấu, nên mọi số thực có đúng một căn bậc ba. Không lấy giá trị tuyệt đối.",
    body: String.raw`
      <p>Khối lập phương thể tích 27 cm³ có cạnh bao nhiêu? Cần số \(x\) sao cho \(x^3 = 27\). \(3^3 = 27\). \((-3)^3 = -27\), không phải 27. Chỉ có một số lập phương ra 27, là 3. Đó là căn bậc ba.</p>
      <div class="idea">
        <p><strong>Khác căn bậc hai ở chỗ dấu.</strong> Bình phương xoá dấu, nên số âm không có căn bậc hai, và số dương có hai căn. Lập phương giữ dấu: số dương lập phương ra dương, số âm lập phương ra âm. Mỗi số thực, kể cả số âm, có đúng một căn bậc ba. \(\sqrt[3]{-27} = -3\), và biểu thức này có nghĩa.</p>
      </div>
      <div class="example">
        <p>\(4^3 = 64\) nên \(\sqrt[3]{64} = 4\). \(0^3 = 0\) nên \(\sqrt[3]{0} = 0\). \((-3)^3 = -27\) nên \(\sqrt[3]{-27} = -3\). Không có "căn đối" thứ hai.</p>
      </div>
      <div class="definition">
        <p>Vì chỉ có một căn, lập phương và khai căn bậc ba xoá nhau với mọi số thực, không cần giá trị tuyệt đối:</p>
        \[
          \bigl(\sqrt[3]{a}\bigr)^3 = \sqrt[3]{a^3} = a.
        \]
        <p>\(\sqrt[3]{A}\) xác định với mọi \(A\). \(\sqrt[3]{-8} = -2\) vẫn có nghĩa. Đây là chỗ khác hẳn \(\sqrt{A}\), vốn đòi \(A \geq 0\).</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ.</strong> Căn bậc hai kén: chỉ nhận số không âm, và dấu \(\sqrt{\ }\) chỉ trả số không âm. Căn bậc ba nhận mọi số, và trả về đúng dấu của số ấy.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Khối lập phương thể tích 64 cm³ có cạnh \(\sqrt[3]{64}\). Vì \(4^3 = 64\), cạnh bằng 4 cm. Chỉ một đáp số: căn bậc ba không có cặp đối nhau như căn bậc hai.</p>
        <p>\(\sqrt[3]{-125} = -5\), vì \((-5)^3 = -125\). Số âm vẫn có căn bậc ba, và căn ấy âm.</p>
        <p>Kiểm tra tính chất với số âm: \(\bigl(\sqrt[3]{-8}\bigr)^3 = (-2)^3 = -8\). Không lấy giá trị tuyệt đối. \(\sqrt[3]{8} + \sqrt[3]{27} = 2 + 3 = 5\), trong khi \(\sqrt[3]{35}\) không bằng 5.</p>
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
      <div class="idea">
        <p><strong>Vì sao góc như nhau thì tỉ số như nhau?</strong> Phóng to tam giác vuông, mọi cạnh nhân cùng một số. Tử và mẫu của tỉ số đều nhân số ấy, nên tỉ số không đổi. Độ dốc là tính chất của góc, không phải của chiếc tam giác đang cầm trên tay.</p>
        <p><strong>Số \(\dfrac{1}{2}\) từ đâu ra?</strong> Tam giác đều cạnh 2, mọi góc \(60^\circ\). Kẻ đường cao, được hai tam giác vuông. Cạnh huyền vẫn là 2, cạnh đối của góc \(30^\circ\) là 1. Vậy \(\sin 30^\circ = \dfrac{1}{2}\). Góc kề với cạnh ấy là \(60^\circ\), nên \(\cos 60^\circ\) cũng bằng \(\dfrac{1}{2}\). Hai góc phụ nhau đổi vai đối và kề, nên sin góc này bằng cos góc kia.</p>
      </div>
      <p><strong>Giá trị lượng giác của các góc \(30^\circ, 45^\circ, 60^\circ\)</strong>:</p>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tam giác vuông có cạnh góc vuông 3 cm và 4 cm, cạnh huyền 5 cm. Gọi \(\alpha\) là góc đối diện cạnh 3 cm.</p>
        <p>\(\sin\alpha = \dfrac{3}{5}\), \(\cos\alpha = \dfrac{4}{5}\), \(\tan\alpha = \dfrac{3}{4}\), \(\cot\alpha = \dfrac{4}{3}\).</p>
        <p>Kiểm tra: \(\dfrac{9}{25} + \dfrac{16}{25} = 1\), và \(\dfrac{\sin\alpha}{\cos\alpha} = \dfrac{3}{4} = \tan\alpha\). Sin và cos đều nhỏ hơn 1 vì tử là cạnh góc vuông, mẫu là cạnh huyền.</p>
        <p>Với góc có sẵn trong bảng: \(\sin 30^\circ = \dfrac{1}{2}\). Cạnh huyền 6 cm, góc đối 30°, thì cạnh đối bằng \(6 \cdot \dfrac{1}{2} = 3\) cm.</p>
      </div>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tam giác \(ABC\) vuông tại \(A\), cạnh huyền \(a = 10\) cm, góc \(B = 30^\circ\). Cạnh đối của \(B\) là \(b\).</p>
        <p>\(b = a \sin B = 10 \cdot \sin 30^\circ = 10 \cdot \dfrac{1}{2} = 5\) cm. Cạnh kề \(c = a \cos B = 10 \cdot \cos 30^\circ = 5\sqrt{3}\) cm.</p>
        <p>Kiểm tra Pythagore: \(5^2 + (5\sqrt{3})^2 = 25 + 75 = 100 = 10^2\). Nếu lấy sin của góc kề thay vì góc đối, cạnh đối sẽ ra \(5\sqrt{3}\) cm, dài hơn nửa cạnh huyền — không khớp với góc 30°.</p>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn tâm \(O\), bán kính 5 cm. Không cần vẽ hết hình: so khoảng cách từ \(O\) tới điểm với 5.</p>
        <p>\(OA = 3 < 5\): \(A\) ở trong đường tròn. \(OB = 5\): \(B\) nằm trên đường tròn. \(OC = 7 > 5\): \(C\) ở ngoài.</p>
        <p>Mảnh giấy tròn mất dấu tâm: gấp hai lần để được hai đường kính. Hai nếp gấp cắt nhau tại tâm, vì mọi đường kính đều đi qua tâm.</p>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn bán kính 5 cm. Đường kính dài \(2 \cdot 5 = 10\) cm. Đó là dây dài nhất.</p>
        <p>Dây \(AB\) chắn góc ở tâm \(60^\circ\): tam giác \(OAB\) đều, nên \(AB = 5\) cm, nhỏ hơn đường kính. Dây chắn góc ở tâm \(90^\circ\): \(AB = 5\sqrt{2} \approx 7{,}1\) cm, vẫn nhỏ hơn 10 cm.</p>
        <p>Dây càng gần tâm thì càng dài. Dây đi qua tâm — đường kính — là dài nhất.</p>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn bán kính \(R = 6\) cm, lấy cung \(60^\circ\). Cung này là \(\dfrac{1}{6}\) vòng tròn.</p>
        <p>Độ dài cung: \(l = \dfrac{60}{180}\pi \cdot 6 = 2\pi\) cm. Chu vi cả đường tròn là \(12\pi\), một phần sáu đúng là \(2\pi\).</p>
        <p>Diện tích quạt: \(S_q = \dfrac{60}{360}\pi \cdot 36 = 6\pi\) cm². Công thức thứ hai cho cùng số: \(\dfrac{l R}{2} = \dfrac{2\pi \cdot 6}{2} = 6\pi\).</p>
        <p>Vành khuyên bán kính ngoài 5 cm, trong 2 cm: \(S = \pi(5^2 - 2^2) = 21\pi\) cm². Không phải \(\pi(5 - 2)^2 = 9\pi\).</p>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn \((O;\ 5)\). Gọi \(d\) là khoảng cách từ tâm đến đường thẳng.</p>
        <p>\(d = 3 < 5\): cắt nhau tại hai điểm. Nửa dây bằng \(\sqrt{5^2 - 3^2} = 4\), nên dây dài 8 cm.</p>
        <p>\(d = 5\): tiếp xúc, đúng một tiếp điểm. Bán kính tới tiếp điểm vuông góc với tiếp tuyến.</p>
        <p>\(d = 8 > 5\): không giao. Đường thẳng nằm ngoài đường tròn.</p>
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
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hai đường tròn bán kính \(R = 5\) cm và \(R' = 3\) cm. So \(OO'\) với \(R - R' = 2\) và \(R + R' = 8\).</p>
        <p>\(OO' = 6\): \(2 < 6 < 8\), cắt nhau tại hai điểm.</p>
        <p>\(OO' = 8\): tiếp xúc ngoài. \(OO' = 2\): tiếp xúc trong. Tiếp điểm nằm trên đường nối hai tâm.</p>
        <p>\(OO' = 9 > 8\): ngoài nhau, không chạm. \(OO' = 1 < 2\): đường tròn nhỏ nằm hẳn trong đường tròn lớn, không chạm — đựng nhau.</p>
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

  // ============ CHƯƠNG VI (Tập 2) ============
  {
    id: "c6-b18",
    num: 18,
    chapter: 6,
    title: "Hàm số y = ax² (a ≠ 0)",
    summary: "Nhận diện hàm số y = ax², bảng giá trị và đồ thị parabol đỉnh O.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Quãng đường rơi tự do tính bằng công thức \(s = 4{,}9t^2\), diện tích hình tròn \(S = \pi r^2\) — hai công thức khác nhau nhưng chung một dạng: hàm số \(y = ax^2\) với \(a \neq 0\).</p>
      <div class="definition">
        <p><strong>Nhận xét.</strong> Hàm số \(y = ax^2\) \((a \neq 0)\) xác định với mọi giá trị \(x\) thuộc \(\mathbb{R}\).</p>
      </div>
      <div class="definition">
        <p><strong>Cách vẽ đồ thị hàm số \(y = ax^2\):</strong> lập bảng ghi một số cặp giá trị tương ứng của \(x\) và \(y\); trong mặt phẳng toạ độ \(Oxy\), biểu diễn các cặp điểm \((x;\ y)\) trong bảng giá trị và nối chúng lại để được một đường cong là đồ thị của hàm số.</p>
      </div>
      <figure class="figure">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 120 112" width="125" role="img" aria-label="a lớn hơn 0">
              <line x1="10" y1="55" x2="112" y2="55" stroke="#BBBBBB" stroke-width="1.5"/>
              <line x1="60" y1="6" x2="60" y2="108" stroke="#BBBBBB" stroke-width="1.5"/>
              <path d="M 25 100 Q 60 10 95 100" fill="none" stroke="#58C4DD" stroke-width="2.5"/>
              <circle cx="60" cy="55" r="3.5" fill="#FC6255"/>
              <text x="66" y="64" font-size="10">O</text>
              <text x="14" y="18" font-size="12" fill="#FFFF00">a &gt; 0</text>
            </svg>
            <p>Hướng lên: \(a &gt; 0\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 120 112" width="125" role="img" aria-label="a nhỏ hơn 0">
              <line x1="10" y1="55" x2="112" y2="55" stroke="#BBBBBB" stroke-width="1.5"/>
              <line x1="60" y1="6" x2="60" y2="108" stroke="#BBBBBB" stroke-width="1.5"/>
              <path d="M 25 10 Q 60 100 95 10" fill="none" stroke="#58C4DD" stroke-width="2.5"/>
              <circle cx="60" cy="55" r="3.5" fill="#FFFF00"/>
              <text x="66" y="66" font-size="10">O</text>
              <text x="14" y="100" font-size="12" fill="#FC6255">a &lt; 0</text>
            </svg>
            <p>Hướng xuống: \(a &lt; 0\)</p>
          </div>
        </div>
        <figcaption>Đồ thị \(y = ax^2\): parabol đỉnh \(O\), trục đối xứng \(Oy\).</figcaption>
      </figure>
      <div class="definition">
        <p><strong>Đồ thị hàm số \(y = ax^2\) \((a \neq 0)\)</strong> là một đường cong, gọi là <em>đường parabol</em>, có các tính chất sau:</p>
        <ul>
          <li>Có đỉnh là gốc toạ độ \(O\);</li>
          <li>Có trục đối xứng là \(Oy\);</li>
          <li>Nằm phía trên trục hoành nếu \(a > 0\) và nằm phía dưới trục hoành nếu \(a < 0\).</li>
        </ul>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Vì \((-x)^2 = x^2\) nên hai điểm \((x;\ y)\) và \((-x;\ y)\) luôn cùng nằm trên đồ thị, đối xứng nhau qua trục \(Oy\). Vì vậy chỉ cần tính \(y\) cho \(x \geq 0\), vẽ nửa bên phải rồi <em>gương</em> sang trái. Vẽ nên có ít nhất 5 điểm: gốc \(O\) và hai cặp điểm đối xứng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Vẽ đồ thị \(y = -2x^2\): lập bảng \(x = -2; -1; 0; 1; 2\) được \(y = -8; -2; 0; -2; -8\). Năm điểm \((-2; -8), (-1; -2), (0; 0), (1; -2), (2; -8)\) nối lại cho parabol hướng xuống. Tìm điểm có tung độ \(-\tfrac{1}{2}\): \(-2x^2 = -\tfrac{1}{2} \Rightarrow x = \pm\tfrac{1}{2}\), hai điểm đối xứng qua \(Oy\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Vẽ \(y = 2x^2\) bằng vài cặp, đừng đoán hình.</p>
        <table>
          <tr><th>\(x\)</th><td>\(-2\)</td><td>\(-1\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td></tr>
          <tr><th>\(y\)</th><td>\(8\)</td><td>\(2\)</td><td>\(0\)</td><td>\(2\)</td><td>\(8\)</td></tr>
        </table>
        <p>\(x = 2\) và \(x = -2\) cho cùng một \(y\): parabol đối xứng qua trục \(Oy\), đỉnh tại gốc \(O\). Vì \(a = 2 > 0\), nhánh mở lên.</p>
        <p>Với \(y = -x^2\), cùng các \(x\) cho \(y = -4, -1, 0, -1, -4\). Cùng dạng, nhưng mở xuống vì \(a < 0\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Vẽ parabol bằng đoạn thẳng gấp khúc — phải nối bằng đường cong trơn.</li>
          <li>Nhầm hướng: \(y = -3x^2\) hướng <em>xuống</em> vì \(a = -3 < 0\), dù \(3x^2\) dương.</li>
          <li>Quên điểm đối xứng: \((-2;\ 8)\) thuộc \(y = 2x^2\) thì \((2;\ 8)\) cũng thuộc.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Cho hàm số \(y = 2x^2\). Giá trị của hàm số tại \(x = -3\) là bao nhiêu?`,
        answer: 18,
        hint: "(−3)² = 9, rồi nhân với a = 2.",
        explain: "y = 2·(−3)² = 2·9 = 18.",
      },
      {
        type: "mc",
        prompt: "Đồ thị hàm số y = ax² (a ≠ 0) có đỉnh và trục đối xứng là:",
        choices: ["Đỉnh O, trục đối xứng Oy", "Đỉnh O, trục đối xứng Ox", "Đỉnh A(0; a), trục Ox", "Không có trục đối xứng"],
        correct: 0,
        hint: "Đồ thị nằm cân qua trục nào?",
        explain: "Parabol y = ax² có đỉnh là gốc toạ độ O và trục đối xứng là Oy.",
      },
      {
        type: "mc",
        prompt: "Đồ thị hàm số nào nằm phía dưới trục hoành?",
        choices: [String.raw`\(y = 0{,}5x^2\)`, String.raw`\(y = -4x^2\)`, String.raw`\(y = 7x^2\)`, String.raw`\(y = x^2\)`],
        correct: 1,
        hint: "Phía dưới trục hoành khi a < 0.",
        explain: "Nằm phía dưới trục hoành nếu a < 0; chỉ y = −4x² có a âm.",
      },
    ],
  },
  {
    id: "c6-b19",
    num: 19,
    chapter: 6,
    title: "Phương trình bậc hai một ẩn",
    summary: "Dạng ax² + bx + c = 0; giải dạng đặc biệt và công thức nghiệm với biệt thức Δ.",
    body: String.raw`
      <div class="definition">
        <p><strong>Phương trình bậc hai một ẩn</strong> \(x\) là phương trình có dạng</p>
        \[
          ax^2 + bx + c = 0,
        \]
        <p>trong đó \(x\) là ẩn; \(a\), \(b\), \(c\) là các số đã biết với \(a \neq 0\). Giải một phương trình bậc hai là tìm tất cả các nghiệm của nó.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Không phải mọi phương trình có \(x^2\) đều bậc hai: \(\bigl(\tfrac{1}{x}\bigr)^2 + 3 \cdot \tfrac{1}{x} + 2 = 0\) thì ẩn là \(\tfrac{1}{x}\), không phải \(x\). Và \(a = 0\) thì mất \(x^2\) — thành bậc nhất.</p>
      </div>
      <div class="definition">
        <p><strong>Dạng đặc biệt (dạng khuyết).</strong> Nếu thiếu số hàng bậc nhất (\(b = 0\)) hoặc thiếu số hạng tự do (\(c = 0\)), ta đặt nhân tử chung đưa về phương trình tích, hoặc dùng hằng đẳng thức \(A^2 = B\ (B \geq 0) \Rightarrow A = \sqrt{B}\) hoặc \(A = -\sqrt{B}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(2x^2 - 4x = 0 \Leftrightarrow 2x(x-2) = 0 \Rightarrow x = 0\) hoặc \(x = 2\).</p>
        <p>\(x^2 - 9 = 0 \Leftrightarrow x^2 = 9 \Rightarrow x = 3\) hoặc \(x = -3\).</p>
        <p>\((x+1)^2 = 3 \Rightarrow x + 1 = \pm\sqrt{3} \Rightarrow x = -1 \pm \sqrt{3}\).</p>
        <p><strong>Chú ý.</strong> Với \(x^2 - 4x = 1\), cộng hai vế với 4: \((x-2)^2 = 5\), suy ra \(x = 2 \pm \sqrt{5}\).</p>
      </div>
      <div class="definition">
        <p><strong>Công thức nghiệm.</strong> Xét \(ax^2 + bx + c = 0\) \((a \neq 0)\). Tính biệt thức \(\Delta = b^2 - 4ac\):</p>
        <ul>
          <li>Nếu \(\Delta > 0\): hai nghiệm phân biệt \(\displaystyle x_1 = \frac{-b + \sqrt{\Delta}}{2a};\ x_2 = \frac{-b - \sqrt{\Delta}}{2a}\);</li>
          <li>Nếu \(\Delta = 0\): nghiệm kép \(\displaystyle x_1 = x_2 = -\frac{b}{2a}\);</li>
          <li>Nếu \(\Delta < 0\): phương trình vô nghiệm.</li>
        </ul>
      </div>
      <div class="definition">
        <p><strong>Chú ý (công thức thu gọn).</strong> Nếu \(b = 2b'\), đặt \(\Delta' = b'^2 - ac\): \(\Delta' > 0\) cho hai nghiệm \(\displaystyle x = \frac{-b' \pm \sqrt{\Delta'}}{a}\); \(\Delta' = 0\) cho nghiệm kép \(x = -\dfrac{b'}{a}\); \(\Delta' < 0\) vô nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(3x^2 + 7x - 1 = 0\): \(\Delta = 49 + 12 = 61 > 0\), nghiệm \(x = \dfrac{-7 \pm \sqrt{61}}{6}\).</p>
        <p>\(x^2 - 6x + 9 = 0\): \(\Delta = 0\), nghiệm kép \(x = 3\). \(\ 2x^2 + 3x + 5 = 0\): \(\Delta = 9 - 40 = -31 < 0\), vô nghiệm.</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> \(\Delta\) quyết định <em>số</em> nghiệm, \(-\dfrac{b}{2a}\) quyết định <em>giá trị</em> nghiệm. Và nếu \(a\) với \(c\) trái dấu thì \(ac < 0\) nên \(\Delta = b^2 - 4ac > 0\): phương trình <strong>luôn có hai nghiệm phân biệt</strong>.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Giải \(x^2 - 7x + 10 = 0\). Hệ số của \(x^2\) là \(1 \neq 0\), đúng là bậc hai.</p>
        <p>\(\Delta = 49 - 40 = 9 > 0\), hai nghiệm phân biệt. \(x = \dfrac{7 \pm 3}{2}\), nên \(x = 5\) hoặc \(x = 2\).</p>
        <p>Kiểm tra. \(x = 5\): \(25 - 35 + 10 = 0\). \(x = 2\): \(4 - 14 + 10 = 0\).</p>
        <p>Dạng khuyết \(x^2 - 9 = 0\): \(x^2 = 9\), nên \(x = 3\) hoặc \(x = -3\). Nghiệm âm vẫn là nghiệm.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên \(-4ac\) khi \(c\) âm: \(\Delta = b^2 - 4ac\) với \(c = -1\) là <em>cộng</em> \(4a\).</li>
          <li>Khai \(\sqrt{\Delta}\) khi \(\Delta < 0\) — dừng lại: vô nghiệm.</li>
          <li>Nhẩm nghiệm mà không kiểm tra \(\Delta \geq 0\) trước.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Phương trình nào là phương trình bậc hai một ẩn?",
        choices: [String.raw`\(2x^2 - 3x + 1 = 0\)`, String.raw`\(\bigl(\tfrac{1}{x}\bigr)^2 + \tfrac{3}{x} + 2 = 0\)`, String.raw`\(x^3 = 0\)`, String.raw`\(0x^2 + 2x = 0\)`],
        correct: 0,
        hint: "Ẩn phải là x, mũ cao nhất là 2, hệ số của x² khác 0.",
        explain: "Chỉ 2x² − 3x + 1 = 0 có dạng ax² + bx + c = 0 với a = 2 ≠ 0.",
      },
      {
        type: "num",
        prompt: String.raw`Nghiệm kép của \(x^2 - 6x + 9 = 0\) là \(x = \) ?`,
        answer: 3,
        hint: "Δ = (−6)² − 4·9 = 0, nghiệm x = −b/2a.",
        explain: "Δ = 0 nên x₁ = x₂ = 6/2 = 3.",
      },
      {
        type: "mc",
        prompt: String.raw`Số nghiệm của \(2x^2 + 3x + 5 = 0\) là:`,
        choices: ["2 nghiệm phân biệt", "1 nghiệm kép", "Vô nghiệm", "Vô số nghiệm"],
        correct: 2,
        hint: "Δ = 3² − 4·2·5 = ?",
        explain: "Δ = 9 − 40 = −31 < 0 nên phương trình vô nghiệm.",
      },
    ],
  },
  {
    id: "c6-b20",
    num: 20,
    chapter: 6,
    title: "Định lí Viète và ứng dụng",
    summary: "Tổng và tích hai nghiệm qua hệ số; nhẩm nghiệm khi a + b + c = 0 hoặc a − b + c = 0.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Bác An có 40 m hàng rào rão xung quanh mảnh vườn hình chữ nhật diện tích 96 m². Dài và rộng là hai số có tổng 20 và tích 96 — định lí Viète cho phép "đọc" hai số đó từ phương trình mà không cần giải.</p>
      <div class="definition">
        <p><strong>Định lí Viète.</strong> Nếu \(x_1,\ x_2\) là hai nghiệm của phương trình \(ax^2 + bx + c = 0\) \((a \neq 0)\) thì</p>
        \[
          x_1 + x_2 = -\frac{b}{a}; \qquad x_1 x_2 = \frac{c}{a}.
        \]
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(2x^2 + 11x + 7 = 0\): \(\Delta = 121 - 56 = 65 > 0\) nên có hai nghiệm, và \(x_1 + x_2 = -\dfrac{11}{2}\), \(x_1x_2 = \dfrac{7}{2}\) — không cần tính từng nghiệm.</p>
        <p>\(4x^2 - 12x + 9 = 0\): \(\Delta' = 36 - 36 = 0\) nên hai nghiệm trùng nhau; \(x_1 + x_2 = 3\), \(x_1x_2 = \dfrac{9}{4}\).</p>
      </div>
      <div class="definition">
        <p><strong>Nhẩm nghiệm.</strong> Xét \(ax^2 + bx + c = 0\) \((a \neq 0)\):</p>
        <ul>
          <li>Nếu \(a + b + c = 0\) thì phương trình có một nghiệm \(x_1 = 1\), nghiệm kia \(x_2 = \dfrac{c}{a}\);</li>
          <li>Nếu \(a - b + c = 0\) thì phương trình có một nghiệm \(x_1 = -1\), nghiệm kia \(x_2 = -\dfrac{c}{a}\).</li>
        </ul>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Muốn tìm hai số biết tổng \(S\) và tích \(P\): lập phương trình \(X^2 - SX + P = 0\). Hai số chính là hai nghiệm — Viète chạy theo chiều ngược lại.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Với \(x^2 - 7x + 10 = 0\), Viète đọc ngay tổng hai nghiệm là 7 và tích là 10. Hai số cộng được 7, nhân được 10 là 2 và 5. Không cần công thức nghiệm.</p>
        <p>Nhẩm khi \(a + b + c = 0\): \(x^2 - 3x + 2 = 0\) có \(1 - 3 + 2 = 0\), nên \(x = 1\) là một nghiệm. Nghiệm kia bằng tích, tức 2. Kiểm tra: \((x - 1)(x - 2) = x^2 - 3x + 2\).</p>
        <p>Khi \(a - b + c = 0\): \(x^2 + 3x + 2 = 0\) có \(1 - 3 + 2 = 0\), nên \(x = -1\) là một nghiệm. Nghiệm kia là \(-2\), vì tích bằng 2.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên dấu trừ: tổng là \(-\dfrac{b}{a}\), không phải \(\dfrac{b}{a}\).</li>
          <li>Áp dụng Viète mà chưa kiểm tra phương trình <em>có nghiệm</em> (\(\Delta \geq 0\)).</li>
          <li>Nhầm \(a + b + c = 0\) với \(a - b + c = 0\): nghiệm 1 hoặc −1.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Tổng hai nghiệm của \(x^2 - 7x + 10 = 0\) bằng bao nhiêu?`,
        answer: 7,
        hint: "Viète: tổng = −b/a.",
        explain: "x₁ + x₂ = −(−7)/1 = 7.",
      },
      {
        type: "mc",
        prompt: String.raw`Phương trình \(3x^2 + 5x + 2 = 0\) có \(a + b + c = 10 \neq 0\) nhưng \(3 - 5 + 2 = 0\). Vậy một nghiệm là:`,
        choices: ["x = 1", "x = −1", "x = 2", "x = −2"],
        correct: 1,
        hint: "a − b + c = 0 ⇒ nghiệm là −1.",
        explain: "Vì a − b + c = 0 nên x₁ = −1 (nghiệm kia x₂ = −c/a = −2/3).",
      },
      {
        type: "text",
        prompt: "Hai số có tổng 12 và tích 35. Viết hai số (số nhỏ trước), dạng 5;7",
        accept: ["5;7", "5; 7", "7;5", "7; 5", "(5;7)", "(5; 7)"],
        hint: "Lập X² − 12X + 35 = 0 rồi giải.",
        explain: "X² − 12X + 35 = 0 có Δ = 4, nghiệm 5 và 7.",
      },
    ],
  },
  {
    id: "c6-b21",
    num: 21,
    chapter: 6,
    title: "Giải bài toán bằng cách lập phương trình",
    summary: "Ba bước: chọn ẩn và lập phương trình, giải, kiểm tra điều kiện rồi kết luận.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Bác Lan gửi 100 triệu đồng tiết kiệm lãi kép; sau hai năm nhận đủ 118,81 triệu. Lãi suất bao nhiêu? Câu trả lời là một nghiệm của phương trình bậc hai.</p>
      <div class="definition">
        <p><strong>Các bước giải bài toán bằng cách lập phương trình:</strong></p>
        <p><em>Bước 1. Lập phương trình:</em> chọn ẩn số và đặt điều kiện thích hợp cho ẩn; biểu diễn các đại lượng chưa biết theo ẩn và các đại lượng đã biết; lập phương trình biểu thị mối quan hệ giữa các đại lượng.</p>
        <p><em>Bước 2.</em> Giải phương trình.</p>
        <p><em>Bước 3. Trả lời:</em> kiểm tra xem nghiệm nào thoả mãn điều kiện của ẩn, rồi kết luận.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Sân bóng đá 7 người có chiều rộng nhỏ hơn chiều dài 30 m, diện tích 1 800 m².</p>
        <p>Gọi \(x\) (m) là chiều rộng, điều kiện \(x > 0\). Chiều dài \(x + 30\), nên \(x(x + 30) = 1800\), tức \(x^2 + 30x - 1800 = 0\).</p>
        <p>\(\Delta = 30^2 + 4 \cdot 1800 = 8100\), \(x = \dfrac{-30 \pm 90}{2}\), chọn \(x = 30\) (nhận \(x > 0\)). Vậy sân rộng 30 m, dài 60 m.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Khác với lập <em>hệ</em> (Bài 3): nếu đề chỉ có <em>một</em> điều kiện liên kết giữa các đại lượng chưa biết, một ẩn là đủ. Diện tích hình chữ nhật = dài × rộng chính là phương trình bậc hai tự nhiên nhất của lớp 9.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình chữ nhật có chu vi 28 m và diện tích 48 m². Tìm hai cạnh.</p>
        <p>Gọi chiều rộng là \(x\) mét, với \(0 < x < 14\). Nửa chu vi là 14, nên chiều dài là \(14 - x\). Diện tích cho \(x(14 - x) = 48\), tức \(x^2 - 14x + 48 = 0\).</p>
        <p>\(\Delta = 196 - 192 = 4\), \(x = \dfrac{14 \pm 2}{2}\), nên \(x = 8\) hoặc \(x = 6\). Hai giá trị đổi vai: cạnh 6 m và 8 m.</p>
        <p>Đối chiếu điều kiện: cả hai dương và nhỏ hơn 14. Chu vi \(2(6 + 8) = 28\), diện tích 48. Nhận một hình chữ nhật, không phải hai đáp số khác nhau.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhận nghiệm âm cho đại lượng độ dài, số người… — phải loại theo điều kiện ẩn.</li>
          <li>Quên điều kiện \(x > 0\) nên không biết chọn nghiệm nào ở Bước 3.</li>
          <li>Lập sai phương trình diện tích: dài × rộng, không phải (dài + rộng) × 2.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Bước nào thuộc quy trình giải bài toán bằng cách lập phương trình?",
        choices: ["Chọn ẩn và đặt điều kiện", "Giải phương trình", "Kiểm tra điều kiện rồi kết luận", "Cả ba bước trên"],
        correct: 3,
        hint: "Ba bước của Bài 21 giống Bài 3 nhưng với một ẩn.",
        explain: "Quy trình gồm cả ba: lập phương trình, giải phương trình, trả lời.",
      },
      {
        type: "num",
        prompt: "Một hình chữ nhật có chu vi 34 m và diện tích 60 m². Chiều dài lớn hơn bằng bao nhiêu mét?",
        answer: 12,
        hint: "Nửa chu vi là 17: x(17 − x) = 60.",
        explain: "x² − 17x + 60 = 0, Δ = 49, x = 5 hoặc 12. Chiều dài là 12 m.",
      },
      {
        type: "mc",
        prompt: "Sau khi giải được hai nghiệm x = 30 và x = −60 cho bài toán chiều rộng sân bóng, ta kết luận:",
        choices: ["Cả hai nghiệm đều nhận", "Chỉ nhận x = 30 vì x > 0", "Chỉ nhận x = −60", "Bài toán vô nghiệm"],
        correct: 1,
        hint: "Chiều rộng không thể âm.",
        explain: "Điều kiện x > 0 loại nghiệm −60; chỉ nhận x = 30.",
      },
    ],
  },

  // ============ CHƯƠNG VII (Tập 2) ============
  {
    id: "c7-b22",
    num: 22,
    chapter: 7,
    title: "Bảng tần số và biểu đồ tần số",
    summary: "Tần số, mẫu dữ liệu, cỡ mẫu; lập bảng tần số và biểu đồ cột, biểu đồ đoạn thẳng.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Muốn mua giày thể thao cho cả lớp, Huy ghi lại cỡ giày của 22 bạn nam. Dãy số dài dòng — làm sao nhìn là biết mua cỡ nào nhiều nhất?</p>
      <div class="definition">
        <p>Dữ liệu cần khảo sát gọi là <em>dữ liệu</em>; dãy dữ liệu thu được từ khảo sát là một phần của nó, gọi là <strong>mẫu dữ liệu</strong>. Số giá trị của mẫu dữ liệu được gọi là <strong>cỡ mẫu</strong>.</p>
      </div>
      <div class="definition">
        <p><strong>Tần số</strong> của một giá trị là số lần xuất hiện của giá trị đó trong mẫu dữ liệu.</p>
        <p><strong>Bảng tần số</strong> là bảng thống kê cho biết tần số của các giá trị trong mẫu dữ liệu, có dạng: hàng Giá trị \(x_1, \dots, x_k\), hàng Tần số \(m_1, \dots, m_k\), trong đó \(m_i\) là tần số của \(x_i\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Cỡ giày 22 bạn nam: 36 xuất hiện 5 lần, 37 — 4 lần, 38 — 8 lần, 39 — 2 lần, 40 — 3 lần. Bảng tần số cho thấy giày cỡ 38 phù hợp với nhiều bạn nhất.</p>
        <table>
          <tr><th>Cỡ giày</th><td>36</td><td>37</td><td>38</td><td>39</td><td>40</td></tr>
          <tr><td>Tần số</td><td>5</td><td>4</td><td>8</td><td>2</td><td>3</td></tr>
        </table>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Biểu đồ tần số giúp "nhìn thấy" tần số: <em>biểu đồ cột</em> vẽ các cột cao bằng tần số tương ứng; <em>biểu đồ đoạn thẳng</em> nối các điểm cao tương ứng. Tổng tất cả các tần số luôn bằng cỡ mẫu \(n\) — kiểm tra nhanh bảng có lập đúng không.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cỡ giày của 8 bạn: 38, 39, 38, 40, 39, 39, 38, 41. Cỡ mẫu là 8, vì có 8 số, không phải vì có 4 cỡ khác nhau.</p>
        <p>Đếm: 38 xuất hiện 3 lần, 39 xuất hiện 3 lần, 40 một lần, 41 một lần. Tổng tần số \(3 + 3 + 1 + 1 = 8\). Cộng không ra 8 thì đã đếm sót.</p>
        <p>Cần mua nhiều nhất là cỡ 38 và 39, mỗi cỡ 3 đôi. Biểu đồ cột: trục ngang là cỡ giày, chiều cao cột là tần số.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Tính nhầm \(n\): tổng các tần số phải đúng bằng cỡ mẫu.</li>
          <li>Bỏ sót giá trị khi đếm — nên gạch chéo từng giá trị khi liệt kê.</li>
          <li>Nhầm tần số (số lần xuất hiện) với giá trị của dữ liệu.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Ở bảng tần số cỡ giày (5; 4; 8; 2; 3), tổng các tần số — tức cỡ mẫu — bằng bao nhiêu?",
        answer: 22,
        hint: "Cộng cả năm tần số.",
        explain: "5 + 4 + 8 + 2 + 3 = 22 bạn nam.",
      },
      {
        type: "mc",
        prompt: "Tần số của một giá trị là:",
        choices: ["Số lần xuất hiện của giá trị đó trong mẫu dữ liệu", "Giá trị lớn nhất của mẫu", "Tỉ lệ phần trăm của giá trị", "Trung bình cộng các giá trị"],
        correct: 0,
        hint: "Đếm xem giá trị ấy lặp lại mấy lần.",
        explain: "Tần số của một giá trị là số lần xuất hiện của giá trị đó trong mẫu dữ liệu.",
      },
      {
        type: "mc",
        prompt: "Số giá trị của mẫu dữ liệu được gọi là:",
        choices: ["Tần số", "Cỡ mẫu", "Biểu đồ", "Tần số tương đối"],
        correct: 1,
        hint: "Tên riêng cho kích thước của mẫu.",
        explain: "Số giá trị của mẫu dữ liệu được gọi là cỡ mẫu.",
      },
    ],
  },
  {
    id: "c7-b23",
    num: 23,
    chapter: 7,
    title: "Bảng tần số tương đối và biểu đồ tần số tương đối",
    summary: "f = (m/n)·100% — tỉ lệ xuất hiện của mỗi giá trị (tần suất).",
    body: String.raw`
      <p><strong>Tình huống.</strong> Một túi kín đựng 10 quả bóng màu xanh, đỏ, vàng. Thực hiện 30 lần lấy bóng (lấy rồi trả lại). Biết tần số từng màu — nhưng so sánh với các túi khác cỡ mẫu khác nhau thì phải dùng <em>tỉ lệ</em>.</p>
      <div class="definition">
        <p>Cho mẫu dữ liệu cỡ \(n\) với các giá trị \(x_1, \dots, x_k\) có tần số \(m_1, \dots, m_k\) (\(n = m_1 + \dots + m_k\)). <strong>Tần số tương đối</strong> \(f_i\) của giá trị \(x_i\) là tỉ số giữa tần số \(m_i\) của \(x_i\) với \(n\):</p>
        \[
          f_i = \frac{m_i}{n} \cdot 100\%.
        \]
        <p>Bảng ghi các tần số tương đối gọi là <strong>bảng tần số tương đối</strong>. Tần số tương đối còn gọi là <em>tần suất</em>.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Tần số trả lời <em>có bao nhiêu lần</em>; tần số tương đối trả lời <em>chiếm bao nhiêu phần trăm</em>. Tổng các tần số tương đối luôn bằng 100% — lại một phép kiểm tra nhanh.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Theo dõi chất lượng không khí 30 ngày: Tốt 8 ngày, Trung bình 13 ngày, Kém 5 ngày, Xấu 4 ngày. Tần số tương đối: Tốt \(\tfrac{8}{30} \cdot 100\% \approx 26{,}7\%\); Trung bình \(\approx 43{,}3\%\); Kém \(\approx 16{,}7\%\); Xấu \(\approx 13{,}3\%\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cùng 8 bạn ở trên. Tần số tương đối của cỡ 39 là \(\dfrac{3}{8} = 37{,}5\%\). Cỡ 40 là \(\dfrac{1}{8} = 12{,}5\%\). Các tỉ lệ của một mẫu phải cộng lại thành 100%.</p>
        <p>So hai lớp: lớp A có 6 trong 8 bạn đi cỡ 39, tức 75%. Lớp B có 9 trong 20 bạn, tức 45%. Lớp B có nhiều bạn hơn, nhưng tỉ lệ nhỏ hơn. Muốn so hai mẫu khác cỡ, dùng tần số tương đối, không dùng số lần xuất hiện.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên nhân 100% khi đề yêu cầu tỉ lệ phần trăm.</li>
          <li>Làm tròn quá sớm khiến tổng không đúng 100%.</li>
          <li>Nhầm tần số \(m\) với tần số tương đối \(f\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Trong 30 lượt lấy bóng, màu xanh xuất hiện 12 lần. Tần số tương đối của màu xanh bằng bao nhiêu phần trăm?",
        answer: 40,
        hint: "(12/30)·100%.",
        explain: "f = (12/30)·100% = 40%.",
      },
      {
        type: "num",
        prompt: "Tổng tất cả các tần số tương đối của một mẫu dữ liệu bằng bao nhiêu phần trăm?",
        answer: 100,
        hint: "Các phần chia trọn vẹn một cái bánh.",
        explain: "Tổng các tần số tương đối bằng 100%.",
      },
      {
        type: "mc",
        prompt: "Tần số tương đối còn được gọi là:",
        choices: ["Tần suất", "Cỡ mẫu", "Biểu đồ tần số", "Khoảng dữ liệu"],
        correct: 0,
        hint: "Tên khác trong thống kê.",
        explain: "Tần số tương đối còn gọi là tần suất.",
      },
    ],
  },
  {
    id: "c7-b24",
    num: 24,
    chapter: 7,
    title: "Bảng tần số, tần số tương đối ghép nhóm và biểu đồ",
    summary: "Gom dữ liệu thành các nhóm [a; b), lập bảng tần số và tần số tương đối ghép nhóm.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Khảo sát thời gian tự học mỗi tối của lớp 9C: dưới 1 giờ có 10 bạn; từ 1 đến dưới 2 giờ — 15 bạn; từ 2 đến dưới 3 giờ — 8 bạn; từ 3 đến dưới 4 giờ — 7 bạn. Dữ liệu liên tục nên ghép thành <em>nhóm</em>.</p>
      <div class="definition">
        <p><strong>Nhóm số liệu</strong> \([a;\ b)\) là nhóm gồm các số liệu lớn hơn hoặc bằng \(a\) và nhỏ hơn \(b\) (\(a\) là đầu mút trái, \(b\) là đầu mút phải).</p>
        <p><strong>Bảng tần số ghép nhóm</strong> là bảng tần số của các nhóm số liệu; <strong>bảng tần số tương đối ghép nhóm</strong> là bảng tần số tương đối của các nhóm đó, với \(f_i = \dfrac{m_i}{n} \cdot 100\%\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Chiều cao 40 học sinh lớp 9C, ghép nhóm [155; 158), [158; 161), [161; 164), [164; 167): tần số \(m_1 = 5,\ m_2 = 12,\ m_3 = 15,\ m_4 = 8\), tổng \(n = 40\).</p>
        <table>
          <tr><th>Chiều cao (cm)</th><td>[155; 158)</td><td>[158; 161)</td><td>[161; 164)</td><td>[164; 167)</td></tr>
          <tr><td>Tần số tương đối</td><td>12,5%</td><td>30%</td><td>37,5%</td><td>20%</td></tr>
        </table>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Dấu ngoặc có ý nghĩa: [155; 158) lấy <em>155</em>, không lấy <em>158</em> — 158 rơi vào nhóm kế tiếp. Từ bảng tần số tương đối ghép nhóm, ta vẽ <strong>biểu đồ tần số tương đối ghép nhóm</strong> bằng các cột cao theo tỉ lệ phần trăm của từng nhóm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Thời gian tự học của 40 bạn được gom nhóm: \([0;\ 1)\) có 10 bạn, \([1;\ 2)\) có 15, \([2;\ 3)\) có 8, \([3;\ 4)\) có 7. Tổng \(10 + 15 + 8 + 7 = 40\).</p>
        <p>Tần số tương đối: 25%, 37,5%, 20% và 17,5%. Cộng lại 100%.</p>
        <p>Bạn học đúng 2 giờ thuộc nhóm \([2;\ 3)\), không thuộc \([1;\ 2)\). Ngoặc vuông lấy đầu mút trái; ngoặc tròn không lấy đầu mút phải.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Cho giá trị đầu mút vào cả hai nhóm: 158 chỉ thuộc [158; 161), không thuộc [155; 158).</li>
          <li>Quên tính lại \(n\) = tổng các tần số của các nhóm.</li>
          <li>Vẽ biểu đồ cột mà trục dọc không theo tỉ lệ phần trăm.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Nhóm số liệu [2; 3) bao gồm các số liệu:",
        choices: ["Từ 2 đến dưới 3", "Từ trên 2 đến 3", "Từ 2 đến 3 (cả hai đầu)", "Chỉ 2 và 3"],
        correct: 0,
        hint: "Dấu ngoặc vuông lấy, dấu ngoặc tròn không lấy.",
        explain: "Nhóm [a; b) gồm các số ≥ a và < b: lấy 2, không lấy 3.",
      },
      {
        type: "num",
        prompt: "Lớp 9C có 40 học sinh; nhóm [161; 164) có 15 bạn. Tần số tương đối của nhóm này bằng bao nhiêu phần trăm?",
        answer: 37.5,
        hint: "(15/40)·100%.",
        explain: "f = (15/40)·100% = 37,5%.",
      },
      {
        type: "num",
        prompt: "Bảng tần số ghép nhóm có các tần số 10; 15; 8; 7. Cỡ mẫu n bằng bao nhiêu?",
        answer: 40,
        hint: "Cộng bốn tần số.",
        explain: "n = 10 + 15 + 8 + 7 = 40.",
      },
    ],
  },

  // ============ CHƯƠNG VIII (Tập 2) ============
  {
    id: "c8-b25",
    num: 25,
    chapter: 8,
    title: "Phép thử ngẫu nhiên và không gian mẫu",
    summary: "Phép thử: kết quả không biết trước nhưng liệt kê được; không gian mẫu Ω.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Cửa hàng rút thăm trao hai phần quà cho 2 trong 4 khách hàng: rút một phiếu, không trả lại, rồi rút phiếu thứ hai. Có bao nhiêu kết quả có thể xảy ra?</p>
      <div class="definition">
        <p>Một hoặc một số hành động, thực nghiệm được tiến hành liên tiếp hay đồng thời mà kết quả không thể biết được trước khi thực hiện nhưng có thể liệt kê được tất cả các kết quả có thể xảy ra, được gọi là một <strong>phép thử ngẫu nhiên</strong>, gọi tắt là <em>phép thử</em>.</p>
        <p>Tập hợp tất cả các kết quả có thể xảy ra của phép thử gọi là <strong>không gian mẫu</strong> của phép thử, kí hiệu là \(\Omega\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Với phép thử ghép hai hành động, liệt kê bằng <em>bảng</em>: các hàng là kết quả hành động thứ nhất, các cột là kết quả hành động thứ hai — mỗi ô là một kết quả của phép thử. Gieo xúc xắc + tung đồng xu: bảng 6 × 2 cho \(\Omega\) có 12 phần tử.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Bạn Lan gieo một xúc xắc, bạn Hoà gieo một đồng xu. Kết quả là (số chấm; mặt): \(\Omega = \{(1;\ S); (2;\ S); \dots; (6;\ S); (1;\ N); \dots; (6;\ N)\}\). Không gian mẫu có 12 phần tử.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tung một đồng xu hai lần. Không biết trước mặt nào, nhưng liệt kê được hết. Gọi S là sấp, N là ngửa:</p>
        \[
          \Omega = \{SS,\ SN,\ NS,\ NN\}.
        \]
        <p>Có 4 kết quả. \(SN\) khác \(NS\): lần một sấp rồi lần hai ngửa không phải cùng một kết quả với ngược lại, vì phép thử có thứ tự.</p>
        <p>Rút lần lượt 2 người trong 4 người A, B, C, D, không trả lại: lần đầu 4 cách, lần sau còn 3 cách, tất cả \(4 \cdot 3 = 12\) kết quả. Đó là số phần tử của \(\Omega\), chưa cần viết đủ 12 cặp mới biết cỡ mẫu.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Liệt kê thiếu hoặc trùng kết quả — bảng liên kết giúp không sót.</li>
          <li>Nhầm (1; S) với (S; 1) khi hai hành động khác bản chất (xúc xắc khác đồng xu).</li>
          <li>Rút thăm <em>không hoàn lại</em>: kết quả lần hai phụ thuộc lần một, đừng liệt kê như hai lần độc lập.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Gieo một xúc xắc sáu mặt. Không gian mẫu có bao nhiêu phần tử?",
        answer: 6,
        hint: "Mỗi mặt là một kết quả.",
        explain: "Ω = {1; 2; 3; 4; 5; 6} có 6 phần tử.",
      },
      {
        type: "num",
        prompt: "Gieo hai đồng xu cùng lúc. Không gian mẫu có bao nhiêu phần tử?",
        answer: 4,
        hint: "(S; S), (S; N), (N; S), (N; N).",
        explain: "Ω = {(S;S); (S;N); (N;S); (N;N)} có 4 phần tử.",
      },
      {
        type: "mc",
        prompt: "Không gian mẫu của một phép thử là:",
        choices: ["Tập tất cả các kết quả có thể xảy ra", "Tập các kết quả thuận lợi", "Kết quả xảy ra nhiều nhất", "Một kết quả bất kì"],
        correct: 0,
        hint: "Liệt kê được tất cả — gom lại thành tập nào?",
        explain: "Không gian mẫu Ω là tập hợp tất cả các kết quả có thể xảy ra của phép thử.",
      },
    ],
  },
  {
    id: "c8-b26",
    num: 26,
    chapter: 8,
    title: "Xác suất của biến cố liên quan tới phép thử",
    summary: "Kết quả thuận lợi; P(E) = số kết quả thuận lợi : số phần tử của Ω.",
    body: String.raw`
      <div class="definition">
        <p>Cho phép thử \(T\). Xét biến cố \(E\), trong đó việc xảy ra hay không xảy ra của \(E\) tuỳ thuộc vào kết quả của phép thử \(T\). Kết quả của phép thử \(T\) làm cho biến cố \(E\) xảy ra gọi là <strong>kết quả thuận lợi</strong> cho \(E\).</p>
      </div>
      <div class="definition">
        <p><strong>Cách tính xác suất của biến cố \(E\):</strong></p>
        <p><em>Bước 1.</em> Mô tả không gian mẫu của phép thử; xác định số phần tử của \(\Omega\).</p>
        <p><em>Bước 2.</em> Chứng tỏ các kết quả có thể của phép thử là đồng khả năng.</p>
        <p><em>Bước 3.</em> Mô tả các kết quả thuận lợi cho \(E\); xác định số kết quả thuận lợi.</p>
        <p><em>Bước 4.</em> Lập tỉ số giữa số kết quả thuận lợi cho \(E\) và số phần tử của \(\Omega\):</p>
        \[
          P(E) = \frac{\text{số kết quả thuận lợi cho } E}{\text{số phần tử của } \Omega}.
        \]
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Ba bạn Bảo, Châu, Dương xếp ngẫu nhiên ngồi vào hàng ba ghế. \(\Omega = \{\text{BCD; BDC; CBD; DBC; CDB; DCB}\}\) có 6 phần tử, đồng khả năng.</p>
        <p>a) \(E\): Bảo không ngồi ngoài cùng bên phải — có 4 kết quả thuận lợi, \(P(E) = \tfrac{4}{6} = \tfrac{2}{3}\).</p>
        <p>b) \(F\): Châu và Dương không ngồi cạnh nhau — có 2 kết quả thuận lợi (CBD, DBC), \(P(F) = \tfrac{2}{6} = \tfrac{1}{3}\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Xác suất là <em>phần bánh</em>: chia cái bánh \(\Omega\) cho các kết quả đồng khả năng, biến cố \(E\) chiếm mấy miếng? Luôn có \(0 \leq P(E) \leq 1\): biến cố không thể có \(P = 0\), biến cố chắc chắn có \(P = 1\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tung một xúc xắc cân đối. \(\Omega = \{1, 2, 3, 4, 5, 6\}\), sáu kết quả đồng khả năng.</p>
        <p>Biến cố "ra số chẵn" có kết quả thuận lợi 2, 4, 6. Xác suất \(\dfrac{3}{6} = \dfrac{1}{2}\).</p>
        <p>Biến cố "ra số lớn hơn 4" có kết quả thuận lợi 5 và 6. Xác suất \(\dfrac{2}{6} = \dfrac{1}{3}\). Không đếm số 4, vì 4 không lớn hơn 4.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên bước chứng minh các kết quả <em>đồng khả năng</em> — không phải lúc nào cũng thế.</li>
          <li>Đếm thiếu kết quả thuận lợi (thường với điều kiện phủ định kiểu không ngồi cạnh).</li>
          <li>Viết xác suất lớn hơn 1 — kiểm tra lại phép chia.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Hộp có 3 bi đỏ và 2 bi xanh (cùng kích thước). Rút ngẫu nhiên một viên. Xác suất được bi đỏ bằng bao nhiêu (viết dưới dạng số thập phân)?",
        answer: 0.6,
        hint: "Ω có 5 phần tử; thuận lợi có 3.",
        explain: "P = 3/5 = 0,6.",
      },
      {
        type: "num",
        prompt: "Gieo một xúc xắc cân đối. Xác suất xuất hiện mặt 6 chấm bằng bao nhiêu (viết dưới dạng số thập phân)?",
        answer: 0.16666666666666666,
        hint: "1 trên 6.",
        explain: "P = 1/6 ≈ 0,17.",
      },
      {
        type: "mc",
        prompt: "Xác suất của biến cố chắc chắn bằng:",
        choices: ["0", "0,5", "1", "100"],
        correct: 2,
        hint: "Biến cố nào luôn xảy ra?",
        explain: "Biến cố chắc chắn có xác suất bằng 1; biến cố không thể có xác suất bằng 0.",
      },
    ],
  },

  // ============ CHƯƠNG IX (Tập 2) ============
  {
    id: "c9-b27",
    num: 27,
    chapter: 9,
    title: "Góc nội tiếp",
    summary: "Định nghĩa góc nội tiếp, cung bị chắn; số đo góc nội tiếp bằng nửa cung bị chắn.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Ta biết góc ở tâm \(BOC\) bằng số đo cung \(BC\). Còn góc \(BAC\) — đỉnh nằm trên đường tròn — liên hệ với cung ấy thế nào?</p>
      <div class="definition">
        <p><strong>Góc nội tiếp</strong> của đường tròn là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó. Cung nằm bên trong góc được gọi là <strong>cung bị chắn</strong>.</p>
      </div>
      <div class="definition">
        <p><strong>Định lí.</strong> Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của cung bị chắn:</p>
        \[
          \widehat{ACB} = \frac{1}{2} \operatorname{sd} \wideparen{AB}
        \]
        <p>(với cung \(AB\) không chứa \(C\)).</p>
      </div>
      <p><strong>Nhận xét.</strong> Với các góc nội tiếp của một đường tròn hoặc của hai đường tròn bằng nhau:</p>
      <ul>
        <li>Các góc nội tiếp bằng nhau chắn các cung bằng nhau;</li>
        <li>Các góc nội tiếp cùng chắn một cung (hoặc chắn các cung bằng nhau) thì bằng nhau;</li>
        <li>Góc nội tiếp chắn cung nhỏ có số đo bằng nửa số đo của góc ở tâm chắn cùng một cung;</li>
        <li>Góc nội tiếp chắn nửa đường tròn là góc vuông.</li>
      </ul>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Góc ở tâm "nhìn" cung từ tâm — gấp đôi; góc nội tiếp "nhìn" cùng cung từ rìa — chỉ bằng nửa. Cùng nhìn một cung từ bất kì điểm nào trên đường tròn, góc không đổi: đó là lý do mọi góc nội tiếp cùng chắn một cung đều bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Cho \(\widehat{BAC} = 60^\circ\). Hai góc nội tiếp \(\widehat{BDC}\) và \(\widehat{BAC}\) cùng chắn cung nhỏ \(BC\) nên \(\widehat{BDC} = 60^\circ\); góc ở tâm \(\widehat{BOC} = 2\widehat{BAC} = 120^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cung \(AB\) có số đo \(80^\circ\). Góc ở tâm chắn cung đó cũng bằng \(80^\circ\). Góc nội tiếp chắn cùng cung \(AB\) bằng một nửa, tức \(40^\circ\).</p>
        <p>Nếu góc nội tiếp bằng \(90^\circ\), cung bị chắn bằng \(180^\circ\). Cung nửa đường tròn nghĩa là dây chắn cung ấy là đường kính. Cách nhớ: góc nội tiếp chắn đường kính thì vuông.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm với góc ở tâm: góc nội tiếp chỉ bằng <em>nửa</em> số đo cung bị chắn.</li>
          <li>Quên rằng đỉnh phải nằm <em>trên</em> đường tròn và hai cạnh phải chứa <em>dây cung</em> — góc có một cạnh tiếp tuyến không phải góc nội tiếp.</li>
          <li>Cung bị chắn là cung nằm <em>bên trong</em> góc, đừng chọn nhầm cung kia.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Góc nội tiếp chắn một cung có số đo \(80^\circ\). Số đo của góc đó bằng bao nhiêu độ?`,
        answer: 40,
        hint: "Nửa số đo của cung bị chắn.",
        explain: "80° : 2 = 40°.",
      },
      {
        type: "num",
        prompt: String.raw`Cho \(\widehat{BAC} = 50^\circ\) (góc nội tiếp). Góc ở tâm \(\widehat{BOC}\) chắn cùng cung nhỏ \(BC\) bằng bao nhiêu độ?`,
        answer: 100,
        hint: "Góc ở tâm gấp đôi góc nội tiếp cùng chắn một cung.",
        explain: "BOC = 2·BAC = 100°.",
      },
      {
        type: "mc",
        prompt: "Góc nội tiếp chắn nửa đường tròn là:",
        choices: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"],
        correct: 1,
        hint: "Nửa đường tròn có số đo 180°.",
        explain: "Chắn cung 180° nên góc nội tiếp = 90°: góc vuông.",
      },
    ],
  },
  {
    id: "c9-b28",
    num: 28,
    chapter: 9,
    title: "Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác",
    summary: "Đường tròn qua ba đỉnh (tâm = giao ba đường trung trực); đường tròn tiếp xúc ba cạnh (tâm = giao ba đường phân giác).",
    body: String.raw`
      <div class="definition">
        <p><strong>Đường tròn ngoại tiếp</strong> một tam giác là đường tròn đi qua ba đỉnh của tam giác đó; khi đó ta nói tam giác nội tiếp đường tròn. Tâm của nó là giao điểm của ba đường trung trực của tam giác.</p>
        <p><strong>Đường tròn nội tiếp</strong> một tam giác là đường tròn tiếp xúc với cả ba cạnh của tam giác. Tâm của nó là giao điểm của ba đường phân giác trong của tam giác.</p>
      </div>
      <div class="definition">
        <p><strong>Đường tròn ngoại tiếp tam giác vuông</strong> có tâm là trung điểm của cạnh huyền và bán kính bằng một nửa cạnh huyền.</p>
        <p><strong>Đường tròn nội tiếp tam giác đều</strong> cạnh \(a\) có tâm là trọng tâm của tam giác và bán kính \(r = \dfrac{\sqrt{3}}{6}a\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đường trung trực cách đều hai đầu mút nên điểm giao ba đường trung trực cách đều ba đỉnh — đó là tâm đường tròn đi qua cả ba đỉnh. Đường phân giác cách đều hai cạnh nên giao ba phân giác cách đều ba cạnh — tâm đường tròn chạm cả ba cạnh. Với tam giác vuông, góc nội tiếp chắn nửa đường tròn là góc vuông (Bài 27!) nên đường tròn đường kính huyền đi qua đỉnh vuông.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Tam giác \(ABC\) vuông tại \(A\), \(AB = 2\) cm, \(AC = 4\) cm. Đường tròn ngoại tiếp có tâm là trung điểm \(BC\): \(BC^2 = 4 + 16 = 20\), \(BC = 2\sqrt{5}\), bán kính \(R = \dfrac{BC}{2} = \sqrt{5}\) cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tam giác vuông cạnh 6 cm, 8 cm, cạnh huyền 10 cm.</p>
        <p>Đường tròn ngoại tiếp đi qua ba đỉnh. Tâm là trung điểm cạnh huyền, bán kính bằng nửa cạnh huyền: \(R = 5\) cm. Ba đỉnh đều cách tâm đúng 5 cm.</p>
        <p>Đường tròn nội tiếp tiếp xúc ba cạnh, bán kính \(r = \dfrac{6 + 8 - 10}{2} = 2\) cm. Kiểm tra bằng diện tích: \(\dfrac{6 \cdot 8}{2} = 24\), và bán kính nhân nửa chu vi cũng là \(2 \cdot 12 = 24\). Khớp.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm tâm ngoại tiếp (giao <em>đường trung trực</em>) với tâm nội tiếp (giao <em>đường phân giác</em>).</li>
          <li>Với tam giác vuông, quên công thức nhanh \(R = \dfrac{\text{cạnh huyền}}{2}\) và đi tính vòng vo.</li>
          <li>Nhầm \(r = \dfrac{\sqrt{3}}{6}a\) (nội tiếp) với \(R = \dfrac{a}{\sqrt{3}}\) (ngoại tiếp) của tam giác đều.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Tam giác vuông có hai cạnh góc vuông 6 cm và 8 cm. Bán kính đường tròn ngoại tiếp bằng bao nhiêu cm?",
        answer: 5,
        hint: "Cạnh huyền = √(6² + 8²); R bằng nửa cạnh huyền.",
        explain: "BC = 10 cm nên R = 5 cm.",
      },
      {
        type: "mc",
        prompt: "Tâm đường tròn nội tiếp tam giác là giao điểm của:",
        choices: ["Ba đường trung trực", "Ba đường phân giác trong", "Ba đường cao", "Ba đường trung tuyến"],
        correct: 1,
        hint: "Tâm phải cách đều ba cạnh.",
        explain: "Đường phân giác cách đều hai cạnh nên giao ba phân giác cách đều ba cạnh — tâm đường tròn nội tiếp.",
      },
      {
        type: "num",
        prompt: String.raw`Tam giác đều cạnh \(a = 6\) cm có bán kính đường tròn nội tiếp \(r = k\sqrt{3}\) (cm). Giá trị \(k\) là bao nhiêu?`,
        answer: 1,
        hint: "r = (√3/6)·a.",
        explain: "r = (√3/6)·6 = √3, vậy k = 1.",
      },
    ],
  },
  {
    id: "c9-b29",
    num: 29,
    chapter: 9,
    title: "Tứ giác nội tiếp",
    summary: "Bốn đỉnh trên một đường tròn; tổng hai góc đối của tứ giác nội tiếp bằng 180°.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Mỗi tam giác luôn có một đường tròn đi qua ba đỉnh. Với tứ giác thì sao — luôn đúng hay chỉ với một số tứ giác?</p>
      <div class="definition">
        <p>Tứ giác có bốn đỉnh nằm trên một đường tròn được gọi là <strong>tứ giác nội tiếp</strong> đường tròn (và đường tròn được gọi là <strong>đường tròn ngoại tiếp</strong> tứ giác).</p>
      </div>
      <div class="definition">
        <p><strong>Định lí.</strong> Trong một tứ giác nội tiếp, tổng số đo hai góc đối nhau bằng \(180^\circ\):</p>
        \[
          \widehat{A} + \widehat{C} = 180^\circ; \qquad \widehat{B} + \widehat{D} = 180^\circ.
        \]
      </div>
      <div class="idea">
        <p><strong>Vì sao?</strong> Hai đỉnh \(B, D\) chia đường tròn thành hai cung có tổng số đo \(360^\circ\). Góc \(A\) chắn một cung, góc \(C\) chắn cung kia, mỗi góc bằng nửa cung bị chắn (Bài 27) nên tổng hai góc bằng nửa \(360^\circ\).</p>
        <p><strong>Đảo cũng đúng:</strong> nếu tổng hai góc đối của một tứ giác bằng \(180^\circ\) thì tứ giác đó nội tiếp được một đường tròn. Ví dụ hình chữ nhật (hai góc đối đều là cặp góc vuông) luôn nội tiếp được.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Tứ giác \(ABCD\) nội tiếp \((O)\) với \(\widehat{DAB} = 70^\circ\), \(\widehat{ABC} = 130^\circ\). Suy ra \(\widehat{BCD} = 180^\circ - 70^\circ = 110^\circ\), \(\widehat{CDA} = 180^\circ - 130^\circ = 50^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tứ giác có các góc lần lượt \(70^\circ\), \(110^\circ\), \(110^\circ\), \(70^\circ\). Hai góc đối cộng lại \(70^\circ + 110^\circ = 180^\circ\). Tứ giác này nội tiếp được một đường tròn.</p>
        <p>Tứ giác khác có góc \(80^\circ\), \(100^\circ\), \(70^\circ\), \(110^\circ\). Một cặp đối cộng được \(80^\circ + 70^\circ = 150^\circ \neq 180^\circ\). Không nội tiếp được. Tổng bốn góc vẫn là \(360^\circ\), nhưng điều kiện cần từng cặp đối, không phải tổng cả bốn.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Cộng nhầm hai góc <em>kề nhau</em> — định lí chỉ đúng cho hai góc <em>đối nhau</em>.</li>
          <li>Áp dụng cho tứ giác bất kì chưa biết nội tiếp.</li>
          <li>Quên dấu hiệu đảo để chứng minh tứ giác nội tiếp đường tròn.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Trong một tứ giác nội tiếp, tổng số đo hai góc đối nhau bằng:",
        choices: ["90°", "180°", "270°", "360°"],
        correct: 1,
        hint: "Định lí của Bài 29.",
        explain: "Tổng số đo hai góc đối nhau bằng 180°.",
      },
      {
        type: "num",
        prompt: String.raw`Tứ giác \(ABCD\) nội tiếp đường tròn, biết \(\widehat{A} = 75^\circ\). Số đo góc \(\widehat{C}\) đối với \(\widehat{A}\) bằng bao nhiêu độ?`,
        answer: 105,
        hint: "180 trừ 75.",
        explain: "C = 180° − 75° = 105°.",
      },
      {
        type: "mc",
        prompt: "Tứ giác nào luôn nội tiếp được một đường tròn?",
        choices: ["Hình bình hành bất kì", "Hình thang bất kì", "Hình chữ nhật", "Tứ giác có một góc vuông"],
        correct: 2,
        hint: "Hình nào có hai góc đối luôn cộng lại 180°?",
        explain: "Hình chữ nhật có các góc vuông nên tổng hai góc đối bằng 180° — luôn nội tiếp được (tâm là giao hai đường chéo).",
      },
    ],
  },
  {
    id: "c9-b30",
    num: 30,
    chapter: 9,
    title: "Đa giác đều",
    summary: "Đa giác lồi có cạnh và góc bằng nhau; xây dựng bằng cách chia đường tròn thành các cung bằng nhau.",
    body: String.raw`
      <div class="definition">
        <p><strong>Đa giác</strong> là hình gồm \(n\) đoạn thẳng \(AB, BC, \dots\) trong đó bất kì hai đoạn thẳng nào có một điểm chung cùng không nằm trên một đường thẳng. Nếu với một cạnh bất kì, các đỉnh không thuộc cạnh đó đều nằm về một phía so với đường thẳng chứa cạnh thì đa giác gọi là <strong>đa giác lồi</strong>.</p>
        <p><strong>Đa giác đều</strong> là một đa giác lồi có các cạnh bằng nhau và các góc bằng nhau.</p>
      </div>
      <p>Người ta chứng minh được rằng các đỉnh của mỗi đa giác đều luôn cùng nằm trên một đường tròn, gọi là <strong>đường tròn ngoại tiếp đa giác</strong>; tâm đường tròn gọi là <strong>tâm của đa giác</strong> và đa giác được gọi là nội tiếp đường tròn đó.</p>
      <div class="definition">
        <p><strong>Cách xây dựng đa giác đều:</strong> vẽ đường tròn tâm \(O\) bán kính \(R\); chia đường tròn thành \(n\) cung bằng nhau, mỗi cung bị chắn bởi góc ở tâm</p>
        \[
          \frac{360^\circ}{n}.
        \]
        <p>Nối lần lượt các điểm chia ta được đa giác đều \(n\) cạnh (ví dụ ngũ giác đều: mỗi góc ở tâm \(72^\circ\)).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Chia bánh tròn đều \(n\) miếng, nối các vết cắt: được đa giác đều. Lục giác đều đặc biệt thân thiện: <strong>cạnh bằng bán kính</strong> — chỉ cần xoay compa quanh đường tròn là vẽ được. Các đa giác đều có khắp nơi: tổ ong (lục giác), ốc vít (lục giác), biển báo (tam giác, bát giác đều)…</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Lục giác đều có 6 cạnh bằng nhau và 6 góc bằng nhau. Chia đường tròn ngoại tiếp thành 6 cung bằng nhau, mỗi cung \(360^\circ : 6 = 60^\circ\).</p>
        <p>Tam giác nối tâm với một cạnh là tam giác đều, nên cạnh của lục giác đều bằng bán kính đường tròn ngoại tiếp. Bán kính 4 cm thì mỗi cạnh 4 cm, chu vi 24 cm.</p>
        <p>Mỗi góc trong bằng \(\dfrac{(6 - 2) \cdot 180^\circ}{6} = 120^\circ\). Sáu góc bằng nhau, đúng định nghĩa đa giác đều.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Coi hình thoi là đa giác đều — cạnh bằng nhau nhưng góc không bằng nhau.</li>
          <li>Coi hình chữ nhật là đa giác đều — góc bằng nhau nhưng cạnh không bằng nhau.</li>
          <li>Chia đường tròn thành \(n\) cung bằng \(\dfrac{180^\circ}{n}\) — phải là \(\dfrac{360^\circ}{n}\).</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Xây dựng ngũ giác đều nội tiếp đường tròn: góc ở tâm chắn mỗi cạnh bằng bao nhiêu độ?",
        answer: 72,
        hint: "360 chia 5.",
        explain: "360° : 5 = 72°.",
      },
      {
        type: "num",
        prompt: "Số đo mỗi góc trong của lục giác đều bằng bao nhiêu độ?",
        answer: 120,
        hint: "Tổng các góc trong đa giác n cạnh là (n − 2)·180°.",
        explain: "(6 − 2)·180° = 720°; mỗi góc 720° : 6 = 120°.",
      },
      {
        type: "mc",
        prompt: "Đa giác đều là đa giác lồi có:",
        choices: ["Các cạnh bằng nhau", "Các góc bằng nhau", "Các cạnh bằng nhau và các góc bằng nhau", "Các đỉnh nằm trên một đường tròn"],
        correct: 2,
        hint: "Cần cả hai điều kiện.",
        explain: "Đa giác đều là đa giác lồi có các cạnh bằng nhau và các góc bằng nhau.",
      },
    ],
  },

  // ============ CHƯƠNG X (Tập 2) ============
  {
    id: "c10-b31",
    num: 31,
    chapter: 10,
    title: "Hình trụ và hình nón",
    summary: "Đường sinh, chiều cao, bán kính đáy; diện tích xung quanh và thể tích hình trụ, hình nón.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Đèn lồng, nón lá, thùng sữa, ống khói — hình trụ và hình nón ở khắp nơi. Cần biết một thùng hình trụ chứa được bao nhiêu lít nước, hay làm một chiếc nón giấy tốn bao nhiêu tôn.</p>
      <div class="definition">
        <p><strong>Hình trụ</strong> tạo thành khi quay hình chữ nhật \(O'ABO\) một vòng quanh cạnh \(OO'\) cố định:</p>
        <ul>
          <li>Hai <em>đáy</em> là hai hình tròn bằng nhau \((O';\ O'A)\) và \((O;\ OB)\);</li>
          <li>Mỗi <em>đường sinh</em> là một vị trí của \(AB\) khi quay (hình trụ có vô số đường sinh bằng nhau, bằng \(OO'\));</li>
          <li>Chiều cao \(h = OO'\), bán kính đáy \(R = O'A = OB\).</li>
        </ul>
      </div>
      <div class="definition">
        <p><strong>Hình nón</strong> tạo thành khi quay tam giác vuông \(SOA\) (vuông tại \(O\)) một vòng quanh cạnh \(SO\):</p>
        <ul>
          <li>Đỉnh \(S\); đáy là hình tròn \((O;\ OA)\), \(R = OA\) là <em>bán kính đáy</em>;</li>
          <li>Mỗi <em>đường sinh</em> là một vị trí của \(SA\) khi quay; \(l = SA = SB\);</li>
          <li>Chiều cao \(h = SO\) (đường cao của hình nón).</li>
        </ul>
      </div>
      <div class="definition">
        <p><strong>Công thức (SGK):</strong></p>
        \[
          \text{Hình trụ: } S_{xq} = 2\pi Rh; \qquad V = \pi R^2 h.
        \]
        \[
          \text{Hình nón: } S_{xq} = \pi r l; \qquad V = \frac{1}{3}\pi r^2 h.
        \]
        <p>Trong đó \(R\) (hoặc \(r\)) là bán kính đáy, \(h\) là chiều cao, \(l\) là độ dài đường sinh của hình nón. Vì \(SOA\) vuông tại \(O\): \(l^2 = r^2 + h^2\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Cắt rời hình trụ dọc theo một đường sinh rồi trải phẳng: được hình chữ nhật rộng bằng chu vi đáy \(2\pi R\), cao \(h\) — nhân lại là \(S_{xq}\). Hình nón trải ra được hình quạt tròn bán kính \(l\): diện tích quạt \(\tfrac{l \cdot 2\pi r}{2} = \pi r l\). Thể tích nón bằng đúng một phần ba hình trụ cùng đáy cùng cao.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Thùng rác hình trụ \(R = 11\) cm, \(h = 30\) cm, sơn mặt ngoài và một đáy: \(S = S_{xq} + S_{đáy} = 660\pi + 121\pi = 781\pi\) cm²; thể tích \(V = 121\pi \cdot 30 = 3630\pi \approx 11\,404\) cm³.</p>
        <p>Hình nón \(l = 10\) cm, \(r = 6\) cm: \(S_{xq} = 60\pi\) cm²; \(h = \sqrt{10^2 - 6^2} = 8\) cm; \(V = \tfrac{1}{3}\pi \cdot 36 \cdot 8 = 96\pi\) cm³.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình trụ bán kính đáy \(R = 3\) cm, chiều cao \(h = 5\) cm. Diện tích xung quanh \(S_{xq} = 2\pi \cdot 3 \cdot 5 = 30\pi\) cm²: trải phẳng được hình chữ nhật dài bằng chu vi đáy \(6\pi\), rộng 5. Thể tích \(V = \pi \cdot 9 \cdot 5 = 45\pi\) cm³.</p>
        <p>Hình nón bán kính đáy \(r = 3\) cm, chiều cao 4 cm. Đường sinh \(l = \sqrt{3^2 + 4^2} = 5\) cm. Không lấy chiều cao 4 cm làm đường sinh. \(S_{xq} = \pi \cdot 3 \cdot 5 = 15\pi\) cm². Thể tích bằng một phần ba hình trụ cùng đáy cùng cao: \(V = \dfrac{1}{3}\pi \cdot 9 \cdot 4 = 12\pi\) cm³.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên hệ số \(\tfrac{1}{3}\) trong thể tích hình nón.</li>
          <li>Nhầm đường sinh \(l\) với chiều cao \(h\) — chỉ dùng \(l\) cho diện tích xung quanh nón; tìm \(h\) bằng Pythagore \(l^2 = r^2 + h^2\).</li>
          <li>Đề sơn "một đáy" hay "hai đáy" — đọc kĩ rồi cộng \(\pi R^2\) cho đúng số đáy.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Hình trụ có bán kính đáy \(R = 5\) cm, chiều cao \(h = 9\) cm. Diện tích xung quanh \(S_{xq} = k\pi\) (cm²). Giá trị \(k\) là bao nhiêu?`,
        answer: 90,
        hint: "Sxq = 2πRh.",
        explain: "Sxq = 2π·5·9 = 90π cm², nên k = 90.",
      },
      {
        type: "num",
        prompt: String.raw`Hình nón có bán kính đáy \(r = 6\) cm, chiều cao \(h = 8\) cm. Thể tích \(V = k\pi\) (cm³). Giá trị \(k\) là bao nhiêu?`,
        answer: 96,
        hint: "V = (1/3)πr²h.",
        explain: "V = (1/3)π·36·8 = 96π cm³, nên k = 96.",
      },
      {
        type: "mc",
        prompt: "Đường sinh của hình nón là:",
        choices: [
          "Đoạn nối đỉnh với một điểm bất kì trên đường tròn đáy",
          "Đoạn nối đỉnh với tâm đáy",
          "Đường tròn đáy",
          "Đoạn nối hai điểm trên đường tròn đáy",
        ],
        correct: 0,
        hint: "Hình nón sinh ra khi quay tam giác vuông — cạnh huyền quét thành gì?",
        explain: "Đường sinh là vị trí của cạnh huyền khi quay: đoạn nối đỉnh với một điểm bất kì trên đường tròn đáy.",
      },
    ],
  },
  {
    id: "c10-b32",
    num: 32,
    chapter: 10,
    title: "Hình cầu",
    summary: "Mặt cầu, hình cầu; mặt cắt là đường tròn; S = 4πR² và V = (4/3)πR³.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Quả bóng đá chuẩn FIFA có dạng hình cầu đường kính khoảng 22 cm. Khi bơm căng, quả bóng chứa được bao nhiêu không khí?</p>
      <div class="definition">
        <p>Khi quay <em>nửa đường tròn</em> quanh đường kính \(AB\) cố định của nó, ta được một <strong>mặt cầu</strong>. Khi quay <em>nửa hình tròn</em> quanh đường kính \(AB\), ta được một <strong>hình cầu</strong>. Tâm và bán kính của nửa đường tròn (nửa hình tròn) cũng là tâm và bán kính của mặt cầu (hình cầu).</p>
      </div>
      <div class="definition">
        <p>Nếu cắt một mặt cầu bởi một mặt phẳng thì phần chung (gọi là <em>mặt cắt</em>) là một hình tròn; cắt mặt cầu bán kính \(R\) bởi một mặt phẳng thì mặt cắt là một đường tròn:</p>
        <ul>
          <li>Mặt phẳng đi qua tâm: đường tròn có bán kính \(R\), gọi là <em>đường tròn lớn</em>;</li>
          <li>Mặt phẳng không đi qua tâm: đường tròn có bán kính nhỏ hơn \(R\).</li>
        </ul>
      </div>
      <div class="definition">
        <p><strong>Công thức (SGK)</strong> — diện tích mặt cầu và thể tích hình cầu bán kính \(R\):</p>
        \[
          S = 4\pi R^2; \qquad V = \frac{4}{3}\pi R^3.
        \]
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đường Xích đạo của Trái Đất là một đường tròn lớn: dài \(2\pi R \approx 40\,075\) km, suy ra đường kính Trái Đất \(\approx 12\,756\) km. Và đường kính quả bóng đá 22 cm cho \(R = 11\) cm — thay vào công thức là ra thể tích.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Hình cầu bán kính \(R = 10\) cm: \(S = 4\pi \cdot 100 = 400\pi\) cm²; \(V = \tfrac{4}{3}\pi \cdot 1000 = \tfrac{4000\pi}{3}\) cm³.</p>
        <p>Bể cá dạng một phần hình cầu đường kính 20 cm, đổ nước bằng \(\tfrac{2}{3}\) thể tích hình cầu: \(V_{nước} = \tfrac{2}{3} \cdot \tfrac{4}{3}\pi \cdot 10^3 \approx 932\) cm³.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình cầu bán kính \(R = 3\) cm. Diện tích mặt cầu \(S = 4\pi R^2 = 36\pi\) cm², bằng bốn lần diện tích hình tròn lớn. Không dùng \(\pi R^2\): đó chỉ là diện tích một mặt cắt qua tâm.</p>
        <p>Thể tích \(V = \dfrac{4}{3}\pi R^3 = \dfrac{4}{3}\pi \cdot 27 = 36\pi\) cm³.</p>
        <p>Cắt qua tâm, mặt cắt là đường tròn bán kính 3 cm. Cắt lệch khỏi tâm, mặt cắt vẫn là đường tròn, nhưng bán kính nhỏ hơn 3 cm.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm đường kính với bán kính: đề cho đường kính 20 cm thì \(R = 10\) cm.</li>
          <li>Dùng \(S = \pi R^2\) (diện tích hình tròn) thay vì \(S = 4\pi R^2\) (diện tích mặt cầu).</li>
          <li>Quên lập phương \(R^3\) khi tính thể tích.</li>
        </ul>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Mặt cầu bán kính \(R = 3\) cm có diện tích \(S = k\pi\) (cm²). Giá trị \(k\) là bao nhiêu?`,
        answer: 36,
        hint: "S = 4πR².",
        explain: "S = 4π·9 = 36π cm², nên k = 36.",
      },
      {
        type: "num",
        prompt: String.raw`Hình cầu bán kính \(R = 6\) cm có thể tích \(V = k\pi\) (cm³). Giá trị \(k\) là bao nhiêu?`,
        answer: 288,
        hint: "V = (4/3)πR³ với R³ = 216.",
        explain: "V = (4/3)π·216 = 288π cm³, nên k = 288.",
      },
      {
        type: "mc",
        prompt: "Cắt mặt cầu bởi một mặt phẳng, mặt cắt là:",
        choices: ["Một hình tròn", "Một elip", "Một hình cầu nhỏ hơn", "Một parabol"],
        correct: 0,
        hint: "Cắt quả cam, miếng cắt có dạng gì?",
        explain: "Mặt cắt của mặt cầu bởi một mặt phẳng là một hình tròn (đường tròn lớn nếu mặt phẳng đi qua tâm).",
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
    subtitle: "Tập 1 & Tập 2 · Kết nối tri thức với cuộc sống",
    blurb: "Chương I–X, Bài 1–32 của cả hai tập.",
    chapters: CHAPTERS,
    lessons: LESSONS,
  },
  courseStub(10, "THPT"),
  courseStub(11, "THPT"),
  courseStub(12, "THPT"),
];
