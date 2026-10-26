"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { CateringPackage } from "@/types";
import { Utensils, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface CateringHighlightsProps {
  packages: CateringPackage[];
}

export function CateringHighlights({ packages }: CateringHighlightsProps) {
  const { t, isAmharic } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });

  const featured = packages.filter((p) => p.isPublished && p.isFeatured).slice(0, 3);
  const displayPackages = featured.length > 0 ? featured : packages.slice(0, 3);

  const handleInquire = (pkg: CateringPackage) => {
    setSelectedPackage({
      id: pkg.id,
      name: isAmharic ? pkg.nameAm : pkg.name,
    });
    setModalOpen(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-2">
              {t.cateringHighlights.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              {t.cateringHighlights.title}
            </h2>
            <p className="text-charcoal/75 text-base sm:text-lg mt-3">
              {t.cateringHighlights.subtitle}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/catering"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-gold-700 hover:text-gold-900 transition"
            >
              <span>{t.cateringHighlights.allServices}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* 3 Catering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPackages.map((pkg) => {
            const pkgName = isAmharic ? pkg.nameAm : pkg.name;
            const pkgDesc = isAmharic ? pkg.descriptionAm : pkg.description;
            const inclusions = (isAmharic ? pkg.serviceInclusionsAm : pkg.serviceInclusions).slice(0, 3);

            return (
              <div
                key={pkg.id}
                className="group bg-ivory/50 rounded-2xl overflow-hidden shadow-card border border-beige/80 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
              >
                <div>
                  {/* Photo */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pkg.coverImage}
                      alt={pkgName}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-charcoal/85 backdrop-blur-md text-gold font-medium text-xs uppercase tracking-wider">
                        {pkg.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-charcoal px-3 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
                      <Users className="w-3.5 h-3.5 text-burgundy" />
                      <span>{t.cateringHighlights.minGuests}: {pkg.minGuests}+</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2.5 group-hover:text-gold-700 transition">
                      {pkgName}
                    </h3>

                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {pkgDesc}
                    </p>

                    {/* Key Service Inclusions */}
                    <div className="space-y-2 py-3 border-t border-beige/80 text-xs text-charcoal/80">
                      {inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  <Link
                    href={`/catering/${pkg.slug}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-beige/40 text-charcoal text-xs font-semibold text-center border border-beige transition"
                  >
                    {t.cateringHighlights.viewPackage}
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleInquire(pkg)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 text-xs font-semibold text-center shadow-sm transition"
                  >
                    {t.cateringHighlights.requestQuote}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType="catering"
        selectedPackageId={selectedPackage.id}
        selectedPackageName={selectedPackage.name}
      />
    </section>
  );
}
