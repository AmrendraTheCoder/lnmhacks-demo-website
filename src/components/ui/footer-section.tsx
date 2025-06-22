"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Twitter,
  Github,
  MessageCircle,
} from "lucide-react";

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative bg-white text-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-40 md:px-6 lg:px-8">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
              Stay Updated
            </h2>
            <p className="mb-10 text-gray-600">
              Get the latest updates about LNMHACKS 8.0, registration
              announcements, and exclusive hackathon insights.
            </p>
            <form className="relative mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-gray-900/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>
            <nav className="space-y-4 text-sm">
              <a
                href="#home"
                className="block transition-colors hover:text-blue-600 text-gray-600"
              >
                Home
              </a>
              <a
                href="#features"
                className="block transition-colors hover:text-blue-600 text-gray-600"
              >
                Features
              </a>
              <a
                href="#hackathon"
                className="block transition-colors hover:text-blue-600 text-gray-600"
              >
                Hackathon Info
              </a>
              <a
                href="#sponsors"
                className="block transition-colors hover:text-blue-600 text-gray-600"
              >
                Sponsors
              </a>
              <a
                href="#contact"
                className="block transition-colors hover:text-blue-600 text-gray-600"
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Contact Us
            </h3>
            <address className="space-y-4 text-sm not-italic text-gray-600">
              <p>LNM Institute of Information Technology</p>
              <p>Jaipur, Rajasthan 302031</p>
              <p>Phone: +91 141 515 1000</p>
              <p>Email: lnmhacks@lnmiit.ac.in</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Follow LNMHACKS
            </h3>
            <div className="mb-8 flex flex-wrap gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="sr-only">Discord</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Join our Discord server</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-gray-100 border-gray-300 text-gray-900 hover:bg-gray-200"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-yellow-500" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4 text-blue-600" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-12 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 LNMHACKS 8.0. All rights reserved. Built with ❤️ by Amrendra
            Singh.
          </p>
          <nav className="flex gap-4 text-sm">
            <a
              href="#"
              className="transition-colors hover:text-blue-600 text-gray-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-blue-600 text-gray-500"
            >
              Code of Conduct
            </a>
            <a
              href="#"
              className="transition-colors hover:text-blue-600 text-gray-500"
            >
              Terms & Conditions
            </a>
          </nav>
        </div>
      </div>

      {/* Hourglass Sand Animation - Light Theme */}
      <div className="relative overflow-hidden h-40">
        <style jsx>{`
          @keyframes sandDrop {
            0% {
              transform: translateY(-20px);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            85% {
              transform: translateY(120px);
              opacity: 1;
            }
            90% {
              transform: translateY(110px);
              opacity: 0.8;
            }
            95% {
              transform: translateY(115px);
              opacity: 0.6;
            }
            100% {
              transform: translateY(120px);
              opacity: 0;
            }
          }
          .sand-particle {
            position: absolute;
            background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7);
            border-radius: 2px;
            animation: sandDrop linear infinite;
          }
          .sand-particle:nth-child(1) {
            left: 5%;
            width: 4px;
            height: 8px;
            animation-duration: 2.5s;
            animation-delay: 0s;
          }
          .sand-particle:nth-child(2) {
            left: 15%;
            width: 3px;
            height: 6px;
            animation-duration: 3s;
            animation-delay: 0.3s;
          }
          .sand-particle:nth-child(3) {
            left: 25%;
            width: 5px;
            height: 9px;
            animation-duration: 2.2s;
            animation-delay: 0.6s;
          }
          .sand-particle:nth-child(4) {
            left: 35%;
            width: 4px;
            height: 7px;
            animation-duration: 2.8s;
            animation-delay: 0.9s;
          }
          .sand-particle:nth-child(5) {
            left: 45%;
            width: 3px;
            height: 8px;
            animation-duration: 2.6s;
            animation-delay: 1.2s;
          }
          .sand-particle:nth-child(6) {
            left: 55%;
            width: 5px;
            height: 6px;
            animation-duration: 2.4s;
            animation-delay: 1.5s;
          }
          .sand-particle:nth-child(7) {
            left: 65%;
            width: 4px;
            height: 9px;
            animation-duration: 2.7s;
            animation-delay: 1.8s;
          }
          .sand-particle:nth-child(8) {
            left: 75%;
            width: 3px;
            height: 7px;
            animation-duration: 2.9s;
            animation-delay: 2.1s;
          }
          .sand-particle:nth-child(9) {
            left: 85%;
            width: 5px;
            height: 8px;
            animation-duration: 2.3s;
            animation-delay: 2.4s;
          }
          .sand-particle:nth-child(10) {
            left: 95%;
            width: 4px;
            height: 6px;
            animation-duration: 2.1s;
            animation-delay: 2.7s;
          }
          .sand-particle:nth-child(11) {
            left: 10%;
            width: 3px;
            height: 7px;
            animation-duration: 3.2s;
            animation-delay: 0.8s;
          }
          .sand-particle:nth-child(12) {
            left: 20%;
            width: 4px;
            height: 5px;
            animation-duration: 2s;
            animation-delay: 1.1s;
          }
          .sand-particle:nth-child(13) {
            left: 30%;
            width: 5px;
            height: 8px;
            animation-duration: 2.5s;
            animation-delay: 1.4s;
          }
          .sand-particle:nth-child(14) {
            left: 40%;
            width: 3px;
            height: 9px;
            animation-duration: 2.8s;
            animation-delay: 1.7s;
          }
          .sand-particle:nth-child(15) {
            left: 50%;
            width: 4px;
            height: 6px;
            animation-duration: 2.2s;
            animation-delay: 2s;
          }
          .sand-particle:nth-child(16) {
            left: 60%;
            width: 5px;
            height: 7px;
            animation-duration: 2.6s;
            animation-delay: 2.3s;
          }
          .sand-particle:nth-child(17) {
            left: 70%;
            width: 3px;
            height: 8px;
            animation-duration: 2.4s;
            animation-delay: 2.6s;
          }
          .sand-particle:nth-child(18) {
            left: 80%;
            width: 4px;
            height: 5px;
            animation-duration: 2.9s;
            animation-delay: 2.9s;
          }
          .sand-particle:nth-child(19) {
            left: 90%;
            width: 5px;
            height: 9px;
            animation-duration: 2.1s;
            animation-delay: 0.2s;
          }
          .sand-particle:nth-child(20) {
            left: 8%;
            width: 3px;
            height: 6px;
            animation-duration: 2.7s;
            animation-delay: 0.5s;
          }
          .sand-particle:nth-child(21) {
            left: 12%;
            width: 4px;
            height: 7px;
            animation-duration: 2.3s;
            animation-delay: 0.7s;
          }
          .sand-particle:nth-child(22) {
            left: 22%;
            width: 5px;
            height: 5px;
            animation-duration: 2.8s;
            animation-delay: 1s;
          }
          .sand-particle:nth-child(23) {
            left: 32%;
            width: 3px;
            height: 8px;
            animation-duration: 2.1s;
            animation-delay: 1.3s;
          }
          .sand-particle:nth-child(24) {
            left: 42%;
            width: 4px;
            height: 6px;
            animation-duration: 2.6s;
            animation-delay: 1.6s;
          }
          .sand-particle:nth-child(25) {
            left: 52%;
            width: 5px;
            height: 9px;
            animation-duration: 2.4s;
            animation-delay: 1.9s;
          }
          .sand-particle:nth-child(26) {
            left: 62%;
            width: 3px;
            height: 7px;
            animation-duration: 2.9s;
            animation-delay: 2.2s;
          }
          .sand-particle:nth-child(27) {
            left: 72%;
            width: 4px;
            height: 5px;
            animation-duration: 2.2s;
            animation-delay: 2.5s;
          }
          .sand-particle:nth-child(28) {
            left: 82%;
            width: 5px;
            height: 8px;
            animation-duration: 2.7s;
            animation-delay: 2.8s;
          }
          .sand-particle:nth-child(29) {
            left: 92%;
            width: 3px;
            height: 6px;
            animation-duration: 2s;
            animation-delay: 0.1s;
          }
          .sand-particle:nth-child(30) {
            left: 7%;
            width: 4px;
            height: 9px;
            animation-duration: 2.5s;
            animation-delay: 0.4s;
          }
          .sand-particle:nth-child(31) {
            left: 17%;
            width: 5px;
            height: 7px;
            animation-duration: 2.8s;
            animation-delay: 0.9s;
          }
          .sand-particle:nth-child(32) {
            left: 27%;
            width: 3px;
            height: 5px;
            animation-duration: 2.3s;
            animation-delay: 1.2s;
          }
          .sand-particle:nth-child(33) {
            left: 37%;
            width: 4px;
            height: 8px;
            animation-duration: 2.6s;
            animation-delay: 1.5s;
          }
          .sand-particle:nth-child(34) {
            left: 47%;
            width: 5px;
            height: 6px;
            animation-duration: 2.1s;
            animation-delay: 1.8s;
          }
          .sand-particle:nth-child(35) {
            left: 57%;
            width: 3px;
            height: 9px;
            animation-duration: 2.9s;
            animation-delay: 2.1s;
          }
          .sand-particle:nth-child(36) {
            left: 67%;
            width: 4px;
            height: 7px;
            animation-duration: 2.4s;
            animation-delay: 2.4s;
          }
          .sand-particle:nth-child(37) {
            left: 77%;
            width: 5px;
            height: 5px;
            animation-duration: 2.7s;
            animation-delay: 2.7s;
          }
          .sand-particle:nth-child(38) {
            left: 87%;
            width: 3px;
            height: 8px;
            animation-duration: 2.2s;
            animation-delay: 0.3s;
          }
          .sand-particle:nth-child(39) {
            left: 97%;
            width: 4px;
            height: 6px;
            animation-duration: 2.8s;
            animation-delay: 0.6s;
          }
          .sand-particle:nth-child(40) {
            left: 3%;
            width: 5px;
            height: 9px;
            animation-duration: 2.5s;
            animation-delay: 1.1s;
          }
          .sand-particle:nth-child(41) {
            left: 13%;
            width: 3px;
            height: 7px;
            animation-duration: 2.1s;
            animation-delay: 1.4s;
          }
          .sand-particle:nth-child(42) {
            left: 23%;
            width: 4px;
            height: 5px;
            animation-duration: 2.6s;
            animation-delay: 1.7s;
          }
          .sand-particle:nth-child(43) {
            left: 33%;
            width: 5px;
            height: 8px;
            animation-duration: 2.9s;
            animation-delay: 2s;
          }
          .sand-particle:nth-child(44) {
            left: 43%;
            width: 3px;
            height: 6px;
            animation-duration: 2.3s;
            animation-delay: 2.3s;
          }
          .sand-particle:nth-child(45) {
            left: 53%;
            width: 4px;
            height: 9px;
            animation-duration: 2.7s;
            animation-delay: 2.6s;
          }
          .sand-particle:nth-child(46) {
            left: 63%;
            width: 5px;
            height: 7px;
            animation-duration: 2s;
            animation-delay: 0.2s;
          }
          .sand-particle:nth-child(47) {
            left: 73%;
            width: 3px;
            height: 5px;
            animation-duration: 2.4s;
            animation-delay: 0.5s;
          }
          .sand-particle:nth-child(48) {
            left: 83%;
            width: 4px;
            height: 8px;
            animation-duration: 2.8s;
            animation-delay: 0.8s;
          }
          .sand-particle:nth-child(49) {
            left: 93%;
            width: 5px;
            height: 6px;
            animation-duration: 2.2s;
            animation-delay: 1.3s;
          }
          .sand-particle:nth-child(50) {
            left: 6%;
            width: 3px;
            height: 9px;
            animation-duration: 2.6s;
            animation-delay: 1.6s;
          }
        `}</style>

        {/* Sand Particles */}
        {[...Array(50)].map((_, i) => (
          <div key={i} className="sand-particle" />
        ))}

        {/* Enhanced Bottom sand pile effect - showing lots of accumulation */}
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-purple-300/60 to-transparent rounded-t-full" />
        <div className="absolute bottom-0 left-1/6 w-2/3 h-6 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-5 bg-gradient-to-r from-transparent via-purple-500/80 to-transparent rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-1/3 h-4 bg-gradient-to-r from-transparent via-purple-600/90 to-transparent rounded-full" />
        <div className="absolute bottom-0 left-2/5 w-1/5 h-3 bg-gradient-to-r from-transparent via-purple-700/95 to-transparent rounded-full" />
      </div>
    </footer>
  );
}

export { Footerdemo };
