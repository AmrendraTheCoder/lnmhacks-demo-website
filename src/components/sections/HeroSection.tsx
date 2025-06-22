"use client";

// this is a client component
import { useEffect } from "react";
import Link from "next/link";
import { DIcons } from "dicons";
import { Button } from "@/components/ui/button";
import { StatusBar } from "@/components/ui/status-bar";
import { Globe } from "@/components/ui/globe";

export default function HeroSection() {
  // Remove the canvas animation
  useEffect(() => {
    // Canvas animation removed
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-white text-black overflow-visible">
      <StatusBar />
      
      {/* Globe Background - positioned to show half earth effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0">
        <Globe className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] opacity-30" />
      </div>
      
      <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20 relative z-10">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border border-gray-300 bg-white px-3 py-1 text-xs leading-6 text-gray-600">
            <DIcons.Shapes className="h-5 p-1" /> LNMHACKS 8.0 Registration
            <a
              href="#about"
              rel="noreferrer"
              className="hover:text-black ml-1 flex items-center font-semibold"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              Opens Soon{" "}
              <span aria-hidden="true">
                <DIcons.ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mb-10 mt-4 md:mt-6">
          <div className="px-2">
            <div className="relative mx-auto h-full max-w-7xl border border-black p-6 md:px-12 md:py-20 bg-white/95 backdrop-blur-sm">
              <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <DIcons.Plus
                  strokeWidth={4}
                  className="absolute -left-5 -top-5 h-10 w-10 text-black"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="absolute -bottom-5 -left-5 h-10 w-10 text-black"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="absolute -right-5 -top-5 h-10 w-10 text-black"
                />
                <DIcons.Plus
                  strokeWidth={4}
                  className="absolute -bottom-5 -right-5 h-10 w-10 text-black"
                />
                <span className="text-black">
                  LNMHACKS <span className="text-gray-600">8.0</span>
                </span>
              </h1>
              <div className="flex items-center justify-center gap-1 mt-4">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
                </span>
                <p className="text-xs text-black">Registration Opens Soon</p>
              </div>
            </div>
          </div>

          <div className="relative inline-block mt-6">
            <div className="relative text-black font-bold text-base sm:text-lg md:text-xl tracking-wider">
              ENTER THE ARENA
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-0.5 bg-black"></div>
          </div>

          <h2 className="mt-8 text-xl md:text-2xl text-gray-700">
            Join the world's most competitive hackathon
          </h2>

          <p className="md:text-md mx-auto mb-16 mt-4 max-w-2xl px-6 text-sm text-gray-600 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            Prepare for an innovation extravaganza at LNM Hacks! Dive into the
            72-hour excitement of LNMHacks 8.0, where coding novices and
            seasoned pros come together for a transformative journey of building
            breakthrough solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#about">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto bg-black text-white hover:bg-gray-800"
              >
                Join the Battle
              </Button>
            </Link>
            <Link href="https://discord.gg/lnmhacks" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-black text-black hover:bg-gray-100"
              >
                Join Discord
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Canvas removed - no more cursor animation */}
    </section>
  );
}
