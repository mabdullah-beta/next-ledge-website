"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const headerRef = useRef(null);

  // Services data
  const services = [
    { id: 1, title: "Accounting & Financial Administration" },
    { id: 2, title: "Automation & IT Integration" },
    { id: 3, title: "Financial Insights & Reporting" },
    { id: 4, title: "Budgeting & Forecasting" },
    { id: 5, title: "Advisory & Business Support" },
  ];

  // Features data
  const features = [
    { id: 1, title: "Flexible consultations" },
    { id: 2, title: "Tailored administrative solutions" },
    { id: 3, title: "Practical financial insights" },
    { id: 4, title: "Data & control strategies" },
    { id: 5, title: "Ongoing administrative support" },
    { id: 6, title: "Efficient automation & IT support" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        setIsFeaturesOpen(false);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Services", href: "#services", hasDropdown: true, dropdownType: "services" },
    { label: "Features", href: "#features", hasDropdown: true, dropdownType: "features" },
    { label: "Pricing", href: "../Pricing" },
    { label: "How it works", href: "../howitworks" },
  ];

  // Close all dropdowns (Modified to fix mobile bug)
  const closeAllDropdowns = () => {
    if (isMobileMenuOpen) return; // Prevent closing when in mobile mode
    setIsServicesOpen(false);
    setIsFeaturesOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsServicesOpen(false);
      setIsFeaturesOpen(false);
    }
  };

  const handleMobileDropdownToggle = (dropdownType) => {
    if (dropdownType === "services") {
      setIsServicesOpen(prev => !prev);
      setIsFeaturesOpen(false);
    } else if (dropdownType === "features") {
      setIsFeaturesOpen(prev => !prev);
      setIsServicesOpen(false);
    }
  };

  const handleDropdownItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsFeaturesOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ease-in-out ${isScrolled ? "shadow-md" : ""}`}
      onMouseLeave={closeAllDropdowns}
    >
      <div className="max-w-full mx-auto md:px-19 px-5">
        <nav className="h-20 md:h-20 sm:h-[70px] px-0 md:px-12 sm:px-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex cursor-pointer items-center gap-3 group" aria-label="Nexledge Home">
            <div className="w-10 bg-primary/10 rounded-lg h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image src="/next-ledge.png" alt="Nexledge Logo" width={45} height={45} />
            </div>
            <span className="text-[22px] font-hedvig md:text-[22px] sm:text-[20px] font-normal text-heading tracking-tight transition-opacity duration-200 group-hover:opacity-80">
              Nexledge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <ul className="font-inter flex items-center gap-8" role="navigation">
              {navItems.map((item) => (
                <li key={item.label} className="relative py-4"> {/* Added padding to bridge gap */}
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (item.dropdownType === "services") {
                          setIsServicesOpen(true);
                          setIsFeaturesOpen(false);
                        } else if (item.dropdownType === "features") {
                          setIsFeaturesOpen(true);
                          setIsServicesOpen(false);
                        }
                      }}
                    >
                      <button className="flex items-center gap-1.5 text-[16px] font-inter font-medium text-heading hover:text-primary transition-colors duration-200">
                        {item.label}
                        <ChevronDown size={15} className={`transition-transform duration-200 text-gray-400 ${(item.dropdownType === "services" && isServicesOpen) || (item.dropdownType === "features" && isFeaturesOpen) ? 'rotate-180 text-primary' : ''}`} />
                      </button>

                      {/* Unified Desktop Dropdown Style */}
                      {((item.dropdownType === "services" && isServicesOpen) || (item.dropdownType === "features" && isFeaturesOpen)) && (
                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200`}
                        >
                          <div className="p-3">
                            {(item.dropdownType === "services" ? services : features).map((subItem) => (
                              <Link
                                key={subItem.id}
                                href={`/${item.dropdownType}/${subItem.id}`}
                                className="flex items-center justify-between px-4 py-3 text-gray-600 transition-all duration-200 rounded-lg group hover:bg-gray-50 hover:text-primary"
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  setIsFeaturesOpen(false);
                                }}
                              >
                                <span className="font-medium text-[14px] leading-tight">
                                  {subItem.title}
                                </span>
                                <ChevronRight size={14} className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-primary/70" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="text-[16px] font-inter font-medium text-heading hover:text-primary transition-colors duration-200">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link href="#contact" className="hidden md:flex bg-primary text-white pl-5 pr-4 py-2.5 rounded-full text-[15px] font-semibold hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 items-center gap-2 whitespace-nowrap group">
            Get in touch
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden relative h-10 w-10 bg-gray-50 rounded-full text-heading z-50 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-heading transition-all duration-300 ease-in-out rounded-full
                ${isMobileMenuOpen
                  ? "rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "top-[38%] left-1/2 -translate-x-1/2"
                }`}
            ></span>
            <span
              className={`absolute h-[1.5px] w-5 bg-heading transition-all duration-300 ease-in-out rounded-full
                ${isMobileMenuOpen
                  ? "-rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : "top-[62%] left-1/2 -translate-x-1/2"
                }`}
            ></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-40 animate-in slide-in-from-top-5 duration-300 overflow-y-auto">
          <nav className="px-6 py-6 pb-24">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-100 last:border-none">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => handleMobileDropdownToggle(item.dropdownType)}
                        className="flex items-center justify-between w-full text-left py-4 group"
                      >
                        <span className="text-[18px] font-semibold text-heading group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-400 transition-transform duration-300 ${(item.dropdownType === "services" && isServicesOpen) || (item.dropdownType === "features" && isFeaturesOpen) ? 'rotate-180 text-primary' : ''}`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out
                        ${((item.dropdownType === "services" && isServicesOpen) || (item.dropdownType === "features" && isFeaturesOpen))
                            ? 'max-h-[500px] opacity-100 mb-4'
                            : 'max-h-0 opacity-0'}`}
                      >
                        <div className="rounded-xl p-2 space-y-1">
                          {(item.dropdownType === "services" ? services : features).map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={`/${item.dropdownType}/${subItem.id}`}
                              onClick={handleDropdownItemClick}
                              className="block px-4 py-3 rounded-lg text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm transition-all text-[15px] font-medium"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleDropdownItemClick}
                      className="block w-full text-left py-4 text-[18px] font-semibold text-heading hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl text-[16px] font-bold"
              >
                Get in touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;