// Ôn Toán vào lớp 10 công lập không chuyên, Hà Nội.
// Cấu trúc đề: 120 phút, 5 câu, thang 10. Không gồm Văn hay Ngoại ngữ.
const THI10_CHAPTERS = [
  { id: 1, label: "Câu I", title: "Thống kê và xác suất" },
  { id: 2, label: "Câu II", title: "Biểu thức chứa căn" },
  { id: 3, label: "Câu III", title: "Phương trình, hệ và Viète" },
  { id: 4, label: "Câu IV", title: "Hình trụ, hình nón và chứng minh" },
  { id: 5, label: "Câu V", title: "Bài toán tối ưu" },
];

const THI10_LESSONS = [
  {
    id: "tv10-1",
    num: 1,
    chapter: 1,
    title: "Tần số ghép nhóm",
    summary: "Đọc bảng [a; b), cộng tần số ra đúng cỡ mẫu, rồi đổi thành phần trăm.",
    body: String.raw`
      <p>Câu I của đề Hà Nội thường mở bằng một bảng tần số ghép nhóm. Không cần vẽ biểu đồ. Cần đọc đúng nhóm và tính đúng tỉ lệ.</p>
      <div class="idea">
        <p><strong>Ba việc, theo thứ tự.</strong> Cộng các tần số. Tổng phải bằng cỡ mẫu. Nếu lệch, đã đọc sót. Rồi lấy đúng hàng của nhóm được hỏi. Cuối cùng chia cho cỡ mẫu và nhân 100%.</p>
        <p>Nhóm \([a;\ b)\) lấy \(a\), không lấy \(b\). Giá trị đúng bằng \(b\) sang nhóm kế tiếp. Đếm nhầm đầu mút là mất điểm phần này.</p>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> 40 học sinh, thời gian tự học mỗi tối:</p>
        <table>
          <tr><th>Giờ</th><td>\([0;\ 1)\)</td><td>\([1;\ 2)\)</td><td>\([2;\ 3)\)</td><td>\([3;\ 4)\)</td></tr>
          <tr><th>Tần số</th><td>6</td><td>10</td><td>14</td><td>10</td></tr>
        </table>
        <p>\(6 + 10 + 14 + 10 = 40\). Bảng khớp cỡ mẫu. Nhóm \([2;\ 3)\) có tần số 14. Tần số tương đối \(\dfrac{14}{40} \cdot 100\% = 35\%\).</p>
        <p>Bạn học đúng 2 giờ thuộc \([2;\ 3)\), không thuộc \([1;\ 2)\). Bạn học đúng 3 giờ thuộc \([3;\ 4)\).</p>
      </div>
      <div class="memory">
        <p><strong>Cách viết.</strong> Nêu tần số trước, rồi tần số tương đối kèm phép chia. Đừng chỉ viết 35% mà không có \(\dfrac{14}{40}\).</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Ở bảng 40 học sinh trên, tần số của nhóm [2; 3) là bao nhiêu?",
        answer: 14,
        hint: "Đọc đúng cột [2; 3), không cộng các cột khác.",
        explain: "Cột [2; 3) ghi 14. Tổng bốn cột là 40, đúng cỡ mẫu.",
      },
      {
        type: "num",
        prompt: "Tần số tương đối của nhóm [2; 3) bằng bao nhiêu phần trăm?",
        answer: 35,
        hint: "(14/40)·100.",
        explain: "14/40 = 0,35, nhân 100% được 35%.",
      },
      {
        type: "mc",
        prompt: "Bạn học đúng 3 giờ thuộc nhóm nào?",
        choices: ["[1; 2)", "[2; 3)", "[3; 4)", "[0; 1)"],
        correct: 2,
        hint: "Ngoặc tròn không lấy đầu mút phải. 3 không còn ở [2; 3).",
        explain: "[2; 3) không lấy 3. Giá trị 3 thuộc [3; 4).",
      },
    ],
  },
  {
    id: "tv10-2",
    num: 2,
    chapter: 1,
    title: "Xác suất một lần rút",
    summary: "Liệt kê không gian mẫu, đếm kết quả thuận lợi, chỉ chia khi các kết quả ngang nhau.",
    body: String.raw`
      <p>Ý thứ hai của câu I gần như luôn là rút một lần từ hộp thẻ hoặc bóng cùng loại. Không có hoàn lại, không có lần thứ hai.</p>
      <div class="idea">
        <p><strong>Ba dòng phải có trong bài.</strong> Viết \(\Omega\). Nói các kết quả đồng khả năng vì các thẻ cùng loại và rút ngẫu nhiên. Đếm kết quả thuận lợi, rồi</p>
        \[
          P(A) = \dfrac{n(A)}{n(\Omega)}.
        \]
        <p>Nếu thẻ không cùng loại, hoặc xúc xắc lệch, không được chia đều.</p>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> Hộp có 8 thẻ ghi 1 đến 8, mỗi số một thẻ. Rút một thẻ. Biến cố \(A\): số chia hết cho 3.</p>
        <p>\(\Omega = \{1, 2, 3, 4, 5, 6, 7, 8\}\), \(n(\Omega) = 8\). Thuận lợi: 3 và 6, nên \(n(A) = 2\). \(P(A) = \dfrac{2}{8} = \dfrac{1}{4}\).</p>
        <p>9 chia hết cho 3 nhưng không có trong hộp. Không được đếm số không nằm trong \(\Omega\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Quên rút gọn phân số. Đếm cả số không có trên thẻ. Viết xác suất lớn hơn 1.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Hộp 8 thẻ ghi 1 đến 8. Rút một thẻ. Có bao nhiêu kết quả thuận lợi cho biến cố “chia hết cho 3”?",
        answer: 2,
        hint: "Trong 1 đến 8, số nào chia hết cho 3?",
        explain: "3 và 6. 9 không có trong hộp. n(A) = 2.",
      },
      {
        type: "num",
        prompt: "Với phép thử trên, P(A) = 1/k. Giá trị k bằng bao nhiêu?",
        answer: 4,
        hint: "2/8 rút gọn.",
        explain: "P(A) = 2/8 = 1/4, nên k = 4.",
      },
      {
        type: "mc",
        prompt: "Khi nào được tính xác suất bằng số thuận lợi chia cho số phần tử của Ω?",
        choices: [
          "Khi mọi kết quả đều đồng khả năng",
          "Khi chỉ có một kết quả thuận lợi",
          "Khi Ω có đúng 6 phần tử",
          "Khi biến cố là số chẵn",
        ],
        correct: 0,
        hint: "Xúc xắc lệch thì mỗi mặt không còn một cơ hội như nhau.",
        explain: "Công thức ấy cần các kết quả đồng khả năng. Thẻ cùng loại, rút ngẫu nhiên, thì được.",
      },
    ],
  },
  {
    id: "tv10-3",
    num: 3,
    chapter: 2,
    title: "Rút gọn căn rồi mới tìm x",
    summary: "Đặt điều kiện, thay số, chứng minh bằng đặt t = √x, rồi giải bất phương trình.",
    body: String.raw`
      <p>Câu II cho hai biểu thức chứa căn. Ý 1 là thế số. Ý 2 là rút gọn. Ý 3 dùng kết quả vừa rút để giải bất phương trình hoặc tìm số nguyên. Đừng giải ý 3 trên biểu thức chưa gọn.</p>
      <div class="idea">
        <p><strong>Đặt \(t = \sqrt{x}\).</strong> Điều kiện thường là \(x > 0\) và mẫu khác 0. Viết điều kiện trước khi thế. Khi rút gọn, nhân liên hợp hoặc tách nhân tử \((\sqrt{x} - a)(\sqrt{x} + a)\). Sau khi rút, thay lại vào ý 3.</p>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(A = \dfrac{\sqrt{x} + 3}{\sqrt{x} - 1}\), \(x > 0\), \(x \neq 1\).</p>
        <p>Với \(x = 4\): \(\sqrt{4} = 2 \neq 1\), thỏa điều kiện. \(A = \dfrac{2 + 3}{2 - 1} = 5\).</p>
        <p>Đặt \(t = \sqrt{x}\), \(t > 0\), \(t \neq 1\). Xét \(B = \dfrac{x + 2\sqrt{x} - 3}{\sqrt{x} - 1} - \sqrt{x}\). Tử \(t^2 + 2t - 3 = (t + 3)(t - 1)\), nên</p>
        \[
          B = t + 3 - t = 3.
        \]
        <p>Muốn \(\dfrac{A}{B} < 1\): \(\dfrac{t + 3}{3(t - 1)} < 1\). Với \(t > 1\), mẫu dương, nên \(t + 3 < 3t - 3\), tức \(t > 3\), \(x > 9\). Số nguyên nhỏ nhất là \(x = 10\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Thế \(x = 1\) vào mẫu bằng 0. Rút gọn xong quên điều kiện cũ. Nhân hai vế bất phương trình khi chưa biết mẫu âm hay dương.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Với \(A = \dfrac{\sqrt{x} + 3}{\sqrt{x} - 1}\), \(x = 4\). Giá trị của A là bao nhiêu?`,
        answer: 5,
        hint: "√4 = 2, rồi thay vào tử và mẫu.",
        explain: "A = (2 + 3)/(2 − 1) = 5. x = 4 thỏa x > 0 và x ≠ 1.",
      },
      {
        type: "num",
        prompt: "Số nguyên nhỏ nhất x > 9 thỏa A/B < 1, với B = 3 như ví dụ, là bao nhiêu?",
        answer: 10,
        hint: "x > 9, x nguyên, lấy số nhỏ nhất.",
        explain: "Từ √x > 3 được x > 9. Số nguyên nhỏ nhất là 10.",
      },
      {
        type: "mc",
        prompt: String.raw`Biểu thức \(\dfrac{\sqrt{x} + 3}{\sqrt{x} - 1}\) không xác định khi nào?`,
        choices: ["x = 0", "x = 1", "x = 9", "x = 4"],
        correct: 1,
        hint: "Mẫu bằng 0 khi √x = 1.",
        explain: "√x − 1 = 0 khi x = 1. x = 0 cũng ngoài miền x > 0, nhưng câu hỏi về mẫu bằng 0 là x = 1.",
      },
    ],
  },
  {
    id: "tv10-4",
    num: 4,
    chapter: 3,
    title: "Một phương trình, rồi một hệ",
    summary: "Gọi ẩn, ghi điều kiện, lập quan hệ, giải, loại nghiệm không đúng đề.",
    body: String.raw`
      <p>Câu III thường có hai bài thực tế và một bài Viète. Bài thực tế thứ nhất là một phương trình. Bài thứ hai là một hệ hai ẩn. Đừng gộp hai câu chuyện vào một phương trình.</p>
      <div class="example">
        <p><strong>Một ẩn.</strong> Quãng đường \(x\) km, \(x > 0\). Chiều đi 50 km/h, chiều về 30 km/h. Chiều đi ít hơn chiều về 1 giờ:</p>
        \[
          \dfrac{x}{30} - \dfrac{x}{50} = 1.
        \]
        <p>\(\dfrac{5x - 3x}{150} = 1\), \(2x = 150\), \(x = 75\). Kiểm tra: \(75/50 = 1{,}5\) giờ, \(75/30 = 2{,}5\) giờ, hiệu đúng 1 giờ.</p>
      </div>
      <div class="example">
        <p><strong>Hai ẩn.</strong> Mua vở và bút, tất cả 20 món, hết 200 nghìn đồng. Vở 15 nghìn, bút 5 nghìn. Gọi \(x\) là số vở, \(y\) là số bút, \(x, y\) nguyên, \(0 \leq x, y \leq 20\).</p>
        \[
          \begin{cases} x + y = 20 \\ 15x + 5y = 200. \end{cases}
        \]
        <p>Nhân câu thứ nhất với 5 rồi trừ: \(10x = 100\), \(x = 10\), \(y = 10\). Kiểm tra tiền: \(150 + 50 = 200\). Nhận.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Quên đổi đơn vị. Nhận nghiệm âm cho số món hoặc quãng đường. Viết thời gian là vận tốc nhân đường, thay vì đường chia vận tốc.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Quãng đường đi 50 km/h và về 30 km/h, chiều đi ít hơn 1 giờ. Quãng đường dài bao nhiêu km?",
        answer: 75,
        hint: "x/30 − x/50 = 1.",
        explain: "2x/150 = 1, x = 75 km. Kiểm tra hiệu thời gian đúng 1 giờ.",
      },
      {
        type: "num",
        prompt: "20 món vở và bút hết 200 nghìn đồng. Vở 15 nghìn, bút 5 nghìn. Mua bao nhiêu quyển vở?",
        answer: 10,
        hint: "x + y = 20 và 15x + 5y = 200.",
        explain: "Trừ 5 lần câu thứ nhất: 10x = 100, x = 10, y = 10.",
      },
      {
        type: "mc",
        prompt: "Giải ra x = 75 và x = −20 cho bài quãng đường. Kết luận đúng là:",
        choices: [
          "Nhận cả hai",
          "Chỉ nhận 75 vì x > 0",
          "Chỉ nhận −20",
          "Bài toán vô nghiệm",
        ],
        correct: 1,
        hint: "Điều kiện đã ghi trước khi giải: x > 0.",
        explain: "Quãng đường không âm. −20 là nghiệm của phương trình nhưng bị loại bởi điều kiện.",
      },
    ],
  },
  {
    id: "tv10-5",
    num: 5,
    chapter: 3,
    title: "Viète, không cần giải nghiệm",
    summary: "Đọc tổng và tích từ hệ số, rồi biến biểu thức về tổng và tích.",
    body: String.raw`
      <p>Ý cuối câu III thường cho một phương trình bậc hai đã có hai nghiệm, rồi hỏi một biểu thức. Đề không bảo tìm từng nghiệm. Dùng Viète.</p>
      <div class="idea">
        <p>Với \(x^2 - sx + p = 0\), tổng hai nghiệm là \(s\), tích là \(p\). Dạng tổng quát \(ax^2 + bx + c = 0\): tổng \(-\dfrac{b}{a}\), tích \(\dfrac{c}{a}\). Chỉ dùng khi \(\Delta \geq 0\).</p>
        <p>Biến \(x_1^2 + x_2^2\) thành \((x_1 + x_2)^2 - 2x_1 x_2\). Quy đồng biểu thức có mẫu \(x_1, x_2\) trước khi thế.</p>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(x^2 - 5x + 2 = 0\). \(\Delta = 25 - 8 = 17 > 0\), có hai nghiệm. Tổng \(5\), tích \(2\).</p>
        \[
          x_1^2 + x_2^2 = 5^2 - 2 \cdot 2 = 21.
        \]
        <p>Không cần viết \(\dfrac{5 \pm \sqrt{17}}{2}\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Quên dấu trừ ở tổng. Dùng Viète khi \(\Delta < 0\). Thế nhầm tích vào chỗ tổng.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Phương trình \(x^2 - 5x + 2 = 0\) có hai nghiệm. Tổng hai nghiệm bằng bao nhiêu?`,
        answer: 5,
        hint: "Tổng = −b/a = −(−5)/1.",
        explain: "Tổng = 5, tích = 2. Δ = 17 > 0 nên Viète dùng được.",
      },
      {
        type: "num",
        prompt: String.raw`Với hai nghiệm ấy, \(x_1^2 + x_2^2\) bằng bao nhiêu?`,
        answer: 21,
        hint: "(x1 + x2)² − 2x1x2.",
        explain: "25 − 2·2 = 21.",
      },
      {
        type: "mc",
        prompt: String.raw`Phương trình \(x^2 + x + 1 = 0\) có \(\Delta < 0\). Có dùng Viète để nói tổng hai nghiệm không?`,
        choices: [
          "Có, tổng vẫn là −1",
          "Không, vì không có nghiệm thực",
          "Có, nếu đổi dấu c",
          "Chỉ dùng được khi a = 1",
        ],
        correct: 1,
        hint: "Viète nói về các nghiệm đã tồn tại.",
        explain: "Δ = 1 − 4 = −3 < 0, phương trình vô nghiệm thực. Không có tổng hai nghiệm để tính.",
      },
    ],
  },
  {
    id: "tv10-6",
    num: 6,
    chapter: 4,
    title: "Hình trụ và hình nón",
    summary: "Diện tích xung quanh trụ dùng chiều cao. Nón dùng đường sinh. Đọc kỹ một đáy hay hai đáy.",
    body: String.raw`
      <p>Nửa đầu câu IV là hình thực tế. Công thức ít, nhưng dễ nhầm chữ.</p>
      <div class="memory">
        <p>Trụ: \(S_{xq} = 2\pi Rh\), \(V = \pi R^2 h\). Nón: \(S_{xq} = \pi r l\), \(V = \dfrac{1}{3}\pi r^2 h\), và \(l^2 = r^2 + h^2\). Diện tích xung quanh nón không dùng \(h\). Thể tích nón không dùng \(l\).</p>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> Trụ \(R = 10\) cm, \(h = 20\) cm. \(S_{xq} = 2\pi \cdot 10 \cdot 20 = 400\pi\) cm². Nếu đề lấy \(\pi \approx 3{,}14\), nhân sau khi đã gọn: \(400 \cdot 3{,}14 = 1256\) cm².</p>
        <p>Mực nước hạ 5 cm. Thể tích đã dùng \(\pi R^2 \cdot 5 = 500\pi\) cm³, không phải thể tích cả thùng.</p>
        <p>Nón \(r = 3\), \(h = 4\): đường sinh \(l = 5\), không lấy 4. \(S_{xq} = 15\pi\). \(V = 12\pi\).</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Quên \(\dfrac{1}{3}\) của nón. Sơn một đáy mà cộng hai lần \(\pi R^2\). Đổi lít sang cm³ sai: 1 lít = 1000 cm³.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: String.raw`Hình trụ R = 10 cm, h = 20 cm. Diện tích xung quanh là \(k\pi\) cm². Giá trị k bằng bao nhiêu?`,
        answer: 400,
        hint: "Sxq = 2πRh.",
        explain: "2·10·20 = 400, nên Sxq = 400π cm².",
      },
      {
        type: "num",
        prompt: String.raw`Cùng hình trụ, mực nước hạ 5 cm. Thể tích nước đã dùng là \(k\pi\) cm³. Giá trị k bằng bao nhiêu?`,
        answer: 500,
        hint: "Chỉ phần trụ cao 5 cm: πR²·5.",
        explain: "π·100·5 = 500π cm³.",
      },
      {
        type: "mc",
        prompt: "Diện tích xung quanh hình nón dùng đại lượng nào?",
        choices: ["Chiều cao h", "Đường sinh l", "Đường kính đáy chia 2 rồi nhân h", "Thể tích chia 3"],
        correct: 1,
        hint: "Trải nón ra được hình quạt bán kính bằng đường sinh.",
        explain: "Sxq = πrl. Chiều cao chỉ dùng cho thể tích và cho l² = r² + h².",
      },
    ],
  },
  {
    id: "tv10-7",
    num: 7,
    chapter: 4,
    title: "Chứng minh: nhìn góc và đường tròn trước",
    summary: "Góc nội tiếp bằng nửa cung. Tứ giác nội tiếp khi hai góc đối cộng 180°. Tiếp tuyến vuông góc bán kính.",
    body: String.raw`
      <p>Nửa sau câu IV là chứng minh, khoảng 2,5 đến 3 điểm. Không cần nhớ một bài mẫu. Cần nhận ra tình huống trong 30 giây đầu.</p>
      <div class="idea">
        <p><strong>Ba tình huống lặp lại.</strong></p>
        <ul>
          <li>Hai góc cùng chắn một cung, hoặc một góc nội tiếp và một góc ở tâm: góc nội tiếp bằng nửa cung, góc ở tâm bằng cung.</li>
          <li>Muốn bốn điểm đồng viên: tìm hai góc nhìn cùng một đoạn và bằng nhau, hoặc hai góc đối cộng \(180^\circ\), hoặc góc nội tiếp chắn đường kính thì vuông.</li>
          <li>Hai tiếp tuyến từ một điểm ngoài thì bằng nhau, và bán kính tới tiếp điểm vuông góc với tiếp tuyến.</li>
        </ul>
      </div>
      <div class="example">
        <p><strong>Số đo.</strong> Góc nội tiếp chắn cung \(80^\circ\) thì bằng \(40^\circ\). Góc ở tâm chắn cùng cung bằng \(80^\circ\). Nếu góc nội tiếp bằng \(90^\circ\), cung bị chắn là nửa đường tròn, dây ấy là đường kính.</p>
        <p>Tứ giác nội tiếp có một góc \(65^\circ\) thì góc đối bằng \(115^\circ\). Cộng hai góc kề không dùng định lí này.</p>
      </div>
      <div class="memory">
        <p><strong>Cách viết ý a.</strong> Nêu giả thiết vừa dùng, kết luận một góc, rồi nói vì sao bốn điểm đồng viên. Đừng nhảy tới ý c khi ý a chưa xong. Ý a thường là 1 điểm chắc.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Góc nội tiếp chắn cung 80°. Số đo góc đó bằng bao nhiêu độ?",
        answer: 40,
        hint: "Góc nội tiếp bằng nửa cung bị chắn.",
        explain: "80 : 2 = 40.",
      },
      {
        type: "num",
        prompt: "Tứ giác nội tiếp có một góc 65°. Góc đối bằng bao nhiêu độ?",
        answer: 115,
        hint: "Hai góc đối cộng 180°.",
        explain: "180 − 65 = 115. Không cộng với góc kề.",
      },
      {
        type: "mc",
        prompt: "Góc nội tiếp chắn nửa đường tròn là:",
        choices: ["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"],
        correct: 1,
        hint: "Nửa đường tròn là 180°. Nửa của 180° là bao nhiêu?",
        explain: "Góc nội tiếp chắn cung 180° bằng 90°. Dây chắn cung ấy là đường kính.",
      },
    ],
  },
  {
    id: "tv10-8",
    num: 8,
    chapter: 5,
    title: "Tối ưu rồi kiểm tra số nguyên",
    summary: "Lập P(x), đưa về parabol hoặc AM-GM, rồi thử hai số nguyên cạnh đỉnh.",
    body: String.raw`
      <p>Câu V chỉ 0,5 điểm, nhưng là chỗ phân loại điểm 10. Đề hỏi số xe, số người, số ngày: đáp số phải là số nguyên thỏa điều kiện, không phải hoành độ đỉnh nếu đỉnh không nguyên.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Có 10 quầy, mỗi quầy lãi 40 đơn vị một ngày. Thêm một quầy thì lãi mỗi quầy giảm 2 đơn vị. Gọi \(x\) là số quầy thêm, \(x\) nguyên, \(x \geq 0\), và \(40 - 2x > 0\).</p>
        \[
          P(x) = (10 + x)(40 - 2x) = -2(x - 5)^2 + 450.
        \]
        <p>Đỉnh tại \(x = 5\), đúng số nguyên. \(P(5) = 450\). Kiểm tra hai bên: \(P(4) = 448\), \(P(6) = 448\). Thêm 5 quầy thì lãi lớn nhất.</p>
        <p>Nếu đỉnh là \(7{,}5\), phải tính cả \(x = 7\) và \(x = 8\). Không làm tròn một phía rồi dừng.</p>
      </div>
      <div class="warn">
        <p><strong>Sai lầm thường gặp.</strong> Quên điều kiện lãi mỗi quầy còn dương. Kết luận \(x = 7{,}5\) xe. Không thử hai số nguyên cạnh đỉnh.</p>
      </div>
    `,
    exercises: [
      {
        type: "num",
        prompt: "Với mô hình 10 quầy ở trên, nên thêm bao nhiêu quầy để lãi lớn nhất?",
        answer: 5,
        hint: "Đỉnh của −2(x − 5)² + 450.",
        explain: "P lớn nhất khi x = 5. P(4) và P(6) đều nhỏ hơn.",
      },
      {
        type: "num",
        prompt: "Lãi lớn nhất trong mô hình đó bằng bao nhiêu đơn vị?",
        answer: 450,
        hint: "15 quầy, mỗi quầy lãi 30.",
        explain: "(10 + 5)(40 − 10) = 15 · 30 = 450.",
      },
      {
        type: "mc",
        prompt: "Đỉnh parabol rơi vào x = 7,5 và x phải là số xe nguyên. Việc đúng là:",
        choices: [
          "Làm tròn thành 8 và dừng",
          "Làm tròn thành 7 và dừng",
          "Tính cả x = 7 và x = 8 rồi so sánh",
          "Kết luận thêm 7,5 xe",
        ],
        correct: 2,
        hint: "Hai số nguyên cách đỉnh đều 0,5 có thể cho cùng giá trị, hoặc một số lớn hơn.",
        explain: "Đỉnh không nguyên thì thử hai số nguyên kề nhau. Không nộp 7,5 xe.",
      },
    ],
  },
];

COURSES.push({
  id: "thi10",
  grade: "10",
  title: "Thi vào 10",
  level: "Hà Nội",
  subtitle: "Toán không chuyên · 120 phút · 5 câu · thang 10",
  blurb: "Ôn đúng cấu trúc đề Toán vào lớp 10 công lập của Hà Nội. Không gồm Văn hay Ngoại ngữ.",
  chapters: THI10_CHAPTERS,
  lessons: THI10_LESSONS,
});
