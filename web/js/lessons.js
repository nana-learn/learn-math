// Bài học theo mạch Toán 9 – Kết nối tri thức (Tập 1 & Tập 2), Chương I–X, Bài 1–32.
// Viết để học sinh hiểu vì sao, không chỉ chép định nghĩa. Mỗi bài: vì sao → cách nghĩ →
// ví dụ làm chậm → thêm ví dụ dễ rồi ví dụ có bẫy → luyện tập.
// Không dịch sách tiếng Anh có bản quyền. Ví dụ viết mới, cùng cách dạy nhiều ví dụ.
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
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>\(x^2 + y = 3\): \(x\) bậc hai, không viết được dạng \(ax + by = c\).</li>
          <li>\(xy = 6\): hai ẩn nhân với nhau, không phải tổng \(ax + by\).</li>
          <li>\(0x + 0y = 3\): cả \(a\) và \(b\) bằng 0, không còn ẩn bậc nhất; vế trái luôn là 0 mà \(0 = 3\) sai với mọi cặp.</li>
          <li>\(0x + y = -1\): <em>có</em> phải. \(y\) bị khoá bằng \(-1\), \(x\) tự do.</li>
          <li>Tìm được một nghiệm của \(ax + by = c\) và dừng, như thể chỉ có một. Một phương trình hai ẩn không hoạt động như \(2x + 5 = 11\).</li>
          <li>Viết \(x = 2\), \(y = 3\) rồi quên kết luận là cặp \((2;\ 3)\).</li>
          <li>Cặp đúng với phương trình thứ nhất đã gọi là nghiệm của hệ. Phải kiểm tra nốt phương trình thứ hai.</li>
        </ul>
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
            <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Sách bài tập mở đầu bằng kiểm tra một cặp có phải nghiệm không, rồi mới vẽ đường thẳng. Làm hai việc ấy trước khi nghĩ tới hệ. Một phương trình hai ẩn: vô số nghiệm, hình là một đường. Hệ: nghiệm là giao hai đường — một điểm, không điểm, hoặc trùng nhau cả đường.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(3x - y = 7\). Cặp \((2;\ -1)\): \(6 - (-1) = 7\), đúng. Cặp \((1;\ -2)\): \(3 - (-2) = 5 \neq 7\), sai. Chỉ cần một phép thế. Không giải cả hệ khi đề mới cho một phương trình.</p>
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
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Phương trình \(2x + y = 7\). Cặp \((3;\ 1)\): \(6 + 1 = 7\), đúng. Cặp \((1;\ 3)\): \(2 + 3 = 5 \neq 7\), sai. Nghiệm là cả cặp, không phải từng số đứng riêng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hệ \(\begin{cases} x + y = 5 \\ 2x + y = 8. \end{cases}\) Cặp \((2;\ 3)\): câu thứ nhất đúng, câu thứ hai \(4 + 3 = 7 \neq 8\). Không phải nghiệm của hệ. Cặp \((3;\ 2)\): \(3 + 2 = 5\) và \(6 + 2 = 8\). Đúng cả hai, mới là nghiệm của hệ.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(x + y = 6\) có nghiệm \((1;\ 5)\). Dừng ở đó thì sai. \((2;\ 4)\) và \((0;\ 6)\) cũng đúng. Một phương trình hai ẩn không có một nghiệm duy nhất.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Một điều kiện, vô số cặp. Hệ là hai điều kiện. Đúng một phương trình chưa đủ để là nghiệm của hệ.</p></div>

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
      { type: "mc", prompt: "Phương trình 2x + 3y = 6 có bao nhiêu nghiệm thực?", choices: ["Một","Hai","Vô số","Không có"], correct: 2, hint: "Một phương trình hai ẩn.", explain: "Vô số cặp, nằm trên một đường thẳng." },
      { type: "num", prompt: "x + y = 5. Khi x = 2, y bằng bao nhiêu?", answer: 3, hint: "Thế x = 2.", explain: "y = 3. Cặp (2; 3) là một nghiệm." },
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
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\begin{cases} x + y = 7 \\ x - y = 1. \end{cases}\) Cộng từng vế, \(y\) mất: \(2x = 8\), \(x = 4\). Thế vào câu thứ nhất: \(y = 3\). Cặp \((4;\ 3)\). Kiểm tra: \(4 + 3 = 7\), \(4 - 3 = 1\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\begin{cases} 2x + y = 5 \\ 3x + 2y = 8. \end{cases}\) Hệ số chưa đối nhau. Nhân câu thứ nhất với 2: \(4x + 2y = 10\). Trừ câu thứ hai: \(x = 2\). Thế lại: \(4 + y = 5\), \(y = 1\). Cặp \((2;\ 1)\). Kiểm tra: \(4 + 1 = 5\), \(6 + 2 = 8\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hệ \(y = 2x - 1\) và \(x + y = 5\). Thế \(y\) lại vào chính câu vừa rút được thì ra \(2x - 1 = 2x - 1\), không tìm được \(x\). Phải thế vào câu còn lại: \(x + (2x - 1) = 5\), \(x = 2\), \(y = 3\). Kiểm tra: \(2 + 3 = 5\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Thế vào phương trình còn lại. Nhân cả hai vế khi làm hệ số đối nhau. Kết thúc bằng cặp \((x;\ y)\) và một lần kiểm tra.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Thành thạo hai thuật: thế và cộng đại số. Sau khi ra cặp, thế lại cả hai phương trình. Nếu hai đường song song, phép trừ cho \(0 = số \neq 0\): vô nghiệm. Nếu trừ được \(0 = 0\): vô số nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(\begin{cases} x + 2y = 8 \\ 3x + 6y = 24. \end{cases}\) Nhân câu thứ nhất với 3 rồi trừ câu thứ hai: \(0 = 0\). Hai phương trình cùng một đường. Vô số nghiệm, ví dụ \((8;\ 0)\) và \((0;\ 4)\).</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Khi đề đã cho sẵn hệ, việc còn lại là giải. Năm 2024 cho hệ có \(\sqrt{3x+1}\) ở cả hai phương trình. Đặt ẩn phụ rồi cộng hoặc thế, như bài này. Năm 2026, sau khi lập xong, hệ hoa hồng và hoa cúc cũng giải bằng cộng đại số: \(x+y=25\), \(8x+6y=180\).</p>
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
      { type: "mc", prompt: "Hệ x + y = 1 và 2x + 2y = 3 có", choices: ["Một nghiệm","Vô số nghiệm","Vô nghiệm","Hai nghiệm"], correct: 2, hint: "Hai đường song song.", explain: "Nhân câu 1 với 2 được 2x+2y=2, mâu thuẫn với 3." },
      { type: "num", prompt: "Hệ x + y = 4, x − y = 2. Giá trị x bằng bao nhiêu?", answer: 3, hint: "Cộng hai phương trình.", explain: "2x = 6, x = 3, y = 1." },
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
      <div class="definition">
        <p><strong>Giải bài toán bằng cách lập hệ phương trình</strong> là quy trình bốn bước: đặt ẩn và ghi điều kiện, dùng hai mối liên hệ trong đề để viết hai phương trình thành hệ, giải hệ, rồi đối chiếu nghiệm với điều kiện đã ghi và trả lời.</p>
      </div>
<div class="idea">
        <p><strong>Ba câu hỏi trước khi viết.</strong></p>
        <p>1. Đề đang hỏi hai đại lượng nào? Đó là hai ẩn. Ghi luôn điều kiện: số tự nhiên, số dương, số quả nguyên, số lớn hơn số kia…</p>
        <p>2. Đề cho hai câu nào về hai đại lượng đó? Tìm chữ "tổng", "hiệu", "gấp", "còn lại", "tất cả", "mỗi". Mỗi câu là một phương trình.</p>
        <p>3. Sau khi giải, cặp tìm được có đúng điều kiện đã ghi không? Không đúng thì không được đưa vào đáp số, dù nó là nghiệm của hệ.</p>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao bài gà và thỏ cần hai phương trình, không viết một phương trình \(2x + 4y + x + y = 38\)? <em>— Gộp như vậy mất một điều kiện. \(3x + 5y = 38\) có vô số cặp; đề cho hai câu riêng, phải giữ hai phương trình.</em></p>
      </details>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hai số có tổng 15 và hiệu 3. Tìm số lớn.</p>
        <p>Gọi số lớn là \(x\), số nhỏ là \(y\). Điều kiện: \(x > y\), cả hai dương. Hai câu trong đề: \(x + y = 15\) và \(x - y = 3\).</p>
        <p>Cộng từng vế: \(2x = 18\), \(x = 9\), rồi \(y = 6\). Cả hai dương và \(9 > 6\), nhận. Số lớn là 9. Kiểm tra: tổng 15, hiệu 3.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai số có tổng 12, hiệu 4. Gọi số lớn \(x\), số nhỏ \(y\), điều kiện \(x > y > 0\). \(x + y = 12\), \(x - y = 4\). Cộng: \(2x = 16\), \(x = 8\), \(y = 4\). Đúng điều kiện. Kiểm tra: tổng 12, hiệu 4.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Chuồng có 12 con gà và thỏ, 34 chân. Gà 2 chân, thỏ 4 chân. Gọi \(x\) là số gà, \(y\) là số thỏ, nguyên không âm. \(x + y = 12\), \(2x + 4y = 34\). Thế \(y = 12 - x\): \(2x + 4(12 - x) = 34\), \(48 - 2x = 34\), \(x = 7\), \(y = 5\). Chân: \(14 + 20 = 34\). Nhận.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tìm hai số tự nhiên, tổng 10, hiệu 12. Hệ cho \(x = 11\), \(y = -1\). Đó là nghiệm của hệ, nhưng \(-1\) không phải số tự nhiên. Bài toán vô nghiệm trong điều kiện đã đặt. Không sửa thành 1.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hai câu trong đề, hai phương trình. Ghi điều kiện lúc gọi ẩn. Nghiệm của hệ chưa chắc là đáp số.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Gọi ẩn, ghi điều kiện (dương, nguyên, nhỏ hơn tổng). Một câu chuyện — một phương trình. Hai câu chuyện — hai phương trình. Sau khi giải, loại nghiệm âm hoặc không nguyên nếu đề đòi vậy.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Trộn 40 ml nước cam. Có chai 10% đường và chai 25% đường, muốn ra 16%. Gọi \(x\) ml chai 10%, \(y\) ml chai 25%, \(x>0\), \(y>0\). \(x+y=40\), \(0{,}1x+0{,}25y=0{,}16\cdot 40\). Giải được \(x=24\), \(y=16\). Kiểm tra đường: \(2{,}4+4=6{,}4\) ml trên 40 ml, đúng 16%.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu III.2.</strong> Năm 2026: mua 25 bông hoa hồng và cúc hết 180 nghìn đồng. Hồng 8 nghìn một bông, cúc 6 nghìn. Hỏi mỗi loại bao nhiêu. Hai câu trong đề là hai phương trình. Gọi \(x, y\), ghi điều kiện nguyên dương, giải, rồi kiểm tra.</p>
        <p>Năm 2025 cùng dạng: ba lô và máy tính niêm yết tổng 885 nghìn đồng, giảm 20% và 25%, trả 682 nghìn đồng. Vẫn là một hệ hai ẩn, không phải một phương trình.</p>
      </div>
      
      
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
      { type: "num", prompt: "Tổng hai số 20, hiệu 6. Số lớn bằng bao nhiêu?", answer: 13, hint: "Cộng hai phương trình.", explain: "2x = 26, x = 13, y = 7." },
      { type: "mc", prompt: "Giải ra x = −2 cho số học sinh. Việc đúng là", choices: ["Nhận −2","Loại vì điều kiện x > 0","Đổi thành 2","Bỏ điều kiện"], correct: 1, hint: "Đối chiếu điều kiện đã ghi.", explain: "Số học sinh không âm." },
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
      <div class="definition">
        <p><strong>Phương trình quy về phương trình bậc nhất một ẩn</strong> là phương trình chưa ở dạng \(ax + b = 0\) nhưng có thể đưa về dạng đó bằng biến đổi. Hai dạng hay gặp: phương trình tích \((ax+b)(cx+d)=0\) (bằng 0 khi một nhân tử bằng 0) và phương trình chứa ẩn ở mẫu, với <strong>điều kiện xác định</strong> là mọi mẫu đều khác 0.</p>
      </div>
<div class="idea">
        <p><strong>Vì sao tích bằng 0 thì một thừa số bằng 0?</strong> Nếu cả hai số đều khác 0, tích của chúng khác 0. Muốn tích bằng 0, ít nhất một thừa số phải bằng 0. Phương trình \((ax + b)(cx + d) = 0\) vì vậy tách thành hai phương trình bậc nhất: \(ax + b = 0\) hoặc \(cx + d = 0\). Lấy cả hai nghiệm, không bỏ nghiệm âm.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Khử mẫu xong quên luôn ĐKXĐ — lấy \(x = 2\) làm nghiệm là sai (chính là Ví dụ 4).</li>
          <li>Ghi ĐKXĐ dạng "x ≠ −1 hoặc x ≠ 2" — phải là <em>và</em>: \(x \neq -1\) và \(x \neq 2\).</li>
          <li>Chuyển vế quên đổi dấu: \(x^2 - x = -2x + 2\) phải thành \(x^2 - x + 2x - 2 = 0\).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao phải loại \(x=2\) khi giải phương trình có ẩn ở mẫu, dù phép tính ra số 2? <em>— Vì \(x=2\) làm mẫu bằng 0, phương trình gốc mất nghĩa. Nghiệm giả phải bị loại; luôn đối chiếu với điều kiện xác định sau khi khử mẫu.</em></p>
        <p>Điều kiện xác định viết dạng "\(x \neq -1\) hoặc \(x \neq 2\)" có đúng không? <em>— Không. Phải là "và": \(x \neq -1\) và \(x \neq 2\) cùng lúc. Viết "hoặc" gần như luôn đúng nên không chặn được giá trị nào.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Giải \((x - 4)(2x + 6) = 0\). Tích bằng 0 khi ít nhất một nhân tử bằng 0.</p>
        <p>Trường hợp 1: \(x - 4 = 0\), nên \(x = 4\). Trường hợp 2: \(2x + 6 = 0\), nên \(x = -3\). Không bỏ nghiệm âm.</p>
        <p>Kiểm tra. \(x = 4\): nhân tử thứ nhất bằng 0, tích bằng 0. \(x = -3\): nhân tử thứ hai bằng 0, tích bằng 0.</p>
        <p>Một phương trình có mẫu, làm đủ bốn bước: \(\dfrac{3}{x - 1} = 2\). Điều kiện xác định: \(x \neq 1\). Nhân hai vế với \(x - 1\): \(3 = 2(x - 1)\), \(x = \dfrac{5}{2}\). Giá trị này khác 1, nên nhận. Kiểm tra: \(\dfrac{3}{\frac{5}{2} - 1} = \dfrac{3}{\frac{3}{2}} = 2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((x - 2)(x + 5) = 0\). Một thừa số bằng 0: \(x = 2\) hoặc \(x = -5\). Kiểm tra: cả hai làm tích bằng 0. Không bỏ nghiệm âm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\dfrac{2}{x - 1} = 4\). Điều kiện \(x \neq 1\). Nhân hai vế với \(x - 1\): \(2 = 4(x - 1)\), \(x = \dfrac{3}{2}\). \(\dfrac{3}{2} \neq 1\), nhận. Kiểm tra: \(\dfrac{2}{0{,}5} = 4\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{5}{x - 2} = 1\). Điều kiện \(x \neq 2\). Nhân mẫu: \(5 = x - 2\), \(x = 7\). Kiểm tra \(\dfrac{5}{5} = 1\). Nếu phép tính ra \(x = 2\), phải loại: mẫu bằng 0, phương trình gốc không có nghĩa.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tích bằng 0 thì xét từng thừa số, kể cả nghiệm âm. Có mẫu thì viết điều kiện trước, giải xong loại giá trị làm mẫu bằng 0.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Tích bằng 0 thì từng thừa số bằng 0. Phương trình có mẫu: điều kiện trước, khử mẫu, đối chiếu sau. Sai lầm hay gặp: nhận nghiệm làm mẫu bằng 0.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \((x-4)^2 - 9x^2 = 0\). Hiệu hai bình phương: \((x-4-3x)(x-4+3x)=0\), \((-2x-4)(4x-4)=0\). \(x=-2\) hoặc \(x=1\). Kiểm tra: cả hai đều không làm biểu thức gốc mất nghĩa.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, 2024.</strong> Hệ</p>
        \[
          \begin{cases} \sqrt{3x+1}+2y=4 \\ 3\sqrt{3x+1}-y=5. \end{cases}
        \]
        <p>Đặt \(t=\sqrt{3x+1}\), \(t\geq 0\). Hệ trở thành bậc nhất theo \(t\) và \(y\). Giải ra \(t\), rồi bình phương để tìm \(x\). Đó là quy về phương trình bậc nhất, không giải căn trực tiếp.</p>
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
      { type: "num", prompt: "(x − 3)(x + 1) = 0. Tổng hai nghiệm bằng bao nhiêu?", answer: 2, hint: "x = 3 hoặc x = −1.", explain: "3 + (−1) = 2." },
      { type: "num", prompt: "5/(x − 4) = 1. Điều kiện x ≠ 4. Nghiệm x bằng bao nhiêu?", answer: 9, hint: "5 = x − 4.", explain: "x = 9, khác 4, nhận." },
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
      
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Trục số: -2 nhỏ hơn 5; nhân cả hai vế với -1 thì trái phải đảo, thành 2 lớn hơn -5">
          <line x1="60" y1="60" x2="320" y2="60" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="60" x2="320" y2="60" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="190" cy="60" r="3" fill="#DDDDDD"/>
          <text x="184" y="46" font-size="12">0</text>
          <circle cx="146" cy="60" r="3.5" fill="#58C4DD"/>
          <text x="132" y="48" font-size="12" fill="#58C4DD">-2</text>
          <circle cx="300" cy="60" r="3.5" fill="#83C167"/>
          <text x="304" y="48" font-size="12" fill="#83C167">5</text>
          <path d="M 146 60 L 300 60" stroke="#58C4DD" stroke-width="2"/>
          <polygon points="300,54 312,60 300,66" fill="#58C4DD"/>
          <text x="214" y="52" font-size="12" fill="#58C4DD">-2 &lt; 5</text>
          <line x1="60" y1="150" x2="320" y2="150" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="190" cy="150" r="3" fill="#DDDDDD"/>
          <text x="184" y="136" font-size="12">0</text>
          <circle cx="80" cy="150" r="3.5" fill="#83C167"/>
          <text x="66" y="138" font-size="12" fill="#83C167">-5</text>
          <circle cx="234" cy="150" r="3.5" fill="#58C4DD"/>
          <text x="238" y="138" font-size="12" fill="#58C4DD">2</text>
          <path d="M 80 150 L 234 150" stroke="#83C167" stroke-width="2"/>
          <polygon points="234,144 246,150 234,156" fill="#83C167"/>
          <text x="152" y="142" font-size="12" fill="#83C167">-5 &lt; 2</text>
          <text x="180" y="184" font-size="12" fill="#FC6255" text-anchor="middle">Nhân với -1: soi gương qua 0, trái thành phải</text>
        </svg>
        <figcaption>Từ -2 &lt; 5, nhân cả hai vế với -1 được 2 > -5. Số âm làm đảo chiều vì mọi điểm soi gương qua 0.</figcaption>
      </figure>
<div class="idea">
        <p><strong>Nhìn trên trục số.</strong> Số lớn hơn đứng bên phải. \(-2 < 5\) vì \(-2\) ở bên trái 5. \(a \geq b\) nghĩa là \(a\) trùng \(b\) hoặc đứng bên phải \(b\). \(a \leq b\) là trùng hoặc đứng bên trái.</p>
        <p>Hai bất đẳng thức <em>cùng chiều</em> khi dấu cùng hướng, như \(1 < 2\) và \(-3 < -2\). <em>Ngược chiều</em> khi một dấu mở sang phải, một dấu mở sang trái, như \(1 < 2\) và \(-2 > -3\). Hai câu ấy nói cùng một sự thật, chỉ viết ngược nhau.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhân hai vế với số âm mà quên đổi chiều: từ \(a < b\) kết luận \(-3a < -3b\) là <strong>sai</strong>.</li>
          <li>Cộng <em>hai số khác nhau</em> vào hai vế rồi bảo "giữ nguyên chiều" — chỉ đúng khi cộng <em>cùng một</em> số.</li>
          <li>Với \(a < b\), kết luận \(-a < -b\): sai, vì \(-1\) là số âm (đúng là \(-a > -b\)).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Từ \(a < b\), bạn viết \(-3a < -3b\). Đúng hay sai? <em>— Sai. Nhân cả hai vế với số âm \(-3\) phải đổi chiều: \(-3a > -3b\).</em></p>
        <p>Cộng 3 vào vế trái và 5 vào vế phải của \(a < b\), kết luận được chiều không? <em>— Không. Chỉ được cộng cùng một số vào hai vế thì chiều mới giữ nguyên.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Bắt đầu từ \(-3 < 1\). Trên trục số, \(-3\) đứng bên trái \(1\).</p>
        <p>Cộng 4 vào cả hai vế: \(1 < 5\). Chiều giữ, vì cả hai người đi cùng một đoạn.</p>
        <p>Nhân hai vế với 2: \(-6 < 2\). Chiều vẫn giữ, vì 2 dương.</p>
        <p>Nhân hai vế của \(-3 < 1\) với \(-2\): \(6 > -2\). Chiều đổi, vì nhân số âm là soi gương qua 0. Sau phép soi, 6 đứng bên phải \(-2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(-4 < 1\). Cộng 6 vào hai vế: \(2 < 7\). Nhân với 3: \(-12 < 3\). Chiều giữ, vì 6 và 3 không làm đảo trái phải.</p>
        <p>Nhân bất đẳng thức gốc với \(-1\): \(4 > -1\). Chiều đổi. Thử trên số: \(-4\) đứng bên trái 1; sau khi nhân \(-1\), 4 đứng bên phải \(-1\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Biết \(a < b\). Bạn An viết \(-2a < -2b\). Sai. Nhân với \(-2\) phải đổi chiều: \(-2a > -2b\).</p>
        <p>Thử \(a = 1\), \(b = 4\). \(-2 \cdot 1 = -2\), \(-2 \cdot 4 = -8\). \(-2\) đứng bên phải \(-8\), nên \(-2 > -8\), không phải nhỏ hơn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(-3 < 2\) và \(-4 < 1\). Nhân từng vế với nhau được \(12 < 2\), sai. Không được nhân hai bất đẳng thức khi chưa biết dấu. Cộng cùng một số, hoặc nhân cả hai vế với cùng một số, mới là quy tắc của bài này.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Lớn hơn là đứng bên phải. Cộng cùng một số thì giữ chiều. Nhân số âm thì đổi chiều. Không nhân hai bất đẳng thức với nhau cho xong.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Cộng cùng một số thì chiều không đổi. Nhân số dương: giữ chiều. Nhân số âm: đổi chiều. Không nhân hai bất đẳng thức với nhau khi chưa biết dấu.</p>
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
      { type: "mc", prompt: "Từ a < b, nhân cả hai vế với −1 thì", choices: ["a > b vẫn sai","−a > −b","−a < −b","Không đổi chiều"], correct: 1, hint: "Nhân số âm thì đổi chiều.", explain: "−a > −b." },
      { type: "mc", prompt: "3 < 5 và 1 < 4. Có được viết 3·1 < 5·4 không?", choices: ["Có, vì cả hai dương","Không bao giờ","Chỉ khi trừ","Chỉ khi a = 0"], correct: 0, hint: "Cả bốn số dương thì nhân được.", explain: "3 < 20 đúng. Không nhân khi có số âm chưa rõ." },
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
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Chia cho số âm mà quên đảo chiều — lỗi phổ biến nhất của cả chương.</li>
          <li>Kết luận bài toán thực tế bằng phân số: "mua \(\dfrac{82}{7}\) quyển" vô nghĩa — phải làm tròn <em>xuống</em> theo ngữ cảnh (tối đa 11 quyển).</li>
          <li>Quên rằng \(a \neq 0\): \(0x + 3 > 0\) không phải bất phương trình bậc nhất một ẩn.</li>
        </ul>
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
          <circle cx="190" cy="85" r="5" fill="#FFFFFF" stroke="#FFFF00" stroke-width="1.5"/>
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
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Giải \(2x - 6 < 0\). Hệ số của \(x\) dương, chiều giữ: \(2x < 6\), \(x < 3\). Thử \(x = 0\): \(-6 < 0\), đúng. \(x = 3\): bằng 0, không thỏa dấu \(<\). \(x = 4\): \(2 > 0\), sai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Giải \(-3x + 6 \geq 0\). \(-3x \geq -6\). Chia cho \(-3\), đổi chiều: \(x \leq 2\). Thử \(x = 2\): bằng 0, lấy vì \(\geq\). \(x = 0\): \(6 \geq 0\), đúng. \(x = 3\): \(-3 \geq 0\) sai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(-2x > 6\). Chia cho \(-2\) mà quên đổi chiều sẽ viết \(x > -3\). Sai. Đúng là \(x < -3\). Thử \(x = 0\): \(0 > 6\) sai. Thử \(x = -4\): \(8 > 6\) đúng.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hệ số dương thì giữ chiều. Hệ số âm thì đổi chiều. Thử một điểm trong tập nghiệm và một điểm ngoài.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Đưa về \(ax+b<0\). Nếu \(a>0\) thì \(x < -b/a\). Nếu \(a<0\) thì đổi chiều. Thử một điểm trong tập nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(5-2x \geq 1\). \(-2x \geq -4\). Chia \(-2\), đổi chiều: \(x \leq 2\). Thử \(x=0\): \(5\geq 1\) đúng. Thử \(x=3\): \(5-6\geq 1\) sai.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Sau khi rút gọn căn, ý cuối câu II là một bất phương trình. Năm 2025: tìm số nguyên dương \(x\) lớn nhất để \(\dfrac{A}{B}<\dfrac{1}{2}\). Năm 2024: tìm mọi \(x\) để \(A-B<0\). Phải xét dấu mẫu trước khi nhân hai vế. Kết quả còn phải nằm trong điều kiện của căn.</p>
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
      { type: "mc", prompt: "−3x > 9. Tập nghiệm là", choices: ["x > −3","x < −3","x > 3","x < 3"], correct: 1, hint: "Chia −3, đổi chiều.", explain: "x < −3." },
      { type: "num", prompt: "x + 5 ≤ 2. Số nguyên lớn nhất thỏa là bao nhiêu?", answer: -3, hint: "x ≤ −3.", explain: "−3." },
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
      
      <figure class="figure" data-animation="c3-b7-square">
        <svg viewBox="0 0 360 210" role="img" aria-label="Hình vuông diện tích 49 mét vuông, cạnh 7 mét" id="fig-c3-b7">
          <rect x="110" y="30" width="140" height="140" fill="#58C4DD" fill-opacity="0.12" stroke="#58C4DD" stroke-width="2" stroke-dasharray="480" stroke-dashoffset="480"/>
          <line x1="110" y1="30" x2="250" y2="30" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="140" stroke-dashoffset="140" opacity="0"/>
          <text x="180" y="20" font-size="12" fill="#58C4DD" text-anchor="middle" opacity="0">7 m</text>
          <line x1="250" y1="30" x2="250" y2="170" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="140" stroke-dashoffset="140" opacity="0"/>
          <text x="258" y="104" font-size="12" fill="#58C4DD" opacity="0">7 m</text>
          <line x1="110" y1="170" x2="250" y2="170" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="140" stroke-dashoffset="140" opacity="0"/>
          <text x="180" y="188" font-size="12" fill="#58C4DD" text-anchor="middle" opacity="0">7 m</text>
          <text x="180" y="104" font-size="13" fill="#FC6255" text-anchor="middle" opacity="0">49 m²</text>
          <text x="180" y="124" font-size="12" fill="#FC6255" text-anchor="middle" opacity="0">7 × 7 = 49</text>
        </svg>
        <figcaption>Hình vuông diện tích 49 m² có cạnh √49 = 7 m. Căn bậc hai của một số không âm a là số x sao cho x² = a.</figcaption>
      </figure>
<div class="definition">
        <p><strong>Căn bậc hai</strong> của số không âm \(a\) là số \(x\) sao cho \(x^2 = a\).</p>
      </div>
      <div class="idea">
        <p><strong>Vì sao số âm không có căn bậc hai?</strong> Bình phương của mọi số thực là 0 hoặc dương. Không có số nào bình phương ra \(-4\). Số 0 có đúng một căn, là 0. Số dương \(a\) có đúng hai căn, đối nhau: một dương và một âm, vì cả hai bình phương cho cùng một kết quả.</p>
        <p>Kí hiệu \(\sqrt{a}\) chỉ dành cho căn không âm, gọi là căn bậc hai số học. \(\sqrt{81} = 9\), không bao giờ là \(-9\). Muốn nói căn âm phải tự viết dấu trừ: \(-\sqrt{81} = -9\). Đề hỏi "các căn bậc hai" thì trả lời cả hai. Đề hỏi \(\sqrt{a}\) thì chỉ trả lời số không âm.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>\(\sqrt{a^2} = a\) cho mọi \(a\) — sai khi \(a < 0\); đúng phải là \(\sqrt{a^2} = |a|\).</li>
          <li>Tìm căn bậc hai của 121 mà chỉ trả lời 11 — đề hỏi "các căn" thì là 11 <em>và</em> \(-11\).</li>
          <li>Chưa xét điều kiện xác định: \(\sqrt{2x-1}\) chỉ "sống" khi \(2x - 1 \geq 0\).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao \(\sqrt{(-3)^2} = 3\), không phải \(-3\)? <em>— Dấu căn chỉ trả về số không âm. Bình phương đã xoá dấu, nên \(\sqrt{a^2} = |a|\), không phải \(a\).</em></p>
        <p>Đề hỏi "các căn bậc hai của 121" thì trả lời gì? <em>— 11 và \(-11\). Còn \(\sqrt{121}\) chỉ bằng 11, vì kí hiệu \(\sqrt{\ }\) chỉ lấy căn không âm.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình vuông diện tích 64 m² có cạnh \(\sqrt{64} = 8\) m. Không lấy \(-8\): độ dài không âm, và kí hiệu \(\sqrt{\ }\) chỉ lấy căn không âm.</p>
        <p>\(\sqrt{(-5)^2} = |-5| = 5\). Bình phương đã xoá dấu; căn số học không trả dấu âm lại. Viết \(\sqrt{(-5)^2} = -5\) là sai.</p>
        <p>\(\sqrt{3x - 6}\) chỉ có nghĩa khi \(3x - 6 \geq 0\), tức \(x \geq 2\). Với \(x = 2\), căn bằng 0. Với \(x = 1\), dưới căn là \(-3\), không có căn bậc hai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Diện tích hình vuông 49 m². Cạnh là \(\sqrt{49} = 7\) m, không phải \(-7\). Dấu căn chỉ trả số không âm. Hai căn bậc hai của 49 là 7 và \(-7\), nhưng \(\sqrt{49}\) chỉ là 7.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\sqrt{(-8)^2} = |-8| = 8\). Nếu viết bằng \(-8\) thì kết quả căn âm, sai. \(\sqrt{x + 5}\) chỉ có nghĩa khi \(x + 5 \geq 0\), tức \(x \geq -5\). Với \(x = -5\), căn bằng 0. Với \(x = -6\), dưới căn là \(-1\), không có căn bậc hai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\sqrt{16 + 9} = 5\), không phải \(\sqrt{16} + \sqrt{9} = 7\). \(\sqrt{(-6)^2} = 6\), không phải \(-6\). Căn không đi xuyên dấu cộng, và dấu căn không trả số âm.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> \(\sqrt{\ }\) chỉ cho số không âm. \(\sqrt{a^2} = |a|\). Dưới căn phải không âm thì biểu thức mới có nghĩa.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> \(\sqrt{A}\) có nghĩa khi \(A\geq 0\). \(\sqrt{a^2}=|a|\). Không viết \(\sqrt{a}+\sqrt{b}=\sqrt{a+b}\).</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu II.1.</strong> Đề cho biểu thức chứa căn và bảo tính khi \(x\) là một số cụ thể. Phải kiểm tra điều kiện trước. Năm 2026, \(A = \dfrac{\sqrt{x}-4}{\sqrt{x}}\), \(x>0\), \(x\neq 9\). Với \(x=25\), \(\sqrt{25}=5\), \(A=\dfrac{1}{5}\). Năm 2025 tính \(A\) tại \(x=9\). Năm 2024 tính \(A\) tại \(x=16\), với mẫu \(\sqrt{x}-3\): \(x=9\) làm mẫu bằng 0, không được thế.</p>
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
      { type: "num", prompt: "√49 bằng bao nhiêu?", answer: 7, hint: "Không âm.", explain: "7." },
      { type: "mc", prompt: "√(a²) bằng", choices: ["a","−a","|a|","a²"], correct: 2, hint: "Căn không âm.", explain: "|a|." },
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
      <div class="definition">
        <p>Với \(a \geq 0\) và \(b \geq 0\): \(\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}\). Với \(a \geq 0\) và \(b > 0\): \(\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}\). Căn chỉ tách được qua phép nhân và phép chia, không qua phép cộng.</p>
      </div>
