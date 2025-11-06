"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative pt-20 pb-10 md:pt-[90px] md:pb-20 sm:pt-[90px] sm:pb-10 bg-white"
      aria-label="Hero Section"
    >
      <div className="max-w-full mx-auto px-5 md:px-32 sm:px-5">
        <div
          className={`relative bg-[#1f514c] rounded-4xl md:rounded-4xl sm:rounded-3xl overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px] md:min-h-[600px] sm:min-h-auto">
            <div className="px-6 py-0 md:px-12 md:py-20  flex flex-col justify-center z-10">
              <div className="inline-flex items-center gap-2.5 mb-7 md:mb-10 pt-9 md:pt-10 ">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-white fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[15px] font-normal text-white">
                  Rated 4.9/5
                </span>
              </div>
              <h1
                className="font-hedvig text-[43px] lg:text-[49px] md:text-[48px] sm:text-[36px] font-normal text-white leading-[1.15] tracking-tight mb-4 md:mb-6 sm:mb-5"
              >
                Expert consulting that drives real growth
              </h1>
              <p className="font-inter text-[18px] lg:text-[19px] md:text-[17px] sm:text-[16px] font-normal text-white/80 leading-relaxed mb-5 md:mb-10 sm:mb-8 max-w-[520px]">
                Elevate your business with expert insights, tailored strategies,
                and unwavering support designed
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="#contact"
                  className="bg-white text-[#1f514c] pl-3 pr-2 py-0.5 rounded-full text-[15px] font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-sm whitespace-nowrap group"
                >
                  Get in touch
                  <span className="w-9 h-9 bg-[#1f514c] rounded-full flex items-center justify-center text-white overflow-hidden relative">
                    <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-6" />
                    <ArrowRight size={20} strokeWidth={2.5} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                  </span>
                </Link>
                <Link
                  href="#services"
                  className="font-inter bg-transparent text-white  py-3.5 rounded-full text-[18px] font-semibold hover:bg-white/10 transition-all duration-200 border border-transparent whitespace-nowrap"
                >
                  What we do
                </Link>
              </div>
            </div>


            <div className="relative h-full min-h-[600px] md:min-h-[600px] sm:min-h-[400px] lg:block sm:block p-5 md:p-6 sm:p-4 flex justify-end items-center">
              <div className="relative w-full md:w-[80%] h-full rounded-3xl md:rounded-3xl sm:rounded-2xl overflow-hidden ml-auto">
                <Image src="https://framerusercontent.com/images/wHPEsYa9YHcGTTHOJvS0mO9XY.jpg" alt="Business consulting professional" fill priority className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
