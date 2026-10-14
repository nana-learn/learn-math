#!/usr/bin/env node
/**
 * Generate rich Grade 2 lessons (KNTT / GDPT 2018).
 * Run: node scripts/generate-grade2.js
 */
const fs = require("fs");
const path = require("path");

const C = {
  g: "#83C167",
  b: "#58C4DD",
  r: "#FC6255",
  p: "#9A72AC",
  d: "#333330",
  muted: "#888888",
};

const chapters = [
  { id: 1, title: "Ôn tập và bổ sung" },
  { id: 2, title: "Phép cộng, phép trừ trong phạm vi 20" },
  { id: 3, title: "Làm quen với khối lượng, dung tích" },
  { id: 4, title: "Phép cộng, phép trừ có nhớ trong phạm vi 100" },
  { id: 5, title: "Làm quen với hình phẳng" },
  { id: 6, title: "Ngày – giờ, giờ – phút, ngày – tháng" },
  { id: 7, title: "Ôn tập học kì I" },
  { id: 8, title: "Phép nhân, phép chia" },
  { id: 9, title: "Làm quen với hình khối" },
  { id: 10, title: "Các số trong phạm vi 1000" },
  { id: 11, title: "Độ dài và đơn vị đo độ dài. Tiền Việt Nam" },
  { id: 12, title: "Phép cộng, phép trừ trong phạm vi 1000" },
  { id: 13, title: "Làm quen với yếu tố thống kê, xác suất" },
  { id: 14, title: "Ôn tập cuối năm" },
];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


function storyEx(prompt, answer, hint, explain) {
  return exNum(prompt, answer, hint, explain);
}

function ensureUniqueAnim(figSvg, num) {
  return figSvg.replace(/data-animation="([^"]+)"/g, (_, id) => {
    if (id.startsWith("g2-b" + num + "-") || id === "g2-b" + num) {
      return `data-animation="${id}"`;
    }
    const short = id.replace(/^g2-/, "");
    return `data-animation="g2-b${num}-${short}"`;
  });
}

function withStories(num, chapter, exercises) {
  // Unique stories per lesson (seeded) so prompts are not copy-pasted across the course.
  const seed = num * 17 + chapter * 3;
  const names = ["An", "Bình", "Chi", "Dũng", "Hà", "Lan", "Minh", "Nam", "Oanh", "Phúc"];
  const things = ["tem", "bút", "nhãn", "bi", "kẹo", "quyển vở", "bông hoa", "lá cờ"];
  const pick = (arr, i) => arr[(seed + i) % arr.length];
  const a = pick(names, 0);
  let b = pick(names, 1);
  if (b === a) b = pick(names, 2);
  const thing = pick(things, 0);
  let thing2 = pick(things, 1);
  if (thing2 === thing) thing2 = pick(things, 2);

  const n1 = 6 + ((seed * 3) % 12); // 6..17
  const n2 = 3 + ((seed * 5) % 8); // 3..10
  const n3 = 2 + ((seed * 7) % 6); // 2..7
  const big = 25 + ((seed * 11) % 60); // 25..84
  const big2 = 8 + ((seed * 13) % 30); // 8..37
  const hundreds = 1 + (seed % 8); // 1..8
  const tens = seed % 10;
  const h = hundreds * 100 + tens * 10 + n3; // 3-digit-ish
  const money = [1000, 2000, 5000, 10000];
  const m1 = pick(money, 0);
  let m2 = pick(money, 1);
  if (m2 === m1) m2 = pick(money, 2);
  const pay = m1 >= m2 ? m1 : m1 + m2;

  const mk = (prompt, answer, hint, explain) => storyEx(prompt, answer, hint, explain);

  const sumAB = n1 + n2;
  const banks = {
    place: [
      mk(`${a} có ${n2} chục que và ${n3} que rời. Tất cả mấy que?`, n2 * 10 + n3, "chục × 10 + đơn vị.", `${n2 * 10 + n3}.`),
      mk(`Viết số gồm ${Math.min(n1, 9)} chục và ${n3} đơn vị.`, Math.min(n1, 9) * 10 + n3, "Ghép hàng.", `${Math.min(n1, 9) * 10 + n3}.`),
    ],
    place3: [
      mk(
        `Số nhà của ${a} có ${hundreds} trăm, ${tens} chục, ${n3} đơn vị. Số nhà là bao nhiêu?`,
        hundreds * 100 + tens * 10 + n3,
        "trăm|chục|đv.",
        `${hundreds * 100 + tens * 10 + n3}.`
      ),
      mk(
        `Trường có ${2 + (seed % 5)} trăm ${(seed + 3) % 10} chục học sinh (0 đơn vị). Viết số đó.`,
        (2 + (seed % 5)) * 100 + ((seed + 3) % 10) * 10,
        "Ghép hàng.",
        `${(2 + (seed % 5)) * 100 + ((seed + 3) % 10) * 10}.`
      ),
    ],
    add: [
      mk(`${a} có ${n1} ${thing}, được thêm ${n2} ${thing}. Tất cả mấy ${thing}?`, sumAB, "Thêm → cộng.", `${n1} + ${n2} = ${sumAB}.`),
      mk(`Trong hộp có ${big2} ${thing2}, bạn cho thêm ${n3}. Tất cả mấy?`, big2 + n3, "Cộng.", `${big2} + ${n3} = ${big2 + n3}.`),
    ],
    sub: [
      mk(`Có ${sumAB} ${thing}, ${a} lấy ${n2}. Còn lại mấy?`, n1, "Bớt → trừ.", `${sumAB} − ${n2} = ${n1}.`),
      mk(`Trên kệ có ${big} quyển sách, đem đi ${big2}. Còn mấy quyển?`, big - big2, "Trừ.", `${big} − ${big2} = ${big - big2}.`),
    ],
    more: [
      mk(`${a} có ${n1} ${thing}. ${b} nhiều hơn ${a} ${n2} ${thing}. ${b} có mấy?`, sumAB, "Nhiều hơn → cộng.", `${n1} + ${n2} = ${sumAB}.`),
      mk(`${a} có ${sumAB} ${thing2}. ${b} ít hơn ${a} ${n2}. ${b} có mấy?`, n1, "Ít hơn → trừ.", `${sumAB} − ${n2} = ${n1}.`),
    ],
    measure: [
      mk(`Mẹ mua ${n2} kg gạo và ${n3} kg đường. Tất cả mấy kg?`, n2 + n3, "Cộng kg.", `${n2} + ${n3} = ${n2 + n3}.`),
      mk(`Bình có ${sumAB} l nước, dùng ${n2} l. Còn mấy lít?`, n1, "Trừ lít.", `${sumAB} − ${n2} = ${n1}.`),
    ],
    time: [
      mk(`${a} học từ ${7 + (seed % 3)} giờ đến ${9 + (seed % 3)} giờ. Học mấy giờ?`, 2, "Hiệu hai mốc giờ.", "2."),
      mk(`Hôm nay ngày ${n1}. ${n3} ngày sau là ngày bao nhiêu?`, n1 + n3, "Cộng ngày.", `${n1} + ${n3} = ${n1 + n3}.`),
    ],
    geo: [
      mk(`Khung ảnh nhà ${a} là tứ giác. Khung có mấy đỉnh?`, 4, "Tứ giác: 4 đỉnh.", "4."),
      mk(`Biển báo hình tam giác trên đường ${b} đi học có mấy cạnh?`, 3, "Tam giác: 3 cạnh.", "3."),
    ],
    mul: (() => {
      // Match bảng 2 / bảng 5 lessons: odd nums → 2, even → 5 (39→2, 40→5).
      const fA = num % 2 === 0 ? 5 : 2;
      const fB = 2 + (seed % 8);
      return [
        mk(`Mỗi đĩa ${fA} cái bánh, có ${fB} đĩa. Tất cả mấy cái bánh?`, fA * fB, `${fB} × ${fA}.`, `${fA * fB}.`),
        mk(`Một hàng ${fA} bạn, có ${fB} hàng. Tất cả mấy bạn?`, fA * fB, `${fB} × ${fA}.`, `${fA * fB}.`),
      ];
    })(),
    div: (() => {
      const g = num % 2 === 0 ? 5 : 2; // 43→2, 44→5
      const q = 2 + (seed % 8);
      return [
        mk(`${g * q} viên bi chia đều ${g} bạn. Mỗi bạn mấy viên?`, q, `${g * q} : ${g}.`, `${q}.`),
        mk(`${g * q} cái kẹo, mỗi hộp ${g} cái. Cần mấy hộp?`, q, `${g * q} : ${g}.`, `${q}.`),
      ];
    })(),
    money: [
      mk(`${a} mua đồ ${m2} đồng, đưa ${pay} đồng. Tiền thừa mấy đồng?`, pay - m2, "Đưa − giá.", `${pay} − ${m2} = ${pay - m2}.`),
      mk(`Mua bút ${m2} đồng và tẩy ${Math.min(m1, 2000)} đồng. Cả hai mấy đồng?`, m2 + Math.min(m1, 2000), "Cộng tiền.", `${m2 + Math.min(m1, 2000)}.`),
    ],
    length: [
      mk(`Đoạn dây ${sumAB} m, cắt ${n2} m. Còn mấy mét?`, n1, "Trừ mét.", `${sumAB} − ${n2} = ${n1}.`),
      mk(`${n3} m bằng bao nhiêu dm?`, n3 * 10, "1 m = 10 dm.", `${n3} × 10 = ${n3 * 10}.`),
    ],
    solid: [
      mk(`Hộp có ${n2} quả bóng (cầu) và ${n3} lon (trụ). Tất cả mấy đồ vật?`, n2 + n3, "Cộng.", `${n2} + ${n3} = ${n2 + n3}.`),
      mk(`Có ${sumAB} khối trụ, lấy bớt ${n2}. Còn mấy khối trụ?`, n1, "Trừ.", `${sumAB} − ${n2} = ${n1}.`),
    ],
    stats: [
      mk(`Tổ 1 có ${n2} bạn, tổ 2 có ${n2 + n3} bạn. Tổ 2 hơn tổ 1 mấy bạn?`, n3, "Hiệu.", `${n2 + n3} − ${n2} = ${n3}.`),
      mk(`Biểu đồ có ${n1} hình (1 hình = 1 xe). Có mấy xe?`, n1, "1 hình = 1.", `${n1}.`),
    ],
    add1000: [
      mk(`Thư viện có ${h} sách, thêm ${big2 * 3}. Tất cả mấy quyển?`, h + big2 * 3, "Cộng phạm vi 1000.", `${h} + ${big2 * 3} = ${h + big2 * 3}.`),
      mk(`Kho có ${h + big} hộp, xuất ${big}. Còn mấy hộp?`, h, "Trừ.", `${h + big} − ${big} = ${h}.`),
    ],
  };

  const byCh = {
    1:
      num <= 2
        ? banks.place
        : num === 4
          ? banks.more
          : num % 2
            ? banks.add
            : banks.sub,
    2: num % 3 === 0 ? banks.more : num % 2 ? banks.add : banks.sub,
    3: banks.measure,
    4: num % 2 ? banks.add : banks.sub,
    5: banks.geo,
    6: banks.time,
    7: num === 34 ? banks.geo : num === 35 ? banks.measure : banks.add,
    8: num <= 40 ? banks.mul : banks.div,
    9: banks.solid,
    10: banks.place3,
    11: num === 56 ? banks.money : banks.length,
    12: banks.add1000,
    13: banks.stats,
    14:
      num <= 68
        ? banks.place3
        : num <= 70
          ? banks.add1000
          : num === 71
            ? banks.mul
            : num === 72
              ? banks.geo
              : num === 73
                ? banks.measure
                : banks.stats,
  };

  const isNarrative = (e) =>
    e.type === "num" &&
    /An |Bình |Chi |Dũng |Hà |Lan |Minh |Nam |Oanh |Phúc |mẹ |Mỗi |chia đều|Tổ |Mua |Đưa |Trên |Trong |Số nhà |Trường |Bình có |Đoạn dây |Hộp có |Có \d+|Hôm nay |học từ |Thư viện |Kho có /i.test(
      e.prompt
    );

  const narrativeCount = exercises.filter(isNarrative).length;
  if (narrativeCount >= 2) return exercises.slice(0, 9);

  const bank = byCh[chapter] || banks.add;
  const extra = bank.filter((e) => !exercises.some((x) => x.prompt === e.prompt));
  if (narrativeCount === 0 && exercises.length >= 7) {
    return exercises.slice(0, 5).concat(extra.slice(0, 2)).slice(0, 9);
  }
  return exercises.concat(extra.slice(0, 2)).slice(0, 9);
}

function fig(anim, label, inner, vb = "0 0 320 160") {
  return `      <figure class="figure" data-animation="${anim}">
        <svg viewBox="${vb}" role="img" aria-label="${esc(label)}">
${inner}
        </svg>
      </figure>`;
}

// --- SVG builders ---
function svgPlaceValue2(tens, ones, n) {
  return fig(
    `g2-b${n}-place`,
    `Cấu tạo số ${tens}${ones}`,
    `          <rect x="30" y="30" width="100" height="90" fill="none" stroke="${C.g}" stroke-width="2"/>
          <rect x="160" y="30" width="100" height="90" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="80" y="24" font-size="12" text-anchor="middle" fill="${C.g}">Hàng chục</text>
          <text x="210" y="24" font-size="12" text-anchor="middle" fill="${C.b}">Hàng đơn vị</text>
          <text x="80" y="85" font-size="36" text-anchor="middle" fill="${C.d}">${tens}</text>
          <text x="210" y="85" font-size="36" text-anchor="middle" fill="${C.d}">${ones}</text>
          <text x="160" y="150" font-size="14" text-anchor="middle">${tens}${ones} = ${tens} chục + ${ones} đơn vị</text>`
  );
}

function svgNumberLine(nums, highlight) {
  const n = highlight;
  const xs = nums.map((_, i) => 40 + i * 48);
  const ticks = nums
    .map((v, i) => {
      const x = xs[i];
      const col = v === highlight ? C.r : C.d;
      return `          <line x1="${x}" y1="70" x2="${x}" y2="90" stroke="${col}" stroke-width="2"/>
          <text x="${x}" y="112" font-size="13" text-anchor="middle" fill="${col}">${v}</text>`;
    })
    .join("\n");
  const hi = nums.indexOf(highlight);
  const hx = xs[hi];
  return fig(
    `g2-b${n}-line`,
    "Tia số",
    `          <line x1="20" y1="80" x2="300" y2="80" stroke="${C.d}" stroke-width="2"/>
          <polygon points="300,80 288,74 288,86" fill="${C.d}"/>
${ticks}
          <circle cx="${hx}" cy="80" r="5" fill="${C.r}"/>
          <text x="${hx}" y="50" font-size="12" text-anchor="middle" fill="${C.r}">đang xét</text>`
  );
}

function svgAddParts(a, b, sum) {
  return fig(
    "g2-add-parts",
    "Thành phần phép cộng",
    `          <rect x="20" y="40" width="70" height="50" fill="none" stroke="${C.g}" stroke-width="2"/>
          <rect x="120" y="40" width="70" height="50" fill="none" stroke="${C.g}" stroke-width="2"/>
          <rect x="230" y="40" width="70" height="50" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="55" y="72" font-size="22" text-anchor="middle">${a}</text>
          <text x="155" y="72" font-size="22" text-anchor="middle">${b}</text>
          <text x="265" y="72" font-size="22" text-anchor="middle">${sum}</text>
          <text x="55" y="30" font-size="11" text-anchor="middle" fill="${C.g}">số hạng</text>
          <text x="155" y="30" font-size="11" text-anchor="middle" fill="${C.g}">số hạng</text>
          <text x="265" y="30" font-size="11" text-anchor="middle" fill="${C.b}">tổng</text>
          <text x="100" y="72" font-size="20">+</text>
          <text x="205" y="72" font-size="20">=</text>
          <text x="160" y="130" font-size="13" text-anchor="middle">${a} + ${b} = ${sum}</text>`
  );
}

function svgSubParts(a, b, diff) {
  return fig(
    "g2-sub-parts",
    "Thành phần phép trừ",
    `          <rect x="20" y="40" width="70" height="50" fill="none" stroke="${C.r}" stroke-width="2"/>
          <rect x="120" y="40" width="70" height="50" fill="none" stroke="${C.p}" stroke-width="2"/>
          <rect x="230" y="40" width="70" height="50" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="55" y="72" font-size="22" text-anchor="middle">${a}</text>
          <text x="155" y="72" font-size="22" text-anchor="middle">${b}</text>
          <text x="265" y="72" font-size="22" text-anchor="middle">${diff}</text>
          <text x="55" y="30" font-size="11" text-anchor="middle" fill="${C.r}">số bị trừ</text>
          <text x="155" y="30" font-size="11" text-anchor="middle" fill="${C.p}">số trừ</text>
          <text x="265" y="30" font-size="11" text-anchor="middle" fill="${C.b}">hiệu</text>
          <text x="100" y="72" font-size="20">−</text>
          <text x="205" y="72" font-size="20">=</text>`
  );
}

function svgCompareBars(a, b) {
  const ha = 20 + a * 1.2;
  const hb = 20 + b * 1.2;
  return fig(
    "g2-compare",
    "Hơn kém nhau",
    `          <rect x="60" y="${140 - ha}" width="60" height="${ha}" fill="none" stroke="${C.g}" stroke-width="2"/>
          <rect x="180" y="${140 - hb}" width="60" height="${hb}" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="90" y="155" font-size="12" text-anchor="middle">A = ${a}</text>
          <text x="210" y="155" font-size="12" text-anchor="middle">B = ${b}</text>
          <text x="160" y="24" font-size="13" text-anchor="middle" fill="${C.r}">${Math.abs(a - b)} (hiệu)</text>`
  );
}

function svgColumnAdd(top, bot, showCarry = true) {
  const sum = top + bot;
  const t = String(top).padStart(2, "0");
  const b = String(bot).padStart(2, "0");
  const s = String(sum);
  return fig(
    "col-add",
    "Đặt tính cộng",
    `          <rect x="140" y="20" width="150" height="130" rx="8" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="200" y="42" font-size="11" fill="${C.muted}" text-anchor="middle">chục</text>
          <text x="250" y="42" font-size="11" fill="${C.muted}" text-anchor="middle">đv</text>
          ${showCarry ? `<text x="250" y="58" font-size="12" fill="${C.r}" text-anchor="middle">¹</text>` : ""}
          <text x="200" y="88" font-size="26" text-anchor="middle">${t[0]}</text>
          <text x="250" y="88" font-size="26" text-anchor="middle">${t[1]}</text>
          <text x="160" y="118" font-size="22">+</text>
          <text x="200" y="118" font-size="26" text-anchor="middle">${b[0]}</text>
          <text x="250" y="118" font-size="26" text-anchor="middle">${b[1]}</text>
          <line x1="155" y1="126" x2="280" y2="126" stroke="${C.d}" stroke-width="2"/>
          <text x="225" y="148" font-size="22" text-anchor="middle" fill="${C.g}">${s}</text>
          <text x="40" y="50" font-size="12" fill="${C.g}">Cộng đv trước</text>
          <text x="40" y="75" font-size="12" fill="${C.muted}">${showCarry ? "Có nhớ khi ≥10" : "Không nhớ"}</text>
          <text x="40" y="110" font-size="13">${top} + ${bot}</text>`
  );
}

function svgColumnSub(top, bot) {
  const diff = top - bot;
  const t = String(top).padStart(2, "0");
  const b = String(bot).padStart(2, "0");
  return fig(
    "col-sub",
    "Đặt tính trừ có nhớ",
    `          <rect x="140" y="20" width="150" height="130" rx="8" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="40" y="40" font-size="12" fill="${C.r}">Mượn 1 chục</text>
          <text x="40" y="60" font-size="12" fill="${C.muted}">= 10 đơn vị</text>
          <text x="250" y="48" font-size="11" fill="${C.r}" text-anchor="middle">+10</text>
          <text x="200" y="80" font-size="26" text-anchor="middle">${t[0]}</text>
          <text x="250" y="80" font-size="26" text-anchor="middle">${t[1]}</text>
          <text x="160" y="110" font-size="22">−</text>
          <text x="200" y="110" font-size="26" text-anchor="middle">${b[0]}</text>
          <text x="250" y="110" font-size="26" text-anchor="middle">${b[1]}</text>
          <line x1="155" y1="118" x2="280" y2="118" stroke="${C.d}" stroke-width="2"/>
          <text x="225" y="142" font-size="22" text-anchor="middle" fill="${C.g}">${diff}</text>
          <text x="40" y="130" font-size="13">${top} − ${bot}</text>`
  );
}

function svgMakeTen(a, need, rest, sum) {
  return fig(
    "g2-make-ten",
    "Cộng qua 10",
    `          <text x="160" y="28" font-size="14" text-anchor="middle">${a} + ${need + rest}</text>
          <rect x="30" y="50" width="80" height="40" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="70" y="76" font-size="16" text-anchor="middle">${a}</text>
          <text x="120" y="76" font-size="16">+</text>
          <rect x="140" y="50" width="50" height="40" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="165" y="76" font-size="16" text-anchor="middle">${need}</text>
          <text x="200" y="76" font-size="16">+</text>
          <rect x="220" y="50" width="50" height="40" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="245" y="76" font-size="16" text-anchor="middle">${rest}</text>
          <text x="160" y="120" font-size="13" text-anchor="middle">${a}+${need}=10, còn ${rest} → ${sum}</text>
          <text x="160" y="145" font-size="16" text-anchor="middle" fill="${C.g}">${a} + ${need + rest} = ${sum}</text>`
  );
}

function svgArray(rows, cols, label) {
  let dots = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots += `          <circle cx="${50 + c * 28}" cy="${40 + r * 28}" r="8" fill="none" stroke="${C.g}" stroke-width="2"/>\n`;
    }
  }
  return fig(
    "g2-array",
    label,
    `${dots}          <text x="200" y="50" font-size="14">${rows} hàng</text>
          <text x="200" y="75" font-size="14">${cols} cột</text>
          <text x="200" y="110" font-size="16" fill="${C.b}">${rows} × ${cols} = ${rows * cols}</text>`
  );
}

function svgDivide(total, groups, each) {
  let g = "";
  const slot = Math.min(90, Math.floor(280 / Math.max(groups, 1)));
  for (let i = 0; i < groups; i++) {
    const x0 = 20 + i * slot;
    g += `          <rect x="${x0}" y="28" width="${slot - 10}" height="95" rx="8" fill="none" stroke="${C.b}" stroke-width="2"/>\n`;
    g += `          <text x="${x0 + (slot - 10) / 2}" y="22" font-size="10" text-anchor="middle" fill="${C.muted}">nhóm ${i + 1}</text>\n`;
    for (let j = 0; j < each && j < 12; j++) {
      const cx = x0 + 14 + (j % 3) * 14;
      const cy = 48 + Math.floor(j / 3) * 16;
      g += `          <circle cx="${cx}" cy="${cy}" r="5" fill="none" stroke="${C.g}" stroke-width="2"/>\n`;
    }
  }
  return fig(
    "divide",
    "Chia đều",
    `${g}          <text x="160" y="150" font-size="14" text-anchor="middle">${total} : ${groups} = ${each}</text>`
  );
}

function svgClock(h, m) {
  // simple clock face
  const angleH = ((h % 12) + m / 60) * 30 - 90;
  const angleM = m * 6 - 90;
  const hx = 160 + 35 * Math.cos((angleH * Math.PI) / 180);
  const hy = 80 + 35 * Math.sin((angleH * Math.PI) / 180);
  const mx = 160 + 50 * Math.cos((angleM * Math.PI) / 180);
  const my = 80 + 50 * Math.sin((angleM * Math.PI) / 180);
  return fig(
    "g2-clock",
    `${h} giờ ${m} phút`,
    `          <circle cx="160" cy="80" r="60" fill="none" stroke="${C.d}" stroke-width="2"/>
          <circle cx="160" cy="80" r="3" fill="${C.d}"/>
          <line x1="160" y1="80" x2="${hx}" y2="${hy}" stroke="${C.r}" stroke-width="3"/>
          <line x1="160" y1="80" x2="${mx}" y2="${my}" stroke="${C.b}" stroke-width="2"/>
          <text x="160" y="30" font-size="11" text-anchor="middle">12</text>
          <text x="210" y="85" font-size="11" text-anchor="middle">3</text>
          <text x="160" y="138" font-size="11" text-anchor="middle">6</text>
          <text x="110" y="85" font-size="11" text-anchor="middle">9</text>
          <text x="160" y="155" font-size="13" text-anchor="middle">${h} giờ${m ? " " + m + " phút" : ""}</text>`
  );
}

function svgGeometry() {
  return fig(
    "g2-geo",
    "Đoạn thẳng và đường thẳng",
    `          <line x1="30" y1="50" x2="140" y2="50" stroke="${C.g}" stroke-width="3"/>
          <circle cx="30" cy="50" r="4" fill="${C.g}"/>
          <circle cx="140" cy="50" r="4" fill="${C.g}"/>
          <text x="85" y="40" font-size="12" text-anchor="middle" fill="${C.g}">đoạn thẳng</text>
          <line x1="20" y1="110" x2="160" y2="110" stroke="${C.b}" stroke-width="2"/>
          <polygon points="160,110 150,105 150,115" fill="${C.b}"/>
          <polygon points="20,110 30,105 30,115" fill="${C.b}"/>
          <text x="90" y="100" font-size="12" text-anchor="middle" fill="${C.b}">đường thẳng</text>
          <path d="M200,40 Q240,80 200,120 Q260,80 280,40" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="250" y="140" font-size="12" text-anchor="middle" fill="${C.r}">đường cong</text>`
  );
}

