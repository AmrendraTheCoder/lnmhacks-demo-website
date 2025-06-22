"use client";

import { useState, useEffect } from "react";
import MacOSDock from "./ui/mac-os-dock";

// Sample app data with actual macOS-style icons
const sampleApps = [
  {
    id: "home",
    name: "Home",
    icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024",
  },
  {
    id: "timeline",
    name: "Timeline",
    icon: "https://cdn.jim-nielsen.com/macos/1024/calendar-2021-04-29.png?rf=1024",
  },
  {
    id: "features",
    name: "Features",
    icon: "https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024",
  },
  {
    id: "demo",
    name: "Demo",
    icon: "https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024",
  },
  {
    id: "stats",
    name: "Stats",
    icon: "https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024",
  },
  {
    id: "testimonials",
    name: "Testimonials",
    icon: "https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024",
  },
  {
    id: "query",
    name: "Contact",
    icon: "https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024",
  },
  {
    id: "footer",
    name: "Footer",
    icon: "https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024",
  },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openApps, setOpenApps] = useState<string[]>(["home"]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show dock based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = [
        "home",
        "timeline",
        "features",
        "demo",
        "stats",
        "testimonials",
        "query",
        "footer",
      ];
      const scrollPosition = currentScrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            // Update open apps to show current section
            setOpenApps((prev) =>
              prev.includes(sectionId)
                ? prev
                : [...prev.filter((id) => id !== activeSection), sectionId]
            );
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, activeSection]);

  const handleAppClick = (appId: string) => {
    console.log("App clicked:", appId);

    // Scroll to section
    const element = document.getElementById(appId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Toggle app in openApps array
    setOpenApps((prev) =>
      prev.includes(appId)
        ? prev.filter((id) => id !== appId)
        : [...prev, appId]
    );
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <MacOSDock
        apps={sampleApps}
        onAppClick={handleAppClick}
        openApps={openApps}
      />
    </div>
  );
}
