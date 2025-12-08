'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Accounting & Financial Administration',
    description:
      'Accurate, compliant, and always up to date. We handle your bookkeeping, VAT returns, annual reports, and all other administrative tasks with precision. But we go beyond the basics — helping you understand your numbers so you can see how healthy your business really is.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Automation & IT Integration',
    description:
      'Efficiency through smart technology. We analyse where automation and IT can simplify your financial processes, save time, and reduce manual work. Our focus is to help you stay up to date with developments in AI and digital tools — so your business runs smoother and becomes more data-driven.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Financial Insights & Reporting',
    description:
      'Clarity that drives better decisions. We turn financial data into clear insights through visual reporting and performance dashboards. With the right information at the right time, you can monitor your business health and make decisions with confidence.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Budgeting & Forecasting',
    description:
      'Plan today with tomorrow in mind. We help you build realistic budgets, create financial forecasts, and explore different growth scenarios — so you\'re prepared for what\'s ahead.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Advisory & Business Support',
    description:
      'Your partner in every stage of growth. We work alongside you to analyse results, discuss challenges, and identify opportunities. Our goal is to give you the clarity and confidence to take the next step — backed by data, not guesswork.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const maxIndex = Math.max(0, services.length - cardsToShow);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8"
      id="services"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="text-sm sm:text-base font-semibold text-primary">Our Services</span>
          </div>

          <h2 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 max-w-3xl mx-auto leading-tight px-4">
            Reliable expertise to drive your greatest success
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          {/* Soft Fading Edges - Only on desktop */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 xl:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-12 xl:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Cards */}
          <div className={`overflow-hidden ${isMobile ? 'px-0' : 'px-2 md:px-4'}`}>
            <div
              className={`flex transition-transform duration-700 ease-out ${isMobile ? 'gap-0' : 'gap-5 md:gap-6 lg:gap-8'
                }`}
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0"
                  style={{
                    width: isMobile
                      ? '100%'
                      : isTablet
                        ? 'calc(50% - 10px)'
                        : `calc(${100 / cardsToShow}% - 21px)`,
                  }}
                >
                  <div className="h-[380px] sm:h-[400px] md:h-[420px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl relative group cursor-pointer bg-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-0 p-4 sm:p-5 md:p-6 text-white">
                      <h3 className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-xl font-semibold mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-white/85 text-[13px] sm:text-[14px] md:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