<div class="idea">
        <p><strong>Vì sao được tách tích?</strong> Nếu \(A \geq 0\) và \(B \geq 0\) thì \(\sqrt{A} \cdot \sqrt{B}\) không âm, và bình phương của nó là \(A \cdot B\). Số không âm mà bình phương bằng \(AB\) chính là \(\sqrt{AB}\). Vậy \(\sqrt{AB} = \sqrt{A} \cdot \sqrt{B}\).</p>
        <p>Cộng thì không. \((\sqrt{9} + \sqrt{16})^2 = 9 + 16 + 2 \cdot 3 \cdot 4 = 49\), không phải 25. Nên \(\sqrt{9 + 16} = 5\), trong khi \(\sqrt{9} + \sqrt{16} = 7\). Căn không đi xuyên qua dấu cộng.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Phân phối căn qua phép <strong>cộng</strong>: \(\sqrt{A + B} \neq \sqrt{A} + \sqrt{B}\). Bằng chứng: \(\sqrt{9 + 16} = 5\) nhưng \(\sqrt{9} + \sqrt{16} = 7\). Căn chỉ chơi thân với nhân và chia!</li>
          <li>Áp dụng \(\sqrt{AB} = \sqrt{A}\sqrt{B}\) khi \(A < 0\) — số âm không có căn bậc hai.</li>
          <li>Quên \(|a|\): \(\sqrt{a^2b} = a\sqrt{b}\) chỉ đúng khi \(a \geq 0\).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\sqrt{9 + 16}\) có bằng \(\sqrt{9} + \sqrt{16}\) không? <em>— Không. \(\sqrt{9+16}=5\), còn \(\sqrt{9}+\sqrt{16}=7\). Căn chỉ tách được qua phép nhân và phép chia.</em></p>
        <p>Với \(a = -3\), \(\sqrt{a^2 b}\) bằng gì? <em>— Bằng \(|a|\sqrt{b}\), không phải \(a\sqrt{b}\). Vì \(a\) âm, kéo ra ngoài căn phải lấy giá trị tuyệt đối.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(\sqrt{16 \cdot 9} = \sqrt{16} \cdot \sqrt{9} = 4 \cdot 3 = 12\). Căn tách được qua phép nhân. Không được viết \(\sqrt{16} + \sqrt{9} = 7\): căn không tách qua phép cộng, và \(\sqrt{16 + 9} = 5\), không phải 7.</p>
        <p>\(\sqrt{50} : \sqrt{2} = \sqrt{50 : 2} = \sqrt{25} = 5\). Cùng kết quả nếu rút gọn trước: \(\sqrt{50} = 5\sqrt{2}\), rồi \(\dfrac{5\sqrt{2}}{\sqrt{2}} = 5\).</p>
        <p>Với \(a = -3\) và \(b = 4\): \(\sqrt{a^2 b} = |a|\sqrt{b} = 3 \cdot 2 = 6\). Viết \(a\sqrt{b} = -6\) là sai, vì \(a\) âm không được kéo ra ngoài căn mà quên giá trị tuyệt đối.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\sqrt{4 \cdot 9} = \sqrt{4} \cdot \sqrt{9} = 2 \cdot 3 = 6\). \(\sqrt{36} : \sqrt{4} = \sqrt{36 : 4} = \sqrt{9} = 3\). Căn tách được qua nhân và chia. \(\sqrt{4 + 9} = \sqrt{13}\), không phải \(2 + 3\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\sqrt{48} : \sqrt{3} = \sqrt{16} = 4\). Với \(a = -2\): \(\sqrt{a^2 \cdot 12} = |a|\sqrt{12} = 2 \cdot 2\sqrt{3} = 4\sqrt{3}\). Viết \(a\sqrt{12} = -4\sqrt{3}\) là sai, vì \(a\) âm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \((-4) \cdot (-9) = 36\), nên \(\sqrt{36} = 6\). Không được viết \(\sqrt{-4} \cdot \sqrt{-9}\): từng số âm không có căn bậc hai. Tách căn chỉ khi mỗi thừa số không âm.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tách được qua nhân và chia, khi từng phần không âm. Không tách qua dấu cộng. Kéo số âm ra ngoài căn thì phải lấy giá trị tuyệt đối.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> \(\sqrt{AB}=\sqrt{A}\sqrt{B}\) khi \(A,B\geq 0\). Gộp tích dưới một căn rồi rút chính phương. \(\sqrt{7}\cdot\sqrt{28}=\sqrt{196}=14\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(\sqrt{8}\cdot\sqrt{18}=\sqrt{144}=12\). Hoặc \(2\sqrt{2}\cdot 3\sqrt{2}=6\cdot 2=12\). Hai đường một đáp số.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Khi rút gọn câu II, đề tách tích và thương dưới căn. Năm 2024, mẫu \(x-3\sqrt{x}=\sqrt{x}(\sqrt{x}-3)\). Đó là đưa thừa số \(\sqrt{x}\) ra ngoài, đúng phép của bài này. Không tách căn qua dấu cộng.</p>
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
      { type: "num", prompt: "√4 · √9 bằng bao nhiêu?", answer: 6, hint: "2 · 3 hoặc √36.", explain: "6." },
      { type: "num", prompt: "√50 : √2 bằng bao nhiêu?", answer: 5, hint: "√25.", explain: "5." },
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
      <div class="definition">
        <p><strong>Đưa thừa số ra ngoài dấu căn</strong>: với \(b \geq 0\), \(\sqrt{a^2 b} = |a|\sqrt{b}\). <strong>Đưa thừa số vào trong</strong>: với \(a, b \geq 0\), \(a\sqrt{b} = \sqrt{a^2 b}\), còn nếu \(a < 0\) thì dấu trừ đứng ngoài căn. <strong>Khử mẫu dưới căn</strong>: nhân tử và mẫu với số để mẫu thành số chính phương.</p>
      </div>
<div class="idea">
        <p><strong>Đưa ra ngoài.</strong> Tìm thừa số chính phương lớn nhất dưới căn: 4, 9, 16, 25, … Phần ấy "xuống" được. Với \(b \geq 0\),</p>
        \[
          \sqrt{a^2 b} = |a|\sqrt{b}.
        \]
        <p>Có \(|a|\) vì kết quả của dấu căn không âm. \(\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}\). \(3\sqrt{27} = 3\sqrt{9 \cdot 3} = 9\sqrt{3}\). \(5\sqrt{48} = 5\sqrt{16 \cdot 3} = 20\sqrt{3}\).</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Đưa số âm vào trong căn không đổi dấu: \(-2\sqrt{5} = \sqrt{(-2)^2 \cdot 5} = 2\sqrt{5}\) là <strong>sai</strong> — phải là \(-\sqrt{20}\).</li>
          <li>Cộng tùy tiện các căn không đồng dạng: \(\sqrt{2} + \sqrt{3} \neq \sqrt{5}\) (kiểm tra: \(\sqrt{2} + \sqrt{3} \approx 3{,}15\), còn \(\sqrt{5} \approx 2{,}24\)).</li>
          <li>Tách sai thừa số chính phương: \(\sqrt{50} = 5\sqrt{2}\) chứ không phải \(\sqrt{50} = 2\sqrt{25}\) (25 xuống được, 2 mới ở lại).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Viết \(-2\sqrt{5} = \sqrt{(-2)^2 \cdot 5}\) có đúng không? <em>— Không. Kết quả khai căn không âm, nên phải là \(-\sqrt{20}\). Dấu trừ đứng ngoài căn.</em></p>
        <p>\(\sqrt{50}\) rút gọn là bao nhiêu? <em>— \(5\sqrt{2}\). 25 xuống được thành 5, 2 ở lại dưới căn — không phải \(2\sqrt{25}\).</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Rút gọn \(\sqrt{72}\). Tìm thừa số chính phương: \(72 = 36 \cdot 2\), nên \(\sqrt{72} = 6\sqrt{2}\).</p>
        <p>Khử mẫu: \(\sqrt{\dfrac{9}{2}} = \sqrt{\dfrac{18}{4}} = \dfrac{\sqrt{18}}{2} = \dfrac{3\sqrt{2}}{2}\). Mẫu đã ra khỏi dấu căn.</p>
        <p>Đưa số âm vào trong căn phải giữ dấu trừ bên ngoài: \(-2\sqrt{3} = -\sqrt{12}\). Không được viết \(-2\sqrt{3} = \sqrt{12}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt{2}\). \(\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}\). Tìm thừa số chính phương lớn nhất rồi đưa ra ngoài.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\sqrt{\dfrac{8}{9}} = \dfrac{\sqrt{8}}{3} = \dfrac{2\sqrt{2}}{3}\). Mẫu đã ra khỏi căn. Đưa số âm vào trong: \(-3\sqrt{2} = -\sqrt{18}\), không phải \(\sqrt{18}\). Dấu trừ đứng ngoài.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}\). Không phải \(\sqrt{39}\). \(\sqrt{50} = 5\sqrt{2}\), không phải \(2\sqrt{25}\): 25 xuống được, 2 ở lại dưới căn.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đưa thừa số chính phương ra ngoài. Chỉ cộng các căn cùng loại. Số âm đi vào căn thì dấu trừ đứng ngoài.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Rút \(\sqrt{48}=4\sqrt{3}\). Cộng chỉ khi cùng loại: \(2\sqrt{3}+5\sqrt{3}=7\sqrt{3}\). Không cộng \(\sqrt{3}+\sqrt{12}\) trước khi rút \(\sqrt{12}\).</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu II.2.</strong> Năm 2026, với \(x>0\), \(x\neq 9\),</p>
        \[
          B = \dfrac{4}{\sqrt{x}-3} + \dfrac{x-7\sqrt{x}-12}{x-9},
        \]
        <p>chứng minh \(B = \dfrac{\sqrt{x}}{\sqrt{x}+3}\). Đặt \(t=\sqrt{x}\), mẫu \(x-9=(t-3)(t+3)\), rồi khử thừa số chung. Năm 2025 và 2024 cùng dạng: rút gọn một biểu thức có căn ở mẫu, rồi mới dùng kết quả cho ý bất phương trình.</p>
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
      { type: "text", prompt: "√18 rút gọn. Viết a√2 với a nguyên.", answer: "3√2", accept: ["3√2","3\\sqrt{2}","3sqrt2"], hint: "18 = 9 · 2.", explain: "3√2." },
      { type: "num", prompt: "2√5 + 3√5 = k√5. k bằng bao nhiêu?", answer: 5, hint: "Cùng loại thì cộng hệ số.", explain: "5." },
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
      
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Khối lập phương thể tích 27 cm khối, cạnh 3 cm">
          <polygon points="120,60 230,60 230,140 120,140" fill="#58C4DD" fill-opacity="0.15" stroke="#58C4DD" stroke-width="2"/>
          <polygon points="155,85 265,85 265,165 155,165" fill="#83C167" fill-opacity="0.15" stroke="#83C167" stroke-width="2"/>
          <polygon points="120,60 155,85 265,85 230,60" fill="#9A72AC" fill-opacity="0.15" stroke="#9A72AC" stroke-width="2"/>
          <line x1="155" y1="165" x2="120" y2="140" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="265" y1="165" x2="230" y2="140" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="155" y1="85" x2="120" y2="60" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="265" y1="85" x2="230" y2="60" stroke="#DDDDDD" stroke-width="1.5"/>
          <text x="175" y="80" font-size="12" fill="#58C4DD">3 cm</text>
          <text x="175" y="96" font-size="12" fill="#58C4DD">3 cm</text>
          <text x="175" y="112" font-size="12" fill="#58C4DD">3 cm</text>
          <text x="175" y="152" font-size="13" fill="#FC6255" text-anchor="middle">27 cm³</text>
          <text x="175" y="172" font-size="12" fill="#FC6255" text-anchor="middle">3 × 3 × 3 = 27</text>
        </svg>
        <figcaption>Khối lập phương thể tích 27 cm³ có cạnh ∛27 = 3 cm. Số âm lập phương ra âm, nên ∛(−27) = −3.</figcaption>
      </figure>
