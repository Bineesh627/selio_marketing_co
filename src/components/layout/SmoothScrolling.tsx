"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.5, wheelMultiplier: 0.8, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
