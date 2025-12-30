"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation immediately after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative pt-16 pb-8 md:pt-24 md:pb-16 lg:pt-[90px] lg:pb-20 bg-white"
      aria-label="Hero Section"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30">
        {/* Background container - loads immediately */}
        <div className="relative bg-primary rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">

            {/* Left Content - Scale up animation */}
            <motion.div
              className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-16 lg:px-12 lg:py-20 flex flex-col justify-center z-10 order-1 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 mb-5 sm:mb-7 md:mb-8 lg:mb-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm sm:text-[15px] font-normal text-white">
                  Beoordeeld met 4,9 van 5
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-hedvig text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                Salarisadministratie & HR, boekhouding en accounting.<br />Praktisch ingericht, ondersteund door IT.
              </h1>

              {/* Description */}
              <p className="font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal text-white/80 leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-[520px]">
                SalFin ondersteunt organisaties met salarisadministratie & HR van eenvoudig tot complex, boekhouding van dagelijkse verwerking tot rapportage en accounting voor inzicht en sturing. Deze diensten sluiten naadloos op elkaar aan en vormen samen één overzichtelijk financieel geheel. Op basis van actuele cijfers denken wij mee, signaleren we ontwikkelingen en helpen we vooruitkijken waar dat nodig is, ondersteund door praktische IT-oplossingen.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5">
                <Link
                  href="#contact"
                  className="bg-white text-black pl-4 pr-1.5 py-1 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-between sm:justify-start gap-3 shadow-sm group w-full sm:w-auto"
                >
                  <span>Plan een kennismaking</span>
                  <span className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-full flex items-center justify-center text-white overflow-hidden relative flex-shrink-0">
                    <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-6" />
                    <ArrowRight size={18} strokeWidth={2.5} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                  </span>
                </Link>
                <Link
                  href="#services"
                  className="font-inter bg-transparent px-5 text-white py-2.5 sm:py-2 rounded-full text-[15px] sm:text-[16px] md:text-lg font-semibold hover:bg-white/10 transition-all duration-200 border border-white/20 hover:border-white/30 text-center w-full sm:w-auto"
                >
                  Onze diensten
                </Link>
              </div>
            </motion.div>

            {/* Right Image - Scale up animation */}
            <motion.div
              className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] lg:block p-4 sm:p-5 md:p-6 flex justify-end items-center order-2 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.10 }}
            >
              <div className="relative w-full lg:w-[85%] xl:w-[80%] h-full rounded-2xl sm:rounded-2xl md:rounded-3xl overflow-hidden lg:ml-auto">
                <Image
                  src="/image.png"
                  alt="Business consulting professional"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;