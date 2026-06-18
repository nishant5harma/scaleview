import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  StoreIcon,
  BankIcon,
  HealthIcon,
  FactoryIcon,
  BriefcaseIcon,
  TruckIcon,
  GraduationIcon,
  RocketIcon,
  CloudIcon,
  ShieldIcon,
  ChipIcon,
  LayersIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Empowering Industries with Cloud Solutions | ScaleView",
  description:
    "From Retail & BFSI to Healthcare, EdTech & Logistics — ScaleView delivers cloud, AI, cybersecurity & managed IT solutions tailored for every industry's unique needs.",
  alternates: { canonical: "/industries" },
};

type Industry = {
  Icon: typeof StoreIcon;
  title: string;
  desc: string;
  tags?: string[];
  featured?: "brand" | "navy";
};

const INDUSTRIES: Industry[] = [
  {
    Icon: StoreIcon,
    title: "Retail & E-Commerce",
    desc: "Inventory intelligence, customer analytics, personalization engines, and omnichannel operations.",
    tags: ["Personalization", "Omnichannel", "Analytics"],
    featured: "brand",
  },
  {
    Icon: BankIcon,
    title: "Banking, Financial Services & Insurance",
    desc: "Secure, compliant financial infrastructure with fraud detection, data analytics, and regulatory-ready cloud environments.",
    tags: ["Fraud detection", "Compliance", "Risk analytics"],
    featured: "navy",
  },
  {
    Icon: HealthIcon,
    title: "Healthcare & Life Sciences",
    desc: "Protect patient data, meet compliance requirements, and use AI to improve clinical and operational outcomes.",
  },
  {
    Icon: FactoryIcon,
    title: "Manufacturing",
    desc: "Predictive maintenance, IoT integration, supply chain analytics, and Industry 4.0 adoption.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Professional Services",
    desc: "Automated workflows, secure client data management, and modern cloud and productivity platforms.",
  },
  {
    Icon: TruckIcon,
    title: "Logistics & Supply Chain",
    desc: "End-to-end visibility, route optimization, inventory control, and system integration.",
  },
  {
    Icon: GraduationIcon,
    title: "Education & EdTech",
    desc: "Scale digital learning platforms, protect student data, and modernize administrative systems.",
  },
  {
    Icon: RocketIcon,
    title: "Startups & Tech Companies",
    desc: "Cloud-native architecture, DevOps practices, and scalable infrastructure designed for rapid growth.",
  },
];

const CAPABILITIES = [
  { Icon: CloudIcon, title: "Cloud", href: "/services/cloud-services" },
  { Icon: ShieldIcon, title: "Cybersecurity", href: "/services/cybersecurity" },
  { Icon: ChipIcon, title: "Data & AI", href: "/services/data-ai" },
  { Icon: LayersIcon, title: "DevOps", href: "/services/devops" },
];

