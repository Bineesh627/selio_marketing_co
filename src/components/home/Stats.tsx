"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stats = [
  { value: 250, suffix: "+", label: "Clients Served" },
  { value: 400, suffix: "%", label: "Avg. ROI Delivered" },
  { value: 1200, suffix: "+", label: "Campaigns Managed" },
  { value: 50, prefix: "$", suffix: "M+", label: "Revenue Generated" },
];

export function Stats() {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="scale">
              <h4 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
                <CountUp
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </h4>
              <p className="text-sm md:text-base text-brand-violet uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
