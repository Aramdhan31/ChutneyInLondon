import { cn } from "@/lib/utils";

type EventbriteWidgetProps = {
  widgetUrl: string;
  className?: string;
};

export function EventbriteWidget({ widgetUrl, className }: EventbriteWidgetProps) {
  return (
    <div
      className={cn(
        "relative h-[320px] w-full overflow-hidden rounded-[1.5rem] border border-white/12 bg-[rgba(26,0,3,0.85)] shadow-[0_20px_45px_-18px_rgba(216,15,36,0.55)] sm:h-[380px] md:h-[480px]",
        className
      )}
    >
      <iframe
        title="Eventbrite tickets"
        src={widgetUrl}
        loading="lazy"
        className="h-full w-full"
      />
    </div>
  );
}

