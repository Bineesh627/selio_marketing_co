type NoiseOverlayProps = {
  className?: string;
  opacity?: string;
};

export function NoiseOverlay({ className = "", opacity = "opacity-10" }: NoiseOverlayProps) {
  return (
    <div
      className={`absolute inset-0 bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none ${opacity} ${className}`}
      aria-hidden
    />
  );
}
