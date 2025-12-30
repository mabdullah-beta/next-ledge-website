'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Salarisadministratie & HR',
    description:
      'Salarisadministratie van eenvoudig tot complex. Wij verzorgen loonverwerking, mutaties, aangiftes en afstemming met wet- en regelgeving, passend bij de inrichting van uw organisatie.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    href: '/services/salarisadministratie-hr'
  },
  {
    id: 2,
    title: 'Boekhouding & Financiële Rapportages',
    description:
      'Volledige financiële administratie van dagelijkse verwerking tot periodieke afsluitingen. Inclusief btw-, IB- en VPB-aangiften en het opstellen van jaarrekeningen.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    href: '/services/boekhouding-financiele-rapportages'
  },
  {
    id: 3,
    title: 'Accounting, Jaarrekening & Financiële Planning',
    description:
      'Vertaling van financiële data naar heldere rapportages en dashboards. Inzicht in resultaten, trends en afwijkingen als basis voor onderbouwde keuzes.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    href: '/services/accounting-jaarrekening-financiele-planning'
  },
  {
    id: 4,
    title: 'Automatisering & IT-oplossingen',
    description:
      'Inzet van IT-oplossingen om financiële, salaris- en HR-processen te automatiseren en organisaties data-driven te laten werken.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    href: '/services/automatisering-it-oplossingen'
  },
  {
    id: 5,
    title: 'Interim-oplossingen',
    description:
      'Tijdelijke ondersteuning binnen finance, salaris en HR bij uitval, projecten of extra capaciteitsbehoefte, met duidelijke afspraken.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    href: '/services/interim-oplossingen'
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
            <span className="text-sm sm:text-base font-semibold text-primary">Onze diensten</span>
          </div>

          <h2 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 max-w-3xl mx-auto leading-tight px-4">
            Betrouwbare expertise die jouw succes versterkt
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
                  <Link href={service.href} className="block">
                    <div className="h-[380px] sm:h-[400px] md:h-[420px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl relative group cursor-pointer bg-white hover:shadow-2xl transition-shadow duration-300">
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
                        <h3 className="text-[17px] sm:text-[18px] md:text-[19px] lg:text-xl font-semibold mb-2 leading-snug group-hover:text-blue-200 transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-white/85 text-[13px] sm:text-[14px] md:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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
