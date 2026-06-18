"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const LOGOS = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "OpenAI",
  "Snowflake",
  "Databricks",
  "Cloudflare",
  "HashiCorp",
];

function LogoItem({ name }: { name: string }) {
  return (
    <span
      className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-ink/30 transition-colors duration-300 hover:text-brand sm:text-[1.75rem]"
      title={name}
    >
      {name}
    </span>
  );
}

export default function CloudPartners() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Opposing parallax drift for the two marquee rows
  const xRow1 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const labelY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  const row = [...LOGOS, ...LOGOS];

  return (
    <section
      ref={ref}
      className="relative -mt-px overflow-hidden border-b border-line bg-[#f5f7fc] pb-16 pt-24 sm:pt-28"
    >
      {/* Curved divider flowing out of the dark hero above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-px text-navy">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[60px] w-full sm:h-[90px] lg:h-[120px]"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,40 C1080,118 360,118 0,40 Z"
          />
        </svg>
      </div>

      {/* faint brand glow under the curve */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-40 w-[60%] -translate-x-1/2 rounded-full bg-brand/10 blur-[80px]" />

      {/* Eyebrow label */}
      <motion.div
        style={{ y: labelY }}
        className="relative mb-12 flex flex-col items-center gap-3"
      >
        <span className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand sm:tracking-[0.22em]">
          <span className="hidden h-px w-6 bg-brand/40 sm:block" />
          Certified across the platforms that power the internet
          <span className="hidden h-px w-6 bg-brand/40 sm:block" />
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-full ring-1 ring-brand/40">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        </span>
      </motion.div>

      {/* Parallax marquee rows */}
      <div className="relative space-y-7">
        <motion.div
          style={{ x: xRow1 }}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex w-max animate-[marquee_42s_linear_infinite] items-center gap-14 sm:gap-20">
            {row.map((name, i) => (
              <LogoItem key={`a-${name}-${i}`} name={name} />
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ x: xRow2 }}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex w-max animate-[marquee-rev_48s_linear_infinite] items-center gap-14 sm:gap-20">
            {row.map((name, i) => (
              <LogoItem key={`b-${name}-${i}`} name={name} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
