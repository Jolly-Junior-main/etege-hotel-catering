"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { UtensilsCrossed, MessageSquare, ArrowRight, Phone } from "lucide-react";

export function SplitCTASection() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 bg-white border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left CTA Banner: Request Event Quote */}
          <div className="relative rounded-3xl overflow-hidden bg-burgundy text-white p-8 sm:p-12 shadow-xl flex flex-col justify-between group">
            {/* Background image tint with real photo */}
            <div className="absolute inset-0 z-0 opacity-25">
              <Image
                src="/images/etege/etege-photo-4.jpg"
                alt="Etege Catering grand ballroom banquet"
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold border border-gold/40">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                {t.splitCta.leftTitle}
              </h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md">
                {t.splitCta.leftDesc}
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold text-sm transition shadow-md active:scale-95"
              >
                <span>{t.splitCta.leftBtn}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right CTA Banner: Direct WhatsApp & Phone */}
          <div className="relative rounded-3xl overflow-hidden bg-charcoal text-white p-8 sm:p-12 shadow-xl flex flex-col justify-between group">
            {/* Background image tint with real photo */}
            <div className="absolute inset-0 z-0 opacity-25">
              <Image
                src="/images/etege/etege-photo-2.jpg"
                alt="Etege outdoor grand wedding buffet"
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 backdrop-blur-md flex items-center justify-center text-emerald-400 border border-emerald-400/40">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                {t.splitCta.rightTitle}
              </h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-md">
                {t.splitCta.rightDesc}
              </p>
            </div>

            <div className="relative z-10 pt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/251912011701?text=Hello%20Etege%20Catering,%20I%20would%20like%20to%20inquire%20about%20catering%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.splitCta.rightBtn}</span>
              </a>
              <a
                href="https://t.me/EtegeCatering"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-[#229ED9] hover:bg-[#1b86ba] text-white text-sm font-semibold transition shadow-md active:scale-95"
              >
                <span>Telegram</span>
              </a>
              <a
                href="tel:+251912011701"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition active:scale-95"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType="catering"
      />
    </section>
  );
}
