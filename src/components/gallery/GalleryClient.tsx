"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GalleryItem } from "@/types";
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";

export function GalleryClient({ initialGallery }: { initialGallery: GalleryItem[] }) {
  const { t, isAmharic } = useLanguage();
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: "all", label: t.galleryPreview.filterAll },
    { key: "weddings", label: t.galleryPreview.filterWeddings },
    { key: "cuisine", label: t.galleryPreview.filterCuisine },
    { key: "desserts", label: t.galleryPreview.filterDesserts },
    { key: "banquets", label: t.galleryPreview.filterBanquets },
    { key: "events", label: t.galleryPreview.filterEvents },
  ];

  const filteredItems = filter === "all"
    ? initialGallery
    : initialGallery.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-ivory/40 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>{isAmharic ? "እውነተኛ የዝግጅት ፎቶዎች" : "Authentic Celebration Photography"}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-tight mb-4">
            {t.galleryPage.heroTitle}
          </h1>
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed">
            {t.galleryPage.heroSubtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition ${
                filter === cat.key
                  ? "bg-burgundy text-white shadow-sm"
                  : "bg-white text-charcoal/70 hover:bg-beige/60 hover:text-charcoal border border-beige/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid with 10 Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const itemTitle = isAmharic ? item.titleAm : item.title;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-card border border-beige/70 cursor-pointer bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.altText || itemTitle}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-semibold leading-snug">
                    {itemTitle}
                  </h4>
                  <div className="flex items-center space-x-1 text-xs text-white/80 mt-2 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to view large</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="font-serif text-lg font-bold">
                {isAmharic 
                  ? filteredItems[lightboxIndex].titleAm 
                  : filteredItems[lightboxIndex].title}
              </p>
              <p className="text-xs text-gold uppercase tracking-wider mt-1">
                {filteredItems[lightboxIndex].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
