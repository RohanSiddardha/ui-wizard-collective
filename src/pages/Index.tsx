import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SpinWheel } from "@/components/games/SpinWheel";
import { MemoryGame } from "@/components/games/MemoryGame";
import { WordGame } from "@/components/games/WordGame";
import { Link } from "react-router-dom";
import { useScrollAnimation, useScrollReset } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollReset();
  
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const { elementRef: heroRef, animationClasses: heroAnimation } = useScrollAnimation(0.1, 'fade-up');
  const { elementRef: navigationRef, animationClasses: navigationAnimation } = useScrollAnimation(0.1, 'scale');
  const { elementRef: teamRef, animationClasses: teamAnimation } = useScrollAnimation(0.1, 'fade-left');
  const { elementRef: gamesRef, animationClasses: gamesAnimation } = useScrollAnimation(0.1, 'fade-right');

  const quizQuestions = [
    {
      question: "What does UI stand for?",
      options: ["User Interface", "Ultimate Innovation", "Unlimited Internet", "Universal Integration"],
      correctAnswer: 0,
    },
    {
      question: "Why is UI important?",
      options: ["Attracts users", "Enhances user experience", "Increases conversion rates", "All of the above"],
      correctAnswer: 3,
    },
    {
      question: "Which of these is a UI design tool?",
      options: ["JavaScript", "Figma", "Python", "HTML"],
      correctAnswer: 1,
    },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "UI Designer",
      bio: "Passionate about creating intuitive and visually appealing interfaces.",
    },
    {
      name: "Emily White",
      role: "Frontend Developer",
      bio: "Expert in translating designs into functional and responsive web applications.",
    },
    {
      name: "David Brown",
      role: "UX Researcher",
      bio: "Dedicated to understanding user behavior and improving overall user experience.",
    },
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const navigationCards = [
    {
      title: "Why UI Matters",
      description: "Discover the critical importance of user interface design in modern applications",
      icon: "👁️",
      path: "/ui-importance",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Modern Tools",
      description: "Explore cutting-edge tools revolutionizing UI/UX development",
      icon: "🛠️",
      path: "/modern-tools",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Old vs New",
      description: "See how modern workflows are transforming frontend development",
      icon: "🔄",
      path: "/old-vs-new",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen pb-8">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`pt-20 pb-16 px-4 ${heroAnimation}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            UI<span className="text-purple-400 animate-pulse">Trio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Presenting the future of user interface development through modern tools and innovative approaches
          </p>
        </div>
      </section>

      {/* Interactive Navigation Section */}
      <section 
        ref={navigationRef}
        className={`py-16 px-4 ${navigationAnimation}`}
        style={{ animationDelay: '0.2s' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Explore Our <span className="text-purple-400">Presentation</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {navigationCards.map((card, index) => (
              <Link key={card.path} to={card.path}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full">
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${card.color} mx-auto flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className={`py-16 px-4 ${teamAnimation}`}
        style={{ animationDelay: '0.4s' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Meet the <span className="text-purple-400">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section 
        ref={gamesRef}
        className={`py-16 px-4 ${gamesAnimation}`}
        style={{ animationDelay: '0.6s' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Interactive <span className="text-purple-400">Elements</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* UI Quiz */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="text-center">
                    <div className="text-5xl mb-4">❓</div>
                    <h3 className="text-xl font-bold text-white mb-3">UI Quiz</h3>
                    <p className="text-gray-300 text-sm">Test your knowledge of UI design principles</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-black/80 backdrop-blur-md text-white max-w-md mx-auto p-6 rounded-lg">
                {!quizCompleted ? (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{quizQuestions[currentQuestion].question}</h3>
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === index ? "default" : "outline"}
                        className="w-full mb-2"
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">Quiz Completed!</h3>
                    <p className="text-lg">Your Score: {score} / {quizQuestions.length}</p>
                    <Button onClick={() => {
                      setIsQuizOpen(false);
                      setCurrentQuestion(0);
                      setScore(0);
                      setQuizCompleted(false);
                      setSelectedAnswer(null);
                    }} className="mt-4">
                      Restart Quiz
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* Spin the Wheel */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎡</div>
                    <h3 className="text-xl font-bold text-white mb-3">Spin the Wheel</h3>
                    <p className="text-gray-300 text-sm">Try your luck and win exciting UI resources</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-black/80 backdrop-blur-md text-white max-w-md mx-auto p-6 rounded-lg">
                <SpinWheel />
              </DialogContent>
            </Dialog>

            {/* Memory Game */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🧠</div>
                    <h3 className="text-xl font-bold text-white mb-3">Memory Game</h3>
                    <p className="text-gray-300 text-sm">Match UI elements and improve your memory skills</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-black/80 backdrop-blur-md text-white max-w-md mx-auto p-6 rounded-lg">
                <MemoryGame />
              </DialogContent>
            </Dialog>

            {/* Word Game */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🔤</div>
                    <h3 className="text-xl font-bold text-white mb-3">Word Game</h3>
                    <p className="text-gray-300 text-sm">Unscramble UI-related words and expand your vocabulary</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-black/80 backdrop-blur-md text-white max-w-md mx-auto p-6 rounded-lg">
                <WordGame />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
