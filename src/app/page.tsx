"use client";

const timeline = [
  { date: "Mar 2025", event: "Open to ML Engineer, AI Engineer, and Applied Scientist roles" },
  { date: "Dec 2023", event: "Joined Reliance Jio — QA Automation + AI-assisted testing workflows" },
  { date: "Jul 2022", event: "Published research on AI-based low-light activity detection" },
  { date: "Apr 2022", event: "Software Engineer Intern at Persistent Systems — ML pipelines & data validation" },
  { date: "Mar 2023", event: "Published REST-to-grPC payment systems research on ResearchGate" },
  { date: "Apr 2021", event: "Cyber Security Intern at Cisco — penetration testing & vulnerability research" },
  { date: "May 2023", event: "Graduated B.Tech with CGPA 9.02/10" },
];

const projects = [
  {
    title: "Malcom",
    tag: "AI Research Workspace",
    desc: "A full-stack AI research platform with streamed LLM responses, document context retrieval, web research with sources, saved conversations, markdown and math rendering, and Stripe-backed subscriptions.",
    tech: "Next.js, TypeScript, Supabase, SQLite, Stripe, LLM streaming, RAG pipelines",
    live: "https://malcomman.duckdns.org/malcom/new",
    repo: "https://github.com/0xMudit/malcom-ai",
  },
  {
    title: "Jini",
    tag: "Document Intelligence",
    desc: "A local-first workspace that turns PDFs, spreadsheets, and personal documents into searchable answers, cited evidence, extracted dates and amounts, and actionable dashboard insights using NLP and retrieval.",
    tech: "React, Express, TypeScript, SQLite, Groq LLM, embeddings, Vitest, Docker",
    live: "https://malcomman.duckdns.org/jini/",
    repo: "https://github.com/0xMudit/Jini",
  },
  {
    title: "Kingswork",
    tag: "Trading Intelligence Platform",
    desc: "A full-stack platform combining market dashboards, stock analysis, paper portfolios, backtesting, alerts, prediction markets, and AI-assisted research — powered by real-time data pipelines and LLM integration.",
    tech: "FastAPI, React, TypeScript, SQLAlchemy, WebSockets, Groq, real-time data pipelines",
    live: "https://malcomman.duckdns.org/kingswork/dashboard/overview",
    repo: "https://github.com/0xMudit/KingsWork",
  },
];

const experience = [
  {
    period: "Dec 2023 — Mar 2025",
    role: "QA Associate Engineer + AI Workflows",
    company: "Reliance Jio Platforms, Hyderabad",
    bullets: [
      "Designed and deployed AI-assisted QA workflows using LLMs and Automator AI, automating 80+ test cases and increasing coverage by 40%.",
      "Built Python-based data validation pipelines processing 800+ tracked defects, resolving 35+ critical API issues.",
      "Integrated ML-driven test generation with Jenkins CI/CD, contributing to 20% faster release cycles.",
    ],
  },
  {
    period: "Apr 2022 — Jun 2022",
    role: "Software Engineer Intern — ML & Data",
    company: "Persistent Systems, Remote",
    bullets: [
      "Built automated data validation engine with Python and Pandas, processing 10,000+ rows per test run.",
      "Developed ML-adjacent QA workflows for Excel-based data pipelines, reducing manual effort by 90%.",
    ],
  },
  {
    period: "Apr 2021 — Jul 2021",
    role: "Cyber Security Intern",
    company: "Cisco Network, Remote",
    bullets: [
      "Performed penetration testing across 3+ live web platforms using Burp Suite and Nmap.",
      "Submitted three verified Bug Bounty reports through HackerOne — security-focused adversarial thinking.",
    ],
  },
];

