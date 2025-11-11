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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timer = window.setTimeout(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const hasSeen = window.localStorage.getItem("cil_popup_seen");

      if (isMobile) {
        if (!hasSeen) {
          setShowPopup(true);
        }
      } else {
        setShowPopup(true);
      }
    }, 200);

    return () => window.clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
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
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
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
            eyebrow="Connect with the movement"
            title="Tap into socials, mixes, and ticket drops"
            description="Follow the channels DJ Stylz UK uses to share new dates, cultural spotlights, and exclusive audio from Chutney in London."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {siteConfig.socialSpotlights.map((spotlight) => (
              <SocialCard key={spotlight.id} spotlight={spotlight} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title="Flashes from recent dancefloors"
            description="Peak moments captured across London and beyond. Tap to explore the full gallery."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.galleryItems.slice(0, 8).map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(53,1,4,0.85)]"
              >
                <div
                  className="h-48 w-full bg-gradient-to-br transition duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `linear-gradient(135deg, ${item.palette.from}, ${item.palette.via}, ${item.palette.to})` }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/40 p-4 text-white transition group-hover:bg-black/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{item.category}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-xs text-white/60">{item.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Bookings"
              title="Bring Chutney in London to your stage"
              description="Corporate galas, weddings, festivals, and brand activations—we build immersive musical experiences with full cultural authenticity."
            />
            <div className="grid gap-4 text-sm text-muted sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[rgba(53,1,4,0.85)] p-5">
                <h4 className="text-lg font-semibold text-white">What you get</h4>
                <ul className="mt-3 space-y-2 list-disc pl-4">
                  <li>Headline DJ set by DJ Stylz UK</li>
                  <li>Live tassa and percussion options</li>
                  <li>Dancers, hosts, and MCs available</li>
                  <li>Custom visuals and lighting design</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[rgba(53,1,4,0.85)] p-5">
                <h4 className="text-lg font-semibold text-white">Travel ready</h4>
                <ul className="mt-3 space-y-2 list-disc pl-4">
                  <li>UK & EU coverage</li>
                  <li>North America appearances</li>
                  <li>Caribbean residencies</li>
                  <li>Virtual or hybrid events</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Trusted by</span>
              {siteConfig.partners.map((partner) => (
                <span key={partner} className="rounded-full border border-white/15 px-4 py-2 text-white/80">
                  {partner}
                </span>
              ))}
            </div>
            <Link
              href="/bookings"
              className="btn-gold"
            >
              View bookings info
            </Link>
          </div>
          <NewsletterForm description={siteConfig.newsletter.description} />
        </div>
      </section>
    </div>
  );
}
