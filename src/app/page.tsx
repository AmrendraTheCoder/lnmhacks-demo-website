"use client";

import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import ProjectsSection from "@/components/sections/SponsorsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

import { StatsDemo } from "@/components/sections/StatsDemo";
import ProjectHighlightsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/CTFSection";
import AboutSection from "@/components/sections/QuerySection";
import { FAQDemo } from "@/components/ui/faq-section";
import { Footer } from "@/components/sections/Footer";
// import RainingLettersSection from "@/components/sections/RainingLettersSection";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { LoadingScreen } from "@/components/ui/loading-screen";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <main className="bg-white">
        <SplashCursor />
        <HeroSection />
        <TimelineSection />
        <ProjectsSection />
        <FeaturesSection />
        <AboutSection />
        {/* <FeatureDemo /> */}
        <StatsDemo />
        <ProjectHighlightsSection />
        <ContactSection />
        <FAQDemo />
        <Footer />
        {/* <RainingLettersSection /> */}
        <Navigation />
      </main>
    </>
  );
}
