import { GithubIcon, HuggingFaceIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";
import { socials } from "@/data/portfolio";

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: GithubIcon },
  { href: socials.twitter, label: "X", Icon: TwitterIcon },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: socials.huggingface, label: "HuggingFace", Icon: HuggingFaceIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 dark:border-white/[0.08]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Muditya Raghav. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-1.5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-900/[0.06] hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-100"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#top"
            className="ml-2 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/12 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
