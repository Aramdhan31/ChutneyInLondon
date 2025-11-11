import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Flame, MapPin, Ticket } from "lucide-react";

import type { FeaturedEvent } from "@/config/site";

type FeaturedEventBannerProps = {
  event: FeaturedEvent;
};

export function FeaturedEventBanner({ event }: FeaturedEventBannerProps) {
  return (
    <section className="relative mx-auto mt-6 max-w-6xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[rgba(26,0,3,0.88)] shadow-[0_24px_70px_rgba(59,0,4,0.5)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-[240px] sm:h-[300px] lg:h-full">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,0,3,0.85)] via-transparent to-transparent lg:hidden" />
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[#f3c144]/30 bg-[rgba(243,193,68,0.18)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold shadow-[0_8px_24px_rgba(243,193,68,0.3)] sm:left-6 sm:top-6 sm:px-4">
              <Flame className="h-4 w-4" />
              Limited tickets
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(53,1,4,0.7)] px-4 py-1 text-xs uppercase tracking-[0.4em] text-gold">
                Featured Event
              </span>
              <h2 className="text-[1.8rem] font-semibold text-white sm:text-3xl md:text-4xl">{event.title}</h2>
              <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm">{event.subtitle}</p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              {event.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-3 text-sm text-white sm:grid-cols-2">
              <div className="inline-flex items-start gap-3 text-muted">
                <CalendarDays className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-white">{event.date}</p>
                  <p>{event.time}</p>
                </div>
              </div>
              <div className="inline-flex items-start gap-3 text-muted">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-white">{event.venue}</p>
                  <p>{event.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-white/70 sm:text-xs">
              {event.genres.map((genre) => (
                <span key={genre} className="rounded-full border border-white/10 px-3 py-1 text-white/80">
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-white/70">
                DJs: {event.djs.join(" • ")}
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">Limited quantities</span>
                <Link
                  href={event.ticketLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f3c144]/40 bg-[rgba(243,193,68,0.12)] px-6 py-3 text-sm font-semibold text-gold shadow-[0_12px_30px_rgba(243,193,68,0.25)] transition hover:bg-[rgba(243,193,68,0.18)] hover:text-white"
                >
                  <Ticket className="h-4 w-4" />
                  {event.ticketLabel ?? "Book Tickets"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

