import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "./Icons";

const POSTS = [
  {
    img: "/images/service-devops.png",
    category: "DevOps",
    date: "Jun 02, 2026",
    title: "Cutting deploy times by 70% with GitOps",
  },
  {
    img: "/images/service-security.png",
    category: "Security",
    date: "May 21, 2026",
    title: "A practical guide to zero-trust on the cloud",
  },
  {
    img: "/images/service-analytics.png",
    category: "FinOps",
    date: "May 09, 2026",
    title: "Five FinOps wins that pay for themselves",
  },
  {
    img: "/images/platform-visual.png",
    category: "Multi-cloud",
    date: "Apr 28, 2026",
    title: "When multi-cloud actually makes sense",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative bg-white py-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="From the"
            highlight="ScaleView blog"
          />
          <Reveal>
            <a
              href="#insights"
              className="group inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              View all articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href="#insights"
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,92,255,0.4)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 22vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {p.date}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
