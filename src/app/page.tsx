"use client";

import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FeatureDemo from "@/components/sections/FeatureDemo";
import { StatsDemo } from "@/components/sections/StatsDemo";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTFSection from "@/components/sections/CTFSection";
import QuerySection from "@/components/sections/QuerySection";
import { FAQDemo } from "@/components/ui/faq-section";
import { Footer } from "@/components/sections/Footer";
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
        <SponsorsSection />
        <FeaturesSection />
        <CTFSection />
        {/* <FeatureDemo /> */}
        <StatsDemo />
        <TestimonialsSection />
        <QuerySection />
        <FAQDemo />
        <Footer />
        <Navigation />
      </main>
    </>
  );
}
