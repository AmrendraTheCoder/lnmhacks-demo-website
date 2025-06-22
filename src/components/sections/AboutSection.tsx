"use client";
import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-spin"
            style={{
              animation: `spin ${10 + i * 5}s linear infinite`,
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
          >
            <div
              className={`absolute w-3 h-3 ${
                i === 0
                  ? "bg-blue-400"
                  : i === 1
                    ? "bg-purple-400"
                    : "bg-green-400"
              } rounded-full`}
              style={{
                top: "0%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            LNMHACKS
          </h2>
          <div className="text-2xl md:text-3xl font-light mb-4">
            <span className="text-blue-400">Innovation</span> •{" "}
            <span className="text-purple-400">Creation</span> •{" "}
            <span className="text-green-400">Excellence</span>
          </div>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            Where brilliant minds converge to build the future. LNMHACKS 8.0
            brings together the most creative developers, designers, and
            innovators for 48 hours of non-stop coding, learning, and building.
          </p>
          <p>
            Join us for an unforgettable experience featuring cutting-edge
            technology, expert mentorship, exciting challenges, and
            life-changing opportunities.
          </p>
        </div>

        {/* Interactive Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { number: "500+", label: "Participants" },
            { number: "48", label: "Hours" },
            { number: "₹5L+", label: "Prizes" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-purple-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Glowing Call-to-Action */}
        <div className="mt-16">
          <button className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Tech Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px"
            style={{
              top: `${10 + i * 12}%`,
              left: "0%",
              right: "0%",
              animation: `slide-right ${3 + i * 0.5}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
