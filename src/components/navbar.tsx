"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import {
  CloseIcon,
  FileTextIcon,
  GithubIcon,
  LinkedInIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "@/components/icons";
import { iconButton } from "@/components/ui";
import { resumeUrl, socials } from "@/data/portfolio";

const links = [
  { href: "#highlights", label: "Highlights" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = links.map((link) => link.href.slice(1));

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: GithubIcon },
  { href: socials.twitter, label: "X", Icon: TwitterIcon },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/** Highlights the nav link for whichever section currently owns the top of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button type="button" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`} className={`${iconButton} cursor-pointer`}>
      <span className="relative flex h-[17px] w-[17px] items-center justify-center">
        <SunIcon size={17} className="absolute rotate-0 scale-100 transition-all duration-300 dark:rotate-90 dark:scale-0" />
        <MoonIcon size={17} className="absolute rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      </span>
    </button>
  );
}

export default function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  // Force the solid bar while the mobile panel is expanded, otherwise the
  // panel would float over the page on a transparent header.
  const solid = scrolled || open;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-zinc-200/70 bg-[#fafafa]/80 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#09090b]/80"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-accent-500 to-violet-500 text-[12px] font-bold tracking-tight text-white shadow-[0_6px_16px_-6px_rgba(99,102,241,0.9)] transition duration-200 group-hover:scale-105">
            MR
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-zinc-900 sm:block dark:text-zinc-50">
            Muditya Raghav
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "rounded-full px-3 py-1.5 text-[13px] font-medium transition duration-200",
                  isActive
                    ? "bg-accent-50 text-accent-700 dark:bg-accent-500/12 dark:text-accent-300"
                    : "text-zinc-600 hover:bg-zinc-900/[0.05] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.08] dark:hover:text-zinc-100",
                ].join(" ")}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-0.5">
          <div className="hidden items-center gap-0.5 sm:flex">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={iconButton}
              >
                <Icon size={17} />
              </a>
            ))}
            <span className="mx-1.5 h-5 w-px bg-zinc-200 dark:bg-white/12" />
          </div>

          <ThemeToggle />

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1.5 hidden items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-[13px] font-medium text-white transition duration-200 hover:bg-zinc-700 sm:inline-flex dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <FileTextIcon size={14} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`${iconButton} ml-1 cursor-pointer md:hidden`}
          >
            {open ? <CloseIcon size={19} /> : <MenuIcon size={19} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-zinc-200/70 px-5 pb-6 pt-3 md:hidden dark:border-white/[0.08]">
          <div className="flex flex-col gap-0.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={[
                  "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition",
                  active === link.href
                    ? "bg-accent-50 text-accent-700 dark:bg-accent-500/12 dark:text-accent-300"
                    : "text-zinc-700 hover:bg-zinc-900/[0.05] dark:text-zinc-300 dark:hover:bg-white/[0.06]",
                ].join(" ")}
              >
                {link.label}
                <span className="font-mono text-[11px] text-zinc-400">→</span>
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-200/70 pt-4 dark:border-white/[0.08]">
            <div className="flex items-center gap-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={iconButton}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <FileTextIcon size={14} />
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
