import Reveal from "@/components/reveal";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { Chip, Section, SectionHeading } from "@/components/ui";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white",
        "shadow-card transition duration-300",
        "hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_24px_56px_-28px_rgba(9,9,11,0.4)]",
        "dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20",
        featured ? "sm:flex-row" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "relative shrink-0 overflow-hidden bg-zinc-100 dark:bg-white/[0.05]",
          featured ? "sm:w-[44%]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={[
            "w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]",
            featured ? "aspect-video sm:aspect-auto sm:h-full" : "aspect-video",
          ].join(" ")}
        />
        <div
          aria-hidden
          className="absolute inset-0 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5"
        />
      </div>

      <div className={`flex min-w-0 flex-1 flex-col p-5 ${featured ? "sm:p-7" : ""}`}>
        <span className="font-mono text-[11px] tracking-wider text-accent-600 uppercase dark:text-accent-400">
          {project.tag}
        </span>

        <h3
          className={[
            "mt-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
            featured ? "text-xl sm:text-2xl" : "text-lg",
          ].join(" ")}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.metrics.map((metric) => (
            <Chip key={metric} tone="accent">
              {metric}
            </Chip>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Live
            <ArrowUpRightIcon size={14} />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3.5 py-1.5 text-[13px] font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/12 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
          >
            <GithubIcon size={14} />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        title="Projects"
        description="Systems I designed, built, and operate — not mockups."
      />

      <div className="space-y-4">
        {featured ? (
          <Reveal>
            <ProjectCard project={featured} featured />
          </Reveal>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.title} delay={index * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
