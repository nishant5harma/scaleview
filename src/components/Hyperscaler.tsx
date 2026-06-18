import Image from "next/image";
import Reveal from "./Reveal";
import { AwsLogo, AzureLogo, CheckIcon, ShieldIcon } from "./Icons";

const PARTNERS = [
  {
    Logo: AwsLogo,
    color: "#FF9900",
    name: "AWS Partner Network",
    tier: "Advanced Consulting Partner",
    w: "w-14",
  },
  {
    Logo: AzureLogo,
    color: "#0078D4",
    name: "Microsoft Azure",
    tier: "Solutions Partner — Infrastructure",
    w: "w-8",
  },
];

const COMPLIANCE = [
  "SOC 2 aligned",
  "GDPR ready",
  "ISO 27001 controls",
  "Zero-trust by default",
];

export default function Hyperscaler() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />

      <div className="container-x relative grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* LEFT — copy + compliance */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Hyperscaler ecosystem
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.7rem]">
              Production-grade cloud on{" "}
              <span className="text-gradient">AWS and Azure</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Certified architects and engineers across AWS and Microsoft
              Azure. Direct vendor escalation paths, partner pricing and
              reference architectures hardened in production.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5">
            {COMPLIANCE.map((c, i) => (
              <Reveal key={c} delay={0.12 + i * 0.06}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                  <ShieldIcon className="h-3.5 w-3.5 shrink-0 text-brand sm:h-4 sm:w-4" />
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT — verified partner cards + ecosystem hub */}
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] border border-line bg-gradient-to-b from-white to-[#f5f7fc] p-6 shadow-card sm:p-8">
            {/* hub header */}
            <div className="mb-6 flex items-center gap-3 border-b border-line pb-6">
              <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-xl shadow-[0_8px_20px_-8px_rgba(11,92,255,0.7)]">
                <Image
                  src="/images/logo.webp"
                  alt="ScaleView"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink">
                  ScaleView <span className="text-muted">×</span> Hyperscalers
                </p>
                <p className="text-xs text-muted">
                  Verified partnerships & vendor escalation
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {PARTNERS.map(({ Logo, color, name, tier, w }) => (
                <li
                  key={name}
                  className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-26px_rgba(10,17,36,0.5)] sm:flex-row sm:items-center sm:gap-4"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3.5 sm:gap-4">
                    <span
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12"
                      style={{ backgroundColor: `${color}14` }}
                    >
                      <Logo className={`${w} h-6 sm:h-7`} style={{ color }} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold leading-snug text-ink">{name}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted sm:text-sm">
                        {tier}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center gap-1.5 self-start rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 sm:self-center">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    Verified
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
