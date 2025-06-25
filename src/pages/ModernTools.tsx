
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Code, Users, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ModernTools = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: takeawaysRef, isVisible: takeawaysVisible } = useScrollAnimation();
  const { elementRef: workflowRef, isVisible: workflowVisible } = useScrollAnimation();
  const { elementRef: toolsRef, isVisible: toolsVisible } = useScrollAnimation();
  const { elementRef: memeRef, isVisible: memeVisible } = useScrollAnimation();

  const tools = [
    {
      name: "Anima",
      description: "Design-to-code automation tool that converts Figma designs into responsive React code",
      features: ["Auto-generated React components", "Responsive layouts", "Clean, maintainable code", "Figma integration"],
      category: "Design-to-Code",
      logo: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      features: ["Utility classes", "Responsive design", "Dark mode support", "Custom design systems"],
      category: "Styling",
      logo: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "React",
      description: "Component-based JavaScript library for building user interfaces",
      features: ["Virtual DOM", "Component reusability", "Large ecosystem", "Strong community"],
      category: "Framework",
      logo: "⚛️",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript that compiles to plain JavaScript",
      features: ["Type safety", "Better IDE support", "Catch errors early", "Enhanced refactoring"],
      category: "Language",
      logo: "📝",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Vite",
      description: "Next generation frontend build tool with lightning fast HMR",
      features: ["Instant server start", "Lightning fast HMR", "Optimized builds", "Plugin ecosystem"],
      category: "Build Tool",
      logo: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Shadcn/UI",
      description: "Beautifully designed components built with Radix UI and Tailwind CSS",
      features: ["Copy & paste components", "Accessible by default", "Customizable", "TypeScript support"],
      category: "Component Library",
      logo: "🧩",
      color: "from-gray-500 to-slate-500"
    }
  ];

  const takeaways = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed",
      description: "Anima accelerates the UI build process by 70%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accuracy",
      description: "Fewer visual bugs, because I'm working from real designs, not just redlines",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Focus",
      description: "I spend my energy on complex logic and performance instead of layout grunt work",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Benefit",
      description: "It shortens the feedback loop between design and dev",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Modern <span className="text-purple-400">Tools</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The cutting-edge stack that powers modern frontend development
          </p>
        </div>

        {/* Key Takeaways */}
        <div 
          ref={takeawaysRef}
          className={`mb-16 transition-all duration-1000 delay-200 ${
            takeawaysVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Key Takeaways to Emphasize</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {takeaways.map((takeaway, index) => (
              <Card 
                key={takeaway.title}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${takeaway.color} mx-auto flex items-center justify-center text-white mb-4`}>
                    {takeaway.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{takeaway.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{takeaway.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Workflow Optimization */}
        <div 
          ref={workflowRef}
          className={`mb-16 transition-all duration-1000 delay-300 ${
            workflowVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Workflow Optimization
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                One of the ways I've optimized my workflow is by using Anima, a design-to-code tool that lets me quickly generate responsive React code from Figma designs.
              </p>
              <p className="text-lg">
                This gives me a huge edge — I don't waste time recreating layouts manually or second-guessing spacing. Instead, I spend that saved time focusing on interactivity, performance, and edge cases.
              </p>
              <p className="text-lg">
                It also improves team velocity — less designer-developer back-and-forth, faster delivery, and more confidence in the final product.
              </p>
            </div>
          </Card>
        </div>

        {/* Tools Grid */}
        <div 
          ref={toolsRef}
          className={`mb-16 transition-all duration-1000 delay-400 ${
            toolsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Essential Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card 
                key={tool.name}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl`}>
                    {tool.logo}
                  </div>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    {tool.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{tool.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-purple-400 group-hover:text-white transition-colors"
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Meme Section */}
        <div 
          ref={memeRef}
          className={`text-center transition-all duration-1000 delay-500 ${
            memeVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Developer Life</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/95e5f2c7-e1f7-4973-b922-3fe40b08fd13.png"
                alt="Frontend Developer Responsibilities"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium">
                "Managing all these modern tools like... 🐕‍🦺"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/3164b0d3-be03-44e6-a56f-46604753b888.png"
                alt="Frontend vs Backend Complexity"
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium">
                "So you're telling me you can't handle this in the frontend? 😏"
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTools;
