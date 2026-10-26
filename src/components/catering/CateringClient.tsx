"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { CateringPackage } from "@/types";
import { 
  UtensilsCrossed, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  CalendarCheck,
  ShieldCheck,
  Coffee,
  HeartHandshake
} from "lucide-react";

export function CateringClient({ initialPackages }: { initialPackages: CateringPackage[] }) {
  const { t, isAmharic } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ id: string; name: string }>({
    id: "",
    name: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInquire = (pkg?: CateringPackage) => {
    if (pkg) {
      setSelectedPackage({
        id: pkg.id,
        name: isAmharic ? pkg.nameAm : pkg.name,
      });
    } else {
      setSelectedPackage({ id: "", name: "" });
    }
    setModalOpen(true);
  };

  const faqs = [
    {
      q: "How far in advance should we request a catering quotation?",
      qAm: "የኬተሪንግ የዋጋ ጥያቄን ከስንት ቀን በፊት መጠየቅ አለብን?",
      a: "For large wedding banquets and corporate conferences (over 100 guests), we recommend booking at least 3 to 6 weeks in advance. For intimate private dinners and executive coffee breaks, we can often accommodate inquiries with 5 to 7 days notice.",
      aAm: "ለትላልቅ ሰርጎች እና የድርጅት ስብሰባዎች (ከ100 ሰዎች በላይ) ቢያንስ ከ3 እስከ 6 ሳምንታት ቀደም ብሎ መጠየቅ ይመረጣል። ለጥቃቅን ድግሶች እና የቡና እረፍት ደግሞ ከ5 እስከ 7 ቀናት በፊት ማሳወቅ ይቻላል።",
    },
    {
      q: "Do you cater at external venues or only on-site?",
      qAm: "ከሆቴሉ ውጭ በሌላ አዳራሽ ወይም በግል ቤት የምግብ አገልግሎት ትሰጣላችሁ?",
      a: "Yes! Etege Catering provides full-service off-site banquet catering across Addis Ababa, including private residences, embassy grounds, church halls, and corporate venues. We bring all necessary chafing dishes, serving staff, and setup equipment.",
      aAm: "አዎ! እቴጌ ኬተሪንግ በመላው አዲስ አበባ በሚገኙ የግል ቤቶች፣ አዳራሾች እና የድርጅት ግቢዎች ድረስ ሙሉ የምግብ፣ የእቃ እና የአስተናጋጅ አቅርቦት ይሰጣል።",
    },
    {
      q: "Can menus be customized for dietary requirements (Fasting/Vegan, Halal)?",
      qAm: "የጾም (የቬጀቴሪያን) ወይም የሀላል የምግብ ፍላጎቶችን ታስተናግዳላችሁ?",
      a: "Absolutely. We specialize in authentic Ethiopian fasting (Tsom) delicacies such as Shiro, Misir, and Beyaynetu, as well as strictly certified Halal meats upon client request. Every package can be tailored with specific ratios.",
      aAm: "በፍጹም! የተሟላ የሀበሻ የጾም ምግቦችን (ሽሮ፣ ምስር፣ በያይነቱ) እንዲሁም በጥያቄ መሰረት የተረጋገጠ የሀላል ስጋን እናቀርባለን። እያንዳንዱ ጥቅል እንደፍላጎትዎ ይስተካከላል።",
    },
    {
      q: "What is included with your catering packages?",
      qAm: "በኬተሪንግ ጥቅሎች ውስጥ ምን ምን አገልግሎቶች ተካተዋል?",
      a: "Our comprehensive packages generally include buffet setup, professional chafing warmers, china plates, cutlery, glassware, trained uniformed waitstaff, on-site supervision, and post-service cleanup.",
      aAm: "ሙሉ ጥቅሎቻችን የቡፌ ዝግጅት፣ የምግብ ማሞቂያዎች፣ ሳህኖች፣ ማንኪያዎች፣ ብርጭቆዎች፣ ዩኒፎርም የለበሱ አስተናጋጆች እና የጽዳት አገልግሎትን ያካትታሉ።",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-ivory/50 min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/etege/etege-photo-1.jpg"
            alt="Etege Catering grand wedding and banquet presentation"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Banquet & Culinary Excellence</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {t.cateringPage.heroTitle}
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.cateringPage.heroSubtitle}
          </p>

          <button
            type="button"
            onClick={() => handleInquire()}
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold text-sm transition shadow-lg transform active:scale-95"
          >
            <span>{t.nav.requestQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white border-b border-beige/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
              {t.cateringPage.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-2xl p-6 border border-beige/70 text-center">
              <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center mx-auto mb-4 font-bold font-serif text-lg">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                {t.cateringPage.step1Title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {t.cateringPage.step1Desc}
              </p>
            </div>

            <div className="bg-ivory rounded-2xl p-6 border border-beige/70 text-center">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold-700 flex items-center justify-center mx-auto mb-4 font-bold font-serif text-lg">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                {t.cateringPage.step2Title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {t.cateringPage.step2Desc}
              </p>
            </div>

            <div className="bg-ivory rounded-2xl p-6 border border-beige/70 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 font-bold font-serif text-lg">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-2">
                {t.cateringPage.step3Title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                {t.cateringPage.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-2">
            Curated Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            {t.cateringPage.packagesTitle}
          </h2>
          <p className="text-charcoal/70 text-sm sm:text-base mt-2">
            Every package is fully customizable to your specific guest headcount and culinary tastes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initialPackages.map((pkg) => {
            const pkgName = isAmharic ? pkg.nameAm : pkg.name;
            const pkgDesc = isAmharic ? pkg.descriptionAm : pkg.description;
            const menu = isAmharic ? pkg.menuItemsAm : pkg.menuItems;
            const inclusions = isAmharic ? pkg.serviceInclusionsAm : pkg.serviceInclusions;

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card border border-beige/80 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
              >
                <div>
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={pkg.coverImage}
                      alt={pkgName}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 rounded-full bg-charcoal/85 backdrop-blur-md text-gold text-xs font-semibold uppercase tracking-wider">
                        {pkg.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold text-charcoal shadow flex items-center space-x-1.5">
                      <Users className="w-4 h-4 text-burgundy" />
                      <span>{t.cateringHighlights.minGuests}: {pkg.minGuests}+</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                        {pkgName}
                      </h3>
                      <p className="text-charcoal/75 text-sm leading-relaxed">
                        {pkgDesc}
                      </p>
                    </div>

                    {/* Sample Menu Items */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-burgundy mb-2.5">
                        Sample Menu Inclusions
                      </h4>
                      <ul className="space-y-1.5 text-xs text-charcoal/80">
                        {menu.slice(0, 5).map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-gold-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Inclusions */}
                    <div className="pt-4 border-t border-beige/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2">
                        Service Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/75">
                        {inclusions.slice(0, 4).map((inc, idx) => (
                          <div key={idx} className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex gap-3">
                  <Link
                    href={`/catering/${pkg.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-ivory hover:bg-beige/60 text-charcoal font-semibold text-xs text-center border border-beige transition"
                  >
                    View Complete Package
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleInquire(pkg)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold text-xs text-center shadow-sm transition"
                  >
                    {t.cateringHighlights.requestQuote}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-16 bg-white border-t border-beige/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-charcoal">
              {t.cateringPage.faqTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const question = isAmharic ? faq.qAm : faq.q;
              const answer = isAmharic ? faq.aAm : faq.a;
              const isOpen = openFaq === i;

              return (
                <div
                  key={i}
                  className="rounded-2xl border border-beige/80 overflow-hidden bg-ivory/40 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between font-serif text-base font-semibold text-charcoal hover:text-burgundy transition"
                  >
                    <span>{question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-charcoal/50 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-burgundy" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-charcoal/75 leading-relaxed border-t border-beige/60 pt-3">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType="catering"
        selectedPackageId={selectedPackage.id}
        selectedPackageName={selectedPackage.name}
      />
    </div>
  );
}
