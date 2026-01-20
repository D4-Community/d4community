"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ===================== FAQ DATA ===================== */
const faqs = [
  {
    question: "What exactly is the D4 Community?",
    answer: "D4 is an inclusive, open-source initiative dedicated to the four pillars of modern software: Discite (Learn), Develop, Debug, and Deploy. We bring together developers of all skill levels to build tools and share knowledge.",
  },
  {
    question: "How can I contribute to D4 projects?",
    answer: "Since we are open-source, you can contribute by heading over to our GitHub organization. Look for 'good first issues' if you're a beginner, or join our Discord to discuss larger architecture changes with our maintainers.",
  },
  {
    question: "Are there any membership fees?",
    answer: "No. D4 Community is and will always be free. We believe in democratizing access to high-quality developer resources and mentorship.",
  },
  {
    question: "Do you host physical meetups or just virtual events?",
    answer: "We primarily host virtual workshops and hackathons to remain globally accessible. However, we have regional chapters that occasionally organize local 'Coffee & Code' meetups.",
  },
  {
    question: "What technologies does the community focus on?",
    answer: "While we are language-agnostic, our core projects currently revolve around Next.js, Rust, TypeScript, and DevOps automation. We always welcome projects in emerging tech like AI and Web3.",
  },
  {
    question: "How does the mentorship program work?",
    answer: "Our 'Debug' phase includes a peer-to-peer mentorship system. Experienced members volunteer to review code, provide career guidance, and help newer developers navigate their first open-source contributions.",
  },
  {
    question: "Can I start my own project under the D4 umbrella?",
    answer: "Absolutely! If you have an idea that aligns with our mission, you can submit a proposal in our Discord. If approved, we provide the infrastructure, visibility, and a contributor base to help you build it.",
  },
];

/* ===================== FAQ COMPONENT ===================== */
const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-all hover:opacity-70"
      >
        <span className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-muted-foreground"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-background px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl dark:text-white text-black tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base text-center">
            Everything you need to know about the D4 Community and how we work.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="font-bold text-primary underline-offset-4 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}