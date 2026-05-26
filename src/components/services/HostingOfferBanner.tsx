import {
  Shield,
  Zap,
  Globe,
  Layout,
  Headphones,
  BadgePercent,
  RotateCcw,
  CalendarX,
} from "lucide-react";
import { HOSTING_OFFER_URL } from "@/lib/constants";

const features = [
  { icon: Globe, text: "Free domain and free website migration" },
  { icon: Layout, text: "Use WordPress or any other CMS" },
  { icon: Shield, text: "Fully Managed Web Hosting" },
  { icon: Headphones, text: "24/7 Customer Support" },
];

const guarantees = [
  { icon: RotateCcw, text: "30-day money-back guarantee" },
  { icon: CalendarX, text: "Cancel anytime" },
  { icon: Headphones, text: "24/7 support" },
];

export function HostingOfferBanner() {
  return (
    <section className="relative overflow-hidden border-y border-[#1a73e8]/20 bg-gradient-to-br from-[#0f2744] via-[#1a3a6e] to-[#0f2744] py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#1a73e8]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#22c55e]/10 blur-3xl" />

      <div className="container-max relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-1.5 text-sm font-bold text-amber-300">
              <BadgePercent className="h-4 w-4" />
              Up to 77% off on Web Hosting
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Security. Speed. What your website deserves.
            </h2>
            <ul className="mt-6 space-y-3">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-4 w-4 text-[#22c55e]" />
                  </span>
                  <span className="text-base sm:text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-md shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3 text-amber-300">
              <Zap className="h-8 w-8" />
              <p className="text-lg font-semibold">Premium hosting partner offer</p>
            </div>

            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {guarantees.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-slate-200 sm:text-base">
                  <Icon className="h-4 w-4 shrink-0 text-[#22c55e]" />
                  {text}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-slate-300">You have a 30-day money-back guarantee</p>

            <a
              href={HOSTING_OFFER_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-amber-400 py-4 text-center text-base font-bold uppercase tracking-wide text-slate-900 shadow-lg shadow-amber-400/25 transition hover:bg-amber-300"
            >
              Get Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
