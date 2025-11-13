import Link from "next/link";
import { type LucideIcon, ArrowUpRight, Instagram, Music4, Radio, Ticket } from "lucide-react";

import type { SocialSpotlight } from "@/config/site";
import { cn } from "@/lib/utils";

const platformIcon: Record<SocialSpotlight["platform"], LucideIcon> = {
  instagram: Instagram,
  soundcloud: Music4,
  eventbrite: Ticket,
  mixcloud: Radio,
};

type SocialCardProps = {
  spotlight: SocialSpotlight;
  className?: string;
};

export function SocialCard({ spotlight, className }: SocialCardProps) {
  const Icon = platformIcon[spotlight.platform];
  const embedHeightClass =
    spotlight.platform === "soundcloud"
      ? "h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem]"
      : "h-[14rem] sm:h-64 md:h-[18rem]";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[1.9rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-4 sm:p-5 md:p-6 shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] transition hover:border-white/25 lg:rounded-[2.2rem]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[rgba(243,193,68,0.15)] text-gold shadow-[0_6px_18px_rgba(243,193,68,0.2)] flex-shrink-0">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] text-gold truncate">{spotlight.title}</p>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-white truncate">{spotlight.handle}</p>
          </div>
        </div>
        <Link
          href={spotlight.href}
          target="_blank"
          rel="noreferrer"
          className="btn-gold-outline btn-gold-outline-compact gap-1 sm:gap-1.5 md:gap-2 text-[10px] sm:text-[9px] md:text-[10px] flex-shrink-0 min-h-[2.25rem] sm:min-h-[2.25rem] md:min-h-[2.5rem] px-2.5 sm:px-2.5 md:px-3"
        >
          <span className="uppercase tracking-[0.25em] sm:tracking-[0.28em] md:tracking-[0.32em]">Visit</span>
          <ArrowUpRight className="h-3 w-3 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
        </Link>
      </div>
      <p className="mt-2.5 sm:mt-3 md:mt-4 text-sm sm:text-xs md:text-sm leading-relaxed text-muted">{spotlight.description}</p>
      {spotlight.embedUrl ? (
        <div className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-5 overflow-hidden rounded-[1rem] sm:rounded-[1.2rem] md:rounded-[1.4rem] border border-white/12 bg-black/40">
          <iframe
            src={spotlight.embedUrl}
            title={`${spotlight.title} embed`}
            className={cn("w-full", embedHeightClass)}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ minHeight: '200px' }}
          />
        </div>
      ) : (
        <div className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-5 flex flex-col gap-1.5 sm:gap-2 rounded-[1rem] sm:rounded-[1.2rem] md:rounded-[1.4rem] border border-white/10 bg-[rgba(53,1,4,0.6)] p-3 sm:p-3 md:p-4 text-xs sm:text-[11px] md:text-sm text-muted leading-relaxed">
          <span className="font-semibold text-white text-sm sm:text-[11px] md:text-sm">Stay tapped in:</span>
          <span>Tap visit to explore the latest posts and RSVP links directly.</span>
        </div>
      )}
    </div>
  );
}

