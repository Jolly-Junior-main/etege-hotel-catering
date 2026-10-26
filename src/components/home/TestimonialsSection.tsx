"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Testimonial } from "@/types";
import { Star, ShieldCheck, Quote, Hotel, UtensilsCrossed } from "lucide-react";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { t, isAmharic } = useLanguage();
  const publishedReviews = testimonials.filter((r) => r.isPublished);

  if (publishedReviews.length === 0) return null;

  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block mb-2">
            {t.testimonials.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publishedReviews.map((review) => {
            const comment = isAmharic ? review.commentAm : review.comment;
            const guestRole = isAmharic ? review.guestRoleAm : review.guestRole;

            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-8 shadow-card border border-beige/70 flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative"
              >
                <div>
                  {/* Top rating and icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="p-1.5 rounded-lg bg-ivory border border-beige/50 text-charcoal/60">
                      {review.serviceType === "hotel" ? (
                        <Hotel className="w-4 h-4 text-burgundy" />
                      ) : (
                        <UtensilsCrossed className="w-4 h-4 text-gold-600" />
                      )}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-6 italic">
                    "{comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-beige/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-charcoal text-base">
                      {review.guestName}
                    </h4>
                    {guestRole && (
                      <p className="text-xs text-charcoal/60 mt-0.5">
                        {guestRole}
                      </p>
                    )}
                  </div>

                  {review.isVerified && (
                    <div className="flex items-center space-x-1 text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
