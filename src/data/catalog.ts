import type { BeliefPillar, ProcessStep, Product, ProductId } from "@/types";

export const products: Product[] = [
  {
    id: "kinmyaku",
    series: "01",
    slug: "kinmyaku",
    line: "gold-vein",
    name: "金脈器皿",
    en: "Kinmyaku Vessel",
    tagline: "裂縫裡，仍有光。",
    description:
      "回收破損陶瓷，以植物性金繕技法修復。每道金脈紀念一次破碎，也紀念一次被接納。",
    longDescription:
      "每一件金脈器皿都來自被棄或破損的陶瓷。我們清潔、對縫、以低毒天然漆與金屬粉修復，保留金線痕跡作為簽名。",
    materials: "回收陶瓷 · 天然漆 · 黃銅粉",
    faith: "詩篇 34:18 — 耶和華靠近傷心的人",
    eco: "每件延續一件舊物生命，避免進入堆填",
    category: "vessel",
    status: "preorder",
    priceHint: "每件獨一無二 · 預購",
    suitableFor: ["家居", "婚禮禮物", "牧養關懷"],
    processNotes: ["挑選破損陶瓷", "清潔與對縫", "金繕塗覆與打磨", "撰寫來源短誌"],
  },
  {
    id: "seed-journal",
    series: "02",
    slug: "seed-journal",
    line: "gold-vein",
    name: "種子繕本",
    en: "Seed Scripture Journal",
    tagline: "寫下的話語，可以落地生根。",
    description:
      "再生棉紙與種子紙靈修手冊。寫完後可撕下空白頁埋入泥土，讓紙張化作幼苗。",
    longDescription:
      "繕本內含經文／默想提示頁與空白寫作頁。指定空白頁為種子紙，可於季末埋入土壤。",
    materials: "再生棉紙 · 種子紙 · 植物染線",
    faith: "以賽亞書 55:10-11 — 雨雪滋潤大地，話語也不徒然返回",
    eco: "用紙可降解並長成植物，閉合消耗循環",
    category: "journal",
    status: "available",
    priceHint: "成冊發行",
    suitableFor: ["個人靈修", "小組", "退修營"],
    processNotes: ["裁切再生紙", "裝訂種子頁", "植物染封面", "附種植說明卡"],
  },
  {
    id: "rest-candle",
    series: "03",
    slug: "rest-candle",
    line: "gold-vein",
    name: "安息餘焰",
    en: "Sabbath Ember",
    tagline: "停下來，也是一種守護。",
    description:
      "回收蜂蠟邊角與本地乾花製作的安息日香氛。短燃、慢息，提醒人學習安息。",
    longDescription:
      "餘焰設計為短時燃燒的安息儀式，附簡短安息默想卡。容器可選可堆肥材質。",
    materials: "回收蜂蠟 · 本地乾花 · 木芯",
    faith: "創世記 2:3 — 神賜福第七日，定為聖日",
    eco: "重用蜂蠟邊料，無塑膠包裝",
    category: "ritual",
    status: "available",
    priceHint: "單件／安息禮盒",
    suitableFor: ["安息日", "靜修", "家居儀式"],
    processNotes: ["收集蜂蠟邊料", "乾花配置", "澆注與固化", "附默想卡"],
  },
  {
    id: "mend-kit",
    series: "04",
    slug: "mend-kit",
    line: "gold-vein",
    name: "修補禮成",
    en: "Mend & Become Kit",
    tagline: "親手修好一件，也修好一段關係。",
    description:
      "家用金繕體驗盒：工具、教學卡片與修復默想。適合親子、小組。",
    longDescription:
      "盒內含安全級修補材料、竹工具、步驟卡與 15 分鐘修復默想引導。",
    materials: "食物安全膠 · 金屬粉 · 竹工具 · 再生紙說明卡",
    faith: "哥林多後書 5:17 — 若有人在基督裡，他就是新造的人",
    eco: "教人修而非棄，從源頭減少浪費",
    category: "kit",
    status: "workshop",
    priceHint: "體驗盒 · 可加開工作坊",
    suitableFor: ["親子", "小組", "教會活動"],
    processNotes: ["備料分裝", "教學卡編排", "默想文案", "工作坊流程"],
  },
  {
    id: "light-vessel",
    series: "05",
    slug: "light-vessel",
    line: "gold-vein",
    name: "託管之光",
    en: "Steward Light",
    tagline: "光穿過裂縫，仍照亮屋子。",
    description:
      "回收木材與碎玻璃鑲嵌桌燈。金脈紋理讓燈光從縫中透出。",
    longDescription:
      "燈體由回收木材穩固結構，碎玻璃與金脈紋理形成透光縫。內置低耗能 LED。",
    materials: "回收木材 · 碎玻璃 · LED 低耗能模組",
    faith: "馬太福音 5:14-16 — 你們是世上的光",
    eco: "升級再造廢棄木與玻璃，低耗能照明",
    category: "light",
    status: "coming_soon",
    priceHint: "限量訂製",
    suitableFor: ["書房", "聖所角落", "訂製"],
    processNotes: ["木材安定處理", "玻璃鑲嵌", "金脈紋理", "電路組裝"],
  },
  // —— 織繕日常：初步構思 ——
  {
    id: "gold-stitch",
    series: "W01",
    slug: "gold-stitch",
    line: "woven-mend",
    name: "金線刺繡",
    en: "Gold Stitch",
    tagline: "一針一線，把裂縫織回光裡。",
    description:
      "【初步構思】以有機棉／回收布料為底，用金屬色線刺繡金繕紋樣——可以是手帕、布章、衣領點綴或小組訂製圖案。把「修補」變成可佩戴、可傳承的日常記號。",
    longDescription:
      "構想方向：提供基礎金脈圖樣與訂製經文／名字刺繡；亦可開「可見的修補」工作坊，教人把舊衣破口繡成金線。物料優先選有機棉、剩布再利用與可降解包裝。現階段為構思，歡迎教會／品牌聯乘試做小批量。",
    materials: "有機棉／剩布 · 金屬色繡線 · 再生襯布（構思）",
    faith: "傳道書 3:7 — 撕裂有時，縫補有時",
    eco: "剩布升級再造；延長衣物壽命，減少快時尚丟棄",
    category: "textile",
    status: "concept",
    priceHint: "構思階段 · 可談小批量試做",
    suitableFor: ["手帕／布章", "婚禮回禮", "小組訂製", "修補工作坊"],
    processNotes: [
      "收集剩布與有機棉樣本",
      "設計金脈／經文刺繡圖樣",
      "手繡或小量機繡試版",
      "附來源與意義短卡",
    ],
  },
  {
    id: "rest-towel",
    series: "W02",
    slug: "rest-towel",
    line: "woven-mend",
    name: "安息巾",
    en: "Sabbath Towel",
    tagline: "擦乾水跡，也擦乾忙碌。",
    description:
      "【初步構思】有機棉或再生棉毛巾，邊角以金線刺繡細紋。用於洗手、洗臉或安息日儀式——提醒「清潔」與「安息」都是被賜的禮物，而非另一項績效。",
    longDescription:
      "構想方向：面巾／手巾尺寸為主，低調金線沿邊或角落刺繡；可選無漂染、低水洗印染。適合家居、教會洗手間接待、退修營伴手。包裝用再生紙束帶，避免塑膠。",
    materials: "有機／再生棉 · 金線刺繡 · 植物染選項（構思）",
    faith: "約翰福音 13:5 — 就拿毛巾束腰，洗門徒的腳",
    eco: "有機或再生棉；耐用可洗，減少即棄紙巾依賴",
    category: "textile",
    status: "concept",
    priceHint: "構思階段 · 可談樣品",
    suitableFor: ["家居", "接待處", "退修營", "洗腳禮紀念"],
    processNotes: [
      "選定棉紗與織造夥伴",
      "邊角金線刺繡試版",
      "水洗耐久測試",
      "再生紙包裝與說明卡",
    ],
  },
  {
    id: "shelter-sleeve",
    series: "W03",
    slug: "shelter-sleeve",
    line: "woven-mend",
    name: "遮袋",
    en: "Shelter Sleeve",
    tagline: "收起雨傘，也收起匆忙。",
    description:
      "【初步構思】可重複使用的雨傘／遮袋，替代商場即棄膠套。布面可繡細金線或簡單經文短句，象徵「被遮蓋、被保護」——環保行動與信仰意象同行。",
    longDescription:
      "構想方向：防水或潑水布、可折疊收納、掛扣方便掛在袋上；內層吸濕，外層可刺繡品牌金脈或「耶和華是我的盾牌」等短句（可訂製）。目標是減少即棄膠傘套，同時做成可送人的小禮物。",
    materials: "回收／再生纖維防水布 · 金線刺繡 · 金屬掛扣（構思）",
    faith: "詩篇 91:4 — 祂必用自己的翎毛遮蔽你",
    eco: "取代即棄膠傘套；可洗可重用，減少塑膠",
    category: "textile",
    status: "concept",
    priceHint: "構思階段 · 可談試產",
    suitableFor: ["日常通勤", "教會／活動派發", "企業禮品", "婚禮賓客"],
    processNotes: [
      "防水布與車縫結構試版",
      "吸濕內層與掛扣設計",
      "刺繡圖樣與尺寸規格",
      "洗滌與耐用測試",
    ],
  },
];

