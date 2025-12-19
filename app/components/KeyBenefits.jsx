'use client';

import { MessageCircle, Cloud, Globe, Database, Headphones, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const benefits = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'Flexibele consultaties',
    description: 'Eenvoudige toegang tot administratieve ondersteuning wanneer je duidelijkheid of begeleiding nodig hebt.'
  },
  {
    id: 2,
    icon: Cloud,
    title: 'Maatwerk administratieve oplossingen',
    description: 'Workflows en instellingen afgestemd op de behoeften van jouw bedrijf, van dagelijkse boekhouding tot gestructureerde financiële processen.'
  },
  {
    id: 3,
    icon: Globe,
    title: 'Praktische financiële inzichten',
    description: 'Duidelijke uitleg en overzichtelijke weergaven die je helpen je cijfers te begrijpen en de controle te houden.'
  },
  {
    id: 4,
    icon: Database,
    title: 'Data en controle strategieën',
    description: 'Goed gestructureerde rapportages die beter overzicht bieden en je helpen weloverwogen beslissingen te nemen.'
  },
  {
    id: 5,
    icon: Headphones,
    title: 'Doorlopende administratieve ondersteuning',
    description: 'Consistente opvolging en communicatie gedurende het hele jaar zodat je administratie georganiseerd en up to date blijft.'
  },
  {
    id: 6,
    icon: Zap,
    title: 'Efficiënte automatisering en IT ondersteuning',
    description: 'Implementatie van handige tools en automatiseringen die je administratieve werk stroomlijnen en handmatige taken verminderen.'
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
    <section id="features" className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Functies</span>
          </div>
          <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4">
            Belangrijkste voordelen die ons onderscheiden van andere kantoren
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="font-inter max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {/* First Row - Elements render left to right */}
          <div
            ref={firstRowRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16"
          >
            {firstRow.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  className="text-center px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isFirstRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[20px] md:text-[22px] font-medium text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-base leading-relaxed max-w-[320px] sm:max-w-[280px] mx-auto">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Second Row - Elements render left to right */}
          <div
            ref={secondRowRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-12 md:gap-y-16"
          >
            {secondRow.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  id="how-it-works"
                  key={benefit.id}
                  className="text-center px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isSecondRowInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[20px] md:text-[22px] font-medium text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-[14px] sm:text-[15px] md:text-base leading-relaxed max-w-[320px] sm:max-w-[280px] mx-auto">
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