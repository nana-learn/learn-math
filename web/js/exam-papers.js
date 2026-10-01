// Một đề, một bài. Câu hỏi hiện sẵn. Đáp án nằm trong <details>, đóng mặc định.
function examAnswer(html) {
  return `<details class="check"><summary>Đáp án</summary>${html}</details>`;
}

(function () {
  const course = COURSES.find((c) => c.id === "thi10");
  if (!course || course.lessons.some((l) => l.id === "tv10-hn2026")) return;

  course.chapters.push({ id: 8, label: "Đề", title: "Mỗi đề một bài" });

  course.lessons.push(
    {
      id: "tv10-hn2026",
      num: 13,
      chapter: 8,
      title: "Hà Nội 2026",
      summary: "Đề chính thức 31/5/2026. Câu hỏi ở dưới, đáp án đóng. File PDF vẫn mở được.",
      pages: ["de/ha-noi-2026-1.jpg", "de/ha-noi-2026-2.jpg"],
      files: [
        { href: "de/ha-noi-2026-de.pdf", label: "Đề PDF" },
        { href: "de/ha-noi-2026-dap-an.pdf", label: "Đáp án PDF" },
      ],
      body: String.raw`
        <p>Kỳ thi tuyển sinh vào lớp 10 THPT, Sở GDĐT Hà Nội, ngày 31/5/2026. 120 phút, thang 10. Đáp án số đã đối chiếu file đáp án của Sở. Phần chứng minh chỉ ghi ý chính; lời viết đầy đủ nằm trong file đáp án.</p>
        <div class="examq">
          <p><strong>Câu I (1,5 điểm).</strong></p>
          <p>1) Chiều cao của 50 học sinh lớp 6, đơn vị cm:</p>
          <table>
            <tr><th>Chiều cao</th><td>\([140;\ 145)\)</td><td>\([145;\ 150)\)</td><td>\([150;\ 155)\)</td><td>\([155;\ 160)\)</td><td>\([160;\ 165)\)</td></tr>
            <tr><th>Số học sinh</th><td>10</td><td>18</td><td>14</td><td>6</td><td>2</td></tr>
          </table>
          <p>Xác định tần số và tần số tương đối của nhóm \([150;\ 155)\).</p>
          ${examAnswer("<p>Tần số là 14. Tần số tương đối là \\(\\dfrac{14}{50}\\cdot 100\\% = 28\\%\\).</p>")}
          <p>2) Hộp có 6 quả bóng cùng loại, ghi 1, 2, 3, 4, 5, 6, mỗi số một quả. Lấy ngẫu nhiên một quả. Tính xác suất biến cố “số ghi trên quả bóng là số chẵn”.</p>
          ${examAnswer("<p>\\(P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu II (1,5 điểm).</strong> \\(A = \\dfrac{\\sqrt{x}-4}{\\sqrt{x}}\\), \\(B = \\dfrac{4}{\\sqrt{x}-3} + \\dfrac{x-7\\sqrt{x}-12}{x-9}\\), với \\(x > 0\\), \\(x \\neq 9\\).</p>
          <p>1) Tính \\(A\\) khi \\(x = 25\\).</p>
          <p>2) Chứng minh \\(B = \\dfrac{\\sqrt{x}}{\\sqrt{x}+3}\\).</p>
          <p>3) Tìm mọi \\(x\\) để \\(P = A \\cdot B\\) là số nguyên.</p>
          ${examAnswer("<p>1) \\(A = \\dfrac{1}{5}\\).</p><p>2) Đặt \\(t = \\sqrt{x}\\). Quy đồng mẫu \\((t-3)(t+3)\\), rút còn \\(\\dfrac{t}{t+3}\\).</p><p>3) \\(x = 16\\) hoặc \\(x = \\dfrac{1}{4}\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu III (2,5 điểm).</strong></p>
          <p>1) Ba ngày đầu may đúng kế hoạch. Bảy ngày sau, mỗi ngày may hơn kế hoạch 5 chiếc. Sau 10 ngày được 335 chiếc. Hỏi theo kế hoạch mỗi ngày may bao nhiêu chiếc?</p>
          ${examAnswer("<p>30 chiếc.</p>")}
          <p>2) Mua 25 bông hoa hồng và hoa cúc, hết 180 nghìn đồng. Hồng 8 nghìn, cúc 6 nghìn. Hỏi mỗi loại bao nhiêu bông?</p>
          ${examAnswer("<p>15 hoa hồng và 10 hoa cúc.</p>")}
          <p>3) \\(x^2 - 3x + 1 = 0\\) có hai nghiệm phân biệt \\(x_1, x_2\\). Tính \\(Q = \\dfrac{3x_2-1}{x_1} + \\dfrac{3x_1}{x_2} - x_1\\).</p>
          ${examAnswer("<p>\\(Q = 18\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu IV (4,0 điểm).</strong></p>
          <p>1) Xô hình trụ cao 25 cm, bán kính đáy 12 cm. Lấy \\(\\pi \\approx 3{,}14\\). Coi độ dày đáy không đáng kể.</p>
          <p>a) Tính diện tích xung quanh.</p>
          <p>b) Múc vào bể 150 lít. Mỗi lần chỉ múc 80% thể tích xô. Lúc đầu bể không có nước. Cần ít nhất bao nhiêu xô? Biết 1 lít = 1000 cm³.</p>
          ${examAnswer("<p>a) Khoảng 1884 cm².</p><p>b) Ít nhất 17 xô.</p>")}
          <p>2) Tam giác \\(ABC\\) vuông tại \\(A\\), \\(AB < AC\\), nội tiếp đường tròn tâm \\(O\\), đường kính \\(BC\\). \\(H\\) trên \\(AB\\), \\(HB > HA\\), \\(H\\) khác \\(A\\). Qua \\(H\\) kẻ đường vuông góc với \\(BC\\), cắt \\(BC\\) tại \\(D\\) và cắt \\(AC\\) tại \\(E\\).</p>
          <p>a) Chứng minh \\(A, H, D, C\\) cùng thuộc một đường tròn.</p>
          <p>b) \\(CH\\) cắt đường tròn tại điểm thứ hai \\(F\\). Qua \\(A\\) kẻ đường vuông góc với \\(ED\\), cắt \\(DF\\) tại \\(M\\). Chứng minh \\(AE \\cdot BC = EH \\cdot AB\\) và góc \\(EMH = 90^\\circ\\).</p>
          <p>c) \\(BM\\) cắt đường tròn tại điểm thứ hai \\(K\\). Chứng minh tam giác \\(HKM\\) cân.</p>
          ${examAnswer("<p>a) Tam giác \\(HAC\\) vuông tại \\(A\\), tam giác \\(HDC\\) vuông tại \\(D\\). Hai góc đối của tứ giác \\(AHDC\\) cộng thành \\(180^\\circ\\).</p><p>b) và c) Ý chính nằm trong file đáp án: dùng tam giác đồng dạng, rồi chứng minh \\(IH = MH\\) để tam giác \\(HKM\\) cân tại \\(H\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu V (0,5 điểm).</strong> Hoàn thành 1000 sản phẩm. Thuê kho 3 triệu đồng một ngày. Mỗi công nhân làm 5 sản phẩm một ngày và được thưởng 1 triệu đồng khi xong việc. Hỏi nên điều động bao nhiêu công nhân và thuê kho bao nhiêu ngày để tổng chi phí nhỏ nhất?</p>
          ${examAnswer("<p>25 công nhân và 8 ngày.</p>")}
        </div>
      `,
      exercises: [],
    },
    {
      id: "tv10-hn2025",
      num: 14,
      chapter: 8,
      title: "Hà Nội 2025",
      summary: "Đề chính thức 8/6/2025. Câu hỏi ở dưới, đáp án đóng.",
      pages: ["de/ha-noi-2025-1.jpg", "de/ha-noi-2025-2.jpg"],
      files: [
        { href: "de/ha-noi-2025-de.pdf", label: "Đề PDF" },
        { href: "de/ha-noi-2025-dap-an.pdf", label: "Đáp án PDF" },
      ],
      body: String.raw`
        <p>Kỳ thi tuyển sinh vào lớp 10 THPT, Sở GDĐT Hà Nội, ngày 8/6/2025. 120 phút, thang 10.</p>
        <div class="examq">
          <p><strong>Câu I (1,5 điểm).</strong></p>
          <p>1) Thời gian tự học trong một tuần của 300 học sinh lớp 9, đơn vị giờ:</p>
          <table>
            <tr><th>Giờ</th><td>\([0;\ 4)\)</td><td>\([4;\ 8)\)</td><td>\([8;\ 12)\)</td><td>\([12;\ 16)\)</td><td>\([16;\ 20)\)</td></tr>
            <tr><th>Số học sinh</th><td>17</td><td>72</td><td>94</td><td>75</td><td>42</td></tr>
          </table>
          <p>Xác định tần số và tần số tương đối của nhóm \([12;\ 16)\).</p>
          ${examAnswer("<p>Tần số là 75. Tần số tương đối là \\(\\dfrac{75}{300}\\cdot 100\\% = 25\\%\\).</p>")}
          <p>2) Hộp có 8 thẻ cùng loại, ghi 1 đến 8, mỗi số một thẻ. Rút ngẫu nhiên một thẻ. Tính xác suất biến cố “số ghi trên thẻ chia hết cho 3”.</p>
          ${examAnswer("<p>Thuận lợi là thẻ 3 và thẻ 6. \\(P(A) = \\dfrac{2}{8} = \\dfrac{1}{4}\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu II (1,5 điểm).</strong> \\(A = \\dfrac{\\sqrt{x}+2}{\\sqrt{x}-2}\\), \\(B = \\dfrac{x+\\sqrt{x}-4}{x-2\\sqrt{x}} - \\dfrac{1}{\\sqrt{x}-2}\\), với \\(x > 0\\), \\(x \\neq 4\\).</p>
          <p>1) Tính \\(A\\) khi \\(x = 9\\).</p>
          <p>2) Chứng minh \\(B = \\dfrac{\\sqrt{x}+2}{\\sqrt{x}}\\).</p>
          <p>3) Tìm số nguyên dương \\(x\\) lớn nhất để \\(\\dfrac{A}{B} < \\dfrac{1}{2}\\).</p>
          ${examAnswer("<p>1) \\(A = 5\\).</p><p>2) Đặt \\(t = \\sqrt{x}\\), rút còn \\(\\dfrac{t+2}{t}\\).</p><p>3) \\(x = 3\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu III (2,5 điểm).</strong></p>
          <p>1) Hà Nội đi Hải Phòng 60 km/h, về cùng đường 40 km/h. Chiều đi ít hơn chiều về 1 giờ. Tính độ dài quãng đường.</p>
          ${examAnswer("<p>120 km.</p>")}
          <p>2) Ba lô và máy tính có giá niêm yết tổng 885 nghìn đồng. Giảm 20% ba lô và 25% máy tính thì trả 682 nghìn đồng. Hỏi giá niêm yết mỗi món?</p>
          ${examAnswer("<p>Ba lô 365 nghìn đồng, máy tính 520 nghìn đồng.</p>")}
          <p>3) \\(x^2 + 8x - 6 = 0\\) có hai nghiệm \\(x_1, x_2\\). Tìm mọi \\(m\\) để \\(\\dfrac{70 - mx_1^2}{x_2} = x_1 + mx_2\\).</p>
          ${examAnswer("<p>\\(m = 1\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu IV (4,0 điểm).</strong></p>
          <p>1) Thùng nước hình trụ, bán kính đáy 50 cm, cao 150 cm. Lấy \\(\\pi \\approx 3{,}14\\). Coi chiều dày thùng không đáng kể.</p>
          <p>a) Tính diện tích xung quanh.</p>
          <p>b) Mực nước thấp hơn ban đầu 40 cm. Tính thể tích nước đã dùng.</p>
          ${examAnswer("<p>a) 47100 cm².</p><p>b) 314000 cm³.</p>")}
          <p>2) Tam giác \\(ABC\\) có ba góc nhọn, \\(AB < AC\\), nội tiếp đường tròn \\((O)\\). Đường cao \\(AD\\) cắt đường tròn tại điểm thứ hai \\(E\\). \\(K\\) là chân đường vuông góc kẻ từ \\(E\\) xuống \\(AB\\).</p>
          <p>a) Chứng minh \\(E, D, B, K\\) cùng thuộc một đường tròn.</p>
          <p>b) \\(AO\\) cắt \\(BC\\) tại \\(S\\). Chứng minh \\(EA\\) là tia phân giác của góc \\(CEK\\), và \\(AB \\cdot AC = AE \\cdot AS\\).</p>
          <p>c) \\(H\\) là trực tâm, \\(I\\) là trung điểm \\(AB\\). Chứng minh \\(SI\\) vuông góc với \\(HK\\).</p>
          ${examAnswer("<p>a) \\(ED\\) vuông góc \\(BC\\) và \\(EK\\) vuông góc \\(AB\\), nên hai góc nhìn đoạn \\(EB\\) đều vuông. Bốn điểm cùng thuộc đường tròn đường kính \\(EB\\).</p><p>b) và c) Lời viết đầy đủ nằm trong file đáp án.</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu V (0,5 điểm).</strong> Đội có 35 xe, mỗi xe lãi 1 triệu đồng một ngày. Thêm một xe thì lãi mỗi xe giảm 20 nghìn đồng một ngày. Hỏi nên bổ sung bao nhiêu xe để lợi nhuận trung bình mỗi ngày của đội là lớn nhất?</p>
          ${examAnswer("<p>Thêm 7 xe hoặc 8 xe. Cả hai cách cho lợi nhuận 36120 nghìn đồng một ngày.</p>")}
        </div>
      `,
      exercises: [],
    },
    {
      id: "tv10-hn2024",
      num: 15,
      chapter: 8,
      title: "Hà Nội 2024",
      summary: "Đề chính thức 9/6/2024, một trang. Câu hỏi ở dưới, đáp án đóng.",
      pages: ["de/ha-noi-2024-1.jpg"],
      files: [
        { href: "de/ha-noi-2024-de.pdf", label: "Đề PDF" },
        { href: "de/ha-noi-2024-dap-an.pdf", label: "Đáp án PDF" },
      ],
      body: String.raw`
        <p>Kỳ thi tuyển sinh vào lớp 10 THPT, Sở GDĐT Hà Nội, ngày 9/6/2024. 120 phút, thang 10. Năm này căn ở câu I, hình trụ ở câu II.</p>
        <div class="examq">
          <p><strong>Câu I (2,0 điểm).</strong> \\(A = \\dfrac{x}{\\sqrt{x}-3}\\), \\(B = \\dfrac{2x-3}{x-3\\sqrt{x}} - \\dfrac{1}{\\sqrt{x}}\\), với \\(x > 0\\), \\(x \\neq 9\\).</p>
          <p>1) Tính \\(A\\) khi \\(x = 16\\).</p>
          <p>2) Chứng minh \\(B = \\dfrac{2\\sqrt{x}-1}{\\sqrt{x}-3}\\).</p>
          <p>3) Tìm mọi \\(x\\) để \\(A - B < 0\\).</p>
          ${examAnswer("<p>1) \\(A = 16\\).</p><p>3) \\(0 < x < 9\\) và \\(x \\neq 1\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu II (2,0 điểm).</strong></p>
          <p>1) Đội dự định dùng các xe tải loại nhỏ để chở 15 tấn. Thực tế giảm 2 xe và chỉ dùng xe tải loại lớn. Mỗi xe lớn chở hơn mỗi xe nhỏ 2 tấn. Cả hai cách đều chở đủ 15 tấn. Hỏi đội dùng bao nhiêu xe tải loại lớn?</p>
          ${examAnswer("<p>3 xe tải loại lớn.</p>")}
          <p>2) Bình hình trụ bán kính đáy 4 cm, cao 25 cm. Tính diện tích xung quanh, lấy \\(\\pi \\approx 3{,}14\\).</p>
          ${examAnswer("<p>Khoảng 628 cm².</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu III (2,5 điểm).</strong></p>
          <p>1) Giải hệ \\(\\begin{cases} \\sqrt{3x+1} + 2y = 4 \\\\ 3\\sqrt{3x+1} - y = 5. \\end{cases}\\)</p>
          ${examAnswer("<p>\\((x;\\ y) = (1;\\ 1)\\).</p>")}
          <p>2) Parabol \\(y = x^2\\) và đường thẳng \\(y = (m-2)x + 5\\).</p>
          <p>a) Chứng minh đường thẳng luôn cắt parabol tại hai điểm phân biệt.</p>
          <p>b) Gọi \\(x_1, x_2\\) là hoành độ các giao điểm. Tìm mọi \\(m\\) để \\(x_1 + 5x_2 = 0\\).</p>
          ${examAnswer("<p>a) Biệt thức bằng \\((m-2)^2 + 20 > 0\\) với mọi \\(m\\).</p><p>b) \\(m = -2\\) hoặc \\(m = 6\\).</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu IV (3,0 điểm).</strong> Từ \\(A\\) ngoài đường tròn \\((O)\\) kẻ hai tiếp tuyến \\(AB\\), \\(AC\\), với \\(B\\) và \\(C\\) là tiếp điểm.</p>
          <p>1) Chứng minh tứ giác \\(ABOC\\) nội tiếp.</p>
          <p>2) Vẽ đường kính \\(BD\\). \\(E\\) là giao điểm thứ hai của \\(AD\\) với đường tròn. \\(BC\\) cắt \\(AO\\) tại \\(H\\). Chứng minh \\(AB^2 = AE \\cdot AD = AH \\cdot AO\\) và góc \\(HDO\\) bằng góc \\(HBE\\).</p>
          <p>3) \\(M\\) thuộc tia đối của tia \\(CB\\). \\(N\\) là chân đường vuông góc kẻ từ \\(M\\) xuống \\(AB\\). Chứng minh \\(BE\\) đi qua trung điểm của \\(MN\\).</p>
          ${examAnswer("<p>1) Tiếp tuyến vuông góc bán kính, nên góc tại \\(B\\) và góc tại \\(C\\) của tứ giác \\(ABOC\\) đều bằng \\(90^\\circ\\) và đối nhau.</p><p>2) và 3) Lời viết đầy đủ nằm trong file đáp án.</p>")}
        </div>
        <div class="examq">
          <p><strong>Câu V (0,5 điểm).</strong> \\(x > 0\\), \\(y > 0\\), \\(x + y + xy = 3\\). Tìm giá trị nhỏ nhất của \\(P = \\dfrac{3}{x+y} - xy\\).</p>
          ${examAnswer("<p>Giá trị nhỏ nhất là \\(\\dfrac{1}{2}\\), khi \\(x = y = 1\\).</p>")}
        </div>
      `,
      exercises: [],
    }
  );

  const older = course.lessons.find((l) => l.id === "tv10-12");
  if (older && !older.body.includes("Đáp án")) {
    older.body += String.raw`
      <div class="warn">
        <p>Đáp án dưới đây là lời giải riêng, vì đề 2021 không có file đáp án của trường. Ảnh gốc nhỏ, mẫu số ở Bài 3 đọc là \\(x - 2y\\).</p>
      </div>
      <div class="examq">
        <p><strong>Bài 1.</strong></p>
        ${examAnswer("<p>1) \\(A = 2(\\sqrt{2}+1)\\).</p><p>2) \\(P = 1 - \\sqrt{x}\\).</p><p>3) \\(x = 1\\) hoặc \\(x > 9\\).</p>")}
        <p><strong>Bài 2.</strong></p>
        ${examAnswer("<p>1) Xe máy 30 km/h, xe đạp 15 km/h.</p><p>2) Thể tích \\(32\\pi\\sqrt{2}\\) cm³.</p>")}
        <p><strong>Bài 3.</strong></p>
        ${examAnswer("<p>1) \\((x;\\ y) = (5;\\ 2)\\).</p><p>2a) Biệt thức bằng \\(4(m^2+1) > 0\\) với mọi \\(m\\).</p><p>2b) \\(m = 0\\).</p>")}
        <p><strong>Bài 5.</strong></p>
        ${examAnswer("<p>Giá trị lớn nhất là 3, giá trị nhỏ nhất là \\(-3\\).</p>")}
      </div>
    `;
  }
})();
