'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    id: '01',
    title: 'Simple & efficient',
    abt: 'Easy and seamless scheduling',
    description: 'Effortlessly schedule a consultation to discuss your goals, needs, and challenges. We listen, analyze your situation, and identify where automation and optimization can make the biggest impact—so we can start quickly and effectively.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    imagePosition: 'left' // Image on left, content on right
  },
  {
    id: '02',
    title: 'Automating where it matters',
    abt: 'Less manual work, more clarity',
    description: 'Automation doesn’t mean losing the human touch. We stay closely involved, provide proactive advice, and think along with you during important decisions. You’ll have a dedicated expert who truly understands your business.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    imagePosition: 'right' // Content on left, image on right
  },
  {
    id: '03',
    title: 'Personal guidance',
    abt: 'Always an expert by your side',
    description: 'From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    imagePosition: 'left' // Image on left, content on right
  }, {
    id: '04',
    title: 'Growing with confidence',
    abt: 'Turning numbers into strategy',
    description: 'With clear numbers and smart financial insights, we help you make confident, strategic decisions. Whether you want to scale, invest, or improve efficiency, Nexledge gives you the clarity to move forward.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right' // Image on left, content on right
  }
];

function StepItem({ step, index }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { once: true, amount: 0.3 });

  return (
    <div ref={stepRef} className="relative">
      {/* Timeline Line Segment - only between steps, not after the last one */}
      {index < steps.length - 1 && (
        <div className="absolute left-[30px] md:left-1/2 top-[calc(50%+28px)] w-px h-[calc(100%+4.5rem)] md:h-[calc(100%+6.5rem)] bg-gray-300 md:-translate-x-1/2"></div>
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
        <div className="grid grid-cols-2 gap-12 items-center">
          {step.imagePosition === 'left' ? (
            <>
              {/* Image on Left - Animated */}
              <motion.div
                className="pr-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-[80%] h-[295px] rounded-3xl overflow-hidden shadow-xl ml-auto">
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
                className="pl-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <h3 className="text-[28px] font-semibold text-gray-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <h4 className='text-[16px] font-semibold text-primary mb-6 tracking-tight w-fit'>
                  {step.abt}
                </h4>
                <p className="antialiased text-gray-700 text-base leading-relaxed mb-6">
                  {step.description}
                </p>
                <button className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all">
                  Discover More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </>
          ) : (
            <>
              {/* Content on Left - Animated */}
              <motion.div
                className="pr-16 text-right"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-[28px] font-semibold text-gray-900 mb-6">
                  {step.title}
                </h3>
                <h4 className='text-[16px] font-semibold text-primary mb-6 tracking-tight'>
                  {step.abt}
                </h4>
                <p className="antialiased text-base leading-relaxed mb-6 font-semibold text-body">
                  {step.description}
                </p>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                    Discover More
                    <ArrowRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>
              </motion.div>

              {/* Image on Right - Animated */}
              <motion.div
                className="pl-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <div className="relative w-[80%] h-[295px] rounded-3xl overflow-hidden shadow-xl">
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
      <div className="md:hidden pl-16">
        {/* Number Badge - Mobile */}
        <div className="absolute left-[30px] top-0 -translate-x-1/2 z-10">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
            {step.id}
          </div>
        </div>

        {/* Image First - Mobile - Animated */}
        <motion.div
          className="mb-8 mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-xl">
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
          <h3 className="text-[28px] font-semibold text-gray-900 mb-3">
            {step.title}
          </h3>
          <p className="antialiased text-gray-600 text-base leading-relaxed mb-5">
            {step.description}
          </p>
          <button className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all">
            Discover More
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="tracking-tight font-inter w-full bg-white py-20 md:py-20 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-20 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-6 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-base font-semimedium text-primary">How it works</span>
          </div>
          <h2 className="font-hedvig text-heading-lg text-gray-900 leading-tight mb-8 md:mb-8 sm:mb-6 max-w-xl mx-auto px-4">
            A proven process to achieve your biggest goals
          </h2>
          <button className="inline-flex items-center gap-3 bg-primary  text-white px-1 pl-4 py-1 rounded-full transition-all duration-200 group">
            <span className="font-semibold">Get in touch</span>
            {/* Arrow animation: Two arrows for slide effect */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
              <ArrowRight className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-6" />
              <ArrowRight className="w-5 h-5 text-primary absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
            </div>
          </button>
        </div>

        {/* Steps with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}