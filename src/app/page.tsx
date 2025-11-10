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
      <section className="relative overflow-hidden pb-10 pt-24 sm:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#65030f 0%,rgba(53,1,4,0.9) 65%)]" />
          <div
            className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 opacity-70"
            style={{
              background: "conic-gradient(from 0deg, rgba(243,193,68,0.6), rgba(255,244,229,0.4), rgba(216,15,36,0.65), rgba(243,193,68,0.6))",
              WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 75%)",
              maskImage: "radial-gradient(circle, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 75%)",
            }}
          />
          <div
            className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full opacity-70 blur-2xl"
            style={{
              background: "radial-gradient(circle,#f3c144 0%,rgba(255,244,229,0.35) 60%, transparent 100%)",
            }}
          />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center">
          <motion.div
            className="max-w-2xl space-y-6 text-center text-white sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[rgba(53,1,4,0.75)] px-4 py-1 text-xs uppercase tracking-[0.5em] text-gold"
              style={{ boxShadow: "0 15px 35px rgba(243,193,68,0.25)" }}
            >
              DJ Stylz UK Presents
            </span>
            <h1
              className="text-4xl font-semibold leading-snug md:text-5xl lg:text-6xl"
              style={{ textShadow: "0 18px 35px rgba(216,15,36,0.4)" }}
            >
              {siteConfig.name}
            </h1>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              UK’s No1 IndoCaribbean Party Experience. Specialists in Chutney, Soca, Bollywood, Dancehall plus global fusion — culture and events that feel like home.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
              <Link
                href="/events"
                className="btn-gold px-7"
              >
                See Upcoming Events
              </Link>
              <Link
                href="/music-media"
                className="btn-gold-outline px-7 text-sm font-semibold"
              >
                Listen Now
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <BrandSeal flags={siteConfig.accentFlags} />
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
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 pb-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...siteConfig.residentDJs, ...siteConfig.residentDJs].map((dj, index) => (
                <DJCard key={`${dj.id}-${index}`} dj={dj} variant="compact" />
              ))}
            </motion.div>
          </div>
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
