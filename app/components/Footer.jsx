'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full font-inter bg-gray border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-14">
        {/* Desktop Layout */}
        <div className="hidden md:flex my-6 lg:my-10 md:justify-between md:gap-12 lg:gap-24">
          {/* Column 1 - Logo and Description */}
          <div className="flex-shrink-0 max-w-xl md:ml-2 lg:ml-4">

            {/* Logo */}
            <Link href="/" className="flex cursor-pointer items-center gap-2.5 sm:gap-3 group" aria-label="Nexledge Home">

              <div className="w-9 sm:w-10 bg-primary/10 rounded-lg h-9 sm:h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <Image src="/next-ledge.png" alt="Nexledge Logo" width={40} height={40} className="sm:w-[45px] sm:h-[45px]" />
              </div>
              <span className="text-[20px] sm:text-[22px] font-hedvig font-normal text-heading tracking-tight transition-opacity duration-200 group-hover:opacity-80">
                Nexledge
              </span>
            </Link>

            {/* Description */}
            <p className="text-base sm:text-lg antialiased font-inter mt-5 sm:mt-6 text-body leading-relaxed mb-6 sm:mb-8 max-w-72">
              Optimaliseer je bedrijfsstrategie met deskundige adviesoplossingen
            </p>


          </div>

          {/* Columns 2, 3, 4 - Menu sections */}
          <div className="flex gap-12 md:gap-16 lg:gap-20 md:mr-10 lg:mr-20">
            {/* Column 2 - Menu */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6">Menu</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link href="#services" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Functies
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Prijzen
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-work" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Hoe het werkt
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Follow us */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6">Follow us:</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link href="https://instagram.com" target="_blank" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" target="_blank" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" target="_blank" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6">Contact</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="mailto:insert.supply@gmail.com" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Insert.supply@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+123456789" className="text-[14px] sm:text-[15px] text-gray-500 hover:text-gray-900 transition-colors">
                    +123 456 789
                  </a>
                </li>
                <li>
                  <span className="text-[15px] sm:text-[16px] text-gray-500">
                    Californië, VS
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8 sm:space-y-10">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-xl flex items-center justify-center">
                <Image
                  src="/next-ledge.png"
                  alt="Nexledge Logo"
                  width={28}
                  height={28}
                  className="sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <span className="text-[22px] sm:text-[26px] font-normal text-heading tracking-tight" style={{ fontFamily: 'serif' }}>
                Nexledge
              </span>
            </Link>

            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-5 sm:mb-6">
              Optimaliseer je bedrijfsstrategie met deskundige adviesoplossingen
            </p>

          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4 sm:mb-5">Menu</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="#services" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Functies
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Prijzen
                </Link>
              </li>
              <li>
                <Link href="#how-it-work" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Hoe het werkt
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4 sm:mb-5">Follow us:</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="https://instagram.com" target="_blank" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4 sm:mb-5">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="mailto:insert.supply@gmail.com" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  nexLedge@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  +123 456 789
                </a>
              </li>
              <li>
                <span className="text-[15px] sm:text-[16px] text-gray-600">
                  Californië, VS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Desktop Only */}
        {/* <div className="hidden md:flex items-center justify-between mt-12 pt-8 border-t border-gray-300">
          <div className="flex items-center gap-2 text-[14px] text-gray-600">
            <span>Copyright@2024</span>

          </div>
        </div> */}
      </div>
    </footer>
  );
}