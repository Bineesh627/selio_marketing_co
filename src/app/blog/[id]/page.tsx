import { CTA } from "@/components/home/CTA";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles = [
  { id: 1, title: "The Future of Web Design: Beyond 2026", category: "Design", date: "Upcoming...", image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Mastering AEO: Optimizing for AI Search Engines", category: "Marketing", date: "Upcoming...", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Why Cinematic Scrolling is the New Standard", category: "Development", date: "Upcoming...", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "Building Authentic Brands in the AI Era", category: "Branding", date: "Upcoming...", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" },
];

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  
  const article = articles.find((a) => a.id === id);
  
  if (!article) {
    return notFound();
  }
  
  return (
    <main className="pt-24">
      {/* Back button */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <Link href="/blog" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to all insights</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="container mx-auto px-6 md:px-12 pb-20">
        <div className="text-brand-violet font-bold uppercase tracking-widest text-sm mb-4">{article.category}</div>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-12">{article.title}</h1>
        
        <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-20 bg-white/5 border border-white/10">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
        </div>

        {/* Article Details Coming Soon Card */}
        <div className="max-w-3xl mx-auto text-center py-16 px-6 rounded-3xl bg-brand-charcoal border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/5 to-brand-cyan/5 pointer-events-none" />
          <Clock className="mx-auto text-brand-violet mb-6 animate-pulse" size={48} />
          <h2 className="text-3xl font-heading font-bold text-white mb-4 relative z-10">Preparing Article</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
            We are preparing the full content, insights, and industry takeaways for this topic. Subscribe to stay updated!
          </p>
          <div className="relative z-10 inline-block px-6 py-2 rounded-full bg-brand-violet/15 border border-brand-violet/30 text-brand-violet font-semibold text-sm">
            Coming Soon
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
