"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  className?: string;
  duration?: number;
}

export function TypingAnimation({
  text,
  className,
  duration = 200,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration]);

  return (
    <div className={cn("inline-block", className)}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  );
}
