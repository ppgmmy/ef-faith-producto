import { HomeHero } from "@/components/home/HomeHero";
import {
  HomeBelief,
  HomeInvite,
  HomeSeriesPreview,
} from "@/components/home/HomeSections";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import {
  getEmbroideryProducts,
  getProductsByLine,
  processSteps,
} from "@/data/catalog";

export default function HomePage() {
  const embroidery = getEmbroideryProducts();
  const goldVein = getProductsByLine("gold-vein");
  const wovenMend = getProductsByLine("woven-mend");

  return (
    <SiteShell headerTone="hero">
      <HomeHero />
      <HomeBelief />
      <HomeSeriesPreview
        embroidery={embroidery}
        goldVein={goldVein}
        wovenMend={wovenMend}
      />
      <Section className="bg-mist">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-pine md:text-4xl">
              從構思到一針
            </h2>
            <p className="mt-5 text-base leading-8 text-ash">
              每一件公仔圖騰都經過選稿、打版、試繡與誌記。金繕精神提醒我們修補而非丟棄——但產品主角係圖騰本身。
            </p>
          </div>
          <ol className="space-y-6">
            {processSteps.map((step) => (
              <li key={step.id} className="flex items-baseline gap-5">
                <span className="font-display text-2xl text-gold">{step.mark}</span>
                <span className="leading-7 text-ash">
                  <span className="font-display text-pine">{step.title}</span>
                  {" — "}
                  {step.body}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <HomeInvite />
    </SiteShell>
  );
}
