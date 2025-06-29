"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const currentLearning = [
  "AI/ML Algorithms",
  "Competitive Programming",
  "Advanced React Patterns",
  "Blockchain Development",
  "System Design",
  "Data Structures",
];

const futureGoals = [
  "🚀 Build a successful SaaS product",
  "🏆 Competitive programming excellence",
  "🤖 AI/ML expertise development",
  "💼 Launch tech startup",
  "🌐 Contribute to open source",
  "📚 Continuous learning mindset",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curious mind with entrepreneurial spirit, always learning and
            building solutions that matter. Here's what drives me and where I'm
            headed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Story */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-black">My Story</CardTitle>
              <CardDescription>
                The journey that shaped who I am today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Started with creative pursuits in Class 8 - graphic design,
                video editing, and YouTube content creation. The JEE journey
                taught me resilience, even when chemistry didn't go as planned.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Experimented with multiple businesses - from book reselling to
                dropshipping, learning hard lessons about markets and logistics.
                Each "failure" was actually a stepping stone to understanding
                business and technology better.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Now at LNMIIT, I'm combining technical skills with
                entrepreneurial mindset, building projects that solve real
                problems while staying curious about emerging technologies like
                AI/ML and Web3.
              </p>
            </CardContent>
          </Card>

          {/* Current Focus */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  Currently Learning
                </CardTitle>
                <CardDescription>
                  Technologies and concepts I'm actively exploring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {currentLearning.map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm p-2 justify-center"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  Future Goals
                </CardTitle>
                <CardDescription>
                  Where I see myself heading in the coming years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {futureGoals.map((goal, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-lg">{goal.split(" ")[0]}</span>
                      <span className="text-gray-700">
                        {goal.substring(goal.indexOf(" ") + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">My Approach</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            "Technology should solve real problems. Whether it's building my
            father's website, creating tools for fellow students, or
            experimenting with new business models - I believe in learning by
            doing, failing fast, and always staying curious about what's
            possible."
          </p>
        </div>
      </div>
    </section>
  );
}
