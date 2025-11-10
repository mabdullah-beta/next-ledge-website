'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ArrowRight, ArrowLeft } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Accounting & Financial Administration',
    description: 'Accurate, compliant, and always up to date. We handle your bookkeeping, VAT returns, annual reports, and all other administrative tasks with precision. But we go beyond the basics — helping you understand your numbers so you can see how healthy your business really is.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Automation & IT Integration',
    description: 'Efficiency through smart technology. We analyse where automation and IT can simplify your financial processes, save time, and reduce manual work. Our focus is to help you stay up to date with developments in AI and digital tools — so your business runs smoother and becomes more data-driven.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Financial Insights & Reporting',
    description: 'Clarity that drives better decisions. We turn financial data into clear insights through visual reporting and performance dashboards. With the right information at the right time, you can monitor your business health and make decisions with confidence.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Budgeting & Forecasting',
    description: 'Plan today with tomorrow in mind. We help you build realistic budgets, create financial forecasts, and explore different growth scenarios — so you\'re prepared for what\'s ahead.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Advisory & Business Support',
    description: 'Your partner in every stage of growth. We work alongside you to analyse results, discuss challenges, and identify opportunities. Our goal is to give you the clarity and confidence to take the next step — backed by data, not guesswork.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
  }
];

export default function Slider() {
  // State: Track current slide index (starts at 1)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  // Navigation: Go to previous slide with loop
  const handlePrevious = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Navigation: Go to next slide with loop
  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Calculate which 3 cards to show (left, center, right) for carousel effect
  const getVisibleCards = () => {
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;

    return {
      left: services[prevIndex],
      center: services[currentIndex],
      right: services[nextIndex]
    };
  };

  const cards = getVisibleCards();

  const slideVariants = {
    enter: (direction) => ({
      x: direction === 'next' ? 200 : -200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction === 'next' ? -20 : 20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction === 'next' ? -200 : 200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction === 'next' ? 20 : -20,
      zIndex: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 md:py-12 sm:py-8" id="services">

      {/* Header */}
      <div className="text-center mb-16 md:mb-16 sm:mb-10">
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-6 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
          <span className=" text-base font-semimedium text-primary">Services</span>
        </div>
        <h1 className="font-hedvig text-heading-lg text-gray-900 leading-tight max-w-4xl mx-auto px-4">
          Reliable expertise to drive your<br className="hidden md:block" /> greatest success
        </h1>
      </div>

      {/* Desktop Slider Container - Hidden on Mobile */}
      <div className="hidden md:block relative w-full max-w-[1400px] mt-8">
        <div 
          className="relative h-[450px] flex items-center justify-center gap-4"
          style={{ 
            perspective: '1800px',
            perspectiveOrigin: 'center center'
          }}
        >
          <AnimatePresence initial={false} custom={direction}>

            {/* Left Card */}
            <motion.div
              key={`left-${cards.left.id}`}
              initial={{ opacity: 0, x: -100, rotateY: -45, scale: 0.9 }}
              animate={{
                opacity: 0.5,
                x: -450,
                rotateY: -20,
                scale: 0.9,
                filter: 'blur(1.5px)',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute w-[380px] h-[380px] shrink-0"
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={cards.left.image}
                  alt={cards.left.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{cards.left.title}</h3>
                  <p className="text-gray-200 text-xs leading-relaxed">{cards.left.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Center Card */}
            <motion.div
              key={`center-${cards.center.id}`}
              variants={slideVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute w-[540px] h-[400px] shrink-0"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={cards.center.image}
                  alt={cards.center.title}
                  fill
                  className="object-cover"
                  sizes="540px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-2xl font-semibold mb-3">{cards.center.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{cards.center.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              key={`right-${cards.right.id}`}
              initial={{ opacity: 0, x: 100, rotateY: 45, scale: 0.9 }}
              animate={{
                opacity: 0.5,
                x: 450,
                rotateY: 20,
                scale: 0.9,
                filter: 'blur(1.5px)',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute w-[380px] h-[380px] shrink-0"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={cards.right.image}
                  alt={cards.right.title}
                  fill
                  className="object-cover"
                  sizes="400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{cards.right.title}</h3>
                  <p className="text-gray-200 text-xs leading-relaxed">{cards.right.description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrevious}
            className="absolute left-[calc(50%-290px)] z-40 w-10 h-10 bg-primary  text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[calc(50%-290px)] z-40 w-10 h-10 bg-primary  text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Slider Container - Visible only on Mobile */}
      <div className="md:hidden relative w-full max-w-[600px] mt-8 px-2">
        <div className="relative">
          {/* Mobile Card */}
          <motion.div
            key={`mobile-${cards.center.id}`}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={cards.center.image}
                alt={cards.center.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-semibold mb-3">{cards.center.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{cards.center.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation Buttons - At the edges */}
          <button
            onClick={handlePrevious}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}