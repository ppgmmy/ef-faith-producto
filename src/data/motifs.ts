/** 公仔風信仰圖騰 — 可繡在布章／袋／手帕／訂製舊衣 */

export type MotifId =
  | "cross"
  | "dove"
  | "rainbow"
  | "bible"
  | "mustard"
  | "fish";

export interface EmbroideryMotif {
  id: MotifId;
  name: string;
  en: string;
  vibe: string;
  faith: string;
  bestOn: string[];
  priceAddonHkd: number;
  image?: string;
}

export const embroideryMotifs: EmbroideryMotif[] = [
  {
    id: "cross",
    name: "圓角十字架公仔",
    en: "Soft Cross",
    vibe: "圓潤、溫柔，似布偶多過似教會標誌",
    faith: "約翰福音 3:16 — 神愛世人",
    bestOn: ["布章", "鎖匙扣", "Tote 袋角", "外套胸口"],
    priceAddonHkd: 0,
    image: "/products/motif-cross.png",
  },
  {
    id: "dove",
    name: "白白鴿",
    en: "Chubby Dove",
    vibe: "圓身白鴿＋小橄欖葉，可愛平安",
    faith: "創世記 8:11 — 鴿子嘴裡叼著新擰下來的橄欖葉子",
    bestOn: ["小布袋", "手帕", "舊衣背部小圖", "壁飾"],
    priceAddonHkd: 20,
    image: "/products/motif-dove.png",
  },
  {
    id: "rainbow",
    name: "約定彩虹",
    en: "Promise Rainbow",
    vibe: "柔色彩虹＋小雲，約的記號",
    faith: "創世記 9:13 — 我把虹放在雲彩中",
    bestOn: ["布章", "書籤", "兒童／親子禮物", "袋面"],
    priceAddonHkd: 30,
    image: "/products/motif-rainbow.png",
  },
  {
    id: "bible",
    name: "小小聖經公仔",
    en: "Mini Bible Buddy",
    vibe: "合上嘅小書＋金邊，可配小心心",
    faith: "詩篇 119:105 — 你的話是我腳前的燈",
    bestOn: ["書籤", "布章", "聖經套角", "刺繡盒練習布"],
    priceAddonHkd: 25,
    image: "/products/motif-bible.png",
  },
  {
    id: "mustard",
    name: "芥菜種芽芽",
    en: "Mustard Sprout",
    vibe: "一粒種＋兩片嫩葉，細細信心",
    faith: "馬太福音 17:20 — 信心像一粒芥菜種",
    bestOn: ["口袋片", "鎖匙扣", "手帕角"],
    priceAddonHkd: 15,
    image: "/products/motif-mustard.png",
  },
  {
    id: "fish",
    name: "小魚兒",
    en: "Little Fish",
    vibe: "圓潤 ichthys 小魚，低調又得意",
    faith: "馬可福音 1:17 — 我要叫你們得人如得魚",
    bestOn: ["布章", "書籤", "帽沿", "袋角"],
    priceAddonHkd: 15,
    image: "/products/motif-fish.png",
  },
];

/** 公仔繡喺實物上面嘅示範組合 */
export const motifOnProducts = [
  {
    id: "on-tote",
    title: "彩虹繡喺 Tote",
    caption: "袋面正中一個約定彩虹公仔——出門都帶住應許。",
    image: "/products/motif-tote-rainbow.png",
    href: "/series/motif-tote",
  },
  {
    id: "on-kerchief",
    title: "小聖經繡喺手帕角",
    caption: "角位小小聖經公仔，擦眼淚都記得話語。",
    image: "/products/motif-kerchief-bible.png",
    href: "/series/motif-kerchief",
  },
  {
    id: "on-hoop",
    title: "十字架繡喺繡棚",
    caption: "掛牆嘅圓角十字公仔，家裡一角溫柔見證。",
    image: "/products/motif-hoop-cross.png",
    href: "/series/motif-hoop",
  },
  {
    id: "on-pouch",
    title: "白鴿繡喺小袋",
    caption: "正面圓身白鴿＋橄欖葉，日常收納都得意。",
    image: "/products/motif-dove.png",
    href: "/series/motif-dove",
  },
] as const;
