"use client";

import { CTA } from "@/components/home/CTA";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";
import { works } from "@/data/works";

const categories = ["All", "Web Development", "E-Commerce"];

export default function WorkPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [activeReportId, setActiveReportId] = useState(works[0].id);

  const filteredWorks = works.filter(
    (w) => activeCat === "All" || w.category === activeCat
  );

  const selectedReportWork = works.find((w) => w.id === activeReportId) || works[0];

  return (
    <main className="pt-32 bg-brand-onyx min-h-screen">
      {/* Works Gallery Section */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <div className="max-w-4xl">
          <p className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-4">
            Our Portfolio & Case Studies
          </p>
          <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-6 leading-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Work.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Discover our high-impact web platforms engineered for luxury real estate and haute couture e-commerce.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mt-12 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCat === cat
                  ? "bg-white text-brand-onyx shadow-lg scale-105"
                  : "border border-white/20 text-white hover:border-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/5 aspect-[16/10] border border-white/10 mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx via-brand-onyx/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Badge & Live Link */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                    <span className="px-4 py-1.5 rounded-full bg-brand-onyx/80 backdrop-blur-md border border-white/15 text-brand-cyan font-bold text-xs uppercase tracking-wider">
                      {work.category}
                    </span>
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/90 text-brand-onyx font-bold text-xs hover:bg-brand-cyan hover:text-white transition-colors duration-300 shadow-lg"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base font-light mb-6">
                      {work.subtitle}
                    </p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/work/${work.id}`}
                        className="inline-flex items-center space-x-2 text-white font-bold text-sm uppercase tracking-wider bg-brand-violet hover:bg-brand-violet/80 px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <span>View Full Case Study</span>
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTA />
    </main>
  );
}
