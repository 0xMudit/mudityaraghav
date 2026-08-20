import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mb-10">
      <h2 className="mb-1 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">Projects</h2>
      <p className="mb-6 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
        Applied work with real products behind it — not mockups.
      </p>
      <div className="space-y-5">
        {projects.map((p) => (
          <article key={p.title} className="flex gap-5 rounded-2xl border border-[#e8e8ed] bg-white p-4 transition hover:shadow-md dark:border-[#3a3a3e] dark:bg-[#2c2c2e]">
            <div className="hidden w-44 shrink-0 sm:block">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="h-32 w-full rounded-xl border border-[#e8e8ed] object-cover object-top dark:border-[#48484a]"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 text-xs font-medium uppercase tracking-wide text-[#0071e3]">
                {p.tag}
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] dark:text-white">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#424245] dark:text-[#d2d2d7]">{p.desc}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.metrics.map((m) => (
                  <span key={m} className="rounded-full bg-[#e8f5ff] px-2.5 py-0.5 text-xs font-medium text-[#0071e3]">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-[#d2d2d7] px-2.5 py-0.5 text-xs text-[#6e6e73] dark:border-[#48484a] dark:text-[#a1a1a6]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-4 text-sm font-medium">
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">
                  Live / Weights →
                </a>
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">
                  Source →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}