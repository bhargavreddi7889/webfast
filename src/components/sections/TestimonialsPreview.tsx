"use client";

import { ExternalLink, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

export function TestimonialsPreview() {
  const cards = (
    <>
      {TESTIMONIALS.map((testimonial) => (
        <div key={testimonial.name} className="w-[min(86vw,380px)] shrink-0 sm:w-[400px]">
          <TestimonialCard testimonial={testimonial} truncate />
        </div>
      ))}
    </>
  );

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-blue-50/50">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#1a73e8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="container-max relative mb-10 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1a73e8]">
            Client Appreciation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm font-medium text-slate-600">5/5 on Google</span>
          </div>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e65100] to-[#dc2626] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-110"
        >
          All Reviews
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="space-y-4 sm:hidden">
        {TESTIMONIALS.slice(0, 3).map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} truncate />
        ))}
      </div>

      <div className="relative hidden sm:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-24" />
        <InfiniteMarquee duration={70}>
          {cards}
        </InfiniteMarquee>
      </div>
    </section>
  );
}
