"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    label: "Years of Learning",
    value: 6,
    suffix: "+",
    description: "From Class 8 to Present",
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Projects Completed",
    value: 7,
    suffix: "+",
    description: "Web & Mobile Applications",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Business Ventures",
    value: 3,
    suffix: "",
    description: "Dropshipping, YouTube, Books",
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Drama Events",
    value: 4,
    suffix: "+",
    description: "Club 'Rendition' Participation",
    color: "from-orange-500 to-red-500",
  },
  {
    label: "Technologies",
    value: 15,
    suffix: "+",
    description: "Frameworks & Tools Learned",
    color: "from-indigo-500 to-purple-500",
  },
  {
    label: "Design Experience",
    value: 2,
    suffix: " yrs",
    description: "UI/UX & Graphic Design",
    color: "from-pink-500 to-rose-500",
  },
];

const achievements = [
  "🎓 LNMIIT Computer Science Student",
  "💻 Full-Stack Developer",
  "📱 Mobile App Developer",
  "🎨 UI/UX Designer",
  "🚀 Entrepreneur",
  "🎭 Drama Club Member",
  "🏆 Hackathon Participant",
  "🌐 Web3 Enthusiast",
];

export function StatsDemo() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            if (newStats[index] < stat.value) {
              newStats[index] = Math.min(
                newStats[index] + Math.ceil(stat.value / 30),
                stat.value
              );
            }
            return newStats;
          });
        }, 50);

        setTimeout(() => clearInterval(interval), 2000);
      }, index * 200);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <section
      id="achievements"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Journey in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From creative experiments to technical expertise - tracking growth,
            learning, and achievements across multiple domains.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`}
              ></div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-black text-center mb-8">
            Current Roles & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map((achievement, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-4 py-2 bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                {achievement}
              </Badge>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="text-2xl mb-2">🎨</div>
            <div className="font-semibold text-gray-800">2018-2019</div>
            <div className="text-sm text-gray-600">Creative Beginning</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl">
            <div className="text-2xl mb-2">📚</div>
            <div className="font-semibold text-gray-800">2019-2023</div>
            <div className="text-sm text-gray-600">JEE Journey</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="text-2xl mb-2">💼</div>
            <div className="font-semibold text-gray-800">2022-2023</div>
            <div className="text-sm text-gray-600">Business Experiments</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold text-gray-800">2023-Present</div>
            <div className="text-sm text-gray-600">College & Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
