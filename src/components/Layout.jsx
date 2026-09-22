import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import BackgroundBlobs from "./BackgroundBlobs";

export default function Layout({ children, activeSection, onSelectSection }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAF9] text-[#1C1917] selection:bg-[#FBF0EB] selection:text-[#C25E3E] overflow-x-hidden">
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
