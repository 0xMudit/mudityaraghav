import Reveal from "@/components/reveal";
import { Card, Section, SectionHeading } from "@/components/ui";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        title="Education"
        description="Some of the formal and slightly informal education that I have received."
      />

      <Reveal>
        <Card className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                B.Tech — Gyan Ganga Institute of Technology and Sciences
              </h3>
              <p className="mt-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400">2019 — 2023</p>
            </div>
            <span className="rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700 dark:border-accent-400/25 dark:bg-accent-500/12 dark:text-accent-300">
              CGPA 9.02 / 10
            </span>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
