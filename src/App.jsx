import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll handler
  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scrollspy via IntersectionObserver to keep nav state synchronized with viewport
  useEffect(() => {
    const sections = ["home", "projects", "skills", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      activeSection={activeSection}
      onSelectSection={handleSelectSection}
    >
      {/* Hero section */}
      <Hero onNavigate={handleSelectSection} />

      {/* Showcase page sections */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Warm minimalist footer */}
      <footer className="w-full py-8 text-center border-t border-stone-200/60 text-xs text-[#78716C] bg-white/40 backdrop-blur-xs">
        <p>
          &copy; {new Date().getFullYear()} Nachiketha. Built with React, Vite,
          Tailwind CSS &amp; Framer Motion.
        </p>
      </footer>
    </Layout>
  );
}
