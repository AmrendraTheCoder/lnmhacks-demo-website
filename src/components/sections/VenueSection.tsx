"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  MapPin,
  Navigation,
  Clock,
  Wifi,
  Users,
  Monitor,
  Shield,
  Coffee,
} from "lucide-react";

const VenueSection = () => {
  return (
    <section
      id="venue"
      className="relative py-12 sm:py-16 lg:py-20 bg-black text-white overflow-hidden font-mono"
    >
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-text {
          0% {
            text-shadow:
              0.02em 0 0 #ff0000,
              -0.02em -0.01em 0 #00ff00,
              0.01em 0.02em 0 #0000ff;
          }
          15% {
            text-shadow:
              0.02em 0 0 #ff0000,
              -0.02em -0.01em 0 #00ff00,
              0.01em 0.02em 0 #0000ff;
          }
          16% {
            text-shadow:
              -0.02em -0.01em 0 #ff0000,
              0.01em 0.01em 0 #00ff00,
              -0.02em -0.02em 0 #0000ff;
          }
          49% {
            text-shadow:
              -0.02em -0.01em 0 #ff0000,
              0.01em 0.01em 0 #00ff00,
              -0.02em -0.02em 0 #0000ff;
          }
          50% {
            text-shadow:
              0.01em 0.02em 0 #ff0000,
              0.02em 0 0 #00ff00,
              0 -0.02em 0 #0000ff;
          }
          99% {
            text-shadow:
              0.01em 0.02em 0 #ff0000,
              0.02em 0 0 #00ff00,
              0 -0.02em 0 #0000ff;
          }
          100% {
            text-shadow:
              -0.01em 0 0 #ff0000,
              -0.01em -0.01em 0 #00ff00,
              -0.01em -0.02em 0 #0000ff;
          }
        }

        .glitch-title {
          animation: glitch-text 4s infinite;
        }

        .glitch-element {
          animation: glitch 0.3s infinite;
        }

        .glitch-circuit {
          animation: glitch-circuit 1.5s infinite ease-in-out;
        }

        @keyframes glitch-circuit {
          0% {
            transform: translate(0) rotate(0deg);
            filter: hue-rotate(0deg) brightness(1)
              drop-shadow(0 0 10px rgba(20, 184, 166, 0.4));
          }
          10% {
            transform: translate(-1px, 2px) rotate(0.5deg);
            filter: hue-rotate(30deg) brightness(1.2)
              drop-shadow(0 0 15px rgba(0, 255, 0, 0.6));
          }
          20% {
            transform: translate(2px, -1px) rotate(-0.3deg);
            filter: hue-rotate(60deg) brightness(0.8)
              drop-shadow(0 0 20px rgba(255, 0, 100, 0.4));
          }
          30% {
            transform: translate(-2px, -2px) rotate(0.2deg);
            filter: hue-rotate(120deg) brightness(1.3)
              drop-shadow(0 0 12px rgba(0, 255, 255, 0.5));
          }
          40% {
            transform: translate(1px, 1px) rotate(-0.1deg);
            filter: hue-rotate(180deg) brightness(0.9)
              drop-shadow(0 0 25px rgba(255, 255, 0, 0.3));
          }
          50% {
            transform: translate(-1px, 2px) rotate(0.4deg);
            filter: hue-rotate(240deg) brightness(1.1)
              drop-shadow(0 0 18px rgba(100, 0, 255, 0.5));
          }
          60% {
            transform: translate(2px, -2px) rotate(-0.2deg);
            filter: hue-rotate(300deg) brightness(1.2)
              drop-shadow(0 0 22px rgba(255, 100, 0, 0.4));
          }
          70% {
            transform: translate(-2px, 1px) rotate(0.3deg);
            filter: hue-rotate(0deg) brightness(0.8)
              drop-shadow(0 0 15px rgba(0, 255, 0, 0.6));
          }
          80% {
            transform: translate(1px, -1px) rotate(-0.4deg);
            filter: hue-rotate(45deg) brightness(1.3)
              drop-shadow(0 0 10px rgba(20, 184, 166, 0.7));
          }
          90% {
            transform: translate(-1px, -2px) rotate(0.1deg);
            filter: hue-rotate(90deg) brightness(1.1)
              drop-shadow(0 0 20px rgba(255, 0, 150, 0.4));
          }
          100% {
            transform: translate(0) rotate(0deg);
            filter: hue-rotate(0deg) brightness(1)
              drop-shadow(0 0 10px rgba(20, 184, 166, 0.4));
          }
        }

        .scan-lines::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            transparent 50%,
            rgba(0, 255, 0, 0.03) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
        }
      `}</style>
      {/* Grid Background */}
      <div className="absolute inset-0">
        {/* Main grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Finer grid overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "25px 25px",
          }}
        />

        {/* Radial mask for center opacity and edge fading */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%)`,
          }}
        />

        {/* Additional edge fading */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      </div>

      {/* TOP LEFT CIRCUIT ELEMENT - Improved positioning and spacing */}
      <div className="absolute top-8 left-8 md:left-48 w-48 h-40 md:w-64 md:h-52 opacity-30 z-10">
        <Image
          src="/images/heelooo.png"
          alt="Circuit Element"
          fill
          className="object-contain"
        />
      </div>

      {/* LEFT SIDE CIRCUIT ELEMENTS - Clean Static */}
      <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 opacity-70 z-10">
        <div className="relative w-[61px] h-[298px] md:w-[123px] md:h-[597px]">
          <Image
            src="/images/side-glitch-venue.png"
            alt="Left Circuit"
            fill
            className="object-contain"
            style={{
              filter: "drop-shadow(0 0 10px rgba(20, 184, 166, 0.4))",
            }}
          />
        </div>
      </div>

      {/* RIGHT SIDE CIRCUIT ELEMENTS - Clean Static */}
      <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 opacity-70 z-10">
        <div className="relative w-[61px] h-[298px] md:w-[123px] md:h-[597px]">
          <Image
            src="/images/side-glitch-venue.png"
            alt="Right Circuit"
            fill
            className="object-contain"
            style={{
              filter: "drop-shadow(0 0 10px rgba(20, 184, 166, 0.4))",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Glitch Effect */}
        <div className="text-center mb-12 sm:mb-16 relative scan-lines">
          <div className="relative inline-block mb-6">
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[0.2em] glitch-title font-mono">
              [VENUE]
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-green-400/50 rounded-full" />
          </div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-mono tracking-wide">
            &gt; Experience innovation at LNMIIT&apos;s world-class campus
            <br />
            <span className="text-green-400">
              &gt; where technology meets excellence
            </span>
          </p>
        </div>

        {/* Main Content with Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Enhanced Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gray-900/30 border border-gray-600/40 rounded-3xl p-6 backdrop-blur-md overflow-hidden shadow-2xl shadow-teal-500/10">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://www.orchidfoundation.info/sites/default/files/2021-03/The%20LNM%20Institute%20of%20Information%20Technology%20-%20%5BLNMIIT%5D%2C%20Jaipur.png"
                  alt="LNMIIT Campus - Aerial View"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-green-500/5" />

                {/* Enhanced campus label */}
                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-gray-600/30">
                  <p className="text-sm font-bold text-white mb-1">
                    LNMIIT Campus
                  </p>
                  <p className="text-xs text-teal-400">Aerial View • Jaipur</p>
                </div>

                {/* Status indicator */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Info Section */}
          <div className="relative order-1 lg:order-2">
            <div className="space-y-8">
              {/* Tech Style Title */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight font-mono tracking-wide glitch-title">
                  THE LNM INSTITUTE OF
                  <br />
                  <span className="text-green-400">INFORMATION_TECHNOLOGY</span>
                </h3>
                <div className="flex items-center gap-3 mb-6 font-mono">
                  <p className="text-xl text-green-400 font-bold">[LNMIIT]</p>
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    EST_2003
                  </p>
                </div>
                <div className="w-24 h-0.5 bg-green-400 rounded-full mb-8 shadow-lg shadow-green-400/50" />
                <div className="w-20 h-0.5 bg-green-400/50 rounded-full mb-8" />
              </div>

              {/* Terminal-style Address */}
              <div className="bg-gray-900/60 border border-gray-700/60 rounded-lg p-6 backdrop-blur-sm shadow-xl shadow-black/20 font-mono">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-800 border border-green-400/30 rounded flex items-center justify-center glitch-element">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2 tracking-wide">
                      [CAMPUS_ADDRESS]
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                    </h4>
                    <div className="text-gray-400 leading-relaxed space-y-1 text-sm">
                      <p className="font-medium">
                        &gt; Rupa ki Nangal, Post-Sumel
                      </p>
                      <p>&gt; Via-Jamdoli, Jaipur</p>
                      <p>&gt; Rajasthan 302031, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                <div className="bg-gray-900/50 border border-gray-700/50 rounded p-5 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 group hover:border-green-400/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-800 border border-gray-600 rounded flex items-center justify-center group-hover:border-green-400/50 transition-all glitch-element">
                      <Navigation className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1 tracking-wide">
                        [AIRPORT_DIST]
                      </h5>
                      <p className="text-xs text-gray-500">&gt; 45min drive</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 border border-gray-700/50 rounded p-5 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 group hover:border-green-400/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-800 border border-gray-600 rounded flex items-center justify-center group-hover:border-green-400/50 transition-all glitch-element">
                      <Clock className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1 tracking-wide">
                        [RAILWAY_DIST]
                      </h5>
                      <p className="text-xs text-gray-500">&gt; 30min drive</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Style Button */}
              <div className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gray-900 border-2 border-green-400/50 text-green-400 hover:bg-green-400/10 hover:border-green-400 transition-all duration-300 font-mono tracking-wide glitch-element"
                  asChild
                >
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    [GET_DIRECTIONS]
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Features Grid */}
        <div className="mt-20 lg:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wide glitch-title">
              [CAMPUS_FACILITIES]
            </h3>
            <div className="w-16 h-0.5 bg-green-400 rounded-full mx-auto"></div>
            <div className="w-12 h-0.5 bg-green-400/50 rounded-full mx-auto mt-1"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 font-mono">
            {[
              {
                icon: <Wifi className="w-7 h-7" />,
                title: "[WIFI_CONN]",
                desc: "> fiber_network",
                color: "text-gray-300",
              },
              {
                icon: <Monitor className="w-7 h-7" />,
                title: "[HACK_ZONE]",
                desc: "> 48hr_coding_marathon",
                color: "text-green-400",
              },
              {
                icon: <Shield className="w-7 h-7" />,
                title: "[SECURITY]",
                desc: "> 24/7_active",
                color: "text-gray-300",
              },
              {
                icon: <Coffee className="w-7 h-7" />,
                title: "[FACILITIES]",
                desc: "> food_and_stay",
                color: "text-gray-300",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative bg-gray-900/60 border border-gray-700/60 rounded p-6 backdrop-blur-sm group hover:border-green-400/50 hover:bg-gray-800/60 transition-all duration-500 overflow-hidden hover:-translate-y-1 shadow-xl glitch-element"
              >
                <div className="relative text-center">
                  <div
                    className={`w-16 h-16 bg-gray-800 border border-gray-600 rounded mx-auto mb-4 flex items-center justify-center group-hover:border-green-400/50 transition-all duration-300`}
                  >
                    <div
                      className={`${feature.color} group-hover:text-green-400 transition-colors`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-3 group-hover:text-green-400 transition-colors tracking-wide">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="absolute top-2 right-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
