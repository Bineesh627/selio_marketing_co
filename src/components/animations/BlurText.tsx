"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  /** When true, animates immediately (for above-the-fold hero). */
  startOnMount?: boolean;
}

export const BlurText = ({
  text,
  delay = 50,
  className = "",
  startOnMount = false,
}: BlurTextProps) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const shouldAnimate = startOnMount || isInView;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay / 1000, delayChildren: 0.08 * i },
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
      filter: "blur(10px)",
      y: 16,
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
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
