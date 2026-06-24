// ─────────────────────────────────────────────────────────────────────────
// All portfolio content lives here — edit this file, not App.jsx.
// Populated from Fatima Daoudi's CV. A few links still need exact URLs:
// search for  // TODO  (per-project repo/demo links).
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Fatima Daoudi",
  title: "Front-End Developer · React",
  tagline:
    "I build accessible, responsive React interfaces that score 95+ on Lighthouse — and I own features end-to-end, from UI and state to the REST APIs and RAG backends behind them.",
  about:
    "Junior Front-End Developer focused on accessible, responsive React UIs built from designer hand-offs. " +
    "I own features end-to-end — UI, state, and REST API integration — and I've built full-stack RAG applications " +
    "on Claude with Python and FastAPI, so I understand the API side I integrate with. Meta Front-End certified. " +
    "Four years in automotive quality control gave me a sharp eye for detail that I now bring to clean, polished, well-tested UI.",
  location: "Kénitra, Morocco · open to Casablanca / remote",
  email: "daoudifatima267@gmail.com",
  phone: "+212 761 788 400",
  links: {
    github: "https://github.com/fatimazahra-308",
    linkedin: "https://linkedin.com/in/fatima-daoudi",
    portfolio: "https://fatima-daoudi.vercel.app",
    resume: "/resume.pdf", // drop your CV PDF into public/resume.pdf
  },
};

export const skills = [
  {
    group: "Core",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "Accessibility (a11y)", "TypeScript (basics)"],
  },
  { group: "Styling & UI", items: ["Tailwind CSS", "Bootstrap", "Figma (hand-off)"] },
  {
    group: "Back-End & AI",
    items: ["Python", "FastAPI", "REST APIs", "RAG / LLM (Claude)", "Vector search", "Java", "Spring Boot", "SQL / PostgreSQL"],
  },
  {
    group: "Tools & Learning",
    items: ["Git / GitHub", "npm", "Postman", "VS Code", "Agile", "Jest", "Testing Library", "Next.js"],
  },
];

export const projects = [
  {
    name: "Doc Q&A Assistant — RAG with Source Citations",
    year: "2026",
    blurb:
      "A full-stack RAG app: upload a PDF/DOCX/MD and ask questions — answers are grounded in the documents with inline page citations.",
    highlights: [
      "React UI over a FastAPI backend (embeddings + vector search + grounded Claude prompting)",
      "Inline page citations on every answer",
      "Replies \"I don't know\" instead of hallucinating",
    ],
    tech: ["React", "Python", "FastAPI", "Claude", "sentence-transformers", "Vector search", "REST"],
    repo: "https://github.com/fatimazahra-308/doc-qa-assistant",
    demo: "",
  },
  {
    name: "Codebase Assistant — Code-Aware RAG",
    year: "2026",
    blurb:
      "Ask a repository questions in plain English and get explanations that cite exact file and line ranges.",
    highlights: [
      "Code-aware chunking on function/class boundaries for higher retrieval precision",
      "Answers cite exact file:line ranges",
      "React frontend over a FastAPI API",
    ],
    tech: ["React", "Python", "FastAPI", "Claude", "Vector search", "REST"],
    repo: "https://github.com/fatimazahra-308/code-assistant",
    demo: "",
  },
  {
    name: "Task Manager — Spring Boot + React CRUD",
    year: "2026",
    blurb:
      "A full-stack CRUD app with a layered Spring Boot REST API and a React frontend.",
    highlights: [
      "Layered architecture: Controller / Service / Repository with JPA persistence",
      "RESTful API with correct verbs, status codes, and bean validation",
      "React SPA consuming the JSON API with full CRUD",
    ],
    tech: ["Java", "Spring Boot", "JPA / H2", "React", "REST"],
    repo: "https://github.com/fatimazahra-308/task-manager",
    demo: "",
  },
];

// Combined work + education timeline (most recent first).
export const journey = [
  {
    when: "2024 — 2026",
    title: "Specialized Technician in Software Development",
    org: "IPIAB — Kénitra, Morocco",
    kind: "education",
    detail: "Web development, databases, OOP, and information systems.",
  },
  {
    when: "2021 — 2025",
    title: "Quality Control Operator",
    org: "Yazaki — Automotive Wire-Harness Manufacturing, Morocco",
    kind: "work",
    detail:
      "Inspected high-volume production lines under strict automotive quality standards; logged and analyzed quality metrics under tight cycle times — the eye for detail I now apply to code review and testing.",
  },
  {
    when: "2019",
    title: "High School Diploma (Baccalaureate)",
    org: "Morocco",
    kind: "education",
    detail: "",
  },
];

export const certifications = [
  { name: "Meta Front-End Development", issuer: "Coursera", year: "2026" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent (C1)" },
  { name: "French", level: "Intermediate (B1)" },
];
