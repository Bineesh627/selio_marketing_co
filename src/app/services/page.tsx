import { CTA } from "@/components/home/CTA";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Selio Marketing Co",
  description: "Comprehensive digital services: Branding, SEO, Video Production, Web Development, and Social Media Marketing.",
};

const servicesList = [
  {
    id: "branding",
    title: "Branding & Creative Design",
    desc: "Crafting memorable identities that resonate and stand out in the digital noise.",
    features: ["Brand Identity", "Logo Design", "Packaging", "Marketing Collateral"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "social",
    title: "Social Media Marketing",
    desc: "Data-driven social strategies to grow your audience and build community.",
    features: ["Social Media Management", "Content Strategy", "Growth Marketing", "Influencer Marketing", "Paid Ads"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "seo",
    title: "SEO / GEO / AEO",
    desc: "Dominating search, geographic, and AI-engine results with deep technical optimization.",
    features: ["Technical SEO", "GEO Optimization", "AEO Strategies", "AI Content Optimization", "Local SEO"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "video",
    title: "Video Production",
    desc: "Cinematic visual storytelling that captivates and converts at scale.",
    features: ["Video Editing", "Motion Graphics", "Product Shoots", "Promotional Videos"],
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "web",
    title: "Website Development",
    desc: "High-performance, award-winning web experiences built for enterprise scale.",
    features: ["Custom Websites", "Shopify eCommerce", "WordPress", "Landing Pages"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="container mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-cyan">Expertise</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Five core pillars of digital excellence designed to elevate your brand.
        </p>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12 space-y-32">
          {servicesList.map((service, idx) => (
            <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                       style={{ backgroundImage: `url(${service.image})` }} />
                  <div className="absolute inset-0 bg-brand-onyx/30 group-hover:bg-brand-onyx/10 transition-colors duration-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-brand-violet font-bold uppercase tracking-widest text-sm mb-4">Service 0{idx + 1}</div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{service.title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-white">
                      <CheckCircle2 className="text-brand-cyan w-5 h-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-brand-onyx transition-all flex items-center space-x-2">
                  <span>Start this project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
