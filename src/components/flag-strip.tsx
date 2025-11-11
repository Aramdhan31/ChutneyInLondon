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
          ? "grid justify-items-center gap-1.5 text-center sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2.5"
          : "flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:items-center sm:justify-center sm:gap-2.5 sm:overflow-visible sm:pb-0",
        className
      )}
      style={
        variant === "grid"
          ? {
              gridTemplateColumns: `repeat(${effectiveColumns}, minmax(26px, 1fr))`,
            }
          : undefined
      }
    >
      {filtered.map((flag) => {
        const url = flagToTwemoji(flag);
        if (!url) {
          return (
            <span key={flag} className="text-lg">
              {flag}
            </span>
          );
        }
        return (
          <span key={flag} className="relative inline-flex items-center justify-center">
            <Image
              src={url}
              alt={`Flag ${flag}`}
              width={size}
              height={size}
              className="rounded-full bg-white/10 p-[2px] shadow-[0_6px_14px_rgba(0,0,0,0.25)]"
              style={{
                width: variant === "grid" ? `clamp(26px, 8vw, ${size}px)` : `clamp(24px, 10vw, ${size}px)`,
                height:
                  variant === "grid" ? `clamp(26px, 8vw, ${size}px)` : `clamp(24px, 10vw, ${size}px)`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

