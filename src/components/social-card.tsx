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

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.2rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-6 shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] transition hover:border-white/25",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(243,193,68,0.15)] text-gold shadow-[0_6px_18px_rgba(243,193,68,0.2)]">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">{spotlight.title}</p>
            <p className="text-lg font-semibold text-white">{spotlight.handle}</p>
          </div>
        </div>
        <Link
          href={spotlight.href}
          target="_blank"
          rel="noreferrer"
          className="btn-gold-outline px-5 py-2 text-xs uppercase tracking-[0.32em]"
        >
          Visit <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{spotlight.description}</p>
      {spotlight.embedUrl ? (
        <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-white/12 bg-black/40">
          <iframe
            src={spotlight.embedUrl}
            title={`${spotlight.title} embed`}
            className="h-64 w-full"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-2 rounded-[1.6rem] border border-white/10 bg-[rgba(53,1,4,0.6)] p-4 text-xs text-muted">
          <span className="font-semibold text-white">Stay tapped in:</span>
          <span>Tap visit to explore the latest posts and RSVP links directly.</span>
        </div>
      )}
    </div>
  );
}

