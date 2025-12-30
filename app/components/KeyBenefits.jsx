'use client';

import { Target, Users, TrendingUp, Lightbulb, Shield, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const principles = [
  {
    id: 1,
    icon: Target,
    title: 'Praktijkervaring',
    description: 'Gerund door ondernemers uit verschillende sectoren die weten hoe het is om beslissingen te moeten nemen op basis van cijfers.'
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Meer dan verwerken',
    description: 'Administratie moet helpen om richting te bepalen, risico\'s te herkennen en vooruit te kijken - niet alleen verwerken en afronden.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Nuchter en praktisch',
    description: 'We werken niet vanuit vaste formats, maar sluiten aan op hoe een organisatie daadwerkelijk werkt.'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Cijfers als startpunt',
    description: 'We vertalen financiële data naar inzicht, helpen vooruitkijken en sturen bij waar nodig.'
  },
  {
    id: 5,
    icon: Shield,
    title: 'Data-driven werken',
    description: 'IT-oplossingen en automatisering zetten we doelgericht in zonder onnodige complexiteit of ruis.'
  },
  {
    id: 6,
    icon: ArrowRight,
    title: 'Flexibele partnerschap',
    description: 'We staan naast je als vaste partner of als flexibele schil, met duidelijke afspraken en geen kleine letters.'
  }
];

// Split principles into rows (3 items per row)
const firstRow = principles.slice(0, 3);
const secondRow = principles.slice(3, 6);

export default function KeyBenefits() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const isFirstRowInView = useInView(firstRowRef, { once: true, amount: 0.3 });
  const isSecondRowInView = useInView(secondRowRef, { once: true, amount: 0.3 });

  return (
    <section id="principles" className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Onze werkwijze</span>
          </div>
          <h2 className="font-hedvig max-w-4xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 mb-6">
            Cijfers als startpunt voor betere beslissingen
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Bij SalFin zijn cijfers geen eindpunt, maar een startpunt. We vragen door, leggen verbanden en denken mee over wat de volgende stap zou moeten zijn.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="font-inter max-w-6xl mx-auto">
          
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {/* First Row - Elements render left to right */}
            <div
              ref={firstRowRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16"
            >
              {firstRow.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.id}
                    className="text-center hover:scale-105 hover:transition-all hover:duration-200 px-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isFirstRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                  >
                    <div className="block group">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6 group-hover:bg-blue-600 transition-colors duration-200">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="text-[19px] sm:text-[20px] md:text-[22px] font-medium text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                        {principle.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-base leading-relaxed max-w-[320px] sm:max-w-[280px] mx-auto">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Second Row - Elements render left to right */}
            <div
              ref={secondRowRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16"
            >
              {secondRow.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.id}
                    className="text-center hover:scale-105 hover:transition-all hover:duration-200 px-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSecondRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                  >
                    <div className="block group">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6 group-hover:bg-blue-600 transition-colors duration-200">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="text-[19px] sm:text-[20px] md:text-[22px] font-medium text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                        {principle.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-base leading-relaxed max-w-[320px] sm:max-w-[280px] mx-auto">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}