function svgQuad() {
  return fig(
    "g2-quad",
    "Hình tứ giác",
    `          <polygon points="60,40 160,30 180,120 40,110" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="110" y="85" font-size="12" text-anchor="middle">tứ giác</text>
          <text x="60" y="35" font-size="11">A</text>
          <text x="165" y="28" font-size="11">B</text>
          <text x="185" y="130" font-size="11">C</text>
          <text x="30" y="120" font-size="11">D</text>
          <rect x="210" y="40" width="80" height="60" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="250" y="75" font-size="11" text-anchor="middle">chữ nhật</text>
          <text x="250" y="130" font-size="11" text-anchor="middle" fill="${C.muted}">cũng là tứ giác</text>`
  );
}

function svgCylinderSphere() {
  return fig(
    "g2-solid",
    "Khối trụ và khối cầu",
    `          <ellipse cx="90" cy="40" rx="40" ry="12" fill="none" stroke="${C.g}" stroke-width="2"/>
          <line x1="50" y1="40" x2="50" y2="110" stroke="${C.g}" stroke-width="2"/>
          <line x1="130" y1="40" x2="130" y2="110" stroke="${C.g}" stroke-width="2"/>
          <ellipse cx="90" cy="110" rx="40" ry="12" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="90" y="145" font-size="12" text-anchor="middle" fill="${C.g}">khối trụ</text>
          <circle cx="230" cy="80" r="45" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="230" y="145" font-size="12" text-anchor="middle" fill="${C.b}">khối cầu</text>`
  );
}

function svgPlace3(h, t, o) {
  return fig(
    "g2-place3",
    "Số có ba chữ số",
    `          <rect x="20" y="35" width="85" height="70" fill="none" stroke="${C.g}" stroke-width="2"/>
          <rect x="115" y="35" width="85" height="70" fill="none" stroke="${C.b}" stroke-width="2"/>
          <rect x="210" y="35" width="85" height="70" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="62" y="28" font-size="11" text-anchor="middle">Trăm</text>
          <text x="157" y="28" font-size="11" text-anchor="middle">Chục</text>
          <text x="252" y="28" font-size="11" text-anchor="middle">Đơn vị</text>
          <text x="62" y="80" font-size="32" text-anchor="middle">${h}</text>
          <text x="157" y="80" font-size="32" text-anchor="middle">${t}</text>
          <text x="252" y="80" font-size="32" text-anchor="middle">${o}</text>
          <text x="160" y="140" font-size="14" text-anchor="middle">${h}${t}${o} = ${h}00 + ${t}0 + ${o}</text>`
  );
}

function svgMoney() {
  return fig(
    "g2-money",
    "Tiền Việt Nam",
    `          <rect x="30" y="40" width="70" height="40" rx="4" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="65" y="65" font-size="12" text-anchor="middle">1000đ</text>
          <rect x="120" y="40" width="70" height="40" rx="4" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="155" y="65" font-size="12" text-anchor="middle">2000đ</text>
          <rect x="210" y="40" width="70" height="40" rx="4" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="245" y="65" font-size="12" text-anchor="middle">5000đ</text>
          <text x="160" y="120" font-size="13" text-anchor="middle">1000 + 2000 = 3000 đồng</text>`
  );
}

function svgLength() {
  return fig(
    "g2-length",
    "Đơn vị độ dài",
    `          <line x1="40" y1="50" x2="280" y2="50" stroke="${C.d}" stroke-width="2"/>
          <line x1="40" y1="40" x2="40" y2="60" stroke="${C.d}" stroke-width="2"/>
          <line x1="280" y1="40" x2="280" y2="60" stroke="${C.d}" stroke-width="2"/>
          <text x="160" y="40" font-size="12" text-anchor="middle">1 m = 10 dm</text>
          <rect x="40" y="80" width="90" height="36" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="85" y="103" font-size="12" text-anchor="middle">1 dm</text>
          <rect x="150" y="80" width="120" height="36" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="210" y="103" font-size="12" text-anchor="middle">1 km = 1000 m</text>`
  );
}

function svgKgL() {
  return fig(
    "g2-kgl",
    "Ki-lô-gam và lít",
    `          <rect x="40" y="50" width="90" height="60" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="85" y="85" font-size="18" text-anchor="middle">1 kg</text>
          <text x="85" y="140" font-size="12" text-anchor="middle" fill="${C.g}">khối lượng</text>
          <path d="M200,40 L240,40 L255,110 L185,110 Z" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="220" y="85" font-size="16" text-anchor="middle">1 l</text>
          <text x="220" y="140" font-size="12" text-anchor="middle" fill="${C.b}">dung tích</text>`
  );
}

function svgChart() {
  return fig(
    "g2-chart",
    "Biểu đồ tranh",
    `          <text x="40" y="30" font-size="12">Xe đạp</text>
          <circle cx="100" cy="25" r="8" fill="none" stroke="${C.g}" stroke-width="2"/>
          <circle cx="125" cy="25" r="8" fill="none" stroke="${C.g}" stroke-width="2"/>
          <circle cx="150" cy="25" r="8" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="180" y="30" font-size="12">= 3</text>
          <text x="40" y="70" font-size="12">Xe máy</text>
          <circle cx="100" cy="65" r="8" fill="none" stroke="${C.b}" stroke-width="2"/>
          <circle cx="125" cy="65" r="8" fill="none" stroke="${C.b}" stroke-width="2"/>
          <circle cx="150" cy="65" r="8" fill="none" stroke="${C.b}" stroke-width="2"/>
          <circle cx="175" cy="65" r="8" fill="none" stroke="${C.b}" stroke-width="2"/>
          <circle cx="200" cy="65" r="8" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="230" y="70" font-size="12">= 5</text>
          <text x="160" y="120" font-size="12" text-anchor="middle">1 hình = 1 xe</text>
          <text x="160" y="145" font-size="13" text-anchor="middle" fill="${C.r}">Xe máy nhiều hơn 2 xe</text>`
  );
}

function svgChance() {
  return fig(
    "g2-chance",
    "Chắc chắn – có thể – không thể",
    `          <rect x="15" y="30" width="90" height="80" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="60" y="55" font-size="11" text-anchor="middle" fill="${C.g}">Chắc chắn</text>
          <text x="60" y="80" font-size="10" text-anchor="middle">toàn bi đỏ</text>
          <text x="60" y="98" font-size="10" text-anchor="middle">→ bốc đỏ</text>
          <rect x="115" y="30" width="90" height="80" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="160" y="55" font-size="11" text-anchor="middle" fill="${C.b}">Có thể</text>
          <text x="160" y="80" font-size="10" text-anchor="middle">đỏ và xanh</text>
          <text x="160" y="98" font-size="10" text-anchor="middle">→ bốc đỏ?</text>
          <rect x="215" y="30" width="90" height="80" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="260" y="55" font-size="11" text-anchor="middle" fill="${C.r}">Không thể</text>
          <text x="260" y="80" font-size="10" text-anchor="middle">không có vàng</text>
          <text x="260" y="98" font-size="10" text-anchor="middle">→ bốc vàng</text>`
  );
}


function svgTimesTable(n, base) {
  let dots = "";
  // show one row example: base × 4 as 4 groups of base dots (cap visual size)
  const groups = 4;
  const per = Math.min(base, 5);
  for (let g = 0; g < groups; g++) {
    for (let j = 0; j < per; j++) {
      dots += `          <circle cx="${30 + g * 36 + (j % 2) * 12}" cy="${36 + Math.floor(j / 2) * 12}" r="5" fill="none" stroke="${C.g}" stroke-width="2"/>\n`;
    }
  }
  const rows = [];
  for (let i = 1; i <= 5; i++) {
    const y = 20 + i * 20;
    rows.push(`          <rect x="175" y="${y - 14}" width="130" height="18" fill="none" stroke="${i % 2 ? C.b : C.p}" stroke-width="1"/>`);
    rows.push(`          <text x="185" y="${y}" font-size="12">${base}×${i}=${base * i}</text>`);
    rows.push(`          <text x="250" y="${y}" font-size="12">${base}×${i + 5}=${base * (i + 5)}</text>`);
  }
  return fig(
    `times${base}`,
    `Bảng nhân ${base}`,
    `${dots}          <text x="80" y="100" font-size="12" text-anchor="middle" fill="${C.g}">${groups} nhóm × ${per}</text>
          <text x="80" y="120" font-size="14" text-anchor="middle" fill="${C.r}">${base} × ${groups} = ${base * groups}</text>
` +
      rows.join("\n") +
      `\n          <text x="160" y="155" font-size="11" text-anchor="middle" fill="${C.muted}">Bảng nhân ${base} · ôn mỗi ngày</text>`
  );
}

function svgZigzag() {
  return fig(
    "zigzag",
    "Đường gấp khúc",
    `          <polyline points="30,120 70,40 110,100 150,30 190,90 230,40 280,110" fill="none" stroke="${C.g}" stroke-width="2"/>
          <circle cx="30" cy="120" r="3" fill="${C.d}"/>
          <circle cx="280" cy="110" r="3" fill="${C.d}"/>
          <text x="160" y="150" font-size="12" text-anchor="middle">Đường gấp khúc = đoạn nối đoạn</text>`
  );
}

function svgCalendar() {
  return fig(
    "calendar",
    "Lịch ngày tháng",
    `          <rect x="40" y="20" width="240" height="120" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="160" y="45" font-size="14" text-anchor="middle" fill="${C.b}">Tháng 6</text>
          <text x="70" y="75" font-size="11">T2</text>
          <text x="110" y="75" font-size="11">T3</text>
          <text x="150" y="75" font-size="11">T4</text>
          <text x="190" y="75" font-size="11">T5</text>
          <text x="230" y="75" font-size="11">T6</text>
          <circle cx="150" cy="105" r="14" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="150" y="110" font-size="12" text-anchor="middle" fill="${C.r}">15</text>
          <text x="160" y="150" font-size="11" text-anchor="middle">Một tuần có 7 ngày</text>`
  );
}

function svgShopping() {
  return fig(
    "shop",
    "Tiền và mua bán",
    `          <rect x="30" y="35" width="80" height="50" rx="4" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="70" y="65" font-size="12" text-anchor="middle">5000đ</text>
          <text x="120" y="65" font-size="18">−</text>
          <rect x="140" y="35" width="80" height="50" rx="4" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="180" y="65" font-size="12" text-anchor="middle">2000đ</text>
          <text x="235" y="65" font-size="18">=</text>
          <text x="280" y="65" font-size="14" text-anchor="middle" fill="${C.r}">3000đ</text>
          <text x="160" y="120" font-size="13" text-anchor="middle">Đưa tiền − giá sp = tiền thừa</text>
          <text x="160" y="145" font-size="12" text-anchor="middle" fill="${C.muted}">Kiểm: thừa + giá = tiền đưa</text>`
  );
}

function svgCarrySteps() {
  return fig(
    "carry-steps",
    "Cộng có nhớ từng bước",
    `          <text x="30" y="35" font-size="13" fill="${C.g}">B1. Cộng đơn vị</text>
          <text x="30" y="55" font-size="12">8 + 5 = 13 → viết 3, nhớ 1</text>
          <text x="30" y="85" font-size="13" fill="${C.b}">B2. Cộng chục (+ nhớ)</text>
          <text x="30" y="105" font-size="12">2 + 1 + 1 = 4</text>
          <text x="30" y="135" font-size="14" fill="${C.r}">28 + 5 = 33</text>
          <rect x="200" y="30" width="90" height="100" fill="none" stroke="${C.d}" stroke-width="2"/>
          <text x="245" y="55" font-size="11" text-anchor="middle" fill="${C.r}">¹</text>
          <text x="230" y="80" font-size="20" text-anchor="middle">2 8</text>
          <text x="230" y="105" font-size="20" text-anchor="middle">+ 5</text>
          <line x1="210" y1="112" x2="280" y2="112" stroke="${C.d}" stroke-width="1.5"/>
          <text x="230" y="135" font-size="20" text-anchor="middle">3 3</text>`
  );
}

function svgBorrowSteps() {
  return fig(
    "borrow-steps",
    "Trừ có nhớ từng bước",
    `          <text x="30" y="35" font-size="13" fill="${C.r}">B1. Đơn vị không đủ → mượn</text>
          <text x="30" y="55" font-size="12">12 − 5 = 7 (đã mượn 1 chục)</text>
          <text x="30" y="85" font-size="13" fill="${C.b}">B2. Hàng chục giảm 1</text>
          <text x="30" y="105" font-size="12">3 − 1 = 2</text>
          <text x="30" y="135" font-size="14" fill="${C.g}">32 − 5 = 27</text>
          <rect x="200" y="30" width="90" height="100" fill="none" stroke="${C.d}" stroke-width="2"/>
          <text x="245" y="55" font-size="11" text-anchor="middle" fill="${C.r}">+10</text>
          <text x="230" y="80" font-size="20" text-anchor="middle">3 2</text>
          <text x="230" y="105" font-size="20" text-anchor="middle">− 5</text>
          <line x1="210" y1="112" x2="280" y2="112" stroke="${C.d}" stroke-width="1.5"/>
          <text x="230" y="135" font-size="20" text-anchor="middle">2 7</text>`
  );
}


function svgReview(title) {
  return fig(
    "review",
    title,
    `          <rect x="20" y="18" width="130" height="48" fill="none" stroke="${C.g}" stroke-width="2"/>
          <text x="85" y="38" font-size="12" text-anchor="middle">1. Đọc đề kỹ</text>
          <text x="85" y="54" font-size="10" text-anchor="middle" fill="${C.muted}">gạch từ khóa</text>
          <rect x="170" y="18" width="130" height="48" fill="none" stroke="${C.b}" stroke-width="2"/>
          <text x="235" y="38" font-size="12" text-anchor="middle">2. Chọn phép</text>
          <text x="235" y="54" font-size="10" text-anchor="middle" fill="${C.muted}">+ − × :</text>
          <rect x="20" y="80" width="130" height="48" fill="none" stroke="${C.r}" stroke-width="2"/>
          <text x="85" y="100" font-size="12" text-anchor="middle">3. Đặt tính</text>
          <text x="85" y="116" font-size="10" text-anchor="middle" fill="${C.muted}">nhớ / mượn</text>
          <rect x="170" y="80" width="130" height="48" fill="none" stroke="${C.p}" stroke-width="2"/>
          <text x="235" y="100" font-size="12" text-anchor="middle">4. Kiểm tra</text>
          <text x="235" y="116" font-size="10" text-anchor="middle" fill="${C.muted}">phép ngược</text>
          <text x="160" y="150" font-size="11" text-anchor="middle">${esc(title)}</text>`
  );
}

function body(parts) {
  const {
    animFig,
    why,
    def,
    easy,
    step,
    trap,
    idea,
    warns,
    checks,
    slow,
    memory,
    caption,
  } = parts;
  const warnList = (warns || [])
    .map((w) => `<li>${w}</li>`)
    .join("\n          ");
  const checkPs = (checks || [])
    .map((c) => `<p>${c.q} <em>— ${c.a}</em></p>`)
    .join("\n        ");
  let fig = animFig;
  if (caption) {
    fig = animFig.replace(
      "</figure>",
      `        <figcaption>${caption}</figcaption>\n      </figure>`
    );
  }
  return `    body: String.raw\`
${fig}
      <p><strong>Vì sao học bài này?</strong> ${why}</p>
      <div class="definition">
        <p>${def}</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ dễ.</strong> ${easy}</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ thêm một bước.</strong> ${step}</p>
      </div>
      <div class="example">
        <p><strong>Ví dụ có bẫy.</strong> ${trap}</p>
      </div>
      <div class="idea">
        <p><strong>Cách nghĩ.</strong> ${idea}</p>
      </div>
      <div class="warn">
        <p><strong>Lỗi hay gặp.</strong></p>
        <ul>
          ${warnList}
        </ul>
      </div>
      <details class="check">
        <summary>Tự kiểm tra</summary>
        ${checkPs}
      </details>
      <div class="example">
        <p><strong>Làm chậm.</strong> ${slow}</p>
      </div>
      <div class="memory"><p><strong>Nhìn lại.</strong> ${memory}</p></div>
    \``;
}

function exMC(prompt, choices, correct, hint, explain) {
  return { type: "mc", prompt, choices, correct, hint, explain };
}
function exNum(prompt, answer, hint, explain) {
  return { type: "num", prompt, answer, hint, explain };
}
function exText(prompt, answer, accept, hint, explain) {
  return { type: "text", prompt, answer, accept, hint, explain };
}

