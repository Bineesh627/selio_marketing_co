"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-32 bg-brand-onyx overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Client <br /><span className="text-brand-violet">Stories.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Don&apos;t just take our word for it. Hear from the global brands that have partnered with us to achieve remarkable results.
            </p>
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-brand-onyx transition-colors">
                &larr;
              </button>
              <button className="w-12 h-12 rounded-full bg-brand-violet flex items-center justify-center text-white hover:bg-brand-violet/90 transition-colors">
                &rarr;
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[2rem] relative"
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
                &quot;Selio completely transformed our digital presence. Their cinematic approach to our brand storytelling resulted in a 300% increase in user engagement and record-breaking conversions.&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">Sarah Jenkins</h5>
                  <p className="text-gray-400">CMO, Lumina Architecture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
