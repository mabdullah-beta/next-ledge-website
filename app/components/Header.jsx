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

  /* =========================
     Services (NL + static paths)
  ========================== */
  const services = [
    {
      id: 1,
      title: "Salarisadministratie & HR",
      href: "/services/salarisadministratie-hr",
    },
    {
      id: 2,
      title: "Boekhouding & Financiële Rapportages",
      href: "/services/boekhouding-financiele-rapportages",
    },
    {
      id: 3,
      title: "Accounting, Jaarrekening & Financiële Planning",
      href: "/services/accounting-jaarrekening-financiele-planning",
    },
    {
      id: 4,
      title: "Automatisering & IT-oplossingen",
      href: "/services/automatisering-it-oplossingen",
    },
    {
      id: 5,
      title: "Interim-oplossingen",
      href: "/services/interim-oplossingen",
    },
  ];

  /* =========================
     Features (NL + static paths)
  ========================== */
  const features = [
    {
      id: 2,
      title: "Op maat gemaakte administratieve oplossingen",
      href: "/features/tailored-administrative-solutions",
    },
    {
      id: 3,
      title: "Praktische financiële inzichten",
      href: "/features/practical-financial-insights",
    },
    {
      id: 4,
      title: "Data- & controlestrategieën",
      href: "/features/data-control-strategies",
    },
    {
      id: 5,
      title: "Doorlopende administratieve ondersteuning",
      href: "/features/ongoing-administrative-support",
    },
    {
      id: 6,
      title: "Efficiënte automatisering & IT-support",
      href: "/features/efficient-automation-it-support",
    },
  ];

  /* =========================
     Navigation labels (NL)
  ========================== */
  const navItems = [
    { label: "Diensten", hasDropdown: true, dropdownType: "services" },
    { label: "Features", hasDropdown: true, dropdownType: "features" },
    // { label: "Prijzen", href: "/Pricing" },
    { label: "Hoe het werkt", href: "/#howitworks" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper functions
  const closeAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsFeaturesOpen(false);
  };

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    closeAllDropdowns();
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdownToggle = (dropdownType) => {
    if (dropdownType === "services") {
      setIsServicesOpen(!isServicesOpen);
      setIsFeaturesOpen(false);
    } else {
      setIsFeaturesOpen(!isFeaturesOpen);
      setIsServicesOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={closeAllDropdowns}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${isScrolled ? "shadow-md" : ""
        }`}
    >
      <div className="max-w-full mx-auto px-5 md:px-12">
        <nav className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex cursor-pointer items-center gap-3 group" aria-label="Stratex Home">

            <div className="h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image src="/logo.png" alt="SalFin Logo" width={120} height={120} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.label} className="relative py-4">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => {
                      item.dropdownType === "services"
                        ? (setIsServicesOpen(true), setIsFeaturesOpen(false))
                        : (setIsFeaturesOpen(true), setIsServicesOpen(false));
                    }}
                  >
                    <button className="flex items-center gap-1.5 font-medium text-heading hover:text-primary">
                      {item.label}
                      <ChevronDown size={15} />
                    </button>

                    {(item.dropdownType === "services" && isServicesOpen) ||
                      (item.dropdownType === "features" && isFeaturesOpen) ? (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-lg border">
                        <div className="p-3">
                          {(item.dropdownType === "services" ? services : features).map((s) => (
                            <Link
                              key={s.id}
                              href={s.href}
                              onClick={handleItemClick}
                              className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                            >
                              {s.title}
                              <ChevronRight size={14} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link href={item.href} className="font-medium text-heading hover:text-primary">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/#contact" className="hidden md:flex bg-primary text-white pl-3 pr-2 py-1 rounded-full text-[16px] font-semibold hover:bg-primary-dark transition-all duration-200 items-center gap-3 whitespace-nowrap group" aria-label="Get in touch">
            Neem contact op
            {/* Arrow animation: Two arrows for slide effect - one slides out right, another slides in from left */}
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary overflow-hidden relative">
              <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-6" />
              <ArrowRight size={20} strokeWidth={2.5} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
            </span>
          </Link>

          {/* Mobile toggle */}
          <button onClick={handleMobileMenuToggle} className="md:hidden w-10 h-10 bg-gray-100 rounded-full" />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto">
          <nav className="px-6 py-6">
            {navItems.map((item) => (
              <div key={item.label} className="border-b">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdownToggle(item.dropdownType)}
                      className="w-full py-4 flex justify-between font-semibold"
                    >
                      {item.label}
                      <ChevronDown />
                    </button>
                    {(item.dropdownType === "services" ? isServicesOpen : isFeaturesOpen) && (
                      <div className="pl-4 pb-4 space-y-2">
                        {(item.dropdownType === "services" ? services : features).map((s) => (
                          <Link
                            key={s.id}
                            href={s.href}
                            onClick={handleItemClick}
                            className="block py-2 text-gray-600"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={handleItemClick} className="block py-4 font-semibold">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/#contact"
              onClick={handleItemClick}
              className="mt-6 flex justify-center items-center gap-2 bg-primary text-white py-4 rounded-xl font-bold"
            >
              Neem contact op
              <ArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
