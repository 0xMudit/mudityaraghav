import { email, resumeUrl, socials } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">Contact</h2>
      <p className="mb-4 text-[15px] text-[#424245] dark:text-[#d2d2d7]">
        Open to ML Engineer, AI Engineer, Applied Scientist, and research roles. The fastest way to reach me is email.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${email}?subject=Opportunity%20for%20Muditya%20Raghav`}
          className="inline-flex items-center rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white no-underline transition hover:bg-[#0077ed]"
        >
          Email me
        </a>
        <a
          href={resumeUrl}
          download
          className="inline-flex items-center rounded-full border border-[#d2d2d7] px-6 py-2.5 text-sm font-medium text-[#1d1d1f] no-underline transition hover:bg-[#f5f5f7] dark:border-[#3a3a3e] dark:text-white dark:hover:bg-[#2c2c2e]"
        >
          Download resume
        </a>
      </div>
      <ul className="mt-6 list-none space-y-1.5 text-[15px] text-[#424245] dark:text-[#d2d2d7]">
        <li>
          GitHub:{" "}
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            github.com/0xMudit
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin.com/in/0xmudit
          </a>
        </li>
        <li>
          HuggingFace:{" "}
          <a href={socials.huggingface} target="_blank" rel="noopener noreferrer">
            huggingface.co/0xMudit
          </a>
        </li>
      </ul>
    </section>
  );
}