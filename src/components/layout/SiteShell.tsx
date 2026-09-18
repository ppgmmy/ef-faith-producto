import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteShell({
  children,
  headerTone = "solid",
}: {
  children: ReactNode;
  headerTone?: "hero" | "solid";
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        跳到主要內容
      </a>
      <SiteHeader tone={headerTone} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
