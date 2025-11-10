import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Flame, MapPin, Ticket } from "lucide-react";

import type { FeaturedEvent } from "@/config/site";

type FeaturedEventBannerProps = {
  event: FeaturedEvent;
};

export function FeaturedEventBanner({ event }: FeaturedEventBannerProps) {
  return (
    <section className="relative mx-auto mt-4 max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[rgba(26,0,3,0.9)] shadow-[0_28px_80px_rgba(59,0,4,0.55)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative h-full min-h-[280px] sm:min-h-[320px]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,0,3,0.85)] via-transparent to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-[#f3c144]/30 bg-[rgba(243,193,68,0.14)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold shadow-[0_10px_30px_rgba(243,193,68,0.35)]">
              <Flame className="h-4 w-4" />
              Limited tickets
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 sm:p-10">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(53,1,4,0.7)] px-4 py-1 text-xs uppercase tracking-[0.45em] text-gold">
                Featured Event
              </span>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">{event.title}</h2>
              <p className="text-sm uppercase tracking-[0.4em] text-gold">{event.subtitle}</p>
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
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
              {event.genres.map((genre) => (
                <span key={genre} className="rounded-full border border-white/10 px-4 py-2 text-white/80">
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

