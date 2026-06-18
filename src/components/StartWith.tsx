import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowUpRight, StarIcon } from "./Icons";
import { PHONES, WHATSAPP_URL } from "@/lib/contact";

const QUESTIONS = [
  "I want to migrate to the cloud",
  "I want to cut my cloud costs",
  "Help me choose AWS or Azure",
];

export default function StartWith() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand/25 blur-[130px]" />

      <div className="container-x relative grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
        {/* LEFT — copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80">
              <StarIcon className="h-3.5 w-3.5 text-amber-400" />
              Rated 4.9/5 by 120+ teams
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
              Start with <span className="text-gradient">ScaleView</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
              Start a chat or reach out on WhatsApp at
            </p>
            <p className="mt-2 flex flex-col gap-1 text-base leading-relaxed text-white/60 sm:flex-row sm:flex-wrap sm:gap-x-1">
              {PHONES.map((p, i) => (
                <span key={p.tel}>
                  {i > 0 && <span className="hidden sm:inline"> or </span>}
                  <a
                    href={`tel:${p.tel}`}
                    className="font-semibold text-white underline decoration-cyan/60 underline-offset-4 hover:text-cyan"
                  >
                    {p.display}
                  </a>
                </span>
              ))}
            </p>
            <p className="mt-2 max-w-md text-base leading-relaxed text-white/60">
              Our cloud team will help you choose the right setup and kick off
              your cloud journey with us.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                data-chat
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-[0_0_0_6px_rgba(11,92,255,0.25)]"
              >
                Start a chat
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Message on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — person + chat overlay */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tr-[80px] bg-gradient-to-br from-[#dce9fb] to-[#eaf1fc]">
              <Image
                src="/images/start-person.webp"
                alt="ScaleView specialist ready to help you start"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-[70%_center]"
              />
            </div>

            {/* assistant greeting card — tablet+ overlay */}
            <div className="absolute left-5 top-5 hidden w-[58%] max-w-[280px] rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgba(6,11,28,0.6)] md:block">
              <span className="inline-flex h-9 w-9 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.webp"
                  alt="ScaleView assistant"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-cover"
                />
              </span>
              <p className="mt-3 font-display text-lg font-bold text-ink">
                Hello <span aria-hidden>👋</span>
              </p>
              <p className="text-sm text-muted">How can I help you today?</p>
            </div>

            {/* question chips — tablet+ overlay */}
            <div className="absolute bottom-5 left-5 hidden w-[72%] max-w-[320px] space-y-2.5 md:block">
              {QUESTIONS.map((q, i) => (
                <div
                  key={q}
                  className="flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-3 text-sm font-medium text-ink shadow-[0_14px_36px_-18px_rgba(6,11,28,0.6)] backdrop-blur"
                  style={{ marginLeft: `${i * 12}px` }}
                >
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" />
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* mobile — stacked chat below the photo (no overlap) */}
          <div className="mt-5 space-y-2.5 md:hidden">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-22px_rgba(6,11,28,0.6)]">
              <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.webp"
                  alt="ScaleView assistant"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-cover"
                />
              </span>
              <p className="text-sm font-semibold text-ink">
                Hello <span aria-hidden>👋</span> How can I help you today?
              </p>
            </div>
            {QUESTIONS.map((q) => (
              <div
                key={q}
                className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-[0_14px_36px_-22px_rgba(6,11,28,0.6)]"
              >
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" />
                {q}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
