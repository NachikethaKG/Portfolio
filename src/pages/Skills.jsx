import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Brain, Terminal, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Backend & Systems",
    icon: Server,
    color: "text-[#C25E3E]",
    bg: "bg-[#FBF0EB]",
    skills: ["Java", "Spring Boot", "FastAPI", "Python", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend & UI",
    icon: Code2,
    color: "text-[#557A66]",
    bg: "bg-emerald-50",
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "Vite"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-amber-700",
    bg: "bg-amber-50",
    skills: ["PyTorch", "ChromaDB", "RAG Pipelines", "Embeddings", "Hugging Face", "LLM Integration"],
  },
  {
    title: "Tools & Methodologies",
    icon: Terminal,
    color: "text-stone-700",
    bg: "bg-stone-100",
    skills: ["Git & GitHub", "Docker", "Linux", "System Design", "Agile", "Testing"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills & Expertise"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF5F1] text-[#557A66] border border-stone-200/80 mb-3">
          <Cpu size={13} />
          Technical Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
          Skills &amp; Expertise
        </h2>
        <p className="mt-3 text-base text-[#78716C] max-w-xl">
          Core technologies, frameworks, and tools I leverage to engineer reliable software systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs"
            >
              <div className={`inline-flex p-2.5 rounded-xl ${cat.bg} ${cat.color} mb-4`}>
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-[#1C1917] mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#FAFAF9] text-stone-700 border border-stone-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
