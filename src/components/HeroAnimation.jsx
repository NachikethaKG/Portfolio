import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const animationUrl =
  "https://lottie.host/81a9f143-a60d-452f-b4b9-fc4bf1e2e1c9/4L3x4cOf9v.json";

const backupAnimationUrl =
  "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json";

export default function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setAnimationData(data);
        }
      } catch {
        try {
          const fallbackResponse = await fetch(backupAnimationUrl);
          if (!fallbackResponse.ok) {
            throw new Error(`Fallback HTTP error! status: ${fallbackResponse.status}`);
          }
          const fallbackData = await fallbackResponse.json();
          if (isMounted) {
            setAnimationData(fallbackData);
          }
        } catch {
          if (isMounted) {
            setAnimationData(null);
          }
        }
      }
    };

    fetchAnimation();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-md lg:max-w-lg mx-auto flex items-center justify-center">
      {animationData ? (
        <Lottie animationData={animationData} loop={true} />
      ) : (
        <div className="h-64 w-64 bg-gray-200 animate-pulse rounded-xl flex items-center justify-center text-sm text-gray-500">
          Loading Animation...
        </div>
      )}
    </div>
  );
}
