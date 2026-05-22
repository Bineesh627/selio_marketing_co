import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 18, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 18, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="/selio.svg" alt="Selio Marketing Co" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-8">
              A creative digital agency helping brands grow through branding, website development, SEO, social media marketing, performance campaigns, and visual storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/seliomarketing/" className="p-2.5 bg-white/5 rounded-full hover:bg-brand-violet transition-colors text-white">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://www.facebook.com/people/Selio/61582334505773/" className="p-2.5 bg-white/5 rounded-full hover:bg-brand-violet transition-colors text-white">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.instagram.com/selio.marketing.co" className="p-2.5 bg-white/5 rounded-full hover:bg-brand-violet transition-colors text-white">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              {/* <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li> */}
              {/* <li><Link href="/blog" className="hover:text-white transition-colors">Insights</Link></li> */}
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>selioagencyy@gmail.com</li>
              <li>+91 73062 60004</li>
              {/* <li>120 Digital Avenue,<br />San Francisco, CA 94103</li> */}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Selio Marketing Co. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
