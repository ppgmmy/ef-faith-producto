import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, GoldRule, Section } from "@/components/ui/Section";
import { pillars } from "@/data/catalog";
import type { Product } from "@/types";

export function HomeBelief({ items = pillars }: { items?: typeof pillars }) {
  return (
    <Section id="belief-preview" className="section-wash">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Belief</Eyebrow>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-pine md:text-4xl">
            兩條金線：環保，與信仰
          </h2>
          <p className="mt-5 text-base leading-8 text-ash md:text-lg">
            繕物誌相信：大地是託管，不是消耗品；人的破碎也可以被修好。我們把金繕精神帶進日常器物——少製造新垃圾，多述說恩典如何填滿裂縫。
          </p>
        </div>
        <GoldRule className="mt-14" />
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {items.map((pillar) => (
            <article key={pillar.id}>
              <h3 className="font-display text-xl tracking-wide text-pine">
                {pillar.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-ash">{pillar.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/belief"
            className="text-sm tracking-wide text-moss underline-offset-4 hover:text-pine hover:underline"
          >
            閱讀完整信念 →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function HomeSeriesPreview({
  goldVein,
  wovenMend,
}: {
  goldVein: Product[];
  wovenMend: Product[];
}) {
  return (
    <>
      <Section className="bg-pine-deep text-linen">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow className="text-gold-soft">Collection</Eyebrow>
              <h2 className="mt-3 font-display text-3xl tracking-wide md:text-4xl">
                「金線」器物系列
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-sage md:text-right">
              修復、安息、託管與重生——核心器物與體驗。
            </p>
          </div>
          <div className="mt-10">
            {goldVein.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/series" variant="gold">
              看完整系列
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-pine text-linen">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow className="text-gold-soft">Concept</Eyebrow>
              <h2 className="mt-3 font-display text-3xl tracking-wide md:text-4xl">
                「織繕」日常構思
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-sage md:text-right">
              刺繡、毛巾、遮袋——把金線縫進日常，現為初步構思。
            </p>
          </div>
          <div className="mt-10">
            {wovenMend.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="gold">
              想一起試做？
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export function HomeInvite() {
  return (
    <Section className="relative overflow-hidden bg-linen">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative max-w-3xl text-center">
        <Eyebrow>Begin</Eyebrow>
        <h2 className="mt-4 font-display text-3xl tracking-wide text-pine md:text-4xl">
          想一起設計下一道金線？
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ash">
          繕物誌可為教會、社企、婚禮與小組訂製系列禮盒，亦可小批量試做刺繡、毛巾、遮袋等織繕構思。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="primary">
            預約／諮詢
          </Button>
          <Button href="/series" variant="secondary">
            再看一次系列
          </Button>
        </div>
      </Container>
    </Section>
  );
}
