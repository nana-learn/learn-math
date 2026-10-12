// Toán 6 – Kết nối tri thức. Mạch bài theo SGK. Mỗi bài: tình huống → làm chậm → dễ → khó hơn → bẫy → nhìn lại → luyện.
// Không chép đề hay đoạn văn trong sách.

const G6_CHAPTERS = [
  { id: 1, title: "Tập hợp các số tự nhiên" },
  { id: 2, title: "Tính chia hết trong tập hợp các số tự nhiên" },
  { id: 3, title: "Số nguyên" },
  { id: 4, title: "Một số hình phẳng trong thực tiễn" },
  { id: 5, title: "Tính đối xứng của hình phẳng trong tự nhiên" },
  { id: 6, title: "Phân số" },
  { id: 7, title: "Số thập phân" },
  { id: 8, title: "Những hình hình học cơ bản" },
  { id: 9, title: "Dữ liệu và xác suất thực nghiệm" },
];

// Grade 6 lessons - Chapters I-V (Tập 1) and VI-IX (Tập 2)
// Tổng: 43 bài (Bài 1–43)
const G6_LESSONS = [
  {
    id: "g6-b1",
    num: 1,
    chapter: 1,
    title: "Tập hợp",
    summary: "Tập hợp là nhóm đối tượng được chỉ rõ. Kí hiệu ∈ và ∉.",
    body: String.raw`
      <p><strong>Tại sao cần tập hợp?</strong> Trong toán học, ta hay làm việc với những nhóm đối tượng có chung đặc điểm. Tập hợp giúp gộp nhóm, đặt tên, rồi dùng kí hiệu để nói rõ.</p>
      <div class="definition">
        <p>Tập hợp là nhóm đối tượng được chỉ rõ. Kí hiệu \(a \in A\) nghĩa là \(a\) thuộc tập \(A\); \(a \notin A\) nghĩa là \(a\) không thuộc \(A\). Ví dụ: \(2 \in \mathbb{N}\), \(-3 \notin \mathbb{N}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tập \(A = \{1, 2, 3\}\). \(1 \in A\), \(2 \in A\), \(3 \in A\). \(4 \notin A\), \(0 \notin A\). Không có số nào khác trong \(A\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tập \(B\) gồm các số tự nhiên lớn hơn 5 và nhỏ hơn 10. Viết \(B = \{6, 7, 8, 9\}\). \(6 \in B\), \(10 \notin B\), \(5 \notin B\). Các số ở giữa là 7, 8.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tập \(C = \{a, b, c\}\) và tập \(D = \{b, a, c\}\) là cùng một tập. Thứ tự liệt kê không quan trọng. Không được coi \(C\) và \(D\) là hai tập khác nhau.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nghĩ.</strong> Một tập hợp được xác định bởi những phần tử nào có trong nó, không phải cách viết hay thứ tự liệt kê. Mỗi phần tử chỉ đếm một lần.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>\(a \in \{a, b, c\}\) đúng, \(a \in a\) sai — không thể “thuộc chính nó”.</li>
          <li>\(\{a\} \in \{a, b, c\}\) sai — \(\{a\}\) là tập, không phải phần tử.</li>
          <li>\(\{a\} \subset \{a, b, c\}\) mới đúng — tập con chứ không phải phần tử.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Viết tập \(E\) gồm các số tự nhiên từ 3 đến 7. <em>— \(E = \{3, 4, 5, 6, 7\}\).</em></p>
        <p>Số nào vừa thuộc \(\{1, 2, 3\}\) vừa thuộc \(\{2, 3, 4\}\)? <em>— 2 và 3.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Viết tập hợp các số tự nhiên chẵn nhỏ hơn 10. Bước 1: số chẵn là 0, 2, 4, 6, 8. Bước 2: nhỏ hơn 10 nên không có 10. Kết quả: \(\{0, 2, 4, 6, 8\}\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Tập \(F = \{x \in \mathbb{N} \mid x < 5\}\). Viết lại bằng cách liệt kê: \(\{0, 1, 2, 3, 4\}\). Đừng quên 0 trong \(\mathbb{N}\) ở chương trình này.</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tập hợp là nhóm đối tượng được chỉ rõ. Kí hiệu ∈ thuộc, ∉ không thuộc. Không quan trọng thứ tự liệt kê.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Kí hiệu nào dùng để nói một phần tử thuộc tập hợp?", choices: ["∈", "∉", "⊂", "∩"], correct: 0, hint: "∈ nghĩa là thuộc.", explain: "a ∈ A nghĩa là a thuộc A." },
      { type: "num", prompt: "Tập A = {2, 4, 6, 8}. Số nào không thuộc A?", answer: 5, hint: "5 không có trong danh sách.", explain: "5 không trong A." },
      { type: "mc", prompt: "Tập B = {1, 2, 3} và C = {3, 2, 1}. Hai tập này", choices: ["Khác nhau", "Giống nhau", "B là con C", "Không so được"], correct: 1, hint: "Thứ tự liệt kê không quan trọng.", explain: "Hai tập có cùng phần tử nên giống nhau." },
      { type: "text", prompt: "Viết tập hợp các số tự nhiên lớn hơn 0 và nhỏ hơn 4.", answer: "{1, 2, 3}", accept: ["{1, 2, 3}", "{1,2,3}"], hint: "Lớn hơn 0: bắt đầu từ 1. Nhỏ hơn 4: dừng trước 4.", explain: "{1, 2, 3}." },
      { type: "mc", prompt: "Số nào thuộc tập {x ∈ N | x ≤ 3}?", choices: ["0", "1", "3", "Tất cả ba số trên"], correct: 3, hint: "≤ 3 nghĩa là nhỏ hơn hoặc bằng 3.", explain: "0, 1, 2, 3 đều thỏa." },
      { type: "num", prompt: "Tập D = {5, 6, 7, 8, 9}. Có bao nhiêu phần tử?", answer: 5, hint: "Đếm số trong dấu ngoặc nhọn.", explain: "5, 6, 7, 8, 9 — năm số." },
      { type: "mc", prompt: "Kí hiệu nào dùng để nói một tập hợp là tập con của tập khác?", choices: ["∈", "∉", "⊂", "∩"], correct: 2, hint: "⊂ nghĩa là tập con.", explain: "A ⊂ B nghĩa là A là tập con của B." },
    ],
  },
];

module.exports = { G6_CHAPTERS, G6_LESSONS };
