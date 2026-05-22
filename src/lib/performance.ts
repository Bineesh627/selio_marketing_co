export type PerformanceTier = "low" | "medium" | "high";

export function getPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") return "medium";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return "low";

  const isMobile =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(hover: none)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const lowMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const lowCores = navigator.hardwareConcurrency;

  if (isMobile || isCoarsePointer) return "medium";
  if (lowMemory !== undefined && lowMemory < 4) return "low";
  if (lowCores !== undefined && lowCores <= 4) return "medium";

  return "high";
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