const skills = [
  { cat: "ML & AI", items: "PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face Transformers, LLM fine-tuning, RAG, embeddings, vector databases" },
  { cat: "Languages", items: "Python, JavaScript, TypeScript, SQL, C++, CUDA, shell scripting" },
  { cat: "MLOps & Infrastructure", items: "Docker, Kubernetes, MLflow, Weights & Biases, FastAPI, CI/CD, Azure ML, GPU deployment" },
  { cat: "Data Engineering", items: "Pandas, NumPy, SQLAlchemy, MongoDB, SQLite, Apache Spark, data pipelines, ETL" },
  { cat: "Computer Vision & NLP", items: "OpenCV, image classification, object detection, NER, sentiment analysis, transformer architectures" },
  { cat: "Research & Communication", items: "Paper reading, experiment design, technical writing, English proficient, Hindi native" },
];

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#e8e8ed]/80 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <a href="#" className="text-base font-semibold text-[#1d1d1f]">
            Muditya Raghav
          </a>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm text-[#3a3a3e] hover:text-[#1d1d1f]">
              Projects
            </a>
            <a href="#experience" className="text-sm text-[#3a3a3e] hover:text-[#1d1d1f]">
              Experience
            </a>
            <a href="#skills" className="text-sm text-[#3a3a3e] hover:text-[#1d1d1f]">
              Skills
            </a>
            <div className="ml-2 flex items-center gap-4 border-l border-[#e8e8ed] pl-4">
              <a href="https://github.com/0xMudit" target="_blank" rel="noopener noreferrer" className="text-[#4a4a4f] hover:text-[#1d1d1f]" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://twitter.com/0xMudit" target="_blank" rel="noopener noreferrer" className="text-[#4a4a4f] hover:text-[#1d1d1f]" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com/in/mudityaraghav" target="_blank" rel="noopener noreferrer" className="text-[#4a4a4f] hover:text-[#1d1d1f]" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="mailto:mudityadev@gmail.com" className="text-[#4a4a4f] hover:text-[#1d1d1f]" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Title */}
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Muditya Raghav
        </h1>

        {/* Profile + Bio */}
        <section className="flex items-start gap-8">
          <div className="shrink-0">
            <img
              src="/assets/profile.jpeg"
              alt="Muditya Raghav"
              className="w-36 rounded-xl"
            />
          </div>
          <div className="min-w-0 flex-1">
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-[#1d1d1f]">
              <li>Machine Learning Engineer obsessed with making models work in the real world.</li>
              <li>I build full-stack AI products — from training and fine-tuning to deployment and monitoring.</li>
              <li>Interested in LLMs, RAG pipelines, fine-tuning, and the gap between a trained model and a shipped product.</li>
              <li>Also care about adversarial security, data validation, and building systems that actually scale.</li>
            </ul>
          </div>
        </section>

        <hr />

        {/* Work and News */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Work and News</h2>
          <div className="max-w-md overflow-y-auto rounded-xl border border-[#e8e8ed] bg-[#f5f5f7] p-5" style={{ maxHeight: "12em" }}>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-[#1d1d1f]">
              {timeline.map((t) => (
                <li key={t.date}>
                  <strong className="font-semibold text-[#1d1d1f]">{t.date}</strong> — {t.event}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr />

        {/* Experience */}
        <section id="experience" className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <div key={i} className="border-t border-[#e8e8ed] pt-5">
                <div className="font-semibold text-[#1d1d1f]">{job.role}</div>
                <div className="text-sm text-[#4a4a4f]">
                  {job.company} · {job.period}
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-[#1d1d1f]">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* Projects */}
        <section id="projects" className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.title} className="border-t border-[#e8e8ed] pt-5">
                <div className="mb-1 text-xs font-medium uppercase tracking-wide text-[#4a4a4f]">
                  {p.tag}
                </div>
                <div className="text-lg font-semibold text-[#1d1d1f]">{p.title}</div>
                <p className="mt-1 text-[15px] text-[#1d1d1f]">{p.desc}</p>
                <p className="mt-1 text-xs text-[#4a4a4f]">Tech: {p.tech}</p>
                <div className="mt-2 flex gap-4 text-sm">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live app →
                  </a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    Source →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* Skills */}
        <section id="skills" className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Skills</h2>
          <div className="divide-y divide-[#e8e8ed]">
            {skills.map((s) => (
              <div key={s.cat} className="py-3">
                <span className="font-semibold text-[#1d1d1f]">{s.cat}</span>{" "}
                <span className="text-sm text-[#1d1d1f]">— {s.items}</span>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* Education */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Education</h2>
          <p className="mb-2 text-[15px] text-[#1d1d1f]">
            Some of the formal and <em>slightly</em> informal education that I have received.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-[15px] text-[#1d1d1f]">
            <li>
              Graduation — B.Tech, Gyan Ganga Institute of Technology and Sciences, 2019-2023
              (CGPA: 9.02/10)
            </li>
          </ul>
        </section>

        <hr />

        {/* Research */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Research</h2>
          <p className="mb-2 text-[15px] text-[#1d1d1f]">
            The following are the links to some of my research publications.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-[15px] text-[#1d1d1f]">
            <li>
              <a
                href="https://www.irejournals.com/irejournals/article/view/2204"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI-based Low-Light Activity Detection
              </a>{" "}
              — July 2022
            </li>
            <li>
              <a
                href="https://www.researchgate.net/publication/370059173"
                target="_blank"
                rel="noopener noreferrer"
              >
                REST-to-gRPC Payment Systems Research
              </a>{" "}
              — ResearchGate, March 2023
            </li>
          </ul>
        </section>

        <hr />

        {/* Contact */}
        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">Contact</h2>
          <p className="mb-3 text-[15px] text-[#1d1d1f]">
            Feel free to reach out for ML Engineer, AI Engineer, Applied Scientist, or research roles.
          </p>
          <ul className="list-none space-y-1.5 text-[15px] text-[#1d1d1f]">
            <li>
              Email: <a href="mailto:mudityadev@gmail.com">mudityadev@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:+918770428132">+91 87704 28132</a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/0xMudit" target="_blank" rel="noopener noreferrer">
                github.com/0xMudit
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
