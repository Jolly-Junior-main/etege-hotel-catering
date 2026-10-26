"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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

export function FloatingContactButtons() {
  const { isAmharic } = useLanguage();

  const telegramUrl = "https://t.me/EtegeCatering";
  const whatsAppUrl = `https://wa.me/251912011701?text=${encodeURIComponent(
    isAmharic 
      ? "ሰላም እቴጌ ሆቴል እና ኬተሪንግ፣ የኬተሪንግ አገልግሎት መረጃ ማግኘት እፈልጋለሁ።"
      : "Hello Etege Hotel & Catering, I would like to inquire about catering and banquet services."
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end space-y-2.5 pointer-events-none">
      
      {/* Telegram Floating Pill */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Etege on Telegram"
        className="pointer-events-auto inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#229ED9] hover:bg-[#1b86ba] text-white text-xs sm:text-sm font-semibold shadow-elevated border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 group"
      >
        <TelegramIcon className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-200" />
        <span>Telegram (@EtegeCatering)</span>
      </a>

      {/* WhatsApp Floating Pill */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Etege on WhatsApp"
        className="pointer-events-auto inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold shadow-elevated border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 group"
      >
        <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200" />
        <span>WhatsApp (+251 912 01 17 01)</span>
        <span className="relative flex h-2 w-2 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </a>

    </aside>
  );
}
