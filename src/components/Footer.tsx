import Logo from "./Logo";
import { ArrowRight } from "./Icons";
import { ADDRESS, PHONES } from "@/lib/contact";

const COLUMNS = [
  {
    title: "Platform",
    links: ["Multi-cloud", "Migration", "Security", "Cost optimization", "DevOps"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Case studies", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Documentation", "Status", "Privacy policy", "Terms"],
  },
];

const SOCIALS = ["in", "X", "f"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy pb-20 text-white sm:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
      <div className="container-x relative">
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Your certified partner for AWS and Azure —
              engineering infrastructure built to scale.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              {PHONES.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="text-sm text-white/55 transition-colors hover:text-cyan"
                >
                  {phone.display}
                </a>
              ))}
            </div>
            <address className="mt-4 max-w-xs not-italic text-sm leading-relaxed text-white/55">
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
              <br />
              {ADDRESS.line3}
            </address>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-cyan"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Stay in the loop
            </h4>
            <p className="mt-5 text-sm text-white/55">
              Cloud tips and product updates, monthly.
            </p>
            <form className="mt-4 flex overflow-hidden rounded-xl border border-white/15 bg-white/5">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex shrink-0 items-center justify-center bg-brand px-4 text-white transition-colors hover:bg-brand-600"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} ScaleView. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy &amp; policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
