import Link from "next/link";

import { siteConfig } from "@/config/site";
import { FlagStrip } from "@/components/flag-strip";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Contact | Chutney in London",
  description:
    "Book DJ Stylz UK, enquire about events, or partner with Chutney in London. Reach the team directly via email, WhatsApp, or socials.",
};

const inquiryTypes = [
  { title: "Bookings & residencies", detail: "Corporate galas • Weddings • Festival stages • Club takeovers" },
  { title: "Brand & media collaborations", detail: "Mixtapes • Content takeovers • Pop-up activations" },
  { title: "Vendors & performers", detail: "Food partners • Hosts • Dancers • Live percussion" },
];

export default function ContactPage() {
  const { contact, socialLinks, accentFlags } = siteConfig;

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 pb-12 sm:pb-16 md:pb-24 pt-12 sm:pt-16 md:pt-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#5b000b,transparent_60%)]" />
        <div className="mx-auto max-w-4xl space-y-4 sm:space-y-6 px-4 text-center sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Connect with the Chutney in London team"
            description="Lock in DJ Stylz UK for your event, collaborate on cultural projects, or reach out with press enquiries."
          />
          <FlagStrip flags={accentFlags} className="justify-center" size={28} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 sm:space-y-6 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-5 sm:p-6 md:p-8 shadow-[0_24px_60px_rgba(59,0,4,0.5)]">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Reach us directly</h3>
            <div className="space-y-3 sm:space-y-4 text-sm text-muted">
              <div>
                <p className="text-white mb-1">Email</p>
                <Link href={`mailto:${contact.email}`} className="text-gold break-all">
                  {contact.email}
                </Link>
              </div>
              <div>
                <p className="text-white mb-1">WhatsApp</p>
                <Link href={contact.whatsapp} className="text-gold">
                  Message the team
                </Link>
              </div>
              <div>
                <p className="text-white mb-1">Press kit</p>
                <Link href={contact.pressKit} className="text-gold">
                  Download assets
                </Link>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">Let us know what you're planning</h4>
              <ul className="space-y-2 text-sm text-muted">
                {inquiryTypes.map((item) => (
                  <li key={item.title} className="rounded-xl sm:rounded-2xl border border-white/10 bg-[rgba(53,1,4,0.65)] px-3 py-2.5 sm:px-4 sm:py-3">
                    <p className="font-semibold text-white mb-1">{item.title}</p>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-1 sm:space-y-2 text-sm text-muted">
              <p className="text-white">Office HQ</p>
              <p>London, United Kingdom</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-5 sm:p-6 md:p-8 shadow-[0_24px_60px_rgba(59,0,4,0.5)]">
              <h4 className="text-base sm:text-lg font-semibold text-white">Stay connected</h4>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted">
                Follow our primary channels for nightly highlights, ticket drops, and exclusive music releases.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gold">
                {socialLinks.slice(0, 3).map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 px-3 py-1.5 sm:px-4 sm:py-2 transition hover:border-white/40 hover:bg-[rgba(243,193,68,0.12)]"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
            <NewsletterForm description="Plug in for upcoming events, mixtape drops, and exclusive offers." />
          </div>
        </div>
      </section>
    </div>
  );
}

