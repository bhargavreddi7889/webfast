"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HOME_SERVICES } from "@/lib/services-data";

export function Services() {
  return (
    <section
      id="services"
      className="section-padding scroll-mt-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-green-50/20"
    >
      <div className="container-max">
        <SectionHeading
          label="Our Services"
          title="Everything You Need to Dominate Digital"
          description="From SEO to full-stack development — comprehensive solutions designed to grow your revenue."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-red"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-blue-500/5 transition-transform group-hover:scale-150" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
