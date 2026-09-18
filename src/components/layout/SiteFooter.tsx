import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage/30 bg-linen px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg tracking-[0.12em] text-pine">
            {siteConfig.brandZh}
          </p>
          <p className="mt-1 font-latin text-sm italic text-ash">
            {siteConfig.brandEn} — mend what was broken, steward what was given.
          </p>
          <p className="mt-4 text-sm leading-7 text-ash/90">{siteConfig.tagline}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-sm text-moss transition hover:text-pine"
          >
            {siteConfig.email}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash" aria-label="頁尾選單">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-pine"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs leading-6 text-ash/80 md:max-w-[12rem] md:text-right">
          © {new Date().getFullYear()} {siteConfig.brandZh}
          <br className="hidden md:block" /> {siteConfig.brandEn}
        </p>
      </div>
    </footer>
  );
}
