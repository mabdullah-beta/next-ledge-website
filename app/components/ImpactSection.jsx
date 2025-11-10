'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { id: 1, value: '$7M+', label: 'Revenue', position: 'left-top' },
  { id: 2, value: '78%', label: 'Impact', position: 'right-top' },
  { id: 3, value: '72%', label: 'Growth', position: 'left-middle' },
  { id: 4, value: '1%', label: 'Designers', position: 'right-middle' },
  { id: 5, value: '65%', label: 'Skills', position: 'left-bottom' },
  { id: 6, value: '10+', label: 'Consultants', position: 'right-bottom' }
];

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-16 md:mb-16 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="dot-indicator bg-secondary-light rounded-full"></div>
            <span className="font-inter text-sm font-medium text-primary">impact</span>
          </div>
          <h2 className="font-hedvig text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-5">
            Real results that drive lasting impact for everyone
          </h2>
          <p className="font-inter text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deliver tailored strategies, innovative solutions and dedicated support to drive lasting growth
          </p>
        </div>

        {/* Stats with Image */}
        <div className="relative max-w-5xl mx-auto mt-20 mr-12">
          {/* Mobile Stats - Above Image - Animated */}
          <motion.div 
            className="lg:hidden mb-8 space-y-6 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-8">
              {/* $7M+ Revenue */}
              <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                <div className="bg-secondary text-white px-2 py-1 rounded-full">
                  <span className="font-bold text-base">$7M+</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Revenue</span>
              </div>
              {/* 78% Impact */}
              <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                <div className="bg-secondary text-white px-3 py-1 rounded-full">
                  <span className="font-bold text-base">78%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Impact</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-8">
              {/* 72% Growth */}
              <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                <div className="bg-secondary text-white px-3 py-1 rounded-full">
                  <span className="font-bold text-base">72%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Growth</span>
              </div>
              {/* 1% Designers */}
              <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                <div className="bg-secondary text-white px-3 py-1 rounded-full">
                  <span className="font-bold text-base">1%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Designers</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-8">
              {/* 65% Skills */}
              <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                <div className="bg-secondary text-white px-3 py-1 rounded-full">
                  <span className="font-bold text-base">65%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Skills</span>
              </div>
              {/* 10+ Consultants */}
              <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                <div className="bg-secondary text-white px-3 py-1 rounded-full">
                  <span className="font-bold text-base">10+</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Consultants</span>
              </div>
            </div>
          </motion.div>

          {/* Central Image - Animated first */}
          <motion.div 
            className="relative w-[full] max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-[380px] h-[480px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                alt="Professional consultant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
            </div>
          </motion.div>

          {/* Floating Stats Badges with Lines - Desktop Only */}
          {/* Left Side Stats - Animated from left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block w-full">
            <div className="relative">
              {/* $7M+ Revenue - Top */}
              <motion.div 
                className="absolute left-8 top-[-140px] flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                  <div className="bg-secondary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">$7M+</span>
                  </div>
                  <span className="text-black font-medium text-base">Revenue</span>
                </div>
                {/* Connecting Line */}
                <div className="w-20 h-px bg-gray-300"></div>
              </motion.div>

              {/* 72% Growth - Middle */}
              <motion.div 
                className="absolute left-4 top-0 flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                  <div className="bg-secondary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">72%</span>
                  </div>
                  <span className="text-black font-medium text-base">Growth</span>
                </div>
                {/* Connecting Line */}
                <div className="w-28 h-px bg-gray-300"></div>
              </motion.div>

              {/* 65% Skills - Bottom */}
              <motion.div 
                className="absolute left-14 top-[140px] flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                  <div className="bg-secondary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">65%</span>
                  </div>
                  <span className="text-black font-medium text-base">Skills</span>
                </div>
                {/* Connecting Line */}
                <div className="w-24 h-px bg-gray-300"></div>
              </motion.div>
            </div>
          </div>

          {/* Right Side Stats - Animated from right */}
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
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                  <div className="bg-secondary rounded-full px-3 py-1">
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
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                   <div className="bg-secondary rounded-full px-3 py-1">
                    <span className="text-white font-bold text-base">1%</span>
                  </div>
                  <span className="text-black font-medium text-base">Designers</span>
                </div>
              </motion.div>

              {/* 10+ Consultants - Bottom */}
              <motion.div 
                className="absolute right-26 top-[140px] flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              >
                {/* Connecting Line */}
                <div className="w-20 h-px bg-gray-300"></div>
                <div className="flex items-center gap-2 bg-gray-light rounded-full px-3 py-1 ">
                   <div className="bg-secondary rounded-full px-3 py-1">
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