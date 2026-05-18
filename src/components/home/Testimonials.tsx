"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    quote: "Selio completely transformed our digital presence. Their cinematic approach to our brand storytelling resulted in a 300% increase in user engagement and record-breaking conversions.",
    name: "Sarah Jenkins",
    role: "CMO, Lumina Architecture",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Working with Selio was a game changer. Their SEO strategy tripled our organic traffic in just four months and the new website converts like crazy.",
    name: "Marcus Reid",
    role: "CEO, Fintech X",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-brand-onyx overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <ScrollReveal direction="right" className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Client <br /><span className="text-brand-violet">Stories.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Don&apos;t just take our word for it. Hear from the global brands that have partnered with us to achieve remarkable results.
            </p>
          </ScrollReveal>

          <div className="lg:w-2/3 flex flex-col gap-8">
            {testimonials.map((t, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="left">
                <SpotlightCard
                  spotlightColor="rgba(139, 92, 246, 0.18)"
                  className="group p-10 md:p-16 rounded-[2rem] relative"
                >
                  <Quote className="absolute top-10 right-10 text-brand-violet/20" size={80} />
                  <div className="flex text-brand-amber mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-10 relative z-10">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-lg">{t.name}</h5>
                      <p className="text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
