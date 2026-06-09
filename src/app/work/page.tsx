"use client";

import { CTA } from "@/components/home/CTA";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Branding", "UI/UX", "Web Development", "Video"];

const works = [
  { id: 1, title: "Rensol", category: "Web Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Corepro Techno LLP", category: "UI/UX", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Glamtrinkets", category: "Branding", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Fusintech", category: "Web Development", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" },
];

export default function WorkPage() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredWorks = works.filter(w => activeCat === "All" || w.category === activeCat);

  return (
    <main className="pt-32">
      <section className="container mx-auto px-6 md:px-12 py-20">
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-6">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Work.</span>
        </h1>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-16 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCat === cat ? 'bg-white text-brand-onyx' : 'border border-white/20 text-white hover:border-white/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid (Simulated with columns) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link href={`/work/${work.id}`} className="block relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/3]">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                       style={{ backgroundImage: `url(${work.image})` }} />
                  <div className="absolute inset-0 bg-brand-onyx/40 group-hover:bg-brand-onyx/10 transition-colors duration-500" />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-brand-onyx/90 via-transparent to-transparent">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-brand-cyan font-bold text-sm uppercase tracking-wider mb-2">{work.category}</p>
                        <h3 className="text-3xl font-heading font-bold text-white">{work.title}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-brand-violet flex items-center justify-center text-white">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTA />
    </main>
  );
}
