
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const wheelItems = [
    "Use consistent spacing",
    "Color contrast is key",
    "Animations delight users",
    "White space matters",
    "Typography sets mood",
    "Micro-interactions shine",
    "Mobile-first approach",
    "Accessibility for all"
  ];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult(null);
    
    const spins = Math.floor(Math.random() * 5) + 5; // 5-10 full rotations
    const finalRotation = rotation + (spins * 360) + Math.floor(Math.random() * 360);
    setRotation(finalRotation);
    
    setTimeout(() => {
      const resultIndex = Math.floor((finalRotation % 360) / (360 / wheelItems.length));
      setResult(wheelItems[resultIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="text-center">
      <div className="relative mx-auto mb-6 w-80 h-80">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse opacity-20"></div>
        
        {/* Main wheel */}
        <div 
          className={`w-full h-full rounded-full border-8 border-gradient-to-r from-purple-400 to-pink-400 relative overflow-hidden transition-transform duration-3000 ease-out shadow-2xl shadow-purple-500/50 ${isSpinning ? 'animate-spin' : ''}`}
          style={{ 
            transform: `rotate(${rotation}deg)`,
            background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #10b981, #f59e0b, #ef4444, #8b5cf6, #ec4899)'
          }}
        >
          {wheelItems.map((item, index) => (
            <div
              key={index}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${(360 / wheelItems.length) * index}deg)`,
                clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((360 / wheelItems.length) * Math.PI / 180)}% ${50 - 50 * Math.sin((360 / wheelItems.length) * Math.PI / 180)}%)`
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-black/10">
                <span 
                  className="text-white text-xs font-bold px-2 text-center drop-shadow-lg"
                  style={{ transform: `rotate(${360 / wheelItems.length / 2}deg)` }}
                >
                  {item.split(' ').slice(0, 2).join(' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-4 border-purple-500 z-10"></div>
        
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
          <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-white drop-shadow-lg"></div>
        </div>
        
        {/* Sparkle effects */}
        {!isSpinning && (
          <>
            <div className="absolute top-4 right-4 text-yellow-300 animate-ping">✨</div>
            <div className="absolute bottom-4 left-4 text-yellow-300 animate-ping delay-500">⭐</div>
            <div className="absolute top-1/3 left-4 text-purple-300 animate-bounce delay-1000">💫</div>
          </>
        )}
      </div>

      <Button 
        onClick={handleSpin} 
        disabled={isSpinning}
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white mb-4 px-8 py-3 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        {isSpinning ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Spinning...
          </span>
        ) : (
          "🎯 Spin the Wheel!"
        )}
      </Button>

      {result && (
        <div className="bg-gradient-to-r from-white/20 to-purple-400/20 backdrop-blur-md rounded-lg p-6 animate-fade-in border border-purple-400/30 shadow-xl">
          <h4 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
            🎊 Your UI Tip:
          </h4>
          <p className="text-purple-200 text-lg font-medium">{result}</p>
        </div>
      )}
    </div>
  );
};
