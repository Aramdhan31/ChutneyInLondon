import Image from "next/image";

import { FlagStrip } from "@/components/flag-strip";

type BrandSealProps = {
  flags?: string[];
};

const LOGO_PATH = "/355866353_1436703107143090_803681614561195118_n.jpg";

export function BrandSeal({ flags }: BrandSealProps) {
  const displayFlags = Array.isArray(flags) && flags.length ? flags : ["🇬🇧", "🇬🇾", "🇹🇹"];

  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
      <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,rgba(243,193,68,0.4),transparent_65%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[3.4rem] border border-white/15 bg-[rgba(26,0,3,0.9)] p-4 shadow-[0_28px_65px_rgba(59,0,4,0.55)]">
        <div className="relative aspect-square w-full overflow-hidden rounded-[2.6rem] border border-[#f3c144]/50 bg-[radial-gradient(circle,#3a0007_0%,#120002_70%)]">
          <Image
            src={LOGO_PATH}
            alt="Chutney in London logo"
            fill
            sizes="(max-width: 640px) 80vw, 360px"
            className="object-contain p-6"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2.6rem] bg-[radial-gradient(circle,transparent_35%,rgba(243,193,68,0.22))]" />
        </div>
      </div>
      <FlagStrip flags={displayFlags} className="mt-4" size={34} />
    </div>
  );
}


