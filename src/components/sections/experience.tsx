import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">Experience</h2>
      <div className="space-y-6">
        {experience.map((job, i) => (
          <div key={i} className="border-t border-[#e8e8ed] pt-5 dark:border-[#3a3a3e]">
            <div className="font-semibold text-[#1d1d1f] dark:text-white">{job.role}</div>
            <div className="text-sm text-[#86868b] dark:text-[#a1a1a6]">
              {job.company} · {job.period}
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-[#424245] dark:text-[#d2d2d7]">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}