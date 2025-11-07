"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="w-full bg-white py-20 md:px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-16 md:mb-16 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="dot-indicator bg-secondary-light rounded-full"></div>
            <span className="font-inter text-sm font-medium text-primary">
              FAQ
            </span>
          </div>
          <h2 className="font-hedvig text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-5 px-4">
            Answers to your most common questions{" "}
          </h2>
        </div>
        {/* FAQ Accordion */}
        <div className="space-y-0 px-4 md:px-0 max-w-xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`border-b border-gray-200 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className=" antialiased w-full flex items-center justify-between gap-2 text-left py-4 group"
                >
                  <h3 className="antialiased  md:text-lg font-normal text-gray-900">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white transition-transform duration-500">
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-1000 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      strokeWidth={2}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-1500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-5 pr-12">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
