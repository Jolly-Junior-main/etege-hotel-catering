"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { buildWhatsAppLink } from "@/lib/utils";
import { X, Calendar, Users, CheckCircle, MessageSquare, UtensilsCrossed, AlertCircle, Sparkles } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  selectedPackageId?: string;
  selectedPackageName?: string;
}

export function InquiryModal({
  isOpen,
  onClose,
  selectedPackageId = "",
  selectedPackageName = "",
}: InquiryModalProps) {
  const { t, isAmharic } = useLanguage();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    eventType: "Royal Wedding & Engagement",
    eventDate: "",
    eventLocation: "Addis Ababa",
    estimatedGuests: 100,
    packageId: selectedPackageId || "pkg-royal-wedding",
    packageName: selectedPackageName || "Royal Wedding Banquet Package",
    budgetRange: "Standard Package",
    additionalNotes: "",
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [submissionResult, setSubmissionResult] = useState<{
    reference: string;
  } | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      if (selectedPackageId) {
        setForm(prev => ({
          ...prev,
          packageId: selectedPackageId,
          packageName: selectedPackageName || prev.packageName
        }));
      }
      setSubmissionResult(null);
      setErrorMessages([]);
    }
  }, [isOpen, selectedPackageId, selectedPackageName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessages([]);

    try {
      // Generate client-side reference in case static export offline
      const clientRef = "ETH-CAT-" + Math.floor(10000 + Math.random() * 90000);

      // Attempt API call if backend route exists
      try {
        const res = await fetch("/api/catering", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (res.ok) {
          const data = await res.json();
          setSubmissionResult({ reference: data.reference || clientRef });
          setIsSubmitting(false);
          return;
        }
      } catch {
        // Fallback for purely static deployment
      }

      setSubmissionResult({ reference: clientRef });
    } catch (err) {
      setErrorMessages(["Unable to process your request right now. Please message us directly on WhatsApp."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsAppDirectMessage = `Hello Etege Catering, I would like to request a quote for my event. Name: ${form.customerName || "Prospective Client"}, Event: ${form.eventType}, Guests: ${form.estimatedGuests}, Date: ${form.eventDate || "TBD"}`;
  const whatsAppDirectUrl = `https://wa.me/251912011701?text=${encodeURIComponent(whatsAppDirectMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl shadow-elevated w-full max-w-xl overflow-hidden border border-beige"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-burgundy to-burgundy-900 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 border border-gold/50 shadow-sm flex-shrink-0 overflow-hidden">
              <Image
                src="/images/logo-circle.png"
                alt="Etege Emblem"
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
                {t.modal.title}
              </h3>
              <p className="text-white/80 text-xs mt-0.5">
                {t.modal.subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submissionResult ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-charcoal">
                {t.modal.successTitle}
              </h4>
              <div className="p-4 bg-ivory rounded-xl border border-beige max-w-md mx-auto">
                <p className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">
                  {t.modal.successRef}
                </p>
                <p className="font-mono text-xl font-bold text-burgundy mt-1">
                  {submissionResult.reference}
                </p>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-md mx-auto">
                {t.modal.successDesc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppLink("251911966755", `Hello Etege Catering, my quotation inquiry reference is ${submissionResult.reference}. I would like to confirm my event details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.modal.whatsAppBtn}</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg border border-charcoal/20 text-charcoal hover:bg-beige/40 text-sm font-semibold transition"
                >
                  {t.modal.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessages.length > 0 && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs space-y-1">
                  <div className="flex items-center space-x-1.5 font-semibold">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please correct the following:</span>
                  </div>
                  <ul className="list-disc pl-5">
                    {errorMessages.map((msg, i) => (
                      <li key={i}>{msg}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    {t.modal.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.customerName}
                    onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition"
                    placeholder="e.g. Abebe Balcha"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    {t.modal.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition"
                    placeholder="+251 91 196 6755"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                  {t.modal.email} (Optional)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition"
                  placeholder="name@example.com"
                />
              </div>

              {/* Event Type & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    {t.modal.eventType} *
                  </label>
                  <select
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition bg-white"
                  >
                    <option value="Royal Wedding & Engagement">{t.hero.wedding}</option>
                    <option value="Corporate Conference / Summit">{t.hero.corporate}</option>
                    <option value="Private Banquet / Birthday">{t.hero.privateDinner}</option>
                    <option value="Memorial / Haazen Reception">{t.hero.memorial}</option>
                    <option value="Social & Cultural Gathering">{t.hero.socialGathering}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    {t.modal.guests} *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 absolute left-3 top-3 text-charcoal/40" />
                    <input
                      type="number"
                      min={20}
                      max={5000}
                      required
                      value={form.estimatedGuests}
                      onChange={(e) => setForm({ ...form, estimatedGuests: parseInt(e.target.value) || 20 })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Event Date & Package */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    {t.modal.eventDate} *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-charcoal/40" />
                    <input
                      type="date"
                      required
                      value={form.eventDate}
                      onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    {t.modal.packageSelect}
                  </label>
                  <select
                    value={form.packageId}
                    onChange={(e) => {
                      const sel = e.target.value;
                      setForm({
                        ...form,
                        packageId: sel,
                        packageName: e.target.options[e.target.selectedIndex].text,
                      });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition bg-white"
                  >
                    <option value="pkg-royal-wedding">Royal Wedding Banquet Package</option>
                    <option value="pkg-traditional-feast">Traditional Ethiopian Grand Feast</option>
                    <option value="pkg-deluxe-dessert-buffet">Deluxe Pastry & Dessert Buffet</option>
                    <option value="pkg-corporate-buffet">Executive Corporate Buffet</option>
                    <option value="pkg-memorial-reception">Memorial & Commemorative Reception</option>
                    <option value="custom">{t.modal.anyPackage}</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                  {t.modal.specialRequests}
                </label>
                <textarea
                  rows={2}
                  value={form.additionalNotes}
                  onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-charcoal/20 focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm text-charcoal outline-none transition"
                  placeholder="Tell us about your venue location in Addis Ababa, fasting menu preferences, or special requests..."
                />
              </div>

              {/* WhatsApp & Telegram Quick Note */}
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2 text-xs text-emerald-900 font-medium">
                  <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{t.modal.whatsAppNote}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://t.me/EtegeCatering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-md bg-[#229ED9] hover:bg-[#1b86ba] text-white text-xs font-semibold transition shadow-sm"
                  >
                    <span>Telegram</span>
                  </a>
                  <a
                    href={whatsAppDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm shadow-md transition disabled:opacity-60 flex items-center justify-center space-x-2 active:scale-[0.99]"
                >
                  <UtensilsCrossed className="w-4 h-4 text-gold" />
                  <span>{isSubmitting ? t.modal.submitting : t.modal.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
