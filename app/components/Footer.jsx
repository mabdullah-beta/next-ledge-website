'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full font-inter bg-gray">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-14">
        {/* Desktop Layout */}
        <div className="hidden md:flex my-6 lg:my-10 md:justify-between md:gap-12 lg:gap-24">
          {/* Column 1 - Logo and Description */}
          <div className="flex-shrink-0 max-w-xl md:ml-2 lg:ml-4">

            {/* Logo */}
            <Link href="/" className="flex cursor-pointer items-center gap-2.5 sm:gap-3 group" aria-label="SalFin Home">
              <div className="h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <Image src="/logo.png" alt="SalFin" width={120} height={120} />
                </div>
            </Link>

            {/* Description */}
            <div className="mt-5 sm:mt-6 mb-6 sm:mb-8 max-w-80">
              <p className="text-sm sm:text-base font-medium text-gray-700 mb-2">
                Salaris • Finance • HR
              </p>
              <p className="text-base sm:text-lg antialiased font-inter text-body leading-relaxed mb-3">
                Salarisadministratie, boekhouding en accounting in samenhang.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Ondersteund door IT-oplossingen en gericht op inzicht, sturing en continuïteit.
              </p>
            </div>


          </div>

          {/* Columns 2, 3, 4 - Menu sections */}
          <div className="flex gap-12 md:gap-16 lg:gap-20 md:mr-10 lg:mr-20">
            {/* Column 2 - Menu */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6">Menu</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link href="/about" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Over SalFin
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Diensten
                  </Link>
                </li>
                <li>
                  <Link href="#howitworks" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Hoe wij werken
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Follow us */}
            {/* <div>
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
            </div> */}

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-5 sm:mb-6">Contact</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="mailto:support@salfin.nl" className="text-[15px] sm:text-[16px] text-gray-500 hover:text-gray-900 transition-colors">
                    support@salfin.nl
                  </a>
                </li>
                <li>
                  <a href="tel:0852126475" className="text-[14px] sm:text-[15px] text-gray-500 hover:text-gray-900 transition-colors">
                    0852126475
                  </a>
                </li>
                <li>
                  <span className="text-[15px] sm:text-[16px] text-gray-500">
                    Herikerbergweg 32, 1101 CM Amsterdam
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
              <div className="h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <Image src="/logo.png" alt="SalFin" width={120} height={120} />
                </div>
            </Link>

            <div className="mb-5 sm:mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Salaris • Finance • HR
              </p>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-2">
                Salarisadministratie, boekhouding en accounting in samenhang.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ondersteund door IT-oplossingen en gericht op inzicht, sturing en continuïteit.
              </p>
            </div>

          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4 sm:mb-5">Menu</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/about" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Over SalFin
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="#howitworks" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Hoe wij werken
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          {/* <div>
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
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-4 sm:mb-5">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="mailto:support@salfin.nl" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  support@salfin.nl
                </a>
              </li>
              <li>
                <a href="tel:0852126475" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
                  0852126475
                </a>
              </li>
              <li>
                <span className="text-[15px] sm:text-[16px] text-gray-600">
                  Herikerbergweg 32, 1101 CM Amsterdam
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-300 gap-4 md:gap-0">
          <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-gray-600">
            <span>© SalFin — Salaris, Finance & HR</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-[13px] sm:text-[14px]">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
              Privacyverklaring
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}