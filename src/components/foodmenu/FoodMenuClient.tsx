"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { initialMenuItems, menuCategories, MenuItem } from "@/lib/data/menuItems";
import QRCode from "qrcode";
import {
  Search,
  Plus,
  Minus,
  UtensilsCrossed,
  Sparkles,
  Flame,
  Leaf,
  Cake,
  Coffee,
  Pizza,
  Sandwich,
  Wine,
  Citrus,
  X,
  Share2,
  Printer,
  Download,
  PhoneCall,
  Check,
  ChevronRight,
  Info,
  Clock,
  MapPin,
  QrCode,
  ArrowLeft,
} from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.73C7 10.97 7.9 12.16 8.03 12.33C8.15 12.5 9.8 15.05 12.33 16.14C12.93 16.4 13.4 16.56 13.76 16.67C14.37 16.87 14.92 16.84 15.36 16.77C15.85 16.7 16.86 16.16 17.07 15.57C17.28 14.98 17.28 14.47 17.22 14.37C17.15 14.27 17 14.21 16.76 14.09C16.51 13.97 15.29 13.37 15.06 13.29C14.83 13.2 14.67 13.16 14.51 13.41C14.34 13.65 13.86 14.21 13.72 14.37C13.57 14.54 13.43 14.56 13.18 14.44C12.94 14.31 12.15 14.06 11.22 13.23C10.5 12.58 10.01 11.78 9.87 11.53C9.72 11.29 9.85 11.15 9.98 11.03C10.09 10.92 10.23 10.74 10.35 10.59C10.47 10.45 10.51 10.35 10.59 10.18C10.68 10.02 10.63 9.87 10.57 9.75C10.51 9.63 10.03 8.44 9.83 7.95C9.63 7.47 9.43 7.54 9.27 7.53C9.13 7.52 8.96 7.33 8.53 7.33Z" />
    </svg>
  );
}

function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

