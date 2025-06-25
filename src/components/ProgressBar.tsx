
import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700 z-50">
        <div
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {scrollProgress >= 99 && (
        <div className="fixed bottom-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce z-40">
          🎉 You're a UI Explorer!
        </div>
      )}
    </>
  );
};
