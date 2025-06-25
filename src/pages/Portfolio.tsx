
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [randomTip, setRandomTip] = useState("");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "web",
      description: "Complete redesign of an e-commerce platform focusing on conversion optimization and user experience.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind", "Framer Motion", "Stripe"],
      challenge: "Low conversion rates and poor mobile experience",
      solution: "Implemented modern design patterns and optimized checkout flow",
      impact: "Increased conversions by 150% and reduced bounce rate by 40%",
      beforeImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      category: "web",
      description: "Intuitive dashboard for healthcare professionals to manage patient data and appointments.",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "Material-UI", "TypeScript"],
      challenge: "Complex data visualization and workflow management",
      solution: "Created intuitive data visualizations and streamlined workflows",
      impact: "Reduced task completion time by 60% and improved user satisfaction",
      beforeImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Fitness Mobile App",
      category: "mobile",
      description: "Gamified fitness tracking app with social features and personalized workout plans.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["React Native", "Redux", "Firebase", "Lottie"],
      challenge: "User engagement and motivation retention",
      solution: "Implemented gamification and social features",
      impact: "Achieved 85% user retention rate and 4.8 app store rating",
      beforeImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Banking Interface",
      category: "web",
      description: "Secure and accessible banking interface with advanced security features and intuitive design.",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop",
      technologies: ["React", "Next.js", "CSS Modules", "Web3"],
      challenge: "Security concerns and complex financial operations",
      solution: "Balanced security with usability and clear visual hierarchy",
      impact: "Reduced support calls by 45% and improved transaction success rate",
      beforeImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=300&fit=crop"
    }
  ];

  const uiTips = [
    "Use consistent spacing throughout your design (8px grid system works great!)",
    "Limit your color palette to 2-3 main colors plus neutrals",
    "Always provide feedback for user actions (loading states, success messages)",
    "Make clickable elements at least 44px tall for mobile usability",
    "Use micro-animations to guide user attention and provide delight",
    "Implement proper contrast ratios for accessibility (WCAG 2.1 guidelines)",
    "Group related elements together using proximity and white space",
    "Test your design with real users, not just designers!"
  ];

  const filters = [
    { key: "all", label: "All Projects", count: projects.length },
    { key: "web", label: "Web Apps", count: projects.filter(p => p.category === "web").length },
    { key: "mobile", label: "Mobile Apps", count: projects.filter(p => p.category === "mobile").length }
  ];

  const filteredProjects = selectedFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const generateRandomTip = () => {
    const tip = uiTips[Math.floor(Math.random() * uiTips.length)];
    setRandomTip(tip);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-purple-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects where we've transformed user experiences through thoughtful design and innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              variant={selectedFilter === filter.key ? "default" : "outline"}
              className={`${
                selectedFilter === filter.key 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              } transition-all duration-300 transform hover:scale-105`}
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge 
                  className="absolute top-4 right-4 bg-purple-500/90 text-white"
                >
                  {project.category.toUpperCase()}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
                    >
                      View Case Study
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-white/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white mb-4">
                        {project.title} - Case Study
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-red-400 mb-2">Challenge</h4>
                          <p className="text-gray-300 text-sm">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-400 mb-2">Solution</h4>
                          <p className="text-gray-300 text-sm">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-green-400 mb-2">Impact</h4>
                          <p className="text-gray-300 text-sm">{project.impact}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Before vs After</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-red-400 font-medium mb-2">Before</h5>
                            <img
                              src={project.beforeImage}
                              alt="Before"
                              className="w-full h-40 object-cover rounded-lg grayscale"
                            />
                          </div>
                          <div>
                            <h5 className="text-green-400 font-medium mb-2">After</h5>
                            <img
                              src={project.afterImage}
                              alt="After"
                              className="w-full h-40 object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} className="bg-purple-500/20 text-purple-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>

        {/* UI Challenge Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">UI Challenge</h2>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-6">
              Want to learn something new? Click the button below for a random UI tip from our team!
            </p>
            <Button
              onClick={generateRandomTip}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mb-6"
            >
              Get Random UI Tip ✨
            </Button>
            {randomTip && (
              <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg p-4 animate-fade-in">
                <p className="text-white font-medium">💡 Pro Tip:</p>
                <p className="text-gray-300 mt-2">{randomTip}</p>
              </div>
            )}
          </Card>
        </div>

        {/* Skills Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "React Development", level: 95, icon: "⚛️" },
              { skill: "UI/UX Design", level: 90, icon: "🎨" },
              { skill: "Accessibility", level: 85, icon: "♿" },
              { skill: "Performance", level: 88, icon: "⚡" }
            ].map((item) => (
              <Card key={item.skill} className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.skill}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
                <span className="text-purple-400 font-medium">{item.level}%</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Meme Section */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
              alt="Portfolio Meme"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-lg font-medium">
              "When you nail the UI but the backend crashes" 😅
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
