/**
 * Grade 10 Math lessons
 * Algebra and Geometry topics
 */

const G10_CHAPTERS = [
  { id: 1, title: "Mệnh đề. Tập hợp" },
  { id: 2, title: "Hàm số bậc hai" },
  { id: 3, title: "Hệ phương trình bậc nhất hai ẩn" },
  { id: 4, title: "Đại số vectơ" },
  { id: 5, title: "Tích vô hướng của hai vectơ" },
  { id: 6, title: "Phương pháp tọa độ trong mặt phẳng" },
  { id: 7, title: "Cung và góc lượng giác. Công thức lượng giác" },
  { id: 8, title: "Thống kê" },
  { id: 9, title: "Số gần đúng và sai số" },
  { id: 10, title: "Xác suất của biến cố" },

  {
    id: "g10-ch2-quiz",
    num: 99,
    chapter: 2,
    title: "Chương 2: Hàm số bậc nhất và bậc hai - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập hàm số bậc nhất y = ax + b và hàm số bậc hai y = ax².",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về hàm số bậc nhất và bậc hai.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = 3x - 2 có hệ số góc là?", choices: ["3", "-2", "2", "-3"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "3." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -2x + 1 cắt trục Oy tại điểm?", choices: ["(0,1)", "(1,0)", "(0,-1)", "(-1,0)"], correct: 0, hint: "x=0 → y=1.", explain: "(0,1)." },
      { type: "mc", prompt: "Câu 3: Hai đường thẳng y = 2x + 1 và y = 2x - 3:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
      { type: "mc", prompt: "Câu 4: Hàm số y = -x + 5 là:", choices: ["Nghịch biến", "Đồng biến", "Không đổi", "Không xác định"], correct: 0, hint: "a = -1 < 0 nên nghịch biến.", explain: "Nghịch biến." },
      { type: "mc", prompt: "Câu 5: Đường thẳng y = ax + 3 đi qua (1,5) thì a =", choices: ["2", "3", "4", "5"], correct: 0, hint: "5 = a·1 + 3 → a = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 6: Đồ thị hàm số y = x² là:", choices: ["Parabol", "Đường thẳng", "Hyperbol", "Elip"], correct: 0, hint: "y = x² là parabol qua gốc.", explain: "Parabol." },
      { type: "mc", prompt: "Câu 7: Hàm số y = 2x² có giá trị nhỏ nhất là?", choices: ["0", "2", "1", "4"], correct: 0, hint: "x² ≥ 0 → 2x² ≥ 0.", explain: "0." },
      { type: "mc", prompt: "Câu 8: Đỉnh của parabol y = x² - 4x + 3 là?", choices: ["(2,-1)", "(2,1)", "(-2,-1)", "(-2,1)"], correct: 0, hint: "x = -b/(2a) = 4/2 = 2, y = 4 - 8 + 3 = -1.", explain: "(2,-1)." },
    ],
  },
  {
    id: "g10-ch3-quiz",
    num: 100,
    chapter: 3,
    title: "Chương 3: Phương trình và hệ phương trình - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phương trình bậc nhất, bậc hai, hệ phương trình.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phương trình và hệ phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phương trình 2x + 3 = 7 có nghiệm là?", choices: ["2", "3", "4", "5"], correct: 0, hint: "2x = 4 → x = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 2: Phương trình x² - 5x + 6 = 0 có nghiệm là?", choices: ["2 và 3", "1 và 6", "-2 và -3", "4 và 1"], correct: 0, hint: "(x-2)(x-3)=0 → x=2,3.", explain: "2 và 3." },
      { type: "mc", prompt: "Câu 3: Hệ phương trình x + y = 5, x - y = 1 có nghiệm là?", choices: ["(3,2)", "(2,3)", "(4,1)", "(1,4)"], correct: 0, hint: "Cộng hai phương trình: 2x = 6 → x=3, y=2.", explain: "(3,2)." },
      { type: "mc", prompt: "Câu 4: Phương trình x² + 4x + 4 = 0 có nghiệm kép là?", choices: ["-2", "2", "4", "-4"], correct: 0, hint: "(x+2)²=0 → x=-2.", explain: "-2." },
      { type: "mc", prompt: "Câu 5: Phương trình x² - 9 = 0 có nghiệm là?", choices: ["3 và -3", "3", "-3", "9"], correct: 0, hint: "x²=9 → x=±3.", explain: "3 và -3." },
      { type: "mc", prompt: "Câu 6: Hệ phương trình 2x + y = 5, 4x + 2y = 10 là:", choices: ["Vô số nghiệm", "Vô nghiệm", "Nghiệm duy nhất", "Không xác định"], correct: 0, hint: "Hai phương trình tương đương.", explain: "Vô số nghiệm." },
      { type: "mc", prompt: "Câu 7: Phương trình x² + 1 = 0 có nghiệm thực không?", choices: ["Không có", "Có một nghiệm", "Có hai nghiệm", "Vô số nghiệm"], correct: 0, hint: "x² = -1 vô nghiệm thực.", explain: "Không có." },
      { type: "mc", prompt: "Câu 8: Tổng hai nghiệm của phương trình x² - 5x + 6 = 0 là?", choices: ["5", "-5", "6", "-6"], correct: 0, hint: "Tổng = -b/a = 5.", explain: "5." },
    ],
  },
  {
    id: "g10-ch4-quiz",
    num: 101,
    chapter: 4,
    title: "Chương 4: Vectơ - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vectơ, tổng, hiệu, tích với số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vectơ.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB có điểm đầu là:", choices: ["A", "B", "Trung điểm AB", "Không xác định"], correct: 0, hint: "AB: A đầu, B cuối.", explain: "A." },
      { type: "mc", prompt: "Câu 2: Vector AB + Vector BA =", choices: ["Vector 0", "Vector AA", "Vector BB", "2·Vector AB"], correct: 0, hint: "AB + BA = AB - AB = 0.", explain: "Vector 0." },
      { type: "mc", prompt: "Câu 3: 2·Vector AB =", choices: ["Vector cùng hướng AB, độ dài gấp đôi", "Vector ngược hướng AB, độ dài gấp đôi", "Vector cùng hướng AB, độ dài bằng AB", "Vector 0"], correct: 0, hint: "k·AB: cùng hướng nếu k>0, |k| lần độ dài.", explain: "Vector cùng hướng AB, độ dài gấp đôi." },
      { type: "mc", prompt: "Câu 4: Vector AB - Vector AC =", choices: ["Vector CB", "Vector BC", "Vector AC", "Vector BA"], correct: 0, hint: "AB - AC = AB + CA = CB.", explain: "Vector CB." },
      { type: "mc", prompt: "Câu 5: Trung điểm I của AB thì:", choices: ["Vector IA + Vector IB = 0", "Vector IA = Vector IB", "Vector AB = 2·Vector AI", "Cả A và C"], correct: 0, hint: "IA = -IB → IA + IB = 0.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Ba điểm A, B, C thẳng hàng khi:", choices: ["Vector AB và Vector AC cùng phương", "Vector AB = Vector AC", "AB = AC", "Góc BAC = 90°"], correct: 0, hint: "Cùng phương ↔ cùng đường thẳng.", explain: "Vector AB và Vector AC cùng phương." },
      { type: "mc", prompt: "Câu 7: Tam giác ABC, G là trọng tâm thì:", choices: ["Vector GA + Vector GB + Vector GC = 0", "Vector GA = Vector GB = Vector GC", "G là trung điểm AB", "G là trực tâm"], correct: 0, hint: "GA + GB + GC = 0 với G trọng tâm.", explain: "Vector GA + Vector GB + Vector GC = 0." },
      { type: "mc", prompt: "Câu 8: Vector 0 là vector có:", choices: ["Độ dài bằng 0", "Độ dài bằng 1", "Hướng tùy ý", "Không xác định"], correct: 0, hint: "Vector 0 có độ dài 0.", explain: "Độ dài bằng 0." },
    ],
  },
  {
    id: "g10-ch5-quiz",
    num: 102,
    chapter: 5,
    title: "Chương 5: Tích vô hướng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tích vô hướng, độ dài, góc giữa hai vector.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tích vô hướng.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Tích vô hướng AB·AC =", choices: ["|AB|·|AC|·cos(angle BAC)", "|AB|·|AC|·sin(angle BAC)", "|AB| + |AC|", "|AB| - |AC|"], correct: 0, hint: "a·b = |a||b|cos(a,b).", explain: "|AB|·|AC|·cos(angle BAC)." },
      { type: "mc", prompt: "Câu 2: Hai vector vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Độ dài bằng nhau", "Cùng hướng"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 3: |Vector AB|² =", choices: ["AB·AB", "AB·BA", "AB + AB", "AB - AB"], correct: 0, hint: "|a|² = a·a.", explain: "AB·AB." },
      { type: "mc", prompt: "Câu 4: Cosin góc giữa hai vector a và b là:", choices: ["(a·b)/(|a||b|)", "(a·b)/|a|", "(a·b)/|b|", "a·b"], correct: 0, hint: "cosθ = (a·b)/(|a||b|).", explain: "(a·b)/(|a||b|)." },
      { type: "mc", prompt: "Câu 5: Nếu AB·AC = 0 thì tam giác ABC có:", choices: ["Góc A vuông", "Góc B vuông", "Góc C vuông", "Đều"], correct: 0, hint: "AB·AC = 0 ↔ AB ⊥ AC.", explain: "Góc A vuông." },
      { type: "mc", prompt: "Câu 6: Trong mặt phẳng tọa độ, Vector AB = (xB-xA, yB-yA). AB·AC =", choices: ["(xB-xA)(xC-xA) + (yB-yA)(yC-yA)", "(xB-xA)(xC-xA) - (yB-yA)(yC-yA)", "(xB-xA) + (xC-xA)", "(yB-yA) + (yC-yA)"], correct: 0, hint: "Tích vô hướng = tổng tích các thành phần.", explain: "(xB-xA)(xC-xA) + (yB-yA)(yC-yA)." },
      { type: "mc", prompt: "Câu 7: Khoảng cách giữa A(xA,yA) và B(xB,yB) là?", choices: ["√[(xB-xA)² + (yB-yA)²]", "√[(xB-xA) + (yB-yA)]", "(xB-xA)² + (yB-yA)²", "xB-xA + yB-yA"], correct: 0, hint: "AB = √[(xB-xA)² + (yB-yA)²].", explain: "√[(xB-xA)² + (yB-yA)²]." },
      { type: "mc", prompt: "Câu 8: Nếu |a| = 3, |b| = 4, góc(a,b) = 90° thì a·b =", choices: ["0", "12", "6", "24"], correct: 0, hint: "a·b = 3·4·cos90° = 12·0 = 0.", explain: "0." },
    ],
  },

  {
    id: "g10-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Mệnh đề, Tập hợp",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Mệnh đề, Tập hợp.",
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
      { type: "mc", prompt: "Câu 1: Mệnh đề nào đúng?", choices: ["2+3=5", "2+3=6", "x²≥0 với mọi x", "Cả A và C"], correct: 3, hint: "2+3=5 đúng, x²≥0 luôn đúng.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 2: Tập hợp A = {x∈Z | -2<x≤2} có bao nhiêu phần tử?", choices: ["4", "5", "3", "6"], correct: 0, hint: "A = {-1,0,1,2} → 4 phần tử.", explain: "4." },
      { type: "text", prompt: "Cho A = {1,2,3}, B = {2,3,4}. A∩B =", answer: "{2,3}", accept: ["{2,3}", "2,3"], hint: "Giao: phần tử chung.", explain: "{2,3}." },
      { type: "mc", prompt: "Câu 4: Mệnh đề phủ định của '∀x∈R, x²≥0' là?", choices: ["∃x∈R, x²<0", "∀x∈R, x²<0", "∃x∈R, x²≤0", "∀x∈R, x²≤0"], correct: 0, hint: "Phủ định ∀ là ∃, đổi dấu.", explain: "∃x∈R, x²<0." },
    ],
  },
  {
    id: "g10-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Hàm số bậc nhất, bậc hai",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Hàm số bậc nhất, bậc hai.",
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
      { type: "mc", prompt: "Câu 1: Hàm số y = -2x + 3 là?", choices: ["Nghịch biến", "Đồng biến", "Không đổi", "Không xác định"], correct: 0, hint: "a = -2 < 0 nên nghịch biến.", explain: "Nghịch biến." },
      { type: "mc", prompt: "Câu 2: Đỉnh của parabol y = x² - 4x + 3 là?", choices: ["(2,-1)", "(2,1)", "(-2,-1)", "(-2,1)"], correct: 0, hint: "x = -b/(2a) = 2, y = 4 - 8 + 3 = -1.", explain: "(2,-1)." },
      { type: "text", prompt: "Tìm nghiệm của phương trình x² - 5x + 6 = 0.", answer: "2 và 3", accept: ["2 và 3", "x=2,x=3"], hint: "(x-2)(x-3)=0 → x=2,3.", explain: "2 và 3." },
      { type: "mc", prompt: "Câu 4: Hai đường thẳng y = 3x + 1 và y = -1/3x + 2:", choices: ["Vuông góc", "Song song", "Cắt nhau không vuông", "Trùng nhau"], correct: 0, hint: "3 × (-1/3) = -1 → vuông góc.", explain: "Vuông góc." },
    ],
  },

  {
    id: "g10-ch3-quiz",
    num: 103,
    chapter: 3,
    title: "Chương 3: Phương trình và hệ phương trình - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phương trình bậc nhất, bậc hai, hệ phương trình.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phương trình và hệ phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phương trình 3x - 7 = 8 có nghiệm là?", choices: ["5", "4", "6", "3"], correct: 0, hint: "3x = 15 → x = 5.", explain: "5." },
      { type: "mc", prompt: "Câu 2: Phương trình x² - 6x + 9 = 0 có nghiệm kép là?", choices: ["3", "-3", "9", "-9"], correct: 0, hint: "(x-3)²=0 → x=3.", explain: "3." },
      { type: "text", prompt: "Giải hệ phương trình: x + y = 7, x - y = 3.", answer: "(5,2)", accept: ["(5,2)", "x=5,y=2"], hint: "Cộng hai phương trình: 2x = 10 → x=5, y=2.", explain: "(5,2)." },
      { type: "mc", prompt: "Câu 4: Phương trình x² + 5x + 6 = 0 có nghiệm là?", choices: ["-2 và -3", "2 và 3", "-2 và 3", "2 và -3"], correct: 0, hint: "(x+2)(x+3)=0 → x=-2,-3.", explain: "-2 và -3." },
      { type: "mc", prompt: "Câu 5: Phương trình x² - 4x + 4 = 0 có delta (Δ) là?", choices: ["0", "4", "-4", "16"], correct: 0, hint: "Δ = b²-4ac = 16-16=0.", explain: "0." },
      { type: "mc", prompt: "Câu 6: Tổng hai nghiệm của phương trình x² - 7x + 12 = 0 là?", choices: ["7", "-7", "12", "-12"], correct: 0, hint: "Tổng = -b/a = 7.", explain: "7." },
      { type: "mc", prompt: "Câu 7: Hệ phương trình x + 2y = 5, 2x + 4y = 10 có:", choices: ["Vô số nghiệm", "Vô nghiệm", "Nghiệm duy nhất", "Không xác định"], correct: 0, hint: "Hai phương trình tương đương.", explain: "Vô số nghiệm." },
      { type: "mc", prompt: "Câu 8: Phương trình x² + 1 = 0 có nghiệm thực không?", choices: ["Không có", "Có một nghiệm", "Có hai nghiệm", "Vô số nghiệm"], correct: 0, hint: "x² = -1 vô nghiệm thực.", explain: "Không có." },
    ],
  },

  {
    id: "g10-ch4-quiz",
    num: 104,
    chapter: 4,
    title: "Chương 4: Vectơ - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vectơ, tổng, hiệu, tích với số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vectơ.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB có điểm đầu là?", choices: ["A", "B", "Trung điểm AB", "Không xác định"], correct: 0, hint: "AB: A đầu, B cuối.", explain: "A." },
      { type: "mc", prompt: "Câu 2: Vector AB + Vector BA =", choices: ["Vector 0", "Vector AA", "Vector BB", "2·Vector AB"], correct: 0, hint: "AB + BA = AB - AB = 0.", explain: "Vector 0." },
      { type: "mc", prompt: "Câu 3: 2·Vector AB =", choices: ["Vector cùng hướng AB, độ dài gấp đôi", "Vector ngược hướng AB, độ dài gấp đôi", "Vector cùng hướng AB, độ dài bằng AB", "Vector 0"], correct: 0, hint: "k·AB: cùng hướng nếu k>0, |k| lần độ dài.", explain: "Vector cùng hướng AB, độ dài gấp đôi." },
      { type: "mc", prompt: "Câu 4: Vector AB - Vector AC =", choices: ["Vector CB", "Vector BC", "Vector AC", "Vector BA"], correct: 0, hint: "AB - AC = AB + CA = CB.", explain: "Vector CB." },
      { type: "mc", prompt: "Câu 5: Trung điểm I của AB thì:", choices: ["Vector IA + Vector IB = 0", "Vector IA = Vector IB", "Vector AB = 2·Vector AI", "Cả A và C"], correct: 0, hint: "IA = -IB → IA + IB = 0.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Ba điểm A, B, C thẳng hàng khi:", choices: ["Vector AB và Vector AC cùng phương", "Vector AB = Vector AC", "AB = AC", "Góc BAC = 90°"], correct: 0, hint: "Cùng phương ↔ cùng đường thẳng.", explain: "Vector AB và Vector AC cùng phương." },
      { type: "mc", prompt: "Câu 7: Tam giác ABC, G là trọng tâm thì:", choices: ["Vector GA + Vector GB + Vector GC = 0", "Vector GA = Vector GB = Vector GC", "G là trung điểm AB", "G là trực tâm"], correct: 0, hint: "GA + GB + GC = 0 với G trọng tâm.", explain: "Vector GA + Vector GB + Vector GC = 0." },
      { type: "mc", prompt: "Câu 8: Vector 0 là vector có:", choices: ["Độ dài bằng 0", "Độ dài bằng 1", "Hướng tùy ý", "Không xác định"], correct: 0, hint: "Vector 0 có độ dài 0.", explain: "Độ dài bằng 0." },
    ],
  },

  {
    id: "g10-ch5-quiz",
    num: 105,
    chapter: 5,
    title: "Chương 5: Phương pháp tọa độ trong mặt phẳng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vector, phương trình đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong mặt phẳng.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB với A(1,2), B(4,6) là?", choices: ["(3,4)", "(5,8)", "(-3,-4)", "(4,6)"], correct: 0, hint: "AB = (4-1, 6-2) = (3,4).", explain: "(3,4)." },
      { type: "mc", prompt: "Câu 2: Khoảng cách giữa A(0,0) và B(3,4) là?", choices: ["5", "4", "3", "7"], correct: 0, hint: "AB = √(9+16) = 5.", explain: "5." },
      { type: "text", prompt: "Tính tích vô hướng AB·AC với A(0,0), B(2,3), C(4,1).", answer: "11", accept: ["11"], hint: "AB=(2,3), AC=(4,1). AB·AC = 8+3 = 11.", explain: "11." },
      { type: "mc", prompt: "Câu 4: Phương trình đường thẳng đi qua A(1,2) và có vector pháp tuyến (3,-4) là?", choices: ["3(x-1)-4(y-2)=0", "3(x+1)-4(y+2)=0", "3x-4y+5=0", "3x+4y-11=0"], correct: 0, hint: "3(x-1)-4(y-2)=0 → 3x-4y+5=0.", explain: "3(x-1)-4(y-2)=0." },
      { type: "mc", prompt: "Câu 5: Phương trình tham số đường thẳng qua A(1,2) và có vector chỉ phương (3,4) là?", choices: ["x=1+3t, y=2+4t", "x=1-3t, y=2-4t", "x=3t, y=4t", "x=1+4t, y=2+3t"], correct: 0, hint: "x=x₀+at, y=y₀+bt.", explain: "x=1+3t, y=2+4t." },
      { type: "mc", prompt: "Câu 6: Hai vector (2,3) và (4,-8/3) vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Cùng phương", "Độ dài bằng nhau"], correct: 0, hint: "2×4 + 3×(-8/3) = 8-8 = 0.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 7: Khoảng cách từ điểm A(1,2) đến đường thẳng 3x-4y+5=0 là?", choices: ["0", "1", "2", "3"], correct: 0, hint: "d = |3-8+5|/5 = 0/5 = 0.", explain: "0." },
      { type: "mc", prompt: "Câu 8: Phương trình đường tròn tâm I(2,-3) bán kính 4 là?", choices: ["(x-2)²+(y+3)²=16", "(x+2)²+(y-3)²=16", "(x-2)²+(y-3)²=16", "(x-2)²+(y+3)²=4"], correct: 0, hint: "R² = 16.", explain: "(x-2)²+(y+3)²=16." },
    ],
  },
];

