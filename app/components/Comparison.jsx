"use client";
import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Comparison = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const otherFirms = [
    {
      title: "One-size-fits-all service",
      description: "Standard bookkeeping with little room for tailored advice or forward thinking.",
    },
    {
      title: "Reactive support",
      description: "Help comes only when you ask — not when you truly need guidance.",
    },
    {
      title: "Unclear pricing",
      description: "Unexpected add-ons that make budgeting harder.",
    },
  ];

  const withStratex = [
    {
      title: "Personalized accounting",
      description: "Every business is different. We shape your administration around your goals and way of working.",
    },
    {
      title: "Proactive support",
      description: "We go beyond the numbers — helping you understand your figures and plan with confidence.",
    },
    {
      title: "Driven by technology and insight",
      description: "At Nexledge, we use IT, AI, and automation to spot opportunities, improve efficiency, and give you better control. We believe our clients should stay informed and benefit from the latest tools that shape the future of business.",
    },
    {
      title: "Transparent pricing",
      description: "Fair, clear, and straightforward — no hidden surprises.",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="font-inter relative py-10 md:py-20 sm:py-16 bg-white" 
      aria-label="Comparison Section"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 sm:px-5">
        {/* Header - No animation */}
        <div className="text-center mb-16 md:mb-16 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-6 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-base font-semimedium text-primary">Why choose us</span>
          </div>
          <h1 className="font-hedvig text-heading-lg text-gray-900 leading-tight max-w-2xl mx-auto">
            More than accountants — partners in your business journey
          </h1>
        </div>

        {/* Comparison Grid - Slower animation with strong easeOut */}
        <motion.div 
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0 bg-gradient-to-b from-mint-lightest to-mint-lighter border-2 border-border-mint rounded-3xl overflow-hidden p-1.5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* Left Column - Other Firms */}
          <div className="font-inter p-8 md:p-10 sm:p-8 space-y-10 md:space-y-10 sm:space-y-8">
            <h3 className="text-[28px] md:text-[26px] sm:text-[24px] font-semibold text-black md:mb-9 mb-9">Other Firms</h3>
            
            {otherFirms.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-gray-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[22px] sm:text-[18px] font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-[16px] md:text-[15px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - With Nexledge */}
          <div className="bg-white p-8 md:p-10 sm:p-8 space-y-10 md:space-y-10 sm:space-y-8 rounded-3xl">
            <h3 className="text-[28px] md:text-[26px] sm:text-[24px] font-semibold text-black md:mb-9 mb-9">With Nexledge</h3>
            
            {withStratex.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[22px] sm:text-lg font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-[16px] md:text-[15px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;