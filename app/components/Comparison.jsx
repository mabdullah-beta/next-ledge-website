"use client";
import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Comparison = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const otherFirms = [
    {
      title: "Service die voor iedereen hetzelfde is",
      description: "Standaard boekhouding met weinig ruimte voor maatgericht advies of vooruitdenken.",
    },
    {
      title: "Reactieve ondersteuning",
      description: "Hulp komt pas wanneer je erom vraagt, niet wanneer je echt begeleiding nodig hebt.",
    },
    {
      title: "Onduidelike prijzen",
      description: "Onverwachte extra kosten die het lastig maken om te budgetteren.",
    },
  ];

  const withStratex = [
    {
      title: "Gedreven door ondernemerschap",
      description: "SalFin wordt gerund door ondernemers uit verschillende sectoren. We begrijpen de praktijk achter de cijfers en weten wat er speelt binnen organisaties.",
    },
    {
      title: "Verder dan doorsnee accountancy",
      description: "Wij gaan verder waar standaard accountancykantoren stoppen. Niet alleen administratie, maar meedenken, doorvragen en overzicht creëren waar het nodig is.",
    },
    {
      title: "Out-of-the-box denken, scherp doorvragen",
      description: "We werken niet vanuit vaste formats. Door goed door te vragen brengen we de echte hulpvraag in beeld en stemmen onze aanpak daarop af.",
    },
    {
      title: "Inzicht, sturing en vooruitkijken",
      description: "SalFin vervult waar nodig de rol van business controller. Samen met klanten stellen we begrotingen op, kijken we vooruit en geven we sturing op basis van cijfers. We vertalen inzichten naar concrete aanbevelingen die helpen bij het maken van keuzes.",
    },
    {
      title: "Data-driven met slimme IT-oplossingen",
      description: "Onze IT-oplossingen zijn gericht op het data-driven maken van organisaties. We passen automatisering toe waar het waarde toevoegt, zodat informatie actueel, toegankelijk en bruikbaar is.",
    },
    {
      title: "Flexibele inzet wanneer het nodig is",
      description: "SalFin fungeert als flexibele schil bij ziekte, zwangerschapsverlof of tijdelijke capaciteitsbehoefte. Wij vullen een rol in voor een afgesproken periode, zonder ingewikkelde voorwaarden. Is onze inzet niet langer nodig, dan stopt de interim- of deta-invulling na 30 dagen.",
    },
    {
      title: "Een partner die naast u staat",
      description: "Geen kleine letters, geen ruis. Duidelijke afspraken en ondersteuning die past bij de situatie.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="font-inter relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
      aria-label="Comparison Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Waarom voor ons kiezen</span>
          </div>
          <h1 className="font-hedvig text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight max-w-2xl mx-auto px-4">
            Meer dan accountants, partners in je zakelijke reis
          </h1>
        </div>

        {/* Comparison Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gradient-to-b from-primary-light/5 to-primary-light/20 border-2 border-primary/20 rounded-2xl sm:rounded-3xl overflow-hidden p-1 sm:p-1.5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Left Column - Other Firms */}
          <div className="font-inter p-6 sm:p-8 md:p-9 lg:p-10 space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10">
            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-black mb-6 sm:mb-7 md:mb-8 lg:mb-9">
              Andere kantoren
            </h3>

            {otherFirms.map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <Check size={18} className="text-gray-400 sm:w-5 sm:h-5" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-semibold text-black mb-1.5 sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[14px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - With SalFin */}
          <div className="bg-white p-6 sm:p-8 md:p-9 lg:p-10 space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10 rounded-2xl sm:rounded-3xl">
            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-black mb-6 sm:mb-7 md:mb-8 lg:mb-9">
              Met SalFin
            </h3>

            {withStratex.map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-[18px] h-[18px] sm:w-5 sm:h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check size={12} className="text-white sm:w-[14px] sm:h-[14px]" strokeWidth={3} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[17px] sm:text-[18px] md:text-[20px] font-semibold text-black mb-1.5 sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[14px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;