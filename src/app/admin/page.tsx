"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Room, 
  CateringPackage, 
  RoomReservation, 
  CateringInquiry, 
  ContactInquiry, 
  GalleryItem, 
  Testimonial, 
  SiteSettings,
  ReservationStatus,
  QuoteStatus 
} from "@/types";
import { formatCurrency, buildWhatsAppLink } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Hotel, 
  UtensilsCrossed, 
  Calendar, 
  FileText, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings, 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  ExternalLink, 
  RefreshCw,
  Eye,
  AlertCircle,
  Save,
  CheckCircle2,
  Clock,
  DollarSign,
  ChevronRight,
  Shield,
  LogOut
} from "lucide-react";

type AdminTab = 
  | "overview" 
  | "reservations" 
  | "rooms" 
  | "catering" 
  | "quotations" 
  | "gallery" 
  | "testimonials" 
  | "settings";

type AdminRole = "owner" | "hotel_staff" | "catering_manager";

export default function AdminPage() {
  const [currentRole, setCurrentRole] = useState<AdminRole>("owner");
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  
  // Data States
  const [rooms, setRooms] = useState<Room[]>([]);
  const [packages, setPackages] = useState<CateringPackage[]>([]);
  const [reservations, setReservations] = useState<RoomReservation[]>([]);
  const [cateringInquiries, setCateringInquiries] = useState<CateringInquiry[]>([]);
  const [contactInquiries, setContactInquiries] = useState<ContactInquiry[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Search & Filter States
  const [reservationSearch, setReservationSearch] = useState("");
  const [reservationStatusFilter, setReservationStatusFilter] = useState<string>("all");
  const [quoteSearch, setQuoteSearch] = useState("");
  const [quoteStatusFilter, setQuoteStatusFilter] = useState<string>("all");

  // Edit Modals / Forms States
  const [editingRoom, setEditingRoom] = useState<Partial<Room> | null>(null);
  const [editingPackage, setEditingPackage] = useState<Partial<CateringPackage> | null>(null);
  const [editingGallery, setEditingGallery] = useState<Partial<GalleryItem> | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial> | null>(null);

  // Load all initial data from APIs
  const loadData = async () => {
    setIsLoading(true);
    try {
      const [
        roomsRes, 
        pkgRes, 
        resRes, 
        catRes, 
        contactRes, 
        galRes, 
        testRes, 
        settRes
      ] = await Promise.all([
        fetch("/api/rooms").then(r => r.json()),
        fetch("/api/packages").then(r => r.json()),
        fetch("/api/reservations").then(r => r.json()),
        fetch("/api/catering").then(r => r.json()),
        fetch("/api/contact").then(r => r.json()),
        fetch("/api/gallery").then(r => r.json()),
        fetch("/api/testimonials").then(r => r.json()),
        fetch("/api/settings").then(r => r.json()),
      ]);

      if (roomsRes.rooms) setRooms(roomsRes.rooms);
      if (pkgRes.packages) setPackages(pkgRes.packages);
      if (resRes.reservations) setReservations(resRes.reservations);
      if (catRes.inquiries) setCateringInquiries(catRes.inquiries);
      if (contactRes.contacts) setContactInquiries(contactRes.contacts);
      if (galRes.gallery) setGallery(galRes.gallery);
      if (testRes.testimonials) setTestimonials(testRes.testimonials);
      if (settRes.settings) setSettings(settRes.settings);
    } catch (err) {
      console.error("Error loading admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 4000);
  };

  // Status updates
  const handleUpdateReservationStatus = async (id: string, newStatus: ReservationStatus, notes?: string) => {
    try {
      const res = await fetch("/api/reservations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, adminNotes: notes }),
      });
      const data = await res.json();
      if (data.success) {
        setReservations(prev => prev.map(r => r.id === id ? data.reservation : r));
        showFeedback(`Reservation ${data.reservation.reference} marked as ${newStatus}`);
      }
    } catch (err) {
      alert("Failed to update reservation status");
    }
  };

  const handleUpdateQuoteStatus = async (id: string, newStatus: QuoteStatus, notes?: string, quotedAmount?: number) => {
    try {
      const res = await fetch("/api/catering", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, adminNotes: notes, quotedAmount }),
      });
      const data = await res.json();
      if (data.success) {
        setCateringInquiries(prev => prev.map(c => c.id === id ? data.inquiry : c));
        showFeedback(`Catering quote ${data.inquiry.reference} updated to ${newStatus}`);
      }
    } catch (err) {
      alert("Failed to update quote status");
    }
  };

  // Room CRUD
  const handleSaveRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRoom) return;

    try {
      if (editingRoom.id) {
        const res = await fetch("/api/rooms", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingRoom),
        });
        const data = await res.json();
        if (data.success) {
          setRooms(prev => prev.map(r => r.id === editingRoom.id ? data.room : r));
          showFeedback("Room details updated successfully");
        }
      } else {
        const res = await fetch("/api/rooms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...editingRoom,
            slug: (editingRoom.name || "room").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            gallery: editingRoom.gallery || [editingRoom.coverImage || ""],
            amenities: editingRoom.amenities || ["Wi-Fi", "Smart TV", "Private Shower"],
            amenitiesAm: editingRoom.amenitiesAm || ["ዋይፋይ", "ቲቪ", "ሻወር"],
            isFeatured: editingRoom.isFeatured || false,
            isPublished: true,
            displayOrder: rooms.length + 1,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setRooms(prev => [...prev, data.room]);
          showFeedback("New room published to catalog");
        }
      }
      setEditingRoom(null);
    } catch (err) {
      alert("Error saving room");
    }
  };

  const handleDeleteRoom = async (id: string) => {
    if (!confirm("Are you sure you want to delete this room?")) return;
    try {
      const res = await fetch(`/api/rooms?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setRooms(prev => prev.filter(r => r.id !== id));
        showFeedback("Room removed successfully");
      }
    } catch (err) {
      alert("Failed to delete room");
    }
  };

  // Catering Package CRUD
  const handleSavePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPackage) return;

    try {
      if (editingPackage.id) {
        const res = await fetch("/api/packages", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingPackage),
        });
        const data = await res.json();
        if (data.success) {
          setPackages(prev => prev.map(p => p.id === editingPackage.id ? data.package : p));
          showFeedback("Catering package updated successfully");
        }
      } else {
        const res = await fetch("/api/packages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...editingPackage,
            slug: (editingPackage.name || "package").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            gallery: editingPackage.gallery || [editingPackage.coverImage || ""],
            menuItems: editingPackage.menuItems || ["Traditional Doro Wot", "Beef Tibs", "Beyaynetu Vegan"],
            menuItemsAm: editingPackage.menuItemsAm || ["የሀበሻ ዶሮ ወጥ", "የበሬ ጥብስ", "የጾም በያይነቱ"],
            serviceInclusions: editingPackage.serviceInclusions || ["Buffet setup", "Waitstaff", "Chafing dishes"],
            serviceInclusionsAm: editingPackage.serviceInclusionsAm || ["የቡፌ ዝግጅት", "አስተናጋጆች", "ማሞቂያዎች"],
            isFeatured: editingPackage.isFeatured || false,
            isPublished: true,
            displayOrder: packages.length + 1,
            priceOnRequest: true,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setPackages(prev => [...prev, data.package]);
          showFeedback("New catering package created");
        }
      }
      setEditingPackage(null);
    } catch (err) {
      alert("Error saving package");
    }
  };

  const handleDeletePackage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this catering package?")) return;
    try {
      const res = await fetch(`/api/packages?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setPackages(prev => prev.filter(p => p.id !== id));
        showFeedback("Package removed");
      }
    } catch (err) {
      alert("Failed to delete package");
    }
  };

  // Gallery CRUD
  const handleAddGalleryItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGallery?.imageUrl) return;

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editingGallery.title || "Hospitality Photo",
          titleAm: editingGallery.titleAm || "የሆቴል ፎቶ",
          category: editingGallery.category || "hotel",
          imageUrl: editingGallery.imageUrl,
          altText: editingGallery.altText || "Etege Hotel photo",
          displayOrder: gallery.length + 1,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setGallery(prev => [...prev, data.item]);
        setEditingGallery(null);
        showFeedback("Photo added to visual gallery");
      }
    } catch (err) {
      alert("Failed to add image");
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Remove image from gallery?")) return;
    try {
      const res = await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setGallery(prev => prev.filter(g => g.id !== id));
        showFeedback("Image removed from gallery");
      }
    } catch (err) {
      alert("Failed to delete image");
    }
  };

  // Testimonials CRUD
  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial?.guestName || !newTestimonial.comment) return;

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newTestimonial,
          rating: newTestimonial.rating || 5,
          date: new Date().toISOString().split("T")[0],
          isVerified: true,
          isPublished: true,
          commentAm: newTestimonial.commentAm || newTestimonial.comment,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setTestimonials(prev => [...prev, data.testimonial]);
        setNewTestimonial(null);
        showFeedback("Client review authorized and published");
      }
    } catch (err) {
      alert("Failed to add testimonial");
    }
  };

  const handleToggleTestimonial = async (id: string, isPublished: boolean) => {
    try {
      const res = await fetch("/api/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isPublished }),
      });
      const data = await res.json();
      if (data.success) {
        setTestimonials(prev => prev.map(t => t.id === id ? data.testimonial : t));
        showFeedback(isPublished ? "Review published" : "Review hidden");
      }
    } catch (err) {
      alert("Failed to update testimonial");
    }
  };

  // Settings Save
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) {
        setSettings(data.settings);
        showFeedback("Website settings saved successfully");
      }
    } catch (err) {
      alert("Failed to save settings");
    }
  };

  // Filtered queries
  const filteredReservations = reservations.filter(r => {
    if (reservationStatusFilter !== "all" && r.status !== reservationStatusFilter) return false;
    if (reservationSearch) {
      const s = reservationSearch.toLowerCase();
      return (
        r.reference.toLowerCase().includes(s) ||
        r.customerName.toLowerCase().includes(s) ||
        r.customerEmail.toLowerCase().includes(s) ||
        r.roomName.toLowerCase().includes(s)
      );
    }
    return true;
  });

  const filteredQuotes = cateringInquiries.filter(c => {
    if (quoteStatusFilter !== "all" && c.status !== quoteStatusFilter) return false;
    if (quoteSearch) {
      const s = quoteSearch.toLowerCase();
      return (
        c.reference.toLowerCase().includes(s) ||
        c.customerName.toLowerCase().includes(s) ||
        c.email.toLowerCase().includes(s) ||
        c.eventType.toLowerCase().includes(s)
      );
    }
    return true;
  });

  // KPI Calculations
  const pendingReservationsCount = reservations.filter(r => r.status === "Pending" || r.status === "Under Review").length;
  const confirmedReservationsCount = reservations.filter(r => r.status === "Confirmed").length;
  const newCateringCount = cateringInquiries.filter(c => c.status === "New" || c.status === "Contacted").length;
  const activeRoomsCount = rooms.filter(r => r.isPublished).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      
      {/* Top Admin Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 border border-gold/60 ring-1 ring-gold/20 shadow-sm overflow-hidden flex-shrink-0">
            <Image
              src="/images/logo-circle.png"
              alt="Etege Emblem"
              width={40}
              height={40}
              className="object-contain w-full h-full rounded-full"
            />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold text-white tracking-wide">
              Etege Administration Console
            </h1>
            <span className="text-[11px] text-slate-400">
              Addis Ababa Property & Catering Operations
            </span>
          </div>
        </div>

        {/* Role Selector & Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span className="text-slate-400">Role:</span>
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value as AdminRole)}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="owner" className="bg-slate-900">General Manager (Full Access)</option>
              <option value="hotel_staff" className="bg-slate-900">Hotel Staff (Rooms & Stays)</option>
              <option value="catering_manager" className="bg-slate-900">Catering Manager (Banquets)</option>
            </select>
          </div>

          <Link
            href="/"
            className="text-xs text-gold hover:text-white flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* Feedback Banner */}
      {feedbackMessage && (
        <div className="bg-emerald-600 text-white text-xs font-semibold py-2 px-6 text-center animate-in fade-in">
          {feedbackMessage}
        </div>
      )}

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 bg-slate-950/80 border-r border-slate-800 p-4 space-y-1.5">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
              activeTab === "overview" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Overview</span>
          </button>

          {/* Hotel division (accessible to owner & hotel staff) */}
          {(currentRole === "owner" || currentRole === "hotel_staff") && (
            <>
              <div className="pt-3 pb-1 px-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                Hotel Division
              </div>
              <button
                onClick={() => setActiveTab("reservations")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "reservations" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4" />
                  <span>Room Inquiries</span>
                </div>
                {pendingReservationsCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                    {pendingReservationsCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("rooms")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "rooms" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Hotel className="w-4 h-4" />
                <span>Room Catalog</span>
              </button>
            </>
          )}

          {/* Catering division (accessible to owner & catering manager) */}
          {(currentRole === "owner" || currentRole === "catering_manager") && (
            <>
              <div className="pt-3 pb-1 px-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                Catering Division
              </div>
              <button
                onClick={() => setActiveTab("quotations")}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "quotations" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4" />
                  <span>Catering Quotes</span>
                </div>
                {newCateringCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold text-[10px] font-bold">
                    {newCateringCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab("catering")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "catering" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Catering Packages</span>
              </button>
            </>
          )}

          {/* General property management (Owner only) */}
          {currentRole === "owner" && (
            <>
              <div className="pt-3 pb-1 px-3 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                Content & Settings
              </div>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "gallery" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Gallery Assets</span>
              </button>
              <button
                onClick={() => setActiveTab("testimonials")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "testimonials" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Testimonials</span>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === "settings" ? "bg-burgundy text-white" : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Website Settings</span>
              </button>
            </>
          )}
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white">
                  Executive Operations Overview
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Real-time inquiry statuses across Addis Ababa hotel accommodation and event catering divisions.
                </p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Pending Stays</span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-3xl font-bold font-serif text-white">{pendingReservationsCount}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Requires room availability check</p>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Confirmed Stays</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-3xl font-bold font-serif text-emerald-400">{confirmedReservationsCount}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Active verified bookings</p>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">New Catering Quotes</span>
                    <UtensilsCrossed className="w-4 h-4 text-gold" />
                  </div>
                  <p className="text-3xl font-bold font-serif text-gold">{newCateringCount}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Weddings & corporate inquiries</p>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider">Active Rooms</span>
                    <Hotel className="w-4 h-4 text-burgundy-300" />
                  </div>
                  <p className="text-3xl font-bold font-serif text-white">{activeRoomsCount}</p>
                  <p className="text-[11px] text-slate-400 mt-1">Published room suites</p>
                </div>
              </div>

              {/* Recent Inquiries Quick Table */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Recent Hotel Inquiries */}
                <div className="bg-slate-800/40 rounded-2xl border border-slate-700 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-white flex items-center space-x-2">
                      <Hotel className="w-4 h-4 text-burgundy-400" />
                      <span>Recent Room Inquiries</span>
                    </h3>
                    <button
                      onClick={() => setActiveTab("reservations")}
                      className="text-xs text-gold hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {reservations.slice(0, 4).map((r) => (
                      <div
                        key={r.id}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-gold font-bold">{r.reference}</span>
                            <span className="text-white font-medium">{r.customerName}</span>
                          </div>
                          <p className="text-slate-400 text-[11px] mt-0.5">
                            {r.roomName} • {r.checkInDate} to {r.checkOutDate} ({r.adults} guests)
                          </p>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          r.status === "Confirmed" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" :
                          r.status === "Under Review" ? "bg-amber-950 text-amber-400 border border-amber-800" :
                          "bg-slate-800 text-slate-300"
                        }`}>
                          {r.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Catering Inquiries */}
                <div className="bg-slate-800/40 rounded-2xl border border-slate-700 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base font-bold text-white flex items-center space-x-2">
                      <UtensilsCrossed className="w-4 h-4 text-gold" />
                      <span>Recent Catering Quotations</span>
                    </h3>
                    <button
                      onClick={() => setActiveTab("quotations")}
                      className="text-xs text-gold hover:underline"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {cateringInquiries.slice(0, 4).map((c) => (
                      <div
                        key={c.id}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-gold font-bold">{c.reference}</span>
                            <span className="text-white font-medium">{c.customerName}</span>
                          </div>
                          <p className="text-slate-400 text-[11px] mt-0.5">
                            {c.eventType} • {c.eventDate} ({c.estimatedGuests} guests)
                          </p>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          c.status === "Quotation Prepared" ? "bg-blue-950 text-blue-400 border border-blue-800" :
                          c.status === "Accepted" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" :
                          "bg-amber-950 text-amber-400 border border-amber-800"
                        }`}>
                          {c.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: RESERVATIONS MANAGEMENT */}
          {activeTab === "reservations" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Hotel Room Inquiries & Reservations
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage guest booking requests, verify availability, and assign statuses.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search name or ref..."
                      value={reservationSearch}
                      onChange={(e) => setReservationSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white outline-none focus:border-burgundy"
                    />
                  </div>

                  <select
                    value={reservationStatusFilter}
                    onChange={(e) => setReservationStatusFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white outline-none focus:border-burgundy"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Reservations Table */}
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-700">
                      <tr>
                        <th className="py-3 px-4">Reference</th>
                        <th className="py-3 px-4">Guest Info</th>
                        <th className="py-3 px-4">Room</th>
                        <th className="py-3 px-4">Stay Dates</th>
                        <th className="py-3 px-4">Guests</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Actions / Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {filteredReservations.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-slate-500">
                            No reservations found.
                          </td>
                        </tr>
                      ) : (
                        filteredReservations.map((res) => (
                          <tr key={res.id} className="hover:bg-slate-800/60 transition">
                            <td className="py-3.5 px-4 font-mono font-bold text-gold">
                              {res.reference}
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="font-semibold text-white">{res.customerName}</p>
                              <p className="text-slate-400 text-[11px]">{res.customerEmail}</p>
                              <a
                                href={buildWhatsAppLink(res.customerPhone, "general")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 text-[10px] hover:underline flex items-center space-x-1 mt-0.5"
                              >
                                <span>{res.customerPhone}</span>
                                <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                              </a>
                            </td>
                            <td className="py-3.5 px-4 font-medium text-slate-200">
                              {res.roomName}
                            </td>
                            <td className="py-3.5 px-4 text-slate-300">
                              {res.checkInDate} → {res.checkOutDate}
                            </td>
                            <td className="py-3.5 px-4 text-slate-300">
                              {res.adults} Adults {res.children > 0 && `• ${res.children} Kids`}
                            </td>
                            <td className="py-3.5 px-4">
                              <select
                                value={res.status}
                                onChange={(e) => handleUpdateReservationStatus(res.id, e.target.value as ReservationStatus)}
                                className={`px-2.5 py-1 rounded-lg text-xs font-semibold outline-none cursor-pointer ${
                                  res.status === "Confirmed" ? "bg-emerald-950 text-emerald-400 border border-emerald-700" :
                                  res.status === "Under Review" ? "bg-amber-950 text-amber-400 border border-amber-700" :
                                  res.status === "Rejected" ? "bg-rose-950 text-rose-400 border border-rose-800" :
                                  "bg-slate-900 text-slate-200 border border-slate-700"
                                }`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Under Review">Under Review</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </td>
                            <td className="py-3.5 px-4">
                              <input
                                type="text"
                                defaultValue={res.adminNotes || ""}
                                onBlur={(e) => handleUpdateReservationStatus(res.id, res.status, e.target.value)}
                                placeholder="Add note & click away..."
                                className="w-full text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 focus:border-gold outline-none"
                              />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ROOM CATALOG CRUD */}
          {activeTab === "rooms" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Room Inventory Management
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Add or configure published room types, occupancy, amenities, and nightly prices.
                  </p>
                </div>

                <button
                  onClick={() => setEditingRoom({
                    name: "",
                    nameAm: "",
                    category: "deluxe",
                    shortDescription: "",
                    shortDescriptionAm: "",
                    description: "",
                    descriptionAm: "",
                    coverImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
                    maxGuests: 2,
                    beds: "1 King Bed",
                    bedsAm: "1 የኪንግ አልጋ",
                    sizeSqm: 32,
                    publishedPricePerNight: 3500,
                    priceCurrency: "ETB",
                    isFeatured: true,
                    isPublished: true,
                  })}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-xs shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Room</span>
                </button>
              </div>

              {/* Room Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                  <div key={room.id} className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="relative h-44 w-full">
                        <img src={room.coverImage} alt={room.name} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-900/80 text-gold text-[10px] font-bold uppercase">
                          {room.category}
                        </span>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-lg font-bold text-white">{room.name}</h4>
                          <span className="text-xs font-semibold text-gold">
                            {formatCurrency(room.publishedPricePerNight, room.priceCurrency)}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs line-clamp-2">{room.shortDescription}</p>
                        <p className="text-[11px] text-slate-500">
                          {room.maxGuests} Guests • {room.beds}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-700/60 mt-3">
                      <button
                        onClick={() => setEditingRoom(room)}
                        className="text-xs text-gold hover:text-white flex items-center space-x-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Room</span>
                      </button>
                      <button
                        onClick={() => handleDeleteRoom(room.id)}
                        className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Room Edit Modal */}
              {editingRoom && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 max-h-[85vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-serif text-xl font-bold text-white">
                        {editingRoom.id ? "Edit Room" : "Add New Room"}
                      </h3>
                      <button onClick={() => setEditingRoom(null)} className="text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleSaveRoom} className="space-y-4 text-xs">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-400 mb-1">Room Name (English)</label>
                          <input
                            type="text"
                            required
                            value={editingRoom.name || ""}
                            onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">Room Name (Amharic)</label>
                          <input
                            type="text"
                            required
                            value={editingRoom.nameAm || ""}
                            onChange={(e) => setEditingRoom({ ...editingRoom, nameAm: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-slate-400 mb-1">Category</label>
                          <select
                            value={editingRoom.category || "deluxe"}
                            onChange={(e) => setEditingRoom({ ...editingRoom, category: e.target.value as any })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          >
                            <option value="standard">Standard</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="suite">Suite</option>
                            <option value="executive">Executive</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">Max Guests</label>
                          <input
                            type="number"
                            min="1"
                            max="8"
                            value={editingRoom.maxGuests || 2}
                            onChange={(e) => setEditingRoom({ ...editingRoom, maxGuests: parseInt(e.target.value) || 1 })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">Nightly Rate (ETB)</label>
                          <input
                            type="number"
                            value={editingRoom.publishedPricePerNight || ""}
                            onChange={(e) => setEditingRoom({ ...editingRoom, publishedPricePerNight: parseInt(e.target.value) || undefined })}
                            placeholder="Rate on request"
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Image URL</label>
                        <input
                          type="url"
                          required
                          value={editingRoom.coverImage || ""}
                          onChange={(e) => setEditingRoom({ ...editingRoom, coverImage: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Short Description (English)</label>
                        <textarea
                          rows={2}
                          value={editingRoom.shortDescription || ""}
                          onChange={(e) => setEditingRoom({ ...editingRoom, shortDescription: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Full Description</label>
                        <textarea
                          rows={3}
                          value={editingRoom.description || ""}
                          onChange={(e) => setEditingRoom({ ...editingRoom, description: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>

                      <div className="flex justify-end space-x-3 pt-3 border-t border-slate-800">
                        <button
                          type="button"
                          onClick={() => setEditingRoom(null)}
                          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-burgundy hover:bg-burgundy-800 text-white font-semibold"
                        >
                          Save Room
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: CATERING QUOTATIONS */}
          {activeTab === "quotations" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Catering Quotation Requests
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage event banquet inquiries, proposal submissions, and client negotiation notes.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search event or ref..."
                    value={quoteSearch}
                    onChange={(e) => setQuoteSearch(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white outline-none"
                  />
                  <select
                    value={quoteStatusFilter}
                    onChange={(e) => setQuoteStatusFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white outline-none"
                  >
                    <option value="all">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Quotation Prepared">Quotation Prepared</option>
                    <option value="Quotation Sent">Quotation Sent</option>
                    <option value="Negotiating">Negotiating</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Declined">Declined</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              {/* Quotations Table */}
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-700">
                      <tr>
                        <th className="py-3 px-4">Reference</th>
                        <th className="py-3 px-4">Client</th>
                        <th className="py-3 px-4">Event Type</th>
                        <th className="py-3 px-4">Date & Venue</th>
                        <th className="py-3 px-4">Guests</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Internal Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {filteredQuotes.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-slate-500">
                            No catering quotes found.
                          </td>
                        </tr>
                      ) : (
                        filteredQuotes.map((c) => (
                          <tr key={c.id} className="hover:bg-slate-800/60 transition">
                            <td className="py-3.5 px-4 font-mono font-bold text-gold">
                              {c.reference}
                            </td>
                            <td className="py-3.5 px-4">
                              <p className="font-semibold text-white">{c.customerName}</p>
                              <p className="text-slate-400 text-[11px]">{c.email}</p>
                              <a
                                href={buildWhatsAppLink(c.phone, "catering")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 text-[10px] hover:underline flex items-center space-x-1 mt-0.5"
                              >
                                <span>{c.phone}</span>
                                <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                              </a>
                            </td>
                            <td className="py-3.5 px-4 font-medium text-slate-200">
                              {c.eventType}
                            </td>
                            <td className="py-3.5 px-4 text-slate-300">
                              <p>{c.eventDate}</p>
                              <p className="text-slate-500 text-[11px]">{c.eventLocation}</p>
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-200">
                              {c.estimatedGuests} Guests
                            </td>
                            <td className="py-3.5 px-4">
                              <select
                                value={c.status}
                                onChange={(e) => handleUpdateQuoteStatus(c.id, e.target.value as QuoteStatus)}
                                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-gold outline-none"
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Quotation Prepared">Quotation Prepared</option>
                                <option value="Quotation Sent">Quotation Sent</option>
                                <option value="Negotiating">Negotiating</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Declined">Declined</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </td>
                            <td className="py-3.5 px-4">
                              <input
                                type="text"
                                defaultValue={c.adminNotes || ""}
                                onBlur={(e) => handleUpdateQuoteStatus(c.id, c.status, e.target.value)}
                                placeholder="Add note..."
                                className="w-full text-[11px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 focus:border-gold outline-none"
                              />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CATERING PACKAGES CRUD */}
          {activeTab === "catering" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Catering Packages & Menus
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage banquet options, menus, and service inclusions.
                  </p>
                </div>

                <button
                  onClick={() => setEditingPackage({
                    name: "",
                    nameAm: "",
                    category: "wedding",
                    description: "",
                    descriptionAm: "",
                    coverImage: "https://images.unsplash.com/photo-1519225429980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
                    minGuests: 50,
                    isFeatured: true,
                    isPublished: true,
                  })}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold text-xs shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Package</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-sm p-5 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                          {pkg.category}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-white mt-0.5">{pkg.name}</h4>
                      </div>
                      <span className="text-xs text-slate-400">Min {pkg.minGuests}+ Guests</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/60">
                      <button
                        onClick={() => setEditingPackage(pkg)}
                        className="text-xs text-gold hover:text-white flex items-center space-x-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Package</span>
                      </button>
                      <button
                        onClick={() => handleDeletePackage(pkg.id)}
                        className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Package Edit Modal */}
              {editingPackage && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 max-h-[85vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-serif text-xl font-bold text-white">
                        {editingPackage.id ? "Edit Catering Package" : "Add Catering Package"}
                      </h3>
                      <button onClick={() => setEditingPackage(null)} className="text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleSavePackage} className="space-y-4 text-xs">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-400 mb-1">Package Name (English)</label>
                          <input
                            type="text"
                            required
                            value={editingPackage.name || ""}
                            onChange={(e) => setEditingPackage({ ...editingPackage, name: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">Package Name (Amharic)</label>
                          <input
                            type="text"
                            required
                            value={editingPackage.nameAm || ""}
                            onChange={(e) => setEditingPackage({ ...editingPackage, nameAm: e.target.value })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-400 mb-1">Category</label>
                          <select
                            value={editingPackage.category || "wedding"}
                            onChange={(e) => setEditingPackage({ ...editingPackage, category: e.target.value as any })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          >
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate</option>
                            <option value="private">Private</option>
                            <option value="coffee-break">Coffee Break</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-400 mb-1">Minimum Guests</label>
                          <input
                            type="number"
                            min="10"
                            value={editingPackage.minGuests || 50}
                            onChange={(e) => setEditingPackage({ ...editingPackage, minGuests: parseInt(e.target.value) || 10 })}
                            className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Cover Image URL</label>
                        <input
                          type="url"
                          required
                          value={editingPackage.coverImage || ""}
                          onChange={(e) => setEditingPackage({ ...editingPackage, coverImage: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1">Description (English)</label>
                        <textarea
                          rows={3}
                          value={editingPackage.description || ""}
                          onChange={(e) => setEditingPackage({ ...editingPackage, description: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>

                      <div className="flex justify-end space-x-3 pt-3 border-t border-slate-800">
                        <button
                          type="button"
                          onClick={() => setEditingPackage(null)}
                          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-600 text-charcoal-900 font-semibold"
                        >
                          Save Package
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: GALLERY MANAGEMENT */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Gallery Asset Manager
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Upload image links, assign category tags, and manage display ordering.
                  </p>
                </div>

                <button
                  onClick={() => setEditingGallery({
                    title: "",
                    titleAm: "",
                    category: "hotel",
                    imageUrl: "",
                    altText: "Etege photography",
                  })}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-burgundy text-white text-xs font-semibold"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Image</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.map((g) => (
                  <div key={g.id} className="relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 group">
                    <img src={g.imageUrl} alt={g.title} className="h-40 w-full object-cover" />
                    <div className="p-2 bg-slate-900 text-xs">
                      <p className="font-bold text-white truncate">{g.title}</p>
                      <p className="text-[10px] text-gold uppercase">{g.category}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteGallery(g.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-600 text-white opacity-0 group-hover:opacity-100 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Gallery Modal */}
              {editingGallery && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6">
                    <h3 className="font-serif text-lg font-bold text-white mb-4">Add Gallery Image</h3>
                    <form onSubmit={handleAddGalleryItem} className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1">Image URL</label>
                        <input
                          type="url"
                          required
                          value={editingGallery.imageUrl || ""}
                          onChange={(e) => setEditingGallery({ ...editingGallery, imageUrl: e.target.value })}
                          placeholder="https://..."
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">Title (English)</label>
                        <input
                          type="text"
                          required
                          value={editingGallery.title || ""}
                          onChange={(e) => setEditingGallery({ ...editingGallery, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">Category</label>
                        <select
                          value={editingGallery.category || "hotel"}
                          onChange={(e) => setEditingGallery({ ...editingGallery, category: e.target.value as any })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        >
                          <option value="hotel">Hotel</option>
                          <option value="rooms">Rooms</option>
                          <option value="catering">Catering</option>
                          <option value="food">Culinary</option>
                          <option value="events">Events</option>
                        </select>
                      </div>
                      <div className="flex justify-end space-x-2 pt-2">
                        <button type="button" onClick={() => setEditingGallery(null)} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300">
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 rounded-lg bg-burgundy text-white font-semibold">
                          Save Photo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: TESTIMONIALS */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Verified Guest Testimonials
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Moderate client reviews; toggle published status or add client-authorized feedback.
                  </p>
                </div>

                <button
                  onClick={() => setNewTestimonial({
                    guestName: "",
                    guestRole: "Guest",
                    guestRoleAm: "እንግዳ",
                    serviceType: "hotel",
                    rating: 5,
                    comment: "",
                    commentAm: "",
                  })}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-burgundy text-white text-xs font-semibold"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Review</span>
                </button>
              </div>

              <div className="space-y-3">
                {testimonials.map((test) => (
                  <div key={test.id} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between text-xs">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-white">{test.guestName}</span>
                        <span className="text-slate-400">({test.guestRole})</span>
                        <span className="text-gold font-bold">{test.rating} ★</span>
                      </div>
                      <p className="text-slate-300 italic mt-1 max-w-2xl">"{test.comment}"</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        test.isPublished ? "bg-emerald-950 text-emerald-400" : "bg-slate-900 text-slate-500"
                      }`}>
                        {test.isPublished ? "Published" : "Hidden"}
                      </span>
                      <button
                        onClick={() => handleToggleTestimonial(test.id, !test.isPublished)}
                        className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 text-white text-[11px]"
                      >
                        {test.isPublished ? "Hide" : "Publish"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Testimonial Modal */}
              {newTestimonial && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                  <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6">
                    <h3 className="font-serif text-lg font-bold text-white mb-4">Add Authorized Testimonial</h3>
                    <form onSubmit={handleAddTestimonial} className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1">Guest Name</label>
                        <input
                          type="text"
                          required
                          value={newTestimonial.guestName || ""}
                          onChange={(e) => setNewTestimonial({ ...newTestimonial, guestName: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">Service Type</label>
                        <select
                          value={newTestimonial.serviceType || "hotel"}
                          onChange={(e) => setNewTestimonial({ ...newTestimonial, serviceType: e.target.value as any })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        >
                          <option value="hotel">Hotel Stay</option>
                          <option value="catering">Catering Event</option>
                          <option value="event">Wedding / Conference</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">Review Comment</label>
                        <textarea
                          rows={3}
                          required
                          value={newTestimonial.comment || ""}
                          onChange={(e) => setNewTestimonial({ ...newTestimonial, comment: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none"
                        />
                      </div>
                      <div className="flex justify-end space-x-2 pt-2">
                        <button type="button" onClick={() => setNewTestimonial(null)} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300">
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 rounded-lg bg-burgundy text-white font-semibold">
                          Publish Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 8: WEBSITE SETTINGS */}
          {activeTab === "settings" && settings && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white">
                  Property & Contact Settings
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Configure primary phone numbers, verified WhatsApp channel, and email notification destinations.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Business Name</label>
                    <input
                      type="text"
                      value={settings.businessName}
                      onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Amharic Name</label>
                    <input
                      type="text"
                      value={settings.businessNameAm}
                      onChange={(e) => setSettings({ ...settings, businessNameAm: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Primary Telephone</label>
                    <input
                      type="text"
                      value={settings.phonePrimary}
                      onChange={(e) => setSettings({ ...settings, phonePrimary: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">WhatsApp Number (digits with 251...)</label>
                    <input
                      type="text"
                      value={settings.whatsAppNumber}
                      onChange={(e) => setSettings({ ...settings, whatsAppNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Hotel Inquiries Email</label>
                    <input
                      type="email"
                      value={settings.emailPrimary}
                      onChange={(e) => setSettings({ ...settings, emailPrimary: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Catering Email</label>
                    <input
                      type="email"
                      value={settings.emailCatering}
                      onChange={(e) => setSettings({ ...settings, emailCatering: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Physical Address</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Google Maps URL</label>
                  <input
                    type="url"
                    value={settings.googleMapsUrl}
                    onChange={(e) => setSettings({ ...settings, googleMapsUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white outline-none"
                  />
                </div>

                <div className="pt-3 border-t border-slate-700 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-burgundy hover:bg-burgundy-800 text-white font-semibold text-xs shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Settings</span>
                  </button>
                </div>
              </form>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
