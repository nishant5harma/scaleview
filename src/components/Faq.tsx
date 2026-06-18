"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { EASE_OUT } from "@/lib/motion";

const FAQS = [
  {
    q: "How does ScaleView price engagements?",
    a: "We work in fixed-scope phases (Discover, Design, Deploy) and monthly retainers for managed services. No hidden change orders — every phase has a defined outcome and ceiling. Most engagements start with a paid 2–3 week Discovery sprint.",
  },
  {
    q: "Are you actually an AWS Partner?",
    a: "Yes. We hold AWS Partner Network status alongside Microsoft Azure and Google Cloud partner credentials. Our architects carry active certifications across all three hyperscalers, and we pass partner pricing and direct vendor escalation through to clients.",
  },
  {
    q: "How do you handle security and data residency?",
    a: "Every system is built zero-trust by default — short-lived credentials, KMS-managed encryption, identity-aware access. We support EU, UK, US, and India data residency, and align controls to SOC 2, ISO 27001, and GDPR from day one.",
  },
  {
    q: "How fast can you start, and how soon do we see value?",
    a: "Discovery typically begins within 1–2 weeks of contract signature. First measurable outcomes — cost optimization wins, pipeline acceleration, or initial AI workloads in production — usually land inside 30–60 days.",
  },
  {
    q: "Do you replace our team or work alongside it?",
    a: "Both, depending on what you need. We embed senior engineers into your existing squads, run dedicated pods for greenfield builds, or operate the entire platform 24/7 under a managed services contract. No junior handoffs.",
  },
  {
    q: "What does your SLA look like for managed services?",
    a: "99.9% platform availability target, 15-minute response on Sev-1 incidents, and a named technical lead per account. Full incident reports, RCA within 5 business days, and quarterly business reviews tied to your KPIs.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        open
          ? "border-brand/30 bg-white shadow-card"
          : "border-line bg-white/60 hover:border-brand/20"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span
          className={`font-display text-sm font-semibold tabular-nums transition-colors ${
            open ? "text-brand" : "text-muted"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1 font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
          {q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-brand bg-brand text-white"
              : "border-line text-ink"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            <p className="px-5 pb-5 pl-[3.25rem] text-[0.95rem] leading-relaxed text-muted sm:px-6 sm:pb-6 sm:pl-[3.75rem]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#f7f9fc] py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />

      <div className="container-x relative grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              FAQ
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.7rem]">
              Answers for <span className="text-gradient">decision makers</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Procurement, security, and engineering — common questions we get
              from every side of the table.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="#contact"
              data-lead
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
            >
              Still have questions? Talk to us
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Item
                q={f.q}
                a={f.a}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
