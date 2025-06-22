import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientButton } from "@/components/ui/gradient-button";

function FAQ() {
  const faqData = [
    {
      question: "What is LNMHACKS 8.0?",
      answer:
        "LNMHACKS 8.0 is the eighth edition of our flagship hackathon at LNM Institute of Information Technology. It's a 48-hour coding marathon where developers, designers, and innovators come together to build amazing projects and compete for prizes worth ₹5 lakhs.",
    },
    {
      question: "Who can participate in LNMHACKS 8.0?",
      answer:
        "LNMHACKS is open to all students from any college or university. Whether you're a beginner or an experienced developer, we welcome participants of all skill levels. You can participate solo or form teams of up to 4 members.",
    },
    {
      question: "When and where will LNMHACKS 8.0 take place?",
      answer:
        "LNMHACKS 8.0 will be held at LNM Institute of Information Technology, Jaipur from March 15-17, 2024. The event starts on Friday evening and concludes on Sunday evening with the prize distribution ceremony.",
    },
    {
      question: "Is there any registration fee?",
      answer:
        "No, LNMHACKS 8.0 is completely free to participate! We provide meals, accommodation, swag, and all the resources you need during the hackathon. Just bring your laptop and enthusiasm to code.",
    },
    {
      question: "What are the tracks and themes for this year?",
      answer:
        "This year we have 6 exciting tracks: Web3 & Blockchain, AI/ML, Healthcare Tech, Fintech, Social Impact, and Open Innovation. You can build anything that fits into these categories or surprise us with something completely new!",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, chargers, any hardware you might need, a valid ID card, and a positive attitude! We'll provide meals, snacks, accommodation, WiFi, and workspace. Don't forget to bring your creativity and problem-solving skills.",
    },
    {
      question: "Will there be mentors and workshops?",
      answer:
        "Absolutely! We have industry experts from top tech companies as mentors. There will be workshops on various technologies, pitch sessions, and one-on-one mentoring throughout the event to help you build better products.",
    },
    {
      question: "What are the prizes and what happens after the hackathon?",
      answer:
        "We have prizes worth ₹5 lakhs including cash prizes, internship opportunities, and goodies. Winners get recognition, networking opportunities with industry leaders, and potential investment discussions for promising startups. Many past participants have turned their hackathon projects into successful companies!",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge
                  variant="outline"
                  className="text-blue-400 border-blue-400"
                >
                  FAQ
                </Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular text-white">
                  Everything you need to know about LNMHACKS 8.0
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-300 text-left">
                  Got questions about the hackathon? We've got answers! From
                  registration to prizes, find everything you need to know about
                  LNMHACKS 8.0 right here.
                </p>
              </div>
              <div className="">
                <GradientButton className="gap-4" variant="variant">
                  Still have questions? Contact us{" "}
                  <PhoneCall className="w-4 h-4" />
                </GradientButton>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`index-${index}`}
                className="border-gray-700"
              >
                <AccordionTrigger className="text-white hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function FAQDemo() {
  return (
    <div className="w-full">
      <FAQ />
    </div>
  );
}

export { FAQ, FAQDemo };
