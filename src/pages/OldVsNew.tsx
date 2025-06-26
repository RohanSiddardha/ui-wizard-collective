
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OldVsNew = () => {
  const [currentComparison, setCurrentComparison] = useState(0);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: rethinkingRef, isVisible: rethinkingVisible } = useScrollAnimation();
  const { elementRef: memesRef, isVisible: memesVisible } = useScrollAnimation();

  const comparisons = [
    {
      category: "Layout & Structure",
      old: {
        title: "Table-Based Layouts",
        description: "Complex nested tables for positioning",
        problems: ["Semantic confusion", "Accessibility nightmares", "Mobile unfriendly"],
        example: "<table><tr><td>Content here</td></tr></table>"
      },
      new: {
        title: "CSS Grid & Flexbox",
        description: "Semantic, flexible layout systems",
        benefits: ["Responsive by default", "Clean markup", "Accessibility built-in"],
        example: "display: grid; grid-template-columns: 1fr 2fr;"
      }
    },
    {
      category: "Styling Approach",
      old: {
        title: "Inline Styles & <font> tags",
        description: "Style mixed with content",
        problems: ["Hard to maintain", "No reusability", "Performance issues"],
        example: '<font color="red" size="4">Text</font>'
      },
      new: {
        title: "Modern CSS & Frameworks",
        description: "Separation of concerns with powerful tools",
        benefits: ["Maintainable code", "Design systems", "Performance optimized"],
        example: "className='text-red-500 text-lg font-semibold'"
      }
    },
    {
      category: "User Experience",
      old: {
        title: "Page Refreshes",
        description: "Full page reloads for every interaction",
        problems: ["Slow user experience", "Lost form data", "No smooth transitions"],
        example: "window.location.href = 'newpage.html'"
      },
      new: {
        title: "Single Page Applications",
        description: "Dynamic, app-like experiences",
        benefits: ["Instant navigation", "Smooth animations", "State preservation"],
        example: "navigate('/dashboard')"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentComparison((prev) => (prev + 1) % comparisons.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
            Old <span className="text-red-400">vs</span> New
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From the dark ages of web development to today's modern paradise
          </p>
        </div>

        {/* Interactive Comparison */}
        <div 
          ref={comparisonRef}
          className={`mb-16 transition-all duration-1000 delay-200 ${
            comparisonVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {comparisons[currentComparison].category}
            </h2>
            <div className="flex justify-center space-x-2">
              {comparisons.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentComparison 
                      ? 'bg-purple-400 scale-125' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="destructive">Old Way</Badge>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-red-400 mb-2">
                  {comparisons[currentComparison].old.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {comparisons[currentComparison].old.description}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Problems:</h4>
                <ul className="space-y-1">
                  {comparisons[currentComparison].old.problems.map((problem, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-red-400 mr-2">✗</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 p-3 rounded-lg">
                <code className="text-red-300 text-sm">
                  {comparisons[currentComparison].old.example}
                </code>
              </div>
            </Card>

            {/* New Way */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500">New Way</Badge>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  {comparisons[currentComparison].new.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {comparisons[currentComparison].new.description}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {comparisons[currentComparison].new.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 p-3 rounded-lg">
                <code className="text-green-300 text-sm">
                  {comparisons[currentComparison].new.example}
                </code>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`text-center mb-16 transition-all duration-1000 delay-400 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-8">The Evolution Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-white font-medium mb-2">Faster Development</div>
              <div className="text-gray-300 text-sm">Modern tools vs legacy methods</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white font-medium mb-2">Less Code</div>
              <div className="text-gray-300 text-sm">Framework efficiency gains</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-white font-medium mb-2">Better UX</div>
              <div className="text-gray-300 text-sm">User satisfaction improvement</div>
            </Card>
          </div>
        </div>

        {/* New Rethinking UI Development Section */}
        <div 
          ref={rethinkingRef}
          className={`mb-16 transition-all duration-1000 delay-600 ${
            rethinkingVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">🎞️</div>
              <h2 className="text-4xl font-bold text-white mb-4">Rethinking UI Development</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Traditional Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Manual design-to-code handoff</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Hand-coded layout from scratch</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Pixel-perfect tweaking</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Long dev/design feedback loops</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>Time spent on boilerplate</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">Modern Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-3 mt-1">→</span>
                    <span>Automated with Anima</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-3 mt-1">→</span>
                    <span>Auto-generated responsive UI</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-3 mt-1">→</span>
                    <span>Design fidelity from day one</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-3 mt-1">→</span>
                    <span>Rapid iteration with live previews</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-3 mt-1">→</span>
                    <span>Focus on logic, UX, and performance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <p className="text-gray-300 leading-relaxed mb-4">
                "UI development has changed — or at least, it should. The traditional approach involved taking static Figma files, writing layout code from scratch, and spending a lot of time tweaking visuals and going back and forth with designers. It worked, but it was slow and error-prone."
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                "I've rethought that entire process using Anima, a tool that automates design-to-code conversion. With Anima, I generate responsive, high-fidelity UI code directly from Figma. This means I spend less time translating designs, and more time focusing on the parts of the UI that matter most — like interactivity, performance, and edge cases."
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">"The result?"</strong> Faster delivery, fewer design bugs, and a smoother workflow with the design team. This shift in process isn't just about speed — it's about unlocking higher-value work as a frontend engineer.
              </p>
            </div>
          </Card>
        </div>

        {/* Memes Section */}
        <div 
          ref={memesRef}
          className={`transition-all duration-1000 delay-800 ${
            memesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            The Struggle Was Real
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <img
                src="/lovable-uploads/ab99a6b3-1708-4bfd-afd9-cb3d4de962d3.png"
                alt="Frontend vs Backend Developer Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:brightness-110 hover:contrast-110 hover:saturate-150 cursor-pointer"
              />
              <p className="text-white text-lg font-medium text-center">
                "Back then, we had to walk uphill both ways... in the DOM 🏔️"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <img
                src="/lovable-uploads/85b39025-975a-4f42-a9be-a848e06e2df5.png"
                alt="Frontend Developer Border Radius Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:shadow-2xl hover:brightness-110 hover:contrast-110 hover:saturate-150 cursor-pointer"
              />
              <p className="text-white text-lg font-medium text-center">
                "Internet Explorer compatibility... the stuff of nightmares 💀"
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldVsNew;
