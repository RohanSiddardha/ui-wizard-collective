import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ModernTools = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { elementRef: takeawaysRef, isVisible: takeawaysVisible } = useScrollAnimation();

  const tools = [
    {
      name: "Anima",
      category: "design-to-code",
      description: "Converts Figma designs to React code automatically, bridging the gap between design and development.",
      features: ["Figma Plugin", "React Output", "Responsive Code", "Component Library"],
      pros: ["Time-saving", "Design accuracy", "Clean code output"],
      cons: ["Limited customization", "Learning curve"],
      rating: 4.5,
      logo: "🎨",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Lovable",
      category: "ai-development",
      description: "AI-powered development platform that generates React applications from natural language descriptions.",
      features: ["AI Code Generation", "React Components", "Instant Preview", "Modern UI"],
      pros: ["Rapid prototyping", "No coding required", "Modern output"],
      cons: ["Limited control", "AI limitations"],
      rating: 4.7,
      logo: "🤖",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Spline",
      category: "3d-design",
      description: "Browser-based 3D design tool for creating interactive 3D experiences and animations.",
      features: ["3D Modeling", "Web Integration", "Real-time Collaboration", "Animation"],
      pros: ["Browser-based", "Easy to learn", "Web-ready output"],
      cons: ["Performance impact", "Limited complexity"],
      rating: 4.3,
      logo: "🌐",
      color: "from-blue-500 to-green-500"
    },
    {
      name: "Framer",
      category: "prototyping",
      description: "Advanced prototyping tool with real React components and sophisticated interactions.",
      features: ["React Components", "Advanced Animations", "CMS", "Publishing"],
      pros: ["Production-ready", "Advanced interactions", "No-code to code"],
      cons: ["Steep learning curve", "Pricing"],
      rating: 4.6,
      logo: "⚡",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Figma",
      category: "design",
      description: "Collaborative interface design tool with powerful features for UI/UX design and prototyping.",
      features: ["Collaborative Design", "Prototyping", "Dev Handoff", "Plugins"],
      pros: ["Industry standard", "Great collaboration", "Extensive plugins"],
      cons: ["Internet required", "Can be slow"],
      rating: 4.8,
      logo: "🎨",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "ProtoPie",
      category: "prototyping",
      description: "Sensor-enabled prototyping for complex interactions and IoT device simulations.",
      features: ["Sensor Input", "Complex Logic", "IoT Simulation", "Voice Commands"],
      pros: ["Advanced interactions", "Realistic prototypes", "Sensor support"],
      cons: ["Complex for beginners", "Specialized use cases"],
      rating: 4.2,
      logo: "🥧",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Webflow",
      category: "web-development",
      description: "Visual web development platform that generates clean, semantic HTML, CSS, and JavaScript.",
      features: ["Visual Development", "CMS", "E-commerce", "SEO Tools"],
      pros: ["No coding required", "Professional output", "Built-in CMS"],
      cons: ["Learning curve", "Vendor lock-in"],
      rating: 4.4,
      logo: "🌊",
      color: "from-teal-500 to-blue-500"
    },
    {
      name: "Tailwind CSS",
      category: "styling",
      description: "Utility-first CSS framework for rapidly building custom user interfaces.",
      features: ["Utility Classes", "Responsive Design", "Dark Mode", "JIT Compiler"],
      pros: ["Fast development", "Consistent design", "Small bundle size"],
      cons: ["HTML verbosity", "Learning curve"],
      rating: 4.9,
      logo: "💨",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const categories = [
    { key: "all", label: "All Tools", icon: "🛠️" },
    { key: "design", label: "Design", icon: "🎨" },
    { key: "prototyping", label: "Prototyping", icon: "⚡" },
    { key: "design-to-code", label: "Design to Code", icon: "🔄" },
    { key: "ai-development", label: "AI Development", icon: "🤖" },
    { key: "3d-design", label: "3D Design", icon: "🌐" },
    { key: "web-development", label: "Web Development", icon: "💻" },
    { key: "styling", label: "Styling", icon: "💅" }
  ];

  const filteredTools = selectedCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400">⭐</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">⭐</span>}
        <span className="ml-2 text-gray-300 text-sm">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Modern <span className="text-purple-400">UI Tools</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the cutting-edge tools that are revolutionizing how we design and build user interfaces in 2024 and beyond.
          </p>
        </div>

        {/* Key Takeaways Section */}
        <div 
          ref={takeawaysRef}
          className={`mb-16 transition-all duration-1000 ${
            takeawaysVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Key Takeaways to Emphasize</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Speed</h3>
                    <p className="text-gray-300">"Anima accelerates the UI build process by 70%."</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Accuracy</h3>
                    <p className="text-gray-300">"Fewer visual bugs, because I'm working from real designs, not just redlines."</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Focus</h3>
                    <p className="text-gray-300">"I spend my energy on complex logic and performance instead of layout grunt work."</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Team Benefit</h3>
                    <p className="text-gray-300">"It shortens the feedback loop between design and dev."</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
            <div className="text-gray-300 leading-relaxed space-y-4">
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              variant={selectedCategory === category.key ? "default" : "outline"}
              className={`${
                selectedCategory === category.key 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              } transition-all duration-300`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTools.map((tool, index) => (
            <Card 
              key={tool.name}
              className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-2xl mr-4`}>
                  {tool.logo}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                    {categories.find(c => c.key === tool.category)?.label}
                  </Badge>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{tool.description}</p>

              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {tool.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="text-green-400 font-medium text-xs mb-1">Pros:</h5>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-400 mr-1">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-medium text-xs mb-1">Cons:</h5>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-red-400 mr-1">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                {renderStars(tool.rating)}
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Comparison</h2>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white font-medium py-3">Tool</th>
                  <th className="text-left text-white font-medium py-3">Best For</th>
                  <th className="text-left text-white font-medium py-3">Learning Curve</th>
                  <th className="text-left text-white font-medium py-3">Rating</th>
                </tr>
              </thead>
              <tbody>
                {tools.slice(0, 5).map((tool) => (
                  <tr key={tool.name} className="border-b border-white/10">
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className="mr-2">{tool.logo}</span>
                        <span className="text-white font-medium">{tool.name}</span>
                      </div>
                    </td>
                    <td className="text-gray-300 py-3">{tool.features[0]}</td>
                    <td className="py-3">
                      <Badge 
                        variant="secondary" 
                        className={`${
                          tool.rating > 4.5 ? 'bg-green-500/20 text-green-300' :
                          tool.rating > 4.0 ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {tool.rating > 4.5 ? 'Easy' : tool.rating > 4.0 ? 'Medium' : 'Advanced'}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <span className="text-yellow-400">★ {tool.rating}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* Future Trends */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Future of UI Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Design</h3>
              <p className="text-gray-300 text-sm">
                AI will generate complete interfaces from simple descriptions, making design accessible to everyone.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-4xl mb-4">🥽</div>
              <h3 className="text-xl font-bold text-white mb-3">Spatial Computing</h3>
              <p className="text-gray-300 text-sm">
                AR/VR interfaces will require new design paradigms and tools for 3D spatial experiences.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time Collaboration</h3>
              <p className="text-gray-300 text-sm">
                Design and development will merge into unified platforms with instant synchronization.
              </p>
            </Card>
          </div>
        </div>

        {/* Meme Section */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
              alt="Modern Tools Meme"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-lg font-medium">
              "When you discover a new UI tool that does everything" 🤯
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernTools;
