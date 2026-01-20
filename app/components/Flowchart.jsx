'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';


export default function FlowchartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  

  return (
    <section ref={ref} className="w-full bg-blue-50/30 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8" aria-labelledby="flowchart-title">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="font-hedvig text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full" aria-hidden="true"></div>
            <span className="text-sm sm:text-base font-semimedium text-primary">
              Process Flow
            </span>
          </div>
          <h2 id="flowchart-title" className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-4 sm:mb-5 px-4">
            Our Business Process Workflow
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg lg:text-body-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            A comprehensive view of how our financial services operate and interconnect to deliver value.
          </p>
        </div>
        
        {/* Flowchart */}
        <div className="mt-8 sm:mt-10 text-center mx-auto max-w-4xl border border-gray-200 sm:border-2 rounded-lg sm:rounded-xl overflow-hidden">
          <img 
            src="/flowchart.jpg" 
            alt="Business Process Workflow" 
            className="w-full h-auto rounded-lg sm:rounded-xl" 
          />
        </div>

      </div>
    </section>
  );
}
