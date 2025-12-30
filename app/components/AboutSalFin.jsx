'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSalFin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="font-hedvig text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Over SalFin</span>
          </div>
          <h2 className="font-hedvig max-w-4xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 mb-8 sm:mb-10 md:mb-12">
            Ontstaan vanuit de praktijk van het ondernemen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              SalFin is ontstaan vanuit de praktijk van het ondernemen. Wij worden gerund door ondernemers uit verschillende sectoren en weten hoe het is om beslissingen te moeten nemen op basis van cijfers die nog niet altijd compleet zijn. Juist daar ging het vaak mis: administratie die wel werd opgeleverd, maar onvoldoende houvast gaf om echt keuzes te maken.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              Daarom geloven wij dat administratie meer moet zijn dan verwerken en afronden. Cijfers moeten helpen om richting te bepalen, risico's te herkennen en vooruit te kijken. Vanuit die overtuiging is SalFin gestart.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              Wij ondersteunen organisaties met salarisadministratie, HR-ondersteuning, boekhouding, accounting en financiële sturing. Dat doen we nuchter en praktisch. We werken niet vanuit vaste formats, maar sluiten aan op hoe een organisatie daadwerkelijk werkt.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
