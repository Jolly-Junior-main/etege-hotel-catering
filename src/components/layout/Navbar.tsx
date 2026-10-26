"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { 
  Menu, 
  X, 
  UtensilsCrossed, 
  Globe, 
  MessageSquare,
  Sparkles,
  PhoneCall
} from "lucide-react";

export function Navbar() {
  const { t, language, setLanguage, isAmharic } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/foodmenu", label: isAmharic ? "የጠረጴዛ ሜኑ" : "Table Menu" },
    { href: "/catering", label: t.nav.catering },
    { href: "/events", label: t.nav.events },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const openQuoteModal = () => {
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  const isHome = pathname === "/";
  const showSolidBackground = isScrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          showSolidBackground
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-beige/60 py-3.5 text-charcoal"
            : "bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-md border-2 transition-transform duration-200 group-hover:scale-105 flex-shrink-0 flex items-center justify-center p-0.5 ${
                showSolidBackground 
                  ? "border-gold/70 ring-2 ring-gold/20" 
                  : "border-gold/90 ring-2 ring-white/30"
              }`}>
                <Image
                  src="/images/logo-circle.png"
                  alt="Etege Hotel & Catering Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight leading-none group-hover:text-gold transition">
                  {isAmharic ? t.brand.nameAm : "ETEGE"}
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold mt-1 transition-colors ${
                  showSolidBackground ? "text-burgundy" : "text-gold"
                }`}>
                  {isAmharic ? "ሆቴል እና ኬተሪንግ" : "HOTEL & CATERING"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide font-medium transition-colors hover:text-gold ${
                      isActive
                        ? "text-gold font-semibold"
                        : showSolidBackground
                        ? "text-charcoal/85 hover:text-burgundy"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons & Language Switcher */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition border ${
                  showSolidBackground
                    ? "border-beige text-charcoal/80 hover:bg-beige/50"
                    : "border-white/30 text-white hover:bg-white/15"
                }`}
                title="Switch Language (English / አማርኛ)"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === "en" ? "አማ" : "EN"}</span>
              </button>

              {/* WhatsApp Quick Direct Link */}
              <a
                href="https://wa.me/251912011701?text=Hello%20Etege%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20services"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition border ${
                  showSolidBackground
                    ? "border-emerald-600/40 text-emerald-700 bg-emerald-50 hover:bg-emerald-100/70"
                    : "border-emerald-400/50 text-white bg-emerald-700/40 hover:bg-emerald-700/60"
                }`}
                title="Direct WhatsApp Consultation"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span className="hidden md:inline">{t.nav.chatWhatsApp}</span>
              </a>

              {/* Request Catering Quote CTA */}
              <button
                type="button"
                onClick={openQuoteModal}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-burgundy hover:bg-burgundy-800 text-white text-xs font-semibold tracking-wide uppercase shadow-sm transition transform active:scale-95"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-gold" />
                <span>{t.nav.requestQuote}</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className={`px-2.5 py-1 text-xs font-bold rounded border ${
                  showSolidBackground
                    ? "border-beige text-charcoal"
                    : "border-white/30 text-white"
                }`}
              >
                {language === "en" ? "አማ" : "EN"}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition ${
                  showSolidBackground
                    ? "text-charcoal hover:bg-beige/50"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-charcoal border-b border-beige shadow-elevated px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-base font-medium transition ${
                      isActive
                        ? "bg-ivory text-burgundy font-semibold border-l-4 border-gold"
                        : "text-charcoal/80 hover:bg-ivory hover:text-burgundy"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-beige flex flex-col space-y-2.5">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-burgundy text-white font-semibold text-sm shadow-sm hover:bg-burgundy-800 transition"
                >
                  <UtensilsCrossed className="w-4 h-4 text-gold" />
                  <span>{t.nav.requestQuote}</span>
                </button>

                <a
                  href="https://wa.me/251912011701?text=Hello%20Etege%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-emerald-600 text-emerald-800 font-semibold text-sm bg-emerald-50 hover:bg-emerald-100 transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp (+251 912 01 17 01)</span>
                </a>

                <a
                  href="https://t.me/EtegeCatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-sky-400 text-sky-800 font-semibold text-sm bg-sky-50 hover:bg-sky-100 transition"
                >
                  <span>Telegram (@EtegeCatering)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Shared Inquiry Modal */}
      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType="catering"
      />
    </>
  );
}
