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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập hoán vị, chỉnh hợp, tổ hợp, xác suất.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tổ hợp và xác suất.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập dãy số, cấp số cộng, cấp số nhân.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về dãy số.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập giới hạn dãy số, hàm số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về giới hạn.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập đạo hàm, quy tắc đạo hàm.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về đạo hàm.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng, phép vị tự.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phép biến hình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vị trí tương đối trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vector, tích vô hướng trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vector không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Trigonometry.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    pages: ["page1"],
    
      { type: "mc", prompt: "Câu hỏi nâng cao 1", choices: ["A", "B", "C", "D"], correct: "C" },

      { type: "mc", prompt: "Câu hỏi nâng cao", choices: ["A", "B", "C", "D"], correct: "C" },
exercises: [
      { type: "mc", prompt: "Câu 1: sin(π/6) =", choices: ["1/2", "√3/2", "√2/2", "1"], correct: 0, hint: "sin 30° = 1/2.", explain: "1/2." },
      { type: "mc", prompt: "Câu 2: cos(π/3) =", choices: ["1/2", "√3/2", "√2/2", "1"], correct: 0, hint: "cos 60° = 1/2.", explain: "1/2." },
      { type: "text", prompt: "Giải phương trình sin x = 1/2.", answer: "π/6 + k2π hoặc 5π/6 + k2π", accept: ["π/6 + k2π hoặc 5π/6 + k2π", "π/6 + k2pi hoặc 5π/6 + k2pi"], hint: "sin x = 1/2 → x = π/6 hoặc 5π/6 (+ k2π).", explain: "π/6 + k2π hoặc 5π/6 + k2π." },
      { type: "mc", prompt: "Câu 4: Chu kỳ của y = sin(2x) là?", choices: ["π", "2π", "π/2", "4π"], correct: 0, hint: "Chu kỳ = 2π/2 = π.", explain: "π." },
    ],
  },
  {
    id: "g11-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Combinatorics, Probability",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Combinatorics, Probability.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: P4 =", choices: ["24", "12", "6", "4"], correct: 0, hint: "4! = 24.", explain: "24." },
      { type: "mc", prompt: "Câu 2: C(5,2) =", choices: ["10", "20", "5", "15"], correct: 0, hint: "C(5,2) = 10.", explain: "10." },
      { type: "text", prompt: "Từ 5 HS chọn 2 làm lớp trưởng và phó (khác nhau). Có bao nhiêu cách?", answer: "20", accept: ["20"], hint: "Chọn 2 người và sắp xếp: A(5,2) = 20.", explain: "20." },
      { type: "mc", prompt: "Câu 4: Gieo 2 con súc sắc. Xác suất tổng bằng 7 là?", choices: ["1/6", "1/9", "1/12", "1/18"], correct: 0, hint: "6 cặp: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). 6/36 = 1/6.", explain: "1/6." },
    ],
  },

  {
    id: "g11-ch3-quiz",
    num: 106,
    chapter: 3,
    title: "Chương 3: Dãy số - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập dãy số, cấp số cộng, cấp số nhân.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về dãy số.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    num: 107,
    chapter: 4,
    title: "Chương 4: Giới hạn - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập giới hạn dãy số, hàm số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về giới hạn.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: lim(2n + 1)/(n + 3) khi n→∞ =", choices: ["2", "1", "3", "0"], correct: 0, hint: "Chia tử mẫu cho n: (2 + 1/n)/(1 + 3/n) → 2/1 = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 2: lim(1/2^n) khi n→∞ =", choices: ["0", "1", "1/2", "∞"], correct: 0, hint: "2^n → ∞ nên 1/2^n → 0.", explain: "0." },
      { type: "text", prompt: "Tính lim(x→2) (x² - 4)/(x - 2).", answer: "4", accept: ["4"], hint: "(x²-4)/(x-2) = x+2 → 4 khi x→2.", explain: "4." },
      { type: "mc", prompt: "Câu 4: lim(x→0) sin(x)/x =", choices: ["1", "0", "∞", "không tồn tại"], correct: 0, hint: "Giới hạn đặc biệt: sin(x)/x → 1.", explain: "1." },
      { type: "mc", prompt: "Câu 5: lim(x→∞) 1/x =", choices: ["0", "1", "∞", "không tồn tại"], correct: 0, hint: "1/x → 0 khi x→∞.", explain: "0." },
      { type: "mc", prompt: "Câu 6: lim(x→3) (x² - 9)/(x - 3) =", choices: ["6", "3", "0", "không tồn tại"], correct: 0, hint: "(x²-9)/(x-3) = x+3 → 6 khi x→3.", explain: "6." },
      { type: "mc", prompt: "Câu 7: lim(3^n/2^n) khi n→∞ =", choices: ["∞", "0", "1", "3/2"], correct: 0, hint: "3/2 > 1 nên (3/2)^n → ∞.", explain: "∞." },
      { type: "mc", prompt: "Câu 8: Hàm số f(x) có lim(x→x0) f(x) = L nghĩa là:", choices: ["Khi x gần x0 thì f(x) gần L", "f(x0) = L", "f(x) = L với mọi x", "Không có nghĩa"], correct: 0, hint: "Định nghĩa giới hạn hàm số.", explain: "Khi x gần x0 thì f(x) gần L." },
    ],
  },

  {
    id: "g11-ch5-quiz",
    num: 108,
    chapter: 5,
    title: "Chương 5: Đạo hàm - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập đạo hàm, quy tắc đạo hàm.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về đạo hàm.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Đạo hàm của y = x² là?", choices: ["2x", "x", "2", "x²"], correct: 0, hint: "(x²)' = 2x.", explain: "2x." },
      { type: "mc", prompt: "Câu 2: Đạo hàm của y = sin(x) là?", choices: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 0, hint: "(sin x)' = cos x.", explain: "cos(x)." },
      { type: "text", prompt: "Tính đạo hàm của y = x³ + 2x².", answer: "3x² + 4x", accept: ["3x² + 4x", "3x^2 + 4x"], hint: "(x³)' = 3x², (2x²)' = 4x.", explain: "3x² + 4x." },
      { type: "mc", prompt: "Câu 4: Đạo hàm của y = cos(x) là?", choices: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], correct: 0, hint: "(cos x)' = -sin x.", explain: "-sin(x)." },
      { type: "mc", prompt: "Câu 5: Đạo hàm của y = 1/x là?", choices: ["-1/x²", "1/x²", "ln|x|", "x"], correct: 0, hint: "(x^{-1})' = -x^{-2} = -1/x².", explain: "-1/x²." },
      { type: "mc", prompt: "Câu 6: Đạo hàm của y = e^x là?", choices: ["e^x", "xe^{x-1}", "ln(x)", "1"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x." },
      { type: "mc", prompt: "Câu 7: Đạo hàm của y = ln(x) là?", choices: ["1/x", "ln|x|", "e^x", "x"], correct: 0, hint: "(ln x)' = 1/x.", explain: "1/x." },
      { type: "mc", prompt: "Câu 8: Đạo hàm của y = √x là?", choices: ["1/(2√x)", "2√x", "√x", "1/√x"], correct: 0, hint: "(x^{1/2})' = (1/2)x^{-1/2} = 1/(2√x).", explain: "1/(2√x)." },
    ],
  },

  {
    id: "g11-ch6-quiz",
    num: 109,
    chapter: 6,
    title: "Chương 6: Phép dời hình và phép đồng dạng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng, phép vị tự.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phép biến hình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phép tịnh tiến theo vector v biến điểm M thành M' thì:", choices: ["Vector MM' = vector v", "Vector M'M = vector v", "MM' = |v|", "MM' vuông góc v"], correct: 0, hint: "MM' = v.", explain: "Vector MM' = vector v." },
      { type: "mc", prompt: "Câu 2: Phép quay tâm O, góc 90° biến điểm M thành M' thì:", choices: ["OM = OM' và góc MOM' = 90°", "OM = OM' và góc MOM' = 180°", "MM' vuông góc OM", "OM = 2·OM'"], correct: 0, hint: "Quay 90°: OM = OM', góc = 90°.", explain: "OM = OM' và góc MOM' = 90°." },
      { type: "text", prompt: "Phép đối xứng trục d biến điểm M thành M'. M' thỏa mãn:", answer: "d là trung trực của MM'", accept: ["d là trung trực của MM'", "d trung trực MM'"], hint: "Đối xứng trục: d là trung trực MM'.", explain: "d là trung trực của MM'." },
      { type: "mc", prompt: "Câu 4: Phép vị tự tâm O, tỉ số k biến điểm M thành M' thì:", choices: ["Vector OM' = k·vector OM", "Vector OM' = (1/k)·vector OM", "OM' = k + OM", "OM' = |k|·OM"], correct: 0, hint: "OM' = k·OM (cùng phương).", explain: "Vector OM' = k·vector OM." },
      { type: "mc", prompt: "Câu 5: Phép dời hình bảo toàn:", choices: ["Khoảng cách giữa hai điểm", "Góc giữa hai đường thẳng", "Độ dài đoạn thẳng", "Cả A và C"], correct: 0, hint: "Dời hình bảo toàn khoảng cách và độ dài.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Phép đồng dạng tỉ số k biến đoạn thẳng AB thành A'B' thì:", choices: ["A'B' = |k|·AB", "A'B' = k·AB", "A'B' = AB/k", "A'B' = AB"], correct: 0, hint: "Độ dài nhân với |k|.", explain: "A'B' = |k|·AB." },
      { type: "mc", prompt: "Câu 7: Phép quay góc âm là phép quay theo chiều:", choices: ["Ngược kim đồng hồ", "Cùng kim đồng hồ", "Ngẫu nhiên", "Không xác định"], correct: 0, hint: "Quy ước: dương = ngược kim, âm = cùng kim.", explain: "Ngược kim đồng hồ." },
      { type: "mc", prompt: "Câu 8: Hai hình bằng nhau khi:", choices: ["Có phép dời hình biến hình này thành hình kia", "Có phép đồng dạng biến hình này thành hình kia", "Có cùng diện tích", "Có cùng chu vi"], correct: 0, hint: "Bằng nhau ↔ dời hình.", explain: "Có phép dời hình biến hình này thành hình kia." },
    ],
  },

  {
    id: "g11-ch7-quiz",
    num: 110,
    chapter: 7,
    title: "Chương 7: Đường thẳng và mặt phẳng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vị trí tương đối trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hai đường thẳng song song trong không gian thì:", choices: ["Không có điểm chung và cùng mặt phẳng", "Không có điểm chung", "Có điểm chung", "Cùng phương"], correct: 0, hint: "Song song: cùng mặt phẳng, không giao.", explain: "Không có điểm chung và cùng mặt phẳng." },
      { type: "mc", prompt: "Câu 2: Hai đường thẳng chéo nhau là:", choices: ["Không cùng mặt phẳng", "Cùng mặt phẳng không giao", "Có điểm chung", "Song song"], correct: 0, hint: "Chéo nhau: không cùng mặt phẳng.", explain: "Không cùng mặt phẳng." },
      { type: "text", prompt: "Hai mặt phẳng song song khi:", answer: "Không có điểm chung", accept: ["Không có điểm chung", "không có điểm chung"], hint: "Song song: không giao.", explain: "Không có điểm chung." },
      { type: "mc", prompt: "Câu 4: Đường thẳng song song mặt phẳng khi:", choices: ["Không có điểm chung với mặt phẳng", "Có một điểm chung", "Có hai điểm chung", "Nằm trong mặt phẳng"], correct: 0, hint: "Song song: không giao.", explain: "Không có điểm chung với mặt phẳng." },
      { type: "mc", prompt: "Câu 5: Giao tuyến của hai mặt phẳng là:", choices: ["Đường thẳng chung của cả hai mặt", "Điểm chung của cả hai mặt", "Đoạn thẳng chung", "Không xác định"], correct: 0, hint: "Hai mặt phẳng cắt nhau → giao tuyến là đường thẳng.", explain: "Đường thẳng chung của cả hai mặt." },
      { type: "mc", prompt: "Câu 6: Nếu hai mặt phẳng cùng song song với đường thẳng thì:", choices: ["Chúng song song hoặc giao nhau", "Chúng song song", "Chúng trùng nhau", "Không xác định"], correct: 0, hint: "Có thể song song hoặc cắt nhau.", explain: "Chúng song song hoặc giao nhau." },
      { type: "mc", prompt: "Câu 7: Ba điểm phân biệt thẳng hàng khi:", choices: ["Thuộc cùng một đường thẳng", "Thuộc cùng một mặt phẳng", "Có cùng khoảng cách", "Tạo thành tam giác"], correct: 0, hint: "Thẳng hàng: cùng đường thẳng.", explain: "Thuộc cùng một đường thẳng." },
      { type: "mc", prompt: "Câu 8: Trong không gian, qua một điểm ngoài đường thẳng vẽ được bao nhiêu đường thẳng song song?", choices: ["Đúng một", "Vô số", "Không có", "Hai"], correct: 0, hint: "Tiên đề Euclid: đúng một.", explain: "Đúng một." },
    ],
  },

  {
    id: "g11-ch8-quiz",
    num: 111,
    chapter: 8,
    title: "Chương 8: Vector trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vector, tích vô hướng trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vector không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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

const G11_LESSONS = [
  {
    id: "g11-b1",
    num: 1,
    chapter: 1,
    title: "Hàm số lượng giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "sin, cos, tan, cot: chu kỳ, tính chẵn lẻ, khoảng biến thiên.", spoken: "Hàm số lượng giác周期: sin, cos chu kỳ 2π; tan, cot chu kỳ π.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Ghi chú:</strong> Những điểm quan trọng cần nhớ khi học bài này.</p>

    <p><strong>Bài toán thực hành:</strong> Áp dụng kiến thức vào bài toán thực tế.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Một con lắc đơn dao động theo hàm số \(y = \sin(t)\). Khi nào con lắc ở vị trí cao nhất, thấp nhất? Sau bao lâu nó lặp lại chuyển động?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(y = \sin(t)\): khi \(t = \frac{\pi}{2}\) thì \(y = 1\) (cao nhất), khi \(t = \frac{3\pi}{2}\) thì \(y = -1\) (thấp nhất). Chu kỳ là \(2\pi\): sau mỗi \(2\pi\) giây, con lắc lặp lại trạng thái.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> sin và cos có chu kỳ \(2\pi\), tan và cot có chu kỳ \(\pi\). sin là hàm lẻ, cos là hàm chẵn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Tìm tập xác định của \(y = \tan(x)\). tan(x) không xác định khi \(\cos(x) = 0\), tức \(x = \frac{\pi}{2} + k\pi\). Vậy tập xác định là \(\mathbb{R} \setminus \{\frac{\pi}{2} + k\pi \mid k \in \mathbb{Z}\}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Hàm số \(y = \cos(2x)\) có chu kỳ \(\pi\), không phải \(2\pi\). Hệ số 2 trong cosine làm chu kỳ ngắn đi 2 lần.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> \(\sin^2(x) + \cos^2(x) = 1\) luôn đúng. Đừng viết \(\sin^2(x) = 1 - \cos(x)\) — phải là \(\cos^2(x)\).</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>

      { type: "mc", prompt: "Bài tập nâng cao 1", choices: ["A", "B", "C", "D"], correct: "C" },
      { type: "mc", prompt: "Bài tập nâng cao 2", choices: ["A", "B", "C", "D"], correct: "D" },

      { type: "mc", prompt: "Bài tập luyện tập thêm", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "Hàm số nào sau đây là hàm chẵn?", choices: ["cos(x)", "sin(x)", "tan(x)", "cot(x)"], correct: 0, hint: "cos(−x) = cos(x).", explain: "cos(x) là hàm chẵn." },
      { type: "mc", prompt: "Chu kỳ của hàm số y = sin(3x) là", choices: ["2π/3", "2π", "π/3", "π"], correct: 0, hint: "Chu kỳ = 2π / hệ số x.", explain: "2π/3." },
      { type: "text", prompt: "Tìm tập xác định của y = cot(x).", answer: "ℝ \ {kπ | k ∈ ℤ}", accept: ["ℝ \ {kπ | k ∈ ℤ}", "R \ {kπ | k ∈ Z}"], hint: "cot(x) = cos(x)/sin(x), sin(x) ≠ 0.", explain: "x ≠ kπ." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b2",
    num: 2,
    chapter: 1,
    title: "Phương trình lượng giác cơ bản",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Giải sin x = a, cos x = a, tan x = a, cot x = a.", spoken: "Giải phương trình lượng giác cơ bản: sin x = a ↔ x = arcsin a + k2π hoặc x = π - arcsin a + k2π.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Một điểm chuyển động tròn đều, góc quay thỏa mãn sin(α) = 1/2. Hỏi α có thể bằng bao nhiêu?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> sin(α) = 1/2 khi α = 30° hoặc α = 150° (trong khoảng 0° đến 180°). Vì sin tuần hoàn chu kỳ 360°, nên α = 30° + k·360° hoặc α = 150° + k·360°, với k nguyên.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> sin x = a (|a| ≤ 1) có nghiệm \(x = \arcsin(a) + k2\pi\) hoặc \(x = \pi - \arcsin(a) + k2\pi\). cos x = a có nghiệm \(x = \arccos(a) + k2\pi\) hoặc \(x = -\arccos(a) + k2\pi\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> cos(x) = −1/2. Trong [0, 2π), cos(x) = −1/2 khi x = 2π/3 hoặc x = 4π/3. Nghiệm tổng quát: \(x = \frac{2\pi}{3} + k2\pi\) hoặc \(x = \frac{4\pi}{3} + k2\pi\).</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> tan(x) = 1 có nghiệm \(x = \frac{\pi}{4} + k\pi\), không phải chỉ \(\frac{\pi}{4}\). tan tuần hoàn chu kỳ π, nên thêm kπ.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>

      { type: "mc", prompt: "Bài tập luyện tập", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "text", prompt: "Giải thích rõ ràng cách giải." },
exercises: [
      { type: "mc", prompt: "Nghiệm của phương trình sin(x) = 0 là", choices: ["x = kπ", "x = kπ/2", "x = π/2 + kπ", "x = 2kπ"], correct: 0, hint: "sin(x) = 0 khi x = 0, π, 2π,...", explain: "x = kπ." },
      { type: "mc", prompt: "Phương trình cos(x) = −1 có nghiệm", choices: ["x = π + k2π", "x = kπ", "x = 2kπ", "x = π/2 + kπ"], correct: 0, hint: "cos(x) = −1 khi x = π, 3π,...", explain: "x = π + k2π." },
      { type: "text", prompt: "Giải phương trình tan(x) = √3.", answer: "x = π/3 + kπ", accept: ["x = π/3 + kπ", "x = pi/3 + k*pi"], hint: "tan(π/3) = √3.", explain: "x = π/3 + kπ." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },

  {
    id: "g11-b3",
    num: 3,
    chapter: 2,
    title: "Hoán vị, chỉnh hợp, tổ hợp",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Hoán vị Pn, chỉnh hợp Cnk, tổ hợp Cnk: công thức và cách đếm.", spoken: "Hoán vị: Pn = n!. Chỉnh hợp: A(n,k) = n!/(n-k)!. Tổ hợp: C(n,k) = n!/[k!(n-k)!].", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Lớp 11A có 5 bạn muốn竞选班长. Có bao nhiêu cách chọn 1 lớp trưởng và 1 lớp phó nếu không ai kiêm nhiệm?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Chọn lớp trưởng: 5 cách. Sau khi chọn lớp trưởng, còn 4 bạn để chọn lớp phó. Tổng số cách: 5 × 4 = 20. Đây là chỉnh hợp: A(5,2) = 5 × 4 = 20.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Hoán vị n phần tử: Pn = n!. Chỉnh hợp chập k của n: A(n,k) = n!/(n−k)!. Tổ hợp chập k của n: C(n,k) = n!/[k!(n−k)!].</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Sắp xếp 6 người vào 6 ghế. Số cách: 6! = 720. Đây là hoán vị: P6 = 6!.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Chọn 2 người trong 8 người đi trực nhật. Số cách: C(8,2) = 8×7/2 = 28. Không kể thứ tự nên chia 2.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> A(n,k) và C(n,k) khác nhau: A tính thứ tự, C không tính. A(5,2) = 20, C(5,2) = 10. Đừng nhầm.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "Số cách xếp 4 người vào 4 ghế là", choices: ["24", "12", "6", "4"], correct: 0, hint: "P4 = 4! = 24.", explain: "24." },
      { type: "mc", prompt: "C(6,2) bằng", choices: ["15", "30", "12", "6"], correct: 0, hint: "6×5/2 = 15.", explain: "15." },
      { type: "text", prompt: "Có bao nhiêu cách chọn 1 thủ khoa và 1 thủ quân từ 7 người?", answer: "42", accept: ["42"], hint: "Chọn thủ khoa (7), rồi thủ quân (6).", explain: "7 × 6 = 42." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b4",
    num: 4,
    chapter: 2,
    title: "Nhị thức Newton",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "(a + b)^n = C(n,0)a^n + C(n,1)a^{n-1}b + ... + C(n,n)b^n.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Mở biểu thức (x + 2)^3. Hệ số của x^2 bằng bao nhiêu?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> (x + 2)^3 = C(3,0)x^3·2^0 + C(3,1)x^2·2^1 + C(3,2)x^1·2^2 + C(3,3)x^0·2^3. = 1·x^3 + 3·x^2·2 + 3·x·4 + 1·8. = x^3 + 6x^2 + 12x + 8. Hệ số của x^2 là 6.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Số hạng thứ k+1: T_{k+1} = C(n,k)a^{n−k}b^k. Tổng số các số hạng là n+1.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> (a − b)^4 = a^4 − 4a^3b + 6a^2b^2 − 4ab^3 + b^4. Dấu xen kẽ: +, −, +, −, +.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> C(5,2) = 10, không phải 5×2 = 10 nhầm tưởng. C(5,2) = 5×4/2 = 10. Công thức tổ hợp không phải nhân đơn giản.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Số hạng thứ 2 trong khai triển (x + 1)^5 là", choices: ["5x^4", "10x^4", "x^4", "15x^4"], correct: 0, hint: "T_2 = C(5,1)x^4·1 = 5x^4.", explain: "5x^4." },
      { type: "mc", prompt: "Hệ số của x^2 trong (x + 2)^3 là", choices: ["12", "6", "4", "2"], correct: 0, hint: "C(3,1)·2^1 = 3·2 = 6 cho x^2, nhưng x^2 là T_2: C(3,2)·2^2 = 3·4 = 12.", explain: "12." },
      { type: "text", prompt: "Mở (a + b)^2.", answer: "a^2 + 2ab + b^2", accept: ["a^2 + 2ab + b^2", "a² + 2ab + b²"], hint: "C(2,0)=1, C(2,1)=2, C(2,2)=1.", explain: "a^2 + 2ab + b^2." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b5",
    num: 5,
    chapter: 3,
    title: "Dãy số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Dãy số hữu hạn/vô hạn, dãy tăng, dãy giảm, dãy bị chặn.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Dãy số (u_n) với u_n = 2n + 1. Dãy này tăng hay giảm? Có bị chặn không?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> u_1 = 3, u_2 = 5, u_3 = 7, u_4 = 9. Mỗi số hạng lớn hơn số hạng trước, nên dãy tăng. u_n = 2n + 1 ≥ 3 với mọi n, nên bị chặn dưới bởi 3. Không bị chặn trên vì n có thể rất lớn.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Dãy tăng: u_{n+1} > u_n với mọi n. Dãy giảm: u_{n+1} < u_n. Bị chặn dưới: tồn tại M sao cho u_n ≥ M. Bị chặn trên: tồn tại M sao cho u_n ≤ M.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Dãy (v_n) với v_n = 1/n. v_1 = 1, v_2 = 1/2, v_3 = 1/3,... giảm dần về 0. Bị chặn dưới bởi 0, bị chặn trên bởi 1.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Dãy (-1)^n không tăng, không giảm. Các số đan nhau: −1, 1, −1, 1,... Đừng nghĩ dãy đan dấu là giảm.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Dãy (u_n) với u_n = 5 − 2n là", choices: ["Dãy giảm", "Dãy tăng", "Không tăng không giảm", "Hằng số"], correct: 0, hint: "u_{n+1} − u_n = −2 < 0.", explain: "Dãy giảm." },
      { type: "mc", prompt: "Dãy (w_n) với w_n = n^2 là", choices: ["Dãy tăng", "Dãy giảm", "Không tăng không giảm", "Hằng số"], correct: 0, hint: "w_{n+1} − w_n = 2n + 1 > 0.", explain: "Dãy tăng." },
      { type: "text", prompt: "Dãy (z_n) với z_n = 3 + 1/n. Z_n có bị chặn không?", answer: "Có", accept: ["Có", "có"], hint: "3 < z_n ≤ 4.", explain: "Bị chặn giữa 3 và 4." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b6",
    num: 6,
    chapter: 3,
    title: "Cấp số cộng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "u_{n+1} = u_n + d. Số hạng tổng quát: u_n = u_1 + (n−1)d.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Một dãy số bắt đầu từ 3 và mỗi số hạng sau lớn hơn 4 đơn vị: 3, 7, 11, 15,... Số hạng thứ 10 bằng bao nhiêu?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> u_1 = 3, d = 4. u_10 = u_1 + (10−1)d = 3 + 9·4 = 39. Kiểm tra: u_2 = 7, u_3 = 11, u_4 = 15,... cộng 4 mỗi lần đến u_10 = 39.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Số hạng tổng quát: u_n = u_1 + (n−1)d. Tổng n số hạng đầu: S_n = n(u_1 + u_n)/2 = n[2u_1 + (n−1)d]/2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Cấp số cộng với u_1 = 5, d = −2: 5, 3, 1, −1, −3,... u_6 = 5 + 5·(−2) = −5.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> S_n = n(u_1 + u_n)/2, không phải n(u_1 + u_{n−1})/2. Phải cộng u_n, số hạng cuối cùng.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Cấp số cộng u_1 = 2, d = 3. u_5 =", choices: ["14", "11", "8", "17"], correct: 0, hint: "u_5 = 2 + 4·3 = 14.", explain: "14." },
      { type: "mc", prompt: "Tổng 5 số hạng đầu của cấp số cộng 1, 3, 5, 7, 9 là", choices: ["25", "20", "30", "15"], correct: 0, hint: "S_5 = 5(1+9)/2 = 25.", explain: "25." },
      { type: "text", prompt: "Cấp số cộng có u_3 = 8, u_5 = 14. Công sai d =", answer: "3", accept: ["3"], hint: "u_5 − u_3 = 2d.", explain: "d = (14 − 8)/2 = 3." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b7",
    num: 7,
    chapter: 4,
    title: "Giới hạn của dãy số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "lim u_n = L khi u_n gần L khi n → ∞.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Dãy số u_n = 1/n. Khi n rất lớn, u_n tiến về giá trị nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> u_1 = 1, u_10 = 0.1, u_100 = 0.01, u_1000 = 0.001. Khi n tăng, u_n càng gần 0. Vậy lim(1/n) = 0.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> lim(1/n^k) = 0 với k > 0. lim(q^n) = 0 nếu |q| < 1. lim(c) = c với c hằng số.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> lim(2n + 1)/(3n − 1) = 2/3. Chia tử và mẫu cho n: (2 + 1/n)/(3 − 1/n) → 2/3.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> lim(n^2 + n) ≠ lim(n^2) + lim(n) nếu cả hai đều vô cực. Phải biến đổi (phan số, nhân liên hợp) trước.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "lim(1/n^2) =", choices: ["0", "1", "∞", "không tồn tại"], correct: 0, hint: "1/n^2 → 0 khi n → ∞.", explain: "0." },
      { type: "mc", prompt: "lim(3^n / 2^n) =", choices: ["∞", "0", "3/2", "1"], correct: 0, hint: "3/2 > 1 nên (3/2)^n → ∞.", explain: "∞." },
      { type: "text", prompt: "lim(2n + 5)/(n + 1) =", answer: "2", accept: ["2"], hint: "Chia tử và mẫu cho n: (2 + 5/n)/(1 + 1/n) → 2/1.", explain: "2." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b8",
    num: 8,
    chapter: 4,
    title: "Giới hạn của hàm số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "lim_{x→x0} f(x) = L khi x gần x0 thì f(x) gần L.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hàm số f(x) = (x^2 − 4)/(x − 2). Khi x tiến đến 2, f(x) tiến đến giá trị nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> f(x) = (x−2)(x+2)/(x−2) = x + 2 khi x ≠ 2. Khi x → 2, x + 2 → 4. Vậy lim_{x→2} f(x) = 4. Tại x = 2, hàm không xác định, nhưng giới hạn vẫn tồn tại.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> lim_{x→x0} P(x) = P(x0) với P đa thức. lim_{x→x0} (f(x)/g(x)) = L/M nếu lim f = L, lim g = M ≠ 0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> lim_{x→3} (x^2 − 9)/(x − 3) = lim(x + 3) = 6. Phân tích (x−3)(x+3)/(x−3).</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> lim_{x→0} (1/x) không tồn tại: khi x → 0^+ thì → +∞, x → 0^− thì → −∞. Hai giới hạn một bên khác nhau.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "lim_{x→2} (x^2 − 4)/(x − 2) =", choices: ["4", "2", "0", "không tồn tại"], correct: 0, hint: "(x−2)(x+2)/(x−2) = x + 2 → 4.", explain: "4." },
      { type: "mc", prompt: "lim_{x→1} (2x + 3) =", choices: ["5", "2", "3", "1"], correct: 0, hint: "Thế x = 1 vào: 2·1 + 3 = 5.", explain: "5." },
      { type: "text", prompt: "lim_{x→−1} (x^2 − 1)/(x + 1) =", answer: "-2", accept: ["-2"], hint: "(x−1)(x+1)/(x+1) = x − 1 → −2.", explain: "-2." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b9",
    num: 9,
    chapter: 5,
    title: "Đạo hàm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "f'(x0) = lim_{Δx→0} [f(x0+Δx) − f(x0)]/Δx.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hàm số f(x) = x^2. Tính đạo hàm tại x = 3.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> f'(3) = lim_{Δx→0} [(3+Δx)^2 − 3^2]/Δx = lim[9 + 6Δx + (Δx)^2 − 9]/Δx = lim[6 + Δx] = 6. Vậy f'(3) = 6.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> (x^n)' = nx^{n−1}. (sin x)' = cos x. (cos x)' = −sin x. (uv)' = u'v + uv'. (u/v)' = (u'v − uv')/v^2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> f(x) = x^3 − 2x + 1. f'(x) = 3x^2 − 2. f'(2) = 3·4 − 2 = 10.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Đạo hàm của hằng số bằng 0. Đừng quên điều này khi đạo hàm biểu thức chứa số thuần.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Đạo hàm của f(x) = x^4 là", choices: ["4x^3", "x^3", "4x^4", "4"], correct: 0, hint: "(x^n)' = nx^{n−1}.", explain: "4x^3." },
      { type: "mc", prompt: "f(x) = sin(2x). f'(x) =", choices: ["2cos(2x)", "cos(2x)", "2sin(2x)", "−2cos(2x)"], correct: 0, hint: "chuỗi: cos(2x)·2.", explain: "2cos(2x)." },
      { type: "text", prompt: "f(x) = x^2 + 3x. f'(1) =", answer: "5", accept: ["5"], hint: "f'(x) = 2x + 3, f'(1) = 5.", explain: "5." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b10",
    num: 10,
    chapter: 6,
    title: "Phép dời hình",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phép tịnh tiến, phép quay, phép đối xứng: bảo toàn khoảng cách.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Tam giác ABC có A(1,2), B(3,5), C(4,1). Phép tịnh tiến theo vector v(2,−1) biến A thành điểm nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Phép tịnh tiến T_v: M(x,y) → M'(x+2, y−1). A(1,2) → A'(1+2, 2−1) = (3,1). Tương tự B'(5,4), C'(6,0).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Phép tịnh tiến bảo toàn khoảng cách, góc, diện tích. Phép quay tâm O góc α: M(x,y) → M'(x',y') với công thức lượng giác.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Phép đối xứng trục Oy biến điểm (3,4) thành (−3,4). Hoành độ đổi dấu, tung độ giữ nguyên.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Phép quay góc âm là quay ngược chiều kim đồng hồ. Đừng nhầm chiều quay.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Phép tịnh tiến theo vector (−2,3) biến điểm (5,1) thành", choices: ["(3,4)", "(7,−2)", "(3,−2)", "(7,4)"], correct: 0, hint: "5−2=3, 1+3=4.", explain: "(3,4)." },
      { type: "mc", prompt: "Phép đối xứng tâm O(0,0) biến điểm (a,b) thành", choices: ["(−a,−b)", "(a,−b)", "(−a,b)", "(b,a)"], correct: 0, hint: "Đổi dấu cả hai tọa độ.", explain: "(−a,−b)." },
      { type: "text", prompt: "Phép quay tâm O góc 90° biến điểm (1,0) thành", answer: "(0,1)", accept: ["(0,1)", "0,1"], hint: "Quay 90° ngược chiều kim đồng hồ: (x,y) → (−y,x).", explain: "(0,1)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b11",
    num: 11,
    chapter: 6,
    title: "Phép đồng dạng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phép vị tự tỉ số k: biến đoạn thẳng thành đoạn thẳng dài |k| lần.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Tam giác ABC có diện tích 12 cm². Phép vị tự tâm O tỉ số k = 2 biến ABC thành A'B'C'. Diện tích A'B'C' bằng bao nhiêu?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Phép vị tự tỉ số k biến diện tích thành k² lần. k = 2 nên diện tích mới = 2² × 12 = 48 cm².</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Phép vị tự tỉ số k: đoạn thẳng MN → M'N' với M'N' = |k|·MN. Diện tích biến thành k² lần. Hai hình đồng dạng khi tồn tại phép vị tự biến hình này thành hình kia.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Hình vuông cạnh 3 cm. Phép vị tự tỉ số 1/3 biến thành hình vuông cạnh 1 cm. Diện tích 9 cm² → 1 cm².</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> k âm: phép vị tự với k âm là phép vị tự + đối xứng tâm. |k| vẫn là tỉ số độ dài.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Phép vị tự tâm O tỉ số k = −2 biến đoạn AB = 5 cm thành", choices: ["10 cm", "5 cm", "2.5 cm", "20 cm"], correct: 0, hint: "|k| = 2, nên 2×5 = 10 cm.", explain: "10 cm." },
      { type: "mc", prompt: "Hai hình đồng dạng thì", choices: ["Có tỉ số các cạnh tương ứng bằng nhau", "Bằng nhau", "Có diện tích bằng nhau", "Có chu vi bằng nhau"], correct: 0, hint: "Định nghĩa: tỉ số các cạnh bằng nhau.", explain: "Có tỉ số các cạnh tương ứng bằng nhau." },
      { type: "text", prompt: "Hình chữ nhật ABCD có AB = 8 cm, AD = 6 cm. Phép vị tự tâm O tỉ số k = 3/2 biến thành A'B'C'D'. Chu vi A'B'C'D' =", answer: "42", accept: ["42"], hint: "Chu vi ban đầu = 2(8+6) = 28. Nhân 3/2: 42.", explain: "42." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b12",
    num: 12,
    chapter: 7,
    title: "Đại cương về đường thẳng và mặt phẳng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Điểm thuộc đường thẳng, điểm thuộc mặt phẳng, giao tuyến của hai mặt phẳng.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hai mặt phẳng (P) và (Q) cắt nhau. Giao tuyến của chúng là gì?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Giao tuyến của hai mặt phẳng là đường thẳng chung của cả hai mặt phẳng. Nếu hai mặt phẳng cắt nhau, chúng có một giao tuyến duy nhất.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung đi qua điểm đó. Ba điểm không thẳng hàng xác định một mặt phẳng duy nhất.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Trong tứ diện ABCD, mặt phẳng (ABC) và mặt phẳng (ABD) cắt nhau theo đường thẳng AB.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Ba điểm phân biệt trên một đường thẳng không xác định một mặt phẳng duy nhất. Phải không thẳng hàng.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Hai mặt phẳng phân biệt không có điểm chung thì", choices: ["Song song với nhau", "Cắt nhau", "Trùng nhau", "Không xác định"], correct: 0, hint: "Định nghĩa mặt phẳng song song.", explain: "Song song với nhau." },
      { type: "mc", prompt: "Ba điểm A, B, C không thẳng hàng xác định", choices: ["Một mặt phẳng duy nhất", "Hai mặt phẳng", "Vô số mặt phẳng", "Không xác định mặt phẳng"], correct: 0, hint: "Tiên đề hình học không gian.", explain: "Một mặt phẳng duy nhất." },
      { type: "text", prompt: "Trong không gian, nếu hai đường thẳng không có điểm chung thì", answer: "song song hoặc chéo nhau", accept: ["song song hoặc chéo nhau", "song song hoặc chéo"], hint: "Hai trường hợp: cùng mặt phẳng hoặc khác mặt phẳng.", explain: "Song song (cùng mặt phẳng) hoặc chéo nhau (khác mặt phẳng)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b13",
    num: 13,
    chapter: 7,
    title: "Hai đường thẳng song song",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Điều kiện hai đường thẳng song song trong không gian.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Trong không gian, hai đường thẳng cùng song song với đường thẳng thứ ba thì vị trí tương đối của chúng là gì?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Nếu a ∥ b và b ∥ c thì a ∥ c. Đây là tính chất bắc cầu của quan hệ song song. Hai đường thẳng a và c cũng song song với nhau.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Hai đường thẳng song song: cùng nằm trong một mặt phẳng và không có điểm chung. Hai đường thẳng chéo nhau: không cùng mặt phẳng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Trong hộp chữ nhật ABCD.A'B'C'D', AB ∥ A'B' ∥ CD ∥ C'D'. Tất cả đều song song với nhau.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Hai đường thẳng không có điểm chung chưa chắc song song: chúng có thể chéo nhau (không cùng mặt phẳng).</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Hai đường thẳng chéo nhau thì", choices: ["Không cùng mặt phẳng", "Cùng mặt phẳng", "Cắt nhau", "Song song"], correct: 0, hint: "Định nghĩa đường thẳng chéo nhau.", explain: "Không cùng mặt phẳng." },
      { type: "mc", prompt: "Nếu a ∥ b và b cắt c thì", choices: ["a cắt c", "a ∥ c", "a chéo c", "Không xác định"], correct: 0, hint: "Nếu a ∥ b và b cắt c thì a phải cắt c (cùng mặt phẳng với b).", explain: "a cắt c." },
      { type: "text", prompt: "Trong không gian, điều kiện đủ để hai đường thẳng song song là", answer: "chúng cùng nằm trong một mặt phẳng và không có điểm chung", accept: ["chúng cùng nằm trong một mặt phẳng và không có điểm chung", "cùng mặt phẳng và không có điểm chung"], hint: "Định nghĩa song song.", explain: "Cùng mặt phẳng và không có điểm chung." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b14",
    num: 14,
    chapter: 8,
    title: "Vectơ trong không gian",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Vectơ trong không gian: cộng, trừ, nhân với số, tích vô hướng.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Ba vectơ OA, OB, OC không đồng phẳng. Vectơ OM = OA + OB − OC nằm trong không gian nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> OM là tổ hợp tuyến tính của OA, OB, OC. Vì OA, OB, OC không đồng phẳng, nên OM cũng nằm trong không gian 3 chiều do chúng tạo thành.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Ba vectơ không đồng phẳng thì mọi vectơ trong không gian đều biểu thị được dưới dạng tổ hợp tuyến tính của chúng. Tích vô hướng: a·b = |a||b|cos(a,b).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> AB = (1,2,3), AC = (4,5,6). AB + AC = (5,7,9). AB − AC = (−3,−3,−3).</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Tích vô hướng bằng 0 thì hai vectơ vuông góc. Nhưng nếu một vectơ là vectơ 0, tích vô hướng cũng bằng 0 — vectơ 0 vuông góc với mọi vectơ.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "AB = (2,−1,3), BC = (1,4,−2). AC =", choices: ["(3,3,1)", "(1,−5,5)", "(−1,5,−5)", "(3,−5,1)"], correct: 0, hint: "AB + BC = AC: (2+1, −1+4, 3+(−2)) = (3,3,1).", explain: "(3,3,1)." },
      { type: "mc", prompt: "AB · AC = 0 thì", choices: ["AB vuông góc AC", "AB song song AC", "AB = AC", "AB và AC cùng hướng"], correct: 0, hint: "Định nghĩa tích vô hướng.", explain: "AB vuông góc AC." },
      { type: "text", prompt: "k = 2, AB = (3,−4,5). k·AB =", answer: "(6,−8,10)", accept: ["(6,−8,10)", "(6, -8, 10)"], hint: "Nhân mỗi tọa độ với k.", explain: "(6, −8, 10)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b15",
    num: 15,
    chapter: 8,
    title: "Hai đường thẳng vuông góc",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Điều kiện hai đường thẳng vuông góc trong không gian.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hai đường thẳng a và b vuông góc với nhau. Nếu c song song với a thì c và b có vuông góc không?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Nếu a ∥ c và a ⊥ b thì c ⊥ b. Vì góc giữa c và b bằng góc giữa a và b (do song song), nên c cũng vuông góc với b.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Hai đường thẳng vuông góc: góc giữa chúng bằng 90°. Nếu một đường thẳng vuông góc với hai đường thẳng cắt nhau trong một mặt phẳng thì nó vuông góc với mọi đường thẳng trong mặt phẳng đó.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Trong hình lập phương ABCD.A'B'C'D', AB ⊥ AD, AB ⊥ AA'. AB vuông góc với cả AD và AA' (hai cạnh cắt nhau tại A).</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Hai đường thẳng chéo nhau có thể vuông góc. Độ dài đoạn vuông góc chung là khoảng cách giữa chúng. Đừng nghĩ vuông góc chỉ xảy ra khi cắt nhau.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Nếu a ⊥ b và b ∥ c thì", choices: ["a ⊥ c", "a ∥ c", "a và c cắt nhau", "Không xác định"], correct: 0, hint: "Nếu một đường vuông góc với một đường thẳng thì cũng vuông góc với mọi đường song song với nó.", explain: "a ⊥ c." },
      { type: "mc", prompt: "Trong không gian, hai đường thẳng cùng vuông góc với đường thẳng thứ ba thì", choices: ["Có thể song song, cắt nhau hoặc chéo nhau", "Song song với nhau", "Cắt nhau", "Chéo nhau"], correct: 0, hint: "Ví dụ: trục Oy và O z cùng vuông góc với Ox nhưng chéo nhau.", explain: "Có thể song song, cắt nhau hoặc chéo nhau." },
      { type: "text", prompt: "Hai đường thẳng chéo nhau có bao nhiêu đường vuông góc chung?", answer: "Một", accept: ["1", "một"], hint: "Đường vuông góc chung duy nhất nối hai đường chéo nhau.", explain: "Một." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },

  {
    id: "g11-b16",
    num: 16,
    chapter: 7,
    title: "Hai mặt phẳng song song",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Điều kiện hai mặt phẳng song song, tính chất của mặt phẳng song song.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hai mặt phẳng (P) và (Q) không có điểm chung. Hỏi chúng có song song với nhau không?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Nếu hai mặt phẳng phân biệt không có điểm chung thì chúng song song với nhau. Đây là định nghĩa mặt phẳng song song.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Điều kiện để (P) ∥ (Q): (P) chứa hai đường thẳng cắt nhau cùng song song với (Q). Nếu (P) ∥ (Q) và (P) cắt a thì (Q) cũng cắt a.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Trong hình hộp chữ nhật ABCD.A'B'C'D', mặt phẳng (ABCD) ∥ (A'B'C'D'). Hai mặt đáy song song với nhau.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Hai mặt phẳng cùng song song với mặt phẳng thứ ba thì song song với nhau hoặc trùng nhau. Đừng quên trường hợp trùng.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Hai mặt phẳng song song thì", choices: ["Không có điểm chung", "Có một điểm chung", "Có hai điểm chung", "Có vô số điểm chung"], correct: 0, hint: "Định nghĩa mặt phẳng song song.", explain: "Không có điểm chung." },
      { type: "mc", prompt: "Nếu (P) ∥ (Q) và đường thẳng a ⊂ (P) thì", choices: ["a ∥ (Q)", "a cắt (Q)", "a ⊂ (Q)", "Không xác định"], correct: 0, hint: "Định lí: nếu một đường thẳng nằm trong một mặt phẳng song song với mặt phẳng khác thì đường thẳng đó song song với mặt phẳng kia.", explain: "a ∥ (Q)." },
      { type: "text", prompt: "Trong hình lăng trụ tam giác ABC.A'B'C', mặt phẳng nào song song với (ABC)?", answer: "(A'B'C')", accept: ["(A'B'C')", "A'B'C'"], hint: "Hai mặt đáy song song.", explain: "(A'B'C')." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b17",
    num: 17,
    chapter: 7,
    title: "Phép chiếu song song",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phép chiếu song song bảo toàn tính thẳng hàng, tỉ lệ trên đường thẳng song song với phương chiếu.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Chiếu song song tam giác ABC lên mặt phẳng (P) theo phương l. Hình chiếu có tính chất gì?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Nếu phương chiếu l không song song với (P) thì tam giác ABC được chiếu thành tam giác A'B'C' trên (P). Các điểm A, B, C chiếu thành A', B', C'. Nếu M nằm trên AB thì M' nằm trên A'B' và A'M'/M'B' = AM/MB.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Phép chiếu song song bảo toàn: tính thẳng hàng, thứ tự, tỉ số đoạn thẳng trên đường thẳng song song phương chiếu. Hình chiếu của đoạn thẳng là đoạn thẳng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Cho đoạn thẳng AB, M là trung điểm AB. Chiếu song song theo phương l lên (P). M' là trung điểm A'B'. Phép chiếu giữ nguyên trung điểm.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Phép chiếu song song không bảo toàn độ dài, góc, vuông góc. Chỉ bảo toàn tính chất liên quan đến đường thẳng song song phương chiếu.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Phép chiếu song song bảo toàn", choices: ["Tính thẳng hàng", "Độ dài đoạn thẳng", "Góc giữa hai đường thẳng", "Tất cả các đáp án trên"], correct: 0, hint: "Định lí về phép chiếu song song.", explain: "Tính thẳng hàng." },
      { type: "mc", prompt: "Nếu M là trung điểm AB và M' là ảnh của M qua phép chiếu song song thì", choices: ["M' là trung điểm A'B'", "M' không phải trung điểm", "M' trùng A' hoặc B'", "Không xác định"], correct: 0, hint: "Phép chiếu giữ nguyên tỉ lệ.", explain: "M' là trung điểm A'B'." },
      { type: "text", prompt: "Phép chiếu song song bảo toàn tỉ số nào?", answer: "Tỉ số đoạn thẳng trên đường thẳng song song phương chiếu", accept: ["Tỉ số đoạn thẳng trên đường thẳng song song phương chiếu", "tỉ số đoạn thẳng song song phương chiếu"], hint: "Định lí.", explain: "Tỉ số đoạn thẳng trên đường thẳng song song phương chiếu." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b18",
    num: 18,
    chapter: 8,
    title: " Vectơ trong không gian (tiếp)",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Ba vectơ không đồng phẳng, biểu thị một vectơ qua ba vectơ không đồng phẳng.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Trong không gian, cho ba vectơ OA, OB, OC không đồng phẳng. Hỏi mọi vectơ OM có thể biểu thị qua OA, OB, OC không?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Nếu OA, OB, OC không đồng phẳng thì chúng lập thành một hệ cơ sở của không gian. Mỗi vectơ OM trong không gian đều biểu thị duy nhất dưới dạng OM = x·OA + y·OB + z·OC với x, y, z xác định.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Ba vectơ không đồng phẳng ⇔ không cùng nằm trong một mặt phẳng song song với nhau. Biểu thị một vectơ qua ba vectơ không đồng phẳng là duy nhất.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> OM = 2OA − 3OB + OC. Hệ số của OA là 2, OB là −3, OC là 1.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Nếu ba vectơ đồng phẳng thì không biểu thị được mọi vectơ trong không gian. Cần ba vectơ không đồng phẳng.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Ba vectơ không đồng phẳng thì", choices: ["Mỗi vectơ trong không gian biểu thị được duy nhất qua chúng", "Chỉ biểu thị được vectơ trong mặt phẳng", "Không biểu thị được vectơ nào", "Tất cả đều đồng phẳng"], correct: 0, hint: "Định nghĩa hệ cơ sở.", explain: "Mỗi vectơ biểu thị được duy nhất." },
      { type: "mc", prompt: "OM = x·OA + y·OB + z·OC. Nếu OA, OB, OC không đồng phẳng thì", choices: ["x, y, z xác định duy nhất", "x, y, z không xác định", "Có vô số bộ (x, y, z)", "x = y = z"], correct: 0, hint: "Biểu thị duy nhất.", explain: "x, y, z xác định duy nhất." },
      { type: "text", prompt: "Cho OA, OB, OC không đồng phẳng và OM = 2OA + 3OB − OC. Hệ số của OB là", answer: "3", accept: ["3"], hint: "Hệ số của OB là 3.", explain: "3." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b19",
    num: 19,
    chapter: 8,
    title: "Hai mặt phẳng vuông góc",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Điều kiện hai mặt phẳng vuông góc, diện tích hình chiếu, tính chất.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hai mặt phẳng (P) và (Q) vuông góc với nhau. Đường thẳng a nằm trong (P) có vuông góc với (Q) không?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Nếu a vuông góc với giao tuyến của (P) và (Q) thì a vuông góc với (Q). Đây là định lí: nếu một đường thẳng trong một mặt phẳng vuông góc với giao tuyến thì đường thẳng đó vuông góc với mặt phẳng kia.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> (P) ⊥ (Q) khi và chỉ khi (P) chứa một đường thẳng vuông góc với (Q). Nếu (P) ⊥ (Q) và a ⊂ (P) thì a có thể vuông góc hoặc không vuông góc với (Q).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Trong hình hộp chữ nhật, (ABCD) ⊥ (ABB'A'). AB là giao tuyến. AD ⊥ AB nên AD ⊥ (ABB'A').</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Hai mặt phẳng cùng vuông góc với mặt phẳng thứ ba thì không nhất thiết song song. Chúng có thể cắt nhau theo đường thẳng vuông góc với mặt phẳng đó.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Hai mặt phẳng vuông góc nếu", choices: ["Một mặt phẳng chứa đường thẳng vuông góc với mặt phẳng kia", "Hai mặt phẳng cắt nhau", "Hai mặt phẳng không có điểm chung", "Tất cả các đáp án trên"], correct: 0, hint: "Định nghĩa mặt phẳng vuông góc.", explain: "Một mặt phẳng chứa đường thẳng vuông góc với mặt phẳng kia." },
      { type: "mc", prompt: "Nếu (P) ⊥ (Q) và a ⊂ (P), a ⊥ giao tuyến của (P) và (Q) thì", choices: ["a ⊥ (Q)", "a ∥ (Q)", "a cắt (Q) nhưng không vuông góc", "Không xác định"], correct: 0, hint: "Định lí về đường thẳng vuông góc với mặt phẳng.", explain: "a ⊥ (Q)." },
      { type: "text", prompt: "Hình chiếu vuông góc của một tam giác lên mặt phẳng có diện tích bằng 1/2 diện tích tam giác. Góc giữa mặt phẳng tam giác và mặt phẳng chiếu là", answer: "60°", accept: ["60°"], hint: "S' = S·cos(α) → 1/2 = cos(α) → α = 60°.", explain: "60°." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b20",
    num: 20,
    chapter: 8,
    title: "Khoảng cách",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Khoảng cách từ điểm đến mặt phẳng, từ điểm đến đường thẳng, giữa hai đường thẳng chéo nhau.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Tính khoảng cách từ điểm M đến mặt phẳng (P). Làm thế nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Kẻ MH vuông góc với (P). Khoảng cách từ M đến (P) là độ dài MH. Nếu biết phương trình mặt phẳng và tọa độ điểm, dùng công thức: d(M, (P)) = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Khoảng cách từ điểm M đến đường thẳng a: kẻ MH vuông góc với a, khoảng cách là MH. Khoảng cách giữa hai đường thẳng chéo nhau: độ dài đoạn vuông góc chung.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Khoảng cách từ M(1, 2, 3) đến mặt phẳng x + 2y − 2z + 6 = 0 là |1 + 4 − 6 + 6| / √(1 + 4 + 4) = 5/3.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Khoảng cách từ điểm đến mặt phẳng luôn dương. Đừng quên giá trị tuyệt đối trong công thức.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Khoảng cách từ điểm M đến mặt phẳng (P) là", choices: ["Độ dài đoạn vuông góc từ M đến (P)", "Độ dài đoạnxiên từ M đến (P)", "Khoảng cách từ M đến một điểm bất kỳ trên (P)", "Tất cả các đáp án trên"], correct: 0, hint: "Định nghĩa khoảng cách từ điểm đến mặt phẳng.", explain: "Độ dài đoạn vuông góc từ M đến (P)." },
      { type: "mc", prompt: "Hai đường thẳng chéo nhau có", choices: ["Một đoạn vuông góc chung duy nhất", "Vô số đoạn vuông góc chung", "Không có đoạn vuông góc chung", "Hai đoạn vuông góc chung"], correct: 0, hint: "Tính chất của hai đường thẳng chéo nhau.", explain: "Một đoạn vuông góc chung duy nhất." },
      { type: "text", prompt: "Khoảng cách giữa hai mặt phẳng song song (P): x + y − z + 1 = 0 và (Q): x + y − z − 3 = 0 là", answer: "2/√3", accept: ["2/√3", "2/sqrt(3)"], hint: "Chọn điểm M trên (P), tính d(M, (Q)).", explain: "2/√3." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },

  {
    id: "g11-b21",
    num: 21,
    chapter: 1,
    title: "Phương trình lượng giác cơ bản (tiếp)",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phương trình bậc hai đối với một hàm số lượng giác, phương trình tuyến tính.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Giải phương trình 2sin²x − 3sinx + 1 = 0. Ta đặt ẩn phụ như thế nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Đặt t = sinx (điều kiện |t| ≤ 1). Phương trình trở thành 2t² − 3t + 1 = 0. Giải phương trình bậc hai: t = 1 hoặc t = 1/2. Với t = 1: sinx = 1 → x = π/2 + k2π. Với t = 1/2: sinx = 1/2 → x = π/6 + k2π hoặc x = 5π/6 + k2π.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Phương trình bậc hai đối với sinx hoặc cosx: đặt ẩn phụ t = sinx hoặc t = cosx, giải phương trình bậc hai, đối chiếu điều kiện |t| ≤ 1 rồi giải phương trình lượng giác cơ bản.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Giải 2cos²x + 3cosx − 2 = 0. Đặt t = cosx: 2t² + 3t − 2 = 0 → t = 1/2 hoặc t = −2 (loại). cosx = 1/2 → x = ±π/3 + k2π.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Khi đặt ẩn phụ, luôn nhớ điều kiện |t| ≤ 1. Nghiệm t = −2 hoặc t = 2 phải loại.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Phương trình 2sin²x − 5sinx + 2 = 0 có nghiệm là", choices: ["x = π/6 + k2π, x = 5π/6 + k2π", "x = π/3 + k2π, x = 2π/3 + k2π", "x = π/2 + k2π", "Vô nghiệm"], correct: 0, hint: "t = 1/2 hoặc t = 2 (loại).", explain: "x = π/6 + k2π, x = 5π/6 + k2π." },
      { type: "mc", prompt: "Phương trình cos²x + 2cosx − 3 = 0 có nghiệm là", choices: ["x = k2π", "x = π + k2π", "x = π/2 + k2π", "Vô nghiệm"], correct: 0, hint: "t = 1 hoặc t = −3 (loại). cosx = 1 → x = k2π.", explain: "x = k2π." },
      { type: "text", prompt: "Giải phương trình 3tan²x − 4tanx + 1 = 0.", answer: "x = π/4 + kπ, x = arctan(1/3) + kπ", accept: ["x = π/4 + kπ, x = arctan(1/3) + kπ", "x = π/4 + kπ, x = arctan(1/3)+kπ"], hint: "t = 1 hoặc t = 1/3.", explain: "x = π/4 + kπ, x = arctan(1/3) + kπ." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b22",
    num: 22,
    chapter: 1,
    title: "Phương trình lượng giác thường gặp",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phương trình đối xứng, phương trình bậc nhất đối với sinx và cosx.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Giải phương trình sinx + cosx = 1. Ta dùng công thức nào?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> Chia cả hai vế cho √2: (1/√2)sinx + (1/√2)cosx = 1/√2. Đặt sinπ/4 = cosπ/4 = 1/√2: sinx·cosπ/4 + cosx·sinπ/4 = 1/√2. Sử dụng công thức sin(a + b): sin(x + π/4) = 1/√2. Giải phương trình lượng giác cơ bản: x + π/4 = π/4 + k2π hoặc x + π/4 = 3π/4 + k2π. Vậy x = k2π hoặc x = π/2 + k2π.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Phương trình bậc nhất a·sinx + b·cosx = c: chia cả hai vế cho √(a² + b²), đặt cosφ = a/√(a² + b²), sinφ = b/√(a² + b²), dùng công thức cộng: sin(x + φ) = c/√(a² + b²). Điều kiện có nghiệm: |c| ≤ √(a² + b²).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> √3 sinx − cosx = 1. √(3 + 1) = 2. (√3/2)sinx − (1/2)cosx = 1/2. sin(x − π/6) = 1/2. x − π/6 = π/6 + k2π hoặc x − π/6 = 5π/6 + k2π. x = π/3 + k2π hoặc x = π + k2π.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Phương trình a·sinx + b·cosx = c có nghiệm khi và chỉ khi c² ≤ a² + b². Kiểm tra điều kiện trước khi giải.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Phương trình sinx + cosx = √2 có nghiệm là", choices: ["x = π/4 + k2π", "x = 3π/4 + k2π", "x = π/2 + k2π", "x = k2π"], correct: 0, hint: "Chia √2: sin(x + π/4) = 1.", explain: "x = π/4 + k2π." },
      { type: "mc", prompt: "Phương trình √3 sinx + cosx = 1 có nghiệm là", choices: ["x = −π/6 + k2π, x = 5π/6 + k2π", "x = π/6 + k2π, x = 7π/6 + k2π", "x = π/3 + k2π, x = 4π/3 + k2π", "x = 0 + k2π, x = π + k2π"], correct: 0, hint: "2sin(x + π/6) = 1.", explain: "x = −π/6 + k2π, x = 5π/6 + k2π." },
      { type: "text", prompt: "Giải phương trình sin2x + cos2x = 0.", answer: "x = 3π/8 + kπ/2", accept: ["x = 3π/8 + kπ/2"], hint: "tan2x = −1.", explain: "x = 3π/8 + kπ/2." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g11-b23",
    num: 23,
    chapter: 1,
    title: "Hàm số lượng giác (tiếp)",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tập xác định, tập giá trị, tính chẵn lẻ, tính周期 của hàm số lượng giác.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Tình huống.</strong> Hàm số y = tanx có tập xác định là gì? Hàm số y = cotx呢?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> tanx = sinx/cosx, xác định khi cosx ≠ 0 → x ≠ π/2 + kπ. cotx = cosx/sinx, xác định khi sinx ≠ 0 → x ≠ kπ. Tập giá trị của tanx và cotx là ℝ. Hàm số y = sinx, cosx là chẵn/lẻ? sin(−x) = −sinx (lẻ), cos(−x) = cosx (chẵn). tan(−x) = −tanx (lẻ), cot(−x) = −cotx (lẻ).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> y = sinx: TXĐ ℝ, TXN [−1, 1], lẻ,周期 2π. y = cosx: TXĐ ℝ, TXN [−1, 1], chẵn,周期 2π. y = tanx: TXĐ ℝ \\ {π/2 + kπ}, TXN ℝ, lẻ,周期 π. y = cotx: TXĐ ℝ \\ {kπ}, TXN ℝ, lẻ,周期 π.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = √sinx xác định khi sinx ≥ 0 → x ∈ [k2π, π + k2π]. y = 1/(1 − cosx) xác định khi cosx ≠ 1 → x ≠ k2π.</p>
      </div>
      <div class="example">
        <p><strong>Bẫy.</strong> Tanx và cotx không xác định tại vô số điểm. Đừng bỏ qua điều kiện xác định khi tìm TXĐ.</p>
      </div>
    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Hàm số y = tan2x xác định khi", choices: ["x ≠ π/4 + kπ/2", "x ≠ π/2 + kπ", "x ≠ kπ/2", "x ≠ π/4 + kπ"], correct: 0, hint: "cos2x ≠ 0 → 2x ≠ π/2 + kπ → x ≠ π/4 + kπ/2.", explain: "x ≠ π/4 + kπ/2." },
      { type: "mc", prompt: "Hàm số y = √(1 − cosx) xác định khi", choices: ["x ≠ k2π", "x = k2π", "x ≠ π + k2π", "x ∈ ℝ"], correct: 1, hint: "1 − cosx ≥ 0 luôn đúng, nhưng = 0 khi cosx = 1 → x = k2π.", explain: "x = k2π." },
      { type: "text", prompt: "Hàm số y = sin3x có周期 là", answer: "2π/3", accept: ["2π/3"], hint: "周期 = 2π/|3| = 2π/3.", explain: "2π/3." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },

  {
    id: "g11-ch2-quiz",
    num: 99,
    chapter: 2,
    title: "Chương 2: Tổ hợp và xác suất - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập hoán vị, chỉnh hợp, tổ hợp, xác suất.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tổ hợp và xác suất.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập dãy số, cấp số cộng, cấp số nhân.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về dãy số.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập giới hạn dãy số, hàm số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về giới hạn.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập đạo hàm, quy tắc đạo hàm.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về đạo hàm.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng, phép vị tự.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phép biến hình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vị trí tương đối trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vector, tích vô hướng trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vector không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Trigonometry.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Combinatorics, Probability",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Combinatorics, Probability.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    pages: ["page1"],
    exercises: [
      { type: "mc", prompt: "Câu 1: P4 =", choices: ["24", "12", "6", "4"], correct: 0, hint: "4! = 24.", explain: "24." },
      { type: "mc", prompt: "Câu 2: C(5,2) =", choices: ["10", "20", "5", "15"], correct: 0, hint: "C(5,2) = 10.", explain: "10." },
      { type: "text", prompt: "Từ 5 HS chọn 2 làm lớp trưởng và phó (khác nhau). Có bao nhiêu cách?", answer: "20", accept: ["20"], hint: "Chọn 2 người và sắp xếp: A(5,2) = 20.", explain: "20." },
      { type: "mc", prompt: "Câu 4: Gieo 2 con súc sắc. Xác suất tổng bằng 7 là?", choices: ["1/6", "1/9", "1/12", "1/18"], correct: 0, hint: "6 cặp: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). 6/36 = 1/6.", explain: "1/6." },
    ],
  },

  {
    id: "g11-ch3-quiz",
    num: 106,
    chapter: 3,
    title: "Chương 3: Dãy số - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập dãy số, cấp số cộng, cấp số nhân.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về dãy số.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    num: 107,
    chapter: 4,
    title: "Chương 4: Giới hạn - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập giới hạn dãy số, hàm số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về giới hạn.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: lim(2n + 1)/(n + 3) khi n→∞ =", choices: ["2", "1", "3", "0"], correct: 0, hint: "Chia tử mẫu cho n: (2 + 1/n)/(1 + 3/n) → 2/1 = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 2: lim(1/2^n) khi n→∞ =", choices: ["0", "1", "1/2", "∞"], correct: 0, hint: "2^n → ∞ nên 1/2^n → 0.", explain: "0." },
      { type: "text", prompt: "Tính lim(x→2) (x² - 4)/(x - 2).", answer: "4", accept: ["4"], hint: "(x²-4)/(x-2) = x+2 → 4 khi x→2.", explain: "4." },
      { type: "mc", prompt: "Câu 4: lim(x→0) sin(x)/x =", choices: ["1", "0", "∞", "không tồn tại"], correct: 0, hint: "Giới hạn đặc biệt: sin(x)/x → 1.", explain: "1." },
      { type: "mc", prompt: "Câu 5: lim(x→∞) 1/x =", choices: ["0", "1", "∞", "không tồn tại"], correct: 0, hint: "1/x → 0 khi x→∞.", explain: "0." },
      { type: "mc", prompt: "Câu 6: lim(x→3) (x² - 9)/(x - 3) =", choices: ["6", "3", "0", "không tồn tại"], correct: 0, hint: "(x²-9)/(x-3) = x+3 → 6 khi x→3.", explain: "6." },
      { type: "mc", prompt: "Câu 7: lim(3^n/2^n) khi n→∞ =", choices: ["∞", "0", "1", "3/2"], correct: 0, hint: "3/2 > 1 nên (3/2)^n → ∞.", explain: "∞." },
      { type: "mc", prompt: "Câu 8: Hàm số f(x) có lim(x→x0) f(x) = L nghĩa là:", choices: ["Khi x gần x0 thì f(x) gần L", "f(x0) = L", "f(x) = L với mọi x", "Không có nghĩa"], correct: 0, hint: "Định nghĩa giới hạn hàm số.", explain: "Khi x gần x0 thì f(x) gần L." },
    ],
  },

  {
    id: "g11-ch5-quiz",
    num: 108,
    chapter: 5,
    title: "Chương 5: Đạo hàm - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập đạo hàm, quy tắc đạo hàm.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về đạo hàm.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Đạo hàm của y = x² là?", choices: ["2x", "x", "2", "x²"], correct: 0, hint: "(x²)' = 2x.", explain: "2x." },
      { type: "mc", prompt: "Câu 2: Đạo hàm của y = sin(x) là?", choices: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 0, hint: "(sin x)' = cos x.", explain: "cos(x)." },
      { type: "text", prompt: "Tính đạo hàm của y = x³ + 2x².", answer: "3x² + 4x", accept: ["3x² + 4x", "3x^2 + 4x"], hint: "(x³)' = 3x², (2x²)' = 4x.", explain: "3x² + 4x." },
      { type: "mc", prompt: "Câu 4: Đạo hàm của y = cos(x) là?", choices: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], correct: 0, hint: "(cos x)' = -sin x.", explain: "-sin(x)." },
      { type: "mc", prompt: "Câu 5: Đạo hàm của y = 1/x là?", choices: ["-1/x²", "1/x²", "ln|x|", "x"], correct: 0, hint: "(x^{-1})' = -x^{-2} = -1/x².", explain: "-1/x²." },
      { type: "mc", prompt: "Câu 6: Đạo hàm của y = e^x là?", choices: ["e^x", "xe^{x-1}", "ln(x)", "1"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x." },
      { type: "mc", prompt: "Câu 7: Đạo hàm của y = ln(x) là?", choices: ["1/x", "ln|x|", "e^x", "x"], correct: 0, hint: "(ln x)' = 1/x.", explain: "1/x." },
      { type: "mc", prompt: "Câu 8: Đạo hàm của y = √x là?", choices: ["1/(2√x)", "2√x", "√x", "1/√x"], correct: 0, hint: "(x^{1/2})' = (1/2)x^{-1/2} = 1/(2√x).", explain: "1/(2√x)." },
    ],
  },

  {
    id: "g11-ch6-quiz",
    num: 109,
    chapter: 6,
    title: "Chương 6: Phép dời hình và phép đồng dạng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng, phép vị tự.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phép biến hình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phép tịnh tiến theo vector v biến điểm M thành M' thì:", choices: ["Vector MM' = vector v", "Vector M'M = vector v", "MM' = |v|", "MM' vuông góc v"], correct: 0, hint: "MM' = v.", explain: "Vector MM' = vector v." },
      { type: "mc", prompt: "Câu 2: Phép quay tâm O, góc 90° biến điểm M thành M' thì:", choices: ["OM = OM' và góc MOM' = 90°", "OM = OM' và góc MOM' = 180°", "MM' vuông góc OM", "OM = 2·OM'"], correct: 0, hint: "Quay 90°: OM = OM', góc = 90°.", explain: "OM = OM' và góc MOM' = 90°." },
      { type: "text", prompt: "Phép đối xứng trục d biến điểm M thành M'. M' thỏa mãn:", answer: "d là trung trực của MM'", accept: ["d là trung trực của MM'", "d trung trực MM'"], hint: "Đối xứng trục: d là trung trực MM'.", explain: "d là trung trực của MM'." },
      { type: "mc", prompt: "Câu 4: Phép vị tự tâm O, tỉ số k biến điểm M thành M' thì:", choices: ["Vector OM' = k·vector OM", "Vector OM' = (1/k)·vector OM", "OM' = k + OM", "OM' = |k|·OM"], correct: 0, hint: "OM' = k·OM (cùng phương).", explain: "Vector OM' = k·vector OM." },
      { type: "mc", prompt: "Câu 5: Phép dời hình bảo toàn:", choices: ["Khoảng cách giữa hai điểm", "Góc giữa hai đường thẳng", "Độ dài đoạn thẳng", "Cả A và C"], correct: 0, hint: "Dời hình bảo toàn khoảng cách và độ dài.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Phép đồng dạng tỉ số k biến đoạn thẳng AB thành A'B' thì:", choices: ["A'B' = |k|·AB", "A'B' = k·AB", "A'B' = AB/k", "A'B' = AB"], correct: 0, hint: "Độ dài nhân với |k|.", explain: "A'B' = |k|·AB." },
      { type: "mc", prompt: "Câu 7: Phép quay góc âm là phép quay theo chiều:", choices: ["Ngược kim đồng hồ", "Cùng kim đồng hồ", "Ngẫu nhiên", "Không xác định"], correct: 0, hint: "Quy ước: dương = ngược kim, âm = cùng kim.", explain: "Ngược kim đồng hồ." },
      { type: "mc", prompt: "Câu 8: Hai hình bằng nhau khi:", choices: ["Có phép dời hình biến hình này thành hình kia", "Có phép đồng dạng biến hình này thành hình kia", "Có cùng diện tích", "Có cùng chu vi"], correct: 0, hint: "Bằng nhau ↔ dời hình.", explain: "Có phép dời hình biến hình này thành hình kia." },
    ],
  },

  {
    id: "g11-ch7-quiz",
    num: 110,
    chapter: 7,
    title: "Chương 7: Đường thẳng và mặt phẳng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vị trí tương đối trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hai đường thẳng song song trong không gian thì:", choices: ["Không có điểm chung và cùng mặt phẳng", "Không có điểm chung", "Có điểm chung", "Cùng phương"], correct: 0, hint: "Song song: cùng mặt phẳng, không giao.", explain: "Không có điểm chung và cùng mặt phẳng." },
      { type: "mc", prompt: "Câu 2: Hai đường thẳng chéo nhau là:", choices: ["Không cùng mặt phẳng", "Cùng mặt phẳng không giao", "Có điểm chung", "Song song"], correct: 0, hint: "Chéo nhau: không cùng mặt phẳng.", explain: "Không cùng mặt phẳng." },
      { type: "text", prompt: "Hai mặt phẳng song song khi:", answer: "Không có điểm chung", accept: ["Không có điểm chung", "không có điểm chung"], hint: "Song song: không giao.", explain: "Không có điểm chung." },
      { type: "mc", prompt: "Câu 4: Đường thẳng song song mặt phẳng khi:", choices: ["Không có điểm chung với mặt phẳng", "Có một điểm chung", "Có hai điểm chung", "Nằm trong mặt phẳng"], correct: 0, hint: "Song song: không giao.", explain: "Không có điểm chung với mặt phẳng." },
      { type: "mc", prompt: "Câu 5: Giao tuyến của hai mặt phẳng là:", choices: ["Đường thẳng chung của cả hai mặt", "Điểm chung của cả hai mặt", "Đoạn thẳng chung", "Không xác định"], correct: 0, hint: "Hai mặt phẳng cắt nhau → giao tuyến là đường thẳng.", explain: "Đường thẳng chung của cả hai mặt." },
      { type: "mc", prompt: "Câu 6: Nếu hai mặt phẳng cùng song song với đường thẳng thì:", choices: ["Chúng song song hoặc giao nhau", "Chúng song song", "Chúng trùng nhau", "Không xác định"], correct: 0, hint: "Có thể song song hoặc cắt nhau.", explain: "Chúng song song hoặc giao nhau." },
      { type: "mc", prompt: "Câu 7: Ba điểm phân biệt thẳng hàng khi:", choices: ["Thuộc cùng một đường thẳng", "Thuộc cùng một mặt phẳng", "Có cùng khoảng cách", "Tạo thành tam giác"], correct: 0, hint: "Thẳng hàng: cùng đường thẳng.", explain: "Thuộc cùng một đường thẳng." },
      { type: "mc", prompt: "Câu 8: Trong không gian, qua một điểm ngoài đường thẳng vẽ được bao nhiêu đường thẳng song song?", choices: ["Đúng một", "Vô số", "Không có", "Hai"], correct: 0, hint: "Tiên đề Euclid: đúng một.", explain: "Đúng một." },
    ],
  },

  {
    id: "g11-ch8-quiz",
    num: 111,
    chapter: 8,
    title: "Chương 8: Vector trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vector, tích vô hướng trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vector không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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