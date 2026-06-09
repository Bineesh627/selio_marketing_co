"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 md:px-0">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={clsx(
            "flex items-center justify-between w-full md:w-[85%] max-w-6xl rounded-full px-6 py-3 transition-all duration-500",
            isScrolled 
              ? "bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "bg-transparent border border-transparent shadow-none"
          )}
        >
          {/* Left Side: Logo */}
          <Link href="/" className="flex items-center z-10">
            <img src="/selio.svg" alt="Selio Marketing Co" className="h-7 w-auto" />
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-medium transition-colors z-10",
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side: CTA Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-white text-brand-onyx font-semibold text-sm rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-onyx/80 flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-8 text-white p-3 rounded-full bg-white/10 border border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
            <nav className="flex flex-col items-center space-y-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      "text-5xl font-heading font-bold transition-colors hover:text-brand-cyan",
                      pathname === link.href ? "text-white" : "text-gray-500"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-10 py-4 bg-white text-brand-onyx text-xl font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
