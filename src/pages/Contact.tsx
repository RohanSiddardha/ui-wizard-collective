
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaperPlane, setShowPaperPlane] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPaperPlane(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent! ✈️",
      description: "We'll get back to you soon. Thanks for reaching out!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setTimeout(() => setShowPaperPlane(false), 3000);
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#", color: "from-blue-500 to-blue-600" },
    { name: "GitHub", icon: "🐙", url: "#", color: "from-gray-500 to-gray-600" },
    { name: "Twitter", icon: "🐦", url: "#", color: "from-blue-400 to-blue-500" },
    { name: "Dribbble", icon: "🏀", url: "#", color: "from-pink-500 to-pink-600" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Paper Plane Animation */}
        {showPaperPlane && (
          <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
            <div className="text-6xl animate-bounce">✈️</div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's <span className="text-purple-400">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your UI vision to life? Drop us a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">🔄</span>
                    Sending...
                  </span>
                ) : (
                  "Send Message ✈️"
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Connect with us</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`bg-gradient-to-r ${social.color} p-4 rounded-lg text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="font-medium">{social.name}</div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Team Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Our Team</h2>
              <div className="space-y-4">
                {[
                  { name: "Rohan Siddardha", role: "UI Developer", email: "rohan@uitrio.dev" },
                  { name: "Ashrith Reddy", role: "UI Developer", email: "ashrith@uitrio.dev" },
                  { name: "Mahesh Yadav", role: "UI Developer", email: "mahesh@uitrio.dev" }
                ].map((member) => (
                  <div key={member.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium">{member.name}</div>
                      <div className="text-purple-400 text-sm">{member.role}</div>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      📧
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            {/* Fun Stats */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">99%</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">24h</div>
                  <div className="text-gray-300 text-sm">Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">3</div>
                  <div className="text-gray-300 text-sm">UI Experts</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Meme Section */}
        <div className="text-center mt-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 max-w-2xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
              alt="Contact Meme"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-lg font-medium">
              "When you love our UI but don't hit us up" 😢
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
