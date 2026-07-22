"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurText } from "@/components/animations/BlurText";
import { works } from "@/data/works";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
                text="Featured Works &" 
                animateBy="letters" 
                delay={20} 
                className="inline-flex mr-4"
              />
              <span className="text-brand-cyan">
                <BlurText 
                  text="Case Studies." 
                  animateBy="letters" 
                  delay={20} 
                  className="inline-flex"
                />
              </span>
            </h2>
            <div className="mt-6">
              <BlurText
                text="Explore our latest web design and e-commerce flagship projects crafted for industry leaders."
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
              <div className={`w-full md:w-[60%] overflow-hidden rounded-[2.5rem] ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Link href={`/work/${work.id}`} className="block relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-white/5">
                  <div
                    className="cs-img absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 scale-105"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                  <div className="absolute inset-0 bg-brand-onyx/30 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
              </div>
              
              <div className={`cs-text w-full md:w-[40%] flex flex-col ${index % 2 !== 0 ? 'md:order-1 items-end text-right' : 'items-start'}`}>
                <p className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-3">
                  {work.categoryTag || work.category}
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 group-hover:text-brand-violet transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 font-light max-w-md">
                  {work.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${work.id}`}
                    className="inline-flex items-center space-x-3 text-white font-bold uppercase tracking-wider group/btn bg-white/10 px-6 py-4 rounded-full hover:bg-brand-violet transition-colors duration-300"
                  >
                    <span className="text-base">View Case Study</span>
                    <ArrowUpRight size={20} />
                  </Link>

                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-brand-cyan hover:text-white font-semibold text-sm border border-brand-cyan/30 px-5 py-4 rounded-full hover:bg-brand-cyan/10 transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
