"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Header = () => {
  // State: Track scroll position to er
  const [isScrolled, setIsScrolled] = useState(false);
  // State: Control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect: Add scroll listener to change header style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Diensten", href: "#diensten" },
    { label: "Functies", href: "#functies" },
    { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ease-in-out ${isScrolled ? "d" : ""}`}>
      <div className="max-w-full mx-auto md:px-19 px-5">
        <nav className="h-20 md:h-20 sm:h-[70px] px-0 md:px-12 sm:px-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex cursor-pointer items-center gap-3 group" aria-label="Stratex Home">

            <div className="w-10 bg-primary/10 rounded-lg h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image src="/next-ledge.png" alt="Stratex Logo" width={45} height={45} />
            </div>
            <span className="text-[22px] font-hedvig md:text-[22px] sm:text-[20px] font-normal text-heading tracking-tight transition-opacity duration-200 group-hover:opacity-80">
              Nexledge
            </span>
          </Link>


          {/* Desktop Navigation - Centered between logo and button */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <ul className="font-inter flex items-center gap-6" role="navigation">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[16px]  font-inter font-medium text-heading hover:opacity-60 transition-opacity duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link href="#contact" className="hidden md:flex bg-primary text-white pl-3 pr-2 py-1 rounded-full text-[16px] font-semibold hover:bg-primary-dark transition-all duration-200 items-center gap-3 whitespace-nowrap group" aria-label="Get in touch">
            Neem contact op
            {/* Arrow animation: Two arrows for slide effect - one slides out right, another slides in from left */}
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary overflow-hidden relative">
              <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-6" />
              <ArrowRight size={20} strokeWidth={2.5} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
            </span>
          </Link>

          {/* Mobile Menu Button: Hamburger icon that transforms into X */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-2 group" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            <span className={`block w-5 h-0.5 bg-heading transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-heading transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bg-white  z-40 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
        <nav className="px-4 py-">
          <ul className="space-y-0">
            {navItems.map((item, index) => (
              <li key={item.label} className={index !== navItems.length - 1 ? "" : ""}>
                {/* Close menu when link is clicked */}
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-[16px] font-semibold text-heading hover:opacity-60 transition-opacity duration-200 py-4  font-inter"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;