import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Accordion from "./Accordion";
import { ArrowRight, CheckIcon } from "./Icons";
import { SERVICES } from "@/lib/services";
import {
  CLOUD_CTA,
  CLOUD_FAQS,
  CLOUD_HERO,
  CLOUD_SERVICES_SECTION,
  CLOUD_WHY_MATTER,
  CLOUD_WHY_US_SECTION,
  MIGRATION_PATHS_SECTION,
  MIGRATION_PROCESS_SECTION,
  SIX_RS_SECTION,
} from "@/lib/cloud-services-content";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const titleClass = light ? "text-white" : "text-ink";
  const descClass = light ? "text-white/65" : "text-muted";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${descClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function SectionImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-card ${className}`}
    >
      <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand/10 to-cyan/10 blur-2xl" />
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function parseStep(step: string) {
  const match = step.match(/^(\d+)\.\s+([^.]+)\.\s+(.*)$/);
  if (!match) return { num: "", title: step, text: "" };
  return { num: match[1], title: match[2], text: match[3] };
}

export default function CloudServicesPage() {
  return (
    <main className="pt-[4.5rem]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-12 text-white sm:pb-24 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
        <div className="pointer-events-none absolute -left-24 -top-10 h-96 w-96 rounded-full bg-brand/25 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan/20 blur-[130px]" />

        <div className="container-x relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs font-medium text-white/40">
              <Link href="/" className="transition-colors hover:text-white/70">
                Home
              </Link>
              <span>/</span>
              <Link href="/#services" className="transition-colors hover:text-white/70">
                Services
              </Link>
              <span>/</span>
              <span className="text-white/70">Cloud Services</span>
            </nav>
          </Reveal>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl lg:max-w-none">
              <Reveal>
                <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
                  {CLOUD_HERO.title}
                </h1>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
                  {CLOUD_HERO.description}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-9">
                  <a
                    href="#contact"
                    data-lead
                    className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(11,92,255,0.9)] transition-all hover:bg-brand-600"
                  >
                    {CLOUD_HERO.primaryCta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand/20 to-cyan/15 blur-2xl" />
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
                  <Image
                    src="/images/cloud-svc/hero.webp"
                    alt="Cloud migration and modernization"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-[#f5f7fc] py-20 sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <SectionHeader
                  eyebrow="Why it matters"
                  title={CLOUD_WHY_MATTER.heading}
                />
              </Reveal>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {CLOUD_WHY_MATTER.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.05 + i * 0.04}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {CLOUD_WHY_MATTER.closing}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <SectionImage
                src={CLOUD_WHY_MATTER.image}
                alt="Cloud migration strategy"
              />
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {CLOUD_WHY_MATTER.benefits.map((b, i) => (
              <Reveal key={b} delay={0.1 + i * 0.04}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-sm">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/80">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="What we do"
              title={CLOUD_SERVICES_SECTION.heading}
              description={CLOUD_SERVICES_SECTION.intro}
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {CLOUD_SERVICES_SECTION.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06}>
                <article className="group flex h-full gap-5 rounded-2xl border border-line bg-[#f5f7fc] p-6 transition-all duration-300 hover:border-brand/25 hover:bg-white hover:shadow-card sm:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan font-display text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(11,92,255,0.7)]">
                    {s.num}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {s.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MIGRATION PATHS */}
      <section className="bg-[#f5f7fc] py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Migration paths"
              title={MIGRATION_PATHS_SECTION.heading}
              description={MIGRATION_PATHS_SECTION.intro}
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {MIGRATION_PATHS_SECTION.paths.map((path, i) => (
              <Reveal key={path.title} delay={(i % 2) * 0.06}>
                <article className="group flex h-full gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-brand/25 hover:shadow-card sm:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan font-display text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(11,92,255,0.7)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                      {path.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {path.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 R's */}
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Strategy per workload"
              title={SIX_RS_SECTION.heading}
              description={SIX_RS_SECTION.intro}
              align="center"
              light
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="w-[18%] px-6 py-4 font-semibold text-white">Strategy</th>
                    <th className="w-[42%] px-6 py-4 font-semibold text-white">What It Means</th>
                    <th className="px-6 py-4 font-semibold text-white">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {SIX_RS_SECTION.rows.map((row, i) => (
                    <tr
                      key={row.strategy}
                      className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}
                    >
                      <td className="px-6 py-4 align-top font-display font-semibold text-cyan">
                        {row.strategy}
                      </td>
                      <td className="px-6 py-4 align-top text-white/80">{row.meaning}</td>
                      <td className="px-6 py-4 align-top text-white/60">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:hidden">
            {SIX_RS_SECTION.rows.map((row, i) => (
              <Reveal key={row.strategy} delay={0.08 + i * 0.04}>
                <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-display text-lg font-semibold text-cyan">
                    {row.strategy}
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    <span className="font-medium text-white/50">What It Means: </span>
                    {row.meaning}
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    <span className="font-medium text-white/50">Best For: </span>
                    {row.bestFor}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-white/60">
              {SIX_RS_SECTION.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="How we run it"
              title={MIGRATION_PROCESS_SECTION.heading}
              description={MIGRATION_PROCESS_SECTION.intro}
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {MIGRATION_PROCESS_SECTION.steps.map((step, i) => {
              const { num, title, text } = parseStep(step);
              return (
                <Reveal key={step} delay={(i % 3) * 0.06}>
                  <article className="group flex h-full gap-5 rounded-2xl border border-line bg-[#f5f7fc] p-6 transition-all duration-300 hover:border-brand/25 hover:bg-white hover:shadow-card sm:p-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan font-display text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(11,92,255,0.7)]">
                      {num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                        {title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY SCALEVIEW */}
      <section className="bg-[#f5f7fc] py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Why ScaleView"
              title={CLOUD_WHY_US_SECTION.heading}
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CLOUD_WHY_US_SECTION.points.map((point, i) => (
              <Reveal key={point.title} delay={(i % 3) * 0.06}>
                <article className="group flex h-full gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-brand/25 hover:shadow-card sm:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <CheckIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {point.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="FAQs"
              title="Cloud Migration & Modernization FAQs"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={CLOUD_FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#f5f7fc] pb-24 pt-4">
        <div className="container-x">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-600 to-brand-700 px-8 py-16 text-center sm:px-16 sm:py-20">
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  {CLOUD_CTA.title}
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
                  {CLOUD_CTA.description}
                </p>
                <div className="mt-9">
                  <a
                    href="#contact"
                    data-lead
                    className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition-transform hover:scale-[1.03]"
                  >
                    {CLOUD_CTA.button}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-16">
            <h3 className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Explore other services
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {SERVICES.filter((s) => s.slug !== "cloud-services").map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {s.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