/** Full lesson catalog */
function buildLessons() {
  const L = [];

  function foldVi(s) {
    return String(s)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/\s+/g, " ")
      .trim();
  }

  function readNum(prompt, canonical) {
    const folded = foldVi(canonical);
    return exText(
      prompt,
      folded,
      [folded, canonical.toLowerCase(), foldVi(canonical)],
      canonical,
      canonical + "."
    );
  }

  function enrichExercises(num, chapter, exercises) {
    // Mini đề: keep full mixed paper, do not trim or inject stories
    if (num >= 76) return exercises.slice();

    let exs = withStories(num, chapter, exercises);

    // --- Đọc / viết số + short text answers ---
    const readBank = {
      1: readNum("Đọc số 70 (gõ không dấu cũng được):", "bảy mươi"),
      2: readNum("Đọc số 100:", "một trăm"),
      48: readNum("Đọc số 1000:", "một nghìn"),
      49: readNum("Đọc số 300 (số tròn trăm):", "ba trăm"),
      51: readNum("Đọc số 208:", "hai trăm linh tám"),
      52: readNum("Đọc số 365:", "ba trăm sáu mươi lăm"),
      54: readNum("Đọc số 909:", "chín trăm linh chín"),
      56: readNum("Đọc mệnh giá 5000 đồng (không cần chữ đồng):", "năm nghìn"),
      68: readNum("Đọc số 702:", "bảy trăm linh hai"),
    };
    if (readBank[num]) {
      exs = [readBank[num], ...exs].slice(0, 9);
    }
    // Short lời văn text (keyword / unit)
    if (num === 9) {
      exs = [
        exText(
          "Có 8 quả, hái thêm 5. Phải làm phép nào? (gõ: cong hoặc tru)",
          "cong",
          ["cong", "cộng", "cong them", "+"],
          "thêm → cộng",
          "cộng."
        ),
        ...exs,
      ].slice(0, 9);
    }
    if (num === 13) {
      exs = [
        exText(
          "A ít hơn B 4 đơn vị. Lấy B làm mốc thì làm phép nào với 4? (cong/tru)",
          "tru",
          ["tru", "trừ", "-"],
          "ít hơn mốc → trừ",
          "trừ."
        ),
        ...exs,
      ].slice(0, 9);
    }
    if (num === 15) {
      exs = [
        exText("Đơn vị đo mức nặng/nhẹ (gõ: kg hoặc l):", "kg", ["kg", "ki lo gam", "kilogam"], "kg", "kg."),
        ...exs,
      ].slice(0, 9);
    }
    if (num === 16) {
      exs = [
        exText("Đơn vị đo nước trong bình (gõ: kg hoặc l):", "l", ["l", "lit", "lít"], "l", "l."),
        ...exs,
      ].slice(0, 9);
    }

    // --- Geometry & chance: more numeric / concrete drills ---
    if (num === 25) {
      const extra = [
        exNum("Đoạn thẳng có mấy mút?", 2, "Hai đầu mút.", "2."),
        exNum("Ba điểm thẳng hàng nằm trên mấy đường thẳng?", 1, "Một đường.", "1."),
        exMC("Đường cong", ["Không thẳng", "Luôn là đoạn", "Có đúng 2 mút", "Là kg"], 0, "Cong.", "Không thẳng."),
      ];
      exs = [...extra, ...exs.filter((e) => e.type === "mc")].slice(0, 9);
    }
    if (num === 26) {
      const extra = [
        exNum("Tứ giác có mấy cạnh?", 4, "Tứ = 4.", "4."),
        exNum("Tứ giác có mấy đỉnh?", 4, "4.", "4."),
        exNum("Tam giác có mấy cạnh?", 3, "Tam = 3.", "3."),
        exNum("Đường gấp khúc tối thiểu gồm mấy đoạn thẳng?", 2, "Ít nhất 2 đoạn nối.", "2."),
      ];
      exs = [...extra, ...exs].slice(0, 9);
    }
    if (num === 28) {
      const extra = [
        exNum("Hình vuông có mấy cạnh?", 4, "4.", "4."),
        exNum("Có 2 mút → đó là đoạn. Số mút = ?", 2, "2.", "2."),
      ];
      exs = [...extra, ...exs].slice(0, 9);
    }
    if (num === 46 || num === 47) {
      const extra = [
        exNum("Hộp có 3 bóng (cầu) và 2 lon (trụ). Tất cả mấy đồ vật?", 5, "3+2.", "5."),
        exNum("Có 6 khối trụ, lấy 2. Còn mấy?", 4, "6−2.", "4."),
      ];
      exs = [...extra, ...exs.filter((e) => e.type === "mc" || isNarrativeish(e))].slice(0, 9);
    }
    if (num === 66) {
      const extra = [
        exNum("Túi 4 bi đỏ. Bốc 1 bi đỏ: chắc chắn? Gõ 1=có, 0=không", 1, "Toàn đỏ.", "1."),
        exNum("Túi không bi vàng. Bốc vàng được không? 1=có thể, 0=không thể", 0, "Không có vàng.", "0."),
        exNum("Túi đỏ và xanh. Số màu có thể bốc (tối đa)?", 2, "Hai màu.", "2."),
      ];
      exs = [...extra, ...exs].slice(0, 9);
    }
    if (num === 65) {
      const extra = [
        exNum("Biểu đồ 7 hình, 1 hình = 1. Có mấy?", 7, "Đếm.", "7."),
        exNum("4 hình, mỗi hình = 2 quả. Tổng quả?", 8, "4×2.", "8."),
        exNum("Cột A 5, cột B 9 (1=1). B hơn A?", 4, "9−5.", "4."),
      ];
      exs = [...extra, ...exs].slice(0, 9);
    }

    // --- Bảng 2 / 5 pure drills ---
    if (num === 39) {
      const drills = [1, 3, 4, 7, 9].map((k) => exNum(`2 × ${k} = ?`, 2 * k, "Bảng 2.", `${2 * k}.`));
      exs = [...drills, ...exs.filter((e) => !/^2 ×/.test(e.prompt))].slice(0, 9);
    }
    if (num === 40) {
      const drills = [1, 4, 6, 7, 9].map((k) => exNum(`5 × ${k} = ?`, 5 * k, "Bảng 5.", `${5 * k}.`));
      exs = [...drills, ...exs.filter((e) => !/^5 ×/.test(e.prompt))].slice(0, 9);
    }
    if (num === 43) {
      const drills = [2, 8, 10, 12, 18].map((n) => exNum(`${n} : 2 = ?`, n / 2, "Bảng chia 2.", `${n / 2}.`));
      exs = [...drills, ...exs.filter((e) => !/: 2 =/.test(e.prompt))].slice(0, 9);
    }
    if (num === 44) {
      const drills = [15, 20, 25, 30, 45].map((n) => exNum(`${n} : 5 = ?`, n / 5, "Bảng chia 5.", `${n / 5}.`));
      exs = [...drills, ...exs.filter((e) => !/: 5 =/.test(e.prompt))].slice(0, 9);
    }
    return exs.slice(0, 9);
  }

  function isNarrativeish(e) {
    return e.type === "num" && /An |Lan |Mỗi |Có \d+|Hộp |chia/i.test(e.prompt);
  }

  function add(num, chapter, title, summary, figSvg, content, exercises) {
    L.push({
      id: `g2-b${num}`,
      num,
      chapter,
      title,
      summary,
      figSvg: ensureUniqueAnim(figSvg, num),
      content: { ...content, caption: content.caption || summary },
      exercises: enrichExercises(num, chapter, exercises),
    });
  }

  // ===== Chapter 1 =====
  add(
    1,
    1,
    "Ôn tập các số đến 100",
    "Đếm, đọc, viết, so sánh số trong phạm vi 100.",
    svgPlaceValue2(4, 7, 1),
    {
      why: "Lớp 1 đã học số đến 100. Lớp 2 ôn lại cho chắc trước khi cộng trừ có nhớ và số đến 1000.",
      def: "Mỗi số có hai chữ số gồm <strong>hàng chục</strong> (bên trái) và <strong>hàng đơn vị</strong> (bên phải). Ví dụ 47 = 4 chục + 7 đơn vị.",
      easy: "Số 35: 3 chục và 5 đơn vị. Đọc “ba mươi lăm”. Số 70: 7 chục 0 đơn vị — đọc “bảy mươi”.",
      step: "So sánh 58 và 85. Hàng chục: 5 < 8 nên 58 < 85. So 72 và 78: cùng 7 chục, nhìn đơn vị 2 < 8 nên 72 < 78.",
      trap: "16 và 61 trông giống chữ số nhưng khác nhau. 16 = 1 chục 6 đơn vị; 61 = 6 chục 1 đơn vị. Đọc và viết đúng chiều trái → phải.",
      idea: "Muốn đọc/viết đúng: chỉ hàng chục trước, rồi hàng đơn vị. Muốn so sánh: so hàng chục trước; nếu bằng nhau mới so đơn vị.",
      warns: [
        "Đảo chữ số (16 ↔ 61).",
        "Quên số 0 ở đơn vị (70 ≠ 7).",
        "So sánh chỉ nhìn chữ số đầu tiên mà không hiểu là hàng chục.",
      ],
      checks: [
        { q: "52 gồm mấy chục, mấy đơn vị?", a: "5 chục, 2 đơn vị." },
        { q: "Số nào lớn hơn: 39 hay 93?", a: "93." },
      ],
      slow: "Viết số gồm 6 chục và 4 đơn vị. Bước 1: 6 chục = 60. Bước 2: thêm 4 đơn vị → 64. Đọc: sáu mươi tư.",
      memory: "Hai chữ số: chục | đơn vị. So sánh: chục trước, đơn vị sau.",
    },
    [
      exMC("Số 48 gồm", ["4 chục 8 đơn vị", "8 chục 4 đơn vị", "48 chục", "12 đơn vị"], 0, "Trái = chục.", "4 chục 8 đơn vị."),
      exNum("Viết số gồm 9 chục và 0 đơn vị.", 90, "9 chục = 90.", "90."),
      exMC("Số lớn nhất trong các số 27, 72, 17, 71 là", ["72", "27", "71", "17"], 0, "So hàng chục.", "72."),
      exNum("Số liền sau 99 là", 100, "+1.", "100."),
      exMC("Số nhỏ nhất: 45, 54, 40, 50", ["40", "45", "50", "54"], 0, "So chục rồi đơn vị.", "40."),
      exNum("3 chục + 5 đơn vị = ?", 35, "Ghép hàng.", "35."),
      exMC("Đọc số 70", ["Bảy mươi", "Bảy không", "Bảy đơn vị", "Mười bảy"], 0, "Tròn chục.", "Bảy mươi."),
    ]
  );

  add(
    2,
    1,
    "Tia số. Số liền trước, số liền sau",
    "Đặt số trên tia số; tìm số liền trước và liền sau.",
    svgNumberLine([23, 24, 25, 26, 27], 25),
    {
      why: "Tia số giúp “nhìn thấy” thứ tự các số. Số liền trước/sau dùng rất nhiều khi đếm và so sánh.",
      def: "Trên tia số, các số tăng từ trái sang phải. <strong>Số liền trước</strong> của n là n - 1. <strong>Số liền sau</strong> là n + 1.",
      easy: "Số liền trước của 25 là 24. Số liền sau của 25 là 26.",
      step: "Số đứng giữa 18 và 20 trên tia số là 19. Từ 18 sang 20 phải bước đúng 2 đơn vị.",
      trap: "Số liền sau của 29 là 30, không phải 20. Khi sang hàng chục mới, nhớ “đổi chục”.",
      idea: "Liền trước = lùi 1 vạch; liền sau = tiến 1 vạch. Không nhảy cóc.",
      warns: [
        "Nhầm liền trước với liền sau.",
        "Quên đổi hàng khi 39 → 40, 99 → 100.",
      ],
      checks: [
        { q: "Liền trước của 40?", a: "39." },
        { q: "Liền sau của 89?", a: "90." },
      ],
      slow: "Tìm số liền sau 99: 99 + 1. Đơn vị 9 + 1 = 10 → viết 0 nhớ 1 chục; 9 chục + 1 = 10 chục = 1 trăm → 100.",
      memory: "Liền trước −1, liền sau +1. Trái nhỏ, phải lớn trên tia số.",
    },
    [
      exNum("Số liền trước của 56?", 55, "Trừ 1.", "55."),
      exNum("Số liền sau của 79?", 80, "Cộng 1.", "80."),
      exMC("Số đứng giữa 44 và 46 là", ["45", "43", "47", "40"], 0, "Giữa hai số cách 2.", "45."),
      exNum("Liền sau của 99?", 100, "+1.", "100."),
      exMC("Trên tia số, số bên trái 30 là số", ["bé hơn 30", "lớn hơn 30", "bằng 30", "không so được"], 0, "Trái → nhỏ.", "Bé hơn 30."),
      exNum("Liền trước của 1?", 0, "0.", "0."),
      exNum("Hai số liền sau liên tiếp của 10 là 11 và …?", 12, "+2.", "12."),
    ]
  );

  add(
    3,
    1,
    "Các thành phần của phép cộng, phép trừ",
    "Gọi đúng số hạng, tổng; số bị trừ, số trừ, hiệu.",
    svgAddParts(8, 5, 13),
    {
      why: "Biết tên từng “người trong phép tính” giúp giải bài tìm x và nói toán đúng.",
      def: "Phép cộng a + b = c: a, b là <strong>số hạng</strong>, c là <strong>tổng</strong>. Phép trừ a - b = c: a <strong>số bị trừ</strong>, b <strong>số trừ</strong>, c <strong>hiệu</strong>.",
      easy: "9 + 4 = 13: số hạng 9 và 4, tổng 13. 13 − 4 = 9: số bị trừ 13, số trừ 4, hiệu 9.",
      step: "Muốn tìm một số hạng khi biết tổng và số hạng kia: lấy tổng trừ đi số hạng đã biết. Ví dụ □ + 6 = 15 → □ = 15 − 6 = 9.",
      trap: "Không gọi nhầm “tổng” thành “hiệu”. Dấu + → tổng; dấu − → hiệu.",
      idea: "Cộng và trừ là hai phép “ngược nhau”. Biết hai thành phần thì tìm được thành phần còn lại.",
      warns: [
        "Nhầm tên thành phần.",
        "Tìm số hạng bằng cách cộng thay vì trừ.",
      ],
      checks: [
        { q: "Trong 7 + 8 = 15, 15 gọi là gì?", a: "Tổng." },
        { q: "Trong 20 − 6 = 14, 6 gọi là gì?", a: "Số trừ." },
      ],
      slow: "Tìm số trừ: 18 − □ = 10. Muốn tìm số trừ: lấy số bị trừ trừ hiệu: 18 − 10 = 8. Kiểm: 18 − 8 = 10.",
      memory: "Cộng: số hạng + số hạng = tổng. Trừ: số bị trừ − số trừ = hiệu.",
    },
    [
      exMC("Trong 6 + 9 = 15, số 15 là", ["Tổng", "Hiệu", "Số trừ", "Số bị trừ"], 0, "Kết quả cộng.", "Tổng."),
      exMC("Trong 16 − 5 = 11, số 16 là", ["Số bị trừ", "Số trừ", "Hiệu", "Số hạng"], 0, "Đứng trước dấu trừ.", "Số bị trừ."),
      exNum("Tổng của 8 và 7?", 15, "Cộng.", "15."),
      exNum("Hiệu 19 − 6?", 13, "Trừ.", "13."),
      exNum("□ + 5 = 14. □ = ?", 9, "14 − 5.", "9."),
      exNum("12 − □ = 7. □ = ?", 5, "12 − 7.", "5."),
      exMC("Muốn tìm số hạng, lấy", ["Tổng trừ số hạng kia", "Hai số hạng cộng", "Hiệu trừ tổng", "Không làm được"], 0, "Phép ngược.", "Tổng − số hạng kia."),
    ]
  );

  add(
    4,
    1,
    "Hơn, kém nhau bao nhiêu",
    "Dùng phép trừ để biết hơn/kém bao nhiêu đơn vị.",
    svgCompareBars(12, 8),
    {
      why: "Trong đời sống ta hay hỏi “nhiều hơn bao nhiêu?” — đó chính là tìm hiệu.",
      def: "A <strong>hơn</strong> B một số đơn vị nghĩa là A - B bằng số đó. A <strong>kém</strong> B nghĩa là B hơn A, tức B - A.",
      easy: "Lan 12 viên bi, Minh 8. Lan hơn Minh 12 - 8 = 4 viên. Minh kém Lan 4 viên.",
      step: "Sách An 25 trang, sách Bình 31 trang. Bình hơn An 31 - 25 = 6 trang.",
      trap: "Câu “A hơn B bao nhiêu?” luôn lấy số lớn hơn trong hai số A, B trừ số bé hơn — không cộng A với B.",
      idea: "Vẽ hai đoạn (hoặc hai cột): đoạn dài hơn — đoạn ngắn = phần hơn.",
      warns: [
        "Cộng thay vì trừ khi hỏi “hơn bao nhiêu”.",
        "Trừ nhầm chiều (số bé trừ số lớn).",
      ],
      checks: [
        { q: "15 hơn 9 bao nhiêu?", a: "6." },
        { q: "20 kém 28 bao nhiêu?", a: "8." },
      ],
      slow: "Nam 18 nhãn, Hoa 11 nhãn. Hỏi Nam hơn Hoa? 18 − 11: 8 − 1 = 7. Đáp án 7 nhãn.",
      memory: "Hơn/kém bao nhiêu → phép trừ (tìm hiệu).",
    },
    [
      exNum("17 hơn 10 bao nhiêu?", 7, "17 − 10.", "7."),
      exNum("25 kém 30 bao nhiêu?", 5, "30 − 25.", "5."),
      exNum("An có 14 tem, Bình có 9 tem. An hơn Bình mấy tem?", 5, "14 − 9.", "5."),
      exMC("“Kém nhau bao nhiêu” dùng phép", ["Trừ", "Cộng", "Nhân", "Chia"], 0, "Hiệu.", "Trừ."),
      exNum("42 hơn 35?", 7, "42 − 35.", "7."),
      exNum("Số lớn hơn 50 là 58. Lớn hơn mấy?", 8, "58 − 50.", "8."),
      exNum("100 kém 100 bao nhiêu?", 0, "Bằng nhau.", "0."),
    ]
  );

  add(
    5,
    1,
    "Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100",
    "Cộng trừ không nhớ với số có hai chữ số.",
    svgColumnAdd(34, 52, false),
    {
      why: "Đặt tính thẳng cột là nền để sau này cộng trừ có nhớ không bị lệch hàng.",
      def: "Đặt tính: <strong>đơn vị thẳng đơn vị, chục thẳng chục</strong>. Cộng/trừ đơn vị trước, rồi đến chục. <em>Không nhớ</em> khi tổng đơn vị &lt; 10 và đơn vị đủ trừ.",
      easy: "34 + 52: 4+2=6, 3+5=8 → 86. 67 − 23: 7−3=4, 6−2=4 → 44.",
      step: "60 + 30 = 90 (số tròn chục). 99 − 40 = 59.",
      trap: "Viết 8 + 21 thành lệch cột (8 thẳng với 2) sẽ ra sai. Luôn thẳng từ bên phải.",
      idea: "Nhẩm từng hàng. Kiểm bằng phép ngược: tổng − một số hạng = số hạng kia.",
      warns: ["Lệch cột khi đặt tính.", "Cộng chục với đơn vị."],
      checks: [
        { q: "23 + 45 = ?", a: "68." },
        { q: "58 − 17 = ?", a: "41." },
      ],
      slow: "48 + 21. Đặt: 48. Dưới +21. 8+1=9; 4+2=6 → 69. Kiểm: 69 − 21 = 48.",
      memory: "Thẳng cột, đơn vị trước. Không nhớ = mỗi hàng &lt; 10 khi cộng.",
    },
    [
      exNum("23 + 45 = ?", 68, "Không nhớ.", "68."),
      exNum("58 − 17 = ?", 41, "Không nhớ.", "41."),
      exNum("60 + 30 = ?", 90, "Tròn chục.", "90."),
      exNum("99 − 40 = ?", 59, "Trừ chục.", "59."),
      exMC("Phép nào không nhớ?", ["34 + 21", "28 + 15", "19 + 6", "47 + 8"], 0, "Đơn vị 4+1=5.", "34+21."),
      exNum("11 + 22 + 33 = ?", 66, "66.", "66."),
      exNum("85 − 30 = ?", 55, "Trừ.", "55."),
    ]
  );

  add(
    6,
    1,
    "Luyện tập chung",
    "Ôn số đến 100, tia số, cộng trừ không nhớ, hơn kém.",
    svgReview("Luyện chủ đề 1"),
    {
      why: "Gộp các ý vừa học để xem chỗ nào còn lung lay trước khi sang cộng qua 10.",
      def: "Cùng lúc dùng: đọc viết số, liền trước/sau, tên thành phần phép tính, cộng trừ không nhớ, hơn kém.",
      easy: "Liền trước 70 là 69. 42 + 35 = 77.",
      step: "Tìm số hạng: □ + 12 = 45 → □ = 33. 36 hơn 29 là 7.",
      trap: "Đề “tìm hiệu” khác “tìm số hạng”. Đọc kỹ dấu và câu hỏi.",
      idea: "Gạch chân đề: đang hỏi tổng, hiệu, hay hơn bao nhiêu?",
      warns: ["Làm vội không đọc hết câu.", "Nhầm cộng/trừ."],
      checks: [
        { q: "42 + 35 = ?", a: "77." },
        { q: "36 hơn 29?", a: "7." },
      ],
      slow: "80 − 26: đơn vị 0 không trừ 6 → đây đã là có nhớ (mượn). 80 − 20 = 60, 60 − 6 = 54.",
      memory: "Chủ đề 1: số đến 100 + cộng trừ không nhớ + hơn kém.",
    },
    [
      exNum("Liền trước của 70?", 69, "−1.", "69."),
      exNum("42 + 35 = ?", 77, "Cộng.", "77."),
      exNum("36 hơn 29?", 7, "Hiệu.", "7."),
      exMC("Trong 50 − 18 = 32, 32 là", ["Hiệu", "Tổng", "Số trừ", "Số hạng"], 0, "Kết quả trừ.", "Hiệu."),
      exNum("□ + 12 = 45. □=?", 33, "45−12.", "33."),
      exNum("90 − 40 = ?", 50, "Trừ.", "50."),
      exNum("Liền sau 99?", 100, "+1.", "100."),
    ]
  );

  // ===== Chapter 2: scope 20 =====
  add(
    7,
    2,
    "Phép cộng (qua 10) trong phạm vi 20",
    "Cộng hai số có tổng lớn hơn 10, không quá 20.",
    svgMakeTen(8, 2, 4, 14),
    {
      why: "Cộng qua 10 là bước đệm bắt buộc trước cộng có nhớ ở phạm vi 100.",
      def: "Khi tổng đơn vị ≥ 10, tách cách <strong>bù 10</strong>: tách số thứ hai thành phần đủ để số thứ nhất thành 10, rồi cộng phần còn lại.",
      easy: "8 + 5: 8 cần 2 để thành 10; 5 = 2 + 3 → 10 + 3 = 13.",
      step: "9 + 7 = 9 + 1 + 6 = 10 + 6 = 16. 6 + 8 = 6 + 4 + 4 = 14.",
      trap: "Đếm ngón tay từng cái dễ lệch khi mệt. Nên nhớ các cặp bù 10: 1+9, 2+8, 3+7, 4+6, 5+5.",
      idea: "Hỏi: “Số này cần thêm mấy để được 10?” — đó là chìa khóa.",
      warns: ["Quên phần còn lại sau khi đã đủ 10.", "Nhầm 8+5=12."],
      checks: [
        { q: "8 + 6 = ?", a: "14." },
        { q: "9 + 5 = ?", a: "14." },
      ],
      slow: "7 + 8. 7 cần 3 để thành 10. 8 = 3 + 5. Vậy 10 + 5 = 15.",
      memory: "Cộng qua 10 = bù đủ 10 rồi cộng phần còn.",
    },
    [
      exNum("8 + 6 = ?", 14, "Bù 10.", "14."),
      exNum("9 + 5 = ?", 14, "9+1+4.", "14."),
      exNum("7 + 7 = ?", 14, "Đôi.", "14."),
      exNum("4 + 9 = ?", 13, "9+1+3.", "13."),
      exMC("Tổng lớn nhất", ["9+8", "8+5", "7+6", "9+4"], 0, "17.", "9+8=17."),
      exNum("6 + 8 = ?", 14, "Qua 10.", "14."),
      exNum("5 + 9 = ?", 14, "Qua 10.", "14."),
    ]
  );

  add(
    8,
    2,
    "Bảng cộng (qua 10)",
    "Thuộc các công thức cộng qua 10 trong phạm vi 20.",
    svgMakeTen(9, 1, 8, 18),
    {
      why: "Thuộc bảng giúp tính nhẩm nhanh, không phụ thuộc đếm mỗi lần.",
      def: "Bảng cộng qua 10 gồm các công thức như 9+2,\ldots,9+9; 8+3,\ldots,8+9; … có tổng từ 11 đến 18.",
      easy: "9 + 8 = 17. 8 + 7 = 15. 7 + 6 = 13.",
      step: "Từ 9 + 6 = 15 suy ra 6 + 9 = 15 (đổi chỗ số hạng).",
      trap: "9 + 7 = 16 chứ không phải 15. Kiểm bằng: 9 + 7 = 9 + 1 + 6 = 16.",
      idea: "Học theo “họ” 9+, 8+, 7+ … Mỗi ngày ôn vài công thức.",
      warns: ["Nhầm lẫn các tổng gần nhau (15/16/17).", "Không dùng giao hoán để giảm bài học."],
      checks: [
        { q: "9 + 9 = ?", a: "18." },
        { q: "8 + 9 = ?", a: "17." },
      ],
      slow: "Thuộc 8 + 5 = 13. Đổi chỗ: 5 + 8 = 13. Liên hệ trừ: 13 − 8 = 5.",
      memory: "Bảng cộng qua 10 = “cơm hàng ngày” của lớp 2.",
    },
    [
      exNum("9 + 9 = ?", 18, "Đôi 9.", "18."),
      exNum("8 + 9 = ?", 17, "Bảng.", "17."),
      exNum("7 + 8 = ?", 15, "Bảng.", "15."),
      exNum("6 + 9 = ?", 15, "Bảng.", "15."),
      exNum("5 + 8 = ?", 13, "Bảng.", "13."),
      exNum("9 + 6 = ?", 15, "Bảng.", "15."),
      exNum("8 + 8 = ?", 16, "Đôi.", "16."),
    ]
  );

  add(
    9,
    2,
    "Bài toán về thêm, bớt một số đơn vị",
    "Lời văn: thêm → cộng; bớt → trừ.",
    svgCompareBars(14, 9),
    {
      why: "Toán lời văn gắn với chuyện thật: thêm kẹo, bớt bút, mua thêm…",
      def: "<strong>Thêm / cho thêm / lớn lên</strong> → cộng. <strong>Bớt / lấy đi / còn lại</strong> → trừ.",
      easy: "Có 9 kẹo, mẹ cho thêm 5: 9 + 5 = 14. Có 14, ăn bớt 3: 14 - 3 = 11.",
      step: "Trong hộp 12 viên phấn, cô lấy ra 4. Còn 12 - 4 = 8. Rồi thêm 5 viên mới: 8 + 5 = 13.",
      trap: "Từ “còn lại” gần như luôn là trừ. Từ “tất cả / cả thảy” thường là cộng.",
      idea: "Gạch chân từ khóa → chọn phép → tính → đọc lại câu trả lời đủ đơn vị.",
      warns: ["Chọn nhầm cộng/trừ.", "Quên đơn vị (quả, bạn, quyển…)."],
      checks: [
        { q: "8 quả, hái thêm 7. Tất cả?", a: "15." },
        { q: "16 bút, cho bạn 5. Còn?", a: "11." },
      ],
      slow: "Có 11 bóng bay, thêm 6. Hỏi tất cả? Từ khóa “thêm” → 11 + 6. 11 + 6 = 17.",
      memory: "Thêm → cộng. Bớt / còn → trừ.",
    },
    [
      exNum("Có 8, thêm 7. Tất cả?", 15, "Cộng.", "15."),
      exNum("Có 16, cho đi 5. Còn?", 11, "Trừ.", "11."),
      exNum("12 hoa, nở thêm 6?", 18, "Cộng.", "18."),
      exNum("20 tem, dán 9. Còn?", 11, "Trừ.", "11."),
      exMC("“Bớt đi” →", ["Trừ", "Cộng", "Nhân", "Chia"], 0, "Lấy đi.", "Trừ."),
      exNum("15 + 4 − 3 = ?", 16, "Từng bước.", "16."),
      exNum("Có 10, bớt 2, thêm 5. Còn?", 13, "10−2+5.", "13."),
    ]
  );

  add(
    10,
    2,
    "Luyện tập chung",
    "Ôn cộng trừ qua 10 và bài toán thêm bớt.",
    svgReview("Luyện cộng trừ 20"),
    {
      why: "Củng cố nhẩm qua 10 trước khi sang trừ qua 10.",
      def: "Kết hợp bảng cộng và lời văn thêm/bớt trong phạm vi 20.",
      easy: "7 + 9 = 16. 13 − 8 = 5 (sắp học trừ; có thể nhẩm 8 + □ = 13).",
      step: "□ + 7 = 16 → □ = 9. Có 11, thêm 6 → 17.",
      trap: "Làm dãy 9 + 8 − 6: phải trái sang phải, 17 − 6 = 11, không trừ 8 − 6 trước.",
      idea: "Một phép một bước; nhiều dấu thì làm lần lượt.",
      warns: ["Sai thứ tự phép tính.", "Nhầm bảng cộng."],
      checks: [
        { q: "7 + 9 = ?", a: "16." },
        { q: "□ + 7 = 16?", a: "9." },
      ],
      slow: "18 bớt 9: 9 + 9 = 18 nên 18 − 9 = 9.",
      memory: "Nhẩm qua 10 + đọc từ khóa lời văn.",
    },
    [
      exNum("7 + 9 = ?", 16, "Qua 10.", "16."),
      exNum("13 − 8 = ?", 5, "8+5=13.", "5."),
      exNum("11 thêm 6?", 17, "Cộng.", "17."),
      exNum("18 bớt 9?", 9, "Trừ.", "9."),
      exNum("□ + 7 = 16", 9, "16−7.", "9."),
      exNum("9 + 8 − 6 = ?", 11, "Trái→phải.", "11."),
      exNum("5 + 7 + 4 = ?", 16, "12+4.", "16."),
    ]
  );

  add(
    11,
    2,
    "Phép trừ (qua 10) trong phạm vi 20",
    "Trừ khi không đủ đơn vị, phạm vi 20.",
    svgMakeTen(15, 5, 2, 8), // reuse visual metaphor
    {
      why: "Trừ qua 10 đi cùng cộng qua 10 — hai mặt của một bảng.",
      def: "Có thể trừ bằng cách tách, hoặc nghĩ ngược: a - b = □ nghĩa là b + □ = a.",
      easy: "15 − 7: 7 + 8 = 15 nên hiệu là 8. 12 − 9 = 3.",
      step: "14 − 6: 14 − 4 = 10, 10 − 2 = 8.",
      trap: "Không được “đảo” 5 − 9 thành 9 − 5 khi trừ cột — phải mượn (ở phạm vi 20 ta dùng nhẩm).",
      idea: "Hỏi: “b cộng mấy bằng a?” — ra hiệu ngay.",
      warns: ["Lấy số bé trừ số lớn rồi ghi số dương sai nghĩa.", "Nhầm với cộng."],
      checks: [
        { q: "13 − 5 = ?", a: "8." },
        { q: "16 − 9 = ?", a: "7." },
      ],
      slow: "17 − 9. Tìm □: 9 + □ = 17. 9 + 8 = 17 → □ = 8.",
      memory: "Trừ qua 10: nghĩ phép cộng ngược hoặc tách qua 10.",
    },
    [
      exNum("13 − 5 = ?", 8, "Ngược cộng.", "8."),
      exNum("16 − 9 = ?", 7, "9+7=16.", "7."),
      exNum("11 − 8 = ?", 3, "8+3=11.", "3."),
      exNum("17 − 9 = ?", 8, "9+8=17.", "8."),
      exNum("15 − 6 = ?", 9, "6+9=15.", "9."),
      exNum("14 − 8 = ?", 6, "8+6=14.", "6."),
      exNum("12 − 7 = ?", 5, "7+5=12.", "5."),
    ]
  );

  add(
    12,
    2,
    "Bảng trừ (qua 10)",
    "Thuộc các phép trừ qua 10 trong phạm vi 20.",
    svgSubParts(18, 9, 9),
    {
      why: "Từ bảng cộng suy bảng trừ — học một được hai.",
      def: "Nếu a + b = c thì c - a = b và c - b = a.",
      easy: "9 + 7 = 16 ⇒ 16 − 9 = 7, 16 − 7 = 9. 18 − 9 = 9.",
      step: "14 − 8 = 6 vì 8 + 6 = 14.",
      trap: "19 − 9 = 10, không phải 9. Trừ đúng một lần số trừ.",
      idea: "Mỗi công thức cộng “đẻ” hai công thức trừ.",
      warns: ["Nhầm 14 − 7 = 6.", "Quên 10 khi trừ 9 cho 19."],
      checks: [
        { q: "18 − 9 = ?", a: "9." },
        { q: "17 − 8 = ?", a: "9." },
      ],
      slow: "Ghi cặp: 8+7=15; 15−8=7; 15−7=8. Ôn theo cặp nhanh hơn học rời.",
      memory: "Bảng trừ = bảng cộng viết ngược.",
    },
    [
      exNum("18 − 9 = ?", 9, "Đôi.", "9."),
      exNum("17 − 8 = ?", 9, "Bảng.", "9."),
      exNum("14 − 7 = ?", 7, "Đôi 7.", "7."),
      exNum("12 − 5 = ?", 7, "5+7=12.", "7."),
      exNum("19 − 9 = ?", 10, "Trừ 9.", "10."),
      exNum("16 − 8 = ?", 8, "Đôi.", "8."),
      exNum("15 − 9 = ?", 6, "9+6=15.", "6."),
    ]
  );

  add(
    13,
    2,
    "Bài toán về nhiều hơn, ít hơn một số đơn vị",
    "Nhiều hơn → cộng; ít hơn → trừ (khi biết số chuẩn).",
    svgCompareBars(15, 11),
    {
      why: "“Nhiều hơn / ít hơn” là dạng lời văn rất hay gặp ở lớp 2–3.",
      def: "A nhiều hơn B k đơn vị ⇒ A = B + k. A ít hơn B k ⇒ A = B - k.",
      easy: "Bình 10 bi. An nhiều hơn Bình 3 ⇒ An = 10 + 3 = 13.",
      step: "Lan 18 tem. Mai ít hơn Lan 5 ⇒ Mai = 18 − 5 = 13.",
      trap: "“Cam ít hơn quýt 6, cam có 14” → quýt = 14 + 6 = 20, không phải 14 − 6.",
      idea: "Xác định ai là mốc, ai nhiều/ít, rồi mới chọn cộng hay trừ.",
      warns: [
        "Thấy “ít hơn” là trừ vào số mốc sai người.",
        "Không vẽ sơ đồ đoạn thẳng.",
      ],
      checks: [
        { q: "Bình 10, An nhiều hơn 3. An?", a: "13." },
        { q: "Lan 18, Mai ít hơn 5. Mai?", a: "13." },
      ],
      slow: "Hùng có 9 nhãn. Bố nhiều hơn Hùng 8 nhãn (bài minh họa số nhỏ). Bố = 9 + 8 = 17.",
      memory: "Nhiều hơn mốc → cộng. Ít hơn mốc → trừ. Đọc rõ ai là mốc.",
    },
    [
      exNum("Bình 10, An nhiều hơn 3. An?", 13, "Cộng.", "13."),
      exNum("Lan 18, Mai ít hơn 5. Mai?", 13, "Trừ.", "13."),
      exNum("Mốc 9, nhiều hơn 8?", 17, "Cộng.", "17."),
      exNum("Cam 14, ít hơn quýt 6. Quýt?", 20, "14+6.", "20."),
      exMC("“Ít hơn” (so với mốc) →", ["Trừ khỏi mốc", "Luôn cộng", "Nhân 2", "Chia 2"], 0, "Bé hơn mốc.", "Trừ."),
      exNum("20, ít hơn 6?", 14, "20−6.", "14."),
      exNum("12, nhiều hơn 7?", 19, "12+7.", "19."),
    ]
  );

  add(
    14,
    2,
    "Luyện tập chung",
    "Ôn cộng trừ qua 10 và nhiều hơn, ít hơn.",
    svgReview("Luyện chủ đề 2"),
    {
      why: "Khóa vững phạm vi 20 trước khi sang kg/lít và cộng trừ 100.",
      def: "Trộn nhẩm + lời văn nhiều hơn/ít hơn/thêm/bớt.",
      easy: "9 + 8 − 6 = 11. Số nhiều hơn 15 bốn đơn vị là 19. Số ít hơn 15 bốn đơn vị là 11.",
      step: "7 + 6 + 5 = 18.",
      trap: "“Ít hơn 15 là 4 đơn vị” = 15 − 4 = 11, không phải 4.",
      idea: "Làm nháp từng phép; viết câu trả lời đủ nghĩa.",
      warns: ["Sai từ khóa nhiều/ít.", "Sai thứ tự dãy tính."],
      checks: [
        { q: "9+8−6=?", a: "11." },
        { q: "Ít hơn 15 bốn đơn vị?", a: "11." },
      ],
      slow: "20 − 9 = 11. Kiểm 11 + 9 = 20.",
      memory: "Phạm vi 20: bảng cộng/trừ + lời văn.",
    },
    [
      exNum("9 + 8 − 6 = ?", 11, "17−6.", "11."),
      exNum("Nhiều hơn 12 năm đơn vị?", 17, "12+5.", "17."),
      exNum("20 − 9 = ?", 11, "Trừ.", "11."),
      exNum("7 + 6 + 5 = ?", 18, "Cộng.", "18."),
      exNum("Ít hơn 15 là 4?", 11, "15−4.", "11."),
      exNum("16 − 7 = ?", 9, "Trừ.", "9."),
      exNum("8 + 7 = ?", 15, "Cộng.", "15."),
    ]
  );

  // Ch 3 kg l
  add(
    15,
    3,
    "Ki-lô-gam",
    "Đơn vị khối lượng kg; nặng hơn, nhẹ hơn.",
    svgKgL(),
    {
      why: "Đo “nặng/nhẹ” cần đơn vị chung — kg rất hay gặp ở chợ và bếp.",
      def: "<strong>Ki-lô-gam</strong> viết tắt <strong>kg</strong>, dùng đo khối lượng. So sánh: nặng hơn, nhẹ hơn.",
      easy: "Một gói đường 1 kg. Hai gói như vậy nặng 2 kg.",
      step: "Có 5 kg gạo, nấu hết 2 kg → còn 3 kg.",
      trap: "kg đo nặng nhẹ, không đo nước (nước dùng lít) — dù chai nước cũng có khối lượng.",
      idea: "Cảm nhận: túi 1 kg đường trên tay nặng hơn quả bóng bay.",
      warns: ["Nhầm kg với l.", "Quên đơn vị sau số."],
      checks: [
        { q: "3 gói 1 kg → ? kg", a: "3." },
        { q: "kg đo gì?", a: "Khối lượng." },
      ],
      slow: "Mẹ mua 2 kg cam và 1 kg táo. Tất cả 2 + 1 = 3 kg hoa quả.",
      memory: "kg = khối lượng (nặng/nhẹ).",
    },
    [
      exMC("Đơn vị khối lượng", ["kg", "l", "m", "giờ"], 0, "Ki-lô-gam.", "kg."),
      exNum("3 gói × 1 kg = ?", 3, "Cộng.", "3."),
      exMC("Thường nặng hơn", ["Dưa hấu", "Bóng bay", "Lá khô", "Tờ giấy"], 0, "Thực tế.", "Dưa hấu."),
      exNum("5 kg − 2 kg = ?", 3, "Trừ.", "3."),
      exNum("1+1+1 kg = ?", 3, "3.", "3."),
      exMC("“Nặng hơn” nghĩa là", ["Khối lượng lớn hơn", "Dài hơn", "Nhanh hơn", "Cao điểm hơn"], 0, "kg.", "Khối lượng lớn hơn."),
      exNum("10 kg − 7 kg = ?", 3, "Trừ.", "3."),
    ]
  );

  add(
    16,
    3,
    "Lít",
    "Đơn vị dung tích lít (l).",
    svgKgL(),
    {
      why: "Sữa, nước, dầu… được đựng theo lít.",
      def: "<strong>Lít</strong> viết tắt <strong>l</strong>, đo dung tích (sức chứa chất lỏng).",
      easy: "Hai chai 1 l đầy → 2 l nước.",
      step: "Bình 7 l, dùng 3 l → còn 4 l.",
      trap: "Không cộng 2 kg với 3 l thành 5 — khác đại lượng.",
      idea: "Nhìn nhãn chai: 1 l, 0,5 l (làm quen), 2 l.",
      warns: ["Nhầm l với kg.", "Quên đơn vị l."],
      checks: [
        { q: "4 can 1 l → ?", a: "4 l." },
        { q: "l đo gì?", a: "Dung tích." },
      ],
      slow: "1 l + 5 l = 6 l. Viết đủ chữ l sau số.",
      memory: "l = dung tích chất lỏng.",
    },
    [
      exMC("Đơn vị dung tích", ["l", "kg", "cm", "ngày"], 0, "Lít.", "l."),
      exNum("4 can 1 l → ?", 4, "Cộng.", "4."),
      exNum("7 l − 3 l = ?", 4, "Trừ.", "4."),
      exMC("Đo bằng lít", ["Nước trong bình", "Quả cân", "Cái bàn", "Tờ lịch"], 0, "Chất lỏng.", "Nước."),
      exNum("1 l + 5 l = ?", 6, "Cộng.", "6."),
      exNum("10 l − 2 l = ?", 8, "Trừ.", "8."),
      exNum("2 + 2 + 2 l = ?", 6, "6.", "6."),
    ]
  );

  add(
    17,
    3,
    "Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít",
    "Ước lượng và tính với kg, l.",
    svgKgL(),
    {
      why: "Toán đo lường phải “sờ” được: cân, đổ nước, đọc nhãn.",
      def: "Chỉ cộng/trừ khi <strong>cùng đơn vị</strong>. Ước lượng trước, đo/kiểm sau.",
      easy: "2 kg + 3 kg = 5 kg. 5 l − 2 l = 3 l.",
      step: "Mua 1 kg + 1 kg + 1 kg = 3 kg.",
      trap: "3 kg và 3 l không kết luận “nặng bằng nhau” chỉ vì cùng số 3.",
      idea: "Luôn viết đơn vị cạnh kết quả.",
      warns: ["Cộng khác đơn vị.", "Quên đơn vị."],
      checks: [
        { q: "2+6 kg=?", a: "8." },
        { q: "10−4 l=?", a: "6." },
      ],
      slow: "Bình 8 l, đổ 5 l: 8 − 5 = 3 l còn lại.",
      memory: "Cùng đơn vị mới cộng trừ. kg ≠ l.",
    },
    [
      exNum("2 kg + 6 kg = ?", 8, "Cộng.", "8."),
      exNum("10 l − 4 l = ?", 6, "Trừ.", "6."),
      exMC("3 kg và 3 l", ["Khác đại lượng", "Luôn nặng bằng", "Cộng được thành 6", "Trừ ra 0 luôn đúng nghĩa"], 0, "Khác loại.", "Khác đại lượng."),
      exNum("1+1+1 kg=?", 3, "3.", "3."),
      exNum("8 l − 5 l = ?", 3, "Trừ.", "3."),
      exNum("4 kg + 5 kg = ?", 9, "Cộng.", "9."),
      exNum("9 l − 9 l = ?", 0, "0.", "0."),
    ]
  );

  add(
    18,
    3,
    "Luyện tập chung",
    "Ôn kg, l và so sánh nặng nhẹ.",
    svgReview("Ôn đo kg l"),
    {
      why: "Chốt chủ đề đo khối lượng và dung tích học kì 1.",
      def: "kg khối lượng; l dung tích; cộng trừ cùng loại.",
      easy: "5 kg + 4 kg = 9 kg. 9 l − 6 l = 3 l.",
      step: "Có 2 l, thêm 7 l → 9 l.",
      trap: "Ghi đáp án 9 mà không biết 9 kg hay 9 l — mất điểm do thiếu đơn vị trong lời giải.",
      idea: "Đọc lại đề: đang hỏi kg hay l?",
      warns: ["Thiếu đơn vị.", "Nhầm loại đo."],
      checks: [
        { q: "5+4 kg?", a: "9." },
        { q: "kg đo?", a: "Khối lượng." },
      ],
      slow: "Bài: “can 5 l, thêm 2 l”. Phép 5+2=7 l.",
      memory: "kg nặng nhẹ; l sức chứa chất lỏng.",
    },
    [
      exNum("5 kg + 4 kg = ?", 9, "Cộng.", "9."),
      exNum("9 l − 6 l = ?", 3, "Trừ.", "3."),
      exNum("2 l + 7 l = ?", 9, "Cộng.", "9."),
      exMC("kg đo", ["Khối lượng", "Thời gian", "Độ dài", "Nhiệt độ"], 0, "Nặng.", "Khối lượng."),
      exMC("l đo", ["Dung tích", "Khối lượng", "Diện tích", "Số đếm"], 0, "Lỏng.", "Dung tích."),
      exNum("8 kg − 3 kg = ?", 5, "Trừ.", "5."),
      exNum("1 l + 1 l + 1 l = ?", 3, "3.", "3."),
    ]
  );

  // Ch 4 add/sub 100 with regroup
  add(
    19,
    4,
    "Phép cộng (có nhớ) số có hai chữ số với số có một chữ số",
    "Cộng có nhớ: tổng đơn vị ≥ 10.",
    svgCarrySteps(),
    {
      why: "Đây là cộng có nhớ đầu tiên — nền tảng cả năm học.",
      def: "Cộng đơn vị trước. Nếu tổng ≥ 10: viết chữ số đơn vị, <strong>nhớ 1</strong> sang hàng chục.",
      easy: "28 + 5: 8+5=13 → viết 3 nhớ 1; 2+1=3 → 33.",
      step: "49 + 7 = 56. 35 + 8 = 43.",
      trap: "Hay quên cộng số nhớ vào hàng chục — ra 23 thay vì 33 với 28+5.",
      idea: "Đánh dấu chấm nhỏ ở hàng chục khi có nhớ.",
      warns: ["Quên nhớ 1.", "Nhớ nhưng cộng sai hàng chục."],
      checks: [
        { q: "27+6=?", a: "33." },
        { q: "49+7=?", a: "56." },
      ],
      slow: "66+9: 6+9=15 viết 5 nhớ 1; 6+1=7 → 75.",
      memory: "Đơn vị ≥ 10 → viết đơn vị, nhớ 1 sang chục.",
    },
    [
      exNum("27 + 6 = ?", 33, "Có nhớ.", "33."),
      exNum("49 + 7 = ?", 56, "Có nhớ.", "56."),
      exNum("35 + 8 = ?", 43, "Có nhớ.", "43."),
      exNum("66 + 9 = ?", 75, "Có nhớ.", "75."),
      exNum("18 + 5 = ?", 23, "Có nhớ.", "23."),
      exNum("44 + 9 = ?", 53, "Có nhớ.", "53."),
      exNum("99 + 1 = ?", 100, "Nhớ.", "100."),
    ]
  );

  add(
    20,
    4,
    "Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số",
    "Cộng hai số có hai chữ số, có nhớ.",
    svgColumnAdd(47, 28, true),
    {
      why: "Mở rộng nhớ khi cả hai số đều có hai chữ số.",
      def: "Đặt tính thẳng cột. Cộng đơn vị (nhớ nếu cần), rồi cộng chục kèm nhớ.",
      easy: "47 + 28: 7+8=15 viết 5 nhớ 1; 4+2+1=7 → 75.",
      step: "58 + 34 = 92. 19 + 19 = 38.",
      trap: "Lệch cột khi một số “ngắn” hơn — luôn thẳng bên phải.",
      idea: "Nói thầm: “năm mười lăm, viết năm nhớ một…”.",
      warns: ["Quên nhớ.", "Cộng chục trước."],
      checks: [
        { q: "36+27=?", a: "63." },
        { q: "45+37=?", a: "82." },
      ],
      slow: "66+25: 6+5=11 viết 1 nhớ 1; 6+2+1=9 → 91.",
      memory: "Hai chữ số + hai chữ số: cột đơn vị rồi cột chục + nhớ.",
    },
    [
      exNum("36 + 27 = ?", 63, "Có nhớ.", "63."),
      exNum("58 + 34 = ?", 92, "Có nhớ.", "92."),
      exNum("19 + 19 = ?", 38, "Đôi.", "38."),
      exNum("45 + 37 = ?", 82, "Có nhớ.", "82."),
      exNum("66 + 25 = ?", 91, "Có nhớ.", "91."),
      exNum("29 + 43 = ?", 72, "Có nhớ.", "72."),
      exNum("55 + 46 = ?", 101, "Vượt 100 nhẹ.", "101."),
    ]
  );

  add(
    21,
    4,
    "Luyện tập chung",
    "Ôn cộng có nhớ trong phạm vi 100.",
    svgReview("Ôn cộng có nhớ"),
    {
      why: "Củng cố trước khi sang trừ có nhớ.",
      def: "Trộn dạng 2 chữ số + 1 chữ số và 2 + 2 chữ số; tìm số hạng.",
      easy: "44 + 9 = 53. 27 + 38 = 65.",
      step: "□ + 29 = 50 → □ = 21.",
      trap: "Tìm số hạng phải trừ, không cộng tiếp.",
      idea: "Kiểm bằng trừ: tổng − số hạng = số hạng kia.",
      warns: ["Sai khi tìm x.", "Quên nhớ."],
      checks: [
        { q: "56+17=?", a: "73." },
        { q: "□+29=50?", a: "21." },
      ],
      slow: "39+39: 9+9=18 viết 8 nhớ 1; 3+3+1=7 → 78.",
      memory: "Cộng có nhớ + kiểm bằng trừ.",
    },
    [
      exNum("44 + 9 = ?", 53, "Nhớ.", "53."),
      exNum("27 + 38 = ?", 65, "Nhớ.", "65."),
      exNum("56 + 17 = ?", 73, "Nhớ.", "73."),
      exNum("□ + 29 = 50", 21, "50−29.", "21."),
      exNum("39 + 39 = ?", 78, "Đôi.", "78."),
      exNum("18 + 27 = ?", 45, "Nhớ.", "45."),
      exNum("63 + 8 = ?", 71, "Nhớ.", "71."),
    ]
  );

  add(
    22,
    4,
    "Phép trừ (có nhớ) số có hai chữ số với số có một chữ số",
    "Trừ có nhớ khi đơn vị không đủ.",
    svgBorrowSteps(),
    {
      why: "Trừ có nhớ là “bạn” của cộng có nhớ — rất hay sai nếu quên mượn.",
      def: "Khi đơn vị số bị trừ &lt; đơn vị số trừ: <strong>mượn 1 chục</strong> (thêm 10 đơn vị), trừ đơn vị, rồi giảm 1 ở hàng chục.",
      easy: "32 − 5: 12 − 5 = 7; chục 3 đã mượn còn 2 → 27.",
      step: "50 − 8 = 42. 73 − 9 = 64.",
      trap: "Mượn rồi quên trừ 1 ở hàng chục → 32 − 5 ra 37 (sai).",
      idea: "Đánh dấu gạch nhẹ trên chữ số chục khi đã mượn.",
      warns: ["Quên giảm chục sau khi mượn.", "Trừ nhầm chiều đơn vị."],
      checks: [
        { q: "41−6=?", a: "35." },
        { q: "50−8=?", a: "42." },
      ],
      slow: "64 − 7: 14 − 7 = 7; 6 − 1 = 5 → 57.",
      memory: "Không đủ trừ → mượn 10, chục giảm 1.",
    },
    [
      exNum("41 − 6 = ?", 35, "Mượn.", "35."),
      exNum("50 − 8 = ?", 42, "Mượn.", "42."),
      exNum("73 − 9 = ?", 64, "Mượn.", "64."),
      exNum("64 − 7 = ?", 57, "Mượn.", "57."),
      exNum("90 − 4 = ?", 86, "Mượn.", "86."),
      exNum("31 − 5 = ?", 26, "Mượn.", "26."),
      exNum("80 − 9 = ?", 71, "Mượn.", "71."),
    ]
  );

  add(
    23,
    4,
    "Phép trừ (có nhớ) số có hai chữ số với số có hai chữ số",
    "Trừ hai số có hai chữ số, có nhớ.",
    svgColumnSub(81, 37),
    {
      why: "Hoàn thiện trừ có nhớ phạm vi 100.",
      def: "Đặt tính. Mượn khi cần ở đơn vị; trừ chục (đã trừ 1 nếu mượn).",
      easy: "81 − 37: 11 − 7 = 4; 8 − 1 − 3 = 4 → 44.",
      step: "52 − 28 = 24. 70 − 35 = 35. Kiểm: hiệu + số trừ = số bị trừ.",
      trap: "70 − 35: đơn vị 0 mượn thành 10; chục 7 thành 6; 6 − 3 = 3 → 35. Đừng ra 45.",
      idea: "Mỗi bài trừ khó hãy kiểm bằng cộng ngược.",
      warns: ["Quên mượn.", "Kiểm không khớp mà không làm lại."],
      checks: [
        { q: "52−28=?", a: "24." },
        { q: "93−47=?", a: "46." },
      ],
      slow: "64 − 19: 14 − 9 = 5; 6 − 1 − 1 = 4 → 45.",
      memory: "Trừ có nhớ 2 chữ số: mượn đúng + kiểm bằng cộng.",
    },
    [
      exNum("52 − 28 = ?", 24, "Mượn.", "24."),
      exNum("70 − 35 = ?", 35, "Mượn.", "35."),
      exNum("93 − 47 = ?", 46, "Mượn.", "46."),
      exNum("64 − 19 = ?", 45, "Mượn.", "45."),
      exNum("80 − 26 = ?", 54, "Mượn.", "54."),
      exNum("91 − 58 = ?", 33, "Mượn.", "33."),
      exNum("100 − 37 = ?", 63, "Mượn.", "63."),
    ]
  );

  add(
    24,
    4,
    "Luyện tập chung",
    "Ôn cộng trừ có nhớ phạm vi 100.",
    svgReview("Ôn cộng trừ 100"),
    {
      why: "Khóa kỹ năng đặt tính có nhớ trước hình học và đo thời gian.",
      def: "Chọn cộng/trừ theo đề; có nhớ khi cần.",
      easy: "48 + 27 = 75. 91 − 58 = 33.",
      step: "Có 45 tem, thêm 18 → 63. 72 bớt 29 → 43.",
      trap: "100 − 37 = 63, không phải 73 (quên mượn).",
      idea: "Đọc đề → đặt tính → nhớ/mượn → kiểm.",
      warns: ["Sai phép do đọc nhanh.", "Quên nhớ/mượn."],
      checks: [
        { q: "48+27=?", a: "75." },
        { q: "72−29=?", a: "43." },
      ],
      slow: "100 − 37: mượn lần lượt từ hàng trăm/chục. 100 − 30 = 70; 70 − 7 = 63.",
      memory: "Phạm vi 100 có nhớ: chậm mà đúng hàng.",
    },
    [
      exNum("48 + 27 = ?", 75, "Nhớ.", "75."),
      exNum("91 − 58 = ?", 33, "Mượn.", "33."),
      exNum("45 + 18 = ?", 63, "Cộng.", "63."),
      exNum("72 − 29 = ?", 43, "Trừ.", "43."),
      exNum("100 − 37 = ?", 63, "Trừ.", "63."),
      exNum("56 + 29 = ?", 85, "Nhớ.", "85."),
      exNum("83 − 47 = ?", 36, "Mượn.", "36."),
    ]
  );

  // Ch 5 geometry
  add(
    25,
    5,
    "Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng",
    "Nhận biết các đối tượng hình học phẳng cơ bản.",
    svgGeometry(),
    {
      why: "Đây là “chữ cái” của hình học — dùng suốt các lớp sau.",
      def: "<strong>Điểm</strong> đánh dấu vị trí. <strong>Đoạn thẳng</strong> có hai mút. <strong>Đường thẳng</strong> kéo dài hai phía, không có mút. <strong>Đường cong</strong> không thẳng. Ba điểm <strong>thẳng hàng</strong> nếu cùng nằm trên một đường thẳng.",
      easy: "Đoạn AB có mút A và B. Kéo dài AB hai phía được đường thẳng AB.",
      step: "Trên một đường thẳng lấy thêm điểm C giữa A và B: A, B, C thẳng hàng.",
      trap: "Đoạn thẳng ≠ đường thẳng. Đoạn “có đầu có cuối”; đường thẳng không dừng.",
      idea: "Dùng thước để vẽ đoạn/đường thẳng; đường cong vẽ tự do hoặc theo vật mẫu.",
      warns: ["Gọi nhầm đoạn là đường thẳng.", "Ba điểm của tam giác không thẳng hàng."],
      checks: [
        { q: "Đoạn thẳng có mấy mút?", a: "2." },
        { q: "Đường thẳng có mút không?", a: "Không." },
      ],
      slow: "Chấm 2 điểm, đặt thước nối lại → đoạn. Vuốt dài nét ra ngoài hai điểm → gợi đường thẳng.",
      memory: "Đoạn: 2 mút. Đường thẳng: kéo dài hai phía. Cong: không thẳng. Thẳng hàng: một đường.",
    },
    [
      exMC("Đoạn thẳng có", ["Hai mút", "Không mút", "Một mút", "Ba mút"], 0, "Hai đầu.", "Hai mút."),
      exMC("Đường thẳng", ["Kéo dài hai phía", "Chỉ một đoạn", "Luôn cong", "Có đúng 2 điểm"], 0, "Không giới hạn.", "Kéo dài hai phía."),
      exMC("Ba điểm thẳng hàng", ["Nằm trên một đường thẳng", "Tạo tam giác", "Cách đều luôn", "Trùng nhau"], 0, "Một đường.", "Một đường thẳng."),
      exMC("Đường cong", ["Không thẳng", "Luôn là đoạn", "Luôn là tứ giác", "Là kg"], 0, "Cong.", "Không thẳng."),
      exMC("Điểm dùng để", ["Đánh dấu vị trí", "Đo lít", "Xem giờ", "Cân kg"], 0, "Vị trí.", "Vị trí."),
      exMC("Dùng thước để vẽ", ["Đoạn/đường thẳng", "Chỉ đường cong", "Khối cầu", "Biểu đồ giờ"], 0, "Thẳng.", "Đoạn/đường thẳng."),
      exMC("Tam giác có 3 đỉnh", ["Không thẳng hàng (thường)", "Luôn thẳng hàng", "Chỉ 1 điểm", "Là đường cong"], 0, "Tạo mặt.", "Không thẳng hàng."),
    ]
  );

  add(
    26,
    5,
    "Đường gấp khúc. Hình tứ giác",
    "Nhận biết đường gấp khúc và hình tứ giác.",
    svgZigzag(),
    {
      why: "Nhiều hình quanh em (khung tranh, cửa sổ) là tứ giác; đường gấp khúc gặp trên bản đồ, hàng rào.",
      def: "<strong>Đường gấp khúc</strong> gồm nhiều đoạn thẳng nối tiếp. <strong>Tứ giác</strong> có 4 cạnh, 4 đỉnh, 4 góc.",
      easy: "Hình zíc-zắc là đường gấp khúc. Hình chữ nhật là một tứ giác đặc biệt.",
      step: "Đếm đỉnh A,B,C,D của tứ giác — đúng 4. Tam giác chỉ có 3 cạnh.",
      trap: "Không phải tứ giác nào cũng là hình chữ nhật. Tứ giác “lệch” vẫn là tứ giác.",
      idea: "Đếm cạnh/đỉnh: 3 → tam giác, 4 → tứ giác.",
      warns: ["Nhầm tam giác với tứ giác.", "Nghĩ chỉ chữ nhật mới là tứ giác."],
      checks: [
        { q: "Tứ giác mấy cạnh?", a: "4." },
        { q: "Hình chữ nhật có là tứ giác?", a: "Có." },
      ],
      slow: "Vẽ 4 điểm, nối lần lượt không cắt → tứ giác. Đếm lại 4 cạnh.",
      memory: "Gấp khúc = đoạn nối đoạn. Tứ giác = 4 cạnh.",
    },
    [
      exMC("Tứ giác có số cạnh", ["4", "3", "5", "6"], 0, "Tứ=4.", "4."),
      exMC("Đường gấp khúc gồm", ["Đoạn thẳng nối tiếp", "Chỉ đường cong", "Một điểm", "Hình tròn"], 0, "Gấp.", "Đoạn nối."),
      exMC("Hình chữ nhật là", ["Tứ giác", "Tam giác", "Đường cong", "Khối cầu"], 0, "4 cạnh.", "Tứ giác."),
      exNum("Tứ giác có mấy đỉnh?", 4, "4.", "4."),
      exMC("Tam giác có mấy cạnh?", ["3", "4", "5", "2"], 0, "Tam=3.", "3."),
      exNum("Tứ giác có mấy góc?", 4, "4.", "4."),
      exMC("Vuông là", ["Tứ giác đặc biệt", "Tam giác", "Đường thẳng", "Lít"], 0, "4 cạnh bằng.", "Tứ giác."),
    ]
  );

  add(
    27,
    5,
    "Thực hành gấp, cắt, ghép, xếp hình. Vẽ đoạn thẳng",
    "Thực hành tạo hình; vẽ đoạn qua hai điểm.",
    svgQuad(),
    {
      why: "Học hình bằng tay: gấp, cắt, ghép giúp nhớ lâu hơn chỉ nhìn.",
      def: "Vẽ đoạn thẳng: chấm hai điểm, dùng thước nối. Ghép hình: cạnh khớp cạnh.",
      easy: "Hai nửa hình vuông (cắt theo đường chéo) ghép lại thành hình vuông.",
      step: "Hai hình tam giác vuông giống nhau có thể ghép thành hình chữ nhật.",
      trap: "Vẽ đoạn “cong tay” không dùng thước — không còn là đoạn thẳng.",
      idea: "Làm chậm: điểm đầu → điểm cuối → trượt bút theo thước.",
      warns: ["Không dùng thước.", "Ghép lệch cạnh."],
      checks: [
        { q: "Vẽ đoạn nên dùng?", a: "Thước." },
        { q: "Hình vuông mấy cạnh?", a: "4." },
      ],
      slow: "Chấm A, chấm B. Đặt thước. Giữ chặt. Kẻ từ A tới B. Nhấc bút.",
      memory: "Đoạn thẳng = thước + hai điểm. Ghép hình = khớp cạnh.",
    },
    [
      exMC("Vẽ đoạn thẳng nên dùng", ["Thước", "Chỉ tay", "Cân kg", "Đồng hồ"], 0, "Thẳng.", "Thước."),
      exMC("Ghép hai tam giác vuông giống nhau có thể được", ["Chữ nhật hoặc vuông", "Khối cầu", "Đường tròn", "Một điểm"], 0, "Ghép.", "Chữ nhật/vuông."),
      exNum("Hình vuông mấy cạnh?", 4, "4.", "4."),
      exMC("Cắt giấy theo đường thẳng tạo", ["Cạnh thẳng", "Chỉ đường cong", "Số kg", "Giờ"], 0, "Đường cắt.", "Cạnh thẳng."),
      exMC("Xếp hình giúp", ["Nhận dạng hình", "Chỉ học đọc", "Đo lít", "Xem lịch"], 0, "Hình học.", "Nhận dạng."),
      exNum("Hai điểm xác định mấy đoạn thẳng?", 1, "Một đoạn.", "1."),
      exMC("Không dùng thước khi cần đoạn thẳng thì", ["Dễ bị cong", "Vẫn chuẩn hơn", "Ra khối trụ", "Ra kg"], 0, "Cong tay.", "Dễ cong."),
    ]
  );

  add(
    28,
    5,
    "Luyện tập chung",
    "Ôn điểm, đoạn, đường, tứ giác, gấp ghép hình.",
    svgGeometry(),
    {
      why: "Chốt tên gọi hình phẳng học kì 1.",
      def: "Phân biệt nhanh đoạn / đường thẳng / cong / tứ giác / tam giác.",
      easy: "Có hai mút → đoạn thẳng. 4 cạnh → tứ giác.",
      step: "Ba điểm thẳng hàng → một đường thẳng.",
      trap: "Đường thẳng không có “hai đầu” như đoạn.",
      idea: "Nhìn đặc điểm: mút, số cạnh, thẳng hay cong.",
      warns: ["Nhầm thuật ngữ.", "Đếm cạnh sai."],
      checks: [
        { q: "Hai mút → ?", a: "Đoạn thẳng." },
        { q: "4 cạnh → ?", a: "Tứ giác." },
      ],
      slow: "Kể 3 đồ vật tứ giác trong lớp: bảng, cửa sổ, quyển sách (mặt).",
      memory: "Hình phẳng lớp 2: điểm–đoạn–đường–cong–gấp khúc–tứ giác.",
    },
    [
      exMC("Có hai mút", ["Đoạn thẳng", "Đường thẳng", "Mặt phẳng", "Khối trụ"], 0, "Hai đầu.", "Đoạn."),
      exMC("Tứ giác có", ["4 đỉnh", "3 đỉnh", "1 đỉnh", "0 đỉnh"], 0, "4.", "4 đỉnh."),
      exMC("Ba điểm thẳng hàng nằm trên", ["Một đường thẳng", "Ba đường", "Hình tròn bắt buộc", "Không đâu"], 0, "Thẳng hàng.", "Đường thẳng."),
      exMC("Đường gấp khúc", ["Nhiều đoạn thẳng", "0 đoạn", "Chỉ tròn", "Chỉ kg"], 0, "Gấp.", "Nhiều đoạn."),
      exMC("Hình vuông là", ["Tứ giác", "Tam giác", "Đường cong", "Lít"], 0, "4 cạnh.", "Tứ giác."),
      exNum("Tam giác mấy đỉnh?", 3, "3.", "3."),
      exMC("Đường thẳng khác đoạn vì", ["Không có hai mút giới hạn", "Ngắn hơn luôn", "Cong", "Có 1 điểm"], 0, "Kéo dài.", "Không hai mút."),
    ]
  );

  // Ch 6 time
  add(
    29,
    6,
    "Ngày – giờ, giờ – phút",
    "Xem giờ đúng, giờ rưỡi; quan hệ ngày – giờ.",
    svgClock(4, 0),
    {
      why: "Đến trường, xem phim, uống thuốc… đều cần đọc giờ.",
      def: "1 ngày = 24 giờ. 1 giờ = 60 phút. <strong>Kim giờ</strong> ngắn, <strong>kim phút</strong> dài. Kim phút ở 12: giờ đúng; ở 6: giờ rưỡi (30 phút).",
      easy: "Kim ngắn chỉ 4, kim dài chỉ 12 → 4 giờ.",
      step: "Kim dài chỉ 6, kim ngắn giữa 2 và 3 → khoảng 2 giờ 30 phút.",
      trap: "Nhầm kim giờ với kim phút. Kim dài là phút!",
      idea: "Đọc phút trước (kim dài) rồi đọc giờ (kim ngắn).",
      warns: ["Đổi nhầm hai kim.", "Quên 60 phút = 1 giờ."],
      checks: [
        { q: "1 giờ = ? phút", a: "60." },
        { q: "7 giờ 30 còn gọi?", a: "7 giờ rưỡi." },
      ],
      slow: "Từ 5 giờ đến 6 giờ: đúng 1 giờ. Không phải 11 giờ.",
      memory: "Kim ngắn = giờ, kim dài = phút. 60 phút = 1 giờ.",
    },
    [
      exNum("1 giờ = ? phút", 60, "60.", "60."),
      exMC("Kim dài thường là", ["Kim phút", "Kim giờ", "Kim lịch", "Không kim"], 0, "Phút.", "Kim phút."),
      exMC("7 giờ 30 phút", ["7 giờ rưỡi", "7 giờ kém 30", "8 giờ", "6 giờ rưỡi"], 0, "30=rưỡi.", "Rưỡi."),
      exNum("Từ 5 giờ đến 6 giờ: mấy giờ?", 1, "1.", "1."),
      exMC("1 ngày có bao nhiêu giờ?", ["24", "12", "60", "7"], 0, "Cả ngày đêm.", "24."),
      exNum("30 phút + 30 phút = ? phút", 60, "1 giờ.", "60."),
      exMC("Kim ngắn là", ["Kim giờ", "Kim phút", "Kim giây", "Kim ngày"], 0, "Giờ.", "Kim giờ."),
    ]
  );

  add(
    30,
    6,
    "Ngày – tháng",
    "Xem lịch: ngày, tháng; số ngày cơ bản.",
    svgCalendar(),
    {
      why: "Lịch giúp biết hôm nay, ngày mai, thứ trong tuần.",
      def: "1 tuần = 7 ngày. Tháng có 30 hoặc 31 ngày; tháng 2 có 28 hoặc 29 ngày.",
      easy: "Ngày liền trước 15 là 14. Ngày liền sau 15 là 16.",
      step: "Tháng 1 có 31 ngày. Tháng 6 có 30 ngày.",
      trap: "Không phải tháng nào cũng 31 ngày.",
      idea: "Đọc lịch: thứ — ngày — tháng — năm.",
      warns: ["Nhầm số ngày trong tháng.", "Quên tuần 7 ngày."],
      checks: [
        { q: "1 tuần mấy ngày?", a: "7." },
        { q: "Tháng 1 mấy ngày?", a: "31." },
      ],
      slow: "Hai ngày sau ngày 10 là ngày 12 (10 + 2).",
      memory: "Tuần 7 ngày. Xem lịch để biết ngày tháng.",
    },
    [
      exNum("Một tuần mấy ngày?", 7, "7.", "7."),
      exMC("Tháng 1 có", ["31 ngày", "30", "28", "7"], 0, "31.", "31."),
      exMC("Tháng 6 có", ["30 ngày", "31", "28", "24"], 0, "30.", "30."),
      exMC("Ngày trước 15 là", ["14", "16", "1", "30"], 0, "−1.", "14."),
      exMC("Xem ngày tháng bằng", ["Lịch", "Cân", "Thước lít", "Chỉ giây"], 0, "Lịch.", "Lịch."),
      exNum("Hai ngày sau 10 là?", 12, "+2.", "12."),
      exMC("Tháng 2 thường có", ["28 hoặc 29 ngày", "31 luôn", "30 luôn", "7"], 0, "Đặc biệt.", "28/29."),
    ]
  );

  add(
    31,
    6,
    "Thực hành và trải nghiệm xem đồng hồ, xem lịch",
    "Thực hành đọc giờ và lịch.",
    svgClock(2, 30),
    {
      why: "Thực hành giúp phản xạ: nhìn đồng hồ là đọc được.",
      def: "Nối hoạt động với mốc giờ: đến trường, ăn cơm, đi ngủ. Đọc thứ-ngày trên lịch.",
      easy: "Kim phút ở 12, kim giờ ở 4 → 4 giờ đúng.",
      step: "Kim phút ở 6 → thêm 30 phút (rưỡi).",
      trap: "Nhìn nhầm 3 (15 phút) với 2.",
      idea: "Mỗi số trên đồng hồ phút: nhân 5 (2 → 10 phút, 3 → 15 phút…).",
      warns: ["Đọc sai 15/30 phút.", "Nhầm thứ trên lịch."],
      checks: [
        { q: "Kim phút ở 12, giờ ở 4?", a: "4 giờ." },
        { q: "Ngày mai của 20?", a: "21." },
      ],
      slow: "Từ thứ 2 đến thứ 6 (tính cả hai đầu) = 5 ngày.",
      memory: "12 = giờ đúng, 6 = rưỡi. Lịch: ngày mai = +1.",
    },
    [
      exMC("Kim phút 12, kim giờ 4", ["4 giờ", "4 rưỡi", "12 giờ", "6 giờ"], 0, "Giờ đúng.", "4 giờ."),
      exMC("Kim phút 6, giờ giữa 2–3", ["2 giờ 30", "2 giờ", "3 giờ", "6 giờ 2"], 0, "Rưỡi.", "2:30."),
      exNum("Thứ 2 đến thứ 6 (cả hai) mấy ngày?", 5, "Đếm.", "5."),
      exMC("Ngày mai của 20", ["21", "19", "30", "1"], 0, "+1.", "21."),
      exNum("30+30 phút = ?", 60, "60.", "60."),
      exNum("1 giờ rưỡi = ? phút", 90, "60+30.", "90."),
      exMC("Số 3 trên đồng hồ (kim phút) ≈", ["15 phút", "3 phút", "30 phút", "45 phút"], 0, "×5.", "15 phút."),
    ]
  );

  add(
    32,
    6,
    "Luyện tập chung",
    "Ôn ngày giờ, giờ phút, ngày tháng.",
    svgClock(7, 30),
    {
      why: "Chốt đọc giờ và lịch học kì 1.",
      def: "Giờ–phút–ngày–tháng; đổi 1 giờ rưỡi = 90 phút.",
      easy: "1 giờ rưỡi = 90 phút. Từ 3 giờ đến 7 giờ = 4 giờ.",
      step: "Tháng 2: 28/29 ngày.",
      trap: "Không cộng 3 giờ + 30 phút thành 33.",
      idea: "Đổi về cùng đơn vị khi cần so sánh.",
      warns: ["Cộng giờ với phút như cùng đơn vị.", "Sai lịch tháng 2."],
      checks: [
        { q: "1 giờ rưỡi = ? phút", a: "90." },
        { q: "3 giờ đến 7 giờ?", a: "4 giờ." },
      ],
      slow: "7 giờ 30: kim phút ở 6, kim giờ giữa 7 và 8.",
      memory: "Đọc kim đúng. Lịch đúng. Đổi đơn vị khi cần.",
    },
    [
      exNum("1 giờ rưỡi = ? phút", 90, "60+30.", "90."),
      exMC("Tháng 2", ["28 hoặc 29 ngày", "31 luôn", "30 luôn", "7"], 0, "Đặc biệt.", "28/29."),
      exNum("Từ 3 giờ đến 7 giờ?", 4, "7−3.", "4."),
      exMC("Kim ngắn", ["Kim giờ", "Kim phút", "Kim giây", "Kim ngày"], 0, "Giờ.", "Kim giờ."),
      exNum("Hai ngày sau 10?", 12, "+2.", "12."),
      exNum("1 ngày = ? giờ", 24, "24.", "24."),
      exNum("15 phút + 15 phút = ?", 30, "30.", "30."),
    ]
  );

  // Ch 7 review HK1
  for (const [num, title, summary, extraEx] of [
    [33, "Ôn tập phép cộng, phép trừ trong phạm vi 20, 100", "Ôn cộng trừ HK1 (qua 10 và có nhớ).", null],
    [34, "Ôn tập hình phẳng", "Ôn điểm, đoạn, đường, tứ giác.", null],
    [35, "Ôn tập đo lường", "Ôn kg, l.", null],
    [36, "Ôn tập chung", "Tổng ôn học kì I.", null],
  ]) {
    const figs = {
      33: svgColumnAdd(37, 28, true),
      34: svgGeometry(),
      35: svgKgL(),
      36: svgReview("Ôn HK1"),
    };
    const contents = {
      33: {
        why: "Ôn phép tính trước kiểm tra HK1.",
        def: "Cộng trừ phạm vi 20 và 100, có và không nhớ.",
        easy: "9+8=17. 14−6=8. 37+28=65.",
        step: "90−47=43. 56+9=65.",
        trap: "Xem lại nhớ/mượn từng cột.",
        idea: "Mỗi bài: đặt tính → tính → kiểm.",
        warns: ["Quên nhớ.", "Lệch cột."],
        checks: [
          { q: "9+8?", a: "17." },
          { q: "37+28?", a: "65." },
        ],
        slow: "82 − 19: đơn vị 12 − 9 = 3; chục 8 − 1 − 1 = 6 → 63.",
        memory: "HK1 số: nhẩm 20 + đặt tính 100.",
      },
      34: {
        why: "Ôn hình trước kiểm tra.",
        def: "Điểm, đoạn, đường, cong, tứ giác, gấp khúc.",
        easy: "4 cạnh → tứ giác. Hai mút → đoạn.",
        step: "Đường thẳng kéo dài hai phía.",
        trap: "Đoạn ≠ đường thẳng.",
        idea: "Đếm cạnh, nhìn mút.",
        warns: ["Nhầm tên."],
        checks: [
          { q: "Tứ giác mấy cạnh?", a: "4." },
          { q: "Hai mút?", a: "Đoạn thẳng." },
        ],
        slow: "Kể hình trong lớp học.",
        memory: "Hình phẳng HK1 nằm lòng tên gọi.",
      },
      35: {
        why: "Ôn kg và l trước kiểm tra — đo lường hay mất điểm vì quên đơn vị.",
        def: "Cộng trừ chỉ khi cùng đơn vị. kg = khối lượng; l = dung tích.",
        easy: "6 kg + 3 kg = 9 kg. 8 l − 5 l = 3 l.",
        step: "Gạo, đường → kg. Nước, sữa → l. Mua 2 kg + 1 kg = 3 kg.",
        trap: "Không cộng 2 kg với 3 l. Kết quả phải kèm đơn vị đúng loại đề hỏi.",
        idea: "Gạch chân đơn vị trong đề trước khi tính.",
        warns: ["Thiếu đơn vị.", "Nhầm kg với l.", "Cộng khác loại đo."],
        checks: [
          { q: "6 kg + 3 kg?", a: "9 kg." },
          { q: "l đo gì?", a: "Dung tích." },
        ],
        slow: "Bài: can 5 l, thêm 2 l. Phép 5 + 2 = 7, trả lời 7 lít.",
        memory: "kg nặng/nhẹ; l sức chứa chất lỏng; cùng đơn vị mới cộng trừ.",
      },
      36: {
        why: "Tổng ôn toàn HK1.",
        def: "Số, phép tính, hình, đo, thời gian.",
        easy: "45+38=83. 100−26=74.",
        step: "Liền sau 99=100. Tứ giác 4 cạnh. 1 giờ=60 phút.",
        trap: "Làm tràn lan không soát.",
        idea: "Chia thời gian: phép tính / hình / đo.",
        warns: ["Sót đơn vị.", "Quên nhớ."],
        checks: [
          { q: "45+38?", a: "83." },
          { q: "1 giờ = ? phút", a: "60." },
        ],
        slow: "Mỗi dạng 1 câu mẫu trước khi làm đề.",
        memory: "HK1 Toán 2: 100, có nhớ, hình, kg/l, giờ.",
      },
    };
    const exercises = {
      33: [
        exNum("9 + 8 = ?", 17, "Qua 10.", "17."),
        exNum("14 − 6 = ?", 8, "Trừ.", "8."),
        exNum("37 + 28 = ?", 65, "Nhớ.", "65."),
        exNum("90 − 47 = ?", 43, "Mượn.", "43."),
        exNum("56 + 9 = ?", 65, "Nhớ.", "65."),
        exNum("8 + 7 = ?", 15, "Qua 10.", "15."),
        exNum("63 − 18 = ?", 45, "Mượn.", "45."),
      ],
      34: [
        exMC("4 cạnh", ["Tứ giác", "Tam giác", "Đoạn", "Điểm"], 0, "4.", "Tứ giác."),
        exMC("Đường thẳng khác đoạn", ["Không hai mút", "Ngắn hơn", "Cong", "1 điểm"], 0, "Kéo dài.", "Không hai mút."),
        exNum("Tam giác mấy đỉnh?", 3, "3.", "3."),
        exMC("Gấp khúc", ["Đoạn nối đoạn", "Khối cầu", "Kg", "Lịch"], 0, "Gấp.", "Đoạn nối."),
        exMC("Thẳng hàng", ["Một đường thẳng", "Ba đường", "Tròn", "Không"], 0, "Một đường.", "Đường thẳng."),
        exMC("Hai mút", ["Đoạn thẳng", "Đường thẳng", "Kg", "Giờ"], 0, "Đoạn.", "Đoạn."),
        exNum("Tứ giác mấy cạnh?", 4, "4.", "4."),
      ],
      35: [
        exNum("6 kg + 3 kg = ?", 9, "Cộng.", "9."),
        exNum("8 l − 5 l = ?", 3, "Trừ.", "3."),
        exMC("Đo nước", ["Lít", "Kg", "Ngày", "Điểm"], 0, "l.", "Lít."),
        exMC("Đo nặng", ["Kg", "L", "Giờ", "Mút"], 0, "kg.", "Kg."),
        exNum("1+1+1 kg=?", 3, "3.", "3."),
        exNum("10 l − 1 l = ?", 9, "9.", "9."),
        exNum("4 kg + 4 kg = ?", 8, "8.", "8."),
      ],
      36: [
        exNum("45 + 38 = ?", 83, "Nhớ.", "83."),
        exNum("100 − 26 = ?", 74, "Trừ.", "74."),
        exNum("Liền sau 99?", 100, "+1.", "100."),
        exMC("Tứ giác mấy cạnh?", ["4", "3", "2", "5"], 0, "4.", "4."),
        exNum("1 giờ = ? phút", 60, "60.", "60."),
        exNum("9 + 6 = ?", 15, "Qua 10.", "15."),
        exNum("7 + 8 = ?", 15, "15.", "15."),
      ],
    };
    // fix slow text for 33
    contents[33].slow = "82 − 19: đơn vị 12 − 9 = 3; chục 8 − 1 − 1 = 6 → 63.";
    add(num, 7, title, summary, figs[num], contents[num], exercises[num]);
  }

  // Ch 8 multiply divide
  add(
    37,
    8,
    "Phép nhân",
    "Nhân là cộng các số hạng bằng nhau.",
    svgArray(2, 4, "Phép nhân"),
    {
      why: "Nhân giúp viết gọn phép cộng lặp — nền bảng cửu chương.",
      def: "Phép nhân là gộp các nhóm bằng nhau. 2 + 2 + 2 + 2 = 2 × 4 = 8. Dấu × đọc “nhân”.",
      easy: "5 + 5 = 5 × 2 = 10. 3 + 3 = 3 × 2 = 6.",
      step: "4 hàng, mỗi hàng 2 cái: 4 × 2 = 8.",
      trap: "2 × 3 khác 2 + 3. Nhân là cộng lặp, không phải cộng hai số khác nhau một lần.",
      idea: "Vẽ chấm theo hàng/cột rồi đếm — hiểu rồi mới thuộc.",
      warns: ["Nhầm nhân với cộng.", "Đếm thiếu nhóm."],
      checks: [
        { q: "2+2+2+2 = 2 × ?", a: "4." },
        { q: "5×2=?", a: "10." },
      ],
      slow: "Có 3 đĩa, mỗi đĩa 2 cái bánh. 2 + 2 + 2 = 6 = 2 × 3.",
      memory: "Nhân = cộng các số bằng nhau. a × b = a lặp b lần (hoặc ngược).",
    },
    [
      exNum("2+2+2+2 = 2 × ?", 4, "4 số hạng.", "4."),
      exNum("5 × 2 = ?", 10, "5+5.", "10."),
      exNum("3 × 2 = ?", 6, "3+3.", "6."),
      exMC("Nhân liên quan", ["Cộng lặp số bằng nhau", "Trừ có nhớ", "Đường cong", "Lịch"], 0, "Cộng lặp.", "Cộng lặp."),
      exNum("4 × 2 = ?", 8, "4+4.", "8."),
      exNum("2 × 2 = ?", 4, "Đôi.", "4."),
      exNum("1 × 5 = ?", 5, "Chính nó.", "5."),
    ]
  );

  add(
    38,
    8,
    "Thừa số, tích",
    "Gọi tên thành phần phép nhân.",
    svgArray(3, 5, "Thừa số và tích"),
    {
      why: "Biết tên thừa số – tích để học bảng nhân và bài toán sau này.",
      def: "Trong a × b = c: a, b là <strong>thừa số</strong>; c là <strong>tích</strong>. Đổi chỗ thừa số, tích không đổi.",
      easy: "3 × 5 = 15: thừa số 3 và 5, tích 15.",
      step: "2 × 6 = 12; 6 × 2 = 12 (cùng tích).",
      trap: "Không gọi tích là “tổng”. Tổng là của phép cộng.",
      idea: "Tích = kết quả phép nhân.",
      warns: ["Nhầm tên thành phần.", "Nhầm với thương."],
      checks: [
        { q: "4×5=20, 20 là gì?", a: "Tích." },
        { q: "2×7=14, 2 là gì?", a: "Thừa số." },
      ],
      slow: "5 × 3 = 5 + 5 + 5 = 15. Tích 15.",
      memory: "Thừa số × thừa số = tích.",
    },
    [
      exMC("4 × 5 = 20, 20 là", ["Tích", "Thừa số", "Hiệu", "Thương"], 0, "Kết quả nhân.", "Tích."),
      exMC("2 × 7 = 14, 2 là", ["Thừa số", "Tích", "Số trừ", "Lít"], 0, "Thành phần.", "Thừa số."),
      exNum("2 × 6 = ?", 12, "Bảng 2.", "12."),
      exNum("5 × 3 = ?", 15, "5+5+5.", "15."),
      exMC("Đổi chỗ thừa số, tích", ["Không đổi", "Đổi dấu", "Luôn tăng", "Luôn giảm"], 0, "Giao hoán.", "Không đổi."),
      exNum("3 × 4 = ?", 12, "12.", "12."),
      exNum("5 × 4 = ?", 20, "20.", "20."),
    ]
  );

  add(
    39,
    8,
    "Bảng nhân 2",
    "Thuộc bảng nhân 2.",
    svgTimesTable(39, 2),
    {
      why: "Bảng 2 là bảng chẵn — dễ thuộc nhất, dùng mọi ngày.",
      def: "2 × n = n + n. Dãy tích: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.",
      easy: "2 × 5 = 10. 2 × 7 = 14. 2 × 10 = 20.",
      step: "2 × 8 = 16. Kiểm: 16 : 2 = 8 (sắp học chia).",
      trap: "2 × 6 = 12, không phải 10.",
      idea: "Đếm cách 2: 2,4,6… gắn với từng mốc nhân.",
      warns: ["Nhầm 2×9=16.", "Không ôn thành tiếng."],
      checks: [
        { q: "2×5?", a: "10." },
        { q: "2×8?", a: "16." },
      ],
      slow: "Học 2×1 đến 2×10 theo thứ tự, rồi xáo trộn.",
      memory: "Bảng 2 = đếm cách 2.",
    },
    [
      exNum("2 × 5 = ?", 10, "Đôi 5.", "10."),
      exNum("2 × 8 = ?", 16, "Bảng 2.", "16."),
      exNum("2 × 10 = ?", 20, "2 chục.", "20."),
      exNum("2 × 1 = ?", 2, "Chính nó.", "2."),
      exNum("2 × 6 = ?", 12, "Bảng 2.", "12."),
      exNum("2 × 9 = ?", 18, "Bảng 2.", "18."),
      exNum("2 × 7 = ?", 14, "Bảng 2.", "14."),
    ]
  );

  add(
    40,
    8,
    "Bảng nhân 5",
    "Thuộc bảng nhân 5.",
    svgTimesTable(40, 5),
    {
      why: "Bảng 5 gắn với đồng hồ (5,10,15…) và đếm nhanh.",
      def: "Dãy tích bảng 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.",
      easy: "5 × 4 = 20. 5 × 6 = 30. 5 × 10 = 50.",
      step: "5 × 5 = 25. 5 × 8 = 40.",
      trap: "5 × 7 = 35, không phải 30.",
      idea: "Đếm cách 5; hoặc 5 × n = nửa của 10 × n.",
      warns: ["Nhầm mốc 30/35/40.", "Không luyện xáo."],
      checks: [
        { q: "5×3?", a: "15." },
        { q: "5×8?", a: "40." },
      ],
      slow: "5,10,15,20… chỉ tay từng lần nhân.",
      memory: "Bảng 5 = đếm cách 5 đến 50.",
    },
    [
      exNum("5 × 3 = ?", 15, "Bảng 5.", "15."),
      exNum("5 × 5 = ?", 25, "Đôi.", "25."),
      exNum("5 × 8 = ?", 40, "Bảng 5.", "40."),
      exNum("5 × 10 = ?", 50, "5 chục.", "50."),
      exNum("5 × 2 = ?", 10, "10.", "10."),
      exNum("5 × 7 = ?", 35, "Bảng 5.", "35."),
      exNum("5 × 9 = ?", 45, "Bảng 5.", "45."),
    ]
  );

  add(
    41,
    8,
    "Phép chia",
    "Chia là chia đều / tách nhóm bằng nhau; ngược nhân.",
    svgDivide(10, 2, 5),
    {
      why: "Chia giúp tách đều đồ dùng, kẹo, nhóm bạn…",
      def: "a : b = c khi b × c = a. Dấu : đọc “chia”.",
      easy: "8 : 2 = 4 vì 2 × 4 = 8. 10 quả chia 2 đĩa đều: mỗi đĩa 5.",
      step: "15 : 5 = 3 vì 5 × 3 = 15. 20 : 5 = 4.",
      trap: "Không chia cho 0. 6 : 2 = 3, không phải 4.",
      idea: "Hỏi: “b nhân mấy bằng a?”",
      warns: ["Nhầm với trừ.", "Chia không đều mà ghi một thương."],
      checks: [
        { q: "8:2=?", a: "4." },
        { q: "15:5=?", a: "3." },
      ],
      slow: "20 cái kẹo, 5 bạn chia đều. 5 × □ = 20 → □ = 4. Mỗi bạn 4.",
      memory: "Chia ngược nhân. Thương × số chia = số bị chia.",
    },
    [
      exNum("8 : 2 = ?", 4, "2×4=8.", "4."),
      exNum("15 : 5 = ?", 3, "5×3=15.", "3."),
      exNum("10 : 2 = ?", 5, "Bảng 2.", "5."),
      exNum("20 : 5 = ?", 4, "Bảng 5.", "4."),
      exMC("Chia ngược với", ["Nhân", "Cộng luôn", "Đo giờ", "Vẽ đoạn"], 0, "Ngược nhân.", "Nhân."),
      exNum("6 : 2 = ?", 3, "3.", "3."),
      exNum("25 : 5 = ?", 5, "5.", "5."),
    ]
  );

  add(
    42,
    8,
    "Số bị chia, số chia, thương",
    "Gọi tên thành phần phép chia.",
    svgDivide(12, 2, 6),
    {
      why: "Đúng tên thành phần để hiểu đề “tìm thương”.",
      def: "a : b = c — a <strong>số bị chia</strong>, b <strong>số chia</strong>, c <strong>thương</strong>.",
      easy: "20 : 5 = 4. 12 : 2 = 6.",
      step: "Vì 2 × 7 = 14 nên 14 : 2 = 7.",
      trap: "Thương không phải thừa số (dù đôi khi số trùng).",
      idea: "Thương × số chia = số bị chia (kiểm).",
      warns: ["Nhầm tên.", "Không kiểm bằng nhân."],
      checks: [
        { q: "12:2=6, 6 là gì?", a: "Thương." },
        { q: "10:5=2, 10 là gì?", a: "Số bị chia." },
      ],
      slow: "18 : 2. 2 × 9 = 18 → thương 9.",
      memory: "Số bị chia : số chia = thương.",
    },
    [
      exMC("12 : 2 = 6, 6 là", ["Thương", "Số bị chia", "Số chia", "Tích"], 0, "Kết quả chia.", "Thương."),
      exMC("10 : 5 = 2, 10 là", ["Số bị chia", "Thương", "Số chia", "Hiệu"], 0, "Bị chia.", "Số bị chia."),
      exNum("18 : 2 = ?", 9, "Bảng 2.", "9."),
      exNum("25 : 5 = ?", 5, "Bảng 5.", "5."),
      exNum("14 : 2 = ?", 7, "Ngược nhân.", "7."),
      exNum("30 : 5 = ?", 6, "Bảng 5.", "6."),
      exMC("Trong 20:5=4, số chia là", ["5", "20", "4", "25"], 0, "Sau dấu chia.", "5."),
    ]
  );

  add(
    43,
    8,
    "Bảng chia 2",
    "Thuộc bảng chia 2.",
    svgDivide(16, 2, 8),
    {
      why: "Từ bảng nhân 2 suy bảng chia 2.",
      def: "Nếu 2 × k = n thì n : 2 = k. Các số chẵn: 2,4,…,20.",
      easy: "16 : 2 = 8. 20 : 2 = 10. 6 : 2 = 3.",
      step: "14 : 2 = 7. 12 : 2 = 6.",
      trap: "Chỉ các tích trong bảng 2 mới chia hết cho 2 theo bài học thuộc lòng này.",
      idea: "Nửa của số chẵn (trong bảng) chính là thương chia 2.",
      warns: ["Nhầm 18:2=8.", "Quên 2:2=1."],
      checks: [
        { q: "6:2?", a: "3." },
        { q: "14:2?", a: "7." },
      ],
      slow: "Lấy bảng nhân 2 đọc ngược từng dòng.",
      memory: "Chia 2 = lấy nửa (với số trong bảng).",
    },
    [
      exNum("6 : 2 = ?", 3, "Bảng 2.", "3."),
      exNum("14 : 2 = ?", 7, "Bảng 2.", "7."),
      exNum("20 : 2 = ?", 10, "Bảng 2.", "10."),
      exNum("4 : 2 = ?", 2, "Đôi.", "2."),
      exNum("12 : 2 = ?", 6, "Bảng 2.", "6."),
      exNum("18 : 2 = ?", 9, "Bảng 2.", "9."),
      exNum("16 : 2 = ?", 8, "Bảng 2.", "8."),
    ]
  );

  add(
    44,
    8,
    "Bảng chia 5",
    "Thuộc bảng chia 5.",
    svgDivide(30, 5, 6),
    {
      why: "Đi cùng bảng nhân 5.",
      def: "Nếu 5 × k = n thì n : 5 = k.",
      easy: "30 : 5 = 6. 45 : 5 = 9. 10 : 5 = 2.",
      step: "40 : 5 = 8. 50 : 5 = 10. 5 : 5 = 1.",
      trap: "35 : 5 = 7, không phải 6.",
      idea: "Đếm ngược dãy 5,10,15… đến số bị chia.",
      warns: ["Nhầm 40:5=7.", "Không kiểm bằng nhân."],
      checks: [
        { q: "10:5?", a: "2." },
        { q: "35:5?", a: "7." },
      ],
      slow: "45 : 5: 5,10,15,20,25,30,35,40,45 — đếm 9 bước → 9.",
      memory: "Chia 5 ngược bảng nhân 5.",
    },
    [
      exNum("10 : 5 = ?", 2, "Bảng 5.", "2."),
      exNum("35 : 5 = ?", 7, "Bảng 5.", "7."),
      exNum("40 : 5 = ?", 8, "Bảng 5.", "8."),
      exNum("50 : 5 = ?", 10, "Bảng 5.", "10."),
      exNum("5 : 5 = ?", 1, "1.", "1."),
      exNum("45 : 5 = ?", 9, "Bảng 5.", "9."),
      exNum("25 : 5 = ?", 5, "Bảng 5.", "5."),
    ]
  );

  add(
    45,
    8,
    "Luyện tập chung",
    "Ôn nhân chia 2 và 5; thừa số, thương.",
    svgArray(5, 2, "Luyện nhân chia"),
    {
      why: "Khóa bảng 2 và 5 — trọng tâm HK2 đầu.",
      def: "Nhân/chia 2, 5; bài toán nhóm đều.",
      easy: "2×9=18. 5×7=35. 18:2=9. 45:5=9.",
      step: "4 đĩa × 5 bánh = 20 bánh.",
      trap: "Chọn nhầm × hay : — “mỗi” thường gợi nhân; “chia đều” gợi chia.",
      idea: "Vẽ nhóm nhỏ nếu chưa thuộc.",
      warns: ["Sai bảng.", "Nhầm phép."],
      checks: [
        { q: "2×9?", a: "18." },
        { q: "45:5?", a: "9." },
      ],
      slow: "Có 5 hộp, mỗi hộp 2 bút: 5 × 2 = 10.",
      memory: "Bảng 2 & 5 thuộc → nhân chia nhanh.",
    },
    [
      exNum("2 × 9 = ?", 18, "Bảng 2.", "18."),
      exNum("5 × 7 = ?", 35, "Bảng 5.", "35."),
      exNum("18 : 2 = ?", 9, "Chia 2.", "9."),
      exNum("45 : 5 = ?", 9, "Chia 5.", "9."),
      exNum("4 đĩa × 5 bánh = ?", 20, "4×5.", "20."),
      exNum("5 × 6 = ?", 30, "30.", "30."),
      exNum("16 : 2 = ?", 8, "8.", "8."),
    ]
  );

  // Ch 9 solids
  add(
    46,
    9,
    "Khối trụ, khối cầu",
    "Nhận biết khối trụ và khối cầu trong thực tiễn.",
    svgCylinderSphere(),
    {
      why: "Đồ chơi và đồ dùng quanh em là hình khối — học tên đúng.",
      def: "<strong>Khối cầu</strong> tròn đều như bóng. <strong>Khối trụ</strong> như lon/ống, có hai đáy tròn và mặt cong bên.",
      easy: "Quả bóng — khối cầu. Lon sữa — khối trụ.",
      step: "Khối trụ lăn theo thân cong; khối cầu lăn mọi phía.",
      trap: "Hình tròn phẳng (vẽ trên giấy) khác khối cầu (có khối).",
      idea: "Sờ đồ thật: bóng, bi, lon, ống.",
      warns: ["Nhầm hình phẳng với khối.", "Gọi nhầm trụ/cầu."],
      checks: [
        { q: "Bóng giống khối nào?", a: "Cầu." },
        { q: "Lon sữa?", a: "Trụ." },
      ],
      slow: "Quan sát: viên bi (cầu), ống cắm bút (trụ), quả cam (gần cầu).",
      memory: "Cầu = bóng. Trụ = ống/lon.",
    },
    [
      exMC("Quả bóng", ["Khối cầu", "Khối trụ", "Đoạn thẳng", "Tứ giác"], 0, "Tròn đều.", "Cầu."),
      exMC("Lon sữa dạng ống", ["Khối trụ", "Khối cầu", "Điểm", "Ngày"], 0, "Hai đáy tròn.", "Trụ."),
      exMC("Khối cầu", ["Tròn đều mọi phía", "Hai đáy vuông", "Tứ giác", "Kg"], 0, "Bóng.", "Tròn đều."),
      exMC("Hình phẳng khác khối", ["Khối có dạng không gian", "Phẳng nặng hơn", "Khối chỉ trên lịch", "Không khác"], 0, "3D.", "Không gian."),
      exMC("Viên bi", ["Khối cầu", "Khối trụ", "Đoạn", "Lịch"], 0, "Bi.", "Cầu."),
      exMC("Lõi giấy vệ sinh", ["Khối trụ", "Khối cầu", "Tam giác", "Giờ"], 0, "Ống.", "Trụ."),
      exMC("Khối cầu có đáy phẳng như trụ?", ["Không", "Có hai đáy", "Có một đáy", "Có bốn đáy"], 0, "Không đáy phẳng.", "Không."),
    ]
  );

  add(
    47,
    9,
    "Luyện tập chung",
    "Ôn nhận dạng khối trụ, khối cầu.",
    svgCylinderSphere(),
    {
      why: "Củng cố trước khi sang số đến 1000.",
      def: "Chọn đồ vật thật ứng với khối trụ/cầu.",
      easy: "Cam ≈ cầu; cốc ống ≈ trụ.",
      step: "Quan sát nhiều góc để không nhầm.",
      trap: "Quả trứng gần cầu nhưng không tròn đều như bi — lớp 2 nhận dạng mức “gần giống”.",
      idea: "Hỏi: lăn mọi phía hay lăn theo một chiều?",
      warns: ["Nhầm tên.", "Chỉ nhìn ảnh một góc."],
      checks: [
        { q: "Cốc ống?", a: "Trụ." },
        { q: "Bi?", a: "Cầu." },
      ],
      slow: "Liệt kê 3 đồ vật trụ và 3 đồ vật cầu trong nhà.",
      memory: "Trụ – ống; cầu – bóng/bi.",
    },
    [
      exMC("Viên bi", ["Khối cầu", "Khối trụ", "Đoạn", "Lịch"], 0, "Tròn.", "Cầu."),
      exMC("Ống giấy", ["Khối trụ", "Khối cầu", "Tam giác", "Giờ"], 0, "Ống.", "Trụ."),
      exMC("Quả cam gần", ["Khối cầu", "Gấp khúc", "Tứ giác", "Số trừ"], 0, "Tròn.", "Cầu."),
      exMC("Cốc dạng ống", ["Khối trụ", "Khối cầu", "Điểm", "Phút"], 0, "Ống.", "Trụ."),
      exMC("Bóng đá", ["Khối cầu", "Tứ giác", "Đoạn", "Lít"], 0, "Cầu.", "Cầu."),
      exMC("Lon nước ngọt", ["Khối trụ", "Khối cầu", "Điểm", "Ngày"], 0, "Trụ.", "Trụ."),
      exMC("Phân biệt nhanh", ["Cách lăn và dạng đáy", "Chỉ màu", "Chỉ giá tiền", "Chỉ kg"], 0, "Dạng.", "Lăn/đáy."),
    ]
  );

  // Ch 10 numbers to 1000
  add(
    48,
    10,
    "Đơn vị, chục, trăm, nghìn",
    "Quan hệ 10 đơn vị = 1 chục; 10 chục = 1 trăm; 10 trăm = 1 nghìn.",
    svgPlace3(1, 0, 0),
    {
      why: "Hiểu “tỷ giá” các hàng để đọc số đến 1000.",
      def: "10 đơn vị = 1 chục; 10 chục = 1 trăm = 100; 10 trăm = 1 nghìn = 1000.",
      easy: "10 chục = 100. 10 trăm = 1000. 5 chục = 50.",
      step: "1000 gồm 10 trăm hoặc 100 chục.",
      trap: "Nhầm 10 chục = 10 (sai) — phải là 100.",
      idea: "Mỗi lần đủ 10 thì “đổi” lên hàng bên trái.",
      warns: ["Nhầm nghìn với trăm.", "Đổi sai 10 lần."],
      checks: [
        { q: "10 chục = ?", a: "100." },
        { q: "10 trăm = ?", a: "1000." },
      ],
      slow: "Bó que tính: 10 que = 1 chục; 10 bó chục = 1 trăm.",
      memory: "10–10–10: đơn vị→chục→trăm→nghìn.",
    },
    [
      exNum("10 chục = ?", 100, "1 trăm.", "100."),
      exNum("10 trăm = ?", 1000, "1 nghìn.", "1000."),
      exNum("10 đơn vị = ?", 10, "1 chục.", "10."),
      exMC("1 nghìn bằng", ["10 trăm", "10 chục", "10 đơn vị", "100 đơn vị"], 0, "10×100.", "10 trăm."),
      exNum("5 chục = ?", 50, "5×10.", "50."),
      exNum("7 trăm = ?", 700, "7×100.", "700."),
      exNum("100 chục = ?", 1000, "10 trăm.", "1000."),
    ]
  );

  add(
    49,
    10,
    "Các số tròn trăm, tròn chục",
    "Nhận biết số tròn trăm, tròn chục.",
    svgPlace3(3, 0, 0),
    {
      why: "Số tròn giúp ước lượng và tính nhẩm nhanh.",
      def: "Số <strong>tròn chục</strong> tận cùng bằng 0. Số <strong>tròn trăm</strong> tận cùng bằng 00.",
      easy: "400 tròn trăm. 360 tròn chục. 305 không tròn chục.",
      step: "500 vừa tròn trăm vừa tròn chục. 270 tròn chục nhưng không tròn trăm.",
      trap: "990 tròn chục, không tròn trăm.",
      idea: "Nhìn chữ số tận cùng: một số 0 / hai số 0.",
      warns: ["Gọi 410 là tròn trăm.", "Quên 300 cũng tròn chục."],
      checks: [
        { q: "400 tròn trăm?", a: "Có." },
        { q: "360 tròn chục?", a: "Có." },
      ],
      slow: "Liệt kê tròn trăm: 100,200,…,1000. Tròn chục: 10,20,30,…",
      memory: "Tròn chục: …0. Tròn trăm: …00.",
    },
    [
      exMC("Tròn trăm", ["400", "410", "401", "450"], 0, "…00", "400."),
      exMC("Tròn chục", ["360", "361", "306", "3"], 0, "…0", "360."),
      exMC("500 là", ["Tròn trăm", "Không tròn chục", "Không tròn", "Giờ"], 0, "500.", "Tròn trăm."),
      exNum("3 trăm = ?", 300, "300.", "300."),
      exMC("270 tròn chục?", ["Đúng", "Sai", "Chỉ tròn trăm", "Không phải số"], 0, "Tận 0.", "Đúng."),
      exMC("990 tròn trăm?", ["Sai", "Đúng", "Không biết", "Chỉ khi chẵn"], 0, "Tận 90.", "Sai."),
      exNum("8 trăm = ?", 800, "800.", "800."),
    ]
  );

  add(
    50,
    10,
    "So sánh các số tròn trăm, tròn chục",
    "So sánh nhanh số tròn trăm, tròn chục.",
    svgPlace3(6, 0, 0),
    {
      why: "So sánh số lớn bằng cách nhìn hàng cao trước.",
      def: "So hàng trăm trước, rồi hàng chục, rồi đơn vị.",
      easy: "700 > 70. 600 > 450. 380 < 400.",
      step: "990 > 909 vì cùng 9 trăm, 9 chục > 0 chục.",
      trap: "800 > 80 — khác hàng, đừng chỉ đếm chữ số 8.",
      idea: "Viết hai số thẳng cột hàng rồi so từng hàng.",
      warns: ["So độ dài chuỗi chữ số sai.", "Quên hàng trăm."],
      checks: [
        { q: "700 hay 70 lớn hơn?", a: "700." },
        { q: "450 … 540", a: "<." },
      ],
      slow: "450 và 540: hàng trăm 4 < 5 → 450 < 540.",
      memory: "So từ trái (hàng cao) sang phải.",
    },
    [
      exMC("Lớn hơn", ["700", "70", "7", "17"], 0, "Hàng trăm.", "700."),
      exMC("300 … 300", ["=", "<", ">", "Không so"], 0, "Bằng.", "="),
      exMC("450 … 540", ["<", "=", ">", "450 hơn"], 0, "So trăm.", "<"),
      exNum("Tròn trăm liền sau 500?", 600, "+100.", "600."),
      exMC("990 … 909", [">", "<", "=", "Không"], 0, "So chục.", ">"),
      exMC("200 … 2000 (nếu biết)", ["<", ">", "=", "200 hơn"], 0, "2000 lớn hơn phạm vi? 2000 ngoài 1000 — skip: use 200…300", "<"),
      exNum("Tròn chục liền trước 400?", 390, "−10.", "390."),
    ]
  );
  // Fix bad exercise on lesson 50 - 200 vs 2000 is confusing for grade 2 scope
  L[L.length - 1].exercises[5] = exMC("200 … 300", ["<", ">", "=", "200 hơn"], 0, "So trăm.", "<");

  add(
    51,
    10,
    "Số có ba chữ số",
    "Đọc, viết số có ba chữ số.",
    svgPlace3(2, 0, 8),
    {
      why: "Bước vào thế giới số đến 999 — nền tảng lớp 2 HK2.",
      def: "Số có ba chữ số: hàng trăm, chục, đơn vị. 0 ở giữa đọc “linh” (208 = hai trăm linh tám).",
      easy: "364; 510; 707. 521 đọc “năm trăm hai mươi mốt”.",
      step: "4 trăm, 0 chục, 6 đơn vị → 406.",
      trap: "205 ≠ 25. Chữ 0 giữ chỗ hàng chục.",
      idea: "Đọc từ trái: trăm → chục → đơn vị. Viết cũng vậy.",
      warns: ["Nuốt chữ số 0.", "Đảo hàng."],
      checks: [
        { q: "208 đọc?", a: "Hai trăm linh tám." },
        { q: "Hàng trăm của 735?", a: "7." },
      ],
      slow: "Viết năm trăm linh hai: 5 trăm, 0 chục, 2 → 502.",
      memory: "Ba hàng: trăm|chục|đv. 0 giữa = “linh”.",
    },
    [
      exMC("208 đọc", ["Hai trăm linh tám", "Hai trăm tám", "Hai mươi tám", "Hai nghìn tám"], 0, "0 chục.", "Linh tám."),
      exNum("Năm trăm hai mươi mốt", 521, "521.", "521."),
      exNum("4 trăm 0 chục 6 đv", 406, "406.", "406."),
      exMC("Hàng trăm của 735", ["7", "3", "5", "735"], 0, "Trái nhất.", "7."),
      exNum("Liền sau 999?", 1000, "+1.", "1000."),
      exNum("Ba trăm linh năm", 305, "305.", "305."),
      exMC("Chữ số hàng đơn vị của 482", ["2", "4", "8", "82"], 0, "Phải nhất.", "2."),
    ]
  );

  add(
    52,
    10,
    "Viết số thành tổng các trăm, chục, đơn vị",
    "Phân tích: 365 = 300 + 60 + 5.",
    svgPlace3(3, 6, 5),
    {
      why: "Phân tích số giúp cộng trừ theo hàng và hiểu giá trị vị trí.",
      def: "Mỗi chữ số nhân giá trị hàng: 472 = 400 + 70 + 2.",
      easy: "348 = 300 + 40 + 8. 500 + 20 + 3 = 523.",
      step: "305 = 300 + 5 (hoặc 300 + 0 + 5). 610 = 600 + 10.",
      trap: "348 ≠ 300 + 4 + 8 (sai giá trị hàng chục).",
      idea: "Viết ba “mảnh” trăm, chục, đơn vị rồi cộng lại.",
      warns: ["Sai giá trị hàng.", "Quên hàng 0."],
      checks: [
        { q: "348 = ?", a: "300+40+8." },
        { q: "700+5=?", a: "705." },
      ],
      slow: "653: 6 trăm=600, 5 chục=50, 3=3 → 600+50+3.",
      memory: "abc = a00 + b0 + c.",
    },
    [
      exMC("348 =", ["300+40+8", "300+4+8", "30+40+8", "348+0"], 0, "Hàng.", "300+40+8."),
      exNum("500+20+3 = ?", 523, "Ghép.", "523."),
      exNum("700+5 = ?", 705, "0 chục.", "705."),
      exMC("610 =", ["600+10", "600+1", "61+0", "6+10"], 0, "6 trăm 1 chục.", "600+10."),
      exNum("200+200+200 = ?", 600, "3×200.", "600."),
      exNum("400+50+6 = ?", 456, "Ghép.", "456."),
      exNum("900+90+9 = ?", 999, "Ghép.", "999."),
    ]
  );

  add(
    53,
    10,
    "So sánh các số có ba chữ số",
    "So sánh số có ba chữ số.",
    svgPlace3(5, 2, 8),
    {
      why: "So sánh số ba chữ số dùng hàng ngày khi đọc giá, số trang, khoảng cách.",
      def: "So hàng trăm → chục → đơn vị.",
      easy: "528 > 519. 307 < 370. 900 > 899.",
      step: "875 lớn nhất trong 875, 857, 785, 758.",
      trap: "707 < 770 vì chục 0 < 7, dù cùng 7 trăm.",
      idea: "Thẳng cột hàng rồi so lần lượt.",
      warns: ["So từng chữ số không theo hàng.", "Nhìn độ dài sai."],
      checks: [
        { q: "256…265", a: "<." },
        { q: "Bé nhất 404,440,400?", a: "400." },
      ],
      slow: "405 và 450: trăm bằng 4; chục 0 < 5 → 405 < 450.",
      memory: "So từ hàng trăm trở xuống.",
    },
    [
      exMC("256 … 265", ["<", "=", ">", "256 hơn"], 0, "So chục.", "<"),
      exMC("900 … 899", [">", "<", "=", "Không"], 0, "Hàng trăm.", ">"),
      exMC("Lớn nhất", ["875", "857", "785", "758"], 0, "So lần lượt.", "875."),
      exNum("Bé nhất trong 404, 440, 400?", 400, "So.", "400."),
      exMC("707 … 770", ["<", "=", ">", "Bằng"], 0, "So chục.", "<"),
      exMC("999 … 1000", ["<", ">", "=", "999 hơn"], 0, "1000 lớn hơn.", "<"),
      exMC("505 … 550", ["<", ">", "=", "505 hơn"], 0, "So chục.", "<"),
    ]
  );

  add(
    54,
    10,
    "Luyện tập chung",
    "Ôn số đến 1000: đọc viết, phân tích, so sánh.",
    svgPlace3(6, 7, 8),
    {
      why: "Chốt số đến 1000 trước đo độ dài và cộng trừ 1000.",
      def: "Đọc viết, tròn trăm/chục, phân tích, so sánh.",
      easy: "3 trăm 2 chục 5 = 325. 1000 = 10 trăm.",
      step: "600+70+8=678. 405 < 450.",
      trap: "Số có 0: đọc và viết đủ hàng.",
      idea: "Mỗi số hỏi: hàng nào? so với ai?",
      warns: ["Nuốt 0.", "So sai hàng."],
      checks: [
        { q: "325 gồm?", a: "3 trăm 2 chục 5." },
        { q: "900 tròn trăm?", a: "Có." },
      ],
      slow: "Sắp 308, 380, 803 tăng dần: 308, 380, 803.",
      memory: "Ba chữ số + giá trị hàng + so từ trái.",
    },
    [
      exNum("3 trăm 2 chục 5 = ?", 325, "Ghép.", "325."),
      exMC("1000 gồm mấy trăm?", ["10", "100", "1", "1000"], 0, "10 trăm.", "10."),
      exMC("405 … 450", ["<", "=", ">", "Không"], 0, "So chục.", "<"),
      exNum("600+70+8 = ?", 678, "Ghép.", "678."),
      exMC("Tròn trăm", ["900", "910", "901", "990"], 0, "…00", "900."),
      exNum("Liền trước 1000?", 999, "−1.", "999."),
      exNum("704 viết tổng hàng: 700+?=704. ?=", 4, "4.", "4."),
    ]
  );

  // Ch 11 length money
  add(
    55,
    11,
    "Đề-xi-mét. Mét. Ki-lô-mét",
    "Đơn vị đo độ dài dm, m, km và đổi đơn vị cơ bản.",
    svgLength(),
    {
      why: "Đo chiều dài bàn, sân, đường đi cần đúng đơn vị.",
      def: "1 m = 10 dm; 1 km = 1000 m. (Ôn: 1 dm = 10 cm.)",
      easy: "Thước mét đo lớp học. Quãng đường xa dùng km.",
      step: "3 m = 30 dm. 10 dm = 1 m.",
      trap: "Đổi sai 1 m = 100 dm (sai). Đúng 10 dm.",
      idea: "Chọn đơn vị phù hợp kích thước vật.",
      warns: ["Sai phép đổi.", "Dùng km đo quyển sách."],
      checks: [
        { q: "1 m = ? dm", a: "10." },
        { q: "1 km = ? m", a: "1000." },
      ],
      slow: "Băng ghế 2 m = 2 × 10 = 20 dm.",
      memory: "m ↔ dm: ×10 / :10. km = 1000 m.",
    },
    [
      exNum("1 m = ? dm", 10, "10.", "10."),
      exNum("1 km = ? m", 1000, "1000.", "1000."),
      exNum("3 m = ? dm", 30, "×10.", "30."),
      exMC("Đo chiều dài lớp học", ["Mét", "Km", "Kg", "Lít"], 0, "Mét.", "Mét."),
      exMC("Đo khoảng cách hai tỉnh", ["Km", "Dm", "Kg", "Ngày"], 0, "Xa.", "Km."),
      exNum("10 dm = ? m", 1, "Đổi.", "1."),
      exNum("2 km = ? m", 2000, "×1000.", "2000."),
    ]
  );

  add(
    56,
    11,
    "Giới thiệu Tiền Việt Nam",
    "Nhận biết mệnh giá tiền Việt Nam; cộng trừ tiền đơn giản.",
    svgShopping(),
    {
      why: "Tính tiền mua đồ là toán thật mỗi ngày.",
      def: "Đơn vị tiền: <strong>đồng</strong>. Làm quen mệnh giá 1000, 2000, 5000, 10000 đồng…",
      easy: "Hai tờ 1000 đồng = 2000 đồng. 5000 − 2000 = 3000.",
      step: "Ba tờ 1000 = 3000. 10000 − 1000 = 9000.",
      trap: "Cộng đúng số, nhớ đơn vị “đồng”.",
      idea: "Đổi nhiều tờ nhỏ thành mệnh giá lớn khi đủ.",
      warns: ["Cộng nhầm mệnh giá.", "Quên đơn vị."],
      checks: [
        { q: "1000+1000?", a: "2000." },
        { q: "Đơn vị tiền VN?", a: "Đồng." },
      ],
      slow: "Mua đồ 2000, đưa 5000: tiền thừa 5000 − 2000 = 3000 đồng.",
      memory: "Tiền VN: đồng. Cộng trừ như số tự nhiên.",
    },
    [
      exNum("1000 + 1000 = ?", 2000, "Cộng.", "2000."),
      exNum("5000 − 2000 = ?", 3000, "Trừ.", "3000."),
      exMC("Đơn vị tiền Việt Nam", ["Đồng", "Kg", "Lít", "Độ"], 0, "Đồng.", "Đồng."),
      exNum("Ba tờ 1000 = ?", 3000, "3×1000.", "3000."),
      exNum("10000 − 1000 = ?", 9000, "Trừ.", "9000."),
      exNum("2000 + 3000 = ?", 5000, "Cộng.", "5000."),
      exNum("10000 − 4000 = ?", 6000, "Trừ.", "6000."),
    ]
  );

  add(
    57,
    11,
    "Thực hành và trải nghiệm đo độ dài",
    "Thực hành đo bằng thước; ước lượng.",
    svgLength(),
    {
      why: "Đo thật mới hiểu số đo nghĩa là gì.",
      def: "Đặt điểm 0 của thước khớp điểm đầu. Cộng trừ số đo cùng đơn vị.",
      easy: "4 dm + 5 dm = 9 dm. 12 m − 3 m = 9 m.",
      step: "2 km + 3 km = 5 km. 10 dm = 1 m.",
      trap: "Đặt thước lệch điểm đầu → sai số đo.",
      idea: "Ước lượng trước (dài khoảng bao nhiêu), đo sau.",
      warns: ["Sai điểm đầu thước.", "Khác đơn vị mà cộng."],
      checks: [
        { q: "4+5 dm?", a: "9." },
        { q: "10 dm = ? m", a: "1." },
      ],
      slow: "Đo cạnh bàn: điểm 0 sát mép, đọc số ở mép kia.",
      memory: "Đo: điểm 0 đúng chỗ. Tính: cùng đơn vị.",
    },
    [
      exNum("4 dm + 5 dm = ?", 9, "Cộng.", "9."),
      exNum("12 m − 3 m = ?", 9, "Trừ.", "9."),
      exNum("2 km + 3 km = ?", 5, "Cộng.", "5."),
      exMC("Khi đo cần", ["Đặt đúng điểm đầu thước", "Đo trên không", "Không nhìn số", "Dùng cân"], 0, "Điểm 0.", "Đúng điểm đầu."),
      exNum("10 dm = ? m", 1, "Đổi.", "1."),
      exNum("7 m + 2 m = ?", 9, "Cộng.", "9."),
      exNum("8 dm − 3 dm = ?", 5, "Trừ.", "5."),
    ]
  );

  add(
    58,
    11,
    "Luyện tập chung",
    "Ôn dm, m, km và tiền Việt Nam.",
    svgMoney(),
    {
      why: "Chốt đo độ dài và tiền trước cộng trừ 1000.",
      def: "Đổi đơn vị đơn giản; cộng trừ tiền và độ dài.",
      easy: "7 m + 2 m = 9 m. 1 km = 1000 m. 2000 + 5000 = 7000.",
      step: "8 dm − 3 dm = 5 dm. 10000 − 4000 = 6000.",
      trap: "Kiểm đơn vị trước khi cộng.",
      idea: "Tách bài đo / bài tiền.",
      warns: ["Lẫn km với m.", "Sai tiền thừa."],
      checks: [
        { q: "1 km = ? m", a: "1000." },
        { q: "2000+5000?", a: "7000." },
      ],
      slow: "Mua 2 món 2000 và 3000: tổng 5000 đồng.",
      memory: "dm–m–km; tiền đồng; cùng đơn vị.",
    },
    [
      exNum("7 m + 2 m = ?", 9, "Cộng.", "9."),
      exNum("1 km = ? m", 1000, "1000.", "1000."),
      exNum("2000 + 5000 = ?", 7000, "Tiền.", "7000."),
      exNum("8 dm − 3 dm = ?", 5, "Trừ.", "5."),
      exNum("10000 − 4000 = ?", 6000, "Trừ.", "6000."),
      exNum("3 m = ? dm", 30, "×10.", "30."),
      exNum("1000 + 2000 + 2000 = ?", 5000, "Cộng.", "5000."),
    ]
  );

  // Ch 12 add/sub 1000
  add(
    59,
    12,
    "Phép cộng (không nhớ) trong phạm vi 1000",
    "Cộng số có ba chữ số không nhớ.",
    svgPlace3(2, 1, 4),
    {
      why: "Cộng không nhớ 3 chữ số rèn thẳng cột hàng trăm–chục–đv.",
      def: "Cộng từng hàng: đơn vị, chục, trăm. Không nhớ khi mỗi hàng &lt; 10.",
      easy: "214 + 333 = 547. 500 + 200 = 700.",
      step: "120 + 45 = 165. 301 + 406 = 707.",
      trap: "Lệch cột khi cộng số 2 chữ với 3 chữ.",
      idea: "Viết thẳng từ phải sang trái.",
      warns: ["Lệch hàng.", "Cộng nhầm hàng trăm."],
      checks: [
        { q: "214+333?", a: "547." },
        { q: "500+200?", a: "700." },
      ],
      slow: "250+130: 0+0=0; 5+3=8; 2+1=3 → 380.",
      memory: "3 hàng thẳng cột, không nhớ = mỗi hàng &lt; 10.",
    },
    [
      exNum("214 + 333 = ?", 547, "Không nhớ.", "547."),
      exNum("500 + 200 = ?", 700, "Trăm.", "700."),
      exNum("120 + 45 = ?", 165, "Cộng.", "165."),
      exNum("301 + 406 = ?", 707, "Không nhớ.", "707."),
      exNum("250 + 130 = ?", 380, "Không nhớ.", "380."),
      exNum("111 + 222 = ?", 333, "333.", "333."),
      exNum("400 + 50 + 6 = ?", 456, "Ghép cộng.", "456."),
    ]
  );

  add(
    60,
    12,
    "Phép cộng (có nhớ) trong phạm vi 1000",
    "Cộng có nhớ trong phạm vi 1000.",
    svgColumnAdd(56, 78, true),
    {
      why: "Có nhớ trên 3 hàng — kỹ năng trọng tâm cuối năm.",
      def: "Nhớ từ đơn vị sang chục, từ chục sang trăm khi tổng hàng ≥ 10.",
      easy: "156 + 178 = 334. 269 + 148 = 417.",
      step: "507 + 296 = 803. 999 + 1 = 1000.",
      trap: "Nhớ 1 nhưng quên cộng vào hàng sau.",
      idea: "Đánh dấu nhớ từng hàng; làm chậm.",
      warns: ["Quên nhớ 2 lần.", "Sai hàng trăm."],
      checks: [
        { q: "156+178?", a: "334." },
        { q: "999+1?", a: "1000." },
      ],
      slow: "388+125: 8+5=13 viết 3 nhớ 1; 8+2+1=11 viết 1 nhớ 1; 3+1+1=5 → 513.",
      memory: "Có nhớ 1000: xử lý từng cột, mang 1 sang trái.",
    },
    [
      exNum("156 + 178 = ?", 334, "Có nhớ.", "334."),
      exNum("269 + 148 = ?", 417, "Có nhớ.", "417."),
      exNum("507 + 296 = ?", 803, "Có nhớ.", "803."),
      exNum("388 + 125 = ?", 513, "Có nhớ.", "513."),
      exNum("999 + 1 = ?", 1000, "Nhớ liên tiếp.", "1000."),
      exNum("346 + 227 = ?", 573, "Có nhớ.", "573."),
      exNum("475 + 268 = ?", 743, "Có nhớ.", "743."),
    ]
  );

  add(
    61,
    12,
    "Phép trừ (không nhớ) trong phạm vi 1000",
    "Trừ số có ba chữ số không nhớ.",
    svgPlace3(4, 8, 7),
    {
      why: "Trừ không nhớ 3 chữ số trước khi mượn phức tạp hơn.",
      def: "Trừ từng hàng khi mỗi hàng đủ trừ.",
      easy: "487 − 251 = 236. 900 − 400 = 500.",
      step: "765 − 320 = 445. 555 − 111 = 444.",
      trap: "Vẫn phải thẳng cột — 608 − 302 = 306.",
      idea: "Kiểm bằng cộng.",
      warns: ["Lệch cột.", "Trừ nhầm hàng."],
      checks: [
        { q: "487−251?", a: "236." },
        { q: "900−400?", a: "500." },
      ],
      slow: "608 − 302: 8−2=6; 0−0=0; 6−3=3 → 306.",
      memory: "Trừ 1000 không nhớ: từng hàng đủ trừ.",
    },
    [
      exNum("487 − 251 = ?", 236, "Không nhớ.", "236."),
      exNum("900 − 400 = ?", 500, "Trăm.", "500."),
      exNum("765 − 320 = ?", 445, "Không nhớ.", "445."),
      exNum("608 − 302 = ?", 306, "Không nhớ.", "306."),
      exNum("555 − 111 = ?", 444, "Không nhớ.", "444."),
      exNum("700 − 200 = ?", 500, "500.", "500."),
      exNum("999 − 111 = ?", 888, "888.", "888."),
    ]
  );

  add(
    62,
    12,
    "Phép trừ (có nhớ) trong phạm vi 1000",
    "Trừ có nhớ/mượn trong phạm vi 1000.",
    svgColumnSub(40, 28),
    {
      why: "Trừ có nhớ 3 chữ số hay gặp trong đề cuối năm.",
      def: "Mượn hàng khi cần; nhớ đã mượn thì hàng bên trái giảm 1.",
      easy: "523 − 178 = 345. 700 − 256 = 444.",
      step: "1000 − 1 = 999. 630 − 275 = 355.",
      trap: "400 − 128: mượn liên tiếp — làm từng bước hoặc đổi 400 − 100 = 300 rồi 300 − 28 = 272.",
      idea: "Kiểm: hiệu + số trừ = số bị trừ.",
      warns: ["Quên mượn dây chuyền.", "Không kiểm."],
      checks: [
        { q: "523−178?", a: "345." },
        { q: "1000−1?", a: "999." },
      ],
      slow: "804 − 369: đơn vị 14−9=5 mượn; chục 0−1−6 không đủ mượn trăm… làm cột cẩn thận → 435.",
      memory: "Trừ có nhớ 1000: mượn đúng + cộng ngược kiểm.",
    },
    [
      exNum("523 − 178 = ?", 345, "Có nhớ.", "345."),
      exNum("700 − 256 = ?", 444, "Mượn.", "444."),
      exNum("1000 − 1 = ?", 999, "Mượn.", "999."),
      exNum("630 − 275 = ?", 355, "Có nhớ.", "355."),
      exNum("804 − 369 = ?", 435, "Có nhớ.", "435."),
      exNum("812 − 468 = ?", 344, "Có nhớ.", "344."),
      exNum("600 − 278 = ?", 322, "Có nhớ.", "322."),
    ]
  );

  add(
    63,
    12,
    "Luyện tập chung",
    "Ôn cộng trừ trong phạm vi 1000.",
    svgReview("Ôn cộng trừ 1000"),
    {
      why: "Chốt cộng trừ 1000 trước thống kê.",
      def: "Trộn có nhớ / không nhớ; tìm số hạng.",
      easy: "346 + 227 = 573. 812 − 468 = 344.",
      step: "□ + 150 = 400 → □ = 250. 500 + 500 = 1000.",
      trap: "Đặt tính rõ ràng, không nhẩm ẩu với 3 chữ số.",
      idea: "Có nhớ thì đánh dấu; xong phải kiểm.",
      warns: ["Sai nhớ.", "Sai khi tìm x."],
      checks: [
        { q: "346+227?", a: "573." },
        { q: "□+150=400?", a: "250." },
      ],
      slow: "670 − 70 = 600. 410 + 90 = 500.",
      memory: "Phạm vi 1000: thẳng cột, nhớ/mượn, kiểm.",
    },
    [
      exNum("346 + 227 = ?", 573, "Có nhớ.", "573."),
      exNum("812 − 468 = ?", 344, "Có nhớ.", "344."),
      exNum("500 + 500 = ?", 1000, "Cộng.", "1000."),
      exNum("□ + 150 = 400", 250, "400−150.", "250."),
      exNum("670 − 70 = ?", 600, "Trừ.", "600."),
      exNum("410 + 90 = ?", 500, "Cộng.", "500."),
      exNum("1000 − 250 = ?", 750, "Trừ.", "750."),
    ]
  );

  // Ch 13 stats
  add(
    64,
    13,
    "Thu thập, phân loại, kiểm đếm số liệu",
    "Thu thập và đếm theo nhóm.",
    svgChart(),
    {
      why: "Thống kê bắt đầu từ việc đếm và xếp nhóm — kỹ năng đời sống.",
      def: "Phân loại theo đặc điểm (màu, loại…), rồi kiểm đếm số lượng mỗi nhóm.",
      easy: "5 bi đỏ, 6 bi xanh → tất cả 11 bi. Đỏ kém xanh 1.",
      step: "Không đếm trùng, không bỏ sót — đánh dấu khi đếm.",
      trap: "Phân loại xong mới đếm; đếm lẫn nhóm sẽ sai.",
      idea: "Tạo bảng đơn: loại | số lượng.",
      warns: ["Đếm trùng.", "Nhầm nhóm."],
      checks: [
        { q: "4 đỏ + 6 xanh = ?", a: "10." },
        { q: "Phân loại là gì?", a: "Chia nhóm theo đặc điểm." },
      ],
      slow: "Đếm bút trong hộp: chia màu, đếm từng màu, cộng tổng.",
      memory: "Phân loại → đếm → so sánh.",
    },
    [
      exNum("4 bi đỏ + 6 bi xanh = ?", 10, "Cộng.", "10."),
      exNum("Nhóm A 7, B 5. A hơn B?", 2, "7−5.", "2."),
      exMC("Phân loại là", ["Chia nhóm theo đặc điểm", "Chỉ cộng số", "Vẽ đường thẳng", "Đổi km"], 0, "Nhóm.", "Chia nhóm."),
      exNum("2+2+2 = ?", 6, "3 nhóm 2.", "6."),
      exMC("Kiểm đếm giúp", ["Biết số lượng từng loại", "Đổi giờ", "Thành khối cầu", "Chia 0"], 0, "Số liệu.", "Số lượng."),
      exNum("9 đỏ, 4 xanh. Đỏ hơn?", 5, "9−4.", "5."),
      exNum("Tổng 9 và 4?", 13, "Cộng.", "13."),
    ]
  );

  add(
    65,
    13,
    "Biểu đồ tranh",
    "Đọc và hiểu biểu đồ tranh.",
    svgChart(),
    {
      why: "Biểu đồ tranh biến số liệu thành hình — dễ so sánh.",
      def: "Mỗi tranh/hình biểu diễn một số đơn vị (xem chú thích: thường 1 hình = 1). Đếm hình → số liệu.",
      easy: "5 hình hoa (1=1) → 5 hoa. Cột 3 và 7 hình: hơn kém 4.",
      step: "Nếu 1 hình = 2 quả thì 4 hình = 8 quả.",
      trap: "Quên chú thích “1 hình = ?”.",
      idea: "Đọc chú thích trước, đếm sau, so sánh cuối.",
      warns: ["Bỏ chú thích.", "Đếm nhầm hình."],
      checks: [
        { q: "5 hình (1=1) → ?", a: "5." },
        { q: "4 hình, 1=2 → ?", a: "8." },
      ],
      slow: "Xe đạp 3 hình, xe máy 5 hình (1=1): xe máy nhiều hơn 2.",
      memory: "Biểu đồ tranh: chú thích → đếm → so sánh.",
    },
    [
      exNum("5 hình (1=1). Số?", 5, "Đếm.", "5."),
      exNum("4 hình, mỗi hình = 2. Tổng?", 8, "4×2.", "8."),
      exMC("Biểu đồ tranh dùng để", ["Thể hiện số liệu bằng tranh", "Đo kg", "Vẽ tứ giác", "Xem lịch"], 0, "Số liệu.", "Tranh số liệu."),
      exNum("Cột A 3, B 7 (1=1). B hơn A?", 4, "7−3.", "4."),
      exMC("Trước khi đọc số cần xem", ["Chú thích mỗi tranh", "Chỉ màu", "Kim giờ", "Mệnh giá"], 0, "Chú thích.", "Chú thích."),
      exNum("6 hình (1=1) + 2 hình = ?", 8, "Cộng.", "8."),
      exNum("10 hình, 1 hình = 1, bớt 3 hình còn?", 7, "10−3.", "7."),
    ]
  );

  add(
    66,
    13,
    "Chắc chắn, có thể, không thể",
    "Dùng đúng ba từ khả năng.",
    svgChance(),
    {
      why: "Ba từ này là cửa vào xác suất — học cách nói đúng về khả năng.",
      def: "<strong>Chắc chắn</strong>: luôn xảy ra. <strong>Không thể</strong>: không bao giờ. <strong>Có thể</strong>: không chắc, còn khả năng khác.",
      easy: "Túi toàn bi đỏ → bốc ra chắc chắn đỏ. Không có bi vàng → không thể bốc vàng.",
      step: "Túi có đỏ và xanh → bốc đỏ là có thể (không chắc chắn).",
      trap: "Không nói “chắc chắn” khi còn hai màu.",
      idea: "Hỏi: còn lựa chọn khác không? Có → có thể; không còn → chắc chắn/không thể.",
      warns: ["Lạm dụng “chắc chắn”.", "Nhầm không thể với có thể."],
      checks: [
        { q: "Túi toàn xanh, bốc xanh?", a: "Chắc chắn." },
        { q: "Không có vàng, bốc vàng?", a: "Không thể." },
      ],
      slow: "Túi 3 đỏ 2 xanh. Bốc xanh? Có thể. Bốc vàng? Không thể.",
      memory: "Chắc chắn / có thể / không thể — dựa vào dữ kiện.",
    },
    [
      exMC("Túi toàn xanh, bốc xanh", ["Chắc chắn", "Không thể", "Chỉ có thể", "Không nói được"], 0, "Toàn xanh.", "Chắc chắn."),
      exMC("Túi chỉ đỏ, bốc vàng", ["Không thể", "Chắc chắn", "Có thể", "Luôn vàng"], 0, "Không có vàng.", "Không thể."),
      exMC("Túi đỏ và xanh, bốc đỏ", ["Có thể", "Chắc chắn", "Không thể", "Cấm"], 0, "Hai màu.", "Có thể."),
      exMC("Ngày mai có thể mưa", ["Có thể", "Chắc chắn luôn", "Không thể luôn", "Kg"], 0, "Không chắc.", "Có thể."),
      exMC("1+1=2 (số đã học)", ["Chắc chắn", "Không thể", "Chỉ có thể", "Khối trụ"], 0, "Đúng.", "Chắc chắn."),
      exMC("Túi không bi xanh, bốc xanh", ["Không thể", "Chắc chắn", "Có thể", "Bắt buộc"], 0, "Không có.", "Không thể."),
      exMC("Hai khả năng còn mở", ["Có thể", "Chắc chắn", "Không thể", "Cấm đoán"], 0, "Mở.", "Có thể."),
    ]
  );

  add(
    67,
    13,
    "Thực hành và trải nghiệm thu thập, phân loại, kiểm đếm số liệu",
    "Thực hành thống kê đơn giản ở lớp.",
    svgChart(),
    {
      why: "Làm thống kê thật: đếm bạn, đồ dùng, sở thích.",
      def: "Thu thập → phân loại → đếm → nhận xét hơn/kém/tổng.",
      easy: "Thích bóng đá 8, bơi 5: bóng đá hơn 3; tổng 13.",
      step: "3 nhóm × 5 bạn = 15 (nếu đều).",
      trap: "Nhận xét phải dựa trên số đã đếm, không đoán.",
      idea: "Ghi bảng rõ, rồi viết 1 câu nhận xét.",
      warns: ["Số liệu miệng không ghi.", "So sánh sai."],
      checks: [
        { q: "8 và 5, hơn?", a: "3." },
        { q: "Tổng 8+5?", a: "13." },
      ],
      slow: "Đếm màu áo trong tổ: lập 3 nhóm, đếm, so sánh.",
      memory: "Thống kê lớp 2: đếm–nhóm–nhận xét.",
    },
    [
      exNum("Đỏ 9, xanh 4. Đỏ hơn?", 5, "9−4.", "5."),
      exNum("Tổng 9 và 4?", 13, "Cộng.", "13."),
      exMC("Sau khi đếm ta có thể", ["So sánh các nhóm", "Đổi km luôn", "Xóa số liệu", "Trừ giờ"], 0, "So sánh.", "So sánh."),
      exNum("3 nhóm × 5 bạn = ?", 15, "3×5.", "15."),
      exMC("Phân loại trước khi đếm giúp", ["Rõ từng loại", "Khó hơn", "Mất số", "Thành đường cong"], 0, "Rõ.", "Rõ loại."),
      exNum("10 − 3 (hai nhóm) hơn kém?", 7, "Hiệu.", "7."),
      exNum("6 + 6 + 6 = ?", 18, "3×6.", "18."),
    ]
  );

  // Ch 14 year-end review
  const yearEnd = [
    [68, "Ôn tập các số trong phạm vi 1000", "Ôn đọc viết so sánh số đến 1000.", svgPlace3(7, 0, 2), [
      exNum("Bảy trăm linh hai", 702, "702.", "702."),
      exMC("891 … 819", [">", "<", "=", "Không"], 0, "So chục.", ">"),
      exNum("Liền trước 1000?", 999, "−1.", "999."),
      exNum("400+50+6=?", 456, "Ghép.", "456."),
      exMC("Tròn chục", ["880", "808", "801", "818"], 0, "Tận 0.", "880."),
      exNum("305 gồm mấy trăm?", 3, "3.", "3."),
      exMC("1000 gồm mấy trăm?", ["10", "1", "100", "0"], 0, "10.", "10."),
    ]],
    [69, "Ôn tập phép cộng, phép trừ trong phạm vi 100", "Ôn cộng trừ có nhớ phạm vi 100.", svgColumnAdd(47, 36, true), [
      exNum("47+36=?", 83, "Nhớ.", "83."),
      exNum("82−29=?", 53, "Mượn.", "53."),
      exNum("70−8=?", 62, "Mượn.", "62."),
      exNum("55+45=?", 100, "Cộng.", "100."),
      exNum("100−58=?", 42, "Trừ.", "42."),
      exNum("39+28=?", 67, "Nhớ.", "67."),
      exNum("91−47=?", 44, "Mượn.", "44."),
    ]],
    [70, "Ôn tập phép cộng, phép trừ trong phạm vi 1000", "Ôn cộng trừ phạm vi 1000.", svgPlace3(4, 7, 6), [
      exNum("325+148=?", 473, "Nhớ.", "473."),
      exNum("600−278=?", 322, "Mượn.", "322."),
      exNum("999−100=?", 899, "Trừ.", "899."),
      exNum("410+90=?", 500, "Cộng.", "500."),
      exNum("1000−250=?", 750, "Trừ.", "750."),
      exNum("508+277=?", 785, "Nhớ.", "785."),
      exNum("900−456=?", 444, "Mượn.", "444."),
    ]],
    [71, "Ôn tập phép nhân, phép chia", "Ôn bảng 2 và 5.", svgArray(2, 5, "Ôn nhân chia"), [
      exNum("2×7=?", 14, "Bảng 2.", "14."),
      exNum("5×6=?", 30, "Bảng 5.", "30."),
      exNum("16:2=?", 8, "Chia 2.", "8."),
      exNum("40:5=?", 8, "Chia 5.", "8."),
      exNum("5×0=?", 0, "Nhân 0.", "0."),
      exNum("2×10=?", 20, "20.", "20."),
      exNum("45:5=?", 9, "9.", "9."),
    ]],
    [72, "Ôn tập hình học", "Ôn hình phẳng và hình khối.", svgCylinderSphere(), [
      exMC("Bóng đá", ["Khối cầu", "Tứ giác", "Đoạn", "Lít"], 0, "Cầu.", "Cầu."),
      exMC("4 cạnh", ["Tứ giác", "Tam giác", "Đường cong", "Khối cầu"], 0, "4.", "Tứ giác."),
      exMC("Lon ống", ["Khối trụ", "Khối cầu", "Điểm", "Ngày"], 0, "Trụ.", "Trụ."),
      exMC("Đoạn thẳng có", ["Hai mút", "Không mút", "Ba mút", "Bốn mút"], 0, "Hai đầu.", "Hai mút."),
      exNum("Tam giác mấy cạnh?", 3, "3.", "3."),
      exMC("Đường thẳng", ["Kéo dài hai phía", "Hai mút", "Cong", "4 cạnh"], 0, "Kéo dài.", "Kéo dài."),
      exMC("Viên bi", ["Khối cầu", "Khối trụ", "Tứ giác", "Kg"], 0, "Cầu.", "Cầu."),
    ]],
    [73, "Ôn tập đo lường", "Ôn kg, l, dm, m, km, tiền, giờ.", svgLength(), [
      exNum("1 m = ? dm", 10, "10.", "10."),
      exNum("1 giờ = ? phút", 60, "60.", "60."),
      exNum("5 kg + 4 kg = ?", 9, "Cộng.", "9."),
      exNum("9 l − 2 l = ?", 7, "Trừ.", "7."),
      exNum("2000+3000=?", 5000, "Tiền.", "5000."),
      exNum("1 km = ? m", 1000, "1000.", "1000."),
      exNum("3 m = ? dm", 30, "30.", "30."),
    ]],
    [74, "Ôn tập kiểm đếm số liệu và lựa chọn khả năng", "Ôn biểu đồ tranh và chắc chắn/có thể/không thể.", svgChance(), [
      exNum("Biểu đồ 6 tranh (1=1). Số?", 6, "Đếm.", "6."),
      exMC("Túi chỉ kẹo nho, bốc nho", ["Chắc chắn", "Không thể", "Chỉ có thể", "Kg"], 0, "Một loại.", "Chắc chắn."),
      exMC("Không kẹo chanh, bốc chanh", ["Không thể", "Chắc chắn", "Bắt buộc", "Luôn có thể"], 0, "Không có.", "Không thể."),
      exNum("Nhóm 8 và 5. Tổng?", 13, "Cộng.", "13."),
      exMC("Bi đỏ và xanh, bốc xanh", ["Có thể", "Chắc chắn", "Không thể", "Cấm"], 0, "Hai màu.", "Có thể."),
      exNum("Cột 4 và 9, hơn kém?", 5, "9−4.", "5."),
      exMC("Chú thích biểu đồ cần xem", ["Trước khi đếm", "Sau cùng không cần", "Không bao giờ", "Chỉ khi màu đẹp"], 0, "Trước.", "Trước khi đếm."),
    ]],
    [75, "Ôn tập chung", "Tổng ôn cuối năm Toán 2.", svgReview("Cuối năm Toán 2"), [
      exNum("2 × 10 = ?", 20, "Bảng 2.", "20."),
      exNum("5 × 9 = ?", 45, "Bảng 5.", "45."),
      exNum("476 + 128 = ?", 604, "Có nhớ.", "604."),
      exNum("1000 − 340 = ?", 660, "Trừ.", "660."),
      exMC("1 km = ? m", ["1000", "100", "10", "10000"], 0, "1000 m.", "1000."),
      exNum("18 : 2 = ?", 9, "Chia 2.", "9."),
      exNum("35 : 5 = ?", 7, "Chia 5.", "7."),
    ]],
  ];

  const yearEndBody = {
    68: {
      why: "Số đến 1000 là nền để vào lớp 3 (số lớn hơn, nhân chia rộng hơn).",
      def: "Đọc, viết, phân tích, so sánh số có ba chữ số và 1000. Chú ý chữ số 0 giữ hàng.",
      easy: "702 = 7 trăm 0 chục 2 đơn vị. Đọc “bảy trăm linh hai”. 880 là số tròn chục.",
      step: "So 891 và 819: cùng 8 trăm, 9 chục > 1 chục → 891 > 819. Liền trước 1000 là 999.",
      trap: "205 ≠ 25. 1000 = 10 trăm, không phải 100 trăm.",
      idea: "Viết thẳng hàng trăm-chục-đv rồi so từ trái sang phải.",
      warns: ["Nuốt số 0 giữa.", "So sánh chỉ nhìn chữ số đầu."],
      checks: [
        { q: "702 gồm mấy trăm?", a: "7 trăm." },
        { q: "Liền trước 1000?", a: "999." },
      ],
      slow: "Viết năm trăm linh năm: 5 trăm, 0 chục, 5 → 505. Kiểm: 500 + 5 = 505.",
      memory: "Ba chữ số + 1000: đọc đúng, so từ hàng trăm.",
    },
    69: {
      why: "Cộng trừ có nhớ phạm vi 100 vẫn là chỗ hay mất điểm nếu quên nhớ/mượn.",
      def: "Đặt tính thẳng cột. Cộng: nhớ khi đv ≥ 10. Trừ: mượn khi đv không đủ.",
      easy: "47 + 36 = 83. 55 + 45 = 100.",
      step: "82 − 29: 12 − 9 = 3; 8 − 1 − 2 = 5 → 53. Kiểm: 53 + 29 = 82.",
      trap: "70 − 8 = 62, không phải 78 (quên mượn).",
      idea: "Đánh dấu nhớ/mượn; luôn kiểm bằng phép ngược.",
      warns: ["Quên nhớ 1.", "Mượn rồi quên giảm chục."],
      checks: [
        { q: "47 + 36?", a: "83." },
        { q: "82 − 29?", a: "53." },
      ],
      slow: "91 − 47: 11 − 7 = 4; 9 − 1 − 4 = 4 → 44. Cộng lại 44 + 47 = 91.",
      memory: "Phạm vi 100: thẳng cột + nhớ/mượn + kiểm.",
    },
    70: {
      why: "Cộng trừ 1000 mở rộng kỹ năng đặt tính ba chữ số.",
      def: "Cộng/trừ theo hàng trăm-chục-đv, nhớ/mượn có thể lan sang hàng trăm.",
      easy: "410 + 90 = 500. 1000 − 250 = 750.",
      step: "325 + 148: có nhớ ở đv và chục → 473. 600 − 278 = 322.",
      trap: "999 − 100 = 899, không phải 8999. 1000 − 1 = 999.",
      idea: "Làm từng cột; bài khó thì kiểm bằng cộng ngược.",
      warns: ["Lệch cột khi số ngắn hơn.", "Quên nhớ dây chuyền."],
      checks: [
        { q: "325 + 148?", a: "473." },
        { q: "600 − 278?", a: "322." },
      ],
      slow: "900 − 456: mượn lần lượt. 900 − 400 = 500; 500 − 56 = 444.",
      memory: "Phạm vi 1000: ba hàng, nhớ/mượn, kiểm.",
    },
    71: {
      why: "Bảng 2 và 5 là toàn bộ bảng nhân/chia lớp 2 — phải thuộc và dùng được.",
      def: "Nhân 2, 5 và chia 2, 5. Kiểm chia bằng nhân ngược.",
      easy: "2 × 7 = 14. 5 × 6 = 30. 16 : 2 = 8. 40 : 5 = 8.",
      step: "5 × 0 = 0. 2 × 10 = 20. 45 : 5 = 9 vì 5 × 9 = 45.",
      trap: "5 × 0 = 0, không phải 5. Chia phải khớp bảng (chia hết).",
      idea: "Thuộc xuôi (nhân) rồi đọc ngược (chia).",
      warns: ["Nhầm bảng 2 với 5.", "Không kiểm thương bằng nhân."],
      checks: [
        { q: "2 × 7?", a: "14." },
        { q: "45 : 5?", a: "9." },
      ],
      slow: "Có 5 hộp, mỗi hộp 2 bút: 5 × 2 = 10. Đổi: 10 : 2 = 5 hộp.",
      memory: "Bảng 2 & 5: thuộc + chia ngược + bài nhóm đều.",
    },
    72: {
      why: "Hình phẳng và hình khối giúp nhận đồ vật thật và chuẩn bị lớp 3.",
      def: "Đoạn (2 mút), đường thẳng (kéo dài), tứ giác (4 cạnh), khối cầu (bóng), khối trụ (lon/ống).",
      easy: "Bóng đá → khối cầu. Lon sữa → khối trụ. Hình chữ nhật là tứ giác.",
      step: "Tam giác 3 cạnh. Đoạn thẳng có hai mút; đường thẳng không có mút giới hạn.",
      trap: "Hình tròn vẽ trên giấy ≠ khối cầu. Tứ giác không chỉ là chữ nhật.",
      idea: "Đếm cạnh/đỉnh; với khối, nghĩ cách lăn và có đáy phẳng không.",
      warns: ["Nhầm đoạn với đường thẳng.", "Nhầm phẳng với khối."],
      checks: [
        { q: "Lon ống?", a: "Khối trụ." },
        { q: "Tứ giác mấy cạnh?", a: "4." },
      ],
      slow: "Chỉ 3 đồ vật trong lớp: bảng (tứ giác/chữ nhật), bi (cầu), ống cắm bút (trụ).",
      memory: "Phẳng: điểm–đoạn–đường–tứ giác. Khối: cầu & trụ.",
    },
    73: {
      why: "Đo lường và tiền gắn đời sống — hay quên đổi đơn vị và ghi đơn vị.",
      def: "1 m = 10 dm; 1 km = 1000 m; 1 giờ = 60 phút; kg; l; tiền đồng.",
      easy: "5 kg + 4 kg = 9 kg. 9 l − 2 l = 7 l. 2000 + 3000 = 5000 đồng.",
      step: "3 m = 30 dm. 1 km = 1000 m. 1 giờ rưỡi = 90 phút (ôn).",
      trap: "Không cộng kg với l. 1 m ≠ 100 dm.",
      idea: "Đổi về cùng đơn vị trước khi cộng trừ; luôn ghi tên đơn vị.",
      warns: ["Sai phép đổi.", "Thiếu đơn vị trong câu trả lời."],
      checks: [
        { q: "1 m = ? dm", a: "10." },
        { q: "1 km = ? m", a: "1000." },
      ],
      slow: "Dây 2 m = 2 × 10 = 20 dm. Kiểm: 20 dm : 10 = 2 m.",
      memory: "dm–m–km; kg; l; giờ–phút; tiền đồng.",
    },
    74: {
      why: "Thống kê và khả năng là mạch mới của GDPT 2018 — cần đúng ba từ và đọc biểu đồ.",
      def: "Đếm/phân loại; biểu đồ tranh (xem chú thích); chắc chắn / có thể / không thể.",
      easy: "6 tranh (1=1) → 6. Túi chỉ kẹo nho → bốc nho: chắc chắn.",
      step: "Không có kẹo chanh → bốc chanh: không thể. Bi đỏ và xanh → bốc xanh: có thể.",
      trap: "Quên chú thích 1 hình = ? Đừng nói chắc chắn khi còn hai màu.",
      idea: "Chú thích → đếm → so sánh; khả năng dựa vào dữ kiện trong túi/tình huống.",
      warns: ["Bỏ chú thích biểu đồ.", "Lạm dụng từ chắc chắn."],
      checks: [
        { q: "Túi chỉ đỏ, bốc đỏ?", a: "Chắc chắn." },
        { q: "Cột 4 và 9, hơn?", a: "5." },
      ],
      slow: "Biểu đồ xe đạp 3 hình, xe máy 5 hình (1=1): xe máy hơn 2. Tổng 8 xe.",
      memory: "Biểu đồ: chú thích–đếm–so. Khả năng: chắc/có thể/không thể.",
    },
    75: {
      why: "Tổng ôn cuối năm: trộn số, phép tính, hình, đo — như một đề tổng hợp nhẹ.",
      def: "Ôn nhanh các mạch chính Toán 2 KNTT trước khi lên lớp 3.",
      easy: "2 × 10 = 20. 5 × 9 = 45. 18 : 2 = 9. 35 : 5 = 7.",
      step: "476 + 128 = 604 (có nhớ). 1000 − 340 = 660. 1 km = 1000 m.",
      trap: "Làm dồn dễ sai nhớ/mượn — làm từng câu, soát lại 1 lần.",
      idea: "Thứ tự: phép nhẩm bảng → đặt tính 100/1000 → đo/đơn vị → hình nếu còn giờ.",
      warns: ["Quên đơn vị.", "Nhầm bảng 2/5.", "Không kiểm phép lớn."],
      checks: [
        { q: "476 + 128?", a: "604." },
        { q: "1 km = ? m", a: "1000." },
      ],
      slow: "Chọn 3 câu: một nhân, một cộng có nhớ, một đo. Làm và giải thích miệng cho người thân.",
      memory: "Toán 2: số 1000 · cộng trừ có nhớ · nhân chia 2&5 · hình · đo · thống kê.",
    },
  };

  for (const [num, title, summary, figSvg, exercises] of yearEnd) {
    const bodyParts = yearEndBody[num] || {
      why: "Ôn tập cuối năm Toán 2.",
      def: summary,
      easy: "Làm mẫu trong chủ đề.",
      step: "Tự đặt thêm 1 câu tương tự.",
      trap: "Làm dồn dễ sai.",
      idea: "Ôn theo mạch.",
      warns: ["Không kiểm lại."],
      checks: [
        { q: "Chủ đề?", a: title + "." },
        { q: "Soát gì?", a: "Phép tính và đơn vị." },
      ],
      slow: "10–15 phút mỗi ngày.",
      memory: summary,
    };
    let exs = exercises.slice();
    if (num === 68) {
      exs = [
        exNum("Viết số bảy trăm linh hai", 702, "702.", "702."),
        ...exs.filter((e) => e.prompt !== "Bảy trăm linh hai" && !String(e.prompt).includes("Đọc số 702")),
      ];
    }
    add(num, 14, title, summary, figSvg, bodyParts, exs);
  }

  // ===== Mini đề (special practice tests) =====
  add(
    76,
    7,
    "Mini đề giữa / cuối HK1",
    "10 câu trộn: số đến 100, cộng trừ có nhớ, hình, kg/l, giờ.",
    svgReview("Mini đề HK1"),
    {
      why: "Làm một đề ngắn giúp con quen kiểm tra định kỳ HK1, không chỉ làm rời từng bài.",
      def: "Đề gồm 10 câu: số · cộng trừ (20 và 100) · hơn kém · hình phẳng · kg/l · giờ. Làm lần lượt, không cần tính giờ nghiêm.",
      easy: "Warm-up: 9 + 8 = 17. 34 + 21 = 55 (không nhớ). Đoạn thẳng có 2 mút.",
      step: "Câu có nhớ: 47 + 28 → nhớ 1. Câu trừ: 70 − 35 → mượn. Đọc kỹ hơn/kém.",
      trap: "Làm vội dễ lệch cột hoặc chọn nhầm cộng/trừ trong lời văn.",
      idea: "Mỗi câu: gạch từ khóa → chọn phép → tính → soát 1 lần.",
      warns: ["Quên nhớ/mượn.", "Quên đơn vị kg/l.", "Nhầm kim giờ/phút (ôn)."],
      checks: [
        { q: "Đề này ôn học kì nào?", a: "HK1." },
        { q: "Nên soát gì?", a: "Nhớ/mượn và đơn vị." },
      ],
      slow: "Ví dụ câu mẫu: Lan 18 tem, cho bạn 9. Còn? 18 − 9 = 9. Viết đủ “9 tem” khi trả lời miệng.",
      memory: "Mini đề HK1 = số 100 + cộng trừ có nhớ + hình + đo nhẹ.",
      caption: "Luyện đề ngắn học kì 1",
    },
    [
      exNum("Số liền sau 99?", 100, "+1.", "100."),
      exNum("8 + 7 = ?", 15, "Qua 10.", "15."),
      exNum("45 + 38 = ?", 83, "Có nhớ.", "83."),
      exNum("82 − 27 = ?", 55, "Có nhớ.", "55."),
      exNum("An 16 tem, Bình 9. An hơn Bình mấy tem?", 7, "16−9.", "7."),
      exNum("Tứ giác có mấy cạnh?", 4, "4.", "4."),
      exNum("3 kg + 5 kg = ?", 8, "Cộng kg.", "8."),
      exNum("9 l − 4 l = ?", 5, "Trừ lít.", "5."),
      exNum("1 giờ = ? phút", 60, "60.", "60."),
      exMC("Đoạn thẳng có", ["Hai mút", "Không mút", "Ba mút", "Chỉ đường cong"], 0, "Hai đầu.", "Hai mút."),
    ]
  );

  add(
    77,
    14,
    "Mini đề cuối năm",
    "12 câu trộn cả năm: 1000, cộng trừ, nhân chia 2&5, đo, hình, thống kê.",
    svgReview("Mini đề cuối năm"),
    {
      why: "Đề tổng hợp cuối năm giúp phụ huynh và con thấy chỗ còn hổng trước lớp 3.",
      def: "12 câu phủ số đến 1000, cộng trừ có nhớ, bảng 2&5, đo lường, hình khối, biểu đồ/khả năng.",
      easy: "2 × 8 = 16. 5 × 5 = 25. 400 + 50 + 6 = 456.",
      step: "Câu 3 chữ số: đặt tính thẳng. Câu chia: kiểm bằng nhân. Câu đo: nhìn đơn vị.",
      trap: "Nhầm bảng 2/5; quên nhớ; bỏ chú thích biểu đồ.",
      idea: "Làm 2 vòng: vòng 1 hết đề, vòng 2 chỉ soát câu khoanh/đặt tính.",
      warns: ["Làm dồn không soát.", "Sai đơn vị km/m/dm."],
      checks: [
        { q: "Bảng nhân lớp 2 gồm những bảng nào?", a: "2 và 5." },
        { q: "1 km = ? m", a: "1000." },
      ],
      slow: "Mẫu: 20 kẹo chia 5 hộp đều → 20 : 5 = 4. Kiểm 4 × 5 = 20.",
      memory: "Cuối năm: 1000 · ± có nhớ · ×÷ 2&5 · hình · đo · thống kê.",
      caption: "Luyện đề ngắn cuối năm",
    },
    [
      exNum("Viết số gồm 5 trăm 0 chục 7 đơn vị", 507, "507.", "507."),
      exNum("368 + 157 = ?", 525, "Có nhớ.", "525."),
      exNum("700 − 258 = ?", 442, "Có nhớ.", "442."),
      exNum("2 × 9 = ?", 18, "Bảng 2.", "18."),
      exNum("5 × 8 = ?", 40, "Bảng 5.", "40."),
      exNum("18 : 2 = ?", 9, "Chia 2.", "9."),
      exNum("35 : 5 = ?", 7, "Chia 5.", "7."),
      exNum("3 m = ? dm", 30, "×10.", "30."),
      exNum("1 km = ? m", 1000, "1000.", "1000."),
      exNum("2000 + 3000 = ? (đồng)", 5000, "Cộng tiền.", "5000."),
      exMC("Quả bóng giống", ["Khối cầu", "Khối trụ", "Đoạn thẳng", "Tứ giác"], 0, "Cầu.", "Khối cầu."),
      exMC("Túi chỉ bi xanh. Bốc ra xanh là", ["Chắc chắn", "Không thể", "Chỉ có thể", "Cấm"], 0, "Toàn xanh.", "Chắc chắn."),
    ]
  );

  return L;
}

