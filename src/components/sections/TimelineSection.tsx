import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "The Creative Beginning",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Class 8-9 (2018-2019): Where it all started. My first dive into the
            digital world through graphic design, UI/UX, and content creation.
            Little did I know this would shape my entire career path.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🎨 Started Graphic Design & UI/UX
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📹 Created YouTube Content (Anime & PUBG Edits)
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              ✨ First Taste of Digital Creativity
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🎮 Gaming Content Creation
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              💡 Spark of Entrepreneurial Interest
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-bold text-lg text-gray-800">Design</h3>
                <p className="text-sm text-gray-600">UI/UX & Graphics</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-red-50 to-orange-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📹</div>
                <h3 className="font-bold text-lg text-gray-800">Content</h3>
                <p className="text-sm text-gray-600">Video Editing & YouTube</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🎮</div>
                <h3 className="font-bold text-lg text-gray-800">Gaming</h3>
                <p className="text-sm text-gray-600">PUBG & Anime Content</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">💭</div>
                <h3 className="font-bold text-lg text-gray-800">Vision</h3>
                <p className="text-sm text-gray-600">
                  Early Entrepreneurial Dreams
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The JEE Journey",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Class 9-12 + Drop Year (2019-2023): Four years at Resonance coaching
            for JEE preparation. Despite not qualifying due to chemistry, this
            period taught me persistence, resilience, and sparked my deeper
            interest in web development and entrepreneurship.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📚 4 Years of Intensive JEE Preparation
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🔬 Struggled with Chemistry Cutoffs
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              💻 Discovered Web Development Passion
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              💡 Growing Curiosity for Tech Projects
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🎯 Money-focused Project Mindset Developed
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-yellow-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📖</div>
                <h3 className="font-bold text-lg text-gray-800">Studies</h3>
                <p className="text-sm text-gray-600">
                  JEE Preparation at Resonance
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-red-50 to-pink-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">⚗️</div>
                <h3 className="font-bold text-lg text-gray-800">Challenge</h3>
                <p className="text-sm text-gray-600">Chemistry Struggles</p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <h3 className="font-bold text-lg text-gray-800">Discovery</h3>
                <p className="text-sm text-gray-600">
                  Web Development Interest
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-teal-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="font-bold text-lg text-gray-800">Growth</h3>
                <p className="text-sm text-gray-600">
                  Resilience & Persistence
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Entrepreneurial Experiments",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Class 12 - College (2022-2023): The experimental phase. Multiple
            business ventures, YouTube channels, and hard-learned lessons about
            logistics, copyright, and market realities. Each failure taught
            valuable lessons that shaped my entrepreneurial mindset.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📚 Book Reselling Business with Mayank Patel
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📦 Dropshipping Venture with Quickink
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📺 3-4 YouTube Channels with Good Reach
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              ⚖️ Copyright Issues & Channel Takedowns
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🎯 Agency Work - Infographic Posts
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📚</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Book Business
                </h3>
                <p className="text-sm text-gray-600">
                  Reselling & Logistics Learning
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-violet-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📦</div>
                <h3 className="font-bold text-lg text-gray-800">
                  Dropshipping
                </h3>
                <p className="text-sm text-gray-600">
                  E-commerce Experimentation
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-red-50 to-rose-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">📺</div>
                <h3 className="font-bold text-lg text-gray-800">YouTube</h3>
                <p className="text-sm text-gray-600">
                  Content Creation & Growth
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-orange-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">💡</div>
                <h3 className="font-bold text-lg text-gray-800">Lessons</h3>
                <p className="text-sm text-gray-600">
                  Hard-learned Business Insights
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "College & Breakthrough",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            LNMIIT Era (2023-Present): The transformation period. Deep dive into
            Web3, building 6-7 projects including father's website, mobile apps,
            and competition wins. Active in drama club, cultural events, and
            expanding into AI/ML and competitive programming.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🏫 Joined LNMIIT - Deep Web3 Learning
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🚀 6-7 Projects Built in Summer Term
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              🌐 Father's Website (ganpathioverseas.com)
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              📱 Mobile Apps: Doubt Solver & Carpool
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              🎭 Drama Club 'Rendition' & Cultural Events
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <h3 className="font-bold text-lg text-gray-800">Projects</h3>
                <p className="text-sm text-gray-600">
                  6+ Web & Mobile Applications
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-teal-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🌐</div>
                <h3 className="font-bold text-lg text-gray-800">Web3</h3>
                <p className="text-sm text-gray-600">
                  Blockchain & DeFi Learning
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🎭</div>
                <h3 className="font-bold text-lg text-gray-800">Drama</h3>
                <p className="text-sm text-gray-600">
                  Club Activities & Leadership
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-yellow-100 p-8 h-40 md:h-60 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-2">🧠</div>
                <h3 className="font-bold text-lg text-gray-800">AI/ML</h3>
                <p className="text-sm text-gray-600">Current Learning Focus</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="journey"
      className="relative bg-black py-20 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From creative beginnings to tech entrepreneurship - a story of
            curiosity, persistence, and continuous learning through every
            challenge and opportunity.
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
}
