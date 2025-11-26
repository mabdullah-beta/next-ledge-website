"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      ref={sectionRef}
      className="font-hedvig w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8"
      id="testimonial"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Star Rating - Animates first */}
        <motion.div 
          className="flex items-center justify-center gap-1 mb-6 sm:mb-7 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-black text-black" />
          ))}
          <span className="ml-2 sm:ml-3 text-base sm:text-lg font-normal text-gray-900">
            Rated 4.9/5
          </span>
        </motion.div>

        {/* Testimonial Text - Animates second */}
        <motion.h2 
          className="font-hedvig text-[22px] sm:text-[26px] md:text-[30px] lg:text-3xl text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Nextledge revolutionized our customer
          understanding, boosting retention like
          never before.
        </motion.h2>

        {/* Author Info - Animates third */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Avatar */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              alt="Muzamal Hussain"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          {/* Name and Badges */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-1">
              Muzamal Hussain
            </h3>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 sm:py-1.5 rounded-xl">
              <span className="flex items-center gap-2 text-[10px] sm:text-[11px] text-primary font-medium">
                High conversion  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>2x sales
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}