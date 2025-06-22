import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "HACKS 6.0",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            LNMHACKS 6.0 marked our expansion into emerging technologies with a
            special focus on AR/VR and cloud computing. The event saw incredible
            innovation in immersive technologies.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🎯 120+ Projects Built
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              👨‍💻 600+ Developers Participated
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🎪 Virtual + Hybrid Format
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📱 First Mobile-First Hackathon
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🎮 AR/VR Track Introduction
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-cyan-50 to-blue-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🥽</div>
                <h3 className="font-bold text-lg text-gray-800">AR/VR</h3>
                <p className="text-sm text-gray-600">Immersive Experiences</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-violet-50 to-purple-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">☁️</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Cloud Computing
                </h3>
                <p className="text-sm text-gray-600">Scalable Solutions</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-pink-50 to-rose-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <h3 className="font-bold text-lg text-gray-800">Mobile Apps</h3>
                <p className="text-sm text-gray-600">
                  iOS & Android Development
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-teal-50 to-cyan-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🎵</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Creative Tech
                </h3>
                <p className="text-sm text-gray-600">Art & Music Technology</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "HACKS 7.0",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our most successful hackathon yet! LNMHACKS 7.0 witnessed
            groundbreaking innovations across AI, Web3, and IoT domains with
            record-breaking participation from 800+ developers.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🏆 150+ Project Submissions
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              👥 800+ Participants from 50+ Colleges
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              💰 ₹5,00,000+ Prize Pool
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🌟 30+ Industry Mentors
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🚀 15+ Startup Ideas Incubated
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="font-bold text-lg text-gray-800">
                  AI Solutions
                </h3>
                <p className="text-sm text-gray-600">
                  Machine Learning & Deep Learning
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🌐</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Web3 & Blockchain
                </h3>
                <p className="text-sm text-gray-600">
                  DeFi, NFTs & Smart Contracts
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🌱</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Sustainability
                </h3>
                <p className="text-sm text-gray-600">
                  Climate & Environmental Tech
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-yellow-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🏥</div>
                <h3 className="font-bold text-lg text-gray-800">HealthTech</h3>
                <p className="text-sm text-gray-600">
                  Digital Health & MedTech
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "HACKS 8.0",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The biggest and most ambitious edition yet! LNMHACKS 8.0 brings
            together 1000+ developers for 48 hours of innovation, featuring
            cutting-edge AI, cybersecurity challenges, and breakthrough
            technologies.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🎯 Current Edition - 2024
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              👨‍💻 1000+ Expected Participants
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              💎 ₹10,00,000+ Prize Pool
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🔒 First CTF Integration
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🌟 50+ Industry Partners
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-green-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🧠</div>
                <h3 className="font-bold text-lg text-gray-800">Advanced AI</h3>
                <p className="text-sm text-gray-600">
                  LLMs, Computer Vision & NLP
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-red-50 to-rose-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Cybersecurity
                </h3>
                <p className="text-sm text-gray-600">
                  CTF Challenges & Security
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-sky-50 to-blue-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="font-bold text-lg text-gray-800">Space Tech</h3>
                <p className="text-sm text-gray-600">
                  Satellite & Aerospace Solutions
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-violet-50 to-purple-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Quantum Computing
                </h3>
                <p className="text-sm text-gray-600">
                  Next-Gen Computing Power
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="timeline" className="relative min-h-screen w-full pb-20 z-20 bg-white">
      <Timeline data={data} />
    </div>
  );
}
