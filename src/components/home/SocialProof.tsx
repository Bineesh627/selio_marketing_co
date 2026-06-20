"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Amaalco", src: "/assets/logos/Amaalco_Logo.png" },
  { name: "CK", src: "/assets/logos/CK_Logo.png" },
  { name: "Ceeyka", src: "/assets/logos/Ceeyka_Logo.png" },
  { name: "Dexplora", src: "/assets/logos/Dexplora_Logo.png" },
  { name: "Grostore", src: "/assets/logos/Grostore_Logo.png" },
  { name: "Hey Meat", src: "/assets/logos/Hey_Meat_Logo.png" },
  { name: "HineX", src: "/assets/logos/HineX_Logo.png" },
  { name: "Multiverse", src: "/assets/logos/Multiverse_Logo.png" },
  { name: "Terminal", src: "/assets/logos/Terminal_Logo.png" },
  { name: "Veepas", src: "/assets/logos/Veepas_Logo.png" },
];

export function SocialProof() {
  return (
    <section className="py-20 bg-brand-charcoal border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Trusted by global innovators</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, idx) => (
            <div key={idx} className="mx-12 flex items-center justify-center h-12 min-w-[120px] transition-all duration-300">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-90 transition-all duration-300 cursor-default"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

