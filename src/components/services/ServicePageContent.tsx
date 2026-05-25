"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SERVICES, type ServiceSlug } from "@/lib/services-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { WHATSAPP_URL } from "@/lib/constants";

interface ServicePageContentProps {
  slug: ServiceSlug;
}

export function ServicePageContent({ slug }: ServicePageContentProps) {
  const service = SERVICES[slug];
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/#services"
              className="mb-6 inline-flex items-center gap-1 text-sm text-blue-300 hover:text-white"
            >
              ← All Services
            </Link>
            <div className="flex items-start gap-6">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green sm:flex">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold sm:text-5xl">{service.title}</h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-300">
                  {service.shortDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" href="#inquiry">
                    Get Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="whatsapp" href={WHATSAPP_URL} external>
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.overview}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="text-xl font-bold text-slate-900">Key Benefits</h3>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading label="Our Process" title={`How We Deliver ${service.title}`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-blue-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900">{step.step}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.08}>
                <details className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 open:bg-white open:shadow-sm">
                  <summary className="cursor-pointer list-none font-bold text-slate-900 marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-slate-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="section-padding bg-slate-900">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-4 text-slate-300">
                Fill out the form and our team will reach out within 24 hours with a
                customized proposal.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              <ContactForm service={service.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
