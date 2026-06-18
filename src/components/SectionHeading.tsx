import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-cyan" : "text-brand"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.25rem] lg:text-[2.7rem] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-base leading-relaxed sm:mt-5 ${
              light ? "text-white/60" : "text-muted"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
