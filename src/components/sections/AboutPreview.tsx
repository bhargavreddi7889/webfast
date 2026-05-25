"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a73e8]">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Your Trusted IT &amp; Digital Partner
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {COMPANY.shortDescription}
            </p>
            <Button variant="outline" href="/about" className="mt-8">
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
              <Target className="h-8 w-8 text-[#1a73e8]" />
              <h3 className="mt-4 font-bold text-slate-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-4">
                {COMPANY.mission}
              </p>
            </div>
            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6">
              <Eye className="h-8 w-8 text-[#22c55e]" />
              <h3 className="mt-4 font-bold text-slate-900">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-4">
                {COMPANY.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
