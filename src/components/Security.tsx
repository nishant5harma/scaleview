import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ShieldIcon, GlobeIcon, LayersIcon, LockIcon } from "./Icons";

const ITEMS = [
  {
    Icon: ShieldIcon,
    title: "SOC 2 aligned",
    text: "Controls, evidence collection, and audit-ready posture across infrastructure and application layers.",
  },
  {
    Icon: GlobeIcon,
    title: "GDPR & data residency",
    text: "EU/UK/IN region pinning, processor agreements, and DSAR workflows wired into the platform.",
  },
  {
    Icon: LayersIcon,
    title: "ISO 27001 controls",
    text: "Mapped policies, risk register, and access management aligned to ISO/IEC 27001:2022 Annex A.",
  },
  {
    Icon: LockIcon,
    title: "Zero-trust by default",
    text: "Identity-aware proxies, short-lived credentials, encryption in transit and at rest with KMS-managed keys.",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" />
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />

      <div className="container-x relative grid items-stretch gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
        {/* IMAGE SIDE */}
        <Reveal className="h-full">
          <div className="relative h-full">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-tr from-brand/10 to-cyan/10 blur-2xl" />
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2rem] border border-line shadow-card">
              <Image
                src="/images/svc-security-real.webp"
                alt="Security operations analyst monitoring dashboards"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* floating badge */}
            <div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3.5 shadow-card md:left-6 lg:-bottom-5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan text-white">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-tight text-ink">
                Audit-ready
                <br />
                <span className="font-normal text-muted">by design</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* CONTENT SIDE */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Security & compliance"
            title="Built for the audit room,"
            highlight="not the demo floor"
            description="Every system we ship is designed around least privilege, encryption, and continuous evidence — so your compliance posture is a byproduct of how we build, not a quarterly fire drill."
          />

          <div className="mt-9 grid gap-x-7 gap-y-8 sm:grid-cols-2">
            {ITEMS.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
