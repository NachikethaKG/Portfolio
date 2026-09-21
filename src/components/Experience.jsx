import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  Users,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";

const TIMELINE_DATA = [
  {
    id: "ideathon",
    title: "Ideathon Finalist",
    subtitle: "Smart Bengaluru Vision Ideathon",
    organization: "Team Xcape MatriX 1",
    tag: "Finalist",
    period: "Recent",
    location: "Bengaluru, India",
    description:
      "Advanced as a finalist in the Smart Bengaluru Vision Ideathon with Team Xcape MatriX 1. Architected and pitched high-impact urban technology solutions designed to tackle civic and mobility challenges in Bengaluru.",
    skills: ["Urban Tech", "System Ideation", "Pitching", "Civic AI"],
    icon: Trophy,
    accent: {
      text: "text-[#C25E3E]",
      bg: "bg-[#FBF0EB]",
      border: "border-[#C25E3E]/30",
      nodeBg: "bg-[#C25E3E]",
      tagBg: "bg-[#FBF0EB] text-[#C25E3E]",
    },
  },
  {
    id: "hackathons",
    title: "Hackathon Competitor",
    subtitle: "Polaris, Replit Hackathon & Vibeathon",
    organization: "Competitive Coding & Rapid Prototyping",
    tag: "Multi-Edition Builder",
    period: "2025 - 2026",
    location: "Bengaluru / Online",
    description:
      "Competed in high-stakes development sprints including the Polaris & Replit Hackathon as well as multiple editions of Vibeathon. Rapidly engineered end-to-end full-stack applications and AI workflows under tight 24-48 hour deadlines.",
    skills: ["Rapid Prototyping", "Full-Stack Dev", "Team Collaboration", "APIs"],
    icon: Flame,
    accent: {
      text: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-300",
      nodeBg: "bg-amber-600",
      tagBg: "bg-amber-50 text-amber-800",
    },
  },
  {
    id: "conferences",
    title: "Tech Conferences & Summits",
    subtitle: "AWS Summit Bengaluru 2026 & SAP Inside Track 2026",
    organization: "Developer Community & Ecosystem",
    tag: "Industry Learning",
    period: "2026",
    location: "Bengaluru, India",
    description:
      "Attended premier tech conferences including AWS Summit Bengaluru 2026 and SAP Inside Track 2026. Engaged with industry practitioners, enterprise architects, and fellow developers on scalable cloud-native architectures, generative AI services, and enterprise integration.",
    skills: ["Cloud Architecture", "Enterprise Tech", "Networking", "GenAI Trends"],
    icon: Users,
    accent: {
      text: "text-[#557A66]",
      bg: "bg-[#EFF5F1]",
      border: "border-[#557A66]/30",
      nodeBg: "bg-[#557A66]",
      tagBg: "bg-[#EFF5F1] text-[#557A66]",
    },
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Community & Experience"
      className="relative w-full py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* Section Header                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-[#C25E3E]/20 mb-3.5 shadow-2xs"
          >
            <Sparkles size={13} />
            <span>Milestones &amp; Engagement</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Community &amp; Experience
            </h2>

            {/* Decorative terracotta curve */}
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#78716C] max-w-2xl leading-relaxed"
          >
            Active builder in hackathons, innovation challenges, and tech
            summits connecting hands-on engineering with broader real-world impact.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* Responsive Timeline Container                             */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Animated Vertical Line: Left-aligned on mobile, Centered on desktop */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute top-4 bottom-6 left-5 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#C25E3E] via-stone-300 to-stone-200"
          />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_DATA.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Circular Node on Timeline */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: idx * 0.15,
                    }}
                    className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border-2 border-stone-200 shadow-md flex items-center justify-center"
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${item.accent.bg} ${item.accent.text} flex items-center justify-center`}
                    >
                      <Icon size={13} strokeWidth={2.4} />
                    </div>
                  </motion.div>

                  {/* Desktop Layout Helper: Alternating Columns */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -40 : 40,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -4 }}
                      className="group p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(28,25,23,0.04)] hover:shadow-[0_12px_32px_rgba(28,25,23,0.08)] hover:border-stone-300 transition-all duration-300 text-left"
                    >
                      {/* Meta header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${item.accent.border} ${item.accent.tagBg}`}
                        >
                          <Icon size={12} />
                          {item.tag}
                        </span>

                        <div className="flex items-center gap-3 text-xs text-[#78716C]">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={12} />
                            {item.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Main Title & Organization */}
                      <h3 className="text-xl font-extrabold text-[#1C1917] tracking-tight group-hover:text-[#C25E3E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#557A66] mb-3">
                        {item.subtitle} &bull;{" "}
                        <span className="text-stone-500 font-normal">
                          {item.organization}
                        </span>
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[#78716C] leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Skills/Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#FAFAF9] text-stone-600 border border-stone-200/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
