import React from "react";
import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#FAFAF9]"
    >
      {/* Subtle warm base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(194,94,62,0.07),transparent)]" />

      {/* Blob 1 - Warm Terracotta */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -40, 25, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-20 w-96 h-96 sm:w-[32rem] sm:h-[32rem] rounded-full bg-gradient-to-tr from-[#C25E3E]/12 to-[#E08F62]/10 blur-3xl opacity-70"
      />

      {/* Blob 2 - Soft Sage */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-24 w-96 h-96 sm:w-[34rem] sm:h-[34rem] rounded-full bg-gradient-to-br from-[#557A66]/10 to-[#84A98C]/10 blur-3xl opacity-60"
      />

      {/* Blob 3 - Faint Honey/Linen */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, 35, -45, 0],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute -bottom-24 left-1/4 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-gradient-to-tr from-[#E6B87D]/12 to-[#D4A373]/08 blur-3xl opacity-50"
      />

      {/* Subtle fine dot texture for tactile warm paper feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#1C1917 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
