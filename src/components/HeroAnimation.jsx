import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const animationUrl =
  "https://assets3.lottiefiles.com/packages/lf20_jtbfg2qi.json";

// Reliable LottieFiles CDN fallback of a developer coding at a PC desk
// (used automatically if the primary URL returns 403/network error)
const fallbackAnimationUrl =
  "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json";

export default function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAnimation() {
      try {
        const response = await fetch(animationUrl);
        if (response.ok) {
          const data = await response.json();
          if (isMounted) {
            setAnimationData(data);
            return;
          }
        }
        // Fallback to active LottieFiles developer animation if primary URL is restricted
        const fallbackResponse = await fetch(fallbackAnimationUrl);
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          if (isMounted) {
            setAnimationData(fallbackData);
          }
        }
      } catch {
        try {
          const fallbackResponse = await fetch(fallbackAnimationUrl);
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            if (isMounted) {
              setAnimationData(fallbackData);
            }
          }
        } catch (fallbackError) {
          console.error("Failed to load Lottie animation:", fallbackError);
        }
      }
    }

    loadAnimation();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative w-full max-w-md lg:max-w-lg mx-auto flex items-center justify-center"
    >
      {/* Subtle warm ambient backdrop glow matching the Warm Editorial palette */}
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#C25E3E]/15 via-[#E6B87D]/15 to-[#557A66]/15 blur-2xl -z-10"
      />

      {animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-auto drop-shadow-[0_12px_28px_rgba(28,25,23,0.06)]"
        />
      ) : (
        <div
          aria-label="Loading developer illustration"
          className="w-full aspect-[4/3] rounded-3xl bg-white/50 border border-stone-200/70 backdrop-blur-xs flex items-center justify-center"
        >
          <div className="h-8 w-8 rounded-full border-2 border-[#C25E3E]/30 border-t-[#C25E3E] animate-spin" />
        </div>
      )}
    </motion.div>
  );
}
