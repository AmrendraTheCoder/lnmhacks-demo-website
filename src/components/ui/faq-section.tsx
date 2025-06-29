"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I work with modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. For mobile development, I use React Native with Expo. I'm also exploring AI/ML, Web3, and competitive programming.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes! I'm open to freelance projects, especially those involving full-stack web development, mobile apps, or UI/UX design. I'm particularly interested in projects that solve real-world problems and have meaningful impact.",
  },
  {
    question: "What's your experience with business and entrepreneurship?",
    answer:
      "I've experimented with multiple business ventures including dropshipping, book reselling, and YouTube content creation. While not all were successful, each taught me valuable lessons about markets, logistics, and customer needs that inform my approach to building tech solutions.",
  },
  {
    question: "How do you approach learning new technologies?",
    answer:
      "I believe in learning by building. Whether it's creating my father's business website or developing campus solutions like the carpool app, I prefer hands-on projects that solve real problems while teaching me new skills.",
  },
  {
    question: "What are your current focus areas?",
    answer:
      "I'm actively learning AI/ML algorithms, competitive programming, advanced system design, and exploring Web3 technologies. I'm also focused on building more complex full-stack applications and contributing to open source projects.",
  },
  {
    question: "Do you offer mentorship or collaborate with other students?",
    answer:
      "Absolutely! I enjoy collaborating with fellow students and sharing knowledge. Whether it's helping with project ideas, technical guidance, or discussing entrepreneurial ventures, I'm always open to meaningful collaborations.",
  },
  {
    question: "What's your long-term vision?",
    answer:
      "I aim to build a successful tech startup that solves meaningful problems. My goal is to combine technical expertise with business acumen to create solutions that have real impact. I also want to excel in competitive programming and contribute significantly to the tech community.",
  },
  {
    question: "How can we get in touch for project discussions?",
    answer:
      "You can reach out through the contact form on this site, connect with me on LinkedIn, or check out my work on GitHub. I'm always excited to discuss new project ideas and potential collaborations!",
  },
];

export function FAQDemo() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about my work, experience, and approach to
            technology and business.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-100 rounded-lg px-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-black py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have more questions or want to discuss a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
