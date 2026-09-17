"use client";

import { useCallback, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds before the reveal transition starts. */
  delay?: number;
  className?: string;
};

const HIDDEN = ["translate-y-4", "opacity-0"];
const SHOWN = ["translate-y-0", "opacity-100", "transition-all", "duration-700", "ease-out"];

/**
 * Fades + lifts its children into view once they scroll into the viewport.
 *
 * The hidden state is applied imperatively from a ref callback (after mount),
 * so server-rendered HTML and reduced-motion users always see the content.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const attach = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;

      const show = () => {
        el.classList.remove(...HIDDEN);
        el.classList.add(...SHOWN);
        if (delay) el.style.transitionDelay = `${delay}ms`;
      };

      if (
        typeof IntersectionObserver === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      // Already in (or above) the viewport on load - show without animating so
      // deep links and tall viewports never pause on a half-revealed section.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        show();
        return;
      }

      el.classList.add(...HIDDEN);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            show();
            observer.disconnect();
          }
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
      );

      observer.observe(el);
      return () => observer.disconnect();
    },
    [delay],
  );

  return (
    <div ref={attach} className={className}>
      {children}
    </div>
  );
}