export default function IndustriesPage() {
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
                <span className="text-white/70">Industries</span>
              </nav>
            </Reveal>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              {/* LEFT */}
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    Industries
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                    Sector expertise.{" "}
                    <span className="text-gradient">
                      Production-grade outcomes.
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                    Every industry has its own pressures, compliance
                    requirements, and growth levers. ScaleView brings
                    sector-specific expertise to every engagement.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-9 flex flex-wrap items-center gap-8">
                    {[
                      { v: "8+", l: "Industries served" },
                      { v: "100%", l: "Compliance-first" },
                      { v: "24/7", l: "Expert support" },
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

              {/* RIGHT — image collage */}
              <Reveal delay={0.1}>
                <div className="relative mx-auto max-w-md lg:mr-0 lg:max-w-none">
                  <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-brand/30 to-cyan/20 blur-3xl" />

                  {/* main image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
                    <Image
                      src="/images/ind-finance.webp"
                      alt="Financial services analytics"
                      fill
                      priority
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  </div>

                  {/* floating thumbnail — top right */}
                  <div className="absolute right-4 top-8 hidden w-40 overflow-hidden rounded-2xl border border-white/15 shadow-card md:block lg:-right-10 lg:w-48">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/ind-retail.webp"
                        alt="Retail and e-commerce"
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* floating thumbnail — bottom left */}
                  <div className="absolute bottom-10 left-4 hidden w-44 overflow-hidden rounded-2xl border border-white/15 shadow-card md:block lg:-left-12 lg:w-52">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/ind-health.webp"
                        alt="Healthcare and life sciences"
                        fill
                        sizes="220px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* floating stat badge */}
                  <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy/85 px-4 py-3 shadow-card backdrop-blur-xl">
                    <span className="font-display text-2xl font-bold text-white">
                      8+
                    </span>
                    <span className="text-xs leading-tight text-white/60">
                      industries
                      <br />
                      served
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* INDUSTRIES BENTO GRID */}
        <section className="relative bg-[#f7f9fc] py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
          <div className="container-x relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                Where we work
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                Built for the realities of{" "}
                <span className="text-gradient">your sector</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {INDUSTRIES.map(({ Icon, title, desc, tags, featured }, i) => {
                if (featured) {
                  const isBrand = featured === "brand";
                  return (
                    <Reveal
                      key={title}
                      delay={i * 0.06}
                      className="sm:col-span-2 lg:col-span-3"
                    >
                      <div
                        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 sm:p-9 ${
                          isBrand
                            ? "bg-gradient-to-br from-brand via-brand-600 to-brand-700 text-white"
                            : "border border-white/10 bg-navy text-white"
                        }`}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" />
                        <div
                          className={`pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full blur-[90px] ${
                            isBrand ? "bg-cyan/30" : "bg-brand/30"
                          }`}
                        />
                        <Icon className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 text-white/10" />

                        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                          <Icon className="h-7 w-7" />
                        </span>
                        <h3 className="relative mt-6 max-w-sm font-display text-2xl font-bold leading-tight tracking-tight">
                          {title}
                        </h3>
                        <p
                          className={`relative mt-3 max-w-md flex-1 text-sm leading-relaxed ${
                            isBrand ? "text-white/85" : "text-white/65"
                          }`}
                        >
                          {desc}
                        </p>
                        {tags && (
                          <div className="relative mt-6 flex flex-wrap gap-2">
                            {tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                        <Link
                          href="/#contact"
                          data-lead
                          className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
                        >
                          Talk to an expert
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </Reveal>
                  );
                }
                return (
                  <Reveal key={title} delay={i * 0.06} className="lg:col-span-2">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-card">
                      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-cyan transition-transform duration-300 group-hover:scale-x-100" />
                      <div className="pointer-events-none absolute -right-6 -top-6 text-line/60 transition-colors duration-300 group-hover:text-brand/10">
                        <Icon className="h-24 w-24" />
                      </div>
                      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white shadow-[0_14px_30px_-12px_rgba(11,92,255,0.9)]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                        {title}
                      </h3>
                      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                        {desc}
                      </p>
                      <Link
                        href="/#contact"
                        data-lead
                        className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition-all duration-300 group-hover:opacity-100"
                      >
                        Talk to an expert
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CROSS-INDUSTRY CAPABILITIES */}
        <section className="relative bg-white py-24">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    One team, every sector
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                    The same core strengths, tuned to your industry
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    Whatever the sector, we bring the same four practices — applied
                    to your compliance needs, data, and growth goals.
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {CAPABILITIES.map(({ Icon, title, href }, i) => (
                  <Reveal key={title} delay={i * 0.08}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-[#f7f9fc] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:bg-white hover:shadow-card"
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="mt-5 flex items-center justify-between font-display text-base font-semibold tracking-tight text-ink">
                        {title}
                        <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:text-brand" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
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
                  <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                    Don&apos;t see your industry?
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
                    We work across many sectors. Whatever your business, we have
                    the expertise to help you scale.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:cloud@scaleview.ai"
                      data-lead
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition-transform hover:scale-[1.03]"
                    >
                      Book a Consultation
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