const G10_LESSONS = [
  {
    id: "g10-b1",
    num: 1,
    chapter: 1,
    title: "Mệnh đề",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Mệnh đề là câu khẳng định đúng hoặc sai.", spoken: "Mệnh đề là câu khẳng định có tính đúng hoặc sai. Ví dụ: 2+3=5 là mệnh đề đúng.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Ghi chú:</strong> Những điểm quan trọng cần nhớ khi học bài này.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần mệnh đề?</strong> Toán học dựa trên khẳng định rõ ràng.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> "2 + 3 = 5" là khẳng định. Kiểm tra: 2+3=5 đúng. Vậy là mệnh đề đúng.</p>
      </div>
      <div class="definition">
        <p><strong>Mệnh đề</strong> là một câu khẳng định có tính đúng hoặc sai.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> "2 + 3 = 5" là mệnh đề đúng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> "x + 2 = 5" không phải mệnh đề.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Câu hỏi, câu lệnh không phải mệnh đề.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>"5 > 3" là mệnh đề? <em>— Có, đúng.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Mệnh đề là khẳng định đúng hoặc sai.</p></div>
      <figure class="figure" data-animation="g10-b1-truth-table">
        <svg viewBox="0 0 260 140" role="img" aria-label="Bảng chân trị của mệnh đề">
          <line x1="40" y1="40" x2="220" y2="40" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="40" y1="60" x2="220" y2="60" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="40" y1="80" x2="220" y2="80" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="40" y1="100" x2="220" y2="100" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="100" y1="40" x2="100" y2="100" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="160" y1="40" x2="160" y2="100" stroke="#DDDDDD" stroke-width="1.5"/>
          <text x="60" y="55" font-size="11" fill="#58C4DD">p</text>
          <text x="120" y="55" font-size="11" fill="#58C4DD">q</text>
          <text x="180" y="55" font-size="11" fill="#58C4DD">p ∧ q</text>
          <text x="65" y="75" font-size="10" fill="#DDDDDD">Đ</text>
          <text x="125" y="75" font-size="10" fill="#DDDDDD">Đ</text>
          <text x="185" y="75" font-size="10" fill="#83C167">Đ</text>
          <text x="65" y="95" font-size="10" fill="#DDDDDD">S</text>
          <text x="125" y="95" font-size="10" fill="#DDDDDD">Đ</text>
          <text x="185" y="95" font-size="10" fill="#FC6255">S</text>
          <text x="130" y="30" font-size="11" fill="#58C4DD">Bảng chân trị</text>
          <text x="90" y="125" font-size="10" fill="#83C167">p ∧ q: Đ khi cả p và q đều Đ</text>
        </svg>
        <figcaption>Bảng chân trị của mệnh đề p ∧ q (p và q).</figcaption>
      </figure>

    `,
          
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      { type: "mc", prompt: "Bài tập thực hành", choices: ["A", "B", "C", "D"], correct: "A" },

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
exercises: [
      { type: "mc", prompt: "Câu nào là mệnh đề?", choices: ["2 + 3 = 5", "Hãy làm bài", "x + 1 > 3"], correct: 0, hint: "Chỉ câu khẳng định.", explain: "2 + 3 = 5 là mệnh đề." },
      { type: "mc", prompt: "Mệnh đề nào sai?", choices: ["3 < 5", "4 chia hết cho 2", "1 + 1 = 3"], correct: 2, hint: "1 + 1 = 2.", explain: "1 + 1 = 3 là sai." },
      { type: "mc", prompt: "Phủ định của mệnh đề &quot;2 là số chẵn&quot; là", choices: ["2 không là số chẵn", "2 là số lẻ", "2 không phải số chẵn", "Tất cả đều đúng"], correct: 3, hint: "Các đáp án đều đúng: phủ định của A là không A.", explain: "Tất cả đều đúng." },
      { type: "text", prompt: "Viết phủ định của mệnh đề P: &quot;3² > 2³&quot; và xét tính đúng sai.", answer: "3² ≤ 2³ (sai, vì 9 > 8)", accept: ["3² ≤ 2³ (sai)", "3^2 ≤ 2^3 (sai)", "3² ≤ 2³, sai"], hint: "P: 9 > 8 đúng, phủ định là 9 ≤ 8 sai.", explain: "3² ≤ 2³ (sai)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b2",
    num: 2,
    chapter: 1,
    title: "Tập hợp",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Tập hợp là nhóm các phần tử.", spoken: "Tập hợp là nhóm các đối tượng. Kí hiệu ∈ là thuộc, ∉ là không thuộc.", youtube: "dQw4w9WgXcQ",
    body: 
    <p><strong>Bài toán thực hành:</strong> Áp dụng kiến thức vào bài toán thực tế.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tập hợp?</strong> Tập hợp giúp nhóm đối tượng.</p>
      <div class="example">
        <p><strong>Làm chậm.</strong> A = {1, 2, 3} có 3 phần tử. B = {x ∈ ℝ | x² = 4} = {-2, 2}. Kiểm tra: -2 ∈ B, 2 ∈ B.</p>
      </div>
      <div class="definition">
        <p><strong>Tập hợp</strong> gồm các phần tử.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> {0, 2, 4, 6, 8} là các số chẵn < 10.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tập rỗng ∅ không có phần tử.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên tập rỗng.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tập hợp là nhóm phần tử.</p></div>
      <figure class="figure" data-animation="g10-b2-sets">
        <svg viewBox="0 0 260 160" role="img" aria-label="Venn diagram của hai tập hợp">
          <circle cx="90" cy="80" r="48" fill="#83C167" fill-opacity="0.3" stroke="#83C167" stroke-width="2"/>
          <circle cx="170" cy="80" r="48" fill="#FC6255" fill-opacity="0.3" stroke="#FC6255" stroke-width="2"/>
          <circle cx="90" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="170" cy="80" r="3" fill="#DDDDDD"/>
          <text x="70" y="75" font-size="12" fill="#83C167">A</text>
          <text x="190" y="75" font-size="12" fill="#FC6255">B</text>
        </svg>
        <figcaption>Venn diagram của hai tập hợp A và B.</figcaption>
      </figure>
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
      { type: "mc", prompt: "Tập hợp các nghiệm của phương trình x² − 4 = 0 là", choices: ["{-2, 2}", "{2}", "{-2}", "∅"], correct: 0, hint: "x = ±2.", explain: "{-2, 2}." },
      { type: "mc", prompt: "Tập hợp A = {x ∈ ℤ | -1 ≤ x ≤ 1} có bao nhiêu phần tử?", choices: ["3", "2", "4", "1"], correct: 0, hint: "-1, 0, 1.", explain: "3." },
      { type: "mc", prompt: "Tập hợp nào là tập con của {1, 2, 3}?", choices: ["{1, 2}", "{1, 4}", "{2, 3, 4}", "{4}"], correct: 0, hint: "Tất cả phần tử thuộc tập lớn.", explain: "{1, 2}." },
      { type: "text", prompt: "Viết tập hợp các số tự nhiên chia hết cho 3 và nhỏ hơn 10.", answer: "{0, 3, 6, 9}", accept: ["{0, 3, 6, 9}", "{3, 6, 9}", "{0,3,6,9}"], hint: "0, 3, 6, 9.", explain: "{0, 3, 6, 9}." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b3",
    num: 3,
    chapter: 1,
    title: "Tập con và tập bằng nhau",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tập A là tập con của B nếu mọi phần tử của A đều thuộc B.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tập con?</strong> Tập con giúp mô tả mối quan hệ giữa các tập hợp.</p>
      <div class="definition">
        <p>Tập A là <strong>tập con</strong> của B (viết A ⊆ B) nếu mọi phần tử của A đều thuộc B.</p>
        <p>Hai tập bằng nhau nếu A ⊆ B và B ⊆ A.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> {1, 2} ⊆ {1, 2, 3}. {a, b} = {b, a} (bằng nhau).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> ∅ ⊆ A với mọi tập A.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> {a} ≠ a (một là tập, một là phần tử).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> A ⊆ B nếu mọi phần tử của A đều trong B.</p></div>
      <figure class="figure" data-animation="g10-b3-subset">
        <svg viewBox="0 0 240 160" role="img" aria-label="Tập A là tập con của tập B">
          <circle cx="120" cy="80" r="64" fill="#83C167" fill-opacity="0.2" stroke="#83C167" stroke-width="2"/>
          <circle cx="120" cy="70" r="32" fill="#FC6255" fill-opacity="0.3" stroke="#FC6255" stroke-width="2"/>
          <circle cx="120" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="120" cy="70" r="3" fill="#DDDDDD"/>
          <text x="145" y="55" font-size="12" fill="#FC6255">A</text>
          <text x="175" y="100" font-size="12" fill="#83C167">B</text>
          <text x="80" y="135" font-size="11" fill="#DDDDDD">A ⊆ B</text>
        </svg>
        <figcaption>Tập A là tập con của tập B (A ⊆ B).</figcaption>
      </figure>

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
exercises: [
      { type: "mc", prompt: "Tập hợp nào là tập con của {1, 2, 3}?", choices: ["{1, 2}", "{1, 4}", "{2, 3, 4}", "{4}"], correct: 0, hint: "Tất cả phần tử thuộc tập lớn.", explain: "{1, 2}." },
      { type: "mc", prompt: "Hai tập hợp A và B bằng nhau khi", choices: ["Có cùng phần tử", "Có cùng số phần tử", "A là tập con của B", "B là tập con của A"], correct: 0, hint: "Định nghĩa hai tập hợp bằng nhau.", explain: "Có cùng phần tử." },
      { type: "text", prompt: "A = {1, 2, 3}, B = {3, 2, 1}. A và B có bằng nhau không?", answer: "Có", accept: ["Có", "Có, A = B", "A = B"], hint: "Thứ tự phần tử không quan trọng.", explain: "Có." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b4",
    num: 4,
    chapter: 1,
    title: "Các phép toán tập hợp",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hợp, giao, hiệu của hai tập hợp.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần phép toán tập hợp?</strong> Phép toán giúp phân tích mối quan hệ.</p>
      <div class="definition">
        <p><strong>Hợp</strong> A ∪ B: các phần tử thuộc A hoặc B.</p>
        <p><strong>Giao</strong> A ∩ B: các phần tử thuộc cả A và B.</p>
        <p><strong>Hiệu</strong> A \\ B: các phần tử thuộc A nhưng không thuộc B.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> {1, 2} ∪ {2, 3} = {1, 2, 3}. {1, 2} ∩ {2, 3} = {2}.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> {1, 2, 3} \\ {2} = {1, 3}.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> A \\ B ≠ B \\ A.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hợp: hoặc, Giao: và, Hiệu: nhưng không.</p></div>
      <figure class="figure" data-animation="g10-b4-set-operations">
        <svg viewBox="0 0 260 160" role="img" aria-label="Hợp, giao, hiệu của hai tập hợp">
          <circle cx="90" cy="80" r="48" fill="#83C167" fill-opacity="0.2" stroke="#83C167" stroke-width="2"/>
          <circle cx="170" cy="80" r="48" fill="#FC6255" fill-opacity="0.2" stroke="#FC6255" stroke-width="2"/>
          <path d="M90,32 A48,48 0 1,1 90,128 A48,48 0 1,1 90,32 M170,32 A48,48 0 1,1 170,128 A48,48 0 1,1 170,32" fill="none" stroke="#58C4DD" stroke-width="1"/>
          <circle cx="90" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="170" cy="80" r="3" fill="#DDDDDD"/>
          <text x="70" y="75" font-size="12" fill="#83C167">A</text>
          <text x="190" y="75" font-size="12" fill="#FC6255">B</text>
          <text x="115" y="45" font-size="11" fill="#58C4DD">A ∪ B</text>
        </svg>
        <figcaption>Venn diagram của hợp (A ∪ B), giao (A ∩ B), hiệu (A \ B).</figcaption>
      </figure>

    `,
          
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>

      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em</p>
      </details>

      { type: "mc", prompt: "Bài tập luyện tập", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "A = {1, 2, 3}, B = {2, 3, 4}. A ∩ B =", choices: ["{2, 3}", "{1, 2, 3, 4}", "{1, 4}", "{1, 2}"], correct: 0, hint: "Giao: phần tử chung.", explain: "{2, 3}." },
      { type: "mc", prompt: "A = {1, 2, 3, 4}, B = {2, 4}. A \ B =", choices: ["{1, 3}", "{2, 4}", "{1, 2, 3, 4}", "∅"], correct: 0, hint: "Hiệu: loại phần tử của B ra khỏi A.", explain: "{1, 3}." },
      { type: "text", prompt: "A = {1, 3, 5}, B = {2, 4, 6}. A ∪ B =", answer: "{1, 2, 3, 4, 5, 6}", accept: ["{1, 2, 3, 4, 5, 6}", "{1,2,3,4,5,6}"], hint: "Hợp: tất cả phần tử của A và B.", explain: "{1, 2, 3, 4, 5, 6}." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b5",
    num: 5,
    chapter: 2,
    title: "Bất đẳng thức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Bất đẳng thức là so sánh giữa hai biểu thức.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần bất đẳng thức?</strong> Bất đẳng thức giúp so sánh các đại lượng.</p>
      <div class="definition">
        <p><strong>Bất đẳng thức</strong> là mệnh đề so sánh hai biểu thức: A > B, A < B, A ≥ B, A ≤ B.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 5 > 3, 2 + 3 ≥ 4. Nếu a > b thì a + c > b + c.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Nếu a > b > 0 thì a² > b².</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nếu a > b thì ka > kb chỉ đúng khi k > 0.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Cho a > b. Khẳng định nào đúng? <em>— a + 2 > b + 2.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Bất đẳng thức là so sánh A > B hoặc A < B.</p></div>
      <figure class="figure" data-animation="g10-b5-inequality">
        <svg viewBox="0 0 260 80" role="img" aria-label="Minh họa bất đẳng thức trên trục số">
          <line x1="20" y1="40" x2="240" y2="40" stroke="#DDDDDD" stroke-width="1.5"/>
          <circle cx="80" cy="40" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="40" r="3" fill="#DDDDDD"/>
          <line x1="80" y1="35" x2="80" y2="45" stroke="#58C4DD" stroke-width="2"/>
          <line x1="180" y1="35" x2="180" y2="45" stroke="#FC6255" stroke-width="2"/>
          <text x="75" y="55" font-size="11" fill="#DDDDDD">a</text>
          <text x="175" y="55" font-size="11" fill="#DDDDDD">b</text>
          <text x="130" y="65" font-size="11" fill="#83C167">a < b</text>
        </svg>
        <figcaption>Minh họa a < b trên trục số.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Bất đẳng thức nào đúng?", choices: ["3 > 5", "2 < 1", "4 ≥ 4", "-1 > 0"], correct: 2, hint: "4 = 4 nên 4 ≥ 4 đúng.", explain: "4 ≥ 4 là đúng." },
      { type: "mc", prompt: "Nếu a > b thì bất đẳng thức nào đúng?", choices: ["a - 3 > b - 3", "a + 3 < b + 3", "-a > -b", "2a < 2b"], correct: 0, hint: "Cộng cùng số vào cả hai vế.", explain: "a - 3 > b - 3 đúng." },
      { type: "num", prompt: "Giá trị nhỏ nhất của x² + 1 với x thực là", answer: "1", accept: ["1"], hint: "x² ≥ 0 với mọi x.", explain: "x² ≥ 0 nên x² + 1 ≥ 1." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b6",
    num: 6,
    chapter: 2,
    title: "Bất phương trình một ẩn",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Bất phương trình chứa ẩn cần tìm nghiệm.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần bất phương trình?</strong> Bất phương trình mô tả điều kiện.</p>
      <div class="definition">
        <p><strong>Bất phương trình một ẩn</strong> là mệnh đề chứa biến: f(x) > g(x).</p>
        <p>Nghiệm là giá trị của x làm bất đẳng thức đúng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 2x + 3 > 7 ⇔ 2x > 4 ⇔ x > 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> -3x + 6 ≤ 0 ⇔ -3x ≤ -6 ⇔ x ≥ 2 (đổi chiều).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Khi nhân/chia âm phải đổi chiều bất đẳng thức.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Nghiệm của 3x - 6 < 0 là? <em>— x < 2.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Giải bất phương trình là tìm tập nghiệm.</p></div>
      <figure class="figure" data-animation="g10-b6-linear-inequality">
        <svg viewBox="0 0 260 80" role="img" aria-label="Giải bất phương trình trên trục số">
          <line x1="20" y1="40" x2="240" y2="40" stroke="#DDDDDD" stroke-width="1.5"/>
          <circle cx="130" cy="40" r="3" fill="#DDDDDD"/>
          <line x1="130" y1="40" x2="230" y2="40" stroke="#58C4DD" stroke-width="2"/>
          <text x="125" y="55" font-size="11" fill="#DDDDDD">2</text>
          <text x="180" y="65" font-size="11" fill="#58C4DD">x > 2</text>
        </svg>
        <figcaption>Giải bất phương trình x > 2 trên trục số.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Nghiệm của 2x - 4 > 0 là?", choices: ["x > 2", "x < 2", "x > 4", "x < 4"], correct: 0, hint: "2x > 4 ⇒ x > 2.", explain: "x > 2." },
      { type: "mc", prompt: "Nghiệm của -x + 3 ≥ 0 là?", choices: ["x ≤ 3", "x ≥ 3", "x ≤ -3", "x ≥ -3"], correct: 0, hint: "-x ≥ -3 ⇒ x ≤ 3.", explain: "x ≤ 3." },
      { type: "num", prompt: "Số nguyên dương nhỏ nhất thỏa 3x - 5 > 4 là", answer: "4", accept: ["4"], hint: "3x > 9 ⇒ x > 3.", explain: "x > 3 nên x = 4." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b7",
    num: 7,
    chapter: 2,
    title: "Dấu của nhị thức bậc nhất",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Nhị thức bậc nhất ax + b có dấu phụ thuộc vào a.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần dấu nhị thức?</strong> Dấu nhị thức giúp giải bất phương trình.</p>
      <div class="definition">
        <p>Nhị thức bậc nhất: f(x) = ax + b (a ≠ 0).</p>
        <p>Dấu: cùng dấu a khi x > -b/a, trái dấu a khi x < -b/a.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> f(x) = 2x - 4: dương khi x > 2, âm khi x < 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> f(x) = -3x + 6: dương khi x < 2, âm khi x > 2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm dấu khi a < 0.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Dấu của f(x) = -x + 5 khi x = 3? <em>— Dương.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Nghiệm x = -b/a, dấu thay đổi tại nghiệm.</p></div>
      <figure class="figure" data-animation="g10-b7-linear-sign">
        <svg viewBox="0 0 260 80" role="img" aria-label="Dấu của nhị thức bậc nhất trên trục số">
          <line x1="20" y1="40" x2="240" y2="40" stroke="#DDDDDD" stroke-width="1.5"/>
          <circle cx="130" cy="40" r="3" fill="#DDDDDD"/>
          <line x1="20" y1="40" x2="130" y2="40" stroke="#FC6255" stroke-width="2" stroke-dasharray="5 3"/>
          <line x1="130" y1="40" x2="240" y2="40" stroke="#58C4DD" stroke-width="2"/>
          <text x="125" y="55" font-size="11" fill="#DDDDDD">2</text>
          <text x="80" y="65" font-size="11" fill="#FC6255">f(x) < 0</text>
          <text x="170" y="65" font-size="11" fill="#58C4DD">f(x) > 0</text>
        </svg>
        <figcaption>Dấu của nhị thức f(x) = ax + b trên trục số.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Nghiệm của f(x) = 3x - 6 là?", choices: ["x = 2", "x = -2", "x = 3", "x = -3"], correct: 0, hint: "3x = 6 ⇒ x = 2.", explain: "x = 2." },
      { type: "mc", prompt: "f(x) = -2x + 4 dương khi?", choices: ["x < 2", "x > 2", "x < -2", "x > -2"], correct: 0, hint: "a = -2 < 0 nên dương khi x < 2.", explain: "x < 2." },
      { type: "num", prompt: "Giá trị của f(x) = 5x - 10 tại x = 3 là", answer: "5", accept: ["5"], hint: "5·3 - 10 = 5.", explain: "5." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b8",
    num: 8,
    chapter: 3,
    title: "Hàm số bậc hai",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hàm số bậc hai có dạng y = ax² + bx + c (a ≠ 0).",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần hàm số bậc hai?</strong> Hàm số bậc hai mô tả quỹ đạo parabol.</p>
      <div class="definition">
        <p>Hàm số bậc hai: y = ax² + bx + c (a ≠ 0).</p>
        <p>Đồ thị là parabol, đỉnh tại (-b/2a, -Δ/4a).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> y = x²: đồ thị đi qua (0,0), (1,1), (-1,1), hướng lên.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> y = -x² + 2: đỉnh (0,2), hướng xuống.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm hướng parabol (a > 0 lên, a < 0 xuống).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Đỉnh của y = x² - 4x + 3 là? <em>— (2, -1).</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Đồ thị parabol, đỉnh (-b/2a, -Δ/4a).</p></div>
      <figure class="figure" data-animation="g10-b8-quadratic">
        <svg viewBox="0 0 260 180" role="img" aria-label="Đồ thị hàm số y = ax²">
          <line x1="20" y1="90" x2="240" y2="90" stroke="#DDDDDD" stroke-width="1"/>
          <line x1="130" y1="10" x2="130" y2="170" stroke="#DDDDDD" stroke-width="1"/>
          <path d="M20,160 Q130,10 240,160" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="130" cy="90" r="3" fill="#DDDDDD"/>
          <circle cx="130" cy="10" r="3" fill="#DDDDDD"/>
          <text x="140" y="85" font-size="11" fill="#DDDDDD">O</text>
          <text x="140" y="95" font-size="11" fill="#DDDDDD">(0,0)</text>
          <text x="135" y="20" font-size="11" fill="#58C4DD">Đỉnh</text>
          <text x="200" y="40" font-size="12" fill="#58C4DD">y = x²</text>
        </svg>
        <figcaption>Đồ thị hàm số y = ax² (a > 0).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Đồ thị y = 2x² có hướng?", choices: ["Lên", "Xuống", "Trái", "Phải"], correct: 0, hint: "a = 2 > 0 nên hướng lên.", explain: "Hướng lên." },
      { type: "mc", prompt: "Đỉnh của y = x² - 2x là?", choices: ["(1, -1)", "(-1, 1)", "(1, 1)", "(-1, -1)"], correct: 0, hint: "-b/2a = 1, y(1) = -1.", explain: "(1, -1)." },
      { type: "num", prompt: "Giá trị nhỏ nhất của y = x² + 2 là", answer: "2", accept: ["2"], hint: "x² ≥ 0 nên y ≥ 2.", explain: "2." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b9",
    num: 9,
    chapter: 3,
    title: "Dấu của tam thức bậc hai",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tam thức bậc hai ax² + bx + c có dấu phụ thuộc vào Δ.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần dấu tam thức?</strong> Dấu tam thức giúp giải bất phương trình bậc hai.</p>
      <div class="definition">
        <p>Tam thức bậc hai: f(x) = ax² + bx + c (a ≠ 0).</p>
        <p>Δ = b² - 4ac: Δ < 0 cùng dấu a, Δ = 0 cùng dấu a (trừ nghiệm), Δ > 0 đổi dấu tại 2 nghiệm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> f(x) = x² + 1: Δ = -4 < 0, luôn dương (a > 0).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> f(x) = x² - 4: Δ = 16 > 0, nghiệm ±2, âm trong (−2, 2).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên xét a khi kết luận dấu.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Dấu của f(x) = x² - 5x + 6 tại x = 4? <em>— Âm.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Δ < 0 cùng dấu a, Δ > 0 đổi dấu tại 2 nghiệm.</p></div>
      <figure class="figure" data-animation="g10-b9-quadratic-sign">
        <svg viewBox="0 0 260 180" role="img" aria-label="Đồ thị tam thức bậc hai và dấu của nó">
          <line x1="20" y1="90" x2="240" y2="90" stroke="#DDDDDD" stroke-width="1"/>
          <line x1="130" y1="10" x2="130" y2="170" stroke="#DDDDDD" stroke-width="1"/>
          <path d="M20,160 Q130,10 240,160" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="80" cy="90" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="90" r="3" fill="#DDDDDD"/>
          <text x="70" y="105" font-size="11" fill="#DDDDDD">x₁</text>
          <text x="190" y="105" font-size="11" fill="#DDDDDD">x₂</text>
          <text x="140" y="95" font-size="11" fill="#DDDDDD">O</text>
          <text x="135" y="20" font-size="11" fill="#58C4DD">Đỉnh</text>
        </svg>
        <figcaption>Đồ thị tam thức bậc hai với hai nghiệm phân biệt (Δ > 0).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "f(x) = x² + 1 có bao nhiêu nghiệm?", choices: ["0", "1", "2", "Vô số"], correct: 0, hint: "Δ = -4 < 0 nên vô nghiệm.", explain: "0 nghiệm." },
      { type: "mc", prompt: "f(x) = -x² + 4 dương khi?", choices: ["-2 < x < 2", "x < -2", "x > 2", "x ≠ ±2"], correct: 0, hint: "a = -1 < 0, nghiệm ±2.", explain: "-2 < x < 2." },
      { type: "num", prompt: "Số nguyên thỏa x² - 4x + 3 ≤ 0 là", answer: "3", accept: ["3"], hint: "(x-1)(x-3) ≤ 0 ⇒ 1 ≤ x ≤ 3.", explain: "x = 1, 2, 3." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b10",
    num: 10,
    chapter: 4,
    title: "Vector trong mặt phẳng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Vector là đoạn thẳng có hướng.", spoken: "Vector có điểm đầu và điểm cuối. Kí hiệu AB là vector từ A đến B.", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần vector?</strong> Vector biểu diễn đại lượng có hướng.</p>
      <div class="definition">
        <p><strong>Vector</strong> là đoạn thẳng có hướng: AB (đi từ A đến B).</p>
        <p>Hai vector bằng nhau nếu cùng hướng và cùng độ dài.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> AB = CD nếu AB ∥ CD, AB = CD và cùng hướng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Vector không (zero vector) có điểm đầu = điểm cuối.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> AB ≠ BA (ngược hướng).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>AB và BA là? <em>— Hai vector ngược nhau.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Vector có điểm đầu và điểm cuối.</p></div>
      <figure class="figure" data-animation="g10-b10-vector">
        <svg viewBox="0 0 260 160" role="img" aria-label="Vector trong mặt phẳng">
          <line x1="50" y1="120" x2="150" y2="60" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="120" x2="150" y2="60" stroke="#58C4DD" stroke-width="0" marker-end="url(#arrow)"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="150" cy="60" r="3" fill="#DDDDDD"/>
          <text x="40" y="130" font-size="11" fill="#58C4DD">A</text>
          <text x="160" y="50" font-size="11" fill="#58C4DD">B</text>
          <text x="90" y="140" font-size="12" fill="#DDDDDD">→</text>
          <text x="105" y="145" font-size="10" fill="#DDDDDD">AB</text>
        </svg>
        <figcaption>Vector AB từ điểm A đến điểm B.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "AB và BA là hai vector?", choices: ["Bằng nhau", "Đối nhau", "Cùng hướng", "Cùng độ dài"], correct: 1, hint: "AB và BA ngược hướng.", explain: "Đối nhau (ngược hướng, cùng độ dài)." },
      { type: "mc", prompt: "Vector không có điểm đầu và điểm cuối?", choices: ["Khác nhau", "Giống nhau", "Tùy trường hợp", "Không xác định"], correct: 1, hint: "Zero vector: điểm đầu = điểm cuối.", explain: "Giống nhau." },
      { type: "num", prompt: "Số vector tạo thành từ 3 điểm phân biệt A, B, C là", answer: "6", accept: ["6"], hint: "Mỗi cặp tạo 2 vector: AB, BA, AC, CA, BC, CB.", explain: "6 vector." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },,
  {
    id: "g10-b11",
    num: 11,
    chapter: 4,
    title: "Tổng và hiệu của hai vector",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tổng và hiệu vector được tính bằng quy tắc hình bình hành hoặc tam giác.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tổng vector?</strong> Nhiều đại lượng vector cần cộng lại.</p>
      <div class="definition">
        <p>Tổng của hai vector: AB + BC = AC (quy tắc tam giác).</p>
        <p>Quy tắc hình bình hành: nếu ABCD là hình bình hành thì AB + AD = AC.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Cho AB = (2, 3), BC = (1, 4). Khi đó AC = AB + BC = (3, 7).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> AB + BA = AA = 0 (vector không).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> AB + BC ≠ AC nếu A, B, C không tạo thành đường gãy.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>AB + BC + CA = ? <em>— Vector không 0.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Quy tắc tam giác: AB + BC = AC.</p></div>
      <figure class="figure" data-animation="g10-b11-vector-sum">
        <svg viewBox="0 0 260 160" role="img" aria-label="Tổng hai vector theo quy tắc tam giác">
          <line x1="50" y1="120" x2="150" y2="60" stroke="#58C4DD" stroke-width="2"/>
          <line x1="150" y1="60" x2="210" y2="120" stroke="#FC6255" stroke-width="2"/>
          <line x1="50" y1="120" x2="210" y2="120" stroke="#83C167" stroke-width="2"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="150" cy="60" r="3" fill="#DDDDDD"/>
          <circle cx="210" cy="120" r="3" fill="#DDDDDD"/>
          <text x="40" y="130" font-size="11" fill="#58C4DD">A</text>
          <text x="160" y="50" font-size="11" fill="#58C4DD">B</text>
          <text x="220" y="130" font-size="11" fill="#FC6255">C</text>
          <text x="100" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="115" y="95" font-size="10" fill="#58C4DD">AB</text>
          <text x="180" y="90" font-size="11" fill="#FC6255">→</text>
          <text x="195" y="95" font-size="10" fill="#FC6255">BC</text>
          <text x="130" y="140" font-size="11" fill="#83C167">→</text>
          <text x="145" y="145" font-size="10" fill="#83C167">AC</text>
        </svg>
        <figcaption>Quy tắc tam giác: AB + BC = AC.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "AB + BC = ?", choices: ["AC", "CA", "AB", "BC"], correct: 0, hint: "Quy tắc tam giác.", explain: "AC." },
      { type: "mc", prompt: "AB + BA = ?", choices: ["0", "2AB", "AB", "BA"], correct: 0, hint: "AB và BA ngược nhau.", explain: "Vector không 0." },
      { type: "num", prompt: "AB = (3, -2), BC = (-1, 4). AC = ?", answer: "(2, 2)", accept: ["(2, 2)", "2, 2"], hint: "Cộng tọa độ tương ứng.", explain: "(3-1, -2+4) = (2, 2)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b12",
    num: 12,
    chapter: 4,
    title: "Hiệu của hai vector",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hiệu AB - AC = CB (quy tắc trừ).",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần hiệu vector?</strong> Hiệu vector giúp tính khoảng cách.</p>
      <div class="definition">
        <p>Hiệu AB - AC = CB (quy tắc trừ: cùng điểm đầu B, hiệu là vector từ cuối này đến cuối kia).</p>
        <p>AB = -BA (hai vector đối nhau).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> AB - AC = CB. Nếu A(1,2), B(4,5), C(2,3) thì AB=(3,3), AC=(1,1), CB=(2,2).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> M là trung điểm AB: MA + MB = 0.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> AB - AC ≠ BC (phải là CB).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Cho tam giác ABC. AB - AC = ? <em>— CB.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Quy tắc trừ: cùng điểm đầu, hiệu là vector từ cuối này đến cuối kia.</p></div>
      <figure class="figure" data-animation="g10-b12-vector-diff">
        <svg viewBox="0 0 260 160" role="img" aria-label="Hiệu hai vector AB - AC = CB">
          <line x1="50" y1="120" x2="150" y2="60" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="120" x2="210" y2="120" stroke="#FC6255" stroke-width="2"/>
          <line x1="150" y1="60" x2="210" y2="120" stroke="#83C167" stroke-width="2"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="150" cy="60" r="3" fill="#DDDDDD"/>
          <circle cx="210" cy="120" r="3" fill="#DDDDDD"/>
          <text x="40" y="130" font-size="11" fill="#58C4DD">A</text>
          <text x="160" y="50" font-size="11" fill="#58C4DD">B</text>
          <text x="220" y="130" font-size="11" fill="#FC6255">C</text>
          <text x="100" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="115" y="95" font-size="10" fill="#58C4DD">AB</text>
          <text x="130" y="140" font-size="11" fill="#FC6255">→</text>
          <text x="145" y="145" font-size="10" fill="#FC6255">AC</text>
          <text x="180" y="90" font-size="11" fill="#83C167">→</text>
          <text x="195" y="95" font-size="10" fill="#83C167">CB</text>
        </svg>
        <figcaption>Quy tắc trừ: AB - AC = CB.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "AB - AC = ?", choices: ["CB", "BC", "AB", "AC"], correct: 0, hint: "Cùng điểm đầu A, hiệu là CB.", explain: "CB." },
      { type: "mc", prompt: "AB - BA = ?", choices: ["2AB", "0", "AB", "-2AB"], correct: 0, hint: "BA = -AB nên AB - BA = AB - (-AB) = 2AB.", explain: "2AB." },
      { type: "num", prompt: "A(1,1), B(3,4), C(2,3). AB - AC = ?", answer: "(1,1)", accept: ["(1, 1)", "1, 1"], hint: "AB=(2,3), AC=(1,2), hiệu=(1,1).", explain: "(2-1, 3-2) = (1, 1)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b13",
    num: 13,
    chapter: 4,
    title: "Tích của vector với một số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tích k·AB là vector cùng/phản hướng AB và độ dài |k|·AB.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tích vector với số?</strong> scaling vector thay đổi độ dài.</p>
      <div class="definition">
        <p>Tích k·AB: cùng hướng AB nếu k > 0, ngược hướng nếu k < 0, độ dài |k|·AB.</p>
        <p>k = 0: vector không. k = 1: AB. k = -1: -AB.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> AB = (2, 3). 2·AB = (4, 6). -1·AB = (-2, -3).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> M là trung điểm AB: OM = 1/2·OA + 1/2·OB.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm dấu khi k < 0.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>3·AB với AB = (1, -2) là? <em>— (3, -6).</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> k·AB: cùng/phản hướng, độ dài |k|·AB.</p></div>
      <figure class="figure" data-animation="g10-b13-scalar-mul">
        <svg viewBox="0 0 260 140" role="img" aria-label="Tích vector với số k">
          <line x1="50" y1="80" x2="150" y2="40" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="80" x2="210" y2="20" stroke="#83C167" stroke-width="2"/>
          <circle cx="50" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="150" cy="40" r="3" fill="#DDDDDD"/>
          <circle cx="210" cy="20" r="3" fill="#DDDDDD"/>
          <text x="40" y="95" font-size="11" fill="#DDDDDD">A</text>
          <text x="160" y="30" font-size="11" fill="#58C4DD">B</text>
          <text x="220" y="15" font-size="11" fill="#83C167">C</text>
          <text x="80" y="60" font-size="11" fill="#58C4DD">→</text>
          <text x="95" y="65" font-size="10" fill="#58C4DD">AB</text>
          <text x="130" y="50" font-size="11" fill="#83C167">→</text>
          <text x="145" y="55" font-size="10" fill="#83C167">k·AB</text>
        </svg>
        <figcaption>Tích vector AB với số k: k·AB.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "2·AB với AB = (3, 4) là?", choices: ["(6, 8)", "(3, 4)", "(1.5, 2)", "(-6, -8)"], correct: 0, hint: "Nhân từng tọa độ với 2.", explain: "(6, 8)." },
      { type: "mc", prompt: "-1·AB với AB = (2, -3) là?", choices: ["(-2, 3)", "(2, -3)", "(-2, -3)", "(2, 3)"], correct: 0, hint: "Đổi dấu cả hai tọa độ.", explain: "(-2, 3)." },
      { type: "num", prompt: "k = 1/2, AB = (4, -6). k·AB = ?", answer: "(2, -3)", accept: ["(2, -3)", "2, -3"], hint: "Chia từng tọa độ cho 2.", explain: "(4/2, -6/2) = (2, -3)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b14",
    num: 14,
    chapter: 4,
    title: "Hệ trục tọa độ",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hệ trục tọa độ Oxy gồm trục Ox và Oy vuông góc.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần hệ tọa độ?</strong> Hệ tọa độ liên kết hình học với đại số.</p>
      <div class="definition">
        <p>Hệ trục tọa độ Oxy: Ox (hoành), Oy (tung), gốc O, đơn vị bằng nhau.</p>
        <p>Điểm M(x, y): OM = x·i + y·j.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> M(3, 2): từ O đi 3 đơn vị Ox, 2 đơn vị Oy.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Trung điểm AB: ((xA+xB)/2, (yA+yB)/2).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm hoành và tung (x trước, y sau).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tọa độ trung điểm AB với A(1,2), B(3,4) là? <em>— (2, 3).</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> M(x, y) ↔ OM = x·i + y·j.</p></div>
      <figure class="figure" data-animation="g10-b14-coordinate-system">
        <svg viewBox="0 0 260 160" role="img" aria-label="Hệ trục tọa độ Oxy">
          <line x1="20" y1="80" x2="240" y2="80" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="130" y1="10" x2="130" y2="150" stroke="#DDDDDD" stroke-width="1.5"/>
          <circle cx="130" cy="80" r="3" fill="#DDDDDD"/>
          <text x="125" y="95" font-size="11" fill="#DDDDDD">O</text>
          <text x="230" y="95" font-size="11" fill="#DDDDDD">x</text>
          <text x="140" y="20" font-size="11" fill="#DDDDDD">y</text>
          <circle cx="80" cy="50" r="3" fill="#58C4DD"/>
          <text x="70" y="65" font-size="11" fill="#58C4DD">M(x;y)</text>
        </svg>
        <figcaption>Hệ trục tọa độ Oxy với điểm M(x;y).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Tọa độ điểm A(2, -3) là?", choices: ["(2, -3)", "(-3, 2)", "(2, 3)", "(-2, 3)"], correct: 0, hint: "x trước, y sau.", explain: "(2, -3)." },
      { type: "mc", prompt: "Trung điểm AB với A(1,1), B(3,5) là?", choices: ["(2, 3)", "(1, 3)", "(2, 5)", "(4, 6)"], correct: 0, hint: "((1+3)/2, (1+5)/2) = (2, 3).", explain: "(2, 3)." },
      { type: "num", prompt: "Điểm M(4, -2) có tọa độ là", answer: "(4, -2)", accept: ["(4, -2)", "4, -2"], hint: "x = 4, y = -2.", explain: "(4, -2)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b15",
    num: 15,
    chapter: 4,
    title: "Tọa độ của vector",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Vector AB = (xB - xA, yB - yA).",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tọa độ vector?</strong> Vector biểu diễn bằng cặp số.</p>
      <div class="definition">
        <p>Vector AB = (xB - xA, yB - yA).</p>
        <p>Độ dài AB = √[(xB-xA)² + (yB-yA)²].</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> A(1, 2), B(4, 6). AB = (3, 4). |AB| = √(9+16) = 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> AB + CD = (xA+xC, yA+yC) nếu AB=(xA,yA), CD=(xC,yC).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> AB = (xA - xB, yA - yB) (sai, phải là B - A).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vector AB với A(2,3), B(5,7) là? <em>— (3, 4).</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> AB = (xB - xA, yB - yA).</p></div>
      <figure class="figure" data-animation="g10-b15-vector-coords">
        <svg viewBox="0 0 260 160" role="img" aria-label="Tọa độ của vector">
          <line x1="50" y1="120" x2="180" y2="50" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="120" x2="230" y2="120" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="3 2"/>
          <line x1="180" y1="50" x2="230" y2="120" stroke="#DDDDDD" stroke-width="1" stroke-dasharray="3 2"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="50" r="3" fill="#DDDDDD"/>
          <circle cx="230" cy="120" r="3" fill="#DDDDDD"/>
          <text x="40" y="135" font-size="11" fill="#DDDDDD">A(x₁;y₁)</text>
          <text x="190" y="40" font-size="11" fill="#DDDDDD">B(x₂;y₂)</text>
          <text x="220" y="135" font-size="11" fill="#DDDDDD">M</text>
          <text x="115" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="130" y="95" font-size="10" fill="#58C4DD">AB</text>
          <text x="125" y="140" font-size="10" fill="#83C167">AB = (x₂-x₁; y₂-y₁)</text>
        </svg>
        <figcaption>Tọa độ vector AB = (x₂-x₁; y₂-y₁).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Vector AB với A(1,2), B(4,5) là?", choices: ["(3, 3)", "(1, 1)", "(-3, -3)", "(5, 7)"], correct: 0, hint: "AB = (4-1, 5-2) = (3, 3).", explain: "(3, 3)." },
      { type: "mc", prompt: "Độ dài AB với A(0,0), B(3,4) là?", choices: ["5", "3", "4", "7"], correct: 0, hint: "√(9+16) = 5.", explain: "5." },
      { type: "num", prompt: "Vector AB với A(-1,2), B(2,-1) là", answer: "(3, -3)", accept: ["(3, -3)", "3, -3"], hint: "(2-(-1), -1-2) = (3, -3).", explain: "(3, -3)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b16",
    num: 16,
    chapter: 4,
    title: "Biểu thức tọa độ của phép toán vector",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Cộng, trừ, nhân vector với số thực làm trên tọa độ.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần biểu thức tọa độ?</strong> Tính toán vector qua số học.</p>
      <div class="definition">
        <p>AB + CD = (xA+xC, yA+yC).</p>
        <p>k·AB = (k·xA, k·yA).</p>
        <p>AB - CD = (xA-xC, yA-yC).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> AB = (2, 3), CD = (1, 4). AB + CD = (3, 7). 2·AB = (4, 6).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> M là trung điểm AB: OM = (OA + OB)/2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> AB - CD ≠ (xA-xC, yA-yC) nếu dùng sai công thức.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>AB = (3, -2), CD = (-1, 4). AB - CD = ? <em>— (4, -6).</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Làm trên tọa độ: cộng, trừ, nhân từng thành phần.</p></div>
      <figure class="figure" data-animation="g10-b16-vector-expr">
        <svg viewBox="0 0 260 160" role="img" aria-label="Biểu thức tọa độ của phép toán vector">
          <line x1="50" y1="120" x2="120" y2="60" stroke="#58C4DD" stroke-width="2"/>
          <line x1="120" y1="60" x2="200" y2="100" stroke="#FC6255" stroke-width="2"/>
          <line x1="50" y1="120" x2="200" y2="100" stroke="#83C167" stroke-width="2"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="120" cy="60" r="3" fill="#DDDDDD"/>
          <circle cx="200" cy="100" r="3" fill="#DDDDDD"/>
          <text x="40" y="135" font-size="11" fill="#DDDDDD">A</text>
          <text x="130" y="50" font-size="11" fill="#58C4DD">B</text>
          <text x="210" y="115" font-size="11" fill="#FC6255">C</text>
          <text x="80" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="95" y="95" font-size="10" fill="#58C4DD">AB</text>
          <text x="160" y="80" font-size="11" fill="#FC6255">→</text>
          <text x="175" y="85" font-size="10" fill="#FC6255">BC</text>
          <text x="120" y="140" font-size="10" fill="#83C167">AB + BC = AC</text>
          <text x="110" y="60" font-size="10" fill="#DDDDDD">(x₁+x₂; y₁+y₂)</text>
        </svg>
        <figcaption>Biểu thức tọa độ: AB + BC = AC.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "AB = (2, 3), CD = (-1, 2). AB + CD = ?", choices: ["(1, 5)", "(3, 5)", "(1, 1)", "(-2, 6)"], correct: 0, hint: "(2-1, 3+2) = (1, 5).", explain: "(1, 5)." },
      { type: "mc", prompt: "AB = (4, -2), k = 1/2. k·AB = ?", choices: ["(2, -1)", "(8, -4)", "(2, 1)", "(-2, 1)"], correct: 0, hint: "(4/2, -2/2) = (2, -1).", explain: "(2, -1)." },
      { type: "num", prompt: "AB = (5, -3), CD = (2, 1). AB - 2·CD = ?", answer: "(1, -5)", accept: ["(1, -5)", "1, -5"], hint: "2·CD=(4,2), (5-4, -3-2)=(1,-5).", explain: "(1, -5)." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b17",
    num: 17,
    chapter: 5,
    title: "Giá trị lượng giác của một góc từ 0° đến 180°",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Sin, cos, tan của góc trong tam giác.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần giá trị lượng giác?</strong> Mở rộng khái niệm lượng giác cho góc tù.</p>
      <div class="definition">
        <p>Với góc α (0° ≤ α ≤ 180°): sin α, cos α, tan α được định nghĩa qua đường tròn đơn vị.</p>
        <p>sin(180° - α) = sin α, cos(180° - α) = -cos α, tan(180° - α) = -tan α.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> sin 30° = 1/2, sin 150° = 1/2. cos 60° = 1/2, cos 120° = -1/2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> sin²α + cos²α = 1 với mọi α.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm dấu cos khi góc tù (cos 120° = -1/2, không phải 1/2).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>cos 120° = ? <em>— -1/2.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> sin(180°-α)=sin α, cos(180°-α)=-cos α.</p></div>
      <figure class="figure" data-animation="g10-b17-trig-values">
        <svg viewBox="0 0 240 160" role="img" aria-label="Giá trị lượng giác trên đường tròn đơn vị">
          <circle cx="120" cy="80" r="50" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <line x1="120" y1="80" x2="170" y2="50" stroke="#83C167" stroke-width="2"/>
          <line x1="120" y1="80" x2="170" y2="80" stroke="#DDDDDD" stroke-width="1"/>
          <line x1="170" y1="80" x2="170" y2="50" stroke="#FC6255" stroke-width="1" stroke-dasharray="3 2"/>
          <circle cx="120" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="170" cy="50" r="3" fill="#DDDDDD"/>
          <text x="115" y="95" font-size="11" fill="#DDDDDD">O</text>
          <text x="175" y="45" font-size="11" fill="#DDDDDD">M</text>
          <text x="175" y="75" font-size="11" fill="#FC6255">H</text>
          <text x="130" y="70" font-size="11" fill="#58C4DD">α</text>
          <text x="175" y="60" font-size="10" fill="#FC6255">sinα</text>
          <text x="145" y="85" font-size="10" fill="#58C4DD">cosα</text>
        </svg>
        <figcaption>Giá trị lượng giác của góc α trên đường tròn đơn vị.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "sin 150° = ?", choices: ["1/2", "-1/2", "√3/2", "-√3/2"], correct: 0, hint: "sin(180°-30°)=sin 30°=1/2.", explain: "1/2." },
      { type: "mc", prompt: "cos 120° = ?", choices: ["-1/2", "1/2", "-√3/2", "√3/2"], correct: 0, hint: "cos(180°-60°)=-cos 60°=-1/2.", explain: "-1/2." },
      { type: "num", prompt: "sin²30° + cos²30° =", answer: "1", accept: ["1"], hint: "sin²α + cos²α = 1 với mọi α.", explain: "1." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b18",
    num: 18,
    chapter: 5,
    title: "Tích vô hướng của hai vector",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "AB·AC = |AB|·|AC|·cos(angle BAC).",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tích vô hướng?</strong> Tích vô hướng liên hệ độ dài và góc.</p>
      <div class="definition">
        <p>Tích vô hướng: AB·AC = |AB|·|AC|·cos(angle BAC).</p>
        <p>AB·AC = 0 khi và chỉ khi AB ⊥ AC.</p>
        <p>Trong tọa độ: (x1, y1)·(x2, y2) = x1x2 + y1y2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> AB = (3, 0), AC = (0, 4). AB·AC = 3·0 + 0·4 = 0 ⇒ AB ⊥ AC.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> AB·AB = |AB|² (bình phương độ dài).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> AB·AC ≠ |AB|·|AC| (thiếu cos).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>AB = (2, 3), AC = (4, -1). AB·AC = ? <em>— 5.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> AB·AC = x1x2 + y1y2 trong tọa độ.</p></div>
      <figure class="figure" data-animation="g10-b18-dot-product">
        <svg viewBox="0 0 260 160" role="img" aria-label="Tích vô hướng của hai vector">
          <line x1="50" y1="120" x2="150" y2="60" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="120" x2="200" y2="80" stroke="#FC6255" stroke-width="2"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="150" cy="60" r="3" fill="#DDDDDD"/>
          <circle cx="200" cy="80" r="3" fill="#DDDDDD"/>
          <text x="40" y="135" font-size="11" fill="#DDDDDD">A</text>
          <text x="160" y="50" font-size="11" fill="#58C4DD">B</text>
          <text x="210" y="90" font-size="11" fill="#FC6255">C</text>
          <text x="100" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="115" y="95" font-size="10" fill="#58C4DD">→</text>
          <text x="120" y="100" font-size="10" fill="#58C4DD">AB</text>
          <text x="125" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="150" y="90" font-size="11" fill="#FC6255">→</text>
          <text x="155" y="95" font-size="10" fill="#FC6255">AC</text>
          <text x="110" y="50" font-size="10" fill="#83C167">AB · AC = |AB||AC|cosα</text>
        </svg>
        <figcaption>Tích vô hướng: AB · AC = |AB||AC|cos(α).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "AB = (1, 2), AC = (3, -1). AB·AC = ?", choices: ["1", "-1", "5", "-5"], correct: 0, hint: "1·3 + 2·(-1) = 1.", explain: "1." },
      { type: "mc", prompt: "AB = (2, 3), AC = (-3, 2). AB·AC = ?", choices: ["0", "12", "-12", "6"], correct: 0, hint: "2·(-3) + 3·2 = 0 ⇒ vuông góc.", explain: "0." },
      { type: "num", prompt: "AB = (4, -1), AC = (2, 3). AB·AC =", answer: "5", accept: ["5"], hint: "4·2 + (-1)·3 = 8 - 3 = 5.", explain: "5." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b19",
    num: 19,
    chapter: 5,
    title: "Ứng dụng tích vô hướng vào tính độ dài và góc",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tính độ dài vector và góc giữa hai vector bằng tích vô hướng.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần ứng dụng tích vô hướng?</strong> Từ tích vô hướng suy ra độ dài và góc.</p>
      <div class="definition">
        <p>|AB| = √(AB·AB).</p>
        <p>cos(angle BAC) = (AB·AC)/(|AB|·|AC|).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> AB = (3, 4). |AB| = √(9+16) = 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> A(0,0), B(1,0), C(0,1). cos(angle BAC) = 0 ⇒ góc 90°.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên căn bậc hai khi tính độ dài.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Góc giữa AB=(1,0) và AC=(0,1) là? <em>— 90°.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> cos α = (AB·AC)/(|AB|·|AC|).</p></div>
      <figure class="figure" data-animation="g10-b19-dot-product-app">
        <svg viewBox="0 0 260 160" role="img" aria-label="Ứng dụng tích vô hướng vào độ dài và góc">
          <line x1="50" y1="120" x2="150" y2="60" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="120" x2="200" y2="120" stroke="#FC6255" stroke-width="2"/>
          <circle cx="50" cy="120" r="3" fill="#DDDDDD"/>
          <circle cx="150" cy="60" r="3" fill="#DDDDDD"/>
          <circle cx="200" cy="120" r="3" fill="#DDDDDD"/>
          <text x="40" y="135" font-size="11" fill="#DDDDDD">A</text>
          <text x="160" y="50" font-size="11" fill="#58C4DD">B</text>
          <text x="210" y="135" font-size="11" fill="#FC6255">C</text>
          <text x="100" y="90" font-size="11" fill="#58C4DD">→</text>
          <text x="115" y="95" font-size="10" fill="#58C4DD">AB</text>
          <text x="150" y="140" font-size="11" fill="#FC6255">→</text>
          <text x="165" y="145" font-size="10" fill="#FC6255">AC</text>
          <text x="80" y="40" font-size="10" fill="#83C167">|AB| = √(x² + y²)</text>
          <text x="130" y="50" font-size="10" fill="#83C167">AB · AC = |AB||AC|cosα</text>
        </svg>
        <figcaption>Ứng dụng tích vô hướng: độ dài và góc.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "|AB| với AB = (5, 12) là?", choices: ["13", "12", "5", "17"], correct: 0, hint: "√(25+144) = 13.", explain: "13." },
      { type: "mc", prompt: "Góc giữa AB=(1,1) và AC=(1,-1) là?", choices: ["90°", "45°", "60°", "30°"], correct: 0, hint: "AB·AC = 0 ⇒ vuông góc.", explain: "90°." },
      { type: "num", prompt: "Độ dài AB với A(1,2), B(4,6) là", answer: "5", accept: ["5"], hint: "AB=(3,4), √(9+16)=5.", explain: "5." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b20",
    num: 20,
    chapter: 5,
    title: "Các hệ thức lượng trong tam giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định lí cosin và định lí sin trong tam giác.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần hệ thức lượng?</strong> Tính cạnh, góc khi biết một số yếu tố.</p>
      <div class="definition">
        <p>Định lí cosin: a² = b² + c² - 2bc·cos A.</p>
        <p>Định lí sin: a/sin A = b/sin B = c/sin C = 2R.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác ABC: AB = 3, AC = 4, góc A = 60°. BC² = 9 + 16 - 2·3·4·0.5 = 13.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác ABC: a = 5, b = 7, góc C = 60°. c² = 25 + 49 - 2·5·7·0.5 = 39.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm công thức cosin (dấu trừ, không phải cộng).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>BC với AB=5, AC=8, góc A=60° là? <em>— √49 = 7.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> a² = b² + c² - 2bc·cos A.</p></div>
      <figure class="figure" data-animation="g10-b20-law-of-cosines">
        <svg viewBox="0 0 260 160" role="img" aria-label="Các hệ thức lượng trong tam giác">
          <polygon points="50,130 200,130 130,40" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <line x1="130" y1="40" x2="130" y2="130" stroke="#83C167" stroke-width="1" stroke-dasharray="3 2"/>
          <circle cx="50" cy="130" r="3" fill="#DDDDDD"/>
          <circle cx="200" cy="130" r="3" fill="#DDDDDD"/>
          <circle cx="130" cy="40" r="3" fill="#DDDDDD"/>
          <text x="40" y="145" font-size="11" fill="#DDDDDD">A</text>
          <text x="210" y="145" font-size="11" fill="#DDDDDD">B</text>
          <text x="130" y="30" font-size="11" fill="#DDDDDD">C</text>
          <text x="85" y="135" font-size="10" fill="#DDDDDD">b</text>
          <text x="165" y="135" font-size="10" fill="#DDDDDD">a</text>
          <text x="140" y="85" font-size="10" fill="#83C167">h</text>
          <text x="110" y="60" font-size="10" fill="#58C4DD">c² = a² + b² - 2ab·cosC</text>
        </svg>
        <figcaption>Hệ thức lượng trong tam giác: định lý cosin.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Tam giác ABC: AB=3, AC=4, góc A=90°. BC = ?", choices: ["5", "4", "3", "7"], correct: 0, hint: "BC² = 9 + 16 = 25 ⇒ BC = 5.", explain: "5." },
      { type: "mc", prompt: "Tam giác ABC: a=6, b=8, góc C=60°. c² = ?", choices: ["52", "28", "100", "16"], correct: 0, hint: "c² = 36 + 64 - 2·6·8·0.5 = 52.", explain: "52." },
      { type: "num", prompt: "Tam giác ABC: AB=5, AC=7, góc A=60°. BC² =", answer: "39", accept: ["39"], hint: "BC² = 25 + 49 - 2·5·7·0.5 = 39.", explain: "39." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },,
  {
    id: "g10-b21",
    num: 21,
    chapter: 7,
    title: "Đường tròn trong mặt phẳng tọa độ",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đường tròn được xác định bởi tâm và bán kính.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần đường tròn?</strong> Đường tròn xuất hiện nhiều trong hình học và thực tế.</p>
      <div class="definition">
        <p>Đường tròn tâm I(a, b), bán kính R: (x - a)² + (y - b)² = R².</p>
        <p>Điểm M(x, y) thuộc đường tròn khi IM = R.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Đường tròn tâm O(0,0), bán kính 5: x² + y² = 25.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Đường tròn tâm I(2, -3), bán kính 4: (x-2)² + (y+3)² = 16.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm dấu khi viết phương trình: (x - a)², không phải (x + a)².</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Đường tròn tâm (1, 2), bán kính 3 là? <em>— (x-1)² + (y-2)² = 9.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Phương trình: (x - a)² + (y - b)² = R².</p></div>
      <figure class="figure" data-animation="g10-b21-circle">
        <svg viewBox="0 0 260 160" role="img" aria-label="Đường tròn trong mặt phẳng tọa độ">
          <circle cx="130" cy="80" r="50" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="130" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="80" r="3" fill="#DDDDDD"/>
          <line x1="130" y1="80" x2="180" y2="80" stroke="#83C167" stroke-width="2"/>
          <text x="125" y="95" font-size="11" fill="#DDDDDD">I(a;b)</text>
          <text x="175" y="95" font-size="11" fill="#DDDDDD">M</text>
          <text x="150" y="95" font-size="10" fill="#83C167">R</text>
          <text x="100" y="40" font-size="11" fill="#58C4DD">(x-a)² + (y-b)² = R²</text>
        </svg>
        <figcaption>Đường tròn (x-a)² + (y-b)² = R² với tâm I(a;b) và bán kính R.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Đường tròn tâm O(0,0), bán kính 2 là?", choices: ["x² + y² = 4", "x² + y² = 2", "(x-2)² + y² = 4", "x² + (y-2)² = 4"], correct: 0, hint: "a=0, b=0, R=2 ⇒ x²+y²=4.", explain: "x² + y² = 4." },
      { type: "mc", prompt: "Đường tròn tâm I(3, -1), bán kính 5 là?", choices: ["(x-3)² + (y+1)² = 25", "(x+3)² + (y-1)² = 25", "(x-3)² + (y-1)² = 25", "(x+3)² + (y+1)² = 25"], correct: 0, hint: "a=3, b=-1 ⇒ (x-3)² + (y-(-1))² = 25.", explain: "(x-3)² + (y+1)² = 25." },
      { type: "num", prompt: "Đường tròn tâm (2, 3), bán kính √5 có phương trình là", answer: "(x-2)² + (y-3)² = 5", accept: ["(x-2)^2 + (y-3)^2 = 5", "(x-2)² + (y-3)² = 5"], hint: "R² = 5.", explain: "(x-2)² + (y-3)² = 5." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b22",
    num: 22,
    chapter: 7,
    title: "Ba đường conic",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Elip, parabol, hypebol là ba đường conic.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần đường conic?</strong> Đường conic xuất hiện trong quỹ đạo hành tinh, phản xạ ánh sáng.</p>
      <div class="definition">
        <p>Elip: tổng khoảng cách đến hai tiêu điểm không đổi.</p>
        <p>Parabol: tập hợp điểm cách đều tiêu điểm và đường chuẩn.</p>
        <p>Hypebol: hiệu khoảng cách đến hai tiêu điểm không đổi.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Elip chuẩn: x²/a² + y²/b² = 1 (a > b > 0).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Parabol chuẩn: y² = 2px (p > 0).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm dạng phương trình giữa elip, parabol, hypebol.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Phương trình nào là parabol? <em>— y² = 4x.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Elip: tổng khoảng cách cố định, Parabol: cách đều tiêu điểm và đường chuẩn.</p></div>
      <figure class="figure" data-animation="g10-b22-conic">
        <svg viewBox="0 0 260 160" role="img" aria-label="Ba đường conic: elip, parabol, hyperbol">
          <!-- Ellipse -->
          <ellipse cx="60" cy="80" rx="40" ry="25" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="60" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="20" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="100" cy="80" r="3" fill="#DDDDDD"/>
          <!-- Parabola -->
          <path d="M140,130 Q180,30 220,130" fill="none" stroke="#FC6255" stroke-width="2"/>
          <circle cx="180" cy="80" r="3" fill="#DDDDDD"/>
          <!-- Hyperbola -->
          <path d="M20,30 Q60,30 100,80 Q140,130 180,130" fill="none" stroke="#83C167" stroke-width="1"/>
          <path d="M20,130 Q60,130 100,80 Q140,30 180,30" fill="none" stroke="#83C167" stroke-width="1"/>
          <text x="30" y="160" font-size="9" fill="#58C4DD">Elip</text>
          <text x="150" y="160" font-size="9" fill="#FC6255">Parabol</text>
          <text x="200" y="160" font-size="9" fill="#83C167">Hyperbol</text>
        </svg>
        <figcaption>Ba đường conic: elip, parabol, hyperbol.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Phương trình nào là elip?", choices: ["x²/4 + y²/9 = 1", "y² = 4x", "x²/4 - y²/9 = 1", "x² + y² = 4"], correct: 0, hint: "Elip có dạng x²/a² + y²/b² = 1.", explain: "x²/4 + y²/9 = 1." },
      { type: "mc", prompt: "Phương trình nào là hypebol?", choices: ["x²/4 - y²/9 = 1", "x²/4 + y²/9 = 1", "y² = 4x", "x² + y² = 4"], correct: 0, hint: "Hypebol có dấu trừ giữa hai phân số.", explain: "x²/4 - y²/9 = 1." },
      { type: "num", prompt: "Parabol y² = 8x có tham số p =", answer: "4", accept: ["4"], hint: "2p = 8 ⇒ p = 4.", explain: "4." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b23",
    num: 23,
    chapter: 8,
    title: "Quy tắc cộng và quy tắc nhân",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Quy tắc cộng cho trường hợp loại trừ, quy tắc nhân cho trường hợp phối hợp.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần quy tắc cộng và nhân?</strong> Giải bài toán đếm số cách thực hiện hành động.</p>
      <div class="definition">
        <p>Quy tắc cộng: Nếu có m cách cho công việc A, n cách cho công việc B, và A, B loại trừ nhau, thì có m + n cách.</p>
        <p>Quy tắc nhân: Nếu có m cách cho công việc A, n cách cho công việc B sau A, thì có m × n cách.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Từ A đến B có 3 đường, B đến C có 2 đường. Từ A đến C có 3 × 2 = 6 cách.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Có 5 nam, 4 nữ. Chọn 1 người: 5 + 4 = 9 cách.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm quy tắc cộng và nhân khi A và B không loại trừ nhau.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Chọn 1 môn từ 3 môn Toán, Văn, Anh là? <em>— 3 cách.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cộng: loại trừ, Nhân: phối hợp.</p></div>
      <figure class="figure" data-animation="g10-b23-addition-rule">
        <svg viewBox="0 0 260 160" role="img" aria-label="Quy tắc cộng và quy tắc nhân">
          <circle cx="80" cy="80" r="30" fill="#58C4DD" fill-opacity="0.3" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="180" cy="80" r="30" fill="#FC6255" fill-opacity="0.3" stroke="#FC6255" stroke-width="2"/>
          <circle cx="80" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="80" r="3" fill="#DDDDDD"/>
          <text x="65" y="105" font-size="11" fill="#58C4DD">A</text>
          <text x="165" y="105" font-size="11" fill="#FC6255">B</text>
          <text x="110" y="45" font-size="11" fill="#58C4DD">n(A ∪ B) = n(A) + n(B)</text>
          <text x="110" y="140" font-size="11" fill="#FC6255">Quy tắc cộng</text>
        </svg>
        <figcaption>Quy tắc cộng: n(A ∪ B) = n(A) + n(B).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Từ nhà đến bến xe có 4 đường, bến xe đến trường có 3 đường. Số cách đi từ nhà đến trường là?", choices: ["12", "7", "4", "3"], correct: 0, hint: "4 × 3 = 12.", explain: "12." },
      { type: "mc", prompt: "Có 5 cuốn sách Toán, 4 cuốn Văn. Chọn 1 cuốn là?", choices: ["9", "20", "5", "4"], correct: 0, hint: "5 + 4 = 9.", explain: "9." },
      { type: "num", prompt: "Từ A đến B có 3 đường, B đến C có 2 đường, C đến D có 2 đường. Số cách từ A đến D là", answer: "12", accept: ["12"], hint: "3 × 2 × 2 = 12.", explain: "12." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b24",
    num: 24,
    chapter: 8,
    title: "Hoán vị, chỉnh hợp",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hoán vị là sắp xếp toàn bộ, chỉnh hợp là chọn có thứ tự.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần hoán vị và chỉnh hợp?</strong> Đếm số cách sắp xếp và chọn phần tử.</p>
      <div class="definition">
        <p>Hoán vị n phần tử: P_n = n!.</p>
        <p>Chỉnh hợp chập k của n phần tử: A_n^k = n!/(n-k)!.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Sắp xếp 3 người vào 3 ghế: 3! = 6 cách.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Chọn 2 người từ 5 người và sắp xếp: A_5^2 = 5 × 4 = 20.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm hoán vị (sắp xếp toàn bộ) với chỉnh hợp (chọn có thứ tự).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Sắp xếp 4 người vào 4 ghế là? <em>— 4! = 24.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hoán vị: P_n = n!, Chỉnh hợp: A_n^k = n!/(n-k)!.</p></div>
      <figure class="figure" data-animation="g10-b24-permutations">
        <svg viewBox="0 0 260 160" role="img" aria-label="Hoán vị, chỉnh hợp">
          <rect x="30" y="40" width="40" height="40" fill="#58C4DD"/>
          <rect x="80" y="40" width="40" height="40" fill="#83C167"/>
          <rect x="130" y="40" width="40" height="40" fill="#FC6255"/>
          <rect x="180" y="40" width="40" height="40" fill="#9A72AC"/>
          <circle cx="30" cy="100" r="3" fill="#DDDDDD"/>
          <circle cx="80" cy="100" r="3" fill="#DDDDDD"/>
          <circle cx="130" cy="100" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="100" r="3" fill="#DDDDDD"/>
          <text x="10" y="125" font-size="10" fill="#58C4DD">A</text>
          <text x="60" y="125" font-size="10" fill="#83C167">B</text>
          <text x="110" y="125" font-size="10" fill="#FC6255">C</text>
          <text x="160" y="125" font-size="10" fill="#9A72AC">D</text>
          <text x="80" y="20" font-size="11" fill="#DDDDDD">P₄ = 4! = 24</text>
          <text x="85" y="145" font-size="11" fill="#58C4DD">Hoán vị</text>
        </svg>
        <figcaption>Hoán vị: Pₙ = n! (4! = 24 sắp xếp).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Sắp xếp 5 người vào 5 ghế là?", choices: ["120", "25", "5", "10"], correct: 0, hint: "5! = 120.", explain: "120." },
      { type: "mc", prompt: "Chọn 2 người từ 6 người và sắp xếp là?", choices: ["30", "15", "12", "6"], correct: 0, hint: "A_6^2 = 6 × 5 = 30.", explain: "30." },
      { type: "num", prompt: "A_5^3 =", answer: "60", accept: ["60"], hint: "5 × 4 × 3 = 60.", explain: "60." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b25",
    num: 25,
    chapter: 8,
    title: "Tổ hợp",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tổ hợp là chọn phần tử không quan tâm thứ tự.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần tổ hợp?</strong> Khi chọn phần tử mà thứ tự không quan trọng.</p>
      <div class="definition">
        <p>Tổ hợp chập k của n phần tử: C_n^k = n!/(k!(n-k)!).</p>
        <p>C_n^k = C_n^{n-k}, C_n^k + C_n^{k-1} = C_{n+1}^k.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Chọn 2 người từ 5 người: C_5^2 = 10.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> C_6^2 = C_6^4 = 15.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm tổ hợp (không thứ tự) với chỉnh hợp (có thứ tự).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>C_4^2 = ? <em>— 6.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> C_n^k = n!/(k!(n-k)!).</p></div>
      <figure class="figure" data-animation="g10-b25-combinations">
        <svg viewBox="0 0 260 160" role="img" aria-label="Tổ hợp">
          <circle cx="80" cy="60" r="20" fill="#58C4DD" fill-opacity="0.3" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="130" cy="60" r="20" fill="#83C167" fill-opacity="0.3" stroke="#83C167" stroke-width="2"/>
          <circle cx="180" cy="60" r="20" fill="#FC6255" fill-opacity="0.3" stroke="#FC6255" stroke-width="2"/>
          <circle cx="105" cy="120" r="20" fill="#9A72AC" fill-opacity="0.3" stroke="#9A72AC" stroke-width="2"/>
          <circle cx="155" cy="120" r="20" fill="#DDDDDD" fill-opacity="0.3" stroke="#DDDDDD" stroke-width="2"/>
          <text x="75" y="65" font-size="11" fill="#58C4DD">A</text>
          <text x="125" y="65" font-size="11" fill="#83C167">B</text>
          <text x="175" y="65" font-size="11" fill="#FC6255">C</text>
          <text x="100" y="125" font-size="11" fill="#9A72AC">D</text>
          <text x="150" y="125" font-size="11" fill="#DDDDDD">E</text>
          <text x="100" y="30" font-size="11" fill="#58C4DD">C(5,3) = 10</text>
          <text x="80" y="150" font-size="11" fill="#83C167">Tổ hợp (không sắp xếp)</text>
        </svg>
        <figcaption>Tổ hợp: C(n,k) = n!/(k!(n-k)!) - chọn k phần tử từ n mà không sắp xếp.</text>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "C_5^2 =", choices: ["10", "20", "25", "5"], correct: 0, hint: "5 × 4 / 2 = 10.", explain: "10." },
      { type: "mc", prompt: "C_6^3 =", choices: ["20", "30", "60", "15"], correct: 0, hint: "6 × 5 × 4 / 6 = 20.", explain: "20." },
      { type: "num", prompt: "Chọn 2 người từ 8 người là", answer: "28", accept: ["28"], hint: "C_8^2 = 8 × 7 / 2 = 28.", explain: "28." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b26",
    num: 26,
    chapter: 9,
    title: "Số gần đúng và sai số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Số gần đúng luôn có sai số, cần biết quy tròn.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần số gần đúng?</strong> Đo đạc thực tế luôn có sai số.</p>
      <div class="definition">
        <p>Số gần đúng là số gần giá trị đúng.</p>
        <p>Sai số tuyệt đối: |a - ā|, trong đó a là giá trị đúng, ā là giá trị gần đúng.</p>
        <p>Quy tròn số: làm tròn đến hàng nhất định.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> π ≈ 3.14, sai số ≈ 0.0016.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> 3.14159 quy tròn đến hàng phần trăm là 3.14.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm quy tròn số với làm tròn sai số.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>2.71828 quy tròn đến hàng phần nghìn là? <em>— 2.718.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Quy tròn đến hàng nào thì chữ số hàng đó giữ nguyên, các chữ số sau bằng 0.</p></div>
      <figure class="figure" data-animation="g10-b26-approximation">
        <svg viewBox="0 0 260 140" role="img" aria-label="Số gần đúng và sai số">
          <line x1="50" y1="80" x2="210" y2="80" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="130" y1="50" x2="130" y2="110" stroke="#58C4DD" stroke-width="2"/>
          <line x1="100" y1="70" x2="100" y2="90" stroke="#FC6255" stroke-width="1" stroke-dasharray="3 2"/>
          <line x1="160" y1="70" x2="160" y2="90" stroke="#FC6255" stroke-width="1" stroke-dasharray="3 2"/>
          <circle cx="130" cy="80" r="3" fill="#DDDDDD"/>
          <circle cx="100" cy="80" r="3" fill="#FC6255"/>
          <circle cx="160" cy="80" r="3" fill="#FC6255"/>
          <text x="125" y="95" font-size="11" fill="#DDDDDD">a</text>
          <text x="90" y="95" font-size="11" fill="#FC6255">a - Δa</text>
          <text x="165" y="95" font-size="11" fill="#FC6255">a + Δa</text>
          <text x="110" y="40" font-size="11" fill="#58C4DD">[a - Δa; a + Δa]</text>
          <text x="115" y="130" font-size="11" fill="#58C167">Độ chính xác Δa</text>
        </svg>
        <figcaption>Số gần đúng a với độ chính xác Δa: khoảng [a - Δa; a + Δa].</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "3.14159 quy tròn đến hàng phần trăm là?", choices: ["3.14", "3.15", "3.142", "3.1"], correct: 0, hint: "Hàng phần trăm là số 4, chữ số sau là 1 < 5 nên giữ nguyên.", explain: "3.14." },
      { type: "mc", prompt: "5.678 quy tròn đến hàng đơn vị là?", choices: ["6", "5", "5.7", "5.68"], correct: 0, hint: "Chữ số hàng đơn vị là 5, chữ số sau là 6 ≥ 5 nên cộng thêm 1.", explain: "6." },
      { type: "num", prompt: "12.3456 quy tròn đến hàng phần trăm là", answer: "12.35", accept: ["12.35"], hint: "Hàng phần trăm là 4, chữ số sau là 5 nên cộng thêm 1.", explain: "12.35." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b27",
    num: 27,
    chapter: 9,
    title: "Các số đặc trưng đo xu thế trung tâm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Số trung bình, trung vị, mode đo vị trí trung tâm của mẫu số liệu.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần số đặc trưng?</strong> Mô tả mẫu số liệu bằng một giá trị đại diện.</p>
      <div class="definition">
        <p>Số trung bình: x̄ = (x₁ + x₂ + ... + x_n)/n.</p>
        <p>Trung vị: giá trị ở giữa khi sắp xếp thứ tự.</p>
        <p>Mode: giá trị xuất hiện nhiều nhất.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Mẫu: 2, 3, 5, 7, 8. Số trung bình = 5, trung vị = 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Mẫu: 1, 2, 2, 3, 4. Mode = 2.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Nhầm trung vị với số trung bình khi có giá trị bất thường.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Mẫu: 1, 3, 5, 7, 9. Trung vị là? <em>— 5.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Số trung bình: tổng chia n, Trung vị: giá trị giữa, Mode: xuất hiện nhiều nhất.</p></div>
      <figure class="figure" data-animation="g10-b27-mean">
        <svg viewBox="0 0 260 140" role="img" aria-label="Số trung bình cộng">
          <line x1="20" y1="100" x2="240" y2="100" stroke="#DDDDDD" stroke-width="1.5"/>
          <rect x="40" y="70" width="30" height="30" fill="#58C4DD"/>
          <rect x="80" y="50" width="30" height="50" fill="#83C167"/>
          <rect x="120" y="40" width="30" height="60" fill="#FC6255"/>
          <rect x="160" y="60" width="30" height="40" fill="#9A72AC"/>
          <rect x="200" y="80" width="30" height="20" fill="#DDDDDD"/>
          <line x1="20" y1="60" x2="240" y2="60" stroke="#58C4DD" stroke-width="1" stroke-dasharray="5 3"/>
          <text x="55" y="110" font-size="10" fill="#58C4DD">4</text>
          <text x="95" y="110" font-size="10" fill="#83C167">6</text>
          <text x="135" y="110" font-size="10" fill="#FC6255">7</text>
          <text x="175" y="110" font-size="10" fill="#9A72AC">5</text>
          <text x="215" y="110" font-size="10" fill="#DDDDDD">3</text>
          <text x="130" y="50" font-size="11" fill="#58C4DD">x̄ = 5</text>
        </svg>
        <figcaption>Số trung bình cộng: x̄ = (x₁ + x₂ + ... + xₙ)/n.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Mẫu: 2, 4, 6, 8, 10. Số trung bình là?", choices: ["6", "5", "4", "7"], correct: 0, hint: "(2+4+6+8+10)/5 = 30/5 = 6.", explain: "6." },
      { type: "mc", prompt: "Mẫu: 1, 2, 2, 3, 4, 5. Trung vị là?", choices: ["2.5", "2", "3", "2.25"], correct: 0, hint: "6 số, trung vị = (2+3)/2 = 2.5.", explain: "2.5." },
      { type: "num", prompt: "Mẫu: 3, 5, 7, 9, 11, 13. Số trung bình là", answer: "8", accept: ["8"], hint: "(3+5+7+9+11+13)/6 = 48/6 = 8.", explain: "8." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b28",
    num: 28,
    chapter: 9,
    title: "Các số đặc trưng đo độ phân tán",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phương sai, độ lệch chuẩn đo mức độ phân tán của mẫu số liệu.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần số đặc trưng đo độ phân tán?</strong> Đánh giá mức độ phân tán quanh giá trị trung bình.</p>
      <div class="definition">
        <p>Phương sai: s² = Σ(x_i - x̄)²/(n-1).</p>
        <p>Độ lệch chuẩn: s = √s².</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Mẫu: 2, 4, 6, 8, 10. x̄ = 6. Phương sai ≈ 10.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Độ lệch chuẩn là căn bậc hai phương sai.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên chia cho n-1 (mẫu) thay vì n (dân số).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Độ lệch chuẩn là căn bậc hai của? <em>— Phương sai.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> Phương sai đo bình phương khoảng cách, độ lệch chuẩn có cùng đơn vị.</p></div>
      <figure class="figure" data-animation="g10-b28-stddev">
        <svg viewBox="0 0 260 140" role="img" aria-label="Độ lệch chuẩn">
          <line x1="20" y1="100" x2="240" y2="100" stroke="#DDDDDD" stroke-width="1.5"/>
          <rect x="40" y="70" width="30" height="30" fill="#58C4DD"/>
          <rect x="80" y="50" width="30" height="50" fill="#83C167"/>
          <rect x="120" y="40" width="30" height="60" fill="#FC6255"/>
          <rect x="160" y="60" width="30" height="40" fill="#9A72AC"/>
          <rect x="200" y="80" width="30" height="20" fill="#DDDDDD"/>
          <line x1="20" y1="60" x2="240" y2="60" stroke="#58C4DD" stroke-width="1" stroke-dasharray="5 3"/>
          <line x1="20" y1="80" x2="240" y2="80" stroke="#58C4DD" stroke-width="1" stroke-dasharray="5 3"/>
          <circle cx="130" cy="100" r="3" fill="#DDDDDD"/>
          <text x="125" y="115" font-size="11" fill="#DDDDDD">x̄</text>
          <text x="30" y="160" font-size="9" fill="#58C4DD">σ ≈ 1.41</text>
          <text x="120" y="50" font-size="11" fill="#58C4DD">Độ lệch chuẩn</text>
        </svg>
        <figcaption>Độ lệch chuẩn: σ = √[(x₁-x̄)² + ... + (xₙ-x̄)²]/n.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Độ lệch chuẩn là căn bậc hai của?", choices: ["Phương sai", "Số trung bình", "Trung vị", "Mode"], correct: 0, hint: "s = √s².", explain: "Phương sai." },
      { type: "mc", prompt: "Phương sai càng lớn thì dữ liệu?", choices: ["Phân tán nhiều", "Phân tán ít", "Đều nhau", "Không thay đổi"], correct: 0, hint: "Phương sai đo độ phân tán.", explain: "Phân tán nhiều." },
      { type: "num", prompt: "Mẫu: 2, 4, 6. Phương sai ≈", answer: "4", accept: ["4"], hint: "x̄=4, (4+0+4)/2 = 4.", explain: "4." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b29",
    num: 29,
    chapter: 10,
    title: "Xác suất của biến cố trong một số trò chơi đơn giản",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Xác suất là tỉ lệ giữa số kết quả thuận lợi và tổng số kết quả.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần xác suất?</strong> Đánh giá khả năng xảy ra của biến cố.</p>
      <div class="definition">
        <p>Xác suất của biến cố A: P(A) = số kết quả thuận lợi / tổng số kết quả.</p>
        <p>0 ≤ P(A) ≤ 1. P(∅) = 0, P(Ω) = 1.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Gieo xúc xắc: P(ra số chẵn) = 3/6 = 1/2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Gieo 2 xúc xắc: P(tổng bằng 7) = 6/36 = 1/6.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên rằng các kết quả phải đồng khả năng.</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Gieo đồng xu: P(sấp) = ? <em>— 1/2.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> P(A) = số kết quả thuận lợi / tổng số kết quả đồng khả năng.</p></div>
      <figure class="figure" data-animation="g10-b29-probability-game">
        <svg viewBox="0 0 260 160" role="img" aria-label="Xác suất trong trò chơi đơn giản">
          <circle cx="130" cy="80" r="50" fill="#58C4DD" fill-opacity="0.3" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="130" cy="80" r="3" fill="#DDDDDD"/>
          <line x1="130" y1="80" x2="180" y2="30" stroke="#FC6255" stroke-width="2"/>
          <line x1="130" y1="80" x2="80" y2="130" stroke="#83C167" stroke-width="2"/>
          <line x1="130" y1="80" x2="180" y2="130" stroke="#9A72AC" stroke-width="2"/>
          <circle cx="180" cy="30" r="3" fill="#DDDDDD"/>
          <circle cx="80" cy="130" r="3" fill="#DDDDDD"/>
          <circle cx="180" cy="130" r="3" fill="#DDDDDD"/>
          <text x="125" y="95" font-size="11" fill="#DDDDDD">Ω</text>
          <text x="185" y="25" font-size="11" fill="#FC6255">A</text>
          <text x="65" y="145" font-size="11" fill="#83C167">B</text>
          <text x="185" y="145" font-size="11" fill="#9A72AC">C</text>
          <text x="120" y="40" font-size="11" fill="#58C4DD">P(A) = 1/3</text>
        </svg>
        <figcaption>Xác suất trong trò chơi đơn giản với không gian mẫu Ω.</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "Gieo xúc xắc: P(ra số lẻ) =", choices: ["1/2", "1/3", "1/6", "5/6"], correct: 0, hint: "3 số lẻ (1,3,5) / 6 mặt.", explain: "1/2." },
      { type: "mc", prompt: "Gieo đồng xu 2 lần: P(được 1 sấp 1 ngửa) =", choices: ["1/2", "1/4", "3/4", "1"], correct: 0, hint: "2 kết quả thuận lợi (sấp-ngửa, ngửa-sấp) / 4 kết quả.", explain: "1/2." },
      { type: "num", prompt: "Gieo xúc xắc: P(ra số > 4) =", answer: "1/3", accept: ["1/3", "0.333", "0.33"], hint: "2 số (5,6) / 6 mặt = 1/3.", explain: "1/3." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },
  {
    id: "g10-b30",
    num: 30,
    chapter: 10,
    title: "Xác suất của biến cố",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Xác suất của hợp, giao, và biến cố đối.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Vì sao cần xác suất của biến cố?</strong> Tính xác suất khi có nhiều biến cố kết hợp.</p>
      <div class="definition">
        <p>P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</p>
        <p>P(A') = 1 - P(A) (biến cố đối).</p>
        <p>A và B độc lập: P(A ∩ B) = P(A) × P(B).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> P(A) = 0.4, P(B) = 0.3, P(A ∩ B) = 0.1. P(A ∪ B) = 0.6.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> P(A) = 0.2 ⇒ P(A') = 0.8.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong> Quên trừ P(A ∩ B) khi tính P(A ∪ B).</p>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>P(A) = 0.3 ⇒ P(A') = ? <em>— 0.7.</em></p>
      </details>
      <div class="memory"><p><strong>Nhìn lại.</strong> P(A') = 1 - P(A), P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</p></div>
      <figure class="figure" data-animation="g10-b30-probability">
        <svg viewBox="0 0 260 160" role="img" aria-label="Xác suất của biến cố">
          <rect x="30" y="50" width="200" height="80" fill="#58C4DD" fill-opacity="0.2" stroke="#58C4DD" stroke-width="2"/>
          <rect x="60" y="70" width="140" height="40" fill="#FC6255" fill-opacity="0.4" stroke="#FC6255" stroke-width="2"/>
          <circle cx="60" cy="90" r="3" fill="#DDDDDD"/>
          <circle cx="200" cy="90" r="3" fill="#DDDDDD"/>
          <text x="45" y="40" font-size="11" fill="#58C167">Ω</text>
          <text x="110" y="65" font-size="11" fill="#FC6255">E</text>
          <text x="75" y="95" font-size="11" fill="#DDDDDD">A</text>
          <text x="185" y="95" font-size="11" fill="#DDDDDD">B</text>
          <text x="115" y="135" font-size="11" fill="#58C4DD">P(E) = n(E)/n(Ω)</text>
        </svg>
        <figcaption>Xác suất của biến cố E: P(E) = n(E)/n(Ω).</figcaption>
      </figure>

    `,
    
      <div class="example">
        <p><strong>Làm chặt.</strong> Bước 1: Phân tích bài toán. Bước 2: Áp dụng công thức. Bước 3: Tính toán cẩn thận.</p>
      </div>
exercises: [
      { type: "mc", prompt: "P(A) = 0.25 ⇒ P(A') =", choices: ["0.75", "0.25", "0.5", "1"], correct: 0, hint: "1 - 0.25 = 0.75.", explain: "0.75." },
      { type: "mc", prompt: "P(A) = 0.4, P(B) = 0.3, P(A ∩ B) = 0.1. P(A ∪ B) =", choices: ["0.6", "0.7", "0.5", "0.8"], correct: 0, hint: "0.4 + 0.3 - 0.1 = 0.6.", explain: "0.6." },
      { type: "num", prompt: "P(A) = 0.6 ⇒ P(A') =", answer: "0.4", accept: ["0.4", ".4"], hint: "1 - 0.6 = 0.4.", explain: "0.4." },
    ,
        { type: "mc", prompt: "Đáp án nào đúng nhất?", choices: ["A", "B", "C", "D"], correct: 0, hint: "Xem lại lý thuyết.", explain: "Đáp án A đúng." },
],
  },

  {
    id: "g10-ch2-quiz",
    num: 99,
    chapter: 2,
    title: "Chương 2: Hàm số bậc nhất và bậc hai - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập hàm số bậc nhất y = ax + b và hàm số bậc hai y = ax².",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về hàm số bậc nhất và bậc hai.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Hàm số y = 3x - 2 có hệ số góc là?", choices: ["3", "-2", "2", "-3"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "3." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -2x + 1 cắt trục Oy tại điểm?", choices: ["(0,1)", "(1,0)", "(0,-1)", "(-1,0)"], correct: 0, hint: "x=0 → y=1.", explain: "(0,1)." },
      { type: "mc", prompt: "Câu 3: Hai đường thẳng y = 2x + 1 và y = 2x - 3:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
      { type: "mc", prompt: "Câu 4: Hàm số y = -x + 5 là:", choices: ["Nghịch biến", "Đồng biến", "Không đổi", "Không xác định"], correct: 0, hint: "a = -1 < 0 nên nghịch biến.", explain: "Nghịch biến." },
      { type: "mc", prompt: "Câu 5: Đường thẳng y = ax + 3 đi qua (1,5) thì a =", choices: ["2", "3", "4", "5"], correct: 0, hint: "5 = a·1 + 3 → a = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 6: Đồ thị hàm số y = x² là:", choices: ["Parabol", "Đường thẳng", "Hyperbol", "Elip"], correct: 0, hint: "y = x² là parabol qua gốc.", explain: "Parabol." },
      { type: "mc", prompt: "Câu 7: Hàm số y = 2x² có giá trị nhỏ nhất là?", choices: ["0", "2", "1", "4"], correct: 0, hint: "x² ≥ 0 → 2x² ≥ 0.", explain: "0." },
      { type: "mc", prompt: "Câu 8: Đỉnh của parabol y = x² - 4x + 3 là?", choices: ["(2,-1)", "(2,1)", "(-2,-1)", "(-2,1)"], correct: 0, hint: "x = -b/(2a) = 4/2 = 2, y = 4 - 8 + 3 = -1.", explain: "(2,-1)." },
    ],
  },
  {
    id: "g10-ch3-quiz",
    num: 100,
    chapter: 3,
    title: "Chương 3: Phương trình và hệ phương trình - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phương trình bậc nhất, bậc hai, hệ phương trình.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phương trình và hệ phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phương trình 2x + 3 = 7 có nghiệm là?", choices: ["2", "3", "4", "5"], correct: 0, hint: "2x = 4 → x = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 2: Phương trình x² - 5x + 6 = 0 có nghiệm là?", choices: ["2 và 3", "1 và 6", "-2 và -3", "4 và 1"], correct: 0, hint: "(x-2)(x-3)=0 → x=2,3.", explain: "2 và 3." },
      { type: "mc", prompt: "Câu 3: Hệ phương trình x + y = 5, x - y = 1 có nghiệm là?", choices: ["(3,2)", "(2,3)", "(4,1)", "(1,4)"], correct: 0, hint: "Cộng hai phương trình: 2x = 6 → x=3, y=2.", explain: "(3,2)." },
      { type: "mc", prompt: "Câu 4: Phương trình x² + 4x + 4 = 0 có nghiệm kép là?", choices: ["-2", "2", "4", "-4"], correct: 0, hint: "(x+2)²=0 → x=-2.", explain: "-2." },
      { type: "mc", prompt: "Câu 5: Phương trình x² - 9 = 0 có nghiệm là?", choices: ["3 và -3", "3", "-3", "9"], correct: 0, hint: "x²=9 → x=±3.", explain: "3 và -3." },
      { type: "mc", prompt: "Câu 6: Hệ phương trình 2x + y = 5, 4x + 2y = 10 là:", choices: ["Vô số nghiệm", "Vô nghiệm", "Nghiệm duy nhất", "Không xác định"], correct: 0, hint: "Hai phương trình tương đương.", explain: "Vô số nghiệm." },
      { type: "mc", prompt: "Câu 7: Phương trình x² + 1 = 0 có nghiệm thực không?", choices: ["Không có", "Có một nghiệm", "Có hai nghiệm", "Vô số nghiệm"], correct: 0, hint: "x² = -1 vô nghiệm thực.", explain: "Không có." },
      { type: "mc", prompt: "Câu 8: Tổng hai nghiệm của phương trình x² - 5x + 6 = 0 là?", choices: ["5", "-5", "6", "-6"], correct: 0, hint: "Tổng = -b/a = 5.", explain: "5." },
    ],
  },
  {
    id: "g10-ch4-quiz",
    num: 101,
    chapter: 4,
    title: "Chương 4: Vectơ - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vectơ, tổng, hiệu, tích với số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vectơ.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB có điểm đầu là:", choices: ["A", "B", "Trung điểm AB", "Không xác định"], correct: 0, hint: "AB: A đầu, B cuối.", explain: "A." },
      { type: "mc", prompt: "Câu 2: Vector AB + Vector BA =", choices: ["Vector 0", "Vector AA", "Vector BB", "2·Vector AB"], correct: 0, hint: "AB + BA = AB - AB = 0.", explain: "Vector 0." },
      { type: "mc", prompt: "Câu 3: 2·Vector AB =", choices: ["Vector cùng hướng AB, độ dài gấp đôi", "Vector ngược hướng AB, độ dài gấp đôi", "Vector cùng hướng AB, độ dài bằng AB", "Vector 0"], correct: 0, hint: "k·AB: cùng hướng nếu k>0, |k| lần độ dài.", explain: "Vector cùng hướng AB, độ dài gấp đôi." },
      { type: "mc", prompt: "Câu 4: Vector AB - Vector AC =", choices: ["Vector CB", "Vector BC", "Vector AC", "Vector BA"], correct: 0, hint: "AB - AC = AB + CA = CB.", explain: "Vector CB." },
      { type: "mc", prompt: "Câu 5: Trung điểm I của AB thì:", choices: ["Vector IA + Vector IB = 0", "Vector IA = Vector IB", "Vector AB = 2·Vector AI", "Cả A và C"], correct: 0, hint: "IA = -IB → IA + IB = 0.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Ba điểm A, B, C thẳng hàng khi:", choices: ["Vector AB và Vector AC cùng phương", "Vector AB = Vector AC", "AB = AC", "Góc BAC = 90°"], correct: 0, hint: "Cùng phương ↔ cùng đường thẳng.", explain: "Vector AB và Vector AC cùng phương." },
      { type: "mc", prompt: "Câu 7: Tam giác ABC, G là trọng tâm thì:", choices: ["Vector GA + Vector GB + Vector GC = 0", "Vector GA = Vector GB = Vector GC", "G là trung điểm AB", "G là trực tâm"], correct: 0, hint: "GA + GB + GC = 0 với G trọng tâm.", explain: "Vector GA + Vector GB + Vector GC = 0." },
      { type: "mc", prompt: "Câu 8: Vector 0 là vector có:", choices: ["Độ dài bằng 0", "Độ dài bằng 1", "Hướng tùy ý", "Không xác định"], correct: 0, hint: "Vector 0 có độ dài 0.", explain: "Độ dài bằng 0." },
    ],
  },
  {
    id: "g10-ch5-quiz",
    num: 102,
    chapter: 5,
    title: "Chương 5: Tích vô hướng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tích vô hướng, độ dài, góc giữa hai vector.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tích vô hướng.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Tích vô hướng AB·AC =", choices: ["|AB|·|AC|·cos(angle BAC)", "|AB|·|AC|·sin(angle BAC)", "|AB| + |AC|", "|AB| - |AC|"], correct: 0, hint: "a·b = |a||b|cos(a,b).", explain: "|AB|·|AC|·cos(angle BAC)." },
      { type: "mc", prompt: "Câu 2: Hai vector vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Độ dài bằng nhau", "Cùng hướng"], correct: 0, hint: "a·b = 0 ↔ a ⊥ b.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 3: |Vector AB|² =", choices: ["AB·AB", "AB·BA", "AB + AB", "AB - AB"], correct: 0, hint: "|a|² = a·a.", explain: "AB·AB." },
      { type: "mc", prompt: "Câu 4: Cosin góc giữa hai vector a và b là:", choices: ["(a·b)/(|a||b|)", "(a·b)/|a|", "(a·b)/|b|", "a·b"], correct: 0, hint: "cosθ = (a·b)/(|a||b|).", explain: "(a·b)/(|a||b|)." },
      { type: "mc", prompt: "Câu 5: Nếu AB·AC = 0 thì tam giác ABC có:", choices: ["Góc A vuông", "Góc B vuông", "Góc C vuông", "Đều"], correct: 0, hint: "AB·AC = 0 ↔ AB ⊥ AC.", explain: "Góc A vuông." },
      { type: "mc", prompt: "Câu 6: Trong mặt phẳng tọa độ, Vector AB = (xB-xA, yB-yA). AB·AC =", choices: ["(xB-xA)(xC-xA) + (yB-yA)(yC-yA)", "(xB-xA)(xC-xA) - (yB-yA)(yC-yA)", "(xB-xA) + (xC-xA)", "(yB-yA) + (yC-yA)"], correct: 0, hint: "Tích vô hướng = tổng tích các thành phần.", explain: "(xB-xA)(xC-xA) + (yB-yA)(yC-yA)." },
      { type: "mc", prompt: "Câu 7: Khoảng cách giữa A(xA,yA) và B(xB,yB) là?", choices: ["√[(xB-xA)² + (yB-yA)²]", "√[(xB-xA) + (yB-yA)]", "(xB-xA)² + (yB-yA)²", "xB-xA + yB-yA"], correct: 0, hint: "AB = √[(xB-xA)² + (yB-yA)²].", explain: "√[(xB-xA)² + (yB-yA)²]." },
      { type: "mc", prompt: "Câu 8: Nếu |a| = 3, |b| = 4, góc(a,b) = 90° thì a·b =", choices: ["0", "12", "6", "24"], correct: 0, hint: "a·b = 3·4·cos90° = 12·0 = 0.", explain: "0." },
    ],
  },

  {
    id: "g10-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Mệnh đề, Tập hợp",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Mệnh đề, Tập hợp.",
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
      { type: "mc", prompt: "Câu 1: Mệnh đề nào đúng?", choices: ["2+3=5", "2+3=6", "x²≥0 với mọi x", "Cả A và C"], correct: 3, hint: "2+3=5 đúng, x²≥0 luôn đúng.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 2: Tập hợp A = {x∈Z | -2<x≤2} có bao nhiêu phần tử?", choices: ["4", "5", "3", "6"], correct: 0, hint: "A = {-1,0,1,2} → 4 phần tử.", explain: "4." },
      { type: "text", prompt: "Cho A = {1,2,3}, B = {2,3,4}. A∩B =", answer: "{2,3}", accept: ["{2,3}", "2,3"], hint: "Giao: phần tử chung.", explain: "{2,3}." },
      { type: "mc", prompt: "Câu 4: Mệnh đề phủ định của '∀x∈R, x²≥0' là?", choices: ["∃x∈R, x²<0", "∀x∈R, x²<0", "∃x∈R, x²≤0", "∀x∈R, x²≤0"], correct: 0, hint: "Phủ định ∀ là ∃, đổi dấu.", explain: "∃x∈R, x²<0." },
    ],
  },
  {
    id: "g10-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Hàm số bậc nhất, bậc hai",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Hàm số bậc nhất, bậc hai.",
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
      { type: "mc", prompt: "Câu 1: Hàm số y = -2x + 3 là?", choices: ["Nghịch biến", "Đồng biến", "Không đổi", "Không xác định"], correct: 0, hint: "a = -2 < 0 nên nghịch biến.", explain: "Nghịch biến." },
      { type: "mc", prompt: "Câu 2: Đỉnh của parabol y = x² - 4x + 3 là?", choices: ["(2,-1)", "(2,1)", "(-2,-1)", "(-2,1)"], correct: 0, hint: "x = -b/(2a) = 2, y = 4 - 8 + 3 = -1.", explain: "(2,-1)." },
      { type: "text", prompt: "Tìm nghiệm của phương trình x² - 5x + 6 = 0.", answer: "2 và 3", accept: ["2 và 3", "x=2,x=3"], hint: "(x-2)(x-3)=0 → x=2,3.", explain: "2 và 3." },
      { type: "mc", prompt: "Câu 4: Hai đường thẳng y = 3x + 1 và y = -1/3x + 2:", choices: ["Vuông góc", "Song song", "Cắt nhau không vuông", "Trùng nhau"], correct: 0, hint: "3 × (-1/3) = -1 → vuông góc.", explain: "Vuông góc." },
    ],
  },

  {
    id: "g10-ch3-quiz",
    num: 103,
    chapter: 3,
    title: "Chương 3: Phương trình và hệ phương trình - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phương trình bậc nhất, bậc hai, hệ phương trình.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phương trình và hệ phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Phương trình 3x - 7 = 8 có nghiệm là?", choices: ["5", "4", "6", "3"], correct: 0, hint: "3x = 15 → x = 5.", explain: "5." },
      { type: "mc", prompt: "Câu 2: Phương trình x² - 6x + 9 = 0 có nghiệm kép là?", choices: ["3", "-3", "9", "-9"], correct: 0, hint: "(x-3)²=0 → x=3.", explain: "3." },
      { type: "text", prompt: "Giải hệ phương trình: x + y = 7, x - y = 3.", answer: "(5,2)", accept: ["(5,2)", "x=5,y=2"], hint: "Cộng hai phương trình: 2x = 10 → x=5, y=2.", explain: "(5,2)." },
      { type: "mc", prompt: "Câu 4: Phương trình x² + 5x + 6 = 0 có nghiệm là?", choices: ["-2 và -3", "2 và 3", "-2 và 3", "2 và -3"], correct: 0, hint: "(x+2)(x+3)=0 → x=-2,-3.", explain: "-2 và -3." },
      { type: "mc", prompt: "Câu 5: Phương trình x² - 4x + 4 = 0 có delta (Δ) là?", choices: ["0", "4", "-4", "16"], correct: 0, hint: "Δ = b²-4ac = 16-16=0.", explain: "0." },
      { type: "mc", prompt: "Câu 6: Tổng hai nghiệm của phương trình x² - 7x + 12 = 0 là?", choices: ["7", "-7", "12", "-12"], correct: 0, hint: "Tổng = -b/a = 7.", explain: "7." },
      { type: "mc", prompt: "Câu 7: Hệ phương trình x + 2y = 5, 2x + 4y = 10 có:", choices: ["Vô số nghiệm", "Vô nghiệm", "Nghiệm duy nhất", "Không xác định"], correct: 0, hint: "Hai phương trình tương đương.", explain: "Vô số nghiệm." },
      { type: "mc", prompt: "Câu 8: Phương trình x² + 1 = 0 có nghiệm thực không?", choices: ["Không có", "Có một nghiệm", "Có hai nghiệm", "Vô số nghiệm"], correct: 0, hint: "x² = -1 vô nghiệm thực.", explain: "Không có." },
    ],
  },

  {
    id: "g10-ch4-quiz",
    num: 104,
    chapter: 4,
    title: "Chương 4: Vectơ - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập vectơ, tổng, hiệu, tích với số.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vectơ.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB có điểm đầu là?", choices: ["A", "B", "Trung điểm AB", "Không xác định"], correct: 0, hint: "AB: A đầu, B cuối.", explain: "A." },
      { type: "mc", prompt: "Câu 2: Vector AB + Vector BA =", choices: ["Vector 0", "Vector AA", "Vector BB", "2·Vector AB"], correct: 0, hint: "AB + BA = AB - AB = 0.", explain: "Vector 0." },
      { type: "mc", prompt: "Câu 3: 2·Vector AB =", choices: ["Vector cùng hướng AB, độ dài gấp đôi", "Vector ngược hướng AB, độ dài gấp đôi", "Vector cùng hướng AB, độ dài bằng AB", "Vector 0"], correct: 0, hint: "k·AB: cùng hướng nếu k>0, |k| lần độ dài.", explain: "Vector cùng hướng AB, độ dài gấp đôi." },
      { type: "mc", prompt: "Câu 4: Vector AB - Vector AC =", choices: ["Vector CB", "Vector BC", "Vector AC", "Vector BA"], correct: 0, hint: "AB - AC = AB + CA = CB.", explain: "Vector CB." },
      { type: "mc", prompt: "Câu 5: Trung điểm I của AB thì:", choices: ["Vector IA + Vector IB = 0", "Vector IA = Vector IB", "Vector AB = 2·Vector AI", "Cả A và C"], correct: 0, hint: "IA = -IB → IA + IB = 0.", explain: "Cả A và C." },
      { type: "mc", prompt: "Câu 6: Ba điểm A, B, C thẳng hàng khi:", choices: ["Vector AB và Vector AC cùng phương", "Vector AB = Vector AC", "AB = AC", "Góc BAC = 90°"], correct: 0, hint: "Cùng phương ↔ cùng đường thẳng.", explain: "Vector AB và Vector AC cùng phương." },
      { type: "mc", prompt: "Câu 7: Tam giác ABC, G là trọng tâm thì:", choices: ["Vector GA + Vector GB + Vector GC = 0", "Vector GA = Vector GB = Vector GC", "G là trung điểm AB", "G là trực tâm"], correct: 0, hint: "GA + GB + GC = 0 với G trọng tâm.", explain: "Vector GA + Vector GB + Vector GC = 0." },
      { type: "mc", prompt: "Câu 8: Vector 0 là vector có:", choices: ["Độ dài bằng 0", "Độ dài bằng 1", "Hướng tùy ý", "Không xác định"], correct: 0, hint: "Vector 0 có độ dài 0.", explain: "Độ dài bằng 0." },
    ],
  },

  {
    id: "g10-ch5-quiz",
    num: 105,
    chapter: 5,
    title: "Chương 5: Phương pháp tọa độ trong mặt phẳng - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập tọa độ điểm, vector, phương trình đường thẳng.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tọa độ trong mặt phẳng.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Vector AB với A(1,2), B(4,6) là?", choices: ["(3,4)", "(5,8)", "(-3,-4)", "(4,6)"], correct: 0, hint: "AB = (4-1, 6-2) = (3,4).", explain: "(3,4)." },
      { type: "mc", prompt: "Câu 2: Khoảng cách giữa A(0,0) và B(3,4) là?", choices: ["5", "4", "3", "7"], correct: 0, hint: "AB = √(9+16) = 5.", explain: "5." },
      { type: "text", prompt: "Tính tích vô hướng AB·AC với A(0,0), B(2,3), C(4,1).", answer: "11", accept: ["11"], hint: "AB=(2,3), AC=(4,1). AB·AC = 8+3 = 11.", explain: "11." },
      { type: "mc", prompt: "Câu 4: Phương trình đường thẳng đi qua A(1,2) và có vector pháp tuyến (3,-4) là?", choices: ["3(x-1)-4(y-2)=0", "3(x+1)-4(y+2)=0", "3x-4y+5=0", "3x+4y-11=0"], correct: 0, hint: "3(x-1)-4(y-2)=0 → 3x-4y+5=0.", explain: "3(x-1)-4(y-2)=0." },
      { type: "mc", prompt: "Câu 5: Phương trình tham số đường thẳng qua A(1,2) và có vector chỉ phương (3,4) là?", choices: ["x=1+3t, y=2+4t", "x=1-3t, y=2-4t", "x=3t, y=4t", "x=1+4t, y=2+3t"], correct: 0, hint: "x=x₀+at, y=y₀+bt.", explain: "x=1+3t, y=2+4t." },
      { type: "mc", prompt: "Câu 6: Hai vector (2,3) và (4,-8/3) vuông góc khi:", choices: ["Tích vô hướng bằng 0", "Tích vô hướng bằng 1", "Cùng phương", "Độ dài bằng nhau"], correct: 0, hint: "2×4 + 3×(-8/3) = 8-8 = 0.", explain: "Tích vô hướng bằng 0." },
      { type: "mc", prompt: "Câu 7: Khoảng cách từ điểm A(1,2) đến đường thẳng 3x-4y+5=0 là?", choices: ["0", "1", "2", "3"], correct: 0, hint: "d = |3-8+5|/5 = 0/5 = 0.", explain: "0." },
      { type: "mc", prompt: "Câu 8: Phương trình đường tròn tâm I(2,-3) bán kính 4 là?", choices: ["(x-2)²+(y+3)²=16", "(x+2)²+(y-3)²=16", "(x-2)²+(y-3)²=16", "(x-2)²+(y+3)²=4"], correct: 0, hint: "R² = 16.", explain: "(x-2)²+(y+3)²=16." },
    ],
  },
];
