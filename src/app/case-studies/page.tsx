import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Discover Our Cloud Solutions Case Studies | ScaleView",
  description:
    "Discover how ScaleView helps SMBs solve complex IT challenges with cloud, AI & managed services. Explore case studies showcasing proven results and real-world impact.",
  alternates: { canonical: "/case-studies" },
};

type CaseStudy = {
  industry: string;
  service: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
};

const CASES: CaseStudy[] = [
  {
    industry: "Logistics",
    service: "Cloud Migration",
    image: "/images/case-logistics.png",
    challenge:
      "Aging on-premise infrastructure causing repeated outages and high maintenance costs.",
    solution:
      "Full cloud migration to AWS with managed services and disaster recovery implementation.",
    outcome:
      "40% reduction in infrastructure costs. 99.95% uptime within 60 days of go-live.",
    metrics: [
      { value: "40%", label: "Lower infra cost" },
      { value: "99.95%", label: "Uptime" },
    ],
  },
  {
    industry: "Retail",
    service: "Data & AI",
    image: "/images/case-retail.png",
    challenge:
      "No visibility into inventory and demand patterns across 30 locations.",
    solution:
      "Data warehouse on Snowflake with Power BI dashboards and ML-based demand forecasting.",
    outcome:
      "20% reduction in stock-outs. Forecasting accuracy improved by 35%.",
    metrics: [
      { value: "20%", label: "Fewer stock-outs" },
      { value: "+35%", label: "Forecast accuracy" },
    ],
  },
  {
    industry: "Financial Services",
    service: "Cybersecurity",
    image: "/images/case-finance.png",
    challenge:
      "Compliance gaps with SOC 2 Type II requirements and frequent audit failures.",
    solution:
      "End-to-end cloud security audit, Zero Trust implementation, and compliance automation.",
    outcome:
      "Achieved SOC 2 Type II in 4 months. Zero critical findings on next external audit.",
    metrics: [
      { value: "4 mo", label: "To SOC 2 Type II" },
      { value: "0", label: "Critical findings" },
    ],
  },
  {
    industry: "Manufacturing",
    service: "DevOps",
    image: "/images/case-manufacturing.png",
    challenge:
      "Software releases taking 3–4 weeks due to manual testing and deployment.",
    solution:
      "Full CI/CD pipeline with automated testing and containerized deployments on Kubernetes.",
    outcome:
      "Release cycle reduced from 3 weeks to 2 days. Deployment failures down 75%.",
    metrics: [
      { value: "2 days", label: "Release cycle" },
      { value: "−75%", label: "Deploy failures" },
    ],
  },
];

const STEPS: { key: keyof Pick<CaseStudy, "challenge" | "solution" | "outcome">; label: string; tone: string }[] = [
  { key: "challenge", label: "Challenge", tone: "bg-rose-500" },
  { key: "solution", label: "Solution", tone: "bg-brand" },
  { key: "outcome", label: "Outcome", tone: "bg-emerald-500" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header solid />
      <main className="pt-[4.5rem]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
          <div className="pointer-events-none absolute -left-24 -top-10 h-96 w-96 rounded-full bg-brand/25 blur-[140px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-cyan/20 blur-[130px]" />

          <div className="container-x relative">
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-medium text-white/40">
                <Link href="/" className="transition-colors hover:text-white/70">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white/70">Case Studies</span>
              </nav>
            </Reveal>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              {/* LEFT */}
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    Case Studies
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.3rem]">
                    Real businesses. Real problems.{" "}
                    <span className="text-gradient">Real results.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                    We don&apos;t just talk about outcomes — we deliver them.
                    Explore how ScaleView has helped enterprises modernize,
                    secure, and scale.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-9 flex flex-wrap items-center gap-8">
                    {[
                      { v: "40%", l: "Avg infra savings" },
                      { v: "99.95%", l: "Uptime delivered" },
                      { v: "−75%", l: "Deploy failures" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="font-display text-2xl font-bold text-white">
                          {s.v}
                        </p>
                        <p className="mt-0.5 text-xs text-white/50">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* RIGHT — 2x2 image collage */}
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand/30 to-cyan/20 blur-2xl" />
                  <div className="relative grid grid-cols-2 gap-3">
                    {CASES.map((c, i) => (
                      <div
                        key={c.industry}
                        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-card ${
                          i % 2 === 1 ? "translate-y-5" : ""
                        }`}
                      >
                        <Image
                          src={c.image}
                          alt={`${c.industry} case study`}
                          fill
                          sizes="(max-width: 1024px) 45vw, 25vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-2.5 rounded-md bg-white/15 px-2 py-0.5 text-[0.65rem] font-semibold text-white backdrop-blur-sm">
                          {c.industry}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-4 right-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy/85 px-4 py-3 shadow-card backdrop-blur-xl">
                    <span className="font-display text-2xl font-bold text-white">
                      4+
                    </span>
                    <span className="text-xs leading-tight text-white/60">
                      industries
                      <br />
                      transformed
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="relative bg-white py-24">
          <div className="container-x space-y-20 lg:space-y-28">
            {CASES.map((c, i) => {
              const imageRight = i % 2 === 1;
              return (
                <Reveal key={c.industry}>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* IMAGE */}
                    <div className={imageRight ? "lg:order-2" : ""}>
                      <div className="relative">
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand/10 to-cyan/10 blur-2xl" />
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-card">
                          <Image
                            src={c.image}
                            alt={`${c.industry} — ${c.service}`}
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                            className="object-cover"
                          />
                          <div className="absolute left-4 top-4 flex gap-2">
                            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm">
                              {c.industry}
                            </span>
                            <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-sm">
                              {c.service}
                            </span>
                          </div>
                        </div>
                        {/* floating headline metric */}
                        <div className="absolute -bottom-5 right-5 rounded-2xl border border-line bg-white px-5 py-3.5 shadow-card">
                          <p className="font-display text-2xl font-bold text-brand">
                            {c.metrics[0].value}
                          </p>
                          <p className="text-xs text-muted">{c.metrics[0].label}</p>
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className={imageRight ? "lg:order-1" : ""}>
                      <div className="relative space-y-6 border-l border-line pl-7">
                        {STEPS.map((step) => (
                          <div key={step.key} className="relative">
                            <span
                              className={`absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full ring-4 ring-white ${step.tone}`}
                            />
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                              {step.label}
                            </p>
                            <p
                              className={`mt-1.5 leading-relaxed ${
                                step.key === "outcome"
                                  ? "font-display text-lg font-semibold text-ink"
                                  : "text-[0.97rem] text-ink/75"
                              }`}
                            >
                              {c[step.key]}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {c.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-2xl border border-line bg-[#f7f9fc] px-5 py-3"
                          >
                            <p className="font-display text-xl font-bold text-ink">
                              {m.value}
                            </p>
                            <p className="text-xs text-muted">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-white pb-24">
          <div className="container-x">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-600 to-brand-700 px-8 py-16 text-center sm:px-16 sm:py-20">
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
                <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyan/30 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />

                <div className="relative mx-auto max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    Let&apos;s build
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                    Want results like these?
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
                    Let&apos;s talk about your challenge and what a successful
                    outcome looks like for your business.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:cloud@scaleview.ai"
                      data-lead
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition-transform hover:scale-[1.03]"
                    >
                      Start a conversation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Explore services
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
