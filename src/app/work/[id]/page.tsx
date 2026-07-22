import { CTA } from "@/components/home/CTA";
import { ArrowLeft, ExternalLink, TrendingUp, CheckCircle2, Cpu, Quote, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkById } from "@/data/works";

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const work = getWorkById(resolvedParams.id);
  
  if (!work) {
    return notFound();
  }
  
  const { caseStudy } = work;

  return (
    <main className="pt-24 bg-brand-onyx min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <Link href="/work" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to all work</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="container mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-violet/15 border border-brand-violet/30 text-brand-violet font-bold uppercase tracking-widest text-xs">
            <Sparkles size={14} />
            <span>{work.categoryTag}</span>
          </div>

          <a
            href={work.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-all text-sm shadow-lg"
          >
            <span>Visit Live Website</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-6 leading-tight">
          {work.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mb-12">
          {work.subtitle}
        </p>

        <div className="w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 bg-white/5 border border-white/10 relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${work.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/80 via-transparent to-transparent" />
        </div>

        {/* Project Metadata */}
        <div className="grid md:grid-cols-4 gap-8 py-10 border-y border-white/10 mb-20">
          <div>
            <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Client</h4>
            <p className="text-white text-lg font-semibold">{work.client}</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Services Rendered</h4>
            <p className="text-white text-lg font-semibold">{work.services}</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Architecture</h4>
            <p className="text-white text-lg font-semibold">{work.platform}</p>
          </div>
          <div>
            <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-2">Delivery Year</h4>
            <p className="text-white text-lg font-semibold">{work.year}</p>
          </div>
        </div>

        {/* Case Study Report Body */}
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Executive Overview */}
          <div className="bg-brand-charcoal/40 border border-white/10 rounded-[2.5rem] p-8 md:p-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Executive Overview
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Impact & Performance Metrics */}
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="text-brand-cyan" size={28} />
              Empirical Results & Growth Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
                >
                  <div className="text-5xl font-heading font-bold text-brand-cyan mb-2">
                    {m.value}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">{m.label}</div>
                    <div className="text-gray-400 text-xs font-medium">{m.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge vs Solution */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-4 text-brand-cyan">
                The Challenge
              </h3>
              <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-4 text-brand-violet">
                The Solution
              </h3>
              <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features & Innovations */}
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
              Key Features & Technological Innovations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-charcoal/60 border border-white/5 flex gap-4"
                >
                  <CheckCircle2 className="text-brand-cyan shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{feat.title}</h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack & Tools */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 flex items-center gap-2">
                <Cpu size={16} className="text-brand-violet" />
                Technology Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-cyan hover:bg-brand-cyan/80 text-brand-onyx font-bold px-8 py-4 rounded-full transition-all text-sm shrink-0"
            >
              <span>Explore Live Project</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gradient-to-r from-brand-violet/20 via-brand-onyx to-brand-cyan/20 border border-white/15 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
            <Quote className="text-brand-violet/30 mb-4" size={48} />
            <p className="text-white text-xl md:text-2xl italic font-light leading-relaxed mb-8">
              &quot;{caseStudy.testimonial.quote}&quot;
            </p>
            <div>
              <h5 className="text-white font-bold text-lg">{caseStudy.testimonial.author}</h5>
              <p className="text-brand-cyan text-sm font-medium">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
