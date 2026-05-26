import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { About } from "@/components/sections/About";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} — ISO certified digital marketing & IT company in Delhi NCR with 383+ projects since 2021.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageBanner
          label="About Us"
          title="Your Trusted IT & Digital Partner"
          description={SITE.description}
        />
        <About showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
