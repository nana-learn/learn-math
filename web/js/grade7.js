// Toán 7 Tập 1 – Kết nối tri thức. Mạch bài theo SGK. Mỗi bài: tình huống → làm chậm → dễ → khó hơn → bẫy → nhìn lại → luyện.
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

  {
    id: "g7-ch3-quiz",
    num: 101,
    chapter: 3,
    title: "Chương 3: Số thập phân - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số thập phân, phép toán.",
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
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số thập phân.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    
      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },

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
      { type: "mc", prompt: "Câu 1: 0,5 = ?", choices: ["1/2", "1/5", "5/100", "5/1000"], correct: 0, hint: "0,5 = 5/10 = 1/2.", explain: "1/2." },
      { type: "mc", prompt: "Câu 2: 0,25 + 0,75 =", choices: ["1", "0,5", "0,1", "10"], correct: 0, hint: "0,25 + 0,75 = 1.", explain: "1." },
      { type: "mc", prompt: "Câu 3: 1,2 × 5 =", choices: ["6", "5,4", "7", "8"], correct: 0, hint: "1,2 × 5 = 6.", explain: "6." },
      { type: "mc", prompt: "Câu 4: 2,5 - 1,8 =", choices: ["0,7", "0,3", "1,3", "1,7"], correct: 0, hint: "2,5 - 1,8 = 0,7.", explain: "0,7." },
      { type: "mc", prompt: "Câu 5: 0,1 × 0,1 =", choices: ["0,01", "0,1", "0,001", "0,11"], correct: 0, hint: "0,1 × 0,1 = 0,01.", explain: "0,01." },
      { type: "mc", prompt: "Câu 6: 3 ÷ 0,5 =", choices: ["6", "1,5", "0,6", "15"], correct: 0, hint: "3 ÷ 0,5 = 3 ÷ 1/2 = 3 × 2 = 6.", explain: "6." },
      { type: "mc", prompt: "Câu 7: Số 2,35 gồm:", choices: ["2 đơn vị, 3 phần mười, 5 phần trăm", "2 đơn vị, 35 phần mười", "23 đơn vị, 5 phần trăm", "2 đơn vị, 35 phần trăm"], correct: 0, hint: "2,35 = 2 + 3/10 + 5/100.", explain: "2 đơn vị, 3 phần mười, 5 phần trăm." },
      { type: "mc", prompt: "Câu 8: Làm tròn 3,47 đến hàng phần mười là?", choices: ["3,5", "3,4", "3,0", "4"], correct: 0, hint: "7 ≥ 5 nên làm tròn lên: 3,47 ≈ 3,5.", explain: "3,5." },
    ],
  },
  {
    id: "g7-ch4-quiz",
    num: 102,
    chapter: 4,
    title: "Chương 4: Số thực - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số thực, căn bậc hai.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số thực.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: √4 =", choices: ["2", "-2", "±2", "4"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "2." },
      { type: "mc", prompt: "Câu 2: Số vô tỉ là:", choices: ["Không thể viết thành phân số", "Là số nguyên", "Là số thập phân hữu hạn", "Là số thập phân vô hạn tuần hoàn"], correct: 0, hint: "Số vô tỉ không biểu diễn được dưới dạng a/b.", explain: "Không thể viết thành phân số." },
      { type: "mc", prompt: "Câu 3: π là số:", choices: ["Vô tỉ", "Hữu tỉ", "Nguyên", "Thập phân"], correct: 0, hint: "π ≈ 3,14159265... không tuần hoàn.", explain: "Vô tỉ." },
      { type: "mc", prompt: "Câu 4: √2 ≈ ?", choices: ["1,41", "1,42", "1,43", "1,44"], correct: 0, hint: "1,41² = 1,9881 ≈ 2.", explain: "1,41." },
      { type: "mc", prompt: "Câu 5: Tập hợp R gồm:", choices: ["Hữu tỉ và vô tỉ", "Nguyên và phân số", "Dương và âm", "Chẵn và lẻ"], correct: 0, hint: "R = Q ∪ I.", explain: "Hữu tỉ và vô tỉ." },
      { type: "mc", prompt: "Câu 6: Số đối của √3 là?", choices: ["-√3", "√3", "1/√3", "3"], correct: 0, hint: "Số đối của a là -a.", explain: "-√3." },
      { type: "mc", prompt: "Câu 7: |−5| =", choices: ["5", "-5", "0", "1/5"], correct: 0, hint: "Giá trị tuyệt đối luôn ≥ 0.", explain: "5." },
      { type: "mc", prompt: "Câu 8: Số 0,333... = ?", choices: ["1/3", "3/10", "33/100", "3/99"], correct: 0, hint: "0,333... = 1/3.", explain: "1/3." },
    ],
  },
  {
    id: "g7-ch5-quiz",
    num: 103,
    chapter: 5,
    title: "Chương 5: Đại lượng tỉ lệ - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập đại lượng tỉ lệ thuận, tỉ lệ nghịch.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về đại lượng tỉ lệ.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Nếu y tỉ lệ thuận với x và y = 6 khi x = 2 thì hệ số tỉ lệ là?", choices: ["3", "2", "1/3", "1/2"], correct: 0, hint: "y = kx → 6 = k·2 → k = 3.", explain: "3." },
      { type: "mc", prompt: "Câu 2: Nếu y tỉ lệ nghịch với x và y = 4 khi x = 2 thì y = ? khi x = 8?", choices: ["1", "2", "4", "8"], correct: 0, hint: "y = k/x → 4 = k/2 → k = 8 → y = 8/8 = 1.", explain: "1." },
      { type: "mc", prompt: "Câu 3: Hai đại lượng tỉ lệ thuận thì đồ thị là:", choices: ["Đường thẳng qua gốc", "Đường cong", "Đường thẳng không qua gốc", "Parabol"], correct: 0, hint: "y = kx → đồ thị là đường thẳng qua (0,0).", explain: "Đường thẳng qua gốc." },
      { type: "mc", prompt: "Câu 4:若 x và y tỉ lệ nghịch, x tăng thì y:", choices: ["Giảm", "Tăng", "Không đổi", "Biến thiên ngẫu nhiên"], correct: 0, hint: "Tích x·y = hằng số.", explain: "Giảm." },
      { type: "mc", prompt: "Câu 5: 3 người làm xong việc trong 6 giờ. Hỏi 6 người làm xong trong bao lâu? (năng suất như nhau)", choices: ["3 giờ", "4 giờ", "9 giờ", "12 giờ"], correct: 0, hint: "3×6 = 6×x → x = 18/6 = 3.", explain: "3 giờ." },
      { type: "mc", prompt: "Câu 6: y = 5x. Khi x = 3 thì y =", choices: ["15", "8", "2", "1/15"], correct: 0, hint: "y = 5×3 = 15.", explain: "15." },
      { type: "mc", prompt: "Câu 7: y = 12/x. Khi x = 3 thì y =", choices: ["4", "36", "9", "15"], correct: 0, hint: "y = 12/3 = 4.", explain: "4." },
      { type: "mc", prompt: "Câu 8: Hai đại lượng tỉ lệ thuận khi:", choices: ["Tỉ số y/x không đổi", "Tích x·y không đổi", "Tổng x+y không đổi", "Hiệu x-y không đổi"], correct: 0, hint: "y = kx → y/x = k (hằng số).", explain: "Tỉ số y/x không đổi." },
    ],
  },
  {
    id: "g7-ch6-quiz",
    num: 104,
    chapter: 6,
    title: "Chương 6: Thống kê - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập thống kê, bảng, biểu đồ.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về thống kê.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Dấu hiệu điều tra là?", choices: ["Đặc điểm cần tìm hiểu", "Số liệu thống kê", "Bảng số liệu", "Biểu đồ"], correct: 0, hint: "Dấu hiệu là đặc điểm cần nghiên cứu.", explain: "Đặc điểm cần tìm hiểu." },
      { type: "mc", prompt: "Câu 2: Tần số của một giá trị là?", choices: ["Số lần xuất hiện của giá trị", "Giá trị đó", "Tổng các giá trị", "Trung bình các giá trị"], correct: 0, hint: "Tần số = số lần xuất hiện.", explain: "Số lần xuất hiện của giá trị." },
      { type: "mc", prompt: "Câu 3: Mốt của dấu hiệu là?", choices: ["Giá trị có tần số lớn nhất", "Giá trị nhỏ nhất", "Giá trị lớn nhất", "Giá trị trung bình"], correct: 0, hint: "Mốt = giá trị xuất hiện nhiều nhất.", explain: "Giá trị có tần số lớn nhất." },
      { type: "mc", prompt: "Câu 4: Trung bình cộng của 2, 4, 6 là?", choices: ["4", "3", "5", "6"], correct: 0, hint: "(2+4+6)/3 = 12/3 = 4.", explain: "4." },
      { type: "mc", prompt: "Câu 5: Biểu đồ đoạn thẳng dùng để biểu diễn:", choices: ["Sự thay đổi theo thời gian", "Cơ cấu phần trăm", "So sánh các giá trị", "Phân bố tần số"], correct: 0, hint: "Biểu đồ đoạn thẳng thường dùng cho thời gian.", explain: "Sự thay đổi theo thời gian." },
      { type: "mc", prompt: "Câu 6: Biểu đồ hình quạt dùng để biểu diễn:", choices: ["Cơ cấu phần trăm", "Sự thay đổi theo thời gian", "So sánh giá trị", "Phân bố tần số"], correct: 0, hint: "Hình quạt biểu diễn tỷ lệ phần trăm.", explain: "Cơ cấu phần trăm." },
      { type: "mc", prompt: "Câu 7: Số trung bình cộng được kí hiệu là?", choices: ["X-bar", "M", "Mo", "R"], correct: 0, hint: "X-bar = (x1 + x2 + ... + xn)/n.", explain: "X-bar." },
      { type: "mc", prompt: "Câu 8: Số đơn vị điều tra là?", choices: ["Số lượng đơn vị được điều tra", "Số lượng giá trị", "Số lượng dấu hiệu", "Số lượng tần số"], correct: 0, hint: "N = tổng số đơn vị.", explain: "Số lượng đơn vị được điều tra." },
    ],
  },

  {
    id: "g7-exam-ch1",
    num: 101,
    chapter: 1,
    title: "Đề kiểm tra Chương 1: Số hữu tỉ",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Số hữu tỉ.",
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
    
      { type: "mc", prompt: "Bài tập nâng cao 1", choices: ["A", "B", "C", "D"], correct: "C" },
      { type: "mc", prompt: "Bài tập nâng cao 2", choices: ["A", "B", "C", "D"], correct: "D" },

      { type: "mc", prompt: "Bài tập luyện tập thêm", choices: ["A", "B", "C", "D"], correct: "A" },

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "Câu 1: 3/4 + 1/4 =", choices: ["1", "1/2", "3/2", "4/8"], correct: 0, hint: "3/4 + 1/4 = 4/4 = 1.", explain: "1." },
      { type: "mc", prompt: "Câu 2: (-2) + 5 =", choices: ["3", "-3", "7", "-7"], correct: 0, hint: "-2 + 5 = 3.", explain: "3." },
      { type: "text", prompt: "Tính 2/3 × 3/4.", answer: "1/2", accept: ["1/2"], hint: "2×3 / 3×4 = 6/12 = 1/2.", explain: "1/2." },
      { type: "mc", prompt: "Câu 4: Số đối của -5/7 là?", choices: ["5/7", "-5/7", "7/5", "-7/5"], correct: 0, hint: "Đổi dấu.", explain: "5/7." },
    ],
  },
  {
    id: "g7-exam-ch2",
    num: 102,
    chapter: 2,
    title: "Đề kiểm tra Chương 2: Số thực",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đề kiểm tra 45 phút chương Số thực.",
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

      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "mc", prompt: "Câu 1: √4 =", choices: ["2", "-2", "±2", "4"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "2." },
      { type: "mc", prompt: "Câu 2: |−3| =", choices: ["3", "-3", "0", "1/3"], correct: 0, hint: "Giá trị tuyệt đối luôn ≥ 0.", explain: "3." },
      { type: "text", prompt: "Tính √2 × √8.", answer: "4", accept: ["4"], hint: "√2 × √8 = √16 = 4.", explain: "4." },
      { type: "mc", prompt: "Câu 4: Số vô tỉ là?", choices: ["Không viết được thành phân số", "Là số nguyên", "Là số thập phân hữu hạn", "Là số thập phân vô hạn tuần hoàn"], correct: 0, hint: "Số vô tỉ không biểu diễn được dưới dạng a/b.", explain: "Không viết được thành phân số." },
    ],
  },

  {
    id: "g7-ch7-quiz",
    num: 105,
    chapter: 7,
    title: "Chương 7: Phép biến hình - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
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
];

const G7_LESSONS = [
  {
    id: "g7-b1",
    num: 1,
    chapter: 1,
    title: "Tập hợp các số hữu tỉ",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Số hữu tỉ là số viết được thành phân số. Cùng một số có nhiều cách viết.", spoken: "Số hữu tỉ là số viết được dưới dạng a/b với a,b nguyên, b≠0.", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p><strong>Vì sao cần số hữu tỉ?</strong> Số nguyên đếm được quả cam. Muốn nói “ba phần tư cái bánh” thì phải có số dạng phân số. Mọi số viết được thành \(\dfrac{a}{b}\) với \(a, b\) nguyên, \(b \neq 0\), gọi là số hữu tỉ. Tập hợp ấy kí hiệu \(\mathbb{Q}\).</p>
            <figure class="figure" data-animation="g7-b1-natural-numbers">
        <svg viewBox="0 0 280 140" role="img" aria-label="Tập hợp số hữu tỉ">
          <ellipse cx="140" cy="70" rx="110" ry="55" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="25" font-size="14" text-anchor="middle">Q = {a/b | a,b ∈ Z, b ≠ 0}</text>
          <circle cx="90" cy="60" r="2" fill="#333330"/>
          <circle cx="110" cy="50" r="2" fill="#333330"/>
          <circle cx="130" cy="60" r="2" fill="#333330"/>
          <circle cx="150" cy="50" r="2" fill="#333330"/>
          <circle cx="170" cy="60" r="2" fill="#333330"/>
          <text x="90" y="75" font-size="10" text-anchor="middle">1/2</text>
          <text x="110" y="65" font-size="10" text-anchor="middle">-3</text>
          <text x="130" y="75" font-size="10" text-anchor="middle">0</text>
          <text x="150" y="65" font-size="10" text-anchor="middle">2/3</text>
          <text x="170" y="75" font-size="10" text-anchor="middle">5</text>
        </svg>
      </figure>
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
            <div class="idea">
        <p><strong>Cách nghĩ khi gặp một số lạ.</strong> Hỏi ba câu: Có viết được thành tử nguyên trên mẫu nguyên khác 0 không? Nếu có, nó hữu tỉ. Số đó còn viết được cách khác không? Trên trục số nó đứng bên nào của gốc, cách gốc bao nhiêu?</p>
      </div>
<div class="warn">
        <p><strong>Trông giống mà không phải.</strong></p>
        <ul>
          <li>\(\dfrac{6}{8}\) và \(\dfrac{3}{4}\) là cùng một số. Đề hỏi “cho các ví dụ khác nhau” thì không được đếm một số hai lần.</li>
          <li>\(\pi\), \(\sqrt{2}\) không viết được thành phân số hai số nguyên, nên không nằm trong \(\mathbb{Q}\).</li>
          <li>Hai số âm: số có giá trị tuyệt đối lớn hơn lại <em>nhỏ hơn</em>. \(-\dfrac{3}{4} &lt; -\dfrac{2}{3}\), vì cùng mẫu 12 thì \(-\dfrac{9}{12} &lt; -\dfrac{8}{12}\).</li>
          <li>Trước khi so, cùng đơn vị trước: 162 cm với 1,6 m phải đổi thành 162 cm với 160 cm.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Vì sao \(\dfrac{6}{8}\) và \(\dfrac{3}{4}\) không phải hai ví dụ khác nhau về số hữu tỉ? <em>— Chúng cùng một số: \(\dfrac{6}{8} = \dfrac{3}{4}\). Đề hỏi “khác nhau” thì không đếm một số hai lần.</em></p>
        <p>So \(-\dfrac{3}{4}\) với \(-\dfrac{2}{3}\): số nào nhỏ hơn? <em>— \(-\dfrac{3}{4}\). Cùng mẫu 12 thì \(-\dfrac{9}{12} &lt; -\dfrac{8}{12}\). Hai số âm: giá trị tuyệt đối lớn hơn thì số nhỏ hơn.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Bạn Nam cao 162 cm, muốn so với 1,6 m. Đổi 1,6 m = 160 cm. Tỉ số chiều cao so với 160 cm là \(\dfrac{162}{160} = \dfrac{81}{80}\). Đó là số hữu tỉ. Không cần số thập phân dài.</p>
        <p>Đặt \(\dfrac{81}{80}\) lên trục: lớn hơn 1 một chút, vì 81 &gt; 80. Điểm nằm ngay sau vạch 1.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> So hai số hữu tỉ bằng cách đưa về cùng mẫu, hoặc đưa về cùng tử. Trên trục số, số nhỏ hơn đứng bên trái. 0 không dương không âm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> So \(-\dfrac{3}{4}\) và \(-\dfrac{2}{3}\). Cùng mẫu 12: \(-\dfrac{9}{12}\) và \(-\dfrac{8}{12}\). Số đứng trái hơn là \(-\dfrac{3}{4}\). Đừng nghĩ “3/4 lớn hơn 2/3 nên âm của nó cũng lớn hơn”.</p>
      </div>
<div class="memory"><p><strong>Nhìn lại.</strong> Muốn biết một số có hữu tỉ không: tìm một phân số nguyên bằng nó. Số nguyên, thập phân hữu hạn, hỗn số đều được.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Số nào là số hữu tỉ?", choices: ["3/4", "√2", "π", "e"], correct: 0, hint: "3/4 viết được thành phân số.", explain: "3/4." },
        { type: "mc", prompt: "Số -5 có là số hữu tỉ không?", choices: ["Có", "Không", "Tùy trường hợp", "Không xác định"], correct: 0, hint: "-5 = -5/1.", explain: "Có, vì -5 = -5/1." },
        { type: "text", prompt: "Viết số 0,25 dưới dạng phân số.", answer: "1/4", accept: ["1/4", "0.25"], hint: "0,25 = 25/100 = 1/4.", explain: "1/4." },
      { type: "num", prompt: "Hỗn số 3 1/5 bằng phân số a/5. Tử a bằng bao nhiêu?", answer: 16, hint: "3 lần 5 cộng 1.", explain: "3 + 1/5 = 16/5." },
      { type: "mc", prompt: "Trên trục số, điểm biểu diễn −3/2 nằm ở đâu so với gốc?", choices: ["Bên phải, cách gốc 1,5 đơn vị", "Bên trái, cách gốc 1,5 đơn vị", "Trùng gốc", "Bên trái, cách gốc 3 đơn vị"], correct: 1, hint: "Số âm đứng bên trái. 3/2 = 1,5.", explain: "−3/2 = −1,5, bên trái gốc, khoảng cách 1,5." },
      { type: "text", prompt: "Viết 0,2 thành phân số tối giản.", answer: "1/5", accept: ["1/5"], hint: "0,2 = 2/10.", explain: "2/10 = 1/5." },
      { type: "mc", prompt: "6/9 và 2/3 là", choices: ["Hai số hữu tỉ khác nhau","Cùng một số hữu tỉ","Một hữu tỉ một vô tỉ","Không so được"], correct: 1, hint: "Rút gọn 6/9.", explain: "6/9 = 2/3." },
      { type: "mc", prompt: "−5/6 so với −4/5. Số nào nhỏ hơn?", choices: ["−4/5","−5/6","Bằng nhau","Không so được"], correct: 1, hint: "Cùng mẫu 30: −25/30 và −24/30.", explain: "−5/6 nhỏ hơn, đứng bên trái trên trục." },
      { type: "num", prompt: "Điểm giữa 0 và 1 chia thành 5 phần bằng nhau, điểm thứ 2 từ 0 là a/5. a bằng bao nhiêu?", answer: 2, hint: "Hai bước đơn vị 1/5.", explain: "2/5." },
    ],
  },
  {
    id: "g7-b2",
    num: 2,
    chapter: 1,
    title: "Cộng, trừ, nhân, chia số hữu tỉ",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "Đưa về phân số có mẫu dương, rồi cộng trừ nhân chia như phân số đã học.", spoken: "Cộng trừ nhân chia số hữu tỉ: viết chung mẫu, rồi tính như phân số.", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Phép tính trên \(\mathbb{Q}\) không mới. Việc cần làm là viết mỗi số thành phân số, mẫu dương, rồi dùng quy tắc cũ.</p>
            <figure class="figure" data-animation="g7-b2-operations">
        <svg viewBox="0 0 280 140" role="img" aria-label="Phép cộng và nhân số hữu tỉ">
          <path d="M20,20 L120,20 L120,60 L20,60 Z" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="70" y="40" font-size="12" text-anchor="middle">a/b + c/d = (ad+bc)/bd</text>
          <path d="M160,20 L260,20 L260,60 L160,60 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="210" y="40" font-size="12" text-anchor="middle">a/b × c/d = ac/bd</text>
          <path d="M45,80 L95,80 L95,100 L45,100 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="70" y="95" font-size="11" text-anchor="middle">1/3 + 1/6 = 1/2</text>
          <path d="M160,80 L235,80 L235,100 L160,100 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="197.5" y="95" font-size="11" text-anchor="middle">2/3 × 3/4 = 1/2</text>
        </svg>
      </figure>
      <div class="definition">
        <p>Số hữu tỉ là số viết được dưới dạng \(\dfrac{a}{b}\) với \(a, b \in \mathbb{Z}\), \(b \neq 0\). Phép cộng, trừ quy đồng mẫu; nhân: tử nhân tử, mẫu nhân mẫu; chia: nhân với nghịch đảo của số chia. Mẫu của kết quả phải khác 0.</p>
      </div>

<div class="idea">
        <p>Cộng trừ: quy đồng mẫu. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với nghịch đảo. Mẫu của kết quả phải khác 0.</p>
      </div>
<div class="warn">
        <p><strong>Lỗi cũ mà vẫn phạm.</strong></p>
        <ul>
          <li>\(\dfrac{2}{-3} + \dfrac{1}{2}\): không lấy tử cộng tử, mẫu cộng mẫu. Chuyển dấu âm lên tử trước: \(-\dfrac{2}{3} + \dfrac{1}{2} = -\dfrac{1}{6}\).</li>
          <li>Chia là nhân với nghịch đảo của số bị chia: \(\dfrac{2}{5} : \dfrac{4}{7} = \dfrac{2}{5} \cdot \dfrac{7}{4}\). Không đảo ngược số đứng trước.</li>
          <li>Chia cho 0 thì phép tính không có nghĩa. Kiểm tra mẫu của kết quả và số chia trước khi bấm.</li>
          <li>Kiểm tra dấu trước khi nộp: \(\dfrac{3}{4} &lt; \dfrac{5}{6}\) nên \(\dfrac{3}{4} - \dfrac{5}{6}\) phải âm.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tính \(-\dfrac{2}{3} + \dfrac{1}{2}\): mẫu chung là mấy, kết quả ra bao nhiêu? <em>— Mẫu chung 6. \(-\dfrac{4}{6} + \dfrac{3}{6} = -\dfrac{1}{6}\). Không cộng tử với tử mà giữ nguyên mẫu cũ.</em></p>
        <p>Vì sao \(-\dfrac{2}{3} : \dfrac{1}{2}\) không phải bằng \(-\dfrac{2}{3} \cdot \dfrac{1}{2}\)? <em>— Chia là nhân với phân số đảo ngược: \(-\dfrac{2}{3} : \dfrac{1}{2} = -\dfrac{2}{3} \cdot 2 = -\dfrac{4}{3}\). Nhân trực tiếp sẽ sai.</em></p>
      </details>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(\dfrac{1}{6} + \dfrac{1}{3} = \dfrac{1}{6} + \dfrac{2}{6} = \dfrac{3}{6} = \dfrac{1}{2}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(-\dfrac{2}{5} \cdot \dfrac{15}{8} = -\dfrac{2 \cdot 15}{5 \cdot 8} = -\dfrac{30}{40} = -\dfrac{3}{4}\). Rút gọn trước khi nhân cũng được: 15 và 5 có ước 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{2}{-3} + \dfrac{1}{2}\). Đưa mẫu âm lên tử: \(-\dfrac{2}{3} + \dfrac{1}{2} = \dfrac{-4 + 3}{6} = -\dfrac{1}{6}\). Cộng ngay \(\dfrac{2 + 1}{-3 + 2}\) là sai.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Tính \(\dfrac{3}{4} - \dfrac{5}{6}\). Mẫu 4 và 6, BCNN là 12. \(\dfrac{9}{12} - \dfrac{10}{12} = -\dfrac{1}{12}\). Kết quả âm vì \(\dfrac{3}{4} = 0{,}75\) nhỏ hơn \(\dfrac{5}{6} \approx 0{,}83\). Kiểm tra dấu trước khi nộp.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Mẫu dương trước. Cộng trừ quy đồng. Nhân tử với tử. Chia là nhân nghịch đảo. Rút gọn ngay khi thấy ước chung.</p>
      </div>
<div class="memory"><p><strong>Nhìn lại.</strong> Mẫu dương trước khi tính. Chia cho 0 thì phép tính không có nghĩa.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Hai phân số bằng nhau khi", choices: ["Tử và mẫu của phân số này gấp k lần tử và mẫu của phân số kia", "Tử bằng nhau", "Mẫu bằng nhau", "Cả A và B"], correct: 0, hint: "Định nghĩa hai phân số bằng nhau.", explain: "Tử và mẫu gấp k lần." },
        { type: "mc", prompt: "Số đối của 3/5 là", choices: ["-3/5", "5/3", "-5/3", "3/5"], correct: 0, hint: "Đổi dấu tử số.", explain: "-3/5." },
        { type: "text", prompt: "Tính (-2/3) + (5/3).", answer: "1", accept: ["1", "3/3"], hint: "Cùng mẫu: (-2+5)/3 = 3/3 = 1.", explain: "1." },
      { type: "text", prompt: "Tính (−3/4) : (1/8). Viết số nguyên hoặc phân số.", answer: "-6", accept: ["-6", "−6"], hint: "Chia là nhân nghịch đảo 8/1.", explain: "(−3/4)·8 = −6." },
      { type: "mc", prompt: "Phép tính nào không thực hiện được trong Q?", choices: ["0 : 5", "5 : 0", "0 · 5", "−5 + 0"], correct: 1, hint: "Không chia cho 0.", explain: "Mẫu bằng 0 thì không có thương." },
      { type: "text", prompt: "Tính 2/3 − 1/2. Phân số tối giản.", answer: "1/6", accept: ["1/6"], hint: "Mẫu 6.", explain: "4/6 − 3/6 = 1/6." },
      { type: "num", prompt: "(−1/2) · (−8) bằng bao nhiêu?", answer: 4, hint: "Âm nhân âm.", explain: "4." },
      { type: "text", prompt: "3/8 + 1/8. Phân số tối giản.", answer: "1/2", accept: ["1/2"], hint: "Cùng mẫu.", explain: "4/8 = 1/2." },
      { type: "text", prompt: "(2/3) : (4/9). Phân số tối giản.", answer: "3/2", accept: ["3/2","1,5"], hint: "Nhân 9/4.", explain: "2/3 · 9/4 = 3/2." },
    ],
  },
  {
    id: "g7-b3",
    num: 3,
    chapter: 1,
    title: "Luỹ thừa với số mũ tự nhiên",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    summary: "a^n là nhân a với chính nó n lần. Mũ 0 bằng 1 khi cơ số khác 0.", spoken: "Lũy thừa: a^n = a·a·...·a (n lần). a^0 = 1 (a≠0).", youtube: "dQw4w9WgXcQ",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>\(2^5\) không phải \(2 \cdot 5\). Đó là năm thừa số 2 nhân với nhau: \(2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32\).</p>
            <figure class="figure" data-animation="g7-b3-subtraction-division">
        <svg viewBox="0 0 280 140" role="img" aria-label="Phép trừ và chia số hữu tỉ">
          <path d="M20,20 L120,20 L120,60 L20,60 Z" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="70" y="40" font-size="12" text-anchor="middle">a/b - c/d = (ad-bc)/bd</text>
          <path d="M160,20 L260,20 L260,60 L160,60 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="210" y="40" font-size="12" text-anchor="middle">a/b : c/d = ad/bc</text>
          <path d="M45,80 L95,80 L95,100 L45,100 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="70" y="95" font-size="11" text-anchor="middle">3/4 - 1/6 = 7/12</text>
          <path d="M160,80 L235,80 L235,100 L160,100 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="197.5" y="95" font-size="11" text-anchor="middle">2/3 : 4/5 = 5/6</text>
        </svg>
      </figure>
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
            <div class="example">
        <p><strong>Làm chậm.</strong> \(2^3 \cdot 5^3 = (2 \cdot 5)^3 = 10^3 = 1000\). Cùng mũ thì gộp cơ số. Còn \(2^3 \cdot 5^2\) không gộp được thành \(10\) mũ gì, vì mũ khác nhau. Phải tính \(8 \cdot 25 = 200\).</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Cùng cơ số thì cộng mũ khi nhân. Mũ chẵn làm cơ số âm thành dương. \(a^0=1\) khi \(a\neq 0\). Không viết \(0^0\).</p>
      </div>
<div class="warn">
        <p><strong>Nơi dễ sai nhất với luỹ thừa.</strong></p>
        <ul>
          <li>\(2^5 \neq 2 \cdot 5\). Mũ là <em>số lượng</em> thừa số: \(2^5 = 32\).</li>
          <li>\(2^3 + 2^3 = 2 \cdot 2^3 = 2^4\). Cộng các luỹ thừa thì không cộng mũ — chỉ nhân cùng cơ số mới cộng mũ.</li>
          <li>\((2^3)^2 = 2^{3 \cdot 2} = 2^6 = 64\), không phải \(2^9\): luỹ thừa của luỹ thừa thì nhân các mũ.</li>
          <li>\(\dfrac{3^7}{3^4} = 3^{7-4}\): chia cùng cơ số thì trừ mũ, không trừ cơ số. Cơ số âm: mũ chẵn ra dương, mũ lẻ ra âm.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(2^5\) bằng \(2 \cdot 5 = 10\) hay \(2^5 = 32\)? <em>— \(32\). Luỹ thừa là nhân lặp: \(2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2\). Không nhân cơ số với số mũ.</em></p>
        <p>\((2^3)^4\) bằng \(2^{12}\) hay \(2^7\)? <em>— \(2^{12}\). Luỹ thừa của luỹ thừa thì nhân số mũ: \(3 \cdot 4 = 12\). Cộng số mũ chỉ dùng khi nhân hai luỹ thừa cùng cơ số.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Cùng cơ số thì cộng trừ mũ khi nhân chia. Nhân cơ số thì mũ phân phối. Không đổi \(a^n + b^n\) thành \((a+b)^n\).</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Giá trị tuyệt đối của -7 là", choices: ["7", "-7", "0", "1/7"], correct: 0, hint: "|-7| = 7.", explain: "7." },
        { type: "mc", prompt: "Số nào có giá trị tuyệt đối bằng 5?", choices: ["5 và -5", "5", "-5", "Không có"], correct: 0, hint: "|5| = 5, |-5| = 5.", explain: "5 và -5." },
        { type: "text", prompt: "Tính (-3) + |−5|.", answer: "2", accept: ["2"], hint: "|−5| = 5, (-3) + 5 = 2.", explain: "2." },
      { type: "num", prompt: "2^3 · 2^4 = 2^k. k bằng bao nhiêu?", answer: 7, hint: "Cộng mũ.", explain: "7." },
      { type: "mc", prompt: "(−3)^2 và −3^2", choices: ["Bằng nhau, đều 9","Bằng nhau, đều −9","Khác nhau: 9 và −9","Không tính được"], correct: 2, hint: "Ngoặc đổi thứ tự mũ và dấu.", explain: "(−3)^2 = 9, −3^2 = −9." },
      { type: "num", prompt: "(−1)^8 bằng bao nhiêu?", answer: 1, hint: "Mũ chẵn.", explain: "1." },
      { type: "num", prompt: "3^2 · 3^3 = 3^k. k bằng bao nhiêu?", answer: 5, hint: "Cộng mũ.", explain: "5." },
    ],
  },
  {
    id: "g7-b4",
    num: 4,
    chapter: 1,
    title: "Thứ tự phép tính và chuyển vế",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Ngoặc trước, rồi mũ, rồi nhân chia, rồi cộng trừ. Chuyển vế thì đổi dấu.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
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
                  <figure class="figure" data-animation="g7-b4-powers">
        <svg viewBox="0 0 280 140" role="img" aria-label="Luỹ thừa số hữu tỉ">
          <rect x="20" y="20" width="240" height="40" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="40" font-size="12" text-anchor="middle">(a/b)^n = a^n / b^n</text>
          <path d="M50,80 L90,80 L90,100 L50,100 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="70" y="95" font-size="11" text-anchor="middle">(2/3)^2 = 4/9</text>
          <path d="M140,80 L180,80 L180,100 L140,100 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="160" y="95" font-size="11" text-anchor="middle">(3/4)^3 = 27/64</text>
          <path d="M220,80 L260,80 L260,100 L220,100 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="240" y="95" font-size="11" text-anchor="middle">(5/2)^0 = 1</text>
        </svg>
      </figure>
      <div class="definition">
        <p><strong>Thứ tự thực hiện phép tính</strong> trong một biểu thức: làm trong ngoặc trước, rồi luỹ thừa, rồi nhân và chia từ trái sang phải, cuối cùng cộng và trừ từ trái sang phải.</p>
      </div>

<div class="idea">
        <p><strong>Thứ tự nhớ như lớp.</strong> Ngoặc như “phòng kín”: xong việc trong phòng rồi mới ra. Mũ như “lũy lên”. Nhân chia như “nhóm ngang hàng”, làm trái sang phải. Cộng trừ ra sau cùng.</p>
      </div>
<div class="warn">
        <p><strong>Thứ tự và dấu đổi.</strong></p>
        <ul>
          <li>\(12 : 3 \cdot 2 = 8\), không phải \(2\): nhân và chia cùng bậc, làm từ trái sang phải.</li>
          <li>\(3 + 4 \cdot 2 = 11\), không phải \(14\): nhân trước, cộng sau.</li>
          <li>Chuyển vế thì đổi dấu: từ \(x + \dfrac{2}{5} = \dfrac{7}{5}\) ra \(x = \dfrac{7}{5} - \dfrac{2}{5}\), không phải \(+ \dfrac{2}{5}\).</li>
          <li>Nhân hay chia hai vế thì nhân, chia <em>cả hai</em> vế cùng một số khác 0. Quên một vế là đổi được phương trình.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tính \(12 : 3 \cdot 2\): bằng \(8\) hay bằng \(2\)? <em>— \(8\). Nhân chia làm trước, từ trái sang phải: \((12 : 3) \cdot 2 = 4 \cdot 2 = 8\). Không gộp \(3 \cdot 2\) trước.</em></p>
        <p>Chuyển vế \(x + 5 = 9\): viết \(x = 9 + 5\) hay \(x = 9 - 5\)? <em>— \(x = 9 - 5 = 4\). Chuyển vế đổi dấu: \(+5\) sang vế kia thành \(-5\).</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(18 : 3 + 2 \cdot 4^2\). Mũ trước: \(4^2 = 16\). Nhân chia trái sang phải: \(18 : 3 = 6\), \(2 \cdot 16 = 32\). Cộng: \(6 + 32 = 38\). Nếu cộng 3 + 2 trước rồi chia 18 sẽ ra sai.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Ngoặc → mũ → nhân chia trái sang phải → cộng trừ. Chuyển hạng tử thì đổi dấu. Nhân hay chia hai vế với số khác 0.</p>
      </div>
<div class="memory"><p><strong>Nhìn lại.</strong> Chuyển hạng tử sang vế kia thì đổi dấu. Chuyển thừa số thì nhân hoặc chia hai vế cùng một số khác 0.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Phép nhân số hữu tỉ có tính chất nào?", choices: ["Giao hoán, kết hợp, phân phối", "Chỉ giao hoán", "Chỉ kết hợp", "Không có tính chất"], correct: 0, hint: "Tương tự số nguyên.", explain: "Giao hoán, kết hợp, phân phối." },
        { type: "mc", prompt: "Nghịch đảo của 2/3 là", choices: ["3/2", "2/3", "-3/2", "-2/3"], correct: 0, hint: "Hoán đổi tử và mẫu.", explain: "3/2." },
        { type: "text", prompt: "Tính (3/4) × (2/3).", answer: "1/2", accept: ["1/2", "0.5"], hint: "(3×2)/(4×3) = 6/12 = 1/2.", explain: "1/2." },
      { type: "num", prompt: "2 + 3^2 bằng bao nhiêu?", answer: 11, hint: "Mũ trước.", explain: "2 + 9 = 11." },
      { type: "num", prompt: "2x = 10. x bằng bao nhiêu?", answer: 5, hint: "Chia hai vế cho 2.", explain: "5." },
      { type: "num", prompt: "20 − 3 · 4 bằng bao nhiêu?", answer: 8, hint: "Nhân trước.", explain: "20 − 12 = 8." },
      { type: "num", prompt: "x/2 = 6. x bằng bao nhiêu?", answer: 12, hint: "Nhân hai vế với 2.", explain: "12." },
    ],
  },
  {
    id: "g7-b5",
    num: 5,
    chapter: 2,
    title: "Số thập phân vô hạn tuần hoàn",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phân số thành thập phân: hoặc dừng, hoặc lặp một cụm chữ số.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
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
            <div class="example">
        <p><strong>Làm chậm.</strong> Đổi \(0,\overline{12}\) thành phân số. Đặt \(x = 0{,}121212\ldots\). Nhân 100 vì cụm lặp 2 chữ số: \(100x = 12{,}1212\ldots\). Trừ: \(99x = 12\), \(x = \dfrac{12}{99} = \dfrac{4}{33}\). Mọi thập phân tuần hoàn đều làm được vậy.</p>
      </div>
            <figure class="figure" data-animation="g7-b5-priority">
        <svg viewBox="0 0 280 140" role="img" aria-label="Thứ tự thực hiện phép tính">
          <rect x="15" y="15" width="250" height="30" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="35" font-size="12" text-anchor="middle">1. Trong ngoặc: ( ) → [ ] → { }</text>
          <rect x="15" y="55" width="250" height="30" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="140" y="75" font-size="12" text-anchor="middle">2. Luỹ thừa: ^</text>
          <rect x="15" y="95" width="250" height="30" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="140" y="115" font-size="12" text-anchor="middle">3. Nhân/chia → Cộng/trừ (trái sang phải)</text>
        </svg>
      </figure>
      <div class="definition">
        <p><strong>Số thập phân vô hạn tuần hoàn</strong> là số thập phân có phần sau dấu phẩy lặp lại một cụm chữ số. Ví dụ \(0{,}333\ldots\) viết gọn là \(0{,}(3)\). Mỗi số như vậy vẫn là số hữu tỉ, vì viết được thành phân số.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Đổi thập phân tuần hoàn thành phân số: nhân \(10^k\) nếu cụm lặp \(k\) chữ số, trừ, rút gọn. Hữu hạn thì mẫu là luỹ thừa 10.</p>
      </div>
<div class="warn">
        <p><strong>Đừng gọi mọi thập phân dài là vô tỉ.</strong></p>
        <ul>
          <li>\(0,\overline{3}\) là hữu tỉ, vì bằng \(\dfrac{1}{3}\). Thập phân nào có cụm lặp cũng đổi được về phân số.</li>
          <li>Ở \(0,1\overline{6}\) cụm lặp là \(6\), không phải \(16\): \(100x - 10x = 16{,}666\ldots - 1{,}666\ldots = 15\), nên \(x = \dfrac{15}{90} = \dfrac{1}{6}\).</li>
          <li>\(0,\overline{9} = 1\), không phải “gần 1 mà nhỏ hơn 1”.</li>
          <li>Chỉ thập phân vô hạn <em>không</em> tuần hoàn (như \(\sqrt{2} \approx 1{,}41421\ldots\)) mới vô tỉ.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(0{,}3\overline{3}\) là số vô tỉ hay hữu tỉ? <em>— Hữu tỉ: \(0{,}3\overline{3} = \dfrac{1}{3}\), một phân số hai số nguyên. Thập phân dài nhưng lặp chu kì thì vẫn hữu tỉ.</em></p>
        <p>\(0{,}9\overline{9}\) bằng bao nhiêu? <em>— Bằng 1. Chu kì lặp vô hạn số 9 cho đúng giá trị 1, không phải “nhỏ hơn 1 một chút”.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Hữu hạn hay tuần hoàn thì hữu tỉ. Thập phân vô hạn không tuần hoàn thì không hữu tỉ.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Phép chia số hữu tỉ", choices: ["Nhân với số nghịch đảo", "Chia tử cho tử, mẫu cho mẫu", "Giữ nguyên và đổi dấu", "Cả A và B"], correct: 0, hint: "a/b : c/d = a/b × d/c.", explain: "Nhân với số nghịch đảo." },
        { type: "mc", prompt: "(-3/4) : (2/5) =", choices: ["-15/8", "8/15", "-8/15", "15/8"], correct: 0, hint: "(-3/4) × (5/2) = -15/8.", explain: "-15/8." },
        { type: "text", prompt: "Tính (5/6) : (-1/3).", answer: "-5/2", accept: ["-5/2", "-2.5"], hint: "(5/6) × (-3/1) = -15/6 = -5/2.", explain: "-5/2." },
      { type: "num", prompt: "0,25 bằng phân số tối giản a/4. Tử a bằng bao nhiêu?", answer: 1, hint: "0,25 = 25/100 rồi rút.", explain: "1/4." },
      { type: "mc", prompt: "Số nào là thập phân tuần hoàn?", choices: ["0,5", "0,125", "0,142857142857…", "2"], correct: 2, hint: "Nhìn cụm chữ số lặp.", explain: "Đó là 1/7." },
      { type: "mc", prompt: "1/2 viết thập phân là", choices: ["0,5 hữu hạn","0,555… tuần hoàn","Vô tỉ","Không viết được"], correct: 0, hint: "Chia 1 cho 2 hết dư.", explain: "0,5." },
      { type: "text", prompt: "0,5 bằng phân số tối giản.", answer: "1/2", accept: ["1/2"], hint: "5/10.", explain: "1/2." },
      { type: "mc", prompt: "2/5 viết thập phân là", choices: ["0,4 hữu hạn","0,444… tuần hoàn","Vô tỉ","2,5"], correct: 0, hint: "Chia 2 cho 5.", explain: "0,4." },
      { type: "text", prompt: "0,2 bằng phân số tối giản.", answer: "1/5", accept: ["1/5"], hint: "2/10.", explain: "1/5." },
    ],
  },
  {
    id: "g7-b6",
    num: 6,
    chapter: 2,
    title: "Số vô tỉ và căn bậc hai số học",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Cạnh hình vuông diện tích 2 không hữu tỉ. √a là số không âm có bình phương bằng a.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Hình vuông diện tích 2. Cạnh \(x > 0\) thỏa \(x^2 = 2\). Không có phân số nào bình phương ra 2. Số ấy viết \(x = \sqrt{2} \approx 1{,}41421\ldots\), thập phân vô hạn không tuần hoàn. Đó là số vô tỉ.</p>
            <figure class="figure" data-animation="g7-b6-divisibility">
        <svg viewBox="0 0 280 140" role="img" aria-label="Dấu hiệu chia hết">
          <rect x="15" y="15" width="250" height="30" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="35" font-size="12" text-anchor="middle">Chia hết cho 2: chữ số cuối chẵn</text>
          <rect x="15" y="55" width="250" height="30" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="140" y="75" font-size="12" text-anchor="middle">Chia hết cho 5: chữ số cuối là 0 hoặc 5</text>
          <rect x="15" y="95" width="250" height="30" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="140" y="115" font-size="12" text-anchor="middle">Chia hết cho 3: tổng các chữ số chia hết cho 3</text>
        </svg>
      </figure>
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
            <div class="idea">
        <p>Căn bậc hai số học là <em>độ dài</em>. Độ dài không âm. Phương trình \(x^2 = 9\) mới có hai nghiệm. Dấu \(\sqrt{\ }\) chỉ giữ một giá trị, cái không âm.</p>
      </div>
<div class="warn">
        <p><strong>Ba cái bẫy của dấu căn.</strong></p>
        <ul>
          <li>\(\sqrt{9} = 3\), không phải \(\pm 3\). Có hai nghiệm \(3\) và \(-3\) là phương trình \(x^2 = 9\), không phải dấu căn.</li>
          <li>\(\sqrt{(-3)^2} = 3\), không phải \(-3\): \(\sqrt{a^2} = |a|\), kết quả không bao giờ âm.</li>
          <li>\(\sqrt{4 + 5} = \sqrt{9} = 3\), không phải \(2 + \sqrt{5}\): dấu căn không chui qua phép cộng.</li>
          <li>\(\sqrt{a}\) chỉ có nghĩa khi \(a \geq 0\). Bài yêu cầu “so sánh” thì kiểm tra trước xem biểu thức có nghĩa chưa.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\sqrt{9}\) bằng \(3\) hay \(\pm 3\)? <em>— \(3\). \(\sqrt{}\) lấy giá trị không âm. \(\pm 3\) là hai nghiệm của phương trình \(x^2 = 9\), chuyện khác.</em></p>
        <p>\(\sqrt{(-3)^2}\) bằng bao nhiêu? <em>— \(3\). \((-3)^2 = 9\), căn của 9 là 3, không phải \(-3\).</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Ước lượng \(\sqrt{10}\). \(3^2 = 9\), \(4^2 = 16\), nên \(\sqrt{10}\) nằm giữa 3 và 4, gần 3 hơn. \(3{,}1^2 = 9{,}61\), \(3{,}2^2 = 10{,}24\). Vậy \(\sqrt{10} \approx 3{,}16\). Không cần máy cũng nói được “hơn 3 một chút”.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> \(\sqrt{a}\) chỉ khi \(a\geq 0\). Kết quả không âm. Ước lượng: tìm hai số chính phương kẹp. \(\sqrt{a^2}=|a|\).</p>
      </div>
