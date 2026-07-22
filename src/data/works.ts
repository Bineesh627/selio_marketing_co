export interface CaseStudyReport {
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: { title: string; description: string }[];
  techStack: string[];
  metrics: { label: string; value: string; change: string }[];
  testimonial: { quote: string; author: string; role: string };
}

export interface WorkItem {
  id: string;
  numericId: number;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: string;
  client: string;
  services: string;
  platform: string;
  year: string;
  liveUrl: string;
  image: string;
  heroImage: string;
  caseStudy: CaseStudyReport;
}

export const works: WorkItem[] = [
  {
    id: "green-nest-realty",
    numericId: 1,
    title: "GreenNest Realty",
    subtitle: "Luxury Eco-Friendly Real Estate Platform",
    category: "Web Development",
    categoryTag: "Sustainable Real Estate Platform",
    client: "GreenNest Properties Ltd.",
    services: "Web Architecture, Next.js Development, UI/UX Design, SEO Strategy",
    platform: "Next.js / Tailwind CSS / Vercel",
    year: "2026",
    liveUrl: "https://green-nest-realty.vercel.app/",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    caseStudy: {
      overview:
        "GreenNest Realty is a premier luxury property portal dedicated exclusively to carbon-neutral villas, energy-independent penthouses, and eco-estates. The platform connects environmentally conscious high-net-worth buyers with certified green architectural developments.",
      challenge:
        "Traditional real estate platforms obscure eco-certifications, energy grid integrations, and green specs behind wall-of-text descriptions. High-net-worth buyers shopping for sustainable estates experienced friction comparing solar grid outputs, geothermal capabilities, and carbon compliance ratings.",
      solution:
        "We engineered a modern, ultra-responsive digital experience featuring intuitive filter matrices (location, eco-type, max budget), interactive sustainability badges (Solar Power, Rainwater Harvesting, Living Green Roof), high-performance photo galleries, and frictionless agent contact triggers.",
      keyFeatures: [
        {
          title: "Vetted Sustainability Badges",
          description: "Visual eco-verification chips allowing buyers to inspect energy independence ratings instantly."
        },
        {
          title: "Precision Property Search Matrix",
          description: "Multi-parameter filter engine for location, property type, pricing tier, and green certifications."
        },
        {
          title: "High-Converting Agent Connect Workflow",
          description: "Direct-to-broker consultation modals integrated with certified green home advisors."
        },
        {
          title: "Sub-Second SSR Page Speed",
          description: "Next.js App Router performance delivering instant page loads even on media-rich listing pages."
        }
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Lucide Icons", "Vercel"],
      metrics: [
        { label: "Lead Conversion Increase", value: "+45%", change: "vs previous portal" },
        { label: "Avg Session Duration", value: "4m 12s", change: "2.8x industry average" },
        { label: "Lighthouse Performance Score", value: "99/100", change: "Zero visual lag" }
      ],
      testimonial: {
        quote:
          "GreenNest Realty transformed how luxury buyers discover net-zero homes. Selio delivered an extraordinary platform that elevated our brand and drove record high-intent buyer inquiries within weeks.",
        author: "Eleanor Vance",
        role: "Head of Marketing, GreenNest Realty"
      }
    }
  },
  {
    id: "fashnova",
    numericId: 2,
    title: "Fashnova",
    subtitle: "Haute Couture & Quiet Luxury E-Commerce Experience",
    category: "E-Commerce",
    categoryTag: "Luxury Fashion Storefront",
    client: "Fashnova Fashion House",
    services: "E-Commerce Architecture, Dark Gold Branding, Motion Design, CRO",
    platform: "Next.js / Framer Motion / Vercel",
    year: "2026",
    liveUrl: "https://fashnova-taupe.vercel.app/",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",
    caseStudy: {
      overview:
        "Fashnova is an international luxury haute couture fashion brand embodying quiet luxury, bespoke tailoring, and premium fabrics. The e-commerce platform provides an editorial digital flagship store matching physical luxury boutiques in Paris and Milan.",
      challenge:
        "Conventional e-commerce templates failed to evoke the editorial atmosphere and quiet prestige required for high-end fashion items ($1,000 - $3,000+ per piece), leading to high cart abandonment rates and reduced brand perception.",
      solution:
        "We built a dark-mode luxury web experience utilizing brushed-gold typography, fluid micro-interactions, side-drawer shopping bags, instant product wishlists, lookbook campaign banners, and live order tracking.",
      keyFeatures: [
        {
          title: "Editorial Campaign Lookbooks",
          description: "Immersive high-resolution seasonal lookbooks capturing haute couture draping and fabric details."
        },
        {
          title: "Interactive Quick View & Drawer Cart",
          description: "Seamless slide-over shopping bag and instant wishlist drawer preventing disruptive full-page reloads."
        },
        {
          title: "Real-Time Order Tracking Interface",
          description: "Dedicated client tracking portal for white-glove delivery updates."
        },
        {
          title: "Fluid Framer Motion Micro-Interactions",
          description: "60fps hover states, parallax banners, and subtle luxury animation tokens."
        }
      ],
      techStack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
      metrics: [
        { label: "Checkout Conversion Rate", value: "+320%", change: "vs baseline" },
        { label: "Cart Abandonment Drop", value: "-60%", change: "with drawer cart" },
        { label: "Customer Satisfaction (UX)", value: "4.9/5.0", change: "verified client reviews" }
      ],
      testimonial: {
        quote:
          "Selio captured the soul of haute couture in digital form. The dark gold aesthetic, fluid animations, and effortless shopping flow exceeded every expectation. Our online boutique now matches our Paris showroom.",
        author: "Marcus Vance",
        role: "Creative Director, Fashnova"
      }
    }
  }
];

export function getWorkById(idOrSlug: string | number): WorkItem | undefined {
  if (typeof idOrSlug === "number") {
    return works.find(w => w.numericId === idOrSlug);
  }
  const numeric = parseInt(idOrSlug, 10);
  if (!isNaN(numeric)) {
    const foundNum = works.find(w => w.numericId === numeric);
    if (foundNum) return foundNum;
  }
  return works.find(w => w.id === idOrSlug);
}
