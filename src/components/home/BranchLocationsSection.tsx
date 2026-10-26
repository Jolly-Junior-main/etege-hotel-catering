"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MapPin, Phone, Clock, ExternalLink, PhoneCall } from "lucide-react";

function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.73C7 10.97 7.9 12.16 8.03 12.33C8.15 12.5 9.8 15.05 12.33 16.14C12.93 16.4 13.4 16.56 13.76 16.67C14.37 16.87 14.92 16.84 15.36 16.77C15.85 16.7 16.86 16.16 17.07 15.57C17.28 14.98 17.28 14.47 17.22 14.37C17.15 14.27 17 14.21 16.76 14.09C16.51 13.97 15.29 13.37 15.06 13.29C14.83 13.2 14.67 13.16 14.51 13.41C14.34 13.65 13.86 14.21 13.72 14.37C13.57 14.54 13.43 14.56 13.18 14.44C12.94 14.31 12.15 14.06 11.22 13.23C10.5 12.58 10.01 11.78 9.87 11.53C9.72 11.29 9.85 11.15 9.98 11.03C10.09 10.92 10.23 10.74 10.35 10.59C10.47 10.45 10.51 10.35 10.59 10.18C10.68 10.02 10.63 9.87 10.57 9.75C10.51 9.63 10.03 8.44 9.83 7.95C9.63 7.47 9.43 7.54 9.27 7.53C9.13 7.52 8.96 7.33 8.53 7.33Z" />
    </svg>
  );
}

export function BranchLocationsSection() {
  const { t, isAmharic } = useLanguage();

  const branches = [
    {
      badge: t.branches.branch1Badge,
      name: t.branches.branch1Name,
      address: t.branches.branch1Address,
      phone: t.branches.branch1Phone,
      phoneClean: t.branches.branch1PhoneClean,
      hours: t.branches.branch1Hours,
      googleMapsUrl: "https://maps.app.goo.gl/mstnnHuKdhQCwaDF8",
      telegramUrl: "https://t.me/EtegeCatering",
      ratingBadge: "Verified Google Business Hub",
      reviewSnippet: isAmharic ? "ከ13+ ዓመታት በላይ የካበተ የኬተሪንግ ልምድ" : "Premier wedding catering & banquet production",
      whatsAppUrl: `https://wa.me/${t.branches.branch1PhoneClean}?text=${encodeURIComponent(
        isAmharic 
          ? "ሰላም እቴጌ ሆቴል እና ኬተሪንግ (ዋናው አራዳ ቅርንጫፍ)፣ የኬተሪንግ አገልግሎት መረጃ ማግኘት እፈልጋለሁ።"
          : "Hello Etege Hotel & Catering (Main Arada Branch), I would like to inquire about your catering and event services."
      )}`,
      capabilities: t.branches.branch1Caps,
    },
    {
      badge: t.branches.branch2Badge,
      name: t.branches.branch2Name,
      address: t.branches.branch2Address,
      phone: t.branches.branch2Phone,
      phoneClean: t.branches.branch2PhoneClean,
      hours: t.branches.branch2Hours,
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=2PRR%2B8W+Addis+Ababa",
      telegramUrl: "https://t.me/EtegeCatering",
      ratingBadge: "★ 4.0 (5 Google Reviews)",
      plusCode: "2PRR+8W Addis Ababa",
      reviewSnippet: isAmharic ? "“ለኬተሪንግ አገልግሎት ምርጥ ቦታ” — ሚኪያስ ባይለ" : "“Best place for catering service” — Mikyas Bayile",
      whatsAppUrl: `https://wa.me/${t.branches.branch2PhoneClean}?text=${encodeURIComponent(
        isAmharic 
          ? "ሰላም እቴጌ ሆቴል ፪ (ደጅ ዘውዱ አባ ኮራን መ.)፣ የኬተሪንግ አገልግሎት መረጃ ማግኘት እፈልጋለሁ።"
          : "Hello Etege Hotel 2 (Dej Zewdu Aba koran St), I would like to inquire about your catering and event services."
      )}`,
      capabilities: t.branches.branch2Caps,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-ivory/60 border-t border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-burgundy block mb-2.5">
            {t.branches.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-3">
            {t.branches.title}
          </h2>
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed">
            {t.branches.subtitle}
          </p>
        </div>

        {/* 2 Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-beige/80 flex flex-col justify-between hover:shadow-elevated transition-shadow duration-300"
            >
              <div>
                {/* Header row: Pill badge on left, Google Maps on right */}
                <div className="flex items-center justify-between gap-2 pb-2">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-charcoal text-[11px] font-bold text-white tracking-wider uppercase shadow-sm">
                    {branch.badge}
                  </span>

                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-burgundy hover:text-burgundy-900 transition group"
                  >
                    <span className="group-hover:underline">{t.branches.googleMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Branch Name & Rating Badge */}
                <div className="mt-4 mb-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                    {branch.name}
                  </h3>
                  {branch.ratingBadge && (
                    <div className="flex items-center flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                        {branch.ratingBadge}
                      </span>
                      {branch.reviewSnippet && (
                        <span className="text-xs text-charcoal/65 italic">
                          {branch.reviewSnippet}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Info List */}
                <div className="space-y-3.5 text-sm text-charcoal/80 mb-6">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-burgundy flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{branch.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gold-700 flex-shrink-0" />
                    <a
                      href={`tel:${branch.phoneClean}`}
                      className="font-semibold text-charcoal hover:text-burgundy transition"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-charcoal/60 flex-shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                </div>

                {/* Hub Capabilities */}
                <div className="pt-2 pb-6 border-t border-beige/60">
                  <span className="text-[11px] font-bold tracking-wider text-charcoal/70 uppercase block mb-3">
                    {t.branches.hubCapabilities}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {branch.capabilities.map((cap, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-ivory text-charcoal/85 border border-beige/70"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom 3-button Action Bar */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-beige/60">
                {/* Call Branch */}
                <a
                  href={`tel:${branch.phoneClean}`}
                  className="inline-flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-burgundy hover:bg-burgundy-900 text-white font-semibold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{t.branches.callBranch}</span>
                </a>

                {/* Telegram */}
                <a
                  href={branch.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-[#229ED9] hover:bg-[#1b86ba] text-white font-semibold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center"
                >
                  <TelegramIcon className="w-4 h-4" />
                  <span>{t.branches.telegram}</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={branch.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm shadow-sm transition active:scale-95 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.branches.whatsApp}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
