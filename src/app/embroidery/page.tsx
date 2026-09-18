import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UpcycleQuote } from "@/components/embroidery/UpcycleQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts } from "@/data/catalog";
import { embroideryMotifs } from "@/data/motifs";

export const metadata: Metadata = {
  title: "金線刺繡｜公仔圖騰 × 信仰",
  description:
    "十字架、白鴿、彩虹、小聖經——可愛公仔風信仰刺繡，可做布章、小袋、訂製舊衣。",
};

export default function EmbroideryPage() {
  const items = getEmbroideryProducts();
  const motifProducts = items.filter((p) =>
    p.id.startsWith("motif") || p.id === "motif-pack",
  );
  const otherProducts = items.filter(
    (p) => !p.id.startsWith("motif") && p.id !== "motif-pack",
  );

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Cute Faith Motifs"
            title="刺繡公仔圖騰"
            description="上面繡嘅係得意公仔：圓角十字架、白白鴿、約定彩虹、小小聖經。信仰清楚，又唔硬銷——好送、好影、好賣。"
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
              可選圖騰（繡喺產品上面）
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              任何布章／袋／手帕／舊衣重塑，都可以揀下面公仔款。金繕細線可以做品牌簽名，唔搶公仔鏡。
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {embroideryMotifs.map((motif) => (
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
                  ) : (
                    <div className="mb-4 flex aspect-square items-center justify-center bg-mist font-display text-3xl text-gold">
                      {motif.name.slice(0, 1)}
                    </div>
                  )}
                  <h3 className="font-display text-lg text-pine">{motif.name}</h3>
                  <p className="mt-1 font-latin text-xs italic text-gold">
                    {motif.en}
                  </p>
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
              其他信仰刺繡
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
