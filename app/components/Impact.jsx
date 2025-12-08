'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { id: 1, value: '$7M+', label: 'Omzet', position: 'left-top' },
  { id: 2, value: '78%', label: 'Impact', position: 'right-top' },
  { id: 3, value: '72%', label: 'Groei', position: 'left-middle' },
  { id: 4, value: '1%', label: 'Ontwerpers', position: 'right-middle' },
  { id: 5, value: '65%', label: 'Vaardigheden', position: 'left-bottom' },
  { id: 6, value: '10+', label: 'Consultants', position: 'right-bottom' }
];

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="font-hedvig text-center mb-12 sm:mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm sm:text-base font-semimedium text-primary">impact</span>
          </div>

          <h2 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-4 sm:mb-5 px-4">
            Echte resultaten die blijvende impact creëren voor iedereen
          </h2>

          <p className="font-inter text-[15px] sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            We leveren op maat gemaakte strategieën, innovatieve oplossingen en toegewijde ondersteuning om duurzame groei te realiseren
          </p>
        </div>

        {/* Stats + Image */}
        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mr-28">

          {/* Mobile Stats */}
          <motion.div
            className="lg:hidden mb-8 sm:mb-10 space-y-4 sm:space-y-6 px-2 sm:px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">

              {/* Omzet */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-light rounded-full px-2 sm:px-3 py-1">
                <div className="bg-primary text-white px-2 py-0.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm">$7M+</span>
                </div>
                <span className="text-gray-900 font-medium text-xs sm:text-sm">Omzet</span>
              </div>

              {/* Impact */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-light rounded-full px-2 sm:px-3 py-1">
                <div className="bg-primary text-white px-2 py-0.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm">78%</span>
                </div>
                <span className="text-gray-900 font-medium text-xs sm:text-sm">Impact</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">

              {/* Groei */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-light rounded-full px-2 py-1">
                <div className="bg-primary text-white px-2 py-0.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm">72%</span>
                </div>
                <span className="text-gray-900 font-medium text-xs sm:text-sm">Groei</span>
              </div>

              {/* Ontwerpers */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-light rounded-full px-2 py-1">
                <div className="bg-primary text-white px-2 py-0.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm">1%</span>
                </div>
                <span className="text-gray-900 font-medium text-xs sm:text-sm">Ontwerpers</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">

              {/* Vaardigheden */}
              <div className="flex items-center gap-1.5 bg-gray-light rounded-full px-2 py-1">
                <div className="bg-primary text-white px-2 py-0.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm">65%</span>
                </div>
                <span className="text-gray-900 font-medium text-xs sm:text-sm">Vaardigheden</span>
              </div>

              {/* Consultants */}
              <div className="flex items-center gap-1.5 bg-gray-light rounded-full px-2 py-1">
                <div className="bg-primary text-white px-2 py-0.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm">10+</span>
                </div>
                <span className="text-gray-900 font-medium text-xs sm:text-sm">Consultants</span>
              </div>
            </div>
          </motion.div>

          {/* Central Image */}
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-full sm:w-[340px] md:w-[380px] h-[400px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                alt="Professionele consultant"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 340px, 380px"
                priority
              />
            </div>
          </motion.div>

          {/* Desktop Floating Stats - LEFT */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block w-full">
            <div className="relative">

              {/* Omzet */}
              <motion.div
                className="absolute left-8 top-[-140px] flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1">
                  <div className="bg-primary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">$7M+</span>
                  </div>
                  <span className="text-black font-medium text-base">Omzet</span>
                </div>
                <div className="w-20 h-px bg-gray-300"></div>
              </motion.div>

              {/* Groei */}
              <motion.div
                className="absolute left-4 top-0 flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1">
                  <div className="bg-primary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">72%</span>
                  </div>
                  <span className="text-black font-medium text-base">Groei</span>
                </div>
                <div className="w-28 h-px bg-gray-300"></div>
              </motion.div>

              {/* Vaardigheden */}
              <motion.div
                className="absolute left-14 top-[140px] flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1">
                  <div className="bg-primary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">65%</span>
                  </div>
                  <span className="text-black font-medium text-base">Vaardigheden</span>
                </div>
                {/* Connecting Line */}
                <div className="w-24 h-px bg-gray-300"></div>
              </motion.div>

            </div>
          </div>

          {/* Desktop Floating Stats - RIGHT */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-full">
            <div className="relative">
              {/* 78% Impact - Top */}
              <motion.div
                className="absolute right-20 top-[-140px] flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                {/* Connecting Line */}
                <div className="w-32 h-px bg-gray-300"></div>
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1">
                  <div className="bg-primary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">78%</span>
                  </div>
                  <span className="text-black font-medium text-base">Impact</span>
                </div>
              </motion.div>

              {/* 1% Designers - Middle */}
              <motion.div
                className="absolute right-20 top-0 flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                {/* Connecting Line */}
                <div className="w-28 h-px bg-gray-300"></div>
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1">
                  <div className="bg-primary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">1%</span>
                  </div>
                  <span className="text-black font-medium text-base">Ontwerpers</span>
                </div>
              </motion.div>

              {/* Consultants */}
              <motion.div
                className="absolute right-26 top-[140px] flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <div className="w-20 h-px bg-gray-300"></div>
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1">
                  <div className="bg-primary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">10+</span>
                  </div>
                  <span className="text-black font-medium text-base">Consultants</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}