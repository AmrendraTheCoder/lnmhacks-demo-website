"use client";
import { Clock, Users, Trophy, Code, Lightbulb, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                Hackathon Stats
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-black">
                The Numbers Behind Innovation
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600 text-left">
                Experience the energy of LNMHACKS 8.0 - where brilliant minds
                converge to build the future in just 48 hours.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-blue-200">
              <Clock className="w-12 h-12 stroke-1 text-blue-600" />
              <div className="flex flex-col">
                <h3 className="text-4xl font-bold tracking-tight text-blue-900 mb-2">
                  48 Hours
                </h3>
                <p className="text-blue-700 max-w-xs text-lg">
                  Non-stop coding marathon where ideas transform into reality
                  through pure determination and innovation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl aspect-square p-8 flex justify-between flex-col border border-purple-200">
              <Users className="w-12 h-12 stroke-1 text-purple-600" />
              <div className="flex flex-col">
                <h3 className="text-4xl font-bold tracking-tight text-purple-900 mb-2">
                  500+
                </h3>
                <p className="text-purple-700 max-w-xs text-lg">
                  Talented developers, designers, and innovators from across the
                  region.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl aspect-square p-8 flex justify-between flex-col border border-green-200">
              <Trophy className="w-12 h-12 stroke-1 text-green-600" />
              <div className="flex flex-col">
                <h3 className="text-4xl font-bold tracking-tight text-green-900 mb-2">
                  100+
                </h3>
                <p className="text-green-700 max-w-xs text-lg">
                  Amazing projects built from scratch, each solving real-world
                  problems.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col border border-orange-200">
              <div className="flex gap-4">
                <Code className="w-10 h-10 stroke-1 text-orange-600" />
                <Lightbulb className="w-10 h-10 stroke-1 text-orange-600" />
                <Coffee className="w-10 h-10 stroke-1 text-orange-600" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold tracking-tight text-orange-900 mb-3">
                  The Complete Experience
                </h3>
                <p className="text-orange-700 max-w-md text-lg">
                  From mentorship sessions and workshops to networking
                  opportunities and prize competitions - everything you need to
                  level up your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
