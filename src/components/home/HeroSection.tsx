"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { 
  UtensilsCrossed, 
  Calendar, 
  Users, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  MessageSquare,
  Award
} from "lucide-react";

export function HeroSection() {
  const { t, isAmharic } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const [cateringQuery, setCateringQuery] = useState({
    eventType: "Royal Wedding & Engagement",
    eventDate: "",
    estimatedGuests: "100-250 Guests",
    serviceStyle: "Full Chafing Buffet",
  });

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Imagery using Real Photo from Etege */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/etege/etege-photo-4.jpg"
          alt="Etege Hotel & Catering luxury banquet and celebration feast"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.70] contrast-[1.08]"
        />
        {/* Soft Vignette & Burgundy Accent Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-black/70" />
        <div className="absolute inset-0 bg-burgundy/25 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Value Statement */}
          <div className="lg:col-span-7 space-y-6 text-white text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-gold">
              <div className="w-5 h-5 rounded-full bg-white overflow-hidden p-0.5 border border-gold/40 flex-shrink-0 flex items-center justify-center shadow-sm">
                <Image src="/images/logo-circle.png" alt="Etege Crown" width={20} height={20} className="w-full h-full object-contain rounded-full" />
              </div>
              <span>{isAmharic ? "ከ13+ ዓመታት በላይ የካበተ ልምድ" : "Over 13 Years of Excellence"}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Addis Ababa, Ethiopia</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              {t.hero.titleLine1}
              <br />
              <span className="text-gold font-normal italic">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Quick CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-medium text-sm transition shadow-lg hover:shadow-xl transform active:scale-95 group"
              >
                <UtensilsCrossed className="w-4 h-4 text-gold mr-2" />
                <span>{t.nav.requestQuote}</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-medium text-sm transition transform active:scale-95"
              >
                <span>{isAmharic ? "የቀጥታ ፎቶዎችን ይመልከቱ" : "View Real Photo Gallery"}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Event Quotation Interactive Panel */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-floating border border-white/40 overflow-hidden text-charcoal p-6 sm:p-7">
              
              {/* Header Badge */}
              <div className="flex items-center space-x-2.5 pb-4 mb-5 border-b border-beige">
                <div className="w-9 h-9 rounded-lg bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <UtensilsCrossed className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-charcoal leading-tight">
                    {t.hero.planEventTab}
                  </h3>
                  <p className="text-[11px] text-charcoal/65">
                    {isAmharic ? "ፈጣን እና የተሟላ የዋጋ ግምት በአጭር ጊዜ ውስጥ" : "Personalized proposal & quick WhatsApp consultation"}
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                    {t.hero.eventType}
                  </label>
                  <select
                    value={cateringQuery.eventType}
                    onChange={(e) => setCateringQuery({ ...cateringQuery, eventType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-charcoal/20 text-sm text-charcoal focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white transition"
                  >
                    <option value="Royal Wedding & Engagement">{t.hero.wedding}</option>
                    <option value="Corporate Conference / Summit">{t.hero.corporate}</option>
                    <option value="Private Banquet / Birthday">{t.hero.privateDinner}</option>
                    <option value="Memorial / Haazen Reception">{t.hero.memorial}</option>
                    <option value="Social & Cultural Gathering">{t.hero.socialGathering}</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      {t.hero.eventDate}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-3 text-charcoal/40" />
                      <input
                        type="date"
                        value={cateringQuery.eventDate}
                        onChange={(e) => setCateringQuery({ ...cateringQuery, eventDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-charcoal/20 text-xs sm:text-sm text-charcoal focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      {t.hero.estimatedGuests}
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 absolute left-3 top-3 text-charcoal/40" />
                      <select
                        value={cateringQuery.estimatedGuests}
                        onChange={(e) => setCateringQuery({ ...cateringQuery, estimatedGuests: e.target.value })}
                        className="w-full pl-9 pr-2 py-2.5 rounded-lg border border-charcoal/20 text-xs sm:text-sm text-charcoal focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white transition"
                      >
                        <option value="50-100 Guests">50 – 100 Guests</option>
                        <option value="100-250 Guests">100 – 250 Guests</option>
                        <option value="250-500 Guests">250 – 500 Guests</option>
                        <option value="500-1000 Guests">500 – 1,000 Guests</option>
                        <option value="1000+ Guests">1,000+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                    {t.hero.serviceStyle}
                  </label>
                  <select
                    value={cateringQuery.serviceStyle}
                    onChange={(e) => setCateringQuery({ ...cateringQuery, serviceStyle: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-charcoal/20 text-sm text-charcoal focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white transition"
                  >
                    <option value="Traditional Ethiopian Feast (Kitfo & Qurt)">{t.hero.traditionalFeast}</option>
                    <option value="Full Chafing Buffet">{t.hero.buffetStyle}</option>
                    <option value="Deluxe Cake & Dessert Table">{t.hero.dessertBar}</option>
                    <option value="All-Inclusive Banquet & Staff">{t.hero.completeService}</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3.5 px-4 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm shadow-md transition transform active:scale-95 flex items-center justify-center space-x-2"
                >
                  <UtensilsCrossed className="w-4 h-4 text-gold" />
                  <span>{t.hero.requestQuoteBtn}</span>
                </button>

                <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-charcoal/60">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct WhatsApp inquiry available 24/7</span>
                </div>
              </div>

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