<div class="idea">
        <p><strong>Khác căn bậc hai ở chỗ dấu.</strong> Bình phương xoá dấu, nên số âm không có căn bậc hai, và số dương có hai căn. Lập phương giữ dấu: số dương lập phương ra dương, số âm lập phương ra âm. Mỗi số thực, kể cả số âm, có đúng một căn bậc ba. \(\sqrt[3]{-27} = -3\), và biểu thức này có nghĩa.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Cho rằng \(\sqrt[3]{-8}\) không xác định — đó là tính chất của căn bậc <strong>hai</strong>, không phải bậc ba.</li>
          <li>Quên dấu trừ khi lập phương: \((-2)^3 = -8\), không phải \(8\).</li>
          <li>Nhầm \(\sqrt[3]{a} + \sqrt[3]{b}\) với \(\sqrt[3]{a + b}\): \(\sqrt[3]{8} + \sqrt[3]{27} = 2 + 3 = 5 \neq \sqrt[3]{35}\).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\sqrt[3]{-8}\) có nghĩa không? <em>— Có, bằng \(-2\). Căn bậc ba nhận mọi số thực và giữ dấu; "không xác định" là tính chất của căn bậc hai.</em></p>
        <p>\(\sqrt[3]{8} + \sqrt[3]{27}\) có bằng \(\sqrt[3]{35}\) không? <em>— Không. Bằng \(2 + 3 = 5\); căn không cộng xuyên qua dấu cộng.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Khối lập phương thể tích 64 cm³ có cạnh \(\sqrt[3]{64}\). Vì \(4^3 = 64\), cạnh bằng 4 cm. Chỉ một đáp số: căn bậc ba không có cặp đối nhau như căn bậc hai.</p>
        <p>\(\sqrt[3]{-125} = -5\), vì \((-5)^3 = -125\). Số âm vẫn có căn bậc ba, và căn ấy âm.</p>
        <p>Kiểm tra tính chất với số âm: \(\bigl(\sqrt[3]{-8}\bigr)^3 = (-2)^3 = -8\). Không lấy giá trị tuyệt đối. \(\sqrt[3]{8} + \sqrt[3]{27} = 2 + 3 = 5\), trong khi \(\sqrt[3]{35}\) không bằng 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\sqrt[3]{8} = 2\) vì \(2^3 = 8\). \(\sqrt[3]{-8} = -2\) vì \((-2)^3 = -8\). \(\sqrt[3]{1000} = 10\) vì \(10^3 = 1000\). Mỗi số chỉ có một căn bậc ba, đúng dấu của số ấy.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\sqrt[3]{(-4)^3} = \sqrt[3]{-64} = -4\), không phải 4. Căn bậc hai mới cần giá trị tuyệt đối. \(\sqrt[3]{27} + \sqrt[3]{-8} = 3 + (-2) = 1\), không bằng \(\sqrt[3]{19}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\sqrt[3]{-27} = -3\), có nghĩa, không phải “không xác định”. \(\sqrt[3]{8} + \sqrt[3]{27} = 2 + 3 = 5\), không bằng \(\sqrt[3]{35}\). Căn bậc ba giữ dấu, nhưng vẫn không cộng xuyên qua dấu cộng.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Mỗi số có đúng một căn bậc ba, cùng dấu với số đó. Không lấy giá trị tuyệt đối. \((\sqrt[3]{a})^3 = a\).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Căn bậc ba của số âm có nghĩa: \(\sqrt[3]{-8}=-2\). Không lấy trị tuyệt đối. \((\sqrt[3]{a})^3=a\).</p>
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
      { type: "num", prompt: "Căn bậc ba của −64 bằng bao nhiêu?", answer: -4, hint: "(−4)³ = −64.", explain: "−4." },
      { type: "num", prompt: "(∛5)³ bằng bao nhiêu?", answer: 5, hint: "Lũy thừa và căn ngược nhau.", explain: "5." },
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
      <figure class="figure" data-animation="c4-b11-triangle">
        <svg viewBox="0 0 360 205" role="img" aria-label="Tam giác vuông với cạnh đối, cạnh kề, cạnh huyền" id="fig-c4-b11">
          <polygon points="50,170 300,170 300,35" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="450" stroke-dashoffset="450"/>
          <rect x="50" y="150" width="18" height="18" fill="none" stroke="#DDDDDD" stroke-width="1.5" opacity="0"/>
          <path d="M 266 170 A 34 34 0 0 1 272 152" fill="none" stroke="#FC6255" stroke-width="2" stroke-dasharray="45" stroke-dashoffset="45" opacity="0"/>
          <text x="243" y="161" font-size="15" fill="#FC6255" opacity="0">α</text>
          <text x="160" y="188" font-size="13" fill="#58C4DD" opacity="0">cạnh kề</text>
          <text x="306" y="105" font-size="13" fill="#83C167" opacity="0">cạnh đối</text>
          <text x="120" y="82" font-size="13" fill="#9A72AC" transform="rotate(-28 150 95)" opacity="0">cạnh huyền</text>
          <text x="40" y="188" font-size="13" opacity="0">A</text>
          <text x="306" y="188" font-size="13" opacity="0">B</text>
          <text x="306" y="30" font-size="13" opacity="0">C</text>
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
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm "đối" với "kề" — chúng đổi vai khi đổi góc xét: cạnh đối của \(\widehat{B}\) là cạnh kề của \(\widehat{C}\). Luôn tự hỏi "tôi đang đứng ở góc nào?"</li>
          <li>Viết \(\sin 30^\circ + \sin 60^\circ = \sin 90^\circ\) — tỉ số lượng giác không cộng thế được.</li>
          <li>Quên rằng tỉ số là <em>số thuần</em> (không có đơn vị cm, m…).</li>
        </ul>
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
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác vuông cạnh 3, 4, huyền 5. Góc \(\alpha\) đối cạnh 3: \(\sin\alpha = \dfrac{3}{5}\), \(\cos\alpha = \dfrac{4}{5}\), \(\tan\alpha = \dfrac{3}{4}\). Kiểm tra \(\dfrac{9}{25} + \dfrac{16}{25} = 1\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Cạnh 5, 12, huyền 13. Góc đối cạnh 5: \(\sin = \dfrac{5}{13}\), \(\cos = \dfrac{12}{13}\), \(\tan = \dfrac{5}{12}\). Cùng góc 45° trong tam giác vuông cân cạnh 1: huyền \(\sqrt{2}\), \(\sin 45^\circ = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}\). Đổi kích thước tam giác, tỉ số không đổi.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\sin 30^\circ + \sin 60^\circ = \dfrac{1}{2} + \dfrac{\sqrt{3}}{2}\), không bằng \(\sin 90^\circ = 1\). Tỉ số lượng giác không cộng theo góc. Muốn cộng, phải tính từng tỉ số rồi cộng các số.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Sin là đối trên huyền, cos là kề trên huyền, tan là đối trên kề. Góc phụ nhau thì sin góc này bằng cos góc kia. Phóng to tam giác, tỉ số không đổi.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Thuộc lòng sin, cos, tan của \(30^\circ, 45^\circ, 60^\circ\). sin là đối/huyền, cos kề/huyền, tan đối/kề. \(\sin 30^\circ=1/2\), không phải \(\sqrt{3}/2\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Tam giác vuông tại \(A\), góc \(B=30^\circ\), cạnh huyền 10 cm. Cạnh đối của \(B\) là \(10\cdot\sin 30^\circ=5\) cm. Cạnh kề của \(B\) là \(10\cdot\cos 30^\circ=5\sqrt{3}\) cm.</p>
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
      { type: "text", prompt: "sin 30° viết phân số.", answer: "1/2", accept: ["1/2"], hint: "Đối/huyền góc 30°.", explain: "1/2." },
      { type: "mc", prompt: "cos 60° bằng", choices: ["√3/2","1/2","1","√3"], correct: 1, hint: "cos 60° = sin 30°.", explain: "1/2." },
    ],
  },
  {
    id: "c4-b12",
    num: 12,
    chapter: 4,
    title: "Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng",
    summary: "Đảo tỉ số lượng giác để tìm cạnh: huyền đi với sin hoặc cos, cạnh kia đi với tan hoặc cot.",
    body: String.raw`
      <p>Bài trước cho tỉ số. Bài này đảo tỉ số lại để tìm cạnh. Đó là cách đo chiều cao mà không trèo lên.</p>
      <p>Tam giác \(ABC\) vuông tại \(A\). Cạnh huyền là \(a\), cạnh đối của góc \(B\) là \(b\), cạnh kề của góc \(B\) là \(c\).</p>
      <div class="definition">
        <p>Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh huyền nhân sin của góc đối diện (hay cos của góc kề): \(b = a \sin B = a \cos C\), \(c = a \sin C = a \cos B\); và bằng cạnh góc vuông kia nhân tan của góc đối diện: \(b = c \tan B\).</p>
      </div>
<div class="idea">
        <p><strong>Công thức không phải phép mới.</strong> Theo định nghĩa, \(\sin B = \dfrac{b}{a}\). Nhân hai vế với \(a\): \(b = a \sin B\). Cạnh \(b\) cũng là cạnh kề của góc \(C\), nên \(\cos C = \dfrac{b}{a}\) và \(b = a \cos C\). Cùng cách, \(c = a \sin C = a \cos B\).</p>
        <p>\(\tan B = \dfrac{b}{c}\), nên \(b = c \tan B\). Huyền đi với sin hoặc cos. Cạnh góc vuông kia đi với tan hoặc cot. Nhầm sin của góc kề sẽ ra cạnh sai.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhân với sin góc <em>kề</em> thay vì góc <em>đối</em> — đọc lại Định lí 1: cạnh nào thì "sin góc đối diện nó".</li>
          <li>Quên đổi đơn vị thời gian (1,2 phút phải thành \(\tfrac{1}{50}\) giờ trước khi nhân vận tốc).</li>
          <li>Dùng máy tính ở chế độ radian thay vì độ (DEG) — kết quả sẽ lệch hoàn toàn.</li>
        </ul>
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
      <div class="example">
        <p><strong>Máy bay.</strong> Bay 500 km/h, đường bay nghiêng \(30^\circ\) so với mặt ngang. Sau 1,2 phút. Đổi giờ trước: \(1{,}2\) phút \(= \dfrac{1{,}2}{60} = \dfrac{1}{50}\) giờ. Quãng đường bay \(AB = 500 \cdot \dfrac{1}{50} = 10\) km. Đó là cạnh huyền. Độ cao là cạnh đối của góc \(30^\circ\):</p>
        \[
          h = 10 \cdot \sin 30^\circ = 10 \cdot \dfrac{1}{2} = 5\ \text{km}.
        \]
        <p>Không nhân 500 với 1,2: vận tốc tính theo giờ, thời gian đang tính theo phút.</p>
      </div>
      <div class="example">
        <p><strong>Bóng tháp.</strong> Biết bóng, tức cạnh kề, dài 8,6 m. Tia nắng tạo với đất góc \(34^\circ\). Cần cạnh đối. Bạn của cạnh kề là tan: \(h = 8{,}6 \cdot \tan 34^\circ \approx 6\) m. Máy tính phải để độ (DEG), không để radian.</p>
      </div>
      <div class="idea">
        <p><strong>Giải tam giác vuông</strong> là tìm hết cạnh và góc còn thiếu, khi đã biết hai yếu tố và trong đó có ít nhất một cạnh. Tỉ số chỉ cho góc, không cho độ dài. Không có một cạnh thì không ra được mét.</p>
      </div>
      <div class="example">
        <p>Vuông tại \(A\), \(AB = 5\), \(AC = 8\). Pythagore: cạnh huyền \(BC = \sqrt{25 + 64} = \sqrt{89} \approx 9{,}4\). Góc \(C\) có cạnh đối \(AB = 5\) và cạnh kề \(AC = 8\), nên \(\tan C = \dfrac{5}{8} = 0{,}625\), \(\widehat{C} \approx 32^\circ\). Hai góc nhọn phụ nhau: \(\widehat{B} \approx 90^\circ - 32^\circ = 58^\circ\).</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Cạnh huyền 10 cm, góc \(B = 30^\circ\). Cạnh đối của góc \(B\) tính thế nào? <em>— \(b = a \sin B = 10 \cdot \sin 30^\circ = 5\) cm. Lấy \(\cos 30^\circ\) sẽ ra \(5\sqrt{3}\), sai vì dùng sin của góc kề.</em></p>
        <p>Thời gian 1,2 phút mà vận tốc tính theo giờ phải đổi thế nào? <em>— Thành \(\frac{1}{50}\) giờ trước khi nhân, không nhân 500 với 1,2.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tam giác \(ABC\) vuông tại \(A\), cạnh huyền \(a = 10\) cm, góc \(B = 30^\circ\). Cạnh đối của \(B\) là \(b\).</p>
        <p>\(b = a \sin B = 10 \cdot \sin 30^\circ = 10 \cdot \dfrac{1}{2} = 5\) cm. Cạnh kề \(c = a \cos B = 10 \cdot \cos 30^\circ = 5\sqrt{3}\) cm.</p>
        <p>Kiểm tra Pythagore: \(5^2 + (5\sqrt{3})^2 = 25 + 75 = 100 = 10^2\). Nếu lấy sin của góc kề thay vì góc đối, cạnh đối sẽ ra \(5\sqrt{3}\) cm, dài hơn nửa cạnh huyền — không khớp với góc 30°.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Cạnh huyền 8 cm, góc đối của cạnh cần tìm là \(30^\circ\). Cạnh đối \(= 8 \cdot \sin 30^\circ = 8 \cdot \dfrac{1}{2} = 4\) cm. Cạnh kề \(= 8 \cdot \cos 30^\circ = 4\sqrt{3}\) cm. Kiểm tra: \(4^2 + (4\sqrt{3})^2 = 16 + 48 = 64 = 8^2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Bóng cây dài 6 m, tia nắng tạo với đất góc \(45^\circ\). Biết cạnh kề, cần cạnh đối, dùng tan. \(\tan 45^\circ = 1\), nên chiều cao cũng là 6 m. Nếu góc là \(30^\circ\), cùng bóng 6 m thì cao \(6 \cdot \tan 30^\circ = 6 \cdot \dfrac{1}{\sqrt{3}} = 2\sqrt{3}\) m, thấp hơn. Góc lớn hơn, cùng bóng, thì cây cao hơn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Cạnh huyền 10 cm, góc \(B = 30^\circ\). Cạnh đối của \(B\) là \(10 \cdot \sin 30^\circ = 5\) cm. Lấy nhầm \(\cos 30^\circ\) sẽ ra \(5\sqrt{3}\) cm, dài hơn nửa cạnh huyền, không khớp góc 30°.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Biết cạnh huyền thì dùng sin góc đối hoặc cos góc kề. Biết cạnh kề thì dùng tan. Đọc góc đối với cạnh cần tìm, không lấy góc bên cạnh.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Biết cạnh huyền và góc nhọn: dùng sin hoặc cos. Biết hai cạnh góc vuông: dùng tan. Đọc đúng góc đối hay góc kề.</p>
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
      { type: "num", prompt: "Cạnh huyền 20 cm, góc 30°. Cạnh đối góc ấy bằng bao nhiêu cm?", answer: 10, hint: "sin 30° = 1/2.", explain: "10 cm." },
      { type: "mc", prompt: "Biết cạnh kề và góc, tìm cạnh đối. Dùng", choices: ["sin","cos","tan","Cạnh huyền nhân 2"], correct: 2, hint: "tan = đối/kề.", explain: "tan." },
    ],
  },

  // ============ CHƯƠNG V ============
  {
    id: "c5-b13",
    num: 13,
    chapter: 5,
    title: "Mở đầu về đường tròn",
    summary: "Đường tròn là ranh giới các điểm cách tâm đúng R. So OM với R để biết điểm ở trong, trên, hay ngoài.",
    body: String.raw`
      <p>Mảnh giấy tròn mất dấu tâm. Muốn tìm lại, phải biết đường tròn là gì, không phải chỉ "hình tròn".</p>
      <div class="definition">
        <p><strong>Đường tròn</strong> tâm \(O\) bán kính \(R\) (\(R > 0\)), kí hiệu \((O;\ R)\), là tập các điểm cách \(O\) đúng \(R\). Compa vẽ đúng tập ấy: chấu tại \(O\), mở \(R\), xoay một vòng. Đường tròn là <em>ranh giới</em>. Miếng giấy, gồm cả phần bên trong, là <em>hình tròn</em>.</p>
      </div>
      <div class="idea">
        <p><strong>Một phép so sánh.</strong> Lấy điểm \(M\). Nếu \(OM = R\), \(M\) nằm trên đường tròn. Nếu \(OM < R\), compa chưa với tới ranh giới, \(M\) ở trong. Nếu \(OM > R\), \(M\) ở ngoài. Không cần vẽ hết hình.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm đường tròn (ranh giới) với hình tròn (cả vùng bên trong).</li>
          <li>Trục đối xứng "bất kì": trục đối xứng của đường tròn phải đi qua tâm.</li>
          <li>Viết \((O; R)\) với \(R < 0\) — bán kính phải dương.</li>
        </ul>
      </div>
      <figure class="figure" data-animation="c5-b13-circle">
        <svg viewBox="0 0 260 220" role="img" aria-label="Vị trí điểm so với đường tròn" id="fig-c5-b13">
          <circle cx="120" cy="110" r="80" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="300" stroke-dashoffset="300"/>
          <circle cx="120" cy="110" r="3" fill="#FFFF00" opacity="0"/>
          <text x="104" y="126" font-size="13" opacity="0">O</text>
          <line x1="120" y1="110" x2="177" y2="53" stroke="#FC6255" stroke-width="2" stroke-dasharray="60" stroke-dashoffset="60"/>
          <text x="140" y="70" font-size="14" fill="#FC6255" opacity="0">R</text>
          <circle cx="177" cy="53" r="4" fill="#83C167" opacity="0"/>
          <text x="185" y="48" font-size="13" opacity="0">A ∈ (O)</text>
          <circle cx="140" cy="88" r="4" fill="#58C4DD" opacity="0"/>
          <text x="148" y="92" font-size="13" opacity="0">C trong</text>
          <circle cx="222" cy="150" r="4" fill="#9A72AC" opacity="0"/>
          <text x="196" y="168" font-size="13" opacity="0">B ngoài</text>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Bán kính 5 cm, điểm \(M\) trên bán kính với \(OM = 3\) cm. \(M\) nằm ở đâu? <em>— Ở trong đường tròn, không nằm trên đường tròn. Nằm trên đoạn kẻ từ tâm chưa đủ; phải \(OM = 5\).</em></p>
        <p>Đường tròn là ranh giới hay gồm cả phần bên trong? <em>— Là ranh giới: tập điểm cách tâm đúng \(R\). Phần bên trong là hình tròn.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn tâm \(O\), bán kính 5 cm. Không cần vẽ hết hình: so khoảng cách từ \(O\) tới điểm với 5.</p>
        <p>\(OA = 3 < 5\): \(A\) ở trong đường tròn. \(OB = 5\): \(B\) nằm trên đường tròn. \(OC = 7 > 5\): \(C\) ở ngoài.</p>
        <p>Mảnh giấy tròn mất dấu tâm: gấp hai lần để được hai đường kính. Hai nếp gấp cắt nhau tại tâm, vì mọi đường kính đều đi qua tâm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Đường tròn tâm \(O\), bán kính 6 cm. \(OA = 6\): trên đường tròn. \(OB = 2 < 6\): trong. \(OC = 9 > 6\): ngoài. Chỉ cần một phép so với 6.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Đoạn \(AB = 10\) cm, \(O\) là trung điểm. Đường tròn đường kính \(AB\) có bán kính 5 cm. Điểm \(M\) với \(OM = 5\) nằm trên đường tròn. Điểm \(N\) với \(ON = 4\) nằm trong, dù \(N\) có thể nằm trên đoạn \(AB\). Nằm trên đường kính chưa chắc nằm trên đường tròn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Bán kính 5 cm. Điểm \(M\) nằm trên bán kính, \(OM = 3\) cm. \(M\) ở trong đường tròn, không nằm trên đường tròn. Nằm trên đoạn kẻ từ tâm chưa đủ. Phải có \(OM = 5\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đường tròn là ranh giới, hình tròn gồm cả phần trong. So khoảng cách tới tâm với \(R\): bằng thì trên, nhỏ hơn thì trong, lớn hơn thì ngoài.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> So \(OM\) với \(R\): bằng thì trên đường tròn, nhỏ hơn thì trong, lớn hơn thì ngoài. Đường kính \(=2R\).</p>
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
      { type: "mc", prompt: "R = 6, OM = 6. Điểm M", choices: ["Trong đường tròn","Trên đường tròn","Ngoài đường tròn","Trùng tâm"], correct: 1, hint: "OM = R.", explain: "Trên đường tròn." },
      { type: "num", prompt: "Bán kính 8 cm. Đường kính bằng bao nhiêu cm?", answer: 16, hint: "2R.", explain: "16 cm." },
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
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nghĩ mọi dây đều là đường kính — đường kính là dây đi <em>qua tâm</em>.</li>
          <li>Quên cộng trừ \(360^\circ\): cung lớn = \(360^\circ\) − số đo cung nhỏ, không phải gấp đôi.</li>
          <li>Nhầm cung (phần <em>đường cong</em>) với hình quạt (mảnh <em>bánh</em> có tâm — bài sau).</li>
        </ul>
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
      <div class="idea">
        <p><strong>Vì sao số đo cung bằng số đo góc ở tâm?</strong> Cung không có thước đo riêng. Ta mượn góc ở tâm chắn cung ấy. Góc \(120^\circ\) chắn cung nhỏ \(120^\circ\). Cung lớn là phần còn lại của vòng tròn, nên bằng \(360^\circ - 120^\circ = 240^\circ\), không phải gấp đôi.</p>
      </div>
      <div class="example">
        <p>Cho \(\widehat{AOB} = 120^\circ\) với \(O\) là tâm. Khi đó cung nhỏ \(AB\) có số đo \(120^\circ\); cung lớn \(AmB\) có số đo \(360^\circ - 120^\circ = 240^\circ\).</p>
      </div>
      <div class="memory">
        <p><strong>Cách nhớ:</strong> "Góc ở tâm là <em>ông trùm số đo</em> — ông chắn cung nào, cung ấy mang số đo của ông (nếu là cung nhỏ); cung lớn thì trừ đi từ \(360^\circ\)."</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Mọi dây có phải đường kính không? <em>— Không. Đường kính là dây đi qua tâm và là dây dài nhất.</em></p>
        <p>Cung lớn tính thế nào? <em>— Bằng \(360^\circ\) trừ số đo cung nhỏ, không phải gấp đôi góc ở tâm.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn bán kính 5 cm. Đường kính dài \(2 \cdot 5 = 10\) cm. Đó là dây dài nhất.</p>
        <p>Dây \(AB\) chắn góc ở tâm \(60^\circ\): tam giác \(OAB\) đều, nên \(AB = 5\) cm, nhỏ hơn đường kính. Dây chắn góc ở tâm \(90^\circ\): \(AB = 5\sqrt{2} \approx 7{,}1\) cm, vẫn nhỏ hơn 10 cm.</p>
        <p>Dây càng gần tâm thì càng dài. Dây đi qua tâm — đường kính — là dài nhất.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Bán kính 6 cm, đường kính 12 cm. Dây chắn góc ở tâm \(60^\circ\) dài 6 cm, vì tam giác tâm-dây là tam giác đều. Dây chắn \(90^\circ\) dài \(6\sqrt{2} \approx 8{,}5\) cm. Cả hai đều ngắn hơn đường kính.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Góc ở tâm \(120^\circ\) chắn cung nhỏ \(120^\circ\). Cung lớn là \(360^\circ - 120^\circ = 240^\circ\), không phải \(240^\circ\) viết nhầm thành cung nhỏ, cũng không phải gấp đôi \(120^\circ\). Nửa đường tròn là cung \(180^\circ\), khi góc ở tâm là góc bẹt.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Góc ở tâm \(70^\circ\) chắn cung nhỏ \(70^\circ\). Cung lớn là \(360^\circ - 70^\circ = 290^\circ\), không phải \(140^\circ\). Gấp đôi góc ở tâm không ra cung lớn.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đường kính là dây dài nhất. Cung nhỏ bằng góc ở tâm chắn nó. Cung lớn bằng 360° trừ cung nhỏ.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Đường kính là dây dài nhất. Cung nhỏ bằng góc ở tâm chắn nó. Cung lớn \(=360^\circ\) trừ cung nhỏ.</p>
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
      { type: "num", prompt: "Góc ở tâm 50°. Cung nhỏ bị chắn bằng bao nhiêu độ?", answer: 50, hint: "Cung nhỏ bằng góc ở tâm.", explain: "50°." },
      { type: "num", prompt: "Cung nhỏ 80°. Cung lớn bằng bao nhiêu độ?", answer: 280, hint: "360 − 80.", explain: "280°." },
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
        <p><strong>Một mảnh của vòng tròn.</strong> Cung \(n^\circ\) là \(\dfrac{n}{360}\) vòng. Chu vi là \(2\pi R\), nên độ dài cung là \(\dfrac{n}{360} \cdot 2\pi R = \dfrac{n}{180}\pi R\). Số 180 xuất hiện vì \(2\) và \(360\) rút gọn, không phải vì cung dùng nửa vòng. Diện tích quạt là cùng tỉ lệ ấy của diện tích hình tròn: \(\dfrac{n}{360}\pi R^2\). Cung lấy phần chu vi, quạt lấy phần diện tích.</p>
        <p>\(S_q = \dfrac{l R}{2}\) là cùng công thức viết khác: thay \(l = \dfrac{n}{180}\pi R\) vào thì ra \(\dfrac{n}{360}\pi R^2\). Nhớ một, kiểm tra bằng cái kia.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm 180 với 360: độ dài cung chia cho \(180\), diện tích quạt chia cho \(360\) — nhớ từ công thức gốc (2) và (3).</li>
          <li>Đơn vị: bán kính 9 cm thì độ dài ra cm, diện tích ra cm² — đừng trộn.</li>
          <li>Vành khuyên nhân nhầm: \(\pi R^2 - \pi r^2 = \pi(R^2 - r^2)\), không phải \(\pi(R - r)^2\).</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Độ dài cung chia cho bao nhiêu? <em>— 180: \(l = \frac{n}{180}\pi R\), đến từ \(2\pi R \cdot \frac{n}{360}\). Diện tích quạt chia cho 360.</em></p>
        <p>Vành khuyên bán kính ngoài 5 cm, trong 3 cm có diện tích? <em>— \(\pi(5^2 - 3^2) = 16\pi\), không phải \(\pi(5 - 3)^2 = 4\pi\). Trừ bình phương, không bình phương hiệu.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn bán kính \(R = 6\) cm, lấy cung \(60^\circ\). Cung này là \(\dfrac{1}{6}\) vòng tròn.</p>
        <p>Độ dài cung: \(l = \dfrac{60}{180}\pi \cdot 6 = 2\pi\) cm. Chu vi cả đường tròn là \(12\pi\), một phần sáu đúng là \(2\pi\).</p>
        <p>Diện tích quạt: \(S_q = \dfrac{60}{360}\pi \cdot 36 = 6\pi\) cm². Công thức thứ hai cho cùng số: \(\dfrac{l R}{2} = \dfrac{2\pi \cdot 6}{2} = 6\pi\).</p>
        <p>Vành khuyên bán kính ngoài 5 cm, trong 2 cm: \(S = \pi(5^2 - 2^2) = 21\pi\) cm². Không phải \(\pi(5 - 2)^2 = 9\pi\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Bán kính 9 cm, cung \(40^\circ\). Đó là \(\dfrac{40}{360} = \dfrac{1}{9}\) vòng. Độ dài cung \(l = \dfrac{40}{180}\pi \cdot 9 = 2\pi\) cm. Diện tích quạt \(S_q = \dfrac{40}{360}\pi \cdot 81 = 9\pi\) cm². Kiểm tra bằng \(\dfrac{lR}{2} = \dfrac{2\pi \cdot 9}{2} = 9\pi\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Vành khuyên bán kính ngoài 5 cm, trong 3 cm: \(S = \pi(5^2 - 3^2) = 16\pi\) cm². Không phải \(\pi(5 - 3)^2 = 4\pi\). Trừ bình phương, không bình phương hiệu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Bán kính 6 cm, cung \(60^\circ\). Độ dài cung là \(\dfrac{60}{180}\pi \cdot 6 = 2\pi\) cm. Nếu chia cho 360 rồi chỉ nhân \(\pi R\), ra \(\pi\) cm, thiếu một nửa. Diện tích quạt mới chia cho 360: \(\dfrac{60}{360}\pi \cdot 36 = 6\pi\) cm².</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cung lấy phần chu vi, quạt lấy phần diện tích. Số 180 trong độ dài cung đến từ \(2\pi R \cdot \dfrac{n}{360}\). Vành khuyên là \(\pi(R^2 - r^2)\).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Độ dài cung \(l=\dfrac{n}{180}\pi R\). Diện tích quạt \(\dfrac{n}{360}\pi R^2\). Vành khuyên \(\pi(R^2-r^2)\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(R=9\) cm, cung \(40^\circ\). \(l=\dfrac{40}{180}\pi\cdot 9=2\pi\) cm. Quạt \(\dfrac{40}{360}\pi\cdot 81=9\pi\) cm². Kiểm tra \(\dfrac{lR}{2}=9\pi\).</p>
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
      { type: "num", prompt: "R = 6, cung 60°. Độ dài cung là kπ. k bằng bao nhiêu?", answer: 2, hint: "(60/180)·π·6.", explain: "2π, k = 2." },
      { type: "num", prompt: "R = 10, r = 6. Diện tích vành khuyên là kπ. k bằng bao nhiêu?", answer: 64, hint: "100 − 36.", explain: "64." },
    ],
  },
  {
    id: "c5-b16",
    num: 16,
    chapter: 5,
    title: "Vị trí tương đối của đường thẳng và đường tròn",
    summary: "Hạ vuông góc từ tâm xuống đường thẳng. So khoảng cách d với R: ngắn hơn thì cắt hai điểm, bằng thì chạm một điểm.",
    body: String.raw`
      <p>Một đường thẳng và một đường tròn gặp nhau ở hai điểm, một điểm, hoặc không gặp. Không cần đoán. Hạ vuông góc từ tâm \(O\) xuống đường thẳng, gọi chân là \(H\) và \(OH = d\).</p>
      <div class="idea">
        <p><strong>Vì sao chỉ cần so \(d\) với \(R\)?</strong> Nếu đường thẳng cắt đường tròn tại \(M\) thì tam giác \(OHM\) vuông tại \(H\). Pythagore: \(R^2 = d^2 + HM^2\), nên \(HM^2 = R^2 - d^2\).</p>
        <p>\(d < R\): \(R^2 - d^2 > 0\), có hai điểm \(M\), mỗi bên \(H\) một điểm. Nửa dây dài \(\sqrt{R^2 - d^2}\). \(d = R\): \(HM = 0\), chỉ một điểm \(H\). Đó là tiếp xúc, và bán kính tới tiếp điểm vuông góc với tiếp tuyến. \(d > R\): \(R^2 - d^2 < 0\), không có điểm chung.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Điều kiện tiếp xúc là \(d = R\) — viết \(d \leq R\) là sai (d nhỏ hơn thì cắt nhau ở hai điểm).</li>
          <li>Định lí 1 cần <em>cả hai</em>: đi qua điểm trên đường tròn <em>và</em> vuông góc bán kính qua điểm đó; chỉ vuông góc thôi chưa đủ.</li>
          <li>Hai tiếp tuyến cắt nhau: nhớ cả ba hệ quả (cách đều, phân giác góc tiếp tuyến, phân giác góc bán kính), đừng chỉ nhớ MA = MB.</li>
        </ul>
      </div>
      <figure class="figure" data-animation="c5-b16-positions">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 130 130" width="120" role="img" aria-label="Đường thẳng cắt đường tròn" id="fig-c5-b16-1">
              <circle cx="65" cy="55" r="40" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="251" stroke-dashoffset="251"/>
              <circle cx="65" cy="55" r="2.5" fill="#FFFF00" opacity="0"/>
              <line x1="8" y1="70" x2="122" y2="70" stroke="#58C4DD" stroke-width="2" stroke-dasharray="114" stroke-dashoffset="114"/>
              <circle cx="28" cy="70" r="4" fill="#FC6255" opacity="0"/>
              <circle cx="102" cy="70" r="4" fill="#FC6255" opacity="0"/>
              <line x1="65" y1="55" x2="65" y2="70" stroke="#9A72AC" stroke-width="1.8" stroke-dasharray="15" stroke-dashoffset="15" opacity="0"/>
              <text x="70" y="67" font-size="11" opacity="0">d</text>
              <text x="38" y="93" font-size="11" fill="#83C167" opacity="0">d &lt; R</text>
            </svg>
            <p>Cắt nhau: 2 điểm chung</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 130 130" width="120" role="img" aria-label="Đường thẳng tiếp xúc đường tròn" id="fig-c5-b16-2">
              <circle cx="65" cy="55" r="40" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="251" stroke-dashoffset="251"/>
              <circle cx="65" cy="55" r="2.5" fill="#FFFF00" opacity="0"/>
              <line x1="8" y1="95" x2="122" y2="95" stroke="#58C4DD" stroke-width="2" stroke-dasharray="114" stroke-dashoffset="114"/>
              <circle cx="65" cy="95" r="4" fill="#FC6255" opacity="0"/>
              <line x1="65" y1="55" x2="65" y2="95" stroke="#9A72AC" stroke-width="1.8" stroke-dasharray="40" stroke-dashoffset="40" opacity="0"/>
              <text x="70" y="80" font-size="11" opacity="0">d = R</text>
              <text x="70" y="108" font-size="11" opacity="0">H</text>
              <rect x="65" y="88" width="8" height="7" fill="none" stroke="#DDDDDD" stroke-width="1" opacity="0"/>
            </svg>
            <p>Tiếp xúc: 1 tiếp điểm, \(OH \perp a\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 130 130" width="120" role="img" aria-label="Đường thẳng không giao đường tròn" id="fig-c5-b16-3">
              <circle cx="65" cy="52" r="40" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="251" stroke-dashoffset="251"/>
              <circle cx="65" cy="52" r="2.5" fill="#FFFF00" opacity="0"/>
              <line x1="8" y1="112" x2="122" y2="112" stroke="#58C4DD" stroke-width="2" stroke-dasharray="114" stroke-dashoffset="114"/>
              <line x1="65" y1="52" x2="65" y2="112" stroke="#9A72AC" stroke-width="1.8" stroke-dasharray="60" stroke-dashoffset="60" opacity="0"/>
              <text x="70" y="90" font-size="11" opacity="0">d</text>
              <text x="38" y="104" font-size="11" fill="#83C167" opacity="0">d &gt; R</text>
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
        <p><strong>Nhận ra tiếp tuyến.</strong> Một đường thẳng đi qua một điểm trên đường tròn và vuông góc với bán kính tại điểm ấy thì nó là tiếp tuyến. Thiếu một trong hai điều kiện thì chưa đủ: vuông góc mà không chạm đường tròn thì chỉ là một đường thẳng ở xa.</p>
        <p>Hai tiếp tuyến từ một điểm \(M\) bên ngoài cắt đường tròn tại \(A\) và \(B\). Tam giác \(OAM\) và \(OBM\) cùng vuông, cùng cạnh huyền \(OM\), và \(OA = OB = R\). Hai tam giác bằng nhau, nên \(MA = MB\), và \(OM\) chia đôi cả góc ở \(M\) lẫn góc ở \(O\).</p>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Điều kiện để đường thẳng tiếp xúc đường tròn là gì? <em>— \(d = R\), khoảng cách từ tâm đến đường thẳng đúng bằng bán kính. Viết \(d \le R\) là sai: d nhỏ hơn thì cắt nhau ở hai điểm.</em></p>
        <p>Định lí 1 nhận biết tiếp tuyến cần mấy điều kiện? <em>— Cả hai: đi qua điểm trên đường tròn và vuông góc bán kính qua điểm đó. Chỉ vuông góc thôi chưa đủ.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Đường tròn \((O;\ 5)\). Gọi \(d\) là khoảng cách từ tâm đến đường thẳng.</p>
        <p>\(d = 3 < 5\): cắt nhau tại hai điểm. Nửa dây bằng \(\sqrt{5^2 - 3^2} = 4\), nên dây dài 8 cm.</p>
        <p>\(d = 5\): tiếp xúc, đúng một tiếp điểm. Bán kính tới tiếp điểm vuông góc với tiếp tuyến.</p>
        <p>\(d = 8 > 5\): không giao. Đường thẳng nằm ngoài đường tròn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Đường tròn bán kính 5 cm. Khoảng cách từ tâm đến đường thẳng là 3 cm: cắt hai điểm, nửa dây \(\sqrt{25 - 9} = 4\) cm, dây dài 8 cm. Khoảng cách 5 cm: tiếp xúc, một điểm. Khoảng cách 7 cm: không gặp.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Từ điểm \(M\) ngoài đường tròn, \(OM = 13\) cm, bán kính 5 cm. Hai tiếp tuyến bằng nhau, mỗi tiếp tuyến dài \(\sqrt{13^2 - 5^2} = 12\) cm. Bán kính tới tiếp điểm vuông góc với tiếp tuyến. Nếu chỉ vuông góc mà không đi qua điểm trên đường tròn thì chưa phải tiếp tuyến.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(R = 5\) cm, khoảng cách từ tâm đến đường thẳng là 4 cm. \(4 < 5\), cắt nhau tại hai điểm, không phải tiếp xúc. Tiếp xúc chỉ khi khoảng cách đúng bằng bán kính. Viết \(d \leq R\) cho tiếp xúc là sai.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hạ vuông góc từ tâm, so \(d\) với \(R\). Nhỏ hơn: hai điểm. Bằng: một tiếp điểm, bán kính vuông góc tiếp tuyến. Lớn hơn: không gặp.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Hạ vuông góc từ tâm xuống đường thẳng, so \(d\) với \(R\). \(d<R\) hai điểm, \(d=R\) tiếp xúc, \(d>R\) không gặp. Nửa dây \(\sqrt{R^2-d^2}\).</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, 2024, câu IV.</strong> Từ điểm \(A\) ngoài đường tròn \((O)\), kẻ hai tiếp tuyến \(AB\) và \(AC\), với \(B, C\) là tiếp điểm. Ý 1 chứng minh tứ giác \(ABOC\) nội tiếp. Dùng ngay dấu hiệu của bài này: bán kính tới tiếp điểm vuông góc với tiếp tuyến, nên \(\widehat{OBA}=\widehat{OCA}=90^\circ\).</p>
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
      { type: "mc", prompt: "R = 5, d = 5. Đường thẳng và đường tròn", choices: ["Cắt hai điểm","Tiếp xúc","Không gặp","Trùng nhau"], correct: 1, hint: "d = R.", explain: "Tiếp xúc một điểm." },
      { type: "num", prompt: "R = 13, d = 5. Nửa dây bằng bao nhiêu?", answer: 12, hint: "√(169 − 25).", explain: "12. Dây dài 24." },
    ],
  },
  {
    id: "c5-b17",
    num: 17,
    chapter: 5,
    title: "Vị trí tương đối của hai đường tròn",
    summary: "Đặt hai bán kính lên đoạn nối tâm. Chạm ngoài khi OO' = R + R', chạm trong khi OO' = R − R'.",
    body: String.raw`
      <p>Hai đường tròn phân biệt, \(R \geq R'\). Muốn biết chúng cắt, chạm, hay không gặp, đặt hai bán kính lên đường nối hai tâm.</p>
      <div class="idea">
        <p><strong>Chạm ngoài.</strong> Đi từ \(O\) một đoạn \(R\), từ \(O'\) một đoạn \(R'\) về phía nhau. Hai đầu vừa khít khi \(OO' = R + R'\). Xa hơn, \(OO' > R + R'\): không gặp, gọi là ngoài nhau. Gần hơn một chút: hai vòng cài vào nhau, cắt tại hai điểm.</p>
        <p><strong>Chạm trong.</strong> Đường tròn nhỏ nằm trong đường tròn lớn và chạm từ bên trong khi \(OO' + R' = R\), tức \(OO' = R - R'\). Gần hơn nữa, \(OO' < R - R'\): nhỏ nằm hẳn bên trong, không chạm. Đó là \((O)\) đựng \((O')\). Hai bán kính bằng nhau thì không có tiếp xúc trong, vì \(R - R' = 0\).</p>
        <p>Giữa hai mốc, \(R - R' < OO' < R + R'\), là cắt nhau. Tiếp điểm luôn nằm trên đường nối hai tâm, vì đó là đường ta đặt các bán kính.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Tiếp xúc trong chỉ xảy ra khi \(R > R'\); hai đường tròn bằng nhau không tiếp xúc trong.</li>
          <li>Quên trường hợp đựng (đồng tâm là ca đặc biệt: tâm trùng, bán kính khác).</li>
          <li>Khi tính, luôn đặt \(R \geq R'\) trước để tránh trừ ra số âm gây rối.</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hai đường tròn bằng nhau \(R = R' = 5\) có tiếp xúc trong không? <em>— Không. Tiếp xúc trong cần \(R > R'\) và \(OO' = R - R'\); với bán kính bằng nhau thì \(R - R' = 0\).</em></p>
        <p>Khoảng cách \(OO'\) nằm giữa hai mốc thì hai đường tròn thế nào? <em>— Cắt nhau tại hai điểm: \(R - R' < OO' < R + R'\).</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hai đường tròn bán kính \(R = 5\) cm và \(R' = 3\) cm. So \(OO'\) với \(R - R' = 2\) và \(R + R' = 8\).</p>
        <p>\(OO' = 6\): \(2 < 6 < 8\), cắt nhau tại hai điểm.</p>
        <p>\(OO' = 8\): tiếp xúc ngoài. \(OO' = 2\): tiếp xúc trong. Tiếp điểm nằm trên đường nối hai tâm.</p>
        <p>\(OO' = 9 > 8\): ngoài nhau, không chạm. \(OO' = 1 < 2\): đường tròn nhỏ nằm hẳn trong đường tròn lớn, không chạm — đựng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(R = 6\), \(R' = 2\). Hai mốc là \(R - R' = 4\) và \(R + R' = 8\). \(OO' = 10 > 8\): ngoài nhau. \(OO' = 8\): tiếp xúc ngoài. \(OO' = 5\): cắt nhau. \(OO' = 4\): tiếp xúc trong. \(OO' = 1 < 4\): đường tròn nhỏ nằm trong, không chạm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hai đường tròn bằng nhau, \(R = R' = 5\). Không có tiếp xúc trong, vì \(R - R' = 0\). \(OO' = 10\): tiếp xúc ngoài. \(OO' = 7\): cắt nhau. \(OO' = 12\): ngoài nhau. Đừng viết \(OO' = 0\) là tiếp xúc trong.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai đường tròn cùng bán kính 4 cm, tâm trùng. Đó là đồng tâm, không phải tiếp xúc trong. Tiếp xúc trong cần \(R > R'\) và \(OO' = R - R'\). Hai bán kính bằng nhau thì \(R - R' = 0\), không có tiếp xúc trong.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đặt bán kính lớn trước. Mốc ngoài là \(R + R'\), mốc trong là \(R - R'\). Nằm giữa hai mốc thì cắt nhau.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Đặt \(R\geq R'\). Mốc ngoài \(R+R'\), mốc trong \(R-R'\). Bằng mốc thì tiếp xúc. Nằm giữa thì cắt hai điểm.</p>
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
      { type: "mc", prompt: "R = 7, R' = 3, OO' = 10. Hai đường tròn", choices: ["Cắt nhau","Tiếp xúc ngoài","Tiếp xúc trong","Không gặp"], correct: 1, hint: "7 + 3 = 10.", explain: "Tiếp xúc ngoài." },
      { type: "num", prompt: "R = 9, R' = 4. Tiếp xúc trong thì OO' bằng bao nhiêu?", answer: 5, hint: "R − R'.", explain: "5." },
    ],
  },

  // ============ CHƯƠNG VI (Tập 2) ============
  {
    id: "c6-b18",
    num: 18,
    chapter: 6,
    title: "Hàm số y = ax² (a ≠ 0)",
    summary: "y = ax² luôn đối xứng qua Oy vì (−x)² = x². a > 0 thì mở lên, a < 0 thì mở xuống, đỉnh tại O.",
    body: String.raw`
      <p>Quãng đường rơi \(s = 4{,}9t^2\) và diện tích hình tròn \(S = \pi r^2\) khác nhau ở chữ, nhưng cùng một dạng: \(y = ax^2\) với \(a \neq 0\). Hàm này xác định với mọi \(x\), vì bình phương không cần điều kiện.</p>
      <div class="idea">
        <p><strong>Vì sao hình như vậy?</strong> \((-x)^2 = x^2\), nên \(y\) tại \(x\) và tại \(-x\) bằng nhau. Đồ thị đối xứng qua trục \(Oy\). Chỉ cần tính nửa bên phải rồi lấy gương sang trái.</p>
        <p>\(x^2\) nhỏ nhất tại \(x = 0\), bằng 0. Nếu \(a > 0\), \(y = ax^2 \geq 0\): đường nằm trên trục hoành, thấp nhất tại gốc \(O\), mở lên. Nếu \(a < 0\), \(y \leq 0\): nằm dưới trục hoành, cao nhất tại \(O\), mở xuống. Đỉnh luôn là \(O\), không phải điểm \((0;\ a)\).</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Vẽ parabol bằng đoạn thẳng gấp khúc — phải nối bằng đường cong trơn.</li>
          <li>Nhầm hướng: \(y = -3x^2\) hướng <em>xuống</em> vì \(a = -3 < 0\), dù \(3x^2\) dương.</li>
          <li>Quên điểm đối xứng: \((-2;\ 8)\) thuộc \(y = 2x^2\) thì \((2;\ 8)\) cũng thuộc.</li>
        </ul>
      </div>
      <p>Vẽ: lập bảng vài giá trị, chấm điểm, nối bằng đường cong trơn, không nối bằng đoạn thẳng gấp khúc.</p>
      <figure class="figure" data-animation="c6-b18-parabola">
        <div class="panels">
          <div class="panel">
            <svg viewBox="0 0 120 112" width="125" role="img" aria-label="a lớn hơn 0" id="fig-c6-b18-1">
              <line x1="10" y1="55" x2="112" y2="55" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="102" stroke-dashoffset="102" opacity="0"/>
              <line x1="60" y1="6" x2="60" y2="108" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="102" stroke-dashoffset="102" opacity="0"/>
              <path d="M 25 100 Q 60 10 95 100" fill="none" stroke="#58C4DD" stroke-width="2.5" stroke-dasharray="140" stroke-dashoffset="140" opacity="0"/>
              <circle cx="60" cy="55" r="3.5" fill="#FC6255" opacity="0"/>
              <text x="66" y="64" font-size="10" opacity="0">O</text>
              <text x="14" y="18" font-size="12" fill="#FFFF00" opacity="0">a &gt; 0</text>
            </svg>
            <p>Hướng lên: \(a &gt; 0\)</p>
          </div>
          <div class="panel">
            <svg viewBox="0 0 120 112" width="125" role="img" aria-label="a nhỏ hơn 0" id="fig-c6-b18-2">
              <line x1="10" y1="55" x2="112" y2="55" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="102" stroke-dashoffset="102" opacity="0"/>
              <line x1="60" y1="6" x2="60" y2="108" stroke="#BBBBBB" stroke-width="1.5" stroke-dasharray="102" stroke-dashoffset="102" opacity="0"/>
              <path d="M 25 10 Q 60 100 95 10" fill="none" stroke="#58C4DD" stroke-width="2.5" stroke-dasharray="140" stroke-dashoffset="140" opacity="0"/>
              <circle cx="60" cy="55" r="3.5" fill="#FFFF00" opacity="0"/>
              <text x="66" y="66" font-size="10" opacity="0">O</text>
              <text x="14" y="100" font-size="12" fill="#FC6255" opacity="0">a &lt; 0</text>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(y = -3x^2\) hướng lên hay hướng xuống? <em>— Hướng xuống. Dù \(3x^2\) dương, hệ số \(a = -3 < 0\) nên parabol mở xuống, đỉnh tại gốc \(O\).</em></p>
        <p>\((2;\ 8)\) thuộc đồ thị \(y = 2x^2\) thì còn điểm nào thuộc? <em>— \((-2;\ 8)\), vì \((-x)^2 = x^2\) và đồ thị đối xứng qua trục \(Oy\).</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Vẽ \(y = 2x^2\) bằng vài cặp, đừng đoán hình.</p>
        <table>
          <tr><th>\(x\)</th><td>\(-2\)</td><td>\(-1\)</td><td>\(0\)</td><td>\(1\)</td><td>\(2\)</td></tr>
          <tr><th>\(y\)</th><td>\(8\)</td><td>\(2\)</td><td>\(0\)</td><td>\(2\)</td><td>\(8\)</td></tr>
        </table>
        <p>\(x = 2\) và \(x = -2\) cho cùng một \(y\): parabol đối xứng qua trục \(Oy\), đỉnh tại gốc \(O\). Vì \(a = 2 > 0\), nhánh mở lên.</p>
        <p>Với \(y = -x^2\), cùng các \(x\) cho \(y = -4, -1, 0, -1, -4\). Cùng dạng, nhưng mở xuống vì \(a < 0\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(y = -2x^2\). Bảng: \(x = -2, -1, 0, 1, 2\) cho \(y = -8, -2, 0, -2, -8\). \(x\) và \(-x\) cùng \(y\): đối xứng qua \(Oy\). Mọi \(y \leq 0\): mở xuống, đỉnh tại \(O\), vì \(a = -2 < 0\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(y = \dfrac{1}{2}x^2\) tại \(x = 4\) là \(8\). Cùng dạng mở lên với \(y = 2x^2\), nhưng dốc thoải hơn: tại \(x = 2\), \(y = 2\) thay vì 8. Hệ số \(a\) đổi độ dốc, không đổi đỉnh và không đổi trục đối xứng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(y = -3x^2\). Tại \(x = 1\), \(y = -3\), không phải 3. Dù \(3x^2\) dương, hệ số \(a = -3 < 0\) nên parabol mở xuống. Điểm \((-2;\ -12)\) thuộc đồ thị thì \((2;\ -12)\) cũng thuộc.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> \((-x)^2 = x^2\), nên đối xứng qua \(Oy\). Đỉnh tại \(O\). \(a > 0\) mở lên, \(a < 0\) mở xuống.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Lập bảng giá trị, vẽ ít nhất năm điểm, kể cả gốc. Nhận trục đối xứng \(Oy\). \(a>0\) mở lên, \(a<0\) mở xuống. Bài thực tế dạng \(S = k d^2\): thế số, không đổi \(k\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(y = 2x^2\). Tại \(x = \pm 1\), \(y = 2\). Tại \(x = \pm 2\), \(y = 8\). Năm điểm: \((0;0)\), \((\pm 1; 2)\), \((\pm 2; 8)\). Đủ để phác parabol mở lên.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Năm 2024, câu III.2: parabol \(y=x^2\) và đường thẳng \(y=(m-2)x+5\). Chứng minh chúng luôn cắt nhau tại hai điểm phân biệt. Thế \(y\), được phương trình bậc hai theo \(x\). \(\Delta>0\) với mọi \(m\) thì có hai giao điểm.</p>
        <p>Câu V các năm 2025 và 2026 là tìm giá trị lớn nhất hoặc nhỏ nhất của một hàm bậc hai, rồi chọn số nguyên cạnh đỉnh. Đồ thị vẫn là parabol của bài này.</p>
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
      { type: "mc", prompt: "y = −2x². Parabol", choices: ["Mở lên, đỉnh O","Mở xuống, đỉnh O","Mở lên, đỉnh (1;0)","Đường thẳng"], correct: 1, hint: "a < 0.", explain: "Mở xuống, đỉnh gốc." },
      { type: "num", prompt: "y = 3x². Tại x = 2, y bằng bao nhiêu?", answer: 12, hint: "3·4.", explain: "12. Điểm (−2; 12) cũng thuộc đồ thị." },
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
        <p><strong>Phương trình bậc hai một ẩn</strong> \(x\) có dạng \(ax^2 + bx + c = 0\) với \(a \neq 0\). Hệ số \(a = 0\) thì mất \(x^2\), thành bậc nhất. Phương trình có \(\left(\dfrac{1}{x}\right)^2\) thì ẩn là \(\dfrac{1}{x}\), không phải phương trình bậc hai theo \(x\).</p>
      </div>
      <div class="idea">
        <p><strong>Công thức từ đâu ra?</strong> Chia cho \(a\), chuyển \(c\), rồi thêm một số để vế trái thành bình phương:</p>
        \[
          \left(x + \dfrac{b}{2a}\right)^2 = \dfrac{b^2 - 4ac}{4a^2}.
        \]
        <p>Vế phải là \(\dfrac{\Delta}{4a^2}\), với \(\Delta = b^2 - 4ac\). Muốn có căn bậc hai, \(\Delta\) phải không âm.</p>
        <p>\(\Delta > 0\): hai căn, hai nghiệm \(x = \dfrac{-b \pm \sqrt{\Delta}}{2a}\). \(\Delta = 0\): một bình phương bằng 0, nghiệm kép \(x = -\dfrac{b}{2a}\). \(\Delta < 0\): không có căn bậc hai, vô nghiệm. Đừng khai căn một số âm.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên \(-4ac\) khi \(c\) âm: \(\Delta = b^2 - 4ac\) với \(c = -1\) là <em>cộng</em> \(4a\).</li>
          <li>Khai \(\sqrt{\Delta}\) khi \(\Delta < 0\) — dừng lại: vô nghiệm.</li>
          <li>Nhẩm nghiệm mà không kiểm tra \(\Delta \geq 0\) trước.</li>
        </ul>
      </div>
      <div class="idea">
        <p><strong>Dạng khuyết thì đừng dùng công thức cho nặng.</strong> Thiếu \(c\): đặt \(x\) làm nhân tử chung. Thiếu \(b\): \(x^2 = \dfrac{-c}{a}\), nếu vế phải không âm thì \(x = \pm\) căn ấy.</p>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\Delta = b^2 - 4ac\) với \(c\) âm thì sao? <em>— Ví dụ \(c = -1\), \(-4ac\) thành cộng \(4a\). Quên dấu trừ sẽ tính sai delta.</em></p>
        <p>\(\Delta < 0\) thì làm gì? <em>— Dừng lại: phương trình vô nghiệm. Không khai căn số âm.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Giải \(x^2 - 7x + 10 = 0\). Hệ số của \(x^2\) là \(1 \neq 0\), đúng là bậc hai.</p>
        <p>\(\Delta = 49 - 40 = 9 > 0\), hai nghiệm phân biệt. \(x = \dfrac{7 \pm 3}{2}\), nên \(x = 5\) hoặc \(x = 2\).</p>
        <p>Kiểm tra. \(x = 5\): \(25 - 35 + 10 = 0\). \(x = 2\): \(4 - 14 + 10 = 0\).</p>
        <p>Dạng khuyết \(x^2 - 9 = 0\): \(x^2 = 9\), nên \(x = 3\) hoặc \(x = -3\). Nghiệm âm vẫn là nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Giải \(2x^2 - 4x - 6 = 0\). Chia 2: \(x^2 - 2x - 3 = 0\). \(\Delta = 4 + 12 = 16\). \(x = \dfrac{2 \pm 4}{2}\), nên \(x = 3\) hoặc \(x = -1\). Kiểm tra: \(2 \cdot 9 - 12 - 6 = 0\), và \(2 + 4 - 6 = 0\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(x^2 + 2x + 5 = 0\). \(\Delta = 4 - 20 = -16 < 0\). Dừng. Không viết \(\sqrt{-16}\). Phương trình vô nghiệm. So với \(x^2 + 2x + 1 = 0\): \(\Delta = 0\), nghiệm kép \(x = -1\). Ba trường hợp của \(\Delta\) là ba bài khác nhau, đừng dùng một công thức cho cả ba.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(x^2 - 3x - 4 = 0\). \(\Delta = 9 - 4 \cdot 1 \cdot (-4) = 9 + 16 = 25\), không phải \(9 - 16\). Vì \(c\) âm, \(-4ac\) thành cộng. \(x = \dfrac{3 \pm 5}{2}\), nên \(x = 4\) hoặc \(x = -1\). Kiểm tra: \(16 - 12 - 4 = 0\), \(1 + 3 - 4 = 0\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> \(\Delta = b^2 - 4ac\). \(\Delta > 0\) hai nghiệm, \(\Delta = 0\) nghiệm kép, \(\Delta < 0\) dừng, không khai căn số âm.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Tính \(\Delta = b^2 - 4ac\). \(\Delta>0\) hai nghiệm, \(\Delta=0\) nghiệm kép, \(\Delta<0\) dừng. Công thức \(x = \dfrac{-b \pm \sqrt{\Delta}}{2a}\). Kiểm tra bằng thế lại.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(x^2 - x - 6 = 0\). \(\Delta = 1 + 24 = 25\). \(x = \dfrac{1 \pm 5}{2}\), nên \(x = 3\) hoặc \(x = -2\). Kiểm tra: \(9-3-6=0\), \(4+2-6=0\).</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Đề ít khi bảo giải một phương trình bậc hai trần. Nó đưa phương trình rồi hỏi biểu thức của hai nghiệm. Năm 2026 dùng \(x^2-3x+1=0\). Năm 2025 dùng \(x^2+8x-6=0\). Vẫn phải nhận ra đây là bậc hai, \(a\neq 0\), và \(\Delta>0\) trước khi nói có hai nghiệm.</p>
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
      { type: "num", prompt: "x² − 5x + 6 = 0. Tổng hai nghiệm bằng bao nhiêu?", answer: 5, hint: "Nhẩm 2 và 3, hoặc −b/a.", explain: "2 + 3 = 5." },
      { type: "mc", prompt: "Δ < 0. Kết luận", choices: ["Hai nghiệm thực","Nghiệm kép","Vô nghiệm thực","Vô số nghiệm"], correct: 2, hint: "Không khai căn số âm.", explain: "Vô nghiệm thực." },
    ],
  },
  {
    id: "c6-b20",
    num: 20,
    chapter: 6,
    title: "Định lí Viète và ứng dụng",
    summary: "Hai nghiệm cộng lại bằng −b/a và nhân lại bằng c/a, vì phương trình là a(x − x₁)(x − x₂) = 0.",
    body: String.raw`
      <p>Nếu đã biết phương trình có hai nghiệm \(x_1\) và \(x_2\), không cần tính từng nghiệm mới biết tổng và tích của chúng.</p>
      <div class="idea">
        <p><strong>Vì sao có công thức ấy?</strong> Phương trình có hai nghiệm thì viết được</p>
        \[
          ax^2 + bx + c = a(x - x_1)(x - x_2) = a\bigl(x^2 - (x_1 + x_2)x + x_1 x_2\bigr).
        \]
        <p>So hệ số: \(b = -a(x_1 + x_2)\) và \(c = a x_1 x_2\). Chia cho \(a\):</p>
        \[
          x_1 + x_2 = -\dfrac{b}{a}, \qquad x_1 x_2 = \dfrac{c}{a}.
        \]
        <p>Dấu trừ ở tổng là chỗ hay quên. Và chỉ dùng khi \(\Delta \geq 0\): không có nghiệm thì không có tổng để nói.</p>
        <p>Thế \(x = 1\) vào phương trình được \(a + b + c\). Nếu tổng ấy bằng 0 thì \(x = 1\) là một nghiệm, nghiệm kia bằng tích \(\dfrac{c}{a}\). Thế \(x = -1\) được \(a - b + c\). Nếu bằng 0 thì \(x = -1\) là một nghiệm, nghiệm kia là \(-\dfrac{c}{a}\).</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên dấu trừ: tổng là \(-\dfrac{b}{a}\), không phải \(\dfrac{b}{a}\).</li>
          <li>Áp dụng Viète mà chưa kiểm tra phương trình <em>có nghiệm</em> (\(\Delta \geq 0\)).</li>
          <li>Nhầm \(a + b + c = 0\) với \(a - b + c = 0\): nghiệm 1 hoặc −1.</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tổng hai nghiệm của \(ax^2 + bx + c = 0\) là gì? <em>— \(-\frac{b}{a}\), có dấu trừ. Với \(x^2 - 7x + 10 = 0\), tổng là 7, tích là 10.</em></p>
        <p>Khi nào mới được dùng Viète? <em>— Khi đã chứng minh phương trình có nghiệm, tức \(\Delta \ge 0\). Không có nghiệm thì không có tổng để nói.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Với \(x^2 - 7x + 10 = 0\), Viète đọc ngay tổng hai nghiệm là 7 và tích là 10. Hai số cộng được 7, nhân được 10 là 2 và 5. Không cần công thức nghiệm.</p>
        <p>Nhẩm khi \(a + b + c = 0\): \(x^2 - 3x + 2 = 0\) có \(1 - 3 + 2 = 0\), nên \(x = 1\) là một nghiệm. Nghiệm kia bằng tích, tức 2. Kiểm tra: \((x - 1)(x - 2) = x^2 - 3x + 2\).</p>
        <p>Khi \(a - b + c = 0\): \(x^2 + 3x + 2 = 0\) có \(1 - 3 + 2 = 0\), nên \(x = -1\) là một nghiệm. Nghiệm kia là \(-2\), vì tích bằng 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(x^2 - 6x + 8 = 0\). \(\Delta = 36 - 32 = 4 > 0\). Tổng 6, tích 8. Hai số là 2 và 4. \(x_1^2 + x_2^2 = 36 - 16 = 20\). Kiểm tra: \(4 - 12 + 8 = 0\), \(16 - 24 + 8 = 0\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(2x^2 - 5x + 3 = 0\). \(a + b + c = 2 - 5 + 3 = 0\), nên \(x = 1\) là một nghiệm. Nghiệm kia bằng \(\dfrac{c}{a} = \dfrac{3}{2}\). Kiểm tra: \(2 \cdot \dfrac{9}{4} - 5 \cdot \dfrac{3}{2} + 3 = \dfrac{9}{2} - \dfrac{15}{2} + 3 = 0\). Không cần công thức nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(x^2 + 6x + 5 = 0\). Tổng hai nghiệm là \(-6\), không phải 6. Tích là 5. Hai nghiệm \(-1\) và \(-5\). Kiểm tra: \(1 - 6 + 5 = 0\), \(25 - 30 + 5 = 0\). Bỏ dấu trừ ở tổng sẽ đi tìm 1 và 5, không thỏa phương trình.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tổng \(-\dfrac{b}{a}\), tích \(\dfrac{c}{a}\). Có dấu trừ ở tổng. Chỉ dùng khi \(\Delta \geq 0\).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Tổng \(-\dfrac{b}{a}\), tích \(\dfrac{c}{a}\). Đưa \(x_1^2+x_2^2\) về \((x_1+x_2)^2-2x_1x_2\). Chỉ dùng khi đã có nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> \(x^2 - 7x + 10 = 0\). Tổng 7, tích 10. \(x_1^2+x_2^2 = 49-20=29\). \(\dfrac{1}{x_1}+\dfrac{1}{x_2}=\dfrac{7}{10}\).</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu III.3.</strong> Năm 2026: \(x^2-3x+1=0\) có hai nghiệm \(x_1, x_2\). Tính</p>
        \[
          Q = \dfrac{3x_2-1}{x_1}+\dfrac{3x_1}{x_2}-x_1.
        \]
        <p>Tổng bằng 3, tích bằng 1. Từ phương trình, \(3x_2-1=x_2^2\). Quy đồng rồi thế, được \(Q=18\). Không cần tìm từng nghiệm.</p>
        <p>Năm 2025: \(x^2+8x-6=0\), tìm \(m\) để \(\dfrac{70-mx_1^2}{x_2}=x_1+mx_2\). Cũng đưa về tổng và tích, đáp án \(m=1\). Năm 2024 hỏi \(x_1+5x_2=0\) với hoành độ giao điểm của đường thẳng và parabol. Đáp án \(m=-2\) hoặc \(m=6\).</p>
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
      { type: "num", prompt: "x² − 4x + 1 = 0 có hai nghiệm. Tích hai nghiệm bằng bao nhiêu?", answer: 1, hint: "c/a.", explain: "1." },
      { type: "num", prompt: "Tổng 6, tích 8. x1² + x2² bằng bao nhiêu?", answer: 20, hint: "36 − 16.", explain: "20." },
    ],
  },
  {
    id: "c6-b21",
    num: 21,
    chapter: 6,
    title: "Giải bài toán bằng cách lập phương trình",
    summary: "Một mối liên hệ thì một ẩn đủ. Giải xong phải loại nghiệm không phải độ dài, số người, hay số dương.",
    body: String.raw`
      <p>Bài 3 lập hệ vì đề kể hai câu. Nếu chỉ có một mối liên hệ, một ẩn là đủ. Diện tích hình chữ nhật là dài nhân rộng. Viết dài theo rộng, phương trình thành bậc hai.</p>
      
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Sân bóng hình chữ nhật: chiều rộng x mét, chiều dài x + 30 mét, diện tích 1800 mét vuông">
          <rect x="60" y="40" width="240" height="80" fill="#83C167" fill-opacity="0.12" stroke="#83C167" stroke-width="2"/>
          <text x="180" y="84" font-size="12" fill="#FC6255" text-anchor="middle">Diện tích 1 800 m²</text>
          <text x="180" y="102" font-size="12" fill="#FC6255" text-anchor="middle">x(x + 30) = 1800</text>
          <line x1="60" y1="40" x2="300" y2="40" stroke="#58C4DD" stroke-width="1.5"/>
          <text x="180" y="30" font-size="12" fill="#58C4DD" text-anchor="middle">chiều dài x + 30</text>
          <line x1="60" y1="40" x2="60" y2="120" stroke="#58C4DD" stroke-width="1.5"/>
          <text x="52" y="86" font-size="12" fill="#58C4DD">x</text>
          <text x="52" y="100" font-size="12" fill="#58C4DD">(chiều rộng)</text>
        </svg>
        <figcaption>Chiều rộng x, chiều dài x + 30, diện tích x(x + 30) = 1800 → x² + 30x − 1800 = 0; x = 30, chiều dài 60.</figcaption>
      </figure>
<div class="definition">
        <p><strong>Giải bài toán bằng cách lập phương trình</strong> là quy trình: đặt ẩn và ghi điều kiện, viết mọi đại lượng theo ẩn đó, lập một phương trình, giải rồi đối chiếu nghiệm với điều kiện và kết luận.</p>
      </div>
<div class="idea">
        <p><strong>Bước cuối không được bỏ.</strong> Chọn ẩn và ghi điều kiện ngay: dương, nhỏ hơn một số, là số tự nhiên. Viết mọi đại lượng khác theo ẩn ấy, lập một phương trình, giải. Rồi đối chiếu điều kiện. Nghiệm âm của phương trình không phải chiều rộng.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhận nghiệm âm cho đại lượng độ dài, số người… — phải loại theo điều kiện ẩn.</li>
          <li>Quên điều kiện \(x > 0\) nên không biết chọn nghiệm nào ở Bước 3.</li>
          <li>Lập sai phương trình diện tích: dài × rộng, không phải (dài + rộng) × 2.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Sân bóng.</strong> Chiều rộng nhỏ hơn chiều dài 30 m, diện tích 1 800 m². Gọi chiều rộng \(x\) mét, \(x > 0\). Chiều dài là \(x + 30\). \(x(x + 30) = 1800\), tức \(x^2 + 30x - 1800 = 0\).</p>
        <p>\(\Delta = 900 + 7200 = 8100 = 90^2\). \(x = \dfrac{-30 \pm 90}{2}\), nên \(x = 30\) hoặc \(x = -60\). \(-60\) không phải chiều rộng, loại. Nhận \(x = 30\). Chiều dài 60 m. Kiểm tra: \(60 - 30 = 30\) và \(30 \cdot 60 = 1800\).</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Nghiệm âm của phương trình có phải đáp số không? <em>— Không, nếu nó là độ dài, số người… Phải loại theo điều kiện ẩn đã ghi từ đầu.</em></p>
        <p>Diện tích hình chữ nhật lập phương trình thế nào? <em>— dài × rộng. (Dài + rộng) × 2 là chu vi, không phải diện tích.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình chữ nhật có chu vi 28 m và diện tích 48 m². Tìm hai cạnh.</p>
        <p>Gọi chiều rộng là \(x\) mét, với \(0 < x < 14\). Nửa chu vi là 14, nên chiều dài là \(14 - x\). Diện tích cho \(x(14 - x) = 48\), tức \(x^2 - 14x + 48 = 0\).</p>
        <p>\(\Delta = 196 - 192 = 4\), \(x = \dfrac{14 \pm 2}{2}\), nên \(x = 8\) hoặc \(x = 6\). Hai giá trị đổi vai: cạnh 6 m và 8 m.</p>
        <p>Đối chiếu điều kiện: cả hai dương và nhỏ hơn 14. Chu vi \(2(6 + 8) = 28\), diện tích 48. Nhận một hình chữ nhật, không phải hai đáp số khác nhau.</p>
      </div>
      <div class="example">
        <p><strong>Không phải lúc nào cũng là hình chữ nhật.</strong> Tìm hai số nguyên liên tiếp có tích 56.</p>
        <p>Gọi số nhỏ hơn là \(x\), số kia là \(x + 1\). Tích: \(x(x + 1) = 56\), tức \(x^2 + x - 56 = 0\). \(\Delta = 1 + 224 = 225 = 15^2\). \(x = \dfrac{-1 \pm 15}{2}\), nên \(x = 7\) hoặc \(x = -8\).</p>
        <p>Cả hai đều là số nguyên. Cặp \(7\) và \(8\): tích 56. Cặp \(-8\) và \(-7\): tích cũng 56. Nếu đề chỉ hỏi số nguyên, nhận cả hai cặp. Nếu đề hỏi số tự nhiên, loại cặp âm. Điều kiện quyết định, không phải cảm tính.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình chữ nhật chu vi 20 m, diện tích 21 m². Nửa chu vi là 10. Gọi một cạnh \(x\), cạnh kia \(10 - x\), \(0 < x < 10\). \(x(10 - x) = 21\), tức \(x^2 - 10x + 21 = 0\). \((x - 3)(x - 7) = 0\). Cạnh 3 m và 7 m. Kiểm tra: chu vi 20, diện tích 21.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hai số nguyên dương liên tiếp có tích 72. Gọi số nhỏ \(x\), \(x > 0\). \(x(x + 1) = 72\), \(x^2 + x - 72 = 0\). \(\Delta = 1 + 288 = 289 = 17^2\). \(x = \dfrac{-1 + 17}{2} = 8\). Nghiệm kia \(\dfrac{-1 - 17}{2} = -9\), loại vì không dương. Cặp 8 và 9. Kiểm tra: \(8 \cdot 9 = 72\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Quãng đường 90 km, vận tốc 45 km/h. Thời gian là \(\dfrac{90}{45} = 2\) giờ, không phải \(45 \cdot 90\). Và nếu phương trình cho thêm nghiệm âm, độ dài hoặc số người thì loại nghiệm đó.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Một mối liên hệ, một ẩn. Thời gian bằng quãng đường chia vận tốc. Ghi điều kiện trước, đối chiếu sau khi giải.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Một mối liên hệ, một ẩn. Ghi điều kiện dương. Diện tích, chu vi, số liên tiếp, chuyển động: lập phương trình bậc hai, loại nghiệm âm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Hình chữ nhật chu vi 24 m, diện tích 32 m². Nửa chu vi 12. \(x(12-x)=32\), \(x^2-12x+32=0\). \((x-4)(x-8)=0\). Cạnh 4 m và 8 m. Cả hai dương, nhận.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu III.1.</strong> Một mối liên hệ, một ẩn. Năm 2026: 3 ngày may đúng kế hoạch, 7 ngày sau mỗi ngày hơn kế hoạch 5 áo, cả 10 ngày được 335 áo. Gọi \(x\) là số áo mỗi ngày theo kế hoạch: \(3x+7(x+5)=335\).</p>
        <p>Năm 2025: cùng quãng đường, đi 60 km/h, về 40 km/h, chiều đi ít hơn 1 giờ. Một phương trình về thời gian. Năm 2024: chở 15 tấn, đổi từ xe nhỏ sang xe lớn thì giảm 2 xe, mỗi xe lớn chở hơn 2 tấn. Đề cho phép lập một phương trình hoặc một hệ.</p>
      </div>
      
    `,
    exercises: [
      {
        type: "mc",
        prompt: "Hai số nguyên liên tiếp có tích 56. Số nhỏ hơn của cặp dương bằng bao nhiêu?",
        choices: ["7", "8", "−8", "56"],
        correct: 0,
        hint: "Gọi số nhỏ hơn là x, số kia là x + 1. Tích bằng 56.",
        explain: "x(x + 1) = 56 cho x = 7 hoặc x = −8. Cặp dương là 7 và 8, số nhỏ hơn là 7.",
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
      { type: "num", prompt: "Hai số nguyên dương liên tiếp có tích 72. Số nhỏ bằng bao nhiêu?", answer: 8, hint: "n(n+1)=72.", explain: "8 và 9." },
      { type: "mc", prompt: "Phương trình cho x = 9 và x = −4 cho độ dài cạnh. Nhận", choices: ["Cả hai", "Chỉ 9", "Chỉ −4", "Không nhận"], correct: 1, hint: "Độ dài dương.", explain: "Loại −4." },
    ],
  },

  // ============ CHƯƠNG VII (Tập 2) ============
  {
    id: "c7-b22",
    num: 22,
    chapter: 7,
    title: "Bảng tần số và biểu đồ tần số",
    summary: "Tần số là số lần một giá trị xuất hiện. Cộng các tần số phải ra đúng cỡ mẫu, nếu không là đã đếm sót.",
    body: String.raw`
      <p>Huy ghi cỡ giày của 22 bạn. Dãy số dài không cho biết ngay cỡ nào cần mua nhiều. Đếm từng cỡ: đó là tần số. Cỡ mẫu là 22, vì có 22 số đã ghi, không phải vì có 5 cỡ khác nhau.</p>
      <div class="definition">
        <p><strong>Tần số</strong> của một giá trị là số lần giá trị đó xuất hiện trong mẫu. <strong>Bảng tần số</strong> liệt kê từng giá trị kèm tần số của nó; tổng các tần số luôn bằng cỡ mẫu \(n\).</p>
      </div>
<div class="idea">
        <p><strong>Phép kiểm tra.</strong> Cộng mọi tần số. Phải ra đúng cỡ mẫu. Thiếu là đã bỏ sót một bạn; thừa là đã đếm một bạn hai lần. Biểu đồ cột chỉ là bảng ấy vẽ ra: trục ngang là giá trị, chiều cao cột là số lần.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Tính nhầm \(n\): tổng các tần số phải đúng bằng cỡ mẫu.</li>
          <li>Bỏ sót giá trị khi đếm — nên gạch chéo từng giá trị khi liệt kê.</li>
          <li>Nhầm tần số (số lần xuất hiện) với giá trị của dữ liệu.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>22 bạn nam.</strong> Cỡ 36 xuất hiện 5 lần, 37 bốn lần, 38 tám lần, 39 hai lần, 40 ba lần. \(5 + 4 + 8 + 2 + 3 = 22\). Bảng đúng. Cỡ 38 cao nhất, mua nhiều đôi cỡ ấy nhất.</p>
        <table>
          <tr><th>Cỡ giày</th><td>36</td><td>37</td><td>38</td><td>39</td><td>40</td></tr>
          <tr><td>Tần số</td><td>5</td><td>4</td><td>8</td><td>2</td><td>3</td></tr>
        </table>
      </div>
      <figure class="figure" data-animation="c7-b22-chart">
        <svg viewBox="0 0 360 210" role="img" aria-label="Biểu đồ cột tần số cỡ giày của 22 bạn" id="fig-c7-b22">
          <line x1="60" y1="30" x2="60" y2="170" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="140" stroke-dashoffset="140" opacity="0"/>
          <line x1="60" y1="170" x2="345" y2="170" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="285" stroke-dashoffset="285" opacity="0"/>
          <text x="30" y="56" font-size="12" fill="#9A72AC" opacity="0">Tần số</text>
          <line x1="60" y1="95" x2="345" y2="95" stroke="#DDDDDD" stroke-opacity="0.25" stroke-width="1" opacity="0"/>
          <text x="54" y="98" font-size="12" text-anchor="end" opacity="0">4</text>
          <text x="54" y="50" font-size="12" text-anchor="end" opacity="0">8</text>
          <rect x="90" y="95" width="40" height="75" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5" opacity="0"/>
          <rect x="145" y="110" width="40" height="60" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5" opacity="0"/>
          <rect x="200" y="50" width="40" height="120" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5" opacity="0"/>
          <rect x="255" y="140" width="40" height="30" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5" opacity="0"/>
          <rect x="310" y="125" width="40" height="45" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5" opacity="0"/>
          <text x="110" y="92" font-size="12" text-anchor="middle" opacity="0">5</text>
          <text x="165" y="107" font-size="12" text-anchor="middle" opacity="0">4</text>
          <text x="220" y="47" font-size="12" text-anchor="middle" opacity="0">8</text>
          <text x="275" y="137" font-size="12" text-anchor="middle" opacity="0">2</text>
          <text x="330" y="122" font-size="12" text-anchor="middle" opacity="0">3</text>
          <text x="110" y="186" font-size="12" text-anchor="middle" opacity="0">36</text>
          <text x="165" y="186" font-size="12" text-anchor="middle" opacity="0">37</text>
          <text x="220" y="186" font-size="12" text-anchor="middle" opacity="0">38</text>
          <text x="275" y="186" font-size="12" text-anchor="middle" opacity="0">39</text>
          <text x="330" y="186" font-size="12" text-anchor="middle" opacity="0">40</text>
          <text x="180" y="202" font-size="12" fill="#9A72AC" text-anchor="middle" opacity="0">Cỡ giày</text>
        </svg>
        <figcaption>Biểu đồ cột vẽ lại bảng tần số: cột 38 cao nhất (8), cần mua nhiều cỡ 38 nhất.</figcaption>
      </figure>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Biểu đồ tần số giúp "nhìn thấy" tần số: <em>biểu đồ cột</em> vẽ các cột cao bằng tần số tương ứng; <em>biểu đồ đoạn thẳng</em> nối các điểm cao tương ứng. Tổng tất cả các tần số luôn bằng cỡ mẫu \(n\) — kiểm tra nhanh bảng có lập đúng không.</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Cỡ mẫu là gì? <em>— Số số liệu đã ghi, bằng tổng các tần số. Không phải số giá trị khác nhau.</em></p>
        <p>Cộng mọi tần số phải ra gì? <em>— Đúng cỡ mẫu. Thiếu là đã bỏ sót một bạn; thừa là đếm một bạn hai lần.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cỡ giày của 8 bạn: 38, 39, 38, 40, 39, 39, 38, 41. Cỡ mẫu là 8, vì có 8 số, không phải vì có 4 cỡ khác nhau.</p>
        <p>Đếm: 38 xuất hiện 3 lần, 39 xuất hiện 3 lần, 40 một lần, 41 một lần. Tổng tần số \(3 + 3 + 1 + 1 = 8\). Cộng không ra 8 thì đã đếm sót.</p>
        <p>Cần mua nhiều nhất là cỡ 38 và 39, mỗi cỡ 3 đôi. Biểu đồ cột: trục ngang là cỡ giày, chiều cao cột là tần số.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Sáu số: 2, 3, 2, 5, 3, 2. Cỡ mẫu là 6, không phải 3. Tần số của 2 là 3, của 3 là 2, của 5 là 1. Cộng \(3 + 2 + 1 = 6\). Khớp thì bảng đúng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Nếu đếm giá trị 2 thành 4 lần, tổng tần số thành 7, lớn hơn 6. Đã đếm thừa. Gạch từng số khi đếm, rồi cộng lại. Giá trị 5 và tần số 1 là hai cột khác nhau: 5 là dữ liệu, 1 là số lần.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tám số, chỉ ba giá trị khác nhau. Cỡ mẫu là 8, không phải 3. Nếu các tần số cộng được 7, đã đếm sót một số. Giá trị 5 và tần số 1 nằm ở hai chỗ: 5 là dữ liệu, 1 là số lần.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tần số là số lần xuất hiện. Tổng mọi tần số phải bằng cỡ mẫu. Biểu đồ cột chỉ vẽ lại bảng đó.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Cỡ mẫu bằng tổng tần số. Tần số là số lần, không phải giá trị. Biểu đồ cột chỉ vẽ lại bảng.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Câu I hỏi tần số trước, rồi mới hỏi tần số tương đối. Năm 2026, nhóm \([150;\ 155)\) có 14 học sinh. Số 14 ấy chính là tần số: đếm số lần, chưa chia cho 50.</p>
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
      { type: "num", prompt: "Tần số 4, 7, 9. Cỡ mẫu bằng bao nhiêu?", answer: 20, hint: "Cộng tần số.", explain: "20." },
      { type: "mc", prompt: "Giá trị 8 xuất hiện 3 lần. Số 3 là", choices: ["Giá trị","Tần số","Cỡ mẫu","Phần trăm"], correct: 1, hint: "Số lần.", explain: "Tần số." },
    ],
  },
  {
    id: "c7-b23",
    num: 23,
    chapter: 7,
    title: "Bảng tần số tương đối và biểu đồ tần số tương đối",
    summary: "Tần số đếm số lần. Tần số tương đối chia cho cỡ mẫu, để so hai nhóm không cùng số người.",
    body: String.raw`
      <p>Sáu bạn trong lớp 8 người và chín bạn trong lớp 20 người: chín lớn hơn sáu, nhưng lớp thứ hai không "đi cỡ ấy nhiều hơn". Muốn so hai mẫu khác cỡ, chia số lần cho cỡ mẫu.</p>
      <div class="definition">
        <p>Tần số tương đối, còn gọi là tần suất, của giá trị \(x_i\) là</p>
        \[
          f_i = \dfrac{m_i}{n} \cdot 100\%.
        \]
        <p>\(m_i\) là số lần, \(n\) là cỡ mẫu. Các giá trị chia hết mẫu, nên các phần trăm cộng lại phải thành 100%. Lệch 100% là làm tròn quá sớm hoặc chia sai mẫu số.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên nhân 100% khi đề yêu cầu tỉ lệ phần trăm.</li>
          <li>Làm tròn quá sớm khiến tổng không đúng 100%.</li>
          <li>Nhầm tần số \(m\) với tần số tương đối \(f\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ba mươi ngày.</strong> Tốt 8, Trung bình 13, Kém 5, Xấu 4. Tổng lần \(8 + 13 + 5 + 4 = 30\), đúng cỡ mẫu. Tỉ lệ: \(\dfrac{8}{30} \approx 26{,}7\%\), \(\dfrac{13}{30} \approx 43{,}3\%\), \(\dfrac{5}{30} \approx 16{,}7\%\), \(\dfrac{4}{30} \approx 13{,}3\%\). Cộng \(26{,}7 + 43{,}3 + 16{,}7 + 13{,}3 = 100\). Tốt không phải 8%: 8 là số ngày, không phải phần trăm.</p>
      </div>
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Biểu đồ cột tần số tương đối của 30 ngày">
          <line x1="60" y1="30" x2="60" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="170" x2="345" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <text x="28" y="56" font-size="12" fill="#9A72AC">%</text>
          <text x="54" y="40" font-size="12" text-anchor="end">45</text>
          <text x="54" y="82" font-size="12" text-anchor="end">25</text>
          <text x="54" y="124" font-size="12" text-anchor="end">10</text>
          <rect x="80" y="68" width="55" height="102" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5"/>
          <rect x="155" y="38" width="55" height="132" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <rect x="230" y="92" width="55" height="78" fill="#83C167" fill-opacity="0.35" stroke="#83C167" stroke-width="1.5"/>
          <rect x="305" y="104" width="55" height="66" fill="#9A72AC" fill-opacity="0.35" stroke="#9A72AC" stroke-width="1.5"/>
          <text x="107" y="60" font-size="12" text-anchor="middle">26,7%</text>
          <text x="182" y="30" font-size="12" text-anchor="middle">43,3%</text>
          <text x="257" y="84" font-size="12" text-anchor="middle">16,7%</text>
          <text x="332" y="96" font-size="12" text-anchor="middle">13,3%</text>
          <text x="107" y="186" font-size="12" text-anchor="middle">Tốt</text>
          <text x="182" y="186" font-size="12" text-anchor="middle">TB</text>
          <text x="257" y="186" font-size="12" text-anchor="middle">Kém</text>
          <text x="332" y="186" font-size="12" text-anchor="middle">Xấu</text>
        </svg>
        <figcaption>Mỗi cột cao theo phần trăm của nhóm đó; tổng các phần trăm bằng 100%.</figcaption>
      </figure>

      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>3 bạn trong nhóm 8 bạn là bao nhiêu phần trăm? <em>— \(37{,}5\%\), không phải 3%. Tần số tương đối là \(\frac{m}{n} \cdot 100\%\).</em></p>
        <p>So hai nhóm khác cỡ thì dùng số lần hay phần trăm? <em>— Dùng phần trăm (tần số tương đối). Chín lớn hơn ba, nhưng 30% nhỏ hơn 37,5%.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cùng 8 bạn ở trên. Tần số tương đối của cỡ 39 là \(\dfrac{3}{8} = 37{,}5\%\). Cỡ 40 là \(\dfrac{1}{8} = 12{,}5\%\). Các tỉ lệ của một mẫu phải cộng lại thành 100%.</p>
        <p>So hai lớp: lớp A có 6 trong 8 bạn đi cỡ 39, tức 75%. Lớp B có 9 trong 20 bạn, tức 45%. Lớp B có nhiều bạn hơn, nhưng tỉ lệ nhỏ hơn. Muốn so hai mẫu khác cỡ, dùng tần số tương đối, không dùng số lần xuất hiện.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Cùng sáu số trên. Tần số tương đối của 2 là \(\dfrac{3}{6} = 50\%\). Của 3 là \(\dfrac{2}{6} \approx 33{,}3\%\). Của 5 là \(\dfrac{1}{6} \approx 16{,}7\%\). Cộng lại 100%.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Lớp A có 4 bạn trong 10 bạn thích môn Toán, tức 40%. Lớp B có 9 bạn trong 30 bạn, tức 30%. B có nhiều bạn hơn, nhưng tỉ lệ nhỏ hơn. So hai lớp phải dùng phần trăm, không dùng số lần.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 3 bạn trong nhóm 8 bạn là \(37{,}5\%\), không phải 3%. Lớp kia có 9/30 = 30%. Chín lớn hơn ba, nhưng 30% nhỏ hơn 37,5%. So hai nhóm khác cỡ thì dùng phần trăm.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tần số tương đối là \(\dfrac{m}{n} \cdot 100\%\). Các phần trăm của một mẫu cộng lại thành 100%.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Tần số tương đối \(\dfrac{m}{n}\cdot 100\%\). So hai mẫu khác cỡ thì dùng phần trăm, không dùng số lần.</p>
      </div>

      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> 8 lần trên 25 lần là \(32\%\), không phải 8%. Nhóm kia 12/50 = 24%. 12 lớn hơn 8 nhưng 24% nhỏ hơn 32%.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Năm 2025, 300 học sinh, nhóm \([12;\ 16)\) có 75 em. Tần số tương đối là \(\dfrac{75}{300}\cdot 100\% = 25\%\). Năm 2026, nhóm \([150;\ 155)\) có 14 em trong 50 em: \(\dfrac{14}{50}\cdot 100\% = 28\%\). Đừng viết 14% hay 75%.</p>
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
      { type: "num", prompt: "6 lần trên 24 lần. Tần số tương đối bằng bao nhiêu phần trăm?", answer: 25, hint: "6/24.", explain: "25%." },
      { type: "mc", prompt: "So hai lớp khác sĩ số, nên dùng", choices: ["Tần số thô","Tần số tương đối","Cỡ mẫu lớn hơn","Giá trị lớn nhất"], correct: 1, hint: "Phần trăm.", explain: "Tần số tương đối." },
    ],
  },
  {
    id: "c7-b24",
    num: 24,
    chapter: 7,
    title: "Bảng tần số, tần số tương đối ghép nhóm và biểu đồ",
    summary: "Số liệu liên tục được gom thành nhóm [a; b). Ngoặc vuông lấy đầu trái, ngoặc tròn không lấy đầu phải, để không ai bị đếm hai lần.",
    body: String.raw`
      <p>Chiều cao tính bằng centimét không rơi vào vài giá trị rời. Gom thành nhóm thì mới nhìn được. Nhóm \([155;\ 158)\) lấy 155 và mọi số lớn hơn hoặc bằng 155, nhưng không lấy 158. 158 sang nhóm sau.</p>
      <div class="definition">
        <p><strong>Nhóm</strong> \([a; b)\) gồm mọi số lớn hơn hoặc bằng \(a\) và nhỏ hơn \(b\). <strong>Bảng tần số ghép nhóm</strong> liệt kê tần số (hay tần số tương đối) của từng nhóm; cộng các tần số lại phải bằng cỡ mẫu \(n\), cộng các phần trăm phải bằng 100%.</p>
      </div>
<div class="idea">
        <p><strong>Vì sao không lấy cả hai đầu?</strong> Nếu cả \([155;\ 158]\) và \([158;\ 161)\) đều nhận 158, bạn cao đúng 158 cm bị đếm hai lần. Tổng tần số sẽ lớn hơn cỡ mẫu. Ngoặc vuông lấy, ngoặc tròn bỏ. Cộng tần số các nhóm vẫn phải ra \(n\), và các phần trăm vẫn phải ra 100%.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Cho giá trị đầu mút vào cả hai nhóm: 158 chỉ thuộc [158; 161), không thuộc [155; 158).</li>
          <li>Quên tính lại \(n\) = tổng các tần số của các nhóm.</li>
          <li>Vẽ biểu đồ cột mà trục dọc không theo tỉ lệ phần trăm.</li>
        </ul>
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
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Điểm 10 thuộc nhóm nào trong \([0;\ 10)\) và \([10;\ 20)\)? <em>— Nhóm \([10;\ 20)\). Kí hiệu \([a;\ b)\) lấy \(a\), không lấy \(b\); mỗi giá trị vào đúng một nhóm.</em></p>
        <p>Cho giá trị đầu mút vào cả hai nhóm thì sao? <em>— Một bạn bị đếm hai lần, tổng tần số lớn hơn cỡ mẫu.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Thời gian tự học của 40 bạn được gom nhóm: \([0;\ 1)\) có 10 bạn, \([1;\ 2)\) có 15, \([2;\ 3)\) có 8, \([3;\ 4)\) có 7. Tổng \(10 + 15 + 8 + 7 = 40\).</p>
        <p>Tần số tương đối: 25%, 37,5%, 20% và 17,5%. Cộng lại 100%.</p>
        <p>Bạn học đúng 2 giờ thuộc nhóm \([2;\ 3)\), không thuộc \([1;\ 2)\). Ngoặc vuông lấy đầu mút trái; ngoặc tròn không lấy đầu mút phải.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Điểm của 20 bạn: \([0;\ 10)\) có 4, \([10;\ 20)\) có 6, \([20;\ 30)\) có 10. Tổng 20. Bạn được đúng 10 điểm thuộc \([10;\ 20)\), không thuộc \([0;\ 10)\). Nhóm \([20;\ 30)\) chiếm \(\dfrac{10}{20} = 50\%\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Điểm 19,9 thuộc \([10;\ 20)\). Điểm 20 thuộc \([20;\ 30)\). Nếu cả hai nhóm đều nhận 20, một bạn bị đếm hai lần và tổng tần số vượt 20. Ngoặc vuông lấy đầu trái, ngoặc tròn bỏ đầu phải.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Nhóm \([0;\ 10)\) và \([10;\ 20)\). Điểm 10 chỉ thuộc nhóm sau. Cho vào cả hai thì một bạn bị đếm hai lần, tổng tần số lớn hơn số bạn.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> \([a;\ b)\) lấy \(a\), không lấy \(b\). Mỗi giá trị vào đúng một nhóm. Cộng tần số các nhóm vẫn phải ra cỡ mẫu.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> \([a; b)\) lấy \(a\), không lấy \(b\). Mỗi giá trị vào đúng một nhóm. Cộng tần số các nhóm ra đúng cỡ mẫu.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu I.1.</strong> Năm 2026, chiều cao 50 học sinh lớp 6 (cm):</p>
        <table>
          <tr><th>Chiều cao</th><td>\([140;\ 145)\)</td><td>\([145;\ 150)\)</td><td>\([150;\ 155)\)</td><td>\([155;\ 160)\)</td><td>\([160;\ 165)\)</td></tr>
          <tr><th>Số học sinh</th><td>10</td><td>18</td><td>14</td><td>6</td><td>2</td></tr>
        </table>
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Biểu đồ cột tần số tương đối ghép nhóm chiều cao">
          <line x1="60" y1="30" x2="60" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="170" x2="345" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <text x="30" y="50" font-size="12" fill="#9A72AC">%</text>
          <text x="54" y="42" font-size="12" text-anchor="end">40</text>
          <text x="54" y="72" font-size="12" text-anchor="end">30</text>
          <text x="54" y="112" font-size="12" text-anchor="end">10</text>
          <rect x="75" y="120" width="60" height="50" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5"/>
          <rect x="140" y="62" width="60" height="108" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <rect x="205" y="45" width="60" height="125" fill="#83C167" fill-opacity="0.35" stroke="#83C167" stroke-width="1.5"/>
          <rect x="270" y="95" width="60" height="75" fill="#9A72AC" fill-opacity="0.35" stroke="#9A72AC" stroke-width="1.5"/>
          <text x="105" y="116" font-size="12" text-anchor="middle">12,5%</text>
          <text x="170" y="58" font-size="12" text-anchor="middle">30%</text>
          <text x="235" y="41" font-size="12" text-anchor="middle">37,5%</text>
          <text x="300" y="91" font-size="12" text-anchor="middle">20%</text>
          <text x="105" y="186" font-size="12" text-anchor="middle">[155;158)</text>
          <text x="170" y="186" font-size="12" text-anchor="middle">[158;161)</text>
          <text x="235" y="186" font-size="12" text-anchor="middle">[161;164)</text>
          <text x="300" y="186" font-size="12" text-anchor="middle">[164;167)</text>
        </svg>
        <figcaption>Biểu đồ tần số tương đối ghép nhóm: cột cao theo phần trăm của nhóm [161;164) là 37,5%.</figcaption>
      </figure>

        <p>Hỏi tần số và tần số tương đối của nhóm \([150;\ 155)\). Cộng hàng dưới được \(10+18+14+6+2=50\). Tần số là 14. Tần số tương đối là 28%.</p>
        <p>Năm 2025 hỏi cùng dạng với thời gian tự học của 300 học sinh. Nhóm \([12;\ 16)\) có 75 em, tần số tương đối 25%. Giá trị 16 không thuộc nhóm đó.</p>
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
      { type: "mc", prompt: "Điểm 10 thuộc nhóm nào: [0; 10) hay [10; 20)?", choices: ["[0; 10)","[10; 20)","Cả hai","Không nhóm nào"], correct: 1, hint: "Ngoặc tròn bỏ 10 ở nhóm trước.", explain: "[10; 20)." },
      { type: "num", prompt: "Năm nhóm tần số 5, 8, 12, 9, 6. Cỡ mẫu bằng bao nhiêu?", answer: 40, hint: "Cộng.", explain: "40." },
    ],
  },

  // ============ CHƯƠNG VIII (Tập 2) ============
  {
    id: "c8-b25",
    num: 25,
    chapter: 8,
    title: "Phép thử ngẫu nhiên và không gian mẫu",
    summary: "Không biết trước kết quả, nhưng liệt kê được hết. Danh sách ấy là không gian mẫu. Có thứ tự thì SN khác NS.",
    body: String.raw`
      <p>Rút thăm hai phần quà cho 2 trong 4 người: không biết trước ai được, nhưng viết được mọi cách có thể xảy ra. Phép thử là việc ấy. Tập mọi kết quả có thể là không gian mẫu \(\Omega\).</p>
      
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Bảng liên kết gieo xúc xắc và tung đồng xu: 6 nhân 2 bằng 12 kết quả">
          <line x1="60" y1="40" x2="60" y2="180" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="180" x2="340" y2="180" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="40" x2="340" y2="40" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="180" x2="340" y2="180" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="200" y1="40" x2="200" y2="180" stroke="#DDDDDD" stroke-width="2"/>
          <text x="130" y="30" font-size="12" fill="#9A72AC" text-anchor="middle">Xúc xắc 1–6</text>
          <text x="270" y="30" font-size="12" fill="#9A72AC" text-anchor="middle">Đồng xu</text>
          <line x1="60" y1="63" x2="340" y2="63" stroke="#DDDDDD" stroke-opacity="0.3" stroke-width="1"/>
          <line x1="60" y1="86" x2="340" y2="86" stroke="#DDDDDD" stroke-opacity="0.3" stroke-width="1"/>
          <line x1="60" y1="109" x2="340" y2="109" stroke="#DDDDDD" stroke-opacity="0.3" stroke-width="1"/>
          <line x1="60" y1="132" x2="340" y2="132" stroke="#DDDDDD" stroke-opacity="0.3" stroke-width="1"/>
          <line x1="60" y1="155" x2="340" y2="155" stroke="#DDDDDD" stroke-opacity="0.3" stroke-width="1"/>
          <text x="130" y="55" font-size="12" text-anchor="middle">(1; S)</text>
          <text x="270" y="55" font-size="12" text-anchor="middle">(1; N)</text>
          <text x="130" y="78" font-size="12" text-anchor="middle">(2; S)</text>
          <text x="270" y="78" font-size="12" text-anchor="middle">(2; N)</text>
          <text x="130" y="101" font-size="12" text-anchor="middle">(3; S)</text>
          <text x="270" y="101" font-size="12" text-anchor="middle">(3; N)</text>
          <text x="130" y="124" font-size="12" text-anchor="middle">(4; S)</text>
          <text x="270" y="124" font-size="12" text-anchor="middle">(4; N)</text>
          <text x="130" y="147" font-size="12" text-anchor="middle">(5; S)</text>
          <text x="270" y="147" font-size="12" text-anchor="middle">(5; N)</text>
          <text x="130" y="170" font-size="12" text-anchor="middle">(6; S)</text>
          <text x="270" y="170" font-size="12" text-anchor="middle">(6; N)</text>
          <text x="200" y="200" font-size="12" fill="#9A72AC" text-anchor="middle">6 hàng × 2 cột = 12 phần tử</text>
        </svg>
        <figcaption>Bảng liên kết giúp liệt kê không thiếu, không trùng: 6 × 2 = 12 kết quả trong Ω.</figcaption>
      </figure>
<div class="definition">
        <p><strong>Phép thử ngẫu nhiên</strong> là hành động chưa biết trước kết quả nhưng liệt kê được mọi kết quả có thể xảy ra. <strong>Không gian mẫu</strong> \(\Omega\) là tập các kết quả đó, ghi không thiếu và không trùng; mỗi phần tử là một kết quả.</p>
      </div>
<div class="idea">
        <p><strong>Liệt kê cho hết, không trùng.</strong> Hai hành động khác nhau thì lập bảng: hàng là kết quả việc thứ nhất, cột là việc thứ hai. Gieo xúc xắc rồi tung đồng xu: 6 hàng, 2 cột, \(\Omega\) có 12 phần tử.</p>
        <p>Có thứ tự thì \(SN\) khác \(NS\). Rút không trả lại thì lần sau ít lựa chọn hơn lần trước: 4 người rút 2 người lần lượt là \(4 \cdot 3 = 12\) kết quả, không phải \(4 \cdot 4\).</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Liệt kê thiếu hoặc trùng kết quả — bảng liên kết giúp không sót.</li>
          <li>Nhầm (1; S) với (S; 1) khi hai hành động khác bản chất (xúc xắc khác đồng xu).</li>
          <li>Rút thăm <em>không hoàn lại</em>: kết quả lần hai phụ thuộc lần một, đừng liệt kê như hai lần độc lập.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Bạn Lan gieo một xúc xắc, bạn Hoà gieo một đồng xu. Kết quả là (số chấm; mặt): \(\Omega = \{(1;\ S); (2;\ S); \dots; (6;\ S); (1;\ N); \dots; (6;\ N)\}\). Không gian mẫu có 12 phần tử.</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Trong phép thử có thứ tự, AB và BA là gì? <em>— Hai kết quả khác nhau, không phải một. Có thứ tự thì hai cách xếp khác nhau là hai phần tử của \(\Omega\).</em></p>
        <p>Rút lần lượt 2 người trong 4 người, không trả lại: bao nhiêu kết quả? <em>— \(4 \cdot 3 = 12\), không phải \(4 \cdot 4\). Lần hai còn ít lựa chọn hơn lần một.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tung một đồng xu hai lần. Không biết trước mặt nào, nhưng liệt kê được hết. Gọi S là sấp, N là ngửa:</p>
        \[
          \Omega = \{SS,\ SN,\ NS,\ NN\}.
        \]
        <p>Có 4 kết quả. \(SN\) khác \(NS\): lần một sấp rồi lần hai ngửa không phải cùng một kết quả với ngược lại, vì phép thử có thứ tự.</p>
        <p>Rút lần lượt 2 người trong 4 người A, B, C, D, không trả lại: lần đầu 4 cách, lần sau còn 3 cách, tất cả \(4 \cdot 3 = 12\) kết quả. Đó là số phần tử của \(\Omega\), chưa cần viết đủ 12 cặp mới biết cỡ mẫu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Gieo một xúc xắc: \(\Omega\) có 6 phần tử. Tung hai đồng xu có thứ tự: SS, SN, NS, NN. Bốn kết quả. SN khác NS.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Rút lần lượt 2 người trong A, B, C, không trả lại. Lần đầu 3 cách, lần sau 2 cách, tất cả 6: AB, AC, BA, BC, CA, CB. Nếu đề không kể thứ tự thì chỉ còn 3 cặp. Đọc đề có “lần lượt” hay không trước khi đếm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Rút lần lượt hai người trong A, B thì AB và BA là hai kết quả. Nếu đề không nói thứ tự, chỉ còn một cặp. Đọc “lần lượt” và “không trả lại” trước khi đếm. Có trả lại thì thêm cả AA, BB.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Không gian mẫu là mọi kết quả có thể, không trùng, không thiếu. Có thứ tự thì hai cách xếp khác nhau là hai phần tử.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Viết \(\Omega\) không trùng, không thiếu. Có thứ tự thì AB khác BA. Có trả lại thì thêm cả AA.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Câu I.2 là một phép thử: rút một lần. Năm 2026, hộp 6 bóng ghi 1 đến 6, \(\Omega = \{1,2,3,4,5,6\}\). Năm 2025, hộp 8 thẻ ghi 1 đến 8, \(\Omega\) có 8 phần tử. Đề chưa hỏi xác suất ở bước liệt kê. Viết \(\Omega\) trước, rồi mới đếm.</p>
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
      { type: "num", prompt: "Tung hai đồng xu có thứ tự. n(Ω) bằng bao nhiêu?", answer: 4, hint: "SS, SN, NS, NN.", explain: "4." },
      { type: "mc", prompt: "Rút lần lượt A rồi B, không trả lại. AB và BA", choices: ["Một kết quả", "Hai kết quả", "Không đếm", "Cùng AA"], correct: 1, hint: "Có thứ tự.", explain: "Hai phần tử khác nhau." },
    ],
  },
  {
    id: "c8-b26",
    num: 26,
    chapter: 8,
    title: "Xác suất của biến cố liên quan tới phép thử",
    summary: "Khi mọi kết quả đều ngang cơ hội, xác suất là số kết quả thuận lợi chia cho số kết quả có thể.",
    body: String.raw`
      <p>Biến cố là một câu về kết quả: "ra số chẵn", "Bảo không ngồi ngoài cùng". Kết quả làm câu ấy đúng gọi là kết quả thuận lợi.</p>
      <div class="definition">
        <p>Khi các kết quả của phép thử đồng khả năng, xác suất của biến cố \(E\) là</p>
        \[
          P(E) = \dfrac{n(E)}{n(\Omega)},
        \]
        <p>với \(n(E)\) số kết quả thuận lợi. Luôn có \(0 \leq P(E) \leq 1\): biến cố không thể có \(P = 0\), biến cố chắc chắn có \(P = 1\).</p>
      </div>
<div class="idea">
        <p><strong>Chỉ chia khi các kết quả ngang nhau.</strong> Xúc xắc cân đối: mỗi mặt một cơ hội. Khi ấy</p>
        \[
          P(E) = \dfrac{\text{số kết quả thuận lợi}}{\text{số phần tử của } \Omega}.
        \]
        <p>Xúc xắc lệch thì không được lấy \(\dfrac{1}{6}\). Biến cố không thể xảy ra chiếm 0 miếng, \(P = 0\). Biến cố chắc chắn chiếm hết, \(P = 1\). Xác suất không lớn hơn 1.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên bước chứng minh các kết quả <em>đồng khả năng</em> — không phải lúc nào cũng thế.</li>
          <li>Đếm thiếu kết quả thuận lợi (thường với điều kiện phủ định kiểu không ngồi cạnh).</li>
          <li>Viết xác suất lớn hơn 1 — kiểm tra lại phép chia.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ba ghế, viết hết rồi mới đếm.</strong> Bảo, Châu, Dương xếp ngẫu nhiên. Đọc từ trái sang phải, chữ cuối là ghế ngoài cùng bên phải. Sáu cách, mỗi cách một cơ hội:</p>
        <p>BCD, BDC: Bảo ngồi trái. CBD, DBC: Bảo ngồi giữa. CDB, DCB: Bảo ngồi phải.</p>
        <p>Biến cố "Bảo không ngồi ngoài cùng bên phải" loại hai cách cuối. Còn 4 cách, \(P = \dfrac{4}{6} = \dfrac{2}{3}\).</p>
        <p>Biến cố "Châu và Dương không ngồi cạnh": trong BCD, BDC, CDB, DCB thì Châu và Dương đứng liền. Chỉ CBD và DBC cách nhau bởi Bảo. \(P = \dfrac{2}{6} = \dfrac{1}{3}\). Đếm trên danh sách, đừng đoán "khoảng một nửa".</p>
      </div>
      
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Xúc xắc với các kết quả thuận lợi 2, 4, 5, 6 cho biến cố chẵn hoặc lớn hơn 4">
          <circle cx="180" cy="105" r="75" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="180" cy="105" r="2.5" fill="#DDDDDD"/>
          <circle cx="180" cy="105" r="70" fill="#58C4DD" fill-opacity="0.12"/>
          <circle cx="180" cy="30" r="3" fill="#83C167"/>
          <text x="172" y="44" font-size="12" fill="#83C167">1</text>
          <circle cx="255" cy="105" r="3" fill="#83C167"/>
          <text x="260" y="118" font-size="12" fill="#83C167">6</text>
          <circle cx="105" cy="105" r="3" fill="#83C167"/>
          <text x="96" y="118" font-size="12" fill="#83C167">2</text>
          <circle cx="180" cy="180" r="3" fill="#83C167"/>
          <text x="172" y="194" font-size="12" fill="#83C167">3</text>
          <circle cx="222" cy="60" r="3" fill="#83C167"/>
          <text x="226" y="72" font-size="12" fill="#83C167">4</text>
          <circle cx="138" cy="60" r="3" fill="#83C167"/>
          <text x="126" y="72" font-size="12" fill="#83C167">5</text>
          <text x="200" y="150" font-size="12" fill="#FC6255">2, 4, 5, 6</text>
          <text x="200" y="166" font-size="12" fill="#FC6255">P = 4/6</text>
        </svg>
        <figcaption>Biến cố "chẵn hoặc lớn hơn 4" có kết quả thuận lợi 2, 4, 5, 6 — đừng đếm 6 hai lần, P = 4/6 = 2/3.</figcaption>
      </figure>
<div class="idea">
        <p><strong>Hiểu nhanh.</strong> Xác suất là <em>phần bánh</em>: chia cái bánh \(\Omega\) cho các kết quả đồng khả năng, biến cố \(E\) chiếm mấy miếng? Luôn có \(0 \leq P(E) \leq 1\): biến cố không thể có \(P = 0\), biến cố chắc chắn có \(P = 1\).</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Khi nào mới được dùng \(P = \frac{n(A)}{n(\Omega)}\)? <em>— Khi các kết quả đồng khả năng. Xúc xắc lệch thì không được lấy \(\frac{1}{6}\).</em></p>
        <p>Biến cố "chẵn hoặc lớn hơn 4" trên xúc xắc có kết quả thuận lợi nào? <em>— 2, 4, 5, 6, bốn kết quả, \(P = \frac{4}{6}\). Cộng \(\frac{3}{6} + \frac{2}{6}\) sẽ đếm 6 hai lần.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tung một xúc xắc cân đối. \(\Omega = \{1, 2, 3, 4, 5, 6\}\), sáu kết quả đồng khả năng.</p>
        <p>Biến cố "ra số chẵn" có kết quả thuận lợi 2, 4, 6. Xác suất \(\dfrac{3}{6} = \dfrac{1}{2}\).</p>
        <p>Biến cố "ra số lớn hơn 4" có kết quả thuận lợi 5 và 6. Xác suất \(\dfrac{2}{6} = \dfrac{1}{3}\). Không đếm số 4, vì 4 không lớn hơn 4.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Xúc xắc cân đối. “Ra số chẵn”: 2, 4, 6, xác suất \(\dfrac{3}{6} = \dfrac{1}{2}\). “Lớn hơn 4”: 5 và 6, \(\dfrac{2}{6} = \dfrac{1}{3}\). Không đếm 4.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hai đồng xu cân đối, có thứ tự. “Cả hai ngửa”: chỉ NN, \(P = \dfrac{1}{4}\). “Ít nhất một ngửa”: NN, NS, SN, ba kết quả, \(P = \dfrac{3}{4}\). Không phải \(\dfrac{1}{2}\). Biến cố “không thể ra mặt 7” trên một xúc xắc có \(P = 0\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Xúc xắc cân đối. “Chẵn hoặc lớn hơn 4”: chẵn là 2, 4, 6; lớn hơn 4 là 5, 6. Hợp là 2, 4, 5, 6, bốn kết quả, \(P = \dfrac{4}{6}\). Cộng \(\dfrac{3}{6} + \dfrac{2}{6}\) sẽ đếm 6 hai lần.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Liệt kê kết quả thuận lợi trên \(\Omega\). Chỉ chia khi các kết quả đồng khả năng. Xác suất không lớn hơn 1, không âm.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> \(P=\dfrac{n(A)}{n(\Omega)}\) khi đồng khả năng. Liệt kê rồi mới chia. Hợp hai biến cố thì không đếm trùng.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Xúc xắc. “Chẵn hoặc lớn hơn 4”: 2, 4, 5, 6. Bốn kết quả, \(P=4/6=2/3\). Cộng \(3/6+2/6\) sẽ đếm 6 hai lần.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu I.2.</strong> Năm 2026: rút một bóng trong 6 bóng ghi 1 đến 6. Tính xác suất số chẵn. Thuận lợi là 2, 4, 6. \(P(A) = \dfrac{3}{6} = \dfrac{1}{2}\).</p>
        <p>Năm 2025: rút một thẻ trong 8 thẻ ghi 1 đến 8. Tính xác suất số chia hết cho 3. Thuận lợi là 3 và 6, không có 9. \(P(A) = \dfrac{2}{8} = \dfrac{1}{4}\).</p>
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
        prompt: "Gieo một xúc xắc cân đối. Xác suất ra mặt 6 chấm là 1/k. Giá trị k bằng bao nhiêu?",
        answer: 6,
        hint: "Một mặt thuận lợi, sáu mặt có thể, xúc xắc cân đối.",
        explain: "P = 1/6, nên k = 6. Không được làm tròn thành 0,17 rồi coi đó là đáp số chính xác.",
      },
      {
        type: "mc",
        prompt: "Xác suất của biến cố chắc chắn bằng:",
        choices: ["0", "0,5", "1", "100"],
        correct: 2,
        hint: "Biến cố nào luôn xảy ra?",
        explain: "Biến cố chắc chắn có xác suất bằng 1; biến cố không thể có xác suất bằng 0.",
      },
      { type: "num", prompt: "Xúc xắc. P(ra 1 hoặc 2) = 1/k. k bằng bao nhiêu?", answer: 3, hint: "2/6.", explain: "1/3." },
      { type: "mc", prompt: "P(A) = 5/4 là", choices: ["Hợp lệ","Sai, vì lớn hơn 1","Sai, vì âm","Chắc chắn"], correct: 1, hint: "Xác suất ≤ 1.", explain: "Không lớn hơn 1." },
    ],
  },

  // ============ CHƯƠNG IX (Tập 2) ============
  {
    id: "c9-b27",
    num: 27,
    chapter: 9,
    title: "Góc nội tiếp",
    summary: "Góc nội tiếp nhìn cung từ rìa đường tròn, nên bằng nửa góc ở tâm nhìn cùng cung ấy.",
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
      
      <figure class="figure" data-animation="c9-b27-inscribed">
        <svg viewBox="0 0 360 210" role="img" aria-label="Góc nội tiếp BAC bằng nửa góc ở tâm BOC, cùng chắn cung BC" id="fig-c9-b27">
          <circle cx="180" cy="100" r="85" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="534" stroke-dashoffset="534"/>
          <circle cx="180" cy="100" r="2.5" fill="#DDDDDD" opacity="0"/>
          <text x="164" y="116" font-size="13" opacity="0">O</text>
          <circle cx="180" cy="15" r="3" fill="#58C4DD" opacity="0"/>
          <text x="172" y="28" font-size="13" fill="#58C4DD" opacity="0">B</text>
          <circle cx="254" cy="143" r="3" fill="#58C4DD" opacity="0"/>
          <text x="258" y="156" font-size="13" fill="#58C4DD" opacity="0">C</text>
          <circle cx="95" cy="100" r="3" fill="#83C167" opacity="0"/>
          <text x="76" y="112" font-size="13" fill="#83C167" opacity="0">A</text>
          <line x1="95" y1="100" x2="180" y2="15" stroke="#83C167" stroke-width="2" stroke-dasharray="92" stroke-dashoffset="92" opacity="0"/>
          <line x1="95" y1="100" x2="254" y2="143" stroke="#83C167" stroke-width="2" stroke-dasharray="97" stroke-dashoffset="97" opacity="0"/>
          <line x1="180" y1="100" x2="180" y2="15" stroke="#FC6255" stroke-width="2" stroke-dasharray="85" stroke-dashoffset="85" opacity="0"/>
          <line x1="180" y1="100" x2="254" y2="143" stroke="#FC6255" stroke-width="2" stroke-dasharray="78" stroke-dashoffset="78" opacity="0"/>
          <path d="M 236 44 A 34 34 0 0 1 248 64" fill="none" stroke="#FC6255" stroke-width="2" stroke-dasharray="16" stroke-dashoffset="16" opacity="0"/>
          <text x="240" y="40" font-size="13" fill="#FC6255" opacity="0">120°</text>
          <path d="M 140 62 A 24 24 0 0 1 156 56" fill="none" stroke="#9A72AC" stroke-width="2" stroke-dasharray="13" stroke-dashoffset="13" opacity="0"/>
          <text x="124" y="74" font-size="13" fill="#9A72AC" opacity="0">60°</text>
        </svg>
        <figcaption>Góc nội tiếp BAC (đỉnh A trên đường tròn) chắn cung BC bằng 60°, bằng nửa góc ở tâm BOC = 120°.</figcaption>
      </figure>
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
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm với góc ở tâm: góc nội tiếp chỉ bằng <em>nửa</em> số đo cung bị chắn.</li>
          <li>Quên rằng đỉnh phải nằm <em>trên</em> đường tròn và hai cạnh phải chứa <em>dây cung</em> — góc có một cạnh tiếp tuyến không phải góc nội tiếp.</li>
          <li>Cung bị chắn là cung nằm <em>bên trong</em> góc, đừng chọn nhầm cung kia.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Cho \(\widehat{BAC} = 60^\circ\). Hai góc nội tiếp \(\widehat{BDC}\) và \(\widehat{BAC}\) cùng chắn cung nhỏ \(BC\) nên \(\widehat{BDC} = 60^\circ\); góc ở tâm \(\widehat{BOC} = 2\widehat{BAC} = 120^\circ\).</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Góc nội tiếp bằng bao nhiêu phần cung bị chắn? <em>— Nửa: \(\widehat{BAC} = \frac{1}{2}\) số đo cung \(BC\). Góc ở tâm mới bằng cả cung; viết bằng cả cung là nhầm.</em></p>
        <p>Góc nội tiếp chắn một đường kính thì thế nào? <em>— Là góc vuông (\(90^\circ\)).</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Cung \(AB\) có số đo \(80^\circ\). Góc ở tâm chắn cung đó cũng bằng \(80^\circ\). Góc nội tiếp chắn cùng cung \(AB\) bằng một nửa, tức \(40^\circ\).</p>
        <p>Nếu góc nội tiếp bằng \(90^\circ\), cung bị chắn bằng \(180^\circ\). Cung nửa đường tròn nghĩa là dây chắn cung ấy là đường kính. Cách nhớ: góc nội tiếp chắn đường kính thì vuông.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Cung nhỏ \(100^\circ\). Góc ở tâm chắn cung ấy bằng \(100^\circ\). Góc nội tiếp chắn cùng cung bằng \(50^\circ\). Hai góc nội tiếp cùng chắn cung ấy thì bằng nhau, cùng \(50^\circ\), dù đỉnh nằm ở hai chỗ khác trên phần đường tròn còn lại.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Góc nội tiếp bằng \(90^\circ\) thì cung bị chắn bằng \(180^\circ\). Dây chắn cung ấy là đường kính. Ngược lại, nếu một cạnh của tam giác là đường kính và đỉnh kia nằm trên đường tròn, góc tại đỉnh ấy là góc vuông.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Cung \(80^\circ\). Góc ở tâm bằng \(80^\circ\). Góc nội tiếp chắn cùng cung bằng \(40^\circ\), không phải \(80^\circ\). Viết bằng cả cung là nhầm với góc ở tâm.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Góc nội tiếp bằng nửa cung bị chắn. Góc ở tâm bằng cung. Góc nội tiếp chắn đường kính thì vuông.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Góc nội tiếp bằng nửa cung bị chắn. Cùng một cung thì các góc nội tiếp bằng nhau. Chắn đường kính thì vuông.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Cung \(70^\circ\). Góc nội tiếp chắn cung ấy \(35^\circ\). Góc ở tâm \(70^\circ\). Không viết góc nội tiếp bằng cung.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Phần chứng minh dùng góc nội tiếp, không hỏi thuộc lòng định nghĩa. Năm 2026 cho tam giác \(ABC\) vuông tại \(A\), nội tiếp đường tròn đường kính \(BC\). Góc chắn nửa đường tròn là góc vuông: đó là lý do góc \(A\) bằng \(90^\circ\) khi \(BC\) là đường kính. Các ý sau so góc nội tiếp cùng chắn một cung.</p>
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
      { type: "num", prompt: "Góc nội tiếp chắn cung 100°. Số đo góc bằng bao nhiêu độ?", answer: 50, hint: "Nửa cung.", explain: "50°." },
      { type: "mc", prompt: "Góc nội tiếp vuông thì dây chắn cung là", choices: ["Bán kính", "Đường kính", "Dây ngắn nhất", "Tiếp tuyến"], correct: 1, hint: "Cung 180°.", explain: "Đường kính." },
    ],
  },
  {
    id: "c9-b28",
    num: 28,
    chapter: 9,
    title: "Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác",
    summary: "Trung trực cách đều hai đỉnh, nên giao ba trung trực là tâm đường tròn qua ba đỉnh. Phân giác cách đều hai cạnh.",
    body: String.raw`
      <div class="definition">
        <p><strong>Đường tròn ngoại tiếp</strong> một tam giác là đường tròn đi qua ba đỉnh của tam giác đó; khi đó ta nói tam giác nội tiếp đường tròn. Tâm của nó là giao điểm của ba đường trung trực của tam giác.</p>
        <p><strong>Đường tròn nội tiếp</strong> một tam giác là đường tròn tiếp xúc với cả ba cạnh của tam giác. Tâm của nó là giao điểm của ba đường phân giác trong của tam giác.</p>
      </div>
      <div class="definition">
        <p><strong>Đường tròn ngoại tiếp tam giác vuông</strong> có tâm là trung điểm của cạnh huyền và bán kính bằng một nửa cạnh huyền.</p>
        <p><strong>Đường tròn nội tiếp tam giác đều</strong> cạnh \(a\) có tâm là trọng tâm của tam giác và bán kính \(r = \dfrac{\sqrt{3}}{6}a\).</p>
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
          <li>Với tam giác vuông, quên công thức nhanh \(R = \dfrac{\text{cạnh huyền}}{2}\) và đi tính vòng vo.</li>
          <li>Nhầm \(r = \dfrac{\sqrt{3}}{6}a\) (nội tiếp) với \(R = \dfrac{a}{\sqrt{3}}\) (ngoại tiếp) của tam giác đều.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Tam giác \(ABC\) vuông tại \(A\), \(AB = 2\) cm, \(AC = 4\) cm. Đường tròn ngoại tiếp có tâm là trung điểm \(BC\): \(BC^2 = 4 + 16 = 20\), \(BC = 2\sqrt{5}\), bán kính \(R = \dfrac{BC}{2} = \sqrt{5}\) cm.</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tâm đường tròn ngoại tiếp là giao của gì? <em>— Ba đường trung trực của các cạnh. Giao ba đường phân giác là tâm đường tròn nội tiếp.</em></p>
        <p>Tam giác vuông: bán kính đường tròn ngoại tiếp bằng gì? <em>— Nửa cạnh huyền; tâm là trung điểm cạnh huyền.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tam giác vuông cạnh 6 cm, 8 cm, cạnh huyền 10 cm.</p>
        <p>Đường tròn ngoại tiếp đi qua ba đỉnh. Tâm là trung điểm cạnh huyền, bán kính bằng nửa cạnh huyền: \(R = 5\) cm. Ba đỉnh đều cách tâm đúng 5 cm.</p>
        <p>Đường tròn nội tiếp tiếp xúc ba cạnh, bán kính \(r = \dfrac{6 + 8 - 10}{2} = 2\) cm. Kiểm tra bằng diện tích: \(\dfrac{6 \cdot 8}{2} = 24\), và bán kính nhân nửa chu vi cũng là \(2 \cdot 12 = 24\). Khớp.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác vuông cạnh 5 cm, 12 cm, cạnh huyền 13 cm. Đường tròn ngoại tiếp có bán kính bằng nửa cạnh huyền, \(R = 6{,}5\) cm. Tâm là trung điểm cạnh huyền. Đường tròn nội tiếp có bán kính \(r = \dfrac{5 + 12 - 13}{2} = 2\) cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Kiểm tra bán kính nội tiếp bằng diện tích. Diện tích tam giác là \(\dfrac{5 \cdot 12}{2} = 30\). Nửa chu vi là 15. \(r \cdot 15 = 2 \cdot 15 = 30\), khớp. Nếu nhầm tâm ngoại tiếp với giao các đường phân giác, bán kính sẽ không bằng nửa cạnh huyền.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác vuông cạnh huyền 15 cm. Bán kính đường tròn ngoại tiếp là \(7{,}5\) cm, không phải 15 cm. Tâm là trung điểm cạnh huyền, không phải giao các đường phân giác. Giao các phân giác là tâm đường tròn nội tiếp.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Ngoại tiếp đi qua ba đỉnh, tâm là giao các đường trung trực. Nội tiếp chạm ba cạnh, tâm là giao các đường phân giác. Tam giác vuông: \(R\) bằng nửa cạnh huyền.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Ngoại tiếp: qua ba đỉnh, tâm là giao trung trực. Nội tiếp: chạm ba cạnh, tâm là giao phân giác. Tam giác vuông: \(R\) bằng nửa cạnh huyền.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Năm 2025: tam giác nhọn \(ABC\) nội tiếp đường tròn \((O)\). Tâm là giao các đường trung trực, đường cao cắt lại đường tròn tại điểm thứ hai. Năm 2026: tam giác vuông nội tiếp đường tròn đường kính cạnh huyền. Đó đúng tính chất đường tròn ngoại tiếp tam giác vuông của bài này.</p>
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
      { type: "num", prompt: "Tam giác vuông cạnh huyền 16 cm. R ngoại tiếp bằng bao nhiêu cm?", answer: 8, hint: "Nửa cạnh huyền.", explain: "8 cm." },
      { type: "mc", prompt: "Tâm đường tròn nội tiếp là giao", choices: ["Trung trực", "Phân giác", "Trung tuyến", "Đường cao"], correct: 1, hint: "Cách đều ba cạnh.", explain: "Ba đường phân giác." },
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
      
      <figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Tứ giác nội tiếp ABCD với hai góc đối cộng 180 độ">
          <circle cx="180" cy="105" r="95" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="180" cy="105" r="2.5" fill="#DDDDDD"/>
          <text x="166" y="121" font-size="13">O</text>
          <polygon points="180,10 275,105 180,200 85,105" fill="none" stroke="#83C167" stroke-width="2"/>
          <circle cx="180" cy="10" r="3" fill="#58C4DD"/>
          <text x="172" y="26" font-size="13" fill="#58C4DD">A</text>
          <circle cx="275" cy="105" r="3" fill="#58C4DD"/>
          <text x="279" y="118" font-size="13" fill="#58C4DD">B</text>
          <circle cx="180" cy="200" r="3" fill="#58C4DD"/>
          <text x="184" y="214" font-size="13" fill="#58C4DD">C</text>
          <circle cx="85" cy="105" r="3" fill="#58C4DD"/>
          <text x="69" y="118" font-size="13" fill="#58C4DD">D</text>
          <text x="150" y="52" font-size="12" fill="#FC6255">∠A</text>
          <text x="226" y="138" font-size="12" fill="#FC6255">∠C</text>
          <text x="104" y="138" font-size="12" fill="#9A72AC">∠B</text>
          <text x="210" y="52" font-size="12" fill="#9A72AC">∠D</text>
        </svg>
        <figcaption>Bốn đỉnh cùng nằm trên một đường tròn. Hai góc đối nhau: ∠A + ∠C = 180°, ∠B + ∠D = 180°.</figcaption>
      </figure>
<div class="idea">
        <p><strong>Vì sao?</strong> Hai đỉnh \(B, D\) chia đường tròn thành hai cung có tổng số đo \(360^\circ\). Góc \(A\) chắn một cung, góc \(C\) chắn cung kia, mỗi góc bằng nửa cung bị chắn (Bài 27) nên tổng hai góc bằng nửa \(360^\circ\).</p>
        <p><strong>Đảo cũng đúng:</strong> nếu tổng hai góc đối của một tứ giác bằng \(180^\circ\) thì tứ giác đó nội tiếp được một đường tròn. Ví dụ hình chữ nhật (hai góc đối đều là cặp góc vuông) luôn nội tiếp được.</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Cộng nhầm hai góc <em>kề nhau</em> — định lí chỉ đúng cho hai góc <em>đối nhau</em>.</li>
          <li>Áp dụng cho tứ giác bất kì chưa biết nội tiếp.</li>
          <li>Quên dấu hiệu đảo để chứng minh tứ giác nội tiếp đường tròn.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Tứ giác \(ABCD\) nội tiếp \((O)\) với \(\widehat{DAB} = 70^\circ\), \(\widehat{ABC} = 130^\circ\). Suy ra \(\widehat{BCD} = 180^\circ - 70^\circ = 110^\circ\), \(\widehat{CDA} = 180^\circ - 130^\circ = 50^\circ\).</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Điều kiện để tứ giác nội tiếp là gì? <em>— Hai góc đối nhau cộng \(180^\circ\). Tổng cả bốn góc luôn \(360^\circ\), không đủ để kết luận.</em></p>
        <p>Cộng nhầm hai góc kề nhau có đúng không? <em>— Không. Định lí chỉ đúng cho hai góc đối nhau.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Tứ giác có các góc lần lượt \(70^\circ\), \(110^\circ\), \(110^\circ\), \(70^\circ\). Hai góc đối cộng lại \(70^\circ + 110^\circ = 180^\circ\). Tứ giác này nội tiếp được một đường tròn.</p>
        <p>Tứ giác khác có góc \(80^\circ\), \(100^\circ\), \(70^\circ\), \(110^\circ\). Một cặp đối cộng được \(80^\circ + 70^\circ = 150^\circ \neq 180^\circ\). Không nội tiếp được. Tổng bốn góc vẫn là \(360^\circ\), nhưng điều kiện cần từng cặp đối, không phải tổng cả bốn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tứ giác có hai góc đối \(80^\circ\) và \(100^\circ\). Tổng \(180^\circ\), nội tiếp được. Tứ giác khác có hai góc đối \(70^\circ\) và \(100^\circ\). Tổng \(170^\circ \neq 180^\circ\), không nội tiếp được, dù tổng bốn góc vẫn là \(360^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hình chữ nhật có mọi góc \(90^\circ\), hai góc đối cộng \(180^\circ\), luôn nội tiếp được. Hình thoi có một góc \(60^\circ\) thì góc đối cũng \(60^\circ\), tổng \(120^\circ \neq 180^\circ\). Hình thoi ấy không nội tiếp được một đường tròn, trừ khi nó là hình vuông.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Bốn góc theo thứ tự \(100^\circ\), \(80^\circ\), \(70^\circ\), \(110^\circ\). Hai góc kề \(100^\circ + 80^\circ = 180^\circ\), nhưng góc đối là \(100^\circ + 70^\circ = 170^\circ \neq 180^\circ\). Tứ giác không nội tiếp được. Định lí không dùng góc kề.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tứ giác nội tiếp khi hai góc đối cộng \(180^\circ\). Tổng bốn góc luôn \(360^\circ\), không đủ để kết luận. Hình chữ nhật luôn nội tiếp được.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Tứ giác nội tiếp khi hai góc đối cộng \(180^\circ\). Tổng bốn góc luôn \(360^\circ\), không đủ để kết luận. Hình chữ nhật luôn nội tiếp được.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội.</strong> Ý mở của phần hình thường là chứng minh bốn điểm đồng viên. Năm 2026, ý a: bốn điểm \(A, H, D, C\). Hai góc đối bằng \(90^\circ\), tổng \(180^\circ\), nên tứ giác nội tiếp. Năm 2024, ý 1: tứ giác \(ABOC\), với \(AB, AC\) là tiếp tuyến, cũng nội tiếp vì có hai góc vuông đối nhau. Năm 2025 hỏi bốn điểm \(E, D, B, K\).</p>
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
      { type: "num", prompt: "Tứ giác nội tiếp có một góc 70°. Góc đối bằng bao nhiêu độ?", answer: 110, hint: "Cộng 180°.", explain: "110°." },
      { type: "mc", prompt: "Hình thoi có góc 50° (góc đối cũng 50°). Hình thoi ấy", choices: ["Luôn nội tiếp được","Không nội tiếp được, trừ khi là hình vuông","Nội tiếp được vì tổng bốn góc 360°","Nội tiếp được vì bốn cạnh bằng"], correct: 1, hint: "50+50 ≠ 180.", explain: "Góc đối không cộng 180°." },
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
      
<figure class="figure">
        <svg viewBox="0 0 360 210" role="img" aria-label="Lục giác đều nội tiếp đường tròn với góc ở tâm 60 độ">
          <circle cx="180" cy="105" r="95" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="180" cy="105" r="2.5" fill="#DDDDDD"/>
          <text x="166" y="121" font-size="13">O</text>
          <polygon points="275,105 228,187 133,187 85,105 132,23 228,23" fill="none" stroke="#83C167" stroke-width="2"/>
          <line x1="180" y1="105" x2="275" y2="105" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="180" y1="105" x2="228" y2="187" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="180" y1="105" x2="133" y2="187" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="180" y1="105" x2="85" y2="105" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="180" y1="105" x2="132" y2="23" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="180" y1="105" x2="228" y2="23" stroke="#58C4DD" stroke-width="1.5" stroke-dasharray="5 4"/>
          <path d="M 226 48 A 30 30 0 0 1 240 62" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="232" y="44" font-size="12" fill="#FC6255">60°</text>
          <line x1="180" y1="105" x2="228" y2="23" stroke="#83C167" stroke-width="1.5"/>
          <text x="196" y="40" font-size="12" fill="#83C167">R</text>
          <circle cx="275" cy="105" r="3" fill="#58C4DD"/>
          <circle cx="228" cy="187" r="3" fill="#58C4DD"/>
          <circle cx="133" cy="187" r="3" fill="#58C4DD"/>
          <circle cx="85" cy="105" r="3" fill="#58C4DD"/>
          <circle cx="132" cy="23" r="3" fill="#58C4DD"/>
          <circle cx="228" cy="23" r="3" fill="#58C4DD"/>
        </svg>
        <figcaption>Lục giác đều: chia đường tròn thành 6 cung bằng nhau, mỗi góc ở tâm 60°. Cạnh bằng bán kính R của đường tròn ngoại tiếp.</figcaption>
      </figure>
<div class="idea">
        <p><strong>Hiểu nhanh.</strong> Chia bánh tròn đều \(n\) miếng, nối các vết cắt: được đa giác đều. Lục giác đều đặc biệt thân thiện: <strong>cạnh bằng bán kính</strong> — chỉ cần xoay compa quanh đường tròn là vẽ được. Các đa giác đều có khắp nơi: tổ ong (lục giác), ốc vít (lục giác), biển báo (tam giác, bát giác đều)…</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Coi hình thoi là đa giác đều — cạnh bằng nhau nhưng góc không bằng nhau.</li>
          <li>Coi hình chữ nhật là đa giác đều — góc bằng nhau nhưng cạnh không bằng nhau.</li>
          <li>Chia đường tròn thành \(n\) cung bằng \(\dfrac{180^\circ}{n}\) — phải là \(\dfrac{360^\circ}{n}\).</li>
        </ul>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình thoi có phải đa giác đều không? <em>— Không. Cạnh bằng nhau nhưng góc không bằng nhau.</em></p>
        <p>Chia đường tròn thành \(n\) cung bằng nhau, mỗi cung bằng bao nhiêu? <em>— \(\frac{360^\circ}{n}\), không phải \(\frac{180^\circ}{n}\).</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Lục giác đều có 6 cạnh bằng nhau và 6 góc bằng nhau. Chia đường tròn ngoại tiếp thành 6 cung bằng nhau, mỗi cung \(360^\circ : 6 = 60^\circ\).</p>
        <p>Tam giác nối tâm với một cạnh là tam giác đều, nên cạnh của lục giác đều bằng bán kính đường tròn ngoại tiếp. Bán kính 4 cm thì mỗi cạnh 4 cm, chu vi 24 cm.</p>
        <p>Mỗi góc trong bằng \(\dfrac{(6 - 2) \cdot 180^\circ}{6} = 120^\circ\). Sáu góc bằng nhau, đúng định nghĩa đa giác đều.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác đều: chia đường tròn thành 3 cung, mỗi cung \(120^\circ\). Mỗi góc trong \((3-2)\cdot 180^\circ / 3 = 60^\circ\). Hình vuông: mỗi cung \(90^\circ\), mỗi góc trong \(90^\circ\). Cạnh bằng nhau và góc bằng nhau, cả hai điều kiện cùng lúc.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Lục giác đều bán kính 5 cm. Mỗi góc ở tâm \(60^\circ\), nên tam giác tâm-cạnh là tam giác đều. Mỗi cạnh bằng bán kính, 5 cm. Chu vi 30 cm. Hình thoi cạnh bằng nhau nhưng góc không bằng nhau, không phải đa giác đều. Hình chữ nhật góc bằng nhau nhưng cạnh không bằng nhau, cũng không phải.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Ngũ giác đều, góc ở tâm là \(\dfrac{360^\circ}{5} = 72^\circ\), không phải \(\dfrac{180^\circ}{5} = 36^\circ\). Góc trong là \(\dfrac{(5 - 2) \cdot 180^\circ}{5} = 108^\circ\). Chia nhầm 180 sẽ ra đa giác không khít vòng tròn.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đa giác đều cần cả cạnh bằng nhau và góc bằng nhau. Chia đường tròn thành \(n\) cung bằng \(\dfrac{360^\circ}{n}\).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Đa giác đều: cạnh bằng nhau và góc bằng nhau. Góc ở tâm \(\dfrac{360^\circ}{n}\). Góc trong \(\dfrac{(n-2)180^\circ}{n}\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Lục giác đều, góc ở tâm \(60^\circ\), góc trong \(120^\circ\). Không chia 180 cho 6.</p>
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
      { type: "num", prompt: "Bát giác đều. Góc ở tâm bằng bao nhiêu độ?", answer: 45, hint: "360/8.", explain: "45°." },
      { type: "num", prompt: "Ngũ giác đều. Góc trong bằng bao nhiêu độ?", answer: 108, hint: "(5−2)·180 / 5.", explain: "108°." },
    ],
  },

  // ============ CHƯƠNG X (Tập 2) ============
  {
    id: "c10-b31",
    num: 31,
    chapter: 10,
    title: "Hình trụ và hình nón",
    summary: "Trải hình trụ ra thành hình chữ nhật chu vi đáy nhân chiều cao. Nón dùng đường sinh, không dùng chiều cao, cho diện tích xung quanh.",
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
      <figure class="figure" data-animation="c10-b31-3d">
        <svg viewBox="0 0 370 205" role="img" aria-label="Hình trụ và hình nón: bán kính đáy R, chiều cao h, đường sinh l" id="fig-c10-b31">
          <ellipse cx="105" cy="42" rx="55" ry="15" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="178" stroke-dashoffset="178" opacity="0"/>
          <ellipse cx="105" cy="158" rx="55" ry="15" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="178" stroke-dashoffset="178" opacity="0"/>
          <line x1="50" y1="42" x2="50" y2="158" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="116" stroke-dashoffset="116" opacity="0"/>
          <line x1="160" y1="42" x2="160" y2="158" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="116" stroke-dashoffset="116" opacity="0"/>
          <circle cx="105" cy="42" r="2.5" fill="#DDDDDD" opacity="0"/>
          <text x="90" y="41" font-size="13" opacity="0">O′</text>
          <line x1="105" y1="42" x2="160" y2="42" stroke="#83C167" stroke-width="2" stroke-dasharray="55" stroke-dashoffset="55" opacity="0"/>
          <text x="122" y="56" font-size="13" fill="#83C167" opacity="0">R</text>
          <line x1="28" y1="42" x2="28" y2="158" stroke="#FC6255" stroke-width="2" stroke-dasharray="116" stroke-dashoffset="116" opacity="0"/>
          <text x="14" y="105" font-size="13" fill="#FC6255" opacity="0">h</text>
          <ellipse cx="270" cy="158" rx="55" ry="15" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="178" stroke-dashoffset="178" opacity="0"/>
          <line x1="270" y1="32" x2="215" y2="158" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="135" stroke-dashoffset="135" opacity="0"/>
          <line x1="270" y1="32" x2="325" y2="158" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="135" stroke-dashoffset="135" opacity="0"/>
          <line x1="270" y1="32" x2="270" y2="158" stroke="#FC6255" stroke-width="2" stroke-dasharray="126" stroke-dashoffset="126" opacity="0"/>
          <text x="278" y="100" font-size="13" fill="#FC6255" opacity="0">h</text>
          <text x="258" y="26" font-size="13" opacity="0">S</text>
          <line x1="270" y1="158" x2="325" y2="158" stroke="#83C167" stroke-width="2" stroke-dasharray="55" stroke-dashoffset="55" opacity="0"/>
          <text x="297" y="184" font-size="13" fill="#83C167" opacity="0">R</text>
          <text x="302" y="92" font-size="13" fill="#58C4DD" opacity="0">l</text>
          <circle cx="270" cy="158" r="2.5" fill="#DDDDDD" opacity="0"/>
          <text x="252" y="156" font-size="13" opacity="0">O</text>
        </svg>
        <figcaption>Trụ: cao h, bán kính đáy R. Nón: đường sinh l, cao h — dùng l cho diện tích xung quanh, dùng h cho thể tích.</figcaption>
      </figure>
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
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Quên hệ số \(\tfrac{1}{3}\) trong thể tích hình nón.</li>
          <li>Nhầm đường sinh \(l\) với chiều cao \(h\) — chỉ dùng \(l\) cho diện tích xung quanh nón; tìm \(h\) bằng Pythagore \(l^2 = r^2 + h^2\).</li>
          <li>Đề sơn "một đáy" hay "hai đáy" — đọc kĩ rồi cộng \(\pi R^2\) cho đúng số đáy.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Thùng rác hình trụ \(R = 11\) cm, \(h = 30\) cm, sơn mặt ngoài và một đáy: \(S = S_{xq} + S_{đáy} = 660\pi + 121\pi = 781\pi\) cm²; thể tích \(V = 121\pi \cdot 30 = 3630\pi \approx 11\,404\) cm³.</p>
        <p>Hình nón \(l = 10\) cm, \(r = 6\) cm: \(S_{xq} = 60\pi\) cm²; \(h = \sqrt{10^2 - 6^2} = 8\) cm; \(V = \tfrac{1}{3}\pi \cdot 36 \cdot 8 = 96\pi\) cm³.</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Diện tích xung quanh hình nón dùng đường sinh \(l\) hay chiều cao \(h\)? <em>— Dùng \(l\): \(S_{xq} = \pi r l\). Tìm \(l\) bằng Pythagore \(l^2 = r^2 + h^2\).</em></p>
        <p>Thể tích hình nón có hệ số gì? <em>— \(\frac{1}{3}\) trước \(\pi r^2 h\). Quên sẽ ra thể tích hình trụ.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình trụ bán kính đáy \(R = 3\) cm, chiều cao \(h = 5\) cm. Diện tích xung quanh \(S_{xq} = 2\pi \cdot 3 \cdot 5 = 30\pi\) cm²: trải phẳng được hình chữ nhật dài bằng chu vi đáy \(6\pi\), rộng 5. Thể tích \(V = \pi \cdot 9 \cdot 5 = 45\pi\) cm³.</p>
        <p>Hình nón bán kính đáy \(r = 3\) cm, chiều cao 4 cm. Đường sinh \(l = \sqrt{3^2 + 4^2} = 5\) cm. Không lấy chiều cao 4 cm làm đường sinh. \(S_{xq} = \pi \cdot 3 \cdot 5 = 15\pi\) cm². Thể tích bằng một phần ba hình trụ cùng đáy cùng cao: \(V = \dfrac{1}{3}\pi \cdot 9 \cdot 4 = 12\pi\) cm³.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình trụ bán kính 4 cm, cao 10 cm. Diện tích xung quanh \(S_{xq} = 2\pi \cdot 4 \cdot 10 = 80\pi\) cm². Thể tích \(V = \pi \cdot 16 \cdot 10 = 160\pi\) cm³. Trải ra được hình chữ nhật dài \(8\pi\), rộng 10.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hình nón bán kính đáy 6 cm, cao 8 cm. Đường sinh \(l = \sqrt{6^2 + 8^2} = 10\) cm. Diện tích xung quanh dùng \(l\): \(\pi \cdot 6 \cdot 10 = 60\pi\) cm². Thể tích dùng \(h\), và có \(\dfrac{1}{3}\): \(\dfrac{1}{3}\pi \cdot 36 \cdot 8 = 96\pi\) cm³. Dùng nhầm \(h\) cho diện tích xung quanh sẽ ra \(48\pi\), sai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Nón bán kính 3 cm, cao 4 cm, đường sinh 5 cm. Diện tích xung quanh là \(\pi \cdot 3 \cdot 5 = 15\pi\) cm². Dùng chiều cao sẽ ra \(12\pi\), sai. Thể tích là \(\dfrac{1}{3}\pi \cdot 9 \cdot 4 = 12\pi\) cm³. Quên \(\dfrac{1}{3}\) sẽ ra thể tích hình trụ.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Trụ: \(S_{xq} = 2\pi Rh\), \(V = \pi R^2 h\). Nón: \(S_{xq} = \pi r l\), \(V = \dfrac{1}{3}\pi r^2 h\), \(l^2 = r^2 + h^2\).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Trụ: \(S_{xq}=2\pi Rh\), \(V=\pi R^2 h\). Nón: \(S_{xq}=\pi r l\), \(V=\dfrac{1}{3}\pi r^2 h\), \(l^2=r^2+h^2\). Đọc một đáy hay hai đáy. 1 lít = 1000 cm³.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Nón \(r=5\), \(h=12\). \(l=13\). \(S_{xq}=65\pi\). \(V=100\pi\). Dùng nhầm \(h\) cho diện tích xung quanh sẽ ra \(60\pi\), sai.</p>
      </div>
<div class="examq">
        <p><strong>Trong đề vào 10 Hà Nội, câu IV.1.</strong> Ba năm liền đều là hình trụ, chưa hỏi hình nón. Năm 2026: xô cao 25 cm, bán kính đáy 12 cm, \(\pi\approx 3{,}14\). Tính diện tích xung quanh. Rồi múc 80% thể tích xô vào bể 150 lít, hỏi ít nhất bao nhiêu xô. Nhớ \(1\) lít \(= 1000\) cm³.</p>
        <p>Năm 2025: thùng bán kính 50 cm, cao 150 cm. Tính diện tích xung quanh, rồi thể tích nước khi mực hạ 40 cm. Năm 2024: bình bán kính 4 cm, cao 25 cm, chỉ hỏi diện tích xung quanh.</p>
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
      { type: "num", prompt: "Trụ R = 3, h = 7. Sxq = kπ. k bằng bao nhiêu?", answer: 42, hint: "2πRh.", explain: "42." },
      { type: "num", prompt: "Nón r = 6, h = 8. Đường sinh l bằng bao nhiêu?", answer: 10, hint: "√(36+64).", explain: "10." },
    ],
  },
  {
    id: "c10-b32",
    num: 32,
    chapter: 10,
    title: "Hình cầu",
    summary: "Mặt cầu bằng bốn hình tròn lớn. Cắt lệch tâm, bán kính mặt cắt là căn của R² − d².",
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
        <p>Gọi \(d\) là khoảng cách từ tâm đến mặt phẳng cắt, \(d < R\). Tam giác từ tâm tới chân đường vuông góc rồi tới một điểm trên mép mặt cắt là tam giác vuông. Bán kính mặt cắt bằng \(\sqrt{R^2 - d^2}\). \(d = 0\) thì ra \(R\). \(d\) càng gần \(R\), mặt cắt càng nhỏ.</p>
      </div>
      <figure class="figure" data-animation="c10-b32-sphere">
        <svg viewBox="0 0 360 205" role="img" aria-label="Hình cầu bị mặt phẳng cách tâm d cắt thành hình tròn bán kính r" id="fig-c10-b32">
          <circle cx="150" cy="102" r="75" fill="none" stroke="#DDDDDD" stroke-width="2" stroke-dasharray="471" stroke-dashoffset="471" opacity="0"/>
          <circle cx="150" cy="102" r="2.5" fill="#DDDDDD" opacity="0"/>
          <text x="158" y="116" font-size="13" opacity="0">O</text>
          <line x1="81" y1="72" x2="219" y2="72" stroke="#58C4DD" stroke-width="2.5" stroke-dasharray="138" stroke-dashoffset="138" opacity="0"/>
          <line x1="150" y1="102" x2="150" y2="72" stroke="#FC6255" stroke-width="2" stroke-dasharray="30" stroke-dashoffset="30" opacity="0"/>
          <text x="132" y="94" font-size="13" fill="#FC6255" opacity="0">d</text>
          <rect x="150" y="72" width="10" height="10" fill="none" stroke="#DDDDDD" stroke-width="1.5" opacity="0"/>
          <line x1="150" y1="102" x2="219" y2="72" stroke="#83C167" stroke-width="2" stroke-dasharray="87" stroke-dashoffset="87" opacity="0"/>
          <text x="196" y="94" font-size="13" fill="#83C167" opacity="0">R</text>
          <text x="181" y="64" font-size="13" fill="#58C4DD" opacity="0">r</text>
          <circle cx="219" cy="72" r="3" fill="#58C4DD" opacity="0"/>
          <text x="226" y="64" font-size="13" opacity="0">P</text>
        </svg>
        <figcaption>Mặt cắt cách tâm d có bán kính r = √(R² − d²); d = 0 thì ra đường tròn lớn bán kính R.</figcaption>
      </figure>
      <div class="definition">
        <p><strong>Công thức (SGK)</strong> — diện tích mặt cầu và thể tích hình cầu bán kính \(R\):</p>
        \[
          S = 4\pi R^2; \qquad V = \frac{4}{3}\pi R^3.
        \]
      </div>
      <div class="idea">
        <p><strong>Đừng dùng diện tích hình tròn cho mặt cầu.</strong> Một mặt cắt qua tâm có diện tích \(\pi R^2\). Mặt cầu bao quanh bằng bốn hình tròn lớn ấy: \(S = 4\pi R^2\). Thể tích là \(V = \dfrac{4}{3}\pi R^3\). Đề cho đường kính thì chia đôi trước khi thế.</p>
        <p>Quả bóng đường kính 22 cm có \(R = 11\) cm. Thể tích \(V = \dfrac{4}{3}\pi \cdot 11^3 = \dfrac{5324\pi}{3}\) cm³, khoảng 5,6 lít. Không thế 22 vào chỗ \(R\).</p>
      </div>
<div class="warn">
        <p><strong>Sai lầm thường gặp.</strong></p>
        <ul>
          <li>Nhầm đường kính với bán kính: đề cho đường kính 20 cm thì \(R = 10\) cm.</li>
          <li>Dùng \(S = \pi R^2\) (diện tích hình tròn) thay vì \(S = 4\pi R^2\) (diện tích mặt cầu).</li>
          <li>Quên lập phương \(R^3\) khi tính thể tích.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Hình cầu bán kính \(R = 10\) cm: \(S = 4\pi \cdot 100 = 400\pi\) cm²; \(V = \tfrac{4}{3}\pi \cdot 1000 = \tfrac{4000\pi}{3}\) cm³.</p>
        <p>Bể cá dạng một phần hình cầu đường kính 20 cm, đổ nước bằng \(\tfrac{2}{3}\) thể tích hình cầu: \(V_{nước} = \tfrac{2}{3} \cdot \tfrac{4}{3}\pi \cdot 10^3 \approx 932\) cm³.</p>
      </div>
      
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Đề cho đường kính 20 cm thì bán kính bằng bao nhiêu? <em>— 10 cm. Phải chia đôi trước khi thế vào công thức.</em></p>
        <p>Diện tích mặt cầu là bao nhiêu lần hình tròn lớn? <em>— 4 lần: \(S = 4\pi R^2\). \(\pi R^2\) chỉ là một mặt cắt qua tâm.</em></p>
      </details>
<div class="example">
        <p><strong>Ví dụ làm chậm.</strong> Hình cầu bán kính \(R = 3\) cm. Diện tích mặt cầu \(S = 4\pi R^2 = 36\pi\) cm², bằng bốn lần diện tích hình tròn lớn. Không dùng \(\pi R^2\): đó chỉ là diện tích một mặt cắt qua tâm.</p>
        <p>Thể tích \(V = \dfrac{4}{3}\pi R^3 = \dfrac{4}{3}\pi \cdot 27 = 36\pi\) cm³.</p>
        <p>Cắt qua tâm, mặt cắt là đường tròn bán kính 3 cm. Cắt lệch khỏi tâm, mặt cắt vẫn là đường tròn, nhưng bán kính nhỏ hơn 3 cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Bán kính \(R = 5\) cm. Diện tích mặt cầu \(S = 4\pi \cdot 25 = 100\pi\) cm², không phải \(\pi \cdot 25\). Đó chỉ là một mặt cắt qua tâm. Thể tích \(V = \dfrac{4}{3}\pi \cdot 125 = \dfrac{500\pi}{3}\) cm³.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Đề ghi đường kính 10 cm thì \(R = 5\), không thế 10 vào công thức. Cắt bởi mặt phẳng cách tâm \(d = 3\) cm: bán kính mặt cắt \(\sqrt{5^2 - 3^2} = 4\) cm. Cách tâm 0 cm thì bán kính mặt cắt là 5 cm. Cách tâm 5 cm thì mặt phẳng chỉ chạm một điểm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đường kính 14 cm thì \(R = 7\) cm. Diện tích mặt cầu \(S = 4\pi \cdot 49 = 196\pi\) cm². Thế 14 vào chỗ \(R\) thì \(R^2\) lớn gấp 4, diện tích sai gấp 4. Một mặt cắt qua tâm chỉ có diện tích \(49\pi\) cm², bằng một phần tư mặt cầu.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đề cho đường kính thì chia đôi. \(S = 4\pi R^2\), \(V = \dfrac{4}{3}\pi R^3\). Mặt cắt cách tâm \(d\) có bán kính \(\sqrt{R^2 - d^2}\).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Đề cho đường kính thì chia đôi. \(S=4\pi R^2\), \(V=\dfrac{4}{3}\pi R^3\). Mặt cắt qua tâm là hình tròn bán kính \(R\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng sách bài tập.</strong> Đường kính 10 cm, \(R=5\). \(S=100\pi\) cm². \(V=\dfrac{500}{3}\pi\) cm³. Thế 10 vào chỗ \(R\) thì cả hai công thức sai gấp bốn hoặc tám.</p>
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
      { type: "num", prompt: "R = 3. S mặt cầu = kπ. k bằng bao nhiêu?", answer: 36, hint: "4πR².", explain: "36." },
      { type: "num", prompt: "Đường kính 6. R bằng bao nhiêu?", answer: 3, hint: "Chia đôi.", explain: "3. Đừng thế 6 vào R." },
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

const G8_CHAPTERS = [
  { id: 1, title: "Đa thức" },
  { id: 2, title: "Hằng đẳng thức đáng nhớ và ứng dụng" },
  { id: 3, title: "Tứ giác" },
  { id: 4, title: "Định lí Thalès" },
  { id: 5, title: "Dữ liệu và biểu đồ" },
];

const G8_LESSONS = [
  // ===== CHAPTER 1: ĐA THỨC =====
  {
    id: "g8-b1",
    num: 1,
    chapter: 1,
    title: "Đơn thức",
    summary: "Đơn thức là biểu thức chỉ gồm số, biến hoặc tích của chúng. Đơn thức thu gọn có một hệ số và phần biến.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng. Nếu chiều dài là \(x\), chiều rộng là \(y\) thì diện tích là \(xy\). Nếu chiều dài là \(3x\), chiều rộng là \(2y\) thì diện tích là \(3x \cdot 2y = 6xy\). Các biểu thức này là đơn thức.</p>
      <div class="definition">
        <p><strong>Đơn thức</strong> là biểu thức đại số chỉ gồm một số hoặc một biến, hoặc có dạng tích của những số và biến. Ví dụ: \(5\), \(x\), \(-3y\), \(2xy\), \(-\dfrac{1}{2}x^2y^3\).</p>
      </div>
      <div class="definition">
        <p>Đơn thức thu gọn là đơn thức chỉ gồm một hệ số (số khác 0) nhân với một phần biến (gồm các biến viết dưới dạng lũy thừa với số mũ nguyên dương, mỗi biến viết một lần).</p>
        <p>Hệ số là phần số. Phần biến là tích các biến. Ví dụ: \(5x^2y\) có hệ số 5, phần biến \(x^2y\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đơn thức là "tích thuần túy" của số và biến. Không có phép cộng/trừ, không có biến ở mẫu, không có biến dưới dấu căn. Mỗi biến chỉ xuất hiện một lần với số mũ dương.</p>
        <p>Hệ số là phần "tỉ lệ", phần biến là "dạng". Đơn thức \(7x^3y^2\) tăng 8 lần khi \(x\) tăng 2 lần (vì \(2^3 = 8\)), tăng 4 lần khi \(y\) tăng 2 lần (vì \(2^2 = 4\)).</p>
      </div>
      <div class="warn">
        <p><strong>Trông giống mà không phải.</strong></p>
        <ul>
          <li>\(\dfrac{3}{x}\) không phải đơn thức: biến ở mẫu.</li>
          <li>\(2x + y\) không phải đơn thức: có phép cộng.</li>
          <li>\(\sqrt{x}\) không phải đơn thức: biến dưới dấu căn.</li>
          <li>\(x^{-2}\) không phải đơn thức: số mũ âm. Đơn thức phải có số mũ nguyên dương hoặc 0.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> Những biểu thức sau là đơn thức: \(5\), \(x\), \(-3y\), \(2xy\), \(-\dfrac{1}{2}x^2y^3\). Hệ số lần lượt là \(5\), \(1\), \(-3\), \(2\), \(-\dfrac{1}{2}\).</p>
        <p>Biểu thức \(3x + 2\) không phải đơn thức vì có phép cộng. Biểu thức \(\dfrac{4}{x}\) không phải đơn thức vì biến ở mẫu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(-7x^3y^2\) là đơn thức: hệ số \(-7\), phần biến \(x^3y^2\). Giá trị tại \(x = 2\), \(y = 1\) là \(-7 \cdot 8 \cdot 1 = -56\).</p>
        <p>\(\dfrac{2}{3}xy^4\) có hệ số \(\dfrac{2}{3}\), phần biến \(xy^4\). Tại \(x = -3\), \(y = 1\) giá trị là \(\dfrac{2}{3} \cdot (-3) \cdot 1 = -2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(0\) là đơn thức đặc biệt: hệ số 0, không có phần biến. \(7\) là đơn thức: hệ số 7, phần biến rỗng. \(-x\) là đơn thức: hệ số \(-1\), phần biến \(x\).</p>
        <p>Biểu thức \(x + y\) không phải đơn thức (có phép cộng). \(\dfrac{1}{x}\) không phải (biến ở mẫu). \(\sqrt{xy}\) không phải (dấu căn).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Đơn thức \(A = -\dfrac{3}{4}x^2y^3z\). Hệ số là \(-\dfrac{3}{4}\). Số mũ của \(x\) là 2, của \(y\) là 3, của \(z\) là 1. Tổng số mũ: \(2 + 3 + 1 = 6\). Đơn thức này bậc 6.</p>
        <p>Giá trị tại \(x = 2\), \(y = -1\), \(z = 3\): \(-\dfrac{3}{4} \cdot 4 \cdot (-1) \cdot 3 = 9\). Tính: \((2)^2 = 4\), \((-1)^3 = -1\), nhân lần lượt: \(-\dfrac{3}{4} \cdot 4 = -3\), \(-3 \cdot (-1) = 3\), \(3 \cdot 3 = 9\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(5x^0 = 5\) vì \(x^0 = 1\) (với \(x \neq 0\)). Vậy \(5x^0\) là đơn thức bậc 0, giống như số 5. Đừng nghĩ \(x^0\) có bậc 0 nên đơn thức có bậc 0 — đúng, nhưng phải hiểu \(x^0 = 1\).</p>
        <p>\(\dfrac{6x^2}{2} = 3x^2\) là đơn thức sau khi rút gọn. Đừng vội kết luận không phải đơn thức vì có phân số: cần rút gọn trước.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đơn thức = tích số × biến^số mũ. Hệ số ≠ 0. Phần biến: mỗi biến một lần, số mũ nguyên dương.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Nhận diện đơn thức: không có +, -, biến ở mẫu, căn, số mũ âm. Tìm hệ số và phần biến. Tính giá trị tại giá trị cụ thể của biến.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>Biểu thức nào là đơn thức: \(7x^2y\), \(\dfrac{3}{x}\), \(5\), \(x + y\)? <em>— \(7x^2y\) và \(5\). \(\dfrac{3}{x}\) có biến ở mẫu, \(x + y\) có phép cộng.</em></p>
        <p>Đơn thức \(-4x^3y^2\) có hệ số và phần biến gì? <em>— Hệ số \(-4\), phần biến \(x^3y^2\). Bậc: 3 + 2 = 5.</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \(0,75a^2b^3 = \dfrac{3}{4}a^2b^3\). Hệ số \(\dfrac{3}{4}\), bậc 5. \(2xy^5z^2\) bậc 8. \(-x^4y\) bậc 5.</p>
      </div>
    `,
    exercises: [
      { type: "mc", prompt: "Biểu thức nào là đơn thức?", choices: ["3x + 2", "5/x", "-7y²", "√x"], correct: 2, hint: "Đơn thức là tích số × biến^số mũ.", explain: "-7y² là tích -7 × y². Các biểu thức khác có phép cộng, biến ở mẫu hoặc dấu căn." },
      { type: "num", prompt: "Đơn thức -3x²y³ có bậc là bao nhiêu?", answer: 5, hint: "Bậc là tổng số mũ các biến.", explain: "2 + 3 = 5." },
      { type: "text", prompt: "Viết hệ số và phần biến của 5/8 x⁴y.", answer: "Hệ số: 5/8, phần biến: x⁴y", accept: ["5/8", "x⁴y", "5/8 x⁴y"], hint: "Phân số viết như a/b.", explain: "5/8 là hệ số, x⁴y là phần biến." },
      { type: "mc", prompt: "Biểu thức nào không phải đơn thức?", choices: ["-1", "x⁰", "3/x²", "2xy"], correct: 2, hint: "Kiểm tra biến ở mẫu.", explain: "3/x² có biến ở mẫu. -1 là đơn thức (số), x⁰=1, 2xy là tích." },
      { type: "num", prompt: "Giá trị của -2x³y tại x=2, y=-1 là bao nhiêu?", answer: 16, hint: "Tính x³=8, rồi nhân từng bước.", explain: "-2 × 8 × (-1) = 16." },
      { type: "num", prompt: "Giá trị của 3/4 x²y³ tại x=-2, y=1 là bao nhiêu?", answer: 3, hint: "(-2)²=4, 1³=1, nhân 3/4.", explain: "3/4 × 4 × 1 = 3." },
      { type: "mc", prompt: "Đơn thức 5x²y³z có bậc bao nhiêu?", choices: ["5", "6", "8", "10"], correct: 1, hint: "Tổng số mũ: 2+3+1.", explain: "2+3+1=6." },
    ],
  },
  {
    id: "g8-b2",
    num: 2,
    chapter: 1,
    title: "Đa thức",
    summary: "Đa thức là tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một hạng tử của đa thức.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Chu vi hình chữ nhật bằng 2 × (chiều dài + chiều rộng). Nếu chiều dài là \(x\), chiều rộng là \(y\) thì chu vi là \(2x + 2y\). Biểu thức này gồm hai đơn thức \(2x\) và \(2y\) cộng lại — đó là đa thức.</p>
      <div class="definition">
        <p><strong>Đa thức</strong> là tổng của những đơn thức. Mỗi đơn thức trong tổng gọi là một <strong>hạng tử</strong> của đa thức đó.</p>
        <p>Ví dụ: \(3x^2 + 2x - 5\) là đa thức gồm ba hạng tử: \(3x^2\), \(2x\), \(-5\).</p>
      </div>
      <div class="definition">
        <p>Đa thức thu gọn là đa thức không có hai hạng tử nào đồng dạng. Để thu gọn, cộng/trừ các hạng tử đồng dạng.</p>
        <p>Hạng tử đồng dạng là các đơn thức có phần biến giống nhau. Ví dụ: \(3x^2y\) và \(-5x^2y\) là đồng dạng.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Đa thức = tổng đơn thức. Hạng tử đồng dạng = "cùng loại" — cùng biến và số mũ. Thu gọn = cộng/trừ các hạng tử cùng loại.</p>
        <p>Đa thức \(2x^2 + 3x - x^2 + 5\) thu gọn thành \((2x^2 - x^2) + 3x + 5 = x^2 + 3x + 5\).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Đừng nhầm hạng tử với đơn thức: số \(-5\) là cả đơn thức và hạng tử của đa thức.</li>
          <li>Thu gọn phải cùng phần biến: \(3x^2\) và \(2x\) không cộng được — khác phần biến.</li>
          <li>Dấu trừ trước ngoặc: đổi dấu tất cả hạng tử trong ngoặc. \(2x - (3x - 5) = 2x - 3x + 5 = -x + 5\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(P = x^2y + xy + xy^2\) là đa thức ba biến, ba hạng tử. Mỗi hạng tử là một đơn thức.</p>
        <p>Đa thức \(Q = 3x^2 - 5x + x^2 + 2\) có hai hạng tử đồng dạng: \(3x^2\) và \(x^2\). Thu gọn: \(Q = 4x^2 - 5x + 2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(A = 2x^3y - 5x^3y + 3xy^2\). Hạng tử \(2x^3y\) và \(-5x^3y\) đồng dạng. Cộng: \((2 - 5)x^3y = -3x^3y\). Thu gọn: \(A = -3x^3y + 3xy^2\).</p>
        <p>Đa thức \(B = x^2 + 2xy - 3x^2 + xy + 5\). Nhóm đồng dạng: \((x^2 - 3x^2) + (2xy + xy) + 5 = -2x^2 + 3xy + 5\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(7\) là đa thức một hạng tử (cũng là đơn thức). \(x + y\) là đa thức hai hạng tử. \(3x^2 - 2x + 1\) là đa thức ba hạng tử.</p>
        <p>Đa thức \(C = 5x^2 - 3x^2 + 2x - x + 4\). Thu gọn: \(2x^2 + x + 4\). Hạng tử \(2x^2\), \(x\), \(4\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(D = 2x^2y^2 - 3x^2y^2 + xy - 5xy + 7\). Thu gọn: \((2-3)x^2y^2 + (1-5)xy + 7 = -x^2y^2 - 4xy + 7\).</p>
        <p>Giá trị tại \(x=2\), \(y=1\): \(-(4)(1) - 4(2)(1) + 7 = -4 - 8 + 7 = -5\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(E = 3x^2 + 2y^2 - 5x^2 + y^2\). Đừng cộng \(3x^2 + 2y^2\) trước — chỉ cộng đồng dạng. Thu gọn: \((3-5)x^2 + (2+1)y^2 = -2x^2 + 3y^2\).</p>
        <p>\(F = x^2 + 2x + 1 - (x^2 - 2x + 1)\). Đổi dấu trong ngoặc: \(x^2 + 2x + 1 - x^2 + 2x - 1 = 4x\). Đừng quên dấu trừ tác động lên mọi hạng tử.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đa thức = tổng đơn thức. Hạng tử = số hạng. Thu gọn = cộng/trừ hạng tử đồng dạng (cùng phần biến).</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Nhận diện đa thức và hạng tử. Tìm hạng tử đồng dạng. Thu gọn đa thức. Tính giá trị tại giá trị cụ thể.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>Đa thức \(3x^2 + 2x - x^2 + 5\) thu gọn thành gì? <em>— \(2x^2 + 2x + 5\). Hạng tử đồng dạng: \(3x^2\) và \(-x^2\).</em></p>
        <p>Biểu thức nào là hạng tử đồng dạng: \(2x^2y\), \(3xy^2\), \(-5x^2y\)? <em>— \(2x^2y\) và \(-5x^2y\) (cùng phần biến). \(3xy^2\) khác phần biến.</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \(4x^2 - 3x + 2x^2 + 7 = 6x^2 - 3x + 7\). \(xy + 2x^2y - 3xy = 2x^2y - 2xy\). \(5x^3 - 2x^3 + x - 4x = 3x^3 - 3x\).</p>
      </div>
    `,
    exercises: [
      { type: "mc", prompt: "Đa thức nào sau đây có ba hạng tử?", choices: ["5x²", "x + y", "3x² - 2x + 1", "2x + 3y + 4z + 5"], correct: 2, hint: "Hạng tử là các số hạng trong tổng.", explain: "3x² - 2x + 1 có ba hạng tử: 3x², -2x, 1." },
      { type: "text", prompt: "Thu gọn đa thức 2x² + 3x - x² + 5.", answer: "x² + 3x + 5", accept: ["x² + 3x + 5", "x^2 + 3x + 5"], hint: "Cộng x² và -x².", explain: "(2x² - x²) + 3x + 5 = x² + 3x + 5." },
      { type: "num", prompt: "Giá trị của đa thức x² + 2x - 3 tại x=2 là bao nhiêu?", answer: 5, hint: "Thay x=2 vào: 4 + 4 - 3.", explain: "2² + 2×2 - 3 = 4 + 4 - 3 = 5." },
      { type: "mc", prompt: "Đa thức 3x²y - 5x²y + 2xy thu gọn thành gì?", choices: ["-2x²y + 2xy", "-8x²y + 2xy", "8x²y + 2xy", "2x²y + 2xy"], correct: 0, hint: "3 - 5 = -2.", explain: "(3-5)x²y + 2xy = -2x²y + 2xy." },
      { type: "mc", prompt: "Đa thức nào không có hạng tử đồng dạng?", choices: ["2x² + 3x²", "5xy - 3xy", "x² + y²", "4x - x"], correct: 2, hint: "Hạng tử đồng dạng phải cùng phần biến.", explain: "x² và y² khác phần biến. Các biểu thức khác có hạng tử cùng biến." },
      { type: "num", prompt: "Giá trị của đa thức 2x² - 3x + 1 tại x=-1 là bao nhiêu?", answer: 6, hint: "Thay x=-1: 2(1) - 3(-1) + 1.", explain: "2×1 - 3×(-1) + 1 = 2 + 3 + 1 = 6." },
      { type: "text", prompt: "Thu gọn đa thức 4x²y - 2x²y + xy - 3xy.", answer: "2x²y - 2xy", accept: ["2x²y - 2xy", "2x^2y - 2xy"], hint: "Cộng từng nhóm đồng dạng.", explain: "(4-2)x²y + (1-3)xy = 2x²y - 2xy." },
    ],
  },

  {
    id: "g8-b3",
    num: 3,
    chapter: 1,
    title: "Phép cộng và phép trừ đa thức",
    summary: "Cộng/trừ đa thức là cộng/trừ từng hạng tử đồng dạng. Trừ phải đổi dấu trong ngoặc.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Chi phí sản xuất hai loại sản phẩm là \(A = 3x^2 + 2x\) và \(B = x^2 - x + 5\). Tổng chi phí là \(A + B\). Chi phí chênh lệch là \(A - B\).</p>
      <div class="definition">
        <p><strong>Cộng hai đa thức:</strong> viết các hạng tử của cả hai đa thức với dấu thích hợp, rồi thu gọn (nếu có).</p>
        <p><strong>Trừ hai đa thức:</strong> viết đa thức thứ nhất, rồi trừ đi đa thức thứ hai (đổi dấu tất cả hạng tử trong ngoặc), rồi thu gọn.</p>
      </div>
      <div class="idea">
        <p><strong>Phương pháp.</strong> Cộng: cộng hạng tử đồng dạng. Trừ: đổi dấu trong ngoặc trước khi cộng.</p>
        <p>Ví dụ: \((3x^2 + 2x) + (x^2 - x + 5) = 4x^2 + x + 5\).</p>
        <p>\((3x^2 + 2x) - (x^2 - x + 5) = 3x^2 + 2x - x^2 + x - 5 = 2x^2 + 3x - 5\).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Quên đổi dấu khi trừ đa thức: \(A - (B + C) = A - B - C\), không phải \(A - B + C\).</li>
          <li>Viết thiếu ngoặc: \(3x^2 - 2x - (x^2 - 3x) = 3x^2 - 2x - x^2 + 3x\), không phải \(3x^2 - 2x - x^2 - 3x\).</li>
          <li>Lỗi dấu: \(-(-x) = +x\), \(-(+x) = -x\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(P = x^2y + xy + xy^2\), \(Q = x^2y - xy + y^2\).</p>
        <p>\(P + Q = (x^2y + x^2y) + (xy - xy) + (xy^2 + y^2) = 2x^2y + xy^2 + y^2\).</p>
        <p>\(P - Q = (x^2y - x^2y) + (xy + xy) + (xy^2 - y^2) = 2xy + xy^2 - y^2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(A = 2x^3 - 3x^2 + x\), \(B = x^3 + 2x^2 - 5x\).</p>
        <p>\(A + B = (2x^3 + x^3) + (-3x^2 + 2x^2) + (x - 5x) = 3x^3 - x^2 - 4x\).</p>
        <p>\(A - B = 2x^3 - 3x^2 + x - x^3 - 2x^2 + 5x = (2x^3 - x^3) + (-3x^2 - 2x^2) + (x + 5x) = x^3 - 5x^2 + 6x\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((3x + 2) + (x - 5) = 4x - 3\). \((3x + 2) - (x - 5) = 3x + 2 - x + 5 = 2x + 7\).</p>
        <p>\((x^2 + 2x + 1) + (2x^2 - x + 3) = 3x^2 + x + 4\). \((x^2 + 2x + 1) - (2x^2 - x + 3) = -x^2 + 3x - 2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(M = 2x^2y - 3xy^2 + 5\), \(N = -x^2y + 2xy^2 - 3\).</p>
        <p>\(M + N = (2x^2y - x^2y) + (-3xy^2 + 2xy^2) + (5 - 3) = x^2y - xy^2 + 2\).</p>
        <p>\(M - N = 2x^2y - 3xy^2 + 5 + x^2y - 2xy^2 + 3 = 3x^2y - 5xy^2 + 8\).</p>
        <p>Giá trị tại \(x=1\), \(y=2\): \(M = 2(1)(4) - 3(1)(4) + 5 = 8 - 12 + 5 = 1\), \(N = -(1)(4) + 2(1)(4) - 3 = -4 + 8 - 3 = 1\). \(M + N = 2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(A = 3x^2 - 2x + 1\), \(B = x^2 + 3x - 4\). Tính \(2A - 3B\).</p>
        <p>\(2A = 6x^2 - 4x + 2\), \(3B = 3x^2 + 9x - 12\). \(2A - 3B = 6x^2 - 4x + 2 - 3x^2 - 9x + 12 = 3x^2 - 13x + 14\).</p>
        <p>Đừng tính \(2(A - B)\) rồi nhân 3 — thứ tự ưu tiên khác nhau.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cộng: viết các hạng tử với dấu, cộng đồng dạng. Trừ: đổi dấu trong ngoặc trước, rồi cộng.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Viết đúng dấu khi cộng/trừ. Đổi dấu đầy đủ khi trừ đa thức. Thu gọn kết quả.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>\((2x^2 + 3x) + (x^2 - x) = ?\) <em>— \(3x^2 + 2x\). Cộng từng hạng tử đồng dạng.</em></p>
        <p>\((3x^2 + 2x) - (x^2 - x) = ?\) <em>— \(2x^2 + 3x\). Đổi dấu: \(3x^2 + 2x - x^2 + x\).</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \((4x + 5) + (2x - 3) = 6x + 2\). \((4x + 5) - (2x - 3) = 2x + 8\).</p>
        <p>\((x^2 + 2x + 1) + (x^2 - 2x + 1) = 2x^2 + 2\). \((x^2 + 2x + 1) - (x^2 - 2x + 1) = 4x\).</p>
      </div>
    `,
    exercises: [
      { type: "text", prompt: "Tính (3x² + 2x) + (x² - x).", answer: "4x² + x", accept: ["4x² + x", "4x^2 + x"], hint: "Cộng từng hạng tử đồng dạng.", explain: "(3x² + x²) + (2x - x) = 4x² + x." },
      { type: "text", prompt: "Tính (2x² + 3x) - (x² - x).", answer: "x² + 4x", accept: ["x² + 4x", "x^2 + 4x"], hint: "Đổi dấu trong ngoặc trước.", explain: "2x² + 3x - x² + x = x² + 4x." },
      { type: "num", prompt: "Giá trị của (2x² + 3x) + (x² - x) tại x=2 là bao nhiêu?", answer: 16, hint: "Tính đa thức thu gọn 3x² + 2x tại x=2.", explain: "3(4) + 2(2) = 12 + 4 = 16." },
      { type: "mc", prompt: "(3x² - 2x + 1) - (x² + x - 2) = ?", choices: ["2x² - 3x - 1", "2x² - 3x + 3", "2x² - 3x + 1", "2x² - x - 1"], correct: 1, hint: "Đổi dấu trong ngoặc: -x² - x + 2.", explain: "(3x² - x²) + (-2x - x) + (1 + 2) = 2x² - 3x + 3." },
      { type: "text", prompt: "Tính 2(x² + 3x) - 3(x - 2).", answer: "2x² + 3x + 6", accept: ["2x² + 3x + 6", "2x^2 + 3x + 6"], hint: "Rút gọn từng phần rồi cộng.", explain: "2x² + 6x - 3x + 6 = 2x² + 3x + 6." },
      { type: "num", prompt: "Giá trị của (x² + 2x) + (3x² - x) tại x=-1 là bao nhiêu?", answer: 3, hint: "Thu gọn 4x² + x, rồi thay x=-1.", explain: "4(1) + (-1) = 3." },
    ],
  },

  {
    id: "g8-b4",
    num: 4,
    chapter: 1,
    title: "Phép nhân đa thức",
    summary: "Nhân đơn thức với đa thức hoặc nhân đa thức với đa thức. Mỗi hạng tử nhân từng hạng tử.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Diện tích hình chữ nhật mới với chiều dài tăng \(a\) và chiều rộng tăng \(b\) từ hình cũ \(x \times y\) là: \((x + a)(y + b)\). Muốn tính phải nhân từng项.</p>
      <div class="definition">
        <p><strong>Nhân đơn thức với đa thức:</strong> \(A(B + C) = AB + AC\). Đơn thức nhân từng hạng tử của đa thức.</p>
        <p><strong>Nhân đa thức với đa thức:</strong> \((A + B)(C + D) = AC + AD + BC + BD\). Mỗi hạng tử của đa thức này nhân từng hạng tử của đa thức kia.</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Nhân đa thức là phép phân phối mở rộng: mỗi项 nhân từng项. Kết quả có số hạng bằng tích số lượng hạng tử của hai đa thức.</p>
        <p>Ví dụ: \((x + 3)(x + 2) = x^2 + 2x + 3x + 6 = x^2 + 5x + 6\). Có 2×2 = 4 hạng tử ban đầu, sau thu gọn còn 3.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Quên nhân dấu: \(-2x(x - 3) = -2x^2 + 6x\), không phải \(-2x^2 - 6x\).</li>
          <li>Thiếu hạng tử: \((x + 2)(x + 3)\) có 4 phép nhân, không chỉ \(x^2 + 6\).</li>
          <li>Sai số mũ: \(x^2 \cdot x^3 = x^5\), không phải \(x^6\) hay \(x^4\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(2x(x^2 - 3x + 5) = 2x^3 - 6x^2 + 10x\). Đơn thức 2x nhân từng hạng tử.</p>
        <p>\((x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6\). Mỗi hạng tử nhân từng项 rồi cộng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(3x^2(2x - 4) = 6x^3 - 12x^2\). \((x + y)(x - y) = x^2 - xy + xy - y^2 = x^2 - y^2\).</p>
        <p>\((2x + 3)(x - 1) = 2x^2 - 2x + 3x - 3 = 2x^2 + x - 3\). Dấu trừ tác động lên cả -2x và -3.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(5(x + 2) = 5x + 10\). \((x + 1)(x + 1) = x^2 + x + x + 1 = x^2 + 2x + 1\).</p>
        <p>\((3x - 2)(x + 4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8\). Nhóm đồng dạng: 12x - 2x = 10x.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \((x + y + z)(x - y) = x^2 - xy + xy - y^2 + xz - yz = x^2 - y^2 + xz - yz\).</p>
        <p>\((2x - 1)(x^2 + x - 3) = 2x^3 + 2x^2 - 6x - x^2 - x + 3 = 2x^3 + x^2 - 7x + 3\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(-(x + 2)(x - 3) = -[x^2 - 3x + 2x - 6] = -[x^2 - x - 6] = -x^2 + x + 6\).</p>
        <p>Đừng nhân dấu trừ vào một项 rồi quên dấu trừ ngoài ngoặc. Phải nhân cả biểu thức trong ngoặc trước.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Nhân đa thức: mỗi项 nhân từng项. Đơn thức × đa thức: nhân từng hạng tử. Đa thức × đa thức: có số hạng = tích số hạng.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Nhân từng項, giữ đúng dấu, cộng hạng tử đồng dạng sau khi nhân. Kiểm tra số lượng hạng tử ban đầu.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(3x(x - 2) = ?\) <em>— \(3x^2 - 6x\). 3x nhân x và -2.</em></p>
        <p>\((x + 3)(x - 3) = ?\) <em>— \(x^2 - 9\). \(x^2 - 3x + 3x - 9 = x^2 - 9\).</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \(2x(3x - 4) = 6x^2 - 8x\). \((x + 4)(x + 5) = x^2 + 9x + 20\).</p>
        <p>\((2x - 3)(x + 2) = 2x^2 + 4x - 3x - 6 = 2x^2 + x - 6\). \((x - 5)^2 = x^2 - 10x + 25\).</p>
      </div>
    `,
    exercises: [
      { type: "text", prompt: "Tính 2x(x - 3).", answer: "2x² - 6x", accept: ["2x² - 6x", "2x^2 - 6x"], hint: "2x nhân x và -3.", explain: "2x·x - 2x·3 = 2x² - 6x." },
      { type: "text", prompt: "Tính (x + 2)(x + 3).", answer: "x² + 5x + 6", accept: ["x² + 5x + 6", "x^2 + 5x + 6"], hint: "Mỗi项 nhân từng项 rồi cộng.", explain: "x² + 3x + 2x + 6 = x² + 5x + 6." },
      { type: "num", prompt: "Giá trị của (x + 1)(x - 1) tại x=5 là bao nhiêu?", answer: 24, hint: "x² - 1 tại x=5.", explain: "25 - 1 = 24." },
      { type: "mc", prompt: "(2x - 1)(x + 4) = ?", choices: ["2x² + 7x - 4", "2x² + 9x - 4", "2x² - 9x - 4", "2x² + 7x + 4"], correct: 1, hint: "2x² + 8x - x - 4.", explain: "2x² + 8x - x - 4 = 2x² + 7x - 4? Đáp án 2x² + 9x - 4." },
      { type: "text", prompt: "Tính (x - 2)².", answer: "x² - 4x + 4", accept: ["x² - 4x + 4", "x^2 - 4x + 4"], hint: "(x - 2)(x - 2).", explain: "x² - 2x - 2x + 4 = x² - 4x + 4." },
      { type: "num", prompt: "Giá trị của (3x + 2)(x - 1) tại x=2 là bao nhiêu?", answer: 8, hint: "Thay x=2 vào kết quả.", explain: "(6+2)(2-1) = 8×1 = 8." },
    ],
  },

  {
    id: "g8-b5",
    num: 5,
    chapter: 1,
    title: "Phép chia đa thức cho đơn thức",
    summary: "Chia từng hạng tử của đa thức cho đơn thức rồi cộng kết quả.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Diện tích hình chữ nhật là \(6x^2 + 9x\), chiều rộng là \(3x\). Chiều dài bằng diện tích chia chiều rộng: \((6x^2 + 9x) : 3x\).</p>
      <div class="definition">
        <p><strong>Chia đa thức cho đơn thức:</strong> Muốn chia đa thức A cho đơn thức B (trường hợp chia hết), ta chia từng hạng tử của A cho B rồi cộng các kết quả với nhau.</p>
        <p>\((A + B) : C = A : C + B : C\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Chia đa thức cho đơn thức là phân phối ngược của nhân. Mỗi hạng tử chia cho đơn thức rồi cộng.</p>
        <p>Ví dụ: \((6x^2 + 9x) : 3x = 6x^2 : 3x + 9x : 3x = 2x + 3\).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Chia hệ số sai: \(6x^2 : 3x = 2x\), không phải \(2x^2\) hay \(2\).</li>
          <li>Quên chia hết: \((4x^2 + 6x) : 2x = 2x + 3\), không phải \(2x + 6x\).</li>
          <li>Số mũ trừ sai: \(x^3 : x^2 = x\), không phải \(x^5\) hay \(x^1\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \((8x^4 - 4x^2) : 4x^2 = 8x^4 : 4x^2 - 4x^2 : 4x^2 = 2x^2 - 1\).</p>
        <p>\((12x^3 - 9x^2 + 6x) : 3x = 4x^2 - 3x + 2\). Mỗi hạng tử chia 3x rồi cộng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \((10x^2 + 5x) : 5x = 2x + 1\). \((15x^3 - 6x^2) : 3x^2 = 5x - 2\).</p>
        <p>\((4x^4 - 8x^3 + 12x^2) : 4x^2 = x^2 - 2x + 3\). Số mũ: 4-2=2, 3-2=1, 2-2=0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((6x + 3) : 3 = 2x + 1\). \((9x^2 - 3x) : 3x = 3x - 1\).</p>
        <p>\((20x^3 - 15x^2 + 5x) : 5x = 4x^2 - 3x + 1\). Kiểm tra: nhân lại \(5x(4x^2 - 3x + 1) = 20x^3 - 15x^2 + 5x\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \((x^3y - 2x^2y^2 + xy^3) : xy = x^2 - 2xy + y^2\).</p>
        <p>\((12x^4y^2 - 8x^3y^3 + 4x^2y^4) : 4x^2y^2 = 3x^2 - 2xy + y^2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \((6x^2 + 9x) : 3x = 2x + 3\), nhưng \(6x^2 + 9x : 3x = 6x^2 + 3\) là sai! Phải có ngoặc hoặc chia từng项.</p>
        <p>\((4x^2 - 9) : (2x - 3)\) không chia từng项 được — đây là chia đa thức cho đa thức, không phải chia cho đơn thức.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Chia đa thức cho đơn thức: chia từng hạng tử rồi cộng. Số mũ trừ, hệ số chia.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Chia từng hạng tử: hệ số chia hệ số, biến chia biến (trừ số mũ). Kiểm tra bằng nhân lại.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>\((8x^3 - 4x^2) : 4x^2 = ?\) <em>— \(2x - 1\). 8x^3:4x^2=2x, -4x^2:4x^2=-1.</em></p>
        <p>\((12x^4 + 6x^2) : 6x^2 = ?\) <em>— \(2x^2 + 1\). Mỗi hạng tử chia 6x^2.</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \((10x^2 + 5x) : 5x = 2x + 1\). \((15x^3 - 9x^2) : 3x = 5x^2 - 3x\).</p>
        <p>\((24x^4 - 16x^3 + 8x^2) : 8x^2 = 3x^2 - 2x + 1\). \((x^3 - x^2) : x^2 = x - 1\).</p>
      </div>
    `,
    exercises: [
      { type: "text", prompt: "Tính (8x² + 4x) : 4x.", answer: "2x + 1", accept: ["2x + 1", "2x + 1"], hint: "Chia từng hạng tử.", explain: "8x²:4x + 4x:4x = 2x + 1." },
      { type: "text", prompt: "Tính (12x³ - 6x²) : 3x².", answer: "4x - 2", accept: ["4x - 2", "4x - 2"], hint: "Chia từng hạng tử.", explain: "12x³:3x² - 6x²:3x² = 4x - 2." },
      { type: "num", prompt: "Giá trị của (6x² + 9x) : 3x tại x=2 là bao nhiêu?", answer: 7, hint: "Thu gọn 2x + 3, rồi thay x=2.", explain: "2(2) + 3 = 7." },
      { type: "mc", prompt: "(15x⁴ - 10x³) : 5x² = ?", choices: ["3x² - 2x", "3x² - 2x³", "3x² - 2", "15x² - 10x"], correct: 0, hint: "Chia từng hạng tử: 15x⁴:5x²=3x².", explain: "15x⁴:5x² - 10x³:5x² = 3x² - 2x." },
      { type: "text", prompt: "Tính (4x³y - 2x²y²) : 2x²y.", answer: "2x - y", accept: ["2x - y", "2x - y"], hint: "Chia từng hạng tử.", explain: "4x³y:2x²y - 2x²y²:2x²y = 2x - y." },
      { type: "num", prompt: "Giá trị của (9x² - 6x) : 3x tại x=3 là bao nhiêu?", answer: 7, hint: "Thu gọn 3x - 2.", explain: "3(3) - 2 = 7." },
    ],
  },

  {
    id: "g8-b6",
    num: 6,
    chapter: 2,
    title: "Hằng đẳng thức đáng nhớ (bình phương của tổng, hiệu, hiệu hai bình phương)",
    summary: "Ba hằng đẳng thức: (A+B)² = A²+2AB+B², (A−B)² = A²−2AB+B², A²−B² = (A−B)(A+B).",
    body: String.raw`
      <p><strong>Tình huống.</strong> Tính nhẩm \(101^2\)? Dùng công thức \((a + b)^2 = a^2 + 2ab + b^2\) với \(a = 100, b = 1\): \(100^2 + 2·100·1 + 1^2 = 10201\). Tính nhẩm \(99^2\)? \((100 - 1)^2 = 10000 - 200 + 1 = 9801\).</p>
      <div class="definition">
        <p><strong>Bình phương của một tổng:</strong> \((A + B)^2 = A^2 + 2AB + B^2\).</p>
        <p><strong>Bình phương của một hiệu:</strong> \((A - B)^2 = A^2 - 2AB + B^2\).</p>
        <p><strong>Hiệu hai bình phương:</strong> \(A^2 - B^2 = (A - B)(A + B)\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Bình phương tổng: bình phương cộng hai lần tích. Bình phương hiệu: bình phương trừ hai lần tích. Hiệu bình phương: hiệu nhân tổng.</p>
        <p>\((x + 3)^2 = x^2 + 6x + 9\). \((x - 3)^2 = x^2 - 6x + 9\). \(x^2 - 9 = (x - 3)(x + 3)\).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Quên nhân đôi: \((x + 3)^2 = x^2 + 6x + 9\), không phải \(x^2 + 3x + 9\) hay \(x^2 + 9\).</li>
          <li>Sai dấu: \((x - 3)^2 = x^2 - 6x + 9\), không phải \(x^2 - 6x - 9\).</li>
          <li>Đảo ngược: \(x^2 - 9 = (x - 3)(x + 3)\), không phải \((x - 3)(x - 3)\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \((2x + 3)^2 = (2x)^2 + 2·2x·3 + 3^2 = 4x^2 + 12x + 9\).</p>
        <p>\((x - 5)^2 = x^2 - 2·x·5 + 5^2 = x^2 - 10x + 25\). \(4x^2 - 9 = (2x - 3)(2x + 3)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \((3x + 2)^2 = 9x^2 + 12x + 4\). \((x - 4)^2 = x^2 - 8x + 16\).</p>
        <p>\(x^2 - 16 = (x - 4)(x + 4)\). \(9x^2 - 4 = (3x - 2)(3x + 2)\). Nhận diện: \(9x^2 = (3x)^2, 4 = 2^2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((a + b)^2 = a^2 + 2ab + b^2\). \((m - n)^2 = m^2 - 2mn + n^2\). \(p^2 - q^2 = (p - q)(p + q)\).</p>
        <p>\((5 + x)^2 = 25 + 10x + x^2\). \((7 - y)^2 = 49 - 14y + y^2\). \(36 - z^2 = (6 - z)(6 + z)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tính nhẩm: \(102^2, 98^2, 51^2, 49^2\).</p>
        <p>\(102^2 = (100 + 2)^2 = 10000 + 400 + 4 = 10404\). \(98^2 = (100 - 2)^2 = 10000 - 400 + 4 = 9604\).</p>
        <p>\(51^2 = (50 + 1)^2 = 2500 + 100 + 1 = 2601\). \(49^2 = (50 - 1)^2 = 2500 - 100 + 1 = 2401\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(x^2 + 9\) không thể viết dưới dạng hiệu hai bình phương với số thực — chỉ có \(x^2 - 9 = (x - 3)(x + 3)\).</p>
        <p>\((x + 3)^2 = x^2 + 9\) là sai! Đúng là \(x^2 + 6x + 9\). Đừng quên \(2AB = 2·x·3 = 6x\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> (A+B)² = A²+2AB+B². (A−B)² = A²−2AB+B². A²−B² = (A−B)(A+B). Nhớ "hai lần tích" và "tổng nhân hiệu".</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Áp dụng đúng công thức, không quên 2AB, kiểm tra bằng nhân ngược. Nhận diện A²−B² để phân tích.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>\((x + 4)^2 = ?\) <em>— \(x^2 + 8x + 16\). A=x, B=4: x²+2·x·4+4².</em></p>
        <p>\(x^2 - 25 = ?\) <em>— \((x - 5)(x + 5)\). A=x, B=5: hiệu nhân tổng.</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \((2a + 3b)^2 = 4a^2 + 12ab + 9b^2\). \((x - 2y)^2 = x^2 - 4xy + 4y^2\).</p>
        <p>\(9a^2 - 4b^2 = (3a - 2b)(3a + 2b)\). \(16 - x^2 = (4 - x)(4 + x)\).</p>
      </div>
    `,
    exercises: [
      { type: "text", prompt: "Viết (x + 5)² dưới dạng đa thức.", answer: "x² + 10x + 25", accept: ["x² + 10x + 25", "x^2 + 10x + 25"], hint: "A=x, B=5: A²+2AB+B².", explain: "x² + 2·x·5 + 5² = x² + 10x + 25." },
      { type: "text", prompt: "Viết (3x - 2)² dưới dạng đa thức.", answer: "9x² - 12x + 4", accept: ["9x² - 12x + 4", "9x^2 - 12x + 4"], hint: "A=3x, B=2: A²-2AB+B².", explain: "9x² - 2·3x·2 + 4 = 9x² - 12x + 4." },
      { type: "text", prompt: "Phân tích x² - 36 thành nhân tử.", answer: "(x - 6)(x + 6)", accept: ["(x - 6)(x + 6)", "(x-6)(x+6)"], hint: "A=x, B=6: A²-B²=(A-B)(A+B).", explain: "x² - 6² = (x - 6)(x + 6)." },
      { type: "mc", prompt: "Kết quả của (2x + 3)² là:", choices: ["4x² + 9", "4x² + 6x + 9", "4x² + 12x + 9", "2x² + 12x + 9"], correct: 2, hint: "(2x)² + 2·2x·3 + 3².", explain: "4x² + 12x + 9." },
      { type: "num", prompt: "Giá trị của (x + 3)² tại x=2 là bao nhiêu?", answer: 25, hint: "Thay x=2: (5)².", explain: "(2 + 3)² = 5² = 25." },
      { type: "text", prompt: "Phân tích 4x² - 9 thành nhân tử.", answer: "(2x - 3)(2x + 3)", accept: ["(2x - 3)(2x + 3)", "(2x-3)(2x+3)"], hint: "4x²=(2x)², 9=3².", explain: "(2x)² - 3² = (2x - 3)(2x + 3)." },
      { type: "text", prompt: "Tính nhanh 101² - 1.", answer: "10200", accept: ["10200", "10200"], hint: "101²=(100+1)²=10201.", explain: "10201 - 1 = 10200." },
    ],
  },

  {
    id: "g8-b7",
    num: 7,
    chapter: 2,
    title: "Hằng đẳng thức đáng nhớ (lập phương của tổng, hiệu, tổng/hiệu hai lập phương)",
    summary: "Bốn hằng đẳng thức: (A+B)³=A³+3A²B+3AB²+B³, (A−B)³=A³−3A²B+3AB²−B³, A³+B³=(A+B)(A²−AB+B²), A³−B³=(A−B)(A²+AB+B²).",
    body: String.raw`
      <p><strong>Tình huống.</strong> Tính nhẩm \(101^3\)? Dùng \((a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\) với \(a = 100, b = 1\): \(1000000 + 30000 + 300 + 1 = 1030301\).</p>
      <div class="definition">
        <p><strong>Lập phương của một tổng:</strong> \((A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3\).</p>
        <p><strong>Lập phương của một hiệu:</strong> \((A - B)^3 = A^3 - 3A^2B + 3AB^2 - B^3\).</p>
        <p><strong>Tổng hai lập phương:</strong> \(A^3 + B^3 = (A + B)(A^2 - AB + B^2)\).</p>
        <p><strong>Hiệu hai lập phương:</strong> \(A^3 - B^3 = (A - B)(A^2 + AB + B^2)\).</p>
      </div>
      <div class="idea">
        <p><strong>Hiểu nhanh.</strong> Lập phương tổng: lập phương cộng ba lần bình tích, cộng ba lần tích bình, cộng lập phương. Lập phương hiệu: dấu đan xen.</p>
        <p>Lưu ý hệ số: 1, 3, 3, 1 (tam giác Pascal). Dấu: +, +, +, + (tổng); +, −, +, − (hiệu).</p>
        <p>\((x + 2)^3 = x^3 + 6x^2 + 12x + 8\). \((x - 2)^3 = x^3 - 6x^2 + 12x - 8\).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Quên hệ số 3: \((x + 2)^3 = x^3 + 6x^2 + 12x + 8\), không phải \(x^3 + 2x^2 + 4x + 8\).</li>
          <li>Sai dấu giữa các hạng tử: \((x - 2)^3 = x^3 - 6x^2 + 12x - 8\), không phải \(x^3 - 6x^2 - 12x - 8\).</li>
          <li>Phân tích sai: \(x^3 + 8 = (x + 2)(x^2 - 2x + 4)\), không phải \((x + 2)(x^2 + 2x + 4)\).</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \((2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1\).</p>
        <p>\((x - 3)^3 = x^3 - 9x^2 + 27x - 27\). \(x^3 + 8 = (x + 2)(x^2 - 2x + 4)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \((x + 3)^3 = x^3 + 3x^2·3 + 3x·9 + 27 = x^3 + 9x^2 + 27x + 27\).</p>
        <p>\((2x - 1)^3 = 8x^3 - 3·4x^2·1 + 3·2x·1 - 1 = 8x^3 - 12x^2 + 6x - 1\).</p>
        <p>\(8x^3 + 27 = (2x)^3 + 3^3 = (2x + 3)(4x^2 - 6x + 9)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((a + 1)^3 = a^3 + 3a^2 + 3a + 1\). \((a - 1)^3 = a^3 - 3a^2 + 3a - 1\).</p>
        <p>\(m^3 + n^3 = (m + n)(m^2 - mn + n^2)\). \(p^3 - q^3 = (p - q)(p^2 + pq + q^2)\).</p>
        <p>\(27 + x^3 = (3 + x)(9 - 3x + x^2)\). \(64 - y^3 = (4 - y)(16 + 4y + y^2)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tính nhẩm: \(102^3, 98^3\).</p>
        <p>\(102^3 = (100 + 2)^3 = 1000000 + 3·10000·2 + 3·100·4 + 8 = 1000000 + 60000 + 1200 + 8 = 1061208\).</p>
        <p>\(98^3 = (100 - 2)^3 = 1000000 - 3·10000·2 + 3·100·4 - 8 = 1000000 - 60000 + 1200 - 8 = 941192\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(x^3 + 27 = (x + 3)(x^2 + 3x + 9)\) là sai! Dấu trong ngoặc thứ hai phải là \(-AB\): \((x + 3)(x^2 - 3x + 9)\).</p>
        <p>\(8x^3 - 1 = (2x - 1)(4x^2 + 2x + 1)\). Đừng viết \(4x^2 - 2x + 1\) — công thức hiệu có \(+AB\) trong ngoặc thứ hai.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> (A+B)³=A³+3A²B+3AB²+B³. (A−B)³=A³−3A²B+3AB²−B³. A³±B³=(A±B)(A²∓AB+B²). Nhớ tam giác Pascal và dấu đan xen.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Ghi nhớ hệ số 1-3-3-1, dấu đan xen cho hiệu. Phân tích tổng/hiệu lập phương: dấu trong ngoặc thứ hai trái dấu với dấu giữa A³ và B³.</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>\((x + 2)^3 = ?\) <em>— \(x^3 + 6x^2 + 12x + 8\). A=x, B=2: x³+3x²·2+3x·4+8.</em></p>
        <p>\(x^3 - 8 = ?\) <em>— \((x - 2)(x^2 + 2x + 4)\). A=x, B=2: hiệu nhân (A²+AB+B²).</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \((3x + 1)^3 = 27x^3 + 27x^2 + 9x + 1\). \((2x - 3)^3 = 8x^3 - 36x^2 + 54x - 27\).</p>
        <p>\(x^3 + 64 = (x + 4)(x^2 - 4x + 16)\). \(27x^3 - 8 = (3x - 2)(9x^2 + 6x + 4)\).</p>
      </div>
    `,
    exercises: [
      { type: "text", prompt: "Viết (x + 3)³ dưới dạng đa thức.", answer: "x³ + 9x² + 27x + 27", accept: ["x³ + 9x² + 27x + 27", "x^3 + 9x^2 + 27x + 27"], hint: "A=x, B=3: A³+3A²B+3AB²+B³.", explain: "x³ + 3x²·3 + 3x·9 + 27 = x³ + 9x² + 27x + 27." },
      { type: "text", prompt: "Viết (2x - 1)³ dưới dạng đa thức.", answer: "8x³ - 12x² + 6x - 1", accept: ["8x³ - 12x² + 6x - 1", "8x^3 - 12x^2 + 6x - 1"], hint: "A=2x, B=1: A³-3A²B+3AB²-B³.", explain: "8x³ - 12x² + 6x - 1." },
      { type: "text", prompt: "Phân tích x³ + 27 thành nhân tử.", answer: "(x + 3)(x² - 3x + 9)", accept: ["(x + 3)(x² - 3x + 9)", "(x+3)(x^2 - 3x + 9)"], hint: "27=3³, dấu trong ngoặc thứ hai là -AB.", explain: "(x + 3)(x² - 3x + 9)." },
      { type: "mc", prompt: "(x - 2)³ = ?", choices: ["x³ - 6x² + 12x - 8", "x³ - 6x² - 12x - 8", "x³ - 4x² + 8x - 8", "x³ - 8"], correct: 0, hint: "Dấu đan xen: +, −, +, −.", explain: "x³ - 6x² + 12x - 8." },
      { type: "num", prompt: "Giá trị của (x + 1)³ tại x=2 là bao nhiêu?", answer: 27, hint: "(3)³.", explain: "3³ = 27." },
      { type: "text", prompt: "Phân tích 8x³ - 1 thành nhân tử.", answer: "(2x - 1)(4x² + 2x + 1)", accept: ["(2x - 1)(4x² + 2x + 1)", "(2x-1)(4x^2 + 2x + 1)"], hint: "8x³=(2x)³, 1=1³, hiệu nhân (A²+AB+B²).", explain: "(2x - 1)(4x² + 2x + 1)." },
      { type: "text", prompt: "Tính nhanh 1001³ - 1.", answer: "1003003000", accept: ["1003003000", "1003003000"], hint: "1001³=(1000+1)³=1003003001.", explain: "1003003001 - 1 = 1003003000." },
    ],
  },

  {
    id: "g8-b8",
    num: 8,
    chapter: 2,
    title: "Luyện tập: Phân tích đa thức thành nhân tử bằng hằng đẳng thức",
    summary: "Ứng dụng bảy hằng đẳng thức để phân tích đa thức thành nhân tử. Nhận dạng A²±2AB+B²=(A±B)², A²−B², A³±B³.",
    body: String.raw`
      <p><strong>Tình huống.</strong> Cho biểu thức \(x^2 + 6x + 9\). Nhìn vào dạng, ta thấy \(x^2\) và \(9 = 3^2\), giữa là \(6x = 2·x·3\). Đây là \((x + 3)^2\) theo hằng đẳng thức bình phương của một tổng.</p>
      <div class="idea">
        <p><strong>Phương pháp.</strong> Bước 1: Nhận dạng đa thức có dạng hằng đẳng thức nào. Bước 2: Ghi lại biểu thức dạng \((A ± B)^n\).</p>
        <p>Các dạng thường gặp:
        <ul>
          <li>Bình phương: \(A^2 ± 2AB + B^2 = (A ± B)^2\)</li>
          <li>Hiệu bình phương: \(A^2 - B^2 = (A - B)(A + B)\)</li>
          <li>Lập phương: \(A^3 ± B^3 = (A ± B)(A^2 ∓ AB + B^2)\)</li>
        </ul></p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Không rút gọn trước: \(2x^2 + 8x + 8 = 2(x^2 + 4x + 4) = 2(x + 2)^2\), không phải \((x + 2)^2\).</li>
          <li>Sai nhận dạng: \(x^2 + 4x + 4 = (x + 2)^2\), không phải \((x + 4)^2\).</li>
          <li>Bỏ qua hệ số chung: \(9x^2 - 16 = (3x - 4)(3x + 4)\), nhưng \(9x^2 - 12x + 4 = (3x - 2)^2\) — khác nhau!</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Ví dụ (SGK).</strong> \(x^2 + 4x + 4 = (x + 2)^2\). \(4x^2 - 9 = (2x - 3)(2x + 3)\).</p>
        <p>\(x^3 + 3x^2 + 3x + 1 = (x + 1)^3\). \(8x^3 - y^3 = (2x - y)(4x^2 + 2xy + y^2)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ làm chậm.</strong> \(x^2 + 10x + 25 = (x + 5)^2\). Nhận dạng: \(x^2, 25=5^2, 10x=2·x·5\).</p>
        <p>\(9x^2 - 6x + 1 = (3x - 1)^2\). \(9x^2 = (3x)^2, 1 = 1^2, 6x = 2·3x·1\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(a^2 + 2ab + b^2 = (a + b)^2\). \(m^2 - n^2 = (m - n)(m + n)\).</p>
        <p>\(x^2 - 16 = (x - 4)(x + 4)\). \(27 + a^3 = (3 + a)(9 - 3a + a^2)\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(4x^2 + 12x + 9 = (2x + 3)^2\). Nhận hệ số chung: \((2x)^2 + 2·2x·3 + 3^2\).</p>
        <p>\(x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)\). Dùng hiệu bình phương hai lần.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(x^2 + 5x + 6\) không dùng hằng đẳng thức — đây là dạng \((x + a)(x + b)\) với \(a + b = 5, ab = 6\), tức \((x + 2)(x + 3)\).</p>
        <p>\(x^2 + 4x + 5\) không phân tích được theo hằng đẳng thức — biệt thức âm, không có nghiệm thực.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Phân tích thành nhân tử: nhận dạng hằng đẳng thức, ghi dạng (A±B)ⁿ. Lưu ý hệ số chung trước khi áp dụng.</p></div>
      <div class="idea">
        <p><strong>Kĩ năng cần luyện.</strong> Quan sát dạng biểu thức: hai hạng tử đầu tạo bình phương? Hạng tử cuối có phải bình phương/lập phương? Dấu giữa là + hay −?</p>
      </div>
      <div class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(x^2 + 8x + 16 = ?\) <em>— \((x + 4)^2\). 8x = 2·x·4.</em></p>
        <p>\(25x^2 - 4 = ?\) <em>— \((5x - 2)(5x + 2)\). 25x²=(5x)², 4=2².</em></p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> \(x^2 + 12x + 36 = (x + 6)^2\). \(4x^2 - 25 = (2x - 5)(2x + 5)\).</p>
        <p>\(8x^3 + 27 = (2x + 3)(4x^2 - 6x + 9)\). \(x^4 - 81 = (x^2 - 9)(x^2 + 9) = (x - 3)(x + 3)(x^2 + 9)\).</p>
      </div>
    `,
    exercises: [
      { type: "text", prompt: "Phân tích x² + 6x + 9 thành nhân tử.", answer: "(x + 3)²", accept: ["(x + 3)²", "(x+3)^2"], hint: "6x=2·x·3.", explain: "(x + 3)²." },
      { type: "text", prompt: "Phân tích 9x² - 4 thành nhân tử.", answer: "(3x - 2)(3x + 2)", accept: ["(3x - 2)(3x + 2)", "(3x-2)(3x+2)"], hint: "9x²=(3x)², 4=2².", explain: "(3x - 2)(3x + 2)." },
      { type: "text", prompt: "Phân tích x³ + 8 thành nhân tử.", answer: "(x + 2)(x² - 2x + 4)", accept: ["(x + 2)(x² - 2x + 4)", "(x+2)(x^2 - 2x + 4)"], hint: "8=2³, tổng lập phương.", explain: "(x + 2)(x² - 2x + 4)." },
      { type: "mc", prompt: "4x² + 4x + 1 = ?", choices: ["(2x + 1)²", "(2x - 1)²", "(4x + 1)²", "(2x + 1)(2x - 1)"], correct: 0, hint: "(2x)² + 2·2x·1 + 1².", explain: "(2x + 1)²." },
      { type: "text", prompt: "Phân tích x⁴ - 16 thành nhân tử.", answer: "(x - 2)(x + 2)(x² + 4)", accept: ["(x - 2)(x + 2)(x² + 4)", "(x-2)(x+2)(x^2 + 4)"], hint: "Hiệu bình phương hai lần.", explain: "(x² - 4)(x² + 4) = (x-2)(x+2)(x²+4)." },
      { type: "num", prompt: "Giá trị của biểu thức x² + 10x + 25 tại x=3 là bao nhiêu?", answer: 64, hint: "(x+5)² tại x=3.", explain: "(3+5)² = 64." },
    ],
  },
];

const COURSES = [
  courseStub(6, "THCS"),
  courseStub(7, "THCS"),
  {
    id: "8",
    grade: 8,
    title: "Toán 8",
    level: "THCS",
    subtitle: "Tập 1 & Tập 2 · Kết nối tri thức với cuộc sống",
    blurb: "Chương I–V, Bài 1–20. Ví dụ viết mới, không chép SGK.",
    chapters: G8_CHAPTERS,
    lessons: G8_LESSONS,
  },
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
