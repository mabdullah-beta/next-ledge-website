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
        <div className="relative bg-white md:bg-primary rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">

            {/* Left Content - Scale up animation */}
            <motion.div
              className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-16 lg:px-12 lg:py-20 flex flex-col justify-center z-10 order-1 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              
              {/* Heading */}
              <h1 className="font-hedvig text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-normal text-black md:text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                Salarisadministratie & HR, boekhouding en accounting.<br />Praktisch, efficiënt, IT-ondersteund.
              </h1>

              {/* Description */}
              <p className="font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal text-black md:text-white/80 leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-[520px]">
                SalFin biedt complete financiële dienstverlening: van salarisadministratie & HR tot boekhouding en accounting. Onze diensten vormen één naadloos geheel, ondersteund door praktische IT-oplossingen. We denken proactief mee op basis van actuele cijfers en helpen u vooruitkijken.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-5">
                <Link
                  href="#contact"
                  className="bg-white text-black pl-4 pr-1.5 py-1 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-between sm:justify-start gap-3 shadow-sm group w-full sm:w-auto"
                >
                  <span>Plan een kennismaking</span>
                  <span className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-full flex items-center justify-center text-white overflow-hidden relative shrink-0">
                    <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-6" />
                    <ArrowRight size={18} strokeWidth={2.5} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                  </span>
                </Link>
                <Link
                  href="#services"
                  className="font-inter bg-transparent px-5 text-black md:text-white py-2.5 sm:py-2 rounded-full text-[15px] sm:text-[16px] md:text-lg font-semibold hover:bg-white/10 transition-all duration-200 border border-black/20 md:border-white/20 hover:border-white/30 text-center w-full sm:w-auto"
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