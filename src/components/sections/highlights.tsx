import { highlights } from "@/data/portfolio";

export default function Highlights() {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">Highlights</h2>
      <ul className="list-none space-y-0 divide-y divide-[#e8e8ed] dark:divide-[#3a3a3e]">
        {highlights.map((h) => (
          <li key={h.date} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-start sm:gap-4">
            <span className="w-36 shrink-0 pt-px text-sm font-semibold text-[#1d1d1f] dark:text-white sm:w-44">
              {h.date}
            </span>
            <span className="min-w-0 flex-1 text-[15px] leading-relaxed text-[#424245] dark:text-[#d2d2d7]">
              {h.event}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}