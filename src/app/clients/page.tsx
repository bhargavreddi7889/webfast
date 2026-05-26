import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { Clients } from "@/components/sections/Clients";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Clients",
  description: `Brands that trust ${SITE.name} for IT and digital marketing solutions.`,
};

export default function ClientsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageBanner
          label="Partnerships"
          title="Brands That Trust Us"
          description="We've partnered with businesses across aviation, healthcare, finance, hospitality, and more."
        />
        <Clients showHeader={false} showViewAllLink={false} layout="grid" />
      </main>
      <Footer />
    </>
  );
}
