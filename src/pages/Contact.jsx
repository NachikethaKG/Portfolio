import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle2 } from "lucide-react";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FBF0EB] text-[#C25E3E] border border-stone-200/80 mb-3">
          <Mail size={13} />
          Let&apos;s Connect
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-3 text-base text-[#78716C] max-w-xl">
          Whether you have an opportunity, want to collaborate on an intelligent software project, or just want to say hi!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Info Card */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#1C1917] mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-[#78716C] mb-6">
              I&apos;m currently based in Bengaluru and open to full-stack and AI engineering opportunities.
            </p>

            <div className="space-y-4 text-sm text-[#1C1917]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FBF0EB] text-[#C25E3E]">
                  <Mail size={16} />
                </div>
                <span className="text-stone-700">nachiketha@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-[#557A66]">
                  <MapPin size={16} />
                </div>
                <span className="text-stone-700">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-100 mt-6">
            <span className="text-xs font-semibold text-stone-500 block mb-3 uppercase tracking-wider">
              Social Profiles
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/NachikethaKG"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#F5F5F0] text-stone-700 hover:text-[#C25E3E] hover:bg-[#FBF0EB] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nachiketha-kg-8ab143278/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#F5F5F0] text-stone-700 hover:text-[#C25E3E] hover:bg-[#FBF0EB] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#557A66] flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-xl font-bold text-[#1C1917] mb-1">Message Received!</h4>
              <p className="text-sm text-[#78716C] max-w-sm">
                Thank you for reaching out. I&apos;ll get back to you promptly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Alex Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF9] border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C25E3E] focus:ring-2 focus:ring-[#C25E3E]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-email">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF9] border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C25E3E] focus:ring-2 focus:ring-[#C25E3E]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Hi Nachiketha, I'd like to discuss..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAFAF9] border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C25E3E] focus:ring-2 focus:ring-[#C25E3E]/20 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C25E3E] text-white text-sm font-semibold shadow-sm hover:bg-[#AA4F32] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C25E3E]/40"
              >
                <Send size={15} />
                <span>Send Message</span>
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
