"use client";

import { useEffect } from "react";
import { CpuArchitecture } from "./cpu-architecture";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Auto complete loading after 4 seconds to see full CPU animation
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      {/* Only CPU Architecture Animation - No Text */}
      <div className="w-96 h-48">
        <CpuArchitecture
          width="100%"
          height="100%"
          text=""
          className="text-white"
          animateText={false}
          animateLines={true}
          animateMarkers={true}
        />
      </div>
    </div>
  );
}
