"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { StarIcon, QuoteIcon, ArrowRight } from "./Icons";

const ITEMS = [
  {
    quote:
      "ScaleView migrated our entire stack across AWS and Azure with zero downtime. Our infrastructure costs dropped 40% in the first quarter while performance went up.",
    name: "Natalie Harris",
    role: "VP Engineering, Northwind",
    initials: "NH",
  },
  {
    quote:
      "Their team feels like an extension of ours. The 24/7 monitoring caught an issue at 3am and resolved it before any customer noticed. Truly best-in-class.",
    name: "Marcus DeSouza",
    role: "CTO, Lumen Labs",
    initials: "MD",
  },
  {
    quote:
      "We went from quarterly releases to shipping daily. The CI/CD automation ScaleView built completely transformed how fast we deliver value to customers.",
    name: "Priya Nair",
    role: "Head of Platform, Vertex",
    initials: "PN",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = ITEMS[index];

  const go = (dir: number) =>
    setIndex((p) => (p + dir + ITEMS.length) % ITEMS.length);

  return (
    <section className="relative bg-white py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client stories"
          title="Teams that scaled"
          highlight="with confidence"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <QuoteIcon className="mx-auto h-12 w-12 text-brand/15" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <p className="mt-4 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                “{t.quote}”
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan font-display text-base font-bold text-white">
                  {t.initials}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                  <span className="mt-1 flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <div className="flex items-center gap-2">
              {ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-brand" : "w-2 bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
