import React from "react";
import { motion } from "framer-motion";
import { Home, FolderGit2, Code2, Briefcase, Mail } from "lucide-react";

const MOBILE_NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function MobileNav({ activeSection, onSelectSection }) {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around px-2 py-2 bg-white/90 backdrop-blur-xl border-t border-stone-200/80 shadow-[0_-8px_24px_rgba(28,25,23,0.05)] pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectSection(item.id)}
            className="relative flex flex-col items-center justify-center flex-1 py-1 px-1 transition-colors select-none focus:outline-none"
          >
            {/* Active Pill Glow */}
            {isActive && (
              <motion.div
                layoutId="mobile-active-glow"
                className="absolute inset-x-2 inset-y-0 bg-[#F5F5F0] rounded-2xl -z-10 border border-stone-200/70"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}

            {/* Bouncing / Popping Animated Icon */}
            <motion.div
              animate={
                isActive
                  ? {
                      scale: [1, 1.25, 1],
                      y: [0, -3, 0],
                    }
                  : { scale: 1, y: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className={`flex items-center justify-center ${
                isActive ? "text-[#C25E3E]" : "text-[#78716C]"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.3 : 1.8} />
            </motion.div>

            {/* Micro typography label */}
            <span
              className={`mt-1 text-[10px] tracking-tight font-medium leading-none transition-colors duration-150 ${
                isActive ? "text-[#1C1917] font-semibold" : "text-[#A8A29E]"
              }`}
            >
              {item.label}
            </span>

            {/* Tiny accent dot when active */}
            {isActive && (
              <motion.span
                layoutId="mobile-active-dot"
                className="w-1 h-1 mt-0.5 rounded-full bg-[#C25E3E]"
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