function FoodMenuInner() {
  const searchParams = useSearchParams();
  const { t, isAmharic, setLanguage } = useLanguage();

  // URL parameters or defaults
  const initialTable = searchParams?.get("table") || "4";
  const initialBranchParam = searchParams?.get("branch") || "branch1";

  // State
  const [tableNumber, setTableNumber] = useState<string>(initialTable);
  const [selectedBranch, setSelectedBranch] = useState<"branch1" | "branch2">(
    initialBranchParam === "branch2" ? "branch2" : "branch1"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dietaryFilter, setDietaryFilter] = useState<string>("all");

  // Cart / Tray state
  const [tray, setTray] = useState<Record<string, number>>({});
  const [specialNotes, setSpecialNotes] = useState<string>("");
  const [isTrayOpen, setIsTrayOpen] = useState<boolean>(false);
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);

  // Table edit state
  const [isEditingTable, setIsEditingTable] = useState<boolean>(false);
  const [tableInputVal, setTableInputVal] = useState<string>(initialTable);

  // QR Modal State
  const [isQrModalOpen, setIsQrModalOpen] = useState<boolean>(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [qrTableInput, setQrTableInput] = useState<string>(tableNumber);

  // Server Call Alert
  const [waiterCalledMsg, setWaiterCalledMsg] = useState<string | null>(null);

  // Branch contact details
  const branchInfo = useMemo(() => {
    if (selectedBranch === "branch2") {
      return {
        name: isAmharic ? "እቴጌ ሆቴል ፪" : "Etege Hotel 2",
        address: isAmharic ? "ደጅ ዘውዱ አባ ኮራን መ. (2PRR+8W)" : "Dej Zewdu Aba koran St, 9837 (2PRR+8W)",
        phone: "+251 960 27 60 90",
        phoneClean: "251960276090",
      };
    }
    return {
      name: isAmharic ? "እቴጌ ሆቴል እና ኬተሪንግ (ዋናው አራዳ)" : "Etege Hotel & Catering (Main Arada)",
      address: isAmharic ? "አራዳ ክ/ከተማ ቀበሌ 01 (መኮንኖች ክበብ)" : "Arada Sub City, Kebele 01 (Near Mekonenoch)",
      phone: "+251 912 01 17 01",
      phoneClean: "251912011701",
    };
  }, [selectedBranch, isAmharic]);

  // Generate Table QR Code
  useEffect(() => {
    const url = `https://etege-hotel.pages.dev/foodmenu?table=${encodeURIComponent(
      qrTableInput
    )}&branch=${selectedBranch}`;
    QRCode.toDataURL(url, {
      width: 400,
      margin: 2,
      color: {
        dark: "#242327",
        light: "#FFFFFF",
      },
    })
      .then((dataUrl) => setQrCodeDataUrl(dataUrl))
      .catch((err) => console.error(err));
  }, [qrTableInput, selectedBranch]);

  // Cart operations
  const addToTray = (id: string) => {
    setTray((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromTray = (id: string) => {
    setTray((prev) => {
      const updated = { ...prev };
      if (!updated[id]) return updated;
      if (updated[id] <= 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  // Calculations
  const totalItemsCount = useMemo(() => {
    return Object.values(tray).reduce((sum, count) => sum + count, 0);
  }, [tray]);

  const totalEstimatedPrice = useMemo(() => {
    return Object.entries(tray).reduce((sum, [id, count]) => {
      const item = initialMenuItems.find((m) => m.id === id);
      return sum + (item ? item.price * count : 0);
    }, 0);
  }, [tray]);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return initialMenuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === "fasting" && !item.tags.includes("fasting")) return false;
      if (dietaryFilter === "meat" && !item.tags.includes("meat")) return false;
      if (dietaryFilter === "spicy" && !item.tags.includes("spicy")) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesNameAm = item.nameAm.includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesDescAm = item.descriptionAm.includes(q);
        return matchesName || matchesNameAm || matchesDesc || matchesDescAm;
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Order via WhatsApp handler
  const handleSendWhatsAppOrder = () => {
    const lines: string[] = [
      `*🍽️ TABLE ORDER — ETEGE HOTEL & CATERING*`,
      `*Table:* #${tableNumber}`,
      `*Branch:* ${branchInfo.name}`,
      `---------------------------------`,
    ];

    Object.entries(tray).forEach(([id, count]) => {
      const item = initialMenuItems.find((m) => m.id === id);
      if (item) {
        lines.push(`• ${count}x ${item.name} (${item.price * count} ETB)`);
      }
    });

    lines.push(`---------------------------------`);
    lines.push(`*Estimated Total:* ${totalEstimatedPrice.toLocaleString()} ETB`);
    if (specialNotes.trim()) {
      lines.push(`*Special Request:* ${specialNotes.trim()}`);
    }
    lines.push(`\n_Sent from Etege Digital Table Menu (https://etege-hotel.pages.dev/foodmenu?table=${tableNumber})_`);

    const fullMessage = lines.join("\n");
    const waUrl = `https://wa.me/${branchInfo.phoneClean}?text=${encodeURIComponent(fullMessage)}`;
    window.open(waUrl, "_blank");
  };

  // Order via Telegram handler
  const handleSendTelegram = () => {
    window.open("https://t.me/EtegeCatering", "_blank");
  };

  // Call Server handler
  const handleCallServer = () => {
    setWaiterCalledMsg(`🔔 Table #${tableNumber}: ${isAmharic ? "አስተናጋጅ ተጠርቷል! አሁን ይደርሳሉ።" : "Waiter alerted! A staff member is on the way."}`);
    setTimeout(() => {
      setWaiterCalledMsg(null);
    }, 5000);
  };

  // Print Stand handler
  const handlePrintCard = () => {
    window.print();
  };

  // Category Icon helper
  const renderCategoryIcon = (icon: string) => {
    switch (icon) {
      case "Flame":
        return <Flame className="w-4 h-4" />;
      case "Pizza":
        return <Pizza className="w-4 h-4" />;
      case "Sandwich":
        return <Sandwich className="w-4 h-4" />;
      case "Citrus":
        return <Citrus className="w-4 h-4" />;
      case "Wine":
        return <Wine className="w-4 h-4" />;
      case "Coffee":
        return <Coffee className="w-4 h-4" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4" />;
      case "Leaf":
        return <Leaf className="w-4 h-4" />;
      case "Cake":
        return <Cake className="w-4 h-4" />;
      default:
        return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans pb-32">
      {/* Top Fixed Header with Table Info & Language Switch */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-beige/80 shadow-sm transition-all">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3">
          
          {/* Logo & Table Badge */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/70 shadow-sm flex-shrink-0 bg-white p-0.5">
                <Image
                  src="/images/logo-circle.png"
                  alt="Etege Hotel & Catering"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-full"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-serif font-bold text-sm tracking-tight text-charcoal group-hover:text-gold transition">
                  {isAmharic ? "እቴጌ ሆቴል እና ኬተሪንግ" : "ETEGE"}
                </span>
                <span className="text-[9px] tracking-widest uppercase text-burgundy font-semibold">
                  {isAmharic ? "የጠረጴዛ ሜኑ" : "DIGITAL TABLE MENU"}
                </span>
              </div>
            </Link>

            {/* Table Number Pill */}
            <div className="flex items-center bg-burgundy/10 text-burgundy rounded-full pl-3 pr-2 py-1 text-xs font-bold border border-burgundy/20">
              <span>{isAmharic ? "ጠረጴዛ #" : "Table #"} {tableNumber}</span>
              <button
                type="button"
                onClick={() => {
                  setTableInputVal(tableNumber);
                  setIsEditingTable(true);
                }}
                className="ml-2 text-[10px] uppercase font-semibold text-burgundy/75 hover:text-burgundy bg-white px-2 py-0.5 rounded-full shadow-xs transition"
              >
                {isAmharic ? "ቀይር" : "Edit"}
              </button>
            </div>
          </div>

          {/* Right Header Actions: QR Generator & Language Toggle */}
          <div className="flex items-center space-x-2">
            {/* Table QR Stand Generator Button */}
            <button
              type="button"
              onClick={() => {
                setQrTableInput(tableNumber);
                setIsQrModalOpen(true);
              }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gold/15 text-gold-900 border border-gold/40 hover:bg-gold/25 transition shadow-xs"
              title="Generate Table QR Card"
            >
              <QrCode className="w-3.5 h-3.5 text-gold-800" />
              <span className="hidden md:inline">{isAmharic ? "የጠረጴዛ QR ኮድ" : "Table QR Stand"}</span>
            </button>

            {/* Call Waiter Quick Button */}
            <button
              type="button"
              onClick={handleCallServer}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold bg-burgundy text-white hover:bg-burgundy-900 transition shadow-xs"
              title="Alert Waiter to Table"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{isAmharic ? "አስተናጋጅ" : "Server"}</span>
            </button>

            {/* Language Switch */}
            <button
              type="button"
              onClick={() => setLanguage(isAmharic ? "en" : "am")}
              className="px-2.5 py-1 text-xs font-bold rounded-full border border-beige-300 bg-beige/40 hover:bg-beige/80 transition"
            >
              {isAmharic ? "EN" : "አማ"}
            </button>
          </div>

        </div>

        {/* Branch Selection Bar */}
        <div className="bg-ivory border-t border-beige/60 py-1.5 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 overflow-x-auto py-0.5 no-scrollbar">
              <span className="text-charcoal/60 font-medium whitespace-nowrap">
                <MapPin className="w-3 h-3 inline mr-1 text-burgundy" />
                {isAmharic ? "ቅርንጫፍ፡" : "Branch:"}
              </span>
              <button
                type="button"
                onClick={() => setSelectedBranch("branch1")}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedBranch === "branch1"
                    ? "bg-charcoal text-white shadow-xs"
                    : "text-charcoal/70 hover:text-charcoal bg-white/70 border border-beige"
                }`}
              >
                {isAmharic ? "ዋናው አራዳ" : "Main Arada"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedBranch("branch2")}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedBranch === "branch2"
                    ? "bg-charcoal text-white shadow-xs"
                    : "text-charcoal/70 hover:text-charcoal bg-white/70 border border-beige"
                }`}
              >
                {isAmharic ? "ቅርንጫፍ ፪ (ደጅ ዘውዱ አባ ኮራን)" : "Branch 2 (Dej Zewdu Aba koran)"}
              </button>
            </div>

            <div className="hidden sm:flex items-center space-x-2 text-charcoal/60 text-[11px]">
              <Clock className="w-3 h-3 text-gold-700" />
              <span>{isAmharic ? "ክፍት ሰዓት፡ 1:00 ጠዋት – 3:30 ምሽት" : "Daily: 7:00 AM – 9:30 PM"}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Waiter Alert Floating Toast */}
      {waiterCalledMsg && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-charcoal text-white px-5 py-3 rounded-2xl shadow-elevated border border-gold/40 flex items-center space-x-2 animate-fadeIn text-xs sm:text-sm">
          <span>{waiterCalledMsg}</span>
        </div>
      )}

      {/* Hero Welcome Banner */}
      <section className="bg-gradient-to-b from-white to-ivory border-b border-beige/60 py-6 sm:py-8 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-2.5">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold-900 border border-gold/40 text-[11px] font-bold tracking-widest uppercase">
            {isAmharic ? "የጠረጴዛ ዲጂታል የምግብ ማውጫ" : "TABLE QR DIGITAL MENU"}
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal tracking-tight">
            {isAmharic ? "የእቴጌ ጠረጴዛ የምግብ ማውጫ" : "Etege Table Dining Menu"}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/75 max-w-2xl mx-auto leading-relaxed">
            {isAmharic
              ? "በጥንቃቄ ከተመረጠ ትኩስ የበሬ ሥጋ የሚዘጋጅ ልዩ ክትፎ፣ ጭስ የሚል የሸክላ ጥብስ፣ የተሟላ የጾም በያይነቱ እና የጀበና ቡና ስነስርዓት። እዚህ መርጠው ለአስተናጋጅ በቀጥታ ይዘዙ!"
              : "Scan, browse, and select your favorite authentic Ethiopian dishes, sizzling clay-pot tibs, vegan fasting platters, and desserts straight from your table."}
          </p>

          {/* Quick Search & Filter Controls */}
          <div className="pt-3 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isAmharic
                    ? "ምግብ፣ ክትፎ፣ ጥብስ፣ ሽሮ፣ ጁስ፣ ኬክ ይፈልጉ..."
                    : "Search kitfo, tibs, doro wot, shiro, juice..."
                }
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-white border border-beige-300 shadow-xs text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Dietary Filter Pills */}
      <section className="sticky top-[89px] sm:top-[93px] z-30 bg-ivory/95 backdrop-blur-md border-b border-beige/80 py-2.5 px-4">
        <div className="max-w-5xl mx-auto space-y-2">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shadow-xs ${
                    isActive
                      ? "bg-burgundy text-white shadow-md ring-2 ring-gold/50"
                      : "bg-white text-charcoal/80 hover:bg-beige/40 border border-beige"
                  }`}
                >
                  {renderCategoryIcon(cat.icon)}
                  <span>{isAmharic ? cat.nameAm : cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Dietary Filters (All, Fasting, Meat, Spicy) */}
          <div className="flex items-center justify-between text-xs pt-1">
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[11px] text-charcoal/60 uppercase tracking-wider font-semibold mr-1">
                {isAmharic ? "ማጣሪያ፡" : "Filter:"}
              </span>
              {[
                { id: "all", label: isAmharic ? "ሁሉም" : "All" },
                { id: "fasting", label: isAmharic ? "🌿 የጾም" : "🌿 Vegan / Fasting" },
                { id: "meat", label: isAmharic ? "🥩 የሥጋ" : "🥩 Meat" },
                { id: "spicy", label: isAmharic ? "🌶️ ቅመም የበዛው" : "🌶️ Spicy" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setDietaryFilter(f.id)}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium transition ${
                    dietaryFilter === f.id
                      ? "bg-gold text-charcoal font-bold shadow-xs"
                      : "bg-white/80 text-charcoal/70 hover:bg-white border border-beige/60"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <span className="text-[11px] text-charcoal/60 font-medium">
              {filteredItems.length} {isAmharic ? "ምግቦች" : "items"}
            </span>
          </div>

        </div>
      </section>

      {/* Menu Items Grid */}
      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-8 w-full flex-1">
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-beige shadow-card max-w-md mx-auto my-8">
            <UtensilsCrossed className="w-12 h-12 text-burgundy/40 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-charcoal">
              {isAmharic ? "ምንም ምግብ አልተገኘም" : "No dishes found"}
            </h3>
            <p className="text-xs text-charcoal/70 mt-1">
              {isAmharic ? "እባክዎ ሌላ ቃል ፈልገው ይሞክሩ።" : "Try adjusting your search or category filters."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setDietaryFilter("all");
              }}
              className="mt-4 px-4 py-2 bg-burgundy text-white rounded-full text-xs font-semibold hover:bg-burgundy-900 transition"
            >
              {isAmharic ? "ሁሉንም አሳይ" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item) => {
              const qtyInTray = tray[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-beige/80 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex space-x-3.5 sm:space-x-4">
                    {/* Dish Thumbnail */}
                    <div
                      onClick={() => setSelectedItemDetail(item)}
                      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-beige/30 flex-shrink-0 cursor-pointer shadow-sm group-hover:scale-[1.02] transition-transform duration-200"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100px, 120px"
                        className="object-cover"
                      />
                      {item.isPopular && (
                        <span className="absolute top-1.5 left-1.5 bg-burgundy/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs">
                          {isAmharic ? "ተወዳጅ" : "Popular"}
                        </span>
                      )}
                    </div>

                    {/* Dish Text Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        {/* Title */}
                        <h3
                          onClick={() => setSelectedItemDetail(item)}
                          className="font-serif text-base sm:text-lg font-bold text-charcoal leading-snug cursor-pointer hover:text-burgundy transition line-clamp-1"
                        >
                          {isAmharic ? item.nameAm : item.name}
                        </h3>
                        <p className="text-[11px] text-gold-800 font-medium">
                          {isAmharic ? item.name : item.nameAm}
                        </p>

                        {/* Description */}
                        <p className="text-xs text-charcoal/70 line-clamp-2 mt-1 leading-relaxed">
                          {isAmharic ? item.descriptionAm : item.description}
                        </p>
                      </div>

                      {/* Tags & Portion */}
                      <div className="flex items-center flex-wrap gap-1 mt-2">
                        {item.tags.includes("fasting") && (
                          <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                            {isAmharic ? "የጾም" : "Vegan"}
                          </span>
                        )}
                        {item.tags.includes("meat") && (
                          <span className="text-[10px] font-semibold bg-red-50 text-red-800 px-2 py-0.5 rounded-full border border-red-200">
                            {isAmharic ? "የሥጋ" : "Meat"}
                          </span>
                        )}
                        {item.tags.includes("spicy") && (
                          <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                            🌶️ {isAmharic ? "በርበሬ" : "Spicy"}
                          </span>
                        )}
                        {item.tags.includes("ceremony") && (
                          <span className="text-[10px] font-semibold bg-purple-50 text-purple-800 px-2 py-0.5 rounded-full border border-purple-200">
                            ☕ {isAmharic ? "ስነስርዓት" : "Ceremony"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Price & Quantity Stepper */}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-beige/60">
                    <div>
                      <span className="font-serif text-base sm:text-lg font-extrabold text-burgundy">
                        {item.priceFormatted}
                      </span>
                      <span className="text-[11px] text-charcoal/50 ml-1 block sm:inline">
                        • {isAmharic ? item.portionAm : item.portion}
                      </span>
                    </div>

                    {/* Stepper / Add button */}
                    {qtyInTray > 0 ? (
                      <div className="flex items-center bg-burgundy/10 text-burgundy rounded-full p-1 border border-burgundy/20">
                        <button
                          type="button"
                          onClick={() => removeFromTray(item.id)}
                          className="w-7 h-7 rounded-full bg-white text-burgundy flex items-center justify-center hover:bg-beige transition shadow-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-charcoal">
                          {qtyInTray}
                        </span>
                        <button
                          type="button"
                          onClick={() => addToTray(item.id)}
                          className="w-7 h-7 rounded-full bg-burgundy text-white flex items-center justify-center hover:bg-burgundy-900 transition shadow-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToTray(item.id)}
                        className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-burgundy transition shadow-xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isAmharic ? "ምረጥ" : "Add"}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Floating Bottom Sticky Tray Bar */}
      {totalItemsCount > 0 && (
        <aside 
          aria-label="Table Selection Summary" 
          className="fixed bottom-4 left-0 right-0 z-40 px-4 animate-slideUp"
        >
          <div className="max-w-xl mx-auto bg-charcoal/95 backdrop-blur-md text-white rounded-3xl p-3 sm:p-4 shadow-elevated border-2 border-gold/60 flex items-center justify-between">
            <div className="pl-2">
              <span className="text-[11px] tracking-wider uppercase text-gold font-bold block">
                {isAmharic ? `ጠረጴዛ #${tableNumber} ምርጫዎች` : `Table #${tableNumber} Selection`}
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-lg sm:text-xl font-bold font-serif text-white">
                  {totalEstimatedPrice.toLocaleString()} ETB
                </span>
                <span className="text-xs text-white/70">
                  ({totalItemsCount} {isAmharic ? "ምግቦች" : "items"})
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsTrayOpen(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gold text-charcoal font-bold text-xs sm:text-sm hover:bg-gold-400 transition shadow-md"
            >
              <span>{isAmharic ? "ማጠቃለያውን ይመልከቱ" : "Review Tray"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Table Tray Review Modal / Drawer */}
      {isTrayOpen && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tray-modal-title"
        >
          <div 
            className="bg-white w-full max-w-xl rounded-t-3xl sm:rounded-3xl shadow-elevated overflow-hidden border border-beige flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-burgundy to-burgundy-900 px-6 py-4 text-white flex items-center justify-between">
              <div>
                <h2 id="tray-modal-title" className="font-serif text-lg font-bold tracking-tight">
                  {isAmharic ? `የጠረጴዛ #${tableNumber} ትዕዛዝ ማጠቃለያ` : `Table #${tableNumber} Order Summary`}
                </h2>
                <p className="text-white/80 text-xs">
                  {branchInfo.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsTrayOpen(false)}
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Itemized List */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {Object.entries(tray).map(([id, qty]) => {
                const item = initialMenuItems.find((m) => m.id === id);
                if (!item) return null;
                return (
                  <div key={id} className="flex items-center justify-between pb-3 border-b border-beige/60">
                    <div className="flex-1 pr-3">
                      <h4 className="font-serif font-bold text-sm text-charcoal">
                        {isAmharic ? item.nameAm : item.name}
                      </h4>
                      <span className="text-xs text-burgundy font-semibold">
                        {(item.price * qty).toLocaleString()} ETB
                      </span>
                      <span className="text-[11px] text-charcoal/50 ml-1.5">
                        ({item.price} ETB ea.)
                      </span>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center bg-beige/40 rounded-full p-1 border border-beige">
                      <button
                        type="button"
                        onClick={() => removeFromTray(item.id)}
                        className="w-6 h-6 rounded-full bg-white text-charcoal flex items-center justify-center hover:bg-beige transition shadow-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-charcoal">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => addToTray(item.id)}
                        className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center hover:bg-burgundy-900 transition shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Special Instructions Input */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-charcoal mb-1">
                  {isAmharic ? "ልዩ ምርጫ / ማሳሰቢያ ለሼፉ" : "Special Request / Kitchen Note"}
                </label>
                <textarea
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder={
                    isAmharic
                      ? "ለምሳሌ፡ በርበሬ አይብዛበት፣ ቅቤ ጨምሩበት፣ ቆጮ ይሁን..."
                      : "e.g., Mild spicy please, extra awaze, kocho instead of injera..."
                  }
                  rows={2}
                  className="w-full p-3 rounded-2xl bg-beige/30 border border-beige-300 text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/60"
                />
              </div>

              {/* Total Card */}
              <div className="bg-ivory rounded-2xl p-4 border border-beige flex items-center justify-between">
                <div>
                  <span className="text-xs text-charcoal/70 uppercase tracking-wider block">
                    {isAmharic ? "አጠቃላይ የሚገመት ሂሳብ" : "Estimated Total"}
                  </span>
                  <span className="text-xs text-charcoal/50">
                    {isAmharic ? "ግብርን ጨምሮ" : "Inclusive of standard service"}
                  </span>
                </div>
                <span className="font-serif text-2xl font-bold text-burgundy">
                  {totalEstimatedPrice.toLocaleString()} ETB
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 bg-white border-t border-beige/80 space-y-2.5">
              <button
                type="button"
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition flex items-center justify-center space-x-2 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{isAmharic ? "ትዕዛዝዎን በዋትስአፕ ለአስተናጋጅ ይላኩ" : "Send Order to Waiter via WhatsApp"}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleSendTelegram}
                  className="py-2.5 px-3 rounded-xl bg-sky-500 text-white font-semibold text-xs hover:bg-sky-600 transition flex items-center justify-center space-x-1.5"
                >
                  <TelegramIcon className="w-3.5 h-3.5" />
                  <span>{isAmharic ? "በቴሌግራም" : "Via Telegram"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleCallServer();
                    setIsTrayOpen(false);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-charcoal text-white font-semibold text-xs hover:bg-burgundy transition flex items-center justify-center space-x-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold" />
                  <span>{isAmharic ? "አስተናጋጅ ጥራ" : "Call Server"}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setTray({})}
                className="w-full text-center text-xs text-charcoal/50 hover:text-red-600 transition pt-1"
              >
                {isAmharic ? "ምርጫውን ሰርዝ" : "Clear Table Selection"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dish Detail Modal */}
      {selectedItemDetail && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-detail-title"
        >
          <div 
            className="bg-white w-full max-w-lg rounded-3xl shadow-elevated overflow-hidden border border-beige flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dish Image */}
            <div className="relative w-full h-56 bg-charcoal">
              <Image
                src={selectedItemDetail.image}
                alt={selectedItemDetail.name}
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItemDetail(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-charcoal/70 text-white flex items-center justify-center hover:bg-charcoal transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dish Info */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-burgundy">
                  {isAmharic ? selectedItemDetail.categoryNameAm : selectedItemDetail.categoryName}
                </span>
                <h3 id="dish-detail-title" className="font-serif text-xl sm:text-2xl font-bold text-charcoal mt-0.5">
                  {isAmharic ? selectedItemDetail.nameAm : selectedItemDetail.name}
                </h3>
                <p className="text-xs text-gold-800 font-medium">
                  {isAmharic ? selectedItemDetail.name : selectedItemDetail.nameAm}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                {isAmharic ? selectedItemDetail.descriptionAm : selectedItemDetail.description}
              </p>

              <div className="bg-beige/40 rounded-2xl p-3.5 flex items-center justify-between text-xs text-charcoal/80">
                <div>
                  <span className="text-charcoal/50 block text-[10px] uppercase tracking-wider">
                    {isAmharic ? "መጠን" : "Portion"}
                  </span>
                  <span className="font-semibold">
                    {isAmharic ? selectedItemDetail.portionAm : selectedItemDetail.portion}
                  </span>
                </div>
                {selectedItemDetail.preparationTime && (
                  <div>
                    <span className="text-charcoal/50 block text-[10px] uppercase tracking-wider">
                      {isAmharic ? "የዝግጅት ጊዜ" : "Prep Time"}
                    </span>
                    <span className="font-semibold">
                      {selectedItemDetail.preparationTime}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-charcoal/50 block text-[10px] uppercase tracking-wider">
                    {isAmharic ? "ዋጋ" : "Price"}
                  </span>
                  <span className="font-serif font-bold text-burgundy text-base">
                    {selectedItemDetail.priceFormatted}
                  </span>
                </div>
              </div>

              {/* Add to Tray Action */}
              <button
                type="button"
                onClick={() => {
                  addToTray(selectedItemDetail.id);
                  setSelectedItemDetail(null);
                }}
                className="w-full py-3 rounded-full bg-burgundy text-white font-bold text-sm hover:bg-burgundy-900 transition flex items-center justify-center space-x-2 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>
                  {isAmharic ? `ወደ ጠረጴዛ #${tableNumber} ማዕድ ጨምር` : `Add to Table #${tableNumber}`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Table Modal */}
      {isEditingTable && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="table-modal-title"
        >
          <div 
            className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-elevated border border-beige space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 id="table-modal-title" className="font-serif text-lg font-bold text-charcoal">
                {isAmharic ? "የጠረጴዛ ቁጥር ይምረጡ" : "Select Table Number"}
              </h3>
              <button
                type="button"
                onClick={() => setIsEditingTable(false)}
                className="text-charcoal/50 hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-charcoal/70">
              {isAmharic
                ? "እባክዎ የተቀመጡበትን ጠረጴዛ ቁጥር ያስገቡ ወይም ፈጣን ምርጫዎችን ይጠቀሙ።"
                : "Enter your table number or select from quick choices."}
            </p>

            <input
              type="text"
              value={tableInputVal}
              onChange={(e) => setTableInputVal(e.target.value)}
              placeholder="e.g., 4 or VIP-A"
              className="w-full p-3 rounded-2xl bg-beige/30 border border-beige-300 text-center font-serif text-xl font-bold text-burgundy focus:outline-none focus:ring-2 focus:ring-gold"
            />

            {/* Quick table numbers grid */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {["1", "2", "3", "4", "5", "6", "7", "8", "VIP 1", "VIP 2", "Patio", "Bar"].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setTableInputVal(num)}
                  className={`py-1.5 rounded-xl text-xs font-semibold border transition ${
                    tableInputVal === num
                      ? "bg-burgundy text-white border-burgundy"
                      : "bg-white text-charcoal/80 border-beige hover:bg-beige/40"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                if (tableInputVal.trim()) {
                  setTableNumber(tableInputVal.trim());
                }
                setIsEditingTable(false);
              }}
              className="w-full py-2.5 rounded-full bg-burgundy text-white font-bold text-xs hover:bg-burgundy-900 transition"
            >
              {isAmharic ? "አረጋግጥ" : "Confirm Table"}
            </button>
          </div>
        </div>
      )}

      {/* Table Tent QR Generator & Printable Stand Modal */}
      {isQrModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-stand-title"
        >
          <div 
            className="bg-white w-full max-w-md rounded-3xl shadow-elevated border border-beige overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-charcoal px-6 py-4 text-white flex items-center justify-between border-b border-gold/40">
              <div className="flex items-center space-x-2.5">
                <QrCode className="w-5 h-5 text-gold" />
                <h3 id="qr-stand-title" className="font-serif font-bold text-base text-white">
                  {isAmharic ? "የጠረጴዛ QR ኮድ መቆሚያ" : "Table Tent QR Stand"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Printable Preview Card */}
            <div className="p-6 bg-ivory flex flex-col items-center print:p-0">
              {/* The Tent Stand Container */}
              <div 
                id="printable-table-card"
                className="bg-white border-2 border-gold/70 rounded-3xl p-6 shadow-md w-full max-w-xs text-center flex flex-col items-center space-y-3"
              >
                {/* Circular Crest */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/80 p-0.5 shadow-sm bg-white">
                  <Image
                    src="/images/logo-circle.png"
                    alt="Etege Hotel Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    ETEGE HOTEL & CATERING
                  </h4>
                  <p className="text-[10px] tracking-widest uppercase text-burgundy font-semibold">
                    እቴጌ ሆቴል እና ኬተሪንግ
                  </p>
                </div>

                {/* Table Number Badge */}
                <div className="inline-block bg-burgundy text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  TABLE #{qrTableInput}
                </div>

                {/* Live High-Res QR Code */}
                {qrCodeDataUrl && (
                  <div className="bg-white p-3 rounded-2xl border border-beige shadow-inner my-1">
                    <img
                      src={qrCodeDataUrl}
                      alt={`Table ${qrTableInput} QR Code`}
                      className="w-44 h-44 object-contain"
                    />
                  </div>
                )}

                <div className="space-y-0.5 text-xs text-charcoal/80">
                  <p className="font-bold text-charcoal">
                    {isAmharic ? "ካሜራዎን አነጣጥረው ሜኑ ይምረጡ" : "Scan with phone camera to order"}
                  </p>
                  <p className="text-[11px] text-charcoal/60">
                    WiFi: <span className="font-semibold text-charcoal">Etege-Guest</span>
                  </p>
                  <p className="text-[10px] text-gold-800">
                    {branchInfo.phone}
                  </p>
                </div>
              </div>

              {/* Selector for Table # to generate */}
              <div className="w-full mt-4 flex items-center justify-between text-xs bg-white p-3 rounded-2xl border border-beige">
                <span className="font-semibold text-charcoal/70">
                  {isAmharic ? "የጠረጴዛ ቁጥር ይምረጡ፡" : "Set Table #:"}
                </span>
                <input
                  type="text"
                  value={qrTableInput}
                  onChange={(e) => setQrTableInput(e.target.value)}
                  className="w-20 px-2.5 py-1 rounded-lg border border-beige-300 text-center font-bold text-burgundy"
                />
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="p-4 bg-white border-t border-beige/80 flex items-center justify-end space-x-2">
              <a
                href={qrCodeDataUrl}
                download={`Etege-Table-${qrTableInput}-QR.png`}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-beige bg-beige/30 text-xs font-semibold text-charcoal hover:bg-beige transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isAmharic ? "QR አውርድ" : "Download PNG"}</span>
              </a>
              <button
                type="button"
                onClick={handlePrintCard}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-burgundy text-white text-xs font-bold hover:bg-burgundy-900 transition shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isAmharic ? "ካርድ አትም" : "Print Stand"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function FoodMenuClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full border-2 border-gold border-t-transparent animate-spin mx-auto" />
          <p className="font-serif text-sm font-semibold text-charcoal">
            Loading Etege Digital Table Menu...
          </p>
        </div>
      </div>
    }>
      <FoodMenuInner />
    </Suspense>
  );
}
