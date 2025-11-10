import Link from "next/link";

import { siteConfig } from "@/config/site";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading } from "@/components/section-heading";
import { SocialCard } from "@/components/social-card";

export const metadata = {
  title: "Music & Media | Chutney in London",
  description:
    "Stream mixes, watch live footage, and stay tapped in to DJ Stylz UK’s Chutney in London movement across SoundCloud and Instagram.",
};

export default function MusicMediaPage() {
  return (
    <div className="space-y-20 pb-24 pt-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#5d020d,transparent_60%)]" />
        <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Music & Media"
            title="Press play on the movement"
            description="Exclusive mixes, behind-the-scenes footage, and drops from the Chutney in London crew—curated by DJ Stylz UK."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.socialSpotlights.map((spotlight) => (
            <SocialCard key={spotlight.id} spotlight={spotlight} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[2.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-8 shadow-[0_24px_60px_rgba(59,0,4,0.5)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-left">
              <h3 className="text-2xl font-semibold text-white">Submit your brand or artist collaboration</h3>
              <p className="text-sm text-muted">
                Looking to feature on a Chutney in London mixtape or create branded content with DJ Stylz UK? Drop us an
                email with your concept, target audience, and timelines—we’ll come back with a tailored activation plan.
              </p>
              <Link
                href="mailto:info@chutneyinlondon.com"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-gold transition hover:border-white/40 hover:bg-[rgba(243,193,68,0.12)]"
              >
                Pitch your collaboration
              </Link>
            </div>
            <NewsletterForm description="Be first to receive new mixes, pop-up events, and exclusive drops." />
          </div>
        </div>
      </section>
    </div>
  );
}

