"use client";

import {
  Award,
  Smile,
  Users,
  Headphones,
  TrendingUp,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const features = [
  {
    icon: Award,
    title: "ISO Certified",
    description: "Quality-assured processes and international standards.",
    stat: null,
  },
  {
    icon: Smile,
    title: "100% Client Satisfaction",
    description: "Our clients stay because we deliver — every single time.",
    stat: 100,
    suffix: "%",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "40+ specialists across marketing, design, and development.",
    stat: 40,
    suffix: "+",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it most.",
    stat: null,
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "383+ projects with measurable ROI and growth metrics.",
    stat: 383,
    suffix: "+",
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Deep experience across 15+ industries and verticals.",
    stat: 15,
    suffix: "+",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-max">
        <SectionHeading
          label="Why Choose Us"
          title="The Partner Your Business Deserves"
          description="We don't just deliver services — we deliver outcomes that move the needle."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur transition-all hover:border-cyan-500/50 hover:bg-slate-800">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                {feature.stat !== null && (
                  <p className="mb-2 text-3xl font-bold text-cyan-400">
                    <AnimatedCounter value={feature.stat} suffix={feature.suffix ?? ""} />
                  </p>
                )}
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
