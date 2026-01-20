'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSalFin() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="w-full bg-blue-50/30 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
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
              SalFin is ontstaan vanuit de praktijk van het ondernemen. Ondernemen vraagt om keuzes, vaak op momenten waarop cijfers nog niet volledig zijn of verschillende signalen afgeven. In die situaties blijkt administratie regelmatig onvoldoende: correct verwerkt, maar niet bruikbaar voor sturing.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              Daarom werkt SalFin anders. Wij richten processen zo in dat informatie niet alleen klopt, maar ook richting geeft. Door salarisadministratie, HR en finance met elkaar te verbinden ontstaat overzicht, voorspelbaarheid en ruimte om gecontroleerd te handelen.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              Onze rol is niet uitvoerend alleen, maar structurerend en ondersteunend in besluitvorming. SalFin brengt rust in organisaties waar geld en mensen samenkomen.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
