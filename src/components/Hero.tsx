"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "./Icons";
import { EASE_OUT } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* ambient + decorative shapes */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
      <div className="pointer-events-none absolute -left-44 -top-24 h-[460px] w-[460px] rounded-[44%_56%_60%_40%/40%_44%_56%_60%] bg-gradient-to-br from-brand/40 to-cyan/10 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-24 left-[28%] hidden lg:block">
        <svg width="34" height="34" viewBox="0 0 24 24" className="text-white/25">
          <path
            fill="currentColor"
            d="M12 0c.6 5.7 6.3 11.4 12 12-5.7.6-11.4 6.3-12 12-.6-5.7-6.3-11.4-12-12C5.7 11.4 11.4 5.7 12 0Z"
          />
        </svg>
      </div>

      {/* vertical scroll indicator — desktop only */}
      <div className="pointer-events-none absolute bottom-10 left-4 z-20 hidden xl:flex">
        <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 [writing-mode:vertical-rl] rotate-180">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            ↑
          </motion.span>
          Scroll
        </span>
      </div>

      {/* ── TEXT + IMAGE (stacked mobile, side-by-side tablet+) ── */}
      <div className="container-x relative z-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-0">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:min-h-[92vh] lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.18em]"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              AWS · Azure · Google Cloud Partner
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-5 max-w-[18ch] font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-balance sm:mt-6 sm:text-[2.5rem] md:max-w-none md:text-[2.75rem] lg:max-w-[18ch] lg:text-[3rem] xl:text-[3.4rem]"
            >
              Scale your cloud infrastructure{" "}
              <span className="text-gradient">without limits</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/60 sm:mt-6 sm:text-base md:text-lg"
            >
              Architect, migrate and run multi-cloud infrastructure across the
              world&apos;s top three platforms — built for speed, security and
              serious scale.
            </motion.p>

            <motion.div variants={item} className="mt-7 sm:mt-9">
              <a
                href="#contact"
                data-lead
                className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-6 text-sm font-semibold text-ink transition-all hover:shadow-[0_0_0_6px_rgba(255,255,255,0.12)] sm:pr-7"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5 sm:h-11 sm:w-11">
                  <ArrowRight className="h-4 w-4" />
                </span>
                Free consultation
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="relative lg:hidden"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 sm:rounded-[2rem] md:aspect-[16/10]">
              <Image
                src="/images/hero-team.webp"
                alt="ScaleView cloud engineers reviewing infrastructure in a data center"
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 90vw"
                className="object-cover object-[62%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── DESKTOP IMAGE PANEL (bleeds left from ~38% viewport) ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: EASE_OUT }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block xl:left-[36%] xl:w-auto xl:right-0 2xl:left-[34%]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-tl-[80px] xl:rounded-tl-[100px]">
          <Image
            src="/images/hero-team.webp"
            alt="ScaleView cloud engineers reviewing infrastructure in a data center"
            fill
            priority
            sizes="(max-width: 1280px) 62vw, 66vw"
            className="object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />

          <span className="absolute left-10 top-16 grid h-7 w-7 place-items-center rounded-full ring-1 ring-cyan/70 xl:left-14 xl:top-20">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
