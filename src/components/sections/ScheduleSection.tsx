"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface ScheduleEvent {
  time: string;
  event: string;
  description?: string;
  type?: "main" | "break" | "workshop";
}

interface DaySchedule {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "DAY-1",
    date: "March 15, 2024",
    events: [
      {
        time: "9:00",
        event: "REGISTRATION START",
        description: "Check-in and welcome kit distribution",
        type: "main",
      },
      {
        time: "9:45",
        event: "OPENING CEREMONY",
        description: "Keynote and hackathon kickoff",
        type: "main",
      },
      {
        time: "11:00",
        event: "IDEA SKETCHING",
        description: "Team formation and brainstorming",
        type: "workshop",
      },
      {
        time: "13:20",
        event: "LUNCH",
        description: "Networking and team building",
        type: "break",
      },
      {
        time: "17:20",
        event: "PROGRESS TRACKING",
        description: "Mentor check-ins",
        type: "main",
      },
      {
        time: "21:00",
        event: "DINNER",
        description: "Food and refreshments",
        type: "break",
      },
    ],
  },
  {
    day: "DAY-2",
    date: "March 16, 2024",
    events: [
      {
        time: "8:00",
        event: "BREAKFAST",
        description: "Start your day right",
        type: "break",
      },
      {
        time: "9:00",
        event: "DEVELOPMENT",
        description: "Core development time",
        type: "main",
      },
      {
        time: "12:00",
        event: "WORKSHOP 1",
        description: "Advanced blockchain development",
        type: "workshop",
      },
      {
        time: "13:30",
        event: "LUNCH",
        description: "Midday break",
        type: "break",
      },
      {
        time: "15:00",
        event: "MENTOR SESSIONS",
        description: "1-on-1 guidance",
        type: "main",
      },
      {
        time: "18:00",
        event: "PROGRESS CHECK",
        description: "Milestone evaluation",
        type: "main",
      },
      {
        time: "20:00",
        event: "DINNER",
        description: "Evening meal",
        type: "break",
      },
    ],
  },
  {
    day: "DAY-3",
    date: "March 17, 2024",
    events: [
      {
        time: "8:00",
        event: "BREAKFAST",
        description: "Final day fuel",
        type: "break",
      },
      {
        time: "9:00",
        event: "FINAL SPRINT",
        description: "Last-minute development",
        type: "main",
      },
      {
        time: "12:00",
        event: "SUBMISSION",
        description: "Project submission deadline",
        type: "main",
      },
      {
        time: "13:00",
        event: "LUNCH",
        description: "Pre-presentation meal",
        type: "break",
      },
      {
        time: "14:30",
        event: "PRESENTATIONS",
        description: "Team project demos",
        type: "main",
      },
      {
        time: "17:00",
        event: "JUDGING",
        description: "Final evaluation",
        type: "main",
      },
      {
        time: "18:30",
        event: "CLOSING CEREMONY",
        description: "Awards and closing",
        type: "main",
      },
    ],
  },
];

// Particle component for background effect
const Particle = ({ delay = 0 }: { delay?: number }) => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    // Update dimensions only on the client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-[#00ff94] rounded-full opacity-30"
      initial={{
        x: Math.random() * dimensions.width,
        y: dimensions.height + 10,
        opacity: 0,
      }}
      animate={{
        y: -10,
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2 + 1,
        ease: "linear",
      }}
    />
  );
};

