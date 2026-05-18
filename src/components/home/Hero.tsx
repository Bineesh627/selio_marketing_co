"use client";

import { useRef } from "react";
import { ArrowRight, Code, Rocket } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import LiquidEther from "@/components/ui/LiquidEther/LiquidEther";
import { Magnet } from "@/components/animations/Magnet";
import { BlurText } from "@/components/animations/BlurText";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate the pill
    tl.fromTo(
      ".hero-pill",
      { opacity: 0, y: -30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.2)" }
    );

    // Animate paragraph
    tl.fromTo(
      ".hero-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.3"
    );

    // Animate buttons
    tl.fromTo(
      ".hero-btn",
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Color & Noise Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-onyx">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay pointer-events-none z-10"></div>
      </div>

      {/* LiquidEther Component Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden mix-blend-screen opacity-60">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* Hero Pill */}
        <div className="hero-pill inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-brand-violet/30 bg-brand-violet/10 backdrop-blur-md mb-8 opacity-0">
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
          <span className="text-sm font-semibold tracking-wide text-brand-cyan uppercase">Premium Web Development Agency</span>
        </div>

        {/* Main Heading — BlurText for cinematic word-by-word entrance */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[6rem] font-heading font-bold tracking-tighter text-white max-w-5xl leading-[1.05] mb-8 z-10">
          <BlurText
            text="Building Elite Web Experiences & Digital Growth"
            delay={70}
            className="justify-center"
          />
        </h1>

        {/* Description */}
        <p className="hero-desc text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 opacity-0 leading-relaxed font-light">
          We build high-performance <span className="text-white font-medium">custom websites</span> and deploy strategic <span className="text-white font-medium">digital marketing</span> campaigns to scale your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
          <Magnet padding={30} magnetStrength={0.2}>
            <Link
              href="/services"
              className="hero-btn opacity-0 group relative px-8 py-4 rounded-full bg-white text-brand-onyx font-bold flex items-center space-x-3 hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-violet to-brand-cyan translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
              <Code size={20} className="relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Start a Project</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnet>

          <Magnet padding={30} magnetStrength={0.2}>
            <Link
              href="/work"
              className="hero-btn opacity-0 px-8 py-4 rounded-full border border-white/20 text-white font-medium flex items-center space-x-3 hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              <Rocket size={20} className="text-brand-cyan" />
              <span>View Our Portfolio</span>
            </Link>
          </Magnet>
        </div>

      </div>
    </section>
  );
}
