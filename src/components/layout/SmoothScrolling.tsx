"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