<div class="memory"><p><strong>Nhìn lại.</strong> Dấu √ không cho số âm. \(\sqrt{a}\) chỉ có khi \(a \geq 0\).</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Số thập phân hữu hạn là", choices: ["Có thể viết hết các chữ số sau dấu phẩy", "Có vô số chữ số sau dấu phẩy", "Chỉ có một chữ số sau dấu phẩy", "Không có dấu phẩy"], correct: 0, hint: "Ví dụ: 0.25, 1.5.", explain: "Có thể viết hết các chữ số." },
        { type: "mc", prompt: "Số 0,75 bằng phân số nào?", choices: ["3/4", "7/5", "75/10", "1/4"], correct: 0, hint: "0.75 = 75/100 = 3/4.", explain: "3/4." },
        { type: "text", prompt: "Viết phân số 2/5 dưới dạng số thập phân.", answer: "0.4", accept: ["0.4", "0,4"], hint: "2 ÷ 5 = 0.4.", explain: "0.4." },
      { type: "mc", prompt: "Số nào vô tỉ?", choices: ["√9", "0,5", "√2", "−4/7"], correct: 2, hint: "Không viết được thành a/b.", explain: "√2 không phải số hữu tỉ." },
      { type: "num", prompt: "√0 bằng bao nhiêu?", answer: 0, hint: "0² = 0.", explain: "0." },
      { type: "mc", prompt: "√(−4) trong số thực", choices: ["Bằng −2","Bằng 2","Không có","Bằng 4"], correct: 2, hint: "Trong căn phải ≥ 0.", explain: "Không có căn bậc hai thực của số âm." },
      { type: "num", prompt: "√81 bằng bao nhiêu?", answer: 9, hint: "Không âm.", explain: "9." },
      { type: "mc", prompt: "√2 là", choices: ["Hữu tỉ","Vô tỉ","Số nguyên","Không phải số thực"], correct: 1, hint: "Không viết được a/b.", explain: "Vô tỉ." },
    ],
  },
  {
    id: "g7-b7",
    num: 7,
    chapter: 2,
    title: "Tập hợp các số thực",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Số thực gồm hữu tỉ và vô tỉ. Mỗi điểm trên trục số là một số thực.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Gộp \(\mathbb{Q}\) với các số vô tỉ được tập hợp số thực \(\mathbb{R}\). Trên trục số, mỗi điểm ứng đúng một số thực, mỗi số thực ứng đúng một điểm.</p>
            <figure class="figure" data-animation="g7-b7-prime-composite">
        <svg viewBox="0 0 280 140" role="img" aria-label="Số nguyên tố và hợp số">
          <path d="M20,20 L120,20 L120,60 L20,60 Z" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="70" y="35" font-size="12" text-anchor="middle">Số nguyên tố</text>
          <text x="70" y="55" font-size="10" text-anchor="middle">Chỉ có 2 ước: 1 và chính nó</text>
          <path d="M160,20 L260,20 L260,60 L160,60 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="210" y="35" font-size="12" text-anchor="middle">Hợp số</text>
          <text x="210" y="55" font-size="10" text-anchor="middle">Có nhiều hơn 2 ước</text>
          <circle cx="70" cy="90" r="3" fill="#83C167"/>
          <text x="70" y="105" font-size="11" text-anchor="middle">2, 3, 5, 7, 11, ...</text>
          <circle cx="210" cy="90" r="3" fill="#58C4DD"/>
          <text x="210" y="105" font-size="11" text-anchor="middle">4, 6, 8, 9, 10, ...</text>
        </svg>
      </figure>
      <div class="definition">
        <p><strong>Số thực</strong> là tập hợp gồm số hữu tỉ và số vô tỉ: \(\mathbb{R} = \mathbb{Q} \cup\) số vô tỉ. Trên trục số, mỗi số thực ứng với đúng một điểm và ngược lại.</p>
      </div>

<div class="idea">
        <p>\(\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}\). Số tự nhiên nằm trong số nguyên, số nguyên nằm trong hữu tỉ, hữu tỉ nằm trong thực.</p>
      </div>
<div class="warn">
        <p><strong>Bốn tập lồng nhau.</strong></p>
        <ul>
          <li>\(\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}\): thuộc tập nhỏ là tự thuộc mọi tập lớn. \(5\) vừa thuộc \(\mathbb{N}\), vừa \(\mathbb{Z}\), \(\mathbb{Q}\), \(\mathbb{R}\).</li>
          <li>\(0,\overline{3}\) thuộc \(\mathbb{Q}\), vì bằng \(\dfrac{1}{3}\). Thập phân vô hạn không tự động vô tỉ.</li>
          <li>\(\sqrt{5}\) thuộc \(\mathbb{R}\) nhưng không thuộc \(\mathbb{Q}\). Căn của số không chính phương là vô tỉ.</li>
          <li>Đề “chia các số vào đúng tập”: xếp vào tập <em>nhỏ nhất</em> nó thuộc, tránh viết đi viết lại bốn lần một số.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(0{,}3\overline{3}\) thuộc tập nào nhỏ nhất: \(\mathbb{N}\), \(\mathbb{Z}\), \(\mathbb{Q}\), hay \(\mathbb{R}\)? <em>— \(\mathbb{Q}\). Nó là phân số \(\dfrac{1}{3}\), không phải số nguyên, nên không thuộc \(\mathbb{N}\) hay \(\mathbb{Z}\), nhưng là hữu tỉ.</em></p>
        <p>Vì sao \(\sqrt{5}\) không thuộc \(\mathbb{Q}\)? <em>— Không viết được thành phân số hai số nguyên. Nó là số vô tỉ, chỉ nằm trong \(\mathbb{R}\).</em></p>
      </details>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(5\) vừa là tự nhiên, nguyên, hữu tỉ, vừa thực. \(\sqrt{2}\) thực nhưng không hữu tỉ.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0,\overline{3}\) là hữu tỉ, vì bằng \(1/3\). Đừng gọi mọi thập phân dài là vô tỉ. Vô tỉ khi không tuần hoàn và không dừng.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Xếp từng số vào đúng tầng: \(-3\) thuộc \(\mathbb{Z}\), \(\mathbb{Q}\), \(\mathbb{R}\), không thuộc \(\mathbb{N}\). \(0{,}75 = 3/4\) thuộc \(\mathbb{Q}\) và \(\mathbb{R}\). \(\sqrt{5}\) chỉ chắc thuộc \(\mathbb{R}\). Vẽ bốn vòng lồng nhau rồi chấm điểm thì khỏi nhầm.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Chấm từng số vào \(\mathbb{N}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\). Thập phân tuần hoàn vẫn thuộc \(\mathbb{Q}\).</p>
      </div>
