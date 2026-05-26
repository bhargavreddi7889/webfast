"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles, Zap } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, type ServiceSlug } from "@/lib/services-data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { HostingOfferBanner } from "@/components/services/HostingOfferBanner";
import { GET_QUOTE_URL, WHATSAPP_URL } from "@/lib/constants";

interface ServicePageContentProps {
  slug: ServiceSlug;
}

const categoryGradients: Record<string, string> = {
  web: "from-[#1a73e8] via-[#1557b0] to-[#0f2744]",
  marketing: "from-[#e65100] via-[#dc2626] to-[#7f1d1d]",
  other: "from-[#22c55e] via-[#16a34a] to-[#14532d]",
};

export function ServicePageContent({ slug }: ServicePageContentProps) {
  const service = SERVICES[slug];
  const Icon = service.icon;
  const gradient = categoryGradients[service.category] ?? categoryGradients.web;
  const categoryLabel =
    SERVICE_CATEGORIES.find((c) => c.key === service.category)?.label ?? "Services";

  return (
    <>
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${gradient} pt-28 pb-16 text-white sm:pt-32 sm:pb-20`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-black/20 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvZz48L3N2Zz4=')] opacity-60" />
        </div>

        <div className="container-max relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/#services"
              className="mb-5 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm hover:bg-white/20"
            >
              ← All Services
            </Link>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-2xl ring-2 ring-white/30 sm:h-24 sm:w-24`}
              >
                <Icon className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  {categoryLabel}
                </span>
                <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-white/85">
                  {service.shortDescription}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button variant="secondary" size="lg" href="#inquiry" className="w-full sm:w-auto">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    href="/pricing"
                    className="w-full border-white/40 bg-white/10 !text-white hover:bg-white/20 sm:w-auto"
                  >
                    View Packages
                  </Button>
                  <Button variant="whatsapp" size="lg" href={WHATSAPP_URL} external className="w-full sm:w-auto">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {slug === "hosting" && <HostingOfferBanner />}

      <section className="relative bg-gradient-to-b from-blue-50/80 via-white to-slate-50 py-14 sm:py-20">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-xl shadow-blue-500/5 sm:p-8">
                <div className="mb-4 flex items-center gap-2 text-[#1a73e8]">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">Overview</span>
                </div>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  {service.overview}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-green-100/80 bg-gradient-to-br from-white to-green-50/50 p-6 shadow-xl shadow-green-500/5 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900">Why Choose Us</h3>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#22c55e]" />
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f2744] to-slate-900 py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,115,232,0.25),_transparent_60%)]" />
        <div className="container-max relative">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#22c55e]">
              Our Process
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              How We Deliver {service.title}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#1a73e8]/50 hover:bg-white/10">
                  <span className="text-3xl font-black text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-bold">{step.step}</h3>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-50/50 via-white to-blue-50/40 py-14 sm:py-20">
        <div className="container-max max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#e65100]">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.06}>
                <details className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md open:shadow-lg open:ring-2 open:ring-[#1a73e8]/20">
                  <summary className="cursor-pointer list-none px-6 py-4 font-bold text-slate-900 marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="border-t border-slate-100 px-6 pb-4 pt-2 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="inquiry"
        className="relative overflow-hidden bg-gradient-to-br from-[#1a73e8] via-[#1557b0] to-[#22c55e] py-14 sm:py-20"
      >
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
              <p className="mt-4 text-lg text-blue-100">
                Fill out the form and our team will reach out within 24 hours with a customized
                proposal for {service.title}.
              </p>
              <Link
                href={GET_QUOTE_URL}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
              >
                Or visit our quote page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white p-6 shadow-2xl sm:p-8">
              <ContactForm service={service.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
