"use client";

import React from "react";
import { motion } from "framer-motion";
import { CommitsGrid } from "@/components/ui/commits-grid";

import { GradientButton } from "@/components/ui/gradient-button";
import { LampContainer } from "@/components/ui/lamp";

const ctfTexts = ["CTF", "HACK", "FLAG", "PWNS", "CRYPTO", "SOLVE"];

export default function CTFSection() {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % ctfTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ctf" className="relative">
      <LampContainer className="min-h-screen">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          {/* Badge */}
          {/* <Badge
            variant="secondary"
            className="mb-6 bg-green-900/30 text-green-400 border-green-700"
          >
            CTF Competition
          </Badge> */}

          {/* Main Title */}
          <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-8">
            Capture The Flag
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Test your cybersecurity skills in our exciting CTF event. Solve
            challenges, find flags, and compete with the best hackers.
          </p>

          {/* Commits Grid Animation */}
          <div className="mb-12">
            <CommitsGrid text={ctfTexts[currentTextIndex]} />
          </div>

          {/* Call to Action */}
          <GradientButton
            variant="green"
            className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore CTF Challenges
          </GradientButton>
        </motion.div>
      </LampContainer>
    </section>
  );
}
