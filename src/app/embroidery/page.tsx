import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UpcycleQuote } from "@/components/embroidery/UpcycleQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts } from "@/data/catalog";
import {
  getBotanicalMotifs,
  getPatternMotifs,
  getSimpleMotifs,
  motifOnProducts,
  type EmbroideryMotif,
} from "@/data/motifs";

export const metadata: Metadata = {
  title: "信仰公仔刺繡｜花草針法 · 生活小物",
  description:
    "主賣可愛信仰公仔圖騰；另有進階故事 pattern、花草長短針／緞面針、外帶杯套與飲品 icon——金繕裂紋可選。",
};

function MotifGrid({ motifs }: { motifs: EmbroideryMotif[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {motifs.map((motif) => (
        <article
          key={motif.id}
          className="border border-sage/30 bg-white/50 p-4"
        >
          {motif.image ? (
            <div className="relative mb-4 aspect-square overflow-hidden bg-mist">
              <Image
                src={motif.image}
                alt={motif.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ) : null}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-lg text-pine">{motif.name}</h3>
            {motif.tier !== "simple" ? (
              <span className="shrink-0 text-[10px] tracking-widest text-gold uppercase">
                {motif.tier === "botanical" ? "Botanical" : "Pattern"}
              </span>
            ) : null}
          </div>
          <p className="mt-1 font-latin text-xs italic text-gold">{motif.en}</p>
          {motif.stitchHint ? (
            <p className="mt-1 font-latin text-[11px] tracking-wide text-moss uppercase">
              {motif.stitchHint}
            </p>
          ) : null}
          <p className="mt-2 text-sm leading-6 text-ash">{motif.vibe}</p>
          <p className="mt-3 text-xs text-moss">{motif.faith}</p>
          <p className="mt-2 text-xs text-ash/80">
            適合：{motif.bestOn.join(" · ")}
            {motif.priceAddonHkd > 0
              ? ` · 圖騰加價 +HK$${motif.priceAddonHkd}`
              : " · 基本款"}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function EmbroideryPage() {
  const items = getEmbroideryProducts();
  const motifProducts = items.filter(
    (p) =>
      p.id.startsWith("motif") ||
      p.id === "cup-sleeve" ||
      p.id === "drink-motif-pack",
  );
  const otherProducts = items.filter(
    (p) =>
      !p.id.startsWith("motif") &&
      p.id !== "cup-sleeve" &&
      p.id !== "drink-motif-pack",
  );
  const simpleMotifs = getSimpleMotifs();
  const patternMotifs = getPatternMotifs();
  const botanicalMotifs = getBotanicalMotifs();

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Main Sell · Cute Motifs"
            title="信仰公仔刺繡"
            description="主賣點係得意公仔同故事 pattern。另外花草針法（向日葵／野玫瑰／小青花）、外帶杯套、飲品 icon 都好啱生活線同聯乘——金繕裂紋可選、唔係必須。"
          />

          <div className="relative mt-12 aspect-[4/3] overflow-hidden bg-mist md:aspect-[21/9]">
            <Image
              src="/products/motifs-set.png"
              alt="信仰公仔圖騰布章組"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              繡喺產品上面
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              公仔、花草、線條都可以繡喺 tote、手帕、繡棚、杯套，甚至舊衣上面。
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {motifOnProducts.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-pine">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ash">
                    {item.caption}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              基本公仔圖騰
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              單個清楚、好批量、好入門——布章／袋角／鎖匙扣首選。
            </p>
            <MotifGrid motifs={simpleMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              進階故事 Pattern
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              線密少少、場景感強——適合繡棚同袋面大圖。
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-mist md:aspect-[21/9]">
              <Image
                src="/products/motifs-pattern-set.png"
                alt="進階故事圖騰組"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <MotifGrid motifs={patternMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              花草針法 Botanical
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              長短針向日葵／野玫瑰、緞面針青色小花——經典課感覺，適合教材、繡棚、手作體驗。
            </p>
            <MotifGrid motifs={botanicalMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              生活小物 · 聯乘
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              外帶杯套同咖啡廳飲品 icon——日常用得着，又啱咖啡店／市集聯乘。
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Link href="/series/cup-sleeve" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src="/products/product-cup-sleeve.png"
                    alt="極簡外帶杯套"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-pine">
                  極簡外帶杯套
                </h3>
                <p className="mt-2 text-sm text-ash">
                  線條繡 · 可重用 · 由 HK$98
                </p>
              </Link>
              <Link href="/series/drink-motif-pack" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src="/products/motifs-drink-set.png"
                    alt="咖啡廳飲品圖騰組"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-pine">
                  咖啡廳飲品圖騰組
                </h3>
                <p className="mt-2 text-sm text-ash">
                  刺繡版熱門飲品 icon · HK$320
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              圖騰產品
            </h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {motifProducts.map((product) => (
                <article key={product.id} className="flex flex-col">
                  <Link
                    href={`/series/${product.slug}`}
                    className="relative aspect-square overflow-hidden bg-mist"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                  </Link>
                  <h3 className="mt-4 font-display text-xl text-pine">
                    <Link href={`/series/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ash">
                    {product.description}
                  </p>
                  <p className="mt-3 font-display text-xl text-pine">
                    HK${product.priceHkd}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              其他刺繡載體
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherProducts.map((product) => (
                <article key={product.id}>
                  <Link
                    href={`/series/${product.slug}`}
                    className="relative block aspect-square overflow-hidden bg-mist"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                  </Link>
                  <h3 className="mt-3 font-display text-lg text-pine">
                    <Link href={`/series/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-ash line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-2 font-display text-pine">
                    {product.id === "visible-mend"
                      ? `由 HK$${product.priceHkd}`
                      : `HK$${product.priceHkd}`}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <UpcycleQuote />
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              想訂圖騰／杯套／聯乘
            </Button>
            <Button href="/shop" variant="secondary">
              開賣預覽
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
