import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const OldVsNew = () => {
  const { elementRef: headerRef, animationClasses: headerClasses } = useScrollAnimation(0.1, 'fade-up');
  const { elementRef: comparisonRef, animationClasses: comparisonClasses } = useScrollAnimation(0.1, 'fade-up');
  const { elementRef: benefitsRef, animationClasses: benefitsClasses } = useScrollAnimation(0.1, 'fade-left');
  const { elementRef: quoteRef, animationClasses: quoteClasses } = useScrollAnimation(0.1, 'scale');
  const { elementRef: memeRef, animationClasses: memeClasses } = useScrollAnimation(0.1, 'fade-up');

  const comparisons = [
    {
      title: "Design Handoff",
      old: "Designers create static mockups and manually communicate specs to developers.",
      new: "Designers and developers collaborate in real-time using shared design systems and automated code generation.",
      oldCons: ["Time-consuming", "Error-prone", "Version control issues"],
      newPros: ["Efficient", "Accurate", "Real-time collaboration"]
    },
    {
      title: "Layout Code",
      old: "Developers write layout code from scratch, often duplicating efforts and introducing inconsistencies.",
      new: "Layout code is automatically generated from design files, ensuring pixel-perfect accuracy and consistency.",
      oldCons: ["Repetitive", "Inconsistent", "Hard to maintain"],
      newPros: ["Automated", "Consistent", "Easy to maintain"]
    },
    {
      title: "Visual Tweaks",
      old: "Visual tweaks require manual code changes and multiple rounds of QA.",
      new: "Visual tweaks are made directly in the design tool and automatically synced to the codebase.",
      oldCons: ["Slow", "Frustrating", "Requires code expertise"],
      newPros: ["Fast", "Intuitive", "Designers can own the visual details"]
    },
    {
      title: "Responsiveness",
      old: "Responsiveness is handled with manual media queries and often results in broken layouts on different devices.",
      new: "Responsiveness is built-in with adaptive layouts and automated device testing.",
      oldCons: ["Unreliable", "Device-specific bugs", "Hard to test"],
      newPros: ["Reliable", "Cross-device compatibility", "Automated testing"]
    },
    {
      title: "Performance",
      old: "Performance optimization is an afterthought and often requires complex code refactoring.",
      new: "Performance is built-in with optimized code generation and automated performance testing.",
      oldCons: ["Slow loading times", "Poor user experience", "Hard to debug"],
      newPros: ["Fast loading times", "Smooth user experience", "Easy to debug"]
    }
  ];

  const benefits = [
    {
      title: "Faster Delivery",
      description: "Automated workflows and real-time collaboration significantly reduce development time.",
      icon: "🚀",
      metric: "40% Reduction"
    },
    {
      title: "Fewer Bugs",
      description: "Automated code generation and testing minimize visual bugs and inconsistencies.",
      icon: "🐛",
      metric: "60% Decrease"
    },
    {
      title: "Happier Teams",
      description: "Designers and developers can focus on higher-value work and collaborate more effectively.",
      icon: "😊",
      metric: "90% Satisfaction"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 ${headerClasses}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-red-400">Old</span> vs <span className="text-green-400">New</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The evolution of UI development: From manual handoffs to automated workflows
          </p>
        </div>

        {/* Comparison Grid */}
        <div ref={comparisonRef} className={`grid gap-8 mb-16 ${comparisonClasses}`}>
          {comparisons.map((comparison, index) => (
            <Card 
              key={comparison.title}
              className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{comparison.title}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Old Way */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="text-red-400" size={24} />
                    <h4 className="text-xl font-semibold text-red-400">Old Way</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{comparison.old}</p>
                  <div className="flex flex-wrap gap-2">
                    {comparison.oldCons.map((con, conIndex) => (
                      <Badge key={conIndex} variant="destructive" className="text-xs">
                        {con}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center md:flex-col">
                  <ArrowRight className="text-purple-400 hidden md:block" size={32} />
                  <ArrowRight className="text-purple-400 md:hidden rotate-90" size={32} />
                </div>

                {/* New Way */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="text-green-400" size={24} />
                    <h4 className="text-xl font-semibold text-green-400">New Way</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{comparison.new}</p>
                  <div className="flex flex-wrap gap-2">
                    {comparison.newPros.map((pro, proIndex) => (
                      <Badge key={proIndex} className="bg-green-500 text-xs">
                        {pro}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div ref={benefitsRef} className={`mb-16 ${benefitsClasses}`}>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why This <span className="text-purple-400">Transformation</span> Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-purple-400">{benefit.metric}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div ref={quoteRef} className={`text-center mb-16 ${quoteClasses}`}>
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border-white/20 p-12 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-6">
              "UI development has changed — or at least, it should. The traditional approach involved taking static Figma files, writing layout code from scratch, and spending a lot of time tweaking visuals and going back and forth with designers. It worked, but it was slow and error-prone."
            </blockquote>
            <div className="text-lg text-purple-300 mb-6">
              "I've rethought that entire process using Anima, a tool that automates design-to-code conversion. With Anima, I generate responsive, high-fidelity UI code directly from Figma. This means I spend less time translating designs, and more time focusing on the parts of the UI that matter most — like interactivity, performance, and edge cases."
            </div>
            <div className="text-lg text-green-300">
              "The result? Faster delivery, fewer design bugs, and a smoother workflow with the design team. This shift in process isn't just about speed — it's about unlocking higher-value work as a frontend engineer."
            </div>
          </Card>
        </div>

        {/* Meme Section */}
        <div ref={memeRef} className={`text-center ${memeClasses}`}>
          <h2 className="text-3xl font-bold text-white mb-8">How It Feels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/ab99a6b3-1708-4bfd-afd9-cb3d4de962d3.png"
                alt="Old vs New Development Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:brightness-110 hover:contrast-110 hover:saturate-150 cursor-pointer"
              />
              <p className="text-white text-lg font-medium">
                "Before: Manual everything vs After: Automated workflows 🚀"
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <img
                src="/lovable-uploads/95e5f2c7-e1f7-4973-b922-3fe40b08fd13.png"
                alt="Development Evolution Meme"
                className="w-full aspect-square object-cover rounded-lg mb-4 transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:shadow-2xl hover:brightness-110 hover:contrast-110 hover:saturate-150 cursor-pointer"
              />
              <p className="text-white text-lg font-medium">
                "When you realize you've been doing it the hard way 😅"
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldVsNew;
