"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckIcon } from "./Icons";

const STORAGE_KEY = "sv_lead_popup_seen";
const DELAY_MS = 10000;

const SERVICES = [
  "Cloud Services",
  "Cybersecurity",
  "Data & AI",
  "DevOps & Automation",
  "Managed Services",
  "Digital Transformation",
  "Not sure yet",
];

const BENEFITS = [
  "A 30-minute discovery call — no cost, no commitment",
  "A tailored cloud, security or AI roadmap",
  "Senior AWS & Azure certified architects, not junior reps",
];

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/15";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timer: number | undefined;
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    }

    // Any element marked with data-lead (or inside one) opens the popup.
    // Capture phase + stopPropagation so next/link navigation never fires.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest("[data-lead]");
      if (!trigger) return;
      e.preventDefault();
      e.stopPropagation();
      setSubmitted(false);
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);

    const onOpenLead = () => {
      setSubmitted(false);
      setOpen(true);
    };
    window.addEventListener("sv:open-lead", onOpenLead);

    return () => {
      if (timer) window.clearTimeout(timer);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("sv:open-lead", onOpenLead);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Book a free consultation"
        >
          <div
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            onClick={dismiss}
          />

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_50px_120px_-30px_rgba(6,11,28,0.6)] md:grid-cols-[0.85fr_1.15fr]"
          >
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-ink shadow-md transition-colors hover:border-brand/30 hover:bg-[#f5f7fc] hover:text-brand"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {/* LEFT — brand panel */}
            <div className="relative hidden flex-col justify-center overflow-hidden bg-gradient-to-br from-brand via-brand-600 to-brand-700 p-8 text-white md:flex">
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" />
              <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-cyan/30 blur-[80px]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  Free consultation
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight">
                  Ready to scale on the cloud?
                </h3>
                <ul className="mt-6 space-y-3">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-white/85">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — form / success */}
            <div className="p-7 sm:p-9">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white">
                    <CheckIcon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                    You&apos;re all set.
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    A ScaleView consultant will reach out within one business day.
                  </p>
                  <button
                    onClick={dismiss}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    Book your free consultation
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    Tell us a little about your goals — we&apos;ll take it from
                    there.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                      try {
                        sessionStorage.setItem(STORAGE_KEY, "1");
                      } catch {
                        /* ignore */
                      }
                    }}
                    className="mt-5 space-y-3.5"
                  >
                    <input
                      required
                      placeholder="Full name *"
                      className={inputClass}
                      aria-label="Full name"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Work email *"
                      className={inputClass}
                      aria-label="Work email"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className={inputClass}
                      aria-label="Phone number"
                    />
                    <select
                      defaultValue=""
                      className={inputClass}
                      aria-label="Service of interest"
                    >
                      <option value="" disabled>
                        Service of interest…
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(11,92,255,0.9)] transition-all hover:bg-brand-600"
                    >
                      Book my consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-xs text-muted">
                      No spam. We&apos;ll only use this to contact you about your
                      enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
