"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { BrandSeal } from "@/components/brand-seal";
import { DJGalleryCarousel } from "@/components/dj-gallery-carousel";
import { EventPopup } from "@/components/event-popup";
import { EventbriteWidget } from "@/components/eventbrite-widget";
import { FeaturedEventBanner } from "@/components/featured-event-banner";
import { InstagramFeed } from "@/components/instagram-feed";
import { NewsletterForm } from "@/components/newsletter-form";
import { SocialCard } from "@/components/social-card";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const soundcloudSpotlight = siteConfig.socialSpotlights.find(
    (spotlight) => spotlight.platform === "soundcloud"
  );
  const mixcloudSpotlight = siteConfig.socialSpotlights.find(
    (spotlight) => spotlight.platform === "mixcloud"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = window.setTimeout(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) return;

      const hasSeen = window.localStorage.getItem("cil_popup_seen");
      if (!hasSeen) {
        setShowPopup(true);
      }
    }, 200);

    return () => window.clearTimeout(timer);
  }, []);


  const handleClosePopup = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cil_popup_seen", "true");
    }
    setShowPopup(false);
  };

  return (
    <div className="space-y-16 sm:space-y-20 md:space-y-24 pb-12 sm:pb-16 md:pb-24">
      <EventPopup open={showPopup} onClose={handleClosePopup} />
      <section className="relative overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2rem] bg-[radial-gradient(circle_at_18%_18%,rgba(255,222,120,0.16),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(255,68,68,0.12),transparent_48%),linear-gradient(180deg,rgba(53,1,4,0.95) 0%,rgba(53,1,4,0.78) 70%,rgba(53,1,4,0.88) 100%)] px-4 pb-10 pt-10 sm:px-5 sm:pb-16 sm:pt-12 md:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:gap-12 sm:grid sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] sm:items-center sm:gap-8">
          <motion.div
            className="order-1 w-full space-y-4 sm:space-y-5 text-center text-white sm:order-none sm:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(53,1,4,0.62)] px-3 py-1.5 sm:px-3 sm:py-[5px] text-[10px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-gold shadow-[0_12px_26px_rgba(243,193,68,0.25)] sm:mx-0"
            >
              DJ Stylz UK Presents
            </span>
            <h1
              className="text-[2.25rem] sm:text-[2.2rem] font-semibold leading-[1.05] md:text-[2.6rem] md:leading-tight lg:text-[3.1rem] xl:text-[3.8rem]"
              style={{ textShadow: "0 12px 30px rgba(216,15,36,0.45)" }}
            >
              {siteConfig.name}
            </h1>
            <p className="text-base sm:text-[0.95rem] leading-relaxed text-muted md:text-[1.05rem] lg:text-lg">
              UK's No1 IndoCaribbean Party Experience. Specialists in Chutney, Soca, Bollywood, Dancehall plus global fusion — culture and events that feel like home.
            </p>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-3">
              <Link href="/events" className="btn-gold w-full shadow-[0_14px_34px_rgba(243,193,68,0.35)] sm:w-auto sm:px-7 text-center min-h-[2.75rem] sm:min-h-[3rem] touch-manipulation">
                See Upcoming Events
              </Link>
              <Link href="/music-media" className="btn-gold-outline w-full sm:w-auto sm:px-7 text-sm font-semibold text-center min-h-[2.75rem] sm:min-h-[3rem] touch-manipulation">
                Listen Now
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="order-2 flex w-full flex-col items-center gap-4 sm:order-none sm:items-end sm:gap-5"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[340px]">
              <BrandSeal flags={siteConfig.accentFlags} className="sm:translate-y-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {siteConfig.featuredEvent ? (
        <FeaturedEventBanner event={siteConfig.featuredEvent} />
      ) : null}

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="The Crew"
            title="Meet the team"
            description="The residents and hosts shaping every BYOB takeover—from tassa-driven anthems to late-night riddims."
          />
          {!siteConfig.residentDJs.length ? (
            <p className="text-sm text-muted">DJ lineup coming soon.</p>
          ) : (
            <DJGalleryCarousel djs={siteConfig.residentDJs} />
          )}
        </div>
      </section>

      {siteConfig.featuredEvent ? (
        <section>
          <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
            <SectionHeading
              eyebrow="Tickets & RSVP"
              title="Book directly on Eventbrite"
              description="Secure your place at the next BYOB takeover. Limited allocations drop first on Eventbrite—move fast."
            />
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gold">Eventbrite</p>
                <EventbriteWidget widgetUrl={siteConfig.featuredEvent.widgetUrl} />
              </div>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_24px_60px_rgba(59,0,4,0.5)]">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight">{siteConfig.featuredEvent.title}</p>
                  <div className="space-y-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {siteConfig.featuredEvent.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-muted">
                  {siteConfig.featuredEvent.services.map((line) => (
                    <li key={line} className="rounded-xl sm:rounded-2xl border border-white/10 bg-[rgba(53,1,4,0.65)] px-3 py-2 sm:px-4 sm:py-2.5 md:py-3">
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted">
                  <p className="font-semibold text-white">Need a table or bringing a large crew?</p>
                  <p className="leading-relaxed">
                    WhatsApp the team at{" "}
                    <Link href={`tel:${siteConfig.featuredEvent.contact}`} className="text-gold break-all hover:underline">
                      {siteConfig.featuredEvent.contact}
                    </Link>{" "}
                    for priority info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
            <SectionHeading
              eyebrow="Tickets & RSVP"
              title="Event coming soon"
              description="We’re busy plotting the next BYOB experience. Drop your email to be first in the queue when tickets drop."
            />
            <NewsletterForm description="Join the list to be notified the moment the next Eventbrite goes live." />
          </div>
        </section>
      )}

      <section>
        <div className="mx-auto max-w-6xl space-y-6 sm:space-y-8 md:space-y-10 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Instagram"
            title="Latest from @chutneyinlondon"
            description="Reels, highlights, and backstage moments from DJ Stylz UK. Tap through to follow the daily vibes."
          />
          <InstagramFeed username="chutneyinlondon" />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6">
          <SectionHeading
            title="SoundCloud & Mixcloud Sessions"
          />
          <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-[1.4fr_1fr]">
            {soundcloudSpotlight ? (
              <SocialCard
                key={soundcloudSpotlight.id}
                spotlight={soundcloudSpotlight}
                className="lg:p-8"
              />
            ) : null}
            {mixcloudSpotlight ? (
              <SocialCard key={mixcloudSpotlight.id} spotlight={mixcloudSpotlight} />
            ) : null}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Bookings"
            title="Booking inquiries coming soon"
            description="We’re finalising new packages for 2025. Drop your email and we’ll notify you as soon as the booking portal opens."
          />
          <NewsletterForm description="Share your email so the team can reach out with booking details once available." />
        </div>
      </section>
    </div>
  );
}
