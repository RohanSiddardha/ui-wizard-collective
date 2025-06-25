
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SpinWheel } from "@/components/games/SpinWheel";
import { CarGame } from "@/components/games/CarGame";
import { MemoryGame } from "@/components/games/MemoryGame";

const Index = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Rohan, Ashrith & Mahesh";
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentGame, setCurrentGame] = useState<'wheel' | 'car' | 'memory' | null>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const handleAdventureClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    document.getElementById("interactive-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              <span className="text-purple-400 animate-pulse">{typewriterText}</span>
              <span className="animate-ping">|</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
              Crafting UI that makes users fall in love with your apps
            </h2>
          </div>

          <Button
            onClick={handleAdventureClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 animate-bounce"
          >
            Start the UI Adventure
          </Button>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-purple-400" size={32} />
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section id="interactive-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16 animate-fade-in">
            Interactive <span className="text-purple-400">UI Games</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card 
              className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setCurrentGame('wheel')}
            >
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Spin the Wheel</h3>
              <p className="text-gray-300">Test your luck and discover UI tips!</p>
            </Card>

            <Card 
              className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setCurrentGame('car')}
            >
              <div className="text-6xl mb-4">🏎️</div>
              <h3 className="text-xl font-bold text-white mb-2">Racing Game</h3>
              <p className="text-gray-300">Navigate through UI challenges!</p>
            </Card>

            <Card 
              className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setCurrentGame('memory')}
            >
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Memory Match</h3>
              <p className="text-gray-300">Match UI design patterns!</p>
            </Card>
          </div>

          {/* Game Modal */}
          {currentGame && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {currentGame === 'wheel' && 'Spin the Wheel'}
                    {currentGame === 'car' && 'Racing Game'}
                    {currentGame === 'memory' && 'Memory Match'}
                  </h3>
                  <Button 
                    variant="ghost" 
                    onClick={() => setCurrentGame(null)}
                    className="text-white hover:bg-white/20"
                  >
                    ✕
                  </Button>
                </div>
                
                {currentGame === 'wheel' && <SpinWheel />}
                {currentGame === 'car' && <CarGame />}
                {currentGame === 'memory' && <MemoryGame />}
              </div>
            </div>
          )}

          {/* Fun Meme Section */}
          <div className="mt-20 text-center">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
                alt="UI Development Meme"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium">
                "When your UI is so good, users forget how to blink!" 😄
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-8 animate-fade-in">Ready to explore our work?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300">
                  Learn About Us
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
