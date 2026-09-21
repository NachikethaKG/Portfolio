import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const TIMELINE_ITEMS = [
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Engineering Institution, Bengaluru",
    period: "2023 - 2027",
    location: "Bengaluru, India",
    description:
      "Specializing in Core Systems, Data Structures, Algorithms, Distributed Computing, and Artificial Intelligence. Class of 2027.",
  },
  {
    type: "work",
    title: "Full-Stack & Systems Developer",
    organization: "Independent & Academic Projects",
    period: "2024 - Present",
    location: "Bengaluru, India",
    description:
      "Designed and deployed enterprise-grade backends with Spring Boot and FastAPI, coupled with responsive modern React frontends and vector database search pipelines.",
  },
  {
    type: "leadership",
    title: "Martial Arts & Strategic Games",
    organization: "Karate & Chess Competitions",
    period: "Ongoing",
    location: "Bengaluru, India",
    description:
      "Practicing discipline, situational awareness, and deep strategic forethought through competitive chess and martial arts.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience & Journey"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F5F0] text-stone-700 border border-stone-200/80 mb-3">
          <Briefcase size={13} />
          Milestones
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
          Journey &amp; Experience
        </h2>
        <p className="mt-3 text-base text-[#78716C] max-w-xl">
          Academic foundations, technical milestones, and disciplined practices shaping my career.
        </p>
      </div>

      <div className="relative border-l-2 border-stone-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
        {TIMELINE_ITEMS.map((item, idx) => {
          const Icon = item.type === "education" ? GraduationCap : Briefcase;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-1 w-7 h-7 rounded-full bg-white border border-[#C25E3E]/70 flex items-center justify-center shadow-xs text-[#C25E3E]">
                <Icon size={13} />
              </div>

              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C25E3E] bg-[#FBF0EB] px-2.5 py-0.5 rounded-md">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#78716C]">
                    <MapPin size={12} />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1C1917]">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[#78716C] mb-3">
                  {item.organization}
                </p>
                <p className="text-sm text-[#78716C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
