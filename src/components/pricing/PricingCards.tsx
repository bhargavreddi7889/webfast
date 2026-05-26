"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import {
  PRICING_PACKAGES,
  formatInr,
  type PricingCategory,
  type PricingPackage,
} from "@/lib/pricing-data";
import { PaymentFlowModal } from "@/components/pricing/PaymentFlowModal";

const categoryMeta: Record<
  PricingCategory,
  { label: string; gradient: string; accent: string; glow: string }
> = {
  web: {
    label: "Website Packages",
    gradient: "from-[#1a73e8] to-[#1557b0]",
    accent: "ring-[#1a73e8]/40",
    glow: "hover:shadow-[#1a73e8]/25",
  },
  marketing: {
    label: "Marketing Packages",
    gradient: "from-[#e65100] to-[#dc2626]",
    accent: "ring-[#e65100]/40",
    glow: "hover:shadow-orange-500/25",
  },
  software: {
    label: "Software Packages",
    gradient: "from-[#7c3aed] to-[#4f46e5]",
    accent: "ring-violet-500/40",
    glow: "hover:shadow-violet-500/25",
  },
};

function PackageCard({
  pkg,
  index,
  onPayNow,
}: {
  pkg: PricingPackage;
  index: number;
  onPayNow: (pkg: PricingPackage) => void;
}) {
  const meta = categoryMeta[pkg.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-lg transition-shadow duration-500 hover:z-10 hover:shadow-2xl ${meta.glow} ${
        pkg.popular ? `ring-2 ${meta.accent}` : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-[#e65100] px-3 py-1 text-xs font-bold text-white shadow-lg">
          <Sparkles className="h-3 w-3" />
          Best Value
        </div>
      )}

      <div className={`relative bg-gradient-to-br ${meta.gradient} px-6 py-8 text-white`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_50%)]" />
        <h3 className="relative pr-14 text-lg font-bold leading-snug sm:text-xl">{pkg.name}</h3>
        <div className="relative mt-4 flex flex-wrap items-end gap-2">
          <span className="text-3xl font-black sm:text-4xl">{formatInr(pkg.priceInr)}</span>
          {pkg.priceLabel && (
            <span className="pb-1 text-sm font-medium text-white/80">{pkg.priceLabel}</span>
          )}
        </div>
        {pkg.priceUsd && (
          <p className="relative mt-1 text-sm text-white/75">${pkg.priceUsd} USD</p>
        )}
      </div>

      <div className="flex flex-1 flex-col bg-gradient-to-b from-slate-50 to-white p-6">
        <ul className="flex-1 space-y-2.5">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22c55e]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onPayNow(pkg)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-[#e65100] to-[#dc2626] py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/35 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/45"
        >
          Pay Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
}

export function PricingCards() {
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories: PricingCategory[] = ["web", "marketing", "software"];

  function openPayment(pkg: PricingPackage) {
    setSelectedPackage(pkg);
    setModalOpen(true);
  }

  function closePayment() {
    setModalOpen(false);
  }

  return (
    <>
      <div className="space-y-20">
        {categories.map((cat) => {
          const packages = PRICING_PACKAGES.filter((p) => p.category === cat);
          const meta = categoryMeta[cat];
          return (
            <div key={cat}>
              <div className="mb-10 text-center">
                <span
                  className={`inline-block rounded-full bg-gradient-to-r ${meta.gradient} px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-md`}
                >
                  {meta.label}
                </span>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {packages.map((pkg, i) => (
                  <PackageCard key={pkg.id} pkg={pkg} index={i} onPayNow={openPayment} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <PaymentFlowModal
        pkg={selectedPackage}
        open={modalOpen && !!selectedPackage}
        onClose={closePayment}
      />
    </>
  );
}
