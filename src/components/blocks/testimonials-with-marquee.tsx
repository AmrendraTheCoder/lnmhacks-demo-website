import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Single Row - Left to Right (Slower) */}
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {duplicatedTestimonials.map((testimonial, i) => (
                <TestimonialCard key={`row1-${i}`} {...testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {duplicatedTestimonials.map((testimonial, i) => (
                <TestimonialCard key={`row1-duplicate-${i}`} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    author: {
      name: "Arjun Sharma",
      handle: "@arjundev",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "LNMHACKS 7.0 was life-changing! Built an AI-powered healthcare app in 48 hours and won the innovation track. The mentorship was incredible!",
    href: "https://twitter.com/arjundev",
  },
  {
    author: {
      name: "Priya Patel",
      handle: "@priyatech",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "From idea to prototype in 72 hours! LNMHACKS taught me that anything is possible with the right team and mindset. Amazing community!",
    href: "https://twitter.com/priyatech",
  },
  {
    author: {
      name: "Ravi Kumar",
      handle: "@ravicodes",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Best hackathon experience ever! The energy at LNMIIT was electric. Made lifelong friends and launched my startup idea here.",
  },
  {
    author: {
      name: "Sneha Agarwal",
      handle: "@snehaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "LNMHACKS pushed my boundaries! Built my first blockchain application and got internship offers from 3 companies. Game changer!",
    href: "https://twitter.com/snehaml",
  },
  {
    author: {
      name: "Vikash Singh",
      handle: "@vikashweb3",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    },
    text: "The Web3 track at LNMHACKS was phenomenal! Mentors were industry experts who helped us build production-ready DApps.",
  },
  {
    author: {
      name: "Ananya Mishra",
      handle: "@ananyaai",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "From complete beginner to confident developer in 3 days! LNMHACKS workshops and community support made all the difference.",
    href: "https://twitter.com/ananyaai",
  },
  {
    author: {
      name: "Abhishek Gupta",
      handle: "@abhishektech",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Won ₹50,000 at LNMHACKS for our IoT solution! The judges were amazing and the competition was fierce. Already planning for 8.0!",
  },
  {
    author: {
      name: "Kavya Reddy",
      handle: "@kavyacodes",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    text: "LNMHACKS isn't just a hackathon, it's a movement! The diversity in projects and passion in participants is truly inspiring.",
  },
];

export function TestimonialsWithMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Single Row - Left to Right (Much Slower) */}
      <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:80s]">
        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={`row1-${i}`} {...testimonial} />
          ))}
        </div>
        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={`row1-duplicate-${i}`} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Gradient Overlays for Dark Theme */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
}
