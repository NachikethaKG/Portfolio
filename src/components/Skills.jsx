import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Brain,
  Cpu,
  Sparkles,
  Terminal,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    accentColor: "text-[#557A66]",
    accentBg: "bg-[#EFF5F1]",
    accentBorder: "border-[#557A66]/20",
    skills: ["JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    accentColor: "text-[#C25E3E]",
    accentBg: "bg-[#FBF0EB]",
    accentBorder: "border-[#C25E3E]/20",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
    ],
  },
  {
    id: "ai-data",
    title: "AI, ML & Data",
    icon: Brain,
    accentColor: "text-amber-800",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    skills: [
      "PyTorch",
      "scikit-learn",
      "LangChain",
      "ChromaDB",
      "NLTK",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "db-tools",
    title: "DB, Tools & Core",
    icon: Cpu,
    accentColor: "text-stone-800",
    accentBg: "bg-stone-100",
    accentBorder: "border-stone-300",
    skills: [
      "SQL",
      "Docker",
      "IntelliJ IDEA",
      "GitHub Copilot",
      "Data Structures & Algorithms (Java)",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Arsenal"
      className="relative w-full py-20 md:py-28"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* Section Header                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#EFF5F1] text-[#557A66] border border-[#557A66]/20 mb-3.5 shadow-2xs"
          >
            <Sparkles size={13} />
            <span>Core Competencies</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Technical Arsenal
            </h2>

            {/* Decorative accent underline */}
            <svg
              className="w-full h-3 text-[#557A66] mt-1 mx-auto overflow-visible"
              viewBox="0 0 240 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8C55 2.5 185 2 237 8.5"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="opacity-70"
              />
              <circle cx="237" cy="8.5" r="2.5" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#78716C] max-w-2xl leading-relaxed"
          >
            Languages, frameworks, and engineering tools I leverage to architect
            performant backends, responsive interfaces, and intelligent ML pipelines.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* Skills Category Grid                                      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(28,25,23,0.03)] hover:shadow-[0_12px_32px_rgba(28,25,23,0.07)] hover:border-stone-300 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl ${category.accentBg} ${category.accentColor} flex items-center justify-center border ${category.accentBorder} shadow-2xs group-hover:scale-105 transition-transform`}
                      >
                        <CategoryIcon size={20} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1C1917] tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Pills / Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                        className="cursor-pointer px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#FAFAF9] text-stone-700 border border-stone-200/80 hover:bg-[#C25E3E] hover:text-white hover:border-[#C25E3E] transition-colors duration-200 select-none shadow-2xs"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer count indicator */}
                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1">
                    <Terminal size={12} />
                    Verified Stack
                  </span>
                  <span className="font-semibold text-stone-500">
                    {category.skills.length} skills
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
