import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import BackgroundBlobs from "./BackgroundBlobs";

export default function Layout({ children, activeSection, onSelectSection }) {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 220 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 220 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAF9] text-[#1C1917] selection:bg-[#FBF0EB] selection:text-[#C25E3E] overflow-x-hidden">
      {/* Interactive Cursor Glow Spotlight */}
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-[460px] h-[460px] rounded-full pointer-events-none -z-10 bg-[radial-gradient(circle,rgba(194,94,62,0.065)_0%,rgba(224,143,98,0.03)_40%,transparent_70%)] blur-2xl"
      />

      {/* Warm Ambient Animated Background Blobs */}
      <BackgroundBlobs />

      {/* Responsive Navigation: Desktop (md+) */}
      <DesktopNav
        activeSection={activeSection}
        onSelectSection={onSelectSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden">
        {children}
      </main>

      {/* Responsive Navigation: Mobile (<md) */}
      <MobileNav
        activeSection={activeSection}
        onSelectSection={onSelectSection}
      />
    </div>
  );
}
