"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  originalRadius: number;
  alpha: number;
}

export function InteractiveHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates and target for smoothing (lerping)
    const mouse = { x: 0, y: 0, active: false, currentX: 0, currentY: 0 };

    // Fluid blobs definition (colors based on branding: violet, cyan, deep onyx background)
    const blobs = [
      {
        x: 0,
        y: 0,
        tx: Math.random() * 10,
        ty: Math.random() * 10,
        speedX: 0.0012,
        speedY: 0.0008,
        radius: 0.45, // relative to width
        color: "rgba(138, 43, 226, 0.28)", // Violet
      },
      {
        x: 0,
        y: 0,
        tx: Math.random() * 10,
        ty: Math.random() * 10,
        speedX: -0.0009,
        speedY: 0.0011,
        radius: 0.5,
        color: "rgba(0, 229, 255, 0.18)", // Cyan
      },
      {
        x: 0,
        y: 0,
        tx: Math.random() * 10,
        ty: Math.random() * 10,
        speedX: 0.0007,
        speedY: -0.001,
        radius: 0.38,
        color: "rgba(75, 0, 130, 0.22)", // Indigo
      },
    ];

    // Grid dots definition for gravitational warp
    let dots: { x: number; y: number; ox: number; oy: number }[] = [];
    const gridSpacing = 50;

    // Floating particles
    let particles: Particle[] = [];
    const particleCount = 70;

    const initParticles = (w: number, h: number) => {
      particles = [];
      const colors = [
        "rgba(138, 43, 226, 0.45)", // Violet
        "rgba(0, 229, 255, 0.45)",  // Cyan
        "rgba(255, 255, 255, 0.25)" // Faint White
      ];

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.5 + 0.6;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius,
          originalRadius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.15,
        });
      }
    };

    const initGrid = (w: number, h: number) => {
      dots = [];
      for (let x = gridSpacing / 2; x < w; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < h; y += gridSpacing) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      initParticles(width, height);
      initGrid(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const parent = canvas.parentElement || window;
    parent.addEventListener("mousemove", handleMouseMove as EventListener);
    parent.addEventListener("mouseleave", handleMouseLeave as EventListener);

    // Animation Loop
    let time = 0;
    const animate = () => {
      time += 0.005;
      
      // Clear canvas (brand onyx bg)
      ctx.fillStyle = "#0F0F11";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse lerping
      if (mouse.active) {
        mouse.currentX += (mouse.x - mouse.currentX) * 0.08;
        mouse.currentY += (mouse.y - mouse.currentY) * 0.08;
      } else {
        // Idle motion for mouse when user is not moving mouse
        const idleX = width / 2 + Math.sin(time * 1.5) * (width * 0.25);
        const idleY = height / 2 + Math.cos(time * 1.2) * (height * 0.2);
        mouse.currentX += (idleX - mouse.currentX) * 0.03;
        mouse.currentY += (idleY - mouse.currentY) * 0.03;
      }

      // 1. Draw Fluid Blobs with Screen blending
      ctx.globalCompositeOperation = "screen";
      blobs.forEach((blob) => {
        // Update control coordinates
        blob.tx += blob.speedX;
        blob.ty += blob.speedY;

        // Oscillate blob positions organically
        let targetX = (width * 0.5) + Math.sin(blob.tx) * (width * 0.35);
        let targetY = (height * 0.5) + Math.cos(blob.ty) * (height * 0.3);

        // Gentle drag effect towards mouse cursor
        const dx = mouse.currentX - targetX;
        const dy = mouse.currentY - targetY;
        const dist = Math.hypot(dx, dy);
        if (dist < 500) {
          const pull = (1 - dist / 500) * 0.08;
          targetX += dx * pull;
          targetY += dy * pull;
        }

        blob.x += (targetX - blob.x) * 0.05;
        blob.y += (targetY - blob.y) * 0.05;

        const size = Math.min(width, height) * blob.radius;
        const grad = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          size
        );
        grad.addColorStop(0, blob.color);
        grad.addColorStop(0.5, blob.color.replace("0.2", "0.08"));
        grad.addColorStop(1, "rgba(15, 15, 17, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Interactive Warp Grid
      ctx.globalCompositeOperation = "source-over";
      dots.forEach((dot) => {
        const dx = mouse.currentX - dot.ox;
        const dy = mouse.currentY - dot.oy;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        
        let displayX = dot.ox;
        let displayY = dot.oy;
        let dotOpacity = 0.04;
        let dotSize = 0.8;

        // Interactive gravitational lens warp
        const warpRadius = 200;
        if (dist < warpRadius) {
          const force = (warpRadius - dist) / warpRadius;
          const angle = Math.atan2(dy, dx);
          const push = force * 20; // push distance
          displayX -= Math.cos(angle) * push;
          displayY -= Math.sin(angle) * push;
          
          // Elevate glow & size near mouse
          dotOpacity = 0.04 + force * 0.28;
          dotSize = 0.8 + force * 0.8;
        }

        // Draw dot
        ctx.fillStyle = `rgba(138, 43, 226, ${dotOpacity})`;
        ctx.beginPath();
        ctx.arc(displayX, displayY, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw & Update Floating Particles
      particles.forEach((p) => {
        // Handle cursor proximity steering
        const dx = mouse.currentX - p.x;
        const dy = mouse.currentY - p.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 180) {
          const force = (180 - dist) / 180;
          const angle = Math.atan2(dy, dx);
          // Push away slightly, but add a tangent velocity component for orbital feel
          p.vx -= Math.cos(angle) * force * 0.12;
          p.vy -= Math.sin(angle) * force * 0.12;
          
          // Make particle grow when close to cursor
          p.radius = p.originalRadius * (1 + force * 1.8);
        } else {
          p.radius += (p.originalRadius - p.radius) * 0.05;
        }

        // Add subtle friction and speed limit
        const speed = Math.hypot(p.vx, p.vy);
        const maxSpeed = 1.0;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }
        p.vx *= 0.97;
        p.vy *= 0.97;

        // Apply movement vector + natural wind oscillation
        p.x += p.vx + Math.sin(time * 2 + p.y * 0.01) * 0.08;
        p.y += p.vy + 0.12; // gentle downward drift

        // Wrap particles around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Draw faint connections between close particles (constellation web)
      ctx.strokeStyle = "rgba(0, 229, 255, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dist = Math.hypot(pi.x - pj.x, pi.y - pj.y);
          if (dist < 75) {
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }

      // 4. Subtle mouse tracker spotlight
      if (mouse.active) {
        ctx.globalCompositeOperation = "screen";
        const grad = ctx.createRadialGradient(
          mouse.currentX,
          mouse.currentY,
          0,
          mouse.currentX,
          mouse.currentY,
          160
        );
        grad.addColorStop(0, "rgba(0, 229, 255, 0.06)");
        grad.addColorStop(1, "rgba(0, 229, 255, 0)");
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.currentX, mouse.currentY, 160, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Pause canvas execution when scrolled out of view for zero CPU waste
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.01 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      parent.removeEventListener("mousemove", handleMouseMove as EventListener);
      parent.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ background: "#0F0F11" }}
      />
    </div>
  );
}