<div class="memory"><p><strong>Nhìn lại.</strong> Hữu tỉ: phân số. Vô tỉ: không phải phân số. Thực: cả hai.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Làm tròn 3.76 đến hàng phần mười được", choices: ["3.8", "3.7", "4", "3"], correct: 0, hint: "Hàng phần trăm là 6 ≥ 5, nên làm tròn lên.", explain: "3.8." },
        { type: "mc", prompt: "Làm tròn 125 đến hàng chục được", choices: ["130", "120", "100", "125"], correct: 0, hint: "Hàng đơn vị là 5 ≥ 5, làm tròn lên.", explain: "130." },
        { type: "text", prompt: "Làm tròn 0.837 đến hàng phần trăm.", answer: "0.84", accept: ["0.84", "0,84"], hint: "Hàng phần nghìn là 7 ≥ 5, làm tròn lên.", explain: "0.84." },
      { type: "mc", prompt: "0 có thuộc N không? (theo SGK, N gồm 0, 1, 2, …)", choices: ["Có", "Không", "Chỉ khi viết 0/1", "Tùy năm"], correct: 0, hint: "Số tự nhiên bắt đầu từ 0 trong chương trình này.", explain: "0 ∈ N ⊂ Z ⊂ Q ⊂ R." },
      { type: "num", prompt: "Có bao nhiêu số nguyên nằm giữa −1,5 và 2,5?", answer: 4, hint: "−1, 0, 1, 2.", explain: "Bốn số: −1, 0, 1, 2." },
      { type: "mc", prompt: "−8 thuộc tập nào nhỏ nhất trong các tập đã học?", choices: ["N","Z","Q","Chỉ R"], correct: 1, hint: "Số nguyên âm.", explain: "Z, rồi Q, R. Không thuộc N." },
      { type: "mc", prompt: "0,333… tuần hoàn thuộc", choices: ["Chỉ R, không Q","Q và R","N","Không phải số"], correct: 1, hint: "Bằng 1/3.", explain: "Hữu tỉ." },
      { type: "mc", prompt: "√9 thuộc", choices: ["Chỉ R, không Q","N, Z, Q và R","Chỉ Z","Không thuộc N"], correct: 1, hint: "√9 = 3.", explain: "3 là số tự nhiên." },
      { type: "num", prompt: "Có bao nhiêu số nguyên trong khoảng (−2; 3)?", answer: 4, hint: "−1, 0, 1, 2.", explain: "4 số." },
    ],
  },
  {
    id: "g7-b8",
    num: 8,
    chapter: 3,
    title: "Góc kề bù, đối đỉnh và tia phân giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Kề bù cộng 180°. Đối đỉnh bằng nhau. Phân giác cắt góc thành hai góc bằng nhau.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Hai góc kề bù: chung một cạnh, hai cạnh còn lại là hai tia đối nhau. Tổng \(180^\circ\). Hai góc đối đỉnh: hai cặp tia đối nhau, hai góc bằng nhau.</p>
      <figure class="figure" data-animation="g7-b8-angles">
        <svg viewBox="0 0 320 170" role="img" aria-label="Hai đường thẳng cắt nhau tạo góc kề bù và góc đối đỉnh">
          <line x1="20" y1="130" x2="300" y2="40" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="40" y1="30" x2="280" y2="150" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="160" cy="85" r="3" fill="#FFFF00"/>
          <text x="168" y="78" font-size="13">O</text>
          <path d="M 185 77 A 28 28 0 0 1 175 108" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="196" y="100" font-size="14" fill="#FC6255">55°</text>
          <path d="M 135 93 A 28 28 0 0 1 145 62" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="98" y="78" font-size="14" fill="#58C4DD">55°</text>
          <text x="210" y="60" font-size="12" fill="#83C167">kề bù 125°</text>
        </svg>
        <figcaption>Đối đỉnh bằng nhau (hai góc 55°). Kề bù cộng 180°.</figcaption>
      </figure>

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
            <div class="example">
        <p><strong>Làm chậm.</strong> Hai đường thẳng cắt nhau tạo bốn góc. Gọi một góc là \(55^\circ\). Góc đối đỉnh cũng \(55^\circ\). Hai góc kề bù đều \(125^\circ\). Cộng bốn góc: \(55 + 125 + 55 + 125 = 360^\circ\), một vòng quanh điểm cắt. Nếu cộng không ra 360 thì đã nhầm kề bù với đối đỉnh.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Nhìn hình: kề bù thì hai cạnh còn lại thẳng hàng. Đối đỉnh thì hai cặp tia đối nhau. Phân giác cắt góc thành hai góc bằng nhau.</p>
      </div>
<div class="warn">
        <p><strong>Kề bù hay đối đỉnh, phân giác hay không.</strong></p>
        <ul>
          <li>Kề nhau chưa chắc kề bù: kề bù cần hai cạnh còn lại <em>thẳng hàng</em> và tổng \(180^\circ\).</li>
          <li>Bằng nhau chưa chắc đối đỉnh: đối đỉnh cần hai cặp tia đối nhau xuất phát từ hai góc ấy.</li>
          <li>Tia phân giác chia góc thành hai góc <em>bằng nhau</em>: góc \(80^\circ\) thì hai nửa là \(40^\circ\), không phải \(30^\circ\) và \(50^\circ\).</li>
          <li>Hai đường thẳng cắt nhau tạo bốn góc. Cộng lại phải ra \(360^\circ\); ra số khác là đã nhầm kề bù với đối đỉnh.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hai góc kề nhau, tổng \(90^\circ\), có phải kề bù không? <em>— Không. Kề bù cần hai cạnh còn lại thẳng hàng và tổng \(180^\circ\). Kề nhau chưa chắc kề bù.</em></p>
        <p>Hai góc bằng \(70^\circ\) ở hai nửa khác nhau có phải đối đỉnh không? <em>— Chưa chắc. Đối đỉnh cần hai cặp tia đối nhau xuất phát từ hai góc ấy, không chỉ cần bằng nhau.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Kề bù: tổng 180°. Đối đỉnh: bằng nhau. Phân giác: hai nửa bằng nhau.</p></div>
      <figure class="figure" data-animation="g7-b8-angles">
        <svg viewBox="0 0 360 210" role="img" aria-label="Góc kề bù, đối đỉnh và tia phân giác">
          <line x1="50" y1="150" x2="310" y2="150" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="180" y1="150" x2="180" y2="50" stroke="#83C167" stroke-width="2"/>
          <line x1="180" y1="150" x2="260" y2="80" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="180" cy="150" r="2.5" fill="#9A72AC"/>
          <text x="170" y="168" font-size="11" fill="#9A72AC">O</text>
          <text x="185" y="40" font-size="10" fill="#83C167">Ox</text>
          <text x="270" y="70" font-size="10" fill="#58C4DD">Oy</text>
          <text x="145" y="140" font-size="10" fill="#FC6255">xOy</text>
          <text x="215" y="140" font-size="10" fill="#FC6255">yOx'</text>
          <text x="175" y="120" font-size="11" fill="#9A72AC">xOy + yOx' = 180°</text>
          <text x="175" y="100" font-size="11" fill="#9A72AC">Hai góc kề bù</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Số nào là số vô tỉ?", choices: ["√2", "1/3", "0.5", "2"], correct: 0, hint: "√2 không viết được thành phân số.", explain: "√2." },
        { type: "mc", prompt: "Số π là", choices: ["Số vô tỉ", "Số hữu tỉ", "Số nguyên", "Số tự nhiên"], correct: 0, hint: "π có vô số chữ số thập phân không tuần hoàn.", explain: "Số vô tỉ." },
        { type: "text", prompt: "Viết √9 dưới dạng số nguyên.", answer: "3", accept: ["3"], hint: "√9 = 3 vì 3² = 9.", explain: "3." },
      { type: "num", prompt: "Hai góc đối đỉnh, một góc 18°. Góc kia bao nhiêu độ?", answer: 18, hint: "Đối đỉnh bằng nhau.", explain: "18°." },
      { type: "num", prompt: "Góc 160°, tia phân giác tạo mỗi phần bao nhiêu độ?", answer: 80, hint: "Chia đôi.", explain: "80°." },
      { type: "num", prompt: "Góc kề bù với 1° bằng bao nhiêu độ?", answer: 179, hint: "180 − 1.", explain: "179°." },
      { type: "mc", prompt: "Hai góc kề nhau, mỗi góc 40°. Chúng", choices: ["Kề bù","Đối đỉnh","Không kề bù vì tổng 80°","Phân giác"], correct: 2, hint: "Kề bù cần 180°.", explain: "Chỉ kề, chưa bù." },
    ],
  },
  {
    id: "g7-b9",
    num: 9,
    chapter: 3,
    title: "Hai đường thẳng song song",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Song song thì không gặp nhau. Cắt bởi một cát tuyến: so le trong bằng nhau, đồng vị bằng nhau.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Hai đường thẳng song song không có điểm chung. Khi một cát tuyến cắt hai đường song song, góc so le trong bằng nhau, góc đồng vị bằng nhau, hai góc trong cùng phía kề bù.</p>
      <figure class="figure">
        <svg viewBox="0 0 320 180" role="img" aria-label="Hai đường song song cắt bởi một cát tuyến">
          <line x1="20" y1="50" x2="300" y2="50" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="20" y1="130" x2="300" y2="130" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="90" y1="20" x2="230" y2="160" stroke="#58C4DD" stroke-width="2"/>
          <text x="8" y="54" font-size="13">a</text>
          <text x="8" y="134" font-size="13">b</text>
          <path d="M 148 50 A 18 18 0 0 1 162 62" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="168" y="48" font-size="13" fill="#FC6255">70°</text>
          <path d="M 162 130 A 18 18 0 0 1 176 142" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="182" y="156" font-size="13" fill="#FC6255">70°</text>
          <text x="240" y="90" font-size="12" fill="#83C167">a ∥ b</text>
        </svg>
        <figcaption>Cát tuyến cắt hai đường song song: hai góc đồng vị cùng 70°.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai đường song song, cát tuyến tạo một góc đồng vị \(65^\circ\). Mọi góc đồng vị với nó cũng \(65^\circ\). Góc so le trong với nó cũng \(65^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai góc bằng \(70^\circ\) chưa đủ để kết luận hai đường song song, nếu chúng không phải cặp so le trong hoặc đồng vị. Phải nói rõ vị trí hai góc.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Hai đường song song, cát tuyến. Một góc trong bên trái trên bằng \(70^\circ\). Góc so le trong (trong bên phải dưới) cũng \(70^\circ\). Góc trong cùng phía còn lại \(110^\circ\). Chỉ cần một góc, kéo được cả bốn góc “trong”.</p>
      </div>
      <div class="definition">
        <p><strong>Hai đường thẳng song song</strong> là hai đường thẳng không có điểm chung, kí hiệu \(a \parallel b\). Khi một đường thẳng cắt hai đường thẳng song song, các góc so le trong bằng nhau, các góc đồng vị bằng nhau, hai góc trong cùng phía kề bù.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Tô một góc đã biết, kéo đồng vị và so le trong. Muốn chứng minh song song: chỉ một cặp so le trong bằng nhau, hoặc đồng vị bằng nhau, hoặc trong cùng phía cộng \(180^\circ\).</p>
      </div>
<div class="warn">
        <p><strong>Vị trí hai góc mới quan trọng.</strong></p>
        <ul>
          <li>Hai góc bằng \(70^\circ\) chưa kết luận được hai đường song song, nếu chúng không phải cặp so le trong hoặc đồng vị. Phải nói rõ vị trí.</li>
          <li>So le trong là <em>trong</em> hai đường và khác phía cát tuyến. Đồng vị cùng phía và cùng vị trí. Đọc sai chữ “trong” là đổi kết luận.</li>
          <li>Hai góc trong cùng phía thì cộng \(180^\circ\), không phải bằng nhau.</li>
          <li>Muốn chứng minh song song: một cặp so le trong bằng nhau, hoặc đồng vị bằng nhau, hoặc trong cùng phía cộng \(180^\circ\).</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hai góc so le trong bằng \(70^\circ\): hai đường thẳng có song song không? <em>— Có. Một cặp so le trong bằng nhau chứng tỏ hai đường song song.</em></p>
        <p>Hai góc trong cùng phía bằng nhau chứ không cộng \(180^\circ\): có kết luận song song được không? <em>— Không. Trong cùng phía phải cộng \(180^\circ\) mới đủ; bằng nhau không phải điều kiện.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Muốn chứng minh song song: tìm một cặp so le trong bằng nhau, hoặc đồng vị bằng nhau, hoặc trong cùng phía cộng 180°.</p></div>
      <figure class="figure" data-animation="g7-b9-parallel-lines">
        <svg viewBox="0 0 360 210" role="img" aria-label="Hai đường thẳng song song">
          <line x1="50" y1="80" x2="310" y2="80" stroke="#83C167" stroke-width="2"/>
          <line x1="50" y1="150" x2="310" y2="150" stroke="#83C167" stroke-width="2"/>
          <line x1="30" y1="40" x2="330" y2="180" stroke="#58C4DD" stroke-width="2"/>
          <line x1="30" y1="180" x2="330" y2="40" stroke="#FC6255" stroke-width="2"/>
          <text x="320" y="75" font-size="11" fill="#83C167">a</text>
          <text x="320" y="155" font-size="11" fill="#83C167">b</text>
          <text x="325" y="45" font-size="11" fill="#58C4DD">c</text>
          <text x="325" y="185" font-size="11" fill="#FC6255">d</text>
          <text x="180" y="30" font-size="12" fill="#9A72AC">a ∥ b (hai đường thẳng song song)</text>
          <circle cx="160" cy="110" r="1.5" fill="#58C4DD"/>
          <circle cx="180" cy="115" r="1.5" fill="#FC6255"/>
          <circle cx="200" cy="120" r="1.5" fill="#58C4DD"/>
          <circle cx="220" cy="125" r="1.5" fill="#FC6255"/>
          <circle cx="240" cy="130" r="1.5" fill="#58C4DD"/>
          <circle cx="260" cy="135" r="1.5" fill="#FC6255"/>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Số thực bao gồm", choices: ["Số hữu tỉ và số vô tỉ", "Chỉ số hữu tỉ", "Chỉ số vô tỉ", "Số nguyên và số thập phân"], correct: 0, hint: "Tập R = Q ∪ I.", explain: "Số hữu tỉ và số vô tỉ." },
        { type: "mc", prompt: "Số 0 là", choices: ["Số thực", "Số vô tỉ", "Số nguyên dương", "Không phải số thực"], correct: 0, hint: "0 là số hữu tỉ (0/1), nên là số thực.", explain: "Số thực." },
        { type: "text", prompt: "Tìm số đối của √5.", answer: "-√5", accept: ["-√5"], hint: "Đổi dấu.", explain: "-√5." },
      { type: "num", prompt: "Góc đồng vị 100°. Góc đồng vị khác bằng bao nhiêu độ?", answer: 100, hint: "Song song thì đồng vị bằng nhau.", explain: "100°." },
      { type: "mc", prompt: "Hai góc so le trong bằng 50° và 50°. Hai đường bị cắt", choices: ["Song song","Vuông góc","Trùng","Không nói được"], correct: 0, hint: "Dấu hiệu so le trong.", explain: "Song song." },
      { type: "num", prompt: "a ∥ b, góc so le trong 62°. Góc so le trong kia bằng bao nhiêu độ?", answer: 62, hint: "Bằng nhau.", explain: "62°." },
      { type: "num", prompt: "Hai góc trong cùng phía, một góc 95°. Góc kia bao nhiêu độ nếu hai đường song song?", answer: 85, hint: "Kề bù.", explain: "85°." },
    ],
  },
  {
    id: "g7-b10",
    num: 10,
    chapter: 3,
    title: "Tiên đề Euclid và tính chất đường song song",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Qua một điểm ngoài một đường, có đúng một đường song song với đường ấy.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Tiên đề Euclid (dạng dùng ở lớp 7): qua một điểm không nằm trên đường thẳng \(d\), có một và chỉ một đường thẳng song song với \(d\).</p>
      <figure class="figure">
        <svg viewBox="0 0 300 160" role="img" aria-label="Qua một điểm ngoài đường thẳng có đúng một đường song song">
          <line x1="20" y1="120" x2="280" y2="120" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="20" y1="50" x2="280" y2="50" stroke="#58C4DD" stroke-width="2"/>
          <line x1="150" y1="50" x2="150" y2="120" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="150" cy="50" r="4" fill="#FFFF00"/>
          <rect x="150" y="110" width="10" height="10" fill="none" stroke="#FC6255" stroke-width="1.2"/>
          <text x="158" y="44" font-size="13">M</text>
          <text x="158" y="112" font-size="13">H</text>
          <text x="8" y="124" font-size="13">d</text>
        </svg>
        <figcaption>MH ⊥ d. Đường qua M vuông góc MH là đường song song duy nhất với d.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(a \parallel b\) và \(b \parallel c\) thì \(a \parallel c\). Quan hệ song song “truyền” được.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai đường cùng vuông góc với đường thứ ba thì song song với nhau. Một đường vuông góc, một đường chỉ cắt \(70^\circ\), thì hai đường ấy không song song.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Cho đường \(d\) và điểm \(M\) ngoài \(d\). Kẻ vuông góc từ \(M\) xuống \(d\), được chân \(H\). Đường qua \(M\) vuông góc với \(MH\) sẽ song song với \(d\). Đó là đúng một đường: tiên đề nói không có đường thứ hai.</p>
      </div>
      <div class="definition">
        <p><strong>Tiên đề Euclid:</strong> qua một điểm không nằm trên đường thẳng \(d\), có một và chỉ một đường thẳng song song với \(d\). Từ đó, nếu \(a \parallel b\) và \(b \parallel c\) thì \(a \parallel c\).</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Qua một điểm ngoài, đúng một đường song song. Hai đường cùng vuông góc một đường thì song song với nhau.</p>
      </div>
<div class="warn">
        <p><strong>“Đúng một” và hai đường cùng vuông góc.</strong></p>
        <ul>
          <li>Qua một điểm ngoài đường thẳng có đúng <em>một</em> đường song song. Viết “ít nhất một” là sai.</li>
          <li>Hai đường cùng vuông góc với đường thứ ba thì song song với nhau. Đổi thành “cùng cắt góc \(70^\circ\)” thì hai đường ấy không song song.</li>
          <li>\(a \parallel b\), \(b \parallel c\) thì \(a \parallel c\): quan hệ song song truyền được. Nhưng “cùng cắt nhau ở một điểm” thì không.</li>
          <li>Đường qua \(M\) vuông góc với \(MH\) (chân \(H\)) là đường song song duy nhất với \(d\): không kẻ được đường thứ hai.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Qua một điểm ngoài đường thẳng, kẻ được mấy đường song song với đường ấy? <em>— Đúng một. Viết “ít nhất một” là sai: tiên đề Euclid nói đúng một.</em></p>
        <p>Hai đường cùng vuông góc với đường thứ ba thì thế nào với nhau? <em>— Song song với nhau. Cùng cắt góc \(70^\circ\) thì chưa chắc, chỉ cùng vuông góc mới đủ.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Đúng một đường song song kẻ từ một điểm ngoài. Hai đường cùng vuông góc một đường thì song song.</p></div>
      <figure class="figure" data-animation="g7-b10-euclid-parallel">
        <svg viewBox="0 0 360 210" role="img" aria-label="Tiên đề Euclid và tính chất đường song song">
          <line x1="50" y1="100" x2="310" y2="100" stroke="#83C167" stroke-width="2"/>
          <line x1="50" y1="160" x2="310" y2="160" stroke="#83C167" stroke-width="2"/>
          <line x1="30" y1="50" x2="330" y2="180" stroke="#58C4DD" stroke-width="2"/>
          <circle cx="180" cy="100" r="2.5" fill="#9A72AC"/>
          <circle cx="180" cy="160" r="2.5" fill="#9A72AC"/>
          <text x="170" y="90" font-size="11" fill="#9A72AC">A</text>
          <text x="170" y="178" font-size="11" fill="#9A72AC">B</text>
          <text x="320" y="95" font-size="11" fill="#83C167">a</text>
          <text x="320" y="165" font-size="11" fill="#83C167">b</text>
          <text x="325" y="55" font-size="11" fill="#58C4DD">c</text>
          <text x="180" y="35" font-size="11" fill="#FC6255">Tiên đề Euclid:</text>
          <text x="180" y="55" font-size="10" fill="#FC6255">Qua A ∉ b, có một và chỉ một đường thẳng ∥ b</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Tỉ lệ thức a/b = c/d suy ra", choices: ["ad = bc", "ac = bd", "a + d = b + c", "a - d = b - c"], correct: 0, hint: "Tích trung bằng tích ngoại.", explain: "ad = bc." },
        { type: "mc", prompt: "Từ tỉ lệ thức 3/4 = 6/8, ta suy ra", choices: ["3×8 = 4×6", "3×6 = 4×8", "3+8 = 4+6", "3-8 = 4-6"], correct: 0, hint: "3×8 = 24, 4×6 = 24.", explain: "3×8 = 4×6." },
        { type: "text", prompt: "Tìm x trong tỉ lệ thức x/4 = 3/6.", answer: "2", accept: ["2"], hint: "x×6 = 4×3 → 6x = 12 → x = 2.", explain: "2." },
      { type: "mc", prompt: "a ∥ b và b ∥ c. Kết luận đúng là", choices: ["a cắt c", "a ∥ c", "a vuông góc c", "Không nói được"], correct: 1, hint: "Song song truyền được.", explain: "a ∥ c." },
      { type: "mc", prompt: "Hai đường cùng vuông góc với một đường thứ ba. Hai đường ấy", choices: ["Cắt nhau", "Song song", "Trùng nhau", "Vuông góc với nhau"], correct: 1, hint: "Cùng vuông góc một đường thì song song.", explain: "Đó là tính chất vừa học." },
      { type: "mc", prompt: "Qua M ngoài d có thể kẻ bao nhiêu đường vuông góc với d?", choices: ["0","1","2","Vô số"], correct: 1, hint: "Đúng một chân H, đúng một MH.", explain: "Một đường vuông góc." },
      { type: "mc", prompt: "a ⊥ c và b ⊥ c. a và b", choices: ["Vuông góc","Song song","Cắt 45°","Trùng c"], correct: 1, hint: "Cùng vuông góc một đường.", explain: "Song song." },
      { type: "mc", prompt: "Hai đường phân biệt cùng song song với đường thứ ba thì", choices: ["Cắt nhau","Song song với nhau","Vuông góc","Trùng đường thứ ba"], correct: 1, hint: "Song song truyền được.", explain: "Song song với nhau." },
      { type: "mc", prompt: "Qua M ngoài d, số đường thẳng vuông góc với đường song song với d kẻ từ M là", choices: ["0","1","2","Vô số"], correct: 1, hint: "Đúng một đường vuông góc.", explain: "Một." },
    ],
  },
  {
    id: "g7-b11",
    num: 11,
    chapter: 3,
    title: "Định lí và chứng minh định lí",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Định lí có giả thiết và kết luận. Chứng minh là chuỗi lý do, không phải đo hình.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Định lí gồm giả thiết (cái đã cho) và kết luận (cái phải ra). Chứng minh là viết các bước, mỗi bước dựa vào định nghĩa, tiên đề, hoặc định lí đã có.</p>
      <figure class="figure" data-animation="g7-b11-proof">
        <svg viewBox="0 0 280 140" role="img" aria-label="Chứng minh dựa vào giả thiết, không đo hình">
          <line x1="30" y1="110" x2="250" y2="30" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="40" y1="25" x2="240" y2="120" stroke="#DDDDDD" stroke-width="2"/>
          <circle cx="140" cy="70" r="3" fill="#FFFF00"/>
          <text x="40" y="128" font-size="12" fill="#83C167">Giả thiết: hai góc đối đỉnh</text>
          <text x="40" y="20" font-size="12" fill="#58C4DD">Kết luận: hai góc bằng nhau</text>
        </svg>
        <figcaption>Hình chỉ gợi ý. Kết luận phải đến từ giả thiết và định nghĩa.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Giả thiết: hai góc đối đỉnh. Kết luận: hai góc bằng nhau. Đó là định lí góc đối đỉnh, không cần thước đo.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đo trên hình được \(89^\circ\) rồi viết “góc vuông” là không phải chứng minh. Hình chỉ gợi ý. Kết luận phải đến từ giả thiết.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Chứng minh góc kề bù với góc vuông thì vuông. Giả thiết: góc \(A\) vuông, góc \(B\) kề bù với \(A\). Kết luận: góc \(B\) vuông. Lý do: kề bù cộng \(180^\circ\), mà góc \(A = 90^\circ\), nên góc \(B = 90^\circ\). Ba câu, đủ. Không đo hình.</p>
      </div>
      <div class="definition">
        <p><strong>Định lí</strong> là một khẳng định gồm giả thiết (điều đã cho) và kết luận (điều phải chứng minh). <strong>Chứng minh định lí</strong> là viết các bước suy luận, mỗi bước dựa vào định nghĩa, tiên đề hoặc định lí đã biết.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Viết giả thiết / kết luận. Mỗi bước một lý do. Không đo góc trên hình rồi coi đó là chứng minh.</p>
      </div>
<div class="warn">
        <p><strong>Đo hình không phải chứng minh.</strong></p>
        <ul>
          <li>Đo trên hình được \(89^\circ\) rồi viết “góc vuông” không phải chứng minh. Hình chỉ gợi ý.</li>
          <li>Mỗi bước phải có một lý do: định nghĩa, tiên đề, hoặc định lí đã có. Câu không có vì sao là câu bị “trôi”.</li>
          <li>Giả thiết và kết luận phải viết rõ trước khi chứng minh. Trộn giả thiết vào kết luận là đảo trật tự.</li>
          <li>Đừng dùng điều chưa chứng minh như “hai góc nhìn bằng nhau”. Chứng minh góc kề bù với góc vuông thì dùng kề bù cộng \(180^\circ\), không dùng thước đo.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Đo trên hình được \(89^\circ\) rồi viết “góc vuông” có phải chứng minh không? <em>— Không. Hình chỉ gợi ý; phải dùng định nghĩa hay định lí để suy ra, không dùng thước đo.</em></p>
        <p>Chứng minh góc kề bù với góc vuông: dùng điều gì? <em>— Dùng kề bù cộng \(180^\circ\), trừ đi \(90^\circ\) còn \(90^\circ\). Không dùng thước đo hay “nhìn bằng nhau”.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Viết rõ giả thiết. Mỗi câu có vì sao. Đừng dùng điều chưa chứng minh.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Nếu a/b = c/d thì", choices: ["(a+c)/(b+d) = a/b", "(a-c)/(b-d) = a/b", "a+d = b+c", "ac = bd"], correct: 0, hint: "Tính chất dãy tỉ số bằng nhau.", explain: "(a+c)/(b+d) = a/b." },
        { type: "mc", prompt: "x/2 = y/3 và x + y = 10. x =", choices: ["4", "6", "5", "3"], correct: 0, hint: "x/2 = y/3 = (x+y)/(2+3) = 10/5 = 2. x = 2×2 = 4.", explain: "4." },
        { type: "text", prompt: "x/3 = y/4 và x - y = 2. y =", answer: "8", accept: ["8"], hint: "x/3 = y/4 = (x-y)/(3-4) = 2/(-1) = -2. y = 4×(-2) = -8? Đếm lại: x-y=2, x=3k, y=4k → 3k-4k=2 → -k=2 → k=-2 → y=-8.", explain: "-8." },
      { type: "mc", prompt: "Giả thiết của định lí góc đối đỉnh là", choices: ["Hai góc bằng nhau", "Hai góc đối đỉnh", "Hai góc kề bù", "Hai góc nhọn"], correct: 1, hint: "Giả thiết là cái đề cho.", explain: "Cho hai góc đối đỉnh, kết luận chúng bằng nhau." },
      { type: "num", prompt: "Một chứng minh đúng có 3 bước, mỗi bước một lý do. Cần ít nhất bao nhiêu lý do?", answer: 3, hint: "Mỗi bước một vì sao.", explain: "Ba bước, ba lý do." },
      { type: "mc", prompt: "Kết luận của định lí nằm ở", choices: ["Cái đề cho sẵn","Cái phải chứng ra","Hình vẽ","Số đo trên thước"], correct: 1, hint: "Giả thiết cho, kết luận phải ra.", explain: "Kết luận là điều cần chứng." },
      { type: "mc", prompt: "Một bước chứng minh cần", choices: ["Lý do","Hình đẹp","Số lẻ","Màu bút"], correct: 0, hint: "Vì sao.", explain: "Mỗi bước một lý do." },
      { type: "mc", prompt: "Đo góc trên hình bằng 90° rồi kết luận vuông. Cách ấy", choices: ["Là chứng minh","Không phải chứng minh","Đúng nếu thước tốt","Đúng nếu vẽ to"], correct: 1, hint: "Hình minh họa.", explain: "Phải dùng giả thiết." },
      { type: "mc", prompt: "Giả thiết nằm ở", choices: ["Điều đề cho","Điều phải chứng","Hình phụ","Đáp số"], correct: 0, hint: "Cái đã có.", explain: "Đề cho." },
    ],
  },
  {
    id: "g7-b12",
    num: 12,
    chapter: 4,
    title: "Tổng các góc trong một tam giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Ba góc cộng 180°. Góc ngoài bằng tổng hai góc trong không kề với nó.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Kẻ đường thẳng qua một đỉnh, song song cạnh đối. Hai góc ở đáy so le trong với hai góc vừa tạo, cộng với góc ở đỉnh được góc bẹt. Vậy tổng ba góc là \(180^\circ\).</p>
      <figure class="figure">
        <svg viewBox="0 0 280 200" role="img" aria-label="Tam giác với tổng ba góc 180 độ">
          <polygon points="40,170 240,170 140,40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <text x="28" y="186" font-size="13">A</text>
          <text x="244" y="186" font-size="13">B</text>
          <text x="132" y="32" font-size="13">C</text>
          <text x="58" y="158" font-size="13" fill="#FC6255">50°</text>
          <text x="198" y="158" font-size="13" fill="#58C4DD">70°</text>
          <text x="128" y="68" font-size="13" fill="#83C167">60°</text>
        </svg>
        <figcaption>50° + 70° + 60° = 180°. Biết hai góc thì suy được góc còn lại.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai góc \(50^\circ\) và \(60^\circ\) thì góc thứ ba \(70^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác vuông có một góc nhọn \(35^\circ\) thì góc nhọn kia \(55^\circ\). Góc vuông đã chiếm \(90^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không có tam giác với các góc \(80^\circ\), \(90^\circ\), \(20^\circ\) vì tổng \(190^\circ\). Góc ngoài kề một góc trong thì không lấy góc đó cộng vào; góc ngoài bằng tổng hai góc trong còn lại.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Tam giác có góc ngoài \(120^\circ\) kề góc \(A\). Góc \(A = 60^\circ\) vì kề bù. Hai góc còn lại cộng \(120^\circ\). Nếu thêm góc \(B = 50^\circ\) thì góc \(C = 70^\circ\). Góc ngoài bằng \(B + C = 120^\circ\), khớp.</p>
      </div>
      <div class="definition">
        <p><strong>Định lí tổng ba góc trong một tam giác:</strong> tổng ba góc của một tam giác bằng \(180^\circ\). Góc ngoài tại một đỉnh bằng tổng hai góc trong không kề với nó.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Tổng trong \(180^\circ\). Góc ngoài bằng tổng hai góc trong không kề. Vuông thì hai góc nhọn phụ nhau.</p>
      </div>
<div class="warn">
        <p><strong>Tổng phải ra 180°.</strong></p>
        <ul>
          <li>Không tồn tại tam giác với các góc \(80^\circ\), \(90^\circ\), \(20^\circ\): tổng ra \(190^\circ\). Trước khi vẽ hãy cộng thử.</li>
          <li>Góc ngoài bằng tổng hai góc trong <em>không kề</em> với nó, không phải bằng góc kề. Đọc kĩ “không kề”.</li>
          <li>Tam giác vuông: hai góc nhọn phụ nhau (cộng \(90^\circ\)). Một góc nhọn \(35^\circ\) thì góc nhọn kia \(55^\circ\).</li>
          <li>Biết hai góc thì suy góc thứ ba bằng \(180^\circ\) trừ tổng hai góc đã biết — không lấy \(90^\circ\) trừ.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tam giác có các góc \(80^\circ\), \(90^\circ\), \(20^\circ\) tồn tại không? <em>— Không. Tổng ra \(190^\circ\), vượt quá \(180^\circ\). Trước khi vẽ hãy cộng thử.</em></p>
        <p>Tam giác vuông có một góc nhọn \(35^\circ\): góc nhọn kia bao nhiêu? <em>— \(55^\circ\). Hai góc nhọn phụ nhau, cộng \(90^\circ\).</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Tổng trong 180°. Vuông thì hai góc nhọn phụ nhau.</p></div>
      <figure class="figure" data-animation="g7-b12-triangle-angles">
        <svg viewBox="0 0 360 210" role="img" aria-label="Tổng các góc trong một tam giác">
          <polygon points="50,170 250,170 150,50" fill="none" stroke="#83C167" stroke-width="2"/>
          <circle cx="50" cy="170" r="2.5" fill="#58C4DD"/>
          <circle cx="250" cy="170" r="2.5" fill="#58C4DD"/>
          <circle cx="150" cy="50" r="2.5" fill="#58C4DD"/>
          <text x="40" y="188" font-size="12" fill="#58C4DD">A</text>
          <text x="262" y="188" font-size="12" fill="#58C4DD">B</text>
          <text x="162" y="38" font-size="12" fill="#58C4DD">C</text>
          <text x="90" y="145" font-size="10" fill="#83C167">∠A</text>
          <text x="210" y="145" font-size="10" fill="#83C167">∠B</text>
          <text x="150" y="80" font-size="10" fill="#83C167">∠C</text>
          <text x="180" y="190" font-size="12" fill="#9A72AC">∠A + ∠B + ∠C = 180°</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Số nào là số thập phân vô hạn tuần hoàn?", choices: ["0.333...", "0.25", "1.5", "0.75"], correct: 0, hint: "0.333... = 1/3 có chu kỳ 3.", explain: "0.333..." },
        { type: "mc", prompt: "1/6 viết dưới dạng số thập phân là", choices: ["0.1(6)", "0.16", "0.1666", "0.(16)"], correct: 0, hint: "1 ÷ 6 = 0.1666..., chu kỳ 6.", explain: "0.1(6)." },
        { type: "text", prompt: "Viết số 0.(4) dưới dạng phân số tối giản.", answer: "4/9", accept: ["4/9"], hint: "Gọi x = 0.444..., 10x = 4.444..., 10x - x = 4 → 9x = 4 → x = 4/9.", explain: "4/9." },
      { type: "num", prompt: "Tam giác đều, mỗi góc bao nhiêu độ?", answer: 60, hint: "180 : 3.", explain: "60°." },
      { type: "num", prompt: "Góc ngoài 100°, một góc trong không kề bằng 35°. Góc trong không kề còn lại bao nhiêu độ?", answer: 65, hint: "Góc ngoài = tổng hai góc trong không kề.", explain: "65°." },
      { type: "num", prompt: "Hai góc 20° và 80°. Góc thứ ba bằng bao nhiêu độ?", answer: 80, hint: "180 − 100.", explain: "80°. Tam giác cân." },
      { type: "num", prompt: "Góc ngoài 140°. Một góc trong không kề 50°. Góc trong không kề còn lại bao nhiêu độ?", answer: 90, hint: "140 = 50 + ?", explain: "90°." },
    ],
  },
  {
    id: "g7-b13",
    num: 13,
    chapter: 4,
    title: "Hai tam giác bằng nhau. Trường hợp cạnh–góc–cạnh",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Bằng nhau nghĩa là trùng khít. cgc: hai cạnh và góc xen giữa.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Hai tam giác bằng nhau khi có phép đặt trùng khít đỉnh với đỉnh, cạnh với cạnh, góc với góc. Không cần đối từng cặp nếu đã có một trường hợp đủ.</p>
      <figure class="figure">
        <svg viewBox="0 0 340 170" role="img" aria-label="Hai tam giác bằng nhau theo cạnh-góc-cạnh">
          <polygon points="30,140 130,140 70,40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <polygon points="200,140 310,140 250,45" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <text x="20" y="156" font-size="13">A</text>
          <text x="132" y="156" font-size="13">B</text>
          <text x="62" y="32" font-size="13">C</text>
          <text x="188" y="156" font-size="13">D</text>
          <text x="312" y="156" font-size="13">E</text>
          <text x="242" y="36" font-size="13">F</text>
          <path d="M 48 140 A 16 16 0 0 1 42 124" fill="none" stroke="#FC6255" stroke-width="2"/>
          <path d="M 220 140 A 16 16 0 0 1 214 124" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="70" y="164" font-size="12" fill="#58C4DD">6</text>
          <text x="248" y="164" font-size="12" fill="#58C4DD">6</text>
          <text x="28" y="90" font-size="12" fill="#83C167">8</text>
          <text x="198" y="90" font-size="12" fill="#83C167">8</text>
        </svg>
        <figcaption>AB = DE, AC = DF, góc A = góc D (xen giữa). Đó là cgc.</figcaption>
      </figure>

      <div class="definition">
        <p><strong>cgc.</strong> Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia, thì hai tam giác bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(AB = DE\), \(AC = DF\), góc \(A\) bằng góc \(D\), góc \(A\) nằm giữa \(AB\) và \(AC\). Vậy \(\Delta ABC = \Delta DEF\) theo cgc.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai cạnh bằng nhau và một góc bằng nhau, nhưng góc không xen giữa hai cạnh ấy, thì chưa đủ cgc. Có thể hai tam giác không bằng nhau.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> \(\Delta ABC\) và \(\Delta DEF\) có \(AB = DE = 6\), \(AC = DF = 8\), góc \(A =\) góc \(D = 40^\circ\). Góc \(40^\circ\) nằm giữa hai cạnh 6 và 8. Đúng cgc. Viết \(\Delta ABC = \Delta DEF\), không viết \(\Delta ACB = \Delta DEF\) vì thứ tự đỉnh phải khớp cạnh.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Đánh dấu hai cạnh và góc xen giữa. Viết đúng thứ tự đỉnh khi kết luận \(\Delta ABC = \Delta DEF\).</p>
      </div>
<div class="warn">
        <p><strong>Góc phải “xen giữa”.</strong></p>
        <ul>
          <li>cgc cần góc xen giữa hai cạnh ấy. Hai cạnh bằng nhau và một góc bằng nhau nhưng góc không xen giữa thì chưa đủ.</li>
          <li>Thứ tự đỉnh phải khớp cạnh: \(\Delta ABC = \Delta DEF\) nghĩa là \(AB\) ứng \(DE\), \(AC\) ứng \(DF\). Viết \(\Delta ACB = \Delta DEF\) là sai cặp.</li>
          <li>Góc xen giữa hai cạnh là góc nằm giữa hai cạnh ấy: với hai cạnh \(AB\), \(AC\) thì góc xen giữa là góc \(A\), không phải góc \(B\) hay \(C\).</li>
          <li>Đánh dấu hai cạnh và góc xen giữa trên hình trước khi kết luận bằng nhau.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\Delta ABC\) và \(\Delta DEF\) có \(AB = DE\), \(AC = DF\), góc \(B\) bằng góc \(E\). Góc \(B\) có xen giữa hai cạnh \(AB\), \(AC\) không? <em>— Không. Góc xen giữa hai cạnh \(AB\), \(AC\) là góc \(A\). Dùng góc \(B\) thì chưa đủ cgc.</em></p>
        <p>Viết \(\Delta ACB = \Delta DEF\) khi khớp cgc đúng không? <em>— Sai. Thứ tự đỉnh phải khớp cạnh: phải viết \(\Delta ABC = \Delta DEF\) (\(AB\) ứng \(DE\), \(AC\) ứng \(DF\)).</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Đọc “xen giữa”. Viết đúng thứ tự đỉnh khi kết luận bằng nhau.</p></div>
      <figure class="figure" data-animation="g7-b13-congruent-triangles">
        <svg viewBox="0 0 360 210" role="img" aria-label="Hai tam giác bằng nhau (cạnh-góc-cạnh)">
          <polygon points="50,170 130,170 90,90" fill="none" stroke="#83C167" stroke-width="2"/>
          <polygon points="230,170 310,170 270,90" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <line x1="50" y1="170" x2="130" y2="170" stroke="#9A72AC" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="230" y1="170" x2="310" y2="170" stroke="#9A72AC" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="90" y1="90" x2="50" y2="170" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="270" y1="90" x2="230" y2="170" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="90" cy="90" r="2" fill="#9A72AC"/>
          <circle cx="270" cy="90" r="2" fill="#9A72AC"/>
          <text x="55" y="185" font-size="10" fill="#58C4DD">A</text>
          <text x="120" y="185" font-size="10" fill="#58C4DD">B</text>
          <text x="80" y="80" font-size="10" fill="#9A72AC">C</text>
          <text x="235" y="185" font-size="10" fill="#58C4DD">A'</text>
          <text x="300" y="185" font-size="10" fill="#58C4DD">B'</text>
          <text x="260" y="80" font-size="10" fill="#9A72AC">C'</text>
          <text x="170" y="45" font-size="11" fill="#83C167">ΔABC = ΔA'B'C'</text>
          <text x="170" y="65" font-size="10" fill="#83C167">AB = A'B', ∠B = ∠B', BC = B'C'</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "2^3 × 2^2 =", choices: ["2^5", "2^6", "4^5", "4^6"], correct: 0, hint: "a^m × a^n = a^{m+n}.", explain: "2^5." },
        { type: "mc", prompt: "(3^2)^4 =", choices: ["3^8", "3^6", "9^4", "3^16"], correct: 0, hint: "(a^m)^n = a^{m×n}.", explain: "3^8." },
        { type: "text", prompt: "Tính (2/3)^3.", answer: "8/27", accept: ["8/27"], hint: "2^3/3^3 = 8/27.", explain: "8/27." },
      { type: "mc", prompt: "ΔABC = ΔDEF theo cgc. Cạnh BC bằng cạnh nào?", choices: ["DE", "DF", "EF", "Không biết"], correct: 2, hint: "Thứ tự đỉnh A↔D, B↔E, C↔F.", explain: "BC ứng EF." },
      { type: "num", prompt: "Hai tam giác bằng nhau. Một góc 47°. Góc tương ứng bằng bao nhiêu độ?", answer: 47, hint: "Góc tương ứng bằng nhau.", explain: "47°." },
      { type: "mc", prompt: "Góc trong cgc phải", choices: ["Nhỏ hơn 90°","Xen giữa hai cạnh đã cho","Đối diện cạnh lớn","Ở đỉnh bất kì"], correct: 1, hint: "Xen giữa.", explain: "Nằm giữa hai cạnh." },
      { type: "mc", prompt: "ΔABC = ΔXYZ. Góc B bằng góc", choices: ["X","Y","Z","A"], correct: 1, hint: "B↔Y.", explain: "Góc Y." },
      { type: "mc", prompt: "ΔABC = ΔPQR theo cgc. Cạnh AC bằng", choices: ["PQ","PR","QR","BC"], correct: 1, hint: "A↔P, C↔R.", explain: "PR." },
      { type: "mc", prompt: "Hai cạnh bằng nhau và góc không xen giữa. Có kết luận cgc được không?", choices: ["Được","Chưa được","Luôn bằng nhau","Luôn vuông"], correct: 1, hint: "Góc phải xen giữa.", explain: "Chưa đủ cgc." },
    ],
  },
  {
    id: "g7-b14",
    num: 14,
    chapter: 4,
    title: "Trường hợp góc–cạnh–góc và cạnh–cạnh–cạnh",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "gcg: hai góc và cạnh xen giữa. ccc: ba cạnh.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Ngoài cgc còn hai trường hợp dùng nhiều: gcg và ccc.</p>
      <figure class="figure">
        <svg viewBox="0 0 340 160" role="img" aria-label="Hai tam giác bằng nhau theo ba cạnh">
          <polygon points="40,130 150,130 95,40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <polygon points="200,130 310,130 255,40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <text x="86" y="148" font-size="12" fill="#58C4DD">7</text>
          <text x="246" y="148" font-size="12" fill="#58C4DD">7</text>
          <text x="48" y="80" font-size="12" fill="#FC6255">5</text>
          <text x="208" y="80" font-size="12" fill="#FC6255">5</text>
          <text x="128" y="80" font-size="12" fill="#83C167">9</text>
          <text x="288" y="80" font-size="12" fill="#83C167">9</text>
        </svg>
        <figcaption>Ba cạnh tương ứng bằng nhau: ccc. Ba góc bằng nhau thì chưa đủ.</figcaption>
      </figure>

      <div class="definition">
        <p><strong>gcg.</strong> Hai góc và cạnh xen giữa. <strong>ccc.</strong> Ba cạnh tương ứng bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(AB = DE\), góc \(A\) bằng góc \(D\), góc \(B\) bằng góc \(E\). Cạnh \(AB\) xen giữa hai góc ấy. \(\Delta ABC = \Delta DEF\) theo gcg.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Ba góc bằng nhau chỉ nói hai tam giác đồng dạng, chưa bằng nhau: một cái có thể lớn hơn. Thiếu cạnh thì chưa ccc, chưa gcg.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Biết ba cạnh 5, 7, 9 và 5, 7, 9. ccc, hai tam giác bằng nhau. Nếu một tam giác 5, 7, 9 và tam giác kia 5, 7, 8 thì không ccc, dù hai cặp cạnh đã bằng.</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> gcg: cạnh xen giữa hai góc. ccc: ba cạnh. Ba góc chỉ nói đồng dạng, chưa bằng nhau.</p>
      </div>
<div class="warn">
        <p><strong>Ba góc không đủ.</strong></p>
        <ul>
          <li>Ba góc bằng nhau chỉ nói hai tam giác đồng dạng: một cái có thể lớn hơn. Chưa nói bằng nhau.</li>
          <li>gcg: hai góc và cạnh <em>xen giữa</em>. Nếu cạnh đã cho không nằm giữa hai góc ấy thì chưa gcg.</li>
          <li>ccc: đủ ba cạnh. Hai cặp cạnh bằng nhau (5, 7 với 5, 7) còn cặp thứ ba khác thì không ccc.</li>
          <li>Khi kết luận bằng nhau phải kể đúng trường hợp và đúng cặp đỉnh tương ứng.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Ba góc tương ứng bằng nhau: hai tam giác bằng nhau hay chỉ đồng dạng? <em>— Chỉ đồng dạng. Một cái có thể lớn hơn; chưa có cạnh thì chưa bằng nhau.</em></p>
        <p>Hai tam giác cạnh \(5, 7, 9\) và \(5, 7, 8\): có ccc không? <em>— Không. Cặp thứ ba khác (\(9 \neq 8\)), chưa đủ ba cạnh bằng nhau.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Ba góc không đủ. Phải có cạnh trong gcg hoặc cgc, hoặc đủ ba cạnh.</p></div>
      <figure class="figure" data-animation="g7-b14-congruent-cases">
        <svg viewBox="0 0 360 210" role="img" aria-label="Trường hợp góc-cạnh-góc và cạnh-cạnh-cạnh">
          <!-- Case 1: góc-cạnh-góc -->
          <polygon points="40,160 120,160 80,80" fill="none" stroke="#83C167" stroke-width="2"/>
          <path d="M 75 90 A 10 10 0 0 1 85 90" fill="none" stroke="#FC6255" stroke-width="1.5"/>
          <path d="M 85 90 A 10 10 0 0 0 75 90" fill="none" stroke="#FC6255" stroke-width="1.5"/>
          <line x1="40" y1="160" x2="120" y2="160" stroke="#9A72AC" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="80" cy="80" r="2" fill="#9A72AC"/>
          <text x="75" y="70" font-size="9" fill="#9A72AC">α</text>
          <text x="50" y="175" font-size="9" fill="#58C4DD">A</text>
          <text x="110" y="175" font-size="9" fill="#58C4DD">B</text>
          <!-- Case 2: cạnh-cạnh-cạnh -->
          <polygon points="180,160 260,160 220,80" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <line x1="180" y1="160" x2="260" y2="160" stroke="#83C167" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="180" y1="160" x2="220" y2="80" stroke="#83C167" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="260" y1="160" x2="220" y2="80" stroke="#83C167" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="220" cy="80" r="2" fill="#58C4DD"/>
          <text x="215" y="70" font-size="9" fill="#58C4DD">C</text>
          <text x="210" y="135" font-size="9" fill="#83C167">a</text>
          <text x="165" y="140" font-size="9" fill="#83C167">b</text>
          <text x="255" y="140" font-size="9" fill="#83C167">c</text>
          <text x="210" y="45" font-size="11" fill="#9A72AC">ΔABC = ΔA'B'C' (c-c-c)</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Hai đại lượng tỉ lệ thuận nếu", choices: ["Tỉ số của chúng không đổi", "Tích của chúng không đổi", "Tổng của chúng không đổi", "Hiệu của chúng không đổi"], correct: 0, hint: "Định nghĩa tỉ lệ thuận.", explain: "Tỉ số không đổi." },
        { type: "mc", prompt: "y tỉ lệ thuận với x theo hệ số k = 3. Khi x = 2 thì y =", choices: ["6", "2/3", "3/2", "5"], correct: 0, hint: "y = kx = 3×2 = 6.", explain: "6." },
        { type: "text", prompt: "x và y tỉ lệ thuận. Khi x = 4 thì y = 12. Hệ số tỉ lệ là", answer: "3", accept: ["3"], hint: "k = y/x = 12/4 = 3.", explain: "3." },
      { type: "mc", prompt: "ccc là", choices: ["Hai cạnh một góc", "Ba cạnh", "Ba góc", "Hai góc một cạnh"], correct: 1, hint: "Ba chữ c.", explain: "Ba cạnh tương ứng bằng nhau." },
      { type: "num", prompt: "ΔABC = ΔMNP theo ccc. Nếu AB = 7 cm thì MN bằng bao nhiêu cm?", answer: 7, hint: "A↔M, B↔N.", explain: "7 cm." },
      { type: "mc", prompt: "gcg cần cạnh", choices: ["Bất kì","Xen giữa hai góc","Lớn nhất","Nhỏ nhất"], correct: 1, hint: "Xen giữa.", explain: "Cạnh giữa hai góc." },
      { type: "num", prompt: "ccc, ba cạnh 6, 8, 10. Tam giác kia cũng 6, 8, x. x bằng bao nhiêu?", answer: 10, hint: "Ba cạnh tương ứng.", explain: "10." },
      { type: "mc", prompt: "Hai tam giác có ba góc 40°, 60°, 80°. Chúng", choices: ["Bằng nhau","Đồng dạng, chưa chắc bằng nhau","Vuông","Không tồn tại"], correct: 1, hint: "Thiếu cạnh.", explain: "Cùng hình, khác cỡ được." },
      { type: "num", prompt: "ccc, cạnh 4, 7, 9. Tam giác kia 4, 7, x. x bằng bao nhiêu?", answer: 9, hint: "Ba cạnh tương ứng.", explain: "9." },
    ],
  },
  {
    id: "g7-b15",
    num: 15,
    chapter: 4,
    title: "Trường hợp bằng nhau của tam giác vuông",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Vuông rồi thì cạnh huyền và một cạnh góc vuông, hoặc cạnh huyền và một góc nhọn, cũng đủ.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Tam giác vuông đã có một góc \(90^\circ\). Ngoài cgc, gcg, ccc còn dùng: cạnh huyền và một cạnh góc vuông; cạnh huyền và một góc nhọn.</p>
      <figure class="figure">
        <svg viewBox="0 0 300 160" role="img" aria-label="Hai tam giác vuông có cạnh huyền và một cạnh góc vuông bằng nhau">
          <polygon points="30,130 160,130 30,50" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <rect x="30" y="118" width="12" height="12" fill="none" stroke="#FC6255" stroke-width="1.4"/>
          <polygon points="190,130 280,130 190,40" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <rect x="190" y="118" width="12" height="12" fill="none" stroke="#FC6255" stroke-width="1.4"/>
          <text x="70" y="148" font-size="12" fill="#58C4DD">5</text>
          <text x="220" y="148" font-size="12" fill="#58C4DD">5</text>
          <text x="90" y="78" font-size="12" fill="#83C167">13</text>
          <text x="232" y="72" font-size="12" fill="#83C167">13</text>
        </svg>
        <figcaption>Vuông, cạnh huyền 13, một cạnh góc vuông 5: hai tam giác bằng nhau.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hai tam giác vuông, cạnh huyền 13 cm, một cạnh góc vuông 5 cm. Chúng bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Chỉ bằng một cạnh góc vuông thì chưa đủ. Thiếu cạnh huyền hoặc góc nhọn tương ứng.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Hai tam giác vuông, cạnh huyền bằng nhau, một góc nhọn bằng nhau. Góc nhọn đó không phải góc vuông, nên cặp “cạnh huyền + góc nhọn” đủ. Hai góc nhọn còn lại cũng bằng nhau vì cùng phụ với góc đã cho.</p>
      </div>
      <div class="definition">
        <p>Hai tam giác vuông bằng nhau nếu chúng có: hai cạnh góc vuông bằng nhau; cạnh huyền và một cạnh góc vuông bằng nhau; hoặc cạnh huyền và một góc nhọn bằng nhau.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Vuông rồi thì cạnh huyền kèm một cạnh góc vuông, hoặc cạnh huyền kèm một góc nhọn, cũng đủ.</p>
      </div>
<div class="warn">
        <p><strong>Vuông rồi vẫn phải đủ điều kiện.</strong></p>
        <ul>
          <li>Chỉ bằng một cạnh góc vuông thì chưa đủ. Cần thêm cạnh huyền bằng nhau hoặc một góc nhọn bằng nhau.</li>
          <li>“Cạnh huyền + một góc nhọn”: góc nhọn đó phải là góc nhọn tương ứng, không phải góc vuông. Góc vuông vốn đã bằng nhau ở mọi tam giác vuông, không tính là điều kiện.</li>
          <li>Cạnh huyền là cạnh dài nhất, đối diện góc vuông. Đừng nhầm với cạnh góc vuông.</li>
          <li>Hai góc nhọn còn lại cùng phụ với góc đã cho nên bằng nhau — có thể dùng tiếp khi cần.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hai tam giác vuông chỉ bằng một cạnh góc vuông: đủ bằng nhau chưa? <em>— Chưa. Cần thêm cạnh huyền bằng nhau hoặc một góc nhọn bằng nhau.</em></p>
        <p>Tam giác vuông, cạnh huyền 13 cm, một cạnh góc vuông 5 cm, và tam giác kia cùng vậy: bằng nhau chưa? <em>— Bằng nhau. Đủ điều kiện “cạnh huyền + một cạnh góc vuông”.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Vuông sẵn một góc. Cạnh huyền là cạnh dài nhất, đối diện góc vuông.</p></div>
      <figure class="figure" data-animation="g7-b15-right-triangle">
        <svg viewBox="0 0 360 210" role="img" aria-label="Trường hợp bằng nhau của tam giác vuông">
          <!-- Case 1: cạnh-góc-cạnh -->
          <polygon points="50,170 150,170 50,70" fill="none" stroke="#83C167" stroke-width="2"/>
          <rect x="50" y="150" width="20" height="20" fill="none" stroke="#83C167" stroke-width="1.5"/>
          <line x1="50" y1="170" x2="150" y2="170" stroke="#9A72AC" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="50" y1="70" x2="50" y2="170" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="150" cy="170" r="2.5" fill="#9A72AC"/>
          <text x="145" y="188" font-size="11" fill="#9A72AC">C</text>
          <!-- Case 2: cạnh-huyền-góc nhọn -->
          <polygon points="230,170 330,170 230,70" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <rect x="230" y="150" width="20" height="20" fill="none" stroke="#58C4DD" stroke-width="1.5"/>
          <path d="M 235 150 A 15 15 0 0 1 245 160" fill="none" stroke="#9A72AC" stroke-width="1.5"/>
          <text x="250" y="145" font-size="10" fill="#9A72AC">α</text>
          <line x1="230" y1="170" x2="330" y2="170" stroke="#83C167" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="230" y1="70" x2="330" y2="170" stroke="#83C167" stroke-width="1.5" stroke-dasharray="4 3"/>
          <circle cx="330" cy="170" r="2.5" fill="#9A72AC"/>
          <text x="325" y="188" font-size="11" fill="#9A72AC">C'</text>
          <text x="280" y="45" font-size="11" fill="#FC6255">ΔABC = ΔA'B'C' (c-h-gn)</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Hai đại lượng tỉ lệ nghịch nếu", choices: ["Tích của chúng không đổi", "Tỉ số của chúng không đổi", "Tổng của chúng không đổi", "Hiệu của chúng không đổi"], correct: 0, hint: "Định nghĩa tỉ lệ nghịch.", explain: "Tích không đổi." },
        { type: "mc", prompt: "y tỉ lệ nghịch với x theo hệ số a = 12. Khi x = 3 thì y =", choices: ["4", "36", "1/4", "9"], correct: 0, hint: "y = a/x = 12/3 = 4.", explain: "4." },
        { type: "text", prompt: "x và y tỉ lệ nghịch. Khi x = 6 thì y = 4. Khi x = 8 thì y =", answer: "3", accept: ["3"], hint: "a = xy = 24. y = 24/8 = 3.", explain: "3." },
      { type: "mc", prompt: "Cạnh huyền đối diện", choices: ["Góc nhọn nhỏ hơn", "Góc vuông", "Góc tù", "Góc nào cũng được"], correct: 1, hint: "Cạnh lớn đối diện góc lớn.", explain: "Đối diện 90°." },
      { type: "mc", prompt: "Cạnh huyền là", choices: ["Cạnh góc vuông ngắn","Cạnh đối diện góc vuông","Trung tuyến","Cạnh bên của tam giác cân"], correct: 1, hint: "Đối diện 90°.", explain: "Cạnh lớn nhất." },
      { type: "num", prompt: "Hai tam giác vuông bằng nhau, một cạnh góc vuông 9 cm. Cạnh tương ứng kia bằng bao nhiêu cm?", answer: 9, hint: "Cạnh tương ứng bằng nhau.", explain: "9 cm." },
    ],
  },
  {
    id: "g7-b16",
    num: 16,
    chapter: 4,
    title: "Tam giác cân và đường trung trực",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hai cạnh bên bằng nhau thì hai góc đáy bằng nhau. Trung trực là tập điểm cách đều hai đầu đoạn.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Tam giác cân: hai cạnh bằng nhau. Hai góc đáy bằng nhau. Đường trung tuyến, phân giác, đường cao kẻ từ đỉnh cân trùng nhau.</p>
      <figure class="figure">
        <svg viewBox="0 0 260 180" role="img" aria-label="Tam giác cân và đường trung trực đáy">
          <polygon points="40,150 220,150 130,30" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="130" y1="30" x2="130" y2="150" stroke="#58C4DD" stroke-width="1.8"/>
          <rect x="130" y="138" width="12" height="12" fill="none" stroke="#FC6255" stroke-width="1.3"/>
          <circle cx="130" cy="150" r="3" fill="#FFFF00"/>
          <text x="122" y="24" font-size="13">A</text>
          <text x="28" y="166" font-size="13">B</text>
          <text x="222" y="166" font-size="13">C</text>
          <text x="136" y="168" font-size="13">H</text>
          <text x="70" y="88" font-size="12" fill="#83C167">AB = AC</text>
        </svg>
        <figcaption>Cân tại A. AH vừa đường cao, vừa trung tuyến, vừa phân giác, nằm trên trung trực BC.</figcaption>
      </figure>

      <div class="definition">
        <p>Đường trung trực của đoạn \(AB\) là đường thẳng vuông góc với \(AB\) tại trung điểm. Mọi điểm trên đường trung trực cách đều \(A\) và \(B\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác cân góc đỉnh \(40^\circ\) thì mỗi góc đáy \(70^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác có một góc \(70^\circ\) chưa chắc cân. Cần hai góc bằng nhau, hoặc hai cạnh bằng nhau.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Tam giác cân \(AB = AC\), góc \(A = 80^\circ\). Hai góc đáy bằng nhau, mỗi góc \(50^\circ\). Đường cao từ \(A\) cũng là trung tuyến: chân \(H\) là trung điểm \(BC\). \(BH = HC\).</p>
      </div>
      <div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Hai cạnh bằng nhau \(\Leftrightarrow\) hai góc đáy bằng nhau. Điểm trên trung trực cách đều hai đầu đoạn.</p>
      </div>
<div class="warn">
        <p><strong>“Cân” phải có hai cạnh hoặc hai góc bằng nhau.</strong></p>
        <ul>
          <li>Một góc \(70^\circ\) chưa chắc cân: cần hai góc bằng nhau, hoặc hai cạnh bằng nhau. Tam giác có một góc \(70^\circ\) và góc \(50^\circ\) thì không cân.</li>
          <li>Tam giác cân: hai góc đáy bằng nhau. Góc đỉnh \(40^\circ\) thì mỗi góc đáy \(\dfrac{180^\circ - 40^\circ}{2} = 70^\circ\). Không lấy \(180^\circ\) chia.</li>
          <li>Đường cao kẻ từ đỉnh cân đồng thời là trung tuyến, phân giác — chỉ khi kẻ từ đỉnh <em>cân</em>, không phải từ đỉnh bất kì.</li>
          <li>Điểm trên đường trung trực cách đều hai đầu đoạn. Điểm ngoài trung trực thì không cách đều.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tam giác cân góc đỉnh \(40^\circ\): mỗi góc đáy bao nhiêu? <em>— \(70^\circ\). Hai góc đáy bằng nhau: \(\dfrac{180^\circ - 40^\circ}{2} = 70^\circ\).</em></p>
        <p>Tam giác có một góc \(70^\circ\): có chắc cân không? <em>— Không. Cần hai góc bằng nhau hoặc hai cạnh bằng nhau, một góc \(70^\circ\) chưa đủ.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Cân: hai cạnh, hai góc đáy. Đều: ba cạnh, ba góc \(60^\circ\). Trung trực: cách đều hai đầu.</p></div>
      <figure class="figure" data-animation="g7-b16-isosceles">
        <svg viewBox="0 0 360 210" role="img" aria-label="Tam giác cân và đường trung trực">
          <polygon points="100,160 260,160 180,60" fill="none" stroke="#83C167" stroke-width="2"/>
          <line x1="180" y1="60" x2="180" y2="160" stroke="#58C4DD" stroke-width="2"/>
          <line x1="140" y1="160" x2="220" y2="160" stroke="#FC6255" stroke-width="1.5" stroke-dasharray="5 3"/>
          <circle cx="100" cy="160" r="2.5" fill="#58C4DD"/>
          <circle cx="260" cy="160" r="2.5" fill="#58C4DD"/>
          <circle cx="180" cy="60" r="2.5" fill="#58C4DD"/>
          <circle cx="180" cy="160" r="2.5" fill="#9A72AC"/>
          <text x="88" y="178" font-size="12" fill="#58C4DD">B</text>
          <text x="272" y="178" font-size="12" fill="#58C4DD">C</text>
          <text x="192" y="48" font-size="12" fill="#58C4DD">A</text>
          <text x="172" y="178" font-size="12" fill="#9A72AC">M</text>
          <text x="175" y="110" font-size="11" fill="#58C4DD">AM (trung tuyến)</text>
          <text x="175" y="90" font-size="11" fill="#FC6255">AB = AC (tam giác cân)</text>
        </svg>
      </figure>
    `,
          
      { type: "mc", prompt: "Bài tập thực hành", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
        { type: "mc", prompt: "Hàm số là quy tắc", choices: ["Mỗi giá trị của x tương ứng với một giá trị duy nhất của y", "Mỗi giá trị của x tương ứng với nhiều giá trị của y", "Không có quy tắc cụ thể", "Tất cả các đáp án trên"], correct: 0, hint: "Định nghĩa hàm số.", explain: "Mỗi x có một y duy nhất." },
        { type: "mc", prompt: "Cho hàm số y = 2x + 1. Khi x = 3 thì y =", choices: ["7", "5", "6", "4"], correct: 0, hint: "y = 2×3 + 1 = 7.", explain: "7." },
        { type: "text", prompt: "Hàm số y = x^2. Khi x = -3 thì y =", answer: "9", accept: ["9"], hint: "y = (-3)^2 = 9.", explain: "9." },
      { type: "num", prompt: "Tam giác cân góc đáy 40°. Góc đỉnh bằng bao nhiêu độ?", answer: 100, hint: "180 − 40 − 40.", explain: "100°." },
      { type: "mc", prompt: "Mọi điểm trên trung trực của AB đều", choices: ["Nằm trên AB","Cách đều A và B","Gần A","Là trung điểm"], correct: 1, hint: "Định nghĩa.", explain: "MA = MB." },
    ],
  },
  {
    id: "g7-b17",
    num: 17,
    chapter: 5,
    title: "Thu thập và phân loại dữ liệu",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Dữ liệu rời rạc đếm được từng giá trị. Dữ liệu liên tục thì ghép nhóm.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Thu thập xong phải xếp. Số anh chị em là rời rạc: 0, 1, 2, 3. Chiều cao là liên tục: ghép [140; 145), [145; 150), …</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tám bạn: 2, 1, 0, 2, 3, 1, 2, 0 anh chị em. Giá trị 2 xuất hiện 3 lần. Đó là tần số của 2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tổng tần số phải bằng số bạn đã hỏi. Cộng được 7 trong khi hỏi 8 bạn thì đã đếm sót.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Hỏi 12 bạn số anh chị em: 0, 1, 1, 2, 0, 3, 1, 2, 2, 1, 0, 1. Tần số: 0 có 3, 1 có 5, 2 có 3, 3 có 1. Cộng \(3+5+3+1 = 12\). Khớp. Nếu cộng 11 thì phải đếm lại từ đầu, gạch từng số.</p>
      </div>
            <figure class="figure" data-animation="g7-b17-statistics-data">
        <svg viewBox="0 0 360 210" role="img" aria-label="Biểu đồ cột tần số số anh chị em của 12 bạn">
          <line x1="60" y1="30" x2="60" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="170" x2="345" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <text x="54" y="38" font-size="12" text-anchor="end">5</text>
          <text x="54" y="70" font-size="12" text-anchor="end">4</text>
          <text x="54" y="102" font-size="12" text-anchor="end">3</text>
          <text x="54" y="134" font-size="12" text-anchor="end">2</text>
          <text x="54" y="166" font-size="12" text-anchor="end">1</text>
          <rect x="110" y="70" width="55" height="100" fill="#58C4DD" fill-opacity="0.35" stroke="#58C4DD" stroke-width="1.5"/>
          <rect x="180" y="10" width="55" height="160" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <rect x="250" y="70" width="55" height="100" fill="#83C167" fill-opacity="0.35" stroke="#83C167" stroke-width="1.5"/>
          <rect x="320" y="137" width="55" height="33" fill="#9A72AC" fill-opacity="0.35" stroke="#9A72AC" stroke-width="1.5"/>
          <text x="137" y="62" font-size="12" text-anchor="middle">3</text>
          <text x="207" y="2" font-size="12" text-anchor="middle">5</text>
          <text x="277" y="62" font-size="12" text-anchor="middle">3</text>
          <text x="347" y="129" font-size="12" text-anchor="middle">1</text>
          <text x="137" y="186" font-size="12" text-anchor="middle">0</text>
          <text x="207" y="186" font-size="12" text-anchor="middle">1</text>
          <text x="277" y="186" font-size="12" text-anchor="middle">2</text>
          <text x="347" y="186" font-size="12" text-anchor="middle">3</text>
          <text x="200" y="202" font-size="12" fill="#9A72AC" text-anchor="middle">Số anh chị em</text>
        </svg>
        <figcaption>Tần số: 0 có 3, 1 có 5, 2 có 3, 3 có 1. Cộng 3 + 5 + 3 + 1 = 12, khớp số bạn đã hỏi.</figcaption>
      </figure>
<div class="definition">
        <p>Dữ liệu <strong>rời rạc</strong> là các giá trị đếm được (số anh chị em, số ngày), đếm từng giá trị. Dữ liệu <strong>liên tục</strong> là các giá trị đo được (chiều cao, cân nặng), phải ghép nhóm \([a; b)\). <strong>Tần số</strong> của một giá trị là số lần nó xuất hiện.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Cộng tần số ra cỡ mẫu. Rời rạc thì đếm từng giá trị. Liên tục thì ghép nhóm.</p>
      </div>
<div class="warn">
        <p><strong>Đếm xong phải khớp.</strong></p>
        <ul>
          <li>Tổng tần số phải bằng cỡ mẫu (số bạn đã hỏi). Cộng tần số ra 7 mà hỏi 8 bạn là đếm sót một người.</li>
          <li>Rời rạc (số anh chị em, số ngày) thì đếm từng giá trị. Liên tục (chiều cao, cân nặng) thì ghép nhóm \([a; b)\) — không đếm theo từng cm lẻ.</li>
          <li>Khi ghép nhóm, mỗi dữ liệu nằm đúng một nhóm: \(145\) thuộc \([145; 150)\), không thuộc nhóm trước.</li>
          <li>Kiểm tra bằng cách cộng lại từng nhóm; lệch một là phải đếm lại từ đầu.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hỏi 8 bạn số anh chị em, cộng tần số được 7. Có vấn đề gì? <em>— Đếm sót một bạn. Tổng tần số phải bằng cỡ mẫu (số người đã hỏi), phải đếm lại từ đầu.</em></p>
        <p>Chiều cao đo từng cm rồi đếm từng giá trị có phải cách làm đúng không? <em>— Không. Chiều cao liên tục phải ghép nhóm \([a; b)\), không đếm theo từng cm lẻ.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Rời rạc: từng giá trị. Liên tục: nhóm [a; b). Tổng tần số bằng cỡ mẫu.</p></div>
    `,
          exercises: [
        { type: "mc", prompt: "Điểm A(3, -2) nằm ở góc phần tư", choices: ["IV", "I", "II", "III"], correct: 0, hint: "Hoành độ dương, tung độ âm.", explain: "Góc phần tư IV." },
        { type: "mc", prompt: "Điểm B(-1, 5) nằm ở góc phần tư", choices: ["II", "I", "III", "IV"], correct: 0, hint: "Hoành độ âm, tung độ dương.", explain: "Góc phần tư II." },
        { type: "text", prompt: "Tọa độ điểm gốc O là", answer: "(0, 0)", accept: ["(0, 0)", "(0,0)", "0, 0", "0,0"], hint: "Gốc tọa độ có cả hoành độ và tung độ bằng 0.", explain: "(0, 0)." },
      { type: "num", prompt: "Hỏi 20 bạn, các tần số cộng được 20. Bảng ấy khớp cỡ mẫu chưa? Trả 1 nếu khớp, 0 nếu không.", answer: 1, hint: "Tổng tần số bằng 20.", explain: "Khớp." },
      { type: "num", prompt: "Tần số 2, 5, 3. Cỡ mẫu bằng bao nhiêu?", answer: 10, hint: "Cộng tần số.", explain: "10." },
      { type: "mc", prompt: "Số giày là dữ liệu", choices: ["Liên tục, phải ghép nhóm","Rời rạc, đếm từng cỡ","Không thống kê được","Chỉ vẽ quạt"], correct: 1, hint: "Cỡ 38, 39, 40…", explain: "Rời rạc." },
      { type: "num", prompt: "Tần số 1, 4, 6, 1. Cỡ mẫu bằng bao nhiêu?", answer: 12, hint: "Cộng.", explain: "12." },
      { type: "mc", prompt: "Nhiệt độ từng giờ là dữ liệu", choices: ["Rời rạc","Liên tục, nên ghép nhóm nếu nhiều giá trị","Không thống kê","Chỉ vẽ quạt"], correct: 1, hint: "Đo trên thang liên tục.", explain: "Liên tục." },
    ],
  },
  {
    id: "g7-b18",
    num: 18,
    chapter: 5,
    title: "Biểu đồ hình quạt tròn",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Cả vòng 360°. Mỗi phần lấy đúng tỉ lệ của nhóm ấy.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Quạt tròn cho thấy cơ cấu. Nhóm chiếm \(p\%\) thì góc ở tâm là \(\dfrac{p}{100} \cdot 360^\circ\).</p>
      <figure class="figure">
        <svg viewBox="0 0 220 200" role="img" aria-label="Biểu đồ hình quạt tròn ba phần 25%, 40%, 35%">
          <path d="M 110 100 L 110 30 A 70 70 0 0 1 180 100 Z" fill="#58C4DD" fill-opacity="0.35" stroke="#DDDDDD" stroke-width="2"/>
          <path d="M 110 100 L 180 100 A 70 70 0 0 1 53 141 Z" fill="#FC6255" fill-opacity="0.35" stroke="#DDDDDD" stroke-width="2"/>
          <path d="M 110 100 L 53 141 A 70 70 0 0 1 110 30 Z" fill="#83C167" fill-opacity="0.35" stroke="#DDDDDD" stroke-width="2"/>
          <text x="138" y="76" font-size="12" fill="#58C4DD" text-anchor="middle">Toán 25%</text>
          <text x="124" y="142" font-size="12" fill="#FC6255" text-anchor="middle">Văn 40%</text>
          <text x="72" y="84" font-size="12" fill="#83C167" text-anchor="middle">Anh 35%</text>
        </svg>
        <figcaption>25% → 90°, 40% → 144°, 35% → 126°. Tổng góc 360°, tổng phần trăm 100%.</figcaption>
      </figure>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 25% thì góc \(90^\circ\). 50% thì nửa vòng, \(180^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> 40 học sinh, 10 em thích bóng đá. Tỉ lệ 25%, góc \(90^\circ\). Không lấy 10°.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Các góc cộng phải ra \(360^\circ\). Thiếu một nhóm thì hình không khép.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> 40 bạn: 10 thích Toán, 16 Văn, 14 Anh. Phần trăm 25%, 40%, 35%. Góc \(90^\circ\), \(144^\circ\), \(126^\circ\). Cộng góc \(360^\circ\), cộng phần trăm 100%. Vẽ xong phải kiểm tra hai tổng ấy.</p>
      </div>
      <div class="definition">
        <p><strong>Biểu đồ hình quạt tròn</strong> biểu diễn tỉ lệ các nhóm bằng các hình quạt; nhóm chiếm \(p\%\) thì góc ở tâm của quạt là \(\dfrac{p}{100} \cdot 360^\circ\).</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> \(p\%\) ứng góc \(3{,}6p\) độ. Cộng góc \(360^\circ\), cộng phần trăm \(100\%\).</p>
      </div>
<div class="warn">
        <p><strong>Phần trăm nhân 3,6 ra độ.</strong></p>
        <ul>
          <li>\(p\%\) ứng góc \(3{,}6p\) độ: 25% thì \(90^\circ\), không phải \(25^\circ\). 40% thì \(144^\circ\), không phải \(40^\circ\).</li>
          <li>Khi có số học sinh, đổi ra phần trăm trước: 10/40 = 25% rồi mới nhân 3,6.</li>
          <li>Tổng các góc phải ra \(360^\circ\). Thiếu một nhóm thì hình không khép, tổng không đủ 360°.</li>
          <li>Tổng phần trăm phải ra 100%. Cộng ra 99% hay 101% là làm tròn hoặc đếm sai, phải sửa.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Nhóm chiếm 25%: góc ở tâm bao nhiêu độ? <em>— \(90^\circ\). \(25 \cdot 3{,}6 = 90\). Không phải \(25^\circ\).</em></p>
        <p>40 học sinh, 10 em thích bóng đá: góc ở tâm bằng \(10^\circ\) hay \(90^\circ\)? <em>— \(90^\circ\). Tỉ lệ là \(\dfrac{10}{40} = 25\%\), góc \(90^\circ\). Không lấy số học sinh làm độ.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Phần trăm nhân 3,6 ra số độ. Kiểm tra tổng 100% và 360°.</p></div>
      <figure class="figure" data-animation="g7-b18-pie-chart">
        <svg viewBox="0 0 360 210" role="img" aria-label="Biểu đồ hình quạt tròn">
          <circle cx="180" cy="110" r="60" fill="none" stroke="#83C167" stroke-width="2"/>
          <path d="M 180 110 L 180 50 A 60 60 0 0 1 232 142 Z" fill="#83C167" opacity="0.6"/>
          <path d="M 180 110 L 232 142 A 60 60 0 0 1 208 172 Z" fill="#58C4DD" opacity="0.6"/>
          <path d="M 180 110 L 208 172 A 60 60 0 0 1 132 172 Z" fill="#FC6255" opacity="0.6"/>
          <path d="M 180 110 L 132 172 A 60 60 0 0 1 180 50 Z" fill="#9A72AC" opacity="0.6"/>
          <text x="180" y="30" font-size="11" fill="#9A72AC">Biểu đồ hình quạt tròn</text>
          <text x="230" y="60" font-size="9" fill="#555">20%</text>
          <text x="230" y="80" font-size="9" fill="#555">30%</text>
          <text x="230" y="100" font-size="9" fill="#555">25%</text>
          <text x="230" y="120" font-size="9" fill="#555">25%</text>
        </svg>
      </figure>
    `,
          exercises: [
        { type: "mc", prompt: "Đồ thị của hàm số y = ax (a ≠ 0) là", choices: ["Đường thẳng đi qua gốc tọa độ", "Đường cong", "Hai đường thẳng song song", "Đường tròn"], correct: 0, hint: "Định nghĩa đồ thị hàm số bậc nhất.", explain: "Đường thẳng qua O." },
        { type: "mc", prompt: "Điểm nào thuộc đồ thị y = 2x?", choices: ["(1, 2)", "(2, 1)", "(0, 1)", "(1, 0)"], correct: 0, hint: "y = 2×1 = 2.", explain: "(1, 2)." },
        { type: "text", prompt: "Đồ thị y = -3x đi qua điểm (2, y). y =", answer: "-6", accept: ["-6"], hint: "y = -3×2 = -6.", explain: "-6." },
      { type: "num", prompt: "10% trên quạt. Góc bao nhiêu độ?", answer: 36, hint: "0,1 · 360.", explain: "36°." },
      { type: "num", prompt: "Góc 180° chiếm bao nhiêu phần trăm?", answer: 50, hint: "Nửa vòng.", explain: "50%." },
      { type: "num", prompt: "40% trên quạt. Góc bằng bao nhiêu độ?", answer: 144, hint: "0,4 · 360.", explain: "144°." },
      { type: "num", prompt: "Góc 36° chiếm bao nhiêu phần trăm?", answer: 10, hint: "36/360.", explain: "10%." },
    ],
  },
  {
    id: "g7-b19",
    num: 19,
    chapter: 5,
    title: "Biểu đồ đoạn thẳng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Dùng khi dữ liệu theo thời gian. Đọc dốc để biết tăng hay giảm.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Trục ngang thường là thời gian, trục đứng là đại lượng. Gãy khúc nối các điểm. Dốc lên là tăng, dốc xuống là giảm, nằm ngang là không đổi.</p>
      <figure class="figure">
        <svg viewBox="0 0 360 200" role="img" aria-label="Biểu đồ đoạn thẳng nhiệt độ từ 7 giờ đến 10 giờ">
          <line x1="60" y1="50" x2="350" y2="50" stroke="#DDDDDD" stroke-opacity="0.25" stroke-width="1"/>
          <line x1="60" y1="90" x2="350" y2="90" stroke="#DDDDDD" stroke-opacity="0.25" stroke-width="1"/>
          <line x1="60" y1="130" x2="350" y2="130" stroke="#DDDDDD" stroke-opacity="0.25" stroke-width="1"/>
          <line x1="60" y1="30" x2="60" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="170" x2="350" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <text x="44" y="42" font-size="12">°C</text>
          <text x="54" y="54" font-size="12" text-anchor="end">24</text>
          <text x="54" y="94" font-size="12" text-anchor="end">22</text>
          <text x="54" y="134" font-size="12" text-anchor="end">20</text>
          <text x="90" y="190" font-size="12" text-anchor="middle">7</text>
          <text x="170" y="190" font-size="12" text-anchor="middle">8</text>
          <text x="250" y="190" font-size="12" text-anchor="middle">9</text>
          <text x="330" y="190" font-size="12" text-anchor="middle">10</text>
          <line x1="90" y1="130" x2="170" y2="70" stroke="#83C167" stroke-width="2.5"/>
          <line x1="170" y1="70" x2="250" y2="70" stroke="#58C4DD" stroke-width="2.5"/>
          <line x1="250" y1="70" x2="330" y2="110" stroke="#FC6255" stroke-width="2.5"/>
          <circle cx="90" cy="130" r="4" fill="#58C4DD"/>
          <circle cx="170" cy="70" r="4" fill="#58C4DD"/>
          <circle cx="250" cy="70" r="4" fill="#58C4DD"/>
          <circle cx="330" cy="110" r="4" fill="#58C4DD"/>
          <text x="90" y="118" font-size="12" text-anchor="middle">20°</text>
          <text x="170" y="58" font-size="12" text-anchor="middle">23°</text>
          <text x="250" y="58" font-size="12" text-anchor="middle">23°</text>
          <text x="330" y="98" font-size="12" text-anchor="middle">21°</text>
          <text x="98" y="98" font-size="12" fill="#83C167">tăng</text>
          <text x="210" y="88" font-size="12" fill="#58C4DD">không đổi</text>
          <text x="300" y="82" font-size="12" fill="#FC6255">giảm</text>
        </svg>
        <figcaption>Đọc từng đoạn: từ 7 đến 8 giờ tăng 3°, 8 đến 9 giờ không đổi, 9 đến 10 giờ giảm 2°. Đọc số trên trục, đừng chỉ nhìn độ dốc.</figcaption>
      </figure>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Năm 1: 10, năm 2: 14. Tăng 4 đơn vị trong một năm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đường dốc hơn chưa chắc tăng nhiều hơn nếu hai trục khác đơn vị. Đọc số trên trục, đừng chỉ nhìn độ dốc cảm tính.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Nhiệt độ 7 giờ: \(20^\circ\), 8 giờ: \(23^\circ\), 9 giờ: \(23^\circ\), 10 giờ: \(21^\circ\). Từ 7 đến 8 tăng 3. Từ 8 đến 9 nằm ngang. Từ 9 đến 10 giảm 2. Đọc từng đoạn, không nhìn cả đường rồi nói “trời nóng dần”.</p>
      </div>
      <div class="definition">
        <p><strong>Biểu đồ đoạn thẳng</strong> là đường gấp khúc nối các điểm biểu diễn giá trị theo thời gian; dốc lên là tăng, dốc xuống là giảm, nằm ngang là không đổi.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Đọc từng đoạn: tăng, giảm, hay không đổi. So số trên trục, không chỉ nhìn độ dốc.</p>
      </div>
<div class="warn">
        <p><strong>Đọc số trên trục, đừng nhìn độ dốc.</strong></p>
        <ul>
          <li>Đường dốc hơn chưa chắc tăng nhiều hơn nếu hai trục khác đơn vị. So các số trên trục đứng.</li>
          <li>Đọc từng đoạn, không đọc cả đường rồi nói “trời nóng dần”: 7→8 tăng 3, 8→9 không đổi, 9→10 giảm 2.</li>
          <li>Nằm ngang nghĩa là giá trị không đổi, không phải “bằng 0” hay “không quan trọng”.</li>
          <li>Điểm dữ liệu là giá trị đúng tại mốc thời gian. Giữa hai điểm, đường chỉ là “chuyển dần”, chưa chắc thực đo.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Nhiệt độ 7 giờ \(20^\circ\), 8 giờ \(23^\circ\), 9 giờ \(23^\circ\), 10 giờ \(21^\circ\): từ 9 đến 10 thế nào? <em>— Giảm \(2^\circ\). Đọc số trên trục: \(23 \to 21\), giảm 2, không chỉ nhìn độ dốc.</em></p>
        <p>Đoạn nằm ngang trên biểu đồ đoạn thẳng nghĩa là gì? <em>— Giá trị không đổi, không phải bằng 0 hay “không quan trọng”.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Quạt: cơ cấu một thời điểm. Đoạn thẳng: biến thiên theo thời gian. Cột: so từng nhóm.</p></div>
      <figure class="figure" data-animation="g7-b19-line-chart">
        <svg viewBox="0 0 360 210" role="img" aria-label="Biểu đồ đoạn thẳng">
          <line x1="50" y1="180" x2="310" y2="180" stroke="#DDDDDD" stroke-width="1.5"/>
          <line x1="50" y1="30" x2="50" y2="180" stroke="#DDDDDD" stroke-width="1.5"/>
          <circle cx="80" cy="150" r="3" fill="#83C167"/>
          <circle cx="130" cy="120" r="3" fill="#83C167"/>
          <circle cx="180" cy="90" r="3" fill="#83C167"/>
          <circle cx="230" cy="70" r="3" fill="#83C167"/>
          <circle cx="280" cy="60" r="3" fill="#83C167"/>
          <polyline points="80,150 130,120 180,90 230,70 280,60" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="75" y="195" font-size="9" fill="#555">Tháng 1</text>
          <text x="125" y="195" font-size="9" fill="#555">Tháng 2</text>
          <text x="175" y="195" font-size="9" fill="#555">Tháng 3</text>
          <text x="225" y="195" font-size="9" fill="#555">Tháng 4</text>
          <text x="275" y="195" font-size="9" fill="#555">Tháng 5</text>
          <text x="180" y="20" font-size="11" fill="#9A72AC">Biểu đồ đoạn thẳng</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "num", prompt: "Năm 2020 có 12, năm 2021 có 18. Tăng bao nhiêu?", answer: 6, hint: "18 − 12.", explain: "6." },
      { type: "mc", prompt: "Đoạn nằm ngang trên biểu đồ đoạn thẳng nghĩa là", choices: ["Tăng nhanh", "Giảm nhanh", "Không đổi", "Thiếu dữ liệu"], correct: 2, hint: "Trục đứng không đổi.", explain: "Giá trị giữ nguyên." },
      { type: "mc", prompt: "Muốn thấy tỉ lệ từng loại trong một năm, nên vẽ", choices: ["Biểu đồ đoạn thẳng", "Biểu đồ quạt tròn", "Chỉ ghi một số", "Trục số"], correct: 1, hint: "Cơ cấu thì quạt.", explain: "Quạt tròn." },
      { type: "num", prompt: "Tháng 1: 8, tháng 2: 5. Giảm bao nhiêu?", answer: 3, hint: "8 − 5.", explain: "3." },
      { type: "mc", prompt: "Muốn xem dân số tăng qua các năm, nên vẽ", choices: ["Quạt tròn một năm","Biểu đồ đoạn thẳng","Chỉ một cột","Tứ giác"], correct: 1, hint: "Theo thời gian.", explain: "Đoạn thẳng." },
      { type: "mc", prompt: "Đường dốc xuống nghĩa là đại lượng", choices: ["Tăng","Giảm","Không đổi","Vô tỉ"], correct: 1, hint: "Trục đứng giảm.", explain: "Giảm." },
      { type: "num", prompt: "Năm 1: 15, năm 3: 21. Tăng trung bình mỗi năm (hai khoảng) bằng bao nhiêu?", answer: 3, hint: "(21−15)/2.", explain: "3." },
    ],
  },
  {
    id: "g7-b20",
    num: 20,
    chapter: 6,
    title: "Tỉ lệ thức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "a/b = c/d khi ad = bc. Nhân chéo để kiểm tra hoặc tìm số chưa biết.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
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
            <div class="example">
        <p><strong>Làm chậm.</strong> Tìm \(x\) để \(\dfrac{x-1}{4} = \dfrac{3}{6}\). Nhân chéo: \(6(x-1) = 12\), \(x-1 = 2\), \(x = 3\). Thế lại: \(\dfrac{2}{4} = \dfrac{3}{6}\), đúng. Quên ngoặc, viết \(6x - 1 = 12\), sẽ ra \(x\) sai.</p>
      </div>
            <figure class="figure" data-animation="g7-b20-equations">
        <svg viewBox="0 0 280 140" role="img" aria-label="Phương trình bậc nhất một ẩn">
          <rect x="20" y="20" width="240" height="40" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="40" font-size="12" text-anchor="middle">ax + b = 0 (a ≠ 0)</text>
          <path d="M50,80 L90,80 L90,100 L50,100 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="70" y="95" font-size="11" text-anchor="middle">2x + 5 = 0 → x = -2.5</text>
          <path d="M140,80 L180,80 L180,100 L140,100 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="160" y="95" font-size="11" text-anchor="middle">3x - 9 = 0 → x = 3</text>
          <path d="M220,80 L260,80 L260,100 L220,100 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="240" y="95" font-size="11" text-anchor="middle">-4x + 8 = 0 → x = 2</text>
        </svg>
      </figure>
      <div class="definition">
        <p><strong>Tỉ lệ thức</strong> là đẳng thức của hai tỉ số \(\dfrac{a}{b} = \dfrac{c}{d}\) với \(b, d \neq 0\). Nó đúng khi và chỉ khi \(ad = bc\).</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Kiểm tra tỉ lệ thức bằng nhân chéo \(ad=bc\). Từ \(a:b=c:d\) viết được \(a/c=b/d\). Tìm ẩn thì cô lập, nhớ mẫu khác 0.</p>
      </div>
<div class="warn">
        <p><strong>Nhân chéo trước khi kết luận.</strong></p>
        <ul>
          <li>\(\dfrac{3}{4} = \dfrac{6}{8}\) đúng vì \(3 \cdot 8 = 4 \cdot 6 = 24\). \(\dfrac{3}{4} = \dfrac{6}{7}\) sai vì \(21 \neq 24\). Đừng nhìn “cùng tăng một ít” rồi kết luận.</li>
          <li>Nhân chéo nhớ có ngoặc: \(\dfrac{x-1}{4} = \dfrac{3}{6}\) cho \(6(x-1) = 12\). Viết \(6x - 1 = 12\) là sai, ra \(x\) sai.</li>
          <li>Mẫu phải khác 0. \(\dfrac{a}{b} = \dfrac{c}{d}\) chỉ có nghĩa khi \(b, d \neq 0\).</li>
          <li>Thế nghiệm trở lại để kiểm tra: \(x = 3\) thì \(\dfrac{2}{4} = \dfrac{3}{6}\), đúng.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\dfrac{3}{4}\) và \(\dfrac{6}{7}\) có tạo tỉ lệ thức không? <em>— Không. Nhân chéo: \(3 \cdot 7 = 21\), \(4 \cdot 6 = 24\). Khác nhau nên không phải.</em></p>
        <p>Giải \(\dfrac{x-1}{4} = \dfrac{3}{6}\): nhân chéo phải viết thế nào? <em>— \(6(x-1) = 12\). Nhớ ngoặc: \(6x - 1 = 12\) là sai, ra \(x\) sai.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Nhân chéo. Có thể đổi chỗ: \(a/c = b/d\). Không cho mẫu bằng 0.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "x/8 = 3/4. Giá trị x bằng bao nhiêu?", answer: 6, hint: "4x = 24.", explain: "x = 6." },
      { type: "mc", prompt: "2/5 = 4/10 vì", choices: ["2 + 4 = 5 + 10", "2 · 10 = 5 · 4", "2 · 4 = 5 · 10", "Mẫu lớn hơn thì đúng"], correct: 1, hint: "ad = bc.", explain: "20 = 20." },
      { type: "num", prompt: "Trong 3/x = 6/10, x bằng bao nhiêu?", answer: 5, hint: "3 · 10 = 6x.", explain: "x = 5." },
      { type: "num", prompt: "x/3 = 8/6. x bằng bao nhiêu?", answer: 4, hint: "6x = 24.", explain: "4." },
      { type: "mc", prompt: "3/5 = 6/10 đúng vì", choices: ["3+6=5+10","3·10=5·6","3·6=5·10","Mẫu chẵn"], correct: 1, hint: "Nhân chéo.", explain: "30=30." },
      { type: "num", prompt: "x/9 = 2/6. x bằng bao nhiêu?", answer: 3, hint: "6x = 18.", explain: "3." },
      { type: "mc", prompt: "4/6 = 6/9 đúng vì", choices: ["4+6=6+9","4·9=6·6","4·6=6·9","Mẫu tăng"], correct: 1, hint: "Nhân chéo.", explain: "36=36." },
    ],
  },
  {
    id: "g7-b21",
    num: 21,
    chapter: 6,
    title: "Dãy tỉ số bằng nhau",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "a/b = c/d = e/f thì mỗi tỉ số bằng tổng tử trên tổng mẫu.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Nếu \(\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{e}{f} = k\) thì \(a = kb\), \(c = kd\), \(e = kf\). Cộng tử và cộng mẫu: \(\dfrac{a + c + e}{b + d + f} = k\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(1/2 = 2/4 = 3/6\). Tổng tử 6, tổng mẫu 12, \(6/12 = 1/2\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không cộng tử với mẫu. \((1+2)/(2+4)\) mới đúng hướng; \(1/2 + 2/4\) là chuyện khác.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Chia 12 cái kẹo theo tỉ số 2 : 3 : 7. Tổng phần \(2+3+7 = 12\). Mỗi phần 1 kẹo. Ba nhóm được 2, 3, 7. Tỉ số \(\dfrac{2}{2} = \dfrac{3}{3} = \dfrac{7}{7} = 1\), khớp dãy tỉ số.</p>
      </div>
            <figure class="figure" data-animation="g7-b21-word-problems">
        <svg viewBox="0 0 280 140" role="img" aria-label="Giải bài toán bằng cách lập phương trình">
          <rect x="15" y="15" width="250" height="25" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="30" font-size="11" text-anchor="middle">Bước 1: Chọn ẩn, đặt điều kiện</text>
          <rect x="15" y="45" width="250" height="25" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="140" y="60" font-size="11" text-anchor="middle">Bước 2: Express các đại lượng theo ẩn</text>
          <rect x="15" y="75" width="250" height="25" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="140" y="90" font-size="11" text-anchor="middle">Bước 3: Lập phương trình</text>
          <rect x="15" y="105" width="250" height="25" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="140" y="120" font-size="11" text-anchor="middle">Bước 4-5: Giải và kiểm tra</text>
        </svg>
      </figure>
      <div class="definition">
        <p>Nếu \(\dfrac{a}{b} = \dfrac{c}{d} = \dfrac{e}{f} = k\) thì \(a = kb\), \(c = kd\), \(e = kf\), và \(\dfrac{a + c + e}{b + d + f} = k\) (dãy tỉ số bằng nhau).</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Dãy tỉ số bằng \(k\) thì tổng tử trên tổng mẫu vẫn bằng \(k\). Chia một tổng theo tỉ số: cộng các phần, lấy một phần rồi nhân.</p>
      </div>
<div class="warn">
        <p><strong>Cộng tử với tử, mẫu với mẫu.</strong></p>
        <ul>
          <li>\(\dfrac{a+c+e}{b+d+f}\) mới giữ được hệ số \(k\), khi các tỉ số bằng nhau. Không cộng tử với mẫu, không nhân hai tỉ số với nhau.</li>
          <li>\(\dfrac{1}{2} + \dfrac{2}{4}\) là tổng hai phân số, chuyện khác với tổng các tử trên tổng các mẫu.</li>
          <li>Chia theo tỉ số \(2 : 3 : 7\): cộng các phần trước \(2+3+7 = 12\), lấy một phần rồi nhân. Không chia từng số cho số phần của nó.</li>
          <li>Kiểm tra bằng dãy: \(\dfrac{2}{2} = \dfrac{3}{3} = \dfrac{7}{7} = 1\), tất cả cùng hệ số.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Chia 12 cái kẹo theo tỉ số \(2 : 3 : 7\): mỗi nhóm được bao nhiêu? <em>— \(2, 3, 7\). Cộng phần \(2+3+7 = 12\), mỗi phần 1 kẹo, nhân từng số phần.</em></p>
        <p>\(\dfrac{1}{2} + \dfrac{2}{4}\) có phải cách dùng dãy tỉ số bằng nhau không? <em>— Không. Dãy tỉ số dùng \(\dfrac{a+c+e}{b+d+f}\), cộng tử với tử, mẫu với mẫu — không cộng hai phân số rời.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Cùng một hệ số k. Tổng các tử trên tổng các mẫu vẫn bằng k.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "1/3 = 2/6 = 4/x. x bằng bao nhiêu?", answer: "12", accept: ["12"], hint: "1/3 = 4/x.", explain: "x = 12." },
      { type: "text", prompt: "2/5 = 4/10. (2+4)/(5+10) bằng phân số tối giản.", answer: "2/5", accept: ["2/5"], hint: "Tính chất dãy tỉ số.", explain: "6/15 = 2/5." },
      { type: "mc", prompt: "a/b = c/d = k thì a + c bằng", choices: ["k(b + d)", "k", "b + d", "ad"], correct: 0, hint: "a = kb, c = kd.", explain: "a + c = k(b + d)." },
      { type: "num", prompt: "Chia 20 cái theo 1 : 3. Phần nhỏ được bao nhiêu cái?", answer: 5, hint: "1+3=4 phần, mỗi phần 5.", explain: "5." },
      { type: "num", prompt: "2/3 = 4/6 = 6/x. x bằng bao nhiêu?", answer: 9, hint: "2/3 = 6/x.", explain: "9." },
      { type: "num", prompt: "Chia 18 cái theo 2 : 4. Phần lớn được bao nhiêu?", answer: 12, hint: "2+4=6, mỗi phần 3.", explain: "4·3=12." },
      { type: "num", prompt: "1/4 = 2/8 = 3/x. x bằng bao nhiêu?", answer: 12, hint: "1/4 = 3/x.", explain: "12." },
    ],
  },
  {
    id: "g7-b22",
    num: 22,
    chapter: 6,
    title: "Đại lượng tỉ lệ thuận",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "y tỉ lệ thuận với x khi y = kx, k không đổi. Tăng x thì y tăng cùng tỉ số.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Tiền mua kẹo tỉ lệ thuận với số gói nếu đơn giá không đổi. \(y = kx\). Đồ thị là đường thẳng qua gốc.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 3 cái bánh giá 45 nghìn. 5 cái cùng loại giá \(45 \cdot 5/3 = 75\) nghìn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 2 công nhân làm xong trong 6 ngày không có nghĩa 4 công nhân xong trong 12 ngày. Số người và số ngày thường tỉ lệ nghịch, bài sau.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> 5 kg gạo 80 nghìn. Hỏi 8 kg. \(k = 80/5 = 16\) nghìn một kg. 8 kg hết \(128\) nghìn. Hoặc \(\dfrac{8}{5} \cdot 80 = 128\). Hai cách một kết quả.</p>
      </div>
            <figure class="figure" data-animation="g7-b22-proportional">
        <svg viewBox="0 0 360 200" role="img" aria-label="Đồ thị tỉ lệ thuận y = 16x: giá theo số kg gạo">
          <line x1="60" y1="170" x2="345" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="170" x2="60" y2="20" stroke="#DDDDDD" stroke-width="2"/>
          <polyline points="60,170 110,144 160,119 210,93 260,68 310,42" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <line x1="310" y1="42" x2="310" y2="170" stroke="#FC6255" stroke-dasharray="4 3" stroke-width="1.5"/>
          <line x1="60" y1="42" x2="310" y2="42" stroke="#FC6255" stroke-dasharray="4 3" stroke-width="1.5"/>
          <circle cx="310" cy="42" r="3" fill="#FC6255"/>
          <text x="322" y="38" font-size="12" fill="#FC6255">(5; 80)</text>
          <text x="316" y="184" font-size="12" fill="#9A72AC">Số kg (x)</text>
          <text x="24" y="46" font-size="12" fill="#9A72AC">Giá (y)</text>
          <text x="200" y="118" font-size="12" fill="#58C4DD" text-anchor="middle" transform="rotate(-26 200 118)">y = 16x</text>
        </svg>
        <figcaption>Đồ thị tỉ lệ thuận là đường thẳng qua gốc. k = 80/5 = 16 nghìn/kg: gấp đôi số kg thì giá gấp đôi.</figcaption>
      </figure>
<div class="definition">
        <p>Đại lượng \(y\) <strong>tỉ lệ thuận</strong> với đại lượng \(x\) theo hệ số \(k \neq 0\) nếu \(y = kx\). Thương \(y/x\) không đổi; đồ thị là đường thẳng đi qua gốc toạ độ.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Tỉ lệ thuận: \(y=kx\), thương không đổi. Gấp \(x\) thì gấp \(y\). Đồ thị qua gốc.</p>
      </div>
<div class="warn">
        <p><strong>Thương không đổi mới thuận.</strong></p>
        <ul>
          <li>Tỉ lệ thuận nghĩa là thương \(y/x\) không đổi: \(y = kx\). Gấp \(x\) lên thì \(y\) gấp theo.</li>
          <li>2 công nhân làm xong trong 6 ngày không suy ra 4 công nhân xong trong 12 ngày — số người với số ngày thường tỉ lệ <em>nghịch</em>, bài sau.</li>
          <li>Đồ thị tỉ lệ thuận là đường thẳng qua gốc. Đường thẳng không qua gốc không phải tỉ lệ thuận.</li>
          <li>Tính \(k\) trước: 5 kg hết 80 nghìn thì \(k = 16\) nghìn/kg, rồi mới nhân số kg. Không nhân số kg vào giá của một kg đã sai.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>5 kg gạo giá 80 nghìn: 8 kg giá bao nhiêu? <em>— \(128\) nghìn. \(k = 80/5 = 16\) nghìn/kg, \(8 \cdot 16 = 128\).</em></p>
        <p>2 công nhân làm xong trong 6 ngày: 4 công nhân xong trong 12 ngày đúng không? <em>— Không. Số người với số ngày thường tỉ lệ nghịch, bài sau; thuận thì gấp người làm giảm ngày.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Tỉ lệ thuận: thương y/x không đổi. Gấp x thì gấp y.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "4 cây bút hết 20 nghìn. 7 cây cùng loại hết bao nhiêu nghìn?", answer: 35, hint: "20 · 7/4.", explain: "35 nghìn." },
      { type: "num", prompt: "y tỉ lệ thuận với x. Khi x = 2 thì y = 10. Khi x = 6, y bằng bao nhiêu?", answer: 30, hint: "k = 5, y = 5x.", explain: "30." },
      { type: "mc", prompt: "Đồ thị y = kx (k > 0) đi qua", choices: ["Gốc tọa độ", "Điểm (1; 0) thôi", "Không có điểm nào", "Chỉ trục Oy"], correct: 0, hint: "x = 0 thì y = 0.", explain: "Qua gốc." },
      { type: "num", prompt: "3 m vải hết 90 nghìn. 5 m hết bao nhiêu nghìn?", answer: 150, hint: "30 nghìn một mét.", explain: "150." },
      { type: "num", prompt: "y = 4x. Khi x = 7, y bằng bao nhiêu?", answer: 28, hint: "Thế vào.", explain: "28." },
      { type: "num", prompt: "2 kg hết 50 nghìn. 5 kg hết bao nhiêu nghìn?", answer: 125, hint: "25 nghìn/kg.", explain: "125." },
      { type: "num", prompt: "y = 7x. x = 3. y bằng bao nhiêu?", answer: 21, hint: "Thế.", explain: "21." },
    ],
  },
  {
    id: "g7-b23",
    num: 23,
    chapter: 6,
    title: "Đại lượng tỉ lệ nghịch",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "y tỉ lệ nghịch với x khi xy = k, k không đổi. Gấp x thì y giảm còn một nửa.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Cùng một quãng đường, vận tốc gấp đôi thì thời gian còn một nửa. \(xy = k\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 6 người làm xong trong 10 ngày, công việc không đổi. 5 người cần \(6 \cdot 10 / 5 = 12\) ngày.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không nhân cả hai. Tỉ lệ nghịch là tích không đổi, không phải thương.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> 4 máy in xong trong 9 giờ. Hỏi 6 máy. Tích \(4 \cdot 9 = 36\) “máy-giờ”. 6 máy cần \(36/6 = 6\) giờ. Gấp rưỡi số máy thì thời gian còn \(2/3\).</p>
      </div>
            <figure class="figure" data-animation="g7-b23-inverse">
        <svg viewBox="0 0 360 200" role="img" aria-label="Đồ thị tỉ lệ nghịch xy = 36: số máy in theo số giờ">
          <line x1="60" y1="170" x2="345" y2="170" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="60" y1="170" x2="60" y2="20" stroke="#DDDDDD" stroke-width="2"/>
          <polyline points="140,35 160,62 180,80 200,93 220,103 240,110 260,116 280,121 300,125" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <line x1="180" y1="80" x2="180" y2="170" stroke="#FC6255" stroke-dasharray="4 3" stroke-width="1.5"/>
          <line x1="60" y1="80" x2="180" y2="80" stroke="#FC6255" stroke-dasharray="4 3" stroke-width="1.5"/>
          <circle cx="180" cy="80" r="3" fill="#FC6255"/>
          <text x="192" y="76" font-size="12" fill="#FC6255">(6; 6)</text>
          <text x="316" y="184" font-size="12" fill="#9A72AC">Số máy (x)</text>
          <text x="24" y="40" font-size="12" fill="#9A72AC">Số giờ (y)</text>
          <text x="300" y="160" font-size="12" fill="#58C4DD" text-anchor="end">xy = 36</text>
        </svg>
        <figcaption>4 máy × 9 giờ = 36 máy-giờ. 6 máy cần 36/6 = 6 giờ: gấp rưỡi số máy thì thời gian còn 2/3.</figcaption>
      </figure>
<div class="definition">
        <p>Đại lượng \(y\) <strong>tỉ lệ nghịch</strong> với đại lượng \(x\) theo hệ số \(k \neq 0\) nếu \(xy = k\). Tích không đổi; gấp \(x\) lên thì \(y\) giảm còn một phần.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Tỉ lệ nghịch: \(xy=k\). Gấp \(x\) thì \(y\) còn một nửa. Số người và số ngày cùng một việc thường nghịch.</p>
      </div>
<div class="warn">
        <p><strong>Thuận hay nghịch, đừng nhầm.</strong></p>
        <ul>
          <li>Tỉ lệ nghịch là tích không đổi \(xy = k\), không phải thương. Gấp \(x\) lên thì \(y\) giảm xuống còn một phần.</li>
          <li>Không nhân cả hai đại lượng: 6 người làm xong trong 10 ngày, 5 người cần \(6 \cdot 10 / 5 = 12\) ngày, không phải \(5 \cdot 10\).</li>
          <li>Lập tích “máy-giờ” hay “người-ngày” trước: 4 máy × 9 giờ = 36, rồi chia cho số máy mới.</li>
          <li>Gấp rưỡi số máy thì thời gian còn \(2/3\): kiểm tra xem đã dùng đúng hướng nghịch chưa.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>6 người làm xong trong 10 ngày: 5 người cần bao nhiêu ngày? <em>— \(12\) ngày. Tích không đổi \(6 \cdot 10 = 60\) “người-ngày”, chia cho 5: \(60/5 = 12\).</em></p>
        <p>Tỉ lệ nghịch là thương không đổi hay tích không đổi? <em>— Tích không đổi \(xy = k\). Thuận mới là thương không đổi.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Thuận: thương không đổi. Nghịch: tích không đổi.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "8 vòi chảy đầy bể trong 6 giờ. 12 vòi cùng loại cần bao nhiêu giờ?", answer: 4, hint: "8 · 6 = 12 · t.", explain: "t = 4 giờ." },
      { type: "num", prompt: "xy = 24, x = 3. y bằng bao nhiêu?", answer: 8, hint: "Tích không đổi.", explain: "y = 8." },
      { type: "mc", prompt: "Tỉ lệ nghịch nghĩa là", choices: ["y/x không đổi", "xy không đổi", "y − x không đổi", "y + x không đổi"], correct: 1, hint: "Tích.", explain: "xy = k." },
      { type: "num", prompt: "10 người xong trong 6 ngày. 15 người cần bao nhiêu ngày?", answer: 4, hint: "10·6 = 15t.", explain: "4 ngày." },
      { type: "mc", prompt: "Vận tốc và thời gian cùng một quãng đường", choices: ["Tỉ lệ thuận","Tỉ lệ nghịch","Không liên quan","Luôn bằng nhau"], correct: 1, hint: "Nhanh hơn thì ít giờ hơn.", explain: "Tích ra quãng đường." },
      { type: "num", prompt: "6 người xong trong 8 ngày. 8 người cần bao nhiêu ngày?", answer: 6, hint: "6·8=8t.", explain: "6 ngày." },
      { type: "mc", prompt: "Cùng quãng đường, vận tốc gấp đôi thì thời gian", choices: ["Gấp đôi","Còn một nửa","Không đổi","Gấp bốn"], correct: 1, hint: "Nghịch.", explain: "Còn một nửa." },
    ],
  },
  {
    id: "g7-b24",
    num: 24,
    chapter: 7,
    title: "Biểu thức đại số",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Chữ thay số. Điều kiện là mẫu khác 0 và căn không âm.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Biểu thức đại số gồm số, chữ và phép tính. Chữ là số chưa biết. Thế số vào chữ thì ra giá trị, nếu phép tính có nghĩa.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(2x + 5\) khi \(x = 3\) bằng 11.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(\dfrac{1}{x - 2}\) không tính được khi \(x = 2\). \(\sqrt{x}\) không tính được khi \(x = -1\).</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Biểu thức \(\dfrac{x+1}{x-3}\). Điều kiện \(x \neq 3\). Khi \(x = 5\): \(\dfrac{6}{2} = 3\). Khi \(x = 3\): mẫu 0, gạch bỏ, không ghi “bằng vô cùng”.</p>
      </div>
            <figure class="figure" data-animation="g7-b24-ratio">
        <svg viewBox="0 0 280 140" role="img" aria-label="Tỉ lệ thức">
          <rect x="20" y="20" width="240" height="40" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="40" font-size="14" text-anchor="middle">a/b = c/d (b ≠ 0, d ≠ 0)</text>
          <path d="M50,80 L90,80 L90,100 L50,100 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="70" y="95" font-size="11" text-anchor="middle">2/3 = 4/6 (tỉ lệ thức)</text>
          <path d="M140,80 L180,80 L180,100 L140,100 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="160" y="95" font-size="11" text-anchor="middle">3/5 ≠ 4/7 (không là tỉ lệ thức)</text>
          <path d="M220,80 L260,80 L260,100 L220,100 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="240" y="95" font-size="11" text-anchor="middle">a×d = b×c (tích trung = tích ngoại)</text>
        </svg>
      </figure>
      <div class="definition">
        <p><strong>Biểu thức đại số</strong> gồm các số, chữ (biểu thị số chưa biết) và phép tính. Thế giá trị của chữ vào thì tính được giá trị của biểu thức, nếu phép tính có nghĩa.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Thế số sau khi ghi điều kiện. Mẫu \(\neq 0\), trong căn \(\geq 0\). Không ghi “bằng vô cùng” khi mẫu bằng 0.</p>
      </div>
<div class="warn">
        <p><strong>Ghi điều kiện trước khi thế.</strong></p>
        <ul>
          <li>\(\dfrac{1}{x-2}\) không tính được khi \(x = 2\). Mẫu bằng 0 thì gạch bỏ, không ghi “bằng vô cùng”.</li>
          <li>\(\sqrt{x}\) không tính được khi \(x = -1\). Trong căn phải \(\geq 0\).</li>
          <li>Biểu thức \(\dfrac{x+1}{x-3}\) chỉ có nghĩa khi \(x \neq 3\). Ghi điều kiện trước, rồi mới thế số.</li>
          <li>Thế sai thứ tự phép tính: \(\dfrac{x+1}{x-3}\) khi \(x = 5\) là \(\dfrac{6}{2} = 3\), không phải \(x+1\) chia \(x\) trừ 3.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(\dfrac{1}{x-2}\) khi \(x = 2\) tính được không? <em>— Không. Mẫu bằng 0, biểu thức không có nghĩa. Không ghi “bằng vô cùng”.</em></p>
        <p>\(\sqrt{x}\) khi \(x = -1\) tính được không? <em>— Không. Trong căn phải \(\geq 0\). Ghi điều kiện trước khi thế số.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Ghi điều kiện trước khi thế. Mẫu ≠ 0, trong căn ≥ 0.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "3x − 1 khi x = 4 bằng bao nhiêu?", answer: 11, hint: "12 − 1.", explain: "11." },
      { type: "mc", prompt: "1/(x − 5) không có nghĩa khi x bằng", choices: ["0", "1", "5", "−5"], correct: 2, hint: "Mẫu bằng 0.", explain: "x = 5." },
      { type: "num", prompt: "x² khi x = −3 bằng bao nhiêu?", answer: 9, hint: "(−3)(−3).", explain: "9." },
      { type: "num", prompt: "2x + 3 khi x = 0 bằng bao nhiêu?", answer: 3, hint: "Thế 0.", explain: "3." },
      { type: "mc", prompt: "√(x − 1) có nghĩa khi", choices: ["x > 0","x ≥ 1","x ≠ 1","x bất kì"], correct: 1, hint: "Trong căn ≥ 0.", explain: "x − 1 ≥ 0." },
      { type: "num", prompt: "5 − x khi x = 5 bằng bao nhiêu?", answer: 0, hint: "Thế.", explain: "0." },
      { type: "mc", prompt: "1/(2 − x) không có nghĩa khi x bằng", choices: ["0","1","2","−2"], correct: 2, hint: "Mẫu 0.", explain: "x=2." },
    ],
  },
  {
    id: "g7-b25",
    num: 25,
    chapter: 7,
    title: "Đa thức một biến",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Đa thức là tổng các hạng tử ax^n. Bậc là số mũ lớn nhất có hệ số khác 0.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>\(3x^2 - 5x + 1\) là đa thức bậc 2, một biến \(x\). Hạng tử \(3x^2\) bậc 2, \(-5x\) bậc 1, \(1\) bậc 0.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(7x^3\) bậc 3. \(4\) là đa thức bậc 0. \(x + 1/x\) không phải đa thức, vì có \(x\) ở mẫu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0 \cdot x^5 + x^2\) bậc 2, không phải 5. Hệ số 0 không tính.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Sắp \(4x - x^3 + 2x^2 - 7\) theo bậc giảm: \(-x^3 + 2x^2 + 4x - 7\). Bậc 3. Hệ số cao nhất \(-1\), không phải 4. Nhìn mũ, không nhìn số đứng đầu lúc chưa sắp.</p>
      </div>
            <figure class="figure" data-animation="g7-b25-properties">
        <svg viewBox="0 0 280 140" role="img" aria-label="Tính chất của tỉ lệ thức">
          <rect x="15" y="15" width="250" height="30" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="35" font-size="12" text-anchor="middle">Tính chất 1: ad = bc</text>
          <rect x="15" y="55" width="250" height="30" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="140" y="75" font-size="12" text-anchor="middle">Tính chất 2: Hoán vị các tỉ số</text>
          <rect x="15" y="95" width="250" height="30" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="140" y="115" font-size="12" text-anchor="middle">Tính chất 3: Dãy tỉ lệ thức bằng nhau</text>
        </svg>
      </figure>
      <div class="definition">
        <p><strong>Đa thức một biến</strong> là tổng các đơn thức cùng một biến, mỗi hạng tử có bậc là số mũ của biến. <strong>Bậc của đa thức</strong> là bậc của hạng tử có bậc cao nhất; đa thức bậc 0 là số khác 0.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Sắp theo bậc giảm. Bậc là mũ lớn nhất có hệ số khác 0. \(1/x\) không phải đa thức.</p>
      </div>
<div class="warn">
        <p><strong>Bậc là mũ lớn nhất còn sống.</strong></p>
        <ul>
          <li>\(0 \cdot x^5 + x^2\) bậc 2, không phải 5: hạng tử có hệ số 0 không tính.</li>
          <li>\(x + \dfrac{1}{x}\) không phải đa thức, vì có \(x\) ở mẫu. Đa thức không chia chữ, không căn chữ.</li>
          <li>Sắp theo bậc giảm trước: \(4x - x^3 + 2x^2 - 7\) thành \(-x^3 + 2x^2 + 4x - 7\). Hệ số cao nhất là \(-1\), không phải \(4\). Nhìn mũ, không nhìn số đứng đầu khi chưa sắp.</li>
          <li>\(4\) là đa thức bậc 0, không phải “không có bậc”. Một mình số vẫn là đa thức.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(0 \cdot x^5 + x^2\) bậc bao nhiêu? <em>— Bậc 2. Hạng tử có hệ số 0 không tính, mũ lớn nhất còn sống là 2.</em></p>
        <p>\(x + \dfrac{1}{x}\) có phải đa thức không? <em>— Không. Có \(x\) ở mẫu; đa thức không chia chữ.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Đa thức không chia chữ, không căn chữ. Bậc = mũ lớn nhất còn sống.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Bậc của 2x^4 − x + 9 là bao nhiêu?", answer: 4, hint: "Mũ lớn nhất.", explain: "4." },
      { type: "mc", prompt: "Biểu thức nào là đa thức một biến?", choices: ["x + 1/x", "√x + 1", "x² − 3x + 2", "2^x"], correct: 2, hint: "Chỉ cộng các luỹ thừa tự nhiên của x.", explain: "x² − 3x + 2." },
      { type: "num", prompt: "Hệ số của x trong 5x² − 7x + 1 bằng bao nhiêu? Viết kèm dấu.", answer: -7, hint: "Hạng tử bậc 1.", explain: "−7." },
      { type: "num", prompt: "Bậc của 9x là bao nhiêu?", answer: 1, hint: "x = x^1.", explain: "1." },
      { type: "mc", prompt: "x^3 + 1/x có là đa thức không?", choices: ["Có, bậc 3","Không, vì có 1/x","Có, bậc −1","Chỉ khi x > 0"], correct: 1, hint: "Mẫu chứa chữ.", explain: "Không phải đa thức." },
      { type: "num", prompt: "Bậc của 6 là bao nhiêu?", answer: 0, hint: "Hằng số.", explain: "0." },
      { type: "mc", prompt: "√x + 1 có là đa thức không?", choices: ["Có","Không","Chỉ khi x≥0","Bậc 1/2"], correct: 1, hint: "Căn chữ.", explain: "Không." },
    ],
  },
  {
    id: "g7-b26",
    num: 26,
    chapter: 7,
    title: "Cộng và trừ đa thức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Cộng trừ hạng tử đồng dạng. x² chỉ cộng với x², không cộng với x.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
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
            <div class="example">
        <p><strong>Làm chậm.</strong> \((2x^2 - x + 3) - (x^2 - 4x + 1)\). Đổi dấu ngoặc sau: \(2x^2 - x + 3 - x^2 + 4x - 1 = x^2 + 3x + 2\). Từng cột: \(x^2\), rồi \(x\), rồi số.</p>
      </div>
            <figure class="figure" data-animation="g7-b26-proportional">
        <svg viewBox="0 0 280 140" role="img" aria-label="Đại lượng tỉ lệ thuận">
          <rect x="15" y="15" width="250" height="30" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="35" font-size="12" text-anchor="middle">y = kx (k là hệ số tỉ lệ)</text>
          <path d="M45,60 L95,60 L95,80 L45,80 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="70" y="75" font-size="11" text-anchor="middle">Ví dụ: y = 2x → k = 2</text>
          <path d="M145,60 L195,60 L195,80 L145,80 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="170" y="75" font-size="11" text-anchor="middle">x1/y1 = x2/y2 = k</text>
          <path d="M215,60 L265,60 L265,80 L215,80 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="240" y="75" font-size="11" text-anchor="middle">Tính chất: Tỉ số hai giá trị bằng tỉ số hai giá trị tương ứng</text>
        </svg>
      </figure>
      <div class="definition">
        <p>Hai đơn thức <strong>đồng dạng</strong> nếu cùng biến và cùng số mũ. Chỉ cộng, trừ được các đơn thức đồng dạng: cộng, trừ hệ số và giữ nguyên phần biến.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Cộng trừ hạng tử đồng dạng. Trừ đa thức: đổi dấu cả ngoặc rồi cộng. \(x^2\) không cộng với \(x\).</p>
      </div>
<div class="warn">
        <p><strong>Trừ đa thức: đổi dấu cả ngoặc.</strong></p>
        <ul>
          <li>\((3x - 5) - (2x - 1) = 3x - 5 - 2x + 1 = x - 4\). Không để dấu \(-1\) thành \(-1\) mà quên đổi: phải \(+1\).</li>
          <li>\(x^2\) không cộng với \(x\): chỉ gộp hạng tử đồng dạng (cùng biến, cùng mũ). \(3x^2 + 3x\) không thành \(6x^2\).</li>
          <li>Trừ là cộng đa thức đối: \((x^2+4x) - (x^2 - x + 2) = x^2 + 4x - x^2 + x - 2 = 5x - 2\).</li>
          <li>Xếp theo cột (bậc \(x^2\), rồi \(x\), rồi số) để không bỏ sót hạng tử.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tính \((3x - 5) - (2x - 1)\): kết quả là gì? <em>— \(x - 4\). Đổi dấu cả ngoặc: \(3x - 5 - 2x + 1 = x - 4\), không phải \(3x - 5 - 2x - 1\).</em></p>
        <p>\(3x^2 + 3x\) gộp được thành \(6x^2\) không? <em>— Không. Không đồng dạng (khác mũ), chỉ gộp cùng biến và cùng mũ.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Trừ đa thức = cộng đa thức đối. Đổi dấu từng hạng tử trong ngoặc.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "(2x + 1) + (3x − 4). Viết đa thức gọn, dạng ax+b không cách.", answer: "5x-3", accept: ["5x-3", "5x − 3"], hint: "Cộng đồng dạng.", explain: "5x − 3." },
      { type: "text", prompt: "(5x − 2) − (x + 3). Viết ax+b không cách.", answer: "4x-5", accept: ["4x-5", "4x − 5"], hint: "Đổi dấu ngoặc sau.", explain: "5x − 2 − x − 3 = 4x − 5." },
      { type: "mc", prompt: "x² + x bằng", choices: ["x³", "2x²", "2x", "Không gộp được thành một hạng tử"], correct: 3, hint: "Khác mũ.", explain: "Không đồng dạng." },
      { type: "text", prompt: "(x − 1) + (x − 1). Viết gọn ax+b không cách.", answer: "2x-2", accept: ["2x-2","2x − 2"], hint: "2(x − 1).", explain: "2x − 2." },
      { type: "num", prompt: "Hệ số của x trong (3x+1)−(x−4) bằng bao nhiêu?", answer: 2, hint: "3x − x.", explain: "2x + 5, hệ số 2." },
      { type: "text", prompt: "(4x − 1) + (x + 1). Viết ax+b không cách.", answer: "5x", accept: ["5x","5x+0"], hint: "5x + 0.", explain: "5x." },
      { type: "num", prompt: "Hệ số tự do của (x+3)−(x−5) bằng bao nhiêu?", answer: 8, hint: "3 − (−5).", explain: "8. Hạng x triệt tiêu." },
    ],
  },
  {
    id: "g7-b27",
    num: 27,
    chapter: 7,
    title: "Nhân đa thức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Nhân từng hạng tử. (a+b)(c+d) = ac + ad + bc + bd.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
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
            <div class="example">
        <p><strong>Làm chậm.</strong> \((2x - 1)(x + 4) = 2x \cdot x + 2x \cdot 4 + (-1) \cdot x + (-1) \cdot 4 = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4\). Bốn tích, rồi gộp. Thiếu một tích là sai hệ số giữa.</p>
      </div>
            <figure class="figure" data-animation="g7-b27-inverse">
        <svg viewBox="0 0 280 140" role="img" aria-label="Đại lượng tỉ lệ nghịch">
          <rect x="15" y="15" width="250" height="30" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="35" font-size="12" text-anchor="middle">y = k/x hoặc xy = k (k ≠ 0)</text>
          <path d="M45,60 L95,60 L95,80 L45,80 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="70" y="75" font-size="11" text-anchor="middle">Ví dụ: xy = 12 → y = 12/x</text>
          <path d="M145,60 L195,60 L195,80 L145,80 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="170" y="75" font-size="11" text-anchor="middle">x1×y1 = x2×y2 = k</text>
          <path d="M215,60 L265,60 L265,80 L215,80 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="240" y="75" font-size="11" text-anchor="middle">Tính chất: Tỉ số hai giá trị này bằng nghịch đảo tỉ số hai giá trị tương ứng</text>
        </svg>
      </figure>
      <div class="definition">
        <p>Nhân hai đơn thức: nhân hệ số với nhau và nhân phần biến theo luỹ thừa (\(x^m \cdot x^n = x^{m+n}\)). Nhân đơn thức với đa thức: phân phối; nhân hai đa thức: nhân từng hạng tử rồi cộng.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Phân phối từng hạng. \((a+b)^2=a^2+2ab+b^2\), đừng quên \(2ab\). Nhân lại để kiểm tra.</p>
      </div>
<div class="warn">
        <p><strong>Đừng quên hạng tử giữa.</strong></p>
        <ul>
          <li>\((x+2)^2 = x^2 + 4x + 4\), không phải \(x^2 + 4\): thiếu \(2ab = 4x\) là sai.</li>
          <li>Nhân hai nhị thức là bốn tích: \((2x-1)(x+4)\) phải có \(2x \cdot x\), \(2x \cdot 4\), \((-1) \cdot x\), \((-1) \cdot 4\). Thiếu một tích là sai hệ số giữa.</li>
          <li>Nhân cùng cơ số thì cộng mũ: \(x^2 \cdot x^3 = x^5\), không nhân mũ với nhau.</li>
          <li>Nhân lại để kiểm tra: \((x+3)(x+1)\) ra \(x^2 + 4x + 3\), thử lại bằng cách khai triển lần hai.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\((x+2)^2\) bằng \(x^2 + 4\) hay \(x^2 + 4x + 4\)? <em>— \(x^2 + 4x + 4\). Thiếu hạng tử giữa \(2ab = 4x\) là sai.</em></p>
        <p>\((2x-1)(x+4)\) phải có mấy tích trước khi gộp? <em>— Bốn tích: \(2x \cdot x\), \(2x \cdot 4\), \((-1) \cdot x\), \((-1) \cdot 4\). Thiếu một tích là sai hệ số giữa.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Cộng mũ khi nhân cùng cơ số. Bình phương tổng có hạng 2ab.</p></div>
    `,
    
      { type: "mc", prompt: "Bài tập nâng cao", choices: ["A", "B", "C", "D"], correct: "A" },
exercises: [
      { type: "text", prompt: "2x(x − 5). Viết đa thức gọn, không cách.", answer: "2x^2-10x", accept: ["2x^2-10x", "2x²-10x"], hint: "Phân phối.", explain: "2x² − 10x." },
      { type: "num", prompt: "Hệ số của x trong (x+2)(x+3) bằng bao nhiêu?", answer: 5, hint: "2x + 3x.", explain: "x² + 5x + 6." },
      { type: "mc", prompt: "(x+1)² bằng", choices: ["x² + 1", "x² + 2x + 1", "x² + x + 1", "2x + 1"], correct: 1, hint: "(a+b)² = a² + 2ab + b².", explain: "x² + 2x + 1." },
      { type: "num", prompt: "Hạng tử tự do của (x+5)(x−2) bằng bao nhiêu?", answer: -10, hint: "5 · (−2).", explain: "−10." },
      { type: "text", prompt: "x(x + 1). Viết đa thức, không cách.", answer: "x^2+x", accept: ["x^2+x","x²+x"], hint: "Phân phối.", explain: "x² + x." },
    ],
  },
  {
    id: "g7-b28",
    num: 28,
    chapter: 7,
    title: "Chia đa thức",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Chia đơn thức: trừ mũ. Chia đa thức: chia bậc cao, nhân, trừ, lặp lại.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
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
            <div class="example">
        <p><strong>Làm chậm.</strong> Chia \(x^2 + 7x + 10\) cho \(x + 2\). \(x^2 : x = x\). \(x(x+2) = x^2 + 2x\). Trừ: \(5x + 10\). \(5x : x = 5\). \(5(x+2) = 5x + 10\). Dư 0. Thương \(x + 5\). Nhân lại: \((x+2)(x+5) = x^2 + 7x + 10\).</p>
      </div>
            <figure class="figure" data-animation="g7-b28-function">
        <svg viewBox="0 0 280 140" role="img" aria-label="Hàm số">
          <rect x="15" y="15" width="250" height="30" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="140" y="35" font-size="12" text-anchor="middle">y = f(x): Mỗi x có đúng một y</text>
          <path d="M50,60 L90,60 L90,80 L50,80 Z" fill="none" stroke="#58C4DD" stroke-width="2"/>
          <text x="70" y="75" font-size="11" text-anchor="middle">Ví dụ: y = 2x + 3</text>
          <path d="M140,60 L180,60 L180,80 L140,80 Z" fill="none" stroke="#FC6255" stroke-width="2"/>
          <text x="160" y="75" font-size="11" text-anchor="middle">Ví dụ: y = x²</text>
          <path d="M220,60 L260,60 L260,80 L220,80 Z" fill="none" stroke="#9A72AC" stroke-width="2"/>
          <text x="240" y="75" font-size="11" text-anchor="middle">Ví dụ: y = 5 (hàm hằng)</text>
        </svg>
      </figure>
      <div class="definition">
        <p>Chia đơn thức cho đơn thức (khi phần biến của số chia là ước của số bị chia): chia hệ số và chia phần biến (\(x^m : x^n = x^{m-n}\) khi \(x \neq 0\)). Chia đa thức cho đơn thức: chia từng hạng tử.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Chia đơn thức: trừ mũ. Chia đa thức: chia bậc cao, nhân, trừ, lặp. Dư 0 thì chia hết; nhân ngược để kiểm.</p>
      </div>
<div class="warn">
        <p><strong>Chia có thứ tự, nhân ngược để kiểm.</strong></p>
        <ul>
          <li>\((x^2 + x) : x = x + 1\) được vì cả hai hạng chia hết cho \(x\). Nhưng \((x^2 + 1) : x\) không còn là đa thức — đừng chia từng hạng lung tung khi không chia hết.</li>
          <li>Chia đơn thức: trừ mũ, không chia mũ: \(x^5 : x^2 = x^3\), và chỉ khi \(x \neq 0\).</li>
          <li>Chia đa thức: chia hạng bậc cao nhất, nhân, trừ, kéo xuống — làm từng bước như chia số. Nhảy cóc sẽ sai hệ số giữa.</li>
          <li>Luôn nhân ngược để kiểm: \((x+2)(x+3) = x^2 + 5x + 6\). Dư khác 0 thì chưa chia hết.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(x^5 : x^2\) bằng bao nhiêu, khi \(x \neq 0\)? <em>— \(x^3\). Chia đơn thức thì trừ mũ, không chia mũ: \(5 - 2 = 3\).</em></p>
        <p>\((x^2 + 1) : x\) có còn là đa thức không? <em>— Không. Không chia hết cho \(x\) cả hai hạng; \((x^2 + x) : x = x + 1\) mới được.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Nhân lại để kiểm tra. Dư khác 0 thì chưa chia hết.</p></div>
    `,
    exercises: [
      { type: "text", prompt: "(8x^3) : (2x). Viết đơn thức, không cách.", answer: "4x^2", accept: ["4x^2", "4x²"], hint: "8/2 và 3−1.", explain: "4x²." },
      { type: "num", prompt: "(x² + 5x + 6) : (x + 2) = x + a. a bằng bao nhiêu?", answer: 3, hint: "Nhân ngược (x+2)(x+3).", explain: "a = 3." },
      { type: "mc", prompt: "Chia đa thức x² + 1 cho x được", choices: ["Đa thức x", "Đa thức x + 1/x, không còn đa thức", "1", "x²"], correct: 1, hint: "Dư 1, thương có 1/x.", explain: "Không chia hết trong vành đa thức." },
      { type: "num", prompt: "(6x^2) : (3x) = ax. a bằng bao nhiêu?", answer: 2, hint: "6/3 và 2−1.", explain: "2x." },
      { type: "mc", prompt: "Thương (x² − 9) : (x − 3) là", choices: ["x − 3","x + 3","x² − 3","9"], correct: 1, hint: "Hiệu bình phương.", explain: "(x−3)(x+3) : (x−3) = x+3, x ≠ 3." },
      { type: "text", prompt: "(10x^4) : (5x). Viết đơn thức không cách.", answer: "2x^3", accept: ["2x^3","2x³"], hint: "10/5 và 4−1.", explain: "2x³." },
      { type: "num", prompt: "(x² − 5x + 6) : (x − 2) = x + a. a bằng bao nhiêu?", answer: -3, hint: "(x−2)(x−3).", explain: "a = −3." },
    ],
  },
  {
    id: "g7-b29",
    num: 29,
    chapter: 8,
    title: "Làm quen với biến cố",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Phép thử có nhiều kết quả. Biến cố là tập một số kết quả ấy.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Gieo xúc xắc: sáu mặt có thể xảy ra. “Ra số chẵn” gồm 2, 4, 6. Đó là một biến cố.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tung đồng xu. Biến cố “sấp” có một kết quả. Biến cố “sấp hoặc ngửa” là biến cố chắc chắn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> “Ra mặt 7” trên xúc xắc sáu mặt là biến cố không thể. Không nhầm với xác suất nhỏ nhưng vẫn có thể.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Rút một thẻ trong {1,2,3,4,5}. Biến cố A: “số nguyên tố”. Thuận lợi: 2, 3, 5. 1 không phải số nguyên tố. 4 không. Viết rõ tập kết quả trước khi đếm.</p>
      </div>
            <figure class="figure" data-animation="g7-b29-random-events">
        <svg viewBox="0 0 360 200" role="img" aria-label="Xúc xắc sáu mặt, biến cố số chẵn gồm 2, 4, 6">
          <rect x="80" y="30" width="200" height="140" rx="10" fill="#DDDDDD" fill-opacity="0.25" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="180" y1="30" x2="180" y2="170" stroke="#DDDDDD" stroke-width="1"/>
          <line x1="80" y1="76" x2="280" y2="76" stroke="#DDDDDD" stroke-width="1"/>
          <line x1="80" y1="122" x2="280" y2="122" stroke="#DDDDDD" stroke-width="1"/>
          <circle cx="130" cy="53" r="16" fill="#DDDDDD" fill-opacity="0.4"/>
          <circle cx="230" cy="53" r="16" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <circle cx="130" cy="99" r="16" fill="#DDDDDD" fill-opacity="0.4"/>
          <circle cx="230" cy="99" r="16" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <circle cx="130" cy="145" r="16" fill="#DDDDDD" fill-opacity="0.4"/>
          <circle cx="230" cy="145" r="16" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <text x="130" y="57" font-size="12" text-anchor="middle">1</text>
          <text x="230" y="57" font-size="12" text-anchor="middle">2</text>
          <text x="130" y="103" font-size="12" text-anchor="middle">3</text>
          <text x="230" y="103" font-size="12" text-anchor="middle">4</text>
          <text x="130" y="149" font-size="12" text-anchor="middle">5</text>
          <text x="230" y="149" font-size="12" text-anchor="middle">6</text>
          <text x="180" y="192" font-size="12" fill="#FC6255" text-anchor="middle">Biến cố A: số chẵn = {2, 4, 6}</text>
        </svg>
        <figcaption>Ra mặt 7 là biến cố không thể: không có kết quả nào thuận lợi. Số chẵn gồm 2, 4, 6.</figcaption>
      </figure>
<div class="definition">
        <p><strong>Biến cố</strong> là một sự kiện có thể xảy ra hoặc không trong một phép thử. Biến cố <strong>chắc chắn</strong> luôn xảy ra; biến cố <strong>không thể</strong> không bao giờ xảy ra; còn lại là biến cố có thể.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Viết \(\Omega\). Biến cố là một tập con. Chắc chắn = cả \(\Omega\). Không thể = rỗng.</p>
      </div>
<div class="warn">
        <p><strong>Chắc chắn, không thể, có thể.</strong></p>
        <ul>
          <li>“Ra mặt 7” trên xúc xắc sáu mặt là biến cố <em>không thể</em>, không phải “xác suất nhỏ vẫn có thể”. Không thể là không có kết quả nào thuận lợi.</li>
          <li>Biến cố chắc chắn là cả tập \(\Omega\), không phải “xác suất lớn”. Biến cố không thể là tập rỗng.</li>
          <li>Viết rõ tập kết quả trước khi đếm: “số nguyên tố” trong {1,2,3,4,5} là {2,3,5}; \(1\) không phải số nguyên tố, \(4\) không.</li>
          <li>Biến cố “sấp hoặc ngửa” gồm mọi kết quả — chắc chắn. Đừng gọi nó là “có thể”.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>“Ra mặt 7” trên xúc xắc sáu mặt là biến cố gì? <em>— Không thể. Không có kết quả nào thuận lợi, không phải “xác suất nhỏ vẫn có thể”.</em></p>
        <p>Rút một thẻ trong \(\{1,2,3,4,5\}\), biến cố “số nguyên tố” có mấy kết quả? <em>— Ba: \(\{2,3,5\}\). \(1\) và \(4\) không phải số nguyên tố.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Chắc chắn: luôn xảy ra. Không thể: không bao giờ. Còn lại: có thể.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Xúc xắc sáu mặt. Biến cố “số chẵn” có bao nhiêu kết quả thuận lợi?", answer: 3, hint: "2, 4, 6.", explain: "Ba kết quả." },
      { type: "mc", prompt: "Tung đồng xu. Biến cố “sấp hoặc ngửa” là", choices: ["Không thể", "Chắc chắn", "Chỉ xảy ra một lần", "Không phải biến cố"], correct: 1, hint: "Luôn ra một trong hai mặt.", explain: "Chắc chắn." },
      { type: "mc", prompt: "Biến cố “ra mặt 7” trên xúc xắc 1–6 là", choices: ["Chắc chắn", "Không thể", "Có xác suất 1/6", "Có xác suất 1/7"], correct: 1, hint: "Không có mặt 7.", explain: "Không thể." },
      { type: "num", prompt: "Xúc xắc. Biến cố “lớn hơn 4” có bao nhiêu kết quả?", answer: 2, hint: "5 và 6.", explain: "Hai kết quả." },
      { type: "mc", prompt: "Biến cố chắc chắn có", choices: ["Không kết quả nào","Mọi kết quả của phép thử","Đúng một kết quả","Xác suất 0"], correct: 1, hint: "Luôn xảy ra.", explain: "Gồm cả Ω." },
      { type: "num", prompt: "Hộp 4 thẻ. Rút một thẻ. n(Ω) bằng bao nhiêu?", answer: 4, hint: "Bốn thẻ.", explain: "4." },
      { type: "mc", prompt: "Biến cố không thể", choices: ["Luôn xảy ra","Không xảy ra","P = 1","Có một kết quả"], correct: 1, hint: "Tập rỗng.", explain: "Không xảy ra." },
    ],
  },
  {
    id: "g7-b30",
    num: 30,
    chapter: 8,
    title: "Xác suất của biến cố",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "P = số kết quả thuận lợi chia cho số kết quả đồng khả năng.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Khi mỗi kết quả một cơ hội như nhau, \(P(A) = \dfrac{n(A)}{n(\Omega)}\). Xác suất từ 0 đến 1.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Xúc xắc cân đối. P(số chẵn) = 3/6 = 1/2.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hộp 3 bi đỏ, 1 bi xanh. P(đỏ) = 3/4, không phải 1/2 chỉ vì có hai màu. Đếm viên, không đếm màu.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Hai đồng xu, có thứ tự. \(\Omega = \{SS, SN, NS, NN\}\), bốn kết quả đồng khả năng. “Ít nhất một ngửa”: SN, NS, NN — ba kết quả, \(P = 3/4\). Không phải 1/2.</p>
      </div>
            <figure class="figure" data-animation="g7-b30-probability">
        <svg viewBox="0 0 360 200" role="img" aria-label="Gieo hai đồng xu có thứ tự, Ω = {SS, SN, NS, NN}, ít nhất một ngửa">
          <rect x="90" y="30" width="180" height="130" fill="#DDDDDD" fill-opacity="0.25" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="180" y1="30" x2="180" y2="160" stroke="#DDDDDD" stroke-width="1"/>
          <line x1="90" y1="95" x2="270" y2="95" stroke="#DDDDDD" stroke-width="1"/>
          <rect x="90" y="30" width="90" height="65" fill="#DDDDDD" fill-opacity="0.4"/>
          <rect x="180" y="30" width="90" height="65" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <rect x="90" y="95" width="90" height="65" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <rect x="180" y="95" width="90" height="65" fill="#FC6255" fill-opacity="0.35" stroke="#FC6255" stroke-width="1.5"/>
          <text x="135" y="66" font-size="13" text-anchor="middle">S S</text>
          <text x="225" y="66" font-size="13" text-anchor="middle">S N</text>
          <text x="135" y="131" font-size="13" text-anchor="middle">N S</text>
          <text x="225" y="131" font-size="13" text-anchor="middle">N N</text>
          <text x="180" y="184" font-size="12" fill="#FC6255" text-anchor="middle">Ít nhất một ngửa: SN, NS, NN → P = 3/4</text>
        </svg>
        <figcaption>Ω = {SS, SN, NS, NN}, bốn kết quả đồng khả năng. “Ít nhất một ngửa” là ba kết quả, P = 3/4, không phải 1/2.</figcaption>
      </figure>
<div class="definition">
        <p>Khi các kết quả đồng khả năng, xác suất của biến cố \(A\) là</p>
        \[
          P(A) = \dfrac{n(A)}{n(\Omega)},
        \]
        <p>với \(n(A)\) số kết quả thuận lợi. Luôn có \(0 \leq P(A) \leq 1\): biến cố không thể có \(P = 0\), biến cố chắc chắn có \(P = 1\).</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Đồng khả năng thì chia. Liệt kê rồi mới đếm. \(0\leq P\leq 1\). Không đếm trùng khi “hoặc”.</p>
      </div>
<div class="warn">
        <p><strong>Liệt kê Ω rồi mới đếm.</strong></p>
        <ul>
          <li>Hộp 3 bi đỏ, 1 bi xanh: \(P(\text{đỏ}) = 3/4\), không phải \(1/2\) chỉ vì có hai màu. Đếm viên, không đếm màu.</li>
          <li>Hai đồng xu có thứ tự: \(\Omega = \{SS, SN, NS, NN\}\), bốn kết quả đồng khả năng. “Ít nhất một ngửa” là ba kết quả, \(P = 3/4\), không phải \(1/2\).</li>
          <li>Chỉ chia khi các kết quả đồng khả năng. Nếu không đồng khả năng thì đừng dùng công thức chia.</li>
          <li>Khi đếm “hoặc”, đừng đếm trùng một kết quả hai lần. \(0 \leq P \leq 1\): ra ngoài khoảng ấy là đếm sai.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hộp 3 bi đỏ, 1 bi xanh: \(P(\text{đỏ})\) bằng \(1/2\) hay \(3/4\)? <em>— \(3/4\). Đếm viên, không đếm màu: 3 trong 4 viên đỏ.</em></p>
        <p>Gieo hai đồng xu có thứ tự: \(P(\text{ít nhất một ngửa})\) bằng bao nhiêu? <em>— \(3/4\). \(\Omega = \{SS, SN, NS, NN\}\), thuận lợi là SN, NS, NN — ba trong bốn.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Liệt kê Ω trước. Chỉ chia khi đồng khả năng. P = 0 không thể, P = 1 chắc chắn.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Xúc xắc. P(ra 5) = 1/k. k bằng bao nhiêu?", answer: 6, hint: "Một mặt trên sáu.", explain: "1/6." },
      { type: "num", prompt: "Hộp 5 thẻ ghi 1 đến 5. P(số lẻ) = a/5. a bằng bao nhiêu?", answer: 3, hint: "1, 3, 5.", explain: "3/5." },
      { type: "mc", prompt: "Xác suất không thể lớn hơn", choices: ["0", "1", "1/2", "100"], correct: 1, hint: "Tối đa là chắc chắn.", explain: "P ≤ 1." },
      { type: "num", prompt: "8 thẻ 1–8. P(chia hết cho 4) = 1/k. k bằng bao nhiêu?", answer: 4, hint: "4 và 8, hai thẻ trên tám.", explain: "2/8 = 1/4." },
      { type: "mc", prompt: "P(A) = 0 nghĩa là", choices: ["A chắc chắn","A không thể","A có một kết quả","A là số chẵn"], correct: 1, hint: "Không kết quả thuận lợi.", explain: "Không thể." },
      { type: "num", prompt: "Đồng xu cân đối. P(ngửa) = 1/k. k bằng bao nhiêu?", answer: 2, hint: "Hai mặt.", explain: "1/2." },
      { type: "num", prompt: "Xúc xắc. P(số nguyên tố) = a/6. a bằng bao nhiêu?", answer: 3, hint: "2, 3, 5.", explain: "3." },
    ],
  },
  {
    id: "g7-b31",
    num: 31,
    chapter: 9,
    title: "Góc và cạnh đối diện trong tam giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Góc lớn hơn thì cạnh đối diện dài hơn. Hai góc bằng nhau thì hai cạnh đối diện bằng nhau.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Trong một tam giác, cạnh lớn kề góc lớn. Đối diện góc vuông là cạnh dài nhất.</p>
      <figure class="figure">
        <svg viewBox="0 0 280 170" role="img" aria-label="Góc lớn đối diện cạnh lớn">
          <polygon points="40,140 250,140 90,35" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <text x="28" y="156" font-size="13">A</text>
          <text x="254" y="156" font-size="13">B</text>
          <text x="80" y="28" font-size="13">C</text>
          <text x="148" y="158" font-size="13" fill="#FC6255">AB lớn nhất</text>
          <text x="150" y="90" font-size="13" fill="#58C4DD">góc C lớn nhất</text>
        </svg>
        <figcaption>Cạnh lớn nhất đối diện góc lớn nhất. So trong cùng một tam giác.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Góc \(A = 80^\circ\), góc \(B = 40^\circ\), góc \(C = 60^\circ\). Cạnh lớn nhất là \(BC\) (đối diện A). Cạnh nhỏ nhất là \(AC\) (đối diện B).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không so cạnh của hai tam giác khác nhau chỉ bằng cách so một góc. Định lí nói trong cùng một tam giác.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Tam giác cạnh 6, 7, 8. Cạnh 8 lớn nhất nên góc đối diện cạnh 8 lớn nhất. Cạnh 6 nhỏ nhất nên góc đối diện cạnh 6 nhỏ nhất. Không cần đo góc vẫn so được.</p>
      </div>
      <div class="definition">
        <p>Trong một tam giác, cạnh lớn hơn đối diện góc lớn hơn và ngược lại. Góc vuông đối diện cạnh huyền, là cạnh dài nhất.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Trong một tam giác: góc lớn hơn \(\Leftrightarrow\) cạnh đối diện dài hơn. Vuông thì cạnh huyền dài nhất.</p>
      </div>
<div class="warn">
        <p><strong>So trong cùng một tam giác.</strong></p>
        <ul>
          <li>Không so cạnh của hai tam giác khác nhau chỉ bằng cách so một góc. Định lí chỉ nói trong cùng một tam giác.</li>
          <li>Góc lớn hơn thì cạnh đối diện dài hơn, và ngược lại. Tam giác cạnh 6, 7, 8: cạnh 8 đối diện góc lớn nhất.</li>
          <li>Đối diện góc vuông là cạnh huyền — cạnh dài nhất. Đừng nhầm cạnh đối diện góc nhọn là dài nhất.</li>
          <li>Cân khi hai góc đáy bằng nhau; khi ấy hai cạnh đối diện hai góc ấy bằng nhau.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tam giác có góc \(A = 80^\circ\), \(B = 40^\circ\), \(C = 60^\circ\): cạnh nào lớn nhất? <em>— \(BC\), đối diện góc \(A\) lớn nhất.</em></p>
        <p>Tam giác cạnh 6, 7, 8: góc đối diện cạnh nào lớn nhất? <em>— Cạnh 8. Góc lớn hơn đối diện cạnh dài hơn, trong cùng một tam giác.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Góc lớn — cạnh đối lớn. Cân khi hai góc đáy bằng nhau.</p></div>
      <figure class="figure" data-animation="g7-b31-triangle-relationships">
        <svg viewBox="0 0 360 210" role="img" aria-label="Góc và cạnh đối diện trong tam giác">
          <polygon points="50,170 250,170 150,50" fill="none" stroke="#83C167" stroke-width="2"/>
          <circle cx="50" cy="170" r="2.5" fill="#58C4DD"/>
          <circle cx="250" cy="170" r="2.5" fill="#58C4DD"/>
          <circle cx="150" cy="50" r="2.5" fill="#58C4DD"/>
          <text x="40" y="188" font-size="12" fill="#58C4DD">A</text>
          <text x="262" y="188" font-size="12" fill="#58C4DD">B</text>
          <text x="162" y="38" font-size="12" fill="#58C4DD">C</text>
          <text x="150" y="175" font-size="10" fill="#83C167">a = BC</text>
          <text x="80" y="140" font-size="10" fill="#83C167">b = AC</text>
          <text x="220" y="140" font-size="10" fill="#83C167">c = AB</text>
          <text x="150" y="90" font-size="10" fill="#83C167">∠A</text>
          <text x="95" y="160" font-size="10" fill="#83C167">∠B</text>
          <text x="205" y="160" font-size="10" fill="#83C167">∠C</text>
          <text x="180" y="190" font-size="11" fill="#9A72AC">∠A > ∠B ⇔ a > b</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "mc", prompt: "Tam giác góc A = 90°, B = 30°, C = 60°. Cạnh lớn nhất là", choices: ["AB", "AC", "BC", "Không so được"], correct: 2, hint: "Đối diện góc vuông.", explain: "BC đối diện A." },
      { type: "mc", prompt: "Hai góc bằng nhau thì hai cạnh đối diện", choices: ["Vuông góc", "Bằng nhau", "Song song", "Gấp đôi"], correct: 1, hint: "Tam giác cân.", explain: "Bằng nhau." },
      { type: "num", prompt: "Góc 20°, 70°, 90°. Cạnh nhỏ nhất đối diện góc bao nhiêu độ?", answer: 20, hint: "Góc nhỏ nhất.", explain: "20°." },
      { type: "mc", prompt: "Cạnh lớn nhất đối diện", choices: ["Góc nhỏ nhất","Góc lớn nhất","Góc vuông luôn","Góc 45°"], correct: 1, hint: "Góc lớn — cạnh lớn.", explain: "Đối diện góc lớn nhất." },
      { type: "num", prompt: "Tam giác vuông. Góc nhọn 40°. Góc nhọn kia bao nhiêu độ?", answer: 50, hint: "90 − 40.", explain: "50°." },
      { type: "mc", prompt: "Tam giác góc 20°, 30°, 130°. Cạnh lớn nhất đối diện góc", choices: ["20°","30°","130°","Không biết"], correct: 2, hint: "Góc lớn nhất.", explain: "130°." },
      { type: "num", prompt: "Hai góc bằng nhau 50° và 50°. Góc còn lại bao nhiêu độ? Tam giác ấy cân.", answer: 80, hint: "180−100.", explain: "80°. Hai cạnh đối diện hai góc 50° bằng nhau." },
    ],
  },
  {
    id: "g7-b32",
    num: 32,
    chapter: 9,
    title: "Đường vuông góc và đường xiên",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Vuông góc là đoạn ngắn nhất từ một điểm đến đường thẳng. Xiên dài hơn, xiên xa chân hơn thì dài hơn.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Từ điểm \(M\) ngoài đường thẳng \(d\), hạ vuông góc được chân \(H\). \(MH\) ngắn hơn mọi đường xiên \(MA\) với \(A\) khác \(H\) trên \(d\).</p>
      <figure class="figure">
        <svg viewBox="0 0 300 170" role="img" aria-label="Đường vuông góc ngắn hơn đường xiên">
          <line x1="20" y1="140" x2="280" y2="140" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="120" y1="40" x2="120" y2="140" stroke="#58C4DD" stroke-width="2"/>
          <line x1="120" y1="40" x2="230" y2="140" stroke="#FC6255" stroke-width="2"/>
          <rect x="120" y="128" width="12" height="12" fill="none" stroke="#58C4DD" stroke-width="1.3"/>
          <circle cx="120" cy="40" r="3" fill="#FFFF00"/>
          <text x="128" y="36" font-size="13">M</text>
          <text x="108" y="158" font-size="13">H</text>
          <text x="228" y="158" font-size="13">A</text>
          <text x="8" y="136" font-size="13">d</text>
          <text x="70" y="90" font-size="12" fill="#58C4DD">vuông góc</text>
          <text x="180" y="80" font-size="12" fill="#FC6255">xiên</text>
        </svg>
        <figcaption>MH ngắn nhất. MA dài hơn. Khoảng cách từ M đến d là MH.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Khoảng cách từ điểm đến đường là độ dài đường vuông góc, không phải đường xiên.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hai đường xiên bằng nhau thì hai chân cách đều chân vuông góc. Đừng so xiên với khoảng cách.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Điểm \(M\) cách đường 5 cm (đường vuông góc). Hai điểm \(A, B\) trên đường, \(HA = HB = 12\) cm thì hai xiên \(MA, MB\) bằng nhau. Điểm \(C\) với \(HC = 20\) cm thì xiên \(MC\) dài hơn \(MA\).</p>
      </div>
      <div class="definition">
        <p><strong>Đường vuông góc</strong> kẻ từ điểm \(M\) xuống đường thẳng \(d\) có chân tại \(H\). <strong>Đường xiên</strong> kẻ từ \(M\) đến một điểm khác \(H\) trên \(d\). Đường vuông góc ngắn hơn mọi đường xiên; <strong>khoảng cách</strong> từ \(M\) đến \(d\) là độ dài đường vuông góc.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Khoảng cách là đường vuông góc. Xiên dài hơn. Hai xiên bằng nhau thì hai chân cách đều chân vuông góc.</p>
      </div>
<div class="warn">
        <p><strong>Đừng so xiên với khoảng cách.</strong></p>
        <ul>
          <li>Khoảng cách từ điểm đến đường là độ dài đường <em>vuông góc</em>, không phải đường xiên.</li>
          <li>Đường xiên luôn dài hơn đường vuông góc từ cùng một điểm. Xiên càng xa chân vuông góc thì càng dài.</li>
          <li>Hai đường xiên bằng nhau thì hai chân cách đều chân vuông góc. Không suy ra hai điểm trùng nhau.</li>
          <li>Khi so hai xiên, so khoảng cách từ chân đến chân vuông góc: chân xa hơn thì xiên dài hơn.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Khoảng cách từ điểm đến đường thẳng là độ dài đường nào? <em>— Đường vuông góc. Đường xiên luôn dài hơn.</em></p>
        <p>Hai đường xiên \(MA\), \(MB\) bằng nhau: hai chân \(A\), \(B\) thế nào? <em>— Cách đều chân vuông góc \(H\): \(HA = HB\). Không suy ra chúng trùng nhau.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Vuông góc ngắn nhất. Xiên càng xa chân thì càng dài.</p></div>
      <figure class="figure" data-animation="g7-b32-perpendicular">
        <svg viewBox="0 0 360 210" role="img" aria-label="Đường vuông góc và đường xiên">
          <line x1="50" y1="180" x2="310" y2="180" stroke="#83C167" stroke-width="2"/>
          <line x1="180" y1="180" x2="180" y2="50" stroke="#58C4DD" stroke-width="2"/>
          <line x1="250" y1="180" x2="180" y2="50" stroke="#FC6255" stroke-width="2" stroke-dasharray="5 3"/>
          <line x1="110" y1="180" x2="180" y2="50" stroke="#FC6255" stroke-width="2" stroke-dasharray="5 3"/>
          <circle cx="180" cy="180" r="2.5" fill="#9A72AC"/>
          <circle cx="250" cy="180" r="2.5" fill="#58C4DD"/>
          <circle cx="110" cy="180" r="2.5" fill="#58C4DD"/>
          <circle cx="180" cy="50" r="2.5" fill="#58C4DD"/>
          <text x="170" y="198" font-size="12" fill="#9A72AC">H</text>
          <text x="262" y="198" font-size="12" fill="#58C4DD">B</text>
          <text x="95" y="198" font-size="12" fill="#58C4DD">A</text>
          <text x="192" y="38" font-size="12" fill="#58C4DD">C</text>
          <text x="175" y="130" font-size="11" fill="#58C4DD">CH (vuông góc)</text>
          <text x="165" y="110" font-size="11" fill="#FC6255">CA, CB (đường xiên)</text>
          <text x="180" y="30" font-size="11" fill="#9A72AC">CH < CA, CH < CB</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "mc", prompt: "Khoảng cách từ điểm M đến đường d là", choices: ["Một đường xiên bất kì", "Đường vuông góc MH", "Trung tuyến", "Phân giác"], correct: 1, hint: "Ngắn nhất.", explain: "Độ dài MH." },
      { type: "mc", prompt: "Đường xiên so với đường vuông góc cùng một điểm thì", choices: ["Ngắn hơn", "Dài hơn", "Luôn bằng", "Không so được"], correct: 1, hint: "Vuông góc ngắn nhất.", explain: "Xiên dài hơn." },
      { type: "num", prompt: "MH = 5 cm vuông góc với d. Đường xiên MA dài hơn MH. MA có thể bằng 5 cm không? Trả 0 nếu không, 1 nếu có.", answer: 0, hint: "Xiên dài hơn vuông góc.", explain: "Không. MA > 5." },
      { type: "mc", prompt: "Từ M, đường ngắn nhất tới d là", choices: ["Đường xiên gần nhất cảm tính","Đường vuông góc","Đường song song","Phân giác"], correct: 1, hint: "Khoảng cách.", explain: "Vuông góc." },
      { type: "mc", prompt: "Hai đường xiên bằng nhau thì hai chân", choices: ["Trùng nhau","Cách đều chân vuông góc","Nằm trên đường cao","Vuông góc với nhau"], correct: 1, hint: "Đối xứng.", explain: "Cách đều H." },
      { type: "mc", prompt: "Từ M, so MH vuông góc 4 cm và xiên 4 cm. Điều đó", choices: ["Có thể","Không thể, xiên phải dài hơn","Bắt buộc","Chỉ khi M trên d"], correct: 1, hint: "Vuông góc ngắn nhất.", explain: "Xiên > 4 cm." },
      { type: "mc", prompt: "Khoảng cách từ điểm đến đường là", choices: ["Đường xiên ngắn nhất cảm tính","Đường vuông góc","Trung tuyến","Cạnh huyền"], correct: 1, hint: "Định nghĩa.", explain: "Vuông góc." },
    ],
  },
  {
    id: "g7-b33",
    num: 33,
    chapter: 9,
    title: "Ba cạnh của một tam giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Tổng hai cạnh lớn hơn cạnh còn lại. Hiệu hai cạnh nhỏ hơn cạnh còn lại.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Không có tam giác cạnh 2, 3, 6 vì 2 + 3 = 5 < 6. Ba điểm không khép kín.</p>
      <figure class="figure">
        <svg viewBox="0 0 340 150" role="img" aria-label="Tổng hai cạnh phải lớn hơn cạnh còn lại">
          <polygon points="20,120 110,120 55,40" fill="none" stroke="#83C167" stroke-width="2"/>
          <text x="48" y="138" font-size="12" fill="#83C167">5, 6, 7 được</text>
          <line x1="180" y1="80" x2="320" y2="80" stroke="#FC6255" stroke-width="2"/>
          <text x="200" y="70" font-size="12" fill="#FC6255">2 + 3 = 5 &lt; 6</text>
          <text x="200" y="108" font-size="12" fill="#FC6255">không khép tam giác</text>
        </svg>
        <figcaption>Phải lớn hơn, không được bằng. 3, 4, 7 thẳng hàng, không phải tam giác.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 5, 6, 7: 5+6>7, 5+7>6, 6+7>5. Tạo được tam giác.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 3, 4, 7 không được: 3+4=7, ba điểm thẳng hàng, diện tích 0, không phải tam giác.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Cạnh 9 cm và 4 cm. Cạnh thứ ba \(x\) phải \(9 - 4 &lt; x &lt; 9 + 4\), tức \(5 &lt; x &lt; 13\). \(x = 5\) không được. \(x = 13\) không được. \(x = 6\) được: \(4+6=10&gt;9\), \(4+9&gt;6\), \(6+9&gt;4\).</p>
      </div>
      <div class="definition">
        <p><strong>Bất đẳng thức tam giác:</strong> với ba đoạn thẳng tạo được tam giác thì độ dài cạnh lớn nhất phải nhỏ hơn tổng hai cạnh kia, tức \(a + b > c\) cho mọi cách xếp.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> \(|a-b|<c<a+b\). Bằng thì thẳng hàng, không phải tam giác. Kiểm tra cả ba cặp.</p>
      </div>
<div class="warn">
        <p><strong>Phải lớn hơn, không được bằng.</strong></p>
        <ul>
          <li>3, 4, 7 không được: \(3+4=7\), ba điểm thẳng hàng, diện tích 0, không phải tam giác. Phải lớn hơn, không phải bằng.</li>
          <li>Kiểm tra cả ba cặp: 5, 6, 7 phải thử \(5+6&gt;7\), \(5+7&gt;6\), \(6+7&gt;5\). Chỉ thử một cặp là chưa đủ.</li>
          <li>Cạnh thứ ba \(x\) phải nằm trong khoảng \(|a-b| &lt; x &lt; a+b\): với 9 và 4 thì \(5 &lt; x &lt; 13\), \(x = 5\) và \(x = 13\) đều không được.</li>
          <li>Bằng nhau ở một cặp nhưng vẫn khép được tam giác thì phải thử tiếp các cặp khác.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Cạnh 3, 4, 7 có tạo tam giác không? <em>— Không. \(3+4=7\), ba điểm thẳng hàng, diện tích 0. Phải lớn hơn, không được bằng.</em></p>
        <p>Cạnh 9 cm và 4 cm: cạnh thứ ba \(x\) phải nằm trong khoảng nào? <em>— \(5 &lt; x &lt; 13\). \(x = 5\) và \(x = 13\) đều không được.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Phải lớn hơn, không được bằng. Kiểm tra cả ba cặp.</p></div>
      <figure class="figure" data-animation="g7-b33-triangle-inequality">
        <svg viewBox="0 0 360 210" role="img" aria-label="Ba cạnh của một tam giác">
          <polygon points="80,170 280,170 180,60" fill="none" stroke="#83C167" stroke-width="2"/>
          <circle cx="80" cy="170" r="2.5" fill="#58C4DD"/>
          <circle cx="280" cy="170" r="2.5" fill="#58C4DD"/>
          <circle cx="180" cy="60" r="2.5" fill="#58C4DD"/>
          <text x="68" y="188" font-size="12" fill="#58C4DD">A</text>
          <text x="292" y="188" font-size="12" fill="#58C4DD">B</text>
          <text x="192" y="48" font-size="12" fill="#58C4DD">C</text>
          <text x="180" y="175" font-size="11" fill="#83C167">a = BC</text>
          <text x="110" y="140" font-size="11" fill="#83C167">b = AC</text>
          <text x="250" y="140" font-size="11" fill="#83C167">c = AB</text>
          <text x="180" y="30" font-size="12" fill="#9A72AC">b + c > a, a + c > b, a + b > c</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "mc", prompt: "Ba độ dài 2, 5, 8 có tạo tam giác không?", choices: ["Có", "Không", "Chỉ khi vuông", "Chỉ khi cân"], correct: 1, hint: "2 + 5 = 7 < 8.", explain: "Không." },
      { type: "mc", prompt: "3, 4, 5 có tạo tam giác không?", choices: ["Có", "Không", "Chỉ trên giấy", "Không vì 3+4>5 sai"], correct: 0, hint: "3+4>5.", explain: "Có, tam giác vuông." },
      { type: "num", prompt: "Hai cạnh 6 cm và 10 cm. Cạnh thứ ba nguyên, nhỏ nhất có thể là bao nhiêu cm?", answer: 5, hint: "Lớn hơn 10 − 6 = 4, nhỏ hơn 16.", explain: "5 cm, vì 4 không được (6+4=10)." },
      { type: "mc", prompt: "1, 2, 3 có tạo tam giác không?", choices: ["Có","Không, vì 1+2=3","Có nếu tù","Có nếu vuông"], correct: 1, hint: "Tổng phải lớn hơn.", explain: "Thẳng hàng, không phải tam giác." },
      { type: "num", prompt: "Cạnh 5 và 12. Cạnh thứ ba nguyên lớn nhất có thể là bao nhiêu?", answer: 16, hint: "Nhỏ hơn 17.", explain: "16, vì 5+12>16, 5+12=17 không được." },
      { type: "mc", prompt: "6, 7, 13 có tạo tam giác không?", choices: ["Có","Không, 6+7=13","Có nếu tù","Có nếu cân"], correct: 1, hint: "Phải lớn hơn.", explain: "Thẳng hàng." },
      { type: "num", prompt: "Cạnh 8 và 15. Cạnh thứ ba nguyên nhỏ nhất là bao nhiêu?", answer: 8, hint: "Lớn hơn 7.", explain: "8, vì 7+8=15 không được." },
    ],
  },
  {
    id: "g7-b34",
    num: 34,
    chapter: 9,
    title: "Đồng quy trung tuyến và phân giác",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Ba trung tuyến gặp nhau tại trọng tâm, chia mỗi trung tuyến theo tỉ số 2:1. Ba phân giác gặp nhau tại tâm đường tròn nội tiếp.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Trung tuyến nối đỉnh với trung điểm cạnh đối. Ba trung tuyến đồng quy tại trọng tâm G. AG : GM = 2 : 1, M trung điểm.</p>
      <figure class="figure" data-animation="g7-b34-concurrency">
        <svg viewBox="0 0 260 180" role="img" aria-label="Ba trung tuyến đồng quy tại trọng tâm">
          <polygon points="30,150 230,150 130,25" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="130" y1="25" x2="130" y2="150" stroke="#58C4DD" stroke-width="1.6"/>
          <line x1="30" y1="150" x2="180" y2="88" stroke="#83C167" stroke-width="1.4"/>
          <line x1="230" y1="150" x2="80" y2="88" stroke="#FC6255" stroke-width="1.4"/>
          <circle cx="130" cy="108" r="4" fill="#FFFF00"/>
          <text x="138" y="104" font-size="13">G</text>
          <text x="122" y="20" font-size="13">A</text>
          <text x="122" y="166" font-size="13">M</text>
          <text x="136" y="130" font-size="11" fill="#58C4DD">2 : 1</text>
        </svg>
      </figure>

      <p>Ba đường phân giác trong đồng quy tại tâm đường tròn nội tiếp, điểm cách đều ba cạnh.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Trung tuyến dài 9 cm thì đoạn từ đỉnh đến trọng tâm 6 cm, đoạn còn lại 3 cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Trọng tâm không phải tâm đường tròn nội tiếp, trừ tam giác đều. Đừng nhầm hai giao điểm.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Trung tuyến \(AM = 15\) cm, G trọng tâm. \(AG = 10\), \(GM = 5\). Nếu đề cho \(GM = 4\) thì \(AM = 12\), \(AG = 8\). Luôn gấp đôi đoạn ngắn.</p>
      </div>
      <div class="definition">
        <p><strong>Trung tuyến</strong> nối một đỉnh với trung điểm cạnh đối diện. Ba trung tuyến đồng quy tại <strong>trọng tâm</strong> \(G\), với \(AG : GM = 2 : 1\). Ba đường phân giác trong đồng quy tại <strong>tâm đường tròn nội tiếp</strong>, cách đều ba cạnh.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Trọng tâm chia trung tuyến \(2:1\). Tâm nội tiếp = giao phân giác, cách đều ba cạnh.</p>
      </div>
<div class="warn">
        <p><strong>Trọng tâm hay tâm nội tiếp.</strong></p>
        <ul>
          <li>Trọng tâm là giao ba trung tuyến; tâm nội tiếp là giao ba phân giác. Chỉ trùng nhau ở tam giác đều.</li>
          <li>Trọng tâm chia trung tuyến theo tỉ số \(2:1\), đoạn dài về phía đỉnh. Trung tuyến 9 cm thì đoạn đỉnh→G là 6 cm, G→trung điểm là 3 cm.</li>
          <li>Đừng nhầm tỉ số: đoạn dài gấp đôi đoạn ngắn, không phải bằng nhau. \(AG = 2 \cdot GM\).</li>
          <li>Tâm nội tiếp cách đều ba cạnh; trọng tâm không cách đều ba cạnh.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Trung tuyến dài 9 cm: đoạn từ đỉnh đến trọng tâm dài bao nhiêu? <em>— \(6\) cm. Trọng tâm chia theo tỉ số \(2:1\), đoạn dài về phía đỉnh: \(9 \cdot \dfrac{2}{3} = 6\).</em></p>
        <p>Trọng tâm có cách đều ba cạnh không? <em>— Không. Tâm nội tiếp (giao phân giác) mới cách đều ba cạnh; trọng tâm chỉ trùng ở tam giác đều.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Trung tuyến → trọng tâm, tỉ lệ 2:1. Phân giác → tâm nội tiếp, cách đều ba cạnh.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Trung tuyến 12 cm. Đoạn từ đỉnh đến trọng tâm bằng bao nhiêu cm?", answer: 8, hint: "2/3 của 12.", explain: "8 cm." },
      { type: "mc", prompt: "Ba đường phân giác trong gặp nhau tại", choices: ["Trọng tâm", "Tâm đường tròn nội tiếp", "Trung điểm một cạnh", "Đỉnh"], correct: 1, hint: "Cách đều ba cạnh.", explain: "Tâm nội tiếp." },
      { type: "num", prompt: "AG = 10 cm, G trọng tâm trên trung tuyến AM. AM bằng bao nhiêu cm?", answer: 15, hint: "AG = 2/3 AM.", explain: "15 cm." },
      { type: "num", prompt: "GM = 3 cm. AG bằng bao nhiêu cm?", answer: 6, hint: "Gấp đôi.", explain: "6 cm." },
      { type: "mc", prompt: "Tâm nội tiếp cách đều", choices: ["Ba đỉnh","Ba cạnh","Ba trung điểm","Một đỉnh"], correct: 1, hint: "Bán kính vuông góc cạnh.", explain: "Ba cạnh." },
      { type: "num", prompt: "AM = 18 cm, G trọng tâm. GM bằng bao nhiêu cm?", answer: 6, hint: "1/3 của AM.", explain: "6 cm." },
      { type: "mc", prompt: "Ba phân giác trong gặp nhau tại điểm cách đều", choices: ["Ba đỉnh","Ba cạnh","Ba trung điểm","Một đỉnh"], correct: 1, hint: "Tâm nội tiếp.", explain: "Ba cạnh." },
    ],
  },
  {
    id: "g7-b35",
    num: 35,
    chapter: 9,
    title: "Đồng quy trung trực và đường cao",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Ba trung trực gặp nhau tại tâm đường tròn ngoại tiếp. Ba đường cao gặp nhau tại trực tâm.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Trung trực: vuông góc tại trung điểm cạnh. Giao ba trung trực là tâm đường tròn đi qua ba đỉnh.</p>
      <figure class="figure">
        <svg viewBox="0 0 280 170" role="img" aria-label="Tam giác vuông: tâm ngoại tiếp là trung điểm cạnh huyền">
          <polygon points="40,140 140,140 40,80" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <rect x="40" y="128" width="12" height="12" fill="none" stroke="#FC6255" stroke-width="1.3"/>
          <circle cx="90" cy="110" r="58.3" fill="none" stroke="#58C4DD" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle cx="90" cy="110" r="4" fill="#FFFF00"/>
          <text x="28" y="76" font-size="13">A</text>
          <text x="28" y="156" font-size="13">C</text>
          <text x="144" y="156" font-size="13">B</text>
          <text x="96" y="114" font-size="13">O</text>
        </svg>
        <figcaption>Vuông tại C. Tâm ngoại tiếp O là trung điểm cạnh huyền AB. Trực tâm trùng C.</figcaption>
      </figure>

      <p>Đường cao: vuông góc kẻ từ đỉnh xuống cạnh đối. Giao ba đường cao là trực tâm.</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác vuông: tâm ngoại tiếp là trung điểm cạnh huyền. Trực tâm là đỉnh góc vuông.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác tù: trực tâm và tâm ngoại tiếp nằm ngoài tam giác. Không bắt chúng phải nằm trong.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Tam giác vuông cạnh huyền 10 cm. Tâm ngoại tiếp là trung điểm cạnh huyền, bán kính 5 cm. Đường cao từ đỉnh vuông chính là hai cạnh góc vuông, trực tâm trùng đỉnh vuông.</p>
      </div>
      <div class="definition">
        <p><strong>Đường trung trực</strong> của một đoạn thẳng vuông góc với nó tại trung điểm. Giao của ba đường trung trực là <strong>tâm đường tròn ngoại tiếp</strong> tam giác. <strong>Đường cao</strong> vuông góc kẻ từ đỉnh xuống cạnh đối; ba đường cao đồng quy tại <strong>trực tâm</strong>.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> Tâm ngoại tiếp = giao trung trực. Vuông: tâm là trung điểm cạnh huyền. Trực tâm = giao đường cao; vuông thì trùng đỉnh vuông.</p>
      </div>
<div class="warn">
        <p><strong>Điểm có thể nằm ngoài tam giác.</strong></p>
        <ul>
          <li>Tam giác tù: trực tâm và tâm ngoại tiếp nằm <em>ngoài</em> tam giác. Không bắt chúng phải nằm trong.</li>
          <li>Tam giác vuông: tâm ngoại tiếp là trung điểm cạnh huyền, bán kính bằng nửa cạnh huyền. Trực tâm trùng đỉnh góc vuông.</li>
          <li>Tâm ngoại tiếp là giao ba trung trực, cách đều ba đỉnh. Trực tâm là giao ba đường cao. Hai giao điểm khác nhau.</li>
          <li>Trung trực vuông góc tại <em>trung điểm</em> cạnh; đường cao vuông góc kẻ từ đỉnh. Đừng nhầm hai đường.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Tam giác vuông cạnh huyền 10 cm: tâm ngoại tiếp nằm ở đâu, bán kính bao nhiêu? <em>— Trung điểm cạnh huyền, bán kính 5 cm.</em></p>
        <p>Tam giác tù: trực tâm và tâm ngoại tiếp nằm trong hay ngoài tam giác? <em>— Nằm ngoài. Không bắt chúng phải ở trong.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> Trung trực → ngoại tiếp, qua ba đỉnh. Đường cao → trực tâm. Vuông: tâm là trung điểm huyền.</p></div>
      <figure class="figure" data-animation="g7-b35-concurrency">
        <svg viewBox="0 0 360 210" role="img" aria-label="Đồng quy trung trực và đường cao">
          <polygon points="80,170 280,170 180,60" fill="none" stroke="#83C167" stroke-width="2"/>
          <!-- Trung trực -->
          <line x1="130" y1="170" x2="130" y2="100" stroke="#58C4DD" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="230" y1="170" x2="230" y2="100" stroke="#58C4DD" stroke-width="2" stroke-dasharray="4 3"/>
          <!-- Đường cao -->
          <line x1="180" y1="60" x2="180" y2="170" stroke="#FC6255" stroke-width="2"/>
          <line x1="80" y1="170" x2="280" y2="170" stroke="#9A72AC" stroke-width="2" stroke-dasharray="5 3"/>
          <circle cx="180" cy="170" r="2.5" fill="#9A72AC"/>
          <circle cx="130" cy="100" r="2" fill="#58C4DD"/>
          <circle cx="230" cy="100" r="2" fill="#58C4DD"/>
          <circle cx="180" cy="60" r="2.5" fill="#58C4DD"/>
          <text x="170" y="188" font-size="12" fill="#9A72AC">H</text>
          <text x="125" y="90" font-size="10" fill="#58C4DD">M</text>
          <text x="235" y="90" font-size="10" fill="#58C4DD">N</text>
          <text x="192" y="48" font-size="12" fill="#58C4DD">C</text>
          <text x="180" y="30" font-size="11" fill="#83C167">Đồng quy tại trực tâm H</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "mc", prompt: "Tâm đường tròn ngoại tiếp là giao", choices: ["Ba trung tuyến", "Ba trung trực", "Ba phân giác", "Ba đường cao"], correct: 1, hint: "Cách đều ba đỉnh.", explain: "Ba trung trực." },
      { type: "mc", prompt: "Tam giác vuông, tâm ngoại tiếp nằm ở", choices: ["Đỉnh góc vuông", "Trung điểm cạnh huyền", "Trọng tâm", "Ngoài tam giác luôn"], correct: 1, hint: "Góc nội tiếp chắn đường kính.", explain: "Trung điểm cạnh huyền." },
      { type: "mc", prompt: "Trực tâm là giao", choices: ["Ba đường cao", "Ba trung trực", "Ba trung tuyến", "Hai cạnh huyền"], correct: 0, hint: "Đường cao.", explain: "Ba đường cao." },
      { type: "mc", prompt: "Tam giác nhọn, trực tâm nằm", choices: ["Trong tam giác","Ngoài tam giác","Trung điểm một cạnh","Không tồn tại"], correct: 0, hint: "Nhọn thì trong.", explain: "Trong tam giác." },
      { type: "num", prompt: "Cạnh huyền 14 cm. Bán kính đường tròn ngoại tiếp tam giác vuông bằng bao nhiêu cm?", answer: 7, hint: "Nửa cạnh huyền.", explain: "7 cm." },
      { type: "mc", prompt: "Tam giác tù. Tâm ngoại tiếp nằm", choices: ["Trong tam giác","Ngoài tam giác","Trung điểm cạnh nhỏ","Không có"], correct: 1, hint: "Tù thì ngoài.", explain: "Ngoài." },
      { type: "num", prompt: "Vuông, cạnh huyền 20 cm. R ngoại tiếp bằng bao nhiêu cm?", answer: 10, hint: "Nửa huyền.", explain: "10 cm." },
    ],
  },
  {
    id: "g7-b36",
    num: 36,
    chapter: 10,
    title: "Hình hộp chữ nhật và hình lập phương",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Thể tích = dài × rộng × cao. Lập phương là hộp có mọi cạnh bằng nhau.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Hình hộp chữ nhật có 6 mặt là hình chữ nhật. Diện tích toàn phần \(S = 2(ab + bh + ha)\). Thể tích \(V = abh\).</p>
      <figure class="figure">
        <svg viewBox="0 0 280 180" role="img" aria-label="Hình hộp chữ nhật">
          <polygon points="50,70 170,70 170,150 50,150" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <polygon points="50,70 100,35 220,35 170,70" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <polygon points="170,70 220,35 220,115 170,150" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="50" y1="150" x2="100" y2="115" stroke="#DDDDDD" stroke-width="1.2" stroke-dasharray="4 3"/>
          <line x1="100" y1="115" x2="220" y2="115" stroke="#DDDDDD" stroke-width="1.2" stroke-dasharray="4 3"/>
          <line x1="100" y1="35" x2="100" y2="115" stroke="#DDDDDD" stroke-width="1.2" stroke-dasharray="4 3"/>
          <text x="100" y="168" font-size="12" fill="#58C4DD">dài</text>
          <text x="18" y="118" font-size="12" fill="#83C167">cao</text>
          <text x="200" y="150" font-size="12" fill="#FC6255">rộng</text>
        </svg>
        <figcaption>V = dài × rộng × cao. Diện tích toàn phần = 2(ab + bh + ha).</figcaption>
      </figure>

      <p>Hình lập phương cạnh \(a\): \(S = 6a^2\), \(V = a^3\).</p>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hộp 3 cm, 4 cm, 5 cm. \(V = 60\) cm³. \(S = 2(12 + 20 + 15) = 94\) cm².</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Sơn xung quanh thùng không đáy thì không lấy 2ab. Đọc kỹ: toàn phần, xung quanh, hay không nắp.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Thùng không nắp, 20 cm × 30 cm × 40 cm, 40 cm là chiều cao. Diện tích cần sơn: đáy \(20 \cdot 30 = 600\), bốn thành \(2 \cdot 20 \cdot 40 + 2 \cdot 30 \cdot 40 = 4000\). Tổng 4600 cm². Không nhân 2 đáy.</p>
      </div>
      <div class="definition">
        <p><strong>Hình hộp chữ nhật</strong> có 6 mặt là hình chữ nhật, kích thước \(a, b, h\); diện tích toàn phần \(S = 2(ab + bh + ha)\), thể tích \(V = abh\). <strong>Hình lập phương</strong> cạnh \(a\): \(S = 6a^2\), \(V = a^3\).</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> \(V=abh\). Toàn phần \(2(ab+bh+ha)\). Không nắp thì bỏ một đáy. Lập phương: \(V=a^3\), \(S=6a^2\).</p>
      </div>
<div class="warn">
        <p><strong>Đọc kĩ: toàn phần, xung quanh, hay không nắp.</strong></p>
        <ul>
          <li>Diện tích toàn phần \(S = 2(ab + bh + ha)\): ba cặp mặt. Không nhân \(2\) vào một cặp rồi quên các cặp khác.</li>
          <li>Thùng không nắp: bỏ một đáy, không lấy \(2ab\). Đọc kĩ “không đáy”, “không nắp”, “xung quanh”.</li>
          <li>Thể tích \(V = abh\), đơn vị khối. Diện tích là bình phương, thể tích là lập phương — đừng trộn đơn vị cm² với cm³.</li>
          <li>Hình lập phương cạnh \(a\): \(V = a^3\), \(S = 6a^2\). Không nhân \(a^2\) với số mặt khác 6.</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hộp 3 cm, 4 cm, 5 cm: thể tích bao nhiêu? <em>— \(60\) cm³. \(V = 3 \cdot 4 \cdot 5 = 60\).</em></p>
        <p>Sơn thùng không nắp, kích thước 20 × 30 × 40 (40 cao): có lấy \(2ab\) đáy không? <em>— Không. Không nắp thì bỏ một đáy: đáy \(20\cdot30\) cộng bốn thành, không nhân 2 đáy.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> V = đáy × cao. Lập phương: mọi cạnh bằng nhau, 6 mặt vuông.</p></div>
      <figure class="figure" data-animation="g7-b36-cuboid">
        <svg viewBox="0 0 360 210" role="img" aria-label="Hình hộp chữ nhật và hình lập phương">
          <rect x="80" y="100" width="120" height="70" fill="none" stroke="#83C167" stroke-width="2" stroke-dasharray="5 3"/>
          <rect x="140" y="60" width="120" height="70" fill="none" stroke="#83C167" stroke-width="2"/>
          <line x1="80" y1="100" x2="140" y2="60" stroke="#83C167" stroke-width="2"/>
          <line x1="200" y1="100" x2="260" y2="60" stroke="#83C167" stroke-width="2"/>
          <line x1="200" y1="170" x2="260" y2="130" stroke="#83C167" stroke-width="2"/>
          <line x1="140" y1="60" x2="140" y2="130" stroke="#83C167" stroke-width="2"/>
          <line x1="200" y1="60" x2="200" y2="130" stroke="#83C167" stroke-width="2"/>
          <text x="180" y="25" font-size="12" fill="#9A72AC">Hình hộp chữ nhật</text>
          <text x="180" y="45" font-size="11" fill="#58C4DD">Chiều dài, chiều rộng, chiều cao</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "num", prompt: "Hộp 2 cm × 3 cm × 4 cm. Thể tích bằng bao nhiêu cm³?", answer: 24, hint: "2·3·4.", explain: "24." },
      { type: "num", prompt: "Lập phương cạnh 5 cm. Diện tích toàn phần bằng bao nhiêu cm²?", answer: 150, hint: "6a².", explain: "6·25 = 150." },
      { type: "num", prompt: "Lập phương cạnh 3 cm. Thể tích bằng bao nhiêu cm³?", answer: 27, hint: "a³.", explain: "27." },
      { type: "num", prompt: "Hộp 5×5×2. Thể tích bằng bao nhiêu?", answer: 50, hint: "5·5·2.", explain: "50." },
      { type: "num", prompt: "Lập phương diện tích toàn phần 24. 6a² = 24. a² bằng bao nhiêu?", answer: 4, hint: "Chia 6.", explain: "a² = 4, a = 2." },
      { type: "num", prompt: "Hộp 4×5×6. V bằng bao nhiêu?", answer: 120, hint: "4·5·6.", explain: "120." },
      { type: "num", prompt: "Lập phương V = 8. Cạnh a bằng bao nhiêu?", answer: 2, hint: "a³=8.", explain: "2." },
    ],
  },
  {
    id: "g7-b37",
    num: 37,
    chapter: 10,
    title: "Hình lăng trụ đứng",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Hai đáy đa giác bằng nhau, mặt bên là hình chữ nhật. V = diện tích đáy × cao.",
    body: 
    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`
      <p>Lăng trụ đứng tam giác: đáy tam giác, ba mặt bên chữ nhật. Lăng trụ đứng tứ giác: đáy tứ giác. Chiều cao vuông góc với đáy, bằng cạnh bên.</p>
      <figure class="figure">
        <svg viewBox="0 0 280 180" role="img" aria-label="Hình lăng trụ đứng đáy tam giác">
          <polygon points="70,150 180,150 125,110" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <polygon points="70,70 180,70 125,30" fill="none" stroke="#DDDDDD" stroke-width="2"/>
          <line x1="70" y1="70" x2="70" y2="150" stroke="#58C4DD" stroke-width="2"/>
          <line x1="180" y1="70" x2="180" y2="150" stroke="#58C4DD" stroke-width="2"/>
          <line x1="125" y1="30" x2="125" y2="110" stroke="#58C4DD" stroke-width="2"/>
          <text x="40" y="118" font-size="12" fill="#58C4DD">cạnh bên</text>
          <text x="188" y="40" font-size="12">đáy trên</text>
          <text x="188" y="168" font-size="12">đáy dưới</text>
        </svg>
        <figcaption>Hai đáy bằng nhau. Mặt bên là hình chữ nhật. V = diện tích đáy × cao.</figcaption>
      </figure>

      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Đáy tam giác diện tích 12 cm², cao lăng trụ 5 cm. \(V = 60\) cm³.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Diện tích toàn phần = 2 đáy + các mặt bên. Quên nhân 2 đáy thì thiếu. Mặt bên dùng chu vi đáy nhân chiều cao.</p>
      </div>
            <div class="example">
        <p><strong>Làm chậm.</strong> Lăng trụ đứng đáy tam giác vuông 6 cm, 8 cm, cạnh huyền 10 cm, cao 12 cm. \(S_{đáy} = 24\). \(V = 288\) cm³. Chu vi đáy 24, xung quanh \(24 \cdot 12 = 288\) cm². Toàn phần \(288 + 2 \cdot 24 = 336\) cm².</p>
      </div>
      <div class="definition">
        <p><strong>Hình lăng trụ đứng</strong> có hai đáy là đa giác song song và bằng nhau, các mặt bên là hình chữ nhật, cạnh bên vuông góc với đáy. Thể tích \(V = S_{\text{đáy}} \cdot h\) với \(h\) là chiều cao.</p>
      </div>

<div class="idea">
        <p><strong>Kĩ năng sách bài tập.</strong> \(V=S_{\text{đáy}}\cdot h\). Xung quanh = chu vi đáy \(\times\) cao. Mặt bên lăng trụ đứng là chữ nhật.</p>
      </div>
<div class="warn">
        <p><strong>Đừng quên hai đáy.</strong></p>
        <ul>
          <li>Diện tích toàn phần = 2 đáy + các mặt bên. Quên nhân 2 đáy thì thiếu.</li>
          <li>Mặt bên lăng trụ đứng là chữ nhật: xung quanh = chu vi đáy × chiều cao. Không nhân diện tích đáy với chiều cao khi tính xung quanh.</li>
          <li>Thể tích = diện tích đáy × chiều cao. Đáy tam giác vuông 6×8 thì \(S_{đáy} = 24\), không phải tích hai cạnh nhân đôi.</li>
          <li>Khi đáy không phải chữ nhật, đừng áp công thức hình hộp: dùng \(S_{\text{đáy}} \cdot h\).</li>
        </ul>
      </div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Lăng trụ đứng đáy tam giác diện tích 12 cm², cao 5 cm: thể tích bao nhiêu? <em>— \(60\) cm³. \(V = S_{\text{đáy}} \cdot h = 12 \cdot 5\).</em></p>
        <p>Diện tích toàn phần lăng trụ = gì? <em>— Hai đáy + các mặt bên. Quên nhân 2 đáy thì thiếu.</em></p>
      </details>
<div class="memory"><p><strong>Nhìn lại.</strong> V = S_đáy · h. Xung quanh = chu vi đáy · h. Không nhầm với hình hộp nếu đáy không phải chữ nhật.</p></div>
      <figure class="figure" data-animation="g7-b37-prism">
        <svg viewBox="0 0 360 210" role="img" aria-label="Hình lăng trụ đứng">
          <polygon points="80,140 200,140 240,100 120,100" fill="none" stroke="#83C167" stroke-width="2" stroke-dasharray="5 3"/>
          <polygon points="80,60 200,60 240,20 120,20" fill="none" stroke="#83C167" stroke-width="2"/>
          <line x1="80" y1="60" x2="80" y2="140" stroke="#83C167" stroke-width="2"/>
          <line x1="200" y1="60" x2="200" y2="140" stroke="#83C167" stroke-width="2"/>
          <line x1="240" y1="20" x2="240" y2="100" stroke="#83C167" stroke-width="2"/>
          <line x1="120" y1="20" x2="120" y2="100" stroke="#83C167" stroke-width="2"/>
          <text x="160" y="20" font-size="12" fill="#9A72AC">Hình lăng trụ đứng</text>
          <text x="160" y="40" font-size="11" fill="#58C4DD">Đáy: tam giác, mặt bên: hình chữ nhật</text>
          <text x="160" y="60" font-size="10" fill="#FC6255">Chiều cao: đoạn thẳng nối hai đáy</text>
        </svg>
      </figure>
    `,
    exercises: [
      { type: "num", prompt: "Đáy diện tích 10 cm², cao 7 cm. Thể tích lăng trụ đứng bằng bao nhiêu cm³?", answer: 70, hint: "S·h.", explain: "70." },
      { type: "num", prompt: "Tam giác đáy chu vi 12 cm, cao lăng trụ 5 cm. Diện tích xung quanh bằng bao nhiêu cm²?", answer: 60, hint: "Chu vi × cao.", explain: "60." },
      { type: "mc", prompt: "Mặt bên của lăng trụ đứng là", choices: ["Hình tròn", "Hình chữ nhật", "Hình thoi luôn", "Tam giác đều"], correct: 1, hint: "Cạnh bên vuông góc đáy.", explain: "Hình chữ nhật." },
      { type: "num", prompt: "Đáy 15 cm², cao 4 cm. V bằng bao nhiêu cm³?", answer: 60, hint: "S·h.", explain: "60." },
      { type: "mc", prompt: "Hình hộp chữ nhật là lăng trụ đứng có đáy", choices: ["Tam giác","Hình chữ nhật","Hình tròn","Hình thang bất kì"], correct: 1, hint: "Sáu mặt chữ nhật.", explain: "Đáy chữ nhật." },
      { type: "num", prompt: "Đáy 20 cm², cao 3 cm. V bằng bao nhiêu cm³?", answer: 60, hint: "S·h.", explain: "60." },
      { type: "mc", prompt: "Chu vi đáy 10 cm, cao 4 cm. Sxq lăng trụ đứng bằng", choices: ["40 cm²","14 cm²","80 cm²","20 cm²"], correct: 0, hint: "Chu vi × cao.", explain: "40 cm²." },
    ],
  },

  {
    id: "g7-ch1-quiz",
    num: 99,
    chapter: 1,
    title: "Chương 1: Số hữu tỉ. Số thực - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập số hữu tỉ, số thực, giá trị tuyệt đối.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
String.raw`<p><strong>Làm bài.</strong> 8 câu hỏi trắc nghiệm về số hữu tỉ và số thực.</p><div class="memory"><p><strong>Nhìn lại.</strong> Tóm tắt kiến thức chính của bài học.</p></div>
<details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Làm bài tập để kiểm tra hiểu biết của em.</p>
      </details>
`,
    exercises: [
      { type: "mc", prompt: "Câu 1: Số nào là số hữu tỉ?", choices: ["√2", "π", "1/3", "e"], correct: 2, hint: "Số hữu tỉ là số viết được dưới dạng a/b.", explain: "1/3 là số hữu tỉ." },
      { type: "mc", prompt: "Câu 2: |-5| =", choices: ["5", "-5", "0", "1/5"], correct: 0, hint: "Giá trị tuyệt đối luôn ≥ 0.", explain: "|-5| = 5." },
      { type: "mc", prompt: "Câu 3: Kết quả của (-3)² là?", choices: ["-9", "9", "6", "-6"], correct: 1, hint: "Số âm bình phương thành dương.", explain: "(-3)² = 9." },
      { type: "mc", prompt: "Câu 4: Số nào là số vô tỉ?", choices: ["0.333...", "√4", "√3", "2/5"], correct: 2, hint: "√3 không biểu diễn được dưới dạng a/b.", explain: "√3 là số vô tỉ." },
      { type: "mc", prompt: "Câu 5: Làm tròn 3.14159 đến hàng phần trăm là?", choices: ["3.14", "3.15", "3.141", "3.142"], correct: 0, hint: "Hàng phần trăm là chữ số thứ 2 sau dấu phẩy.", explain: "3.14159 ≈ 3.14." },
      { type: "mc", prompt: "Câu 6: Tỷ lệ thức a/b = c/d thì:", choices: ["ad = bc", "ac = bd", "a+d = b+c", "a-c = b-d"], correct: 0, hint: "Tích ngoại = tích nội.", explain: "ad = bc." },
      { type: "mc", prompt: "Câu 7: √16 =", choices: ["4", "-4", "±4", "8"], correct: 0, hint: "Căn bậc hai số học ≥ 0.", explain: "√16 = 4." },
      { type: "mc", prompt: "Câu 8: Số thực bao gồm:", choices: ["Số hữu tỉ và số vô tỉ", "Số nguyên và số thập phân", "Số dương và số âm", "Số chẵn và số lẻ"], correct: 0, hint: "R = Q ∪ I.", explain: "Số hữu tỉ và số vô tỉ." },
    ],
  },
  {
    id: "g7-ch2-quiz",
    num: 105,
    chapter: 7,
    title: "Chương 7: Phép biến hình - Trắc nghiệm",
    video: "https://youtube.com/watch?v=dQw4w9WgXcQ",

    spoken: "Đây là tóm tắt bài học bằng lời nói.",

    youtube: "dQw4w9WgXcQ",

    summary: "Luyện tập phép tịnh tiến, phép quay, phép đối xứng.",
    body: 
    <p><strong>Ví dụ:</strong> Giải bài toán mẫu với các bước chi tiết.</p>

    <div class="trap">
      <p><strong>Cảnh báo:</strong> Những sai lầm thường gặp khi làm bài.</p>
    </div>

    <div class="tips">
      <p><strong>Lưu ý:</strong> Ghi nhớ các điểm quan trọng của bài học.</p>
    </div>
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
];

(function attachGrade7() {
  const course = COURSES.find((c) => c.id === "7");
  if (!course) return;
  course.subtitle = "Tập 1 & Tập 2 · Kết nối tri thức với cuộc sống";
  course.blurb = "Chương I–X, Bài 1–37. Ví dụ viết mới, không chép SGK.";
  course.chapters = G7_CHAPTERS;
  course.lessons = G7_LESSONS;
})();
