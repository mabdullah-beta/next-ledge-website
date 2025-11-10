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
      className="font-hedvig w-full bg-white py-20 md:px-8 px-2"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Star Rating - Animates first */}
        <motion.div 
          className="flex items-center justify-center gap-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-black text-black" />
          ))}
          <span className="ml-3 text-lg font-normal text-gray-900">
            Rated 4.9/5
          </span>
        </motion.div>

        {/* Testimonial Text - Animates second */}
        <motion.h2 
          className="font-hedvig text-3xl md:text-3xl text-gray-900 leading-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Startex revolutionized our customer
          understanding, boosting retention like
          never before.
        </motion.h2>

        {/* Author Info - Animates third */}
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* Avatar */}
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              alt="Muzamal Hussain"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          {/* Name and Badges */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              Muzamal Hussain
            </h3>
            <div className="flex items-center gap-2 bg-mint px-3 py-1 rounded-xl">
              <span className="flex items-center gap-2 text-[10px] text-primary">
                High conversion  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>2x sales
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}