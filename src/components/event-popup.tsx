"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Music, Phone, Ticket, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type EventPopupProps = {
  open: boolean;
  onClose: () => void;
  className?: string;
};

export function EventPopup({ open, onClose, className }: EventPopupProps) {
  const event = siteConfig.featuredEvent;

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open || !event) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-3 py-4 sm:px-4 sm:py-10">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          "relative z-10 w-full max-w-[min(420px,90vw)] sm:max-w-3xl lg:max-w-5xl rounded-[1.5rem] border border-white/15 bg-[rgba(26,0,3,0.92)] shadow-[0_40px_120px_rgba(0,0,0,0.55)]",
          className
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Close event popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex max-h-[90vh] flex-col gap-6 overflow-y-auto lg:grid lg:max-h-[80vh] lg:grid-cols-[1.05fr_0.95fr] lg:overflow-hidden">
          {/* Mobile banner image */}
          <div className="relative h-[220px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[rgba(53,1,4,0.75)] lg:hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>

          {/* Desktop photo */}
          <div className="relative hidden h-full min-h-[520px] overflow-hidden rounded-l-[1.5rem] lg:block">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,0,3,0.9)] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.8rem] border border-white/15 bg-[rgba(26,0,3,0.85)] p-5 backdrop-blur-md shadow-[0_20px_45px_rgba(216,15,36,0.6)]">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">{event.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{event.title}</h3>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <div className="inline-flex items-center gap-2 text-white">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  <span>{event.date}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Music className="h-4 w-4 text-gold" />
                  <span>{event.genres.join(" • ")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div className="space-y-3 text-sm text-muted">
              <div className="lg:hidden space-y-3 text-center">
                <p className="text-xs uppercase tracking-[0.4em] text-gold">{event.subtitle}</p>
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gold" />
                    <span>{event.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Music className="h-4 w-4 text-gold" />
                    <span>{event.genres.join(" • ")}</span>
                  </span>
                </div>
              </div>
              {event.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-4 text-sm text-white sm:grid-cols-2">
              <div className="flex items-start gap-3 text-muted">
                <CalendarDays className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-white">{event.date}</p>
                  <p>{event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-white">{event.venue}</p>
                  <p>{event.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted">
                <Music className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-white">London&apos;s Finest DJs</p>
                  <p>{event.djs.join(" • ")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-muted">
                <Phone className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-white">Advance tickets & info</p>
                  <p>{event.contact}</p>
                </div>
              </div>
            </div>

            <div className="hidden gap-4 text-sm text-muted lg:grid lg:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">What to know</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {event.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">Important</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {event.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/70 text-center sm:text-left">
                Hosted by DJ Stylz UK • Chutney in London
              </div>
              <Link
                href={event.ticketLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full sm:w-auto sm:min-w-[11rem] flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm touch-manipulation"
              >
                <Ticket className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{event.ticketLabel ?? "Buy Tickets"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

