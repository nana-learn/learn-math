/**
 * Grade 11 Math lessons
 * Algebra and Geometry topics (Part 1 & 2)
 */

const G11_CHAPTERS = [
  { id: 1, title: "Hàm số lượng giác và phương trình lượng giác" },
  { id: 2, title: "Tổ hợp và xác suất" },
  { id: 3, title: "Dãy số. Cấp số cộng và cấp số nhân" },
  { id: 4, title: "Giới hạn" },
  { id: 5, title: "Đạo hàm" },
  { id: 6, title: "Phép dời hình và phép đồng dạng trong mặt phẳng" },
  { id: 7, title: "Đường thẳng và mặt phẳng trong không gian" },
  { id: 8, title: "Vectơ trong không gian. Quan hệ vuông góc" },

  {
    id: "g11-ch2-quiz",
    num: 99,
    chapter: 2,
    title: "Chương 2: Tổ hợp và xác suất - Trắc nghiệm",
    summary: "Luyện tập hoán vị, chỉnh hợp, tổ hợp, xác suất.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tổ hợp và xác suất.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: P4 = ?", choices: ["24", "12", "6", "4"], correct: 0, hint: "P4 = 4! = 4×3×2×1 = 24.", explain: "24." },
      { type: "mc", prompt: "Câu 2: A(5,2) =", choices: ["20", "10", "25", "5"], correct: 0, hint: "A(5,2) = 5×4 = 20.", explain: "20." },
      { type: "mc", prompt: "Câu 3: C(6,3) =", choices: ["20", "15", "10", "30"], correct: 0, hint: "C(6,3) = 6!/(3!3!) = 20.", explain: "20." },
      { type: "mc", prompt: "Câu 4: (a + b)² =", choices: ["a² + 2ab + b²", "a² + b²", "a² + ab + b²", "2a + 2b"], correct: 0, hint: "Nhị thức Newton.", explain: "a² + 2ab + b²." },
      { type: "mc", prompt: "Câu 5: Gieo 2 con súc sắc, số phần tử không gian mẫu là?", choices: ["36", "12", "6", "18"], correct: 0, hint: "6×6 = 36.", explain: "36." },
      { type: "mc", prompt: "Câu 6: Xác suất xuất hiện mặt ngửa khi gieo đồng xu là?", choices: ["1/2", "1", "0", "1/4"], correct: 0, hint: "2 mặt: sấp, ngửa.", explain: "1/2." },
      { type: "mc", prompt: "Câu 7: Từ 5 HS chọn 3 làm lớp trưởng, phó, thư ký là:", choices: ["Chỉnh hợp", "Hoán vị", "Tổ hợp", "Không xác định"], correct: 0, hint: "Thứ tự quan trọng → chỉnh hợp.", explain: "Chỉnh hợp." },
      { type: "mc", prompt: "Câu 8: Từ 10 HS chọn 3 vào đội văn nghệ là:", choices: ["Tổ hợp", "Chỉnh hợp", "Hoán vị", "Không xác định"], correct: 0, hint: "Thứ tự không quan trọng → tổ hợp.", explain: "Tổ hợp." },
    ],
  },
  {
    id: "g11-ch3-quiz",
    num: 100,
    chapter: 3,
    title: "Chương 3: Dãy số - Trắc nghiệm",
    summary: "Luyện tập dãy số, cấp số cộng, cấp số nhân.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về dãy số.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Dãy số u_n = 2n + 1 có u_3 =", choices: ["7", "5", "9", "11"], correct: 0, hint: "u_3 = 2×3 + 1 = 7.", explain: "7." },
      { type: "mc", prompt: "Câu 2: Dãy số u_n = 3^n có u_2 =", choices: ["9", "6", "3", "27"], correct: 0, hint: "u_2 = 3² = 9.", explain: "9." },
      { type: "mc", prompt: "Câu 3: Cấp số cộng u_1 = 2, d = 3 thì u_4 =", choices: ["11", "8", "14", "5"], correct: 0, hint: "u_4 = 2 + 3×3 = 11.", explain: "11." },
      { type: "mc", prompt: "Câu 4: Cấp số nhân u_1 = 2, q = 3 thì u_3 =", choices: ["18", "6", "12", "24"], correct: 0, hint: "u_3 = 2×3² = 18.", explain: "18." },
      { type: "mc", prompt: "Câu 5: Tổng 3 số hạng đầu của cấp số cộng u_1=1, d=2 là?", choices: ["9", "6", "3", "12"], correct: 0, hint: "1,3,5 → 1+3+5=9.", explain: "9." },
      { type: "mc", prompt: "Câu 6: Tổng n số hạng đầu cấp số cộng: S_n =", choices: ["n(u_1 + u_n)/2", "n·u_1·u_n", "n(u_1 - u_n)/2", "u_1 + (n-1)d"], correct: 0, hint: "Công thức tổng cấp số cộng.", explain: "n(u_1 + u_n)/2." },
      { type: "mc", prompt: "Câu 7: Dãy số u_n = 1/n là:", choices: ["Giảm", "Tăng", "Không đổi", "Biến thiên"], correct: 0, hint: "1 > 1/2 > 1/3 > ...", explain: "Giảm." },
      { type: "mc", prompt: "Câu 8: lim(1/n) khi n→∞ =", choices: ["0", "1", "∞", "không tồn tại"], correct: 0, hint: "1/n → 0 khi n→∞.", explain: "0." },
    ],
  },
  {
    id: "g11-ch4-quiz",
    num: 101,
    chapter: 4,
    title: "Chương 4: Giới hạn - Trắc nghiệm",
    summary: "Luyện tập giới hạn dãy số, hàm số.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về giới hạn.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: lim(2n + 1)/(n + 3) khi n→∞ =", choices: ["2", "1", "3", "0"], correct: 0, hint: "Chia tử mẫu cho n: (2 + 1/n)/(1 + 3/n) → 2/1 = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 2: lim(1/2^n) khi n→∞ =", choices: ["0", "1", "1/2", "∞"], correct: 0, hint: "2^n → ∞ nên 1/2^n → 0.", explain: "0." },
      { type: "mc", prompt: "Câu 3: lim(x→2) (x² - 4)/(x - 2) =", choices: ["4", "2", "0", "không tồn tại"], correct: 0, hint: "(x²-4)/(x-2) = x+2 → 4 khi x→2.", explain: "4." },
      { type: "mc", prompt: "Câu 4: lim(x→0) sin(x)/x =", choices: ["1", "0", "∞", "không tồn tại"], correct: 0, hint: "Giới hạn đặc biệt: sin(x)/x → 1.", explain: "1." },
      { type: "mc", prompt: "Câu 5: lim(x→∞) 1/x =", choices: ["0", "1", "∞", "không tồn tại"], correct: 0, hint: "1/x → 0 khi x→∞.", explain: "0." },
      { type: "mc", prompt: "Câu 6: lim(x→3) (x² - 9)/(x - 3) =", choices: ["6", "3", "0", "không tồn tại"], correct: 0, hint: "(x²-9)/(x-3) = x+3 → 6 khi x→3.", explain: "6." },
      { type: "mc", prompt: "Câu 7: lim(3^n/2^n) khi n→∞ =", choices: ["∞", "0", "1", "3/2"], correct: 0, hint: "3/2 > 1 nên (3/2)^n → ∞.", explain: "∞." },
      { type: "mc", prompt: "Câu 8: Hàm số f(x) có lim(x→x0) f(x) = L nghĩa là:", choices: ["Khi x gần x0 thì f(x) gần L", "f(x0) = L", "f(x) = L với mọi x", "Không có nghĩa"], correct: 0, hint: "Định nghĩa giới hạn hàm số.", explain: "Khi x gần x0 thì f(x) gần L." },
    ],
  },
  {
    id: "g11-ch5-quiz",
    num: 102,
    chapter: 5,
    title: "Chương 5: Đạo hàm - Trắc nghiệm",
    summary: "Luyện tập đạo hàm, quy tắc đạo hàm.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về đạo hàm.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Đạo hàm của y = x² là?", choices: ["2x", "x", "2", "x²"], correct: 0, hint: "(x²)' = 2x.", explain: "2x." },
      { type: "mc", prompt: "Câu 2: Đạo hàm của y = sin(x) là?", choices: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 0, hint: "(sin x)' = cos x.", explain: "cos(x)." },
      { type: "mc", prompt: "Câu 3: Đạo hàm của y = cos(x) là?", choices: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], correct: 0, hint: "(cos x)' = -sin x.", explain: "-sin(x)." },
      { type: "mc", prompt: "Câu 4: Đạo hàm của y = x³ + 2x là?", choices: ["3x² + 2", "3x²", "x² + 2", "3x² + 1"], correct: 0, hint: "(x³)' = 3x², (2x)' = 2.", explain: "3x² + 2." },
      { type: "mc", prompt: "Câu 5: Đạo hàm của y = 1/x là?", choices: ["-1/x²", "1/x²", "ln|x|", "x"], correct: 0, hint: "(x^{-1})' = -x^{-2} = -1/x².", explain: "-1/x²." },
      { type: "mc", prompt: "Câu 6: Đạo hàm của y = e^x là?", choices: ["e^x", "xe^{x-1}", "ln(x)", "1"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x." },
      { type: "mc", prompt: "Câu 7: Đạo hàm của y = ln(x) là?", choices: ["1/x", "ln|x|", "e^x", "x"], correct: 0, hint: "(ln x)' = 1/x.", explain: "1/x." },
      { type: "mc", prompt: "Câu 8: Đạo hàm của y = √x là?", choices: ["1/(2√x)", "2√x", "√x", "1/√x"], correct: 0, hint: "(x^{1/2})' = (1/2)x^{-1/2} = 1/(2√x).", explain: "1/(2√x)." },
    ],
  },
  {
    id: "g11-ch6-quiz",
    num: 103,
    chapter: 6,
    title: "Chương 6: Phép dời hình và phép đồng dạng - Trắc nghiệm",
    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng, phép vị tự.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phép biến hình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phép tịnh tiến theo vector v biến điểm M thành M' thì:", choices: ["Vector MM' = vector v", "Vector M'M = vector v", "MM' = |v|", "MM' vuông góc v"], correct: 0, hint: "MM' = v.", explain: "Vector MM' = vector v." },
      { type: "mc", prompt: "Câu 2: Phép quay tâm O, góc 90° biến điểm M thành M' thì:", choices: ["OM = OM' và góc MOM' = 90°", "OM = OM' và góc MOM' = 180°", "MM' vuông góc OM", "OM = 2·OM'"], correct: 0, hint: "Quay 90°: OM = OM', góc = 90°.", explain: "OM = OM' và góc MOM' = 90°." },
      { type: "mc", prompt: "Câu 3: Phép đối xứng trục d biến điểm M thành M' thì:", choices: ["d là trung trực của MM'", "d đi qua trung điểm MM'", "MM' song song d", "MM' vuông góc d tại một điểm"], correct: 0, hint: "Đối xứng trục: d là trung trực MM'.", explain: "d là trung trực của MM'." },
      { type: "mc", prompt: "Câu 4: Phép vị tự tâm O, tỉ số k biến điểm M thành M' thì:", choices: ["Vector OM' = k·vector OM", "Vector OM' = (1/k)·vector OM", "OM' = k + OM", "OM' = |k|·OM"], correct: 0, hint: "OM' = k·OM (cùng phương).", explain: "Vector OM' = k·vector OM." },
      { type: "mc", prompt: "Câu 5: Phép dời hình bảo toàn:", choices: ["Khoảng cách giữa hai điểm", "Góc giữa hai đường thẳng", "Độ dài đoạn thẳng", "Cả A và C"], correct: 0, hint: "Dời hình bảo toàn khoảng cách và độ dài.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Phép đồng dạng tỉ số k biến đoạn thẳng AB thành A'B' thì:", choices: ["A'B' = |k|·AB", "A'B' = k·AB", "A'B' = AB/k", "A'B' = AB"], correct: 0, hint: "Độ dài nhân với |k|.", explain: "A'B' = |k|·AB." },
      { type: "mc", prompt: "Câu 7: Phép quay góc âm là phép quay theo chiều:", choices: ["Ngược kim đồng hồ", "Cùng kim đồng hồ", "Ngẫu nhiên", "Không xác định"], correct: 0, hint: "Quy ước: dương = ngược kim, âm = cùng kim.", explain: "Ngược kim đồng hồ." },
      { type: "mc", prompt: "Câu 8: Hai hình bằng nhau khi:", choices: ["Có phép dời hình biến hình này thành hình kia", "Có phép đồng dạng biến hình này thành hình kia", "Có cùng diện tích", "Có cùng chu vi"], correct: 0, hint: "Bằng nhau ↔ dời hình.", explain: "Có phép dời hình biến hình này thành hình kia." },
    ],
  },
  {
    id: "g11-ch7-quiz",
    num: 104,
    chapter: 7,
    title: "Chương 7: Đường thẳng và mặt phẳng - Trắc nghiệm",
    summary: "Luyện tập vị trí tương đối trong không gian.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hai đường thẳng song song trong không gian thì:", choices: ["Không có điểm chung và cùng mặt phẳng", "Không có điểm chung", "Có điểm chung", "Cùng phương"], correct: 0, hint: "Song song: cùng mặt phẳng, không giao.", explain: "Không có điểm chung và cùng mặt phẳng." },
      { type: "mc", prompt: "Câu 2: Hai đường thẳng chéo nhau là:", choices: ["Không cùng mặt phẳng", "Cùng mặt phẳng không giao", "Có điểm chung", "Song song"], correct: 0, hint: "Chéo nhau: không cùng mặt phẳng.", explain: "Không cùng mặt phẳng." },
      { type: "mc", prompt: "Câu 3: Đường thẳng song song mặt phẳng khi:", choices: ["Không có điểm chung với mặt phẳng", "Có một điểm chung", "Có hai điểm chung", "Nằm trong mặt phẳng"], correct: 0, hint: "Song song: không giao.", explain: "Không có điểm chung với mặt phẳng." },
      { type: "mc", prompt: "Câu 4: Hai mặt phẳng song song khi:", choices: ["Không có điểm chung", "Có một điểm chung", "Có hai điểm chung", "Có một đường thẳng chung"], correct: 0, hint: "Song song: không giao.", explain: "Không có điểm chung." },
      { type: "mc", prompt: "Câu 5: Giao tuyến của hai mặt phẳng là:", choices: ["Đường thẳng chung của cả hai mặt", "Điểm chung của cả hai mặt", "Đoạn thẳng chung", "Không xác định"], correct: 0, hint: "Hai mặt phẳng cắt nhau → giao tuyến là đường thẳng.", explain: "Đường thẳng chung của cả hai mặt." },
      { type: "mc", prompt: "Câu 6: Nếu hai mặt phẳng cùng song song với đường thẳng thì:", choices: ["Chúng song song hoặc giao nhau", "Chúng song song", "Chúng trùng nhau", "Không xác định"], correct: 0, hint: "Có thể song song hoặc cắt nhau.", explain: "Chúng song song hoặc giao nhau." },
      { type: "mc", prompt: "Câu 7: Ba điểm phân biệt thẳng hàng khi:", choices: ["Thuộc cùng một đường thẳng", "Thuộc cùng một mặt phẳng", "Có cùng khoảng cách", "Tạo thành tam giác"], correct: 0, hint: "Thẳng hàng: cùng đường thẳng.", explain: "Thuộc cùng một đường thẳng." },
      { type: "mc", prompt: "Câu 8: Trong không gian, qua một điểm ngoài đường thẳng vẽ được bao nhiêu đường thẳng song song?", choices: ["Đúng một", "Vô số", "Không có", "Hai"], correct: 0, hint: "Tiên đề Euclid: đúng một.", explain: "Đúng một." },
    ],
  },
  {
    id: "g11-ch8-quiz",
    num: 105,
    chapter: 8,
    title: "Chương 8: Vector trong không gian - Trắc nghiệm",
    summary: "Luyện tập vector, tích vô hướng trong không gian.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vector không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector trong không gian có:", choices: ["Độ dài và hướng", "Chỉ độ dài", "Chỉ hướng", "Không xác định"], correct: 0, hint: "Vector: đoạn thẳng có hướng.", explain: "Độ dài và hướng." },
      { type: "mc", prompt: "Câu 2: Tích vô hướng của hai vector a và b là:", choices: ["Số thực", "Vector", "Góc", "Không xác định"], correct: 0, hint: "a·b = |a||b|cosθ ∈ ℝ.", explain: "Số thực." },
      { type: "mc", prompt: "Câu 3: Hai vector cùng phương khi:", choices: ["Có đường thẳng song song hoặc trùng nhau", "Có độ dài bằng nhau", "Có hướng giống nhau", "Cùng gốc"], correct: 0, hint: "Cùng phương: đường thẳng song song/trùng.", explain: "Có đường thẳng song song hoặc trùng nhau." },
      { type: "mc", prompt: "Câu 4: Ba vector đồng phẳng khi:", choices: ["Nằm trong một mặt phẳng hoặc song song với nó", "Có cùng độ dài", "Cùng hướng", "Cùng gốc"], correct: 0, hint: "Đồng phẳng: nằm trong một mặt phẳng.", explain: "Nằm trong một mặt phẳng hoặc song song với nó." },
      { type: "mc", prompt: "Câu 5: Trong không gian, hai vector bằng nhau khi:", choices: ["Cùng độ dài và cùng hướng", "Cùng độ dài", "Cùng hướng", "Cùng gốc"], correct: 0, hint: "Vector bằng nhau: độ dài và hướng giống nhau.", explain: "Cùng độ dài và cùng hướng." },
      { type: "mc", prompt: "Câu 6: Vector 0 là vector có:", choices: ["Độ dài bằng 0", "Độ dài bằng 1", "Hướng tùy ý", "Không xác định"], correct: 0, hint: "Vector 0: độ dài 0.", explain: "Độ dài bằng 0." },
      { type: "mc", prompt: "Câu 7: Nếu a·b = 0 thì hai vector a và b:", choices: ["Vuông góc", "Cùng phương", "Bằng nhau", "Đối nhau"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Vuông góc." },
      { type: "mc", prompt: "Câu 8: Tích vô hướng a·a =", choices: ["|a|²", "0", "1", "|a|"], correct: 0, hint: "a·a = |a||a|cos0 = |a|².", explain: "|a|²." },
    ],
  },

  {
    id: "g11-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Trigonometry",
    summary: "Đề kiểm tra 45 phút chương Trigonometry.",
    body: String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: sin(π/6) =", choices: ["1/2", "√3/2", "√2/2", "1"], correct: 0, hint: "sin 30° = 1/2.", explain: "1/2." },
      { type: "mc", prompt: "Câu 2: cos(π/3) =", choices: ["1/2", "√3/2", "√2/2", "1"], correct: 0, hint: "cos 60° = 1/2.", explain: "1/2." },
      { type: "text", prompt: "Giải phương trình sin x = 1/2.", answer: "π/6 + k2π hoặc 5π/6 + k2π", accept: ["π/6 + k2π hoặc 5π/6 + k2π", "π/6 + k2pi hoặc 5π/6 + k2pi"], hint: "sin x = 1/2 → x = π/6 hoặc 5π/6 (+ k2π).", explain: "π/6 + k2π hoặc 5π/6 + k2π." },
      { type: "mc", prompt: "Câu 4: Chu kỳ của y = sin(2x) là?", choices: ["π", "2π", "π/2", "4π"], correct: 0, hint: "Chu kỳ = 2π/2 = π.", explain: "π." },
    ],
  },
  {
    id: "g11-exam-ch2",
    num: 111,
    chapter: 8,
    title: "Chương 8: Vector trong không gian - Trắc nghiệm",
    summary: "Luyện tập vector, tích vô hướng trong không gian.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vector không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector trong không gian có:", choices: ["Độ dài và hướng", "Chỉ độ dài", "Chỉ hướng", "Không xác định"], correct: 0, hint: "Vector: đoạn thẳng có hướng.", explain: "Độ dài và hướng." },
      { type: "mc", prompt: "Câu 2: Tích vô hướng của hai vector a và b là:", choices: ["Số thực", "Vector", "Góc", "Không xác định"], correct: 0, hint: "a·b = |a||b|cosθ ∈ ℝ.", explain: "Số thực." },
      { type: "text", prompt: "Hai vector cùng phương khi:", answer: "Có đường thẳng song song hoặc trùng nhau", accept: ["Có đường thẳng song song hoặc trùng nhau", "cùng phương"], hint: "Cùng phương: đường thẳng song song/trùng.", explain: "Có đường thẳng song song hoặc trùng nhau." },
      { type: "mc", prompt: "Câu 4: Ba vector đồng phẳng khi:", choices: ["Nằm trong một mặt phẳng hoặc song song với nó", "Có cùng độ dài", "Cùng hướng", "Cùng gốc"], correct: 0, hint: "Đồng phẳng: nằm trong một mặt phẳng.", explain: "Nằm trong một mặt phẳng hoặc song song với nó." },
      { type: "mc", prompt: "Câu 5: Trong không gian, hai vector bằng nhau khi:", choices: ["Cùng độ dài và cùng hướng", "Cùng độ dài", "Cùng hướng", "Cùng gốc"], correct: 0, hint: "Vector bằng nhau: độ dài và hướng giống nhau.", explain: "Cùng độ dài và cùng hướng." },
      { type: "mc", prompt: "Câu 6: Vector 0 là vector có:", choices: ["Độ dài bằng 0", "Độ dài bằng 1", "Hướng tùy ý", "Không xác định"], correct: 0, hint: "Vector 0: độ dài 0.", explain: "Độ dài bằng 0." },
      { type: "mc", prompt: "Câu 7: Nếu a·b = 0 thì hai vector a và b:", choices: ["Vuông góc", "Cùng phương", "Bằng nhau", "Đối nhau"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Vuông góc." },
      { type: "mc", prompt: "Câu 8: Tích vô hướng a·a =", choices: ["|a|²", "0", "1", "|a|"], correct: 0, hint: "a·a = |a||a|cos0 = |a|².", explain: "|a|²." },
    ],
  },
];