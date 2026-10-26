"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { buildWhatsAppLink } from "@/lib/utils";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  CheckCircle, 
  Send,
  UtensilsCrossed,
  Sparkles,
  Calendar
} from "lucide-react";
import { BranchLocationsSection } from "@/components/home/BranchLocationsSection";

export function ContactClient() {
  const { t, isAmharic } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "catering" as "hotel" | "catering" | "event" | "general",
    message: "",
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessages([]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          const flat = Object.values(data.errors).flat() as string[];
          setErrorMessages(flat);
        } else {
          setErrorMessages([data.message || "Failed to send message"]);
        }
      } else {
        setSubmittedRef(data.reference);
      }
    } catch (err) {
      setErrorMessages(["A network error occurred. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-ivory/40 min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 text-xs font-semibold uppercase tracking-wider mb-4">
            Connect With Our Team
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {t.contact.heroTitle}
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards, Google Maps info, WhatsApp direct */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Card */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-emerald-950">
                    Direct WhatsApp Support
                  </h3>
                  <p className="text-xs text-emerald-800">
                    Instant inquiry assistance from our staff
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <a
                  href={buildWhatsAppLink("251912011701", "catering")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition shadow-sm"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5 mr-1.5 text-emerald-700" />
                  <span>WhatsApp (+251 912 01 17 01)</span>
                </a>
                <a
                  href="https://t.me/EtegeCatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-sky-300 text-sky-900 text-xs font-semibold hover:bg-sky-50 transition shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5 text-[#229ED9]" />
                  <span>Telegram (@EtegeCatering)</span>
                </a>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-beige/70 space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base">
                    {t.contact.addressLabel}
                  </h4>
                  <p className="text-sm text-charcoal/75 mt-1 leading-relaxed">
                    {isAmharic 
                      ? "ዋና ቅርንጫፍ፡ አራዳ ክ/ከተማ፣ ቀበሌ 01 (መኮንኖች ክበብ / ራስ ደስታ ሆስፒታል አካባቢ) | ቅርንጫፍ 2፡ ደጅ ዘውዱ አባ ኮራን መንገድ፣ 9837 (ፕላስ ኮድ፡ 2PRR+8W)"
                      : "Main Hub: Arada Sub City, Kebele 01 (Near Mekonenoch Kebeb / Ras Desta Hospital) | Branch 2: Dej Zewdu Aba koran St, Addis Ababa 9837 (Plus Code: 2PRR+8W)"}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href="https://maps.app.goo.gl/mstnnHuKdhQCwaDF8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-burgundy hover:text-burgundy-900 transition"
                    >
                      <span>{isAmharic ? "ዋና ቅርንጫፍ ካርታ" : "Main Arada Map"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=2PRR%2B8W+Addis+Ababa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-burgundy hover:text-burgundy-900 transition"
                    >
                      <span>{isAmharic ? "ቅርንጫፍ 2 ካርታ (4.0 ★)" : "Branch 2 Map (4.0 ★)"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start space-x-4 pt-4 border-t border-beige/60">
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base">
                    {t.contact.phoneLabel}
                  </h4>
                  <div className="space-y-1.5 mt-1 text-sm">
                    <p className="text-charcoal/80">
                      Main Arada Branch / WhatsApp:{" "}
                      <a href="tel:+251912011701" className="font-semibold text-charcoal hover:text-burgundy">
                        +251 912 01 17 01
                      </a>
                    </p>
                    <p className="text-charcoal/80">
                      Branch 2 (Dej Zewdu Aba koran St):{" "}
                      <a href="tel:+251960276090" className="font-semibold text-charcoal hover:text-burgundy">
                        +251 960 27 60 90
                      </a>
                    </p>
                    <p className="text-charcoal/80">
                      Telegram Support:{" "}
                      <a href="https://t.me/EtegeCatering" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-600 hover:text-sky-700">
                        @EtegeCatering
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 pt-4 border-t border-beige/60">
                <div className="w-10 h-10 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base">
                    {t.contact.emailLabel}
                  </h4>
                  <div className="space-y-1 mt-1 text-sm text-charcoal/80">
                    <p>
                      Catering:{" "}
                      <a href="mailto:catering@etegehotel.com" className="font-medium hover:text-burgundy">
                        catering@etegehotel.com
                      </a>
                    </p>
                    <p>
                      Events & Banquets:{" "}
                      <a href="mailto:events@etegehotel.com" className="font-medium hover:text-burgundy">
                        events@etegehotel.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 pt-4 border-t border-beige/60">
                <div className="w-10 h-10 rounded-xl bg-charcoal/10 text-charcoal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal text-base">
                    {t.contact.hoursLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/75 mt-1 leading-relaxed">
                    Catering Office: 8:00 AM - 8:00 PM (East Africa Time)
                    <br />
                    Event Coordination & Tastings: By Appointment
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map Box */}
            <div className="rounded-3xl overflow-hidden border border-beige/70 shadow-card bg-white p-2">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-ivory">
                <iframe
                  title="Etege Hotel Location Map"
                  src="https://maps.google.com/maps?q=9.0476932,38.7413392&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-beige/80">
              
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-burgundy block mb-1">
                  Inquiry Portal
                </span>
                <h3 className="font-serif text-3xl font-bold text-charcoal">
                  {t.contact.sendUsMessage}
                </h3>
                <p className="text-sm text-charcoal/70 mt-1">
                  Send us your message and our reservations or catering team will respond promptly.
                </p>
              </div>

              {submittedRef ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-charcoal">
                    Message Sent Successfully
                  </h4>
                  <div className="bg-ivory px-4 py-2 rounded-lg border border-gold/40 inline-block">
                    <span className="text-xs text-charcoal/60 uppercase block">Tracking Reference</span>
                    <span className="font-mono text-base font-bold text-burgundy">{submittedRef}</span>
                  </div>
                  <p className="text-sm text-charcoal/75 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Etege Hotel & Catering. We have routed your inquiry to the appropriate department.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "catering",
                          message: "",
                          consent: true,
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-ivory border border-beige text-xs font-semibold text-charcoal hover:bg-beige/60 transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessages.length > 0 && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs space-y-1">
                      {errorMessages.map((msg, i) => (
                        <p key={i}>• {msg}</p>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1.5">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1.5">
                        {t.contact.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+251 91 123 4567"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1.5">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1.5">
                        {t.contact.subject} *
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value as any })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white"
                      >
                        <option value="catering">{t.contact.subjectCatering}</option>
                        <option value="event">{t.contact.subjectEvent}</option>
                        <option value="general">{t.contact.subjectGeneral}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-1.5">
                      {t.contact.message} *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={isAmharic 
                        ? "እባክዎ የዝግጅትዎን አይነት፣ የእንግዶች ብዛት፣ የሚመርጡትን ቀን፣ የቦታውን አድራሻ ወይም ማንኛውንም ጥያቄ ይጥቀሱ..."
                        : "Please specify your event type, estimated guest count, preferred dates, venue location, or catering questions..."}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-beige focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      required
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="w-4 h-4 text-burgundy rounded border-beige focus:ring-burgundy"
                    />
                    <label htmlFor="contact-consent" className="text-xs text-charcoal/70">
                      I agree to allow Etege Hotel & Catering to contact me regarding this message.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-sm transition shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>{t.contact.sendMessageBtn}</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Verified Addis Ababa Branches */}
      <BranchLocationsSection />
    </div>
  );
}
