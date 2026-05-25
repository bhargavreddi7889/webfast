"use client";

import { Target, Eye, Lightbulb, Users, Rocket, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY } from "@/lib/constants";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge technology and creative strategies tailored to your business goals.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team — aligned goals, shared wins.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent reporting, honest recommendations, and client-first decisions.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Premium quality in every website, campaign, and marketing solution we deliver.",
  },
];

export function About({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {showHeading && (
          <SectionHeading
            label="About Us"
            title="Your Trusted IT & Digital Partner"
            description={COMPANY.about}
          />
        )}

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white lg:p-10">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-green/20 blur-2xl" />
              <h3 className="relative text-2xl font-bold">Who We Are</h3>
              <p className="relative mt-4 leading-relaxed text-slate-300">
                {COMPANY.about}
              </p>
              <p className="relative mt-4 leading-relaxed text-slate-300">
                We revolutionize the way businesses operate by providing tailored IT solutions
                that drive efficiency, enhance productivity, and foster innovation.
              </p>
              <ul className="relative mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  Established in {COMPANY.established}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  Branches: {COMPANY.branches.join(" · ")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  ISO: {COMPANY.iso}
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-brand-blue/20 bg-blue-50/50 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Mission</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{COMPANY.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-brand-green/20 bg-green-50/50 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900">Vision</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{COMPANY.vision}</p>
              </div>
            </Reveal>
            {values.map((item, i) => (
              <Reveal key={item.title} delay={0.15 + i * 0.05}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-brand-blue/30 hover:bg-white hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-700 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
