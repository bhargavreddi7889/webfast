import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Clients } from "@/components/sections/Clients";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Process />
        <TestimonialsPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
