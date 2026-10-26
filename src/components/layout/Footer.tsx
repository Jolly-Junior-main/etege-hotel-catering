"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { 
  UtensilsCrossed, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck,
  Lock,
  MessageSquare,
  Sparkles
} from "lucide-react";

export function Footer() {
  const { t, isAmharic } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-charcoal-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border-2 border-gold/60 flex-shrink-0 flex items-center justify-center p-0.5 ring-2 ring-white/10">
                <Image
                  src="/images/logo-circle.png"
                  alt="Etege Hotel & Catering Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-tight text-white">
                  {isAmharic ? t.brand.nameAm : t.brand.name}
                </h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold block">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              {t.footer.companyDesc}
            </p>

            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="https://maps.app.goo.gl/mstnnHuKdhQCwaDF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-gold hover:text-white transition"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>{isAmharic ? "አድራሻ በካርታ ይመልከቱ" : "View on Google Maps"}</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <a
                href="https://wa.me/251912011701?text=Hello%20Etege%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +251 912 01 17 01</span>
              </a>

              <a
                href="https://t.me/EtegeCatering"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
              >
                <span>Telegram: @EtegeCatering</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Catering Specialties */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold uppercase tracking-wider mb-4 flex items-center space-x-2">
              <UtensilsCrossed className="w-4 h-4 text-gold" />
              <span>{t.footer.cateringLinks}</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/catering#pkg-royal-wedding" className="hover:text-white transition">
                  {t.footer.weddingLink}
                </Link>
              </li>
              <li>
                <Link href="/catering#pkg-traditional-feast" className="hover:text-white transition">
                  {t.footer.traditionalLink}
                </Link>
              </li>
              <li>
                <Link href="/catering#pkg-deluxe-dessert-buffet" className="hover:text-white transition">
                  {t.footer.dessertLink}
                </Link>
              </li>
              <li>
                <Link href="/catering#pkg-corporate-buffet" className="hover:text-white transition">
                  {t.footer.corporateLink}
                </Link>
              </li>
              <li>
                <Link href="/catering#pkg-memorial-reception" className="hover:text-white transition">
                  {t.footer.memorialLink}
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/catering" className="text-gold hover:text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center">
                  <span>{isAmharic ? "ሁሉንም ጥቅሎች ይመልከቱ" : "View All Packages"}</span>
                  <span className="ml-1">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold uppercase tracking-wider mb-4 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/" className="hover:text-white transition">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/foodmenu" className="hover:text-gold transition font-semibold text-gold">
                  {isAmharic ? "የጠረጴዛ ዲጂታል ሜኑ (QR)" : "Digital Table Menu (QR)"}
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-white transition">
                  {t.nav.catering}
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  {t.nav.events}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3.5 text-sm text-white/80">
            <h4 className="font-serif text-base font-semibold text-gold uppercase tracking-wider mb-4 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{t.footer.contactInfo}</span>
            </h4>

            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Verified Branches</p>
                <a href="tel:+251912011701" className="hover:text-gold transition font-medium block">
                  Main Arada: +251 912 01 17 01
                </a>
                <a href="tel:+251960276090" className="hover:text-gold transition font-medium block">
                  Branch 2 (Dej Zewdu Aba koran St): +251 960 27 60 90
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Email Inquiry</p>
                <a href="mailto:catering@etegehotel.com" className="hover:text-gold transition font-medium">
                  catering@etegehotel.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Service Hours</p>
                <p className="text-xs text-white/70">
                  {t.footer.hoursText}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 space-y-4 sm:space-y-0">
          <p>
            © {currentYear} {isAmharic ? t.brand.nameAm : t.brand.name}. {t.footer.rights}
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-gold transition">
              {t.footer.privacy}
            </Link>
            <Link href="/about" className="hover:text-gold transition">
              {t.footer.terms}
            </Link>
            <Link 
              href="/admin" 
              className="inline-flex items-center space-x-1 text-white/40 hover:text-gold transition text-[11px]"
              title="Staff Administration Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
