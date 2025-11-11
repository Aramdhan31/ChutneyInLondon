import Image from "next/image";

import { FlagStrip } from "@/components/flag-strip";

type BrandSealProps = {
  flags?: string[];
};

const LOGO_PATH = "/355866353_1436703107143090_803681614561195118_n.jpg";

export function BrandSeal({ flags }: BrandSealProps) {
  const displayFlags = Array.isArray(flags) && flags.length ? flags : ["🇬🇧", "🇬🇾", "🇹🇹"];

  return (
    <div className="relative mx-auto w-full max-w-[80vw] sm:max-w-sm lg:max-w-md">
      <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(circle,rgba(243,193,68,0.4),transparent_65%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-[rgba(26,0,3,0.9)] p-3 shadow-[0_28px_65px_rgba(59,0,4,0.55)] sm:rounded-[3.4rem] sm:p-4 lg:p-6">
        <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-[#f3c144]/50 bg-[radial-gradient(circle,#3a0007_0%,#120002_70%)] sm:rounded-[2.6rem]">
          <Image
            src={LOGO_PATH}
            alt="Chutney in London logo"
            fill
            priority
            sizes="(max-width: 480px) 70vw, (max-width: 768px) 40vw, 360px"
            className="object-contain p-5 sm:p-6 lg:p-8"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,transparent_35%,rgba(243,193,68,0.22))] sm:rounded-[2.6rem]" />
        </div>
      </div>
      <FlagStrip
        flags={displayFlags}
        className="mt-4 gap-2 sm:mt-5 sm:gap-3"
        size={38}
      />
    </div>
  );
}


