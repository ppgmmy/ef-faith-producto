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
  // —— 金線刺繡系列 ——
  {
    id: "gold-stitch",
    series: "E01",
    slug: "gold-stitch",
    line: "embroidery",
    name: "金線布章",
    en: "Gold Stitch Patch",
    tagline: "一針一線，把裂縫織回光裡。",
    description:
      "有機棉／剩布布章，金屬色線繡成金繕脈紋；可配鎖匙扣。婚禮回禮、小組紀念——把「修補」變成可佩戴的記號。",
    longDescription:
      "細小圓形布章，米白／亞麻底，金色裂紋低調走在布面；可配鎖匙扣。包裝再生紙卡，印「撕裂有時，縫補有時」。可機繡或手繡小批量。",
    materials: "有機棉／剩布 · 金屬色繡線 · 金屬扣環",
    faith: "傳道書 3:7 — 撕裂有時，縫補有時",
    eco: "剩布升級再造；延長衣物壽命",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 88,
    image: "/products/gold-stitch.png",
    suitableFor: ["布章／鎖匙扣", "婚禮回禮", "小組訂製"],
    processNotes: ["選布", "金脈圖樣", "繡製試版", "附意義短卡"],
  },
  {
    id: "gold-kerchief",
    series: "E02",
    slug: "gold-kerchief",
    line: "embroidery",
    name: "金繕手帕",
    en: "Kintsugi Kerchief",
    tagline: "擦去眼淚，也留下光。",
    description:
      "亞麻／有機棉手帕，一角金繕脈紋細繡。可隨身、可送人——安靜、實用，又帶著被修好的故事。",
    longDescription:
      "畫面：米白手帕摺好，角落金色裂紋線；可選極淡十字針腳（低調）。適合關懷探訪、婚禮手信、個人靈修伴手。可水洗，金線選色牢度高的繡線。",
    materials: "亞麻／有機棉 · 金屬色繡線",
    faith: "啟示錄 21:4 — 神要擦去他們一切的眼淚",
    eco: "可重用布手帕，減少即棄紙巾",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 128,
    image: "/products/gold-kerchief.png",
    suitableFor: ["日常隨身", "關懷禮物", "婚禮手信"],
    processNotes: ["裁切手帕", "角位刺繡", "鎖邊", "紙套包裝"],
  },
  {
    id: "stitch-kit",
    series: "E03",
    slug: "stitch-kit",
    line: "embroidery",
    name: "可見修補刺繡盒",
    en: "Visible Mend Kit",
    tagline: "自己繡一道金線。",
    description:
      "家用刺繡修補盒：竹繡棚、金／綠繡線、針、剩布練習片、步驟卡＋短默想。適合親子、小組——親手把裂縫繡成光。",
    longDescription:
      "畫面：竹圈、金線軸、練習布上已起針的金繕紋。教人用「可見的修補」延長舊衣壽命，而不是丟掉。可加開 90 分鐘工作坊。",
    materials: "竹繡棚 · 繡線 · 針 · 有機棉練習布 · 再生紙說明卡",
    faith: "哥林多後書 5:17 — 若有人在基督裡，他就是新造的人",
    eco: "教人修衣而非棄衣，從源頭減廢",
    category: "embroidery",
    status: "workshop",
    priceHint: "建議零售",
    priceHkd: 248,
    image: "/products/stitch-kit.png",
    suitableFor: ["親子", "小組", "工作坊"],
    processNotes: ["備料分裝", "教學卡", "默想短文", "工作坊流程"],
  },
  {
    id: "visible-mend",
    series: "E04",
    slug: "visible-mend",
    line: "embroidery",
    name: "舊衣金繕繡",
    en: "Visible Mend Service",
    tagline: "你的破口，我們繡成金線。",
    description:
      "寄／送一件舊衣或布物，我們用金繕風格刺繡修補撕裂處。每件獨一無二，附修復短誌。",
    longDescription:
      "畫面：深色布上金色修補針腳，像陶瓷金繕。服務制：先相片評估，再報價繡製。適合有故事的舊物、團契 T-shirt、寶貝外套。",
    materials: "客衣／客布 · 金屬色繡線 · 加固襯布",
    faith: "詩篇 147:3 — 他醫好傷心的人，裹好他們的傷處",
    eco: "延長衣物壽命，拒絕快時尚丟棄",
    category: "embroidery",
    status: "preorder",
    priceHint: "由破損程度報價",
    priceHkd: 280,
    image: "/products/visible-mend.png",
    suitableFor: ["舊衣修復", "紀念衣物", "訂製關懷"],
    processNotes: ["相片評估", "加固與刺繡", "拍照誌記", "寄回"],
  },
  // —— 織繕日常（毛巾／遮袋）——
  {
    id: "rest-towel",
    series: "W02",
    slug: "rest-towel",
    line: "woven-mend",
    name: "安息巾",
    en: "Sabbath Towel",
    tagline: "擦乾水跡，也擦乾忙碌。",
    description:
      "有機棉面巾，一角以金線細繡。洗手、洗臉或安息日用——提醒清潔與安息都是禮物，不是績效。",
    longDescription:
      "畫面感覺：摺好的米白面巾，角落有一條細金線如裂縫修復；燈光柔和，像退修營或家居洗手間的安靜角落。再生紙束帶包裝，無塑膠袋。",
    materials: "有機／再生棉 · 金線刺繡",
    faith: "約翰福音 13:5 — 就拿毛巾束腰，洗門徒的腳",
    eco: "有機或再生棉；耐用可洗，減少即棄紙巾依賴",
    category: "textile",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 198,
    image: "/products/rest-towel.png",
    suitableFor: ["家居", "接待處", "退修營"],
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
      "可重用雨傘遮袋，取代商場即棄膠套。袋口細金線，掛扣方便掛袋上——環保同「被遮蓋」的意象一齊帶走。",
    longDescription:
      "畫面感覺：深綠灰布筒，可摺細，金屬掛扣；袋口有一道金繕細線。放喺手袋旁邊影，睇得出係日常用得着、又唔似即棄膠套。",
    materials: "再生纖維防水布 · 金線刺繡 · 金屬掛扣",
    faith: "詩篇 91:4 — 祂必用自己的翎毛遮蔽你",
    eco: "取代即棄膠傘套；可洗可重用，減少塑膠",
    category: "textile",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 148,
    image: "/products/shelter-sleeve.png",
    suitableFor: ["日常通勤", "教會派發", "婚禮賓客"],
    processNotes: [
      "防水布與車縫結構試版",
      "吸濕內層與掛扣設計",
      "刺繡圖樣與尺寸規格",
      "洗滌與耐用測試",
    ],
  },
];

export function getShopPreviewProducts(): Product[] {
  return products.filter((product) => typeof product.priceHkd === "number");
}

export function getEmbroideryProducts(): Product[] {
  return products.filter((product) => product.line === "embroidery");
}

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
