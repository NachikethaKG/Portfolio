import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
  MapPin,
} from "lucide-react";

// SVG Brand Icons designed to match Lucide stroke & aesthetics
function GithubIcon({ size = 20, className = "" }) {
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

function LinkedinIcon({ size = 20, className = "" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Stagger animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "nachikethakg@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      aria-label="Beyond the Code and Contact Section"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* ================================================================= */}
      {/* PART 1: BEYOND THE CODE (Personal Traits & Creative Differentiators) */}
      {/* ================================================================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-20 sm:mb-24"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-[#C25E3E]/20 shadow-xs mb-3.5"
          >
            <Sparkles size={13} />
            <span>Mindset &amp; Discipline</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight"
          >
            Beyond the Code
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-base sm:text-lg text-[#78716C] max-w-xl mx-auto leading-relaxed"
          >
            Creative disciplines outside software that cultivate strategic foresight,
            unrelenting focus, and continuous refinement.
          </motion.p>
        </div>

        {/* Two-Column Card Grid with Playful Hover & Soft Pastel Backing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: ♟️ Competitive Chess Player */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              rotate: -2,
              transition: { type: "spring", stiffness: 350, damping: 18 },
            }}
            className="relative group p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EC] to-[#F7ECE1] border border-[#E7D6C8] shadow-[0_4px_24px_rgba(194,94,62,0.06)] hover:shadow-xl hover:shadow-[#C25E3E]/10 transition-shadow duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle soft warm radial highlight */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#C25E3E]/8 blur-2xl pointer-events-none" />

            <div>
              {/* Card Top Pill & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-sm border border-[#E5D2C2] flex items-center justify-center text-3xl select-none group-hover:scale-110 transition-transform">
                  ♟️
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-[#C25E3E]/20">
                  Strategic Foresight
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight mb-3">
                Competitive Chess Player
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#6B635B] leading-relaxed mb-6">
                Engineering complex software mirrors the 64 squares: visualizing
                branching trajectories multiple moves in advance, evaluating system
                trade-offs, spotting non-obvious patterns, and maintaining laser clarity
                under time pressure.
              </p>
            </div>

            {/* Trait Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8D8CC]/80">
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 text-stone-700 border border-stone-200/70">
                Multi-Move Foresight
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 text-stone-700 border border-stone-200/70">
                Pattern Recognition
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 text-stone-700 border border-stone-200/70">
                Calm Under Pressure
              </span>
            </div>
          </motion.div>

          {/* Card 2: 🥋 Karate Black Belt & Tournament Winner */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              rotate: 2,
              transition: { type: "spring", stiffness: 350, damping: 18 },
            }}
            className="relative group p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F7FAF8] via-[#EFF5F1] to-[#E5EFE8] border border-[#D0E2D6] shadow-[0_4px_24px_rgba(85,122,102,0.06)] hover:shadow-xl hover:shadow-[#557A66]/10 transition-shadow duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle soft sage radial highlight */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#557A66]/8 blur-2xl pointer-events-none" />

            <div>
              {/* Card Top Pill & Icon */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-sm border border-[#CDE0D3] flex items-center justify-center text-3xl select-none group-hover:scale-110 transition-transform">
                  🥋
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#EFF5F1] text-[#557A66] border border-[#557A66]/20">
                  Discipline &amp; Mastery
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight mb-3">
                Karate Black Belt &amp; Tournament Winner
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5A6960] leading-relaxed mb-6">
                Years of rigorous dojo training and tournament victories forged an
                uncompromising work ethic. Rooted in the martial discipline of Kaizen—continuous
                micro-improvements, physical grit, sharp instinct, and flawless execution
                when stakes are high.
              </p>
            </div>

            {/* Trait Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#D5E5DB]/80">
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 text-stone-700 border border-stone-200/70">
                Black Belt Tenacity
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 text-stone-700 border border-stone-200/70">
                Kaizen Philosophy
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 text-stone-700 border border-stone-200/70">
                Tournament Winner
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================================================================= */}
      {/* PART 2: GET IN TOUCH (Contact Section)                            */}
      {/* ================================================================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative rounded-3xl bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-[0_8px_30px_rgba(28,25,23,0.04)] p-8 sm:p-12 lg:p-16 text-center overflow-hidden"
      >
        {/* Soft background ambient gradient glow */}
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-[#C25E3E]/10 via-[#FAF9F6]/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Sub-badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-[#C25E3E]/20 shadow-xs mb-4"
          >
            <Mail size={13} />
            <span>Let&apos;s Connect</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-tight"
          >
            Get In Touch
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg text-[#78716C] leading-relaxed max-w-lg"
          >
            Currently open to new opportunities, collaborations, and hackathons.
          </motion.p>

          {/* Description line */}
          <motion.p
            variants={itemVariants}
            className="mt-2 text-sm text-[#A8A29E] max-w-md"
          >
            Have an engineering role, a hackathon team, or an ambitious project idea?
            My inbox is always open.
          </motion.p>

          {/* Prominent CTA Button: "Say Hello" with mailto: */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href={`mailto:${emailAddress}?subject=Hello%20Nachiketha!`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl bg-[#C25E3E] text-white text-base sm:text-lg font-semibold shadow-lg shadow-[#C25E3E]/25 hover:bg-[#AA4F32] hover:shadow-xl hover:shadow-[#C25E3E]/30 transition-all focus:outline-none focus:ring-4 focus:ring-[#C25E3E]/30"
            >
              <Send size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Say Hello</span>
              <ArrowUpRight size={18} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* Direct Copy Email Button */}
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-stone-700 text-sm sm:text-base font-medium hover:bg-white hover:border-stone-300 hover:text-[#C25E3E] transition-all focus:outline-none"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-[#557A66]" />
                  <span className="text-[#557A66] font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-stone-400 group-hover:text-[#C25E3E]" />
                  <span>Copy: {emailAddress}</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-12 flex items-center justify-center gap-4"
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/NachikethaKG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3.5 rounded-2xl bg-white border border-stone-200/90 text-stone-700 shadow-xs hover:text-[#C25E3E] hover:border-[#C25E3E]/40 hover:bg-[#FBF0EB]/60 hover:shadow-md transition-colors"
            >
              <GithubIcon size={20} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/nachikethakg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3.5 rounded-2xl bg-white border border-stone-200/90 text-stone-700 shadow-xs hover:text-[#C25E3E] hover:border-[#C25E3E]/40 hover:bg-[#FBF0EB]/60 hover:shadow-md transition-colors"
            >
              <LinkedinIcon size={20} />
            </motion.a>

            {/* Email Icon */}
            <motion.a
              href={`mailto:${emailAddress}`}
              aria-label="Send direct email"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3.5 rounded-2xl bg-white border border-stone-200/90 text-stone-700 shadow-xs hover:text-[#C25E3E] hover:border-[#C25E3E]/40 hover:bg-[#FBF0EB]/60 hover:shadow-md transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* Location & Status Footnote */}
          <motion.div
            variants={itemVariants}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF9F6] border border-stone-200/70 text-xs text-stone-600"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#557A66] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#557A66]" />
            </span>
            <MapPin size={12} className="text-[#557A66]" />
            <span>Bengaluru, India • Fast responses guaranteed</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
