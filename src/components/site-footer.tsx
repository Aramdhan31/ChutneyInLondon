import Link from "next/link";

import { siteConfig } from "@/config/site";
import { FlagStrip } from "@/components/flag-strip";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[rgba(53,1,4,0.95)]">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,193,68,0.18),transparent_50%),radial-gradient(circle_at_bottom,rgba(216,15,36,0.35),transparent_55%)]" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] sm:px-6">
          <div className="space-y-5">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Chutney in London</span>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              {siteConfig.tagline}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>
          <FlagStrip flags={siteConfig.accentFlags} className="justify-start" size={30} />
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-muted">
              {siteConfig.navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Connect
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-muted">
              {siteConfig.socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="transition hover:text-gold"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </Link>
              ))}
              <Link href="mailto:info@chutneyinlondon.com" className="transition hover:text-gold">
                info@chutneyinlondon.com
              </Link>
              <Link href={siteConfig.contact.whatsapp} className="transition hover:text-gold">
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-[rgba(30,0,4,0.95)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="tracking-[0.2em] uppercase text-white/70">
            © {new Date().getFullYear()} Chutney in London. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal/privacy" className="transition hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="transition hover:text-gold">
              Terms & Conditions
            </Link>
            <Link href="/legal/cookies" className="transition hover:text-gold">
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

