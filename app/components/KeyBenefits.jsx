'use client';

import { MessageCircle, Cloud, Globe, Database, Headphones, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'Flexible consultations',
    description: 'Easy access to administrative support whenever you need clarity or guidance.'
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Tailored administrative solutions',
    description: 'Workflows and setups adapted to your business needs, from day-to-day bookkeeping to structured financial processes.'
  },
  {
    id: 3,
    icon: Globe,
    title: 'Practical financial insights',
    description: 'Clear explanations and organized overviews that help you understand your numbers and stay in control.'
  },
  {
    id: 4,
    icon: Database,
    title: 'Data & control strategies',
    description: 'Well-structured reporting that supports better oversight and helps you make informed decisions.'
  },
  {
    id: 5,
    icon: Headphones,
    title: 'Ongoing administrative support',
    description: 'Consistent follow-up and communication throughout the year, so your administration remains organized and up-to-date.'
  },
  {
    id: 6,
    icon: Zap,
    title: 'Efficient automation & IT support',
    description: 'Implementation of useful tools and automations that help streamline your administrative work and reduce manual tasks.'
  }
];

// Split benefits into rows (3 items per row)
const firstRow = benefits.slice(0, 3);
const secondRow = benefits.slice(3, 6);

export default function KeyBenefits() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const isFirstRowInView = useInView(firstRowRef, { once: true, amount: 0.3 });
  const isSecondRowInView = useInView(secondRowRef, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - No animation */}
        <div className="font-hedvig text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-base font-semimedium text-primary">Features</span>
          </div>
          <h2 className="font-hedvig max-w-2xl text-heading-lg text-gray-900 leading-tight mx-auto">
            Key benefits that set us apart from other firms
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="font-inter max-w-6xl mx-auto space-y-16">
          {/* First Row - Elements render left to right */}
          <div
            ref={firstRowRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-16"
          >
            {firstRow.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isFirstRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-2xl mb-6">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-medium text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed max-w-[280px] mx-auto">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row - Elements render left to right */}
          <div
            ref={secondRowRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-16"
          >
            {secondRow.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isSecondRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-2xl mb-6">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-medium text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed max-w-[280px] mx-auto">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}