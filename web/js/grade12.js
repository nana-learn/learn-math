/**
 * Grade 12 Math lessons
 * Algebra and Geometry topics (Part 1 & 2)
 */

const G12_CHAPTERS = [
  { id: 1, title: "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số" },
  { id: 2, title: "Lũy thừa, mũ, logarit" },
  { id: 3, title: "Nguyên hàm, tích phân và ứng dụng" },
  { id: 4, title: "Số phức" },
  { id: 5, title: "Phương pháp tọa độ trong không gian" },
  { id: 6, title: "Khối đa diện" },
  { id: 7, title: "Mặt nón, mặt trụ, mặt cầu" },
  { id: 8, title: "Phương pháp tọa độ trong không gian (tiếp)" },

  {
    id: "g12-ch2-quiz",
    num: 99,
    chapter: 2,
    title: "Chương 2: Hàm số lũy thừa - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập lũy thừa, mũ, logarit.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về lũy thừa và logarit.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: 2³ × 2⁴ =", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "a^m × a^n = a^{m+n} = 2⁷.", explain: "2⁷." },
      { type: "mc", prompt: "Câu 2: (3²)⁴ =", choices: ["3⁸", "3⁶", "9⁴", "6⁴"], correct: 0, hint: "(a^m)^n = a^{m·n} = 3⁸.", explain: "3⁸." },
      { type: "mc", prompt: "Câu 3: log₂(8) =", choices: ["3", "2", "4", "1/2"], correct: 0, hint: "2³ = 8 → log₂(8) = 3.", explain: "3." },
      { type: "mc", prompt: "Câu 4: log₁₀(100) =", choices: ["2", "10", "100", "1/2"], correct: 0, hint: "10² = 100 → log₁₀(100) = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 5: e^{ln(5)} =", choices: ["5", "e", "ln(5)", "1"], correct: 0, hint: "e^{ln a} = a.", explain: "5." },
      { type: "mc", prompt: "Câu 6: 4^{log₂(3)} =", choices: ["9", "3", "6", "12"], correct: 0, hint: "4 = 2² → (2²)^{log₂(3)} = 2^{2log₂(3)} = 3² = 9.", explain: "9." },
      { type: "mc", prompt: "Câu 7: Đạo hàm của y = e^x là?", choices: ["e^x", "xe^{x-1}", "ln(x)", "1"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x." },
      { type: "mc", prompt: "Câu 8: Đạo hàm của y = log₁₀(x) là?", choices: ["1/(x ln 10)", "1/x", "ln(10)/x", "x ln 10"], correct: 0, hint: "(log_a x)' = 1/(x ln a).", explain: "1/(x ln 10)." },
    ],
  },
  {
    id: "g12-ch3-quiz",
    num: 100,
    chapter: 3,
    title: "Chương 3: Nguyên hàm - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập nguyên hàm, tích phân.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về nguyên hàm và tích phân.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: ∫2x dx =", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "(x²)' = 2x.", explain: "x² + C." },
      { type: "mc", prompt: "Câu 2: ∫sin(x) dx =", choices: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "-sin(x) + C"], correct: 0, hint: "(-cos x)' = sin x.", explain: "-cos(x) + C." },
      { type: "mc", prompt: "Câu 3: ∫e^x dx =", choices: ["e^x + C", "xe^{x-1} + C", "ln|x| + C", "1 + C"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x + C." },
      { type: "mc", prompt: "Câu 4: ∫₁² 2x dx =", choices: ["3", "4", "2", "1"], correct: 0, hint: "∫2x dx = x², từ 1 đến 2: 4 - 1 = 3.", explain: "3." },
      { type: "mc", prompt: "Câu 5: ∫(x² + 2x) dx =", choices: ["x³/3 + x² + C", "x³ + x² + C", "x³/3 + 2x + C", "x² + 2 + C"], correct: 0, hint: "∫x² dx = x³/3, ∫2x dx = x².", explain: "x³/3 + x² + C." },
      { type: "mc", prompt: "Câu 6: ∫dx/x =", choices: ["ln|x| + C", "1/x + C", "ln(x) + C", "x ln x + C"], correct: 0, hint: "(ln|x|)' = 1/x.", explain: "ln|x| + C." },
      { type: "mc", prompt: "Câu 7: ∫cos(2x) dx =", choices: ["(1/2)sin(2x) + C", "sin(2x) + C", "2sin(2x) + C", "-(1/2)sin(2x) + C"], correct: 0, hint: "(1/2)sin(2x)' = cos(2x).", explain: "(1/2)sin(2x) + C." },
      { type: "mc", prompt: "Câu 8: Diện tích hình phẳng giới hạn y=x², x=0, x=1 là?", choices: ["1/3", "1", "2/3", "1/2"], correct: 0, hint: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3.", explain: "1/3." },
    ],
  },
  {
    id: "g12-ch4-quiz",
    num: 101,
    chapter: 4,
    title: "Chương 4: Số phức - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số phức, phép toán, biểu diễn.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số phức.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: i² =", choices: ["-1", "1", "i", "-i"], correct: 0, hint: "i² = -1.", explain: "-1." },
      { type: "mc", prompt: "Câu 2: (2 + 3i) + (1 - 2i) =", choices: ["3 + i", "3 + 5i", "1 + i", "3 - i"], correct: 0, hint: "(2+1) + (3i-2i) = 3 + i.", explain: "3 + i." },
      { type: "mc", prompt: "Câu 3: (3 + 2i)(3 - 2i) =", choices: ["13", "9 - 4i", "9 + 4i", "5"], correct: 0, hint: "(a+bi)(a-bi) = a² + b² = 9 + 4 = 13.", explain: "13." },
      { type: "mc", prompt: "Câu 4: |2 + 3i| =", choices: ["√13", "√5", "13", "5"], correct: 0, hint: "|a+bi| = √(a²+b²) = √(4+9) = √13.", explain: "√13." },
      { type: "mc", prompt: "Câu 5: Số phức liên hợp của 1 - 2i là?", choices: ["1 + 2i", "-1 + 2i", "1 - 2i", "-1 - 2i"], correct: 0, hint: "Đổi dấu phần ảo.", explain: "1 + 2i." },
      { type: "mc", prompt: "Câu 6: (1 + i)² =", choices: ["2i", "1 + 2i", "2", "1 - 2i"], correct: 0, hint: "1 + 2i + i² = 1 + 2i - 1 = 2i.", explain: "2i." },
      { type: "mc", prompt: "Câu 7: z = 3 - 4i có tọa độ trên mặt phẳng phức là?", choices: ["(3,-4)", "(3,4)", "(-3,4)", "(-3,-4)"], correct: 0, hint: "Trục hoành: phần thực, trục tung: phần ảo.", explain: "(3,-4)." },
      { type: "mc", prompt: "Câu 8: z·\overline{z} =", choices: ["|z|²", "0", "1", "2|z|"], correct: 0, hint: "z·\overline{z} = a² + b² = |z|².", explain: "|z|²." },
    ],
  },
  {
    id: "g12-ch5-quiz",
    num: 102,
    chapter: 5,
    title: "Chương 5: Thể tích khối đa diện - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập thể tích hộp, chóp, lăng trụ.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về thể tích.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Thể tích hộp chữ nhật a×b×c là?", choices: ["abc", "2(a+b+c)", "ab+bc+ca", "a+b+c"], correct: 0, hint: "V = chiều dài × chiều rộng × chiều cao.", explain: "abc." },
      { type: "mc", prompt: "Câu 2: Thể tích hình chóp có diện tích đáy S, chiều cao h là?", choices: ["(1/3)Sh", "Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = 1/3 × S × h.", explain: "(1/3)Sh." },
      { type: "mc", prompt: "Câu 3: Thể tích lăng trụ có diện tích đáy S, chiều cao h là?", choices: ["Sh", "(1/3)Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = S × h.", explain: "Sh." },
      { type: "mc", prompt: "Câu 4: Hình lập phương cạnh a có thể tích là?", choices: ["a³", "3a²", "6a²", "a²"], correct: 0, hint: "V = a × a × a = a³.", explain: "a³." },
      { type: "mc", prompt: "Câu 5: Thể tích khối cầu bán kính R là?", choices: ["(4/3)πR³", "4πR²", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
      { type: "mc", prompt: "Câu 6: Hình chóp đều có đáy là hình vuông cạnh a, chiều cao h. Thể tích là?", choices: ["(1/3)a²h", "(1/3)ah²", "a²h", "ah"], correct: 0, hint: "S đáy = a², V = 1/3 × a² × h.", explain: "(1/3)a²h." },
      { type: "mc", prompt: "Câu 7: Hai khối chóp có cùng diện tích đáy, chiều cao gấp đôi thì thể tích:", choices: ["Gấp đôi", "Gấp bốn", "Bằng nhau", "Giảm một nửa"], correct: 0, hint: "V tỉ lệ với h.", explain: "Gấp đôi." },
      { type: "mc", prompt: "Câu 8: Thể tích tứ diện đều cạnh a là?", choices: ["(√2/12)a³", "(√3/12)a³", "(1/3)a³", "(1/6)a³"], correct: 0, hint: "Công thức chuẩn: V = √2/12 × a³.", explain: "(√2/12)a³." },
    ],
  },
  {
    id: "g12-ch6-quiz",
    num: 103,
    chapter: 6,
    title: "Chương 6: Mặt nón - Mặt trụ - Mặt cầu - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập diện tích xung quanh, thể tích mặt tròn xoay.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về mặt tròn xoay.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Diện tích xung quanh hình nón (bán kính r, đường sinh l) là?", choices: ["πrl", "πr²l", "2πrl", "πr²"], correct: 0, hint: "S_xq = π × r × l.", explain: "πrl." },
      { type: "mc", prompt: "Câu 2: Thể tích hình nón (bán kính r, chiều cao h) là?", choices: ["(1/3)πr²h", "πr²h", "(2/3)πr²h", "2πr²h"], correct: 0, hint: "V = 1/3 × π × r² × h.", explain: "(1/3)πr²h." },
      { type: "mc", prompt: "Câu 3: Diện tích xung quanh hình trụ (bán kính r, chiều cao h) là?", choices: ["2πrh", "πrh", "2πr²h", "πr²h"], correct: 0, hint: "S_xq = 2 × π × r × h.", explain: "2πrh." },
      { type: "mc", prompt: "Câu 4: Thể tích hình trụ (bán kính r, chiều cao h) là?", choices: ["πr²h", "2πr²h", "(1/3)πr²h", "4πr²h"], correct: 0, hint: "V = π × r² × h.", explain: "πr²h." },
      { type: "mc", prompt: "Câu 5: Diện tích mặt cầu bán kính R là?", choices: ["4πR²", "2πR²", "πR²", "(4/3)πR³"], correct: 0, hint: "S = 4 × π × R².", explain: "4πR²." },
      { type: "mc", prompt: "Câu 6: Thể tích hình cầu bán kính R là?", choices: ["(4/3)πR³", "4πR³", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
      { type: "mc", prompt: "Câu 7: Hình nón có bán kính 3, đường sinh 5. Diện tích xung quanh là?", choices: ["15π", "9π", "25π", "30π"], correct: 0, hint: "S_xq = π × 3 × 5 = 15π.", explain: "15π." },
      { type: "mc", prompt: "Câu 8: Hình trụ có bán kính 2, chiều cao 3. Thể tích là?", choices: ["12π", "6π", "4π", "8π"], correct: 0, hint: "V = π × 2² × 3 = 12π.", explain: "12π." },
    ],
  },
  {
    id: "g12-ch7-quiz",
    num: 104,
    chapter: 7,
    title: "Chương 7: Phương pháp tọa độ trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vector, phương trình mặt phẳng, đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB với A(1,2,3), B(4,5,6) là?", choices: ["(3,3,3)", "(5,7,9)", "(-3,-3,-3)", "(4,5,6)"], correct: 0, hint: "AB = (4-1, 5-2, 6-3) = (3,3,3).", explain: "(3,3,3)." },
      { type: "mc", prompt: "Câu 2: Khoảng cách giữa A(0,0,0) và B(3,4,12) là?", choices: ["13", "12", "5", "10"], correct: 0, hint: "AB = √(9+16+144) = √169 = 13.", explain: "13." },
      { type: "mc", prompt: "Câu 3: Tích vô hướng AB·AC với A(0,0,0), B(1,2,3), C(4,5,6) là?", choices: ["32", "28", "24", "20"], correct: 0, hint: "AB=(1,2,3), AC=(4,5,6). AB·AC = 4+10+18 = 32.", explain: "32." },
      { type: "mc", prompt: "Câu 4: Phương trình mặt cầu tâm I(1,2,3), bán kính 5 là?", choices: ["(x-1)²+(y-2)²+(z-3)²=25", "(x+1)²+(y+2)²+(z+3)²=25", "(x-1)²+(y-2)²+(z-3)²=5", "(x-1)²+(y-2)²+(z-3)²=10"], correct: 0, hint: "(x-x₀)²+(y-y₀)²+(z-z₀)²=R².", explain: "(x-1)²+(y-2)²+(z-3)²=25." },
      { type: "mc", prompt: "Câu 5: Mặt phẳng (P): 2x - 3y + 6z - 14 = 0 có vector pháp tuyến là?", choices: ["(2,-3,6)", "(2,3,6)", "(-2,3,-6)", "(1,-3/2,3)"], correct: 0, hint: "n = (A,B,C) từ Ax+By+Cz+D=0.", explain: "(2,-3,6)." },
      { type: "mc", prompt: "Câu 6: Đường thẳng qua A(1,2,3) và có vector chỉ phương u=(4,5,6) có phương trình là?", choices: ["(x-1)/4 = (y-2)/5 = (z-3)/6", "(x+1)/4 = (y+2)/5 = (z+3)/6", "(x-4)/1 = (y-5)/2 = (z-6)/3", "4x+5y+6z=0"], correct: 0, hint: "(x-x₀)/a = (y-y₀)/b = (z-z₀)/c.", explain: "(x-1)/4 = (y-2)/5 = (z-3)/6." },
      { type: "mc", prompt: "Câu 7: Hai vector (1,2,3) và (4,5,6) vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Cùng phương", "Độ dài bằng nhau"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 8: Khoảng cách từ điểm A(1,2,3) đến mặt phẳng x + y + z - 6 = 0 là?", choices: ["0", "√3", "3", "6"], correct: 0, hint: "d = |1+2+3-6|/√(1+1+1) = 0/√3 = 0.", explain: "0." },
    ],
  },
  {
    id: "g12-ch8-quiz",
    num: 105,
    chapter: 8,
    title: "Chương 8: Ôn tập - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tổng hợp các chương.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm tổng hợp.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Đạo hàm của y = x³ - 3x² + 2 là?", choices: ["3x² - 6x", "3x² - 3x", "x⁴ - 3x³ + 2x", "3x² - 6x + 2"], correct: 0, hint: "(x³)'=3x², (3x²)'=6x.", explain: "3x² - 6x." },
      { type: "mc", prompt: "Câu 2: Nguyên hàm của y = 2x + 3 là?", choices: ["x² + 3x + C", "2x² + 3x + C", "x² + 3x", "2x² + 3"], correct: 0, hint: "∫2x dx = x², ∫3 dx = 3x.", explain: "x² + 3x + C." },
      { type: "mc", prompt: "Câu 3: Số phức z = 3 - 4i có môđun là?", choices: ["5", "4", "3", "7"], correct: 0, hint: "|z| = √(9+16) = 5.", explain: "5." },
      { type: "mc", prompt: "Câu 4: Thể tích hình chóp tứ giác đều cạnh a, chiều cao h là?", choices: ["(1/3)a²h", "(1/3)ah²", "a²h", "ah"], correct: 0, hint: "S đáy = a², V = 1/3 × a² × h.", explain: "(1/3)a²h." },
      { type: "mc", prompt: "Câu 5: Phương trình mặt cầu tâm (1,-2,3) bán kính 2 là?", choices: ["(x-1)²+(y+2)²+(z-3)²=4", "(x+1)²+(y-2)²+(z+3)²=4", "(x-1)²+(y-2)²+(z-3)²=4", "(x-1)²+(y+2)²+(z-3)²=2"], correct: 0, hint: "R² = 4.", explain: "(x-1)²+(y+2)²+(z-3)²=4." },
      { type: "mc", prompt: "Câu 6: Diện tích xung quanh hình nón bán kính 3, đường sinh 5 là?", choices: ["15π", "9π", "25π", "30π"], correct: 0, hint: "S_xq = π × 3 × 5 = 15π.", explain: "15π." },
      { type: "mc", prompt: "Câu 7: Tích phân ∫₀² (2x + 1) dx =", choices: ["4", "6", "8", "2"], correct: 0, hint: "[x² + x]₀² = 4 + 2 = 6.", explain: "6." },
      { type: "mc", prompt: "Câu 8: Phương trình tiếp tuyến của y = x² tại x = 1 là?", choices: ["y = 2x - 1", "y = x + 1", "y = 2x + 1", "y = x - 1"], correct: 0, hint: "y' = 2x = 2 tại x=1, y(1)=1. y-1=2(x-1) → y=2x-1.", explain: "y = 2x - 1." },
    ],
  },

  {
    id: "g12-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Applications of derivatives",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Applications of derivatives.",
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
      { type: "mc", prompt: "Câu 1: Hàm số y = x³ - 3x đồng biến trên khoảng nào?", choices: ["(-∞,-1) và (1,∞)", "(-1,1)", "(-∞,∞)", "không khoảng nào"], correct: 0, hint: "y' = 3x² - 3 = 3(x²-1). y'>0 khi |x|>1.", explain: "(-∞,-1) và (1,∞)." },
      { type: "mc", prompt: "Câu 2: Số cực trị của y = x⁴ - 2x² là?", choices: ["2", "1", "3", "0"], correct: 0, hint: "y' = 4x³ - 4x = 4x(x²-1). 3 nghiệm → 3 cực trị.", explain: "2." },
      { type: "text", prompt: "Tìm GTNN của y = x² + 4/x trên (0,∞).", answer: "6", accept: ["6"], hint: "y' = 2x - 4/x² = 0 → x=√2. y(√2) = 2 + 4/√2 = 6.", explain: "6." },
      { type: "mc", prompt: "Câu 4: Tiệm cận đứng của y = (2x+1)/(x-3) là?", choices: ["x=3", "x=-3", "y=2", "y=-2"], correct: 0, hint: "Mẫu = 0 → x=3.", explain: "x=3." },
    ],
  },
  {
    id: "g12-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Powers, Exponential, Logarithm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Powers, Exponential, Logarithm.",
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
      { type: "mc", prompt: "Câu 1: 2³ × 2⁴ =", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "a^m × a^n = a^{m+n} = 2⁷.", explain: "2⁷." },
      { type: "mc", prompt: "Câu 2: log₂(32) =", choices: ["5", "4", "6", "3"], correct: 0, hint: "2⁵ = 32.", explain: "5." },
      { type: "text", prompt: "Giải phương trình 3^{x+1} = 27.", answer: "2", accept: ["2"], hint: "27 = 3³ → x+1=3 → x=2.", explain: "2." },
      { type: "mc", prompt: "Câu 4: Đạo hàm của y = e^{2x} là?", choices: ["2e^{2x}", "e^{2x}", "2e^x", "e^x"], correct: 0, hint: "(e^{u})' = u'e^u.", explain: "2e^{2x}." },
    ],
  },
  {
    id: "g12-exam-ch3",
    num: 103,
    chapter: 3,
    title: "Đề kiểm tra Chương 3: Integrals",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Integrals.",
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
      { type: "mc", prompt: "Câu 1: ∫2x dx =", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "(x²)' = 2x.", explain: "x² + C." },
      { type: "mc", prompt: "Câu 2: ∫₁² x dx =", choices: ["3/2", "2", "1", "5/2"], correct: 0, hint: "[x²/2]₁² = 2 - 1/2 = 3/2.", explain: "3/2." },
      { type: "text", prompt: "Tính diện tích hình phẳng giới hạn y=x², x=0, x=1.", answer: "1/3", accept: ["1/3", "0.333"], hint: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3.", explain: "1/3." },
      { type: "mc", prompt: "Câu 4: ∫sin(2x) dx =", choices: ["-(1/2)cos(2x) + C", "(1/2)cos(2x) + C", "-cos(2x) + C", "cos(2x) + C"], correct: 0, hint: "(-1/2 cos(2x))' = sin(2x).", explain: "-(1/2)cos(2x) + C." },
    ],
  },

  {
    id: "g12-ch4-quiz",
    num: 106,
    chapter: 4,
    title: "Chương 4: Số phức - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số phức, phép toán, biểu diễn.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số phức.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: i² =", choices: ["-1", "1", "i", "-i"], correct: 0, hint: "i² = -1.", explain: "-1." },
      { type: "mc", prompt: "Câu 2: (2 + 3i) + (1 - 2i) =", choices: ["3 + i", "3 + 5i", "1 + i", "3 - i"], correct: 0, hint: "(2+1) + (3i-2i) = 3 + i.", explain: "3 + i." },
      { type: "text", prompt: "Tính (3 + 2i)(3 - 2i).", answer: "13", accept: ["13"], hint: "(a+bi)(a-bi) = a² + b² = 9 + 4 = 13.", explain: "13." },
      { type: "mc", prompt: "Câu 4: |2 + 3i| =", choices: ["√13", "√5", "13", "5"], correct: 0, hint: "|a+bi| = √(a²+b²) = √(4+9) = √13.", explain: "√13." },
      { type: "mc", prompt: "Câu 5: Số phức liên hợp của 1 - 2i là?", choices: ["1 + 2i", "-1 + 2i", "1 - 2i", "-1 - 2i"], correct: 0, hint: "Đổi dấu phần ảo.", explain: "1 + 2i." },
      { type: "mc", prompt: "Câu 6: (1 + i)² =", choices: ["2i", "1 + 2i", "2", "1 - 2i"], correct: 0, hint: "1 + 2i + i² = 1 + 2i - 1 = 2i.", explain: "2i." },
      { type: "mc", prompt: "Câu 7: z = 3 - 4i có tọa độ trên mặt phẳng phức là?", choices: ["(3,-4)", "(3,4)", "(-3,4)", "(-3,-4)"], correct: 0, hint: "Trục hoành: phần thực, trục tung: phần ảo.", explain: "(3,-4)." },
      { type: "mc", prompt: "Câu 8: z·\overline{z} =", choices: ["|z|²", "0", "1", "2|z|"], correct: 0, hint: "z·\overline{z} = a² + b² = |z|².", explain: "|z|²." },
    ],
  },

  {
    id: "g12-ch5-quiz",
    num: 107,
    chapter: 5,
    title: "Chương 5: Thể tích khối đa diện - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập thể tích hộp, chóp, lăng trụ.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về thể tích.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Thể tích hộp chữ nhật a×b×c là?", choices: ["abc", "2(a+b+c)", "ab+bc+ca", "a+b+c"], correct: 0, hint: "V = chiều dài × chiều rộng × chiều cao.", explain: "abc." },
      { type: "mc", prompt: "Câu 2: Thể tích hình chóp có diện tích đáy S, chiều cao h là?", choices: ["(1/3)Sh", "Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = 1/3 × S × h.", explain: "(1/3)Sh." },
      { type: "text", prompt: "Tính thể tích hình lập phương cạnh 3cm.", answer: "27cm³", accept: ["27cm³", "27"], hint: "V = 3³ = 27cm³.", explain: "27cm³." },
      { type: "mc", prompt: "Câu 4: Thể tích lăng trụ có diện tích đáy S, chiều cao h là?", choices: ["Sh", "(1/3)Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = S × h.", explain: "Sh." },
      { type: "mc", prompt: "Câu 5: Hình chóp đều có đáy là hình vuông cạnh a, chiều cao h. Thể tích là?", choices: ["(1/3)a²h", "(1/3)ah²", "a²h", "ah"], correct: 0, hint: "S đáy = a², V = 1/3 × a² × h.", explain: "(1/3)a²h." },
      { type: "mc", prompt: "Câu 6: Hai khối chóp có cùng diện tích đáy, chiều cao gấp đôi thì thể tích:", choices: ["Gấp đôi", "Gấp bốn", "Bằng nhau", "Giảm một nửa"], correct: 0, hint: "V tỉ lệ với h.", explain: "Gấp đôi." },
      { type: "mc", prompt: "Câu 7: Thể tích tứ diện đều cạnh a là?", choices: ["(√2/12)a³", "(√3/12)a³", "(1/3)a³", "(1/6)a³"], correct: 0, hint: "Công thức chuẩn: V = √2/12 × a³.", explain: "(√2/12)a³." },
      { type: "mc", prompt: "Câu 8: Thể tích khối cầu bán kính R là?", choices: ["(4/3)πR³", "4πR²", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
    ],
  },

  {
    id: "g12-ch6-quiz",
    num: 108,
    chapter: 6,
    title: "Chương 6: Mặt nón - Mặt trụ - Mặt cầu - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập diện tích xung quanh, thể tích mặt tròn xoay.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về mặt tròn xoay.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Diện tích xung quanh hình nón (bán kính r, đường sinh l) là?", choices: ["πrl", "πr²l", "2πrl", "πr²"], correct: 0, hint: "S_xq = π × r × l.", explain: "πrl." },
      { type: "mc", prompt: "Câu 2: Thể tích hình nón (bán kính r, chiều cao h) là?", choices: ["(1/3)πr²h", "πr²h", "(2/3)πr²h", "2πr²h"], correct: 0, hint: "V = 1/3 × π × r² × h.", explain: "(1/3)πr²h." },
      { type: "text", prompt: "Tính diện tích xung quanh hình trụ bán kính 3cm, chiều cao 5cm.", answer: "30πcm²", accept: ["30πcm²", "30π"], hint: "S_xq = 2πrh = 2π×3×5 = 30πcm².", explain: "30πcm²." },
      { type: "mc", prompt: "Câu 4: Thể tích hình trụ (bán kính r, chiều cao h) là?", choices: ["πr²h", "2πr²h", "(1/3)πr²h", "4πr²h"], correct: 0, hint: "V = π × r² × h.", explain: "πr²h." },
      { type: "mc", prompt: "Câu 5: Diện tích mặt cầu bán kính R là?", choices: ["4πR²", "2πR²", "πR²", "(4/3)πR³"], correct: 0, hint: "S = 4 × π × R².", explain: "4πR²." },
      { type: "mc", prompt: "Câu 6: Thể tích hình cầu bán kính R là?", choices: ["(4/3)πR³", "4πR³", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
      { type: "mc", prompt: "Câu 7: Hình nón có bán kính 4, đường sinh 5. Diện tích xung quanh là?", choices: ["20π", "16π", "25π", "40π"], correct: 0, hint: "S_xq = π × 4 × 5 = 20π.", explain: "20π." },
      { type: "mc", prompt: "Câu 8: Hình trụ có bán kính 2, chiều cao 3. Thể tích là?", choices: ["12π", "6π", "4π", "8π"], correct: 0, hint: "V = π × 2² × 3 = 12π.", explain: "12π." },
    ],
  },

  {
    id: "g12-ch7-quiz",
    num: 109,
    chapter: 7,
    title: "Chương 7: Phương pháp tọa độ trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vector, phương trình mặt phẳng, đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB với A(1,2,3), B(4,5,6) là?", choices: ["(3,3,3)", "(5,7,9)", "(-3,-3,-3)", "(4,5,6)"], correct: 0, hint: "AB = (4-1, 5-2, 6-3) = (3,3,3).", explain: "(3,3,3)." },
      { type: "mc", prompt: "Câu 2: Khoảng cách giữa A(0,0,0) và B(3,4,12) là?", choices: ["13", "12", "5", "10"], correct: 0, hint: "AB = √(9+16+144) = √169 = 13.", explain: "13." },
      { type: "text", prompt: "Tính tích vô hướng AB·AC với A(0,0,0), B(1,2,3), C(4,5,6).", answer: "32", accept: ["32"], hint: "AB=(1,2,3), AC=(4,5,6). AB·AC = 4+10+18 = 32.", explain: "32." },
      { type: "mc", prompt: "Câu 4: Phương trình mặt cầu tâm I(1,2,3), bán kính 5 là?", choices: ["(x-1)²+(y-2)²+(z-3)²=25", "(x+1)²+(y+2)²+(z+3)²=25", "(x-1)²+(y-2)²+(z-3)²=5", "(x-1)²+(y-2)²+(z-3)²=10"], correct: 0, hint: "(x-x₀)²+(y-y₀)²+(z-z₀)²=R².", explain: "(x-1)²+(y-2)²+(z-3)²=25." },
      { type: "mc", prompt: "Câu 5: Mặt phẳng (P): 2x - 3y + 6z - 14 = 0 có vector pháp tuyến là?", choices: ["(2,-3,6)", "(2,3,6)", "(-2,3,-6)", "(1,-3/2,3)"], correct: 0, hint: "n = (A,B,C) từ Ax+By+Cz+D=0.", explain: "(2,-3,6)." },
      { type: "mc", prompt: "Câu 6: Đường thẳng qua A(1,2,3) và có vector chỉ phương u=(4,5,6) có phương trình là?", choices: ["(x-1)/4 = (y-2)/5 = (z-3)/6", "(x+1)/4 = (y+2)/5 = (z+3)/6", "(x-4)/1 = (y-5)/2 = (z-6)/3", "4x+5y+6z=0"], correct: 0, hint: "(x-x₀)/a = (y-y₀)/b = (z-z₀)/c.", explain: "(x-1)/4 = (y-2)/5 = (z-3)/6." },
      { type: "mc", prompt: "Câu 7: Hai vector (1,2,3) và (4,5,6) vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Cùng phương", "Độ dài bằng nhau"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 8: Khoảng cách từ điểm A(1,2,3) đến mặt phẳng x + y + z - 6 = 0 là?", choices: ["0", "√3", "3", "6"], correct: 0, hint: "d = |1+2+3-6|/√(1+1+1) = 0/√3 = 0.", explain: "0." },
    ],
  },
];

