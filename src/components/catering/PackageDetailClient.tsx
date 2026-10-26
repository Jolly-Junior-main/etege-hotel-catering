"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CateringPackage } from "@/types";
import { buildWhatsAppLink } from "@/lib/utils";
import { 
  Users, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  CheckCircle,
  Calendar,
  UtensilsCrossed 
} from "lucide-react";

export function PackageDetailClient({ pkg }: { pkg: CateringPackage }) {
  const { t, isAmharic } = useLanguage();
  const [activeImage, setActiveImage] = useState(pkg.coverImage);

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    eventType: pkg.category === "wedding" ? "Wedding & Engagement" : "Corporate Event",
    eventDate: "",
    eventLocation: "Addis Ababa",
    estimatedGuests: pkg.minGuests || 50,
    budgetRange: "Package Standard",
    additionalNotes: "",
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [submissionReference, setSubmissionReference] = useState<string | null>(null);

  const pkgName = isAmharic ? pkg.nameAm : pkg.name;
  const pkgDesc = isAmharic ? pkg.descriptionAm : pkg.description;
  const menu = isAmharic ? pkg.menuItemsAm : pkg.menuItems;
  const inclusions = isAmharic ? pkg.serviceInclusionsAm : pkg.serviceInclusions;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessages([]);

    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          packageId: pkg.id,
          packageName: pkg.name,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          const flat = Object.values(data.errors).flat() as string[];
          setErrorMessages(flat);
        } else {
          setErrorMessages([data.message || "Failed to submit quote request"]);
        }
      } else {
        setSubmissionReference(data.reference);
      }
    } catch (err) {
      setErrorMessages(["Network error occurred. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-ivory/40 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link
            href="/catering"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-charcoal/70 hover:text-burgundy uppercase tracking-wider transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Packages</span>
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-beige/70">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold-800 text-xs font-semibold uppercase tracking-wider">
                {pkg.category}
              </span>
              <span className="text-xs text-charcoal/50">•</span>
              <span className="text-xs text-charcoal/70">Full-Service Event Catering</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              {pkgName}
            </h1>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs text-charcoal/60 uppercase tracking-wider block">Capacity</span>
            <span className="text-xl sm:text-2xl font-serif font-bold text-burgundy">
              {pkg.minGuests}+ Guests
            </span>
          </div>
        </div>

        {/* Gallery Showcase */}
        <div className="space-y-4 mb-12">
          <div className="relative h-80 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-card border border-beige/80">
            <Image
              src={activeImage}
              alt={pkgName}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {pkg.gallery && pkg.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {pkg.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`relative h-20 w-28 rounded-xl overflow-hidden flex-shrink-0 border-2 transition ${
                    activeImage === img ? "border-gold shadow-md scale-95" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Gallery ${i + 1}`} fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content & Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
                Package Overview
              </h2>
              <p className="text-charcoal/80 text-base leading-relaxed whitespace-pre-line">
                {pkgDesc}
              </p>
            </div>

            {/* Menu Items */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-beige/70 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-charcoal flex items-center space-x-2">
                <UtensilsCrossed className="w-5 h-5 text-gold-600" />
                <span>Culinary Menu Selection</span>
              </h3>
              <p className="text-xs text-charcoal/60">
                The items below represent our standard curated dishes for this package, and can be customized upon request.
              </p>
              <div className="space-y-3 pt-2">
                {menu.map((dish, i) => (
                  <div key={i} className="flex items-start space-x-3 text-sm text-charcoal border-b border-beige/40 pb-2.5 last:border-0 last:pb-0">
                    <span className="w-2 h-2 rounded-full bg-gold-600 mt-2 flex-shrink-0" />
                    <span>{dish}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-beige/70 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-charcoal flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-burgundy" />
                <span>Service Inclusions & Staffing</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-beige/80">
              
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-700 block mb-1">
                  Quotation Request
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Request a Custom Quote
                </h3>
                <p className="text-xs text-charcoal/70 mt-1">
                  Share your event parameters to receive a formal proposal and itemized cost breakdown.
                </p>
              </div>

              {submissionReference ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-charcoal">
                    {t.modal.successTitle}
                  </h4>
                  <div className="bg-ivory px-4 py-2 rounded-lg border border-gold/40">
                    <span className="text-xs text-charcoal/60 uppercase block">Reference ID</span>
                    <span className="font-mono text-base font-bold text-burgundy">{submissionReference}</span>
                  </div>
                  <p className="text-xs text-charcoal/75 leading-relaxed">
                    {t.modal.successDesc}
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href={buildWhatsAppLink("251911966755", "catering", {
                        eventType: form.eventType,
                        dates: form.eventDate,
                        guests: form.estimatedGuests,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium text-xs hover:bg-emerald-700 transition"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>{t.modal.whatsAppBtn}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessages.length > 0 && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs">
                      {errorMessages.map((msg, i) => (
                        <p key={i}>• {msg}</p>
                      ))}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      {t.modal.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.customerName}
                      onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        {t.modal.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+251 91 196 6755"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        {t.modal.email}
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        {t.modal.eventDate} *
                      </label>
                      <input
                        type="date"
                        required
                        value={form.eventDate}
                        onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                        className="w-full text-sm px-3 py-2 rounded-xl border border-beige focus:border-burgundy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        {t.modal.guests} *
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="2000"
                        required
                        value={form.estimatedGuests}
                        onChange={(e) => setForm({ ...form, estimatedGuests: parseInt(e.target.value) || 10 })}
                        className="w-full text-sm px-3 py-2 rounded-xl border border-beige focus:border-burgundy outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      {isAmharic ? "የዝግጅቱ ስፍራ" : "Event Venue / Address"} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.eventLocation}
                      onChange={(e) => setForm({ ...form, eventLocation: e.target.value })}
                      placeholder="e.g. Millennium Hall Annex, Private Home"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-beige focus:border-burgundy outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      {t.modal.specialRequests}
                    </label>
                    <textarea
                      rows={2}
                      value={form.additionalNotes}
                      onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                      placeholder="Special dietary requests, specific timings..."
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-beige focus:border-burgundy outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold text-sm transition shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? t.modal.submitting : t.modal.submitBtn}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
