import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getService, getServiceSlugs, SERVICES } from "@/lib/services";
import { ArrowRight, ArrowUpRight, CheckIcon } from "@/components/Icons";

const PLATFORMS = [
  {
    name: "Amazon Web Services (AWS)",
    tier: "Advanced Tier Partner",
    logo: "/images/logos/aws.svg",
  },
  {
    name: "Microsoft Azure",
    tier: "Certified Azure Solutions Partner",
    logo: "/images/logos/azure.svg",
  },
];

const HERO_HIGHLIGHTS: Record<string, { value: string; label: string }[]> = {
  "cloud-services": [
    { value: "20–40%", label: "Cloud cost reduction" },
    { value: "3×", label: "Faster deployments" },
  ],
  cybersecurity: [
    { value: "Zero-trust", label: "By default" },
    { value: "SOC 2", label: "ISO 27001 · GDPR" },
  ],
  "data-ai": [
    { value: "Real-time", label: "Analytics & alerts" },
    { value: "GenAI", label: "Production-ready" },
  ],
  devops: [
    { value: "10×", label: "Release frequency" },
    { value: "<15 min", label: "Mean time to recover" },
  ],
  "managed-services": [
    { value: "99.9%", label: "Uptime target" },
    { value: "24/7", label: "Monitoring & support" },
  ],
  "digital-transformation": [
    { value: "Senior-led", label: "No junior handoffs" },
    { value: "Weeks", label: "Not months to value" },
  ],
};

const TRUST_LOGOS = [
  { name: "AWS", src: "/images/logos/aws.svg" },
  { name: "Azure", src: "/images/logos/azure.svg" },
  { name: "Google Cloud", src: "/images/logos/googlecloud.svg" },
];

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service — ScaleView" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const highlights = HERO_HIGHLIGHTS[service.slug] ?? [];

  return (
    <>
      <Header solid />
      <main className="pt-[4.5rem]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy pb-24 pt-12 text-white sm:pt-16">
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
                <Link
                  href="/#services"
                  className="transition-colors hover:text-white/70"
                >
                  Services
                </Link>
                <span>/</span>
                <span className="text-white/70">{service.name}</span>
              </nav>
            </Reveal>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:gap-10">
              {/* LEFT */}
              <div className="lg:col-span-6 xl:col-span-5">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {service.name}
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                    {service.heroTitle}
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                    {service.heroDesc}
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      data-lead
                      className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(11,92,255,0.9)] transition-all hover:bg-brand-600"
                    >
                      {service.ctaButton}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      All services
                    </Link>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-10 flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      Certified on
                    </span>
                    <div className="flex items-center gap-2.5">
                      {TRUST_LOGOS.map((l) => (
                        <span
                          key={l.name}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={l.src}
                            alt={l.name}
                            className="h-5 w-5 object-contain"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT — creative visual */}
              <div className="lg:col-span-6 lg:col-start-7 xl:col-span-7 xl:col-start-6">
                <Reveal delay={0.1}>
                  <div className="relative mx-auto max-w-xl lg:max-w-none">
                    {/* decorative ring + dots */}
                    <div className="pointer-events-none absolute -right-6 -top-8 hidden h-40 w-40 rounded-full border border-white/10 sm:block" />
                    <div
                      className="pointer-events-none absolute -bottom-8 -left-8 hidden h-28 w-28 rounded-2xl opacity-30 sm:block"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.4) 1.2px, transparent 1.2px)",
                        backgroundSize: "14px 14px",
                      }}
                    />

                    {/* main image — large, tilted accent border */}
                    <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-brand/40 via-transparent to-cyan/30 blur-2xl" />
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
                      <Image
                        src={service.heroImage}
                        alt={service.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 90vw, 55vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent" />
                    </div>

                    {/* floating highlight card (top-left, overlapping) */}
                    {highlights[0] && (
                      <div className="absolute left-4 top-8 hidden rounded-2xl border border-white/15 bg-navy/80 px-5 py-4 shadow-card backdrop-blur-xl md:block lg:-left-10">
                        <p className="font-display text-2xl font-bold text-white">
                          {highlights[0].value}
                        </p>
                        <p className="mt-0.5 text-xs text-white/60">
                          {highlights[0].label}
                        </p>
                      </div>
                    )}

                    {/* floating partner card (bottom-right, overlapping) */}
                    <div className="absolute bottom-4 right-4 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white px-4 py-3 shadow-card md:flex lg:-bottom-5 lg:-right-8">
                      <div className="flex -space-x-1.5">
                        {TRUST_LOGOS.map((l) => (
                          <span
                            key={l.name}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={l.src}
                              alt={l.name}
                              className="h-4 w-4 object-contain"
                            />
                          </span>
                        ))}
                      </div>
                      <div className="leading-tight">
                        <p className="font-display text-sm font-bold text-ink">
                          Certified Partner
                        </p>
                        <p className="text-xs text-muted">AWS · Azure · GCP</p>
                      </div>
                    </div>

                    {/* floating secondary highlight (mid-right) */}
                    {highlights[1] && (
                      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/15 bg-gradient-to-br from-brand to-brand-700 px-4 py-3 shadow-card lg:block">
                        <p className="font-display text-lg font-bold text-white">
                          {highlights[1].value}
                        </p>
                        <p className="mt-0.5 text-[0.7rem] text-white/75">
                          {highlights[1].label}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section className="relative bg-white py-24">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                What we deliver
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                Everything you need for{" "}
                <span className="text-gradient">{service.name.toLowerCase()}</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.deliverables.map((d, i) => (
                <Reveal key={d.num} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card">
                    <span className="font-display text-3xl font-bold text-line transition-colors group-hover:text-brand/30">
                      {d.num}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {d.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORMS */}
        <section className="relative overflow-hidden bg-[#f5f7fc] py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Platforms we work on
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                  Certified on all major clouds
                </h2>
              </Reveal>
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
              {PLATFORMS.map(({ name, tier, logo }, i) => (
                <Reveal key={name} delay={i * 0.08}>
                  <div className="group flex h-full flex-col items-center rounded-2xl border border-line bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-white shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo}
                        alt={`${name} logo`}
                        className="h-9 w-9 object-contain"
                      />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">
                      {name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                      <CheckIcon className="h-3.5 w-3.5" />
                      {tier}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS CASE */}
        <section className="relative bg-white py-24">
          <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/10 to-cyan/10 blur-2xl" />
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image
                    src={service.caseImage}
                    alt={`${service.name} business outcomes`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  The business case
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                  {service.businessTitle}
                </h2>
              </Reveal>

              <ul className="mt-8 space-y-4">
                {service.businessPoints.map((point, i) => (
                  <Reveal key={point} delay={i * 0.06}>
                    <li className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                      <span className="text-[0.97rem] leading-relaxed text-ink/80">
                        {point}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-white pb-24 pt-4">
          <div className="container-x">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-600 to-brand-700 px-8 py-16 text-center sm:px-16 sm:py-20">
                <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
                <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyan/30 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />

                <div className="relative mx-auto max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {service.ctaEyebrow}
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                    {service.ctaTitle}
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
                    {service.ctaDesc}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:cloud@scaleview.ai"
                      data-lead
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition-transform hover:scale-[1.03]"
                    >
                      {service.ctaButton}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Explore all services
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Other services */}
            <div className="mt-20">
              <h3 className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Explore other services
              </h3>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
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
      <Footer />
    </>
  );
}
