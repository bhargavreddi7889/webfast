import Link from "next/link";
import { Share2 } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { PaymentQrDisplay } from "@/components/payment/PaymentQrDisplay";
import { COMPANY, SITE, SOCIAL, WHATSAPP_URL, GET_QUOTE_URL } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
  { label: "Get a Quote", href: GET_QUOTE_URL },
];

const serviceLinks = [
  { label: "SEO", href: "/services/seo" },
  { label: "PPC", href: "/services/ppc" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Hosting", href: "/services/hosting" },
  { label: "HRMS", href: "/services/hrms" },
  { label: "Social Media", href: "/services/social-media-marketing" },
  { label: "Branding", href: "/services/branding" },
];

const socialLabels: Record<string, string> = {
  linkedin: "in",
  instagram: "ig",
  facebook: "fb",
  twitter: "x",
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-max section-padding pb-10">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo variant="footer" showText={false} className="brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xs font-bold uppercase text-slate-400 transition-colors hover:bg-brand-red hover:text-white"
                >
                  {socialLabels[s.icon] ?? <Share2 className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-orange">
                  {COMPANY.email}
                </a>
              </li>
              {COMPANY.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-brand-orange"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>{COMPANY.address}</li>
              <li>Branches: {COMPANY.branches.join(", ")}</li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25D366] hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-1 text-xs text-slate-500">
              <p>GSTIN: {COMPANY.gstin}</p>
              <p>UDYAM: {COMPANY.udyam}</p>
              <p>ISO: {COMPANY.iso}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Pay via UPI
              </h3>
              <p className="mt-2 max-w-md text-sm text-slate-400">
                Scan our QR code to pay for any package. After payment, use{" "}
                <Link href="/pricing" className="font-medium text-brand-orange hover:underline">
                  Pay Now
                </Link>{" "}
                on the pricing page to submit your UTR.
              </p>
            </div>
            <PaymentQrDisplay size="sm" showCaption={false} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
