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
      "有機棉／剩布布章，金繕脈紋刺繡；可配鎖匙扣。包裝經文卡「撕裂有時，縫補有時」——教會回禮、洗禮紀念、小組結業都啱賣。",
    longDescription:
      "細圓布章，米白底金色裂紋；信仰符號含蓄，唔誇張。可批量機繡。目標客：教會書店、婚禮基督徒賓客、青年小組。",
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
      "靈修 DIY 刺繡盒（參考「邊繡邊默想」）：竹棚、金／綠線、練習布、針、7 日短默想卡。小組／親子／退修營都啱——親手把裂縫繡成光。",
    longDescription:
      "對齊市場上手作靈修包定價帶（約 HK$260）。我哋主題係金繕可見修補，唔只印花圖。可加開 90 分鐘工作坊。",
    materials: "竹繡棚 · 繡線 · 針 · 有機棉練習布 · 再生紙默想卡",
    faith: "哥林多後書 5:17 — 若有人在基督裡，他就是新造的人",
    eco: "教人修衣而非棄衣，從源頭減廢",
    category: "embroidery",
    status: "workshop",
    priceHint: "建議零售",
    priceHkd: 260,
    image: "/products/stitch-kit.png",
    suitableFor: ["親子", "小組", "工作坊", "靈修體驗"],
    processNotes: ["備料分裝", "教學卡", "7 日默想", "工作坊流程"],
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
      "舊衣／舊袋刺繡重塑（參考 before/after 服務）：寄來磨損衣物，金繕風格繡補裂縫或繡上經文圖騰。每件獨一無二，附修復短誌。",
    longDescription:
      "市場類似服務約 HK$420–680。我哋以金繕為主軸，可加橄欖／鴿子等選項。流程：相片評估 → 報價 → 刺繡 → 寄回。",
    materials: "客衣／客布 · 金屬色／rPET 金絲繡線 · 加固襯布",
    faith: "詩篇 147:3 — 他醫好傷心的人，裹好他們的傷處",
    eco: "延長衣物壽命，拒絕快時尚丟棄",
    category: "embroidery",
    status: "preorder",
    priceHint: "由面積報價",
    priceHkd: 420,
    image: "/products/visible-mend.png",
    suitableFor: ["舊衣修復", "外套背部", "帆布袋重塑"],
    processNotes: ["相片評估", "加固與刺繡", "拍照誌記", "寄回"],
  },
  {
    id: "word-bookmark",
    series: "E05",
    slug: "word-bookmark",
    line: "embroidery",
    name: "金線書籤",
    en: "Word Bookmark",
    tagline: "話語夾住，金線記得。",
    description:
      "有機棉書籤，金繕脈紋＋低調魚形。夾在聖經／靈修本——讀經時摸到「被修好」的記號。受洗禮、同工感謝都啱。",
    longDescription:
      "對齊市場書籤價位（約 HK$150 帶）。我哋可做流蘇升級。批量給教會書店寄賣。",
    materials: "有機棉 · 金屬色繡線 · 再生紙說明卡",
    faith: "詩篇 119:105 — 你的話是我腳前的燈",
    eco: "布書籤可長期用，少用塑膠書籤",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 120,
    image: "/products/word-bookmark.png",
    suitableFor: ["讀經", "受洗禮物", "書店寄賣"],
    processNotes: ["裁切書籤", "金脈＋魚形刺繡", "鎖邊", "經文卡包裝"],
  },
  {
    id: "mustard-token",
    series: "E06",
    slug: "mustard-token",
    line: "embroidery",
    name: "芥菜種口袋片",
    en: "Mustard Seed Token",
    tagline: "信心，可以好細，仍然發芽。",
    description:
      "手心大小布片，金繕線＋一粒芥菜種針腳。放銀包／口袋，提醒信心與醫治。關懷探訪、洗禮紀念啱用。",
    longDescription:
      "最小件、最好試產。故事清楚：馬太 17:20。可訂製名字（加價）。",
    materials: "亞麻／有機棉 · 金屬色繡線 · 紙封套",
    faith: "馬太福音 17:20 — 你們若有信心像一粒芥菜種",
    eco: "剩布升級；小件少運輸負擔",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 58,
    image: "/products/mustard-token.png",
    suitableFor: ["關懷探訪", "洗禮紀念", "個人提醒"],
    processNotes: ["裁圓／方片", "金線＋種子點", "鎖邊", "經文封套"],
  },
  {
    id: "table-linen",
    series: "E07",
    slug: "table-linen",
    line: "embroidery",
    name: "擘餅布巾",
    en: "Table Linen",
    tagline: "桌上有餅，布上有金線。",
    description:
      "亞麻餐巾角繡金繕脈＋細麥穗。家居安息餐、小組擘餅、教會聖餐預備——信仰生活化。",
    longDescription:
      "群體訂單潛力。可訂製堂會縮寫。",
    materials: "亞麻／有機棉 · 金屬色繡線",
    faith: "路加福音 22:19 — 你們應當如此行，為的是記念我",
    eco: "布巾可洗重用，減少即棄紙巾",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售（對裝）",
    priceHkd: 268,
    image: "/products/table-linen.png",
    suitableFor: ["小組擘餅", "安息餐", "教會訂製"],
    processNotes: ["選布鎖邊", "角繡圖樣", "對裝包裝", "堂會訂製選項"],
  },
  {
    id: "bible-sleeve",
    series: "E08",
    slug: "bible-sleeve",
    line: "embroidery",
    name: "金繕聖經套",
    en: "Bible Sleeve",
    tagline: "話語有遮蓋，裂縫有金線。",
    description:
      "GOTS 有機亞麻聖經套，金繕脈紋＋橄欖枝。經文×圖騰×永續布料——讀經時觸摸故事。",
    longDescription:
      "對齊市場聖經套約 HK$380。差異化：金繕裂紋主視覺。可選詩篇 23 短句刺繡。",
    materials: "GOTS 有機亞麻 · rPET／金屬色繡線",
    faith: "詩篇 23:1 — 耶和華是我的牧者",
    eco: "有機亞麻＋回收繡線選項",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 380,
    image: "/products/bible-sleeve.png",
    suitableFor: ["個人靈修", "受洗禮物", "書店寄賣"],
    processNotes: ["量度尺寸", "車縫書套", "金繕＋橄欖刺繡", "經文卡"],
  },
  {
    id: "hoop-wall",
    series: "E09",
    slug: "hoop-wall",
    line: "embroidery",
    name: "金線繡棚壁飾",
    en: "Hoop Wall",
    tagline: "掛牆的一道金線。",
    description:
      "竹繡棚壁飾：金繕脈＋橄欖葉。家居、小組角落、教會接待——信仰工藝做成氛圍。",
    longDescription:
      "對齊市場壁飾約 HK$560。可延伸主題：芥菜種、野地百合、金繕。",
    materials: "竹繡棚 · 有機棉／亞麻 · 金／綠繡線",
    faith: "創世記 1:3 — 要有光",
    eco: "竹框可再生；布料可選有機認證",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 520,
    image: "/products/hoop-wall.png",
    suitableFor: ["家居", "小組空間", "禮物"],
    processNotes: ["選棚固定", "刺繡主題", "背面掛繩", "禮盒"],
  },
  {
    id: "motif-pack",
    series: "E10",
    slug: "motif-pack",
    line: "embroidery",
    name: "信仰公仔圖騰布章組",
    en: "Faith Buddy Motif Set",
    tagline: "十字架、白鴿、彩虹、小聖經——得意又記得故事。",
    description:
      "一套 4 款公仔風刺繡布章：圓角十字架、白白鴿、約定彩虹、小小聖經。可貼袋、鎖匙扣、禮物包裝——可愛圖騰係主賣點，信仰符號做得好送、好賣。",
    longDescription:
      "風格：圓潤公仔感（唔係寫實聖像）。可單買或成套。適合主日學、親子、青年小組、書店寄賣。金色裂紋只係可選品牌簽名，唔搶公仔鏡。",
    materials: "有機棉／剩布 · 彩色繡線 · 金線點綴 · 背膠／鎖匙扣選項",
    faith: "多經文主題可選 — 愛、平安、約定、話語",
    eco: "剩布升級；小件好寄、少包裝",
    category: "embroidery",
    status: "preorder",
    priceHint: "套裝建議",
    priceHkd: 198,
    image: "/products/motifs-set.png",
    suitableFor: ["主日學", "回禮", "寄賣", "親子"],
    processNotes: ["繪公仔圖稿", "打版刺繡", "鎖邊", "套裝卡"],
  },
  {
    id: "motif-cross",
    series: "E11",
    slug: "motif-cross",
    line: "embroidery",
    name: "圓角十字架布章",
    en: "Soft Cross Patch",
    tagline: "溫柔嘅十字，似公仔多過似標誌。",
    description:
      "單件圓角十字架公仔布章，米白＋金線。可配鎖匙扣。受洗、決志、小組結業禮物都啱。",
    longDescription:
      "刻意做得圓潤可愛，減低「硬銷宗教商品」感，同時信仰清楚。可批量機繡。",
    materials: "有機棉 · 金／米色繡線 · 金屬扣選項",
    faith: "約翰福音 3:16 — 神愛世人",
    eco: "剩布可用；小批量試產友善",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 78,
    image: "/products/motif-cross.png",
    suitableFor: ["受洗禮物", "鎖匙扣", "袋章"],
    processNotes: ["公仔圖稿", "刺繡", "鎖邊", "包裝卡"],
  },
  {
    id: "motif-dove",
    series: "E12",
    slug: "motif-dove",
    line: "embroidery",
    name: "白白鴿小袋",
    en: "Dove Buddy Pouch",
    tagline: "平安可以好得意。",
    description:
      "小布袋／收納袋，正面繡圓身白鴿＋橄欖葉。放卡片、耳機、聖餐幣——日常用得着的信仰小物。",
    longDescription:
      "公仔鴿做主視覺，適合年輕人同小朋友。可改繡彩虹或小聖經公仔（同一袋型）。",
    materials: "有機棉／帆布 · 白／綠／金繡線 · 拉鍊或束繩",
    faith: "創世記 8:11 — 鴿子叼著橄欖葉子",
    eco: "布袋重用，少用即棄禮物袋",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 168,
    image: "/products/motif-dove.png",
    suitableFor: ["青年", "親子", "回禮"],
    processNotes: ["車袋", "繡鴿", "五金", "吊牌"],
  },
  {
    id: "motif-rainbow",
    series: "E13",
    slug: "motif-rainbow",
    line: "embroidery",
    name: "約定彩虹布章",
    en: "Promise Rainbow Patch",
    tagline: "柔色彩虹公仔，約的記號。",
    description:
      "單件約定彩虹公仔布章：柔色彩虹＋小雲臉。可貼袋、鎖匙扣、禮物包裝——主日學同親子回禮都啱。",
    longDescription:
      "同十字架／白鴿同一公仔線，彩色但唔刺眼。可批量機繡，可成套賣。",
    materials: "有機棉／剩布 · 柔彩繡線 · 金線點綴",
    faith: "創世記 9:13 — 我把虹放在雲彩中",
    eco: "剩布升級；小件好寄",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 88,
    image: "/products/motif-rainbow.png",
    suitableFor: ["主日學", "親子", "回禮"],
    processNotes: ["公仔圖稿", "彩線試版", "鎖邊", "包裝卡"],
  },
  {
    id: "motif-tote",
    series: "E14",
    slug: "motif-tote",
    line: "embroidery",
    name: "約定彩虹 Tote",
    en: "Promise Rainbow Tote",
    tagline: "公仔繡喺袋面——出門都帶住應許。",
    description:
      "有機棉／帆布 tote，正面繡約定彩虹公仔。信仰符號做得可愛、好影、好用——教會活動、日常買菜都啱。",
    longDescription:
      "示範「圖騰繡喺產品上面」：唔只布章，袋面大公仔更吸睛。可改繡十字架／白鴿／小聖經。",
    materials: "有機棉／帆布 · 柔彩繡線 · 加固襯",
    faith: "創世記 9:13 — 我把虹放在雲彩中",
    eco: "布袋重用，少用即棄膠袋",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 248,
    image: "/products/motif-tote-rainbow.png",
    suitableFor: ["日常", "教會活動", "青年"],
    processNotes: ["車袋", "繡彩虹公仔", "加固", "吊牌"],
  },
  {
    id: "motif-kerchief",
    series: "E15",
    slug: "motif-kerchief",
    line: "embroidery",
    name: "小聖經公仔手帕",
    en: "Bible Buddy Kerchief",
    tagline: "角位一個小小聖經，擦眼淚都記得話語。",
    description:
      "亞麻／有機棉手帕，一角繡小小聖經公仔（合上小書＋金邊笑臉）。關懷探訪、受洗禮物、日常隨身。",
    longDescription:
      "公仔繡喺角位，實用又得意。可改繡芥菜種芽芽或小魚兒。",
    materials: "亞麻／有機棉 · 米／金繡線",
    faith: "詩篇 119:105 — 你的話是我腳前的燈",
    eco: "可重用布手帕，減少即棄紙巾",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 138,
    image: "/products/motif-kerchief-bible.png",
    suitableFor: ["關懷禮物", "受洗", "日常"],
    processNotes: ["裁切手帕", "角繡公仔", "鎖邊", "紙套"],
  },
  {
    id: "motif-hoop",
    series: "E16",
    slug: "motif-hoop",
    line: "embroidery",
    name: "十字架公仔繡棚",
    en: "Soft Cross Hoop",
    tagline: "掛牆嘅圓角十字公仔。",
    description:
      "竹繡棚壁飾：中央繡圓角十字架公仔（笑臉＋金星）。家居、小組角落、教會接待——信仰工藝做得溫柔可愛。",
    longDescription:
      "同金線繡棚壁飾同一棚型，主視覺換成公仔十字。可選白鴿／彩虹／小聖經主題。",
    materials: "竹繡棚 · 有機棉／亞麻 · 米／金繡線",
    faith: "約翰福音 3:16 — 神愛世人",
    eco: "竹框可再生；布料可選有機",
    category: "embroidery",
    status: "preorder",
    priceHint: "建議零售",
    priceHkd: 480,
    image: "/products/motif-hoop-cross.png",
    suitableFor: ["家居", "小組空間", "禮物"],
    processNotes: ["選棚", "繡公仔十字", "掛繩", "禮盒"],
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
