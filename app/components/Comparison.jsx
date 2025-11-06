"use client";
import React from "react";
import { Check } from "lucide-react";

const Comparison = () => {
  const otherFirms = [
    {
      title: "Generic Strategies",
      description: "One-size-fits-all solutions that lack personalized insights and flexibility.",
    },
    {
      title: "Limited Guidance",
      description: "Clients are left to navigate complex challenges with minimal expert support.",
    },
    {
      title: "Hidden Fees",
      description: "Unexpected costs and additional charges that inflate your total investment.",
    },
  ];

  const withStratex = [
    {
      title: "Tailored Consulting",
      description: "Custom strategies designed to fit your unique business needs and goals.",
    },
    {
      title: "Dedicated Support",
      description: "Expert guidance and hands-on assistance at every stage of your journey.",
    },
    {
      title: "Transparent Pricing",
      description: "No surprises—clear pricing structure so you pay only for what you need.",
    },
  ];

  return (
    <section className="font-inter relative py-10 md:py-20 sm:py-16 bg-white" aria-label="Comparison Section">
      <div className="max-w-5xl mx-auto px-4 md:px-8 sm:px-5">
        <div className="text-center mb-16 md:mb-16 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-6 sm:mb-4">
            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span className="font-inter text-sm font-medium text-[#1f514c]">Why choose us</span>
          </div>
          <h1 className="font-hedvig text-[45px] md:text-[45px] sm:text-[32px] text-gray-900 leading-tight max-w-4xl mx-auto">
            Expert consulting tailored to <br className="hidden md:block" />your business success
          </h1>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0 bg-gradient-to-b from-[#fafff8] to-[#f5fef0] border-2 border-[#e8f5e0] rounded-3xl overflow-hidden">
          
          {/* Left Column - Other Firms */}
          <div className="font-inter bg-gradient-to-b from-[#fafff8] to-[#f5fef0] p-12 md:p-10 sm:p-8 space-y-10 md:space-y-10 sm:space-y-8">
            <h3 className="text-[28px] md:text-[26px] sm:text-[24px] font-semibold text-black md:mb-9 mb-9">Other Firms</h3>
            
            {otherFirms.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-gray-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[19px] sm:text-[18px] font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-[16px] md:text-[15px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - With Stratex */}
          <div className="bg-white p-12 md:p-10 sm:p-8 space-y-10 md:space-y-10 sm:space-y-8">
            <h3 className="text-[28px] md:text-[26px] sm:text-[24px] font-semibold text-black md:mb-9 mb-9">With Stratex</h3>
            
            {withStratex.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#1f514c] rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[19px] sm:text-[18px] font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-[16px] md:text-[15px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;