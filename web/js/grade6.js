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
  {
    id: "g6-b4",
    num: 4,
    chapter: 1,
    title: "Phép cộng và phép trừ số tự nhiên",
    summary: "Cộng trừ theo hàng dọc hoặc ngang. Phép trừ chỉ thực hiện khi số bị trừ lớn hơn hoặc bằng số trừ.",
    body: String.raw`
      <p><strong>Vì sao cần cộng trừ?</strong> Cộng là gộp nhóm, trừ là bớt đi. Đây là phép tính cơ bản nhất trong số học.</p>
      <div class="definition">
        <p>Phép cộng: \(a + b = c\), trong đó \(a, b\) là số hạng, \(c\) là tổng. Phép trừ: \(a - b = c\), \(a\) là số bị trừ, \(b\) là số trừ, \(c\) là hiệu. Phép trừ chỉ thực hiện được khi \(a \geq b\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(23 + 15 = 38\). \(47 - 24 = 23\). Kiểm tra: \(38 - 15 = 23\), \(23 + 24 = 47\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(128 + 76 = 204\). Tính nhẩm: 128 + 70 = 198, 198 + 6 = 204. \(215 - 89 = 126\). Tính nhẩm: 215 - 90 = 125, cộng lại 1 được 126.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(45 - 54\) không thực hiện được trong tập số tự nhiên. Đừng viết kết quả âm. Phép trừ chỉ có nghĩa khi số bị trừ ≥ số trừ.</p>
      </div>
      <div class="idea">
        <p><strong>Cách tính nhẩm.</strong> Gộp số tròn chục trước: 37 + 26 = (30 + 20) + (7 + 6) = 50 + 13 = 63. Trừ từng phần: 85 - 38 = (85 - 30) - 8 = 55 - 8 = 47.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>\(a - b\) chỉ có nghĩa khi \(a \geq b\) trong tập \(\mathbb{N}\). Đừng viết kết quả âm.</li>
          <li>\(a - a = 0\), \(a - 0 = a\). Những qui tắc này đúng với mọi \(a \in \mathbb{N}\).</li>
          <li>\(a + b = b + a\) (giao hoán), \((a + b) + c = a + (b + c)\) (kết hợp). Những tính chất này giúp tính nhẩm nhanh.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(35 + 27 = ?\) <em>— 62.</em></p>
        <p>\(83 - 46 = ?\) <em>— 37.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(145 + 87\). Bước 1: 5 + 7 = 12, viết 2 nhớ 1. Bước 2: 4 + 8 + 1 = 13, viết 3 nhớ 1. Bước 3: 1 + 1 = 2. Kết quả: 232.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Một ô tô đi từ A đến B dài 120 km, đã đi 75 km. Còn bao nhiêu km? <em>— 120 - 75 = 45 km.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cộng là gộp, trừ là bớt. Phép trừ chỉ thực hiện khi số bị trừ ≥ số trừ. Tính chất giao hoán và kết hợp giúp tính nhẩm.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "35 + 27 bằng bao nhiêu?", answer: 62, hint: "5+7=12, nhớ 1; 3+2+1=6.", explain: "62." },
      { type: "num", prompt: "83 - 46 bằng bao nhiêu?", answer: 37, hint: "3-6 không được, mượn 11-6=5, 7-4=3.", explain: "37." },
      { type: "num", prompt: "128 + 76 bằng bao nhiêu?", answer: 204, hint: "8+6=14, nhớ 1; 2+7+1=10, nhớ 1; 1+1=2.", explain: "204." },
      { type: "num", prompt: "215 - 89 bằng bao nhiêu?", answer: 126, hint: "5-9 không được, mượn 15-9=6, 0-8 không được mượn 10-8=2, 1-0=1.", explain: "126." },
      { type: "mc", prompt: "Phép trừ a - b có nghĩa khi nào?", choices: ["a > b", "a ≥ b", "a < b", "a ≤ b"], correct: 1, hint: "Phép trừ trong N chỉ khi số bị trừ ≥ số trừ.", explain: "a ≥ b." },
      { type: "num", prompt: "Một hình chữ nhật có chiều dài 25 cm, chiều rộng 18 cm. Chu vi bằng bao nhiêu?", answer: 86, hint: "Chu vi = (dài + rộng) × 2.", explain: "(25+18)×2 = 43×2 = 86 cm." },
      { type: "mc", prompt: "Tính chất nào đúng với phép cộng?", choices: ["Giao hoán", "Kết hợp", "Cả hai tính chất trên", "Không có tính chất nào"], correct: 2, hint: "a+b=b+a (giao hoán), (a+b)+c=a+(b+c) (kết hợp).", explain: "Cả hai tính chất đều đúng." },
    ],
  },
  {
    id: "g6-b5",
    num: 5,
    chapter: 1,
    title: "Phép nhân và phép chia số tự nhiên",
    summary: "Nhân là phép cộng lặp lại. Chia là phép trừ lặp lại. Phép chia có dư khi số bị chia không chia hết cho số chia.",
    body: String.raw`
      <p><strong>Vì sao cần nhân chia?</strong> Nhân giúp gộp nhiều nhóm bằng nhau nhanh chóng. Chia giúp chia đều hoặc chia theo nhóm.</p>
      <div class="definition">
        <p>Phép nhân: \(a \cdot b = c\), \(a, b\) là thừa số, \(c\) là tích. Phép chia: \(a : b = c\), \(a\) là số bị chia, \(b\) là số chia (\(b \neq 0\)), \(c\) là thương. Phép chia có dư: \(a = b \cdot q + r\), \(0 \leq r < b\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(7 \cdot 6 = 42\). \(42 : 6 = 7\). \(17 : 5 = 3\) dư 2, vì \(5 \cdot 3 + 2 = 17\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(25 \cdot 4 = 100\). Tính nhẩm: 25 nhân 4 là một trăm. \(120 : 8 = 15\). Tính nhẩm: 8 × 15 = 120.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Phép chia cho 0 không có nghĩa. \(a : 0\) là sai. Đừng bao giờ chia cho 0.</p>
      </div>
      <div class="idea">
        <p><strong>Tính chất.</strong> \(a \cdot b = b \cdot a\) (giao hoán), \((a \cdot b) \cdot c = a \cdot (b \cdot c)\) (kết hợp), \(a \cdot (b + c) = a \cdot b + a \cdot c\) (phân phối).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Chia cho 0 là sai. \(a : 0\) không có nghĩa.</li>
          <li>\(a \cdot 0 = 0\), \(a \cdot 1 = a\). Những qui tắc này đúng với mọi \(a \in \mathbb{N}\).</li>
          <li>Phép chia có dư: số dư luôn nhỏ hơn số chia. Đừng viết số dư bằng hoặc lớn hơn số chia.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(8 \cdot 7 = ?\) <em>— 56.</em></p>
        <p>\(56 : 7 = ?\) <em>— 8.</em></p>
        <p>\(23 : 5 = ?\) dư bao nhiêu? <em>— 4.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(125 \cdot 8\). Bước 1: 5 × 8 = 40, viết 0 nhớ 4. Bước 2: 2 × 8 + 4 = 20, viết 0 nhớ 2. Bước 3: 1 × 8 + 2 = 10. Kết quả: 1000.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Một lớp có 36 học sinh, chia đều vào 4 tổ. Mỗi tổ có bao nhiêu học sinh? <em>— 36 : 4 = 9 học sinh.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Nhân là cộng lặp lại. Chia là trừ lặp lại. Chia cho 0 là sai. Số dư luôn nhỏ hơn số chia.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "8 × 7 bằng bao nhiêu?", answer: 56, hint: "Bảng cửu chương.", explain: "56." },
      { type: "num", prompt: "56 : 7 bằng bao nhiêu?", answer: 8, hint: "7 × 8 = 56.", explain: "8." },
      { type: "num", prompt: "125 × 8 bằng bao nhiêu?", answer: 1000, hint: "125 × 8 = 1000 (một trong những tích cần nhớ).", explain: "1000." },
      { type: "num", prompt: "23 : 5 bằng bao nhiêu? Dư bao nhiêu?", answer: "4 dư 3", accept: ["4 dư 3", "4dư3", "4,3"], hint: "5 × 4 = 20, 23 - 20 = 3.", explain: "4 dư 3." },
      { type: "mc", prompt: "Phép chia a : b có nghĩa khi nào?", choices: ["b > 0", "b ≥ 0", "b ≠ 0", "b = 0"], correct: 2, hint: "Số chia phải khác 0.", explain: "b ≠ 0." },
      { type: "num", prompt: "Một hình chữ nhật có chiều dài 12 cm, chiều rộng 8 cm. Diện tích bằng bao nhiêu?", answer: 96, hint: "Diện tích = dài × rộng.", explain: "12 × 8 = 96 cm²." },
      { type: "num", prompt: "Chia đều 48 cái kẹo cho 6 bạn. Mỗi bạn được bao nhiêu kẹo?", answer: 8, hint: "48 : 6 = 8.", explain: "8 kẹo." },
    ],
  },
  {
    id: "g6-b6",
    num: 6,
    chapter: 1,
    title: "Luỹ thừa với số mũ tự nhiên",
    summary: "a^n là a nhân với chính nó n lần. a^0 = 1 (a ≠ 0). Quy ước 0^0 không xác định.",
    body: String.raw`
      <p><strong>Vì sao cần luỹ thừa?</strong> Khi nhân nhiều số giống nhau, việc viết lại dưới dạng luỹ thừa giúp ngắn gọn và dễ tính toán.</p>
      <div class="definition">
        <p>Luỹ thừa: \(a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ lần}}\), \(a\) là cơ số, \(n\) là số mũ. Qui ước \(a^0 = 1\) (với \(a \neq 0\)).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(2^3 = 2 \cdot 2 \cdot 2 = 8\). \(5^2 = 5 \cdot 5 = 25\). \(10^4 = 10 \cdot 10 \cdot 10 \cdot 10 = 10000\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(3^4 = 81\). Tính nhẩm: 3^2 = 9, 9^2 = 81. \(2^5 = 32\). Tính nhẩm: 2^3 = 8, 8 × 2 = 16, 16 × 2 = 32.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0^0\) không xác định. \(0^5 = 0\) (một số khác 0). Đừng nhầm \(0^0 = 1\).</p>
      </div>
      <div class="idea">
        <p><strong>Các luỹ thừa cần nhớ.</strong> 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128, 2^8=256, 2^9=512, 2^10=1024. 3^2=9, 3^3=27, 3^4=81.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>\(0^0\) không xác định. Đừng ghi kết quả là 1.</li>
          <li>\(a^1 = a\). Mọi số mũ 1 đều bằng chính số đó.</li>
          <li>\(1^n = 1\). 1 mũ bao nhiêu cũng bằng 1.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(2^5 = ?\) <em>— 32.</em></p>
        <p>\(3^3 = ?\) <em>— 27.</em></p>
        <p>\(10^3 = ?\) <em>— 1000.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(4^3\). Bước 1: 4 × 4 = 16. Bước 2: 16 × 4 = 64. Kết quả: 64.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Một hình lập phương cạnh 5 cm. Thể tích bằng bao nhiêu? <em>— 5^3 = 125 cm³.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> a^n là a nhân với chính nó n lần. a^0 = 1 (a ≠ 0). 1^n = 1, 0^n = 0 (n > 0).</p></div>
    `,
    exercises: [
      { type: "num", prompt: "2^5 bằng bao nhiêu?", answer: 32, hint: "2^3=8, 8×2=16, 16×2=32.", explain: "32." },
      { type: "num", prompt: "3^3 bằng bao nhiêu?", answer: 27, hint: "3×3=9, 9×3=27.", explain: "27." },
      { type: "num", prompt: "10^3 bằng bao nhiêu?", answer: 1000, hint: "10×10=100, 100×10=1000.", explain: "1000." },
      { type: "num", prompt: "4^2 bằng bao nhiêu?", answer: 16, hint: "4×4=16.", explain: "16." },
      { type: "mc", prompt: "Kết quả của 0^4 là gì?", choices: ["0", "1", "4", "Không xác định"], correct: 0, hint: "0 mũ dương luôn bằng 0.", explain: "0." },
      { type: "mc", prompt: "Kết quả của 1^100 là gì?", choices: ["0", "1", "100", "1000"], correct: 1, hint: "1 mũ bao nhiêu cũng bằng 1.", explain: "1." },
      { type: "num", prompt: "Một hình lập phương cạnh 3 cm. Thể tích bằng bao nhiêu?", answer: 27, hint: "3^3 = 27.", explain: "27 cm³." },
    ],
  },
  {
    id: "g6-b7",
    num: 7,
    chapter: 1,
    title: "Thứ tự thực hiện các phép tính",
    summary: "Biểu thức không có dấu ngoặc: luỹ thừa → nhân/chia → cộng/trừ. Có dấu ngoặc: trong ngoặc trước.",
    body: String.raw`
      <p><strong>Vì sao cần thứ tự?</strong> Trong biểu thức nhiều phép tính, phải làm theo thứ tự đúng thì mới ra kết quả đúng. Ví dụ: 2 + 3 × 4 ≠ (2 + 3) × 4.</p>
      <div class="definition">
        <p>Thứ tự thực hiện: 1) Biểu thức có dấu ngoặc: làm trong ngoặc trước ((), {}, []). 2) Không có dấu ngoặc: luỹ thừa → nhân/chia (từ trái sang phải) → cộng/trừ (từ trái sang phải).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(2 + 3 \cdot 4 = 2 + 12 = 14\). \((2 + 3) \cdot 4 = 5 \cdot 4 = 20\). \(2^3 + 5 = 8 + 5 = 13\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(10 - 2 \cdot 3^2 = 10 - 2 \cdot 9 = 10 - 18 = -8\). \(20 : 4 + 3^2 = 5 + 9 = 14\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(8 - 3 + 2\) không phải \(8 - 5 = 3\). Phải làm từ trái sang phải: \(8 - 3 = 5\), rồi \(5 + 2 = 7\).</p>
      </div>
      <div class="idea">
        <p><strong>Qui tắc nhớ.</strong> PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Từ trái sang phải cho cùng cấp độ.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>\(8 - 3 + 2 = 7\), không phải 3. Phải làm từ trái sang phải.</li>
          <li>\(2 + 3 \cdot 4 = 14\), không phải 20. Nhân làm trước cộng.</li>
          <li>\((2 + 3) \cdot 4 = 20\), có dấu ngoặc thì làm trong ngoặc trước.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>\(5 + 3 \cdot 2 = ?\) <em>— 11.</em></p>
        <p>\((5 + 3) \cdot 2 = ?\) <em>— 16.</em></p>
        <p>\(2^3 + 4 = ?\) <em>— 12.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> \(15 - 3 \cdot 2^2\). Bước 1: luỹ thừa \(2^2 = 4\). Bước 2: nhân \(3 \cdot 4 = 12\). Bước 3: trừ \(15 - 12 = 3\). Kết quả: 3.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Mai mua 3 bút giá 5 nghìn và 2 vở giá 10 nghìn. Tổng cộng bao nhiêu? <em>— 3 \cdot 5 + 2 \cdot 10 = 15 + 20 = 35 nghìn.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Luỹ thừa trước, rồi nhân/chia, rồi cộng/trừ. Trong ngoặc trước. Từ trái sang phải cho cùng cấp.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "5 + 3 × 2 bằng bao nhiêu?", answer: 11, hint: "3×2=6, 5+6=11.", explain: "11." },
      { type: "num", prompt: "(5 + 3) × 2 bằng bao nhiêu?", answer: 16, hint: "5+3=8, 8×2=16.", explain: "16." },
      { type: "num", prompt: "2^3 + 4 bằng bao nhiêu?", answer: 12, hint: "2^3=8, 8+4=12.", explain: "12." },
      { type: "num", prompt: "15 - 3 × 2^2 bằng bao nhiêu?", answer: 3, hint: "2^2=4, 3×4=12, 15-12=3.", explain: "3." },
      { type: "mc", prompt: "8 - 3 + 2 bằng bao nhiêu?", choices: ["3", "7", "1", "13"], correct: 1, hint: "Làm từ trái sang phải: 8-3=5, 5+2=7.", explain: "7." },
      { type: "num", prompt: "20 : 4 + 3^2 bằng bao nhiêu?", answer: 14, hint: "20:4=5, 3^2=9, 5+9=14.", explain: "14." },
      { type: "num", prompt: "Một hình chữ nhật chiều dài 8 cm, chiều rộng 5 cm. Chu vi bằng bao nhiêu?", answer: 26, hint: "Chu vi = (dài + rộng) × 2 = (8+5)×2.", explain: "26 cm." },
    ],
  },
  {
    id: "g6-b8",
    num: 8,
    chapter: 2,
    title: "Quan hệ chia hết và tính chất",
    summary: "a chia hết b (a \u2223 b) khi tồn tại k sao cho a = b \u22c5 k. Tính chất: nếu a \u2223 b và a \u2223 c thì a \u2223 (b \u00b1 c).",
    body: String.raw`
      <p><strong>Vì sao cần quan hệ chia hết?</strong> Biết một số có chia hết cho số khác hay không giúp ta phân tích số, tìm ước, bội, và giải nhiều bài toán số học.</p>
      <div class="definition">
        <p>Số tự nhiên \(a\) chia hết cho số tự nhiên \(b\) (\(b \neq 0\)) nếu tồn tại số tự nhiên \(k\) sao cho \(a = b \cdot k\). Kí hiệu \(b \mid a\). Khi đó \(a\) là bội của \(b\), \(b\) là ước của \(a\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> \(12 \mid 36\) vì \(36 = 12 \cdot 3\). \(5 \mid 20\) vì \(20 = 5 \cdot 4\). \(7 \nmid 15\) vì không tồn tại \(k\) nguyên sao cho \(15 = 7 \cdot k\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> \(6 \mid 24\) và \(6 \mid 18\), nên \(6 \mid (24 + 18) = 42\) và \(6 \mid (24 - 18) = 6\). Đây là tính chất quan trọng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> \(0 \mid 5\) là sai. Không có số nào chia hết cho 0. Nhưng \(5 \mid 0\) đúng vì \(0 = 5 \cdot 0\). Đừng nhầm giữa số chia và số bị chia.</p>
      </div>
      <div class="idea">
        <p><strong>Tính chất quan trọng.</strong> Nếu \(a \mid b\) và \(a \mid c\) thì \(a \mid (b + c)\) và \(a \mid (b - c)\). Nếu \(a \mid b\) thì \(a \mid (b \cdot k)\) với mọi \(k \in \mathbb{N}\).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>\(0 \mid a\) sai với mọi \(a\). Số chia không thể bằng 0.</li>
          <li>\(a \mid 0\) đúng với mọi \(a \neq 0\). Mọi số khác 0 đều chia hết cho 0.</li>
          <li>\(1 \mid a\) đúng với mọi \(a\). 1 là ước của mọi số tự nhiên.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Viết tất cả ước của 12. <em>— 1, 2, 3, 4, 6, 12.</em></p>
        <p>Viết 5 bội đầu tiên của 7. <em>— 0, 7, 14, 21, 28.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Kiểm tra \(8 \mid 56\). Bước 1: tìm \(k\) sao cho \(56 = 8 \cdot k\). Bước 2: \(56 : 8 = 7\). Bước 3: \(k = 7\) là số tự nhiên. Kết luận: \(8 \mid 56\).</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Biết \(6 \mid a\) và \(6 \mid b\). Hỏi \(6\) có chia hết cho \(a + b\) không? <em>— Có. Vì \(a = 6m\), \(b = 6n\), nên \(a + b = 6(m + n)\).</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> \(b \mid a\) khi \(a = b \cdot k\) với \(k\) nguyên. \(1 \mid a\) với mọi \(a\). \(a \mid 0\) với mọi \(a \neq 0\).</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Số nào là ước của mọi số tự nhiên?", choices: ["0", "1", "2", "Mọi số"], correct: 1, hint: "1 chia hết cho mọi số.", explain: "1." },
      { type: "mc", prompt: "Số nào chia hết cho mọi số tự nhiên?", choices: ["0", "1", "2", "Không có"], correct: 0, hint: "0 chia hết cho mọi số khác 0.", explain: "0." },
      { type: "num", prompt: "Viết tất cả ước của 15.", answer: "1, 3, 5, 15", accept: ["1, 3, 5, 15", "1,3,5,15"], hint: "1×15=15, 3×5=15.", explain: "1, 3, 5, 15." },
      { type: "num", prompt: "Viết 4 bội đầu tiên của 9.", answer: "0, 9, 18, 27", accept: ["0, 9, 18, 27", "0,9,18,27"], hint: "9×0=0, 9×1=9, 9×2=18, 9×3=27.", explain: "0, 9, 18, 27." },
      { type: "mc", prompt: "Nếu 4 | a và 4 | b thì", choices: ["4 | (a+b)", "4 | (a-b)", "Cả hai đều đúng", "Không có kết luận"], correct: 2, hint: "Tính chất chia hết của tổng và hiệu.", explain: "Cả hai đều đúng." },
      { type: "num", prompt: "Biết 6 | 36 và 6 | 18. 6 có chia hết cho 36 + 18 không?", answer: "Có", accept: ["Có", "có"], hint: "Tính chất: nếu a|b và a|c thì a|(b+c).", explain: "36+18=54, 54:6=9." },
      { type: "mc", prompt: "Số nào sau đây chia hết cho 3?", choices: ["10", "11", "12", "13"], correct: 2, hint: "12 = 3×4.", explain: "12." },
    ],
  },
  {
    id: "g6-b9",
    num: 9,
    chapter: 2,
    title: "Dấu hiệu chia hết",
    summary: "Chia hết cho 2: chữ số tận cùng chẵn. Cho 5: tận cùng 0 hoặc 5. Cho 3: tổng các chữ số chia hết cho 3.",
    body: String.raw`
      <p><strong>Vì sao cần dấu hiệu?</strong> Dấu hiệu chia hết giúp ta nhanh chóng biết một số có chia hết cho 2, 3, 5, 9 mà không cần thực hiện phép chia dài.</p>
      <div class="definition">
        <p>Dấu hiệu chia hết: 2 - chữ số tận cùng chẵn (0, 2, 4, 6, 8); 5 - chữ số tận cùng 0 hoặc 5; 3 - tổng các chữ số chia hết cho 3; 9 - tổng các chữ số chia hết cho 9.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 24 chia hết cho 2 vì tận cùng là 4. 35 chia hết cho 5 vì tận cùng là 5. 123 chia hết cho 3 vì 1+2+3=6 chia hết cho 3.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> 108 chia hết cho 3 vì 1+0+8=9 chia hết cho 3. 972 chia hết cho 9 vì 9+7+2=18 chia hết cho 9. 540 chia hết cho cả 2, 3, 5, 9.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 105 chia hết cho 3 và 5 nhưng không chia hết cho 2. Đừng nhầm: số chia hết cho 5 chưa chắc chia hết cho 2.</p>
      </div>
      <div class="idea">
        <p><strong>Ghi nhớ.</strong> 2 và 5 chỉ cần xem chữ số cuối. 3 và 9 cần tính tổng các chữ số. Số chia hết cho 9 thì luôn chia hết cho 3, nhưng ngược lại không đúng.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>105 chia hết cho 3 và 5 nhưng không chia hết cho 2. Đừng nhầm.</li>
          <li>9 chia hết cho 3 nhưng 6 không chia hết cho 9. Số chia hết cho 3 chưa chắc chia hết cho 9.</li>
          <li>0 chia hết cho 2, 3, 5, 9. Số 0 chia hết cho mọi số khác 0.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Số nào chia hết cho 2 trong các số: 14, 15, 16? <em>— 14 và 16.</em></p>
        <p>Số nào chia hết cho 3 trong các số: 21, 22, 23? <em>— 21 (2+1=3).</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Kiểm tra 234 chia hết cho 3. Bước 1: tính tổng 2+3+4=9. Bước 2: 9 chia hết cho 3. Kết luận: 234 chia hết cho 3.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Tìm chữ số thích hợp thay cho * để 3*4 chia hết cho 3. <em>— * = 2 hoặc 5 hoặc 8. Vì 3+*+4 = 7+* chia hết cho 3 khi *=2,5,8.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> 2: tận cùng chẵn. 5: tận cùng 0 hoặc 5. 3: tổng chữ số chia hết cho 3. 9: tổng chữ số chia hết cho 9.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Số nào chia hết cho 2 trong các số: 24, 35, 46?", answer: "24, 46", accept: ["24, 46", "24,46"], hint: "Tận cùng chẵn: 0, 2, 4, 6, 8.", explain: "24 và 46." },
      { type: "num", prompt: "Số nào chia hết cho 5 trong các số: 15, 23, 40?", answer: "15, 40", accept: ["15, 40", "15,40"], hint: "Tận cùng 0 hoặc 5.", explain: "15 và 40." },
      { type: "num", prompt: "Số nào chia hết cho 3 trong các số: 123, 124, 125?", answer: "123", accept: ["123"], hint: "1+2+3=6 chia hết cho 3.", explain: "123." },
      { type: "num", prompt: "Tìm chữ số * để 4*5 chia hết cho 3.", answer: "2, 5, 8", accept: ["2, 5, 8", "2,5,8"], hint: "4+*+5=9+* chia hết cho 3 khi *=0,3,6,9.", explain: "* = 0, 3, 6, 9." },
      { type: "mc", prompt: "Số chia hết cho 9 thì", choices: ["Luôn chia hết cho 3", "Luôn chia hết cho 2", "Luôn chia hết cho 5", "Không có kết luận"], correct: 0, hint: "9 chia hết cho 3, nên số chia hết cho 9 cũng chia hết cho 3.", explain: "Luôn chia hết cho 3." },
      { type: "num", prompt: "Số 108 chia hết cho những số nào trong 2, 3, 5, 9?", answer: "2, 3, 9", accept: ["2, 3, 9", "2,3,9"], hint: "Tận cùng 8 chẵn (2); 1+0+8=9 chia hết cho 3 và 9.", explain: "2, 3, 9." },
      { type: "mc", prompt: "Số nào sau đây chia hết cho cả 2 và 5?", choices: ["20", "25", "30", "Cả A và C"], correct: 3, hint: "Chia hết cho 2 và 5 thì phải tận cùng là 0.", explain: "20 và 30 đều tận cùng là 0." },
    ],
  },
  {
    id: "g6-b10",
    num: 10,
    chapter: 2,
    title: "Số nguyên tố",
    summary: "Số nguyên tố là số lớn hơn 1 và chỉ có hai ước là 1 và chính nó. Hợp số là số có nhiều hơn hai ước.",
    body: String.raw`
      <p><strong>Vì sao cần số nguyên tố?</strong> Số nguyên tố là "nguyên liệu xây dựng" của mọi số tự nhiên. Mọi số tự nhiên lớn hơn 1 đều phân tích được thành tích các số nguyên tố.</p>
      <div class="definition">
        <p>Số nguyên tố là số tự nhiên lớn hơn 1 và chỉ có hai ước là 1 và chính nó. Hợp số là số tự nhiên lớn hơn 1 và có nhiều hơn hai ước.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 2, 3, 5, 7, 11 là số nguyên tố. 4, 6, 8, 9, 10 là hợp số. Số 1 không phải số nguyên tố và không phải hợp số.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> 13 là số nguyên tố vì chỉ chia hết cho 1 và 13. 15 là hợp số vì chia hết cho 1, 3, 5, 15. 17 là số nguyên tố.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Số 2 là số nguyên tố chẵn duy nhất. Tất cả các số nguyên tố khác đều lẻ. Đừng nghĩ số lẻ nào cũng là số nguyên tố (ví dụ: 9, 15, 21).</p>
      </div>
      <div class="idea">
        <p><strong>Bảng số nguyên tố nhỏ.</strong> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Số 1 không phải số nguyên tố và không phải hợp số. Đây là trường hợp đặc biệt.</li>
          <li>Số 2 là số nguyên tố chẵn duy nhất. Các số nguyên tố khác đều lẻ.</li>
          <li>Số lẻ không hẳn là số nguyên tố (9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 75, 77, 81, 85, 87, 91, 93, 95, 99).</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Số nào là số nguyên tố trong các số: 11, 12, 13? <em>— 11 và 13.</em></p>
        <p>Số nào là hợp số trong các số: 14, 15, 16? <em>— Cả ba đều là hợp số.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Kiểm tra 17 có phải số nguyên tố không. Bước 1: 17 > 1. Bước 2: kiểm tra chia hết cho 2, 3, 5. Bước 3: 17 không chia hết cho 2 (lẻ), 3 (1+7=8 không chia hết cho 3), 5 (không tận cùng 0 hoặc 5). Bước 4: không chia hết cho số nào, vậy 17 là số nguyên tố.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Viết số 12 thành tích các số nguyên tố. <em>— 12 = 2 × 2 × 3 = 2² × 3.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Số nguyên tố > 1 và chỉ có hai ước. Hợp số > 1 và có nhiều hơn hai ước. Số 1 không phải nguyên tố cũng không phải hợp số.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Số nào là số nguyên tố?", choices: ["1", "2", "4", "9"], correct: 1, hint: "2 chỉ chia hết cho 1 và 2.", explain: "2." },
      { type: "mc", prompt: "Số nào là hợp số?", choices: ["3", "5", "7", "9"], correct: 3, hint: "9 = 3 × 3 có nhiều ước.", explain: "9." },
      { type: "num", prompt: "Số nào là số nguyên tố trong các số: 13, 14, 15?", answer: "13", accept: ["13"], hint: "13 chỉ chia hết cho 1 và 13.", explain: "13." },
      { type: "num", prompt: "Số nào là hợp số trong các số: 17, 18, 19?", answer: "18", accept: ["18"], hint: "18 có nhiều ước: 1, 2, 3, 6, 9, 18.", explain: "18." },
      { type: "mc", prompt: "Số nguyên tố chẵn duy nhất là số nào?", choices: ["0", "2", "4", "Không có"], correct: 1, hint: "2 là số nguyên tố chẵn duy nhất.", explain: "2." },
      { type: "num", prompt: "Phân tích số 18 thành tích các số nguyên tố.", answer: "2 × 3²", accept: ["2 × 3²", "2*3^2", "2 × 3 × 3", "2*3*3"], hint: "18 = 2 × 9 = 2 × 3 × 3.", explain: "2 × 3²." },
      { type: "mc", prompt: "Số nào sau đây không phải số nguyên tố?", choices: ["11", "13", "17", "21"], correct: 3, hint: "21 = 3 × 7 là hợp số.", explain: "21." },
    ],
  },
  {
    id: "g6-b11",
    num: 11,
    chapter: 2,
    title: "Ước chung. Ước chung lớn nhất",
    summary: "Ước chung của hai hay nhiều số là ước của tất cả các số đó. ƯCLN là ước chung lớn nhất.",
    body: String.raw`
      <p><strong>Vì sao cần ước chung?</strong> Ước chung giúp ta tìm các số chia hết đồng thời cho nhiều số. ƯCLN giúp rút gọn phân số và giải nhiều bài toán chia đều.</p>
      <div class="definition">
        <p>Ước chung của hai hay nhiều số là ước của tất cả các số đó. Ước chung lớn nhất (ƯCLN) là số lớn nhất trong tập ước chung. Kí hiệu ƯCLN(a, b) hoặc (a, b).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Ước chung của 12 và 18 là 1, 2, 3, 6. ƯCLN(12, 18) = 6. Ước chung của 8 và 12 là 1, 2, 4. ƯCLN(8, 12) = 4.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> ƯCLN(24, 36, 48) = 12. ƯCLN(15, 25) = 5. Hai số có ƯCLN = 1 gọi là nguyên tố cùng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> ƯCLN(0, a) = a (với a ≠ 0). Đừng nghĩ ƯCLN(0, a) = 0. Nhưng ƯCLN(0, 0) không xác định.</p>
      </div>
      <div class="idea">
        <p><strong>Tìm ƯCLN bằng phân tích ra thừa số nguyên tố.</strong> Phân tích mỗi số ra thừa số nguyên tố, rồi lấy các thừa số chung với số mũ nhỏ nhất. Tích đó là ƯCLN.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>ƯCLN(0, a) = a với a ≠ 0. Đừng nhầm là 0.</li>
          <li> Hai số nguyên tố khác nhau luôn nguyên tố cùng nhau. Ví dụ: ƯCLN(5, 7) = 1.</li>
          <li>ƯCLN(a, a) = a. Hai số bằng nhau thì ƯCLN là chính số đó.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>ƯCLN(12, 18) bằng bao nhiêu? <em>— 6.</em></p>
        <p>ƯCLN(8, 12) bằng bao nhiêu? <em>— 4.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tìm ƯCLN(24, 36). Bước 1: phân tích 24 = 2³ × 3, 36 = 2² × 3². Bước 2: thừa số chung là 2 và 3. Bước 3: lấy số mũ nhỏ nhất: 2², 3¹. Bước 4: 2² × 3 = 4 × 3 = 12.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Rút gọn phân số 24/36. <em>— 24/36 = (24:12)/(36:12) = 2/3.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> ƯCLN là ước chung lớn nhất. Phân tích ra thừa số nguyên tố để tìm ƯCLN. Hai số nguyên tố cùng nhau khi ƯCLN = 1.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "ƯCLN(12, 18) bằng bao nhiêu?", answer: 6, hint: "Ước chung: 1, 2, 3, 6. Lớn nhất là 6.", explain: "6." },
      { type: "num", prompt: "ƯCLN(8, 12) bằng bao nhiêu?", answer: 4, hint: "Ước chung: 1, 2, 4. Lớn nhất là 4.", explain: "4." },
      { type: "num", prompt: "ƯCLN(15, 25) bằng bao nhiêu?", answer: 5, hint: "15 = 3×5, 25 = 5². Thừa số chung: 5.", explain: "5." },
      { type: "mc", prompt: "ƯCLN(7, 11) bằng bao nhiêu?", choices: ["1", "7", "11", "77"], correct: 0, hint: "7 và 11 là hai số nguyên tố khác nhau.", explain: "1." },
      { type: "num", prompt: "Rút gọn phân số 24/36.", answer: "2/3", accept: ["2/3"], hint: "ƯCLN(24,36)=12, 24:12=2, 36:12=3.", explain: "2/3." },
      { type: "num", prompt: "Hai số 8 và 9 có nguyên tố cùng nhau không?", answer: "Có", accept: ["Có", "có"], hint: "ƯCLN(8,9)=1 vì 8=2³, 9=3² không có thừa số chung.", explain: "Có, ƯCLN(8,9)=1." },
      { type: "num", prompt: "ƯCLN(0, 15) bằng bao nhiêu?", answer: 15, hint: "ƯCLN(0, a) = a với a ≠ 0.", explain: "15." },
    ],
  },
];

module.exports = { G6_CHAPTERS, G6_LESSONS };
