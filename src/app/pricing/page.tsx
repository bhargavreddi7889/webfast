import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { PricingCards } from "@/components/pricing/PricingCards";
import { SITE } from "@/lib/constants";
import { Shield, Zap, QrCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Affordable website, marketing & software packages from ${SITE.name}. Pay securely via UPI QR.`,
};

const highlights = [
  { icon: QrCode, text: "Pay via UPI QR" },
  { icon: Shield, text: "Quick payment verification" },
  { icon: Zap, text: "Fast project kickoff" },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageBanner
          label="Pricing"
          title="Choose Your Perfect Package"
          description="Premium website, marketing & software plans — pay via UPI and we’ll verify your order quickly."
        />

        <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#0f2744] via-[#1a3a6e] to-[#0f2744] py-8 text-white">
          <div className="container-max flex flex-wrap items-center justify-center gap-8">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-blue-100">
                <Icon className="h-5 w-5 text-amber-400" />
                {text}
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,115,232,0.08),_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(230,81,0,0.06),_transparent_50%)]" />
          <div className="container-max relative">
            <PricingCards />
            <p className="mt-16 text-center text-sm text-slate-500">
              All prices in INR · 30-day support on select plans · Need a custom quote?{" "}
              <a href="/get-quote" className="font-semibold text-[#1a73e8] hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
