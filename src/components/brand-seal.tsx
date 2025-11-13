import Image from "next/image";

import { siteConfig } from "@/config/site";
import { FlagStrip } from "@/components/flag-strip";
import { cn } from "@/lib/utils";

type BrandSealProps = {
  className?: string;
  flags?: string[];
};

const LOGO_PATH = "/355866353_1436703107143090_803681614561195118_n.jpg";

export function BrandSeal({ className, flags }: BrandSealProps) {
  const displayFlags = flags || siteConfig.accentFlags;

  return (
    <div
      className={cn(
        "relative mx-auto w-full sm:max-w-sm lg:max-w-md",
        className
      )}
      style={{ maxWidth: "min(440px, 96vw)" }}
    >
      <div className="pointer-events-none absolute inset-x-4 -top-10 -z-10 h-[420px] rounded-full bg-[radial-gradient(circle,rgba(243,193,68,0.5),transparent_68%)] blur-3xl opacity-95 sm:inset-x-10 sm:h-[440px]" />
      <div className="relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-[rgba(26,0,3,0.82)] p-6 shadow-[0_28px_64px_rgba(18,0,3,0.55)] backdrop-blur-md sm:rounded-[2.6rem] sm:p-7">
        <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-[1.55rem] border border-[#f3c144]/55 bg-[radial-gradient(circle,#3a0007_6%,#120002_72%)] sm:max-w-none">
          <Image
            src={LOGO_PATH}
            alt="Chutney in London logo"
            fill
            priority
            sizes="(max-width: 480px) 70vw, (max-width: 768px) 40vw, 360px"
            className="object-contain p-4 sm:p-6 lg:p-8"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[1.55rem] bg-[radial-gradient(circle,transparent_34%,rgba(243,193,68,0.26))] sm:rounded-[2.4rem]" />
        </div>
        <div className="mt-5 sm:mt-6">
          <FlagStrip
            flags={displayFlags}
            className="justify-center"
            size={36}
            columns={4}
          />
        </div>
      </div>
    </div>
  );
}


