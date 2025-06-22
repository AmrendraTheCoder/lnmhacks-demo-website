"use client";

import { TestimonialsWithMarquee } from "@/components/blocks/testimonials-with-marquee";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-64 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Hackers Say About Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what previous participants
            have to say about their LNMHACKS experience.
          </p>
        </div>

        <TestimonialsWithMarquee />
      </div>
    </section>
  );
}
