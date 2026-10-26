export type Language = 'en' | 'am';

export interface Room {
  id: string;
  slug: string;
  name: string;
  nameAm: string;
  category: 'standard' | 'deluxe' | 'suite' | 'executive';
  shortDescription: string;
  shortDescriptionAm: string;
  description: string;
  descriptionAm: string;
  coverImage: string;
  gallery: string[];
  maxGuests: number;
  beds: string;
  bedsAm: string;
  sizeSqm?: number;
  publishedPricePerNight?: number; // Optional until approved by client
  priceCurrency?: string;
  amenities: string[];
  amenitiesAm: string[];
  isFeatured: boolean;
  isPublished: boolean;
  displayOrder: number;
  houseRules?: string[];
  checkInTime?: string;
  checkOutTime?: string;
}

export type ReservationStatus = 
  | 'Pending' 
  | 'Under Review' 
  | 'Confirmed' 
  | 'Rejected' 
  | 'Cancelled' 
  | 'Completed';

export interface RoomReservation {
  id: string;
  reference: string;
  roomId: string;
  roomName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  specialRequests?: string;
  status: ReservationStatus;
  adminNotes?: string;
  assignedStaffId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CateringPackage {
  id: string;
  slug: string;
  name: string;
  nameAm: string;
  category: 'wedding' | 'corporate' | 'private' | 'social' | 'coffee-break';
  description: string;
  descriptionAm: string;
  coverImage: string;
  gallery: string[];
  menuItems: string[];
  menuItemsAm: string[];
  serviceInclusions: string[];
  serviceInclusionsAm: string[];
  minGuests: number;
  maxGuests?: number;
  pricePerPerson?: number; // Optional until approved by client
  priceOnRequest: boolean;
  currency?: string;
  isFeatured: boolean;
  isPublished: boolean;
  displayOrder: number;
}

export type QuoteStatus = 
  | 'New' 
  | 'Contacted' 
  | 'Quotation Prepared' 
  | 'Quotation Sent' 
  | 'Negotiating' 
  | 'Accepted' 
  | 'Declined' 
  | 'Completed';

export interface CateringInquiry {
  id: string;
  reference: string;
  customerName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  estimatedGuests: number;
  packageId?: string;
  packageName?: string;
  serviceRequirements?: string[];
  budgetRange?: string;
  additionalNotes?: string;
  status: QuoteStatus;
  quotedAmount?: number;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactInquiry {
  id: string;
  reference: string;
  name: string;
  email: string;
  phone: string;
  subject: 'hotel' | 'catering' | 'event' | 'general';
  message: string;
  status: 'New' | 'Read' | 'Responded';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleAm: string;
  category: 'weddings' | 'banquets' | 'cuisine' | 'desserts' | 'events' | 'hotel' | 'rooms' | 'catering' | 'food' | 'facilities';
  imageUrl: string;
  altText: string;
  displayOrder: number;
}

export interface Testimonial {
  id: string;
  guestName: string;
  guestRole?: string;
  guestRoleAm?: string;
  serviceType: 'hotel' | 'catering' | 'event';
  rating: number; // 1-5
  comment: string;
  commentAm: string;
  date: string;
  isVerified: boolean;
  isPublished: boolean;
}

export interface SiteSettings {
  businessName: string;
  businessNameAm: string;
  tagline: string;
  taglineAm: string;
  address: string;
  addressAm: string;
  city: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  phonePrimary: string;
  phoneSecondary?: string;
  emailPrimary: string;
  emailCatering: string;
  whatsAppNumber: string; // e.g. 251911966755 (digits only for international wa.me format)
  currency: string;
  currencySymbol: string;
  notificationEmail: string;
  operatingHours: string;
  operatingHoursAm: string;
  checkInDefault: string;
  checkOutDefault: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'hotel_staff' | 'catering_manager';
}
