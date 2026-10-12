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

  {
    id: "g6-b2",
    num: 2,
    chapter: 1,
    title: "Cách ghi số tự nhiên",
    summary: "Hệ thập phân: mỗi hàng giá trị bằng 10 lần hàng bên phải.",
    body: String.raw`
      <p><strong>Vì sao hệ thập phân?</strong> Người ta chọn dùng 10 chữ số (0–9) và mỗi vị trí có giá trị khác nhau. Số 321 không phải là 3+2+1, mà là 300+20+1.</p>
      <div class="definition">
        <p>Hệ thập phân dùng 10 chữ số: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Giá trị mỗi chữ số phụ thuộc vào vị trí: hàng đơn vị, hàng chục, hàng trăm… Mỗi hàng bằng 10 lần hàng bên phải.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Số 456 gồm 4 trăm, 5 chục, 6 đơn vị. Viết thành \(4 \cdot 100 + 5 \cdot 10 + 6\). Số 1000 gồm 1 nghìn, 0 trăm, 0 chục, 0 đơn vị.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Viết số gồm 3 trăm, 2 chục, 5 đơn vị. Kết quả: 325. Viết số gồm 1 nghìn, 5 trăm, 0 chục, 2 đơn vị: 1502. Đừng quên vị trí trống cần thêm số 0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Số 205 không phải 25. chữ số 0 ở giữa giữ chỗ cho hàng chục. Nếu viết 25 thì nghĩa là không có hàng trăm. Đọc là “hai trăm linh năm”, không phải “hai mươi lăm”.</p>
      </div>
      <div class="idea">
        <p><strong>Cách đọc.</strong> Đọc từ trái sang phải, mỗi nhóm ba chữ tạo thành một lớp: đơn vị, nghìn, triệu… Trong mỗi lớp, đọc theo hàng trăm, chục, đơn vị.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>205 ≠ 25: chữ số 0 giữ chỗ cho hàng chục. Đọc là “hai trăm linh năm”.</li>
          <li>1002 đọc là “một nghìn không trăm linh hai”, không phải “mười không hai”.</li>
          <li>Số 0 không có chữ số hàng cao nhất. Viết 0, không viết 0000.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Số 3405 gồm mấy trăm, mấy chục, mấy đơn vị? <em>— 3 nghìn, 4 trăm, 0 chục, 5 đơn vị.</em></p>
        <p>Viết số gồm 2 trăm, 0 chục, 3 đơn vị. <em>— 203.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Đọc số 10203. Bước 1: tách thành lớp: 10 (nghìn), 203 (đơn vị). Bước 2: đọc từng lớp: “mười nghìn”, “hai trăm linh ba”. Kết quả: “mười nghìn hai trăm linh ba”.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Viết số gồm 5 triệu, 3 nghìn, 7 đơn vị. Kết quả: 5003007. Đếm vị trí: triệu (7 chữ số từ phải), nghìn (4 chữ số), đơn vị (1 chữ số).</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hệ thập phân: 10 chữ số, mỗi hàng bằng 10 lần hàng bên phải. Đọc từ trái sang phải, tách thành lớp.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Số 527 gồm mấy trăm, mấy chục, mấy đơn vị?", answer: "5 trăm, 2 chục, 7 đơn vị", accept: ["5 trăm, 2 chục, 7 đơn vị", "500+20+7"], hint: "Hàng trăm là 5, chục là 2, đơn vị là 7.", explain: "527 = 500 + 20 + 7." },
      { type: "mc", prompt: "Số nào đúng với cách viết 3 trăm, 0 chục, 5 đơn vị?", choices: ["35", "305", "350", "503"], correct: 1, hint: "0 ở hàng chục nghĩa là hàng chục là 0.", explain: "305." },
      { type: "text", prompt: "Đọc số 1005.", answer: "Một nghìn không trăm linh năm", accept: ["Một nghìn không trăm linh năm", "1005"], hint: "0 ở hàng chục cần đọc là 'linh'.", explain: "Một nghìn không trăm linh năm." },
      { type: "num", prompt: "Viết số gồm 2 triệu, 5 nghìn, 3 đơn vị.", answer: 2005003, hint: "Đếm vị trí: triệu (7 chữ số), nghìn (4 chữ số), đơn vị (1 chữ số).", explain: "2005003." },
      { type: "mc", prompt: "Số 4002 đọc là", choices: ["Bốn nghìn không trăm linh hai","Bốn nghìn không trăm hai","Bốn trăm linh hai","Bốn nghìn hai"], correct: 0, hint: "0 ở hàng chục cần đọc là 'linh'.", explain: "Bốn nghìn không trăm linh hai." },
      { type: "num", prompt: "Số 12345 gồm mấy chục nghìn, mấy nghìn, mấy trăm, mấy chục, mấy đơn vị?", answer: "1 chục nghìn, 2 nghìn, 3 trăm, 4 chục, 5 đơn vị", accept: ["1 chục nghìn, 2 nghìn, 3 trăm, 4 chục, 5 đơn vị", "10000+2000+300+40+5"], hint: "Từ phải sang trái: đơn vị, chục, trăm, nghìn, chục nghìn.", explain: "12345 = 10000 + 2000 + 300 + 40 + 5." },
      { type: "mc", prompt: "Số nào lớn hơn: 999 hay 1000?", choices: ["999", "1000", "Bằng nhau", "Không so được"], correct: 1, hint: "1000 có 4 chữ số, 999 có 3 chữ số.", explain: "1000 lớn hơn vì có nhiều chữ số hơn." },
    ],
  },
  {
    id: "g6-b3",
    num: 3,
    chapter: 1,
    title: "Thứ tự trong tập hợp các số tự nhiên",
    summary: "Trên tia số, số càng bên phải càng lớn. So sánh hai số: xét hàng cao nhất khác nhau.",
    body: String.raw`
      <p><strong>Tại sao thứ tự quan trọng?</strong> Trong đời sống và toán học, ta thường cần so sánh: số nào lớn hơn, số nào nhỏ hơn. Tia số giúp hình dung thứ tự này.</p>
      <div class="definition">
        <p>Trên tia số ( Ox), điểm biểu diễn số nhỏ hơn nằm bên trái điểm biểu diễn số lớn hơn. Hai số tự nhiên khác nhau thì luôn có một số lớn hơn số kia.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> So 23 và 31. Trên tia số, 23 nằm bên trái 31, nên 23 < 31. So 100 và 99: 100 nằm bên phải 99, nên 100 > 99.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> So 456 và 472. Hàng trăm đều là 4, sang hàng chục: 5 < 7, nên 456 < 472. Không cần nhìn hàng đơn vị.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 205 và 25: đừng nghĩ 205 nhỏ hơn 25 vì “205 có nhiều số hơn”. So từng hàng: 205 có hàng trăm là 2, 25 chỉ có hàng chục là 2, nên 205 > 25.</p>
      </div>
      <div class="idea">
        <p><strong>Cách so.</strong> So hai số tự nhiên: 1) Đếm số chữ số, số nào nhiều chữ số hơn thì lớn hơn. 2) Nếu cùng số chữ số, so từ trái sang phải, tìm hàng đầu tiên khác nhau, số nào có chữ số lớn hơn ở hàng đó thì lớn hơn.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>205 > 25: đừng bị đánh lừa bởi số chữ số nhìn thấy. So từng hàng.</li>
          <li>Số 0 là số nhỏ nhất trong tập số tự nhiên. Không có số tự nhiên nào nhỏ hơn 0.</li>
          <li>Số liền sau: 5 có số liền sau là 6. Số liền trước của 10 là 9. Số 0 không có số liền trước trong N.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Số liền sau của 99 là gì? <em>— 100.</em></p>
        <p>So 345 và 354: số nào lớn hơn? <em>— 354. Cùng hàng trăm 3, sang hàng chục: 4 < 5.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> So 1234 và 1243. Bước 1: cùng 4 chữ số. Bước 2: hàng nghìn đều là 1. Bước 3: hàng trăm đều là 2. Bước 4: hàng chục 3 < 4. Kết luận: 1234 < 1243.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Tìm số tự nhiên x biết 5 < x < 9 và x lẻ. <em>— x = 7. Các số thỏa: 6, 7, 8. Trong đó lẻ là 7.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Trên tia số: bên trái < bên phải. So từng hàng từ trái sang phải. Số 0 là nhỏ nhất.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Số liền sau của 79 là bao nhiêu?", answer: 80, hint: "79 + 1.", explain: "80." },
      { type: "num", prompt: "Số liền trước của 100 là bao nhiêu?", answer: 99, hint: "100 - 1.", explain: "99." },
      { type: "mc", prompt: "So 345 và 354: số nào lớn hơn?", choices: ["345", "354", "Bằng nhau", "Không so được"], correct: 1, hint: "Cùng hàng trăm 3, sang hàng chục: 4 < 5.", explain: "354 lớn hơn." },
      { type: "text", prompt: "Tìm số tự nhiên x biết 2 < x < 6.", answer: "3, 4, 5", accept: ["3, 4, 5", "3,4,5"], hint: "Lớn hơn 2 và nhỏ hơn 6.", explain: "3, 4, 5." },
      { type: "num", prompt: "Số lớn nhất có 3 chữ số khác nhau là bao nhiêu?", answer: 987, hint: "Dùng 3 chữ số lớn nhất: 9, 8, 7.", explain: "987." },
      { type: "mc", prompt: "Trên tia số, điểm biểu diễn số 5 nằm ở đâu so với điểm biểu diễn số 8?", choices: ["Bên trái", "Bên phải", "Trùng nhau", "Không xác định"], correct: 0, hint: "5 < 8 nên nằm bên trái.", explain: "5 < 8 nên bên trái." },
      { type: "num", prompt: "Tìm số tự nhiên x lẻ thỏa 4 < x < 9.", answer: 5, hint: "Các số 5, 6, 7, 8. Lẻ là 5 và 7.", accept: "5 hoặc 7", explain: "5 và 7 đều thỏa." },
    ],
  },
];

module.exports = { G6_CHAPTERS, G6_LESSONS };
