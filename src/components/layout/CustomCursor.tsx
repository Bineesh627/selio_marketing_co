"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring — slow, smooth spring
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 28, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 28, mass: 0.5 });

  // Inner dot — snappy, fast spring
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.1 });

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
      );
      setHovering(!!isInteractive);
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);
    const handleLeave = () => setHidden(true);
    const handleEnter = () => setHidden(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hide the native cursor globally on desktop */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      {/* Outer ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: clicking ? 0.7 : hovering ? 1.8 : 1,
          borderColor: hovering ? "rgba(139, 92, 246, 0.9)" : "rgba(255, 255, 255, 0.5)",
          backgroundColor: hovering ? "rgba(139, 92, 246, 0.08)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-9 h-9 rounded-full border"
      />

      {/* Inner dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: clicking ? 0.5 : hovering ? 0 : 1,
          backgroundColor: hovering ? "rgba(139, 92, 246, 1)" : "rgba(255, 255, 255, 1)",
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-2 h-2 rounded-full bg-white"
      />
    </>
  );
}
