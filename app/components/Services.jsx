'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Boekhouding en Financiële Administratie',
    description:
      'Nauwkeurig, volgens de regels en altijd up to date. We verzorgen je boekhouding, btw aangiften, jaarrekeningen en alle andere administratieve taken met precisie. We gaan verder dan de basis en helpen je je cijfers te begrijpen zodat je ziet hoe gezond je bedrijf echt is.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    href: '/services/accounting-financial-administration'
  },
  {
    id: 2,
    title: 'Automatisering en IT Integratie',
    description:
      'Efficiëntie door slimme technologie. We analyseren waar automatisering en IT je financiële processen kunnen vereenvoudigen, tijd kunnen besparen en handmatig werk kunnen verminderen. Ons doel is om je bij te laten blijven met ontwikkelingen in AI en digitale tools zodat je bedrijf soepeler draait en meer datagedreven wordt.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    href: '/services/automation-it-integration'
  },
  {
    id: 3,
    title: 'Financiële Inzichten en Rapportage',
    description:
      'Duidelijkheid die betere beslissingen stimuleert. We maken van financiële data heldere inzichten via visuele rapportages en prestatie dashboards. Met de juiste informatie op het juiste moment kun je de gezondheid van je bedrijf volgen en met vertrouwen beslissingen nemen.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    href: '/services/financial-insights-reporting'
  },
  {
    id: 4,
    title: 'Budgettering en Forecasting',
    description:
      'Plan vandaag met morgen in gedachten. We helpen je realistische budgetten op te stellen, financiele prognoses te maken en verschillende groeiscenarios te verkennen zodat je voorbereid bent op wat komt.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    href: '/services/budgeting-forecasting'
  },
  {
    id: 5,
    title: 'Advies en Bedrijfsondersteuning',
    description:
      'Je partner in elke groeifase. We werken met je samen om resultaten te analyseren, uitdagingen te bespreken en kansen te identificeren. Ons doel is om je duidelijkheid en vertrouwen te geven om de volgende stap te zetten, ondersteund door data in plaats van giswerk.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    href: '/services/advisory-business-support'
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
