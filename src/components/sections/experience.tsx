import Reveal from "@/components/reveal";
import { Card, Section, SectionHeading } from "@/components/ui";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        title="Experience"
        description="Production engineering, ML workflows, and QA automation across three teams."
      />

      <div className="relative space-y-4">
        <span
          aria-hidden
          className="absolute top-4 bottom-4 left-[7px] w-px bg-gradient-to-b from-accent-500/60 via-zinc-200 to-transparent dark:via-white/10"
        />

        {experience.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={index * 80} className="relative pl-8">
            <span
              aria-hidden
              className="absolute top-7 left-0 h-[15px] w-[15px] rounded-full border-2 border-accent-500 bg-[#fafafa] dark:bg-[#09090b]"
            />

            <Card interactive className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{job.role}</h3>
                <span className="rounded-full border border-zinc-200 px-2.5 py-0.5 font-mono text-[11px] text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>

              <p className="mt-1.5 text-sm font-medium text-accent-600 dark:text-accent-400">
                {job.company}
              </p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[15px] text-zinc-600 dark:text-zinc-400">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
