import Image from "next/image";
import Link from "next/link";

import type { DJProfile } from "@/config/site";
import { cn } from "@/lib/utils";

type DJCardProps = {
  dj: DJProfile;
  variant?: "default" | "compact";
  href?: string;
};

export function DJCard({ dj, variant = "default", href = "/about" }: DJCardProps) {
  const isCompact = variant === "compact";
  const initials = dj.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-1 shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] transition hover:border-white/25 sm:rounded-[2.2rem]",
        isCompact && "w-[150px] flex-shrink-0 sm:w-[180px]"
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[1.8rem] border border-[#f3c144]/50 bg-[radial-gradient(circle,#3a0007_0%,#120002_70%)]">
        {dj.image ? (
          <Image
            src={dj.image}
            alt={dj.name}
            fill
            sizes="(max-width:768px) 100vw, 320px"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            style={{ objectPosition: dj.imagePosition ?? "center top" }}
            priority={dj.id === "dj-stylz-uk"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f3c144] via-[#f9d969] to-[#d5a12c] text-3xl font-bold text-[#2a0204]">
            {initials}
          </div>
        )}
      </div>
      <div className={cn("p-5 text-center", isCompact && "p-2.5 sm:p-3")}>
        <h3 className="text-xl font-semibold text-white">{dj.name}</h3>
      </div>
    </Link>
  );
}

