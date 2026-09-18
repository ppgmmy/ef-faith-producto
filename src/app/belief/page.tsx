import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import {
  Container,
  Eyebrow,
  GoldRule,
  PageHeader,
  Section,
} from "@/components/ui/Section";
import { pillars } from "@/data/catalog";

export const metadata: Metadata = {
  title: "信念",
  description: "繕物誌的兩條金線：環保與信仰——修補、託管、裂縫裡的恩典。",
};

export default function BeliefPage() {
  return (
    <SiteShell>
      <Section className="section-wash pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Belief"
            title="兩條金線：環保，與信仰"
            description="繕物誌相信：大地是託管，不是消耗品；人的破碎也可以被修好。"
          />
          <GoldRule className="mt-14" />
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.id}>
                <h2 className="font-display text-xl tracking-wide text-pine">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-ash">{pillar.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-linen">
        <Container className="max-w-3xl">
          <Eyebrow>Story</Eyebrow>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-pine">
            為什麼叫「繕物誌」？
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-ash">
            <p>
              「繕」是修補；「物」是被託管的創造；「誌」是把故事寫下來。Kintsugi Studio
              指向金繕——用金線擁抱裂縫。
            </p>
            <p>
              由器物到織物：刺繡、毛巾、遮袋，都是把同一信念縫進日常——修而非棄、遮蓋而非浪費、安息而非空轉。
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/series" variant="primary">
              看產品系列
            </Button>
            <Button href="/process" variant="secondary">
              了解工藝流程
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
