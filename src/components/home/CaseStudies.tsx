"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText } from "@/components/animations/BlurText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const works = [
  {
    id: 1,
    title: "Rensol",
    category: "ERP System Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Corepro Techno LLP",
    category: "Digital Marketing & SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Glamtrinkets",
    category: "E-Commerce Development",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Fusintech",
    category: "Corporate Website",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  }
];

export function CaseStudies() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax and reveal for each case study
    const items = gsap.utils.toArray<HTMLElement>(".cs-item");
    
    items.forEach((item) => {
      const img = item.querySelector(".cs-img");
      
      // Reveal entire item
      gsap.fromTo(
        item,
        { opacity: 0, y: 150 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );

      // Image Parallax
      gsap.fromTo(
        img,
        { y: "-10%" },
        {
          y: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-brand-onyx overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32">
          <div>
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-white mb-6 flex flex-wrap leading-tight">
              <BlurText 
                text="Selected Projects &" 
                animateBy="letters" 
                delay={20} 
                className="inline-flex mr-4"
              />
              <span className="text-brand-cyan">
                <BlurText 
                  text="Creative Work." 
                  animateBy="letters" 
                  delay={20} 
                  className="inline-flex"
                />
              </span>
            </h2>
            <div className="mt-6">
              <BlurText
                text="From ambitious startups to growing brands, we create digital experiences that combine creativity, strategy, and performance."
                animateBy="words"
                delay={35}
                className="text-xl md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed"
              />
            </div>
          </div>
          <Link href="/work" className="mt-8 md:mt-0 px-10 py-5 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-brand-onyx transition-all duration-300 hover:scale-105">
            View All Projects
          </Link>
        </div>

        <div className="space-y-24 md:space-y-40">
          {works.map((work, index) => (
            <div
              key={work.id}
              className={`cs-item group relative flex flex-col md:flex-row items-center gap-10 md:gap-24`}
            >
              <div className={`w-full md:w-[65%] overflow-hidden rounded-[2.5rem] ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-white/5">
                  <div
                    className="cs-img absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 scale-105"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                  <div className="absolute inset-0 bg-brand-onyx/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              
              <div className={`cs-text w-full md:w-[35%] flex flex-col ${index % 2 !== 0 ? 'md:order-1 items-end text-right' : 'items-start'}`}>
                <p className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-6">
                  {work.category}
                </p>
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-10 group-hover:text-brand-violet transition-colors">
                  {work.title}
                </h3>
                <Link
                  href={`/work/${work.id}`}
                  className="inline-flex items-center space-x-3 text-white font-bold uppercase tracking-wider group/btn"
                >
                  <span className="relative overflow-hidden text-lg">
                    <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">View Case Study</span>
                    <span className="absolute inset-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-brand-violet">View Case Study</span>
                  </span>
                  <span className="p-4 rounded-full bg-white/10 group-hover/btn:bg-brand-violet group-hover/btn:text-white transition-colors duration-300">
                    <ArrowUpRight size={24} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
