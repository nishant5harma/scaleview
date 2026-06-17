"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    text: "We map your stack, goals, and constraints in a single focused session.",
  },
  {
    num: "02",
    title: "Design",
    text: "A pragmatic blueprint — phased, costed, and tied to outcomes.",
  },
  {
    num: "03",
    title: "Deploy",
    text: "Senior engineers ship in tight, iterative cycles with full visibility.",
  },
  {
    num: "04",
    title: "Operate",
    text: "Run, monitor, and optimize 24/7 — your platform keeps compounding.",
  },
];

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-[#eef2f9]">
      {/* background image */}
      <Image
        src="/images/expertise-light.png"
        alt="ScaleView team collaborating in a bright modern office"
        fill
        sizes="100vw"
        className="object-cover object-left"
      />
      {/* light wash so the panel blends on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/85 lg:via-white/10 lg:to-white/80" />

      {/* decorative target dot */}
      <span className="absolute left-[48%] top-16 hidden h-7 w-7 place-items-center rounded-full ring-1 ring-brand/50 lg:grid">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      </span>

      <div className="container-x relative flex justify-center py-20 lg:justify-end lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="w-full max-w-lg rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-card backdrop-blur-xl sm:p-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            How we work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            From discovery to{" "}
            <span className="text-gradient">compounding outcomes.</span>
          </h2>

          <ol className="mt-8 space-y-6">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.num}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                className="flex gap-4"
              >
                <span className="relative flex flex-col items-center">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan font-display text-sm font-bold text-white shadow-[0_12px_24px_-12px_rgba(11,92,255,0.9)]">
                    {s.num}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-brand/40 to-transparent" />
                  )}
                </span>
                <div className="pb-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