// Timeline progress indicator
const TimelineProgress = ({
  activeDay,
  totalDays,
}: {
  activeDay: number;
  totalDays: number;
}) => {
  const progress = ((activeDay + 1) / totalDays) * 100;

  return (
    <div className="relative w-full h-1 bg-[#2a2a35] rounded-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00ff94] to-[#00b3ff] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
    </div>
  );
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <>
      <motion.section
        ref={sectionRef}
        id="schedule"
        className="relative py-16 sm:py-20 lg:py-24 bg-[#0a0a0f] text-white overflow-hidden"
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        {/* Particle background */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <Particle key={i} delay={i * 0.2} />
            ))}
          </div>
        )}

        {/* Enhanced Grid Background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: prefersReducedMotion ? 0 : parallaxY }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 148, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 148, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 179, 255, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 179, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "25px 25px",
            }}
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/50 via-transparent to-[#0a0a0f]/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with gradient text */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-6">
              <motion.h2
                className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00ff94] to-[#00b3ff] bg-clip-text text-transparent"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.05,
                  textShadow: "0 0 20px rgba(0, 255, 148, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                SCHEDULE
              </motion.h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#00ff94] to-[#00b3ff] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-[#e1e1e1] max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Three days of intense coding, learning, and innovation
            </motion.p>
          </motion.div>

          {/* Timeline Progress */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <TimelineProgress
              activeDay={activeDay}
              totalDays={scheduleData.length}
            />
          </motion.div>

          {/* Enhanced Schedule Interface */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-[#141419]/40 border-2 border-[#00ff94]/30 rounded-2xl p-1 backdrop-blur-sm">
              <div className="relative bg-[#0a0a0f]/60 rounded-xl p-6 sm:p-8">
                {/* Badge */}
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                >
                  <div className="bg-gradient-to-r from-[#00ff94]/20 to-[#00b3ff]/20 border border-[#00ff94]/50 rounded-full px-6 py-2 backdrop-blur-sm">
                    <span
                      className="text-[#00ff94] text-sm font-medium tracking-wider"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      HACKS GOT IT COVERED
                    </span>
                  </div>
                </motion.div>

                {/* Main Schedule Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Left Sidebar - Day Selection */}
                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      {scheduleData.map((schedule, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setActiveDay(index)}
                          className={`
                            relative w-full p-6 rounded-xl transition-all duration-300 text-left group overflow-hidden
                            ${
                              activeDay === index
                                ? "bg-gradient-to-r from-[#00ff94]/30 to-[#00b3ff]/30 border-2 border-[#00ff94]/50 shadow-lg shadow-[#00ff94]/20"
                                : "bg-[#141419]/30 border-2 border-[#2a2a35]/30 hover:border-[#00ff94]/30 hover:bg-[#141419]/50"
                            }
                          `}
                          whileHover={{
                            scale: prefersReducedMotion ? 1 : 1.02,
                            boxShadow:
                              activeDay === index
                                ? "0 0 30px rgba(0, 255, 148, 0.3)"
                                : "0 0 20px rgba(0, 255, 148, 0.1)",
                          }}
                          whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100,
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="relative">
                            <motion.h3
                              className={`text-2xl sm:text-3xl font-black mb-2 transition-colors ${
                                activeDay === index
                                  ? "text-[#00ff94]"
                                  : "text-[#e1e1e1] group-hover:text-white"
                              }`}
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                textShadow:
                                  activeDay === index
                                    ? "0 0 10px rgba(0, 255, 148, 0.5)"
                                    : "none",
                              }}
                            >
                              {schedule.day}
                            </motion.h3>
                            <p
                              className={`text-sm transition-colors ${
                                activeDay === index
                                  ? "text-[#00b3ff]"
                                  : "text-[#e1e1e1]/60 group-hover:text-[#e1e1e1]/80"
                              }`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {schedule.date}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Right Panel - Schedule Details */}
                  <div className="lg:col-span-8">
                    <div className="relative bg-gradient-to-br from-[#141419]/40 to-[#0a0a0f]/40 border border-[#2a2a35]/50 rounded-xl p-6 sm:p-8 h-full overflow-hidden">
                      <div className="relative">
                        {/* Active Day Header */}
                        <motion.div
                          className="mb-8"
                          key={activeDay}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3
                            className="text-2xl sm:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-[#00ff94] to-[#00b3ff] bg-clip-text text-transparent"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {scheduleData[activeDay].day} SCHEDULE
                          </h3>
                          <motion.div
                            className="w-20 h-1 bg-gradient-to-r from-[#00ff94] to-[#00b3ff] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          />
                        </motion.div>

                        {/* Events List */}
                        <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                          <AnimatePresence mode="wait">
                            {scheduleData[activeDay].events.map(
                              (event, eventIndex) => (
                                <motion.div
                                  key={`${activeDay}-${eventIndex}`}
                                  className="group relative bg-[#141419]/20 border border-[#2a2a35]/30 rounded-lg p-4 hover:bg-[#141419]/40 hover:border-[#00ff94]/30 transition-all duration-300 overflow-hidden cursor-pointer"
                                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: eventIndex * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                  }}
                                  whileHover={{
                                    scale: prefersReducedMotion ? 1 : 1.02,
                                    boxShadow:
                                      "0 0 20px rgba(0, 255, 148, 0.1)",
                                  }}
                                  onClick={() =>
                                    setExpandedEvent(
                                      expandedEvent === eventIndex
                                        ? null
                                        : eventIndex
                                    )
                                  }
                                >
                                  <div className="relative flex items-center justify-between">
                                    <div className="flex items-center space-x-6">
                                      <motion.div
                                        className={`
                                        border px-4 py-2 rounded-lg text-lg font-bold min-w-[80px] text-center
                                        ${
                                          event.type === "main"
                                            ? "bg-gradient-to-r from-[#00ff94]/20 to-[#00b3ff]/20 border-[#00ff94]/30 text-[#00ff94]"
                                            : event.type === "workshop"
                                              ? "bg-gradient-to-r from-[#00b3ff]/20 to-purple-500/20 border-[#00b3ff]/30 text-[#00b3ff]"
                                              : "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30 text-orange-400"
                                        }
                                      `}
                                        style={{
                                          fontFamily:
                                            "'Space Grotesk', sans-serif",
                                        }}
                                        whileHover={{
                                          filter: prefersReducedMotion
                                            ? "none"
                                            : "brightness(1.2)",
                                          textShadow: "0 0 10px currentColor",
                                        }}
                                      >
                                        {event.time}
                                      </motion.div>
                                      <div>
                                        <motion.h4
                                          className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#00ff94] transition-colors"
                                          style={{
                                            fontFamily:
                                              "'Space Grotesk', sans-serif",
                                          }}
                                          whileHover={{
                                            textShadow: prefersReducedMotion
                                              ? "none"
                                              : "0 0 8px rgba(0, 255, 148, 0.6)",
                                          }}
                                        >
                                          {event.event}
                                        </motion.h4>
                                        <AnimatePresence>
                                          {event.description &&
                                            (expandedEvent === eventIndex ||
                                              expandedEvent === null) && (
                                              <motion.p
                                                className="text-[#e1e1e1]/80 text-sm mt-1 group-hover:text-[#e1e1e1] transition-colors"
                                                style={{
                                                  fontFamily:
                                                    "'Inter', sans-serif",
                                                }}
                                                initial={{
                                                  opacity: 0,
                                                  height: 0,
                                                }}
                                                animate={{
                                                  opacity: 1,
                                                  height: "auto",
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                              >
                                                {event.description}
                                              </motion.p>
                                            )}
                                        </AnimatePresence>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(42, 42, 53, 0.3);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0, 255, 148, 0.5);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 255, 148, 0.7);
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </motion.section>
    </>
  );
};

export default ScheduleSection;
