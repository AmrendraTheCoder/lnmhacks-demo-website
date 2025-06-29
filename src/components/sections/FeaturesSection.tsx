"use client";

import {
  CodeIcon,
  RocketIcon,
  PersonIcon,
  GearIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GradientButton } from "@/components/ui/gradient-button";

const features = [
  {
    Icon: CodeIcon,
    name: "Full-Stack Development",
    description:
      "Building end-to-end web applications with modern tech stack and best practices.",
    href: "#projects",
    cta: "View Projects",
    background: (
      <div className="absolute -right-10 -top-10 opacity-60">
        <div className="w-32 h-32 border border-gray-300 rounded-lg transform rotate-12 bg-gradient-to-br from-white to-gray-100">
          <div className="p-4 space-y-2">
            <div className="h-2 bg-black rounded w-3/4"></div>
            <div className="h-2 bg-gray-400 rounded w-1/2"></div>
            <div className="h-2 bg-black rounded w-5/6"></div>
            <div className="h-2 bg-gray-400 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: PersonIcon,
    name: "Design & Creative",
    description:
      "UI/UX design, video editing, and visual storytelling since Class 8.",
    href: "#skills",
    cta: "See Designs",
    background: (
      <div className="absolute -right-8 -top-8 opacity-50">
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full"></div>
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GearIcon,
    name: "Mobile Development",
    description:
      "Native app development with Expo - Doubt Solver & LNMIIT Carpool apps.",
    href: "#projects",
    cta: "View Apps",
    background: (
      <div className="absolute -right-6 -top-6 opacity-40">
        <div className="w-12 h-20 bg-gradient-to-b from-black to-gray-600 rounded-xl border-2 border-gray-300">
          <div className="w-8 h-1 bg-gray-400 rounded-full mx-auto mt-2"></div>
          <div className="w-6 h-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded mx-auto mt-2"></div>
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: RocketIcon,
    name: "Entrepreneurial Mindset",
    description:
      "From dropshipping to SaaS - always exploring business opportunities.",
    href: "#journey",
    cta: "Read Story",
    background: (
      <div className="absolute -right-4 -top-4 opacity-60">
        <div className="w-12 h-16 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-t-full transform rotate-12">
          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2"></div>
          <div className="w-1 h-8 bg-gradient-to-b from-orange-300 to-red-400 mx-auto"></div>
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LightningBoltIcon,
    name: "Web3 & Innovation",
    description:
      "Deep diving into blockchain, AI/ML, and competitive programming for future tech.",
    href: "#skills",
    cta: "Explore Tech",
    background: (
      <div className="absolute -right-8 -top-8 opacity-50">
        <div className="text-6xl animate-pulse">⚡</div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function FeaturesSection() {
  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set built through years of learning,
            experimenting, and creating. From design to development, business to
            innovation.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <GradientButton className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold">
            <span>Let's collaborate!</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
