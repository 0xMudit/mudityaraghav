export const highlights = [
  { date: "Now", event: "Actively interviewing — open to ML/AI Engineer, Applied Scientist, and research roles" },
  { date: "Dec 2023 — Mar 2025", event: "QA Associate Engineer at Reliance Jio — AI-assisted testing, 80+ automated cases, 40% coverage gain" },
  { date: "Mar 2023", event: "Published REST-to-gRPC payment systems research (ResearchGate)" },
  { date: "Jul 2022", event: "Published AI-based low-light activity detection research" },
  { date: "Apr 2022", event: "Software Engineer Intern at Persistent Systems — ML data pipelines" },
  { date: "May 2023", event: "Graduated B.Tech — CGPA 9.02/10" },
];

export interface Project {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  metrics: string[];
  image: string;
  live: string;
  repo: string;
}

export const projects: Project[] = [
  {
    title: "Clara Network",
    tag: "Fintech / Payment Infrastructure",
    desc: "Open-source Mastercard/Visa-style card payment network built end-to-end in Go — ISO 8583 switch with BIN routing and risk scoring, net settlement with default fund and pacs.009, double-entry ledger, issuing/acquiring stacks, disputes engine, HSM key management, and ISO 20022 instant payments. All 10 blueprint phases complete.",
    tech: ["Go", "ISO 8583", "ISO 20022", "PostgreSQL", "Redis", "Docker", "HSM", "EMV"],
    metrics: ["10 phases complete", "v0.1.0-beta", "27 research docs", "20s instant-payment SLA"],
    image: "/assets/clara.png",
    live: "https://github.com/0xMudit/Clara-Network",
    repo: "https://github.com/0xMudit/Clara-Network",
  },
  {
    title: "Cattle Re-ID",
    tag: "Applied Computer Vision",
    desc: "A ViT-B/16-based cattle re-identification system using PHE embeddings and a custom benchmark I built and debugged from scratch. Weights published to HuggingFace.",
    tech: ["ViT-B/16", "PHE Embeddings", "PyTorch", "HuggingFace", "CV", "Benchmarking"],
    metrics: ["Custom benchmark debugged from scratch", "HuggingFace-hosted weights"],
    image: "/assets/cattle_reid.png",
    live: "https://huggingface.co/0xMudit",
    repo: "https://github.com/0xMudit",
  },
  {
    title: "Malcom",
    tag: "AI Research Workspace",
    desc: "A full-stack AI research platform with streamed LLM responses, document context retrieval, web research with sources, saved chats, markdown/math rendering, and Stripe-backed subscriptions.",
    tech: ["Next.js", "TypeScript", "Supabase", "SQLite", "Stripe", "LLM Streaming", "RAG"],
    metrics: ["Stripe-billed SaaS", "Streamed LLM responses", "Saved chats + sources"],
    image: "/assets/malcom.png",
    live: "https://malcomman.duckdns.org/malcom/new",
    repo: "https://github.com/0xMudit/malcom-ai",
  },
  {
    title: "Jini",
    tag: "Document Intelligence",
    desc: "A local-first workspace that turns PDFs, spreadsheets, and personal documents into searchable answers, cited evidence, extracted dates/amounts, and dashboard insights using NLP and retrieval.",
    tech: ["React", "Express", "TypeScript", "SQLite", "Groq", "Embeddings", "Docker"],
    metrics: ["Multi-format extraction", "Cited answers", "30+ unit tests"],
    image: "/assets/jini.png",
    live: "https://malcomman.duckdns.org/jini/",
    repo: "https://github.com/0xMudit/Jini",
  },
  {
    title: "Kingswork",
    tag: "Trading Intelligence Platform",
    desc: "A full-stack trading intelligence platform: market dashboards, stock analysis, paper portfolios, backtesting, alerts, prediction markets, and AI-assisted research in one authenticated product.",
    tech: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "WebSockets", "Groq"],
    metrics: ["Real-time updates", "Backtesting + alerts", "AI-assisted research"],
    image: "/assets/kingswork.png",
    live: "https://malcomman.duckdns.org/kingswork/dashboard/overview",
    repo: "https://github.com/0xMudit/KingsWork",
  },
];

export interface Job {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export const experience: Job[] = [
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

export interface SkillGroup {
  cat: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { cat: "ML & AI", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "HuggingFace", "LLM Fine-tuning", "RAG", "Embeddings", "Vector DBs"] },
  { cat: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "CUDA", "Shell"] },
  { cat: "MLOps", items: ["Docker", "Kubernetes", "MLflow", "Weights & Biases", "FastAPI", "CI/CD", "Azure ML", "GPU Deploy"] },
  { cat: "Data Engineering", items: ["Pandas", "NumPy", "SQLAlchemy", "MongoDB", "SQLite", "Apache Spark", "ETL"] },
  { cat: "CV & NLP", items: ["OpenCV", "Image Classification", "Object Detection", "ViT", "NER", "Transformers"] },
  { cat: "Research & Comms", items: ["Paper Reading", "Experiment Design", "Technical Writing", "English (Pro)", "Hindi (Native)"] },
];

export const research = [
  {
    title: "AI-based Low-Light Activity Detection",
    date: "July 2022",
    url: "https://www.irejournals.com/irejournals/article/view/2204",
  },
  {
    title: "REST-to-gRPC Payment Systems Research",
    date: "ResearchGate, March 2023",
    url: "https://www.researchgate.net/publication/370059173",
  },
];

export const resumeUrl = "/assets/Muditya_Raghav_Resume.pdf";
export const email = "mudityadev@gmail.com";
export const socials = {
  github: "https://github.com/0xMudit",
  twitter: "https://twitter.com/0xMudit",
  linkedin: "https://www.linkedin.com/in/0xmudit/",
  huggingface: "https://huggingface.co/0xMudit",
};