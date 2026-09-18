import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "金線刺繡",
  description:
    "繕物誌刺繡系列：金線布章、金繕手帕、可見修補刺繡盒、舊衣金繕繡。",
};

export default function EmbroideryPage() {
  const items = getEmbroideryProducts();

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Embroidery"
            title="金線刺繡"
            description="用針線做金繕：裂縫唔使遮醜，可以繡成光。由細布章到舊衣修補，都係「撕裂有時，縫補有時」。"
          />

          <div className="mt-10 max-w-2xl text-sm leading-7 text-ash">
            <p>
              刺繡係最易起步開賣嘅線：物料輕、好寄、好影、好做回禮。下面四件——由細到大、由現貨感去到服務制。
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {items.map((product) => (
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
                      className="object-cover transition duration-500 hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : null}
                </Link>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="font-latin text-xs tracking-[0.2em] text-gold uppercase">
                    {product.series} · {product.en}
                  </p>
                  <h2 className="mt-1 font-display text-2xl tracking-wide text-pine">
                    <Link
                      href={`/series/${product.slug}`}
                      className="hover:text-moss"
                    >
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-2 font-display text-base text-gold">
                    {product.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ash">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-end justify-between border-t border-sage/30 pt-4">
                    <p className="font-display text-2xl text-pine">
                      {product.priceHkd
                        ? product.id === "visible-mend"
                          ? `由 HK$${product.priceHkd}`
                          : `HK$${product.priceHkd}`
                        : product.priceHint}
                    </p>
                    <Link
                      href={`/series/${product.slug}`}
                      className="text-sm text-moss hover:text-pine"
                    >
                      詳情 →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              想試產／訂製刺繡
            </Button>
            <Button href="/shop" variant="secondary">
              睇全部開賣預覽
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
