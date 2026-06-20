"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  /** When true, animates immediately (for above-the-fold hero). */
  startOnMount?: boolean;
  animateBy?: "words" | "letters";
}

export const BlurText = ({
  text,
  delay = 30,
  className = "",
  startOnMount = false,
  animateBy = "words",
}: BlurTextProps) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldAnimate = startOnMount || isInView;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: animateBy === "letters" ? (delay || 15) / 1000 : (delay || 50) / 1000, 
        delayChildren: 0.05 * i 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      y: 12,
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      className={className}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      {animateBy === "words" ? (
        words.map((word, index) => (
          <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
            {word}
          </motion.span>
        ))
      ) : (
        words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden py-1">
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={child}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))
      )}
    </motion.div>
  );
};

