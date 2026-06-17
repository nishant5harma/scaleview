import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { ArrowRight, ChatIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { EMAIL, PHONES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Get a Free Cloud Consultation with ScaleView Experts",
  description:
    "Contact ScaleView for a free cloud consultation — expert AWS, Azure, managed IT, DevOps & cybersecurity solutions tailored for SMBs and mid-market businesses.",
  alternates: { canonical: "/contact" },
};

const CONTACT_METHODS = [
  {
    Icon: PhoneIcon,
    title: "Call Us",
    text: PHONES.map((p) => p.display).join(" · "),
    action: { label: "Call now", href: `tel:${PHONES[0].tel}` },
  },
  {
    Icon: ChatIcon,
    title: "Book a Call",
    text: "Book a 30-minute discovery call with one of our consultants.",
    action: { label: "Book a call", href: "mailto:anuj@scaleview.ai", dataLead: true },
  },
  {
    Icon: MailIcon,
    title: "Email Us",
    text: EMAIL,
    action: { label: "Send an email", href: `mailto:${EMAIL}` },
  },
  {
    Icon: PinIcon,
    title: "Location",
    text: "India — serving clients across APAC, the Middle East, and select international markets.",
  },
];

const FAQS = [
  {
    q: "How quickly can you start?",
    a: "Most engagements can kick off within 1–2 weeks of scope agreement.",
  },
  {
    q: "Do you work outside India?",
    a: "Yes. While headquartered in India, we serve clients across APAC, the Middle East, and select international markets.",
  },
  {
    q: "What's your typical project duration?",
    a: "Cloud migrations typically take 6–12 weeks. Managed services start from day one.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes, for well-defined scopes. We offer both fixed-price and time-and-materials models.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main className="pt-[4.5rem]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
          <div className="pointer-events-none absolute -left-24 -top-10 h-96 w-96 rounded-full bg-brand/25 blur-[140px]" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-cyan/20 blur-[130px]" />

          <div className="container-x relative">
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-medium text-white/40">
                <Link href="/" className="transition-colors hover:text-white/70">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white/70">Contact Us</span>
              </nav>
            </Reveal>

            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              {/* LEFT */}
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    Contact Us
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                    Let&apos;s start a{" "}
                    <span className="text-gradient">conversation</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                    Whether you have a specific project in mind or just want to
                    explore what&apos;s possible, we&apos;d love to hear from you.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href="#form"
                      className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-12px_rgba(11,92,255,0.9)] transition-all hover:bg-brand-600"
                    >
                      Send a message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      {EMAIL}
                    </a>
                    <a
                      href={`tel:${PHONES[0].tel}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      {PHONES[0].display}
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
                    {[
                      { v: "< 1 day", l: "Average response" },
                      { v: "30 min", l: "Free discovery call" },
                      { v: "APAC +", l: "Global delivery" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="font-display text-xl font-bold text-white">
                          {s.v}
                        </p>
                        <p className="mt-0.5 text-xs text-white/50">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* RIGHT — chat-style hero visual */}
              <Reveal delay={0.1}>
                <div className="relative mx-auto max-w-sm pb-10 pr-4 lg:mr-0 lg:max-w-none lg:pb-12 lg:pr-8">
                  <div className="pointer-events-none absolute inset-0 -translate-x-6 translate-y-6 rounded-[2.5rem] bg-gradient-to-tr from-brand/30 to-cyan/20 blur-2xl" />

                  {/* decorative ring */}
                  <div className="pointer-events-none absolute -left-6 -top-6 hidden h-32 w-32 rounded-full border border-white/10 sm:block" />

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)] sm:aspect-[5/4]">
                    <Image
                      src="/images/start-person.png"
                      alt="Talk to a ScaleView consultant"
                      fill
                      priority
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  </div>

                  {/* live badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-card backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Talk to an expert
                  </div>

                  {/* incoming bubble — overlaps left edge */}
                  <div className="absolute -left-3 top-1/3 hidden max-w-[60%] items-end gap-2 sm:flex lg:-left-8">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan text-[0.7rem] font-bold text-white shadow-card">
                      SV
                    </span>
                    <div className="rounded-2xl rounded-bl-sm border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-card">
                      Hello, how can I help you?
                    </div>
                  </div>

                  {/* reply bubble — overlaps bottom-right edge */}
                  <div className="absolute -right-3 bottom-2 max-w-[72%] rounded-2xl rounded-br-sm bg-brand px-4 py-3 text-sm font-medium text-white shadow-[0_20px_45px_-18px_rgba(11,92,255,0.9)] sm:max-w-[60%] lg:-right-6">
                    Hey, could you tell me how to migrate to the cloud?
                    <span className="mt-1 block text-[0.7rem] font-normal text-white/70">
                      Typing…
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="form" className="relative bg-white py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Get in touch
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                  Tell us what you&apos;re building
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  Share a few details and we&apos;ll match you with the right
                  consultant. No sales pressure — just a clear next step.
                </p>
              </Reveal>

              <div className="mt-8 space-y-3">
                {CONTACT_METHODS.map(({ Icon, title, text }) => (
                  <Reveal key={title} delay={0.12}>
                    <div className="flex items-start gap-4 rounded-2xl border border-line bg-[#f7f9fc] p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold text-ink">
                          {title}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">
                          {text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        {/* OTHER WAYS */}
        <section className="relative overflow-hidden bg-[#f7f9fc] py-24">
          <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Other ways to reach us
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                  We&apos;re easy to find
                </h2>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {CONTACT_METHODS.map(({ Icon, title, text, action }, i) => (
                <Reveal key={title} delay={i * 0.08}>
                  <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                      {title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {text}
                    </p>
                    {action && (
                      <a
                        href={action.href}
                        {...("dataLead" in action && action.dataLead ? { "data-lead": true } : {})}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                      >
                        {action.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative bg-white py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  FAQ
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
                  Common <span className="text-gradient">questions</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  Still unsure about something? Drop us a message above and
                  we&apos;ll get you a straight answer.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.05}>
              <Accordion items={FAQS} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
