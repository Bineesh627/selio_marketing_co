"use client";

import { TiltedCard } from "@/components/animations/TiltedCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  { num: "01", title: "Discovery", desc: "We research your brand, audience, competitors, and goals to uncover opportunities that drive meaningful digital growth." },
  { num: "02", title: "Strategy", desc: "We build a tailored creative and marketing strategy aligned with your business objectives, positioning, and target audience." },
  { num: "03", title: "Creation", desc: "From branding and websites to content and campaigns, we craft high-quality digital experiences designed to engage and convert." },
  { num: "04", title: "Optimization", desc: "Using analytics, SEO insights, and performance tracking, we continuously refine campaigns for maximum impact and scalability." },
  { num: "05", title: "Growth", desc: "Expanding reach and driving sustainable, long-term growth for your business." },
];

export function Process() {
  return (
    <section className="py-32 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              How We Build Digital <span className="text-brand-amber">Growth.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our streamlined creative and marketing process helps brands build stronger identities, improve digital visibility, and achieve measurable business growth.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-[2.75rem] top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <TiltedCard
                  tiltStrength={4}
                  glareEnabled={true}
                  className="relative z-10 flex items-start gap-6 md:gap-10 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-amber/20 transition-colors duration-300"
                >
                  {/* Number badge */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-brand-onyx border-2 border-brand-amber flex items-center justify-center text-lg font-bold text-white shadow-[0_0_24px_rgba(255,196,0,0.2)]">
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 w-full">
                    <h4 className="text-xl font-heading font-bold text-white md:w-36 shrink-0">{step.title}</h4>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </TiltedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
