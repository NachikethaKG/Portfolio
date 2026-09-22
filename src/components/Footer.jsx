import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="w-full border-t border-stone-200/80 bg-white/50 backdrop-blur-md pt-8 pb-28 md:pb-10 px-4 sm:px-6 lg:px-8 text-xs text-[#78716C]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        {/* Credit & Class */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
          <p className="font-medium text-[#1C1917]">
            Designed &amp; Built by{" "}
            <span className="text-[#C25E3E] font-semibold">Nachiketha</span> | Class of 2027
          </p>
          <span className="hidden sm:inline text-stone-300">•</span>
          <p className="text-[#A8A29E]">
            All rights reserved &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Back to top button */}
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-stone-600 font-medium hover:text-[#C25E3E] hover:border-[#C25E3E]/40 hover:bg-[#FBF0EB]/40 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/30"
          aria-label="Back to Top"
        >
          <span>Back to top</span>
          <ArrowUp
            size={14}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
        </motion.button>
      </div>
    </footer>
  );
}
