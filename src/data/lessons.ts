/** 刺繡教學課 — 公仔全部用刺繡針法製作，維持可愛畫風 */

export type LessonId =
  | "satin-cross"
  | "satin-dove"
  | "satin-rainbow"
  | "outline-bible"
  | "knot-mustard"
  | "satin-fish"
  | "long-short-sunflower"
  | "satin-blue-flowers"
  | "calligraphy-grace";

export interface EmbroideryLesson {
  id: LessonId;
  lessonNo: number;
  title: string;
  en: string;
  stitch: string;
  stitchZh: string;
  level: "入門" | "進階" | "花草";
  durationMin: number;
  motifId?: string;
  summary: string;
  faith: string;
  materials: string[];
  steps: string[];
  tips: string[];
  image: string;
}

export const embroideryLessons: EmbroideryLesson[] = [
  {
    id: "satin-cross",
    lessonNo: 1,
    title: "圓角十字架公仔",
    en: "Soft Cross",
    stitch: "satin stitch",
    stitchZh: "緞面針",
    level: "入門",
    durationMin: 45,
    motifId: "cross",
    summary:
      "用緞面針繡出圓潤十字公仔——畫風一樣得意，但全部係線同針腳，唔係布貼。",
    faith: "約翰福音 3:16 — 神愛世人",
    materials: ["有機棉練習布", "米色／金色繡線", "繡花針", "竹繡棚（可選）", "水消筆"],
    steps: [
      "用淡線或水消筆描出圓角十字外輪廓與笑臉位置。",
      "外輪廓用回針／輪廓針走一圈，固定形狀。",
      "十字主體用緞面針由中心向外填滿，保持方向一致。",
      "眼睛用法式結粒；嘴巴用短梗針輕彎。",
      "四臂可加細小星形直針點綴。",
      "剪線、鎖背，完成一塊可做布章或鎖匙扣。",
    ],
    tips: [
      "緞面針唔好拉太緊，先保持公仔「圓潤」感。",
      "金線只做外框或星點，公仔本體用米色較柔。",
    ],
    image: "/products/motif-cross.png",
  },
  {
    id: "satin-dove",
    lessonNo: 2,
    title: "白白鴿",
    en: "Chubby Dove",
    stitch: "satin + stem stitch",
    stitchZh: "緞面針＋梗針",
    level: "入門",
    durationMin: 50,
    motifId: "dove",
    summary: "圓身白鴿用緞面針填色，橄欖葉用梗針同短緞面——平安又得意。",
    faith: "創世記 8:11 — 鴿子叼著橄欖葉子",
    materials: ["米白練習布", "白／淺綠／金繡線", "針", "繡棚"],
    steps: [
      "描出圓身、翼、頭同橄欖葉位置。",
      "身體用白色緞面針沿弧線填滿。",
      "翼用稍斜嘅緞面針，同身體分開層次。",
      "橄欖葉用淺綠緞面；葉脈用細梗針。",
      "眼睛用法式結粒。",
      "可選金線細框，完成後可繡上小袋或手帕。",
    ],
    tips: ["翼同身體分兩層填，先睇得出「公仔立體」而唔使加填充布。"],
    image: "/products/motif-dove.png",
  },
  {
    id: "satin-rainbow",
    lessonNo: 3,
    title: "約定彩虹",
    en: "Promise Rainbow",
    stitch: "satin stitch",
    stitchZh: "緞面針（分層色帶）",
    level: "入門",
    durationMin: 60,
    motifId: "rainbow",
    summary: "柔色彩虹用分層緞面針；小雲用結粒同短針——畫風保持可愛。",
    faith: "創世記 9:13 — 我把虹放在雲彩中",
    materials: ["練習布", "柔彩六色線", "白線", "針", "繡棚"],
    steps: [
      "畫出三至五條平行弧線作彩虹帶。",
      "由外至內，每條弧用一種顏色緞面針填滿。",
      "雲朵用白線短緞面或鬆結粒堆出圓潤感。",
      "雲臉用兩粒結粒＋短梗針微笑。",
      "檢查色帶邊緣是否整齊，修剪線頭。",
    ],
    tips: ["色帶之間留極細空隙，會更似刺繡層次而唔糊成一塊。"],
    image: "/products/motif-rainbow.png",
  },
  {
    id: "outline-bible",
    lessonNo: 4,
    title: "小小聖經公仔",
    en: "Mini Bible Buddy",
    stitch: "satin + back stitch",
    stitchZh: "緞面針＋回針",
    level: "入門",
    durationMin: 40,
    motifId: "bible",
    summary: "合上小書用緞面針做封面，金邊用回針——讀經主題入門款。",
    faith: "詩篇 119:105 — 你的話是我腳前的燈",
    materials: ["練習布", "米／金／啡繡線", "針"],
    steps: [
      "描出長方形封面與書脊厚度。",
      "封面用米色緞面針水平或垂直填滿。",
      "書脊用稍深色短緞面。",
      "外框同書口用金色回針。",
      "加結粒眼睛與短針微笑。",
    ],
    tips: ["書本公仔比例宜略圓角，先同其他公仔畫風一致。"],
    image: "/products/motif-bible.png",
  },
  {
    id: "knot-mustard",
    lessonNo: 5,
    title: "芥菜種芽芽",
    en: "Mustard Sprout",
    stitch: "french knot + satin",
    stitchZh: "法式結粒＋緞面針",
    level: "入門",
    durationMin: 35,
    motifId: "mustard",
    summary: "一粒種用結粒，兩片葉用緞面——細細信心，好適合初學。",
    faith: "馬太福音 17:20 — 信心像一粒芥菜種",
    materials: ["練習布", "啡／綠繡線", "針"],
    steps: [
      "定好種子同兩葉位置。",
      "種子用一至兩粒法式結粒。",
      "嫩葉用淺綠緞面針由葉柄向外。",
      "葉柄用短梗針連接。",
      "可選極淡笑臉點綴。",
    ],
    tips: ["結粒繞線兩圈就夠，太多會太大粒。"],
    image: "/products/motif-mustard.png",
  },
  {
    id: "satin-fish",
    lessonNo: 6,
    title: "小魚兒",
    en: "Little Fish",
    stitch: "satin stitch",
    stitchZh: "緞面針",
    level: "入門",
    durationMin: 40,
    motifId: "fish",
    summary: "圓潤 ichthys 小魚——低調信仰符號，全部用線繡出公仔感。",
    faith: "馬可福音 1:17 — 我要叫你們得人如得魚",
    materials: ["練習布", "米／金繡線", "針"],
    steps: [
      "描出魚身與尾。",
      "身體緞面針沿長軸填滿。",
      "尾部分開兩片短緞面。",
      "眼睛結粒；可選金線外框。",
    ],
    tips: ["魚身略圓，避免尖長，先似公仔多過似標誌。"],
    image: "/products/motif-fish.png",
  },
  {
    id: "long-short-sunflower",
    lessonNo: 7,
    title: "向日葵",
    en: "Sunflower",
    stitch: "long & short stitch",
    stitchZh: "長短針",
    level: "花草",
    durationMin: 90,
    motifId: "sunflower",
    summary: "長短針層次花瓣＋深啡花心——經典花草課，同公仔線可一齊學。",
    faith: "馬太福音 5:14 — 你們是世上的光",
    materials: ["練習布", "黃／金／啡／綠繡線", "繡棚", "針"],
    steps: [
      "描出圓心與花瓣外輪。",
      "花心用深啡結粒或短直針密鋪。",
      "花瓣用長短針由外向內交錯，淺黃疊金黃。",
      "葉用長短針或緞面；葉脈梗針。",
      "修剪、檢查層次。",
    ],
    tips: ["長短針要交錯參差，先有漸層；唔好排成一排齊針。"],
    image: "/products/motif-sunflower.png",
  },
  {
    id: "satin-blue-flowers",
    lessonNo: 8,
    title: "青色小花",
    en: "Blue Blossoms",
    stitch: "satin stitch",
    stitchZh: "緞面針",
    level: "花草",
    durationMin: 55,
    motifId: "blue-flowers",
    summary: "緞面針小青花——清爽 zakka，適合杯套同手帕角。",
    faith: "馬太福音 6:28 — 野地裡的花",
    materials: ["練習布或條紋布", "兩色藍線", "褐／綠線", "針"],
    steps: [
      "描出枝幹與小花位置。",
      "枝幹用褐線梗針。",
      "每朵花五瓣用緞面針由外向中心。",
      "花心用白或淺黃小結粒。",
      "小葉用短緞面。",
    ],
    tips: ["小花宜細，一朵用時唔好超過指頭寬，先似教學樣本。"],
    image: "/products/motif-blue-flowers.png",
  },
  {
    id: "calligraphy-grace",
    lessonNo: 9,
    title: "恩典（書法字）",
    en: "Grace Calligraphy",
    stitch: "satin + stem stitch",
    stitchZh: "緞面針＋梗針（書法）",
    level: "進階",
    durationMin: 75,
    motifId: "word-grace",
    summary:
      "用緞面針同梗針繡出毛筆字筆觸——「恩典」二字優雅大氣，學識可以自訂其他祝福字。",
    faith: "哥林多後書 12:9 — 我的恩典夠你用",
    materials: ["練習布", "金／深綠繡線", "水消筆", "繡棚", "針"],
    steps: [
      "用水消筆描出「恩典」書法字稿（可印字帖轉印）。",
      "主筆畫用緞面針沿筆觸方向填滿。",
      "細筆同飛白用梗針或短直針。",
      "轉折處分開兩段緞面，保持筆鋒感。",
      "可選金線勾邊或加小印章式結粒。",
      "完成後可做布章、書籤或繡棚。",
    ],
    tips: [
      "書法字最緊要筆觸方向一致，緞面針要跟住筆畫走。",
      "飛白位留少少布底，會更似毛筆。",
    ],
    image: "/products/word-grace.png",
  },
];

export function getLessonById(id: string): EmbroideryLesson | undefined {
  return embroideryLessons.find((l) => l.id === id);
}

export function getLessonIds(): LessonId[] {
  return embroideryLessons.map((l) => l.id);
}
