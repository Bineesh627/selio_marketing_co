"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp", "GlobalTech", "Nexus", "Stark Ind.", "Wayne Ent.", "Cyberdyne", "Umbrella Corp", "Massive Dynamic"
];

export function SocialProof() {
  return (
    <section className="py-20 bg-brand-charcoal border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Trusted by global innovators</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, idx) => (
            <span key={idx} className="text-2xl md:text-4xl font-heading font-bold text-white/20 mx-12 transition-colors hover:text-white/50 cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
