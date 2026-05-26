"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ContactForm } from "@/components/forms/ContactForm";
import { STATS, WHATSAPP_URL, COMPANY, GET_QUOTE_URL } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-green-50/40 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#1a73e8]/15 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#22c55e]/12 blur-3xl" />
      </div>

      <div className="container-max relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 [&>*]:min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1a73e8]/25 bg-white px-4 py-2 text-sm font-semibold text-[#1a73e8] shadow-sm"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              Trusted IT &amp; Digital Partner Since {COMPANY.established}
            </motion.div>

            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Grow Your Business with{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {COMPANY.shortDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                variant="primary"
                size="lg"
                href={GET_QUOTE_URL}
                className="w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={WHATSAPP_URL}
                external
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-slate-200/80 pt-10 sm:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                >
                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative lg:pl-4"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#1a73e8] via-[#22c55e] to-[#e65100] opacity-90 blur-sm sm:rounded-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-br from-white via-blue-50/90 to-green-50/80 p-4 shadow-2xl shadow-blue-900/10 sm:rounded-3xl sm:p-6 lg:p-8">
              <div className="relative">
                <BrandLogo variant="hero" linked={false} className="mb-4" />
                <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                  Ready To Grow Your{" "}
                  <span className="gradient-text">Digital Presence</span>
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in your details — we&apos;ll respond within 24 hours.
                </p>
                <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-inner sm:p-6">
                  <ContactForm variant="hero" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
