import Reveal from "@/components/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { Section, SectionHeading } from "@/components/ui";
import { research } from "@/data/portfolio";

export default function Research() {
  return (
    <Section id="research">
      <SectionHeading index="06" title="Research" description="Links to some of my research publications." />

      <div className="grid gap-4 sm:grid-cols-2">
        {research.map((paper, index) => (
          <Reveal key={paper.title} delay={index * 70} className="h-full">
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-zinc-200/90 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-[0_20px_48px_-26px_rgba(79,70,229,0.5)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-accent-400/40"
            >
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{paper.date}</span>
              <h3 className="mt-2 text-base leading-snug font-semibold text-zinc-900 dark:text-zinc-50">
                {paper.title}
              </h3>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-accent-600 dark:text-accent-400">
                Read paper
                <ArrowUpRightIcon
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
