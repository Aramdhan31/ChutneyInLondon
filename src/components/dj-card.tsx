import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { DJProfile } from "@/config/site";
import { cn } from "@/lib/utils";

type DJCardProps = {
  dj: DJProfile;
  variant?: "default" | "compact";
  href?: string;
};

export function DJCard({ dj, variant = "default", href = "/about" }: DJCardProps) {
  const router = useRouter();
  const isCompact = variant === "compact";
  const initials = dj.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === "Enter" || event.key === " ") && href) {
      event.preventDefault();
      router.push(href);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[rgba(26,0,3,0.85)] shadow-[0_20px_55px_-25px_rgba(216,15,36,0.5)] transition hover:border-white/20",
        isCompact ? "min-w-[220px] max-w-[220px] p-4" : "p-5"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(53,1,4,0.75)]",
          isCompact ? "h-[180px]" : "h-[230px]"
        )}
      >
        {dj.image ? (
          <Image
            src={dj.image}
            alt={dj.name}
            fill
            sizes="(max-width:768px) 100vw, 320px"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            priority={dj.id === "dj-stylz-uk"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f3c144] via-[#f9d969] to-[#d5a12c] text-3xl font-bold text-[#2a0204]">
            {initials}
          </div>
        )}
      </div>
      <div className={cn("text-sm text-muted", isCompact ? "mt-3 space-y-2" : "mt-4 space-y-3")}>
        <div>
          {dj.role && !isCompact ? (
            <p className="text-xs uppercase tracking-[0.4em] text-gold">{dj.role}</p>
          ) : null}
          <h3 className={cn("text-white", isCompact ? "text-base font-semibold" : "mt-1 text-xl font-semibold")}>
            {dj.name}
          </h3>
        </div>
        {dj.bio && !isCompact ? <p>{dj.bio}</p> : null}
        {dj.socials && !isCompact ? (
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-gold">
            {dj.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/35 hover:bg-[rgba(243,193,68,0.16)]"
              >
                {social.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

