import { CTA } from "@/components/home/CTA";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  // Using Promise type for params in Next.js 15+
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  return (
    <main className="pt-24">
      {/* Back button */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <Link href="/work" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to all work</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="container mx-auto px-6 md:px-12 pb-20">
        <div className="text-brand-violet font-bold uppercase tracking-widest text-sm mb-4">Branding & E-Commerce</div>
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-12">Aura Skincare</h1>
        
        <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-20 bg-white/5 border border-white/10">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2000&auto=format&fit=crop)` }} />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-4 gap-8 py-10 border-y border-white/10 mb-20">
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Client</h4>
            <p className="text-white text-lg">Aura Cosmetics Inc.</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Services</h4>
            <p className="text-white text-lg">Identity, UI/UX, Dev</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Platform</h4>
            <p className="text-white text-lg">Shopify Plus</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Year</h4>
            <p className="text-white text-lg">2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-20">
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">The Challenge</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Aura Skincare needed a digital platform that matched their premium, science-backed product line. Their existing e-commerce setup was outdated, slow, and failed to convey the brand's luxurious yet clinical aesthetic. They challenged us to completely reimagine their online presence to drive D2C sales while maintaining a high-end feel.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Strategy</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We developed a headless Shopify architecture combined with a custom Next.js frontend to ensure lightning-fast performance. Visually, we introduced a minimalist, editorial-style layout using deep onyx backgrounds to make their elegant product photography pop.
            </p>
          </div>

          {/* Visual Gallery */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5">
              <img src="https://images.unsplash.com/photo-1615397323136-1e0e8548a335?q=80&w=1000&auto=format&fit=crop" alt="Aura detail" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 mt-12">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" alt="Aura detail" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Results & Metrics */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-10">The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/10">
                <div className="text-5xl font-heading font-bold text-brand-amber mb-2">+145%</div>
                <div className="text-gray-400">Conversion Rate</div>
              </div>
              <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/10">
                <div className="text-5xl font-heading font-bold text-brand-cyan mb-2">0.8s</div>
                <div className="text-gray-400">Avg. Load Time</div>
              </div>
              <div className="p-8 rounded-3xl bg-brand-charcoal border border-white/10">
                <div className="text-5xl font-heading font-bold text-brand-violet mb-2">2.4x</div>
                <div className="text-gray-400">Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
