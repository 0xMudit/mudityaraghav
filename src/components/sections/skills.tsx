import Reveal from "@/components/reveal";
import { Chip, Section, SectionHeading } from "@/components/ui";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        title="Skills"
        description="The stack I reach for — from backend services and data modeling to deployment and security testing."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.cat} delay={index * 50} className="h-full">
            <div className="h-full rounded-2xl border border-zinc-200/90 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="font-mono text-[11px] tracking-wider text-accent-600 uppercase dark:text-accent-400">
                {group.cat}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
