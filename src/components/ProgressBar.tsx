
import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.min(scrollPx / winHeightPx, 1); // Ensure it doesn't exceed 1
      setScrollProgress(scrolled * 100);
    };

    // Initial calculation
    updateScrollProgress();
    
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);
    
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-700/30 z-50">
        <div
          className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-150 shadow-lg"
          style={{ width: `${Math.min(scrollProgress, 100)}%` }}
        />
      </div>
      {scrollProgress >= 99 && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium animate-bounce z-40 shadow-lg">
          🎉 You're a UI Explorer!
        </div>
      )}
    </>
  );
};
