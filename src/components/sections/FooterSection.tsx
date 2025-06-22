"use client";

import React from "react";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const FooterSection = () => {
  const footerSections = {
    Event: ["Schedule", "CTF Competition", "Venue", "Registration"],
    Resources: ["Join Discord", "Find Team", "Mentorship", "Workshops"],
    Organization: [
      "About LNMHACKS",
      "Past Events",
      "LNMIIT",
      "Contact Us",
      "Code of Conduct",
    ],
    Legal: ["Terms of Service", "Privacy Policy", "Code of Ethics"],
  };

  return (
    <footer className="bg-black text-white py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1 sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                LNMHACKS 8.0
              </h3>
              <p className="text-sm text-gray-400 max-w-xs">
                The ultimate 72-hour coding marathon at LNMIIT. Building the
                future, one hack at a time.
              </p>
            </div>

            <div className="mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-gray-500">
                © 2024 LNMHACKS. All Rights Reserved.
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer group">
                <Twitter className="w-4 h-4 group-hover:text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer group">
                <Instagram className="w-4 h-4 group-hover:text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group">
                <Linkedin className="w-4 h-4 group-hover:text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer group">
                <Github className="w-4 h-4 group-hover:text-white" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="min-w-0">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-teal-400 transition-colors text-xs sm:text-sm block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400">
                Organized by{" "}
                <span className="text-teal-400 font-medium">LNMIIT</span> • Part
                of{" "}
                <span className="text-purple-400 font-medium">
                  Tech-Fest Plinth
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400">
              <span>Made with ❤️ by LNMIIT Team</span>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterSection;
