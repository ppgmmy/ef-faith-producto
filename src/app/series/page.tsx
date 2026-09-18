import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, PageHeader, Section } from "@/components/ui/Section";
import { getProductsByLine } from "@/data/catalog";

export const metadata: Metadata = {
  title: "產品系列",
  description:
    "繕物誌金線器物系列，以及刺繡、毛巾、遮袋等織繕日常初步構思。",
};

export default function SeriesPage() {
  const goldVein = getProductsByLine("gold-vein");
  const wovenMend = getProductsByLine("woven-mend");

  return (
    <SiteShell>
      <Section className="bg-pine-deep pt-16 text-linen md:pt-20">
        <Container>
          <PageHeader
            tone="dark"
            eyebrow="Collection"
            title="產品系列"
            description="器物修復與織繕日常兩條線：前者較成熟，後者為刺繡、毛巾、遮袋等初步構思，歡迎一起試做。"
          />

          <div className="mt-16">
            <Eyebrow className="text-gold-soft">金線器物</Eyebrow>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              修復 · 安息 · 託管
            </h2>
            <div className="mt-8">
              {goldVein.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-moss/40 pt-16">
            <Eyebrow className="text-gold-soft">織繕日常 · 初步構思</Eyebrow>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              刺繡 · 毛巾 · 遮袋
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sage">
              把金繕精神縫進布料：可見的修補、可重用的遮蓋、可觸摸的安息。現階段標示為「初步構思」，可小批量試版或聯乘。
            </p>
            <div className="mt-8">
              {wovenMend.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="gold">
              預約系列冊／試做諮詢
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
