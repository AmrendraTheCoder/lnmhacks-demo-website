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
    name: "Code & Build",
    description:
      "72 hours of non-stop coding to build your dream project from scratch.",
    href: "#register",
    cta: "Join Now",
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
    name: "Team Formation",
    description: "Find your perfect co-founders and build your dream team.",
    href: "#discord",
    cta: "Find Team",
    background: (
      <div className="absolute -right-8 -top-8 opacity-50">
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GearIcon,
    name: "Tech Workshops",
    description: "Learn cutting-edge technologies from industry experts.",
    href: "#schedule",
    cta: "View Schedule",
    background: (
      <div className="absolute -right-6 -top-6 opacity-40">
        <div
          className="w-16 h-16 border-2 border-black rounded-full animate-spin"
          style={{ animationDuration: "3s" }}
        >
          <div className="w-4 h-4 bg-black rounded-full m-6"></div>
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: RocketIcon,
    name: "Launch Your Startup",
    description: "Turn your hack into the next big thing with mentorship.",
    href: "#mentors",
    cta: "Meet Mentors",
    background: (
      <div className="absolute -right-4 -top-4 opacity-60">
        <div className="w-12 h-16 bg-gradient-to-t from-black to-gray-400 rounded-t-full transform rotate-12">
          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2"></div>
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LightningBoltIcon,
    name: "Win Big Prizes",
    description:
      "Compete for ₹50L+ in prizes, internships, and exclusive opportunities.",
    href: "#prizes",
    cta: "See Prizes",
    background: (
      <div className="absolute -right-8 -top-8 opacity-50">
        <div className="text-6xl">🏆</div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Join LNMHACKS 8.0?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate hackathon journey with world-class
            facilities, mentorship, and opportunities to launch your tech
            career.
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
            <span>Ready to hack?</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
