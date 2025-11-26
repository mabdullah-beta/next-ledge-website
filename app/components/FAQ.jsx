"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How does your consulting process work?",
    answer:
      "We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.",
  },
  {
    id: 2,
    question: "What industries do you specialize in?",
    answer:
      "We specialize in technology, finance, healthcare, retail, and manufacturing sectors, bringing deep expertise and proven strategies to each industry.",
  },
  {
    id: 3,
    question: "How long does it take to see results?",
    answer:
      "Most clients begin seeing measurable improvements within 60-90 days, with significant results typically visible within 6 months of implementation.",
  },
  {
    id: 4,
    question: "Do you offer one-time consultations?",
    answer:
      "Yes, we offer flexible engagement models including one-time consultations, project-based work, and ongoing retainer relationships based on your needs.",
  },
  {
    id: 5,
    question: "Can small businesses afford your services?",
    answer:
      "Absolutely. We offer scalable solutions and flexible pricing models designed to accommodate businesses of all sizes, from startups to enterprises.",
  },
  {
    id: 6,
    question: "How do I get started?",
    answer:
      "Simply book a free initial consultation through our contact form or call us directly. We'll discuss your needs and create a customized plan for your business.",
  },
];

function FAQItem({ faq, index, isOpen, toggleItem }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={itemRef}
      className={`border-b border-gray-200 ${index === 0 ? "pt-0" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Question */}
      <button
        onClick={() => toggleItem(faq.id)}
        className="antialiased w-full flex items-center justify-between gap-3 sm:gap-4 text-left py-4 sm:py-5 group"
      >
        <h3 className="antialiased text-[15px] sm:text-base md:text-lg font-normal text-gray-900 leading-snug">
          {faq.question}
        </h3>
        <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center text-white transition-transform duration-500">
          <ChevronDown
            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-1000 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            strokeWidth={2}
          />
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-1500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 sm:pb-5 pr-8 sm:pr-10 md:pr-12">
          <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  // State: Array of IDs for open accordion items (empty = all closed)
  const [openItems, setOpenItems] = useState([]);

  // Toggle: Open/close accordion item - allows multiple items open at once
  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="text-sm sm:text-base font-semimedium text-primary">
              FAQ
            </span>
          </div>
          <h2 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-4 sm:mb-5 px-4">
            Answers to your most common questions{" "}
          </h2>
        </div>
        {/* FAQ Accordion */}
        <div className="space-y-0 px-2 sm:px-4 md:px-0 max-w-xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openItems.includes(faq.id)}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}