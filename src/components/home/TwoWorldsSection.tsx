"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { UtensilsCrossed, Sparkles, ArrowRight, Cake } from "lucide-react";

export function TwoWorldsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block mb-2">
            {t.signatureExcellence.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4">
            {t.signatureExcellence.title}
          </h2>
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed">
            {t.signatureExcellence.subtitle}
          </p>
        </div>

        {/* Two Equal Large Editorial Cards with Real Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Royal Ethiopian Banquets */}
          <div className="group relative rounded-3xl overflow-hidden shadow-card border border-beige/80 bg-white flex flex-col transition-all duration-300 hover:shadow-2xl">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <Image
                src="/images/etege/etege-photo-1.jpg"
                alt="Etege traditional Ethiopian wedding banquet with hosts in Habesha Kemis"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-burgundy font-semibold text-xs uppercase tracking-wider shadow-sm">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Cultural Feasts & Weddings</span>
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                  {t.signatureExcellence.card1Title}
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-charcoal/80 text-base leading-relaxed">
                {t.signatureExcellence.card1Desc}
              </p>

              <div>
                <Link
                  href="/catering"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-burgundy hover:text-burgundy-900 group/link transition"
                >
                  <span className="border-b-2 border-burgundy pb-0.5">{t.signatureExcellence.card1Cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Banquets & Dessert Stations */}
          <div className="group relative rounded-3xl overflow-hidden shadow-card border border-beige/80 bg-white flex flex-col transition-all duration-300 hover:shadow-2xl">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <Image
                src="/images/etege/etege-photo-9.jpg"
                alt="Etege Catering deluxe pastry and celebration dessert buffet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-gold-700 font-semibold text-xs uppercase tracking-wider shadow-sm">
                  <Cake className="w-3.5 h-3.5" />
                  <span>Cakes & Dessert Displays</span>
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                  {t.signatureExcellence.card2Title}
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-charcoal/80 text-base leading-relaxed">
                {t.signatureExcellence.card2Desc}
              </p>

              <div>
                <Link
                  href="/catering"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-gold-700 hover:text-gold-900 group/link transition"
                >
                  <span className="border-b-2 border-gold-600 pb-0.5">{t.signatureExcellence.card2Cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
