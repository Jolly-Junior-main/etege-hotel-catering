import fs from "fs";
import path from "path";
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
import { 
  initialRooms, 
  initialCateringPackages, 
  initialGallery, 
  initialTestimonials, 
  initialSiteSettings 
} from "@/lib/data/initialData";
import { generateReference } from "@/lib/utils";

interface DataStore {
  rooms: Room[];
  cateringPackages: CateringPackage[];
  reservations: RoomReservation[];
  cateringInquiries: CateringInquiry[];
  contactInquiries: ContactInquiry[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  settings: SiteSettings;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "etege-store.json");

// In-memory fallback
let memoryStore: DataStore = {
  rooms: [...initialRooms],
  cateringPackages: [...initialCateringPackages],
  reservations: [
    {
      id: "res-demo-1",
      reference: "ETH-RES-10492",
      roomId: "room-deluxe-king",
      roomName: "Deluxe King Room",
      customerName: "Samuel Bekele",
      customerEmail: "samuel.bekele@example.com",
      customerPhone: "+251 91 123 4567",
      checkInDate: "2026-11-05",
      checkOutDate: "2026-11-08",
      adults: 2,
      children: 0,
      specialRequests: "Quiet floor preferred, arriving late evening.",
      status: "Under Review",
      adminNotes: "Client called, confirmed international flight arrival time.",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      updatedAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "res-demo-2",
      reference: "ETH-RES-88231",
      roomId: "room-executive-suite",
      roomName: "Executive Suite",
      customerName: "Amina Mohammed",
      customerEmail: "amina.m@example.com",
      customerPhone: "+251 92 345 6789",
      checkInDate: "2026-11-12",
      checkOutDate: "2026-11-15",
      adults: 1,
      children: 0,
      specialRequests: "Need iron & ironing board in room.",
      status: "Confirmed",
      adminNotes: "Payment deposit confirmed by front desk.",
      createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    }
  ],
  cateringInquiries: [
    {
      id: "cat-demo-1",
      reference: "ETH-CAT-49201",
      customerName: "Hanna Tadesse",
      email: "hanna.events@example.com",
      phone: "+251 91 555 1234",
      eventType: "Wedding Reception",
      eventDate: "2026-12-19",
      eventLocation: "Millennium Hall Annex, Addis Ababa",
      estimatedGuests: 350,
      packageId: "pkg-royal-wedding",
      packageName: "Royal Wedding Banquet Package",
      budgetRange: "150,000 - 250,000 ETB",
      additionalNotes: "Require 40% fasting vegan menu for elderly family members.",
      status: "Quotation Prepared",
      quotedAmount: 195000,
      adminNotes: "Drafted custom proposal with vegan buffet section. Sent draft to coordinator.",
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: "cat-demo-2",
      reference: "ETH-CAT-77312",
      customerName: "African Union Delegation Taskforce",
      email: "au-summit@example.org",
      phone: "+251 11 551 7700",
      eventType: "Corporate Summit",
      eventDate: "2026-11-20",
      eventLocation: "Conference Center, Addis Ababa",
      estimatedGuests: 120,
      packageId: "pkg-corporate-summit",
      packageName: "Executive Corporate Buffet & Conference Package",
      budgetRange: "75,000 - 120,000 ETB",
      additionalNotes: "All meals must be strictly Halal certified.",
      status: "New",
      adminNotes: "",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      updatedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    }
  ],
  contactInquiries: [],
  gallery: [...initialGallery],
  testimonials: [...initialTestimonials],
  settings: { ...initialSiteSettings },
};

function ensureInitialized(): DataStore {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed = JSON.parse(content);
      memoryStore = { ...memoryStore, ...parsed };
      return memoryStore;
    } else {
      fs.writeFileSync(DATA_FILE, JSON.stringify(memoryStore, null, 2), "utf-8");
      return memoryStore;
    }
  } catch (err) {
    // If fs fails in certain cloud environments, fallback gracefully to in-memory store
    return memoryStore;
  }
}

