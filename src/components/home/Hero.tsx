"use client";

import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Pulse animation for the background elements
    gsap.to(".bg-shape", {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });

    // Animate the pill
    tl.fromTo(
      ".hero-pill",
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }
    );

    // Staggered reveal for heading lines
    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll(".char");
      tl.fromTo(
        chars,
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 1.2,
          ease: "power4.out",
          transformOrigin: "bottom",
        },
        "-=0.5"
      );
    }

    // Animate paragraph
    tl.fromTo(
      ".hero-desc",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Animate buttons
    tl.fromTo(
      ".hero-btn",
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.8"
    );
  }, { scope: container });

  const headingText = "We craft cinematic digital experiences.";

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden perspective-[1000px]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-brand-onyx">
        <div className="bg-shape absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-violet/30 rounded-[40%_60%_70%_30%] blur-[120px] mix-blend-screen" />
        <div className="bg-shape absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-brand-cyan/20 rounded-[60%_40%_30%_70%] blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="hero-pill inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 opacity-0">
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Award-Winning Digital Agency</span>
        </div>

        <h1
          ref={headingRef}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter text-white max-w-6xl leading-[1.05] mb-8"
        >
          {headingText.split("").map((char, index) => {
            let className = "char inline-block opacity-0";
            if (char === " ") {
              return <span key={index} className="inline-block w-[0.3em]">&nbsp;</span>;
            }
            if (headingText.slice(9, 18).includes(char) && index >= 9 && index < 18) {
              // "cinematic"
              className += " text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan";
            }
            return <span key={index} className={className}>{char}</span>;
          })}
        </h1>

        <p className="hero-desc text-xl md:text-2xl text-gray-400 max-w-3xl mb-14 opacity-0 leading-relaxed font-light">
          Elevating ambitious brands globally through strategic design, innovative technology, and performance-driven marketing.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/work"
            className="hero-btn opacity-0 px-10 py-5 rounded-full bg-white text-brand-onyx font-bold flex items-center space-x-2 hover:bg-brand-violet hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>Explore Our Work</span>
            <ArrowRight size={20} />
          </Link>
          <button className="hero-btn opacity-0 px-10 py-5 rounded-full border border-white/20 text-white font-medium flex items-center space-x-3 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Play size={16} fill="currentColor" />
            </div>
            <span>Play Showreel</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-10 opacity-60">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Scroll</span>
        <div className="w-px h-16 bg-white/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-cyan animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
