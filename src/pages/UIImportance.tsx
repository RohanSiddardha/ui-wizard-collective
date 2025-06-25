
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UIImportance = () => {
  const [counters, setCounters] = useState({
    firstImpression: 0,
    engagement: 0,
    conversion: 0
  });

  const [currentStat, setCurrentStat] = useState(0);
  const { elementRef: frontendRef, isVisible: frontendVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: progressRef, isVisible: progressVisible } = useScrollAnimation();
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation();
  const { elementRef: caseStudyRef, isVisible: caseStudyVisible } = useScrollAnimation();
  const { elementRef: memeRef, isVisible: memeVisible } = useScrollAnimation();

  const stats = [
    { 
      title: "Users form first impressions", 
      value: 94, 
      suffix: "%", 
      description: "in 0.05 seconds based on visual design",
      icon: "👁️"
    },
    { 
      title: "Increase in engagement", 
      value: 75, 
      suffix: "%", 
      description: "with intuitive UI design",
      icon: "📈"
    },
    { 
      title: "Boost in conversions", 
      value: 85, 
      suffix: "%", 
      description: "with optimized user interfaces",
      icon: "💰"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        firstImpression: 94,
        engagement: 75,
        conversion: 85
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const principles = [
    {
      title: "First Impressions Matter",
      description: "UI is the first thing users see and judge. A stunning interface hooks users in seconds and sets the tone for their entire experience.",
      points: [
        "Users decide in 0.05 seconds if they like your site",
        "Visual hierarchy guides user attention",
        "Consistent branding builds trust"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Great UI Boosts Engagement",
      description: "Intuitive designs keep users coming back. When interfaces are easy to use and visually appealing, users spend more time exploring.",
      points: [
        "Reduced cognitive load improves satisfaction",
        "Clear navigation increases page views",
        "Interactive elements encourage exploration"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "UI Drives Conversions",
      description: "Seamless flows turn clicks into customers. Well-designed interfaces remove friction and guide users toward desired actions.",
      points: [
        "Clear CTAs increase click-through rates",
        "Optimized forms reduce abandonment",
        "Trust signals boost purchase confidence"
      ],
      color: "from-pink-500 to-red-500"
    }
  ];

  const frontendImportance = [
    {
      title: "First Impression",
      description: "It's the user's first and most lasting interaction",
      icon: "👁️",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "User Experience",
      description: "UX decisions directly affect satisfaction and retention",
      icon: "🧭",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Bridge Between Design & Function",
      description: "Translates product vision into reality",
      icon: "⚙️",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Performance & Accessibility",
      description: "Impacts usability, reach, and SEO",
      icon: "🚀",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Direct Business Impact",
      description: "A polished frontend boosts conversion and trust",
      icon: "💡",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Why <span className="text-purple-400">UI</span> is Everything
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In today's digital world, your user interface isn't just a pretty face—it's your most powerful business tool.
          </p>
        </div>

        {/* Animated Stats */}
        <div 
          ref={statsRef}
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <Card 
              key={stat.title}
              className={`bg-white/10 backdrop-blur-md border-white/20 p-6 text-center transition-all duration-500 ${
                currentStat === index ? 'scale-105 ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">
                {index === 0 ? counters.firstImpression : 
                 index === 1 ? counters.engagement : counters.conversion}
                {stat.suffix}
              </div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">{stat.title}</h3>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Progress Indicators */}
        <div 
          ref={progressRef}
          className={`mb-16 transition-all duration-1000 delay-200 ${
            progressVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Impact Metrics</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>User Satisfaction</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Task Completion Rate</span>
                <span>87%</span>
              </div>
              <Progress value={87} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-white mb-2">
                <span>Return User Rate</span>
                <span>76%</span>
              </div>
              <Progress value={76} className="h-3" />
            </div>
          </div>
        </div>

        {/* Principles Section */}
        <div 
          ref={principlesRef}
          className={`space-y-12 mb-16 transition-all duration-1000 delay-300 ${
            principlesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {principles.map((principle, index) => (
            <Card 
              key={principle.title}
              className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`inline-block bg-gradient-to-r ${principle.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                    Principle {index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-gray-300">
                        <span className="text-purple-400 mr-2">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${principle.color} mx-auto flex items-center justify-center text-4xl text-white font-bold`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Frontend Developer Importance Section */}
        <div 
          ref={frontendRef}
          className={`mb-16 transition-all duration-1000 delay-400 ${
            frontendVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Why <span className="text-purple-400">Frontend Developers</span> Are Crucial
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {frontendImportance.map((item, index) => (
              <Card 
                key={item.title}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} mx-auto flex items-center justify-center text-3xl mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Frontend Developer Memes */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <img
                src="/lovable-uploads/ab99a6b3-1708-4bfd-afd9-cb3d4de962d3.png"
                alt="Frontend vs Backend Developer Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium text-center">
                "The eternal struggle: Frontend vs Backend 😄"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <img
                src="/lovable-uploads/85b39025-975a-4f42-a9be-a848e06e2df5.png"
                alt="Frontend Developer Border Radius Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium text-center">
                "When you apply border-radius and suddenly you're a designer 🎨"
              </p>
            </Card>
          </div>
        </div>

        {/* Case Study Example */}
        <div 
          ref={caseStudyRef}
          className={`text-center mb-16 transition-all duration-1000 delay-500 ${
            caseStudyVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Real Impact Example</h2>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Before: Poor UI</h3>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
                  alt="Before UI"
                  className="w-full aspect-square object-cover rounded-lg mb-4 grayscale"
                />
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bounce Rate:</span>
                    <Badge variant="destructive">68%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Conversion:</span>
                    <Badge variant="destructive">2.1%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">User Satisfaction:</span>
                    <Badge variant="destructive">3.2/5</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">After: Great UI</h3>
                <img
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=400&fit=crop"
                  alt="After UI"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bounce Rate:</span>
                    <Badge className="bg-green-500">23%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Conversion:</span>
                    <Badge className="bg-green-500">8.7%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">User Satisfaction:</span>
                    <Badge className="bg-green-500">4.8/5</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Final Meme Section */}
        <div 
          ref={memeRef}
          className={`text-center transition-all duration-1000 delay-600 ${
            memeVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/95e5f2c7-e1f7-4973-b922-3fe40b08fd13.png"
                alt="Frontend Developer Responsibilities Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium">
                "Just another day in the life of a frontend developer 🐕‍🦺"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/3164b0d3-be03-44e6-a56f-46604753b888.png"
                alt="Frontend Developer Challenge Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium">
                "When they say 'it's just a frontend change' 😅"
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIImportance;
