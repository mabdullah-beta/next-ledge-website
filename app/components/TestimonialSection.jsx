"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="font-hedvig w-full bg-white py-20 md:px-8 px-2">
      <div className="max-w-2xl mx-auto text-center">
        {/* Star Rating */}
        <div className="flex items-center justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-black text-black" />
          ))}
          <span className="ml-3 text-lg font-normal text-gray-900">
            Rated 4.9/5
          </span>
        </div>

        {/* Testimonial Text */}
        <h2 className="font-hedvig text-3xl md:text-3xl  text-gray-900 leading-tight mb-12">
          Startex revolutionized our customer
          understanding, boosting retention like
          never before.
        </h2>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-4">
          {/* Avatar */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
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
            <div className="flex items-center gap-2 bg-[#f0ffe7]">
              <span className="flex items-center gap-2 text-sm text-gray-700">
                
                High conversion   <span className="mx-1">·</span> <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>2x sales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
