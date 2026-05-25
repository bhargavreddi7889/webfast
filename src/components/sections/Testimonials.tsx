"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function Testimonials({ showBanner = true }: { showBanner?: boolean }) {
  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {showBanner && (
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-[#dc2626] sm:text-4xl">
              Client Appreciation
            </h2>
          </div>
        )}

        <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-2xl font-bold uppercase tracking-wider text-slate-900">
            Excellent
          </p>
          <div className="mt-3 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="mt-2 text-slate-600">
            Based on <strong>39+ reviews</strong>
          </p>
          <div className="mt-4 flex justify-center">
            <GoogleLogo className="h-8 w-24" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              className="p-5 sm:p-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
