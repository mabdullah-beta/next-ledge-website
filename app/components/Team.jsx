'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Daniel Lee',
    title: 'Financial & Growth Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    title: 'Lead Consultant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'James Carter',
    title: 'Business Expertultant',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Emily Ross',
    title: 'Efficiency Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop'
  },
  {
    id: 5,
    name: 'Michael Chen',
    title: 'Strategy Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    title: 'Operations Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'
  }
];

export default function TeamSection() {
  // State: Current carousel position
  const [currentIndex, setCurrentIndex] = useState(0);
  // State: Controls automatic sliding when section is visible
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  // State: Track if viewport is mobile size
  const [isMobile, setIsMobile] = useState(false);
  // Ref: Used to track section visibility for auto-play
  const sectionRef = useRef(null);

  // Effect: Detect mobile/desktop view and update on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate visible cards: 4 on desktop, 1 on mobile
  const cardsToShow = isMobile ? 1 : 4;
  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);

  // Effect: Start/stop auto-play when section enters/leaves viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAutoPlaying(true);
        } else {
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Effect: Auto-scroll carousel every 3 seconds when auto-playing
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Manual navigation: Go to previous card and stop auto-play
  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  // Manual navigation: Go to next card and stop auto-play
  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 md:py-20 sm:py-12 md:px-4" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="font-hedvig text-center mb-16 md:mb-16 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className=" text-base font-semimedium text-primary">our team</span>
          </div>
          <h2 className="font-hedvig text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-5 px-4">
            Meet the experts behind your business success
          </h2>
        </div>

        {/* Team Cards Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Edge Fade - Desktop Only */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Cards Container */}
          <div className="overflow-hidden px-4 lg:px-4 sm:px-0">
            <div 
              className="flex gap-8 lg:gap-8 sm:gap-0 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 px-2 lg:px-0"
                  style={{ 
                    width: isMobile 
                      ? '100%' 
                      : `calc(${100 / cardsToShow}% - ${(32 * (cardsToShow - 1)) / cardsToShow}px)` 
                  }}
                >
                  <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                    {/* Image */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className=" text-sm md:text-xl font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base ">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="w-10 h-10 lg:w-10 lg:h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            aria-label="Previous member"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 lg:w-10 lg:h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            aria-label="Next member"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

   
      </div>
    </section>
  );
}