import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Award,
  ExternalLink,
  Calendar,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const CERTIFICATES_DATA = [
  {
    id: "aws-cloud",
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services (AWS)",
    date: "2026",
    credentialId: "AWS-PSA-2026-9481",
    credentialUrl: "https://aws.amazon.com/verification",
    accent: {
      text: "text-[#C25E3E]",
      bg: "bg-[#FBF0EB]",
      border: "border-[#C25E3E]/25",
      badge: "bg-[#FBF0EB] text-[#C25E3E]",
    },
    skills: ["Cloud Architecture", "AWS IAM", "VPC", "Serverless"],
  },
  {
    id: "sap-btp",
    title: "SAP Certified Associate - Cloud Integration",
    organization: "SAP SE",
    date: "2026",
    credentialId: "SAP-ID-672901",
    credentialUrl: "https://www.sap.com",
    accent: {
      text: "text-[#557A66]",
      bg: "bg-[#EFF5F1]",
      border: "border-[#557A66]/25",
      badge: "bg-[#EFF5F1] text-[#557A66]",
    },
    skills: ["BTP Integration", "REST / OData APIs", "Enterprise Security"],
  },
  {
    id: "spring-java",
    title: "Spring Boot & Microservices Professional",
    organization: "VMware Tanzu / Spring",
    date: "2025",
    credentialId: "SPR-DEV-4410",
    credentialUrl: "https://spring.io",
    accent: {
      text: "text-amber-800",
      bg: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-50 text-amber-800",
    },
    skills: ["Java 21", "Spring Boot 3", "Microservices", "JPA / Hibernate"],
  },
  {
    id: "deeplearning-ai",
    title: "Deep Learning & GenAI Specialization",
    organization: "DeepLearning.AI",
    date: "2025",
    credentialId: "DLAI-RAG-8821",
    credentialUrl: "https://deeplearning.ai",
    accent: {
      text: "text-stone-800",
      bg: "bg-stone-100",
      border: "border-stone-300",
      badge: "bg-stone-100 text-stone-800",
    },
    skills: ["PyTorch", "Transformers", "RAG Systems", "Vector Embeddings"],
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-label="Certificates and Credentials"
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-[#C25E3E]/20 mb-3.5 shadow-2xs"
          >
            <Sparkles size={13} />
            <span>Accreditations &amp; Credentials</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight">
              Certifications
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
            Professional accreditations and technical certifications validating
            enterprise cloud architectures, full-stack systems, and applied AI.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* Certificates Grid                                         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CERTIFICATES_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.12,
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
                <div className="group flex flex-col justify-between rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-[0_4px_20px_rgba(28,25,23,0.03)] hover:shadow-[0_12px_32px_rgba(28,25,23,0.07)] hover:border-stone-300 transition-all duration-300 h-full">
                  <div>
                    {/* Top Row: Organization and Date */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl ${cert.accent.bg} ${cert.accent.text} flex items-center justify-center border ${cert.accent.border} shadow-2xs group-hover:scale-105 transition-transform`}
                        >
                          <Award size={20} />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                            {cert.organization}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-stone-500 bg-[#FAFAF9] px-2.5 py-1 rounded-full border border-stone-200/70">
                        <Calendar size={12} />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] tracking-tight group-hover:text-[#C25E3E] transition-colors mb-3">
                      {cert.title}
                    </h3>

                    {/* Verified Status Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-[#557A66] font-medium mb-5">
                      <CheckCircle2 size={14} />
                      <span>Verified Credential &bull; {cert.credentialId}</span>
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#FAFAF9] text-stone-600 border border-stone-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: View Credential CTA */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-400">
                      Official Issuer Verification
                    </span>

                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FBF0EB] text-[#C25E3E] hover:bg-[#C25E3E] hover:text-white border border-[#C25E3E]/20 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/30"
                    >
                      <span>View Credential</span>
                      <ExternalLink size={13} />
                    </motion.a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
