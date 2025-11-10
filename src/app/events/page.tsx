import { siteConfig } from "@/config/site";
import { EventCard } from "@/components/event-card";
import { FeaturedEventBanner } from "@/components/featured-event-banner";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Events | Chutney in London",
  description:
    "Secure your spot at upcoming Chutney in London events, view the latest BYOB takeovers, and revisit past vibes curated by DJ Stylz UK.",
};

export default function EventsPage() {
  const { featuredEvent, upcomingEvents, pastEvents } = siteConfig;

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

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Upcoming"
            title="Secure your spot inside the next fete"
            description="Limited-capacity events go fast—tap in early to avoid missing the vibes."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Past vibes"
            title="Rewind the moments we already shut down"
            description="From Diwali Bass to Soca on the Thames, here’s a taste of previous Chutney in London experiences."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} showTickets={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

