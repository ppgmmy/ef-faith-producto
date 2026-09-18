import type { NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brandZh: "繕物誌",
  brandEn: "Kintsugi Studio",
  tagline: "以修補重拾創造之美。",
  description:
    "繕物誌結合環保與信仰：以金繕精神修復舊物，讓裂縫成為光，讓捨棄變成守護。",
  email: "hello@kintsugi.studio",
  locale: "zh-Hant",
};

export const mainNav: NavItem[] = [
  { href: "/belief", label: "信念" },
  { href: "/series", label: "系列" },
  { href: "/process", label: "工藝" },
  { href: "/contact", label: "預約系列冊", accent: true },
];

export const footerNav: NavItem[] = [
  { href: "/belief", label: "信念" },
  { href: "/series", label: "金線系列" },
  { href: "/process", label: "從碎裂到金線" },
  { href: "/contact", label: "聯絡繕物誌" },
];

export const inquiryKindLabels = {
  series_book: "預約系列冊",
  custom_gift: "訂製禮盒",
  church: "教會／小組合作",
  workshop: "工作坊",
  other: "其他",
} as const;

export const lineLabels = {
  "gold-vein": "金線器物",
  "woven-mend": "織繕日常",
} as const;
