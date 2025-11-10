"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const mobileNavId = "mobile-nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-[rgba(53,1,4,0.95)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,193,68,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(216,15,36,0.4),transparent_60%)]" />
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={close}>
          <span
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#f3c144]/40 bg-[rgba(26,0,3,0.92)] shadow-[0_12px_35px_rgba(243,193,68,0.35)] transition group-hover:scale-105 group-hover:shadow-[0_18px_40px_rgba(243,193,68,0.45)]"
          >
            <Image
              src="/355866353_1436703107143090_803681614561195118_n.jpg"
              alt="Chutney in London logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              DJ Stylz UK Presents
            </span>
            <span className="block text-lg font-semibold text-white transition group-hover:text-gold">
              Chutney in London
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-cream)] lg:flex">
          {siteConfig.navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative pb-2 transition hover:text-gold",
                  isActive &&
                    "text-white after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[linear-gradient(90deg,#f3c144,#fff4e5,#d80f24)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/bookings"
            className="btn-gold px-6 py-[0.65rem]"
          >
            Book The Vibes
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(243,193,68,0.5)] lg:hidden"
          onClick={toggle}
          aria-controls={mobileNavId}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      <div
        id={mobileNavId}
        className={cn(
          "border-t border-white/10 bg-[rgba(53,1,4,0.95)] px-4 py-6 transition-all duration-300 lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-3 text-base font-medium text-[var(--color-cream)]">
          {siteConfig.navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-gold",
                  isActive && "bg-white/10 text-white"
                )}
                onClick={close}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {siteConfig.socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition hover:border-white/40 hover:text-gold"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

