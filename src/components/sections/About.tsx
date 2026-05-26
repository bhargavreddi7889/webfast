"use client";

import { Target, Eye, Lightbulb, Users, Rocket, Shield, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/constants";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge technology and creative strategies tailored to your business goals.",
    color: "from-blue-500 to-[#1a73e8]",
    bg: "from-blue-50 to-white border-blue-100",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team — aligned goals, shared wins.",
    color: "from-[#22c55e] to-emerald-600",
    bg: "from-green-50 to-white border-green-100",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent reporting, honest recommendations, and client-first decisions.",
    color: "from-slate-600 to-slate-800",
    bg: "from-slate-50 to-white border-slate-200",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Premium quality in every website, campaign, and marketing solution we deliver.",
    color: "from-[#e65100] to-[#dc2626]",
    bg: "from-orange-50 to-white border-orange-100",
  },
];

export function About({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-green-50/60"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#1a73e8]/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#22c55e]/10 blur-3xl" />
      </div>

      <div className="section-padding relative">
        <div className="container-max">
          {showHeading && (
            <SectionHeading
              label="About Us"
              title="Your Trusted IT & Digital Partner in Delhi NCR"
              description={COMPANY.aboutParagraphs[0]}
            />
          )}

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <Reveal className="lg:col-span-2">
              <div className="rounded-3xl border border-white/80 bg-gradient-to-br from-white via-blue-50/30 to-white p-6 shadow-xl shadow-blue-900/5 sm:p-8 lg:p-10">
                <div className="space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                  {COMPANY.aboutParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
                    <Award className="h-5 w-5 text-[#1a73e8]" />
                    ISO Certified Company
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
                    <Rocket className="h-5 w-5 text-[#22c55e]" />
                    383+ Projects Completed
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
                    Est. {COMPANY.established}
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={0.05}>
                <div className="h-full rounded-2xl border border-blue-200/80 bg-gradient-to-br from-[#1a73e8]/10 via-white to-blue-50 p-6 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white shadow-lg">
                    <Target className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">Mission</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{COMPANY.mission}</p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="h-full rounded-2xl border border-green-200/80 bg-gradient-to-br from-[#22c55e]/10 via-white to-green-50 p-6 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#22c55e] to-emerald-600 text-white shadow-lg">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">Vision</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{COMPANY.vision}</p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.05}>
                <div
                  className={`group h-full rounded-2xl border bg-gradient-to-br ${item.bg} p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
