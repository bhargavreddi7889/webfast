"use client";

import {
  MessageSquare,
  ClipboardList,
  Palette,
  Code,
  Megaphone,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We understand your goals, audience, and challenges.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Strategic roadmap with timelines, KPIs, and budgets.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Wireframes, mockups, and brand-aligned creatives.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Clean, fast, SEO-ready builds with rigorous QA.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Launch campaigns across SEO, PPC, and social.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Optimize, scale, and report on continuous improvement.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          label="Our Process"
          title="How We Deliver Results"
          description="A proven 6-step framework that takes you from idea to measurable growth."
        />

        {/* Desktop: horizontal steps with connector behind icons only */}
        <div className="hidden lg:block">
          <div className="relative">
            <div
              className="absolute left-[4%] right-[4%] top-8 h-0.5 bg-gradient-to-r from-[#1a73e8] via-[#22c55e] to-[#1a73e8]"
              aria-hidden
            />
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-4 ring-white">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a73e8] to-[#22c55e]">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <span className="mt-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1a73e8]">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & tablet: vertical timeline */}
        <div className="space-y-8 lg:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="relative flex gap-5 pl-2">
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-[1.65rem] top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#1a73e8] to-[#22c55e]/40"
                    aria-hidden
                  />
                )}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a73e8] to-[#22c55e] shadow-md">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="pb-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8]">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
