import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export default function CTA() {
  return (
    <section id="contact" className="bg-white pb-24 pt-4">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-600 to-brand-700 px-6 py-12 text-center sm:px-12 sm:py-16 md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyan/30 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Free 30-minute consultation
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to scale on the cloud?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/80">
                Tell us where you want to go. We&apos;ll map the architecture,
                timeline and savings — no strings attached.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:hello@scaleview.cloud"
                  data-lead
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-brand shadow-lg transition-transform hover:scale-[1.03]"
                >
                  Let&apos;s talk now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
