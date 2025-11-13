import Image from "next/image";

import { cn } from "@/lib/utils";
import { flagToTwemoji } from "@/lib/emoji";

type FlagStripProps = {
  flags: string[];
  className?: string;
  size?: number;
  variant?: "grid" | "row";
  columns?: number;
};

export function FlagStrip({
  flags,
  className,
  size = 32,
  variant = "grid",
  columns,
}: FlagStripProps) {
  const filtered = flags.filter(Boolean);

  if (!filtered.length) return null;

  const effectiveColumns =
    variant === "grid"
      ? columns ?? Math.min(Math.max(filtered.length, 2), 6)
      : undefined;

  return (
    <div
      className={cn(
        variant === "grid"
          ? "grid justify-items-center gap-2 sm:gap-2.5"
          : "flex flex-wrap items-center justify-center gap-2 sm:gap-2.5",
        className
      )}
      style={
        variant === "grid"
          ? {
              gridTemplateColumns: `repeat(${effectiveColumns}, minmax(0, 1fr))`,
            }
          : undefined
      }
    >
      {filtered.map((flag) => {
        const url = flagToTwemoji(flag);
        if (!url) {
          return (
            <span key={flag} className="text-xl sm:text-2xl">
              {flag}
            </span>
          );
        }
        return (
          <div
            key={flag}
            className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/20 via-white/15 to-white/10 p-1 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_6px_16px_rgba(243,193,68,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] group-hover:ring-gold/40">
              <Image
                src={url}
                alt={`Flag ${flag}`}
                width={size}
                height={size}
                className="rounded-full object-cover"
                style={{
                  width: variant === "grid"
                    ? `clamp(28px, 6.5vw, ${size}px)`
                    : `clamp(24px, 5vw, ${size}px)`,
                  height: variant === "grid"
                    ? `clamp(28px, 6.5vw, ${size}px)`
                    : `clamp(24px, 5vw, ${size}px)`,
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

