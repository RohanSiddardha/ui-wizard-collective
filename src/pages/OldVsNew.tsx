
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const OldVsNew = () => {
  const [currentComparison, setCurrentComparison] = useState(0);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
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

        {/* Memes Section */}
        <div 
          ref={memesRef}
          className={`transition-all duration-1000 delay-600 ${
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
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <p className="text-white text-lg font-medium text-center">
                "Back then, we had to walk uphill both ways... in the DOM 🏔️"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <img
                src="/lovable-uploads/85b39025-975a-4f42-a9be-a848e06e2df5.png"
                alt="Frontend Developer Border Radius Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4"
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
