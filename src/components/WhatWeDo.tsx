"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  ArrowRight,
  CloudIcon,
  ShieldIcon,
  ChipIcon,
  LayersIcon,
  HeadsetIcon,
  BoltIcon,
} from "./Icons";

type Service = {
  num: string;
  title: string;
  text: string;
  img: string;
  Icon: typeof CloudIcon;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Cloud Services",
    text: "Migrate, optimize, and scale on AWS, Azure, or GCP — with certified architects guiding every step.",
    img: "/images/svc-cloud-real.webp",
    Icon: CloudIcon,
  },
  {
    num: "02",
    title: "Cybersecurity",
    text: "End-to-end security — threat detection, compliance, and zero-trust architecture.",
    img: "/images/svc-security-real.webp",
    Icon: ShieldIcon,
  },
  {
    num: "03",
    title: "Data & AI / GenAI",
    text: "Turn raw data into decisions — analytics platforms, AI models, and Generative AI systems.",
    img: "/images/svc-ai-real.webp",
    Icon: ChipIcon,
  },
  {
    num: "04",
    title: "DevOps & Automation",
    text: "CI/CD pipelines, infrastructure as code, and intelligent automation that compounds.",
    img: "/images/svc-devops-real.webp",
    Icon: LayersIcon,
  },
  {
    num: "05",
    title: "Managed Services",
    text: "24/7 monitoring, proactive support, and infrastructure management — under one roof.",
    img: "/images/svc-managed-real.webp",
    Icon: HeadsetIcon,
  },
  {
    num: "06",
    title: "Digital Transformation",
    text: "Strategy meets execution — finding where technology creates the most business impact.",
    img: "/images/svc-transform-real.webp",
    Icon: BoltIcon,
  },
];

function DeckCard({
  service,
  index,
  total,
  progress,
}: {
  service: Service;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { Icon } = service;
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const stackTop = `calc(4.75rem + ${index * 0.65}rem)`;

  return (
    <div
      className="sticky flex min-h-[68vh] items-center justify-center px-1 py-3 sm:min-h-[72vh] sm:py-4 lg:min-h-[82vh]"
      style={{ top: stackTop, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-navy shadow-[0_40px_90px_-40px_rgba(6,11,28,0.9)] md:grid-cols-2"
      >
        {/* TEXT SIDE */}
        <div className="relative order-2 flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:order-1 lg:min-h-[520px] lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
          <div className="relative flex items-center justify-between">
            <span className="font-display text-sm font-semibold text-white/40">
              <span className="text-white">{service.num}</span>
              <span className="mx-0.5">/</span>
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <span className="relative mt-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-cyan text-white shadow-[0_14px_30px_-12px_rgba(11,92,255,0.9)]">
            <Icon className="h-7 w-7" />
          </span>

          <h3 className="relative mt-6 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            {service.title}
          </h3>
          <p className="relative mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/60">
            {service.text}
          </p>

          <a
            href="#contact"
            className="group relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative order-1 min-h-[240px] overflow-hidden sm:min-h-[320px] md:min-h-[360px] lg:order-2 lg:min-h-[520px]">
          <Image
            src={service.img}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy/80 lg:via-transparent lg:to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function WhatWeDo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className="relative bg-[#f5f7fc]">
      <div className="container-x pt-24">
        <SectionHeading
          eyebrow="What we do"
          title="Engineered systems for the"
          highlight="next decade of enterprise"
          description="From cloud foundations to GenAI products — six interconnected practices, delivered as one platform."
        />
      </div>

      <div ref={container} className="container-x relative -mt-8 pb-20">
        {SERVICES.map((service, i) => (
          <DeckCard
            key={service.num}
            service={service}
            index={i}
            total={SERVICES.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
