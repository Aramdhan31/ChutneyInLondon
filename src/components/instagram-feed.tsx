import { cn } from "@/lib/utils";

type InstagramFeedProps = {
  username: string;
  className?: string;
};

export function InstagramFeed({ username, className }: InstagramFeedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.8rem] border border-white/12 bg-[rgba(26,0,3,0.75)] shadow-[0_24px_50px_-18px_rgba(216,15,36,0.55)]",
        className
      )}
    >
      <iframe
        src={`https://www.instagram.com/${username}/embed/`}
        title={`Instagram feed for ${username}`}
        loading="lazy"
        className="h-[620px] w-full min-h-[620px] rounded-[2rem] border border-white/10 bg-white sm:h-[720px] md:h-[840px]"
        sandbox="allow-scripts allow-same-origin allow-popups"
        frameBorder="0"
        scrolling="yes"
        allowTransparency
      />
    </div>
  );
}

