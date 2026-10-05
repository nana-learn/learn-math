// Toán 7 Tập 1 – Kết nối tri thức. Mạch bài theo SGK, lời và ví dụ viết mới.
// Không chép đề hay đoạn văn trong sách.
const G7_CHAPTERS = [
  { id: 1, title: "Số hữu tỉ" },
  { id: 2, title: "Số thực" },
  { id: 3, title: "Góc và đường thẳng song song" },
  { id: 4, title: "Tam giác bằng nhau" },
  { id: 5, title: "Thu thập và biểu diễn dữ liệu" },
];

const G7_LESSONS = [
  {
    id: "g7-b1",
    num: 1,
    chapter: 1,
    title: "Tập hợp các số hữu tỉ",
    summary: "Số hữu tỉ là số viết được thành phân số. Cùng một số có nhiều cách viết.",
    body: String.raw`
      <p><strong>Vì sao cần số hữu tỉ?</strong> Số nguyên đếm được quả cam. Muốn nói “ba phần tư cái bánh” thì phải có số dạng phân số. Mọi số viết được thành \(\dfrac{a}{b}\) với \(a, b\) nguyên, \(b \neq 0\), gọi là số hữu tỉ. Tập hợp ấy kí hiệu \(\mathbb{Q}\).</p>
      <div class="definition">
        <p>Số hữu tỉ là số viết được dưới dạng \(\dfrac{a}{b}\), \(a, b \in \mathbb{Z}\), \(b \neq 0\). Số đối của số hữu tỉ \(m\) là \(-m\), cũng hữu tỉ.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(6 = \dfrac{6}{1}\). \(0{,}4 = \dfrac{2}{5}\). \(-\dfrac{3}{2}\) đã là phân số. Hỗn số \(1\dfrac{1}{4} = \dfrac{5}{4}\). Cả bốn đều thuộc \(\mathbb{Q}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Trên trục số, lấy đoạn từ 0 đến 1 chia 3 phần bằng nhau. Điểm cách gốc 2 phần đơn vị mới là \(\dfrac{2}{3}\). Điểm đối xứng qua gốc là \(-\dfrac{2}{3}\). Hai điểm cách gốc một khoảng bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{6}{8}\) và \(\dfrac{3}{4}\) là cùng một số, vì nhân tử và mẫu của \(\dfrac{3}{4}\) với 2. Không phải hai số hữu tỉ khác nhau. \(\pi\) không viết được thành phân số nguyên, nên không hữu tỉ — bài sau sẽ nói rõ.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Muốn biết một số có hữu tỉ không: tìm một phân số nguyên bằng nó. Số nguyên, thập phân hữu hạn, hỗn số đều được.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Số nào không viết được thành phân số với tử, mẫu nguyên?", choices: ["−7", "0,25", "2,5", "Không chọn được trong ba số trên"], correct: 3, hint: "Cả −7, 0,25 và 2,5 đều viết được thành a/b.", explain: "−7 = −7/1, 0,25 = 1/4, 2,5 = 5/2. Cả ba đều hữu tỉ." },
      { type: "num", prompt: "Hỗn số 3 1/5 bằng phân số a/5. Tử a bằng bao nhiêu?", answer: 16, hint: "3 lần 5 cộng 1.", explain: "3 + 1/5 = 16/5." },
      { type: "mc", prompt: "Trên trục số, điểm biểu diễn −3/2 nằm ở đâu so với gốc?", choices: ["Bên phải, cách gốc 1,5 đơn vị", "Bên trái, cách gốc 1,5 đơn vị", "Trùng gốc", "Bên trái, cách gốc 3 đơn vị"], correct: 1, hint: "Số âm đứng bên trái. 3/2 = 1,5.", explain: "−3/2 = −1,5, bên trái gốc, khoảng cách 1,5." },
    ],
  },
  {
    id: "g7-b2",
    num: 2,
    chapter: 1,
    title: "Cộng, trừ, nhân, chia số hữu tỉ",
    summary: "Đưa về phân số có mẫu dương, rồi cộng trừ nhân chia như phân số đã học.",
    body: String.raw`
      <p>Phép tính trên \(\mathbb{Q}\) không mới. Việc cần làm là viết mỗi số thành phân số, mẫu dương, rồi dùng quy tắc cũ.</p>
      <div class="idea">
        <p>Cộng trừ: quy đồng mẫu. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với nghịch đảo. Mẫu của kết quả phải khác 0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\dfrac{1}{6} + \dfrac{1}{3} = \dfrac{1}{6} + \dfrac{2}{6} = \dfrac{3}{6} = \dfrac{1}{2}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(-\dfrac{2}{5} \cdot \dfrac{15}{8} = -\dfrac{2 \cdot 15}{5 \cdot 8} = -\dfrac{30}{40} = -\dfrac{3}{4}\). Rút gọn trước khi nhân cũng được: 15 và 5 có ước 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{2}{-3} + \dfrac{1}{2}\). Đưa mẫu âm lên tử: \(-\dfrac{2}{3} + \dfrac{1}{2} = \dfrac{-4 + 3}{6} = -\dfrac{1}{6}\). Cộng ngay \(\dfrac{2 + 1}{-3 + 2}\) là sai.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Mẫu dương trước khi tính. Chia cho 0 thì phép tính không có nghĩa.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "Tính 1/4 + 1/12. Viết phân số tối giản.", answer: "1/3", accept: ["1/3"], hint: "Quy đồng mẫu 12.", explain: "3/12 + 1/12 = 4/12 = 1/3." },
      { type: "text", prompt: "Tính (−3/4) : (1/8). Viết số nguyên hoặc phân số.", answer: "-6", accept: ["-6", "−6"], hint: "Chia là nhân nghịch đảo 8/1.", explain: "(−3/4)·8 = −6." },
      { type: "mc", prompt: "Phép tính nào không thực hiện được trong Q?", choices: ["0 : 5", "5 : 0", "0 · 5", "−5 + 0"], correct: 1, hint: "Không chia cho 0.", explain: "Mẫu bằng 0 thì không có thương." },
    ],
  },
  {
    id: "g7-b3",
    num: 3,
    chapter: 1,
    title: "Luỹ thừa với số mũ tự nhiên",
    summary: "a^n là nhân a với chính nó n lần. Mũ 0 bằng 1 khi cơ số khác 0.",
    body: String.raw`
      <p>\(2^5\) không phải \(2 \cdot 5\). Đó là năm thừa số 2 nhân với nhau: \(2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32\).</p>
      <div class="definition">
        <p>Với \(n\) nguyên dương, \(a^n = a \cdot a \cdots a\) (\(n\) thừa số). \(a^1 = a\). Nếu \(a \neq 0\) thì \(a^0 = 1\).</p>
        <p>\(a^m \cdot a^n = a^{m+n}\). \(a^m : a^n = a^{m-n}\) khi \(a \neq 0\) và \(m \geq n\). \((a^m)^n = a^{mn}\). \((ab)^n = a^n b^n\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\left(-\dfrac{1}{2}\right)^3 = -\dfrac{1}{8}\). Mũ lẻ giữ dấu trừ. Mũ chẵn thì dương: \(\left(-\dfrac{1}{2}\right)^2 = \dfrac{1}{4}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\dfrac{3^7}{3^4} = 3^{3} = 27\). Không trừ cơ số.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(2^3 \cdot 2^3 = 2^6 = 64\), không phải \(4^3\). \((2^3)^2 = 2^6 = 64\), còn \(2^{(3^2)} = 2^9 = 512\). Thứ tự mũ khác nhau thì kết quả khác nhau.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cùng cơ số thì cộng trừ mũ khi nhân chia. Nhân cơ số thì mũ phân phối. Không đổi \(a^n + b^n\) thành \((a+b)^n\).</p></div>
    `,
    exercises: [
      { type: "num", prompt: "(−2)^4 bằng bao nhiêu?", answer: 16, hint: "Bốn thừa số −2. Mũ chẵn.", explain: "(−2)(−2)(−2)(−2) = 16." },
      { type: "num", prompt: "5^0 bằng bao nhiêu?", answer: 1, hint: "Cơ số khác 0 thì mũ 0 bằng 1.", explain: "5 ≠ 0 nên 5^0 = 1." },
      { type: "mc", prompt: "2^3 · 2^2 bằng", choices: ["2^5", "4^5", "2^6", "4^6"], correct: 0, hint: "Cùng cơ số, cộng mũ.", explain: "2^{3+2} = 2^5 = 32." },
    ],
  },
  {
    id: "g7-b4",
    num: 4,
    chapter: 1,
    title: "Thứ tự phép tính và chuyển vế",
    summary: "Ngoặc trước, rồi mũ, rồi nhân chia, rồi cộng trừ. Chuyển vế thì đổi dấu.",
    body: String.raw`
      <p>Không tính từ trái sang phải một mạch. Có ngoặc thì làm trong ngoặc trước. Rồi luỹ thừa. Rồi nhân chia. Cuối cùng cộng trừ.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(3 + 4 \cdot 2 = 3 + 8 = 11\), không phải \(14\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Phương trình \(x + \dfrac{2}{5} = \dfrac{7}{5}\). Chuyển \(\dfrac{2}{5}\) sang vế phải và đổi thành trừ: \(x = \dfrac{7}{5} - \dfrac{2}{5} = 1\). Kiểm tra: \(1 + 2/5 = 7/5\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(12 : 3 \cdot 2 = 4 \cdot 2 = 8\), không phải \(12 : 6 = 2\). Nhân và chia cùng bậc, làm từ trái sang phải. \(2^{3^2}\) nếu viết chồng thì từ trên xuống, còn \( (2^3)^2 = 64\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Chuyển hạng tử sang vế kia thì đổi dấu. Chuyển thừa số thì nhân hoặc chia hai vế cùng một số khác 0.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "3 + 4 · 5 bằng bao nhiêu?", answer: 23, hint: "Nhân trước.", explain: "3 + 20 = 23." },
      { type: "num", prompt: "x − 1/2 = 5/2. Giá trị x bằng bao nhiêu?", answer: 3, hint: "Chuyển −1/2 thành cộng 1/2.", explain: "x = 5/2 + 1/2 = 3." },
      { type: "mc", prompt: "12 − 4 + 2 bằng", choices: ["6", "10", "18", "8"], correct: 1, hint: "Cộng trừ cùng bậc, trái sang phải.", explain: "8 + 2 = 10. Không phải 12 − 6." },
    ],
  },
  {
    id: "g7-b5",
    num: 5,
    chapter: 2,
    title: "Số thập phân vô hạn tuần hoàn",
    summary: "Phân số thành thập phân: hoặc dừng, hoặc lặp một cụm chữ số.",
    body: String.raw`
      <p>Chia tử cho mẫu. Có lúc hết dư, được thập phân hữu hạn. Có lúc dư lặp lại, chữ số sau dấu phẩy lặp một cụm. Đó là thập phân vô hạn tuần hoàn, vẫn là số hữu tỉ.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\dfrac{1}{4} = 0{,}25\), hữu hạn. \(\dfrac{1}{3} = 0{,}333\ldots = 0,\overline{3}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\dfrac{1}{6} = 0{,}1666\ldots = 0,1\overline{6}\). Cụm lặp là 6, chữ số 1 không lặp.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0,\overline{9} = 1\). Không phải “gần 1 nhưng nhỏ hơn”. Mọi thập phân tuần hoàn đều đổi ngược thành phân số.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hữu hạn hay tuần hoàn thì hữu tỉ. Thập phân vô hạn không tuần hoàn thì không hữu tỉ.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "1/3 viết thập phân là", choices: ["0,3", "0,33", "0,333… tuần hoàn", "Không viết được"], correct: 2, hint: "Chia 1 cho 3, dư luôn là 1.", explain: "0,333… = 0,overline{3}." },
      { type: "num", prompt: "0,25 bằng phân số tối giản a/4. Tử a bằng bao nhiêu?", answer: 1, hint: "0,25 = 25/100 rồi rút.", explain: "1/4." },
      { type: "mc", prompt: "Số nào là thập phân tuần hoàn?", choices: ["0,5", "0,125", "0,142857142857…", "2"], correct: 2, hint: "Nhìn cụm chữ số lặp.", explain: "Đó là 1/7." },
    ],
  },
  {
    id: "g7-b6",
    num: 6,
    chapter: 2,
    title: "Số vô tỉ và căn bậc hai số học",
    summary: "Cạnh hình vuông diện tích 2 không hữu tỉ. √a là số không âm có bình phương bằng a.",
    body: String.raw`
      <p>Hình vuông diện tích 2. Cạnh \(x > 0\) thỏa \(x^2 = 2\). Không có phân số nào bình phương ra 2. Số ấy viết \(x = \sqrt{2} \approx 1{,}41421\ldots\), thập phân vô hạn không tuần hoàn. Đó là số vô tỉ.</p>
      <div class="definition">
        <p>Với \(a \geq 0\), căn bậc hai số học \(\sqrt{a}\) là số không âm \(b\) sao cho \(b^2 = a\). \(\sqrt{a} \geq 0\). \(\sqrt{a^2} = |a|\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\sqrt{9} = 3\), không phải \(\pm 3\). Dấu căn chỉ lấy phần không âm. Nghiệm của \(x^2 = 9\) mới là \(3\) và \(-3\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\sqrt{0{,}25} = 0{,}5\), vì \(0{,}5^2 = 0{,}25\). \(\sqrt{\dfrac{4}{9}} = \dfrac{2}{3}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\sqrt{4 + 5} = 3\), không phải \(2 + \sqrt{5}\). \(\sqrt{(-3)^2} = 3\), không phải \(-3\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Dấu √ không cho số âm. \(\sqrt{a}\) chỉ có khi \(a \geq 0\).</p></div>
    `,
    exercises: [
      { type: "num", prompt: "√16 bằng bao nhiêu?", answer: 4, hint: "Số không âm có bình phương 16.", explain: "4² = 16. Không lấy −4." },
      { type: "mc", prompt: "√(9+16) bằng", choices: ["7", "5", "√9 + √16", "25"], correct: 1, hint: "Cộng trong căn trước.", explain: "√25 = 5. Không tách dấu cộng." },
      { type: "mc", prompt: "Số nào vô tỉ?", choices: ["√9", "0,5", "√2", "−4/7"], correct: 2, hint: "Không viết được thành a/b.", explain: "√2 không phải số hữu tỉ." },
    ],
  },
  {
    id: "g7-b7",
    num: 7,
    chapter: 2,
    title: "Tập hợp các số thực",
    summary: "Số thực gồm hữu tỉ và vô tỉ. Mỗi điểm trên trục số là một số thực.",
    body: String.raw`
      <p>Gộp \(\mathbb{Q}\) với các số vô tỉ được tập hợp số thực \(\mathbb{R}\). Trên trục số, mỗi điểm ứng đúng một số thực, mỗi số thực ứng đúng một điểm.</p>
      <div class="idea">
        <p>\(\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}\). Số tự nhiên nằm trong số nguyên, số nguyên nằm trong hữu tỉ, hữu tỉ nằm trong thực.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(5\) vừa là tự nhiên, nguyên, hữu tỉ, vừa thực. \(\sqrt{2}\) thực nhưng không hữu tỉ.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0,\overline{3}\) là hữu tỉ, vì bằng \(1/3\). Đừng gọi mọi thập phân dài là vô tỉ. Vô tỉ khi không tuần hoàn và không dừng.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hữu tỉ: phân số. Vô tỉ: không phải phân số. Thực: cả hai.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Tập nào chứa √2?", choices: ["N", "Z", "Q", "R"], correct: 3, hint: "√2 không hữu tỉ.", explain: "√2 ∈ R, không thuộc Q." },
      { type: "mc", prompt: "0 có thuộc N không? (theo SGK, N gồm 0, 1, 2, …)", choices: ["Có", "Không", "Chỉ khi viết 0/1", "Tùy năm"], correct: 0, hint: "Số tự nhiên bắt đầu từ 0 trong chương trình này.", explain: "0 ∈ N ⊂ Z ⊂ Q ⊂ R." },
      { type: "num", prompt: "Có bao nhiêu số nguyên nằm giữa −1,5 và 2,5?", answer: 4, hint: "−1, 0, 1, 2.", explain: "Bốn số: −1, 0, 1, 2." },
    ],
  },
  {
    id: "g7-b8",
    num: 8,
    chapter: 3,
    title: "Góc kề bù, đối đỉnh và tia phân giác",
    summary: "Kề bù cộng 180°. Đối đỉnh bằng nhau. Phân giác cắt góc thành hai góc bằng nhau.",
    body: String.raw`
      <p>Hai góc kề bù: chung một cạnh, hai cạnh còn lại là hai tia đối nhau. Tổng \(180^\circ\). Hai góc đối đỉnh: hai cặp tia đối nhau, hai góc bằng nhau.</p>
      <div class="definition">
        <p>Tia phân giác của một góc là tia nằm giữa hai cạnh và tạo với hai cạnh hai góc bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Góc \(70^\circ\) thì góc kề bù là \(110^\circ\). Góc đối đỉnh với \(70^\circ\) cũng \(70^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Góc \(80^\circ\), tia phân giác tạo hai góc \(40^\circ\). Không chia thành \(30^\circ\) và \(50^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai góc kề nhau chưa chắc kề bù. Kề bù cần hai cạnh còn lại thẳng hàng. Hai góc bằng nhau chưa chắc đối đỉnh.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Kề bù: tổng 180°. Đối đỉnh: bằng nhau. Phân giác: hai nửa bằng nhau.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Góc kề bù với 55° bằng bao nhiêu độ?", answer: 125, hint: "180 − 55.", explain: "125°." },
      { type: "num", prompt: "Tia phân giác của góc 96° tạo với mỗi cạnh một góc bao nhiêu độ?", answer: 48, hint: "Chia đôi.", explain: "96 : 2 = 48." },
      { type: "mc", prompt: "Góc đối đỉnh với góc 90° là", choices: ["Góc 90°", "Góc 180°", "Góc 0°", "Góc 45°"], correct: 0, hint: "Đối đỉnh thì bằng nhau.", explain: "Vẫn 90°." },
    ],
  },
  {
    id: "g7-b9",
    num: 9,
    chapter: 3,
    title: "Hai đường thẳng song song",
    summary: "Song song thì không gặp nhau. Cắt bởi một cát tuyến: so le trong bằng nhau, đồng vị bằng nhau.",
    body: String.raw`
      <p>Hai đường thẳng song song không có điểm chung. Khi một cát tuyến cắt hai đường song song, góc so le trong bằng nhau, góc đồng vị bằng nhau, hai góc trong cùng phía kề bù.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai đường song song, cát tuyến tạo một góc đồng vị \(65^\circ\). Mọi góc đồng vị với nó cũng \(65^\circ\). Góc so le trong với nó cũng \(65^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai góc bằng \(70^\circ\) chưa đủ để kết luận hai đường song song, nếu chúng không phải cặp so le trong hoặc đồng vị. Phải nói rõ vị trí hai góc.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Muốn chứng minh song song: tìm một cặp so le trong bằng nhau, hoặc đồng vị bằng nhau, hoặc trong cùng phía cộng 180°.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hai đường song song, góc đồng vị 40°. Góc so le trong với góc ấy bằng bao nhiêu độ?", answer: 40, hint: "So le trong bằng đồng vị khi hai đường song song.", explain: "40°." },
      { type: "num", prompt: "Hai góc trong cùng phía kề bù. Một góc 110°. Góc kia bao nhiêu độ?", answer: 70, hint: "180 − 110.", explain: "70°." },
      { type: "mc", prompt: "Dấu hiệu nào kết luận hai đường thẳng song song?", choices: ["Một cặp góc đồng vị bằng nhau", "Hai góc nhọn", "Hai đường cùng cắt một đường thứ ba", "Có một góc vuông"], correct: 0, hint: "Đồng vị bằng nhau, hoặc so le trong bằng nhau.", explain: "Đó là dấu hiệu vừa học." },
    ],
  },
  {
    id: "g7-b10",
    num: 10,
    chapter: 3,
    title: "Tiên đề Euclid và tính chất đường song song",
    summary: "Qua một điểm ngoài một đường, có đúng một đường song song với đường ấy.",
    body: String.raw`
      <p>Tiên đề Euclid (dạng dùng ở lớp 7): qua một điểm không nằm trên đường thẳng \(d\), có một và chỉ một đường thẳng song song với \(d\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(a \parallel b\) và \(b \parallel c\) thì \(a \parallel c\). Quan hệ song song “truyền” được.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai đường cùng vuông góc với đường thứ ba thì song song với nhau. Một đường vuông góc, một đường chỉ cắt \(70^\circ\), thì hai đường ấy không song song.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đúng một đường song song kẻ từ một điểm ngoài. Hai đường cùng vuông góc một đường thì song song.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Qua một điểm ngoài đường d, số đường thẳng song song với d là", choices: ["0", "1", "2", "Vô số"], correct: 1, hint: "Tiên đề Euclid.", explain: "Đúng một đường." },
      { type: "mc", prompt: "a ∥ b và b ∥ c. Kết luận đúng là", choices: ["a cắt c", "a ∥ c", "a vuông góc c", "Không nói được"], correct: 1, hint: "Song song truyền được.", explain: "a ∥ c." },
      { type: "mc", prompt: "Hai đường cùng vuông góc với một đường thứ ba. Hai đường ấy", choices: ["Cắt nhau", "Song song", "Trùng nhau", "Vuông góc với nhau"], correct: 1, hint: "Cùng vuông góc một đường thì song song.", explain: "Đó là tính chất vừa học." },
    ],
  },
  {
    id: "g7-b11",
    num: 11,
    chapter: 3,
    title: "Định lí và chứng minh định lí",
    summary: "Định lí có giả thiết và kết luận. Chứng minh là chuỗi lý do, không phải đo hình.",
    body: String.raw`
      <p>Định lí gồm giả thiết (cái đã cho) và kết luận (cái phải ra). Chứng minh là viết các bước, mỗi bước dựa vào định nghĩa, tiên đề, hoặc định lí đã có.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Giả thiết: hai góc đối đỉnh. Kết luận: hai góc bằng nhau. Đó là định lí góc đối đỉnh, không cần thước đo.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đo trên hình được \(89^\circ\) rồi viết “góc vuông” là không phải chứng minh. Hình chỉ gợi ý. Kết luận phải đến từ giả thiết.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Viết rõ giả thiết. Mỗi câu có vì sao. Đừng dùng điều chưa chứng minh.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Chứng minh một góc vuông thì không được", choices: ["Dùng định nghĩa hai cạnh vuông góc", "Đo bằng thước đo độ trên hình vẽ rồi kết luận", "Dùng tổng hai góc kề bù bằng 180° nếu một góc đã 90°", "Dùng định lí đã học"], correct: 1, hint: "Hình minh họa, không phải chứng cứ.", explain: "Đo hình không phải chứng minh." },
      { type: "mc", prompt: "Giả thiết của định lí góc đối đỉnh là", choices: ["Hai góc bằng nhau", "Hai góc đối đỉnh", "Hai góc kề bù", "Hai góc nhọn"], correct: 1, hint: "Giả thiết là cái đề cho.", explain: "Cho hai góc đối đỉnh, kết luận chúng bằng nhau." },
      { type: "num", prompt: "Một chứng minh đúng có 3 bước, mỗi bước một lý do. Cần ít nhất bao nhiêu lý do?", answer: 3, hint: "Mỗi bước một vì sao.", explain: "Ba bước, ba lý do." },
    ],
  },
  {
    id: "g7-b12",
    num: 12,
    chapter: 4,
    title: "Tổng các góc trong một tam giác",
    summary: "Ba góc cộng 180°. Góc ngoài bằng tổng hai góc trong không kề với nó.",
    body: String.raw`
      <p>Kẻ đường thẳng qua một đỉnh, song song cạnh đối. Hai góc ở đáy so le trong với hai góc vừa tạo, cộng với góc ở đỉnh được góc bẹt. Vậy tổng ba góc là \(180^\circ\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai góc \(50^\circ\) và \(60^\circ\) thì góc thứ ba \(70^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác vuông có một góc nhọn \(35^\circ\) thì góc nhọn kia \(55^\circ\). Góc vuông đã chiếm \(90^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không có tam giác với các góc \(80^\circ\), \(90^\circ\), \(20^\circ\) vì tổng \(190^\circ\). Góc ngoài kề một góc trong thì không lấy góc đó cộng vào; góc ngoài bằng tổng hai góc trong còn lại.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tổng trong 180°. Vuông thì hai góc nhọn phụ nhau.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Tam giác có hai góc 45° và 70°. Góc thứ ba bằng bao nhiêu độ?", answer: 65, hint: "180 − 45 − 70.", explain: "65°." },
      { type: "num", prompt: "Tam giác vuông có một góc nhọn 20°. Góc nhọn kia bằng bao nhiêu độ?", answer: 70, hint: "90 − 20.", explain: "70°." },
      { type: "mc", prompt: "Ba góc 50°, 60°, 80° có tạo thành tam giác không?", choices: ["Có", "Không, vì tổng 190°", "Chỉ khi tam giác tù", "Chỉ khi cân"], correct: 1, hint: "Cộng ba số.", explain: "50+60+80 = 190 ≠ 180." },
    ],
  },
  {
    id: "g7-b13",
    num: 13,
    chapter: 4,
    title: "Hai tam giác bằng nhau. Trường hợp cạnh–góc–cạnh",
    summary: "Bằng nhau nghĩa là trùng khít. cgc: hai cạnh và góc xen giữa.",
    body: String.raw`
      <p>Hai tam giác bằng nhau khi có phép đặt trùng khít đỉnh với đỉnh, cạnh với cạnh, góc với góc. Không cần đối từng cặp nếu đã có một trường hợp đủ.</p>
      <div class="definition">
        <p><strong>cgc.</strong> Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia, thì hai tam giác bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(AB = DE\), \(AC = DF\), góc \(A\) bằng góc \(D\), góc \(A\) nằm giữa \(AB\) và \(AC\). Vậy \(\Delta ABC = \Delta DEF\) theo cgc.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai cạnh bằng nhau và một góc bằng nhau, nhưng góc không xen giữa hai cạnh ấy, thì chưa đủ cgc. Có thể hai tam giác không bằng nhau.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đọc “xen giữa”. Viết đúng thứ tự đỉnh khi kết luận bằng nhau.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Trường hợp cgc cần", choices: ["Hai cạnh và góc xen giữa", "Hai góc và cạnh xen giữa", "Ba cạnh", "Ba góc"], correct: 0, hint: "Chữ cgc là cạnh–góc–cạnh.", explain: "Góc phải nằm giữa hai cạnh." },
      { type: "mc", prompt: "ΔABC = ΔDEF theo cgc. Cạnh BC bằng cạnh nào?", choices: ["DE", "DF", "EF", "Không biết"], correct: 2, hint: "Thứ tự đỉnh A↔D, B↔E, C↔F.", explain: "BC ứng EF." },
      { type: "num", prompt: "Hai tam giác bằng nhau. Một góc 47°. Góc tương ứng bằng bao nhiêu độ?", answer: 47, hint: "Góc tương ứng bằng nhau.", explain: "47°." },
    ],
  },
  {
    id: "g7-b14",
    num: 14,
    chapter: 4,
    title: "Trường hợp góc–cạnh–góc và cạnh–cạnh–cạnh",
    summary: "gcg: hai góc và cạnh xen giữa. ccc: ba cạnh.",
    body: String.raw`
      <p>Ngoài cgc còn hai trường hợp dùng nhiều: gcg và ccc.</p>
      <div class="definition">
        <p><strong>gcg.</strong> Hai góc và cạnh xen giữa. <strong>ccc.</strong> Ba cạnh tương ứng bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(AB = DE\), góc \(A\) bằng góc \(D\), góc \(B\) bằng góc \(E\). Cạnh \(AB\) xen giữa hai góc ấy. \(\Delta ABC = \Delta DEF\) theo gcg.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Ba góc bằng nhau chỉ nói hai tam giác đồng dạng, chưa bằng nhau: một cái có thể lớn hơn. Thiếu cạnh thì chưa ccc, chưa gcg.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Ba góc không đủ. Phải có cạnh trong gcg hoặc cgc, hoặc đủ ba cạnh.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Ba góc bằng nhau thì hai tam giác", choices: ["Luôn bằng nhau", "Đồng dạng, chưa chắc bằng nhau", "Vuông", "Cân"], correct: 1, hint: "Thiếu cạnh.", explain: "Cùng hình dạng, khác kích thước được." },
      { type: "mc", prompt: "ccc là", choices: ["Hai cạnh một góc", "Ba cạnh", "Ba góc", "Hai góc một cạnh"], correct: 1, hint: "Ba chữ c.", explain: "Ba cạnh tương ứng bằng nhau." },
      { type: "num", prompt: "ΔABC = ΔMNP theo ccc. Nếu AB = 7 cm thì MN bằng bao nhiêu cm?", answer: 7, hint: "A↔M, B↔N.", explain: "7 cm." },
    ],
  },
  {
    id: "g7-b15",
    num: 15,
    chapter: 4,
    title: "Trường hợp bằng nhau của tam giác vuông",
    summary: "Vuông rồi thì cạnh huyền và một cạnh góc vuông, hoặc cạnh huyền và một góc nhọn, cũng đủ.",
    body: String.raw`
      <p>Tam giác vuông đã có một góc \(90^\circ\). Ngoài cgc, gcg, ccc còn dùng: cạnh huyền và một cạnh góc vuông; cạnh huyền và một góc nhọn.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai tam giác vuông, cạnh huyền 13 cm, một cạnh góc vuông 5 cm. Chúng bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Chỉ bằng một cạnh góc vuông thì chưa đủ. Thiếu cạnh huyền hoặc góc nhọn tương ứng.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Vuông sẵn một góc. Cạnh huyền là cạnh dài nhất, đối diện góc vuông.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hai tam giác vuông bằng nhau. Cạnh huyền của tam giác này 13 cm. Cạnh huyền kia bằng bao nhiêu cm?", answer: 13, hint: "Cạnh tương ứng bằng nhau.", explain: "13 cm." },
      { type: "mc", prompt: "Hai tam giác vuông bằng nhau nếu", choices: ["Bằng một góc nhọn", "Bằng cạnh huyền và một cạnh góc vuông", "Bằng một cạnh bất kì", "Bằng hai góc nhọn"], correct: 1, hint: "Cạnh huyền kèm một cạnh góc vuông.", explain: "Đó là trường hợp vừa học." },
      { type: "mc", prompt: "Cạnh huyền đối diện", choices: ["Góc nhọn nhỏ hơn", "Góc vuông", "Góc tù", "Góc nào cũng được"], correct: 1, hint: "Cạnh lớn đối diện góc lớn.", explain: "Đối diện 90°." },
    ],
  },
  {
    id: "g7-b16",
    num: 16,
    chapter: 4,
    title: "Tam giác cân và đường trung trực",
    summary: "Hai cạnh bên bằng nhau thì hai góc đáy bằng nhau. Trung trực là tập điểm cách đều hai đầu đoạn.",
    body: String.raw`
      <p>Tam giác cân: hai cạnh bằng nhau. Hai góc đáy bằng nhau. Đường trung tuyến, phân giác, đường cao kẻ từ đỉnh cân trùng nhau.</p>
      <div class="definition">
        <p>Đường trung trực của đoạn \(AB\) là đường thẳng vuông góc với \(AB\) tại trung điểm. Mọi điểm trên đường trung trực cách đều \(A\) và \(B\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác cân góc đỉnh \(40^\circ\) thì mỗi góc đáy \(70^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác có một góc \(70^\circ\) chưa chắc cân. Cần hai góc bằng nhau, hoặc hai cạnh bằng nhau.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cân: hai cạnh, hai góc đáy. Đều: ba cạnh, ba góc \(60^\circ\). Trung trực: cách đều hai đầu.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Tam giác cân có góc đỉnh 50°. Mỗi góc đáy bằng bao nhiêu độ?", answer: 65, hint: "(180 − 50) : 2.", explain: "65°." },
      { type: "num", prompt: "Tam giác đều, mỗi góc bằng bao nhiêu độ?", answer: 60, hint: "180 : 3.", explain: "60°." },
      { type: "mc", prompt: "Điểm trên đường trung trực của AB thì", choices: ["Gần A hơn B", "Cách đều A và B", "Trung điểm AB", "Nằm trên AB"], correct: 1, hint: "Định nghĩa trung trực.", explain: "Khoảng cách đến A bằng đến B." },
    ],
  },
  {
    id: "g7-b17",
    num: 17,
    chapter: 5,
    title: "Thu thập và phân loại dữ liệu",
    summary: "Dữ liệu rời rạc đếm được từng giá trị. Dữ liệu liên tục thì ghép nhóm.",
    body: String.raw`
      <p>Thu thập xong phải xếp. Số anh chị em là rời rạc: 0, 1, 2, 3. Chiều cao là liên tục: ghép [140; 145), [145; 150), …</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tám bạn: 2, 1, 0, 2, 3, 1, 2, 0 anh chị em. Giá trị 2 xuất hiện 3 lần. Đó là tần số của 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tổng tần số phải bằng số bạn đã hỏi. Cộng được 7 trong khi hỏi 8 bạn thì đã đếm sót.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Rời rạc: từng giá trị. Liên tục: nhóm [a; b). Tổng tần số bằng cỡ mẫu.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Sáu số 3, 1, 3, 2, 3, 1. Tần số của 3 là bao nhiêu?", answer: 3, hint: "Đếm lần xuất hiện.", explain: "Ba lần." },
      { type: "mc", prompt: "Chiều cao học sinh nên xếp kiểu", choices: ["Từng cm một cột, không ghép", "Ghép nhóm", "Chỉ lấy số nguyên tố", "Không thống kê được"], correct: 1, hint: "Liên tục thì ghép.", explain: "Ghép [140; 145) chẳng hạn." },
      { type: "num", prompt: "Hỏi 20 bạn, các tần số cộng được 20. Bảng ấy khớp cỡ mẫu chưa? Trả 1 nếu khớp, 0 nếu không.", answer: 1, hint: "Tổng tần số bằng 20.", explain: "Khớp." },
    ],
  },
  {
    id: "g7-b18",
    num: 18,
    chapter: 5,
    title: "Biểu đồ hình quạt tròn",
    summary: "Cả vòng 360°. Mỗi phần lấy đúng tỉ lệ của nhóm ấy.",
    body: String.raw`
      <p>Quạt tròn cho thấy cơ cấu. Nhóm chiếm \(p\%\) thì góc ở tâm là \(\dfrac{p}{100} \cdot 360^\circ\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 25% thì góc \(90^\circ\). 50% thì nửa vòng, \(180^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> 40 học sinh, 10 em thích bóng đá. Tỉ lệ 25%, góc \(90^\circ\). Không lấy 10°.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Các góc cộng phải ra \(360^\circ\). Thiếu một nhóm thì hình không khép.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Phần trăm nhân 3,6 ra số độ. Kiểm tra tổng 100% và 360°.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Nhóm 20% trên biểu đồ quạt. Góc ở tâm bằng bao nhiêu độ?", answer: 72, hint: "0,2 · 360.", explain: "72°." },
      { type: "num", prompt: "Góc 90° chiếm bao nhiêu phần trăm?", answer: 25, hint: "90/360.", explain: "25%." },
      { type: "mc", prompt: "Hai nhóm 30% và 70%. Tổng góc là", choices: ["100°", "360°", "180°", "70°"], correct: 1, hint: "Cả vòng.", explain: "108° + 252° = 360°." },
    ],
  },
  {
    id: "g7-b19",
    num: 19,
    chapter: 5,
    title: "Biểu đồ đoạn thẳng",
    summary: "Dùng khi dữ liệu theo thời gian. Đọc dốc để biết tăng hay giảm.",
    body: String.raw`
      <p>Trục ngang thường là thời gian, trục đứng là đại lượng. Gãy khúc nối các điểm. Dốc lên là tăng, dốc xuống là giảm, nằm ngang là không đổi.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Năm 1: 10, năm 2: 14. Tăng 4 đơn vị trong một năm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đường dốc hơn chưa chắc tăng nhiều hơn nếu hai trục khác đơn vị. Đọc số trên trục, đừng chỉ nhìn độ dốc cảm tính.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Quạt: cơ cấu một thời điểm. Đoạn thẳng: biến thiên theo thời gian. Cột: so từng nhóm.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Năm 2020 có 12, năm 2021 có 18. Tăng bao nhiêu?", answer: 6, hint: "18 − 12.", explain: "6." },
      { type: "mc", prompt: "Đoạn nằm ngang trên biểu đồ đoạn thẳng nghĩa là", choices: ["Tăng nhanh", "Giảm nhanh", "Không đổi", "Thiếu dữ liệu"], correct: 2, hint: "Trục đứng không đổi.", explain: "Giá trị giữ nguyên." },
      { type: "mc", prompt: "Muốn thấy tỉ lệ từng loại trong một năm, nên vẽ", choices: ["Biểu đồ đoạn thẳng", "Biểu đồ quạt tròn", "Chỉ ghi một số", "Trục số"], correct: 1, hint: "Cơ cấu thì quạt.", explain: "Quạt tròn." },
    ],
  },
];

(function attachGrade7() {
  const course = COURSES.find((c) => c.id === "7");
  if (!course) return;
  course.subtitle = "Tập 1 · Kết nối tri thức với cuộc sống";
  course.blurb = "Chương I–V, Bài 1–19. Ví dụ viết mới, không chép SGK.";
  course.chapters = G7_CHAPTERS;
  course.lessons = G7_LESSONS;
})();
