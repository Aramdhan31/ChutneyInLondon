import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const title = "Chutney in London | DJ Stylz UK Presents";
const description = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL("https://chutneyinlondon.com"),
  title: {
    default: title,
    template: "%s | Chutney in London",
  },
  description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.foundedBy }],
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${body.variable} min-h-screen bg-body text-foreground antialiased`}
      >
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{
            background:
              "radial-gradient(circle at top,#5d020d 0%,rgba(53,1,4,0.95) 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(243,193,68,0.3) 0deg, rgba(216,15,36,0.2) 45deg, transparent 90deg, transparent 180deg, rgba(243,193,68,0.3) 225deg, rgba(216,15,36,0.25) 315deg, rgba(243,193,68,0.3) 360deg)",
          }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
