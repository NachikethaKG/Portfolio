import React from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function DesktopNav({ activeSection, onSelectSection }) {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center">
      <nav
        aria-label="Desktop navigation"
        className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-[0_4px_20px_rgba(28,25,23,0.04)]"
      >
        {/* Subtle Brand / Initials Badge */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onSelectSection("home");
          }}
          className="flex items-center justify-center w-8 h-8 mr-1 rounded-full bg-[#FAF9F6] text-[#C25E3E] font-bold text-xs border border-stone-200/60 hover:bg-[#FBF0EB] transition-colors"
          title="Home"
        >
          N
        </a>

        {/* Links */}
        <ul className="flex items-center gap-1 m-0 p-0 list-none">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectSection(item.id);
                  }}
                  className={`relative block px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full select-none ${
                    isActive
                      ? "text-[#1C1917]"
                      : "text-[#78716C] hover:text-[#C25E3E]"
                  }`}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={!isActive ? { scale: 1.05 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Sliding Active Indicator Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active-pill"
                      className="absolute inset-0 bg-[#F5F5F0] rounded-full border border-stone-300/60 shadow-xs -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
