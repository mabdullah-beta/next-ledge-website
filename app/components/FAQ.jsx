"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Hoe werkt jullie consultancyproces?",
    answer:
      "We beginnen met een uitgebreide consultatie om je behoeften te begrijpen, gevolgd door op maat gemaakte strategieën en doorlopende ondersteuning om meetbare resultaten te behalen.",
  },
  {
    id: 2,
    question: "In welke sectoren zijn jullie gespecialiseerd?",
    answer:
      "We zijn gespecialiseerd in technologie, financiën, gezondheidszorg, retail en de maakindustrie, waarbij we diepgaande kennis en bewezen strategieën in elke sector inzetten.",
  },
  {
    id: 3,
    question: "Hoe lang duurt het voordat ik resultaten zie?",
    answer:
      "De meeste klanten zien binnen 60 tot 90 dagen meetbare verbeteringen. Grote resultaten worden meestal zichtbaar binnen 6 maanden na implementatie.",
  },
  {
    id: 4,
    question: "Bieden jullie ook eenmalige consultaties aan?",
    answer:
      "Ja, we bieden flexibele samenwerkingsvormen zoals eenmalige consultaties, projectgericht werk en langdurige ondersteuning op basis van jouw behoeften.",
  },
  {
    id: 5,
    question: "Zijn jullie diensten betaalbaar voor kleine bedrijven?",
    answer:
      "Zeker. We bieden schaalbare oplossingen en flexibele prijsmodellen die geschikt zijn voor bedrijven van elke grootte, van startups tot grotere organisaties.",
  },
  {
    id: 6,
    question: "Hoe kan ik starten?",
    answer:
      "Boek eenvoudig een gratis eerste consult via ons contactformulier of bel ons direct. We bespreken jouw behoeften en stellen een persoonlijk plan op voor je bedrijf.",
  },
];

function FAQItem({ faq, index, isOpen, toggleItem }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  const contentId = `faq-content-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <motion.div
      ref={itemRef}
      className={`border-b border-gray-200 ${index === 0 ? "pt-0" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      {/* Question */}
      <button
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={() => toggleItem(faq.id)}
        className="antialiased w-full flex items-center justify-between gap-3 sm:gap-4 text-left py-4 sm:py-5 group"
      >
        <h3 className="antialiased text-[15px] sm:text-base md:text-lg font-normal text-gray-900 leading-snug">
          {faq.question}
        </h3>

        <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center text-white transition-transform duration-500">
          <ChevronDown
            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-1000 ${isOpen ? "rotate-180" : "rotate-0"
              }`}
            strokeWidth={2}
          />
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-1500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

export default function FAQSection({
  faqs = [],
  title = "Answers to your most common questions",
  eyebrow = "FAQ",
  allowMultipleOpen = true,
  allowEyebrow = true,
  className = "",
}) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const isAlreadyOpen = prev.includes(id);

      if (allowMultipleOpen) {
        return isAlreadyOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }

      // single-open accordion
      return isAlreadyOpen ? [] : [id];
    });
  };

  return (
    <section
      className={`w-full bg-blue-50/30 py-12 sm:py-16 md:py-20 lg:py-5 px-4 sm:px-6 md:px-8 ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="text-sm sm:text-base font-semimedium text-primary">
              Veelgestelde vragen
            </span>
          </div>
          <h2 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-4 sm:mb-5 px-4">
            Antwoorden op je meest voorkomende vragen{" "}
          </h2>
        </div>

        {/* Accordion */}
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