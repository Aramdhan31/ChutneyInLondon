import Link from "next/link";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

import type { EventCard as Event } from "@/config/site";

type Props = {
  event: Event;
  variant?: "large" | "compact";
  showTickets?: boolean;
};

export function EventCard({ event, variant = "large", showTickets = true }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-[1px] transition hover:border-[rgba(243,193,68,0.6)]">
      <div
        className="relative flex h-full flex-col gap-4 rounded-[1.4rem] p-6 sm:p-7"
        style={{ backgroundImage: `linear-gradient(135deg, ${event.thumbTheme.from}, ${event.thumbTheme.to})` }}
      >
        <span className="inline-flex w-fit items-center rounded-full bg-[rgba(53,1,4,0.7)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 shadow-[0_12px_25px_rgba(0,0,0,0.25)]">
          {event.date}
        </span>
        <div className="space-y-3 text-white">
          <h3 className="text-2xl font-semibold leading-snug md:text-3xl">{event.title}</h3>
          {variant === "large" ? (
            <p className="text-sm leading-relaxed text-white/80">{event.blurb}</p>
          ) : null}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {event.date.split("•")[0]?.trim() ?? event.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>
        {showTickets && event.ticketLink ? (
          <div className="flex items-center justify-between gap-4 pt-4">
            <span className="text-sm text-white/80">{event.blurb}</span>
            <Link
              href={event.ticketLink}
              target="_blank"
              rel="noreferrer"
              className="btn-gold px-5 py-2 text-sm"
            >
              Tickets <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

