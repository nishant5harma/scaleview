import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "AWS, Azure & GCP Partners for SMBs & Mid-Market | ScaleView",
  description:
    "ScaleView partners with AWS, Azure, GCP & OpenAI to deliver certified cloud consulting, AI & managed IT solutions for SMBs and mid-market businesses ready to scale.",
  alternates: { canonical: "/partners" },
};

type Platform = { name: string; logo?: string; color?: string };
type Category = { eyebrow: string; label: string; items: Platform[] };

const CATEGORIES: Category[] = [
  {
    eyebrow: "Hyperscaler ecosystem",
    label: "Cloud platforms",
    items: [
      { name: "Amazon Web Services", logo: "/images/logos/aws.svg" },
      { name: "Microsoft Azure", logo: "/images/logos/azure.svg" },
      { name: "Google Cloud Platform", logo: "/images/logos/googlecloud.svg" },
    ],
  },
  {
    eyebrow: "Security",
    label: "Security platforms",
    items: [
      { name: "CrowdStrike", color: "#E01F3D" },
      { name: "SentinelOne", color: "#6B0AEA" },
      { name: "Palo Alto Networks", logo: "/images/logos/paloalto.svg" },
      { name: "Microsoft Defender", logo: "/images/logos/defender.svg" },
      { name: "HashiCorp Vault", logo: "/images/logos/vault.svg" },
    ],
  },
  {
    eyebrow: "Data & analytics",
    label: "Data platforms",
    items: [
      { name: "Snowflake", logo: "/images/logos/snowflake.svg" },
      { name: "Databricks", logo: "/images/logos/databricks.svg" },
      { name: "Microsoft Fabric", color: "#117865" },
      { name: "Power BI", color: "#D89C00" },
      { name: "Tableau", color: "#E97627" },
      { name: "Looker", logo: "/images/logos/looker.svg" },
    ],
  },
  {
    eyebrow: "DevOps & automation",
    label: "DevOps toolchain",
    items: [
      { name: "HashiCorp Terraform", logo: "/images/logos/terraform.svg" },
      { name: "GitHub", logo: "/images/logos/github.svg" },
      { name: "GitLab", logo: "/images/logos/gitlab.svg" },
      { name: "Kubernetes", logo: "/images/logos/kubernetes.svg" },
      { name: "Docker", logo: "/images/logos/docker.svg" },
      { name: "Datadog", logo: "/images/logos/datadog.svg" },
      { name: "Grafana", logo: "/images/logos/grafana.svg" },
    ],
  },
  {
    eyebrow: "Productivity",
    label: "Collaboration platforms",
    items: [
      { name: "Microsoft 365", logo: "/images/logos/microsoft365.svg" },
      { name: "Google Workspace", color: "#1A73E8" },
    ],
  },
];

const WHY = [
  {
    num: "01",
    title: "Rigorous certification",
    desc: "Active certifications across all major hyperscalers and platforms — passed real technical assessments, not paid badges.",
  },
  {
    num: "02",
    title: "Direct vendor escalation",
    desc: "Partner-tier support paths and named contacts at AWS, Microsoft, and Google that most companies can't access.",
  },
  {
    num: "03",
    title: "Preferred pricing",
    desc: "Partner discounts, marketplace credits, and funding programs passed through directly to your projects.",
  },
];

const HYPERSCALERS = [
  { name: "AWS", logo: "/images/logos/aws.svg" },
  { name: "Azure", logo: "/images/logos/azure.svg" },
  { name: "Google Cloud", logo: "/images/logos/googlecloud.svg" },
];

function PlatformChip({ name, logo, color }: Platform) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f5f7fc]">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt={`${name} logo`} className="h-5 w-5 object-contain" />
        ) : (
          <span
            className="font-display text-sm font-bold"
            style={{ color: color ?? "#0b5cff" }}
          >
            {name.charAt(0)}
          </span>
        )}
      </span>
      <span className="text-sm font-semibold text-ink">{name}</span>
    </div>
  );
}

export default function PartnersPage() {
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
                <span className="text-white/70">Partners</span>
              </nav>
            </Reveal>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              {/* LEFT */}
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    Technology Partners
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-[3.3rem]">
                    AWS Partner. Azure Partner.{" "}
                    <span className="text-gradient">Google Cloud Partner.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                    ScaleView holds active partner status across the three major
                    hyperscalers and works exclusively with best-in-class
                    platforms — with certified expertise behind every
                    recommendation.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-9 flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      Certified on
                    </span>
                    <div className="flex items-center gap-2.5">
                      {HYPERSCALERS.map((l) => (
                        <span
                          key={l.name}
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={l.logo}
                            alt={l.name}
                            className="h-5 w-5 object-contain"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* RIGHT — image */}
              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-brand/30 to-cyan/20 blur-2xl" />
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
                    <Image
                      src="/images/why-team.png"
                      alt="ScaleView certified team"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent" />
                  </div>

                  {/* floating certified-partner card */}
                  <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white px-4 py-3 shadow-card sm:flex lg:-left-8">
                    <div className="flex -space-x-1.5">
                      {HYPERSCALERS.map((l) => (
                        <span
                          key={l.name}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={l.logo}
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
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PARTNER ECOSYSTEM */}
        <section className="relative bg-white py-24">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                The ecosystem
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                Best-in-class platforms,{" "}
                <span className="text-gradient">certified end to end</span>
              </h2>
            </Reveal>

            <div className="mt-14 space-y-12">
              {CATEGORIES.map((cat) => (
                <Reveal key={cat.label}>
                  <div className="grid gap-6 border-t border-line pt-12 lg:grid-cols-[0.45fr_1fr] lg:gap-10">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {cat.eyebrow}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">
                        {cat.label}
                      </h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.items.map((p) => (
                        <PlatformChip key={p.name} {...p} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/20 blur-[130px]" />

          <div className="container-x relative">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Why it matters
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
                  What our partnerships{" "}
                  <span className="text-gradient">mean for you</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-white/65">
                  Being a certified partner means our team has passed technical
                  assessments, maintained active certifications, and demonstrated
                  real-world delivery. It also means we have direct access to
                  vendor support, early features, and partner pricing — passed
                  straight through.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {WHY.map((w, i) => (
                <Reveal key={w.num} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:bg-white/[0.07]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan font-display text-base font-bold text-white">
                      {w.num}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                      {w.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                      {w.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-white pb-24 pt-24">
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
                    Build on the right stack.
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
                    A 30-minute conversation about your current platforms and
                    where you&apos;re headed.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                    <a
                      href="mailto:cloud@scaleview.ai"
                      data-lead
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition-transform hover:scale-[1.03]"
                    >
                      Book a consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Explore services
                    </Link>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/70">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckIcon className="h-3.5 w-3.5" /> AWS Partner
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckIcon className="h-3.5 w-3.5" /> Azure Solutions Partner
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CheckIcon className="h-3.5 w-3.5" /> Google Cloud Partner
                    </span>
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
