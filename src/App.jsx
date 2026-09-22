import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      {/* Hero introduction section */}
      <Hero onNavigate={handleSelectSection} />

      {/* Showcase page sections */}
      <Projects />
      <Skills />
      <Experience />

      {/* Beyond the Code and Contact */}
      <Contact />

      {/* Warm minimalist site footer */}
      <Footer />
    </Layout>
  );
}
