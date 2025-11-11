import { siteConfig } from "@/config/site";
import { FeaturedEventBanner } from "@/components/featured-event-banner";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Events | Chutney in London",
  description:
    "Secure your spot at upcoming Chutney in London events, view the latest BYOB takeovers, and revisit past vibes curated by DJ Stylz UK.",
};

export default function EventsPage() {
  const { featuredEvent } = siteConfig;

  return (
    <div className="space-y-20 pb-24 pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#65030f_0%,rgba(53,1,4,0.95)_65%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
          <SectionHeading
            eyebrow="Events"
            title="Chutney in London live experiences"
            description="Book tickets, bring your crew, and immerse yourself in the Indo-Caribbean nightlife curated by DJ Stylz UK."
          />
        </div>
      </div>

      {featuredEvent ? <FeaturedEventBanner event={featuredEvent} /> : null}

      <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6">
        <SectionHeading
          eyebrow="Event listings"
          title="New dates coming soon"
          description="We’re prepping the next wave of BYOB takeovers and cultural mashups. Join the mailing list so you’re first to know when tickets drop."
          align="center"
        />
        <p className="text-sm text-muted">
          Missed the last fete? Follow us on SoundCloud and Mixcloud for live recordings, and watch Instagram for behind-the-scenes footage while the next event is in production.
        </p>
      </div>
    </div>
  );
}

