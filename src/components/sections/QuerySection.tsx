"use client";

import { PromptBox } from "@/components/ui/chatgpt-prompt-input";
import { Waves } from "@/components/ui/waves-background";

export default function QuerySection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message");
    // In a real app, you would also handle the uploaded file here.
    if (!message && !event.currentTarget.querySelector("img")) {
      return;
    }
    alert(`Message Submitted!`);
  };

  return (
    <section
      id="query"
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Interactive Waves Background */}
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(0, 0, 0, 0.2)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          className="animate-wave-pulse"
        />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gray-50">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />

      <div className="w-full max-w-xl flex flex-col gap-10 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900">
          How Can We Help You?
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Have questions about LNMHACKS 8.0? Send us your queries and we'll get
          back to you!
        </p>
        <form onSubmit={handleSubmit}>
          <PromptBox />
        </form>
      </div>
    </section>
  );
}
