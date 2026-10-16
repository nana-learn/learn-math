/**
 * Grade 9 Math lessons
 * Geometry: Circle, Triangle, Polygon topics
 */

const G9_CHAPTERS = [
  { id: 9, title: "Đường tròn" },
  { id: 10, title: "Góc với đường tròn" },

  {
    id: "c9-ch1-quiz",
    num: 99,
    chapter: 1,
    title: "Chương 1: Căn bậc hai. Căn bậc ba - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    summary: "Luyện tập căn bậc hai và căn bậc ba.", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về căn bậc hai và căn bậc ba.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "√16 = 4." },
      { type: "mc", prompt: "Câu 2: √(25/9) =", choices: ["5/3", "-5/3", "±5/3", "25/3"], correct: 0, hint: "√(a/b) = √a/√b.", explain: "√(25/9) = 5/3." },
      { type: "mc", prompt: "Câu 3: √(16·9) =", choices: ["12", "24", "36", "48"], correct: 0, hint: "√(ab) = √a·√b = 4·3 = 12.", explain: "12." },
      { type: "mc", prompt: "Câu 4: √(25-16) =", choices: ["3", "9", "√9", "√41"], correct: 0, hint: "25-16=9, √9=3.", explain: "3." },
      { type: "mc", prompt: "Câu 5: 2√3 + √3 =", choices: ["3√3", "2√6", "3√6", "√9"], correct: 0, hint: "2√3 + 1√3 = 3√3.", explain: "3√3." },
      { type: "mc", prompt: "Câu 6: ∛8 =", choices: ["2", "-2", "±2", "4"], correct: 0, hint: "2³ = 8.", explain: "∛8 = 2." },
      { type: "mc", prompt: "Câu 7: Rút gọn √(12) =", choices: ["2√3", "3√2", "4√3", "6"], correct: 0, hint: "12 = 4·3, √(4·3) = 2√3.", explain: "2√3." },
      { type: "mc", prompt: "Câu 8: Điều kiện xác định của √(x-3) là?", choices: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"], correct: 0, hint: "Biểu thức dưới dấu căn ≥ 0.", explain: "x ≥ 3." },
    ],
  },
  {
    id: "c9-ch2-quiz",
    num: 100,
    chapter: 2,
    title: "Chương 2: Hàm số bậc nhất - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    summary: "Luyện tập hàm số bậc nhất y = ax + b.", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về hàm số bậc nhất.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
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
      { type: "mc", prompt: "Câu 6: Đồ thị hàm số y = 4 là:", choices: ["Đường thẳng ngang", "Đường thẳng dọc", "Đường xiên", "Parabol"], correct: 0, hint: "y = 4 là đường thẳng y = 0x + 4.", explain: "Đường thẳng ngang." },
      { type: "mc", prompt: "Câu 7: Hệ số góc của đường thẳng qua (0,2) và (2,6) là?", choices: ["2", "3", "4", "1"], correct: 0, hint: "k = (6-2)/(2-0) = 2.", explain: "2." },
      { type: "mc", prompt: "Câu 8: Hai đường thẳng vuông góc khi:", choices: ["k₁·k₂ = -1", "k₁·k₂ = 1", "k₁ = k₂", "k₁ + k₂ = 0"], correct: 0, hint: "Tích hệ số góc = -1.", explain: "k₁·k₂ = -1." },
    ],
  },

  {
    id: "g9-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Căn bậc hai",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Căn bậc hai.",
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
String.raw`<p><strong>Làm bài.</strong> Đề kiểm tra 45 phút.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    pages: ["page1"],
    
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
exercises: [
      { type: "mc", prompt: "Câu 1: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "4." },
      { type: "mc", prompt: "Câu 2: √(25/9) =", choices: ["5/3", "-5/3", "±5/3", "25/3"], correct: 0, hint: "√(25/9) = 5/3.", explain: "5/3." },
      { type: "text", prompt: "Rút gọn biểu thức √12.", answer: "2√3", accept: ["2√3", "2*sqrt(3)"], hint: "√12 = √(4·3) = 2√3.", explain: "2√3." },
      { type: "mc", prompt: "Câu 4: Điều kiện xác định của √(x-5) là?", choices: ["x ≥ 5", "x > 5", "x ≤ 5", "x < 5"], correct: 0, hint: "Biểu thức dưới dấu căn ≥ 0.", explain: "x ≥ 5." },
    ],
  },
  {
    id: "g9-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Hàm số bậc nhất",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Hàm số bậc nhất.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
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
      { type: "mc", prompt: "Câu 1: Hàm số y = 4x - 1 có hệ số góc là?", choices: ["4", "-1", "1", "-4"], correct: 0, hint: "Hệ số góc là hệ số của x.", explain: "4." },
      { type: "mc", prompt: "Câu 2: Đồ thị hàm số y = -3x + 2 cắt trục Oy tại điểm?", choices: ["(0,2)", "(2,0)", "(0,-2)", "(-2,0)"], correct: 0, hint: "x=0 → y=2.", explain: "(0,2)." },
      { type: "text", prompt: "Tìm giao điểm của y=2x+1 và y=-x+4.", answer: "(1,3)", accept: ["(1,3)", "x=1,y=3"], hint: "2x+1=-x+4 → 3x=3 → x=1, y=3.", explain: "(1,3)." },
      { type: "mc", prompt: "Câu 4: Hai đường thẳng y=2x+3 và y=2x-1:", choices: ["Song song", "Cắt nhau", "Vuông góc", "Trùng nhau"], correct: 0, hint: "Cùng hệ số góc k=2.", explain: "Song song." },
    ],
  },

  {
    id: "c9-ch3-quiz",
    num: 101,
    chapter: 3,
    title: "Chương 3: Góc với đường tròn - Trắc nghiệm",
    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập góc nội tiếp, góc giữa tia tiếp tuyến và dây cung.",
    body: 
    <div class="tips"><p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng.</p></div>

    <div class="trap"><p><strong>Cảnh báo:</strong> Những sai lầm thường gặp.</p></div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về góc với đường tròn.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Góc nội tiếp chắn cung 60° có số đo là?", choices: ["30°", "60°", "120°", "90°"], correct: 0, hint: "Góc nội tiếp = 1/2 số đo cung bị chắn.", explain: "30°." },
      { type: "mc", prompt: "Câu 2: Góc tạo bởi tia tiếp tuyến và dây cung chắn cung 80° có số đo là?", choices: ["40°", "80°", "160°", "50°"], correct: 0, hint: "Góc này = 1/2 số đo cung bị chắn.", explain: "40°." },
      { type: "mc", prompt: "Câu 3: Tứ giác ABCD nội tiếp đường tròn. ∠A = 100°. ∠C =", choices: ["80°", "100°", "90°", "120°"], correct: 0, hint: "Tứ giác nội tiếp: ∠A + ∠C = 180°.", explain: "80°." },
      { type: "mc", prompt: "Câu 4: Góc ở tâm chắn cung AB bằng 120°. Góc nội tiếp chắn cung AB là?", choices: ["60°", "120°", "240°", "30°"], correct: 0, hint: "Góc nội tiếp = 1/2 góc ở tâm.", explain: "60°." },
      { type: "mc", prompt: "Câu 5: Đường tròn có bán kính 5. Cung AB = 60°. Độ dài cung AB là?", choices: ["(5π)/3", "(10π)/3", "(5π)/6", "5π"], correct: 0, hint: "Độ dài cung = 2πR × (góc/360) = 2π×5×60/360 = 10π/6 = 5π/3.", explain: "(5π)/3." },
      { type: "mc", prompt: "Câu 6: Góc nội tiếp và góc ở tâm cùng chắn cung AB. Góc nội tiếp = 40°. Góc ở tâm =", choices: ["80°", "40°", "20°", "160°"], correct: 0, hint: "Góc ở tâm = 2 × góc nội tiếp.", explain: "80°." },
      { type: "mc", prompt: "Câu 7: Góc tạo bởi hai cát tuyến cắt nhau bên ngoài đường tròn bằng:", choices: ["1/2 hiệu số đo hai cung", "1/2 tổng số đo hai cung", "1/2 số đo cung lớn", "1/2 số đo cung nhỏ"], correct: 0, hint: "Góc ngoài = 1/2 hiệu số đo hai cung bị chắn.", explain: "1/2 hiệu số đo hai cung." },
      { type: "mc", prompt: "Câu 8: Góc nội tiếp chắn nửa đường tròn là góc:", choices: ["Vuông (90°)", "Nhọn", "Tù", "Bẹt (180°)"], correct: 0, hint: "Nửa đường tròn = 180°, góc nội tiếp = 90°.", explain: "Vuông (90°)." },
    ],
  },
];
