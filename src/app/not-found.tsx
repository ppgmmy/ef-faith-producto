import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <SiteShell>
      <Section className="bg-linen pt-20">
        <Container className="max-w-xl text-center">
          <p className="font-latin text-sm tracking-[0.22em] text-gold uppercase">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl text-pine">
            這道金線尚未寫下
          </h1>
          <p className="mt-4 leading-7 text-ash">
            頁面不存在，或連結已變更。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary">
              回首頁
            </Button>
            <Button href="/series" variant="secondary">
              看系列
            </Button>
          </div>
          <p className="mt-8 text-sm text-ash/70">
            或{" "}
            <Link href="/contact" className="text-moss hover:text-pine">
              聯絡繕物誌
            </Link>
          </p>
        </Container>
      </Section>
    </SiteShell>
  );
}
