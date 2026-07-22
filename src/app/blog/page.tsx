import { CTA } from "@/components/home/CTA";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Selio Marketing Co",
  description: "Read the latest thoughts, trends, and strategies from our team of industry experts.",
};

const articles = [
  { id: 1, title: "The Future of Web Design: Beyond 2026", category: "Design", date: "Upcoming...", image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Mastering AEO: Optimizing for AI Search Engines", category: "Marketing", date: "Upcoming...", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Why Cinematic Scrolling is the New Standard", category: "Development", date: "Upcoming...", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Building Authentic Brands in the AI Era", category: "Branding", date: "Upcoming...", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
];

export default function BlogPage() {
  return (
    <main className="pt-28 sm:pt-32">
      <section className="container mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-16">
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
          Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-violet">Insights.</span>
        </h1>

        {/* Search & Filters UI */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 sm:mt-12 mb-8 sm:mb-16 border-y border-white/10 py-5 sm:py-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full md:w-auto">
            {["All", "Design", "Marketing", "Development", "Branding"].map((cat) => (
              <button key={cat} className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${cat === "All" ? "bg-white text-brand-onyx" : "border border-white/20 text-white hover:border-white/50"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full md:w-80 bg-white/5 border border-white/10 rounded-full py-2.5 sm:py-3 pl-11 sm:pl-12 pr-6 text-xs sm:text-sm text-white outline-none focus:border-brand-violet transition-colors"
            />
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12 sm:mb-20 group relative">
          <Link href="/blog/1" className="block">
            <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-0 md:aspect-[21/9] rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 flex flex-col justify-between p-5 sm:p-10 md:p-14">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${articles[0].image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx via-brand-onyx/70 to-brand-onyx/30" />

              {/* Category & Date Header */}
              <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1.5 bg-brand-violet text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">{articles[0].category}</span>
                <span className="text-gray-300 text-xs sm:text-sm font-medium bg-brand-onyx/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">{articles[0].date}</span>
              </div>

              {/* Title & CTA Footer */}
              <div className="relative z-10 max-w-3xl pt-4">
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3 sm:mb-6 group-hover:text-brand-cyan transition-colors leading-tight">{articles[0].title}</h2>
                <div className="inline-flex items-center space-x-2 text-white font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-brand-violet px-4 sm:px-6 py-2.5 sm:py-3 rounded-full backdrop-blur-md border border-white/15 transition-all">
                  <span>Read Article</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.slice(1).map((article) => (
            <div key={article.id} className="group relative">
              <Link href={`/blog/${article.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 bg-white/5 border border-white/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${article.image})` }} />
                  <div className="absolute inset-0 bg-brand-onyx/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-brand-violet text-sm font-bold uppercase tracking-widest">{article.category}</span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-brand-amber transition-colors">
                  {article.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