const G12_LESSONS = [
  {
    id: "g12-b1",
    num: 1,
    chapter: 1,
    title: "Sự đồng biến, nghịch biến của hàm số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Dựa vào đạo hàm để xét tính đồng biến, nghịch biến của hàm số.", spoken: "Nếu đạo hàm dương thì hàm đồng biến, âm thì nghịch biến. Xét dấu đạo hàm để biết hàm tăng hay giảm.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Ghi chú:</strong> Những điểm quan trọng cần nhớ khi học bài này.</p>

    <p><strong>Bài toán thực hành:</strong> Áp dụng kiến thức vào bài toán thực tế.</p>

    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Một vật chuyển động theo quy luật s(t) = t² - 4t + 3.</p>
      <div class="figure">
        <svg viewBox="0 0 400 200" style="width:100%;max-width:400px;">
          <line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="2"/>
          <line x1="200" y1="20" x2="200" y2="180" stroke="#333" stroke-width="2"/>
          <text x="370" y="175" font-size="12">x</text>
          <text x="205" y="25" font-size="12">y</text>
          <path d="M 50 150 Q 100 100 150 50 T 300 100" stroke="blue" fill="none" stroke-width="3"/>
          <circle cx="150" cy="50" r="4" fill="red"/>
          <text x="160" y="45" font-size="12">CĐ</text>
          <circle cx="300" cy="100" r="4" fill="green"/>
          <text x="310" y="95" font-size="12">CT</text>
          <text x="20" y="20" font-size="14">y = x³ - 3x (đồng biến, nghịch biến)</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> Vận tốc v(t) = s'(t) = 2t - 4. Khi t < 2, v < 0; khi t > 2, v > 0.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Nếu f'(x) > 0 trên I thì f đồng biến. Nếu f'(x) < 0 thì f nghịch biến.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> f(x) = x³. f'(x) = 3x² ≥ 0 → f đồng biến trên ℝ.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> f(x) = 1/x không nghịch biến trên ℝ \ {0}.</p>
      </div>`,
    
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

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "Hàm số nào đồng biến trên ℝ?", choices: ["y = -x²", "y = x³", "y = 1/x", "y = |x|"], correct: 1, hint: "y = x³ có đạo hàm ≥ 0.", explain: "y = x³ đồng biến trên ℝ." },
      { type: "mc", prompt: "Hàm số y = x² nghịch biến trên khoảng nào?", choices: ["(-∞, 0)", "(0, +∞)", "(-∞, +∞)", "không nghịch biến"], correct: 0, hint: "y' = 2x < 0 khi x < 0.", explain: "Nghịch biến trên (-∞, 0)." },
      { type: "text", prompt: "Tìm khoảng đồng biến của y = x³ - 3x.", answer: "(-∞, -1) và (1, +∞)", accept: ["(-∞, -1) và (1, +∞)"], hint: "y' = 3x² - 3 > 0 khi x < -1 hoặc x > 1.", explain: "y' > 0 khi x < -1 hoặc x > 1." },
      { type: "mc", prompt: "Hàm số y = √x đồng biến trên?", choices: ["[0, +∞)", "(0, +∞)", "(-∞, +∞)", "[-1, +∞)"], correct: 0, hint: "Miền xác định là x ≥ 0.", explain: "Miền xác định [0, +∞)." },
    ],
  },
  {
    id: "g12-b2",
    num: 2,
    chapter: 1,
    title: "Cực trị của hàm số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Điều kiện cần và đủ để hàm số có cực trị.", spoken: "Điều kiện cần: đạo hàm bằng 0. Điều kiện đủ: đạo hàm đổi dấu qua điểm đó.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Thiết kế hộp giấy có thể tích lớn nhất.</p>
      <div class="figure">
        <svg viewBox="0 0 400 200" style="width:100%;max-width:400px;">
          <line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="2"/>
          <line x1="200" y1="20" x2="200" y2="180" stroke="#333" stroke-width="2"/>
          <text x="370" y="175" font-size="12">x</text>
          <text x="205" y="25" font-size="12">y</text>
          <path d="M 50 50 Q 100 80 150 130 T 300 50" stroke="purple" fill="none" stroke-width="3"/>
          <circle cx="150" cy="130" r="4" fill="blue"/>
          <text x="160" y="125" font-size="12">Cực đại</text>
          <text x="20" y="20" font-size="14">y = -x⁴ + 4x² (3 cực trị)</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> y = x³ - 3x. y' = 3x² - 3, y' = 0 ↔ x = ±1. Dấu y' đổi → cực trị.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> f'(x₀) = 0 (điều kiện cần). f'(x) đổi dấu qua x₀ (điều kiện đủ).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = x⁴ - 2x². y' = 4x(x² - 1). y' = 0 ↔ x = 0, ±1. 3 cực trị.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> f'(x₀) = 0 nhưng không đổi dấu → không phải cực trị.</p>
      </div>`,
    
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
      { type: "mc", prompt: "Hàm số y = x³ có cực trị nào?", choices: ["Cực đại tại x=0", "Cực tiểu tại x=0", "Không có cực trị", "Cực đại và cực tiểu"], correct: 2, hint: "y' = 3x² ≥ 0, không đổi dấu.", explain: "Không có cực trị." },
      { type: "mc", prompt: "Số cực trị của y = x⁴ - 2x² là?", choices: ["1", "2", "3", "4"], correct: 2, hint: "y' có 3 nghiệm và đổi dấu.", explain: "3 cực trị." },
      { type: "text", prompt: "Tìm cực tiểu của y = x² + 4/x (x > 0).", answer: "3", accept: ["3"], hint: "y' = 2x - 4/x² = 0 ↔ x³ = 2.", explain: "x = ∛2." },
      { type: "mc", prompt: "Hàm số y = |x| có cực trị tại?", choices: ["x = 0", "x = 1", "x = -1", "không có"], correct: 0, hint: "Đồ thị dạng chữ V.", explain: "Cực tiểu tại x = 0." },
    ],
  },
  {
    id: "g12-b3",
    num: 3,
    chapter: 1,
    title: "Giá trị lớn nhất, giá trị nhỏ nhất của hàm số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Tìm GTLN, GTNN trên đoạn và khoảng.", spoken: "GTLN/GTNN trên [a;b]: tính f(a), f(b), tìm cực trị trong (a;b), so sánh các giá trị.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Thửa ruộng hình chữ nhật chu vi 100m, diện tích lớn nhất?</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> S(x) = x(50 - x). S'(x) = 50 - 2x = 0 ↔ x = 25. S(25) = 625m².</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> GTLN/GTNN trên [a;b]: tính f(a), f(b), tìm cực trị, so sánh.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = x + 4/x trên [1;3]. f(1)=5, f(2)=4, f(3)=7/3. GTLN=5.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Không áp dụng trên khoảng không đóng.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "GTLN của y = -x² + 4x trên [0;3] là?", choices: ["0", "4", "3", "5"], correct: 1, hint: "f(0)=0, f(2)=4, f(3)=3.", explain: "GTLN = 4." },
      { type: "mc", prompt: "GTNN của y = x² + 1 trên [-1;2] là?", choices: ["0", "1", "2", "5"], correct: 1, hint: "x² ≥ 0 nên y ≥ 1.", explain: "GTNN = 1." },
      { type: "text", prompt: "Tìm GTLN của y = sinx + cosx.", answer: "√2", accept: ["√2"], hint: "sinx + cosx = √2 sin(x + π/4).", explain: "GTLN = √2." },
      { type: "mc", prompt: "Hàm số y = x³ trên [0;2] có GTNN là?", choices: ["0", "1", "8", "không có"], correct: 0, hint: "Hàm đồng biến.", explain: "GTNN = f(0) = 0." },
    ],
  },
  {
    id: "g12-b4",
    num: 4,
    chapter: 1,
    title: "Đường tiệm cận của đồ thị hàm số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    youtube: "dQw4w9WgXcQ",

    summary: "Tiệm cận đứng và tiệm cận ngang.", spoken: "Tiệm cận đứng khi giới hạn ra vô cùng, tiệm cận ngang khi x tiến ra vô cực.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Đồ thị hyperbol y = 1/x không chạm trục tọa độ.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> y = 1/x: limₓ→0⁺ y = +∞ → tiệm cận đứng x = 0. limₓ→±∞ y = 0 → tiệm cận ngang y = 0.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Tiệm cận đứng: limₓ→x₀⁺/⁻ f(x) = ±∞. Tiệm cận ngang: limₓ→±∞ f(x) = y₀.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = (2x+1)/(x-3): limₓ→3⁺ y = +∞ → x = 3. limₓ→±∞ y = 2 → y = 2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Hàm phải không xác định tại x₀ mới là tiệm cận.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Tiệm cận đứng của y = 1/(x - 2) là?", choices: ["x = 0", "x = 2", "y = 0", "y = 2"], correct: 1, hint: "Mẫu = 0 khi x = 2.", explain: "x = 2." },
      { type: "mc", prompt: "Tiệm cận ngang của y = (3x-1)/(x+2) là?", choices: ["y = 3", "y = -3", "y = 1/2", "y = -1/2"], correct: 0, hint: "Hệ số cao nhất: 3x/x = 3.", explain: "y = 3." },
      { type: "text", prompt: "Tìm tất cả tiệm cận của y = (x+1)/(x²-4).", answer: "x = 2, x = -2, y = 0", accept: ["x=2,x=-2,y=0"], hint: "Mẫu = 0 khi x = ±2.", explain: "x = 2, x = -2 (đứng), y = 0 (ngang)." },
      { type: "mc", prompt: "Hàm số y = √x có tiệm cận nào?", choices: ["x = 0", "y = 0", "x = 1", "không có"], correct: 0, hint: "x = 0 là biên MXĐ.", explain: "x = 0." },
    ],
  },
  {
    id: "g12-b5",
    num: 5,
    chapter: 1,
    title: "Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    youtube: "dQw4w9WgXcQ",

    summary: "Quy trình khảo sát hàm bậc 3, bậc 4, phân thức.", spoken: "Bước 1: tìm MXĐ. Bước 2: tính đạo hàm. Bước 3: bảng biến thiên. Bước 4: vẽ đồ thị.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Kỹ sư cần vẽ đồ thị để phân tích hệ thống.</p>
      <div class="figure">
        <svg viewBox="0 0 400 200" style="width:100%;max-width:400px;">
          <line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="2"/>
          <line x1="200" y1="20" x2="200" y2="180" stroke="#333" stroke-width="2"/>
          <text x="370" y="175" font-size="12">x</text>
          <text x="205" y="25" font-size="12">y</text>
          <path d="M 50 150 Q 100 100 150 50 T 300 100" stroke="blue" fill="none" stroke-width="2"/>
          <circle cx="150" cy="50" r="4" fill="red"/>
          <line x1="80" y1="130" x2="250" y2="-20" stroke="green" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="255" y="-15" font-size="12">Tiếp tuyến</text>
          <text x="160" y="45" font-size="12">M(x₀,f(x₀))</text>
          <text x="20" y="20" font-size="14">Đường tiếp tuyến tại điểm M</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> y = x³ - 3x. Bước 1: MXĐ = ℝ. Bước 2: y' = 3x² - 3, y' = 0 ↔ x = ±1.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Quy trình 5 bước: MXĐ, y', bảng biến thiên, tiệm cận, đồ thị.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = x⁴ - 2x². y' = 4x(x² - 1). 3 cực trị.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Bỏ qua giới hạn ở vô cực.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Đồ thị y = x³ - 3x có bao nhiêu điểm cực trị?", choices: ["0", "1", "2", "3"], correct: 2, hint: "y' = 3x² - 3 có 2 nghiệm.", explain: "2 cực trị." },
      { type: "mc", prompt: "Đồ thị y = x⁴ có dạng gì?", choices: ["Hình chữ V", "Parabol", "Hình chữ W", "Đường thẳng"], correct: 1, hint: "Hàm bậc 4 dương.", explain: "Parabol dạng U." },
      { type: "text", prompt: "Giao điểm của y = x² - 4 với trục Oy là?", answer: "(0; -4)", accept: ["(0,-4)"], hint: "Cho x = 0.", explain: "(0, -4)." },
      { type: "mc", prompt: "Đồ thị nào đối xứng qua gốc O?", choices: ["y = x²", "y = x³", "y = |x|", "y = x⁴"], correct: 1, hint: "Hàm lẻ: f(-x) = -f(x).", explain: "y = x³." },
    ],
  },
  {
    id: "g12-b6",
    num: 6,
    chapter: 1,
    title: "Tương giao của các đồ thị",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    youtube: "dQw4w9WgXcQ",

    summary: "Tìm số giao điểm của hai đồ thị.", spoken: "Giải phương trình hoành độ giao điểm, số nghiệm bằng số giao điểm.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Tìm thời điểm hai vật gặp nhau.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> y = x² và y = x + 2. x² = x + 2 ↔ x = -1 hoặc x = 2. 2 giao điểm.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Số giao điểm = số nghiệm phương trình f(x) = g(x).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = x³ - 3x và y = m. 3 nghiệm khi -2 < m < 2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên điều kiện nghiệm.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Số giao điểm của y = x² và y = 2x là?", choices: ["0", "1", "2", "3"], correct: 2, hint: "x² = 2x ↔ x(x-2) = 0.", explain: "2 giao điểm." },
      { type: "mc", prompt: "x³ - 3x + 1 = m có 3 nghiệm khi?", choices: ["m < -1", "m > 1", "-1 < m < 1", "m = ±1"], correct: 2, hint: "y(1) = -1, y(-1) = 3.", explain: "-1 < m < 3." },
      { type: "text", prompt: "Tìm m để y = x² và y = x + m tiếp xúc nhau.", answer: "-1/4", accept: ["-1/4"], hint: "delta = 0.", explain: "m = -1/4." },
      { type: "mc", prompt: "Số giao điểm của y = 1/x và y = x là?", choices: ["0", "1", "2", "3"], correct: 2, hint: "1/x = x ↔ x² = 1.", explain: "2 giao điểm." },
    ],
  },
  {
    id: "g12-b7",
    num: 7,
    chapter: 2,
    title: "Lũy thừa",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định nghĩa, tính chất của lũy thừa.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Tốc độ tăng trưởng dân số P(t) = P₀(1 + r)ᵗ.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> aᵐ·aⁿ = aᵐ⁺ⁿ. (aᵐ)ⁿ = aᵐⁿ. a⁻ⁿ = 1/aⁿ. a⁰ = 1 (a ≠ 0).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> a > 0: aᵐ·aⁿ = aᵐ⁺ⁿ; (aᵐ)ⁿ = aᵐⁿ; (ab)ᵐ = aᵐbᵐ.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> 2³·2⁴ = 2⁷. (3²)³ = 3⁶. 5⁻² = 1/25.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> 0⁰ không xác định.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "2³·2⁴ bằng?", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "aᵐ·aⁿ = aᵐ⁺ⁿ.", explain: "2⁷." },
      { type: "mc", prompt: "(3²)³ bằng?", choices: ["3⁵", "3⁶", "9³", "27²"], correct: 1, hint: "(aᵐ)ⁿ = aᵐⁿ.", explain: "3⁶." },
      { type: "text", prompt: "8·4² dưới dạng lũy thừa:", answer: "2⁷", accept: ["2^7", "2⁷"], hint: "8=2³, 4=2².", explain: "2⁷." },
      { type: "mc", prompt: "5⁻² bằng?", choices: ["25", "1/25", "-25", "-1/25"], correct: 1, hint: "a⁻ⁿ = 1/aⁿ.", explain: "1/25." },
    ],
  },
  {
    id: "g12-b8",
    num: 8,
    chapter: 2,
    title: "Logarit",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định nghĩa, tính chất của logarit.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> pH = -log[H⁺] đo độ axit.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> logₐb = x ↔ aˣ = b. logₐa = 1. logₐ1 = 0. logₐ(ab) = logₐa + logₐb.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> logₐ(ab) = logₐa + logₐb; logₐ(a/b) = logₐa - logₐb; logₐ(aᵏ) = k logₐa.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> log₂8 = 3. log₁₀100 = 2. log₃(27/9) = 1.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> logₐ(b+c) ≠ logₐb + logₐc.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "log₃27 bằng?", choices: ["3", "9", "27", "1/3"], correct: 0, hint: "3³ = 27.", explain: "3." },
      { type: "mc", prompt: "log₁₀1000 bằng?", choices: ["2", "3", "4", "10"], correct: 1, hint: "10³ = 1000.", explain: "3." },
      { type: "text", prompt: "log₂16 + log₂2 bằng?", answer: "5", accept: ["5"], hint: "log₂16=4, log₂2=1.", explain: "5." },
      { type: "mc", prompt: "log₅25 - log₅5 bằng?", choices: ["0", "1", "2", "3"], correct: 1, hint: "log₅25=2, log₅5=1.", explain: "1." },
    ],
  },
  {
    id: "g12-b9",
    num: 9,
    chapter: 2,
    title: "Hàm số mũ, hàm số logarit",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đồ thị, tính chất của hàm số mũ và logarit.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Lãi kép A = P(1 + r)ᵗ.</p>
      <div class="figure">
        <svg viewBox="0 0 400 200" style="width:100%;max-width:400px;">
          <line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="2"/>
          <line x1="20" y1="20" x2="20" y2="180" stroke="#333" stroke-width="2"/>
          <text x="370" y="175" font-size="12">x</text>
          <text x="25" y="25" font-size="12">y</text>
          <path d="M 30 170 Q 100 150 200 50 T 350 20" stroke="red" fill="none" stroke-width="2"/>
          <path d="M 30 170 Q 100 160 200 130 T 350 100" stroke="blue" fill="none" stroke-width="2"/>
          <text x="280" y="35" font-size="12">y = aˣ (a > 1)</text>
          <text x="280" y="115" font-size="12">y = aˣ (0 < a < 1)</text>
          <text x="20" y="20" font-size="14">Đồ thị hàm số mũ: tăng và giảm</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> y = aˣ: MXĐ ℝ, y > 0. a > 1: đồng biến. 0 < a < 1: nghịch biến. TCN y = 0.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> y = aˣ: qua (0,1), TCN y = 0. y = logₐx: MXĐ (0;+∞), qua (1,0), TCD x = 0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> y = 2ˣ: đồng biến, qua (0,1). y = log₁₀x: qua (1,0), (10,1).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong] Đồ thị y = aˣ không cắt trục Ox.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Hàm số nào đồng biến trên ℝ?", choices: ["y = (1/2)ˣ", "y = 2ˣ", "y = log₀.₅x", "y = log₂(1-x)"], correct: 1, hint: "a > 1 thì đồng biến.", explain: "y = 2ˣ." },
      { type: "mc", prompt: "Đồ thị y = log₃x đi qua điểm nào?", choices: ["(0, 1)", "(1, 0)", "(3, 0)", "(1, 3)"], correct: 1, hint: "logₐ1 = 0.", explain: "(1, 0)." },
      { type: "text", prompt: "Tiệm cận ngang của y = 3⁻ˣ là?", answer: "y = 0", accept: ["y=0"], hint: "limₓ→+∞ 3⁻ˣ = 0.", explain: "y = 0." },
      { type: "mc", prompt: "MXĐ của y = log₂(x - 1) là?", choices: ["x > 0", "x > 1", "x ≥ 1", "x > 1"], correct: 1, hint: "x - 1 > 0.", explain: "x > 1." },
    ],
  },
  {
    id: "g12-b10",
    num: 10,
    chapter: 2,
    title: "Phương trình mũ, phương trình logarit",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Các phương pháp giải phương trình mũ và logarit.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Tìm thời gian để vốn gấp đôi: 2 = (1 + r)ᵗ.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> aᶠ⁽ˣ⁾ = aᶢ⁽ˣ⁾ ↔ f(x) = g(x). logₐf(x) = logₐg(x) ↔ f(x) = g(x) > 0.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Đưa về cùng cơ số hoặc đặt ẩn phụ. Luôn kiểm tra điều kiện.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> 2ˣ⁺¹ = 8 ↔ x = 2. log₂(x - 1) = 2 ↔ x = 5.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên điều kiện x > 1.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Nghiệm của 3ˣ = 27 là?", choices: ["1", "2", "3", "4"], correct: 2, hint: "27 = 3³.", explain: "x = 3." },
      { type: "mc", prompt: "Nghiệm của log₅x = 2 là?", choices: ["5", "10", "25", "125"], correct: 2, hint: "x = 5².", explain: "x = 25." },
      { type: "text", prompt: "Giải 2ˣ⁺² = 32.", answer: "3", accept: ["3"], hint: "32 = 2⁵.", explain: "x = 3." },
      { type: "mc", prompt: "Điều kiện của log₃(2x - 1) là?", choices: ["x > 0", "x > 1/2", "x ≥ 1/2", "x > 1"], correct: 1, hint: "2x - 1 > 0.", explain: "x > 1/2." },
    ],
  },
  {
    id: "g12-b11",
    num: 11,
    chapter: 2,
    title: "Bất phương trình mũ, bất phương trình logarit",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Giải bất phương trình mũ và logarit.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Thời gian để lượng chất phóng xạ giảm dưới ngưỡng.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> aᶠ⁽ˣ⁾ > aᶢ⁽ˣ⁾: a > 1 thì f(x) > g(x); 0 < a < 1 thì f(x) < g(x).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> a > 1: giữ chiều. 0 < a < 1: đổi chiều. Luôn có điều kiện.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> 2ˣ > 8 ↔ x > 3. (1/2)ˣ > 4 ↔ x < -2. log₂(x - 1) > 1 ↔ x > 3.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Đổi chiều sai khi 0 < a < 1.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Nghiệm của 3ˣ > 27 là?", choices: ["x > 2", "x > 3", "x < 3", "x < 2"], correct: 1, hint: "27 = 3³, a > 1.", explain: "x > 3." },
      { type: "mc", prompt: "Nghiệm của (1/3)ˣ < 9 là?", choices: ["x > -2", "x < -2", "x > 2", "x < 2"], correct: 0, hint: "9 = (1/3)⁻², đổi chiều.", explain: "x > -2." },
      { type: "text", prompt: "Giải log₂(x + 1) > 2.", answer: "x > 3", accept: ["x>3"], hint: "x + 1 > 4.", explain: "x > 3." },
      { type: "mc", prompt: "Điều kiện của log₅(3 - x) là?", choices: ["x < 3", "x > 3", "x ≤ 3", "x ≥ 3"], correct: 0, hint: "3 - x > 0.", explain: "x < 3." },
    ],
  },
  {
    id: "g12-b12",
    num: 12,
    chapter: 3,
    title: "Nguyên hàm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định nghĩa, tính chất và bảng nguyên hàm cơ bản.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Vận tốc v(t) là đạo hàm của quãng đường s(t).</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> F(x) là nguyên hàm của f(x) nếu F'(x) = f(x). ∫xⁿdx = xⁿ⁺¹/(n+1) + C.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> ∫dx = x + C. ∫xⁿdx = xⁿ⁺¹/(n+1) + C. ∫eˣdx = eˣ + C. ∫cosx dx = sinx + C.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> ∫3x²dx = x³ + C. ∫e⁻ˣdx = -e⁻ˣ + C. ∫cos2x dx = (1/2)sin2x + C.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên hằng số C. ∫x⁻¹dx = ln|x| + C.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "∫2x dx bằng?", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "∫xⁿdx = xⁿ⁺¹/(n+1).", explain: "x² + C." },
      { type: "mc", prompt: "∫e³ˣ dx bằng?", choices: ["e³ˣ + C", "3e³ˣ + C", "(1/3)e³ˣ + C", "eˣ + C"], correct: 2, hint: "∫eᵃˣdx = (1/a)eᵃˣ.", explain: "(1/3)e³ˣ + C." },
      { type: "text", prompt: "∫cos3x dx =", answer: "(1/3)sin3x + C", accept: ["(1/3)sin3x+C"], hint: "∫cosax dx = (1/a)sinax.", explain: "(1/3)sin3x + C." },
      { type: "mc", prompt: "∫x⁻¹ dx bằng?", choices: ["ln|x| + C", "x⁰ + C", "0 + C", "1/x + C"], correct: 0, hint: "∫x⁻¹dx = ln|x|.", explain: "ln|x| + C." },
    ],
  },
  {
    id: "g12-b13",
    num: 13,
    chapter: 3,
    title: "Tích phân",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định nghĩa, tính chất và công thức Newton-Leibniz.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Quãng đường = ∫v(t)dt từ t₁ đến t₂.</p>
      <div class="figure">
        <svg viewBox="0 0 400 200" style="width:100%;max-width:400px;">
          <line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="2"/>
          <line x1="20" y1="20" x2="20" y2="180" stroke="#333" stroke-width="2"/>
          <text x="370" y="175" font-size="12">x</text>
          <text x="25" y="25" font-size="12">y</text>
          <path d="M 50 150 Q 100 100 150 80 Q 200 60 250 80 Q 300 100 350 150" stroke="green" fill="none" stroke-width="2"/>
          <path d="M 100 180 L 100 130 Q 150 100 200 85 L 200 180 Z" fill="rgba(0,255,0,0.3)" stroke="none"/>
          <line x1="100" y1="180" x2="100" y2="20" stroke="gray" stroke-width="1" stroke-dasharray="4,4"/>
          <line x1="200" y1="180" x2="200" y2="20" stroke="gray" stroke-width="1" stroke-dasharray="4,4"/>
          <text x="145" y="170" font-size="12">a</text>
          <text x="240" y="170" font-size="12">b</text>
          <text x="20" y="20" font-size="14">∫ₐᵇf(x)dx = diện tích màu xanh</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> ∫ₐᵇf(x)dx = F(b) - F(a). ∫ₐᵇxⁿdx = [xⁿ⁺¹/(n+1)]ₐᵇ.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> ∫ₐᵇeˣdx = eᵇ - eᵃ. ∫ₐᵇcosx dx = sinb - sina.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> ∫₀²3x²dx = 8. ∫₀^πsinx dx = 2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Thay giới hạn sai.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "∫₀¹2x dx bằng?", choices: ["0", "1", "2", "4"], correct: 1, hint: "[x²]₀¹ = 1.", explain: "1." },
      { type: "mc", prompt: "∫₀^πcosx dx bằng?", choices: ["0", "1", "2", "-2"], correct: 0, hint: "[sinx]₀^π = 0.", explain: "0." },
      { type: "text", prompt: "∫₁²x² dx =", answer: "7/3", accept: ["7/3"], hint: "[x³/3]₁² = 8/3 - 1/3.", explain: "7/3." },
      { type: "mc", prompt: "∫₀²eˣ dx bằng?", choices: ["e²", "e² - 1", "e² + 1", "2e"], correct: 1, hint: "[eˣ]₀² = e² - 1.", explain: "e² - 1." },
    ],
  },
  {
    id: "g12-b14",
    num: 14,
    chapter: 3,
    title: "Ứng dụng tích phân tính diện tích, thể tích",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tính diện tích hình phẳng và thể tích vật thể.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Tính diện tích dưới đường cong hoặc thể tích vật thể quay.</p>
      <div class="figure">
        <svg viewBox="0 0 400 200" style="width:100%;max-width:400px;">
          <line x1="20" y1="180" x2="380" y2="180" stroke="#333" stroke-width="2"/>
          <line x1="20" y1="20" x2="20" y2="180" stroke="#333" stroke-width="2"/>
          <text x="370" y="175" font-size="12">x</text>
          <text x="25" y="25" font-size="12">y</text>
          <path d="M 50 150 Q 100 100 150 60 T 300 100" stroke="blue" fill="none" stroke-width="2"/>
          <ellipse cx="100" cy="100" rx="20" ry="5" stroke="blue" fill="rgba(0,0,255,0.3)" stroke-width="2"/>
          <ellipse cx="150" cy="60" rx="15" ry="4" stroke="blue" fill="rgba(0,0,255,0.3)" stroke-width="2"/>
          <ellipse cx="250" cy="100" rx="25" ry="6" stroke="blue" fill="rgba(0,0,255,0.3)" stroke-width="2"/>
          <text x="20" y="20" font-size="14">Khối tròn xoay: quanh trục Ox</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> Diện tích S = ∫ₐᵇ|f(x)|dx. Thể tích: V = π∫ₐᵇ[f(x)]²dx.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Diện tích giữa hai đường: ∫ₐᵇ|f(x)-g(x)|dx. Thể tích: V = π∫ₐᵇ[R(x)]²dx.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Diện tích dưới y = x² từ 0 đến 1: 1/3.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên dấu giá trị tuyệt đối.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Diện tích dưới y = x từ 0 đến 2 là?", choices: ["1", "2", "4", "8"], correct: 1, hint: "∫₀²x dx = [x²/2]₀².", explain: "2." },
      { type: "mc", prompt: "Thể tích khối tròn xoay quanh Ox của y = x từ 0 đến 1 là?", choices: ["π/3", "π/2", "π", "2π"], correct: 0, hint: "V = π∫₀¹x²dx.", explain: "π/3." },
      { type: "text", prompt: "Diện tích hình phẳng giới hạn y = x² và y = x là?", answer: "1/6", accept: ["1/6"], hint: "∫₀¹(x-x²)dx.", explain: "1/6." },
      { type: "mc", prompt: "Thể tích hình cầu bán kính 2 là?", choices: ["(4/3)π", "(8/3)π", "8π", "(32/3)π"], correct: 3, hint: "V = (4/3)πR³.", explain: "(32/3)π." },
    ],
  },
  {
    id: "g12-b15",
    num: 15,
    chapter: 4,
    title: "Số phức và biểu diễn hình học",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định nghĩa, số phức liên hợp, môđun.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Số phức z = a + bi, i² = -1. Dùng trong điện xoay chiều.</p>
      <div class="figure">
        <svg viewBox="0 0 300 250" style="width:100%;max-width:300px;">
          <line x1="150" y1="20" x2="150" y2="230" stroke="#333" stroke-width="2"/>
          <line x1="20" y1="125" x2="280" y2="125" stroke="#333" stroke-width="2"/>
          <text x="270" y="120" font-size="12">Re</text>
          <text x="155" y="25" font-size="12">Im</text>
          <circle cx="200" cy="80" r="4" fill="red"/>
          <line x1="150" y1="125" x2="200" y2="80" stroke="red" stroke-width="2"/>
          <text x="210" y="75" font-size="12">z = a + bi</text>
          <text x="185" y="120" font-size="12">a</text>
          <text x="155" y="95" font-size="12">b</text>
          <path d="M 170 125 Q 150 110 150 105" stroke="gray" fill="none" stroke-width="1"/>
          <text x="140" y="110" font-size="10">r</text>
          <text x="20" y="20" font-size="14">Biểu diễn số phức trên mặt phẳng</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> z = a + bi: a là phần thực, b là phần ảo. |z| = √(a²+b²). z̄ = a - bi.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> z₁ = z₂ ↔ a₁=a₂ và b₁=b₂. |z₁z₂| = |z₁||z₂|. z·z̄ = |z|².</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> z = 3 + 4i: |z| = 5, z̄ = 3 - 4i. (2+i)+(1-3i) = 3 - 2i.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> i² = -1, không phải 1.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Phần ảo của z = 5 - 3i là?", choices: ["5", "-3", "3", "-5"], correct: 1, hint: "z = a + bi, b là phần ảo.", explain: "-3." },
      { type: "mc", prompt: "|3 + 4i| bằng?", choices: ["5", "6", "7", "25"], correct: 0, hint: "|z| = √(a²+b²).", explain: "5." },
      { type: "text", prompt: "(2 + 3i) + (1 - 2i) =", answer: "3 + i", accept: ["3+i"], hint: "Cộng phần thực và phần ảo.", explain: "3 + i." },
      { type: "mc", prompt: "z̄ của z = -1 + 2i là?", choices: ["-1 - 2i", "1 + 2i", "1 - 2i", "-1 + 2i"], correct: 0, hint: "Đổi dấu phần ảo.", explain: "-1 - 2i." },
    ],
  },
  {
    id: "g12-b16",
    num: 16,
    chapter: 4,
    title: "Phép cộng và phép nhân các số phức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Cộng, trừ, nhân số phức.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Tính toán với số phức tương tự đa thức, với i² = -1.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> (a+bi)+(c+di) = (a+c)+(b+d)i. (a+bi)(c+di) = (ac-bd)+(ad+bc)i.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Nhân: (a+bi)(c+di) = ac+adi+bci+bdi² = (ac-bd)+(ad+bc)i.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> (2+3i)(1-i) = 2-2i+3i-3i² = 5+i.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên i² = -1 khi nhân.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "(3+2i)+(1-5i) =", choices: ["4-3i", "4+3i", "2-3i", "2+3i"], correct: 0, hint: "3+1=4, 2-5=-3.", explain: "4-3i." },
      { type: "mc", prompt: "(2+i)(3-i) =", choices: ["5+i", "6-2i", "7+i", "5-i"], correct: 0, hint: "6+i+1=5+i.", explain: "5+i." },
      { type: "text", prompt: "(1+i)² =", answer: "2i", accept: ["2i"], hint: "1+2i+i².", explain: "2i." },
      { type: "mc", prompt: "(3-2i)-(1+4i) =", choices: ["2-6i", "2+6i", "-2-6i", "4-2i"], correct: 0, hint: "3-1=2, -2-4=-6.", explain: "2-6i." },
    ],
  },
  {
    id: "g12-b17",
    num: 17,
    chapter: 4,
    title: "Phép chia các số phức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Chia số phức, số phức nghịch đảo.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> z₁/z₂ = z₁·z₂̄/|z₂|². Nhân tử và mẫu với liên hợp mẫu.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> (a+bi)/(c+di) = [(a+bi)(c-di)]/(c²+d²) = [(ac+bd)+(bc-ad)i]/(c²+d²).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Nhân tử và mẫu với z₂̄ để mẫu là số thực.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> (2+i)/(1-i) = [(2+i)(1+i)]/2 = (1+3i)/2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên nhân cả tử và mẫu.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "(3+i)/(1-i) =", choices: ["1+2i", "1-2i", "2+i", "2-i"], correct: 0, hint: "Nhân với 1+i.", explain: "1+2i." },
      { type: "mc", prompt: "1/i bằng?", choices: ["i", "-i", "1", "-1"], correct: 1, hint: "1/i = i/i².", explain: "-i." },
      { type: "text", prompt: "(2+3i)/i =", answer: "3-2i", accept: ["3-2i"], hint: "Nhân với -i.", explain: "3-2i." },
      { type: "mc", prompt: "(1+2i)/(2+i) =", choices: ["(4+3i)/5", "(4-3i)/5", "(2+i)/5", "(2-i)/5"], correct: 0, hint: "Nhân với 2-i.", explain: "(4+3i)/5." },
    ],
  },
  {
    id: "g12-b18",
    num: 18,
    chapter: 4,
    title: "Phương trình bậc hai với hệ số thực",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Giải phương trình bậc hai với hệ số thực, nghiệm phức.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> ax²+bx+c=0 có nghiệm phức khi delta<0.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> x = [-b±√Δ]/(2a). Nếu Δ<0: √Δ = i√|Δ|.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Delta = b²-4ac. Delta ≥ 0: nghiệm thực. Delta < 0: nghiệm phức.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> x²+4=0 ↔ x=±2i. x²-2x+5=0 ↔ x=1±2i.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Tính delta sai. Quên i khi viết nghiệm.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Nghiệm của x²+9=0 là?", choices: ["x=±3", "x=±3i", "x=±9", "x=±9i"], correct: 1, hint: "x²=-9.", explain: "x=±3i." },
      { type: "mc", prompt: "Nghiệm của x²-2x+2=0 là?", choices: ["x=1±i", "x=1±2i", "x=2±i", "x=-1±i"], correct: 0, hint: "Δ=-4.", explain: "x=1±i." },
      { type: "text", prompt: "Giải x²+4x+5=0.", answer: "x=-2±i", accept: ["x=-2±i"], hint: "Δ=-4.", explain: "x=-2±i." },
      { type: "mc", prompt: "Tổng hai nghiệm của x²+x+1=0 là?", choices: ["1", "-1", "i", "-i"], correct: 1, hint: "Tổng = -b/a.", explain: "-1." },
    ],
  },
  {
    id: "g12-b19",
    num: 19,
    chapter: 5,
    title: "Tọa độ trong không gian",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hệ tọa độ Oxyz, tọa độ điểm, tọa độ vectơ.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Vị trí điểm trong không gian cần 3 tọa độ: M(x,y,z).</p>
      <div class="figure">
        <svg viewBox="0 0 400 300" style="width:100%;max-width:400px;">
          <line x1="200" y1="150" x2="200" y2="50" stroke="#333" stroke-width="2"/>
          <line x1="200" y1="150" x2="350" y2="200" stroke="#333" stroke-width="2"/>
          <line x1="200" y1="150" x2="50" y2="250" stroke="#333" stroke-width="2"/>
          <text x="205" y="45" font-size="12">z</text>
          <text x="355" y="205" font-size="12">x</text>
          <text x="40" y="255" font-size="12">y</text>
          <circle cx="280" cy="120" r="5" fill="red"/>
          <text x="290" y="115" font-size="12">M(x,y,z)</text>
          <line x1="280" y1="120" x2="280" y2="200" stroke="blue" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="280" y1="200" x2="200" y2="200" stroke="green" stroke-width="1" stroke-dasharray="3,3"/>
          <text x="120" y="210" font-size="10">x</text>
          <text x="290" y="180" font-size="10">y</text>
          <text x="285" y="160" font-size="10">z</text>
          <text x="20" y="20" font-size="14">Hệ tọa độ Oxyz trong không gian</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> A(xₐ,yₐ,zₐ), B(xᵦ,yᵦ,zᵦ). AB = (xᵦ-xₐ, yᵦ-yₐ, zᵦ-zₐ). |AB| = √[(xᵦ-xₐ)²+(yᵦ-yₐ)²+(zᵦ-zₐ)²].</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> Trung điểm I: ((xₐ+xᵦ)/2, (yₐ+yᵦ)/2, (zₐ+zᵦ)/2). u·v = xᵤxᵥ+yᵤyᵥ+zᵤzᵥ.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> A(1,2,3), B(4,6,8). AB=(3,4,5). |AB|=√50=5√2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Hoán vị tọa độ. Quên bình phương.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Vectơ AB với A(1,2,3), B(4,5,6) là?", choices: ["(3,3,3)", "(5,7,9)", "(-3,-3,-3)", "(3,5,7)"], correct: 0, hint: "4-1=3, 5-2=3, 6-3=3.", explain: "(3,3,3)." },
      { type: "mc", prompt: "Độ dài AB với A(0,0,0), B(3,4,12) là?", choices: ["13", "14", "15", "16"], correct: 0, hint: "√(9+16+144)=√169.", explain: "13." },
      { type: "text", prompt: "Trung điểm của A(1,3,5) và B(3,7,9) là?", answer: "(2,5,7)", accept: ["(2,5,7)"], hint: "Trung bình mỗi tọa độ.", explain: "(2,5,7)." },
      { type: "mc", prompt: "|(1,2,2)| bằng?", choices: ["3", "4", "5", "6"], correct: 0, hint: "√(1+4+4)=√9.", explain: "3." },
    ],
  },
  {
    id: "g12-b20",
    num: 20,
    chapter: 5,
    title: "Phương trình mặt phẳng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phương trình tổng quát của mặt phẳng.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Mặt phẳng qua điểm M có VTPT n.</p>
      <div class="figure">
        <svg viewBox="0 0 400 300" style="width:100%;max-width:400px;">
          <polygon points="100,50 300,80 350,200 150,170" fill="rgba(100,200,100,0.4)" stroke="#333" stroke-width="2"/>
          <line x1="250" y1="50" x2="250" y2="100" stroke="red" stroke-width="2"/>
          <text x="260" y="75" font-size="12">n = (A,B,C)</text>
          <circle cx="200" cy="100" r="4" fill="blue"/>
          <text x="210" y="95" font-size="12">M(x₀,y₀,z₀)</text>
          <text x="20" y="20" font-size="14">Phương trình mặt phẳng Ax+By+Cz+D=0</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> A(x-x₀)+B(y-y₀)+C(z-z₀)=0. Phương trình tổng quát: Ax+By+Cz+D=0.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> (Oxy): z=0. (Oyz): x=0. (Oxz): y=0. Dạng đoạn chắn: x/a+y/b+z/c=1.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> Mặt phẳng qua (1,2,3) có VTPT (2,-1,4): 2x-y+4z-12=0.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Thay dấu sai khi khai triển.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Mặt phẳng (Oxy) có phương trình?", choices: ["x=0", "y=0", "z=0", "x+y=0"], correct: 2, hint: "Tất cả điểm có z=0.", explain: "z=0." },
      { type: "mc", prompt: "VTPT của 2x-3y+z-5=0 là?", choices: ["(2,-3,1)", "(-2,3,-1)", "(2,3,1)", "(1,-3,2)"], correct: 0, hint: "Hệ số của x,y,z.", explain: "(2,-3,1)." },
      { type: "text", prompt: "Mặt phẳng qua (1,0,0), (0,2,0), (0,0,3) là?", answer: "x+y/2+z/3=1", accept: ["x+y/2+z/3=1"], hint: "Dạng x/a+y/b+z/c=1.", explain: "x+y/2+z/3=1." },
      { type: "mc", prompt: "Mặt phẳng (Oyz) có phương trình?", choices: ["x=0", "y=0", "z=0", "y+z=0"], correct: 0, hint: "Tất cả điểm có x=0.", explain: "x=0." },
    ],
  },
  {
    id: "g12-b21",
    num: 21,
    chapter: 5,
    title: "Phương trình đường thẳng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phương trình tham số và phương trình chính tắc.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Đường thẳng qua M có VTCP u.</p>
      <div class="figure">
        <svg viewBox="0 0 400 300" style="width:100%;max-width:400px;">
          <line x1="50" y1="250" x2="350" y2="50" stroke="blue" stroke-width="2"/>
          <circle cx="150" cy="150" r="4" fill="red"/>
          <text x="160" y="145" font-size="12">M(x₀,y₀,z₀)</text>
          <text x="280" y="45" font-size="12">Δ</text>
          <text x="20" y="20" font-size="14">Đường thẳng trong không gian Oxyz</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong> Phương trình tham số: x=x₀+at, y=y₀+bt, z=z₀+ct. Chính tắc: (x-x₀)/a=(y-y₀)/b=(z-z₀)/c.</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong] Song song Ox: y=y₀, z=z₀. Song song Oy: x=x₀, z=z₀. Song song Oz: x=x₀, y=y₀.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong] Đường thẳng qua (1,2,3) có VTCP (2,-1,4): (x-1)/2=(y-2)/(-1)=(z-3)/4.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong] Chia cho 0 khi a,b hoặc c = 0.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Đường thẳng song song Ox qua (1,2,3) có phương trình?", choices: ["y=2,z=3", "x=1,z=3", "x=1,y=2", "x+y+z=6"], correct: 0, hint: "y,z không đổi.", explain: "y=2,z=3." },
      { type: "mc", prompt: "VTCP của (x-1)/2=(y+3)/(-1)=z/4 là?", choices: ["(2,-1,4)", "(-2,1,-4)", "(1/2,-1,4)", "(2,1,4)"], correct: 0, hint: "Mẫu số là VTCP.", explain: "(2,-1,4)." },
      { type: "text", prompt: "Phương trình đường thẳng qua (0,0,0) và (1,2,3) là?", answer: "x/1=y/2=z/3", accept: ["x/1=y/2=z/3"], hint: "VTCP=(1,2,3).", explain: "x/1=y/2=z/3." },
      { type: "mc", prompt: "Đường thẳng song song Oz qua (2,3,4) có phương trình?", choices: ["x=2,y=3", "x=2,z=4", "y=3,z=4", "x+y+z=9"], correct: 0, hint: "x,y không đổi.", explain: "x=2,y=3." },
    ],
  },
  {
    id: "g12-b22",
    num: 22,
    chapter: 5,
    title: "Tích vô hướng và ứng dụng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tích vô hướng, góc giữa hai vectơ, khoảng cách.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> u·v = |u||v|cos(θ). u·v = 0 ↔ u ⊥ v.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> u·v = xᵤxᵥ+yᵤyᵥ+zᵤzᵥ. |u| = √(xᵤ²+yᵤ²+zᵤ²). cos(θ) = (u·v)/(|u||v|).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong> u ⊥ v ↔ u·v = 0. Khoảng cách từ M đến mặt phẳng: |Ax₀+By₀+Cz₀+D|/√(A²+B²+C²).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong> u=(1,2,2), v=(2,-1,0). u·v=2-2+0=0 → u ⊥ v.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Tính tích vô hướng sai dấu.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "u=(1,2,2), v=(2,-1,0). u·v =", choices: ["0", "2", "4", "6"], correct: 0, hint: "1·2+2·(-1)+2·0.", explain: "0." },
      { type: "mc", prompt: "u=(1,2,2), v=(2,-1,0) thì?", choices: ["song song", "vuông góc", "cùng phương", "không vuông góc"], correct: 1, hint: "u·v=0.", explain: "Vuông góc." },
      { type: "text", prompt: "Khoảng cách từ (1,2,3) đến 2x-y+2z-6=0 là?", answer: "0", accept: ["0"], hint: "|2-2+6-6|/3=0.", explain: "0." },
      { type: "mc", prompt: "u=(1,1,1), v=(1,-1,0) thì?", choices: ["vuông góc", "song song", "cùng phương", "góc 60°"], correct: 0, hint: "u·v=1-1+0=0.", explain: "Vuông góc." },
    ],
  },
  {
    id: "g12-b23",
    num: 23,
    chapter: 6,
    title: "Khối đa diện",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định nghĩa, diện tích xung quanh, thể tích khối đa diện.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Tình huống.</strong> Tính thể tích hộp giấy, lăng trụ, chóp.</p>
      <div class="figure">
        <svg viewBox="0 0 400 250" style="width:100%;max-width:400px;">
          <!-- Hình hộp chữ nhật -->
          <polygon points="50,150 150,120 200,150 100,180" fill="rgba(100,150,200,0.5)" stroke="#333" stroke-width="2"/>
          <polygon points="50,150 50,80 100,50 100,120" fill="rgba(150,200,100,0.5)" stroke="#333" stroke-width="2"/>
          <polygon points="100,50 200,80 200,150 100,120" fill="rgba(200,100,150,0.5)" stroke="#333" stroke-width="2"/>
          <line x1="50" y1="150" x2="50" y2="80" stroke="#333" stroke-width="2"/>
          <line x1="150" y1="120" x2="150" y2="50" stroke="#333" stroke-width="2"/>
          <line x1="200" y1="150" x2="200" y2="80" stroke="#333" stroke-width="2"/>
          <line x1="100" y1="180" x2="100" y2="110" stroke="#333" stroke-width="2"/>
          <line x1="150" y1="120" x2="200" y2="150" stroke="#333" stroke-width="2"/>
          <text x="180" y="230" font-size="14">Hình hộp chữ nhật (V = abc)</text>
          <text x="20" y="20" font-size="14">Khối đa diện: lăng trụ, chóp, hộp</text>
        </svg>
      </div>
      <div class="example">
        <p><strong>Làm chậm.</strong] Sₓq = chu vi đáy × chiều cao. V = Sđáy × h (lăng trụ). V = (1/3)Sđáy × h (chóp).</p>
      </div>
      <div class="memory">
        <p><strong>Nhìn lại.</strong] Hình hộp chữ nhật: V=abc. Hình lập phương: V=a³. Lăng trụ: V=Sđáy×h. Chóp: V=(1/3)Sđáy×h.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ.</strong] Hình hộp 3×4×5: V=60. Chóp đáy vuông cạnh 4, chiều cao 6: V=32.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong] Quên hệ số 1/3 với hình chóp.</p>
      </div>`,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Thể tích hình hộp chữ nhật 2×3×4 là?", choices: ["12", "24", "36", "48"], correct: 1, hint: "V=abc.", explain: "24." },
      { type: "mc", prompt: "Thể tích hình chóp có đáy diện tích 9, chiều cao 6 là?", choices: ["9", "18", "27", "54"], correct: 1, hint: "V=(1/3)×9×6.", explain: "18." },
      { type: "text", prompt: "Thể tích hình lập phương cạnh 5 là?", answer: "125", accept: ["125"], hint: "V=a³.", explain: "125." },
      { type: "mc", prompt: "Diện tích xung quanh hình lăng trụ tam giác đều cạnh đáy 4, chiều cao 5 là?", choices: ["20", "40", "60", "80"], correct: 2, hint: "Sₓq=12×5.", explain: "60." },
    ],
  },
  {
    id: "g12-ch1-quiz",
    num: 99,
    chapter: 1,
    title: "Chương 1: Ứng dụng đạo hàm - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập ứng dụng đạo hàm để khảo sát hàm số.",
    body: 
    <div class="memory"><p><strong>Key point:</strong> Ghi nhớ điều quan trọng.</p></div>

    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 10 câu hỏi trắc nghiệm về đồng biến, nghịch biến, cực trị, GTLN-GTNN, tiệm cận.</p>
      <div class="example">
        <p><strong>Câu 1.</strong> Hàm số y = x³ - 3x đồng biến trên khoảng nào?</p>
        <p>A. (-∞, -1) và (1, +∞)</p>
        <p>B. (-1, 1)</p>
        <p>C. (-∞, +∞)</p>
        <p>D. (0, +∞)</p>
      </div>`,
    
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>
exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = x³ - 3x đồng biến trên?", choices: ["(-∞, -1) và (1, +∞)", "(-1, 1)", "(-∞, +∞)", "(0, +∞)"], correct: 0, hint: "y' = 3x² - 3 > 0 khi x < -1 hoặc x > 1.", explain: "Đồng biến trên (-∞, -1) và (1, +∞)." },
      { type: "mc", prompt: "Câu 2: Số cực trị của y = x⁴ - 2x² là?", choices: ["1", "2", "3", "4"], correct: 2, hint: "y' = 4x(x² - 1) có 3 nghiệm.", explain: "3 cực trị." },
      { type: "mc", prompt: "Câu 3: GTLN của y = -x² + 4x trên [0;3] là?", choices: ["0", "4", "3", "5"], correct: 1, hint: "f(0)=0, f(2)=4, f(3)=3.", explain: "GTLN = 4." },
      { type: "mc", prompt: "Câu 4: Tiệm cận đứng của y = 1/(x-2) là?", choices: ["x = 0", "x = 2", "y = 0", "y = 2"], correct: 1, hint: "Mẫu = 0 khi x = 2.", explain: "x = 2." },
      { type: "mc", prompt: "Câu 5: Đồ thị y = x³ - 3x có bao nhiêu điểm cực trị?", choices: ["0", "1", "2", "3"], correct: 2, hint: "y' = 3x² - 3 có 2 nghiệm.", explain: "2 cực trị." },
      { type: "mc", prompt: "Câu 6: Số giao điểm của y = x² và y = 2x là?", choices: ["0", "1", "2", "3"], correct: 2, hint: "x² = 2x ↔ x(x-2)=0.", explain: "2 giao điểm." },
      { type: "mc", prompt: "Câu 7: 2³·2⁴ bằng?", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "aᵐ·aⁿ = aᵐ⁺ⁿ.", explain: "2⁷." },
      { type: "mc", prompt: "Câu 8: log₃27 bằng?", choices: ["3", "9", "27", "1/3"], correct: 0, hint: "3³ = 27.", explain: "3." },
      { type: "mc", prompt: "Câu 9: ∫2x dx bằng?", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "∫xⁿdx = xⁿ⁺¹/(n+1).", explain: "x² + C." },
      { type: "mc", prompt: "Câu 10: Phần ảo của z = 5 - 3i là?", choices: ["5", "-3", "3", "-5"], correct: 1, hint: "z = a + bi, b là phần ảo.", explain: "-3." },
    ],
  },
  {
    id: "g12-ch4-quiz",
    num: 100,
    chapter: 4,
    title: "Chương 4: Số phức - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số phức và phép toán.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số phức, phép toán, phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phần ảo của z = 3 - 4i là?", choices: ["3", "-4", "4", "-3"], correct: 1, hint: "z = a + bi, b là phần ảo.", explain: "-4." },
      { type: "mc", prompt: "Câu 2: |2 + i| bằng?", choices: ["√3", "√5", "√4", "√6"], correct: 1, hint: "|z| = √(a²+b²).", explain: "√5." },
      { type: "mc", prompt: "Câu 3: (1 + i)² =", choices: ["2i", "-2i", "2", "-2"], correct: 0, hint: "1 + 2i + i² = 2i.", explain: "2i." },
      { type: "mc", prompt: "Câu 4: 1/i =", choices: ["i", "-i", "1", "-1"], correct: 1, hint: "1/i = i/i² = -i.", explain: "-i." },
      { type: "mc", prompt: "Câu 5: Nghiệm của x² + 4 = 0 là?", choices: ["x = ±2", "x = ±2i", "x = ±4", "x = ±4i"], correct: 1, hint: "x² = -4.", explain: "x = ±2i." },
      { type: "mc", prompt: "Câu 6: (2 + 3i) + (1 - 2i) =", choices: ["3 + i", "3 - i", "2 + i", "2 - i"], correct: 0, hint: "Cộng phần thực và phần ảo.", explain: "3 + i." },
      { type: "mc", prompt: "Câu 7: (2 + i)(1 - i) =", choices: ["3 + i", "3 - i", "1 + 3i", "1 - 3i"], correct: 0, hint: "2 - 2i + i - i² = 3 + i.", explain: "3 + i." },
      { type: "mc", prompt: "Câu 8: (3 + i)/(1 - i) =", choices: ["1 + 2i", "1 - 2i", "2 + i", "2 - i"], correct: 0, hint: "Nhân với 1+i.", explain: "1 + 2i." },
    ],
  },

  {
    id: "g12-ch2-quiz",
    num: 101,
    chapter: 2,
    title: "Chương 2: Lũy thừa, mũ, logarit - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập lũy thừa, mũ, logarit và phương trình.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về lũy thừa, mũ, logarit.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: 2³·2⁴ =", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "aᵐ·aⁿ = aᵐ⁺ⁿ.", explain: "2⁷." },
      { type: "mc", prompt: "Câu 2: (3²)³ =", choices: ["3⁵", "3⁶", "9³", "27²"], correct: 1, hint: "(aᵐ)ⁿ = aᵐⁿ.", explain: "3⁶." },
      { type: "mc", prompt: "Câu 3: log₃27 =", choices: ["3", "9", "27", "1/3"], correct: 0, hint: "3³ = 27.", explain: "3." },
      { type: "mc", prompt: "Câu 4: log₁₀1000 =", choices: ["2", "3", "4", "10"], correct: 1, hint: "10³ = 1000.", explain: "3." },
      { type: "mc", prompt: "Câu 5: 2ˣ = 8 ↔ x =", choices: ["2", "3", "4", "5"], correct: 1, hint: "8 = 2³.", explain: "x = 3." },
      { type: "mc", prompt: "Câu 6: log₂(x-1) = 2 ↔ x =", choices: ["3", "4", "5", "6"], correct: 2, hint: "x-1 = 2² = 4.", explain: "x = 5." },
      { type: "mc", prompt: "Câu 7: Hàm số nào đồng biến trên ℝ?", choices: ["y=(1/2)ˣ", "y=2ˣ", "y=log₀.₅x", "y=log₂(1-x)"], correct: 1, hint: "a>1 thì đồng biến.", explain: "y=2ˣ." },
      { type: "mc", prompt: "Câu 8: ∫eˣ dx =", choices: ["eˣ + C", "xeˣ + C", "eˣ", "xeˣ"], correct: 0, hint: "Đạo hàm của eˣ là eˣ.", explain: "eˣ + C." },
    ],
  },
  {
    id: "g12-ch3-quiz",
    num: 102,
    chapter: 3,
    title: "Chương 3: Nguyên hàm, tích phân - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập nguyên hàm, tích phân và ứng dụng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về nguyên hàm, tích phân.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: ∫2x dx =", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "∫xⁿdx = xⁿ⁺¹/(n+1).", explain: "x² + C." },
      { type: "mc", prompt: "Câu 2: ∫cosx dx =", choices: ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"], correct: 0, hint: "Đạo hàm của sinx là cosx.", explain: "sinx + C." },
      { type: "mc", prompt: "Câu 3: ∫₀¹2x dx =", choices: ["0", "1", "2", "4"], correct: 1, hint: "[x²]₀¹ = 1.", explain: "1." },
      { type: "mc", prompt: "Câu 4: ∫₀²eˣ dx =", choices: ["e²", "e²-1", "e²+1", "2e"], correct: 1, hint: "[eˣ]₀² = e²-1.", explain: "e²-1." },
      { type: "mc", prompt: "Câu 5: Diện tích dưới y=x từ 0 đến 2 là?", choices: ["1", "2", "4", "8"], correct: 1, hint: "∫₀²x dx = [x²/2]₀².", explain: "2." },
      { type: "mc", prompt: "Câu 6: ∫x⁻¹ dx =", choices: ["ln|x| + C", "x⁰ + C", "0 + C", "1/x + C"], correct: 0, hint: "∫x⁻¹dx = ln|x|.", explain: "ln|x| + C." },
      { type: "mc", prompt: "Câu 7: Thể tích khối tròn xoay quanh Ox của y=x từ 0 đến 1 là?", choices: ["π/3", "π/2", "π", "2π"], correct: 0, hint: "V = π∫₀¹x²dx.", explain: "π/3." },
      { type: "mc", prompt: "Câu 8: ∫e³ˣ dx =", choices: ["e³ˣ + C", "3e³ˣ + C", "(1/3)e³ˣ + C", "eˣ + C"], correct: 2, hint: "∫eᵃˣdx = (1/a)eᵃˣ.", explain: "(1/3)e³ˣ + C." },
    ],
  },
  {
    id: "g12-ch5-quiz",
    num: 103,
    chapter: 5,
    title: "Chương 5: Tọa độ trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vectơ, mặt phẳng, đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vectơ AB với A(1,2,3), B(4,5,6) là?", choices: ["(3,3,3)", "(5,7,9)", "(-3,-3,-3)", "(3,5,7)"], correct: 0, hint: "4-1=3, 5-2=3, 6-3=3.", explain: "(3,3,3)." },
      { type: "mc", prompt: "Câu 2: Độ dài AB với A(0,0,0), B(3,4,12) là?", choices: ["13", "14", "15", "16"], correct: 0, hint: "√(9+16+144)=√169.", explain: "13." },
      { type: "mc", prompt: "Câu 3: VTPT của 2x-3y+z-5=0 là?", choices: ["(2,-3,1)", "(-2,3,-1)", "(2,3,1)", "(1,-3,2)"], correct: 0, hint: "Hệ số của x,y,z.", explain: "(2,-3,1)." },
      { type: "mc", prompt: "Câu 4: Mặt phẳng (Oxy) có phương trình?", choices: ["x=0", "y=0", "z=0", "x+y=0"], correct: 2, hint: "Tất cả điểm có z=0.", explain: "z=0." },
      { type: "mc", prompt: "Câu 5: VTCP của (x-1)/2=(y+3)/(-1)=z/4 là?", choices: ["(2,-1,4)", "(-2,1,-4)", "(1/2,-1,4)", "(2,1,4)"], correct: 0, hint: "Mẫu số là VTCP.", explain: "(2,-1,4)." },
      { type: "mc", prompt: "Câu 6: u·v với u=(1,2,2), v=(2,-1,0) =", choices: ["0", "2", "4", "6"], correct: 0, hint: "1·2+2·(-1)+2·0.", explain: "0." },
      { type: "mc", prompt: "Câu 7: |(1,2,2)| =", choices: ["3", "4", "5", "6"], correct: 0, hint: "√(1+4+4)=√9.", explain: "3." },
      { type: "mc", prompt: "Câu 8: Trung điểm A(1,3,5) và B(3,7,9) là?", choices: ["(1,5,7)", "(2,5,7)", "(2,6,8)", "(1,6,8)"], correct: 1, hint: "Trung bình mỗi tọa độ.", explain: "(2,5,7)." },
    ],
  },
  {
    id: "g12-ch6-quiz",
    num: 104,
    chapter: 6,
    title: "Chương 6: Khối đa diện - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập khối đa diện, diện tích, thể tích.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về khối đa diện.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Thể tích hình hộp chữ nhật 2×3×4 là?", choices: ["12", "24", "36", "48"], correct: 1, hint: "V=abc.", explain: "24." },
      { type: "mc", prompt: "Câu 2: Thể tích hình lập phương cạnh 5 là?", choices: ["25", "100", "125", "625"], correct: 2, hint: "V=a³.", explain: "125." },
      { type: "mc", prompt: "Câu 3: Thể tích hình chóp có đáy diện tích 9, chiều cao 6 là?", choices: ["9", "18", "27", "54"], correct: 1, hint: "V=(1/3)×9×6.", explain: "18." },
      { type: "mc", prompt: "Câu 4: Diện tích xung quanh hình lăng trụ tam giác đều cạnh đáy 4, chiều cao 5 là?", choices: ["20", "40", "60", "80"], correct: 2, hint: "Sₓq=12×5.", explain: "60." },
      { type: "mc", prompt: "Câu 5: Thể tích hình cầu bán kính 2 là?", choices: ["(4/3)π", "(8/3)π", "8π", "(32/3)π"], correct: 3, hint: "V=(4/3)πR³.", explain: "(32/3)π." },
      { type: "mc", prompt: "Câu 6: Thể tích hình trụ có bán kính 3, chiều cao 5 là?", choices: ["15π", "30π", "45π", "90π"], correct: 2, hint: "V=πr²h=π×9×5.", explain: "45π." },
      { type: "mc", prompt: "Câu 7: Thể tích hình nón có bán kính 4, chiều cao 6 là?", choices: ["16π", "32π", "48π", "64π"], correct: 1, hint: "V=(1/3)πr²h=(1/3)π×16×6.", explain: "32π." },
      { type: "mc", prompt: "Câu 8: Đường sinh hình nón bán kính 3, chiều cao 4 là?", choices: ["3", "4", "5", "6"], correct: 2, hint: "l=√(r²+h²)=√(9+16).", explain: "5." },
    ],
  },

  {
    id: "g12-ch7-quiz",
    num: 105,
    chapter: 7,
    title: "Chương 7: Mặt nón, mặt trụ, mặt cầu - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập mặt nón, mặt trụ, mặt cầu.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về mặt nón, mặt trụ, mặt cầu.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Diện tích xung quanh hình nón bán kính r, đường sinh l là?", choices: ["πrl", "2πrl", "πr²l", "2πr²l"], correct: 0, hint: "Sₓq = πrl.", explain: "πrl." },
      { type: "mc", prompt: "Câu 2: Thể tích hình trụ bán kính r, chiều cao h là?", choices: ["πr²h", "2πr²h", "(1/3)πr²h", "4πr²h"], correct: 0, hint: "V = πr²h.", explain: "πr²h." },
      { type: "mc", prompt: "Câu 3: Diện tích mặt cầu bán kính R là?", choices: ["4πR²", "2πR²", "πR²", "(4/3)πR³"], correct: 0, hint: "S = 4πR².", explain: "4πR²." },
      { type: "mc", prompt: "Câu 4: Thể tích hình nón bán kính r, chiều cao h là?", choices: ["πr²h", "(1/3)πr²h", "2πr²h", "(1/2)πr²h"], correct: 1, hint: "V = (1/3)πr²h.", explain: "(1/3)πr²h." },
      { type: "mc", prompt: "Câu 5: Mặt cầu có tâm O và bán kính R thì điểm M thuộc mặt cầu khi?", choices: ["OM = R", "OM < R", "OM > R", "OM² = R"], correct: 0, hint: "Định nghĩa mặt cầu.", explain: "OM = R." },
      { type: "mc", prompt: "Câu 6: Thiết diện mặt phẳng cắt mặt cầu là?", choices: ["Hình tròn", "Hình ellipsis", "Hình chữ nhật", "Tam giác"], correct: 0, hint: "Mặt phẳng cắt mặt cầu tạo hình tròn.", explain: "Hình tròn." },
      { type: "mc", prompt: "Câu 7: Diện tích xung quanh hình trụ bán kính r, chiều cao h là?", choices: ["2πrh", "πrh", "2πr²h", "πr²h"], correct: 0, hint: "Sₓq = 2πrh.", explain: "2πrh." },
      { type: "mc", prompt: "Câu 8: Đường sinh hình nón bán kính 5, chiều cao 12 là?", choices: ["10", "12", "13", "15"], correct: 2, hint: "l=√(r²+h²)=√(25+144).", explain: "13." },
    ],
  },
  {
    id: "g12-ch8-quiz",
    num: 106,
    chapter: 8,
    title: "Chương 8: Phương pháp tọa độ trong không gian (tiếp) - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vị trí tương đối, góc, khoảng cách trong không gian.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vị trí tương đối và khoảng cách.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Khoảng cách từ M(x₀,y₀,z₀) đến mặt phẳng Ax+By+Cz+D=0 là?", choices: ["|Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)", "|Ax₀+By₀+Cz₀|/√(A²+B²+C²)", "|Ax₀+By₀+Cz₀+D|/(A²+B²+C²)", "|Ax₀+By₀+Cz₀|/(A²+B²+C²)"], correct: 0, hint: "Công thức khoảng cách điểm-mặt phẳng.", explain: "|Ax₀+By₀+Cz₀+D|/√(A²+B²+C²)." },
      { type: "mc", prompt: "Câu 2: Hai mặt phẳng song song khi?", choices: ["VTPT tỷ lệ", "VTCP tỷ lệ", "VTPT vuông góc", "VTCP vuông góc"], correct: 0, hint: "VTPT cùng phương.", explain: "VTPT tỷ lệ." },
      { type: "mc", prompt: "Câu 3: Hai đường thẳng chéo nhau khi?", choices: ["Không cùng mặt phẳng", "Cắt nhau", "Song song", "Cùng phương"], correct: 0, hint: "Chéo nhau = không cùng mặt phẳng, không song song.", explain: "Không cùng mặt phẳng." },
      { type: "mc", prompt: "Câu 4: Góc giữa hai vectơ u và v là?", choices: ["cosθ = (u·v)/(|u||v|)", "cosθ = |u·v|/(|u||v|)", "cosθ = (u+v)/(|u||v|)", "cosθ = (u-v)/(|u||v|)"], correct: 0, hint: "Công thức góc giữa hai vectơ.", explain: "cosθ = (u·v)/(|u||v|)." },
      { type: "mc", prompt: "Câu 5: Khoảng cách giữa hai điểm A(x₁,y₁,z₁) và B(x₂,y₂,z₂) là?", choices: ["√[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]", "√[(x₂+x₁)²+(y₂+y₁)²+(z₂+z₁)²]", "[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]", "√[|x₂-x₁|+|y₂-y₁|+|z₂-z₁|]"], correct: 0, hint: "Công thức khoảng cách hai điểm.", explain: "√[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]." },
      { type: "mc", prompt: "Câu 6: Đường thẳng vuông góc mặt phẳng khi?", choices: ["VTCP song song VTPT", "VTCP vuông góc VTPT", "VTCP cùng phương VTCP", "VTCP song song mặt phẳng"], correct: 0, hint: "VTCP // VTPT thì đường thẳng ⊥ mặt phẳng.", explain: "VTCP song song VTPT." },
      { type: "mc", prompt: "Câu 7: Hai mặt phẳng vuông góc khi?", choices: ["VTPT vuông góc", "VTPT song song", "VTCP vuông góc", "VTCP song song"], correct: 0, hint: "VTPT vuông góc thì mặt phẳng vuông góc.", explain: "VTPT vuông góc." },
      { type: "mc", prompt: "Câu 8: Giao tuyến của hai mặt phẳng cắt nhau là?", choices: ["Đường thẳng", "Đoạn thẳng", "Tia", "Điểm"], correct: 0, hint: "Hai mặt phẳng cắt nhau tạo giao tuyến là đường thẳng.", explain: "Đường thẳng." },
    ],
  },

  {
    id: "g12-ch2-quiz",
    num: 99,
    chapter: 2,
    title: "Chương 2: Hàm số lũy thừa - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập lũy thừa, mũ, logarit.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về lũy thừa và logarit.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: 2³ × 2⁴ =", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "a^m × a^n = a^{m+n} = 2⁷.", explain: "2⁷." },
      { type: "mc", prompt: "Câu 2: (3²)⁴ =", choices: ["3⁸", "3⁶", "9⁴", "6⁴"], correct: 0, hint: "(a^m)^n = a^{m·n} = 3⁸.", explain: "3⁸." },
      { type: "mc", prompt: "Câu 3: log₂(8) =", choices: ["3", "2", "4", "1/2"], correct: 0, hint: "2³ = 8 → log₂(8) = 3.", explain: "3." },
      { type: "mc", prompt: "Câu 4: log₁₀(100) =", choices: ["2", "10", "100", "1/2"], correct: 0, hint: "10² = 100 → log₁₀(100) = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 5: e^{ln(5)} =", choices: ["5", "e", "ln(5)", "1"], correct: 0, hint: "e^{ln a} = a.", explain: "5." },
      { type: "mc", prompt: "Câu 6: 4^{log₂(3)} =", choices: ["9", "3", "6", "12"], correct: 0, hint: "4 = 2² → (2²)^{log₂(3)} = 2^{2log₂(3)} = 3² = 9.", explain: "9." },
      { type: "mc", prompt: "Câu 7: Đạo hàm của y = e^x là?", choices: ["e^x", "xe^{x-1}", "ln(x)", "1"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x." },
      { type: "mc", prompt: "Câu 8: Đạo hàm của y = log₁₀(x) là?", choices: ["1/(x ln 10)", "1/x", "ln(10)/x", "x ln 10"], correct: 0, hint: "(log_a x)' = 1/(x ln a).", explain: "1/(x ln 10)." },
    ],
  },
  {
    id: "g12-ch3-quiz",
    num: 100,
    chapter: 3,
    title: "Chương 3: Nguyên hàm - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập nguyên hàm, tích phân.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về nguyên hàm và tích phân.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: ∫2x dx =", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "(x²)' = 2x.", explain: "x² + C." },
      { type: "mc", prompt: "Câu 2: ∫sin(x) dx =", choices: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "-sin(x) + C"], correct: 0, hint: "(-cos x)' = sin x.", explain: "-cos(x) + C." },
      { type: "mc", prompt: "Câu 3: ∫e^x dx =", choices: ["e^x + C", "xe^{x-1} + C", "ln|x| + C", "1 + C"], correct: 0, hint: "(e^x)' = e^x.", explain: "e^x + C." },
      { type: "mc", prompt: "Câu 4: ∫₁² 2x dx =", choices: ["3", "4", "2", "1"], correct: 0, hint: "∫2x dx = x², từ 1 đến 2: 4 - 1 = 3.", explain: "3." },
      { type: "mc", prompt: "Câu 5: ∫(x² + 2x) dx =", choices: ["x³/3 + x² + C", "x³ + x² + C", "x³/3 + 2x + C", "x² + 2 + C"], correct: 0, hint: "∫x² dx = x³/3, ∫2x dx = x².", explain: "x³/3 + x² + C." },
      { type: "mc", prompt: "Câu 6: ∫dx/x =", choices: ["ln|x| + C", "1/x + C", "ln(x) + C", "x ln x + C"], correct: 0, hint: "(ln|x|)' = 1/x.", explain: "ln|x| + C." },
      { type: "mc", prompt: "Câu 7: ∫cos(2x) dx =", choices: ["(1/2)sin(2x) + C", "sin(2x) + C", "2sin(2x) + C", "-(1/2)sin(2x) + C"], correct: 0, hint: "(1/2)sin(2x)' = cos(2x).", explain: "(1/2)sin(2x) + C." },
      { type: "mc", prompt: "Câu 8: Diện tích hình phẳng giới hạn y=x², x=0, x=1 là?", choices: ["1/3", "1", "2/3", "1/2"], correct: 0, hint: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3.", explain: "1/3." },
    ],
  },
  {
    id: "g12-ch4-quiz",
    num: 101,
    chapter: 4,
    title: "Chương 4: Số phức - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số phức, phép toán, biểu diễn.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số phức.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: i² =", choices: ["-1", "1", "i", "-i"], correct: 0, hint: "i² = -1.", explain: "-1." },
      { type: "mc", prompt: "Câu 2: (2 + 3i) + (1 - 2i) =", choices: ["3 + i", "3 + 5i", "1 + i", "3 - i"], correct: 0, hint: "(2+1) + (3i-2i) = 3 + i.", explain: "3 + i." },
      { type: "mc", prompt: "Câu 3: (3 + 2i)(3 - 2i) =", choices: ["13", "9 - 4i", "9 + 4i", "5"], correct: 0, hint: "(a+bi)(a-bi) = a² + b² = 9 + 4 = 13.", explain: "13." },
      { type: "mc", prompt: "Câu 4: |2 + 3i| =", choices: ["√13", "√5", "13", "5"], correct: 0, hint: "|a+bi| = √(a²+b²) = √(4+9) = √13.", explain: "√13." },
      { type: "mc", prompt: "Câu 5: Số phức liên hợp của 1 - 2i là?", choices: ["1 + 2i", "-1 + 2i", "1 - 2i", "-1 - 2i"], correct: 0, hint: "Đổi dấu phần ảo.", explain: "1 + 2i." },
      { type: "mc", prompt: "Câu 6: (1 + i)² =", choices: ["2i", "1 + 2i", "2", "1 - 2i"], correct: 0, hint: "1 + 2i + i² = 1 + 2i - 1 = 2i.", explain: "2i." },
      { type: "mc", prompt: "Câu 7: z = 3 - 4i có tọa độ trên mặt phẳng phức là?", choices: ["(3,-4)", "(3,4)", "(-3,4)", "(-3,-4)"], correct: 0, hint: "Trục hoành: phần thực, trục tung: phần ảo.", explain: "(3,-4)." },
      { type: "mc", prompt: "Câu 8: z·\overline{z} =", choices: ["|z|²", "0", "1", "2|z|"], correct: 0, hint: "z·\overline{z} = a² + b² = |z|².", explain: "|z|²." },
    ],
  },
  {
    id: "g12-ch5-quiz",
    num: 102,
    chapter: 5,
    title: "Chương 5: Thể tích khối đa diện - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập thể tích hộp, chóp, lăng trụ.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về thể tích.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Thể tích hộp chữ nhật a×b×c là?", choices: ["abc", "2(a+b+c)", "ab+bc+ca", "a+b+c"], correct: 0, hint: "V = chiều dài × chiều rộng × chiều cao.", explain: "abc." },
      { type: "mc", prompt: "Câu 2: Thể tích hình chóp có diện tích đáy S, chiều cao h là?", choices: ["(1/3)Sh", "Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = 1/3 × S × h.", explain: "(1/3)Sh." },
      { type: "mc", prompt: "Câu 3: Thể tích lăng trụ có diện tích đáy S, chiều cao h là?", choices: ["Sh", "(1/3)Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = S × h.", explain: "Sh." },
      { type: "mc", prompt: "Câu 4: Hình lập phương cạnh a có thể tích là?", choices: ["a³", "3a²", "6a²", "a²"], correct: 0, hint: "V = a × a × a = a³.", explain: "a³." },
      { type: "mc", prompt: "Câu 5: Thể tích khối cầu bán kính R là?", choices: ["(4/3)πR³", "4πR²", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
      { type: "mc", prompt: "Câu 6: Hình chóp đều có đáy là hình vuông cạnh a, chiều cao h. Thể tích là?", choices: ["(1/3)a²h", "(1/3)ah²", "a²h", "ah"], correct: 0, hint: "S đáy = a², V = 1/3 × a² × h.", explain: "(1/3)a²h." },
      { type: "mc", prompt: "Câu 7: Hai khối chóp có cùng diện tích đáy, chiều cao gấp đôi thì thể tích:", choices: ["Gấp đôi", "Gấp bốn", "Bằng nhau", "Giảm một nửa"], correct: 0, hint: "V tỉ lệ với h.", explain: "Gấp đôi." },
      { type: "mc", prompt: "Câu 8: Thể tích tứ diện đều cạnh a là?", choices: ["(√2/12)a³", "(√3/12)a³", "(1/3)a³", "(1/6)a³"], correct: 0, hint: "Công thức chuẩn: V = √2/12 × a³.", explain: "(√2/12)a³." },
    ],
  },
  {
    id: "g12-ch6-quiz",
    num: 103,
    chapter: 6,
    title: "Chương 6: Mặt nón - Mặt trụ - Mặt cầu - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập diện tích xung quanh, thể tích mặt tròn xoay.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về mặt tròn xoay.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Diện tích xung quanh hình nón (bán kính r, đường sinh l) là?", choices: ["πrl", "πr²l", "2πrl", "πr²"], correct: 0, hint: "S_xq = π × r × l.", explain: "πrl." },
      { type: "mc", prompt: "Câu 2: Thể tích hình nón (bán kính r, chiều cao h) là?", choices: ["(1/3)πr²h", "πr²h", "(2/3)πr²h", "2πr²h"], correct: 0, hint: "V = 1/3 × π × r² × h.", explain: "(1/3)πr²h." },
      { type: "mc", prompt: "Câu 3: Diện tích xung quanh hình trụ (bán kính r, chiều cao h) là?", choices: ["2πrh", "πrh", "2πr²h", "πr²h"], correct: 0, hint: "S_xq = 2 × π × r × h.", explain: "2πrh." },
      { type: "mc", prompt: "Câu 4: Thể tích hình trụ (bán kính r, chiều cao h) là?", choices: ["πr²h", "2πr²h", "(1/3)πr²h", "4πr²h"], correct: 0, hint: "V = π × r² × h.", explain: "πr²h." },
      { type: "mc", prompt: "Câu 5: Diện tích mặt cầu bán kính R là?", choices: ["4πR²", "2πR²", "πR²", "(4/3)πR³"], correct: 0, hint: "S = 4 × π × R².", explain: "4πR²." },
      { type: "mc", prompt: "Câu 6: Thể tích hình cầu bán kính R là?", choices: ["(4/3)πR³", "4πR³", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
      { type: "mc", prompt: "Câu 7: Hình nón có bán kính 3, đường sinh 5. Diện tích xung quanh là?", choices: ["15π", "9π", "25π", "30π"], correct: 0, hint: "S_xq = π × 3 × 5 = 15π.", explain: "15π." },
      { type: "mc", prompt: "Câu 8: Hình trụ có bán kính 2, chiều cao 3. Thể tích là?", choices: ["12π", "6π", "4π", "8π"], correct: 0, hint: "V = π × 2² × 3 = 12π.", explain: "12π." },
    ],
  },
  {
    id: "g12-ch7-quiz",
    num: 104,
    chapter: 7,
    title: "Chương 7: Phương pháp tọa độ trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vector, phương trình mặt phẳng, đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB với A(1,2,3), B(4,5,6) là?", choices: ["(3,3,3)", "(5,7,9)", "(-3,-3,-3)", "(4,5,6)"], correct: 0, hint: "AB = (4-1, 5-2, 6-3) = (3,3,3).", explain: "(3,3,3)." },
      { type: "mc", prompt: "Câu 2: Khoảng cách giữa A(0,0,0) và B(3,4,12) là?", choices: ["13", "12", "5", "10"], correct: 0, hint: "AB = √(9+16+144) = √169 = 13.", explain: "13." },
      { type: "mc", prompt: "Câu 3: Tích vô hướng AB·AC với A(0,0,0), B(1,2,3), C(4,5,6) là?", choices: ["32", "28", "24", "20"], correct: 0, hint: "AB=(1,2,3), AC=(4,5,6). AB·AC = 4+10+18 = 32.", explain: "32." },
      { type: "mc", prompt: "Câu 4: Phương trình mặt cầu tâm I(1,2,3), bán kính 5 là?", choices: ["(x-1)²+(y-2)²+(z-3)²=25", "(x+1)²+(y+2)²+(z+3)²=25", "(x-1)²+(y-2)²+(z-3)²=5", "(x-1)²+(y-2)²+(z-3)²=10"], correct: 0, hint: "(x-x₀)²+(y-y₀)²+(z-z₀)²=R².", explain: "(x-1)²+(y-2)²+(z-3)²=25." },
      { type: "mc", prompt: "Câu 5: Mặt phẳng (P): 2x - 3y + 6z - 14 = 0 có vector pháp tuyến là?", choices: ["(2,-3,6)", "(2,3,6)", "(-2,3,-6)", "(1,-3/2,3)"], correct: 0, hint: "n = (A,B,C) từ Ax+By+Cz+D=0.", explain: "(2,-3,6)." },
      { type: "mc", prompt: "Câu 6: Đường thẳng qua A(1,2,3) và có vector chỉ phương u=(4,5,6) có phương trình là?", choices: ["(x-1)/4 = (y-2)/5 = (z-3)/6", "(x+1)/4 = (y+2)/5 = (z+3)/6", "(x-4)/1 = (y-5)/2 = (z-6)/3", "4x+5y+6z=0"], correct: 0, hint: "(x-x₀)/a = (y-y₀)/b = (z-z₀)/c.", explain: "(x-1)/4 = (y-2)/5 = (z-3)/6." },
      { type: "mc", prompt: "Câu 7: Hai vector (1,2,3) và (4,5,6) vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Cùng phương", "Độ dài bằng nhau"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 8: Khoảng cách từ điểm A(1,2,3) đến mặt phẳng x + y + z - 6 = 0 là?", choices: ["0", "√3", "3", "6"], correct: 0, hint: "d = |1+2+3-6|/√(1+1+1) = 0/√3 = 0.", explain: "0." },
    ],
  },
  {
    id: "g12-ch8-quiz",
    num: 105,
    chapter: 8,
    title: "Chương 8: Ôn tập - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tổng hợp các chương.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm tổng hợp.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Đạo hàm của y = x³ - 3x² + 2 là?", choices: ["3x² - 6x", "3x² - 3x", "x⁴ - 3x³ + 2x", "3x² - 6x + 2"], correct: 0, hint: "(x³)'=3x², (3x²)'=6x.", explain: "3x² - 6x." },
      { type: "mc", prompt: "Câu 2: Nguyên hàm của y = 2x + 3 là?", choices: ["x² + 3x + C", "2x² + 3x + C", "x² + 3x", "2x² + 3"], correct: 0, hint: "∫2x dx = x², ∫3 dx = 3x.", explain: "x² + 3x + C." },
      { type: "mc", prompt: "Câu 3: Số phức z = 3 - 4i có môđun là?", choices: ["5", "4", "3", "7"], correct: 0, hint: "|z| = √(9+16) = 5.", explain: "5." },
      { type: "mc", prompt: "Câu 4: Thể tích hình chóp tứ giác đều cạnh a, chiều cao h là?", choices: ["(1/3)a²h", "(1/3)ah²", "a²h", "ah"], correct: 0, hint: "S đáy = a², V = 1/3 × a² × h.", explain: "(1/3)a²h." },
      { type: "mc", prompt: "Câu 5: Phương trình mặt cầu tâm (1,-2,3) bán kính 2 là?", choices: ["(x-1)²+(y+2)²+(z-3)²=4", "(x+1)²+(y-2)²+(z+3)²=4", "(x-1)²+(y-2)²+(z-3)²=4", "(x-1)²+(y+2)²+(z-3)²=2"], correct: 0, hint: "R² = 4.", explain: "(x-1)²+(y+2)²+(z-3)²=4." },
      { type: "mc", prompt: "Câu 6: Diện tích xung quanh hình nón bán kính 3, đường sinh 5 là?", choices: ["15π", "9π", "25π", "30π"], correct: 0, hint: "S_xq = π × 3 × 5 = 15π.", explain: "15π." },
      { type: "mc", prompt: "Câu 7: Tích phân ∫₀² (2x + 1) dx =", choices: ["4", "6", "8", "2"], correct: 0, hint: "[x² + x]₀² = 4 + 2 = 6.", explain: "6." },
      { type: "mc", prompt: "Câu 8: Phương trình tiếp tuyến của y = x² tại x = 1 là?", choices: ["y = 2x - 1", "y = x + 1", "y = 2x + 1", "y = x - 1"], correct: 0, hint: "y' = 2x = 2 tại x=1, y(1)=1. y-1=2(x-1) → y=2x-1.", explain: "y = 2x - 1." },
    ],
  },

  {
    id: "g12-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Applications of derivatives",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Applications of derivatives.",
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
      { type: "mc", prompt: "Câu 1: Hàm số y = x³ - 3x đồng biến trên khoảng nào?", choices: ["(-∞,-1) và (1,∞)", "(-1,1)", "(-∞,∞)", "không khoảng nào"], correct: 0, hint: "y' = 3x² - 3 = 3(x²-1). y'>0 khi |x|>1.", explain: "(-∞,-1) và (1,∞)." },
      { type: "mc", prompt: "Câu 2: Số cực trị của y = x⁴ - 2x² là?", choices: ["2", "1", "3", "0"], correct: 0, hint: "y' = 4x³ - 4x = 4x(x²-1). 3 nghiệm → 3 cực trị.", explain: "2." },
      { type: "text", prompt: "Tìm GTNN của y = x² + 4/x trên (0,∞).", answer: "6", accept: ["6"], hint: "y' = 2x - 4/x² = 0 → x=√2. y(√2) = 2 + 4/√2 = 6.", explain: "6." },
      { type: "mc", prompt: "Câu 4: Tiệm cận đứng của y = (2x+1)/(x-3) là?", choices: ["x=3", "x=-3", "y=2", "y=-2"], correct: 0, hint: "Mẫu = 0 → x=3.", explain: "x=3." },
    ],
  },
  {
    id: "g12-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Powers, Exponential, Logarithm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Powers, Exponential, Logarithm.",
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
      { type: "mc", prompt: "Câu 1: 2³ × 2⁴ =", choices: ["2⁷", "2¹²", "4⁷", "4¹²"], correct: 0, hint: "a^m × a^n = a^{m+n} = 2⁷.", explain: "2⁷." },
      { type: "mc", prompt: "Câu 2: log₂(32) =", choices: ["5", "4", "6", "3"], correct: 0, hint: "2⁵ = 32.", explain: "5." },
      { type: "text", prompt: "Giải phương trình 3^{x+1} = 27.", answer: "2", accept: ["2"], hint: "27 = 3³ → x+1=3 → x=2.", explain: "2." },
      { type: "mc", prompt: "Câu 4: Đạo hàm của y = e^{2x} là?", choices: ["2e^{2x}", "e^{2x}", "2e^x", "e^x"], correct: 0, hint: "(e^{u})' = u'e^u.", explain: "2e^{2x}." },
    ],
  },
  {
    id: "g12-exam-ch3",
    num: 103,
    chapter: 3,
    title: "Đề kiểm tra Chương 3: Integrals",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Integrals.",
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
      { type: "mc", prompt: "Câu 1: ∫2x dx =", choices: ["x² + C", "2x² + C", "x²", "2x + C"], correct: 0, hint: "(x²)' = 2x.", explain: "x² + C." },
      { type: "mc", prompt: "Câu 2: ∫₁² x dx =", choices: ["3/2", "2", "1", "5/2"], correct: 0, hint: "[x²/2]₁² = 2 - 1/2 = 3/2.", explain: "3/2." },
      { type: "text", prompt: "Tính diện tích hình phẳng giới hạn y=x², x=0, x=1.", answer: "1/3", accept: ["1/3", "0.333"], hint: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3.", explain: "1/3." },
      { type: "mc", prompt: "Câu 4: ∫sin(2x) dx =", choices: ["-(1/2)cos(2x) + C", "(1/2)cos(2x) + C", "-cos(2x) + C", "cos(2x) + C"], correct: 0, hint: "(-1/2 cos(2x))' = sin(2x).", explain: "-(1/2)cos(2x) + C." },
    ],
  },

  {
    id: "g12-ch4-quiz",
    num: 106,
    chapter: 4,
    title: "Chương 4: Số phức - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số phức, phép toán, biểu diễn.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số phức.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: i² =", choices: ["-1", "1", "i", "-i"], correct: 0, hint: "i² = -1.", explain: "-1." },
      { type: "mc", prompt: "Câu 2: (2 + 3i) + (1 - 2i) =", choices: ["3 + i", "3 + 5i", "1 + i", "3 - i"], correct: 0, hint: "(2+1) + (3i-2i) = 3 + i.", explain: "3 + i." },
      { type: "text", prompt: "Tính (3 + 2i)(3 - 2i).", answer: "13", accept: ["13"], hint: "(a+bi)(a-bi) = a² + b² = 9 + 4 = 13.", explain: "13." },
      { type: "mc", prompt: "Câu 4: |2 + 3i| =", choices: ["√13", "√5", "13", "5"], correct: 0, hint: "|a+bi| = √(a²+b²) = √(4+9) = √13.", explain: "√13." },
      { type: "mc", prompt: "Câu 5: Số phức liên hợp của 1 - 2i là?", choices: ["1 + 2i", "-1 + 2i", "1 - 2i", "-1 - 2i"], correct: 0, hint: "Đổi dấu phần ảo.", explain: "1 + 2i." },
      { type: "mc", prompt: "Câu 6: (1 + i)² =", choices: ["2i", "1 + 2i", "2", "1 - 2i"], correct: 0, hint: "1 + 2i + i² = 1 + 2i - 1 = 2i.", explain: "2i." },
      { type: "mc", prompt: "Câu 7: z = 3 - 4i có tọa độ trên mặt phẳng phức là?", choices: ["(3,-4)", "(3,4)", "(-3,4)", "(-3,-4)"], correct: 0, hint: "Trục hoành: phần thực, trục tung: phần ảo.", explain: "(3,-4)." },
      { type: "mc", prompt: "Câu 8: z·\overline{z} =", choices: ["|z|²", "0", "1", "2|z|"], correct: 0, hint: "z·\overline{z} = a² + b² = |z|².", explain: "|z|²." },
    ],
  },

  {
    id: "g12-ch5-quiz",
    num: 107,
    chapter: 5,
    title: "Chương 5: Thể tích khối đa diện - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập thể tích hộp, chóp, lăng trụ.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về thể tích.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Thể tích hộp chữ nhật a×b×c là?", choices: ["abc", "2(a+b+c)", "ab+bc+ca", "a+b+c"], correct: 0, hint: "V = chiều dài × chiều rộng × chiều cao.", explain: "abc." },
      { type: "mc", prompt: "Câu 2: Thể tích hình chóp có diện tích đáy S, chiều cao h là?", choices: ["(1/3)Sh", "Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = 1/3 × S × h.", explain: "(1/3)Sh." },
      { type: "text", prompt: "Tính thể tích hình lập phương cạnh 3cm.", answer: "27cm³", accept: ["27cm³", "27"], hint: "V = 3³ = 27cm³.", explain: "27cm³." },
      { type: "mc", prompt: "Câu 4: Thể tích lăng trụ có diện tích đáy S, chiều cao h là?", choices: ["Sh", "(1/3)Sh", "(1/2)Sh", "2Sh"], correct: 0, hint: "V = S × h.", explain: "Sh." },
      { type: "mc", prompt: "Câu 5: Hình chóp đều có đáy là hình vuông cạnh a, chiều cao h. Thể tích là?", choices: ["(1/3)a²h", "(1/3)ah²", "a²h", "ah"], correct: 0, hint: "S đáy = a², V = 1/3 × a² × h.", explain: "(1/3)a²h." },
      { type: "mc", prompt: "Câu 6: Hai khối chóp có cùng diện tích đáy, chiều cao gấp đôi thì thể tích:", choices: ["Gấp đôi", "Gấp bốn", "Bằng nhau", "Giảm một nửa"], correct: 0, hint: "V tỉ lệ với h.", explain: "Gấp đôi." },
      { type: "mc", prompt: "Câu 7: Thể tích tứ diện đều cạnh a là?", choices: ["(√2/12)a³", "(√3/12)a³", "(1/3)a³", "(1/6)a³"], correct: 0, hint: "Công thức chuẩn: V = √2/12 × a³.", explain: "(√2/12)a³." },
      { type: "mc", prompt: "Câu 8: Thể tích khối cầu bán kính R là?", choices: ["(4/3)πR³", "4πR²", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
    ],
  },

  {
    id: "g12-ch6-quiz",
    num: 108,
    chapter: 6,
    title: "Chương 6: Mặt nón - Mặt trụ - Mặt cầu - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập diện tích xung quanh, thể tích mặt tròn xoay.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về mặt tròn xoay.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Diện tích xung quanh hình nón (bán kính r, đường sinh l) là?", choices: ["πrl", "πr²l", "2πrl", "πr²"], correct: 0, hint: "S_xq = π × r × l.", explain: "πrl." },
      { type: "mc", prompt: "Câu 2: Thể tích hình nón (bán kính r, chiều cao h) là?", choices: ["(1/3)πr²h", "πr²h", "(2/3)πr²h", "2πr²h"], correct: 0, hint: "V = 1/3 × π × r² × h.", explain: "(1/3)πr²h." },
      { type: "text", prompt: "Tính diện tích xung quanh hình trụ bán kính 3cm, chiều cao 5cm.", answer: "30πcm²", accept: ["30πcm²", "30π"], hint: "S_xq = 2πrh = 2π×3×5 = 30πcm².", explain: "30πcm²." },
      { type: "mc", prompt: "Câu 4: Thể tích hình trụ (bán kính r, chiều cao h) là?", choices: ["πr²h", "2πr²h", "(1/3)πr²h", "4πr²h"], correct: 0, hint: "V = π × r² × h.", explain: "πr²h." },
      { type: "mc", prompt: "Câu 5: Diện tích mặt cầu bán kính R là?", choices: ["4πR²", "2πR²", "πR²", "(4/3)πR³"], correct: 0, hint: "S = 4 × π × R².", explain: "4πR²." },
      { type: "mc", prompt: "Câu 6: Thể tích hình cầu bán kính R là?", choices: ["(4/3)πR³", "4πR³", "(2/3)πR³", "πR³"], correct: 0, hint: "V = 4/3 × π × R³.", explain: "(4/3)πR³." },
      { type: "mc", prompt: "Câu 7: Hình nón có bán kính 4, đường sinh 5. Diện tích xung quanh là?", choices: ["20π", "16π", "25π", "40π"], correct: 0, hint: "S_xq = π × 4 × 5 = 20π.", explain: "20π." },
      { type: "mc", prompt: "Câu 8: Hình trụ có bán kính 2, chiều cao 3. Thể tích là?", choices: ["12π", "6π", "4π", "8π"], correct: 0, hint: "V = π × 2² × 3 = 12π.", explain: "12π." },
    ],
  },

  {
    id: "g12-ch7-quiz",
    num: 109,
    chapter: 7,
    title: "Chương 7: Phương pháp tọa độ trong không gian - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vector, phương trình mặt phẳng, đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong không gian.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB với A(1,2,3), B(4,5,6) là?", choices: ["(3,3,3)", "(5,7,9)", "(-3,-3,-3)", "(4,5,6)"], correct: 0, hint: "AB = (4-1, 5-2, 6-3) = (3,3,3).", explain: "(3,3,3)." },
      { type: "mc", prompt: "Câu 2: Khoảng cách giữa A(0,0,0) và B(3,4,12) là?", choices: ["13", "12", "5", "10"], correct: 0, hint: "AB = √(9+16+144) = √169 = 13.", explain: "13." },
      { type: "text", prompt: "Tính tích vô hướng AB·AC với A(0,0,0), B(1,2,3), C(4,5,6).", answer: "32", accept: ["32"], hint: "AB=(1,2,3), AC=(4,5,6). AB·AC = 4+10+18 = 32.", explain: "32." },
      { type: "mc", prompt: "Câu 4: Phương trình mặt cầu tâm I(1,2,3), bán kính 5 là?", choices: ["(x-1)²+(y-2)²+(z-3)²=25", "(x+1)²+(y+2)²+(z+3)²=25", "(x-1)²+(y-2)²+(z-3)²=5", "(x-1)²+(y-2)²+(z-3)²=10"], correct: 0, hint: "(x-x₀)²+(y-y₀)²+(z-z₀)²=R².", explain: "(x-1)²+(y-2)²+(z-3)²=25." },
      { type: "mc", prompt: "Câu 5: Mặt phẳng (P): 2x - 3y + 6z - 14 = 0 có vector pháp tuyến là?", choices: ["(2,-3,6)", "(2,3,6)", "(-2,3,-6)", "(1,-3/2,3)"], correct: 0, hint: "n = (A,B,C) từ Ax+By+Cz+D=0.", explain: "(2,-3,6)." },
      { type: "mc", prompt: "Câu 6: Đường thẳng qua A(1,2,3) và có vector chỉ phương u=(4,5,6) có phương trình là?", choices: ["(x-1)/4 = (y-2)/5 = (z-3)/6", "(x+1)/4 = (y+2)/5 = (z+3)/6", "(x-4)/1 = (y-5)/2 = (z-6)/3", "4x+5y+6z=0"], correct: 0, hint: "(x-x₀)/a = (y-y₀)/b = (z-z₀)/c.", explain: "(x-1)/4 = (y-2)/5 = (z-3)/6." },
      { type: "mc", prompt: "Câu 7: Hai vector (1,2,3) và (4,5,6) vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Cùng phương", "Độ dài bằng nhau"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 8: Khoảng cách từ điểm A(1,2,3) đến mặt phẳng x + y + z - 6 = 0 là?", choices: ["0", "√3", "3", "6"], correct: 0, hint: "d = |1+2+3-6|/√(1+1+1) = 0/√3 = 0.", explain: "0." },
    ],
  },
];

(function attachGrade12() {
  if (typeof COURSES === "undefined") return;
  const course = COURSES.find((c) => c.id === "12");
  if (!course) return;
  course.subtitle = "Tập 1 & Tập 2 · Kết nối tri thức với cuộc sống";
  course.blurb = "Chương I–VIII, Bài 1–23 của cả hai tập.";
  course.chapters = G12_CHAPTERS;
  course.lessons = G12_LESSONS;
})();
