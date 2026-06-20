"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Rocket } from "lucide-react";
import Link from "next/link";
import { Magnet } from "@/components/animations/Magnet";
import { BlurText } from "@/components/animations/BlurText";
import { InteractiveHeroBackground } from "@/components/animations/InteractiveHeroBackground";

import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    delay,
  },
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-onyx">
      {/* Premium interactive WebGL-style fluid gradient and warp grid background */}
      <InteractiveHeroBackground />

      {/* Reusable Noise overlay */}
      <NoiseOverlay opacity="opacity-[0.08]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Badge pill */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-brand-violet/30 bg-brand-violet/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
          <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">
            CREATIVE BRANDING &amp; DIGITAL AGENCY
          </span>
        </motion.div>

        {/* Heading — BlurText handles its own reveal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] font-heading font-bold tracking-tighter text-white max-w-5xl leading-[1.05] mb-8 z-10">
          <BlurText
            text="Crafting Bold Brands, Digital Experiences & Creative Growth"
            delay={20}
            animateBy="letters"
            className="justify-center"
            startOnMount
          />
        </h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.55)}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed font-light"
        >
          Combining creativity, strategy, and digital innovation, we deliver
          branding, websites, marketing campaigns, and visual experiences that
          drive meaningful business growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
        >
          <Magnet padding={30} magnetStrength={0.2}>
            <Link
              href="/services"
              className="group relative px-8 py-4 rounded-full bg-white text-brand-onyx font-bold flex items-center space-x-3 hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet to-brand-cyan translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <Code
                size={20}
                className="relative z-10 group-hover:animate-pulse"
              />
              <span className="relative z-10">Build Your Brand</span>
              <ArrowRight
                size={20}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={0.2}>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium flex items-center space-x-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <Rocket size={20} className="text-brand-cyan" />
              <span>View Portfolio</span>
            </Link>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
}
