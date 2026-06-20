"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BlurText } from "@/components/animations/BlurText";

const testimonials = [
  {
    quote: "Selio completely transformed our digital presence. Their cinematic approach to our brand storytelling resulted in a 300% increase in user engagement and record-breaking conversions.",
    name: "Abdul Salam",
    role: "Founder, Rensol",
  },
  {
    quote: "Working with Selio was a game changer. Their SEO strategy tripled our organic traffic in just four months and the new website converts like crazy.",
    name: "Anirudhan B S",
    role: "Founder, corepro Techno LLP",
  },
  {
    quote: "Our social media ROI increased by 250% within the first three months of working with Selio. Their data-driven approach to digital marketing and targeting was spot on.",
    name: "Durga S",
    role: "Founder, glamtrinkets",
  },
  {
    quote: "The PPC campaigns managed by Selio delivered an outstanding acquisition cost reduction. They are strategic, creative, and highly analytical in their digital marketing efforts.",
    name: "Bineesh S",
    role: "Founder, Fusintech",
  },
];

// Duplicate the testimonials to create a seamless looping effect
const row = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section className="py-32 bg-brand-onyx overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 flex flex-wrap leading-tight">
            <BlurText 
              text="Client" 
              animateBy="letters" 
              delay={20} 
              className="inline-flex mr-3"
            />
            <span className="text-brand-violet">
              <BlurText 
                text="Stories." 
                animateBy="letters" 
                delay={20} 
                className="inline-flex"
              />
            </span>
          </h2>
          <div className="mt-4">
            <BlurText
              text="Don't just take our word for it. Hear from the global brands that have partnered with us to achieve remarkable results."
              animateBy="words"
              delay={35}
              className="text-gray-400 text-lg leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="flex flex-col gap-8 w-full relative">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-onyx to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-onyx to-transparent z-10 pointer-events-none" />

        {/* Single Row: Left to Right scrolling */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex gap-8 shrink-0 py-4"
            animate={{
              x: ["-50%", 0],
            }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {row.map((t, index) => (
              <div key={`testimonial-${index}`} className="w-[320px] md:w-[420px] shrink-0">
                <SpotlightCard
                  spotlightColor="rgba(139, 92, 246, 0.15)"
                  className="group p-8 md:p-10 rounded-[2rem] relative h-full flex flex-col justify-between border border-white/5"
                >
                  <div>
                    <Quote className="absolute top-6 right-6 text-brand-violet/20" size={50} />
                    <div className="flex text-brand-amber mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-6">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet shrink-0">
                      <User size={20} />
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-base">{t.name}</h5>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