export const pillars: BeliefPillar[] = [
  {
    id: "mend",
    title: "修補，而非丟棄",
    body: "金繕教我們：破碎不是終點。產品線以修復、再造、可堆肥為優先，讓物料繼續服事人。",
  },
  {
    id: "steward",
    title: "託管大地",
    body: "信仰提醒我們是管家，不是主人。每一件產品都問：這會減少傷害、還是增加負擔？",
  },
  {
    id: "grace",
    title: "裂縫裡的恩典",
    body: "金線不是遮醜，是見證。我們把環保行動寫進故事，讓使用者觸摸「被修好」的盼望。",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "gather",
    mark: "拾",
    title: "尋回",
    body: "尋回被棄的器物與物料，記錄來源與破損狀態。",
  },
  {
    id: "mend",
    mark: "繕",
    title: "修補",
    body: "以低毒、可再生技法修補，保留誠實的修復痕跡。",
  },
  {
    id: "record",
    mark: "誌",
    title: "誌記",
    body: "為每件作品寫下來源與經文短註，成為可傳承的故事。",
  },
  {
    id: "entrust",
    mark: "託",
    title: "託付",
    body: "交到使用者手中，繼續託管這地，也延續光。",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByLine(line: Product["line"]): Product[] {
  return products.filter((product) => product.line === line);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id || product.slug === id);
}

export function getProductIds(): ProductId[] {
  return products.map((product) => product.id);
}

export function getRelatedProducts(id: ProductId, limit = 2): Product[] {
  const current = getProductById(id);
  if (!current) return products.filter((p) => p.id !== id).slice(0, limit);
  const sameLine = products.filter(
    (p) => p.id !== id && p.line === current.line,
  );
  if (sameLine.length >= limit) return sameLine.slice(0, limit);
  return [
    ...sameLine,
    ...products.filter((p) => p.id !== id && p.line !== current.line),
  ].slice(0, limit);
}

export const statusLabel: Record<Product["status"], string> = {
  available: "現正供應",
  preorder: "接受預購",
  workshop: "體驗／工作坊",
  coming_soon: "即將推出",
  concept: "初步構思",
};
