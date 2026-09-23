import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  ExternalLink,
  Sparkles,
  Shield,
  CreditCard,
  Activity,
} from "lucide-react";

// GitHub SVG Icon
function GithubIcon({ size = 18, className = "" }) {
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

const PROJECTS_DATA = [
  {
    id: "summaid",
    title: "SummAid",
    badge: "Incubated",
    description:
      "AI-powered healthcare document summarizer. Selected for college incubation and pitched to clinical facilities.",
    techStack: ["Python", "NLP", "AI"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    theme: {
      gradient: "from-[#FBF0EB] via-[#FDE8DF] to-[#FAF9F6]",
      accentBorder: "border-[#C25E3E]/20",
      accentText: "text-[#C25E3E]",
      chipBg: "bg-[#FBF0EB] text-[#C25E3E] border-[#C25E3E]/15",
      icon: Activity,
    },
  },
  {
    id: "aegis",
    title: "Aegis",
    badge: "RAG System",
    description:
      "AI-assisted retrieval-augmented generation (RAG) application with automated backend workers.",
    techStack: ["Temporal", "ChromaDB", "Docker", "Copilot SDK"],
    githubUrl: "https://github.com/NachikethaKG/Aegis",
    demoUrl: "https://github.com/NachikethaKG/Aegis",
    theme: {
      gradient: "from-[#EFF5F1] via-[#E2EDE6] to-[#FAF9F6]",
      accentBorder: "border-[#557A66]/20",
      accentText: "text-[#557A66]",
      chipBg: "bg-[#EFF5F1] text-[#557A66] border-[#557A66]/20",
      icon: Shield,
    },
  },
  {
    id: "paysafex",
    title: "PaySafeX",
    badge: "Fintech App",
    description:
      "Fintech web application for GSTR-2B and MSME invoice compliance risk reporting and data processing.",
    techStack: ["React", "Data Analysis", "Web App"],
    githubUrl: "https://github.com/NachikethaKG/PAYSAFEX",
    demoUrl: "https://github.com/NachikethaKG/PAYSAFEX",
    theme: {
      gradient: "from-[#FEF3C7]/40 via-[#FDF2E9] to-[#FAF9F6]",
      accentBorder: "border-amber-600/20",
      accentText: "text-amber-800",
      chipBg: "bg-amber-50 text-amber-800 border-amber-200/60",
      icon: CreditCard,
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative w-full py-20 md:py-28"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* Section Header with Decorative Underline                 */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-[#C25E3E]/20 mb-3.5 shadow-2xs"
          >
            <Sparkles size={13} />
            <span>Curated Portfolio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Featured Projects
            </h2>

            {/* Subtle accent-colored decorative curve underneath */}
            <svg
              className="w-full h-3 text-[#C25E3E] mt-1 mx-auto overflow-visible"
              viewBox="0 0 240 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.5C55 2.5 185 2 237 9"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="opacity-70"
              />
              <circle cx="237" cy="9" r="2.5" fill="currentColor" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#78716C] max-w-2xl leading-relaxed"
          >
            Engineering scalable web architectures, domain-specific AI workflows,
            and compliance processing systems built with production precision.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* Project Cards Grid                                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => {
            const ThemeIcon = project.theme.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.02}
                  transitionSpeed={2500}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  className="h-full rounded-3xl"
                >
                  <div className="group relative flex flex-col justify-between rounded-3xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(28,25,23,0.04)] hover:shadow-[0_16px_36px_rgba(28,25,23,0.09)] hover:border-stone-300/90 transition-all duration-300 overflow-hidden h-full">
                    {/* ------------------------------------------------- */}
                    {/* Top Area: Styled abstract banner placeholder      */}
                    {/* ------------------------------------------------- */}
                    <div
                      className={`relative w-full h-44 bg-gradient-to-br ${project.theme.gradient} border-b border-stone-100 flex items-center justify-center overflow-hidden p-6`}
                    >
                      {/* Subtle decorative grid lines in banner */}
                      <div
                        className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
                        style={{
                          backgroundImage: `linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)`,
                          backgroundSize: "20px 20px",
                        }}
                      />

                      {/* Soft ambient glow pill inside banner */}
                      <div className="absolute w-32 h-32 rounded-full bg-white/70 blur-xl -top-6 -right-6" />

                      {/* Badge on top right */}
                      <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/70 text-stone-700 shadow-2xs">
                        {project.badge}
                      </span>

                      {/* Dynamic Abstract Tech Graphic */}
                      <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 3 }}
                          transition={{ type: "spring", stiffness: 350, damping: 20 }}
                          className={`w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md border ${project.theme.accentBorder} shadow-sm flex items-center justify-center ${project.theme.accentText}`}
                        >
                          <ThemeIcon size={28} strokeWidth={2} />
                        </motion.div>
                      </div>
                    </div>

                    {/* ------------------------------------------------- */}
                    {/* Content Area                                      */}
                    {/* ------------------------------------------------- */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <h3 className="text-xl font-bold text-[#1C1917] tracking-tight group-hover:text-[#C25E3E] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#78716C] leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills / Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${project.theme.chipBg} shadow-2xs transition-colors`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ----------------------------------------------- */}
                      {/* Card Footer: Action Buttons                     */}
                      {/* ----------------------------------------------- */}
                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-xs font-medium text-stone-400 group-hover:text-stone-600 transition-colors">
                          Learn more
                        </span>

                        <div className="flex items-center gap-2">
                          {/* GitHub Repo Button */}
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.14 }}
                            whileTap={{ scale: 0.94 }}
                            className="p-2.5 rounded-xl bg-[#FAFAF9] text-stone-600 hover:text-[#1C1917] hover:bg-stone-100 border border-stone-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/30"
                            aria-label={`${project.title} GitHub Repository`}
                            title="GitHub Repository"
                          >
                            <GithubIcon size={17} />
                          </motion.a>

                          {/* Live Demo / Architecture Button */}
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.14 }}
                            whileTap={{ scale: 0.94 }}
                            className="p-2.5 rounded-xl bg-[#FBF0EB] text-[#C25E3E] hover:bg-[#C25E3E] hover:text-white border border-[#C25E3E]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/30"
                            aria-label={`${project.title} Live Demo / Architecture`}
                            title="Live Demo / Architecture"
                          >
                            <ExternalLink size={17} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
