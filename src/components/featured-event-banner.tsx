import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Flame, MapPin, Ticket } from "lucide-react";

import type { FeaturedEvent } from "@/config/site";

type FeaturedEventBannerProps = {
  event: FeaturedEvent;
};

export function FeaturedEventBanner({ event }: FeaturedEventBannerProps) {
  return (
    <section className="relative mx-auto mt-4 sm:mt-6 max-w-6xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] border border-white/12 bg-[rgba(26,0,3,0.88)] shadow-[0_24px_70px_rgba(59,0,4,0.5)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[200px] sm:h-[240px] md:h-[300px] lg:h-full">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,0,3,0.85)] via-transparent to-transparent lg:hidden" />
            <div className="absolute left-3 top-3 sm:left-4 sm:top-4 md:left-6 md:top-6 flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#f3c144]/30 bg-[rgba(243,193,68,0.18)] px-2.5 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-gold shadow-[0_8px_24px_rgba(243,193,68,0.3)]">
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Limited tickets
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="space-y-2 sm:space-y-3">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-[rgba(53,1,4,0.7)] px-3 py-1 sm:px-4 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gold">
                Featured Event
              </span>
              <h2 className="text-[1.5rem] sm:text-[1.8rem] md:text-3xl lg:text-4xl font-semibold text-white leading-tight">{event.title}</h2>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gold">{event.subtitle}</p>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted">
              {event.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-3 text-xs sm:text-sm text-white sm:grid-cols-2">
              <div className="inline-flex items-start gap-2 sm:gap-3 text-muted">
                <CalendarDays className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-white break-words">{event.date}</p>
                  <p className="break-words">{event.time}</p>
                </div>
              </div>
              <div className="inline-flex items-start gap-2 sm:gap-3 text-muted">
                <MapPin className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 text-gold flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-white break-words">{event.venue}</p>
                  <p className="break-words">{event.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.28em] sm:tracking-[0.32em] text-white/70">
              {event.genres.map((genre) => (
                <span key={genre} className="rounded-full border border-white/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-white/80">
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/70 break-words">
                DJs: <span className="normal-case">{event.djs.join(" • ")}</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2 sm:items-end">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/60">Limited quantities</span>
                <Link
                  href={event.ticketLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-[#f3c144]/40 bg-[rgba(243,193,68,0.12)] px-4 py-2.5 sm:px-5 md:px-6 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-gold shadow-[0_12px_30px_rgba(243,193,68,0.25)] transition hover:bg-[rgba(243,193,68,0.18)] hover:text-white w-full sm:w-auto min-h-[2.75rem] sm:min-h-[3rem] touch-manipulation"
                >
                  <Ticket className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{event.ticketLabel ?? "Book Tickets"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

