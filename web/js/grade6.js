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
  {
    id: "g6-b12",
    num: 12,
    chapter: 2,
    title: "Bội chung. Bội chung nhỏ nhất",
    summary: "Bội chung của hai hay nhiều số là bội của tất cả các số đó. BCNN là bội chung nhỏ nhất.",
    body: String.raw`
      <p><strong>Vì sao cần bội chung?</strong> Bội chung giúp ta tìm các số chia hết đồng thời cho nhiều số. BCNN thường dùng để quy đồng mẫu số và giải bài toán tìm thời điểm đồng bộ.</p>
      <div class="definition">
        <p>Bội chung của hai hay nhiều số là bội của tất cả các số đó. Bội chung nhỏ nhất (BCNN) là số nhỏ nhất khác 0 trong tập bội chung. Kí hiệu BCNN(a, b) hoặc [a, b].</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Bội chung của 3 và 4 là 12, 24, 36, ... BCNN(3, 4) = 12. Bội chung của 2 và 5 là 10, 20, 30, ... BCNN(2, 5) = 10.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> BCNN(6, 8, 12) = 24. BCNN(9, 12) = 36. BCNN(a, b) × ƯCLN(a, b) = a × b.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> BCNN(0, a) không xác định. Đừng nghĩ BCNN(0, a) = 0. Bội chung chỉ xét với số khác 0.</p>
      </div>
      <div class="idea">
        <p><strong>Tìm BCNN bằng phân tích ra thừa số nguyên tố.</strong> Phân tích mỗi số ra thừa số nguyên tố, rồi lấy các thừa số chung và riêng với số mũ lớn nhất. Tích đó là BCNN.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>BCNN(0, a) không xác định. Đừng viết kết quả là 0.</li>
          <li>BCNN(a, a) = a. Hai số bằng nhau thì BCNN là chính số đó.</li>
          <li>BCNN(a, b) × ƯCLN(a, b) = a × b. Đây là công thức quan trọng.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>BCNN(3, 4) bằng bao nhiêu? <em>— 12.</em></p>
        <p>BCNN(2, 5) bằng bao nhiêu? <em>— 10.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tìm BCNN(12, 18). Bước 1: phân tích 12 = 2² × 3, 18 = 2 × 3². Bước 2: thừa số chung là 2 và 3, thừa số riêng: không có. Bước 3: lấy số mũ lớn nhất: 2², 3². Bước 4: 2² × 3² = 4 × 9 = 36.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Hai bạn An và Bình cùng tập thể dục. An tập 3 ngày một lần, Bình tập 4 ngày một lần. Hỏi sau ít nhất bao nhiêu ngày họ cùng tập? <em>— BCNN(3, 4) = 12 ngày.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> BCNN là bội chung nhỏ nhất khác 0. Phân tích ra thừa số nguyên tố để tìm BCNN. BCNN(a,b) × ƯCLN(a,b) = a × b.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "BCNN(3, 4) bằng bao nhiêu?", answer: 12, hint: "Bội của 3: 3,6,9,12,15,... Bội của 4: 4,8,12,16,... Chung nhỏ nhất: 12.", explain: "12." },
      { type: "num", prompt: "BCNN(2, 5) bằng bao nhiêu?", answer: 10, hint: "Bội của 2: 2,4,6,8,10,... Bội của 5: 5,10,15,... Chung nhỏ nhất: 10.", explain: "10." },
      { type: "num", prompt: "BCNN(6, 8) bằng bao nhiêu?", answer: 24, hint: "6=2×3, 8=2³. Lấy 2³×3=24.", explain: "24." },
      { type: "num", prompt: "BCNN(9, 12) bằng bao nhiêu?", answer: 36, hint: "9=3², 12=2²×3. Lấy 2²×3²=36.", explain: "36." },
      { type: "num", prompt: "BCNN(5, 7) bằng bao nhiêu?", answer: 35, hint: "5 và 7 là hai số nguyên tố.", explain: "35." },
      { type: "mc", prompt: "BCNN(12, 18) × ƯCLN(12, 18) bằng bao nhiêu?", choices: ["12", "18", "216", "54"], correct: 2, hint: "BCNN × ƯCLN = a × b = 12 × 18 = 216.", explain: "216." },
      { type: "num", prompt: "BCNN(4, 6, 8) bằng bao nhiêu?", answer: 24, hint: "4=2², 6=2×3, 8=2³. Lấy 2³×3=24.", explain: "24." },
    ],
  },
  {
    id: "g6-b13",
    num: 13,
    chapter: 3,
    title: "Tập hợp các số nguyên",
    summary: "Số nguyên gồm số dương, số 0, và số âm. Kí hiệu Z.",
    body: String.raw`
      <p><strong>Vì sao cần số nguyên?</strong> Số tự nhiên không đủ để biểu thị các đại lượng có chiều (nhiệt độ, độ cao, thời gian trước/sau). Số nguyên giúp biểu thị cả hai chiều.</p>
      <div class="definition">
        <p>Tập hợp số nguyên kí hiệu là \(\mathbb{Z}\). Gồm: số nguyên dương (1, 2, 3, ...), số 0, và số nguyên âm (-1, -2, -3, ...).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> -5 là số nguyên âm. 0 là số nguyên. 7 là số nguyên dương. Tất cả đều thuộc tập \(\mathbb{Z}\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> -100 là số nguyên âm. 100 là số nguyên dương. Chúng là hai số đối nhau. | -100 | = | 100 | = 100.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Số 0 không phải số dương cũng không phải số âm. Đừng nhầm 0 là số dương.</p>
      </div>
      <div class="idea">
        <p><strong>Số đối.</strong> Hai số gọi là đối nhau nếu tổng của chúng bằng 0. Ví dụ: 5 và -5 là hai số đối nhau. Số đối của 0 là 0.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Số 0 không phải số dương cũng không phải số âm. Đây là điểm đặc biệt.</li>
          <li>| -a | = | a |. Giá trị tuyệt đối của số và số đối của nó bằng nhau.</li>
          <li>-(-a) = a. Âm của âm là dương.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Số nào là số nguyên trong các số: -3, 0, 5? <em>— Cả ba đều là số nguyên.</em></p>
        <p>Số đối của 7 là bao nhiêu? <em>— -7.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tìm số đối của -4. Bước 1: số đối là số cộng với -4 được 0. Bước 2: -4 + x = 0 ⇒ x = 4. Bước 3: số đối của -4 là 4.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Nhiệt độ buổi sáng là -2°C, buổi chiều tăng 5°C. Nhiệt độ buổi chiều là bao nhiêu? <em>— -2 + 5 = 3°C.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Số nguyên gồm số dương, 0, và số âm. Hai số đối nhau có tổng bằng 0. |a| = |-a|.</p>
      <figure id="fig-g6-b13-integers" class="figure" data-animation="g6-b13-integers">
        <svg width="600" height="120" viewBox="0 0 600 120">
          <line x1="50" y1="60" x2="550" y2="60" stroke="#333" stroke-width="2" stroke-dasharray="500" stroke-dashoffset="500" opacity="0"/>
          <polygon points="550,60 540,55 540,65" fill="#333" opacity="0"/>
          <g id="g6-b13-points">
            <circle cx="100" cy="60" r="4" fill="#333" opacity="0"/>
            <circle cx="200" cy="60" r="4" fill="#333" opacity="0"/>
            <circle cx="300" cy="60" r="4" fill="#333" opacity="0"/>
            <circle cx="400" cy="60" r="4" fill="#333" opacity="0"/>
            <circle cx="500" cy="60" r="4" fill="#333" opacity="0"/>
          </g>
          <g id="g6-b13-labels" opacity="0">
            <text x="100" y="90" font-size="14" text-anchor="middle">-2</text>
            <text x="200" y="90" font-size="14" text-anchor="middle">-1</text>
            <text x="300" y="90" font-size="14" text-anchor="middle">0</text>
            <text x="400" y="90" font-size="14" text-anchor="middle">1</text>
            <text x="500" y="90" font-size="14" text-anchor="middle">2</text>
          </g>
        </svg>
      </figure>
</div>
    `,
    exercises: [
      { type: "mc", prompt: "Số nào là số nguyên?", choices: ["-5", "0", "7", "Cả ba số trên"], correct: 3, hint: "Tất cả số nguyên dương, 0, và số âm đều là số nguyên.", explain: "Cả ba số đều là số nguyên." },
      { type: "num", prompt: "Số đối của 8 là bao nhiêu?", answer: -8, hint: "8 + (-8) = 0.", explain: "-8." },
      { type: "num", prompt: "Số đối của -3 là bao nhiêu?", answer: 3, hint: "-3 + 3 = 0.", explain: "3." },
      { type: "num", prompt: "| -7 | bằng bao nhiêu?", answer: 7, hint: "Giá trị tuyệt đối luôn dương hoặc bằng 0.", explain: "7." },
      { type: "num", prompt: "| -5 | + | 5 | bằng bao nhiêu?", answer: 10, hint: "|-5|=5, |5|=5, 5+5=10.", explain: "10." },
      { type: "num", prompt: "-(-4) bằng bao nhiêu?", answer: 4, hint: "Âm của âm là dương.", explain: "4." },
      { type: "mc", prompt: "Số 0 là", choices: ["Số dương", "Số âm", "Cả hai", "Không phải số dương cũng không phải số âm"], correct: 3, hint: "0 là trung tính, không phải dương cũng không phải âm.", explain: "Không phải số dương cũng không phải số âm." },
    ],
  },
  {
    id: "g6-b14",
    num: 14,
    chapter: 3,
    title: "Cộng hai số nguyên cùng dấu",
    summary: "Cộng hai số nguyên cùng dấu: cộng giá trị tuyệt đối, giữ dấu chung.",
    body: String.raw`
      <p><strong>Vì sao cần cộng số nguyên?</strong> Cộng số nguyên giúp tính toán với các đại lượng có chiều như nhiệt độ, độ cao, thời gian, lợi nhuận/lỗ.</p>
      <div class="definition">
        <p>Cộng hai số nguyên cùng dấu: cộng hai giá trị tuyệt đối của chúng, rồi đặt dấu chung trước kết quả. Ví dụ: (-3) + (-5) = -(3+5) = -8.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> (-2) + (-3) = -5. (-7) + (-4) = -11. 5 + 8 = 13. (-10) + (-15) = -25.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> (-20) + (-30) = -50. (-100) + (-200) = -300. 25 + 35 = 60. (-500) + (-400) = -900.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> (-5) + (-3) ≠ -2. Phải cộng giá trị tuyệt đối: 5+3=8, rồi đặt dấu âm: -8. Đừng nhầm với phép trừ.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nhớ.</strong> Cùng dấu thì cộng, khác dấu thì trừ. Kết quả mang dấu của số lớn hơn (trong phép cộng khác dấu).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>(-5) + (-3) = -8, không phải -2. Phải cộng giá trị tuyệt đối.</li>
          <li>0 + (-a) = -a. Cộng với 0 không đổi.</li>
          <li>|a + b| ≤ |a| + |b|. Bất đẳng thức tam giác.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>(-4) + (-6) bằng bao nhiêu? <em>— -10.</em></p>
        <p>7 + 9 bằng bao nhiêu? <em>— 16.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> (-8) + (-12). Bước 1: tìm giá trị tuyệt đối: 8 và 12. Bước 2: cộng 8+12=20. Bước 3: đặt dấu âm: -20. Kết quả: -20.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Nhiệt độ buổi sáng là -3°C, buổi chiều giảm thêm 5°C. Nhiệt độ buổi chiều là bao nhiêu? <em>— (-3) + (-5) = -8°C.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Cùng dấu thì cộng giá trị tuyệt đối, giữ dấu chung. 0 + a = a. |a + b| ≤ |a| + |b|.</p>
      <figure id="fig-g6-b14-addition-same-sign" class="figure" data-animation="g6-b14-addition-same-sign">
        <svg width="600" height="120" viewBox="0 0 600 120">
          <line x1="50" y1="60" x2="550" y2="60" stroke="#333" stroke-width="2" stroke-dasharray="500" stroke-dashoffset="500" opacity="0"/>
          <polygon points="550,60 540,55 540,65" fill="#333" opacity="0"/>
          <circle cx="150" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="150" y="90" font-size="14" text-anchor="middle" opacity="0">-3</text>
          <circle cx="250" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="250" y="90" font-size="14" text-anchor="middle" opacity="0">-2</text>
          <circle cx="350" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="350" y="90" font-size="14" text-anchor="middle" opacity="0">-1</text>
          <circle cx="450" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="450" y="90" font-size="14" text-anchor="middle" opacity="0">0</text>
          <circle cx="500" cy="60" r="6" fill="#FC6255" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="500" y="90" font-size="14" text-anchor="middle" opacity="0">-5</text>
          <path d="M 250 60 L 350 60" stroke="#58C4DD" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="100" opacity="0" class="arrow"/>
          <path d="M 350 60 L 450 60" stroke="#58C4DD" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="100" opacity="0" class="arrow"/>
          <path d="M 150 60 L 500 60" stroke="#83C167" stroke-width="2" stroke-dasharray="350" stroke-dashoffset="350" opacity="0" class="result-arrow"/>
        </svg>
      </figure>
</div>
    `,
    exercises: [
      { type: "num", prompt: "(-4) + (-6) bằng bao nhiêu?", answer: -10, hint: "Cộng 4+6=10, đặt dấu âm: -10.", explain: "-10." },
      { type: "num", prompt: "(-7) + (-3) bằng bao nhiêu?", answer: -10, hint: "Cộng 7+3=10, đặt dấu âm: -10.", explain: "-10." },
      { type: "num", prompt: "12 + 18 bằng bao nhiêu?", answer: 30, hint: "Cộng thông thường.", explain: "30." },
      { type: "num", prompt: "(-20) + (-30) bằng bao nhiêu?", answer: -50, hint: "Cộng 20+30=50, đặt dấu âm: -50.", explain: "-50." },
      { type: "num", prompt: "(-100) + (-200) bằng bao nhiêu?", answer: -300, hint: "Cộng 100+200=300, đặt dấu âm: -300.", explain: "-300." },
      { type: "num", prompt: "0 + (-5) bằng bao nhiêu?", answer: -5, hint: "Cộng với 0 không đổi.", explain: "-5." },
      { type: "num", prompt: "|(-3) + (-7)| bằng bao nhiêu?", answer: 10, hint: "(-3)+(-7)=-10, |-10|=10.", explain: "10." },
    ],
  },
  {
    id: "g6-b15",
    num: 15,
    chapter: 3,
    title: "Cộng hai số nguyên khác dấu",
    summary: "Cộng hai số nguyên khác dấu: trừ giá trị tuyệt đối, kết quả mang dấu của số có giá trị tuyệt đối lớn hơn.",
    body: String.raw`
      <p><strong>Vì sao cần cộng số nguyên khác dấu?</strong> Đây là phép cộng phổ biến nhất với số nguyên, ví dụ: lợi nhuận và lỗ, nhiệt độ tăng và giảm, thời gian trước và sau.</p>
      <div class="definition">
        <p>Cộng hai số nguyên khác dấu: trừ giá trị tuyệt đối của số lớn hơn cho giá trị tuyệt đối của số nhỏ hơn, rồi đặt dấu của số có giá trị tuyệt đối lớn hơn trước kết quả.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> (-5) + 3 = -2. 7 + (-4) = 3. (-10) + 6 = -4. 8 + (-5) = 3.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> (-20) + 15 = -5. 30 + (-25) = 5. (-100) + 80 = -20. 50 + (-45) = 5.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> (-8) + 5 ≠ 3. Số có giá trị tuyệt đối lớn hơn là -8, nên kết quả mang dấu âm: -3. Đừng nhầm với phép cộng số dương.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nhớ.</strong> Khác dấu thì trừ, kết quả mang dấu của số lớn hơn. Ví dụ: (-15) + 10 = -5 (vì 15 > 10 và -15 mang dấu âm).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>(-8) + 5 = -3, không phải 3. Kết quả mang dấu của số có giá trị tuyệt đối lớn hơn.</li>
          <li>5 + (-5) = 0. Hai số đối nhau thì tổng bằng 0.</li>
          <li>|a + (-b)| = |a - b|. Công thức này thường dùng.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>(-7) + 4 bằng bao nhiêu? <em>— -3.</em></p>
        <p>9 + (-6) bằng bao nhiêu? <em>— 3.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> (-12) + 7. Bước 1: so sánh giá trị tuyệt đối: 12 > 7. Bước 2: trừ 12-7=5. Bước 3: số -12 có giá trị tuyệt đối lớn hơn và mang dấu âm. Kết quả: -5.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Bạn An có 50 nghìn, mua sách hết 30 nghìn. Số tiền còn lại là bao nhiêu? <em>— 50 + (-30) = 20 nghìn.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Khác dấu thì trừ giá trị tuyệt đối, kết quả mang dấu của số lớn hơn. a + (-a) = 0. |a + (-b)| = |a - b|.</p>
      <figure id="fig-g6-b15-addition-different-signs" class="figure" data-animation="g6-b15-addition-different-signs">
        <svg width="600" height="120" viewBox="0 0 600 120">
          <line x1="50" y1="60" x2="550" y2="60" stroke="#333" stroke-width="2" stroke-dasharray="500" stroke-dashoffset="500" opacity="0"/>
          <polygon points="550,60 540,55 540,65" fill="#333" opacity="0"/>
          <circle cx="150" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="150" y="90" font-size="14" text-anchor="middle" opacity="0">-3</text>
          <circle cx="350" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="350" y="90" font-size="14" text-anchor="middle" opacity="0">2</text>
          <circle cx="300" cy="60" r="6" fill="#FC6255" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="300" y="90" font-size="14" text-anchor="middle" opacity="0">-1</text>
          <path d="M 150 60 L 350 60" stroke="#58C4DD" stroke-width="2" stroke-dasharray="200" stroke-dashoffset="200" opacity="0" class="arrow"/>
          <path d="M 350 60 L 300 60" stroke="#83C167" stroke-width="2" stroke-dasharray="50" stroke-dashoffset="50" opacity="0" class="result-arrow"/>
        </svg>
      </figure>
</div>
    `,
    exercises: [
      { type: "num", prompt: "(-7) + 4 bằng bao nhiêu?", answer: -3, hint: "7-4=3, số lớn hơn là -7 nên kết quả âm: -3.", explain: "-3." },
      { type: "num", prompt: "9 + (-6) bằng bao nhiêu?", answer: 3, hint: "9-6=3, số lớn hơn là 9 nên kết quả dương: 3.", explain: "3." },
      { type: "num", prompt: "(-15) + 10 bằng bao nhiêu?", answer: -5, hint: "15-10=5, số lớn hơn là -15 nên kết quả âm: -5.", explain: "-5." },
      { type: "num", prompt: "20 + (-25) bằng bao nhiêu?", answer: -5, hint: "25-20=5, số lớn hơn là -25 nên kết quả âm: -5.", explain: "-5." },
      { type: "num", prompt: "(-100) + 120 bằng bao nhiêu?", answer: 20, hint: "120-100=20, số lớn hơn là 120 nên kết quả dương: 20.", explain: "20." },
      { type: "num", prompt: "8 + (-8) bằng bao nhiêu?", answer: 0, hint: "Hai số đối nhau thì tổng bằng 0.", explain: "0." },
      { type: "num", prompt: "(-50) + 30 bằng bao nhiêu?", answer: -20, hint: "50-30=20, số lớn hơn là -50 nên kết quả âm: -20.", explain: "-20." },
    ],
  },
  {
    id: "g6-b16",
    num: 16,
    chapter: 3,
    title: "Tính chất của phép cộng số nguyên",
    summary: "Giao hoán: a + b = b + a. Kết hợp: (a + b) + c = a + (b + c). Cộng với 0: a + 0 = a.",
    body: String.raw`
      <p><strong>Vì sao cần tính chất?</strong> Các tính chất của phép cộng giúp ta tính nhẩm nhanh, biến đổi biểu thức, và giải toán một cách linh hoạt.</p>
      <div class="definition">
        <p>Tính chất giao hoán: \(a + b = b + a\). Tính chất kết hợp: \((a + b) + c = a + (b + c)\). Cộng với 0: \(a + 0 = a\). Tổng của hai số đối nhau bằng 0: \(a + (-a) = 0\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> (-3) + 5 = 5 + (-3) = 2. (-2) + (-3) = (-3) + (-2) = -5. 7 + 0 = 7. (-5) + 5 = 0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> (-12) + 15 + (-8) = (-12) + (-8) + 15 = (-20) + 15 = -5. Sử dụng giao hoán và kết hợp để tính nhanh.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> (-5) + 3 ≠ 3 + (-5) là sai. Phép cộng số nguyên cũng có tính chất giao hoán như số tự nhiên. Đừng nhầm với phép trừ.</p>
      </div>
      <div class="idea">
        <p><strong>Tính chất quan trọng.</strong> Giao hoán và kết hợp giúp hoán đổi thứ tự và nhóm số để tính nhẩm nhanh. Ví dụ: 25 + (-17) + (-25) = (25 + (-25)) + (-17) = 0 + (-17) = -17.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Phép cộng số nguyên có đầy đủ tính chất giao hoán và kết hợp như số tự nhiên.</li>
          <li>Phép trừ KHÔNG có tính chất giao hoán: a - b ≠ b - a.</li>
          <li>Phép trừ KHÔNG có tính chất kết hợp: (a - b) - c ≠ a - (b - c).</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>(-3) + 5 và 5 + (-3) có bằng nhau không? <em>— Bằng nhau (giao hoán).</em></p>
        <p>((-2) + 3) + 4 và (-2) + (3 + 4) có bằng nhau không? <em>— Bằng nhau (kết hợp).</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tính (-15) + 20 + (-5) + 10 theo cách thuận tiện. Bước 1: nhóm (-15) + (-5) = -20 và 20 + 10 = 30. Bước 2: -20 + 30 = 10. Kết quả: 10.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Một công ty có lợi nhuận 50 triệu, lỗ 30 triệu, lợi nhuận 20 triệu, lỗ 40 triệu trong 4 quý. Lợi nhuận cả năm là bao nhiêu? <em>— 50 + (-30) + 20 + (-40) = (50+20) + (-30-40) = 70 + (-70) = 0.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Phép cộng số nguyên có tính chất giao hoán và kết hợp. a + 0 = a. a + (-a) = 0.</p>
      <figure id="fig-g6-b16-commutative" class="figure" data-animation="g6-b16-commutative">
        <svg width="600" height="140" viewBox="0 0 600 140">
          <!-- Top: a + b -->
          <line x1="50" y1="40" x2="350" y2="40" stroke="#333" stroke-width="2" stroke-dasharray="300" stroke-dashoffset="300" opacity="0"/>
          <circle cx="150" cy="40" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="150" y="70" font-size="14" text-anchor="middle" opacity="0">a</text>
          <circle cx="250" cy="40" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="250" y="70" font-size="14" text-anchor="middle" opacity="0">b</text>
          <path d="M 150 40 L 250 40" stroke="#58C4DD" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="100" opacity="0" class="arrow-a-b"/>
          <text x="300" y="70" font-size="14" opacity="0" class="text-sum">a + b</text>
          
          <!-- Bottom: b + a -->
          <line x1="50" y1="100" x2="350" y2="100" stroke="#333" stroke-width="2" stroke-dasharray="300" stroke-dashoffset="300" opacity="0"/>
          <circle cx="150" cy="100" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="150" y="130" font-size="14" text-anchor="middle" opacity="0">b</text>
          <circle cx="250" cy="100" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="250" y="130" font-size="14" text-anchor="middle" opacity="0">a</text>
          <path d="M 150 100 L 250 100" stroke="#58C4DD" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="100" opacity="0" class="arrow-b-a"/>
          <text x="300" y="130" font-size="14" opacity="0" class="text-sum">b + a</text>
          
          <!-- Equality sign -->
          <line x1="450" y1="55" x2="450" y2="85" stroke="#333" stroke-width="2" opacity="0"/>
        </svg>
      </figure>
</div>
    `,
    exercises: [
      { type: "num", prompt: "(-3) + 5 và 5 + (-3) có bằng nhau không?", answer: "Có", accept: ["Có", "có"], hint: "Phép cộng có tính chất giao hoán.", explain: "Có, bằng nhau đều là 2." },
      { type: "num", prompt: "((-2) + 3) + 4 bằng bao nhiêu?", answer: 5, hint: "(-2+3)=1, 1+4=5.", explain: "5." },
      { type: "num", prompt: "(-2) + (3 + 4) bằng bao nhiêu?", answer: 5, hint: "(3+4)=7, -2+7=5.", explain: "5." },
      { type: "num", prompt: "Tính 25 + (-17) + (-25) theo cách thuận tiện.", answer: -17, hint: "(25+(-25)) + (-17) = 0 + (-17) = -17.", explain: "-17." },
      { type: "num", prompt: "Tính (-12) + 18 + (-8) + 12 theo cách thuận tiện.", answer: 10, hint: "((-12)+12) + (18+(-8)) = 0 + 10 = 10.", explain: "10." },
      { type: "num", prompt: "Tổng của một số và số đối của nó bằng bao nhiêu?", answer: 0, hint: "a + (-a) = 0.", explain: "0." },
      { type: "num", prompt: "Cộng một số với 0 thì được gì?", answer: "Chính số đó", accept: ["Chính số đó", "chính số đó"], hint: "a + 0 = a.", explain: "Chính số đó." },
    ],
  },
  {
    id: "g6-b17",
    num: 17,
    chapter: 3,
    title: "Phép trừ hai số nguyên",
    summary: "a - b = a + (-b). Trừ một số là cộng với số đối của nó.",
    body: String.raw`
      <p><strong>Vì sao cần trừ số nguyên?</strong> Phép trừ giúp tính hiệu, độ chênh lệch, và nhiều bài toán thực tế như nhiệt độ, độ cao, lợi nhuận/lỗ.</p>
      <div class="definition">
        <p>Phép trừ số nguyên: \(a - b = a + (-b)\). Nghĩa là trừ một số là cộng với số đối của nó.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> 5 - 3 = 5 + (-3) = 2. (-7) - 4 = (-7) + (-4) = -11. 8 - (-5) = 8 + 5 = 13. (-10) - (-3) = (-10) + 3 = -7.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> 20 - (-15) = 20 + 15 = 35. (-50) - 30 = (-50) + (-30) = -80. 100 - 75 = 25. (-25) - (-25) = 0.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> 8 - (-5) ≠ 3. Phải cộng với số đối: 8 + 5 = 13. Đừng nhầm dấu trừ kép.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nhớ.</strong> Trừ là cộng với số đối. Ví dụ: a - (-b) = a + b. Trừ một số âm là cộng với số dương.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>8 - (-5) = 13, không phải 3. Phải cộng với số đối.</li>
          <li>Phép trừ KHÔNG có tính chất giao hoán: a - b ≠ b - a.</li>
          <li>Phép trừ KHÔNG có tính chất kết hợp: (a - b) - c ≠ a - (b - c).</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>12 - 5 bằng bao nhiêu? <em>— 7.</em></p>
        <p>12 - (-5) bằng bao nhiêu? <em>— 17.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> (-8) - 5. Bước 1: đổi dấu số trừ: 5 thành -5. Bước 2: (-8) + (-5) = -13. Kết quả: -13.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Nhiệt độ buổi sáng là -3°C, buổi chiều là 5°C. Độ chênh lệch nhiệt độ là bao nhiêu? <em>— 5 - (-3) = 5 + 3 = 8°C.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> a - b = a + (-b). Trừ là cộng với số đối. Phép trừ không có tính chất giao hoán và kết hợp.</p>
      <figure id="fig-g6-b17-subtraction" class="figure" data-animation="g6-b17-subtraction">
        <svg width="600" height="120" viewBox="0 0 600 120">
          <line x1="50" y1="60" x2="550" y2="60" stroke="#333" stroke-width="2" stroke-dasharray="500" stroke-dashoffset="500" opacity="0"/>
          <polygon points="550,60 540,55 540,65" fill="#333" opacity="0"/>
          <circle cx="200" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="200" y="90" font-size="14" text-anchor="middle" opacity="0">5</text>
          <circle cx="350" cy="60" r="5" fill="#333" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="350" y="90" font-size="14" text-anchor="middle" opacity="0">3</text>
          <circle cx="275" cy="60" r="6" fill="#FC6255" stroke="#333" stroke-width="2" opacity="0"/>
          <text x="275" y="90" font-size="14" text-anchor="middle" opacity="0">2</text>
          <path d="M 200 60 L 350 60" stroke="#58C4DD" stroke-width="2" stroke-dasharray="150" stroke-dashoffset="150" opacity="0" class="arrow-subtrahend"/>
          <path d="M 350 60 L 275 60" stroke="#83C167" stroke-width="2" stroke-dasharray="75" stroke-dashoffset="75" opacity="0" class="arrow-result"/>
        </svg>
      </figure>
</div>
    `,
    exercises: [
      { type: "num", prompt: "12 - 5 bằng bao nhiêu?", answer: 7, hint: "12 + (-5) = 7.", explain: "7." },
      { type: "num", prompt: "12 - (-5) bằng bao nhiêu?", answer: 17, hint: "12 + 5 = 17.", explain: "17." },
      { type: "num", prompt: "(-8) - 5 bằng bao nhiêu?", answer: -13, hint: "(-8) + (-5) = -13.", explain: "-13." },
      { type: "num", prompt: "(-8) - (-5) bằng bao nhiêu?", answer: -3, hint: "(-8) + 5 = -3.", explain: "-3." },
      { type: "num", prompt: "20 - (-15) bằng bao nhiêu?", answer: 35, hint: "20 + 15 = 35.", explain: "35." },
      { type: "num", prompt: "(-50) - 30 bằng bao nhiêu?", answer: -80, hint: "(-50) + (-30) = -80.", explain: "-80." },
      { type: "num", prompt: "(-25) - (-25) bằng bao nhiêu?", answer: 0, hint: "(-25) + 25 = 0.", explain: "0." },
    ],
  },
  {
    id: "g6-b18",
    num: 18,
    chapter: 4,
    title: "Tam giác cân. Tam giác đều",
    summary: "Tam giác cân: hai cạnh bằng nhau. Tam giác đều: ba cạnh bằng nhau.",
    body: String.raw`
      <p><strong>Vì sao cần tam giác cân đều?</strong> Tam giác cân và đều có nhiều tính chất đặc biệt giúp giải toán hình học và ứng dụng trong thực tế (kiến trúc, thiết kế).</p>
      <div class="definition">
        <p>Tam giác cân: có hai cạnh bằng nhau. Hai góc ở đáy bằng nhau. Tam giác đều: có ba cạnh bằng nhau, ba góc bằng nhau và đều bằng \(60^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Tam giác ABC có AB = AC = 5 cm, BC = 6 cm là tam giác cân. Tam giác DEF có DE = EF = FD = 4 cm là tam giác đều.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác cân ABC (AB = AC) có \(\widehat{B} = 50^\circ\). Khi đó \(\widehat{C} = 50^\circ\) và \(\widehat{A} = 80^\circ\) (vì tổng bằng 180°). Tam giác đều luôn có ba góc 60°.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Tam giác đều là tam giác cân, nhưng tam giác cân chưa chắc là tam giác đều. Đừng nhầm: tam giác đều có ba cạnh bằng nhau, tam giác cân chỉ có hai cạnh bằng nhau.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nhận biết.</strong> Tam giác cân: hai cạnh bằng nhau hoặc hai góc bằng nhau. Tam giác đều: ba cạnh bằng nhau hoặc ba góc bằng nhau (mỗi góc 60°).</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Tam giác đều ⇒ tam giác cân, nhưng tam giác cân ≠ tam giác đều.</li>
          <li>Trong tam giác đều, mọi đường cao, trung tuyến, phân giác đều trùng nhau.</li>
          <li>Tổng ba góc trong tam giác luôn bằng 180°, không phụ thuộc vào loại tam giác.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p> Tam giác có hai cạnh bằng 5 cm và 5 cm, cạnh thứ ba bằng 6 cm là tam giác gì? <em>— Tam giác cân.</em></p>
        <p> Tam giác có ba cạnh đều bằng 4 cm là tam giác gì? <em>— Tam giác đều.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tam giác ABC cân tại A có AB = 7 cm, chu vi bằng 20 cm. Tính BC. Bước 1: AB = AC = 7 cm (tam giác cân). Bước 2: AB + AC + BC = 20. Bước 3: 7 + 7 + BC = 20 ⇒ BC = 6 cm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Tam giác đều ABC có chu vi 24 cm. Tính độ dài mỗi cạnh. <em>— Mỗi cạnh = 24 : 3 = 8 cm.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tam giác cân: hai cạnh bằng nhau, hai góc đáy bằng nhau. Tam giác đều: ba cạnh bằng nhau, ba góc bằng 60°.</p></div>
    `,
    exercises: [
      { type: "mc", prompt: "Tam giác có hai cạnh bằng nhau là", choices: ["Tam giác đều", "Tam giác cân", "Tam giác vuông", "Tam giác thường"], correct: 1, hint: "Tam giác cân có hai cạnh bằng nhau.", explain: "Tam giác cân." },
      { type: "num", prompt: "Tam giác đều có chu vi 30 cm. Mỗi cạnh bằng bao nhiêu?", answer: 10, hint: "30 : 3 = 10.", explain: "10 cm." },
      { type: "num", prompt: "Tam giác cân có góc ở đỉnh bằng 40°. Góc ở đáy bằng bao nhiêu?", answer: 70, hint: "Góc đáy = (180 - 40) / 2 = 70.", explain: "70°." },
      { type: "mc", prompt: "Tam giác đều có bao nhiêu trục đối xứng?", choices: ["1", "2", "3", "6"], correct: 3, hint: "Mỗi đường cao là một trục đối xứng.", explain: "3 trục đối xứng." },
      { type: "num", prompt: "Tam giác cân ABC (AB = AC) có AB = 8 cm, BC = 6 cm. Chu vi bằng bao nhiêu?", answer: 22, hint: "AB + AC + BC = 8 + 8 + 6 = 22.", explain: "22 cm." },
      { type: "mc", prompt: "Tam giác nào có ba góc bằng nhau?", choices: ["Tam giác cân", "Tam giác đều", "Tam giác vuông", "Tam giác tù"], correct: 1, hint: "Tam giác đều có ba góc bằng 60°.", explain: "Tam giác đều." },
      { type: "num", prompt: "Tam giác đều ABC có cạnh 5 cm. Tính chu vi.", answer: 15, hint: "5 × 3 = 15.", explain: "15 cm." },
    ],
  },
  {
    id: "g6-b19",
    num: 19,
    chapter: 4,
    title: "Hình vuông. Hình chữ nhật",
    summary: "Hình vuông: bốn cạnh bằng nhau, bốn góc vuông. Hình chữ nhật: bốn góc vuông, hai cặp cạnh bằng nhau.",
    body: String.raw`
      <p><strong>Vì sao cần hình vuông chữ nhật?</strong> Đây là hai hình cơ bản nhất trong hình học phẳng, dùng rộng rãi trong kiến trúc, thiết kế, và đời sống.</p>
      <div class="definition">
        <p>Hình vuông: bốn cạnh bằng nhau, bốn góc bằng \(90^\circ\), hai đường chéo bằng nhau và vuông góc với nhau. Hình chữ nhật: bốn góc bằng \(90^\circ\), hai cặp cạnh đối bằng nhau, hai đường chéo bằng nhau.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình vuông ABCD có AB = BC = CD = DA = 5 cm. Hình chữ nhật MNPQ có MN = PQ = 8 cm, NP = QM = 5 cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hình vuông cạnh 6 cm có chu vi 24 cm và diện tích 36 cm². Hình chữ nhật chiều dài 10 cm, chiều rộng 6 cm có chu vi 32 cm và diện tích 60 cm².</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hình vuông là hình chữ nhật đặc biệt (có chiều dài = chiều rộng). Nhưng hình chữ nhật chưa chắc là hình vuông. Đừng nhầm giữa hai hình.</p>
      </div>
      <div class="idea">
        <p><strong>Công thức.</strong> Hình vuông: chu vi = 4 × cạnh, diện tích = cạnh². Hình chữ nhật: chu vi = 2 × (dài + rộng), diện tích = dài × rộng.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Hình vuông là hình chữ nhật đặc biệt, nhưng ngược lại không đúng.</li>
          <li>Chu vi có đơn vị độ dài (cm, m), diện tích có đơn vị vuông (cm², m²).</li>
          <li>Trong hình vuông, đường chéo dài hơn cạnh: đường chéo = cạnh × √2.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình vuông cạnh 4 cm có chu vi bao nhiêu? <em>— 16 cm.</em></p>
        <p>Hình chữ nhật dài 8 cm, rộng 5 cm có diện tích bao nhiêu? <em>— 40 cm².</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tính chu vi và diện tích hình chữ nhật có chiều dài 12 cm, chiều rộng 7 cm. Bước 1: chu vi = 2 × (12 + 7) = 38 cm. Bước 2: diện tích = 12 × 7 = 84 cm².</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Một hình vuông có diện tích 64 cm². Tính chu vi. <em>— Cạnh = √64 = 8 cm, chu vi = 8 × 4 = 32 cm.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hình vuông: 4 cạnh bằng nhau, 4 góc vuông. Hình chữ nhật: 4 góc vuông, hai cặp cạnh bằng nhau.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hình vuông cạnh 6 cm có chu vi bao nhiêu?", answer: 24, hint: "6 × 4 = 24.", explain: "24 cm." },
      { type: "num", prompt: "Hình chữ nhật dài 10 cm, rộng 6 cm có diện tích bao nhiêu?", answer: 60, hint: "10 × 6 = 60.", explain: "60 cm²." },
      { type: "num", prompt: "Hình vuông có chu vi 40 cm. Tính diện tích.", answer: 100, hint: "Cạnh = 40 : 4 = 10, diện tích = 10 × 10 = 100.", explain: "100 cm²." },
      { type: "mc", prompt: "Hình nào có bốn góc vuông?", choices: ["Hình vuông", "Hình chữ nhật", "Cả hai hình trên", "Không có"], correct: 2, hint: "Cả hình vuông và chữ nhật đều có 4 góc vuông.", explain: "Cả hai hình trên." },
      { type: "num", prompt: "Hình chữ nhật dài 15 cm, chiều rộng bằng 2/3 chiều dài. Tính diện tích.", answer: 150, hint: "Rộng = 15 × 2/3 = 10, diện tích = 15 × 10 = 150.", explain: "150 cm²." },
      { type: "num", prompt: "Hình vuông cạnh 8 cm có đường chéo bằng bao nhiêu? (Gần đúng)", answer: 11.3, accept: ["11.3", "11", "12"], hint: "Đường chéo = cạnh × √2 ≈ 8 × 1.414 = 11.3.", explain: "Gần đúng 11.3 cm." },
      { type: "mc", prompt: "Hình chữ nhật có chiều dài gấp đôi chiều rộng thì", choices: ["Là hình vuông", "Không phải hình vuông", "Luôn là hình vuông", "Không xác định"], correct: 1, hint: "Hình vuông cần dài = rộng.", explain: "Không phải hình vuông." },
    ],
  },
  {
    id: "g6-b20",
    num: 20,
    chapter: 4,
    title: "Hình thoi. Hình bình hành",
    summary: "Hình thoi: bốn cạnh bằng nhau. Hình bình hành: hai cặp cạnh đối song song và bằng nhau.",
    body: String.raw`
      <p><strong>Vì sao cần hình thoi hình bình hành?</strong> Đây là các hình đặc biệt có tính chất đối xứng và song song, quan trọng trong hình học và ứng dụng thực tế.</p>
      <div class="definition">
        <p>Hình thoi: bốn cạnh bằng nhau, hai đường chéo vuông góc với nhau và cắt nhau tại trung điểm. Hình bình hành: hai cặp cạnh đối song song và bằng nhau, hai đường chéo cắt nhau tại trung điểm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình thoi ABCD có AB = BC = CD = DA = 5 cm. Hình bình hành MNPQ có MN ∥ PQ, MN = PQ = 8 cm, MQ ∥ NP, MQ = NP = 6 cm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hình thoi có đường chéo d1 = 6 cm, d2 = 8 cm. Diện tích = (6 × 8) / 2 = 24 cm². Hình bình hành có đáy 10 cm, chiều cao 5 cm có diện tích 50 cm².</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Hình vuông là hình thoi đặc biệt (có hai đường chéo bằng nhau). Hình chữ nhật là hình bình hành đặc biệt (có một góc vuông). Nhưng hình thoi ≠ hình bình hành thông thường.</p>
      </div>
      <div class="idea">
        <p><strong>Công thức.</strong> Hình thoi: diện tích = (d1 × d2) / 2. Hình bình hành: chu vi = 2 × (a + b), diện tích = đáy × chiều cao.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Hình thoi chỉ cần bốn cạnh bằng nhau (góc không nhất thiết vuông).</li>
          <li>Hình bình hành cần hai cặp cạnh đối song song (không cần góc vuông).</li>
          <li>Diện tích hình thoi dùng tích hai đường chéo, không phải tích hai cạnh.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình thoi có đường chéo 8 cm và 6 cm. Diện tích bằng bao nhiêu? <em>— 24 cm².</em></p>
        <p>Hình bình hành có đáy 12 cm, chiều cao 5 cm. Diện tích bằng bao nhiêu? <em>— 60 cm².</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tính diện tích hình thoi có đường chéo d1 = 10 cm, d2 = 8 cm. Bước 1: diện tích = (d1 × d2) / 2. Bước 2: (10 × 8) / 2 = 40 cm².</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Hình bình hành có chu vi 40 cm, một cạnh bằng 12 cm. Tính cạnh kề. <em>— Gọi cạnh kề là x: 2 × (12 + x) = 40 ⇒ x = 8 cm.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hình thoi: 4 cạnh bằng nhau. Diện tích = (d1 × d2) / 2. Hình bình hành: hai cặp cạnh đối song song. Diện tích = đáy × chiều cao.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hình thoi có đường chéo 10 cm và 6 cm. Diện tích bằng bao nhiêu?", answer: 30, hint: "(10 × 6) / 2 = 30.", explain: "30 cm²." },
      { type: "num", prompt: "Hình bình hành có đáy 15 cm, chiều cao 8 cm. Diện tích bằng bao nhiêu?", answer: 120, hint: "15 × 8 = 120.", explain: "120 cm²." },
      { type: "num", prompt: "Hình thoi có diện tích 48 cm², đường chéo d1 = 8 cm. Tính d2.", answer: 12, hint: "(8 × d2) / 2 = 48 ⇒ d2 = 12.", explain: "12 cm." },
      { type: "mc", prompt: "Hình nào có hai cặp cạnh đối song song?", choices: ["Hình thoi", "Hình bình hành", "Cả hai hình trên", "Không có"], correct: 2, hint: "Cả hình thoi và bình hành đều có hai cặp cạnh đối song song.", explain: "Cả hai hình trên." },
      { type: "num", prompt: "Hình bình hành có chu vi 36 cm, một cạnh bằng 10 cm. Tính cạnh kề.", answer: 8, hint: "2 × (10 + x) = 36 ⇒ x = 8.", explain: "8 cm." },
      { type: "num", prompt: "Hình thoi có bốn cạnh đều bằng 7 cm. Chu vi bằng bao nhiêu?", answer: 28, hint: "7 × 4 = 28.", explain: "28 cm." },
      { type: "mc", prompt: "Hình vuông là hình thoi", choices: ["Đúng", "Sai", "Chỉ khi có góc vuông", "Không xác định"], correct: 0, hint: "Hình vuông có bốn cạnh bằng nhau nên là hình thoi đặc biệt.", explain: "Đúng." },
    ],
  },
  {
    id: "g6-b21",
    num: 21,
    chapter: 4,
    title: "Hình lục giác đều",
    summary: "Hình lục giác đều: sáu cạnh bằng nhau, sáu góc bằng nhau và đều bằng 120°.",
    body: String.raw`
      <p><strong>Vì sao cần hình lục giác đều?</strong> Hình lục giác đều xuất hiện nhiều trong tự nhiên (tổ ong, tinh thể) và ứng dụng trong thiết kế.</p>
      <div class="definition">
        <p>Hình lục giác đều: sáu cạnh bằng nhau, sáu góc bằng nhau và đều bằng \(120^\circ\), có sáu trục đối xứng. Tâm đối xứng là giao điểm các đường chéo chính.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình lục giác đều ABCDEF có AB = BC = CD = DE = EF = FA = 4 cm. Mỗi góc bằng 120°.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hình lục giác đều cạnh a có chu vi 6a. Nếu cạnh bằng 5 cm, chu vi bằng 30 cm. Tổng các góc trong bằng \((6-2) \times 180^\circ = 720^\circ\).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không phải hình lục giác nào cũng đều. Hình lục giác đều yêu cầu sáu cạnh bằng nhau VÀ sáu góc bằng nhau. Hình lục giác thường không có tính chất đối xứng mạnh như vậy.</p>
      </div>
      <div class="idea">
        <p><strong>Cách vẽ.</strong> Vẽ đường tròn, đặt compa bằng bán kính, chia đường tròn thành sáu phần bằng nhau, nối các điểm chia.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Hình lục giác đều khác với hình lục giác thường.</li>
          <li>Tổng góc trong lục giác = 720°, không phải 360°.</li>
          <li>Hình lục giác đều có sáu trục đối xứng (ba qua đỉnh đối diện, ba qua trung điểm cạnh đối diện).</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình lục giác đều cạnh 6 cm có chu vi bao nhiêu? <em>— 36 cm.</em></p>
        <p>Mỗi góc trong hình lục giác đều bằng bao nhiêu? <em>— 120°.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Tính tổng các góc trong hình lục giác đều. Bước 1: công thức tổng góc = (n - 2) × 180°. Bước 2: với n = 6, tổng = 4 × 180° = 720°. Bước 3: mỗi góc = 720° / 6 = 120°.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Một tổ ong có tổ hình lục giác đều cạnh 2 cm. Tính chu vi tổ. <em>— 2 × 6 = 12 cm.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Hình lục giác đều: 6 cạnh bằng nhau, 6 góc bằng 120°, tổng góc = 720°.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hình lục giác đều cạnh 5 cm có chu vi bao nhiêu?", answer: 30, hint: "5 × 6 = 30.", explain: "30 cm." },
      { type: "num", prompt: "Mỗi góc trong hình lục giác đều bằng bao nhiêu?", answer: 120, hint: "720° / 6 = 120°.", explain: "120°." },
      { type: "num", prompt: "Hình lục giác đều có tổng các góc trong bằng bao nhiêu?", answer: 720, hint: "(6-2) × 180° = 720°.", explain: "720°." },
      { type: "mc", prompt: "Hình lục giác đều có bao nhiêu trục đối xứng?", choices: ["3", "4", "6", "8"], correct: 2, hint: "3 trục qua đỉnh đối diện, 3 trục qua trung điểm cạnh đối diện.", explain: "6 trục đối xứng." },
      { type: "num", prompt: "Hình lục giác đều cạnh 3 cm. Chu vi bằng bao nhiêu?", answer: 18, hint: "3 × 6 = 18.", explain: "18 cm." },
      { type: "num", prompt: "Tổ ong hình lục giác đều cạnh 1.5 cm. Tính chu vi.", answer: 9, hint: "1.5 × 6 = 9.", explain: "9 cm." },
      { type: "mc", prompt: "Hình lục giác nào dưới đây là đều?", choices: ["Có 6 cạnh bằng nhau", "Có 6 góc bằng nhau", "Có cả 6 cạnh và 6 góc bằng nhau", "Có 3 cặp cạnh song song"], correct: 2, hint: "Cần cả 6 cạnh bằng nhau VÀ 6 góc bằng nhau.", explain: "Có cả 6 cạnh và 6 góc bằng nhau." },
    ],
  },
  {
    id: "g6-b22",
    num: 22,
    chapter: 5,
    title: "Hình có trục đối xứng",
    summary: "Hình có trục đối xứng: nếu gấp hình dọc theo trục thì hai phần trùng nhau hoàn toàn.",
    body: String.raw`
      <p><strong>Vì sao cần trục đối xứng?</strong> Trục đối xứng giúp nhận biết tính đối xứng trong hình học, tự nhiên và nghệ thuật.</p>
      <div class="definition">
        <p>Trục đối xứng của hình: đường thẳng mà khi gấp hình dọc theo đường đó, hai phần của hình trùng nhau hoàn toàn. Một hình có thể có một hoặc nhiều trục đối xứng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình tròn có vô số trục đối xứng (mọi đường kính). Đoạn thẳng có một trục đối xứng (đường trung trực). Góc có một trục đối xứng (tia phân giác).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Tam giác cân có một trục đối xứng (đường cao từ đỉnh). Tam giác đều có ba trục đối xứng. Hình vuông có bốn trục đối xứng (hai đường chéo, hai đường trung trực).</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không phải hình nào cũng có trục đối xứng. Tam giác thường (không cân) không có trục đối xứng.parallelogram không vuông cũng không có trục đối xứng. Đừng nhầm với tâm đối xứng.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nhận biết.</strong> Gấp hình dọc theo đường nào đó nếu hai phần trùng nhau hoàn toàn thì đường đó là trục đối xứng. Một hình có thể có nhiều trục đối xứng.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Hình tròn có VÔ SỐ trục đối xứng, không phải một.</li>
          <li>Hình không đối xứng không có trục đối xứng.</li>
          <li>Trục đối xứng khác với tâm đối xứng (hình có thể có một mà không có cái kia).</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình tròn có bao nhiêu trục đối xứng? <em>— Vô số.</em></p>
        <p>Tam giác cân có bao nhiêu trục đối xứng? <em>— Một.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Xác định trục đối xứng của hình vuông. Bước 1: vẽ hai đường chéo (đó là trục đối xứng). Bước 2: vẽ hai đường trung trực (cũng là trục đối xứng). Bước 3: có tất cả 4 trục đối xứng.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Trong các hình: hình chữ nhật, hình thoi, hình vuông. Hình nào có nhiều trục đối xứng nhất? <em>— Hình vuông (4 trục).</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Trục đối xứng là đường thẳng chia hình thành hai phần trùng nhau. Số trục đối xứng: hình vuông = 4, tam giác đều = 3, hình tròn = vô số.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hình vuông có bao nhiêu trục đối xứng?", answer: 4, hint: "2 đường chéo + 2 đường trung trực.", explain: "4 trục đối xứng." },
      { type: "num", prompt: "Tam giác đều có bao nhiêu trục đối xứng?", answer: 3, hint: "Mỗi đường cao là một trục đối xứng.", explain: "3 trục đối xứng." },
      { type: "num", prompt: "Hình tròn có bao nhiêu trục đối xứng?", answer: "vô số", accept: ["vô số", "vsons", "vôsố"], hint: "Mọi đường kính đều là trục đối xứng.", explain: "Vô số trục đối xứng." },
      { type: "mc", prompt: "Hình nào sau đây KHÔNG có trục đối xứng?", choices: ["Tam giác cân", "Tam giác đều", "Tam giác thường", "Hình tròn"], correct: 2, hint: "Tam giác thường không có trục đối xứng.", explain: "Tam giác thường." },
      { type: "num", prompt: "Hình chữ nhật có bao nhiêu trục đối xứng?", answer: 2, hint: "Hai đường trung trực của các cạnh.", explain: "2 trục đối xứng." },
      { type: "num", prompt: "Tam giác cân có một trục đối xứng đi qua", choices: ["Chỉ đỉnh", "Chỉ trung điểm cạnh đáy", "Đỉnh và trung điểm cạnh đáy", "Không xác định"], correct: 2, hint: "Trục đối xứng đi qua đỉnh và vuông góc với cạnh đáy tại trung điểm.", explain: "Đỉnh và trung điểm cạnh đáy." },
      { type: "mc", prompt: "Hình nào có vô số trục đối xứng?", choices: ["Hình vuông", "Hình tròn", "Tam giác đều", "Hình chữ nhật"], correct: 1, hint: "Hình tròn có mọi đường kính là trục đối xứng.", explain: "Hình tròn." },
    ],
  },
  {
    id: "g6-b23",
    num: 23,
    chapter: 5,
    title: "Hình có tâm đối xứng",
    summary: "Hình có tâm đối xứng: nếu quay hình 180° quanh tâm thì hình trùng với chính nó.",
    body: String.raw`
      <p><strong>Vì sao cần tâm đối xứng?</strong> Tâm đối xứng là tính chất quan trọng của nhiều hình học, ứng dụng trong thiết kế và công nghệ.</p>
      <div class="definition">
        <p>Tâm đối xứng của hình: điểm mà khi quay hình 180° quanh điểm đó, hình trùng với chính nó. Một số hình có tâm đối xứng, một số không có.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Hình tròn có tâm đối xứng là tâm đường tròn. Hình bình hành có tâm đối xứng là giao điểm hai đường chéo. Đoạn thẳng có tâm đối xứng là trung điểm.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Hình vuông có tâm đối xứng là giao điểm hai đường chéo. Hình chữ nhật có tâm đối xứng là giao điểm hai đường chéo. Tam giác đều KHÔNG có tâm đối xứng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không phải hình nào cũng có tâm đối xứng. Tam giác thường, tam giác cân (không đều), hình thoi vuông không có tâm đối xứng. Hình có trục đối xứng không nhất thiết có tâm đối xứng.</p>
      </div>
      <div class="idea">
        <p><strong>Cách nhận biết.</strong> Quay hình 180° quanh điểm nào đó nếu hình trùng với chính nó thì điểm đó là tâm đối xứng. Hình có thể có hoặc không có tâm đối xứng.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Hình vuông, hình chữ nhật, hình bình hành có tâm đối xứng (giao điểm đường chéo).</li>
          <li>Tam giác đều KHÔNG có tâm đối xứng (quay 180° không trùng).</li>
          <li>Trục đối xứng và tâm đối xứng là hai khái niệm khác nhau.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Hình bình hành có tâm đối xứng là gì? <em>— Giao điểm hai đường chéo.</em></p>
        <p>Hình tròn có tâm đối xứng là gì? <em>— Tâm đường tròn.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Xác định tâm đối xứng của hình chữ nhật. Bước 1: vẽ hai đường chéo. Bước 2: giao điểm của hai đường chéo là tâm đối xứng. Bước 3: quay 180° quanh điểm này, hình trùng với chính nó.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Trong các hình: tam giác đều, hình vuông, hình tròn, hình bình hành. Hình nào KHÔNG có tâm đối xứng? <em>— Tam giác đều.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Tâm đối xứng là điểm quay 180° hình trùng với chính nó. Hình bình hành, hình chữ nhật, hình vuông, hình tròn có tâm đối xứng. Tam giác đều không có.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Hình bình hành có tâm đối xứng là", answer: "giao điểm hai đường chéo", accept: ["giao điểm hai đường chéo", "giao điểm hai đường chéo", "giao điểm hai duong cheo"], hint: "Điểm giao nhau của hai đường chéo là tâm đối xứng.", explain: "Giao điểm hai đường chéo." },
      { type: "num", prompt: "Hình tròn có tâm đối xứng là", answer: "tâm đường tròn", accept: ["tâm đường tròn", "tam duong tron", "tâm"], hint: "Tâm của đường tròn là tâm đối xứng.", explain: "Tâm đường tròn." },
      { type: "mc", prompt: "Hình nào sau đây KHÔNG có tâm đối xứng?", choices: ["Hình vuông", "Hình chữ nhật", "Tam giác đều", "Hình bình hành"], correct: 2, hint: "Tam giác đều quay 180° không trùng.", explain: "Tam giác đều." },
      { type: "num", prompt: "Hình chữ nhật có bao nhiêu tâm đối xứng?", answer: 1, hint: "Chỉ có một điểm giao nhau của hai đường chéo.", explain: "1 tâm đối xứng." },
      { type: "num", prompt: "Đoạn thẳng AB có tâm đối xứng là", answer: "trung điểm AB", accept: ["trung điểm AB", "trung điểm", "trung điểm ab"], hint: "Trung điểm của đoạn thẳng là tâm đối xứng.", explain: "Trung điểm AB." },
      { type: "mc", prompt: "Hình nào có tâm đối xứng?", choices: ["Tam giác cân", "Tam giác đều", "Hình thoi", "Hình thang cân"], correct: 2, hint: "Hình thoi có tâm đối xứng là giao điểm hai đường chéo.", explain: "Hình thoi." },
      { type: "num", prompt: "Tâm đối xứng của hình vuông là", answer: "giao điểm hai đường chéo", accept: ["giao điểm hai đường chéo", "giao điểm hai duong cheo"], hint: "Giao điểm của hai đường chéo vuông góc nhau.", explain: "Giao điểm hai đường chéo." },
    ],
  },
  {
    id: "g6-b24",
    num: 24,
    chapter: 9,
    title: "Thu thập và phân loại dữ liệu",
    summary: "Thu thập dữ liệu từ thực tế, phân loại theo đặc điểm, lập bảng thống kê.",
    body: String.raw`
      <p><strong>Vì sao cần thu thập dữ liệu?</strong> Dữ liệu giúp chúng ta hiểu rõ tình hình, đưa ra quyết định dựa trên thông tin thực tế.</p>
      <div class="definition">
        <p>Dữ liệu là thông tin thu thập được từ thực tế. Phân loại dữ liệu là sắp xếp dữ liệu theo các đặc điểm chung. Bảng thống kê là cách trình bày dữ liệu đã phân loại.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Thống kê loại quả yêu thích của lớp: táo, cam, chuối, xoài. Đếm số bạn thích mỗi loại và lập bảng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Điều tra số lượng học sinh thích các môn: Toán (15), Văn (12), Anh (10), Sử (8). Dữ liệu định lượng là số lượng học sinh. Dữ liệu định tính là tên môn học.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Không phân biệt dữ liệu định lượng (số) và định tính (văn bản). Dữ liệu "tôi thích..." là định tính, không thể cộng trừ như dữ liệu định lượng. Đừng nhầm giữa "số bạn" và "tên bạn".</p>
      </div>
      <div class="idea">
        <p><strong>Các bước thu thập.</strong> Xác định đối tượng khảo sát → xác định đặc điểm cần thu thập → thu thập dữ liệu → phân loại và ghi chép.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Dữ liệu định lượng là số (số lượng, chiều cao, cân nặng).</li>
          <li>Dữ liệu định tính là văn bản (tên, loại, sở thích).</li>
          <li>Trong bảng thống kê, cần rõ đối tượng và giá trị tương ứng.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Trong dữ liệu "chiều cao: 150cm, 155cm, 160cm", đây là dữ liệu gì? <em>— Định lượng.</em></p>
        <p>Trong dữ liệu "tên môn: Toán, Văn, Anh", đây là dữ liệu gì? <em>— Định tính.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Thu thập dữ liệu điểm kiểm tra Toán của tổ: 8, 9, 7, 10, 6. Bước 1: ghi chép điểm. Bước 2: phân loại theo khoảng điểm. Bước 3: lập bảng tần số.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Thống kê loại quả của 20 bạn: 5 bạn thích táo, 8 bạn thích cam, 4 bạn thích chuối, 3 bạn thích xoài. Tính tổng. <em>— 5 + 8 + 4 + 3 = 20.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Dữ liệu định lượng là số, định tính là văn bản. Thu thập → phân loại → lập bảng.</p>
      <figure id="fig-g6-b24-data-table" class="figure" data-animation="g6-b24-data-table">
        <svg width="400" height="100" viewBox="0 0 400 100">
          <rect x="20" y="10" width="360" height="80" fill="none" stroke="#333" stroke-width="1" opacity="0"/>
          <line x1="20" y1="30" x2="380" y2="30" stroke="#333" stroke-width="1" opacity="0"/>
          <line x1="20" y1="50" x2="380" y2="50" stroke="#333" stroke-width="1" opacity="0"/>
          <line x1="20" y1="70" x2="380" y2="70" stroke="#333" stroke-width="1" opacity="0"/>
          <line x1="120" y1="10" x2="120" y2="90" stroke="#333" stroke-width="1" opacity="0"/>
          <line x1="280" y1="10" x2="280" y2="90" stroke="#333" stroke-width="1" opacity="0"/>
          <text x="70" y="25" font-size="12" text-anchor="middle" opacity="0">Quả</text>
          <text x="200" y="25" font-size="12" text-anchor="middle" opacity="0">Táo</text>
          <text x="330" y="25" font-size="12" text-anchor="middle" opacity="0">8</text>
        </svg>
      </figure>
</div>
    `,
    exercises: [
      { type: "mc", prompt: "Dữ liệu 'chiều cao: 145cm, 150cm, 155cm' là", choices: ["Định tính", "Định lượng", "Cả hai", "Không xác định"], correct: 1, hint: "Chiều cao là số đo.", explain: "Định lượng." },
      { type: "mc", prompt: "Dữ liệu 'tên học sinh: Lan, Dũng, Mai' là", choices: ["Định tính", "Định lượng", "Cả hai", "Không xác định"], correct: 0, hint: "Tên là văn bản, không phải số.", explain: "Định tính." },
      { type: "num", prompt: "Thống kê điểm: 8, 9, 7, 10, 6, 8. Có bao nhiêu bạn được 8 điểm?", answer: 2, hint: "Đếm số lần xuất hiện của 8.", explain: "2 bạn." },
      { type: "num", prompt: "Trong 30 học sinh, 12 bạn thích Toán, 10 bạn thích Văn. Hỏi có bao nhiêu bạn không thích Toán?", answer: 18, hint: "30 - 12 = 18.", explain: "18 bạn." },
      { type: "num", prompt: "Lập bảng: 5 bạn táo, 7 bạn cam, 6 bạn chuối, 2 bạn xoài. Tổng số bạn là bao nhiêu?", answer: 20, hint: "5 + 7 + 6 + 2 = 20.", explain: "20 bạn." },
      { type: "mc", prompt: "Trong bảng thống kê, cột đầu tiên thường là", choices: ["Giá trị dữ liệu", "Tên đối tượng", "Tần số", "Tổng cộng"], correct: 1, hint: "Tên đối tượng (học sinh, môn học, v.v.) thường ở cột đầu.", explain: "Tên đối tượng." },
      { type: "num", prompt: "Điểm kiểm tra: 7, 8, 9, 10, 8, 9, 8. Tần số của điểm 8 là bao nhiêu?", answer: 3, hint: "Đếm số lần điểm 8 xuất hiện.", explain: "3 lần." },
    ],
  },
  {
    id: "g6-b25",
    num: 25,
    chapter: 9,
    title: "Biểu đồ tranh",
    summary: "Biểu đồ tranh sử dụng hình vẽ hoặc biểu tượng để trình bày dữ liệu.",
    body: String.raw`
      <p><strong>Vì sao cần biểu đồ tranh?</strong> Biểu đồ tranh giúp trực quan hóa dữ liệu, dễ so sánh và hiểu nhanh thông tin.</p>
      <div class="definition">
        <p>Biểu đồ tranh là cách trình bày dữ liệu bằng hình vẽ hoặc biểu tượng. Mỗi biểu tượng đại diện cho một hoặc nhiều đơn vị dữ liệu. Cần có chú giải để hiểu biểu tượng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Biểu đồ tranh thể hiện loại quả yêu thích: 🍎 = 5 bạn, 🍊 = 8 bạn, 🍌 = 4 bạn, 🥭 = 3 bạn.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Biểu đồ tranh có 6 hình 🍎, mỗi hình đại diện cho 2 bạn yêu thích táo. Vậy có 6 × 2 = 12 bạn yêu thích táo. Khi số lượng lớn, mỗi biểu tượng có thể đại diện nhiều đơn vị.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đừng hiểu nhầm số biểu tượng với số đơn vị. Nếu mỗi 🍎 đại diện cho 3 bạn, thì 4 hình 🍎 là 12 bạn, không phải 4 bạn. Luôn đọc chú giải kỹ.</p>
      </div>
      <div class="idea">
        <p><strong>Cách vẽ.</strong> Xác định dữ liệu → chọn biểu tượng phù hợp → xác định tỷ lệ (mỗi biểu tượng = bao nhiêu đơn vị) → vẽ biểu đồ → thêm chú giải.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Chọn biểu tượng không phù hợp với dữ liệu (không rõ nghĩa).</li>
          <li>Không ghi chú giải, người đọc không hiểu biểu tượng.</li>
          <li>Tính sai khi mỗi biểu tượng đại diện nhiều đơn vị.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Mỗi 🚗 = 10 xe, có 5 hình 🚗. Có bao nhiêu xe? <em>— 50 xe.</em></p>
        <p>Mỗi 🌳 = 5 cây, có 3 hình đầy và 1 nửa hình. Có bao nhiêu cây? <em>— 3 × 5 + 2.5 = 17.5 cây (hoặc 18 cây làm tròn).</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Vẽ biểu đồ tranh cho: Táo (12), Cam (8), Chuối (6), Xoài (4), biết mỗi 🍎 = 2 bạn. Bước 1: Táo = 12/2 = 6 hình. Bước 2: Cam = 8/2 = 4 hình. Bước 3: Chuối = 6/2 = 3 hình. Bước 4: Xoài = 4/2 = 2 hình.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Biểu đồ tranh có 7 hình 🍎 (mỗi hình = 3 bạn), 5 hình 🍊 (mỗi hình = 3 bạn). Tính tổng. <em>— (7 + 5) × 3 = 36 bạn.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Biểu đồ tranh dùng hình vẽ, mỗi biểu tượng đại diện một hoặc nhiều đơn vị. Luôn đọc chú giải.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Mỗi 🍎 = 3 bạn, có 4 hình 🍎. Có bao nhiêu bạn thích táo?", answer: 12, hint: "4 × 3 = 12.", explain: "12 bạn." },
      { type: "num", prompt: "Biểu đồ có 6 hình 🚗 (mỗi hình = 5 xe). Có bao nhiêu xe?", answer: 30, hint: "6 × 5 = 30.", explain: "30 xe." },
      { type: "num", prompt: "Mỗi 🌳 = 10 cây, có 3 hình đầy và 1 nửa hình. Có bao nhiêu cây?", answer: 35, hint: "3 × 10 + 5 = 35.", explain: "35 cây." },
      { type: "mc", prompt: "Mỗi biểu tượng trong biểu đồ tranh có thể đại diện", choices: ["Chỉ 1 đơn vị", "Chỉ nhiều đơn vị", "1 hoặc nhiều đơn vị", "Không xác định"], correct: 2, hint: "Có thể là 1 hoặc nhiều đơn vị, tùy theo tỷ lệ.", explain: "1 hoặc nhiều đơn vị." },
      { type: "num", prompt: "Biểu đồ tranh có 8 hình 🍊 (mỗi hình = 2 bạn). Có bao nhiêu bạn?", answer: 16, hint: "8 × 2 = 16.", explain: "16 bạn." },
      { type: "num", prompt: "Mỗi 🐶 = 4 con, có 5 hình 🐶 và 1 nửa hình. Có bao nhiêu con?", answer: 22, hint: "5 × 4 + 2 = 22.", explain: "22 con." },
      { type: "mc", prompt: "Chú giải trong biểu đồ tranh dùng để", choices: ["Trang trí", "Giải thích biểu tượng", "Ghi số liệu", "Không cần thiết"], correct: 1, hint: "Chú giải giúp người đọc hiểu mỗi biểu tượng đại diện gì.", explain: "Giải thích biểu tượng." },
    ],
  },
  {
    id: "g6-b26",
    num: 26,
    chapter: 9,
    title: "Biểu đồ cột",
    summary: "Biểu đồ cột dùng các hình chữ nhật (cột) để trình bày và so sánh dữ liệu.",
    body: String.raw`
      <p><strong>Vì sao cần biểu đồ cột?</strong> Biểu đồ cột rất hiệu quả để so sánh số lượng giữa các nhóm hoặc theo thời gian.</p>
      <div class="definition">
        <p>Biểu đồ cột là biểu đồ dùng các cột (hình chữ nhật đứng) để trình bày dữ liệu. Trục ngang (trục hoành) ghi tên đối tượng, trục dọc (trục tung) ghi giá trị. Mỗi cột có chiều cao tương ứng với giá trị dữ liệu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Biểu đồ cột thể hiện số học sinh thích các môn: Toán (15), Văn (12), Anh (10), Sử (8). Mỗi cột có chiều cao tương ứng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Biểu đồ cột thể hiện doanh thu theo tháng: Tháng 1 (100 triệu), Tháng 2 (120 triệu), Tháng 3 (90 triệu). So sánh: Tháng 2 cao nhất, Tháng 3 thấp nhất.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đừng vẽ cột có chiều cao sai với tỷ lệ. Nếu 1cm = 10 đơn vị, thì giá trị 50 phải là 5cm, không phải 10cm. Tỷ lệ trục dọc phải rõ ràng và nhất quán.</p>
      </div>
      <div class="idea">
        <p><strong>Cách vẽ.</strong> Xác định trục hoành (tên đối tượng) và trục tung (giá trị) → xác định tỷ lệ trên trục tung → vẽ các cột với chiều cao tương ứng → thêm tiêu đề và chú thích.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Chiều cao cột không đúng với tỷ lệ đã chọn.</li>
          <li>Không có tiêu đề hoặc chú thích trên trục.</li>
          <li>Cột quá rộng hoặc quá hẹp, không cân đối.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Biểu đồ cột có cột cao 5cm, tỷ lệ 1cm = 2 đơn vị. Giá trị là bao nhiêu? <em>— 10 đơn vị.</em></p>
        <p>Biểu đồ cột có cột cao 3cm, tỷ lệ 1cm = 5 học sinh. Có bao nhiêu học sinh? <em>— 15 học sinh.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Vẽ biểu đồ cột thể hiện số sách: Văn (10), Toán (15), Anh (8). Tỷ lệ 1cm = 2 sách. Bước 1: Văn = 10/2 = 5cm. Bước 2: Toán = 15/2 = 7.5cm. Bước 3: Anh = 8/2 = 4cm.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Biểu đồ cột có 4 cột với chiều cao 6cm, 9cm, 4cm, 7cm. Tỷ lệ 1cm = 5 đơn vị. Tính tổng giá trị. <em>— (6+9+4+7) × 5 = 130.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Biểu đồ cột dùng cột (hình chữ nhật đứng) để trình bày dữ liệu. Trục ngang ghi tên, trục dọc ghi giá trị.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Biểu đồ cột có cột cao 4cm, tỷ lệ 1cm = 3 đơn vị. Giá trị là bao nhiêu?", answer: 12, hint: "4 × 3 = 12.", explain: "12 đơn vị." },
      { type: "num", prompt: "Biểu đồ cột có cột cao 6cm, tỷ lệ 1cm = 5 học sinh. Có bao nhiêu học sinh?", answer: 30, hint: "6 × 5 = 30.", explain: "30 học sinh." },
      { type: "num", prompt: "Biểu đồ có 3 cột cao 5cm, 7cm, 4cm. Tỷ lệ 1cm = 2 đơn vị. Tổng giá trị là bao nhiêu?", answer: 32, hint: "(5+7+4) × 2 = 32.", explain: "32 đơn vị." },
      { type: "mc", prompt: "Trục ngang trong biểu đồ cột thường ghi", choices: ["Giá trị dữ liệu", "Tên đối tượng", "Tần số", "Tỷ lệ"], correct: 1, hint: "Trục ngang ghi tên đối tượng (học sinh, tháng, môn học, v.v.).", explain: "Tên đối tượng." },
      { type: "num", prompt: "Biểu đồ cột có 4 cột cao 3cm, 5cm, 4cm, 6cm. Tỷ lệ 1cm = 10 đơn vị. Tổng là bao nhiêu?", answer: 180, hint: "(3+5+4+6) × 10 = 180.", explain: "180 đơn vị." },
      { type: "num", prompt: "Cột cao 8cm, tỷ lệ 1cm = 2.5 đơn vị. Giá trị là bao nhiêu?", answer: 20, hint: "8 × 2.5 = 20.", explain: "20 đơn vị." },
      { type: "mc", prompt: "Biểu đồ cột phù hợp nhất để", choices: ["Thể hiện tỷ lệ phần trăm", "So sánh số lượng giữa các nhóm", "Thể hiện xu hướng theo thời gian", "Cả B và C"], correct: 3, hint: "Biểu đồ cột tốt cho so sánh và xu hướng.", explain: "Cả B và C." },
    ],
  },
  {
    id: "g6-b27",
    num: 27,
    chapter: 9,
    title: "Biểu đồ cột kép",
    summary: "Biểu đồ cột kép có hai cột cho mỗi đối tượng, dùng để so sánh hai bộ dữ liệu.",
    body: String.raw`
      <p><strong>Vì sao cần biểu đồ cột kép?</strong> Biểu đồ cột kép giúp so sánh hai bộ dữ liệu trên cùng một đối tượng hoặc thời điểm.</p>
      <div class="definition">
        <p>Biểu đồ cột kép là biểu đồ có hai cột cho mỗi đối tượng, thường dùng để so sánh hai nhóm (nam/nữ, hai năm, hai phương pháp...). Mỗi cột đại diện cho một bộ dữ liệu.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> Biểu đồ cột kép thể hiện số học sinh nam và nữ của các lớp: Lớp 6A (nam 15, nữ 18), Lớp 6B (nam 16, nữ 17). Hai cột cạnh nhau cho mỗi lớp.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> Biểu đồ cột kép thể hiện doanh thu hai năm: 2023 và 2024. Tháng 1 (2023: 100 triệu, 2024: 120 triệu), Tháng 2 (2023: 90 triệu, 2024: 110 triệu). So sánh: 2024 cao hơn 2023 ở mọi tháng.</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> Đừng lẫn lộn hai cột. Mỗi cột phải có màu hoặc kiểu phân biệt rõ ràng. Cần có chú giải để biết cột nào đại diện cho dữ liệu nào. Đừng đọc nhầm cột của năm này với năm kia.</p>
      </div>
      <div class="idea">
        <p><strong>Cách vẽ.</strong> Xác định hai bộ dữ liệu → chọn màu/kiểu khác nhau cho từng bộ → vẽ hai cột cạnh nhau cho mỗi đối tượng → thêm chú giải và tiêu đề.</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi thường gặp.</strong></p>
        <ul>
          <li>Hai cột quá gần nhau hoặc quá xa nhau, không rõ ràng.</li>
          <li>Không có chú giải, người đọc không biết cột nào đại diện cho dữ liệu nào.</li>
          <li>Chiều cao hai cột không đúng với tỷ lệ chung.</li>
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        <p>Biểu đồ cột kép có bao nhiêu cột cho mỗi đối tượng? <em>— Hai cột.</em></p>
        <p>Biểu đồ cột kép dùng để so sánh bao nhiêu bộ dữ liệu? <em>— Hai bộ dữ liệu.</em></p>
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> Vẽ biểu đồ cột kép thể hiện số cây trồng: Năm 2022 và 2023. Lớp 6A: 2022 (10 cây), 2023 (15 cây). Bước 1: vẽ trục ngang ghi Lớp 6A. Bước 2: vẽ hai cột cạnh nhau, cột 2022 cao 10, cột 2023 cao 15.</p>
      </div>
      <div class="example">
        <p><strong>Luyện dạng SBT.</strong> Biểu đồ cột kép có cột 2022 cao 6cm, cột 2023 cao 9cm. Tỷ lệ 1cm = 5 cây. Tính tổng số cây hai năm. <em>— (6+9) × 5 = 75 cây.</em></p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> Biểu đồ cột kép có hai cột cho mỗi đối tượng, dùng so sánh hai bộ dữ liệu. Mỗi cột phải có màu/kiểu khác nhau và chú giải rõ ràng.</p></div>
    `,
    exercises: [
      { type: "num", prompt: "Biểu đồ cột kép có bao nhiêu cột cho mỗi đối tượng?", answer: 2, hint: "Hai cột, mỗi cột đại diện cho một bộ dữ liệu.", explain: "2 cột." },
      { type: "num", prompt: "Cột 2022 cao 5cm, cột 2023 cao 8cm. Tỷ lệ 1cm = 10 sản phẩm. Tính hiệu số sản phẩm.", answer: 30, hint: "(8-5) × 10 = 30.", explain: "30 sản phẩm." },
      { type: "num", prompt: "Cột 2021 cao 4cm, cột 2022 cao 6cm. Tỷ lệ 1cm = 5 đơn vị. Tổng hai năm là bao nhiêu?", answer: 50, hint: "(4+6) × 5 = 50.", explain: "50 đơn vị." },
      { type: "mc", prompt: "Biểu đồ cột kép nên có", choices: ["Một cột cho mỗi đối tượng", "Hai cột cho mỗi đối tượng", "Ba cột cho mỗi đối tượng", "Không xác định"], correct: 1, hint: "Hai cột để so sánh hai bộ dữ liệu.", explain: "Hai cột cho mỗi đối tượng." },
      { type: "num", prompt: "Cột A cao 7cm, cột B cao 5cm. Tỷ lệ 1cm = 3 đơn vị. Cột A hơn cột B bao nhiêu đơn vị?", answer: 6, hint: "(7-5) × 3 = 6.", explain: "6 đơn vị." },
      { type: "mc", prompt: "Biểu đồ cột kép dùng để so sánh", choices: ["Một bộ dữ liệu", "Hai bộ dữ liệu", "Ba bộ dữ liệu", "Không xác định"], correct: 1, hint: "Hai bộ dữ liệu cho mỗi đối tượng.", explain: "Hai bộ dữ liệu." },
      { type: "num", prompt: "Cột năm 1 cao 9cm, cột năm 2 cao 6cm. Tỷ lệ 1cm = 2 học sinh. Năm 1 hơn năm 2 bao nhiêu học sinh?", answer: 6, hint: "(9-6) × 2 = 6.", explain: "6 học sinh." },
    ],
  },
];

module.exports = { G6_CHAPTERS, G6_LESSONS };
