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
      title: "Boekhouding & Financiële Administratie",
      href: "/services/accounting-financial-administration",
    },
    {
      id: 2,
      title: "Automatisering & IT-integratie",
      href: "/services/automation-it-integration",
    },
    {
      id: 3,
      title: "Financiële Inzichten & Rapportages",
      href: "/services/financial-insights-reporting",
    },
    {
      id: 4,
      title: "Budgettering & Prognoses",
      href: "/services/budgeting-forecasting",
    },
    {
      id: 5,
      title: "Advies & Bedrijfsondersteuning",
      href: "/services/advisory-business-support",
    },
  ];

  /* =========================
     Features (NL + static paths)
  ========================== */
  const features = [
    {
      id: 1,
      title: "Flexibele consultaties",
      href: "/features/flexible-consultations",
    },
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
    { label: "Prijzen", href: "/Pricing" },
    { label: "Hoe het werkt", href: "/howitworks" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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

  const closeAllDropdowns = () => {
    if (isMobileMenuOpen) return;
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

  const handleMobileDropdownToggle = (type) => {
    if (type === "services") {
      setIsServicesOpen((p) => !p);
      setIsFeaturesOpen(false);
    } else {
      setIsFeaturesOpen((p) => !p);
      setIsServicesOpen(false);
    }
  };

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsFeaturesOpen(false);
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Image src="/next-ledge.png" alt="Nexledge Logo" width={45} height={45} />
            </div>
            <span className="text-[22px] font-hedvig text-heading">Nexledge</span>
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

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold"
          >
            Neem contact op
            <ArrowRight size={18} />
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
              href="#contact"
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
