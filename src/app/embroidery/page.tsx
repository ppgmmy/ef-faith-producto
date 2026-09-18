import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UpcycleQuote } from "@/components/embroidery/UpcycleQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts } from "@/data/catalog";
import {
  getPatternMotifs,
  getSimpleMotifs,
  motifOnProducts,
} from "@/data/motifs";

export const metadata: Metadata = {
  title: "信仰公仔刺繡｜主賣圖騰",
  description:
    "十字架、白鴿、彩虹、小聖經——可愛公仔係主賣點；另有進階故事 pattern。金繕裂紋只係概念靈感，可選唔必要。",
};

function MotifGrid({
  motifs,
}: {
  motifs: ReturnType<typeof getSimpleMotifs>;
}) {
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
            {motif.tier === "pattern" ? (
              <span className="shrink-0 text-[10px] tracking-widest text-gold uppercase">
                Pattern
              </span>
            ) : null}
          </div>
          <p className="mt-1 font-latin text-xs italic text-gold">{motif.en}</p>
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
  const motifProducts = items.filter((p) => p.id.startsWith("motif"));
  const otherProducts = items.filter((p) => !p.id.startsWith("motif"));
  const simpleMotifs = getSimpleMotifs();
  const patternMotifs = getPatternMotifs();

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Main Sell · Cute Motifs"
            title="信仰公仔刺繡"
            description="主賣點係上面繡嘅得意公仔同故事 pattern：十字架、白鴿、彩虹、小聖經，以至方舟、牧人等較密線款。金繕裂紋只係品牌概念靈感——可加可不加，唔係產品必要。"
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
              公仔可以直接繡喺 tote、手帕角、小袋、繡棚壁飾，甚至你寄嚟嘅舊衣上面——圖騰先係主角。
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
              線密少少、場景感強：橄欖圈、方舟、開卷聖經、牧人、五餅二魚、馬槽與星、芥菜樹、百合十字——適合繡棚同袋面大圖。
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
              公仔圖騰產品
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
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              布章、手帕、書籤、聖經套等——一樣以公仔圖騰為主視覺。
            </p>
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
              想訂公仔圖騰／試產
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
