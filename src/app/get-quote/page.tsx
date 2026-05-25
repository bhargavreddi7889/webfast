import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PageBanner } from "@/components/ui/PageBanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY, SITE, WHATSAPP_URL } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Request a free quote or book a consultation with ${SITE.name}.`,
};

export default function GetQuotePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageBanner
          label="Get Started"
          title="Get a Quote or Book a Consultation"
          description="Tell us about your project — we'll prepare a tailored proposal within 24 hours."
        />
        <section className="section-padding bg-slate-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="grid min-w-0 gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-slate-900">Why reach out?</h2>
                <p className="mt-3 text-slate-600">
                  Whether you need a website, SEO, ads, or full digital strategy — share your
                  goals and we&apos;ll recommend the best path forward.
                </p>
                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1a73e8]" />
                    <div>
                      {COMPANY.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block font-semibold text-slate-900 hover:text-[#1a73e8]"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1a73e8]" />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-semibold text-slate-900 hover:text-[#1a73e8]"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" />
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#25D366] hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e65100]" />
                    <span className="text-slate-700">{COMPANY.address}</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
                  <h2 className="text-xl font-bold text-slate-900">Project inquiry</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    All fields marked * are required.
                  </p>
                  <div className="mt-8">
                    <ContactForm variant="hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
