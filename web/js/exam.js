// Ôn Toán vào lớp 10 công lập không chuyên, Hà Nội.
// Câu trong bài lấy từ đề chính thức của Sở GDĐT Hà Nội, các năm 2022–2026,
// và các đề thi thử của trường, phòng GD&ĐT Hà Nội năm học 2025–2026 và 2026–2027.
// Lời giải ngắn là lời giải riêng, đã đối chiếu đáp án chính thức 2024, 2025, 2026.
const THI10_CHAPTERS = [
  { id: 1, label: "Câu I", title: "Thống kê và xác suất" },
  { id: 2, label: "Câu II", title: "Biểu thức chứa căn" },
  { id: 3, label: "Câu III", title: "Phương trình, hệ và Viète" },
  { id: 4, label: "Câu IV", title: "Hình trụ, hình nón và chứng minh" },
  { id: 5, label: "Câu V", title: "Bài toán tối ưu" },
  { id: 6, label: "Luyện", title: "Số từ đề đã ra" },
  { id: 7, label: "Đề thử", title: "Đề thử các trường Hà Nội" },
];

const THI10_LESSONS = [
  {
    id: "tv10-1",
    num: 1,
    chapter: 1,
    title: "Tần số ghép nhóm",
    summary: "Đọc đúng nhóm [a; b), cộng tần số ra đúng cỡ mẫu, rồi đổi thành phần trăm.",
    body: String.raw`
      <p>Từ 2025, câu I mở bằng bảng tần số ghép nhóm. Năm 2024 không hỏi thống kê ở câu I. Kỹ năng thì giống nhau: đọc đầu mút, cộng, chia.</p>
      <div class="idea">
        <p><strong>Ba việc.</strong> Cộng các tần số, tổng phải bằng cỡ mẫu. Lấy đúng cột được hỏi. Chia cho cỡ mẫu rồi nhân 100%. Nhóm \([a;\ b)\) lấy \(a\), không lấy \(b\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu I.1.</strong> Chiều cao của 50 học sinh lớp 6, đơn vị cm.</p>
        <table>
          <tr><th>Chiều cao</th><td>\([140;\ 145)\)</td><td>\([145;\ 150)\)</td><td>\([150;\ 155)\)</td><td>\([155;\ 160)\)</td><td>\([160;\ 165)\)</td></tr>
          <tr><th>Số học sinh</th><td>10</td><td>18</td><td>14</td><td>6</td><td>2</td></tr>
        </table>
        <p>Tần số nhóm \([150;\ 155)\) là 14. Kiểm tra \(10 + 18 + 14 + 6 + 2 = 50\). Tần số tương đối \(\dfrac{14}{50} \cdot 100\% = 28\%\). Bạn cao đúng 155 cm không thuộc nhóm này. 155 thuộc \([155;\ 160)\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu I.1.</strong> Thời gian tự học của 300 học sinh lớp 9, đơn vị giờ.</p>
        <table>
          <tr><th>Giờ</th><td>\([0;\ 4)\)</td><td>\([4;\ 8)\)</td><td>\([8;\ 12)\)</td><td>\([12;\ 16)\)</td><td>\([16;\ 20)\)</td></tr>
          <tr><th>Số học sinh</th><td>17</td><td>72</td><td>94</td><td>75</td><td>42</td></tr>
        </table>
        <p>\(17 + 72 + 94 + 75 + 42 = 300\). Nhóm \([12;\ 16)\) có tần số 75, tần số tương đối \(\dfrac{75}{300} \cdot 100\% = 25\%\). Bạn học đúng 16 giờ thuộc \([16;\ 20)\), không thuộc \([12;\ 16)\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Viết 14 mà không viết \(\dfrac{14}{50}\). Cho giá trị đúng bằng đầu mút phải vào nhóm đang xét. Cộng năm cột không ra cỡ mẫu mà vẫn chia.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026: tần số của nhóm chiều cao [150; 155) là bao nhiêu?", answer: 14, hint: "Đọc đúng cột, rồi kiểm tra tổng năm cột bằng 50.", explain: "Cột [150; 155) ghi 14. Tổng 10 + 18 + 14 + 6 + 2 = 50." },
      { type: "num", prompt: "Đề 2026: tần số tương đối của nhóm đó bằng bao nhiêu phần trăm?", answer: 28, hint: "(14/50)·100.", explain: "14/50 = 0,28, tức 28%." },
      { type: "num", prompt: "Đề 2025: tần số của nhóm [12; 16) là bao nhiêu?", answer: 75, hint: "Cột thứ tư trong bảng 300 học sinh.", explain: "Nhóm [12; 16) có 75 học sinh. Tổng năm cột là 300." },
      { type: "num", prompt: "Đề 2025: tần số tương đối của nhóm [12; 16) bằng bao nhiêu phần trăm?", answer: 25, hint: "75/300 rồi nhân 100.", explain: "75/300 = 1/4 = 25%." },
      { type: "mc", prompt: "Ở bảng 2026, học sinh cao đúng 155 cm thuộc nhóm nào?", choices: ["[145; 150)", "[150; 155)", "[155; 160)", "[160; 165)"], correct: 2, hint: "[150; 155) không lấy 155.", explain: "Ngoặc tròn bỏ đầu mút phải. 155 thuộc [155; 160)." },
    ],
  },
  {
    id: "tv10-2",
    num: 2,
    chapter: 1,
    title: "Xác suất một lần rút",
    summary: "Viết Ω, đếm kết quả thuận lợi, chỉ chia khi các kết quả ngang nhau.",
    body: String.raw`
      <p>Ý 2 của câu I, các năm 2025 và 2026, đều là rút một lần. Không có lần thứ hai, không có hoàn lại.</p>
      <div class="idea">
        <p>Viết \(\Omega\). Nói các kết quả đồng khả năng vì các thẻ hoặc các bóng cùng loại và được lấy ngẫu nhiên. Rồi</p>
        \[ P(A) = \dfrac{n(A)}{n(\Omega)}. \]
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu I.2.</strong> Hộp có 6 quả bóng cùng loại, ghi 1, 2, 3, 4, 5, 6, mỗi số một quả. Lấy ngẫu nhiên một quả. Biến cố \(A\): số ghi trên quả bóng là số chẵn.</p>
        <p>\(\Omega = \{1, 2, 3, 4, 5, 6\}\), sáu kết quả đồng khả năng. Thuận lợi: 2, 4, 6, nên \(n(A) = 3\). \(P(A) = \dfrac{3}{6} = \dfrac{1}{2}\). Đáp án chính thức là \(\dfrac{1}{2}\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu I.2.</strong> Hộp có 8 thẻ cùng loại, ghi 1 đến 8, mỗi số một thẻ. Rút ngẫu nhiên một thẻ. Biến cố \(A\): số ghi trên thẻ chia hết cho 3.</p>
        <p>\(\Omega\) có 8 phần tử. Thuận lợi: thẻ 3 và thẻ 6. Số 9 chia hết cho 3 nhưng không có trong hộp. \(P(A) = \dfrac{2}{8} = \dfrac{1}{4}\). Đáp án chính thức là \(\dfrac{1}{4}\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Nhầm đề 2026 thành 10 thẻ. Đếm số 9 trong hộp chỉ có 8 thẻ. Quên rút gọn \(\dfrac{2}{8}\).</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026, 6 quả bóng ghi 1 đến 6. Biến cố “số chẵn” có bao nhiêu kết quả thuận lợi?", answer: 3, hint: "2, 4 và 6.", explain: "Ba số chẵn. n(Ω) = 6, nên P(A) = 3/6 = 1/2." },
      { type: "num", prompt: "Cùng đề 2026, P(A) = 1/k. Giá trị k bằng bao nhiêu?", answer: 2, hint: "3/6 rút gọn.", explain: "P(A) = 1/2, nên k = 2." },
      { type: "num", prompt: "Đề 2025, 8 thẻ ghi 1 đến 8. Biến cố “chia hết cho 3” có bao nhiêu kết quả thuận lợi?", answer: 2, hint: "Chỉ các số có thật trong hộp.", explain: "Thẻ 3 và thẻ 6. Số 9 không có trong hộp." },
      { type: "num", prompt: "Cùng đề 2025, P(A) = 1/k. Giá trị k bằng bao nhiêu?", answer: 4, hint: "2/8 = 1/4.", explain: "Đáp án chính thức là 1/4, nên k = 4." },
      { type: "mc", prompt: "Vì sao được lấy số thuận lợi chia cho số phần tử của Ω?", choices: ["Vì các quả bóng hoặc các thẻ cùng loại và được lấy ngẫu nhiên", "Vì biến cố là số chẵn", "Vì Ω luôn có 6 phần tử", "Vì xác suất luôn bằng 1/2"], correct: 0, hint: "Công thức ấy cần các kết quả đồng khả năng.", explain: "Cùng loại và lấy ngẫu nhiên thì mỗi kết quả một cơ hội. Không phải vì biến cố là số chẵn." },
    ],
  },
  {
    id: "tv10-3",
    num: 3,
    chapter: 2,
    title: "Rút gọn căn rồi mới tìm x",
    summary: "Đặt điều kiện, thay số, đặt t = √x, rồi dùng kết quả đã rút.",
    body: String.raw`
      <p>Năm 2025 và 2026, biểu thức chứa căn là câu II. Năm 2024, cùng dạng ấy là câu I. Năm 2023 cũng mở đầu bằng hai biểu thức. Làm ý 1 bằng cách thế. Làm ý 3 trên biểu thức đã rút, không trên biểu thức gốc.</p>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu II.</strong> \(A = \dfrac{\sqrt{x} - 4}{\sqrt{x}}\), \(B = \dfrac{4}{\sqrt{x} - 3} + \dfrac{x - 7\sqrt{x} - 12}{x - 9}\), với \(x > 0\), \(x \neq 9\).</p>
        <p>Khi \(x = 25\), \(\sqrt{x} = 5\), \(A = \dfrac{5 - 4}{5} = \dfrac{1}{5}\).</p>
        <p>Đặt \(t = \sqrt{x}\), \(t > 0\), \(t \neq 3\). Mẫu thứ hai là \((t - 3)(t + 3)\). Quy đồng rồi rút được \(B = \dfrac{t}{t + 3}\). Nhân lại: \(P = A \cdot B = \dfrac{t - 4}{t + 3} = 1 - \dfrac{7}{t + 3}\).</p>
        <p>\(P\) nguyên khi \(\dfrac{7}{t + 3}\) nguyên. Với \(t > 0\) và \(t \neq 3\), chỉ còn \(t = 4\) và \(t = \dfrac{1}{2}\). Vậy \(x = 16\) hoặc \(x = \dfrac{1}{4}\). Đáp án chính thức đúng hai giá trị này.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu II.</strong> \(A = \dfrac{\sqrt{x} + 2}{\sqrt{x} - 2}\), \(x > 0\), \(x \neq 4\). Khi \(x = 9\), \(A = \dfrac{3 + 2}{3 - 2} = 5\).</p>
        <p>Sau khi rút, \(\dfrac{A}{B} = \dfrac{\sqrt{x}}{\sqrt{x} - 2}\). Điều kiện \(\dfrac{A}{B} < \dfrac{1}{2}\) tương đương \(\dfrac{\sqrt{x} + 2}{2(\sqrt{x} - 2)} < 0\). Tử dương, nên \(\sqrt{x} - 2 < 0\), tức \(x < 4\). Số nguyên dương lớn nhất là \(x = 3\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2024, câu I.</strong> \(A = \dfrac{x}{\sqrt{x} - 3}\), \(x > 0\), \(x \neq 9\). Khi \(x = 16\), \(A = \dfrac{16}{4 - 3} = 16\). Đề còn hỏi \(A - B < 0\). Đáp án chính thức: \(0 < x < 9\) và \(x \neq 1\).</p>
        <p><strong>Hà Nội 2023, câu 1.</strong> \(A = \dfrac{x + 2}{\sqrt{x}}\), \(x > 0\), \(x \neq 1\). Khi \(x = 9\), \(A = \dfrac{11}{3}\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Bỏ \(x = \dfrac{1}{4}\) vì nó là phân số. Ở đề 2025, lấy \(x = 1\) trong khi đề hỏi số lớn nhất. Ở đề 2024, nhận \(x = 1\): lúc đó \(A - B = 0\), không nhỏ hơn 0.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026, A = (√x − 4)/√x. Khi x = 25, 5A bằng bao nhiêu?", answer: 1, hint: "A = 1/5.", explain: "√25 = 5, A = 1/5, nên 5A = 1." },
      { type: "text", prompt: "Đề 2026, P = A·B nguyên tại x = 16 và một giá trị nữa. Viết giá trị đó dưới dạng phân số.", answer: "1/4", accept: ["1/4", "0,25", "0.25"], hint: "√x = 1/2, nên x = 1/4.", explain: "Đáp án chính thức là x = 16 và x = 1/4." },
      { type: "num", prompt: "Đề 2025, A = (√x + 2)/(√x − 2). Khi x = 9, A bằng bao nhiêu?", answer: 5, hint: "√9 = 3.", explain: "A = (3 + 2)/(3 − 2) = 5. Đáp án chính thức." },
      { type: "num", prompt: "Đề 2025 hỏi số nguyên dương x lớn nhất để A/B < 1/2. Số đó là bao nhiêu?", answer: 3, hint: "Bất phương trình dẫn tới x < 4.", explain: "x nguyên dương và x < 4, lớn nhất là 3." },
      { type: "num", prompt: "Đề 2024, A = x/(√x − 3). Khi x = 16, A bằng bao nhiêu?", answer: 16, hint: "√16 = 4, mẫu bằng 1.", explain: "16/(4 − 3) = 16. Đáp án chính thức." },
      { type: "num", prompt: "Đề 2023, A = (x + 2)/√x. Khi x = 9, 3A bằng bao nhiêu?", answer: 11, hint: "A = 11/3.", explain: "(9 + 2)/3 = 11/3, nên 3A = 11." },
    ],
  },
  {
    id: "tv10-4",
    num: 4,
    chapter: 3,
    title: "Một phương trình, rồi một hệ",
    summary: "Gọi ẩn, ghi điều kiện, lập quan hệ, giải, loại nghiệm không đúng đề.",
    body: String.raw`
      <p>Câu thực tế gần như năm nào cũng có. Một bài là một phương trình. Một bài là một hệ. Thời gian bằng quãng đường chia vận tốc. Tiền bằng đơn giá nhân số lượng.</p>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu III.1.</strong> Kế hoạch may mỗi ngày \(x\) chiếc, \(x\) nguyên dương. Ba ngày đầu may đúng kế hoạch. Bảy ngày sau, mỗi ngày may hơn kế hoạch 5 chiếc. Sau 10 ngày được 335 chiếc.</p>
        \[ 3x + 7(x + 5) = 335. \]
        <p>\(10x + 35 = 335\), \(x = 30\). Đáp án: mỗi ngày theo kế hoạch may 30 chiếc.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu III.2.</strong> 25 bông hoa hồng và hoa cúc, hết 180 nghìn đồng. Hồng 8 nghìn, cúc 6 nghìn. Gọi \(x\) là số hoa hồng, \(y\) là số hoa cúc, nguyên không âm.</p>
        \[ \begin{cases} x + y = 25 \\ 8x + 6y = 180. \end{cases} \]
        <p>Thế \(y = 25 - x\): \(8x + 6(25 - x) = 180\), \(2x = 30\), \(x = 15\), \(y = 10\). Đáp án: 15 hồng và 10 cúc.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu III.1.</strong> Hà Nội đi Hải Phòng 60 km/h, về 40 km/h, cùng quãng đường. Chiều đi ít hơn chiều về 1 giờ. Gọi quãng đường \(x\) km, \(x > 0\).</p>
        \[ \dfrac{x}{40} - \dfrac{x}{60} = 1. \]
        <p>\(\dfrac{3x - 2x}{120} = 1\), \(x = 120\). Đáp án: 120 km.</p>
        <p><strong>Hà Nội 2025, câu III.2.</strong> Ba lô và máy tính có giá niêm yết tổng 885 nghìn đồng. Giảm 20% ba lô và 25% máy tính thì trả 682 nghìn. Gọi giá niêm yết ba lô là \(x\), máy tính là \(y\), cả hai dương.</p>
        \[ \begin{cases} x + y = 885 \\ 0{,}8x + 0{,}75y = 682. \end{cases} \]
        <p>Đáp án chính thức: ba lô 365 nghìn, máy tính 520 nghìn. Kiểm tra: \(0{,}8 \cdot 365 + 0{,}75 \cdot 520 = 292 + 390 = 682\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2024, câu II.1.</strong> Đội dự định dùng \(x\) xe tải lớn, \(x\) nguyên dương. Thực tế giảm 2 xe, mỗi xe lớn chở hơn mỗi xe nhỏ 2 tấn, và cả hai cách đều chở đủ 15 tấn. Đáp án chính thức: 3 xe tải lớn. Khi đó mỗi xe lớn chở 5 tấn, 5 xe nhỏ mỗi xe chở 3 tấn.</p>
        <p><strong>Hà Nội 2023.</strong> Phân xưởng làm 900 sản phẩm. Thực tế mỗi ngày hơn kế hoạch 15 sản phẩm và xong trước 3 ngày. Đáp án: theo kế hoạch mỗi ngày làm 60 sản phẩm.</p>
        <p><strong>Hà Nội 2022.</strong> Ô tô và xe máy đi 60 km. Ô tô nhanh hơn 20 km/h và đến sớm hơn 30 phút. Đáp án: xe máy 40 km/h, ô tô 60 km/h. Kiểm tra: \(60/40 - 60/60 = 0{,}5\) giờ.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026: theo kế hoạch, mỗi ngày may bao nhiêu chiếc áo?", answer: 30, hint: "3x + 7(x + 5) = 335.", explain: "10x = 300, x = 30. Đáp án chính thức." },
      { type: "num", prompt: "Đề 2026: người đó mua bao nhiêu bông hoa hồng?", answer: 15, hint: "x + y = 25 và 8x + 6y = 180.", explain: "x = 15, y = 10. Đáp án chính thức." },
      { type: "num", prompt: "Đề 2025: quãng đường Hà Nội – Hải Phòng dài bao nhiêu km?", answer: 120, hint: "x/40 − x/60 = 1.", explain: "x/120 = 1, x = 120. Đáp án chính thức." },
      { type: "num", prompt: "Đề 2025: giá niêm yết của ba lô là bao nhiêu nghìn đồng?", answer: 365, hint: "x + y = 885 và 0,8x + 0,75y = 682.", explain: "x = 365, y = 520. Kiểm tra tiền sau giảm đúng 682." },
      { type: "num", prompt: "Đề 2024: đội vận chuyển dùng bao nhiêu xe tải lớn?", answer: 3, hint: "Hai cách chở đều đủ 15 tấn, số xe lớn ít hơn số xe nhỏ 2 xe.", explain: "Đáp án chính thức là 3 xe tải lớn." },
      { type: "num", prompt: "Đề 2022: vận tốc xe máy là bao nhiêu km/h?", answer: 40, hint: "Ô tô nhanh hơn 20 km/h và đến sớm 0,5 giờ trên quãng 60 km.", explain: "Xe máy 40 km/h, ô tô 60 km/h. Hiệu thời gian đúng 30 phút." },
    ],
  },
  {
    id: "tv10-5",
    num: 5,
    chapter: 3,
    title: "Viète, không cần giải nghiệm",
    summary: "Đọc tổng và tích từ hệ số, rồi biến biểu thức về tổng và tích.",
    body: String.raw`
      <p>Ý cuối câu phương trình thường không bảo tìm từng nghiệm. Dùng tổng và tích. Chỉ dùng khi phương trình có nghiệm.</p>
      <div class="idea">
        <p>Với \(ax^2 + bx + c = 0\), tổng \(-\dfrac{b}{a}\), tích \(\dfrac{c}{a}\). Nếu mỗi nghiệm thỏa \(x^2 = px + q\), có thể thay \(x^2\) bằng \(px + q\) để hạ bậc.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu III.3.</strong> \(x^2 - 3x + 1 = 0\) có hai nghiệm phân biệt \(x_1, x_2\). Tính</p>
        \[ Q = \dfrac{3x_2 - 1}{x_1} + \dfrac{3x_1}{x_2} - x_1. \]
        <p>Tổng 3, tích 1. Từ phương trình, \(x_2^2 = 3x_2 - 1\). Quy đồng với mẫu \(x_1 x_2 = 1\), rồi thay \(x_1^2 = 3x_1 - 1\) và \(x_2^2 = 3x_2 - 1\), được \(Q = 8(x_1 + x_2) - 6 = 24 - 6 = 18\). Đáp án chính thức: \(Q = 18\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu III.3.</strong> \(x^2 + 8x - 6 = 0\) có hai nghiệm \(x_1, x_2\). Tìm \(m\) để</p>
        \[ \dfrac{70 - mx_1^2}{x_2} = x_1 + mx_2. \]
        <p>Tổng \(-8\), tích \(-6\). \(x_1^2 + x_2^2 = 64 + 12 = 76\). Đưa phương trình về \(76 = m \cdot 76\), nên \(m = 1\). Không nghiệm nào bằng 0, mẫu có nghĩa. Đáp án: \(m = 1\).</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2024, câu III.2.</strong> Parabol \(y = x^2\) và đường thẳng \(y = (m - 2)x + 5\). Phương trình hoành độ giao điểm là \(x^2 - (m - 2)x - 5 = 0\). \(\Delta = (m - 2)^2 + 20 > 0\) với mọi \(m\), nên luôn cắt tại hai điểm phân biệt.</p>
        <p>Điều kiện \(x_1 + 5x_2 = 0\). Kết hợp tích bằng \(-5\), đáp án chính thức: \(m = -2\) hoặc \(m = 6\).</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026: Q bằng bao nhiêu?", answer: 18, hint: "Tổng hai nghiệm là 3, tích là 1. Hạ bậc bằng chính phương trình.", explain: "Đáp án chính thức là Q = 18." },
      { type: "num", prompt: "Đề 2025: giá trị m cần tìm bằng bao nhiêu?", answer: 1, hint: "x1² + x2² = 76, và phương trình rút về 76 = 76m.", explain: "m = 1. Không nghiệm nào làm mẫu bằng 0." },
      { type: "num", prompt: "Đề 2024: hai giá trị của m là −2 và 6. Tổng hai giá trị đó bằng bao nhiêu?", answer: 4, hint: "Cộng hai đáp án.", explain: "(−2) + 6 = 4. Cả hai đều làm đường thẳng cắt parabol tại hai điểm thỏa điều kiện." },
      { type: "mc", prompt: "Vì sao đề 2024 kết luận đường thẳng luôn cắt parabol tại hai điểm phân biệt?", choices: ["Vì Δ = (m − 2)² + 20 luôn dương", "Vì m = 0", "Vì parabol đi qua gốc tọa độ", "Vì tích hai hoành độ bằng 5"], correct: 0, hint: "Nhìn biệt thức, không cần tìm m trước.", explain: "Biệt thức là một bình phương cộng 20, nên luôn lớn hơn 0." },
    ],
  },
  {
    id: "tv10-6",
    num: 6,
    chapter: 4,
    title: "Hình trụ và hình cầu",
    summary: "Diện tích xung quanh trụ dùng chiều cao. Nước đã dùng chỉ lấy phần chiều cao hao đi.",
    body: String.raw`
      <p>Năm 2025 và 2026, hình trụ là nửa đầu câu IV. Năm 2024, hình trụ nằm ở câu II. Năm 2023 hỏi thể tích khối gỗ hình trụ. Năm 2022 hỏi diện tích mặt quả bóng, tức hình cầu. Đọc kỹ đề hỏi xung quanh, thể tích, hay mặt cầu.</p>
      <div class="memory">
        <p>Trụ: \(S_{xq} = 2\pi Rh\), \(V = \pi R^2 h\). Cầu: \(S = 4\pi R^2\). Đề lấy \(\pi \approx 3{,}14\). 1 lít \(= 1000\) cm³.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu IV.1.</strong> Xô hình trụ, cao 25 cm, bán kính đáy 12 cm. Coi đáy không đáng kể.</p>
        <p>a) \(S_{xq} = 2 \cdot 3{,}14 \cdot 12 \cdot 25 = 1884\) cm². Đáp án chính thức: khoảng 1884 cm².</p>
        <p>b) Múc vào bể 150 lít. Mỗi lần chỉ múc 80% thể tích xô. Lúc đầu bể không có nước.</p>
        \[ V = 3{,}14 \cdot 12^2 \cdot 25 = 11304 \text{ cm}^3, \quad 80\% \text{ là } 9043{,}2 \text{ cm}^3. \]
        <p>\(150000 : 9043{,}2 \approx 16{,}6\). Mười sáu lần chưa đủ. Đáp án chính thức: ít nhất 17 xô.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu IV.1.</strong> Thùng bán kính 50 cm, cao 150 cm.</p>
        <p>a) \(S_{xq} = 2 \cdot 3{,}14 \cdot 50 \cdot 150 = 47100\) cm².</p>
        <p>b) Mực nước thấp hơn ban đầu 40 cm. Nước đã dùng \(3{,}14 \cdot 50^2 \cdot 40 = 314000\) cm³. Không lấy cả chiều cao 150 cm.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2024, câu II.2.</strong> Bình bán kính 4 cm, cao 25 cm. \(S_{xq} = 2 \cdot 3{,}14 \cdot 4 \cdot 25 = 628\) cm².</p>
        <p><strong>Hà Nội 2023.</strong> Khối gỗ hình trụ, bán kính 30 cm, cao 120 cm. \(V = 3{,}14 \cdot 30^2 \cdot 120 = 339120\) cm³.</p>
        <p><strong>Hà Nội 2022.</strong> Quả bóng bán kính 9,5 cm. Diện tích bề mặt \(4 \cdot 3{,}14 \cdot 9{,}5^2 = 1133{,}54\) cm². Đây là hình cầu, không phải hình trụ. Dùng \(4\pi R^2\), không dùng \(2\pi Rh\).</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026: diện tích xung quanh xô, lấy π ≈ 3,14, bằng bao nhiêu cm²?", answer: 1884, hint: "2·3,14·12·25.", explain: "Đáp án chính thức là khoảng 1884 cm²." },
      { type: "num", prompt: "Đề 2026: cần múc ít nhất bao nhiêu xô để đổ đầy bể 150 lít?", answer: 17, hint: "Mỗi lần chỉ được 80% thể tích xô. 16 lần chưa đủ.", explain: "150000 : 9043,2 ≈ 16,6, nên ít nhất 17 xô." },
      { type: "num", prompt: "Đề 2025: diện tích xung quanh thùng, lấy π ≈ 3,14, bằng bao nhiêu cm²?", answer: 47100, hint: "2·3,14·50·150.", explain: "2·3,14·7500 = 47100." },
      { type: "num", prompt: "Đề 2025: thể tích nước đã dùng, khi mực thấp đi 40 cm, bằng bao nhiêu cm³?", answer: 314000, hint: "Chỉ phần trụ cao 40 cm, không lấy 150 cm.", explain: "3,14·2500·40 = 314000 cm³." },
      { type: "num", prompt: "Đề 2024: diện tích xung quanh bình bán kính 4 cm, cao 25 cm, bằng bao nhiêu cm²?", answer: 628, hint: "2·3,14·4·25.", explain: "Đáp án chính thức là khoảng 628 cm²." },
      { type: "mc", prompt: "Đề 2022 hỏi diện tích bề mặt quả bóng bán kính 9,5 cm. Công thức đúng là:", choices: ["2πRh", "πR²h", "4πR²", "(1/3)πR²h"], correct: 2, hint: "Quả bóng là hình cầu.", explain: "Diện tích mặt cầu là 4πR². Đề không cho chiều cao." },
    ],
  },
  {
    id: "tv10-7",
    num: 7,
    chapter: 4,
    title: "Chứng minh: ý a thường là tứ giác nội tiếp",
    summary: "Hai góc đối cộng 180°, hoặc cùng chắn một cung. Lấy điểm ý a trước.",
    body: String.raw`
      <p>Nửa sau câu IV là chứng minh, khoảng 2,5 đến 3 điểm. Ý a gần như luôn là chứng minh bốn điểm cùng thuộc một đường tròn, và ý đó khoảng 1 điểm. Làm xong ý a rồi mới sang ý b.</p>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu IV.2a.</strong> Tam giác \(ABC\) vuông tại \(A\), nội tiếp đường tròn đường kính \(BC\). \(H\) nằm trên \(AB\), \(HB > HA\), \(H\) khác \(A\). Qua \(H\) kẻ đường vuông góc với \(BC\), cắt \(BC\) tại \(D\) và cắt \(AC\) tại \(E\). Chứng minh \(A, H, D, C\) cùng thuộc một đường tròn.</p>
        <p>Tam giác \(HAC\) vuông tại \(A\), vì \(H\) nằm trên \(AB\) và góc \(A\) của tam giác \(ABC\) là góc vuông. Tam giác \(HDC\) vuông tại \(D\), vì \(HD\) vuông góc với \(BC\). Hai góc đối của tứ giác \(AHDC\) đều bằng \(90^\circ\), cộng thành \(180^\circ\). Vậy tứ giác nội tiếp. Đáp án chính thức đi theo hướng này.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu IV.2a.</strong> Tam giác \(ABC\) có ba góc nhọn, nội tiếp đường tròn \((O)\). Đường cao \(AD\) cắt đường tròn tại điểm thứ hai \(E\). \(K\) là chân đường vuông góc kẻ từ \(E\) xuống \(AB\). Chứng minh \(E, D, B, K\) cùng thuộc một đường tròn.</p>
        <p>Chỗ cần nhìn: \(EK\) vuông góc với \(AB\), và \(AD\) là đường cao nên vuông góc với \(BC\). Tìm hai góc vuông, hoặc hai góc cùng chắn một đoạn. Đừng nhảy sang đường phân giác của ý b khi ý a chưa xong.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2024, câu IV.1.</strong> Từ \(A\) ngoài đường tròn \((O)\) kẻ hai tiếp tuyến \(AB\), \(AC\), với \(B\) và \(C\) là tiếp điểm. Chứng minh tứ giác \(ABOC\) nội tiếp.</p>
        <p>Tiếp tuyến vuông góc bán kính, nên góc \(ABO\) và góc \(ACO\) đều bằng \(90^\circ\). Hai góc này đối nhau trong tứ giác \(ABOC\) và cộng thành \(180^\circ\). Đáp án chính thức kết luận tứ giác nội tiếp từ đó.</p>
      </div>
      <div class="memory">
        <p><strong>Ba câu hay dùng.</strong> Góc nội tiếp bằng nửa cung. Góc nội tiếp chắn đường kính thì vuông. Hai tiếp tuyến từ một điểm ngoài thì bằng nhau, và bán kính tới tiếp điểm vuông góc với tiếp tuyến.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Trong ý a đề 2026, góc tại A của tứ giác AHDC bằng bao nhiêu độ?", answer: 90, hint: "H nằm trên AB, và tam giác ABC vuông tại A.", explain: "Góc HAC chính là góc A của tam giác vuông, bằng 90°." },
      { type: "num", prompt: "Hai góc đối của một tứ giác nội tiếp cộng lại bằng bao nhiêu độ?", answer: 180, hint: "Đây là dấu hiệu dùng ở cả đề 2024 và 2026.", explain: "Hai góc đối cộng 180° thì tứ giác nội tiếp được." },
      { type: "mc", prompt: "Đề 2024 kết luận ABOC nội tiếp vì:", choices: ["Hai góc tại B và C đều vuông và đối nhau", "AB = BC", "O là trọng tâm", "Góc tại A bằng 60°"], correct: 0, hint: "Tiếp tuyến vuông góc với bán kính.", explain: "Góc ABO và góc ACO bằng 90°, đối nhau, tổng 180°." },
      { type: "mc", prompt: "Khi vào bài chứng minh, nên làm ý nào trước?", choices: ["Ý c, vì điểm nhiều hơn", "Ý a, thường là bốn điểm đồng viên và khoảng 1 điểm", "Ý nào ngắn nhất trên nháp", "Bỏ chứng minh, chỉ làm hình trụ"], correct: 1, hint: "Ý a là điểm chắc nếu viết đủ lý do.", explain: "Làm ý a trước. Ý sau thường dùng kết quả của ý a." },
    ],
  },
  {
    id: "tv10-8",
    num: 8,
    chapter: 5,
    title: "Tối ưu rồi kiểm tra số nguyên",
    summary: "Lập hàm, tìm đỉnh, rồi thử các số nguyên được phép.",
    body: String.raw`
      <p>Câu V chỉ 0,5 điểm. Đáp số phải đúng điều kiện của đề: số xe, số người, số ngày. Đỉnh parabol không nguyên thì không được nộp chính hoành độ đỉnh.</p>
      <div class="examq">
        <p><strong>Hà Nội 2026, câu V.</strong> Hoàn thành 1000 sản phẩm. Mỗi công nhân làm 5 sản phẩm một ngày. Thuê kho 3 triệu đồng một ngày. Thưởng mỗi công nhân 1 triệu đồng khi xong việc. Gọi \(x\) là số công nhân, \(x\) nguyên dương và \(x\) là ước của 200, vì số ngày \(\dfrac{200}{x}\) phải nguyên.</p>
        \[ C(x) = x + \dfrac{600}{x}. \]
        <p>\(C(25) = 25 + 24 = 49\). \(C(20) = 50\). Đáp án chính thức: 25 công nhân và 8 ngày. Chi phí 49 triệu đồng.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2025, câu V.</strong> Đội có 35 xe, mỗi xe lãi 1 triệu đồng một ngày. Thêm một xe thì lãi mỗi xe giảm 20 nghìn đồng một ngày. Gọi \(x\) là số xe thêm, \(x\) nguyên, \(0 \leq x < 50\).</p>
        \[ P(x) = (35 + x)(1000 - 20x). \]
        <p>Đỉnh tại \(x = 7{,}5\). Phải tính cả hai số nguyên kề: \(P(7) = 42 \cdot 860 = 36120\), \(P(8) = 43 \cdot 840 = 36120\), đơn vị nghìn đồng. Hai cách cho cùng lợi nhuận. Nên thêm 7 xe hoặc 8 xe.</p>
      </div>
      <div class="examq">
        <p><strong>Hà Nội 2024, câu V.</strong> \(x > 0\), \(y > 0\), \(x + y + xy = 3\). Tìm giá trị nhỏ nhất của</p>
        \[ P = \dfrac{3}{x + y} - xy. \]
        <p>Đặt \(s = x + y\). Khi đó \(xy = 3 - s\), và \(s\) chỉ chạy từ 2 đến dưới 3. \(P = s + \dfrac{3}{s} - 3\) tăng trên đoạn đó. Nhỏ nhất tại \(s = 2\), tức \(x = y = 1\), và \(P = \dfrac{1}{2}\). Đáp án chính thức đúng giá trị này.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2026: nên điều động bao nhiêu công nhân?", answer: 25, hint: "Số ngày 200/x phải nguyên. Thử các ước gần √600.", explain: "Đáp án chính thức: 25 người, thuê kho 8 ngày." },
      { type: "num", prompt: "Đề 2026: thuê kho trong bao nhiêu ngày?", answer: 8, hint: "200 sản phẩm-ngày chia cho 25 người.", explain: "200/25 = 8 ngày." },
      { type: "num", prompt: "Đề 2025: lợi nhuận lớn nhất mỗi ngày là bao nhiêu nghìn đồng?", answer: 36120, hint: "Tính cả 7 xe thêm và 8 xe thêm.", explain: "P(7) = P(8) = 36120 nghìn đồng." },
      { type: "mc", prompt: "Đề 2025, đỉnh rơi vào x = 7,5. Kết luận đúng là:", choices: ["Thêm 7,5 xe", "Chỉ thêm 7 xe", "Chỉ thêm 8 xe", "Thêm 7 xe hoặc 8 xe, vì hai cách cho cùng lợi nhuận"], correct: 3, hint: "Tính cả hai số nguyên kề đỉnh.", explain: "P(7) = P(8). Cả hai đều đạt lớn nhất." },
      { type: "text", prompt: "Đề 2024: giá trị nhỏ nhất của P là bao nhiêu? Viết phân số.", answer: "1/2", accept: ["1/2", "0,5", "0.5"], hint: "Đạt khi x = y = 1.", explain: "Đáp án chính thức là 1/2, khi x = y = 1." },
    ],
  },
  {
    id: "tv10-9",
    num: 9,
    chapter: 6,
    title: "Luyện số từ đề 2022–2026",
    summary: "Một lượt các đáp số đã ra. Làm trước, rồi mới đối chiếu.",
    body: String.raw`
      <p>Đề không giữ một thứ tự cố định. Năm 2024 để căn ở câu I và hình trụ ở câu II. Năm 2025 và 2026 để thống kê ở câu I, căn ở câu II, hình trụ ở đầu câu IV. Luyện theo kỹ năng, rồi kiểm tra bằng số dưới đây.</p>
      <div class="examq">
        <p><strong>Đáp số đã đối chiếu.</strong></p>
        <ul>
          <li>2026: nhóm \([150;\ 155)\) có tần số 14, tức 28%. Xác suất số chẵn là \(\dfrac{1}{2}\). \(A = \dfrac{1}{5}\) khi \(x = 25\). \(P\) nguyên khi \(x = 16\) hoặc \(x = \dfrac{1}{4}\). May 30 chiếc một ngày. Mua 15 hồng và 10 cúc. \(Q = 18\). Diện tích xô khoảng 1884 cm², múc ít nhất 17 lần. Điều 25 người, thuê 8 ngày.</li>
          <li>2025: nhóm \([12;\ 16)\) có tần số 75, tức 25%. Xác suất chia hết cho 3 là \(\dfrac{1}{4}\). \(A = 5\) khi \(x = 9\). Số nguyên dương lớn nhất là 3. Quãng đường 120 km. Ba lô 365 nghìn, máy tính 520 nghìn. \(m = 1\). Diện tích thùng 47100 cm², nước đã dùng 314000 cm³. Thêm 7 hoặc 8 xe.</li>
          <li>2024: \(A = 16\) khi \(x = 16\). \(A - B < 0\) khi \(0 < x < 9\), \(x \neq 1\). Dùng 3 xe tải lớn. Diện tích bình 628 cm². Hệ có nghiệm \((1;\ 1)\). \(m = -2\) hoặc \(m = 6\). Giá trị nhỏ nhất của \(P\) là \(\dfrac{1}{2}\).</li>
          <li>2023: \(A = \dfrac{11}{3}\) khi \(x = 9\). Mỗi ngày theo kế hoạch làm 60 sản phẩm. Thể tích khối gỗ 339120 cm³.</li>
          <li>2022: xe máy 40 km/h, ô tô 60 km/h. Diện tích mặt quả bóng \(4\pi R^2\) với \(R = 9{,}5\) cm.</li>
        </ul>
      </div>
      <div class="memory">
        <p>Nếu một số trong danh sách này không tự làm ra được, quay lại bài cùng kỹ năng. Đừng học thuộc danh sách.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề 2024, hệ có √(3x + 1). Nghiệm x bằng bao nhiêu?", answer: 1, hint: "Đặt t = √(3x + 1), tìm được t = 2, y = 1.", explain: "Đáp án chính thức là (x; y) = (1; 1)." },
      { type: "num", prompt: "Đề 2023: theo kế hoạch, mỗi ngày phân xưởng làm bao nhiêu sản phẩm?", answer: 60, hint: "900 sản phẩm, thực tế hơn 15 sản phẩm mỗi ngày và xong trước 3 ngày.", explain: "Phương trình cho x = 60. Nghiệm âm bị loại." },
      { type: "num", prompt: "Đề 2023: thể tích khối gỗ hình trụ, lấy π ≈ 3,14, bằng bao nhiêu cm³?", answer: 339120, hint: "R = 30, h = 120, V = πR²h.", explain: "3,14·900·120 = 339120 cm³." },
      { type: "num", prompt: "Đề 2022: vận tốc ô tô là bao nhiêu km/h?", answer: 60, hint: "Xe máy 40 km/h, ô tô nhanh hơn 20 km/h.", explain: "60/40 − 60/60 = 0,5 giờ, đúng 30 phút sớm hơn." },
      { type: "mc", prompt: "Năm nào để bảng thống kê ở câu I?", choices: ["2024", "2025 và 2026", "2022", "Không năm nào"], correct: 1, hint: "Năm 2024 mở đầu bằng biểu thức chứa căn.", explain: "2025 và 2026 mở bằng bảng tần số. 2024 để căn ở câu I." },
      { type: "mc", prompt: "Đề 2024, tập nghiệm của A − B < 0 là:", choices: ["Mọi x > 0", "0 < x < 9 và x ≠ 1", "Chỉ x = 1", "x > 9"], correct: 1, hint: "Khi x = 1 thì A − B = 0, không nhỏ hơn 0.", explain: "Đáp án chính thức: 0 < x < 9, x ≠ 1." },
    ],
  },
  {
    id: "tv10-10",
    num: 10,
    chapter: 7,
    title: "Đề thử THCS Mỹ Đình 2",
    summary: "Đề gốc hai trang, rồi lời giải ngắn.",
    pages: ["de/my-dinh-2-1.jpg", "de/my-dinh-2-2.jpg"],
    files: [{ href: "de/my-dinh-2-2026-de.pdf", label: "Mở PDF đề Mỹ Đình 2" }],
    body: String.raw`
      <p>Đây là câu hỏi của đề thi thử THCS Mỹ Đình 2, năm học 2026–2027. Chưa có đáp án. Lời giải nằm trong mục đóng.</p>
      <div class="examq">
        <p><strong>Bài I.1.</strong> Thống kê tuổi thọ của 30 bóng đèn điện được lắp thử, đơn vị giờ:</p>
        <table>
          <tr><td>1180</td><td>1150</td><td>1190</td><td>1170</td><td>1180</td><td>1170</td><td>1160</td><td>1170</td><td>1160</td><td>1150</td></tr>
          <tr><td>1190</td><td>1180</td><td>1170</td><td>1170</td><td>1170</td><td>1190</td><td>1170</td><td>1170</td><td>1170</td><td>1180</td></tr>
          <tr><td>1170</td><td>1160</td><td>1160</td><td>1160</td><td>1170</td><td>1160</td><td>1180</td><td>1180</td><td>1150</td><td>1170</td></tr>
        </table>
        <p>a) Lập bảng tần số và tần số tương đối của mẫu số liệu trên.</p>
        <p>b) Có người nói: “Có trên 75% bóng đèn có tuổi thọ từ 1160 đến 1180 giờ”. Nhận định đó đúng hay sai?</p>
        <details class="check"><summary>Đáp án</summary>
          <p>Đếm được: 1150 có 3, 1160 có 6, 1170 có 12, 1180 có 6, 1190 có 3. Tổng 30. Tần số tương đối lần lượt 10%, 20%, 40%, 20%, 10%.</p>
          <p>Từ 1160 đến 1180, kể cả hai đầu, có 6 + 12 + 6 = 24 bóng, tức 80%. 80% lớn hơn 75%, nên nhận định đúng.</p>
        </details>
        <p><strong>Bài I.2.</strong> Bình tung một đồng xu có hai mặt sấp (S) và ngửa (N) liên tiếp ba lần. Tính xác suất biến cố “mặt sấp xuất hiện đúng một lần”.</p>
        <details class="check"><summary>Đáp án</summary>
          <p>Có thứ tự, nên \(\Omega\) có 8 kết quả. Thuận lợi: SNN, NSN, NNS. \(P = \dfrac{3}{8}\).</p>
        </details>
      </div>
      <div class="examq">
        <p><strong>Bài II.</strong> Cho \(A = \dfrac{20 - 2\sqrt{x}}{x - 25} + \dfrac{3}{\sqrt{x} + 5}\) và \(B = \dfrac{\sqrt{x} + 2}{\sqrt{x} - 5}\), với \(x \geq 0\), \(x \neq 25\).</p>
        <p>1) Tính \(B\) khi \(x = 49\).</p>
        <p>2) Rút gọn \(A\).</p>
        <p>3) Tìm \(x\) để \(\dfrac{B}{A} = |x - 4|\).</p>
        <details class="check"><summary>Đáp án</summary>
          <p>1) \(B = \dfrac{7 + 2}{7 - 5} = \dfrac{9}{2}\).</p>
          <p>2) Đặt \(t = \sqrt{x}\), \(t \geq 0\), \(t \neq 5\). Quy đồng được \(A = \dfrac{1}{\sqrt{x} - 5}\).</p>
          <p>3) \(\dfrac{B}{A} = \sqrt{x} + 2\). Giải \(\sqrt{x} + 2 = |x - 4|\) được \(x = 1\) hoặc \(x = 9\). Cả hai thỏa điều kiện.</p>
        </details>
      </div>
      <div class="examq">
        <p><strong>Bài III.1.</strong> Một người mua hai loại hàng, trả 2,17 triệu đồng khi VAT loại thứ nhất là 10% và loại thứ hai là 8%. Nếu cả hai loại đều chịu VAT 9% thì phải trả 2,18 triệu đồng. Hỏi nếu không kể thuế, mỗi loại hàng giá bao nhiêu?</p>
        <details class="check"><summary>Đáp án</summary>
          <p>Gọi giá chưa thuế là \(x\) và \(y\) triệu đồng. \(1{,}09(x + y) = 2{,}18\) cho \(x + y = 2\). Thế vào câu kia được \(x = 0{,}5\), \(y = 1{,}5\). Không kể thuế: 500 nghìn đồng và 1,5 triệu đồng.</p>
        </details>
        <p><strong>Bài III.2.</strong> Theo kế hoạch, một tổ phải may 8400 khẩu trang. Thực tế mỗi ngày may hơn kế hoạch 102 chiếc, nên trước hạn 4 ngày đã may được 6416 chiếc. Hỏi theo kế hoạch mỗi ngày phải may bao nhiêu chiếc?</p>
        <details class="check"><summary>Đáp án</summary>
          <p>Gọi số chiếc mỗi ngày theo kế hoạch là \(x\), nguyên dương. \(\dfrac{8400}{x} - \dfrac{6416}{x + 102} = 4\). Nghiệm dương \(x = 700\). Kiểm tra: kế hoạch 12 ngày, thực tế 8 ngày, \(8 \cdot 802 = 6416\).</p>
        </details>
        <p><strong>Bài III.3.</strong> Phương trình \(x^2 - 3x - 1 = 0\) có hai nghiệm phân biệt \(x_1\), \(x_2\). Không giải phương trình, tính \(A = x_1^3 + 10x_2 - 30\).</p>
        <details class="check"><summary>Đáp án</summary>
          <p>Tổng bằng 3, tích bằng \(-1\). Từ phương trình, \(x_1^3 = 10x_1 + 3\), nên \(A = 10(x_1 + x_2) - 27 = 3\).</p>
        </details>
      </div>
      <div class="examq">
        <p><strong>Bài IV.1.</strong> Ly rượu cao 6 cm, đường kính miệng 6 cm. Thành ly là hình trụ cao 3 cm. Đáy là nửa khối cầu có đường kính bằng miệng ly.</p>
        <p>a) Tính thể tích rượu chứa tối đa khi đổ đầy ly.</p>
        <p>b) 12 người, mỗi người uống 4 ly, mỗi lần rót bằng 60% thể tích ly. Mỗi chai có 0,85 lít. Cần ít nhất bao nhiêu chai?</p>
        <details class="check"><summary>Đáp án</summary>
          <p>a) \(V = \pi \cdot 3^2 \cdot 3 + \dfrac{2}{3}\pi \cdot 3^3 = 45\pi\) cm³.</p>
          <p>b) Lượng cần là \(1296\pi\) cm³, khoảng 4,79 lít. Bốn chai không đủ, nên cần 5 chai.</p>
        </details>
        <p><strong>Bài IV.2a.</strong> \(EM \perp DF\), \(FN \perp DE\), \(Q\) là hình chiếu vuông góc của \(E\) trên đường kính \(FP\). Chứng minh \(F\), \(N\), \(Q\), \(E\) cùng thuộc một đường tròn.</p>
        <details class="check"><summary>Đáp án</summary>
          <p>\(FN \perp DE\) và \(EQ \perp FP\), nên hai góc nhìn đoạn \(FE\) đều vuông. Bốn điểm cùng thuộc đường tròn đường kính \(FE\).</p>
        </details>
      </div>
      <div class="examq">
        <p><strong>Bài V.</strong> Hầm biogas hình hộp chữ nhật có thể tích 12 m³. Chiều sâu gấp rưỡi chiều rộng. Tìm chiều dài và chiều rộng của đáy để tiết kiệm nguyên vật liệu nhất. Không tính bề dày thành bể.</p>
        <details class="check"><summary>Đáp án</summary>
          <p>Hầm kín để giữ khí, nên tính cả sáu mặt. Rộng \(x\), sâu \(\dfrac{3}{2}x\), dài \(\dfrac{8}{x^2}\). Diện tích nhỏ nhất khi \(x^3 = \dfrac{20}{3}\). Làm tròn đến hàng phần trăm: rộng 1,88 m, dài 2,26 m, sâu 2,82 m.</p>
        </details>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề Mỹ Đình 2: có bao nhiêu bóng đèn tuổi thọ 1170 giờ?", answer: 12, hint: "Đếm trong 30 số, rồi kiểm tra tổng tần số bằng 30.", explain: "1170 xuất hiện 12 lần. 3 + 6 + 12 + 6 + 3 = 30." },
      { type: "num", prompt: "Từ 1160 đến 1180 giờ, kể cả hai đầu, chiếm bao nhiêu phần trăm số bóng?", answer: 80, hint: "24 bóng trên 30.", explain: "6 + 12 + 6 = 24, 24/30 = 80%. Câu “trên 75%” là đúng." },
      { type: "num", prompt: "Tung đồng xu ba lần. Biến cố “sấp đúng một lần” có bao nhiêu kết quả thuận lợi?", answer: 3, hint: "SNN, NSN, NNS.", explain: "Ba kết quả trên tám, P(A) = 3/8." },
      { type: "num", prompt: "Khi x = 49, 2B bằng bao nhiêu?", answer: 9, hint: "B = 9/2.", explain: "(7 + 2)/(7 − 5) = 9/2, nên 2B = 9." },
      { type: "num", prompt: "Phương trình B/A = |x − 4| có hai nghiệm. Tổng hai nghiệm bằng bao nhiêu?", answer: 10, hint: "Một nghiệm là 1, nghiệm kia là 9.", explain: "x = 1 và x = 9 đều thỏa x ≥ 0, x ≠ 25. Tổng bằng 10." },
      { type: "num", prompt: "Không kể thuế, loại hàng thứ nhất giá bao nhiêu nghìn đồng?", answer: 500, hint: "x + y = 2 triệu, rồi x = 0,5 triệu.", explain: "0,5 triệu đồng là 500 nghìn đồng. Loại thứ hai là 1,5 triệu." },
      { type: "num", prompt: "Theo kế hoạch, mỗi ngày may bao nhiêu chiếc khẩu trang?", answer: 700, hint: "8400/x − 6416/(x + 102) = 4.", explain: "x = 700. Kiểm tra: 12 ngày kế hoạch, 8 ngày thực tế, 8·802 = 6416." },
      { type: "num", prompt: "Biểu thức A = x1³ + 10x2 − 30 bằng bao nhiêu?", answer: 3, hint: "Đưa x1³ về 10x1 + 3, rồi dùng tổng hai nghiệm.", explain: "A = 10(x1 + x2) − 27 = 30 − 27 = 3." },
      { type: "num", prompt: "Thể tích rượu tối đa trong một ly là kπ cm³. Giá trị k bằng bao nhiêu?", answer: 45, hint: "Trụ 27π cộng nửa cầu 18π.", explain: "27π + 18π = 45π cm³." },
      { type: "num", prompt: "Ông A cần chuẩn bị ít nhất bao nhiêu chai rượu vàng?", answer: 5, hint: "1296π cm³, mỗi chai 0,85 lít. Bốn chai không đủ.", explain: "Khoảng 4,79 lít, nên ít nhất 5 chai." },
    ],
  },
  {
    id: "tv10-11",
    num: 11,
    chapter: 7,
    title: "Tám đề thử khác ở Hà Nội",
    summary: "Cầu Giấy, Thái Thịnh, Đống Đa, Hà Đông, Ba Đình, Ngọc Hồi, Nguyễn Trường Tộ, Thạch Thất.",
    body: String.raw`
      <p>Các câu dưới đây lấy từ đề thi thử hoặc đề khảo sát của trường và phòng GD&ĐT ở Hà Nội, năm học 2025–2026 và 2026–2027. Không phải đề chính thức của Sở. Biểu đồ nào trang nguồn không in số thì không đưa vào, để khỏi đoán.</p>
      <div class="examq">
        <p><strong>THCS Cầu Giấy, lần 1, năm học 2025–2026.</strong> Điểm học kỳ: không quá 7 có 33 em, nhóm 
(7;
 8] có 60, nhóm (8;
 9] có 189, nhóm (9;
 10] có 168.</p>
        <p>Cả khối có \(33 + 60 + 189 + 168 = 450\) học sinh. Nhóm đông nhất là (8;
 9], chiếm \(\dfrac{189}{450} = 42\%\).</p>
        <p>Hộp có 13 bóng đỏ, 10 bóng vàng, 80 bóng trắng. Không trắng là 23 quả trên 103 quả. \(\dfrac{23}{103} \approx 0{,}223\), làm tròn đến hàng phần trăm được 22%.</p>
        <p>Ném 15 quả. Vào rổ được 2 điểm, ra ngoài bị trừ 1 điểm. Muốn ít nhất 15 điểm thì số quả vào rổ \(k\) thỏa \(3k - 15 \geq 15\), nên \(k \geq 10\). Mười quả vào rổ đúng 15 điểm. Chín quả chỉ được 12 điểm.</p>
        <p>Hai tổ dự định làm tổng 600 sản phẩm. Tổ 1 vượt 10%, tổ 2 vượt 20%, cả hai làm được 685. Gọi số kế hoạch của tổ 1 là \(x\). \(1{,}1x + 1{,}2(600 - x) = 685\), được \(x = 350\), tổ 2 là 250. Kiểm tra: \(385 + 300 = 685\).</p>
        <p>\(2x^2 - 4x + 1 = 0\). Tổng hai nghiệm là 2, tích là \(\dfrac{1}{2}\). Không nghiệm nào bằng 0. Tổng nghịch đảo bằng \(\dfrac{2}{1/2} = 4\).</p>
      </div>
      <div class="examq">
        <p><strong>THCS Thái Thịnh, năm học 2026–2027.</strong> 40 học sinh. Thời gian đến trường: nhóm 
[0;
 10) chiếm 30%, [10;
 20) chiếm 45%, [20;
 30) chiếm 25%.</p>
        <p>Tần số nhóm [20;
 30) là \(0{,}25 \cdot 40 = 10\). Dưới 20 phút là 75% của 40, tức 30 em.</p>
        <p>Rút hai viên trong năm viên ghi 1 đến 5. Tích không nhỏ hơn 10: các cặp (2;
 5), (3;
 4), (3;
 5), (4;
 5). Bốn cặp trên mười cặp. \(P = \dfrac{2}{5}\). Có kể thứ tự thì vẫn ra \(\dfrac{2}{5}\).</p>
        <p>Kế hoạch mỗi ngày 30 áo, thực tế 40 áo. Vượt 20 áo và xong sớm 2 ngày. Gọi số ngày kế hoạch là \(n\). \(40(n - 2) = 30n + 20\), \(n = 10\). Theo kế hoạch phải may 300 áo. Kiểm tra: 8 ngày thực tế may 320 áo.</p>
        <p>20 tờ tiền loại 10 nghìn và 20 nghìn. Đơn hàng 300 nghìn, trả xong còn một tờ 20 nghìn. Tổng tiền ban đầu là 320 nghìn. Gọi \(y\) là số tờ 20 nghìn: \(10(20 - y) + 20y = 320\), \(y = 12\), tờ 10 nghìn là 8. Trả 8 tờ 10 nghìn và 11 tờ 20 nghìn đúng 300 nghìn.</p>
        <p>Nước trong bình trụ bán kính 4 cm, cao 10 cm: \(V = 3{,}14 \cdot 16 \cdot 10 = 502{,}4\) cm³. Bát nửa cầu bán kính 6 cm chứa \(\dfrac{2}{3} \cdot 3{,}14 \cdot 216 = 452{,}16\) cm³. Nước tràn, vì 502,4 lớn hơn 452,16.</p>
        <p>330 chỗ, xe 30 chỗ giá 3 triệu, xe 45 chỗ giá 4 triệu, xe nào cũng kín chỗ. \(2a + 3b = 22\). Chi phí nhỏ nhất khi 2 xe 30 chỗ và 6 xe 45 chỗ, hết 30 triệu. Kiểm tra: \(60 + 270 = 330\).</p>
      </div>
      <div class="examq">
        <p><strong>THCS Đống Đa, khảo sát tháng 1, năm học 2025–2026.</strong> Bạn Bình có 600 nghìn đồng. Áo giảm 30 nghìn một chiếc nên mua được gấp 1,25 lần số áo dự định. Giá niêm yết \(x\) nghìn, \(x > 30\).</p>
        \[
          \dfrac{600}{x - 30} = 1{,}25 \cdot \dfrac{600}{x}.
        \]
        <p>\(x = 150\). Giá đã mua là \(150 - 30 = 120\) nghìn đồng một chiếc. Kiểm tra: dự định 4 chiếc, thực mua 5 chiếc.</p>
        <p><strong>THCS Hà Đông, lần 2.</strong> Mười thẻ ghi 1 đến 10. Số chính phương là 1, 4, 9. \(P = \dfrac{3}{10}\).</p>
        <p><strong>Phường Ba Đình, lần 3, ngày 25/3/2026.</strong> Đĩa chia 12 phần, ghi 1 đến 12. Chia hết cho 4: 4, 8, 12. \(P = \dfrac{3}{12} = \dfrac{1}{4}\).</p>
      </div>
      <div class="examq">
        <p><strong>THCS Ngọc Hồi, khảo sát tháng 3.</strong> Parabol \(y = ax^2\) đi qua (1;
 3), nên \(a = 3\). Điểm có hoành độ 2 là (2;
 12).</p>
        <p>Đĩa 20 phần, ghi 1 đến 20. Chia cho 5 dư 1: 1, 6, 11, 16. \(P = \dfrac{4}{20} = \dfrac{1}{5}\).</p>
        <p><strong>THCS Nguyễn Trường Tộ, khảo sát tháng 4.</strong> Rút một thẻ trong 48 thẻ ghi 1 đến 48. Ước của 90 không vượt quá 48: 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45. Mười một số. \(P = \dfrac{11}{48}\). Số 90 không có trong hộp.</p>
        <p>Thang máy chịu tối đa 1200 kg. Nhân viên 75 kg, mỗi thùng 45 kg. \(75 + 45k \leq 1200\), \(k \leq 25\). Đúng 25 thùng thì tổng đúng 1200 kg, vẫn được.</p>
        <p><strong>Phòng GD&ĐT Thạch Thất.</strong> Ba bi vàng ghi 1, 2, 3 và hai bi nâu ghi 4, 5. Rút đồng thời hai bi. Khác màu có \(3 \cdot 2 = 6\) cách, trên \(C_5^2 = 10\) cách. \(P = \dfrac{3}{5}\).</p>
        <p>Giá niêm yết mặt hàng A là \(a\) đồng, B là \(b\) đồng. Giảm 20% và 15%: \(1{,}6a + 0{,}85b = 362000\). Giờ vàng giảm 30% và 25%: \(2{,}1a + 1{,}5b = 552000\). Giải được \(a = 120000\), \(b = 200000\). Kiểm tra cả hai hóa đơn đều khớp.</p>
      </div>
      <div class="memory">
        <p>Đề thử đổi số, không đổi việc phải làm: cộng ra cỡ mẫu, viết điều kiện, kiểm tra nghiệm, và với bài xe hoặc thùng thì thử số nguyên được phép.</p>
      </div>
    `,
    exercises: [
      { type: "num", prompt: "Đề Cầu Giấy: khối 9 có bao nhiêu học sinh?", answer: 450, hint: "Cộng bốn nhóm điểm.", explain: "33 + 60 + 189 + 168 = 450." },
      { type: "num", prompt: "Đề Cầu Giấy: nhóm điểm đông nhất chiếm bao nhiêu phần trăm?", answer: 42, hint: "189 trên 450.", explain: "Nhóm (8; 9] có 189 em, 189/450 = 42%." },
      { type: "num", prompt: "Đề Cầu Giấy: muốn được chọn, phải ném vào rổ ít nhất bao nhiêu quả?", answer: 10, hint: "Điểm = 3k − 15. Cần ít nhất 15 điểm.", explain: "3k − 15 ≥ 15 cho k ≥ 10. Chín quả chỉ được 12 điểm." },
      { type: "num", prompt: "Đề Cầu Giấy: tổ 1 phải làm bao nhiêu sản phẩm theo kế hoạch?", answer: 350, hint: "x + y = 600 và 1,1x + 1,2y = 685.", explain: "x = 350, y = 250. Thực tế 385 + 300 = 685." },
      { type: "num", prompt: "Đề Thái Thịnh: bao nhiêu học sinh đến trường dưới 20 phút?", answer: 30, hint: "30% cộng 45%, rồi nhân với 40.", explain: "75% của 40 là 30 học sinh." },
      { type: "num", prompt: "Đề Thái Thịnh: theo kế hoạch xưởng phải may bao nhiêu áo?", answer: 300, hint: "Mười ngày, mỗi ngày 30 áo.", explain: "40(n − 2) = 30n + 20 cho n = 10. Tổng kế hoạch là 300." },
      { type: "num", prompt: "Đề Thái Thịnh: để rẻ nhất, cần thuê bao nhiêu xe 45 chỗ?", answer: 6, hint: "2a + 3b = 22. So chi phí của các cặp nguyên.", explain: "2 xe 30 chỗ và 6 xe 45 chỗ hết 30 triệu, ít hơn các cách khác." },
      { type: "num", prompt: "Đề Đống Đa: Bình đã mua mỗi chiếc áo với giá bao nhiêu nghìn đồng?", answer: 120, hint: "Giá niêm yết 150, đã giảm 30.", explain: "600/(x − 30) = 1,25·600/x cho x = 150. Giá mua là 120 nghìn." },
      { type: "num", prompt: "Đề Nguyễn Trường Tộ: nhân viên mang theo tối đa bao nhiêu thùng?", answer: 25, hint: "75 + 45k ≤ 1200.", explain: "k ≤ 25. Đúng 25 thùng thì tổng đúng 1200 kg, vẫn không vượt tải." },
      { type: "num", prompt: "Đề Thạch Thất: giá niêm yết mặt hàng A là bao nhiêu đồng?", answer: 120000, hint: "1,6a + 0,85b = 362000 và 2,1a + 1,5b = 552000.", explain: "a = 120000, b = 200000. Cả hai hóa đơn đều khớp." },
      { type: "mc", prompt: "Đề Thái Thịnh, đổ nước từ bình trụ sang bát nửa cầu. Kết luận đúng là:", choices: ["Nước không tràn", "Nước tràn, vì 502,4 cm³ lớn hơn 452,16 cm³", "Hai thể tích bằng nhau", "Thiếu dữ liệu để so"], correct: 1, hint: "Tính cả hai thể tích với π ≈ 3,14.", explain: "Bình chứa 502,4 cm³, bát chứa 452,16 cm³. Nước tràn." },
      { type: "mc", prompt: "Đề Hà Đông, mười thẻ ghi 1 đến 10. Biến cố “số chính phương” có bao nhiêu kết quả thuận lợi?", choices: ["2", "3", "4", "5"], correct: 1, hint: "1, 4, 9. Số 16 không có trong hộp.", explain: "Ba số chính phương. P = 3/10." },
    ],
  },
  {
    id: "tv10-12",
    num: 12,
    chapter: 7,
    title: "Đề thử Mỹ Đình 2, năm 2021",
    summary: "Đề ngày 30/5/2021, 90 phút. Ảnh gốc ở trên, câu hỏi ở dưới, chưa có đáp án.",
    pages: ["de/my-dinh-2-2021-de.png"],
    files: [{ href: "de/my-dinh-2-2021-de.png", label: "Mở ảnh đề" }],
    body: String.raw`
      <p>Đề thi thử của THCS Mỹ Đình 2, ngày 30 tháng 5 năm 2021, 90 phút. Đây là câu hỏi, chưa có lời giải. Ảnh gốc nhỏ, mẫu số ở Bài 3 đọc là \(x - 2y\).</p>
      <div class="examq">
        <p><strong>Bài 1 (2,0 điểm).</strong> Cho \(A = \dfrac{4}{2\sqrt{x} - x}\) và \(B = \dfrac{\sqrt{x} - 4}{x - 2\sqrt{x}} + \dfrac{3}{\sqrt{x} - 2}\), với \(x > 0\), \(x \neq 4\).</p>
        <p>1) Tính \(A\) khi \(x = 2\).</p>
        <p>2) Rút gọn \(P = B : A\).</p>
        <p>3) Tìm \(x\) để \(M \geq 0\), với \(M = P \cdot \dfrac{1 - \sqrt{x}}{\sqrt{x} - 3}\).</p>
      </div>
      <div class="examq">
        <p><strong>Bài 2 (2,5 điểm).</strong></p>
        <p>1) Hai địa điểm \(A\) và \(B\) cách nhau 30 km. Cùng lúc, một người đi xe máy từ \(A\), một người đi xe đạp từ \(B\). Nếu đi ngược chiều thì sau 40 phút họ gặp nhau. Nếu đi cùng chiều theo hướng từ \(A\) đến \(B\) thì sau 2 giờ họ gặp nhau tại \(C\), với \(B\) nằm giữa \(A\) và \(C\). Tính vận tốc mỗi xe.</p>
        <p>2) Một hình trụ có chiều cao bằng đường kính đáy, diện tích toàn phần \(48\pi\) cm². Tính thể tích hình trụ đó.</p>
      </div>
      <div class="examq">
        <p><strong>Bài 3 (2,0 điểm).</strong></p>
        <p>1) Giải hệ</p>
        \[
          \begin{cases}
            \dfrac{2}{x - 2y} + \sqrt{y - 1} = 3 \\
            \dfrac{3}{x - 2y} - 2\sqrt{y - 1} = 1.
          \end{cases}
        \]
        <p>2) Cho parabol \((P): y = \dfrac{1}{2}x^2\) và đường thẳng \((d): y = (m + 1)x - m\).</p>
        <p>a) Chứng minh \((d)\) luôn cắt \((P)\) tại hai điểm phân biệt với mọi \(m\).</p>
        <p>b) Gọi \(x_1, x_2\) là hoành độ các giao điểm. Tìm \(m\) để \(\sqrt{x_1} + \sqrt{x_2} = \sqrt{2}\).</p>
      </div>
      <div class="examq">
        <p><strong>Bài 4 (3,0 điểm).</strong> Cho nửa đường tròn \((O; R)\) đường kính \(BC\). Lấy \(D\) và \(E\) di động trên nửa đường tròn sao cho \(\widehat{EOD} = 90^\circ\), với \(D\) thuộc cung \(\overset{\frown}{CE}\) và \(E\) thuộc cung \(\overset{\frown}{BD}\). \(BD\) cắt \(CE\) tại \(H\). Các tia \(BE\) và \(CD\) cắt nhau tại \(A\).</p>
        <p>a) Chứng minh tứ giác \(ADHE\) nội tiếp.</p>
        <p>b) Chứng minh \(OD\) là tiếp tuyến của đường tròn ngoại tiếp tứ giác \(ADHE\).</p>
        <p>c) Kẻ đường thẳng vuông góc với \(AB\) tại \(B\) và đường thẳng vuông góc với \(AC\) tại \(C\). Gọi \(K\) là giao điểm hai đường thẳng đó, \(I\) là trung điểm \(AK\). Tính số đo góc \(BIC\).</p>
        <p>d) Tìm vị trí của \(D\) và \(E\) để \(AB + AC\) lớn nhất.</p>
      </div>
      <div class="examq">
        <p><strong>Bài 5 (0,5 điểm).</strong> Cho \(x, y\) thỏa mãn \(x^2 + 2xy + 3y^2 = 6\). Tìm giá trị lớn nhất và giá trị nhỏ nhất của \(M = x + 2y\).</p>
      </div>
    `,
    exercises: [],
  },
];

