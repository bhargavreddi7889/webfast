import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PageBanner } from "@/components/ui/PageBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Client reviews and appreciation for ${SITE.name}.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageBanner
          label="Client Appreciation"
          title="What Our Clients Say"
          description="Real Google reviews from businesses we've helped grow across India."
        />
        <Testimonials showBanner={false} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
