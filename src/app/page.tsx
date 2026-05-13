import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <Stats />
      <CaseStudies />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
