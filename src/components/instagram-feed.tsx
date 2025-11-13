import { cn } from "@/lib/utils";

type InstagramFeedProps = {
  username: string;
  className?: string;
};

export function InstagramFeed({ username, className }: InstagramFeedProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.75rem] lg:rounded-[1.8rem] border border-white/12 bg-[rgba(26,0,3,0.75)] shadow-[0_24px_50px_-18px_rgba(216,15,36,0.55)]",
        className
      )}
    >
      <div className="relative w-full overflow-hidden">
        <iframe
          src={`https://www.instagram.com/${username}/embed/`}
          title={`Instagram feed for ${username}`}
          loading="lazy"
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] min-h-[400px] sm:min-h-[500px] border-0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          frameBorder="0"
          scrolling="yes"
          allowFullScreen
        />
      </div>
    </div>
  );
}

