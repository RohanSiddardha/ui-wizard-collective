
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OldVsNew = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { elementRef: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { elementRef: memeRef, isVisible: memeVisible } = useScrollAnimation();

  const comparisons = [
    {
      old: "Manual design-to-code handoff",
      new: "Automated with Anima",
      icon: "🔄",
      color: "from-red-500 to-orange-500"
    },
    {
      old: "Hand-coded layout from scratch",
      new: "Auto-generated responsive UI",
      icon: "📱",
      color: "from-orange-500 to-yellow-500"
    },
    {
      old: "Pixel-perfect tweaking",
      new: "Design fidelity from day one",
      icon: "🎯",
      color: "from-yellow-500 to-green-500"
    },
    {
      old: "Long dev/design feedback loops",
      new: "Rapid iteration with live previews",
      icon: "⚡",
      color: "from-green-500 to-blue-500"
    },
    {
      old: "Time spent on boilerplate",
      new: "Focus on logic, UX, and performance",
      icon: "🚀",
      color: "from-blue-500 to-purple-500"
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
            <span className="text-red-400">Old</span> vs <span className="text-green-400">New</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            How modern tools are revolutionizing the frontend development workflow
          </p>
        </div>

        {/* Comparison Cards */}
        <div 
          ref={comparisonRef}
          className={`space-y-8 mb-16 transition-all duration-1000 delay-200 ${
            comparisonVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {comparisons.map((comparison, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <Badge variant="destructive" className="mb-4 text-sm">
                    Old Way
                  </Badge>
                  <p className="text-red-300 text-lg font-medium">
                    {comparison.old}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${comparison.color} mx-auto flex items-center justify-center text-2xl mb-2`}>
                    {comparison.icon}
                  </div>
                  <div className="text-white text-2xl font-bold">→</div>
                </div>
                
                <div className="text-center">
                  <Badge className="bg-green-500 mb-4 text-sm">
                    New Way
                  </Badge>
                  <p className="text-green-300 text-lg font-medium">
                    {comparison.new}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div 
          ref={contentRef}
          className={`transition-all duration-1000 delay-400 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              The Transformation
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                UI development has changed — or at least, it should. The traditional approach involved taking static Figma files, writing layout code from scratch, and spending a lot of time tweaking visuals and going back and forth with designers. It worked, but it was slow and error-prone.
              </p>
              <p className="text-lg">
                I've rethought that entire process using Anima, a tool that automates design-to-code conversion. With Anima, I generate responsive, high-fidelity UI code directly from Figma. This means I spend less time translating designs, and more time focusing on the parts of the UI that matter most — like interactivity, performance, and edge cases.
              </p>
              <p className="text-lg">
                The result? Faster delivery, fewer design bugs, and a smoother workflow with the design team. This shift in process isn't just about speed — it's about unlocking higher-value work as a frontend engineer.
              </p>
            </div>
          </Card>

          {/* Benefits Grid */}
          <div 
            ref={benefitsRef}
            className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ${
              benefitsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Speed</h3>
                <p className="text-gray-300">
                  Anima accelerates the UI build process by 70%, eliminating manual layout coding
                </p>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Accuracy</h3>
                <p className="text-gray-300">
                  Fewer visual bugs, because you're working from real designs, not just redlines
                </p>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Focus</h3>
                <p className="text-gray-300">
                  Spend energy on complex logic and performance instead of layout grunt work
                </p>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-3">Team Benefit</h3>
                <p className="text-gray-300">
                  Shortens the feedback loop between design and dev teams
                </p>
              </div>
            </Card>
          </div>

          {/* Meme Section */}
          <div 
            ref={memeRef}
            className={`text-center transition-all duration-1000 delay-600 ${
              memeVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-white mb-8">The Reality Check</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
                <img
                  src="/lovable-uploads/ab99a6b3-1708-4bfd-afd9-cb3d4de962d3.png"
                  alt="Frontend vs Backend Meme"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-white text-lg font-medium">
                  "Frontend vs Backend: The eternal perspective difference 😄"
                </p>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
                <img
                  src="/lovable-uploads/85b39025-975a-4f42-a9be-a848e06e2df5.png"
                  alt="Frontend Developer Designer Meme"
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-white text-lg font-medium">
                  "After adding border-radius: 'I'm something of a designer myself' 🎨"
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldVsNew;
