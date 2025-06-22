"use client";

import { useEffect, useState } from "react";
import { Wifi, Battery, Bluetooth } from "lucide-react";

export function StatusBar() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentPage, setCurrentPage] = useState("Home");
  const [batteryLevel, setBatteryLevel] = useState(87);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Track current page based on scroll position
    const handleScroll = () => {
      const sections = [
        "home",
        "timeline",
        "features",
        "demo",
        "stats",
        "testimonials",
        "query",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentPage(
              sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
            );
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Simulate battery drain
    const interval = setInterval(() => {
      setBatteryLevel((prev) => {
        if (prev <= 15) return 87; // Reset when low
        return prev - 1;
      });
    }, 45000); // Change every 45 seconds

    return () => clearInterval(interval);
  }, []);

  const getBatteryColor = () => {
    if (batteryLevel > 50) return "text-green-400";
    if (batteryLevel > 20) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/30">
      <div className="flex items-center justify-between px-6 py-2 text-white text-sm">
        {/* Left side - Current page only */}
        <div className="flex items-center space-x-3">
          <span className="font-medium text-gray-300">LNMHACKS 8.0</span>
          <span className="text-gray-500">•</span>
          <span className="text-blue-400 font-medium">{currentPage}</span>
        </div>

        {/* Right side - Essential indicators */}
        <div className="flex items-center space-x-4 text-xs">
          {/* Battery */}
          <div className="flex items-center space-x-1">
            <Battery className={`h-4 w-4 ${getBatteryColor()}`} />
            <span className={`${getBatteryColor()} font-mono text-xs`}>
              {batteryLevel}%
            </span>
          </div>

          {/* Wifi */}
          <Wifi className="h-4 w-4 text-white" />

          {/* Bluetooth */}
          <Bluetooth className="h-3 w-3 text-blue-400" />

          {/* Time */}
          <div className="font-mono text-white">{currentTime}</div>
        </div>
      </div>
    </div>
  );
}
