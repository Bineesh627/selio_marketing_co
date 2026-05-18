"use client";

import { motion } from "framer-motion";
import { TiltedCard } from "@/components/animations/TiltedCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  { num: "01", title: "Discovery", desc: "We dive deep into your brand, audience, and goals to uncover the core challenge." },
  { num: "02", title: "Strategy", desc: "Crafting a bespoke blueprint tailored to your unique market positioning and objectives." },
  { num: "03", title: "Execution", desc: "Our award-winning team brings the strategy to life with pixel-perfect precision." },
  { num: "04", title: "Optimization", desc: "Continuous testing and refinement to ensure maximum performance and ROI." },
  { num: "05", title: "Scale", desc: "Expanding reach and driving sustainable, long-term growth for your business." },
];

export function Process() {
  return (
    <section className="py-32 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Our <span className="text-brand-amber">Process.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven digital marketing methodology designed to rapidly acquire customers and scale your business.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <TiltedCard
                  tiltStrength={8}
                  glareEnabled={true}
                  className="relative z-10 flex flex-col items-center text-center p-4 rounded-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-onyx border-2 border-brand-amber flex items-center justify-center text-xl font-bold text-white mb-6 shadow-[0_0_30px_rgba(255,196,0,0.2)]">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </TiltedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
