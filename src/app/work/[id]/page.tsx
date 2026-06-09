import { CTA } from "@/components/home/CTA";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const works = [
  {
    id: 1,
    title: "Rensol",
    category: "ERP System Development",
    client: "Abdul Salam (Founder, Rensol)",
    services: "ERP Architecture, UI/UX, Cloud Integration",
    platform: "Next.js / Node.js",
    year: "2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Corepro Techno LLP",
    category: "Digital Marketing & SEO",
    client: "Anirudhan B S (Founder, corepro Techno LLP)",
    services: "SEO Audit, Search Campaigns, Content Strategy",
    platform: "Google Search Console / SEMRush",
    year: "2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Glamtrinkets",
    category: "E-Commerce Development",
    client: "Durga S (Founder, glamtrinkets)",
    services: "Shopify Custom Dev, Identity Design, CRO",
    platform: "Shopify Custom Storefront",
    year: "2026",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Fusintech",
    category: "Corporate Website",
    client: "Bineesh S (Founder, Fusintech)",
    services: "Tailwind CSS, React, Framer Motion",
    platform: "Next.js Static Site",
    year: "2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  }
];

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  
  const work = works.find(w => w.id === id);
  
  if (!work) {
    return notFound();
  }
  
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
        <div className="text-brand-violet font-bold uppercase tracking-widest text-sm mb-4">{work.category}</div>
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-12">{work.title}</h1>
        
        <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-20 bg-white/5 border border-white/10">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${work.image})` }} />
        </div>

        {/* Project Info */}
        <div className="grid md:grid-cols-4 gap-8 py-10 border-y border-white/10 mb-20">
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Client</h4>
            <p className="text-white text-lg">{work.client}</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Services</h4>
            <p className="text-white text-lg">{work.services}</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Platform</h4>
            <p className="text-white text-lg">{work.platform}</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold mb-2">Year</h4>
            <p className="text-white text-lg">{work.year}</p>
          </div>
        </div>

        {/* Content - Simple professional coming soon message */}
        <div className="max-w-3xl mx-auto text-center py-16 px-6 rounded-3xl bg-brand-charcoal border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/5 to-brand-cyan/5 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 relative z-10">Case Study Under Construction</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
            We are currently documenting the full strategy, implementation steps, and key performance metrics achieved during this project.
          </p>
          <div className="relative z-10 inline-block px-6 py-2 rounded-full bg-brand-violet/15 border border-brand-violet/30 text-brand-violet font-semibold text-sm">
            Updating Soon
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
