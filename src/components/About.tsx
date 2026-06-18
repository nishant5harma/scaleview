import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    no: "01",
    title: "SMB-First Mindset",
    desc: "Right-sized, practical solutions built to scale with you — not legacy enterprise overhead.",
  },
  {
    no: "02",
    title: "Certified Expertise",
    desc: "AWS, Azure, and GCP certified engineers and architects with deep, hands-on experience.",
  },
  {
    no: "03",
    title: "Outcome-Driven Delivery",
    desc: "Measured by business results — cost savings, speed, reliability, and growth.",
  },
  {
    no: "04",
    title: "Transparent & Responsive",
    desc: "No black boxes. Clear communication, defined timelines, and a team you can reach.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="container-x">
        <SectionHeading
          align="left"
          eyebrow="Why ScaleView"
          title="A partner that"
          highlight="grows with you"
          description="We're built for the constraints of growing businesses — practical, senior-led, and outcome-obsessed."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand/10 to-cyan/10 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-card sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src="/images/why-team.webp"
                  alt="ScaleView team collaborating around a laptop in a modern office"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3.5 shadow-card">
                <span className="font-display text-2xl font-bold text-brand">
                  Senior-led
                </span>
                <span className="text-sm leading-tight text-muted">
                  teams, no
                  <br />
                  junior handoffs
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <Reveal key={r.no} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 font-display text-base font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {r.no}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {r.desc}
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
