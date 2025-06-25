
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Rohan, Ashrith & Mahesh";
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleAdventureClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    document.getElementById("team-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const teamMembers = [
    {
      name: "Rohan Siddardha",
      role: "UI Developer",
      superpower: "Pixel-Perfect Precision",
      funFact: "Dreams in CSS Grid layouts",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ashrith Reddy",
      role: "UI Developer", 
      superpower: "Animation Wizard",
      funFact: "Can make any button irresistible",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mahesh Yadav",
      role: "UI Developer",
      superpower: "Micro-interaction Maestro",
      funFact: "Speaks fluent React & Figma",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

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
              <span className="text-purple-400">{typewriterText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 leading-relaxed">
              Crafting UI that makes users fall in love with your apps
            </h2>
          </div>

          <Button
            onClick={handleAdventureClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Start the UI Adventure
          </Button>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-purple-400" size={32} />
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section id="team-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16">
            Meet Your <span className="text-purple-400">UI Masters</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400 group-hover:border-pink-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent group-hover:from-purple-500/40 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 text-lg mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4 italic">"{member.funFact}"</p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    🚀 {member.superpower}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Fun Meme Section */}
          <div className="mt-20 text-center">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
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
            <h3 className="text-3xl font-bold text-white mb-8">Ready to explore our work?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Learn About Us
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
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
