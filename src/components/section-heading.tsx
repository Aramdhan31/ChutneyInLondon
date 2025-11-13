import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-[rgba(53,1,4,0.8)] px-3 py-1 sm:px-4 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.45em] text-gold shadow-[0_0_25px_rgba(243,193,68,0.25)]"
          style={{ boxShadow: "0 12px 30px rgba(243,193,68,0.18)" }}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight"
        style={{
          textShadow: "0 12px 30px rgba(216,15,36,0.35)",
        }}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("max-w-2xl text-base sm:text-base md:text-lg leading-relaxed text-muted", align === "center" && "mx-auto")}>{description}</p>
      ) : null}
    </div>
  );
}

