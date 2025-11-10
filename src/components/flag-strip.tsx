import Image from "next/image";

import { cn } from "@/lib/utils";
import { flagToTwemoji } from "@/lib/emoji";

type FlagStripProps = {
  flags: string[];
  className?: string;
  size?: number;
};

export function FlagStrip({ flags, className, size = 32 }: FlagStripProps) {
  const filtered = flags.filter(Boolean);

  if (!filtered.length) return null;

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
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
              style={{ width: size, height: size }}
            />
          </span>
        );
      })}
    </div>
  );
}

