"use client";

import { useRef } from "react";
import { ArrowUpRight, PenTool, Share2, Search, Video, Code } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Brand Strategy & Identity",
    description: "Distinctive brand identities, visual systems, and creative direction designed to help businesses build recognition, trust, and long-term market presence.",
    icon: <Code size={32} />,
    color: "group-hover:text-brand-violet",
    spotlightColor: "rgba(139, 92, 246, 0.18)",
  },
  {
    title: "Website Development",
    description: "Custom website design and development focused on performance, user experience, SEO optimisation, and conversion-driven digital experiences for modern brands.",
    icon: <Share2 size={32} />,
    color: "group-hover:text-brand-cyan",
    spotlightColor: "rgba(0, 229, 255, 0.15)",
  },
  {
    title: "SEO & Growth Optimisation",
    description: "Data-driven SEO strategies, technical optimisation, and content planning that improve search visibility, increase organic traffic, and strengthen online authority.",
    icon: <Search size={32} />,
    color: "group-hover:text-brand-amber",
    spotlightColor: "rgba(255, 196, 0, 0.15)",
  },
  {
    title: "Performance Marketing",
    description: "Strategic paid advertising and digital marketing campaigns designed to generate qualified leads, improve engagement, and maximise measurable business growth.",
    icon: <PenTool size={32} />,
    color: "group-hover:text-brand-violet",
    spotlightColor: "rgba(139, 92, 246, 0.18)",
  },
  {
    title: "Video Production",
    description: "Creative video production, cinematic storytelling, and motion-driven content crafted to capture attention, increase engagement, and elevate brand communication.",
    icon: <Video size={32} />,
    color: "group-hover:text-brand-cyan",
    spotlightColor: "rgba(0, 229, 255, 0.15)",
  },
];

export function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-brand-onyx relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="service-header mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Strategic Digital Solutions <br />for <span className="text-brand-violet">Business Growth.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
            We provide an elite suite of digital services designed to scale your business, acquire customers, and boost your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.08}
              direction="up"
              className={`${index === 0 || index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <SpotlightCard
                spotlightColor={service.spotlightColor}
                className={`group relative p-10 md:p-14 rounded-[2.5rem] hover:bg-white/10 transition-colors overflow-hidden h-full`}
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
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
