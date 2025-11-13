import { cn } from "@/lib/utils";

type EventbriteWidgetProps = {
  widgetUrl: string;
  className?: string;
};

export function EventbriteWidget({ widgetUrl, className }: EventbriteWidgetProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-white/12 bg-[rgba(26,0,3,0.85)] shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)]",
        className
      )}
    >
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
        <iframe
          title="Eventbrite tickets"
          src={widgetUrl}
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full border-0"
          allowFullScreen
          scrolling="auto"
        />
      </div>
    </div>
  );
}

