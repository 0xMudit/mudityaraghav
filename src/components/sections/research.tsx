import { research } from "@/data/portfolio";

export default function Research() {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">Research</h2>
      <p className="mb-2 text-[15px] text-[#424245] dark:text-[#d2d2d7]">
        The following are the links to some of my research publications.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-[15px] text-[#424245] dark:text-[#d2d2d7]">
        {research.map((r) => (
          <li key={r.title}>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.title}
            </a>{" "}
            — {r.date}
          </li>
        ))}
      </ul>
    </section>
  );
}