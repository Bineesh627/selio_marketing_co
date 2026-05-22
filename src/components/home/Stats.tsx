"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const stats = [
  { value: 120, suffix: "+", label: "Brands Collaborated" },
  { value: 300, suffix: "%", label: "Average Engagement Growth" },
  { value: 500, suffix: "+", label: "Campaigns Delivered" },
  { value: 15, suffix: "M+", label: "Reach Generated" },
];

export function Stats() {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden border-y border-white/5">
      <NoiseOverlay />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="scale">
              <h4 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
                <CountUp
                  to={stat.value}
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
