"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { 
  CalendarCheck, 
  Sparkles, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck, 
  Building, 
  GlassWater,
  UtensilsCrossed,
  Cake
} from "lucide-react";

export default function EventsPage() {
  const { t, isAmharic } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState("Wedding & Engagement");

  const openQuoteModal = (eventType: string) => {
    setSelectedEventType(eventType);
    setModalOpen(true);
  };

  const eventTypes = [
    {
      title: "Weddings & Engagements",
      titleAm: "የሰርግ እና መልስ ክብረ በዓላት",
      image: "/images/etege/etege-photo-4.jpg",
      description: "From intimate traditional engagement ceremonies to grand wedding banquets for hundreds or thousands of guests. We curate the feast, service captains, and banquet logistics so your family can celebrate without anxiety.",
      descriptionAm: "ከጥቃቅን የሽኝት እና የጋብቻ ስነስርዓት ጀምሮ እስከ ታላላቅ የሰርግ ድግሶች ድረስ፤ የተዋጣለት ምግብ፣ አስተናጋጅ እና የጠረጴዛ ዝግጅት እናቀርባለን።",
      features: ["Full banquet dinner or multi-chafing buffet setup", "Traditional Ethiopian Habesha Kemis servers", "Custom wedding cake and dessert tables", "Dedicated wedding catering supervisor"],
      serviceType: "Off-site Catering & Banquet Coordination",
    },
    {
      title: "Corporate Conferences & Seminars",
      titleAm: "የድርጅት ስብሰባዎች እና ጉባኤዎች",
      image: "/images/etege/etege-photo-2.jpg",
      description: "Punctual, hygienic, and dignified catering for international delegations, embassies, NGOs, and corporate boards operating in Addis Ababa.",
      descriptionAm: "በአዲስ አበባ ለሚገኙ ኤምባሲዎች፣ አለምአቀፍ ድርጅቶች እና የንግድ ተቋማት በሰዓቱ የሚደርስ ጥራት ያለው የምሳ እና የቡና እረፍት አቅርቦት።",
      features: ["Continuous executive tea & coffee station", "Healthy multi-course buffet lunch", "Dietary labeling (Halal, Vegan, Gluten-Free)", "Eco-friendly sanitized service options"],
      serviceType: "Corporate Catering & Summit Dining",
    },
    {
      title: "Traditional Feasts & Private Banquets",
      titleAm: "ባህላዊ የኢትዮጵያ ድግስ እና የግል ማዕድ",
      image: "/images/etege/etege-photo-1.jpg",
      description: "Milestone birthdays, family reunions, graduation galas, and festive holidays hosted with handcrafted Kitfo, Ayib, Doro Wot, and communal dining at your private residence or rented hall.",
      descriptionAm: "ለልደት፣ ለምረቃ፣ ለአመታዊ በዓላት እና ለቤተሰብ መሰባሰቢያ የሚሆን፤ በቤትዎ ወይም በመረጡት ስፍራ የሚቀርብ ልዩ የምግብ መስተንግዶ።",
      features: ["Ceremonial clay-pot service & fresh meat carvery", "Uniformed private servers in Habesha attire", "Warmers and premium china delivery", "Post-event clearing and packdown"],
      serviceType: "Full-Service Private Event Catering",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-ivory/50 min-h-screen">
      
      {/* Hero */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/etege/etege-photo-5.jpg"
            alt="Event coordination in Addis Ababa by Etege"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 text-xs font-semibold uppercase tracking-wider mb-4">
            Celebrations & Banquets
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {t.eventsPage.heroTitle}
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.eventsPage.heroSubtitle}
          </p>

          <button
            type="button"
            onClick={() => openQuoteModal("Event Consultation")}
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold text-sm transition shadow-lg active:scale-95"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>{t.eventsPage.planWithUs}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>

      {/* Scope Highlights */}
      <section className="py-8 bg-white border-b border-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-charcoal/80">
            <div className="flex items-start space-x-3 bg-ivory p-4 rounded-xl border border-beige/60">
              <Cake className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal text-sm mb-0.5">Dessert & Pastry Displays</strong>
                Custom tiered celebration cakes, strawberry tortes, and dessert tables.
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-ivory p-4 rounded-xl border border-beige/60">
              <UtensilsCrossed className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal text-sm mb-0.5">Off-Site Mobile Catering</strong>
                Delivering complete mobile buffet setups, chefs, and staff to any Addis Ababa venue.
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-ivory p-4 rounded-xl border border-beige/60">
              <CalendarCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal text-sm mb-0.5">Banqueting Logistics</strong>
                Coordinated timeline management, tableware rentals, and attentive service captains.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories with Real Photos */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {eventTypes.map((event, idx) => {
          const isEven = idx % 2 === 1;
          const evTitle = isAmharic ? event.titleAm : event.title;
          const evDesc = isAmharic ? event.descriptionAm : event.description;

          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-beige/70 shadow-card ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo */}
              <div className={`lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden ${isEven ? "lg:order-2" : ""}`}>
                <Image
                  src={event.image}
                  alt={evTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-charcoal/85 backdrop-blur-md text-gold text-xs font-semibold uppercase tracking-wider">
                    {event.serviceType}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : ""}`}>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                  {evTitle}
                </h3>
                <p className="text-charcoal/75 text-sm sm:text-base leading-relaxed">
                  {evDesc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-charcoal/80">
                    {event.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(event.title)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-xs uppercase tracking-wider transition shadow-sm active:scale-95"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4 ml-1 text-gold" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType="catering"
      />
    </div>
  );
}
