import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">Skills</h2>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.cat} className="flex flex-col gap-2 sm:flex-row sm:items-start">
            <span className="w-40 shrink-0 pt-0.5 font-semibold text-[#1d1d1f] dark:text-white">{s.cat}</span>
            <div className="flex flex-wrap gap-1.5">
              {s.items.map((item) => (
                <span key={item} className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#424245] dark:bg-[#2c2c2e] dark:text-[#d2d2d7]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}