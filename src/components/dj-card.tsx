import Image from "next/image";
import Link from "next/link";

import type { DJProfile } from "@/config/site";

type DJCardProps = {
  dj: DJProfile;
};

export function DJCard({ dj }: DJCardProps) {
  const initials = dj.name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[rgba(26,0,3,0.85)] p-5 shadow-[0_20px_55px_-25px_rgba(216,15,36,0.5)] transition hover:border-white/20">
      <div className="relative h-[200px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(53,1,4,0.75)]">
        {dj.image ? (
          <Image
            src={dj.image}
            alt={dj.name}
            fill
            sizes="(max-width:768px) 100vw, 320px"
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
            priority={dj.id === "dj-stylz-uk"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f3c144] via-[#f9d969] to-[#d5a12c] text-3xl font-bold text-[#2a0204]">
            {initials}
          </div>
        )}
      </div>
      <div className="mt-4 space-y-3 text-sm text-muted">
        <div>
          {dj.role ? <p className="text-xs uppercase tracking-[0.4em] text-gold">{dj.role}</p> : null}
          <h3 className="mt-1 text-xl font-semibold text-white">{dj.name}</h3>
        </div>
        {dj.bio ? <p>{dj.bio}</p> : null}
        {dj.socials ? (
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-gold">
            {dj.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/35 hover:bg-[rgba(243,193,68,0.16)]"
              >
                {social.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

