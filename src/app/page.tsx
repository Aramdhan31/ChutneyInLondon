"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { BrandSeal } from "@/components/brand-seal";
import { DJCard } from "@/components/dj-card";
import { EventPopup } from "@/components/event-popup";
import { EventbriteWidget } from "@/components/eventbrite-widget";
import { FeaturedEventBanner } from "@/components/featured-event-banner";
import { InstagramFeed } from "@/components/instagram-feed";
import { NewsletterForm } from "@/components/newsletter-form";
import { SocialCard } from "@/components/social-card";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [marqueeDuration, setMarqueeDuration] = useState(30);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobileQuery = window.matchMedia("(max-width: 640px)");

    const updateDuration = () => {
      setMarqueeDuration(mobileQuery.matches ? 18 : 30);
    };

    updateDuration();
    mobileQuery.addEventListener("change", updateDuration);

    return () => {
      mobileQuery.removeEventListener("change", updateDuration);
    };
  }, []);

  const handleClosePopup = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cil_popup_seen", "true");
    }
    setShowPopup(false);
  };

  return (
    <div className="space-y-24 pb-24">
      <EventPopup open={showPopup} onClose={handleClosePopup} />
      <section className="relative overflow-hidden rounded-b-[1.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,222,120,0.14),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(255,68,68,0.1),transparent_45%),linear-gradient(180deg,rgba(53,1,4,0.95) 0%,rgba(53,1,4,0.78) 70%,rgba(53,1,4,0.88) 100%)] px-4 pb-10 pt-4 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 sm:grid sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] sm:items-center sm:gap-8">
          <motion.div
            className="order-1 w-full space-y-4 text-center text-white sm:order-none sm:text-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(53,1,4,0.65)] px-3 py-[4px] text-[8.6px] uppercase tracking-[0.32em] text-gold shadow-[0_10px_24px_rgba(243,193,68,0.25)] sm:mx-0 sm:text-[10px]"
            >
              DJ Stylz UK Presents
            </span>
            <h1
              className="text-[1.85rem] font-semibold leading-[1.05] sm:text-[2.6rem] sm:leading-tight md:text-[3.1rem] lg:text-[3.8rem]"
              style={{ textShadow: "0 12px 30px rgba(216,15,36,0.45)" }}
            >
              {siteConfig.name}
            </h1>
            <p className="text-[0.88rem] leading-relaxed text-muted sm:text-[1.05rem] md:text-lg">
              UK’s No1 IndoCaribbean Party Experience. Specialists in Chutney, Soca, Bollywood, Dancehall plus global fusion — culture and events that feel like home.
            </p>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3">
              <Link href="/events" className="btn-gold w-full sm:w-auto sm:px-7">
                See Upcoming Events
              </Link>
              <Link href="/music-media" className="btn-gold-outline w-full sm:w-auto sm:px-7 text-sm font-semibold">
                Listen Now
              </Link>
            </div>
            <div className="mt-5 hidden items-center gap-2 text-[11px] uppercase tracking-[0.42em] text-gold sm:flex">
              <span className="h-[1px] w-8 bg-gold/60" aria-hidden />
              Swipe below to explore the crew
            </div>
          </motion.div>
          <motion.div
            className="order-2 flex w-full justify-center sm:order-none sm:justify-end"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="w-full max-w-[130px] sm:max-w-[220px] lg:max-w-[340px]">
              <BrandSeal flags={siteConfig.accentFlags} />
            </div>
          </motion.div>
        </div>
      </section>

      {siteConfig.featuredEvent ? (
        <FeaturedEventBanner event={siteConfig.featuredEvent} />
      ) : null}

      <section>
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
          <SectionHeading
            eyebrow="The Crew"
            title="Meet the Chutney in London selectors"
            description="The residents and hosts shaping every BYOB takeover—from tassa-driven anthems to late-night riddims."
          />
          {!siteConfig.residentDJs.length ? (
            <p className="text-sm text-muted">DJ lineup coming soon.</p>
          ) : (
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-4 pb-2 sm:pb-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: marqueeDuration, ease: "linear", repeat: Infinity }}
              >
                {[...siteConfig.residentDJs, ...siteConfig.residentDJs].map((dj, index) => (
                  <DJCard key={`${dj.id}-${index}`} dj={dj} variant="compact" />
                ))}
              </motion.div>
            </div>
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
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-gold">Eventbrite</p>
                <EventbriteWidget widgetUrl={siteConfig.featuredEvent.widgetUrl} />
              </div>
              <div className="space-y-6 rounded-[2.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-8 shadow-[0_24px_60px_rgba(59,0,4,0.5)]">
                <div className="space-y-3 text-sm text-muted">
                  <p className="text-lg font-semibold text-white">{siteConfig.featuredEvent.title}</p>
                  {siteConfig.featuredEvent.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {siteConfig.featuredEvent.services.map((line) => (
                    <li key={line} className="rounded-2xl border border-white/10 bg-[rgba(53,1,4,0.65)] px-4 py-3">
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="space-y-1 text-sm text-muted">
                  <p className="font-semibold text-white">Need a table or bringing a large crew?</p>
                  <p>
                    WhatsApp the team at{" "}
                    <Link href={`tel:${siteConfig.featuredEvent.contact}`} className="text-gold">
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
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Instagram"
            title="Latest from @chutneyinlondon"
            description="Reels, highlights, and backstage moments from DJ Stylz UK. Tap through to follow the daily vibes."
          />
          <InstagramFeed username="chutneyinlondon" />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
          <SectionHeading
            title="SoundCloud & Mixcloud Sessions"
          />
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
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
