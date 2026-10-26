"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { 
  HeartHandshake, 
  UtensilsCrossed, 
  MapPin, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Cake
} from "lucide-react";

export default function AboutPage() {
  const { t, isAmharic } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-ivory/40 min-h-screen">
      
      {/* Hero Banner with Real Photo */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/etege/etege-photo-4.jpg"
            alt="Etege Hotel & Catering Addis Ababa celebration"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 rounded-full overflow-hidden bg-white p-1 border-2 border-gold/70 shadow-elevated ring-4 ring-gold/20">
            <Image
              src="/images/logo-circle.png"
              alt="Etege Hotel & Catering Official Logo"
              width={112}
              height={112}
              className="object-contain w-full h-full rounded-full"
              priority
            />
          </div>

          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 text-xs font-semibold uppercase tracking-wider mb-4">
            {isAmharic ? "ከ13+ ዓመታት በላይ የካበተ ልምድ" : "Over 13 Years of Culinary Excellence"}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            {t.aboutPage.heroTitle}
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.aboutPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Editorial Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block">
              {t.aboutPage.storyHeading}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Honoring Heritage, Delivering Culinary Perfection
            </h2>

            <div className="space-y-4 text-charcoal/80 text-base leading-relaxed">
              <p>{t.aboutPage.storyP1}</p>
              <p>{t.aboutPage.storyP2}</p>
              <p>{t.aboutPage.storyP3}</p>
            </div>

            <div className="pt-4 flex items-center space-x-6 border-t border-beige/80 text-xs text-charcoal/70">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-burgundy" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                <span>100% Client-Verified Catering</span>
              </div>
            </div>
          </div>

          {/* Real Photo Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-card border border-beige/60 bg-charcoal/5">
                <Image
                  src="/images/etege/etege-photo-1.jpg"
                  alt="Royal Ethiopian wedding feast by Etege"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-card border border-beige/60 bg-charcoal/5">
                <Image
                  src="/images/etege/etege-photo-7.jpg"
                  alt="Traditional Ethiopian Kitfo platter"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-card border border-beige/60 bg-charcoal/5">
                <Image
                  src="/images/etege/etege-photo-3.jpg"
                  alt="Artisanal Ayib with golden butter patterns"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-card border border-beige/60 bg-charcoal/5">
                <Image
                  src="/images/etege/etege-photo-9.jpg"
                  alt="Deluxe pastry and celebration dessert buffet"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values / Hospitality Pillars */}
      <section className="py-16 bg-white border-y border-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-2">
              Our Commitments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              {t.aboutPage.valuesHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-2xl p-7 border border-beige/70 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">
                {t.aboutPage.value1Title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {t.aboutPage.value1Desc}
              </p>
            </div>

            <div className="bg-ivory rounded-2xl p-7 border border-beige/70 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-700 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">
                {t.aboutPage.value2Title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {t.aboutPage.value2Desc}
              </p>
            </div>

            <div className="bg-ivory rounded-2xl p-7 border border-beige/70 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal">
                {t.aboutPage.value3Title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {t.aboutPage.value3Desc}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm transition shadow-sm"
            >
              <span>{t.aboutPage.getInTouch}</span>
              <ArrowRight className="w-4 h-4 ml-1 text-gold" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
