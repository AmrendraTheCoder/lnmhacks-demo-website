"use client";

import { FeatureWithImageComparison } from "@/components/ui/feature-with-image-comparison";

export default function FeatureDemo() {
  return (
    <section id="demo" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Before vs After LNMHACKS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the transformation that happens when passionate developers come
            together for 48 hours of non-stop coding, innovation, and
            creativity.
          </p>
        </div>

        <FeatureWithImageComparison
          beforeImage="/images/ele-1.png"
          afterImage="/images/ele-2.png"
          beforeAlt="Before LNMHACKS - Raw Ideas"
          afterAlt="After LNMHACKS - Polished Solutions"
          className="max-w-4xl mx-auto"
        />
      </div>
    </section>
  );
}