function emitLesson(L) {
  const { id, num, chapter, title, summary, figSvg, content, exercises } = L;
  const bodyStr = body({ animFig: figSvg, ...content });
  let s = `  {\n`;
  s += `    id: ${JSON.stringify(id)},\n`;
  s += `    num: ${num},\n`;
  s += `    chapter: ${chapter},\n`;
  s += `    title: ${JSON.stringify(title)},\n`;
  s += `    summary: ${JSON.stringify(summary)},\n`;
  s += bodyStr + `,\n`;
  s += `    exercises: [\n`;
  for (const ex of exercises) {
    s += `      ${JSON.stringify(ex)},\n`;
  }
  s += `    ],\n`;
  s += `  }`;
  return s;
}

function main() {
  const lessons = buildLessons();
  if (lessons.length !== 77) {
    console.error("Expected 77 lessons, got", lessons.length);
    process.exit(1);
  }
  for (let i = 0; i < lessons.length; i++) {
    if (lessons[i].num !== i + 1) {
      console.error("Order broken at", i + 1, lessons[i].num);
      process.exit(1);
    }
  }

  const parentGuide = {
    intro:
      "Dành cho phụ huynh: Toán 2 bám SGK Kết nối tri thức (14 chủ đề). Mỗi ngày 10–20 phút, 1 bài + vài câu luyện là đủ. Ưu tiên hiểu (thêm/bớt, nhớ/mượn, bảng 2&5) hơn làm dồn đề.",
    tips: [
      "HK1 (chủ đề 1–7): chắc cộng trừ có nhớ phạm vi 100, kg/l, giờ, hình phẳng.",
      "HK2 (chủ đề 8–14): bảng nhân/chia 2 và 5, số đến 1000, đo độ dài & tiền, thống kê đơn giản.",
      "Con yếu nhớ/mượn: làm lại Bài 19–24 và Mini đề HK1 (Bài 76).",
      "Con yếu bảng cửu chương: ôn Bài 39–44 mỗi ngày 5 phút, rồi Mini đề cuối năm (Bài 77).",
      "Nhìn tiến độ trên máy: chủ đề nào còn ít “Đã làm” thì ôn chủ đề đó trước.",
    ],
    chapterFocus: chapters.map((ch) => ({
      id: ch.id,
      title: ch.title,
      focus:
        ch.id <= 7
          ? "Trọng tâm HK1"
          : ch.id === 14
            ? "Ôn & mini đề cuối năm"
            : "Trọng tâm HK2",
    })),
  };

  let out = "";
  out += `// Toán 2 – Kết nối tri thức với cuộc sống.\n`;
  out += `// 14 chủ đề, Bài 1–75 + Mini đề 76–77. Ví dụ viết mới, không chép SGK.\n`;
  out += `// Khung: GDPT 2018 + mục lục KNTT (số đến 1000, cộng trừ có nhớ,\n`;
  out += `// nhân chia 2 & 5, hình phẳng/khối, đo lường, tiền, thống kê – xác suất).\n`;
  out += `// Generated by scripts/generate-grade2.js — re-run to regenerate.\n\n`;
  out += `const G2_CHAPTERS = ${JSON.stringify(chapters, null, 2)};\n\n`;
  out += `const G2_PARENT_GUIDE = ${JSON.stringify(parentGuide, null, 2)};\n\n`;
  out += `const G2_LESSONS = [\n`;
  out += lessons.map(emitLesson).join(",\n\n");
  out += `\n];\n\n`;
  out += `(function attachGrade2() {\n`;
  out += `  const course = COURSES.find((c) => c.id === "2");\n`;
  out += `  if (!course) return;\n`;
  out += `  course.title = "Toán 2";\n`;
  out += `  course.subtitle = "Tập 1 & Tập 2 · Kết nối tri thức với cuộc sống";\n`;
  out += `  course.blurb = "14 chủ đề, Bài 1–75 và 2 mini đề (HK1 & cuối năm). Có gợi ý cho phụ huynh.";\n`;
  out += `  course.chapters = G2_CHAPTERS;\n`;
  out += `  course.lessons = G2_LESSONS;\n`;
  out += `  course.parentGuide = G2_PARENT_GUIDE;\n`;
  out += `  course.level = "Tiểu học";\n`;
  out += `})();\n`;

  const dest = path.join(__dirname, "..", "web", "js", "grade2.js");
  fs.writeFileSync(dest, out);
  console.log("Wrote", dest, "lessons", lessons.length, "bytes", out.length);
}

main();
