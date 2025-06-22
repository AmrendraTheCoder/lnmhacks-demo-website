"use client";

import { TestimonialsWithMarquee } from "@/components/blocks/testimonials-with-marquee";
import { ChromeGrid } from "@/components/ui/chrome-grid";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-64 bg-black relative overflow-hidden"
    >
      {/* ChromeGrid Background Effect */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Hackers Say About Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what previous
            participants have to say about their LNMHACKS experience.
          </p>
        </div>

        <TestimonialsWithMarquee />
      </div>
    </section>
  );
}