function persistStore(data: DataStore): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    // Fallback to memory
  }
}

// Room Operations
export async function getRooms(): Promise<Room[]> {
  const store = ensureInitialized();
  return store.rooms.sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
  const rooms = await getRooms();
  return rooms.find((r) => r.slug === slug) || null;
}

export async function createRoom(room: Omit<Room, "id">): Promise<Room> {
  const store = ensureInitialized();
  const newRoom: Room = {
    ...room,
    id: `room-${Date.now()}`,
  };
  store.rooms.push(newRoom);
  persistStore(store);
  return newRoom;
}

export async function updateRoom(id: string, updates: Partial<Room>): Promise<Room | null> {
  const store = ensureInitialized();
  const index = store.rooms.findIndex((r) => r.id === id);
  if (index === -1) return null;
  store.rooms[index] = { ...store.rooms[index], ...updates };
  persistStore(store);
  return store.rooms[index];
}

export async function deleteRoom(id: string): Promise<boolean> {
  const store = ensureInitialized();
  const initialLength = store.rooms.length;
  store.rooms = store.rooms.filter((r) => r.id !== id);
  if (store.rooms.length !== initialLength) {
    persistStore(store);
    return true;
  }
  return false;
}

// Catering Package Operations
export async function getCateringPackages(): Promise<CateringPackage[]> {
  const store = ensureInitialized();
  return store.cateringPackages.sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getPackageBySlug(slug: string): Promise<CateringPackage | null> {
  const packages = await getCateringPackages();
  return packages.find((p) => p.slug === slug) || null;
}

export async function createPackage(pkg: Omit<CateringPackage, "id">): Promise<CateringPackage> {
  const store = ensureInitialized();
  const newPkg: CateringPackage = {
    ...pkg,
    id: `pkg-${Date.now()}`,
  };
  store.cateringPackages.push(newPkg);
  persistStore(store);
  return newPkg;
}

export async function updatePackage(id: string, updates: Partial<CateringPackage>): Promise<CateringPackage | null> {
  const store = ensureInitialized();
  const index = store.cateringPackages.findIndex((p) => p.id === id);
  if (index === -1) return null;
  store.cateringPackages[index] = { ...store.cateringPackages[index], ...updates };
  persistStore(store);
  return store.cateringPackages[index];
}

export async function deletePackage(id: string): Promise<boolean> {
  const store = ensureInitialized();
  const initialLength = store.cateringPackages.length;
  store.cateringPackages = store.cateringPackages.filter((p) => p.id !== id);
  if (store.cateringPackages.length !== initialLength) {
    persistStore(store);
    return true;
  }
  return false;
}

// Room Reservation Inquiries
export async function createReservation(
  data: Omit<RoomReservation, "id" | "reference" | "status" | "createdAt" | "updatedAt">
): Promise<RoomReservation> {
  const store = ensureInitialized();
  const reference = generateReference("ETH-RES");
  const newReservation: RoomReservation = {
    ...data,
    id: `res-${Date.now()}`,
    reference,
    status: "Pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  store.reservations.unshift(newReservation);
  persistStore(store);
  return newReservation;
}

export async function getReservations(): Promise<RoomReservation[]> {
  const store = ensureInitialized();
  return store.reservations.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function updateReservationStatus(
  id: string, 
  status: ReservationStatus, 
  adminNotes?: string
): Promise<RoomReservation | null> {
  const store = ensureInitialized();
  const index = store.reservations.findIndex((r) => r.id === id);
  if (index === -1) return null;
  store.reservations[index] = {
    ...store.reservations[index],
    status,
    adminNotes: adminNotes !== undefined ? adminNotes : store.reservations[index].adminNotes,
    updatedAt: new Date().toISOString(),
  };
  persistStore(store);
  return store.reservations[index];
}

// Catering Quotation Inquiries
export async function createCateringInquiry(
  data: Omit<CateringInquiry, "id" | "reference" | "status" | "createdAt" | "updatedAt">
): Promise<CateringInquiry> {
  const store = ensureInitialized();
  const reference = generateReference("ETH-CAT");
  const newInquiry: CateringInquiry = {
    ...data,
    id: `cat-${Date.now()}`,
    reference,
    status: "New",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  store.cateringInquiries.unshift(newInquiry);
  persistStore(store);
  return newInquiry;
}

export async function getCateringInquiries(): Promise<CateringInquiry[]> {
  const store = ensureInitialized();
  return store.cateringInquiries.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function updateCateringInquiryStatus(
  id: string,
  status: QuoteStatus,
  adminNotes?: string,
  quotedAmount?: number
): Promise<CateringInquiry | null> {
  const store = ensureInitialized();
  const index = store.cateringInquiries.findIndex((c) => c.id === id);
  if (index === -1) return null;
  store.cateringInquiries[index] = {
    ...store.cateringInquiries[index],
    status,
    adminNotes: adminNotes !== undefined ? adminNotes : store.cateringInquiries[index].adminNotes,
    quotedAmount: quotedAmount !== undefined ? quotedAmount : store.cateringInquiries[index].quotedAmount,
    updatedAt: new Date().toISOString(),
  };
  persistStore(store);
  return store.cateringInquiries[index];
}

// Contact Inquiries
export async function createContactInquiry(
  data: Omit<ContactInquiry, "id" | "reference" | "status" | "createdAt">
): Promise<ContactInquiry> {
  const store = ensureInitialized();
  const reference = generateReference("ETH-CNT");
  const newInquiry: ContactInquiry = {
    ...data,
    id: `cnt-${Date.now()}`,
    reference,
    status: "New",
    createdAt: new Date().toISOString(),
  };
  store.contactInquiries.unshift(newInquiry);
  persistStore(store);
  return newInquiry;
}

export async function getContactInquiries(): Promise<ContactInquiry[]> {
  const store = ensureInitialized();
  return store.contactInquiries;
}

// Gallery & Testimonials
export async function getGallery(): Promise<GalleryItem[]> {
  const store = ensureInitialized();
  return store.gallery.sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function addGalleryItem(item: Omit<GalleryItem, "id">): Promise<GalleryItem> {
  const store = ensureInitialized();
  const newItem: GalleryItem = {
    ...item,
    id: `gal-${Date.now()}`,
  };
  store.gallery.push(newItem);
  persistStore(store);
  return newItem;
}

export async function deleteGalleryItem(id: string): Promise<boolean> {
  const store = ensureInitialized();
  const initialLength = store.gallery.length;
  store.gallery = store.gallery.filter((g) => g.id !== id);
  if (store.gallery.length !== initialLength) {
    persistStore(store);
    return true;
  }
  return false;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const store = ensureInitialized();
  return store.testimonials;
}

export async function updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | null> {
  const store = ensureInitialized();
  const index = store.testimonials.findIndex((t) => t.id === id);
  if (index === -1) return null;
  store.testimonials[index] = { ...store.testimonials[index], ...updates };
  persistStore(store);
  return store.testimonials[index];
}

export async function addTestimonial(test: Omit<Testimonial, "id">): Promise<Testimonial> {
  const store = ensureInitialized();
  const newItem: Testimonial = {
    ...test,
    id: `test-${Date.now()}`,
  };
  store.testimonials.push(newItem);
  persistStore(store);
  return newItem;
}

// Settings
export async function getSiteSettings(): Promise<SiteSettings> {
  const store = ensureInitialized();
  return store.settings;
}

export async function updateSiteSettings(updates: Partial<SiteSettings>): Promise<SiteSettings> {
  const store = ensureInitialized();
  store.settings = { ...store.settings, ...updates };
  persistStore(store);
  return store.settings;
}
