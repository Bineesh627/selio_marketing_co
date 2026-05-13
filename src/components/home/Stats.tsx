"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: "250+", label: "Clients Served" },
  { value: "400%", label: "Avg. ROI Delivered" },
  { value: "1.2k", label: "Campaigns Managed" },
  { value: "$50M+", label: "Revenue Generated" },
];

export function Stats() {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
                {stat.value}
              </h4>
              <p className="text-sm md:text-base text-brand-violet uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
