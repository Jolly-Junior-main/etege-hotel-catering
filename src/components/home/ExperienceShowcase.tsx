"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Sparkles, Heart, Clock, Award } from "lucide-react";

export function ExperienceShowcase() {
  const { t, isAmharic } = useLanguage();

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-burgundy/20 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
            {t.experience.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {t.experience.title}
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* 2-Column Editorial Grid with Real Photos & Stat Overlays */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-5 space-y-6">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/etege/etege-photo-7.jpg"
                alt="Culinary chef craft at Etege Catering - Spiced Ethiopian Kitfo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-gold text-xs uppercase tracking-wider font-semibold block">Culinary Craft</span>
                <span className="text-white text-sm font-medium">Authentic spices and refined presentation</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-3xl font-serif font-bold text-gold">{t.experience.stat1Number}</p>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">{t.experience.stat1Label}</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div>
                <p className="text-3xl font-serif font-bold text-white">{t.experience.stat2Number}</p>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">{t.experience.stat2Label}</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div>
                <p className="text-3xl font-serif font-bold text-gold">{t.experience.stat3Number}</p>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">{t.experience.stat3Label}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/etege/etege-photo-5.jpg"
                alt="Grand Ballroom banquet buffet setup in Addis Ababa by Etege"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold text-xs uppercase tracking-wider font-semibold block">Event Mastery</span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {isAmharic ? "ለማይረሳ የደስታ ቀን የተሟላ ድግስ" : "Unforgettable banquets tailored to your celebration"}
                </h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
