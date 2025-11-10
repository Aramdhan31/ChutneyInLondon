type EventbriteWidgetProps = {
  widgetUrl: string;
  className?: string;
};

export function EventbriteWidget({ widgetUrl, className }: EventbriteWidgetProps) {
  if (!widgetUrl) return null;

  return (
    <div className={className}>
      <iframe
        title="Eventbrite tickets"
        src={widgetUrl}
        loading="lazy"
        className="h-[630px] w-full rounded-[1.8rem] border border-white/10 bg-white"
        frameBorder="0"
        allowTransparency
      />
    </div>
  );
}

