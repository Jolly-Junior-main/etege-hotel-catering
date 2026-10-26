"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GalleryItem } from "@/types";
import { ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface HomeGalleryPreviewProps {
  gallery: GalleryItem[];
}

export function HomeGalleryPreview({ gallery }: HomeGalleryPreviewProps) {
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
    ? gallery.slice(0, 8) 
    : gallery.filter((item) => item.category === filter).slice(0, 8);

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
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block mb-2">
              {t.galleryPreview.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              {t.galleryPreview.title}
            </h2>
            <p className="text-charcoal/75 text-base sm:text-lg mt-3">
              {t.galleryPreview.subtitle}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-burgundy hover:text-burgundy-900 transition"
            >
              <span>{t.galleryPreview.viewFullGallery}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition ${
                filter === cat.key
                  ? "bg-burgundy text-white shadow-sm"
                  : "bg-ivory text-charcoal/70 hover:bg-beige/60 hover:text-charcoal border border-beige/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid with Real Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => {
            const itemTitle = isAmharic ? item.titleAm : item.title;
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-beige/60 cursor-pointer transition-all duration-300 bg-charcoal/5"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.altText || itemTitle}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-[11px] uppercase tracking-wider text-gold font-semibold mb-0.5">
                      {item.category}
                    </p>
                    <p className="text-xs sm:text-sm font-medium line-clamp-1">{itemTitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10"
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
    </section>
  );
}
