import { HomeHero } from "@/components/home/HomeHero";
import {
  HomeBelief,
  HomeInvite,
  HomeSeriesPreview,
} from "@/components/home/HomeSections";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { getProductsByLine, processSteps } from "@/data/catalog";

export default function HomePage() {
  const goldVein = getProductsByLine("gold-vein");
  const wovenMend = getProductsByLine("woven-mend");

  return (
    <SiteShell headerTone="hero">
      <HomeHero />
      <HomeBelief />
      <HomeSeriesPreview goldVein={goldVein} wovenMend={wovenMend} />
      <Section className="bg-mist">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-3 font-display text-3xl tracking-wide text-pine md:text-4xl">
              從碎裂到金線
            </h2>
            <p className="mt-5 text-base leading-8 text-ash">
              每一件繕物誌作品都經過挑選、清潔、修復、祝福與紀錄。我們不追求「看起來全新」，而是誠實地留下修復痕跡。
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
