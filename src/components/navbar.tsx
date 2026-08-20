"use client";

import { useTheme } from "@/lib/theme-provider";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "@/components/icons";
import { resumeUrl, socials } from "@/data/portfolio";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[15px] text-[#86868b] transition hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e8ed]/80 bg-white/80 backdrop-blur-xl dark:border-[#3a3a3e] dark:bg-[#1d1d1f]/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <a href="#" className="text-base font-semibold text-[#1d1d1f] no-underline dark:text-white">
          Muditya Raghav
        </a>
        <div className="flex items-center gap-5">
          <a href="#experience" className="hidden text-sm text-[#6e6e73] no-underline hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-white sm:inline">
            Experience
          </a>
          <a href="#projects" className="hidden text-sm text-[#6e6e73] no-underline hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-white sm:inline">
            Projects
          </a>
          <a href="#skills" className="hidden text-sm text-[#6e6e73] no-underline hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-white sm:inline">
            Skills
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center rounded-full bg-[#0071e3] px-4 py-1.5 text-sm font-medium text-white no-underline transition hover:bg-[#0077ed]"
          >
            Resume
          </a>
          <div className="flex items-center gap-3 border-l border-[#e8e8ed] pl-4 dark:border-[#3a3a3e]">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-white" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-white" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-white" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}