COURSES.push({
  id: "thi10",
  grade: "10",
  title: "Thi vào 10",
  level: "Hà Nội",
  subtitle: "Toán không chuyên · đề Sở 2022–2026 · đề thử Mỹ Đình 2",
  blurb: "Ôn bằng đề chính thức của Sở và đề thi thử của các trường Hà Nội. Không gồm Văn hay Ngoại ngữ.",
  chapters: THI10_CHAPTERS,
  lessons: THI10_LESSONS,
  papers: [
    {
      title: "Hà Nội 2026",
      note: "Đề chính thức Sở GDĐT, 31/5/2026.",
      pages: ["de/ha-noi-2026-1.jpg", "de/ha-noi-2026-2.jpg"],
      files: [
        { href: "de/ha-noi-2026-de.pdf", label: "Đề PDF" },
        { href: "de/ha-noi-2026-dap-an.pdf", label: "Đáp án PDF" },
      ],
    },
    {
      title: "Hà Nội 2025",
      note: "Đề chính thức Sở GDĐT, 8/6/2025.",
      pages: ["de/ha-noi-2025-1.jpg", "de/ha-noi-2025-2.jpg"],
      files: [
        { href: "de/ha-noi-2025-de.pdf", label: "Đề PDF" },
        { href: "de/ha-noi-2025-dap-an.pdf", label: "Đáp án PDF" },
      ],
    },
    {
      title: "Hà Nội 2024",
      note: "Đề chính thức Sở GDĐT, 9/6/2024. Đề một trang.",
      pages: ["de/ha-noi-2024-1.jpg"],
      files: [
        { href: "de/ha-noi-2024-de.pdf", label: "Đề PDF" },
        { href: "de/ha-noi-2024-dap-an.pdf", label: "Đáp án PDF" },
      ],
    },
    {
      title: "THCS Mỹ Đình 2, 2026",
      note: "Đề thi thử năm học 2026–2027.",
      pages: ["de/my-dinh-2-1.jpg", "de/my-dinh-2-2.jpg"],
      files: [{ href: "de/my-dinh-2-2026-de.pdf", label: "Đề PDF" }],
    },
    {
      title: "THCS Mỹ Đình 2, 2021",
      note: "Đề thi thử ngày 30/5/2021, 90 phút.",
      pages: ["de/my-dinh-2-2021-de.png"],
      files: [{ href: "de/my-dinh-2-2021-de.png", label: "Ảnh đề" }],
    },
  ],
});
