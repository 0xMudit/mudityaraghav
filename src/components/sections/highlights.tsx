import Reveal from "@/components/reveal";
import { Section, SectionHeading } from "@/components/ui";
import { highlights } from "@/data/portfolio";

export default function Highlights() {
  return (
    <Section id="highlights">
      <SectionHeading
        index="01"
        title="Highlights"
        description="A quick scan of what I have been shipping, publishing, and studying."
      />

      <Reveal>
        <ul className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white dark:border-white/10 dark:bg-white/[0.03]">
          {highlights.map((item, index) => (
            <li
              key={item.date}
              className={[
                "flex flex-col gap-1 px-5 py-4 transition-colors sm:flex-row sm:items-baseline sm:gap-6",
                "hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.03]",
                index > 0 ? "border-t border-zinc-200/80 dark:border-white/[0.07]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className="shrink-0 font-mono text-xs tracking-tight text-zinc-500 sm:w-44 dark:text-zinc-400">
                {item.date}
              </span>
              <span className="text-[15px] text-zinc-700 dark:text-zinc-300">{item.event}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
