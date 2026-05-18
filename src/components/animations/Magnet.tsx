"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  className?: string;
}

export function Magnet({
  children,
  padding = 50,
  disabled = false,
  magnetStrength = 0.5,
  className = "",
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        x: position.x * magnetStrength,
        y: position.y * magnetStrength,
        scale: 1.05,
        transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      });
    } else {
      controls.start({
        x: 0,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      });
    }
  }, [isActive, position, controls, magnetStrength]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !magnetRef.current) return;
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distX = Math.abs(mouseX - centerX);
    const distY = Math.abs(mouseY - centerY);

    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      setIsActive(true);
      setPosition({ x: mouseX - centerX, y: mouseY - centerY });
    } else {
      setIsActive(false);
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
