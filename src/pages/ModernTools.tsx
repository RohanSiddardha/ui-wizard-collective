import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Zap, Code, Palette, Smartphone, Gauge, Users } from "lucide-react";

const ModernTools = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation(0.1, 'fade-up');
  const { elementRef: takeawaysRef, animationClasses: takeawaysClasses } = useScrollAnimation(0.1, 'fade-left');
  const { elementRef: animaRef, animationClasses: animaClasses } = useScrollAnimation(0.1, 'scale');
  const { elementRef: toolsRef, animationClasses: toolsClasses } = useScrollAnimation(0.1, 'fade-up');
  const { elementRef: memeRef, animationClasses: memeClasses } = useScrollAnimation(0.1, 'fade-up');

  const tools = [
    {
      name: "Anima",
      category: "Design-to-Code",
      description: "Generate responsive React code from Figma designs. Automate design handoff and focus on interactivity and performance.",
      features: ["Figma Integration", "Responsive Code", "Interactive Prototypes", "Team Collaboration"],
      rating: 5,
      color: "from-purple-500 to-pink-500",
      icon: <Code size={20} />,
    },
    {
      name: "Storybook",
      category: "Component Library",
      description: "Develop UI components in isolation. Showcase components, document use cases, and automate testing.",
      features: ["Component Explorer", "Addons Ecosystem", "Testing Tools", "Documentation"],
      rating: 4,
      color: "from-red-500 to-orange-500",
      icon: <Palette size={20} />,
    },
    {
      name: "Chromatic",
      category: "Visual Testing",
      description: "Catch UI bugs before they're released. Automate visual testing and ensure consistent UI across devices.",
      features: ["Automated Screenshots", "Regression Detection", "Collaboration Tools", "CI/CD Integration"],
      rating: 4,
      color: "from-green-500 to-teal-500",
      icon: <Smartphone size={20} />,
    },
    {
      name: "Bundle Analyzer",
      category: "Performance Optimization",
      description: "Visualize the size of your JavaScript bundles and identify optimization opportunities.",
      features: ["Bundle Size Analysis", "Dependency Graph", "Code Splitting", "Performance Metrics"],
      rating: 4,
      color: "from-blue-500 to-cyan-500",
      icon: <Gauge size={20} />,
    },
    {
      name: "Bit",
      category: "Component Sharing",
      description: "Share and reuse React components across projects. Build a scalable component library and accelerate development.",
      features: ["Component Isolation", "Version Control", "Dependency Management", "Collaboration"],
      rating: 4,
      color: "from-yellow-500 to-lime-500",
      icon: <Users size={20} />,
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Modern <span className="text-purple-400">UI Tools</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The toolkit that's revolutionizing how we build user interfaces in 2024
          </p>
        </div>

        {/* Key Takeaways Section */}
        <div ref={takeawaysRef} className={`mb-16 ${takeawaysClasses}`}>
          <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-white/20 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Takeaways to Emphasize</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Speed</h3>
                    <p className="text-gray-300">"Anima accelerates the UI build process by 70%."</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Gauge className="text-green-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Accuracy</h3>
                    <p className="text-gray-300">"Fewer visual bugs, because I'm working from real designs, not just redlines."</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Focus</h3>
                    <p className="text-gray-300">"I spend my energy on complex logic and performance instead of layout grunt work."</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-purple-400" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Team Benefit</h3>
                    <p className="text-gray-300">"It shortens the feedback loop between design and dev."</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Anima Section */}
        <div ref={animaRef} className={`mb-16 ${animaClasses}`}>
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border-white/20 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">My Secret Weapon: Anima</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              "One of the ways I've optimized my workflow is by using Anima, a design-to-code tool that lets me quickly generate responsive React code from Figma designs. This gives me a huge edge — I don't waste time recreating layouts manually or second-guessing spacing. Instead, I spend that saved time focusing on interactivity, performance, and edge cases. It also improves team velocity — less designer-developer back-and-forth, faster delivery, and more confidence in the final product."
            </p>
          </Card>
        </div>

        {/* Tools Grid */}
        <div ref={toolsRef} className={`mb-16 ${toolsClasses}`}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Essential <span className="text-purple-400">Tools</span> for Modern UI Development
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card 
                key={tool.name}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center text-white font-bold`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                    <p className="text-gray-400 text-sm">{tool.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{tool.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="outline" className="border-purple-400 text-purple-300 text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(tool.rating)} ({tool.rating}/5)
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-purple-500/20"
                  >
                    Learn More <ExternalLink size={16} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Meme Section */}
        <div ref={memeRef} className={`text-center ${memeClasses}`}>
          <h2 className="text-3xl font-bold text-white mb-8">Developer Life with Modern Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/85b39025-975a-4f42-a9be-a848e06e2df5.png"
                alt="Modern Tools Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:brightness-110 hover:contrast-110 hover:saturate-150 cursor-pointer"
              />
              <p className="text-white text-lg font-medium">
                "When you discover a tool that does in 5 minutes what used to take 5 hours 🤯"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/3164b0d3-be03-44e6-a56f-46604753b888.png"
                alt="Developer Productivity Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-2xl hover:brightness-110 hover:contrast-110 hover:saturate-150 cursor-pointer"
              />
              <p className="text-white text-lg font-medium">
                "Me explaining to my team why we need another developer tool 😅"
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTools;
