"use client";

import { DIcons } from "dicons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Ganpathi Overseas",
    description:
      "Professional business website for father's overseas consultancy, featuring modern design and comprehensive service showcase.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://ganpathioverseas.com",
    status: "Live",
    category: "Business Website",
    icon: "🌐",
  },
  {
    title: "Grader X",
    description:
      "Grade calculation automation tool to eliminate manual grade computation, saving time for students and educators.",
    tech: ["React", "JavaScript", "CSS", "Local Storage"],
    link: "#",
    status: "Completed",
    category: "Educational Tool",
    icon: "📊",
  },
  {
    title: "Doubt Solver App",
    description:
      "Mobile application for students to get their academic doubts resolved quickly and efficiently.",
    tech: ["React Native", "Expo", "Firebase", "Node.js"],
    link: "#",
    status: "Development",
    category: "Mobile App",
    icon: "💡",
  },
  {
    title: "LNMIIT Carpool",
    description:
      "Campus ride-sharing solution connecting students for convenient and cost-effective transportation.",
    tech: ["React Native", "Expo", "Maps API", "Real-time DB"],
    link: "#",
    status: "Beta",
    category: "Mobile App",
    icon: "🚗",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing journey, projects, and skills with modern interactive design.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    link: "#",
    status: "Live",
    category: "Portfolio",
    icon: "👨‍💻",
  },
  {
    title: "Chromion Hackathon Project",
    description:
      "Competition-winning project developed during Chromion hackathon, showcasing innovation and technical skills.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    link: "#",
    status: "Completed",
    category: "Hackathon",
    icon: "🏆",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing full-stack development, mobile
            apps, and business solutions built with modern technologies and best
            practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{project.icon}</div>
                  <Badge
                    variant={
                      project.status === "Live" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-black">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                {project.link !== "#" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 View Project
                    </a>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled
                  >
                    🔒 Private Project
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">6+</div>
            <div className="text-gray-600">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">2</div>
            <div className="text-gray-600">Mobile Apps</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">4+</div>
            <div className="text-gray-600">Tech Stacks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">3</div>
            <div className="text-gray-600">Business Ventures</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
            asChild
          >
            <a href="#contact">💬 Let's Build Something Together</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
