'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Simple Booking',
    description: 'Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    imagePosition: 'left' // Image on left, content on right
  },
  {
    id: '02',
    title: 'Tailored Strategy',
    description: 'We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    imagePosition: 'right' // Content on left, image on right
  },
  {
    id: '03',
    title: 'Continuous Support',
    description: 'From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    imagePosition: 'left' // Image on left, content on right
  }
];

export default function HowItWorksSection() {
  return (
    <section className="font-inter w-full bg-white py-20 md:py-20 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-20 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-6 sm:mb-4">
            <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
            <span className="font-inter text-sm font-medium text-[#1f514c]">How it works</span>
          </div>
          <h2 className="font-hedvig text-[35px] md:text-[45px] sm:text-[32px] text-gray-900 leading-tight mb-8 md:mb-8 sm:mb-6 max-w-xl mx-auto px-4">
            A proven process to achieve your biggest goals
          </h2>
          <button className="inline-flex items-center gap-3 bg-teal-800 hover:bg-teal-900 text-white px-1 pl-4 py-1 rounded-full transition-all duration-200 group">
            <span className="font-semibold">Get in touch</span>
            {/* Arrow animation: Two arrows for slide effect */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
              <ArrowRight className="w-5 h-5 text-teal-800 transition-transform duration-300 group-hover:translate-x-6" />
              <ArrowRight className="w-5 h-5 text-teal-800 absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
            </div>
          </button>
        </div>

        {/* Steps with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          {/* Desktop: centered, Mobile: on the left at 30px */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:-translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {/* Number Badge on Timeline - Desktop */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-teal-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Content Row - Desktop */}
                  <div className="grid grid-cols-2 gap-12 items-center">
                    {step.imagePosition === 'left' ? (
                      <>
                        {/* Image on Left */}
                        <div className="pr-12">
                          <div className="relative w-[80%] h-[295px] rounded-3xl overflow-hidden shadow-xl ml-auto">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                              sizes="50vw"
                            />
                          </div>
                        </div>

                        {/* Content on Right */}
                        <div className="pl-16">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            {step.title}
                          </h3>
                          <p className="antialiased text-gray-700 text-base leading-relaxed mb-6">
                            {step.description}
                          </p>
                          <button className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all">
                            Discover More
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Content on Left */}
                        <div className="pr-16 text-right">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            {step.title}
                          </h3>
                          <p className="antialiased text-base leading-relaxed mb-6 font-semibold text-[#636363]">
                            {step.description}
                          </p>
                          <div className="flex justify-end">
                            <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                              Discover More
                              <ArrowRight className="w-5 h-5 rotate-180" />
                            </button>
                          </div>
                        </div>

                        {/* Image on Right */}
                        <div className="pl-12">
                          <div className="relative w-[80%] h-[295px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                              src={step.image}
                              alt={step.title}
                              fill
                              className="object-cover"
                              sizes="50vw"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden pl-16">
                  {/* Number Badge - Mobile (left side with gap from timeline) */}
                  <div className="absolute left-[30px] top-0 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-teal-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Image First - Mobile */}
                  <div className="mb-8 mt-16">
                    <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>

                  {/* Content Below Image - Mobile */}
                  <div>
                    <h3 className="text-[24px] font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="antialiased text-gray-600 text-base leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-gray-900 font-bold hover:gap-3 transition-all">
                      Discover More
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}