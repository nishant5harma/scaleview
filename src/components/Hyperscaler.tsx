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

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
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
              <span className="text-gradient">every major hyperscaler</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Certified architects and engineers across AWS, Azure and Google
              Cloud. Direct vendor escalation paths, partner pricing and
              reference architectures hardened in production.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {COMPLIANCE.map((c, i) => (
              <Reveal key={c} delay={0.12 + i * 0.06}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">
                  <ShieldIcon className="h-4 w-4 text-brand" />
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
                  src="/images/logo.png"
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

            <ul className="space-y-3.5">
              {PARTNERS.map(({ Logo, color, name, tier, w }) => (
                <li
                  key={name}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-26px_rgba(10,17,36,0.5)]"
                >
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}14` }}
                  >
                    <Logo className={`${w} h-7`} style={{ color }} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-ink">{name}</p>
                    <p className="truncate text-xs text-muted">{tier}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
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
