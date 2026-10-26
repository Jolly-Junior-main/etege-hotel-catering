"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Award } from "lucide-react";

export function TraditionIntro() {
  const { t, isAmharic } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Editorial Photography with Real Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-beige/60 h-[420px] sm:h-[480px] bg-charcoal/5">
              <Image
                src="/images/etege/etege-photo-1.jpg"
                alt="Refined Ethiopian hospitality and traditional reception by Etege"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Overlapping Floating Secondary Image */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-44 sm:w-56 h-44 sm:h-56 rounded-2xl overflow-hidden shadow-floating border-4 border-white hidden sm:block bg-charcoal/5">
              <Image
                src="/images/etege/etege-photo-6.jpg"
                alt="Artisanal Ayib with golden Niter Kibbeh butter"
                fill
                sizes="250px"
                className="object-cover"
              />
            </div>

            {/* Authentic Brand Seal Badge */}
            <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-elevated border border-gold/40 flex items-center space-x-2.5">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gold/50 bg-white flex-shrink-0 p-0.5 shadow-sm">
                <Image src="/images/logo-circle.png" alt="Etege Emblem" width={40} height={40} className="object-contain w-full h-full rounded-full" />
              </div>
              <div className="pr-1.5">
                <span className="block text-xs font-bold text-charcoal leading-none">
                  {isAmharic ? "እቴጌ ኬተሪንግ" : "Etege Catering"}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-gold-700 font-semibold mt-0.5 block">
                  {isAmharic ? "ትክክለኛ የድርጅቱ ማህተም" : "Official Seal"}
                </span>
              </div>
            </div>

            {/* Subtle decorative background glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gold/15 filter blur-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block">
              {t.intro.tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight leading-tight">
              {t.intro.title}
            </h2>

            <div className="space-y-4 text-charcoal/75 text-base sm:text-lg leading-relaxed">
              <p>{t.intro.p1}</p>
              <p>{t.intro.p2}</p>
            </div>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-beige/60">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-burgundy/10 flex items-center justify-center text-burgundy flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal text-sm">
                    {isAmharic ? "እውነተኛ እንግዳ ተቀባይነት" : "Warm Hospitality"}
                  </h4>
                  <p className="text-xs text-charcoal/60 mt-0.5">
                    {isAmharic ? "በክብርና በፈገግታ መስተንግዶ" : "Respectful & personalized care"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold-700 flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal text-sm">
                    {isAmharic ? "ልዩ የምግብ ጥበብ" : "Culinary Passion"}
                  </h4>
                  <p className="text-xs text-charcoal/60 mt-0.5">
                    {isAmharic ? "ባህላዊ እና ዘመናዊ ምርጫዎች" : "Traditional & gourmet cuisines"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-ivory hover:bg-beige/60 text-charcoal font-medium text-sm border border-beige transition"
              >
                <span>{t.intro.learnMore}</span>
                <ArrowRight className="w-4 h-4 text-burgundy" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
