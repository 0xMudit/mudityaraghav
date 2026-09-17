import type { ReactNode } from "react";
import Reveal from "@/components/reveal";

/* ---------------------------------------------------------------- buttons -- */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition duration-200 whitespace-nowrap";

export const btnAccent = `${buttonBase} bg-accent-600 px-5 py-2.5 text-white shadow-[0_8px_24px_-10px_rgba(79,70,229,0.9)] hover:bg-accent-500 active:translate-y-px`;

export const btnGhost = `${buttonBase} border border-zinc-200 bg-white px-5 py-2.5 text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/12 dark:bg-white/[0.03] dark:text-zinc-100 dark:hover:border-white/20 dark:hover:bg-white/[0.07]`;

export const iconButton =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition duration-200 hover:bg-zinc-900/[0.06] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100";

/* ------------------------------------------------------------------ card -- */

export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-zinc-200/90 bg-white shadow-card",
        "dark:border-white/10 dark:bg-white/[0.03]",
        interactive
          ? "transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-lift dark:hover:border-white/20"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ chip -- */

const chipTones = {
  muted:
    "border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300",
  accent:
    "border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-400/25 dark:bg-accent-500/12 dark:text-accent-300",
} as const;

export function Chip({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: keyof typeof chipTones;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap ${chipTones[tone]}`}
    >
      {children}
    </span>
  );
}

/* --------------------------------------------------------------- section -- */

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-zinc-200/70 py-12 sm:py-16 dark:border-white/[0.08] ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-accent-600 dark:text-accent-400">{index}</span>
        <span className="h-px w-6 bg-zinc-300 dark:bg-zinc-700" />
        <h2 className="text-2xl font-semibold tracking-tight sm:text-[28px]">{title}</h2>
      </div>
      {description ? (
        <p className="mt-3 max-w-2xl text-[15px] text-zinc-600 dark:text-zinc-400">{description}</p>
      ) : null}
    </Reveal>
  );
}
