"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      {/* Abstract circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-violet/20 rounded-full blur-[150px] mix-blend-screen translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[120px] mix-blend-screen -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 tracking-tighter"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-violet">scale</span> your brand?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Partner with us to create a cinematic, high-converting digital presence that dominates your industry.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-3 px-10 py-5 rounded-full bg-white text-brand-onyx font-bold text-lg hover:bg-brand-violet hover:text-white transition-colors group"
            >
              <span>Start a Project</span>
              <span className="p-2 bg-brand-onyx text-white rounded-full group-hover:bg-white group-hover:text-brand-violet transition-colors">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
