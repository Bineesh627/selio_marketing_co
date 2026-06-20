"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Magnet } from "@/components/animations/Magnet";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurText } from "@/components/animations/BlurText";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export function CTA() {
  return (
    <section className="py-32 bg-brand-charcoal relative overflow-hidden">
      <NoiseOverlay />

      {/* Abstract circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-violet/20 rounded-full blur-[150px] mix-blend-screen translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[120px] mix-blend-screen -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <BlurText
              text="Ready to Elevate your brand?"
              delay={20}
              animateBy="letters"
              className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tighter justify-center"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              We help ambitious brands create impactful digital experiences through creative strategy, performance marketing, branding, and modern web solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <Magnet padding={40} magnetStrength={0.3} className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-10 py-5 rounded-full bg-white text-brand-onyx font-bold text-lg hover:bg-brand-violet hover:text-white transition-colors group"
              >
                <span>Start a Project</span>
                <span className="p-2 bg-brand-onyx text-white rounded-full group-hover:bg-white group-hover:text-brand-violet transition-colors">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </Magnet>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
