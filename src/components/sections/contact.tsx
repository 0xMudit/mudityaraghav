import Reveal from "@/components/reveal";
import { FileTextIcon, GithubIcon, HuggingFaceIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { btnAccent, btnGhost, Section, SectionHeading } from "@/components/ui";
import { email, resumeUrl, socials } from "@/data/portfolio";

const socialLinks = [
  { href: socials.github, label: "GitHub", handle: "github.com/0xMudit", Icon: GithubIcon },
  { href: socials.linkedin, label: "LinkedIn", handle: "linkedin.com/in/0xmudit", Icon: LinkedInIcon },
  { href: socials.huggingface, label: "HuggingFace", handle: "huggingface.co/0xMudit", Icon: HuggingFaceIcon },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading index="07" title="Contact" />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-9 dark:border-white/10 dark:bg-white/[0.03]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-accent-400/25 blur-3xl dark:bg-accent-500/20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/15"
          />

          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Let&rsquo;s build something.
            </h3>
            <p className="mt-2.5 max-w-xl text-[15px] text-zinc-600 dark:text-zinc-400">
              Open to remote software engineering roles across backend, full-stack, and
              infrastructure — immediate joiner. The fastest way to reach me is email.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}?subject=Opportunity%20for%20Muditya%20Raghav`}
                className={btnAccent}
              >
                <MailIcon size={16} />
                {email}
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                <FileTextIcon size={15} />
                View resume
              </a>
            </div>

            <div className="mt-8 grid gap-1 border-t border-zinc-200/80 pt-6 sm:grid-cols-3 dark:border-white/10">
              {socialLinks.map(({ href, label, handle, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-zinc-900/[0.04] dark:hover:bg-white/[0.06]"
                >
                  <span className="text-zinc-500 transition group-hover:text-accent-600 dark:text-zinc-400 dark:group-hover:text-accent-400">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] text-zinc-500 dark:text-zinc-400">{label}</span>
                    <span className="block truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
