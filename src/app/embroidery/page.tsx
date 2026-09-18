import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UpcycleQuote } from "@/components/embroidery/UpcycleQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "金線刺繡｜信仰 × 永續",
  description:
    "繕物誌信仰刺繡：聖經套、舊衣重塑、書籤、芥菜種、靈修刺繡盒、繡棚壁飾——金繕差異化。",
};

export default function EmbroideryPage() {
  const items = getEmbroideryProducts();

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Threads · Faith · Mend"
            title="信仰刺繡，可以賣、又講得出故事"
            description="參考綠色信仰刺繡品牌做法：經文×圖騰×永續物料×舊衣重塑。繕物誌多一道金繕——裂縫唔遮醜，繡成光。"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-sm leading-7 text-ash">
            <div className="border-t border-gold/40 pt-4">
              <p className="font-display text-pine">永續物料</p>
              <p className="mt-2">
                GOTS 有機亞麻優先、rPET／金絲繡線選項、OEKO-TEX
                線材——講得出、摸得到。
              </p>
            </div>
            <div className="border-t border-gold/40 pt-4">
              <p className="font-display text-pine">經文 × 圖騰</p>
              <p className="mt-2">
                每件對應經文：牧者、芥菜種、腳前的燈、要有光……符號含蓄，唔誇張。
              </p>
            </div>
            <div className="border-t border-gold/40 pt-4">
              <p className="font-display text-pine">舊衣重塑</p>
              <p className="mt-2">
                寄來舊衣／舊袋，金繕繡補或繡經文圖騰——before／after
                最有說服力。
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  ) : null}
                </Link>
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="text-xs text-gold">{product.faith.split("—")[0]}</p>
                  <h2 className="mt-1 font-display text-xl text-pine">
                    <Link href={`/series/${product.slug}`}>{product.name}</Link>
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ash line-clamp-3">
                    {product.description}
                  </p>
                  <p className="mt-4 font-display text-xl text-pine">
                    {product.id === "visible-mend"
                      ? `由 HK$${product.priceHkd}`
                      : `HK$${product.priceHkd}`}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <UpcycleQuote />
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              預約刺繡／試產
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
