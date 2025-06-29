"use client";

import { ChromeGrid } from "@/components/ui/chrome-grid";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    category: "Web Development",
    title: "Father's Business Website",
    description:
      "Built a professional website for Ganpathi Overseas consultancy, showcasing services and establishing strong online presence for the family business.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    impact: "Enhanced business credibility and online reach",
    emoji: "🌐",
  },
  {
    category: "Mobile Apps",
    title: "Campus Solutions",
    description:
      "Developed two mobile applications for LNMIIT community - Doubt Solver for academic help and Carpool for transportation sharing.",
    tech: ["React Native", "Expo", "Firebase"],
    impact: "Solving real campus problems with technology",
    emoji: "📱",
  },
  {
    category: "Education Tech",
    title: "Grader X Tool",
    description:
      "Created an automated grade calculation system because manual grade computation was too boring and time-consuming for students.",
    tech: ["React", "JavaScript", "Local Storage"],
    impact: "Simplified academic calculations for students",
    emoji: "📊",
  },
  {
    category: "Design & Creative",
    title: "Early Creative Journey",
    description:
      "Started with graphic design and video editing in Class 8, creating YouTube content and learning the fundamentals of digital creativity.",
    tech: ["Adobe Suite", "Video Editing", "UI/UX"],
    impact: "Foundation for technical and creative skills",
    emoji: "🎨",
  },
  {
    category: "Entrepreneurship",
    title: "Business Experiments",
    description:
      "Tried multiple ventures including book reselling, dropshipping, and YouTube channels. Each failure taught valuable lessons about business.",
    tech: ["E-commerce", "Social Media", "Logistics"],
    impact: "Real-world business and market understanding",
    emoji: "💼",
  },
  {
    category: "Leadership",
    title: "College Activities",
    description:
      "Active participation in Drama club 'Rendition', cultural fest organizing committee, and various college events while maintaining academic focus.",
    tech: ["Event Management", "Team Leadership", "Creative Arts"],
    impact: "Balanced technical and social development",
    emoji: "🎭",
  },
];

export default function ProjectHighlightsSection() {
  return (
    <section
      id="highlights"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* ChromeGrid Background Effect */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From creative experiments to technical solutions - each project
            represents a step in the journey of continuous learning and
            problem-solving.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{highlight.emoji}</div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {highlight.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {highlight.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {highlight.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {highlight.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-black/30 text-gray-300 border-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Impact */}
                <div className="text-xs text-gray-400 italic">
                  Impact: {highlight.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Learning Philosophy
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            "Every project is a learning opportunity. From the creative spark in
            Class 8 to building real-world solutions in college, each step has
            been driven by curiosity and the desire to solve problems. Whether
            it's code, design, or business - the journey continues with AI/ML,
            competitive programming, and new technologies."
          </p>
          <div className="mt-6 text-gray-400 text-sm">
            — Amendra Vikram Singh
          </div>
        </div>
      </div>
    </section>
  );
}
