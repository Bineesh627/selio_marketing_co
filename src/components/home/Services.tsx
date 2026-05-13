"use client";

import { useRef } from "react";
import { ArrowUpRight, PenTool, Share2, Search, Video, Code } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Branding & Creative Design",
    description: "Crafting memorable identities that resonate and stand out in the digital noise.",
    icon: <PenTool size={32} />,
    color: "group-hover:text-brand-violet",
  },
  {
    title: "Social Media Marketing",
    description: "Data-driven social strategies to grow your audience and build community.",
    icon: <Share2 size={32} />,
    color: "group-hover:text-brand-cyan",
  },
  {
    title: "SEO / GEO / AEO",
    description: "Dominating search, geographic, and AI-engine results with deep technical optimization.",
    icon: <Search size={32} />,
    color: "group-hover:text-brand-amber",
  },
  {
    title: "Video Production",
    description: "Cinematic visual storytelling that captivates and converts at scale.",
    icon: <Video size={32} />,
    color: "group-hover:text-brand-violet",
  },
  {
    title: "Website Development",
    description: "High-performance, award-winning web experiences built for enterprise scale.",
    icon: <Code size={32} />,
    color: "group-hover:text-brand-cyan",
  },
];

export function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Heading reveal
    gsap.fromTo(
      ".service-header",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".service-header",
          start: "top 80%",
        },
      }
    );

    // Cards stagger
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 150, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-brand-onyx relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="service-header mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Expertise that <br /> drives <span className="text-brand-violet">results.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            We provide an end-to-end suite of digital services designed to scale your business to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative p-10 md:p-14 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden ${index === 0 || index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight size={40} className="text-white" />
              </div>
              
              <div className={`mb-10 text-white/50 transition-colors duration-500 ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-heading font-bold text-white mb-6">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                {service.description}
              </p>
              
              <Link href="/services" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                Explore Service <span className="ml-2 w-12 h-[2px] bg-brand-violet"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
