"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "sv-loader-done";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(false);
      document.body.classList.remove("sv-loading");
      return;
    }

    document.body.classList.add("sv-loading");

    const started = performance.now();
    const minVisibleMs = 450;
    const maxWaitMs = 4500;
    const timers: number[] = [];

    const hide = () => {
      const elapsed = performance.now() - started;
      const delay = Math.max(0, minVisibleMs - elapsed);

      timers.push(
        window.setTimeout(() => {
          setHiding(true);
          document.body.classList.remove("sv-loading");
          sessionStorage.setItem(STORAGE_KEY, "1");

          timers.push(
            window.setTimeout(() => {
              setVisible(false);
            }, 480)
          );
        }, delay)
      );
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    timers.push(window.setTimeout(hide, maxWaitMs));

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      document.body.classList.remove("sv-loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`sv-page-loader${hiding ? " is-hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading ScaleView"
    >
      <div className="sv-page-loader__inner">
        <div className="sv-page-loader__logo">
          <Image
            src="/images/logo.webp"
            alt=""
            width={56}
            height={56}
            priority
            className="rounded-[14px] shadow-[0_12px_32px_-10px_rgba(11,92,255,0.85)]"
          />
          <span className="sv-page-loader__ring" aria-hidden />
        </div>
        <p className="sv-page-loader__label font-display text-sm font-semibold tracking-wide text-white/90">
          Scale<span className="text-cyan">View</span>
        </p>
        <div className="sv-page-loader__bar" aria-hidden>
          <span className="sv-page-loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}
