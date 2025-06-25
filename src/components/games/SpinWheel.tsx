
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
      <div className="relative mx-auto mb-6 w-64 h-64">
        <div 
          className={`w-full h-full rounded-full border-8 border-purple-400 relative overflow-hidden transition-transform duration-3000 ease-out ${isSpinning ? 'animate-spin' : ''}`}
          style={{ transform: `rotate(${rotation}deg)` }}
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
              <div 
                className={`w-full h-full ${index % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500'} flex items-center justify-center`}
              >
                <span 
                  className="text-white text-xs font-medium px-2"
                  style={{ transform: `rotate(${360 / wheelItems.length / 2}deg)` }}
                >
                  {item.split(' ').slice(0, 2).join(' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-white"></div>
        </div>
      </div>

      <Button 
        onClick={handleSpin} 
        disabled={isSpinning}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mb-4"
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </Button>

      {result && (
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 animate-fade-in">
          <h4 className="text-lg font-bold text-white mb-2">UI Tip:</h4>
          <p className="text-purple-200">{result}</p>
        </div>
      )}
    </div>
  );
};
