"use client";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface FeatureWithImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

function FeatureWithImageComparison({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  className = "",
}: FeatureWithImageComparisonProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none bg-gray-800 border border-gray-700"
        onMouseMove={onMouseMove}
        onMouseUp={() => setOnMouseDown(false)}
        onTouchMove={onMouseMove}
        onTouchEnd={() => setOnMouseDown(false)}
      >
        <div
          className="bg-white h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg"
          style={{
            left: inset + "%",
          }}
        >
          <button
            className="bg-white rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg border-2 border-gray-300"
            onTouchStart={(e) => {
              setOnMouseDown(true);
              onMouseMove(e);
            }}
            onMouseDown={(e) => {
              setOnMouseDown(true);
              onMouseMove(e);
            }}
            onTouchEnd={() => setOnMouseDown(false)}
            onMouseUp={() => setOnMouseDown(false)}
          >
            <GripVertical className="h-4 w-4 select-none text-gray-600" />
          </button>
        </div>

        {/* Before Image (Right side) */}
        <div className="absolute left-0 top-0 w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-4 z-10">
            <Badge className="bg-red-600 text-white border-red-700">
              Before
            </Badge>
          </div>
        </div>

        {/* After Image (Left side) */}
        <div
          className="absolute left-0 top-0 z-10 w-full h-full"
          style={{
            clipPath: "inset(0 0 0 " + inset + "%)",
          }}
        >
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-4 left-4 z-10">
            <Badge className="bg-green-600 text-white border-green-700">
              After
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

// Keep the old component for backward compatibility
function Feature() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4">
          <div>
            <Badge className="bg-blue-600 text-white border-blue-700">
              Hackathon Experience
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-white">
              Before vs After LNMHACKS
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300">
              See the transformation that happens when brilliant minds come
              together for 48 hours of innovation and coding.
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none bg-gray-800 border border-gray-700"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-white h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-white rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg border-2 border-gray-300"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none text-gray-600" />
                </button>
              </div>

              {/* Before Image (Right side) */}
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💭</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Before LNMHACKS
                  </h3>
                  <p className="text-gray-300">Just an idea</p>
                </div>
              </div>

              {/* After Image (Left side) */}
              <div
                className="absolute left-0 top-0 z-10 w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    After LNMHACKS
                  </h3>
                  <p className="text-blue-100">A complete product!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature, FeatureWithImageComparison };
