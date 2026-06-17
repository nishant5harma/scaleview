"use client";

import { useState } from "react";
import { ArrowRight, CheckIcon } from "./Icons";
import { PRIMARY_PHONE } from "@/lib/contact";

const SERVICES = [
  "Cloud Services",
  "Cybersecurity",
  "Data & AI",
  "DevOps & Automation",
  "Managed Services",
  "Digital Transformation",
  "Not sure yet",
];

const SOURCES = [
  "Search engine",
  "Referral",
  "LinkedIn",
  "Event or webinar",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center shadow-card">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
          Thanks — message received.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          One of our consultants will get back to you within one business day.
          In the meantime, feel free to explore our work.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-line bg-white p-7 shadow-card sm:p-9"
    >
      <h3 className="font-display text-xl font-bold tracking-tight text-ink">
        Send us a message
      </h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name *
          </label>
          <input id="name" required placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Company Name *
          </label>
          <input
            id="company"
            required
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder={PRIMARY_PHONE.display}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="service">
          Service of Interest
        </label>
        <select id="service" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">
          Tell us about your challenge
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe your current situation and what you're hoping to achieve..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="source">
          How did you hear about us?
        </label>
        <select id="source" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select...
          </option>
          {SOURCES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(11,92,255,0.9)] transition-all hover:bg-brand-600 sm:w-auto"
      >
        Let&apos;s Talk
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
