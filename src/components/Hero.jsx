import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroAnimation from "./HeroAnimation";

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
                Hi, I&apos;m
              </span>
              <span className="text-xs text-stone-400">|</span>
              <span className="text-xs font-medium text-[#557A66] flex items-center gap-1">
                <Sparkles size={13} />
                Open to Opportunities
              </span>
            </motion.div>

            {/* User Name - Massive & Striking with Warm Theme Gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-3"
            >
              <span className="bg-gradient-to-r from-[#C25E3E] via-[#A84A2C] to-[#1C1917] bg-clip-text text-transparent inline-block pb-1">
                Nachiketha
              </span>
            </motion.h1>

            {/* Role Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-[1.2] mb-5"
            >
              Full-Stack Developer{" "}
              <span className="text-[#78716C]">&amp; </span>
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
            </motion.h2>

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

              {/* Secondary Button - Download Resume */}
              <a
                href="https://drive.google.com/file/d/1L5cNekwLm35mrWezIo0Dc1LF2WLLKEB-/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 pointer-events-auto cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#C25E3E] text-[#C25E3E] bg-transparent text-sm sm:text-base font-semibold hover:bg-[#FBF0EB] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/30"
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </a>
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
          {/* RIGHT COLUMN: 2D Lottie Developer Animation               */}
          {/* ========================================================= */}
          <div className="flex-1 w-full flex items-center justify-center relative py-4 lg:py-0">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
