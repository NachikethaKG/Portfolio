import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Brain,
  Zap,
  ArrowRight,
  FileDown,
  Sparkles,
  Terminal,
  CheckCircle2,
} from "lucide-react";

// Staggered reveal animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      aria-label="Introduction Hero"
      className="relative w-full min-h-[85vh] flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Typography & Call To Action                  */}
          {/* ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Greeting / Overline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-stone-200/80 shadow-xs backdrop-blur-sm mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C25E3E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C25E3E]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-stone-700">
                Hi, I&apos;m Nachiketha
              </span>
              <span className="text-xs text-stone-400">|</span>
              <span className="text-xs font-medium text-[#557A66] flex items-center gap-1">
                <Sparkles size={13} />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-[1.12] mb-5"
            >
              Full-Stack Developer <br className="hidden sm:inline" />
              <span className="text-[#1C1917]">&amp; </span>
              <span className="relative inline-block text-[#C25E3E]">
                AI Enthusiast.
                {/* Decorative hand-drawn warm highlight curve underneath */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#C25E3E]/30 -z-10"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C40 2 120 1.5 199 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#78716C] leading-relaxed max-w-xl mb-8"
            >
              Engineering student (Class of 2027) based in Bengaluru. I build
              intelligent applications and robust backend systems with clean
              architectures and thoughtful user experiences.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("projects");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C25E3E] text-white text-sm sm:text-base font-semibold shadow-md shadow-[#C25E3E]/20 hover:bg-[#AA4F32] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40"
              >
                <span>View Projects</span>
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("contact");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#C25E3E] text-[#C25E3E] bg-transparent text-sm sm:text-base font-semibold hover:bg-[#FBF0EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/30"
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Micro proof badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-stone-200/60 text-xs text-[#78716C]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#557A66]" />
                <span>Modern Web &amp; API Stacks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#557A66]" />
                <span>GenAI &amp; RAG Systems</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Creative Floating Badges Visual Element     */}
          {/* ========================================================= */}
          <div className="flex-1 w-full flex items-center justify-center relative py-6 sm:py-10">
            {/* Subtle glowing circular aura behind the badges */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#C25E3E]/10 via-[#FAF9F6] to-[#557A66]/10 blur-2xl -z-10" />

            {/* Central Artistic Glass Core / Tech Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] h-[360px] sm:h-[400px] flex items-center justify-center"
            >
              {/* Subtle inner decorative concentric dashed rings */}
              <div className="absolute inset-8 rounded-full border border-dashed border-stone-300/60 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-stone-200/50 pointer-events-none" />

              {/* Center Monogram / Tech Hub Avatar */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/85 backdrop-blur-md border border-stone-200/80 shadow-lg shadow-stone-200/60 flex flex-col items-center justify-center text-center p-3 z-10"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#FBF0EB] text-[#C25E3E] flex items-center justify-center mb-1">
                  <Terminal size={20} />
                </div>
                <span className="text-[11px] font-bold text-stone-800 tracking-tight">
                  Nachiketha
                </span>
                <span className="text-[9px] font-medium text-stone-400">
                  Class of &apos;27
                </span>
              </motion.div>

              {/* ===================================================== */}
              {/* Floating Badge 1: Java & Spring Boot (Top Left)       */}
              {/* ===================================================== */}
              <motion.div
                animate={{
                  y: [-8, 6, -8],
                  x: [-2, 3, -2],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.08, zIndex: 30 }}
                className="absolute top-2 -left-2 sm:-left-4 z-20 cursor-default"
              >
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-stone-200/90 shadow-[0_6px_20px_rgba(28,25,23,0.06)] hover:border-[#C25E3E]/40 hover:shadow-md transition-all">
                  <div className="p-2 rounded-xl bg-orange-50 text-[#C25E3E]">
                    <Code2 size={18} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-stone-900 leading-tight">
                      Java &amp; Spring Boot
                    </span>
                    <span className="text-[10px] font-medium text-stone-500">
                      Enterprise Backends
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ===================================================== */}
              {/* Floating Badge 2: React & FastAPI (Top Right)         */}
              {/* ===================================================== */}
              <motion.div
                animate={{
                  y: [6, -8, 6],
                  x: [3, -3, 3],
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                whileHover={{ scale: 1.08, zIndex: 30 }}
                className="absolute top-8 -right-2 sm:-right-4 z-20 cursor-default"
              >
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-stone-200/90 shadow-[0_6px_20px_rgba(28,25,23,0.06)] hover:border-[#557A66]/40 hover:shadow-md transition-all">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#557A66]">
                    <Layers size={18} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-stone-900 leading-tight">
                      React &amp; FastAPI
                    </span>
                    <span className="text-[10px] font-medium text-stone-500">
                      Full-Stack Speed
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ===================================================== */}
              {/* Floating Badge 3: PyTorch & ChromaDB (Bottom Right)   */}
              {/* ===================================================== */}
              <motion.div
                animate={{
                  y: [-6, 8, -6],
                  x: [-3, 2, -3],
                }}
                transition={{
                  duration: 6.4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                whileHover={{ scale: 1.08, zIndex: 30 }}
                className="absolute bottom-6 -right-1 sm:right-2 z-20 cursor-default"
              >
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-stone-200/90 shadow-[0_6px_20px_rgba(28,25,23,0.06)] hover:border-[#C25E3E]/40 hover:shadow-md transition-all">
                  <div className="p-2 rounded-xl bg-rose-50 text-[#C25E3E]">
                    <Brain size={18} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-stone-900 leading-tight">
                      PyTorch &amp; ChromaDB
                    </span>
                    <span className="text-[10px] font-medium text-stone-500">
                      Embeddings &amp; RAG
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ===================================================== */}
              {/* Floating Badge 4: Strategic Thinker (Bottom Left)     */}
              {/* ===================================================== */}
              <motion.div
                animate={{
                  y: [7, -7, 7],
                  x: [2, -2, 2],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.6,
                }}
                whileHover={{ scale: 1.08, zIndex: 30 }}
                className="absolute bottom-4 -left-3 sm:-left-6 z-20 cursor-default"
              >
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-stone-200/90 shadow-[0_6px_20px_rgba(28,25,23,0.06)] hover:border-amber-400/50 hover:shadow-md transition-all">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                    <Zap size={18} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-stone-900 leading-tight">
                      Strategic Thinker
                    </span>
                    <span className="text-[10px] font-medium text-stone-500">
                      Chess &amp; Karate Mindset
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
