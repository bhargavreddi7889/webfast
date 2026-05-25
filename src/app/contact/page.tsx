import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PageBanner } from "@/components/ui/PageBanner";
import { Contact } from "@/components/sections/Contact";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name} — phone, email, WhatsApp, and office locations.`,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageBanner
          label="Contact"
          title="Let's Start Your Project"
          description="Reach out for a free consultation. We typically respond within 2 hours."
        />
        <Contact showHeading={false} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
