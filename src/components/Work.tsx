"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./Icons";

const PROJECTS = [
  {
    img: "/images/platform-visual.webp",
    title: "Global retail multi-cloud",
    tags: ["Migration", "Multi-cloud"],
  },
  {
    img: "/images/about-visual.webp",
    title: "Fintech edge network",
    tags: ["Edge", "Performance"],
  },
  {
    img: "/images/service-security.webp",
    title: "Healthcare compliance cloud",
    tags: ["Security", "Compliance"],
  },
  {
    img: "/images/service-analytics.webp",
    title: "SaaS cost optimization",
    tags: ["FinOps", "Scaling"],
  },
  {
    img: "/images/service-devops.webp",
    title: "Media streaming pipeline",
    tags: ["DevOps", "Automation"],
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  return (
    <section id="work" className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="container-x relative">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            align="left"
            light
            eyebrow="Selected work"
            title="Breakthrough cloud"
            highlight="projects"
          />
          <span className="hidden shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/50 sm:inline-flex">
            ← Drag to explore →
          </span>
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="mt-12 cursor-grab overflow-hidden active:cursor-grabbing"
        onPointerDown={() => {
          if (containerRef.current) {
            setWidth(
              containerRef.current.scrollWidth - containerRef.current.offsetWidth
            );
          }
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.08}
          className="flex gap-6 px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-3xl border border-white/10 sm:w-[380px]"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="380px"
                draggable={false}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-brand">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
