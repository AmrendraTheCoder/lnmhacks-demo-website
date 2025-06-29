"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    description: "For project inquiries and collaborations",
    value: "amendra.singh@example.com",
    action: "mailto:amendra.singh@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💻",
    title: "GitHub",
    description: "Check out my code and contributions",
    value: "@amrendravikram",
    action: "https://github.com/amrendravikram",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    description: "Professional networking and updates",
    value: "Amendra Vikram Singh",
    action: "https://www.linkedin.com/in/amrendra-vikram-singh-487ab9209/",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: "🐦",
    title: "X (Twitter)",
    description: "Follow my tech journey and updates",
    value: "@inprocess_avs",
    action: "https://x.com/inprocess_avs",
    color: "from-gray-800 to-black",
  },
  {
    icon: "📸",
    title: "Instagram",
    description: "Behind the scenes and personal updates",
    value: "@amrendravsinghh",
    action: "https://www.instagram.com/amrendravsinghh/",
    color: "from-pink-500 to-purple-600",
  },
];

const collaborationAreas = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "UI/UX Design Projects",
  "Business Website Development",
  "Web3 & Blockchain Projects",
  "Educational Technology",
  "Startup MVP Development",
  "Creative Content Projects",
];

const currentFocus = [
  "🤖 AI/ML Learning",
  "🏆 Competitive Programming",
  "🌐 Web3 Technologies",
  "📱 React Native Development",
  "🎨 Advanced UI/UX Design",
  "🚀 Startup Ideas",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open for collaborations, freelance projects, and innovative ideas.
            Let's connect and create something impactful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Get In Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${method.color} text-white flex items-center justify-center`}
                        >
                          {typeof method.icon === "string" ? (
                            <span className="text-2xl">{method.icon}</span>
                          ) : (
                            method.icon
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-black">
                            {method.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {method.description}
                          </p>
                          <a
                            href={method.action}
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  Currently Learning
                </CardTitle>
                <CardDescription>
                  Areas I'm actively exploring and developing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentFocus.map((focus, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {focus}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  Open for Collaboration
                </CardTitle>
                <CardDescription>
                  Project types I'm excited to work on
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {collaborationAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-black">
                  Start a Conversation
                </CardTitle>
                <CardDescription>
                  Have a project idea or want to collaborate? Let's discuss it!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Type
                    </label>
                    <Input
                      id="project"
                      name="project"
                      type="text"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="Web Development, Mobile App, etc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project idea..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800"
                    size="lg"
                  >
                    📧 Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Usually respond within 24 hours. Looking forward to hearing
                    from you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
