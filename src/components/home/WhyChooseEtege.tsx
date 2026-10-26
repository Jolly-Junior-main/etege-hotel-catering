"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { HeartHandshake, Utensils, CalendarCheck, MapPin } from "lucide-react";

export function WhyChooseEtege() {
  const { t } = useLanguage();

  const points = [
    {
      icon: HeartHandshake,
      title: t.whyChoose.point1Title,
      description: t.whyChoose.point1Desc,
      color: "bg-burgundy/10 text-burgundy",
    },
    {
      icon: Utensils,
      title: t.whyChoose.point2Title,
      description: t.whyChoose.point2Desc,
      color: "bg-gold/20 text-gold-700",
    },
    {
      icon: CalendarCheck,
      title: t.whyChoose.point3Title,
      description: t.whyChoose.point3Desc,
      color: "bg-burgundy/10 text-burgundy",
    },
    {
      icon: MapPin,
      title: t.whyChoose.point4Title,
      description: t.whyChoose.point4Desc,
      color: "bg-gold/20 text-gold-700",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block mb-2">
            {t.whyChoose.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4">
            {t.whyChoose.title}
          </h2>
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed">
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-card border border-beige/70 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pt.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-2.5">
                    {pt.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
