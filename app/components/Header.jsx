"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How it work", href: "#how-it-work" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ease-in-out ${isScrolled ? "shadow-md" : ""}`}>
      <div className="max-w-full mx-auto md:px-18 px-5">
        <nav className="h-20 md:h-20 sm:h-[70px] px-0 md:px-12 sm:px-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Stratex Home">
            <div className="w-8 h-8 bg-[#1f514c] rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image src="https://framerusercontent.com/images/AUOOfMLqx3UrCzpH7eIka9rF8.svg" alt="Stratex Logo" width={15} height={15} />
            </div>
            <span className="text-[22px] md:text-[22px] sm:text-[20px] font-normal text-[#1a1a1a] tracking-tight transition-opacity duration-200 group-hover:opacity-80" style={{ fontFamily: "serif" }}>
              Stratex
            </span>
          </Link>

          {/* Desktop Navigation - Centered between logo and button */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <ul className=" front-inter flex items-center gap-9" role="navigation">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[16px]  font-inter font-medium text-[#1a1a1a] hover:opacity-60 transition-opacity duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link href="#contact" className="hidden md:flex bg-[#1f514c] text-white pl-3 pr-2 py-1 rounded-full text-[15px] font-semibold hover:bg-[#17423d] transition-all duration-200 items-center gap-3 whitespace-nowrap" aria-label="Get in touch">
            Get in touch
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1f514c]">
              <ArrowRight size={20} strokeWidth={2.5} />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group" aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg z-40 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
        {/* Mobile Menu Navigation */}
        <nav className="px-4 py-">
          <ul className="space-y-0">
            {navItems.map((item, index) => (
              <li key={item.label} className={index !== navItems.length - 1 ? "" : ""}>
                <Link 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="block text-center text-[16px] font-semibold text-[#1a1a1a] hover:opacity-60 transition-opacity duration-200 py-4  font-inter"
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