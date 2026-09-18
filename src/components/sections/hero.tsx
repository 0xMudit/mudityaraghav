import Reveal from "@/components/reveal";
import { ArrowUpRightIcon, GithubIcon, LinkedInIcon, MailIcon, TwitterIcon } from "@/components/icons";
import { btnAccent, btnGhost, iconButton } from "@/components/ui";
import { email, experience, projects, research, resumeUrl, socials } from "@/data/portfolio";

const focus = [
  "End-to-end ownership: I take ambiguous problems to deployed, monitored, and maintained production systems.",
  "Backend depth across Go, Python, and TypeScript — REST, WebSockets, financial ISO flows, and relational data.",
  "Reliability mindset forged in adversarial testing: 25% API stability gain and 3 verified bug-bounty reports.",
  "Leverage beyond my own work: automation adopted by 2 teams, cutting test time 90% and release cycles 20%.",
];

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: GithubIcon },
  { href: socials.twitter, label: "X", Icon: TwitterIcon },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export default function Hero() {
  const stats = [
    { value: String(projects.length), label: "Systems shipped" },
    { value: String(research.length), label: "Publications" },
    { value: String(experience.length), label: "Engineering roles" },
  ];

  return (
    <section className="pt-12 pb-10 sm:pt-16 sm:pb-14">
      <div className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="min-w-0 flex-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Open to remote software engineering roles — immediate joiner
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-6 text-[40px] leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-[56px]">
              Muditya Raghav
            </h1>
            <p className="mt-4 font-mono text-[13px] tracking-tight text-accent-600 sm:text-sm dark:text-accent-400">
              Software Engineer · Backend, Systems &amp; Full-Stack
            </p>
          </Reveal>

          <Reveal delay={110}>
            <p className="mt-5 max-w-xl text-base text-zinc-600 sm:text-[17px] dark:text-zinc-400">
              I design and ship production systems end-to-end — a Mastercard-style payments switch in Go, a
              Stripe-billed AI research platform, and a real-time trading intelligence backend. From
              architecture and data modeling to deployment and operations.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}?subject=Opportunity%20for%20Muditya%20Raghav`}
                className={btnAccent}
              >
                <MailIcon size={16} />
                Get in touch
              </a>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                Résumé
                <ArrowUpRightIcon size={15} />
              </a>
              <span className="hidden h-8 w-px bg-zinc-200 sm:block dark:bg-white/12" />
              <div className="flex items-center gap-0.5">
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
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-accent-500 via-violet-500 to-fuchsia-500 opacity-70 blur-[2px]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/profile.jpeg"
              alt="Muditya Raghav"
              className="relative h-28 w-28 rounded-3xl object-cover sm:h-36 sm:w-36 lg:h-44 lg:w-44"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-200/90 bg-white/70 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={240}>
        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {focus.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] text-zinc-600 dark:text-zinc-400">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
