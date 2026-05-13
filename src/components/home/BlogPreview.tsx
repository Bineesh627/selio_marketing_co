"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Web Design: Beyond 2026",
    category: "Design",
    date: "Oct 12, 2026",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mastering AEO: Optimizing for AI Search Engines",
    category: "Marketing",
    date: "Oct 05, 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
  }
];

export function BlogPreview() {
  return (
    <section className="py-32 bg-brand-charcoal border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Latest <span className="text-brand-amber">Insights.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl">
              Thoughts, trends, and strategies from our team of industry experts.
            </p>
          </div>
          <Link href="/blog" className="mt-8 md:mt-0 inline-flex items-center space-x-2 text-white font-bold hover:text-brand-violet transition-colors">
            <span>View All Articles</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/blog/${article.id}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-8 bg-white/5">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="absolute inset-0 bg-brand-onyx/40 group-hover:bg-brand-onyx/20 transition-colors duration-500" />
                  
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                
                <div className="flex items-center text-brand-violet text-sm font-bold uppercase tracking-widest mb-4">
                  {article.date}
                </div>
                
                <h3 className="text-3xl font-heading font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {article.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
