// Toán 7 Tập 1 – Kết nối tri thức. Mạch bài theo SGK, lời và ví dụ viết mới.
// Không chép đề hay đoạn văn trong sách.
const G7_CHAPTERS = [
  { id: 1, title: "Số hữu tỉ" },
  { id: 2, title: "Số thực" },
  { id: 3, title: "Góc và đường thẳng song song" },
  { id: 4, title: "Tam giác bằng nhau" },
  { id: 5, title: "Thu thập và biểu diễn dữ liệu" },
  { id: 6, title: "Tỉ lệ thức và đại lượng tỉ lệ" },
  { id: 7, title: "Biểu thức đại số và đa thức một biến" },
  { id: 8, title: "Biến cố và xác suất" },
  { id: 9, title: "Quan hệ giữa các yếu tố trong một tam giác" },
  { id: 10, title: "Một số hình khối trong thực tiễn" },
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
  {
    id: "g7-b20",
    num: 20,
    chapter: 6,
    title: "Tỉ lệ thức",
    summary: "a/b = c/d khi ad = bc. Nhân chéo để kiểm tra hoặc tìm số chưa biết.",
    body: String.raw`
      <p>Hai tỉ số bằng nhau tạo thành tỉ lệ thức. \(\dfrac{a}{b} = \dfrac{c}{d}\) (với \(b, d \neq 0\)) khi và chỉ khi \(ad = bc\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\dfrac{2}{3} = \dfrac{4}{6}\) vì \(2 \cdot 6 = 3 \cdot 4 = 12\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(\dfrac{x}{5} = \dfrac{6}{15}\). Nhân chéo: \(15x = 30\), \(x = 2\). Kiểm tra: \(2/5 = 6/15\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{3}{4} = \dfrac{6}{8}\) đúng. Viết \(\dfrac{3}{4} = \dfrac{6}{7}\) sai vì \(3 \cdot 7 = 21\), \(4 \cdot 6 = 24\). Không nhìn “cùng tăng một ít” rồi kết luận bằng nhau.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Nhân chéo. Có thể đổi chỗ: \(a/c = b/d\). Không cho mẫu bằng 0.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "x/8 = 3/4. Giá trị x bằng bao nhiêu?", answer: 6, hint: "4x = 24.", explain: "x = 6." },
      { type: "mc", prompt: "2/5 = 4/10 vì", choices: ["2 + 4 = 5 + 10", "2 · 10 = 5 · 4", "2 · 4 = 5 · 10", "Mẫu lớn hơn thì đúng"], correct: 1, hint: "ad = bc.", explain: "20 = 20." },
      { type: "num", prompt: "Trong 3/x = 6/10, x bằng bao nhiêu?", answer: 5, hint: "3 · 10 = 6x.", explain: "x = 5." },
    ],
  },
  {
    id: "g7-b21",
    num: 21,
    chapter: 6,
    title: "Dãy tỉ số bằng nhau",
    summary: "a/b = c/d = e/f thì mỗi tỉ số bằng tổng tử trên tổng mẫu.",
    body: String.raw`
      <p>Nếu \(\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{e}{f} = k\) thì \(a = kb\), \(c = kd\), \(e = kf\). Cộng tử và cộng mẫu: \(\dfrac{a + c + e}{b + d + f} = k\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(1/2 = 2/4 = 3/6\). Tổng tử 6, tổng mẫu 12, \(6/12 = 1/2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không cộng tử với mẫu. \((1+2)/(2+4)\) mới đúng hướng; \(1/2 + 2/4\) là chuyện khác.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cùng một hệ số k. Tổng các tử trên tổng các mẫu vẫn bằng k.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "1/3 = 2/6 = 4/x. x bằng bao nhiêu?", answer: "12", accept: ["12"], hint: "1/3 = 4/x.", explain: "x = 12." },
      { type: "text", prompt: "2/5 = 4/10. (2+4)/(5+10) bằng phân số tối giản.", answer: "2/5", accept: ["2/5"], hint: "Tính chất dãy tỉ số.", explain: "6/15 = 2/5." },
      { type: "mc", prompt: "a/b = c/d = k thì a + c bằng", choices: ["k(b + d)", "k", "b + d", "ad"], correct: 0, hint: "a = kb, c = kd.", explain: "a + c = k(b + d)." },
    ],
  },
  {
    id: "g7-b22",
    num: 22,
    chapter: 6,
    title: "Đại lượng tỉ lệ thuận",
    summary: "y tỉ lệ thuận với x khi y = kx, k không đổi. Tăng x thì y tăng cùng tỉ số.",
    body: String.raw`
      <p>Tiền mua kẹo tỉ lệ thuận với số gói nếu đơn giá không đổi. \(y = kx\). Đồ thị là đường thẳng qua gốc.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 3 cái bánh giá 45 nghìn. 5 cái cùng loại giá \(45 \cdot 5/3 = 75\) nghìn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 2 công nhân làm xong trong 6 ngày không có nghĩa 4 công nhân xong trong 12 ngày. Số người và số ngày thường tỉ lệ nghịch, bài sau.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tỉ lệ thuận: thương y/x không đổi. Gấp x thì gấp y.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "4 cây bút hết 20 nghìn. 7 cây cùng loại hết bao nhiêu nghìn?", answer: 35, hint: "20 · 7/4.", explain: "35 nghìn." },
      { type: "num", prompt: "y tỉ lệ thuận với x. Khi x = 2 thì y = 10. Khi x = 6, y bằng bao nhiêu?", answer: 30, hint: "k = 5, y = 5x.", explain: "30." },
      { type: "mc", prompt: "Đồ thị y = kx (k > 0) đi qua", choices: ["Gốc tọa độ", "Điểm (1; 0) thôi", "Không có điểm nào", "Chỉ trục Oy"], correct: 0, hint: "x = 0 thì y = 0.", explain: "Qua gốc." },
    ],
  },
  {
    id: "g7-b23",
    num: 23,
    chapter: 6,
    title: "Đại lượng tỉ lệ nghịch",
    summary: "y tỉ lệ nghịch với x khi xy = k, k không đổi. Gấp x thì y giảm còn một nửa.",
    body: String.raw`
      <p>Cùng một quãng đường, vận tốc gấp đôi thì thời gian còn một nửa. \(xy = k\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 6 người làm xong trong 10 ngày, công việc không đổi. 5 người cần \(6 \cdot 10 / 5 = 12\) ngày.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không nhân cả hai. Tỉ lệ nghịch là tích không đổi, không phải thương.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Thuận: thương không đổi. Nghịch: tích không đổi.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "8 vòi chảy đầy bể trong 6 giờ. 12 vòi cùng loại cần bao nhiêu giờ?", answer: 4, hint: "8 · 6 = 12 · t.", explain: "t = 4 giờ." },
      { type: "num", prompt: "xy = 24, x = 3. y bằng bao nhiêu?", answer: 8, hint: "Tích không đổi.", explain: "y = 8." },
      { type: "mc", prompt: "Tỉ lệ nghịch nghĩa là", choices: ["y/x không đổi", "xy không đổi", "y − x không đổi", "y + x không đổi"], correct: 1, hint: "Tích.", explain: "xy = k." },
    ],
  },
  {
    id: "g7-b24",
    num: 24,
    chapter: 7,
    title: "Biểu thức đại số",
    summary: "Chữ thay số. Điều kiện là mẫu khác 0 và căn không âm.",
    body: String.raw`
      <p>Biểu thức đại số gồm số, chữ và phép tính. Chữ là số chưa biết. Thế số vào chữ thì ra giá trị, nếu phép tính có nghĩa.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(2x + 5\) khi \(x = 3\) bằng 11.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{1}{x - 2}\) không tính được khi \(x = 2\). \(\sqrt{x}\) không tính được khi \(x = -1\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Ghi điều kiện trước khi thế. Mẫu ≠ 0, trong căn ≥ 0.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "3x − 1 khi x = 4 bằng bao nhiêu?", answer: 11, hint: "12 − 1.", explain: "11." },
      { type: "mc", prompt: "1/(x − 5) không có nghĩa khi x bằng", choices: ["0", "1", "5", "−5"], correct: 2, hint: "Mẫu bằng 0.", explain: "x = 5." },
      { type: "num", prompt: "x² khi x = −3 bằng bao nhiêu?", answer: 9, hint: "(−3)(−3).", explain: "9." },
    ],
  },
  {
    id: "g7-b25",
    num: 25,
    chapter: 7,
    title: "Đa thức một biến",
    summary: "Đa thức là tổng các hạng tử ax^n. Bậc là số mũ lớn nhất có hệ số khác 0.",
    body: String.raw`
      <p>\(3x^2 - 5x + 1\) là đa thức bậc 2, một biến \(x\). Hạng tử \(3x^2\) bậc 2, \(-5x\) bậc 1, \(1\) bậc 0.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(7x^3\) bậc 3. \(4\) là đa thức bậc 0. \(x + 1/x\) không phải đa thức, vì có \(x\) ở mẫu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0 \cdot x^5 + x^2\) bậc 2, không phải 5. Hệ số 0 không tính.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đa thức không chia chữ, không căn chữ. Bậc = mũ lớn nhất còn sống.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Bậc của 2x^4 − x + 9 là bao nhiêu?", answer: 4, hint: "Mũ lớn nhất.", explain: "4." },
      { type: "mc", prompt: "Biểu thức nào là đa thức một biến?", choices: ["x + 1/x", "√x + 1", "x² − 3x + 2", "2^x"], correct: 2, hint: "Chỉ cộng các luỹ thừa tự nhiên của x.", explain: "x² − 3x + 2." },
      { type: "num", prompt: "Hệ số của x trong 5x² − 7x + 1 bằng bao nhiêu? Viết kèm dấu.", answer: -7, hint: "Hạng tử bậc 1.", explain: "−7." },
    ],
  },
  {
    id: "g7-b26",
    num: 26,
    chapter: 7,
    title: "Cộng và trừ đa thức",
    summary: "Cộng trừ hạng tử đồng dạng. x² chỉ cộng với x², không cộng với x.",
    body: String.raw`
      <p>Đồng dạng nghĩa là cùng biến, cùng mũ. \(3x^2\) và \(-5x^2\) cộng được. \(3x^2\) và \(3x\) không cộng thành \(6x^2\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((2x + 3) + (x - 1) = 3x + 2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \((x^2 + 4x) - (x^2 - x + 2) = x^2 + 4x - x^2 + x - 2 = 5x - 2\). Dấu trừ đổi dấu cả ngoặc.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \((3x - 5) - (2x - 1) = 3x - 5 - 2x + 1 = x - 4\), không phải \(3x - 5 - 2x - 1\).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Trừ đa thức = cộng đa thức đối. Đổi dấu từng hạng tử trong ngoặc.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "(2x + 1) + (3x − 4). Viết đa thức gọn, dạng ax+b không cách.", answer: "5x-3", accept: ["5x-3", "5x − 3"], hint: "Cộng đồng dạng.", explain: "5x − 3." },
      { type: "text", prompt: "(5x − 2) − (x + 3). Viết ax+b không cách.", answer: "4x-5", accept: ["4x-5", "4x − 5"], hint: "Đổi dấu ngoặc sau.", explain: "5x − 2 − x − 3 = 4x − 5." },
      { type: "mc", prompt: "x² + x bằng", choices: ["x³", "2x²", "2x", "Không gộp được thành một hạng tử"], correct: 3, hint: "Khác mũ.", explain: "Không đồng dạng." },
    ],
  },
  {
    id: "g7-b27",
    num: 27,
    chapter: 7,
    title: "Nhân đa thức",
    summary: "Nhân từng hạng tử. (a+b)(c+d) = ac + ad + bc + bd.",
    body: String.raw`
      <p>\(x^m \cdot x^n = x^{m+n}\). Nhân đơn thức với đa thức: phân phối. Nhân hai nhị thức: bốn tích.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(3x \cdot (x + 2) = 3x^2 + 6x\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \((x + 3)(x + 1) = x^2 + x + 3x + 3 = x^2 + 4x + 3\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \((x + 2)^2 = x^2 + 4x + 4\), không phải \(x^2 + 4\). Thiếu hạng tử giữa.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cộng mũ khi nhân cùng cơ số. Bình phương tổng có hạng 2ab.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "2x(x − 5). Viết đa thức gọn, không cách.", answer: "2x^2-10x", accept: ["2x^2-10x", "2x²-10x"], hint: "Phân phối.", explain: "2x² − 10x." },
      { type: "num", prompt: "Hệ số của x trong (x+2)(x+3) bằng bao nhiêu?", answer: 5, hint: "2x + 3x.", explain: "x² + 5x + 6." },
      { type: "mc", prompt: "(x+1)² bằng", choices: ["x² + 1", "x² + 2x + 1", "x² + x + 1", "2x + 1"], correct: 1, hint: "(a+b)² = a² + 2ab + b².", explain: "x² + 2x + 1." },
    ],
  },
  {
    id: "g7-b28",
    num: 28,
    chapter: 7,
    title: "Chia đa thức",
    summary: "Chia đơn thức: trừ mũ. Chia đa thức: chia bậc cao, nhân, trừ, lặp lại.",
    body: String.raw`
      <p>\(x^5 : x^2 = x^3\) khi \(x \neq 0\). Chia đa thức cho nhị thức làm giống chia số: chia hạng tử bậc cao nhất, nhân, trừ, kéo xuống.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \((6x^3) : (2x) = 3x^2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \((x^2 + 5x + 6) : (x + 2) = x + 3\), vì \((x+2)(x+3) = x^2 + 5x + 6\). Kiểm tra bằng nhân ngược.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không chia từng hạng tử lung tung: \((x^2 + x) : x = x + 1\) thì được, vì cả hai hạng đều chia hết cho \(x\). \((x^2 + 1) : x\) không còn là đa thức.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Nhân lại để kiểm tra. Dư khác 0 thì chưa chia hết.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "(8x^3) : (2x). Viết đơn thức, không cách.", answer: "4x^2", accept: ["4x^2", "4x²"], hint: "8/2 và 3−1.", explain: "4x²." },
      { type: "num", prompt: "(x² + 5x + 6) : (x + 2) = x + a. a bằng bao nhiêu?", answer: 3, hint: "Nhân ngược (x+2)(x+3).", explain: "a = 3." },
      { type: "mc", prompt: "Chia đa thức x² + 1 cho x được", choices: ["Đa thức x", "Đa thức x + 1/x, không còn đa thức", "1", "x²"], correct: 1, hint: "Dư 1, thương có 1/x.", explain: "Không chia hết trong vành đa thức." },
    ],
  },
  {
    id: "g7-b29",
    num: 29,
    chapter: 8,
    title: "Làm quen với biến cố",
    summary: "Phép thử có nhiều kết quả. Biến cố là tập một số kết quả ấy.",
    body: String.raw`
      <p>Gieo xúc xắc: sáu mặt có thể xảy ra. “Ra số chẵn” gồm 2, 4, 6. Đó là một biến cố.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tung đồng xu. Biến cố “sấp” có một kết quả. Biến cố “sấp hoặc ngửa” là biến cố chắc chắn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> “Ra mặt 7” trên xúc xắc sáu mặt là biến cố không thể. Không nhầm với xác suất nhỏ nhưng vẫn có thể.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Chắc chắn: luôn xảy ra. Không thể: không bao giờ. Còn lại: có thể.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Xúc xắc sáu mặt. Biến cố “số chẵn” có bao nhiêu kết quả thuận lợi?", answer: 3, hint: "2, 4, 6.", explain: "Ba kết quả." },
      { type: "mc", prompt: "Tung đồng xu. Biến cố “sấp hoặc ngửa” là", choices: ["Không thể", "Chắc chắn", "Chỉ xảy ra một lần", "Không phải biến cố"], correct: 1, hint: "Luôn ra một trong hai mặt.", explain: "Chắc chắn." },
      { type: "mc", prompt: "Biến cố “ra mặt 7” trên xúc xắc 1–6 là", choices: ["Chắc chắn", "Không thể", "Có xác suất 1/6", "Có xác suất 1/7"], correct: 1, hint: "Không có mặt 7.", explain: "Không thể." },
    ],
  },
  {
    id: "g7-b30",
    num: 30,
    chapter: 8,
    title: "Xác suất của biến cố",
    summary: "P = số kết quả thuận lợi chia cho số kết quả đồng khả năng.",
    body: String.raw`
      <p>Khi mỗi kết quả một cơ hội như nhau, \(P(A) = \dfrac{n(A)}{n(\Omega)}\). Xác suất từ 0 đến 1.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Xúc xắc cân đối. P(số chẵn) = 3/6 = 1/2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hộp 3 bi đỏ, 1 bi xanh. P(đỏ) = 3/4, không phải 1/2 chỉ vì có hai màu. Đếm viên, không đếm màu.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Liệt kê Ω trước. Chỉ chia khi đồng khả năng. P = 0 không thể, P = 1 chắc chắn.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Xúc xắc. P(ra 5) = 1/k. k bằng bao nhiêu?", answer: 6, hint: "Một mặt trên sáu.", explain: "1/6." },
      { type: "num", prompt: "Hộp 5 thẻ ghi 1 đến 5. P(số lẻ) = a/5. a bằng bao nhiêu?", answer: 3, hint: "1, 3, 5.", explain: "3/5." },
      { type: "mc", prompt: "Xác suất không thể lớn hơn", choices: ["0", "1", "1/2", "100"], correct: 1, hint: "Tối đa là chắc chắn.", explain: "P ≤ 1." },
    ],
  },
  {
    id: "g7-b31",
    num: 31,
    chapter: 9,
    title: "Góc và cạnh đối diện trong tam giác",
    summary: "Góc lớn hơn thì cạnh đối diện dài hơn. Hai góc bằng nhau thì hai cạnh đối diện bằng nhau.",
    body: String.raw`
      <p>Trong một tam giác, cạnh lớn kề góc lớn. Đối diện góc vuông là cạnh dài nhất.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Góc \(A = 80^\circ\), góc \(B = 40^\circ\), góc \(C = 60^\circ\). Cạnh lớn nhất là \(BC\) (đối diện A). Cạnh nhỏ nhất là \(AC\) (đối diện B).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không so cạnh của hai tam giác khác nhau chỉ bằng cách so một góc. Định lí nói trong cùng một tam giác.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Góc lớn — cạnh đối lớn. Cân khi hai góc đáy bằng nhau.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Tam giác góc A = 90°, B = 30°, C = 60°. Cạnh lớn nhất là", choices: ["AB", "AC", "BC", "Không so được"], correct: 2, hint: "Đối diện góc vuông.", explain: "BC đối diện A." },
      { type: "mc", prompt: "Hai góc bằng nhau thì hai cạnh đối diện", choices: ["Vuông góc", "Bằng nhau", "Song song", "Gấp đôi"], correct: 1, hint: "Tam giác cân.", explain: "Bằng nhau." },
      { type: "num", prompt: "Góc 20°, 70°, 90°. Cạnh nhỏ nhất đối diện góc bao nhiêu độ?", answer: 20, hint: "Góc nhỏ nhất.", explain: "20°." },
    ],
  },
  {
    id: "g7-b32",
    num: 32,
    chapter: 9,
    title: "Đường vuông góc và đường xiên",
    summary: "Vuông góc là đoạn ngắn nhất từ một điểm đến đường thẳng. Xiên dài hơn, xiên xa chân hơn thì dài hơn.",
    body: String.raw`
      <p>Từ điểm \(M\) ngoài đường thẳng \(d\), hạ vuông góc được chân \(H\). \(MH\) ngắn hơn mọi đường xiên \(MA\) với \(A\) khác \(H\) trên \(d\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Khoảng cách từ điểm đến đường là độ dài đường vuông góc, không phải đường xiên.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai đường xiên bằng nhau thì hai chân cách đều chân vuông góc. Đừng so xiên với khoảng cách.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Vuông góc ngắn nhất. Xiên càng xa chân thì càng dài.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Khoảng cách từ điểm M đến đường d là", choices: ["Một đường xiên bất kì", "Đường vuông góc MH", "Trung tuyến", "Phân giác"], correct: 1, hint: "Ngắn nhất.", explain: "Độ dài MH." },
      { type: "mc", prompt: "Đường xiên so với đường vuông góc cùng một điểm thì", choices: ["Ngắn hơn", "Dài hơn", "Luôn bằng", "Không so được"], correct: 1, hint: "Vuông góc ngắn nhất.", explain: "Xiên dài hơn." },
      { type: "num", prompt: "MH = 5 cm vuông góc với d. Đường xiên MA dài hơn MH. MA có thể bằng 5 cm không? Trả 0 nếu không, 1 nếu có.", answer: 0, hint: "Xiên dài hơn vuông góc.", explain: "Không. MA > 5." },
    ],
  },
  {
    id: "g7-b33",
    num: 33,
    chapter: 9,
    title: "Ba cạnh của một tam giác",
    summary: "Tổng hai cạnh lớn hơn cạnh còn lại. Hiệu hai cạnh nhỏ hơn cạnh còn lại.",
    body: String.raw`
      <p>Không có tam giác cạnh 2, 3, 6 vì 2 + 3 = 5 < 6. Ba điểm không khép kín.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 5, 6, 7: 5+6>7, 5+7>6, 6+7>5. Tạo được tam giác.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 3, 4, 7 không được: 3+4=7, ba điểm thẳng hàng, diện tích 0, không phải tam giác.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Phải lớn hơn, không được bằng. Kiểm tra cả ba cặp.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Ba độ dài 2, 5, 8 có tạo tam giác không?", choices: ["Có", "Không", "Chỉ khi vuông", "Chỉ khi cân"], correct: 1, hint: "2 + 5 = 7 < 8.", explain: "Không." },
      { type: "mc", prompt: "3, 4, 5 có tạo tam giác không?", choices: ["Có", "Không", "Chỉ trên giấy", "Không vì 3+4>5 sai"], correct: 0, hint: "3+4>5.", explain: "Có, tam giác vuông." },
      { type: "num", prompt: "Hai cạnh 6 cm và 10 cm. Cạnh thứ ba nguyên, nhỏ nhất có thể là bao nhiêu cm?", answer: 5, hint: "Lớn hơn 10 − 6 = 4, nhỏ hơn 16.", explain: "5 cm, vì 4 không được (6+4=10)." },
    ],
  },
  {
    id: "g7-b34",
    num: 34,
    chapter: 9,
    title: "Đồng quy trung tuyến và phân giác",
    summary: "Ba trung tuyến gặp nhau tại trọng tâm, chia mỗi trung tuyến theo tỉ số 2:1. Ba phân giác gặp nhau tại tâm đường tròn nội tiếp.",
    body: String.raw`
      <p>Trung tuyến nối đỉnh với trung điểm cạnh đối. Ba trung tuyến đồng quy tại trọng tâm G. AG : GM = 2 : 1, M trung điểm.</p>
      <p>Ba đường phân giác trong đồng quy tại tâm đường tròn nội tiếp, điểm cách đều ba cạnh.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Trung tuyến dài 9 cm thì đoạn từ đỉnh đến trọng tâm 6 cm, đoạn còn lại 3 cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Trọng tâm không phải tâm đường tròn nội tiếp, trừ tam giác đều. Đừng nhầm hai giao điểm.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Trung tuyến → trọng tâm, tỉ lệ 2:1. Phân giác → tâm nội tiếp, cách đều ba cạnh.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Trung tuyến 12 cm. Đoạn từ đỉnh đến trọng tâm bằng bao nhiêu cm?", answer: 8, hint: "2/3 của 12.", explain: "8 cm." },
      { type: "mc", prompt: "Ba đường phân giác trong gặp nhau tại", choices: ["Trọng tâm", "Tâm đường tròn nội tiếp", "Trung điểm một cạnh", "Đỉnh"], correct: 1, hint: "Cách đều ba cạnh.", explain: "Tâm nội tiếp." },
      { type: "num", prompt: "AG = 10 cm, G trọng tâm trên trung tuyến AM. AM bằng bao nhiêu cm?", answer: 15, hint: "AG = 2/3 AM.", explain: "15 cm." },
    ],
  },
  {
    id: "g7-b35",
    num: 35,
    chapter: 9,
    title: "Đồng quy trung trực và đường cao",
    summary: "Ba trung trực gặp nhau tại tâm đường tròn ngoại tiếp. Ba đường cao gặp nhau tại trực tâm.",
    body: String.raw`
      <p>Trung trực: vuông góc tại trung điểm cạnh. Giao ba trung trực là tâm đường tròn đi qua ba đỉnh.</p>
      <p>Đường cao: vuông góc kẻ từ đỉnh xuống cạnh đối. Giao ba đường cao là trực tâm.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác vuông: tâm ngoại tiếp là trung điểm cạnh huyền. Trực tâm là đỉnh góc vuông.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác tù: trực tâm và tâm ngoại tiếp nằm ngoài tam giác. Không bắt chúng phải nằm trong.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Trung trực → ngoại tiếp, qua ba đỉnh. Đường cao → trực tâm. Vuông: tâm là trung điểm huyền.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Tâm đường tròn ngoại tiếp là giao", choices: ["Ba trung tuyến", "Ba trung trực", "Ba phân giác", "Ba đường cao"], correct: 1, hint: "Cách đều ba đỉnh.", explain: "Ba trung trực." },
      { type: "mc", prompt: "Tam giác vuông, tâm ngoại tiếp nằm ở", choices: ["Đỉnh góc vuông", "Trung điểm cạnh huyền", "Trọng tâm", "Ngoài tam giác luôn"], correct: 1, hint: "Góc nội tiếp chắn đường kính.", explain: "Trung điểm cạnh huyền." },
      { type: "mc", prompt: "Trực tâm là giao", choices: ["Ba đường cao", "Ba trung trực", "Ba trung tuyến", "Hai cạnh huyền"], correct: 0, hint: "Đường cao.", explain: "Ba đường cao." },
    ],
  },
  {
    id: "g7-b36",
    num: 36,
    chapter: 10,
    title: "Hình hộp chữ nhật và hình lập phương",
    summary: "Thể tích = dài × rộng × cao. Lập phương là hộp có mọi cạnh bằng nhau.",
    body: String.raw`
      <p>Hình hộp chữ nhật có 6 mặt là hình chữ nhật. Diện tích toàn phần \(S = 2(ab + bh + ha)\). Thể tích \(V = abh\).</p>
      <p>Hình lập phương cạnh \(a\): \(S = 6a^2\), \(V = a^3\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hộp 3 cm, 4 cm, 5 cm. \(V = 60\) cm³. \(S = 2(12 + 20 + 15) = 94\) cm².</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Sơn xung quanh thùng không đáy thì không lấy 2ab. Đọc kỹ: toàn phần, xung quanh, hay không nắp.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> V = đáy × cao. Lập phương: mọi cạnh bằng nhau, 6 mặt vuông.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hộp 2 cm × 3 cm × 4 cm. Thể tích bằng bao nhiêu cm³?", answer: 24, hint: "2·3·4.", explain: "24." },
      { type: "num", prompt: "Lập phương cạnh 5 cm. Diện tích toàn phần bằng bao nhiêu cm²?", answer: 150, hint: "6a².", explain: "6·25 = 150." },
      { type: "num", prompt: "Lập phương cạnh 3 cm. Thể tích bằng bao nhiêu cm³?", answer: 27, hint: "a³.", explain: "27." },
    ],
  },
  {
    id: "g7-b37",
    num: 37,
    chapter: 10,
    title: "Hình lăng trụ đứng",
    summary: "Hai đáy đa giác bằng nhau, mặt bên là hình chữ nhật. V = diện tích đáy × cao.",
    body: String.raw`
      <p>Lăng trụ đứng tam giác: đáy tam giác, ba mặt bên chữ nhật. Lăng trụ đứng tứ giác: đáy tứ giác. Chiều cao vuông góc với đáy, bằng cạnh bên.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Đáy tam giác diện tích 12 cm², cao lăng trụ 5 cm. \(V = 60\) cm³.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Diện tích toàn phần = 2 đáy + các mặt bên. Quên nhân 2 đáy thì thiếu. Mặt bên dùng chu vi đáy nhân chiều cao.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> V = S_đáy · h. Xung quanh = chu vi đáy · h. Không nhầm với hình hộp nếu đáy không phải chữ nhật.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Đáy diện tích 10 cm², cao 7 cm. Thể tích lăng trụ đứng bằng bao nhiêu cm³?", answer: 70, hint: "S·h.", explain: "70." },
      { type: "num", prompt: "Tam giác đáy chu vi 12 cm, cao lăng trụ 5 cm. Diện tích xung quanh bằng bao nhiêu cm²?", answer: 60, hint: "Chu vi × cao.", explain: "60." },
      { type: "mc", prompt: "Mặt bên của lăng trụ đứng là", choices: ["Hình tròn", "Hình chữ nhật", "Hình thoi luôn", "Tam giác đều"], correct: 1, hint: "Cạnh bên vuông góc đáy.", explain: "Hình chữ nhật." },
    ],
  },
];

(function attachGrade7() {
  const course = COURSES.find((c) => c.id === "7");
  if (!course) return;
  course.subtitle = "Tập 1 & Tập 2 · Kết nối tri thức với cuộc sống";
  course.blurb = "Chương I–X, Bài 1–37. Ví dụ viết mới, không chép SGK.";
  course.chapters = G7_CHAPTERS;
  course.lessons = G7_LESSONS;
})();
