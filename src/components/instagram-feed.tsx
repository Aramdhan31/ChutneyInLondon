import { cn } from "@/lib/utils";

type InstagramFeedProps = {
  username: string;
  className?: string;
};

export function InstagramFeed({ username, className }: InstagramFeedProps) {
  return (
    <div
      className={cn(
        "relative h-[320px] w-full overflow-hidden rounded-[1.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] sm:h-[360px] md:h-[460px]",
        className
      )}
    >
      <iframe
        src={`https://www.instagram.com/${username}/embed/`}
        title={`Instagram feed for ${username}`}
        loading="lazy"
        className="h-[520px] w-full rounded-[2rem] border border-white/10 bg-white sm:h-[640px]"
        frameBorder="0"
        allowTransparency
      />
    </div>
  );
}

