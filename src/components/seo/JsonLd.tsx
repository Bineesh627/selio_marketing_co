import { works } from "@/data/works";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.seliomarketing.com/#organization",
    "name": "Selio Marketing Co",
    "url": "https://www.seliomarketing.com",
    "logo": "https://www.seliomarketing.com/selio.svg",
    "description": "World-class digital agency specializing in branding, high-conversion web development, luxury e-commerce platforms, and data-driven marketing.",
    "sameAs": [
      "https://green-nest-realty.vercel.app/",
      "https://fashnova-taupe.vercel.app/"
    ],
    "areaServed": "Global",
    "knowsAbout": [
      "Web Development",
      "E-Commerce Architecture",
      "Luxury Real Estate Web Platforms",
      "Haute Couture Storefronts",
      "Digital Marketing & SEO",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Agency Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Next.js Web Development",
            "description": "High-performance, sub-second SSR web applications built with Next.js and Tailwind CSS."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury E-Commerce Engineering",
            "description": "Custom dark-mode haute couture storefronts with fluid Framer Motion micro-interactions."
          }
        }
      ]
    }
  };

  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Selio Marketing Co Featured Case Studies",
    "itemListElement": works.map((work, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": work.title,
        "headline": `${work.title} - ${work.subtitle}`,
        "description": work.caseStudy.overview,
        "url": work.liveUrl,
        "creator": {
          "@type": "Organization",
          "name": "Selio Marketing Co"
        },
        "about": work.categoryTag,
        "keywords": work.caseStudy.techStack.join(", ")
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What client projects and case studies has Selio Marketing Co completed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selio Marketing Co has built flagship digital experiences including GreenNest Realty (a carbon-neutral luxury real estate web portal at https://green-nest-realty.vercel.app/) and Fashnova (a luxury haute couture e-commerce platform at https://fashnova-taupe.vercel.app/)."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Selio Marketing Co use for high-conversion web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Selio Marketing Co utilizes modern web technologies including Next.js, React, Tailwind CSS, TypeScript, Framer Motion, and GSAP to deliver sub-second page performance and 99/100 Lighthouse scores."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
