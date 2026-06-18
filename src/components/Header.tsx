"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { ArrowRight } from "./Icons";

type NavChild = { label: string; href: string; desc?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/#platform" },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Cloud Services", href: "/services/cloud-services", desc: "Migration, architecture & FinOps" },
      { label: "Cybersecurity", href: "/services/cybersecurity", desc: "Zero-trust & compliance" },
      { label: "Data & AI", href: "/services/data-ai", desc: "Pipelines, ML & analytics" },
      { label: "DevOps & Automation", href: "/services/devops", desc: "CI/CD & platform engineering" },
      { label: "Managed Services", href: "/services/managed-services", desc: "24/7 operations & SRE" },
      { label: "Digital Transformation", href: "/services/digital-transformation", desc: "Modernization roadmaps" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Partners", href: "/partners" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Why ScaleView", href: "/why-scaleview" },
  { label: "Contact", href: "/contact" },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || solid
            ? "bg-navy/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex min-h-[4.25rem] items-center justify-between py-3 sm:min-h-[4.5rem]">
          <Logo light />

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                    <Chevron className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-card backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <span className="block text-sm font-semibold text-white">
                            {child.label}
                          </span>
                          {child.desc && (
                            <span className="mt-0.5 block text-xs text-white/50">
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              data-lead
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(11,92,255,0.9)] transition-all hover:bg-brand-600 hover:shadow-[0_0_0_5px_rgba(11,92,255,0.25)] lg:px-5"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-label="Open menu"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 flex h-full w-[min(82vw,20rem)] flex-col overflow-y-auto bg-ink p-6 md:w-[min(60vw,22rem)]"
            >
              <div className="flex items-center justify-between">
                <Logo light />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white text-2xl"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>
              <ul className="mt-10 space-y-1">
                {NAV.map((item) =>
                  item.children ? (
                    <li key={item.label}>
                      <button
                        onClick={() =>
                          setOpenSub(openSub === item.label ? null : item.label)
                        }
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                        aria-expanded={openSub === item.label}
                      >
                        {item.label}
                        <Chevron
                          className={`h-4 w-4 transition-transform duration-200 ${
                            openSub === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {openSub === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-xl px-4 py-2.5 text-base text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/contact"
                data-lead
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-base font-semibold text-white"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
