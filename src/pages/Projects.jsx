import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const SAMPLE_PROJECTS = [
  {
    title: "AI Semantic Search & RAG Assistant",
    description:
      "Enterprise document retrieval pipeline using PyTorch embeddings, ChromaDB vector indexing, and FastAPI backend with streaming responses.",
    tags: ["FastAPI", "PyTorch", "ChromaDB", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "Distributed Microservices Engine",
    description:
      "High-throughput transactional backend built with Java and Spring Boot, utilizing Redis caching, PostgreSQL, and Dockerized deployments.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Interactive Strategy Analytics Platform",
    description:
      "Data visualization and game theory dashboard exploring opening repertoires and tactical decision trees with responsive charts.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-stone-200/80 mb-3">
          <Sparkles size={13} />
          Selected Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-3 text-base text-[#78716C] max-w-xl">
          A showcase of full-stack web applications, AI integrations, and backend architectures I&apos;ve engineered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium text-[#78716C]">
                  0{idx + 1}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={proj.github}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={proj.live}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-[#C25E3E] hover:bg-[#FBF0EB] transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#C25E3E] transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm text-[#78716C] leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#F5F5F0] text-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
