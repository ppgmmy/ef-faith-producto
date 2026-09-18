import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "預約與諮詢",
  description: "預約繕物誌系列冊、織繕試做、訂製禮盒或工作坊。",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container className="grid gap-14 md:grid-cols-[1fr_1.05fr] md:items-start">
          <div>
            <PageHeader
              eyebrow="Contact"
              title="預約系列冊／試做諮詢"
              description="器物系列或織繕構思（刺繡、毛巾、遮袋）都歡迎來信。告訴我們用途、人數與故事。"
            />
            <div className="mt-10 space-y-3 text-sm leading-7 text-ash">
              <p>
                電郵：{" "}
                <a
                  className="text-moss hover:text-pine"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>適合：教會小組、婚禮回禮、社企聯乘、小批量試產。</p>
            </div>
          </div>
          <div className="border border-sage/30 bg-mist/50 p-6 md:p-8">
            <InquiryForm />
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
