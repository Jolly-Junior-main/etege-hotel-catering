"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { UtensilsCrossed, ArrowRight, Sparkles, Check } from "lucide-react";

export function CulinaryShowcase() {
  const { t, isAmharic } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({
    id: "pkg-traditional-feast",
    name: "Traditional Ethiopian Grand Feast",
  });

  const dishes = [
    {
      id: "dish-kitfo",
      name: t.culinaryHighlights.kitfoTitle,
      desc: t.culinaryHighlights.kitfoDesc,
      image: "/images/etege/etege-photo-7.jpg",
      tag: isAmharic ? "ልዩ የሀበሻ ማዕድ" : "Signature Specialty",
      packageId: "pkg-traditional-feast",
      packageName: "Traditional Ethiopian Grand Feast",
      highlights: isAmharic 
        ? ["በንጹህ የለሰለሰ ቅቤ የተዘጋጀ", "ከሚጥሚጣና ከቆጮ ጋር", "በባህላዊ የሸክላ ሳህን"] 
        : ["Clarified Niter Kibbeh", "Authentic Mitmita & Kocho", "Ceremonial Clay Platter"],
    },
    {
      id: "dish-ayib",
      name: t.culinaryHighlights.ayibTitle,
      desc: t.culinaryHighlights.ayibDesc,
      image: "/images/etege/etege-photo-3.jpg",
      tag: isAmharic ? "የወተት ተዋጽኦ ጥበብ" : "Handcrafted Dairy",
      packageId: "pkg-traditional-feast",
      packageName: "Traditional Ethiopian Grand Feast",
      highlights: isAmharic 
        ? ["በቅቤ የተሸለመ አሰራር", "ከጎመንና ከአልጫ ጋር", "ትኩስ የሀገር ውስጥ ወተት"] 
        : ["Concentric Butter Patterns", "Seasonal Gomen Swirls", "Farm-Fresh Local Curd"],
    },
    {
      id: "dish-buffet",
      name: isAmharic ? "የሠርግ ታላቅ የቡፌ ማዕድ" : "Grand Wedding Buffet Line",
      desc: isAmharic 
        ? "ለሠርግ እና ለትልልቅ ዝግጅቶች በሰለጠኑ ሼፎች የሚቀርብ የተሟላ የዶሮ ወጥ፣ ጥብስ እና የጾም ምግብ ማዕድ።"
        : "Expansive multi-chafing buffet lines offering hot Doro Wot, rosemary prime beef tibs, and vegan feasts managed by executive chefs.",
      image: "/images/etege/etege-photo-2.jpg",
      tag: isAmharic ? "የሙሉ ዝግጅት ቡፌ" : "Executive Buffet",
      packageId: "pkg-royal-wedding",
      packageName: "Royal Wedding Banquet Package",
      highlights: isAmharic 
        ? ["ትኩስ የዶሮ ወጥ ከእንቁላል ጋር", "የበሬ ሥጋ ጥብስ በሮዝመሪ", "የሰለጠነ አስተናጋጅ እና ሼፍ"] 
        : ["Steaming Doro Wot & Eggs", "Sautéed Rosemary Tibs", "Executive Chef Supervision"],
    },
    {
      id: "dish-dessert",
      name: t.culinaryHighlights.dessertTitle,
      desc: t.culinaryHighlights.dessertDesc,
      image: "/images/etege/etege-photo-9.jpg",
      tag: isAmharic ? "የኬክ እና ጣፋጭ ባፌ" : "Sweet Table",
      packageId: "pkg-deluxe-dessert-buffet",
      packageName: "Deluxe Pastry & Dessert Buffet",
      highlights: isAmharic 
        ? ["የልብ ቅርጽ የሠርግ ኬኮች", "የፍራፍሬ እና የስትሮቤሪ ቶርቶች", "የተሰደሩ ትኩስ ፍራፍሬዎች"] 
        : ["Custom Wedding Heart Cakes", "Glazed Strawberry Tortes", "Tiered Display Stands"],
    },
  ];

  const handleInquire = (pkgId: string, pkgName: string) => {
    setSelectedPackage({ id: pkgId, name: pkgName });
    setModalOpen(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-ivory/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block mb-2">
              {t.culinaryHighlights.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              {t.culinaryHighlights.title}
            </h2>
            <p className="text-charcoal/75 text-base sm:text-lg mt-3">
              {t.culinaryHighlights.subtitle}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/catering"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-burgundy hover:text-burgundy-900 transition"
            >
              <span>{t.cateringHighlights.allServices}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-card border border-beige/80 hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-60 w-full overflow-hidden bg-charcoal/10">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-burgundy shadow-sm uppercase tracking-wider">
                      {dish.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-burgundy transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed mb-4">
                    {dish.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-beige/60">
                    {dish.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-[11px] text-charcoal/80">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => handleInquire(dish.packageId, dish.packageName)}
                  className="w-full py-2.5 px-3 rounded-lg bg-ivory hover:bg-burgundy text-burgundy hover:text-white border border-beige font-semibold text-xs tracking-wide transition flex items-center justify-center space-x-1.5"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>{t.culinaryHighlights.inquireMenu}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table Menu QR Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-charcoal via-burgundy-950 to-charcoal rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated border border-gold/40">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold block">
              {isAmharic ? "ጠረጴዛዎ ሆነው ይዘዙ" : "DINE-IN & TABLE ORDERING"}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {isAmharic ? "የጠረጴዛ ዲጂታል የምግብ ማውጫ (QR)" : "Digital Table Menu & QR Ordering"}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl">
              {isAmharic
                ? "በእቴጌ ሆቴልና ኬተሪንግ ጠረጴዛ ላይ ያለውን QR ኮድ በሞባይልዎ ስካን በማድረግ ወይም እዚህ በመግባት ምግቦችን መርጠው በቀጥታ ይዘዙ!"
                : "Dining with us or attending a catered event? Browse our interactive digital menu, customize your order, and send it directly to your table server."}
            </p>
          </div>
          <Link
            href="/foodmenu"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-400 text-charcoal font-bold text-xs sm:text-sm shadow-md transition transform active:scale-95"
          >
            <UtensilsCrossed className="w-4 h-4 text-charcoal" />
            <span>{isAmharic ? "የጠረጴዛ ሜኑ ይመልከቱ" : "Open Table Menu"}</span>
            <ArrowRight className="w-4 h-4 text-charcoal" />
          </Link>
        </div>

      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackageId={selectedPackage.id}
        selectedPackageName={selectedPackage.name}
      />
    </section>
  );
}
