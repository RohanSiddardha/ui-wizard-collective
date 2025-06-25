
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  const teamMembers = [
    {
      name: "Rohan Siddardha",
      role: "Senior UI Developer",
      bio: "Passionate about creating pixel-perfect interfaces that users love. Specializes in React, design systems, and accessibility.",
      skills: ["React", "TypeScript", "Figma", "CSS-in-JS", "Design Systems"],
      experience: "3+ years",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      superpower: "🎯 Pixel-Perfect Precision",
      funFact: "Can spot a 1px misalignment from across the room"
    },
    {
      name: "Ashrith Reddy",
      role: "UI Animation Specialist",
      bio: "Brings interfaces to life with smooth animations and micro-interactions. Expert in modern web technologies and performance optimization.",
      skills: ["React", "Framer Motion", "GSAP", "CSS Animations", "Performance"],
      experience: "4+ years",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      superpower: "✨ Animation Wizard",
      funFact: "Dreams in 60fps and wakes up thinking about easing curves"
    },
    {
      name: "Mahesh Yadav",
      role: "UX-Focused Developer",
      bio: "Bridges the gap between design and development. Focused on creating intuitive user experiences through thoughtful code.",
      skills: ["React", "User Research", "Prototyping", "A/B Testing", "Analytics"],
      experience: "3+ years",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      superpower: "🧠 UX Mind Reader",
      funFact: "Can predict user behavior before users know what they want"
    }
  ];

  const quizQuestions = [
    {
      question: "What makes a UI truly great?",
      options: ["Pretty colors", "User-centered design", "Lots of animations", "Complex layouts"],
      correct: 1
    },
    {
      question: "Why is accessibility important in UI?",
      options: ["It's required by law", "It makes apps usable for everyone", "It's trendy", "It's easy to implement"],
      correct: 1
    },
    {
      question: "What's the key to good micro-interactions?",
      options: ["They should be flashy", "They should provide feedback", "They should be complex", "They should be loud"],
      correct: 1
    }
  ];

  const handleQuizAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished
      setTimeout(() => {
        setShowQuiz(false);
        setCurrentQuestion(0);
        setQuizScore(0);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-purple-400">Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're three passionate UI developers who believe that great design isn't just about looking good—it's about creating experiences that users love and remember.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`bg-white/10 backdrop-blur-md border-white/20 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedMember === index ? 'ring-2 ring-purple-400 bg-white/20' : ''
              }`}
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              <div className="text-center mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-400"
                />
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                  {member.experience}
                </Badge>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-purple-400 text-purple-300 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {selectedMember === index && (
                <div className="border-t border-white/20 pt-4 animate-fade-in">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg text-center">
                    <div className="text-lg font-bold">{member.superpower}</div>
                    <div className="text-sm mt-1 italic">"{member.funFact}"</div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Interactive Quiz Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Test Your UI Knowledge</h2>
          {!showQuiz ? (
            <Button
              onClick={() => setShowQuiz(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg rounded-full"
            >
              Start UI Quiz 🧠
            </Button>
          ) : (
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-6">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {quizQuestions[currentQuestion].question}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white p-4 text-left"
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {currentQuestion === quizQuestions.length - 1 && (
                <div className="mt-6 text-purple-400 font-medium">
                  Score: {quizScore}/{quizQuestions.length} 🎉
                </div>
              )}
            </Card>
          )}
        </div>

        {/* Meme Section */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
              alt="Team Working Meme"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-lg font-medium">
              "Us explaining why that 2px spacing matters" 😄
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
