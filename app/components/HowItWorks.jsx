'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    id: '01',
    title: 'Eenvoudig en efficiënt',
    abt: 'Makkelijke en soepele planning',
    description: 'Plan moeiteloos een consult om je doelen, behoeften en uitdagingen te bespreken. We luisteren, analyseren je situatie en bepalen waar automatisering en optimalisatie de grootste impact kunnen hebben zodat we snel en effectief kunnen starten.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    imagePosition: 'left'
  },
  {
    id: '02',
    title: 'Automatiseren waar het telt',
    abt: 'Minder handmatig werk, meer duidelijkheid',
    description: "Automatisering betekent niet dat de menselijke betrokkenheid verdwijnt. We blijven nauw betrokken, geven proactief advies en denken met je mee bij belangrijke beslissingen. Je krijgt een vaste expert die jouw bedrijf echt begrijpt.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    imagePosition: 'right'
  },
  {
    id: '03',
    title: 'Persoonlijke begeleiding',
    abt: 'Altijd een expert aan je zijde',
    description: 'Van implementatie tot optimalisatie bieden we doorlopende begeleiding en aanpassingen om langdurige groei voor jou te verzekeren.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    imagePosition: 'left'
  },
  {
    id: '04',
    title: 'Groeien met vertrouwen',
    abt: 'Van cijfers naar strategie',
    description: 'Met duidelijke cijfers en slimme financiële inzichten helpen we je stevige, strategische keuzes te maken. Of je nu wilt opschalen, investeren of efficiënter wilt werken, Nexledge geeft je de helderheid om vooruit te komen.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right'
  }
];

function StepItem({ step, index }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.3 });

  return (
    <div ref={stepRef} className="relative">
      {/* Timeline Line Segment - only between steps, not after the last one */}
      {index < steps.length - 1 && (
        <div className="absolute left-[22px] sm:left-[26px] md:left-1/2 top-[calc(50%+20px)] sm:top-[calc(50%+24px)] md:top-[calc(50%+28px)] w-px h-[calc(100%+3rem)] sm:h-[calc(100%+4rem)] md:h-[calc(100%+6.5rem)] bg-gray-300 md:-translate-x-1/2"></div>
      )}

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Number Badge on Timeline - Desktop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
            {step.id}
          </div>
        </div>

        {/* Content Row - Desktop */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
          {step.imagePosition === 'left' ? (
            <>
              {/* Image on Left - Animated */}
              <motion.div
                className="pr-8 lg:pr-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-[85%] lg:w-[80%] h-[240px] lg:h-[295px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl ml-auto">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </motion.div>

              {/* Content on Right - Animated */}
              <motion.div
                className="pl-12 lg:pl-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <h3 className="text-[24px] lg:text-[28px] font-semibold text-gray-900 mb-2 lg:mb-3 tracking-tight">
                  {step.title}
                </h3>
                <h4 className='text-[15px] lg:text-[16px] font-semibold text-primary mb-4 lg:mb-6 tracking-tight w-fit'>
                  {step.abt}
                </h4>
                <p className="antialiased text-gray-700 text-[15px] lg:text-base leading-relaxed mb-5 lg:mb-6">
                  {step.description}
                </p>
                <button className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all text-sm lg:text-base">
                  Ontdek meer
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </motion.div>
            </>
          ) : (
            <>
              {/* Content on Left - Animated */}
              <motion.div
                className="pr-12 lg:pr-16 text-right"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-[24px] lg:text-[28px] font-semibold text-gray-900 mb-4 lg:mb-6">
                  {step.title}
                </h3>
                <h4 className='text-[15px] lg:text-[16px] font-semibold text-primary mb-4 lg:mb-6 tracking-tight'>
                  {step.abt}
                </h4>
                <p className="antialiased text-[15px] lg:text-base leading-relaxed mb-5 lg:mb-6 font-semibold text-body">
                  {step.description}
                </p>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all text-sm lg:text-base">
                    Ontdek meer
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 rotate-180" />
                  </button>
                </div>
              </motion.div>

              {/* Image on Right - Animated */}
              <motion.div
                className="pl-8 lg:pl-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <div className="relative w-[85%] lg:w-[80%] h-[240px] lg:h-[295px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pl-10 sm:pl-14">
        {/* Number Badge - Mobile */}
        <div className="absolute left-[22px] sm:left-[26px] top-0 -translate-x-1/2 z-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
            {step.id}
          </div>
        </div>

        {/* Image First - Mobile - Animated */}
        <motion.div
          className="mb-6 sm:mb-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full h-[240px] sm:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Content Below Image - Mobile - Animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <h3 className="text-[22px] sm:text-[26px] font-semibold text-gray-900 mb-2 sm:mb-3">
            {step.title}
          </h3>
          <h4 className='text-[14px] sm:text-[15px] font-semibold text-primary mb-3 sm:mb-4 tracking-tight'>
            {step.abt}
          </h4>
          <p className="antialiased text-gray-600 text-[14px] sm:text-base leading-relaxed mb-4 sm:mb-5">
            {step.description}
          </p>
          <button className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all text-sm sm:text-base">
            Ontdek meer
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="tracking-tight font-inter w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-6">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Hoe het werkt</span>
          </div>
          <h2 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mb-6 sm:mb-7 md:mb-8 max-w-xl mx-auto px-4">
            Een bewezen proces om je grootste doelen te bereiken
          </h2>
          <button className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-white px-1 pl-3 sm:pl-4 py-0.5 sm:py-1 rounded-full transition-all duration-200 group">
            <span className="font-semibold text-sm sm:text-base">Neem contact op</span>
            {/* Arrow animation: Two arrows for slide effect */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300 group-hover:translate-x-6" />
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
            </div>
          </button>
        </div>

        {/* Steps with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-16 sm:space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}