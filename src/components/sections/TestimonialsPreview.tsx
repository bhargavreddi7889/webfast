"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  FEATURED_TESTIMONIAL_COUNT,
  TESTIMONIALS,
} from "@/lib/testimonials-data";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export function TestimonialsPreview() {
  const featured = TESTIMONIALS.slice(0, FEATURED_TESTIMONIAL_COUNT);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a73e8]">
              Client Appreciation
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 font-semibold text-[#1a73e8] hover:text-[#1557b0]"
          >
            All reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} truncate />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
