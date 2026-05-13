import { Hero } from "@/components/home/Hero";
import { CTA } from "@/components/home/CTA";
import { Users, Target, Rocket, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Selio Marketing Co",
  description: "Learn about our agency story, vision, and the award-winning team behind Selio.",
};

const values = [
  { icon: <Target className="text-brand-violet w-8 h-8 mb-4" />, title: "Precision", desc: "Every pixel, every word is crafted with intent." },
  { icon: <Rocket className="text-brand-cyan w-8 h-8 mb-4" />, title: "Innovation", desc: "Pushing boundaries to deliver what's next." },
  { icon: <Users className="text-brand-amber w-8 h-8 mb-4" />, title: "Collaboration", desc: "True partnership with ambitious brands." },
  { icon: <Award className="text-white w-8 h-8 mb-4" />, title: "Excellence", desc: "Award-winning quality in everything we do." },
];

export default function About() {
  return (
    <main className="pt-32">
      {/* About Hero */}
      <section className="container mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">Story</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We are a collective of digital craftsmen, strategic thinkers, and creative technologists dedicated to building extraordinary brand experiences.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the premier global digital agency recognized for transforming how brands connect with their audiences in the digital age. We envision a world where every digital interaction is a memorable cinematic experience.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To empower visionary brands through strategic design, cutting-edge technology, and unparalleled creativity. We don't just build websites; we engineer comprehensive digital ecosystems that drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Core Values</h2>
            <p className="text-gray-400">The principles that guide our work and our relationships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-brand-charcoal border border-white/10 hover:border-brand-violet transition-colors">
                {val.icon}
                <h4 className="text-xl font-bold text-white mb-2">{val.title}</h4>
                <p className="text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-20 bg-brand-charcoal">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="group text-left">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-white/10 relative">
                  <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" 
                       style={{ backgroundImage: `url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop)` }} />
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">Jane Doe</h4>
                <p className="text-brand-violet uppercase tracking-widest text-sm font-bold mt-2">Founder & CEO</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
