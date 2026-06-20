"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/animations/BlurText";

const articles = [
  {
    id: 1,
    title: "The Future of Web Design: Beyond 2026",
    category: "Design",
    date: "Upcoming",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mastering AEO: Optimizing for AI Search Engines",
    category: "Marketing",
    date: "Upcoming",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Brand Identity in the Age of Social-First Audiences",
    category: "Branding",
    date: "Upcoming",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=1000&auto=format&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  Design: "bg-brand-violet/20 text-brand-violet border-brand-violet/30",
  Marketing: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30",
  Branding: "bg-brand-amber/10 text-brand-amber border-brand-amber/30",
};

export function BlogPreview() {
  return (
    <section className="py-32 bg-brand-charcoal border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-5 flex flex-wrap leading-tight">
              <BlurText 
                text="Industry Trends &" 
                animateBy="letters" 
                delay={20} 
                className="inline-flex mr-3"
              />
              <span className="text-brand-violet">
                <BlurText 
                  text="Strategies." 
                  animateBy="letters" 
                  delay={20} 
                  className="inline-flex"
                />
              </span>
            </h2>
            <div className="mt-4">
              <BlurText
                text="Thoughts, trends, and strategies from our team of industry experts."
                animateBy="words"
                delay={35}
                className="text-xl text-gray-400 max-w-xl leading-relaxed"
              />
            </div>
          </div>
          <Link
            href="/blog"
            className="mt-8 md:mt-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white hover:text-brand-onyx transition-all duration-300"
          >
            <span>View All Articles</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${article.id}`} className="block h-full">
                <div className="flex flex-col h-full rounded-3xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-white/20 hover:bg-white/[0.06] transition-all duration-400">

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/60 via-transparent to-transparent" />

                    {/* Category pill */}
                    <div className={`absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[article.category] ?? "bg-white/10 text-white border-white/20"}`}>
                      {article.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-7">
                    <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest font-medium mb-4">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white leading-snug mb-6 group-hover:text-brand-cyan transition-colors duration-300 flex-1">
                      {article.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                      <span>Read Article</span>
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
