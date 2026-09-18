import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { processSteps } from "@/data/catalog";

export const metadata: Metadata = {
  title: "工藝",
  description: "從碎裂到金線：拾、繕、誌、託——繕物誌的製作流程。",
};

export default function ProcessPage() {
  return (
    <SiteShell>
      <Section className="bg-mist pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Process"
            title="從碎裂到金線"
            description="每一件繕物誌作品都經過挑選、清潔、修復、祝福與紀錄。織繕構思亦循同一精神：拾回布料、縫補、誌記、託付。"
          />
          <ol className="mt-16 space-y-10">
            {processSteps.map((step, index) => (
              <li
                key={step.id}
                className="grid gap-4 border-t border-sage/40 pt-10 md:grid-cols-[5rem_8rem_1fr]"
              >
                <span className="font-latin text-3xl text-gold/60 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl text-gold">{step.mark}</span>
                <div>
                  <h2 className="font-display text-2xl text-pine">{step.title}</h2>
                  <p className="mt-3 max-w-xl text-base leading-8 text-ash">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-16">
            <Button href="/contact" variant="primary">
              預約工作坊或試做
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
