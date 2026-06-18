import Reveal from "./Reveal";
import CountUp from "./CountUp";

const STATS = [
  { to: 1.2, suffix: "B+", decimals: 1, label: "Requests served daily" },
  { to: 70, suffix: "%", label: "Faster time to market" },
  { to: 15, suffix: "min", label: "Critical response time" },
  { to: 24, suffix: "/7", label: "Monitoring & support" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand/25 blur-[120px]" />

      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-2 text-sm text-white/55">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
