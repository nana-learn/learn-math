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
    summary: "Luyện tập hàm số bậc nhất y = ax + b và hàm số bậc hai y = ax².",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về hàm số bậc nhất và bậc hai.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    summary: "Luyện tập phương trình bậc nhất, bậc hai, hệ phương trình.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phương trình và hệ phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    summary: "Luyện tập vectơ, tổng, hiệu, tích với số.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về vectơ.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    summary: "Luyện tập tích vô hướng, độ dài, góc giữa hai vector.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về tích vô hướng.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    summary: "Đề kiểm tra 45 phút chương Mệnh đề, Tập hợp.",
    body: String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    num: 103,
    chapter: 3,
    title: "Chương 3: Phương trình và hệ phương trình - Trắc nghiệm",
    summary: "Luyện tập phương trình bậc nhất, bậc hai, hệ phương trình.",
    body: String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về phương trình và hệ phương trình.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
    

  {
    
];
