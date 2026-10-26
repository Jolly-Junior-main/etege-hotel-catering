import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateReference(prefix: 'ETH-RES' | 'ETH-CAT' | 'ETH-CNT'): string {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}-${randomNum}`;
}

export function formatCurrency(amount?: number, currency: string = "ETB"): string {
  if (amount === undefined || amount === null) {
    return "Rate on Request";
  }
  return `${amount.toLocaleString()} ${currency}`;
}

export function buildWhatsAppLink(
  phoneNumber: string,
  typeOrMessage: 'catering' | 'event' | 'general' | 'hotel' | string = 'general',
  details?: {
    dates?: string;
    guests?: number | string;
    eventType?: string;
    customerName?: string;
  }
): string {
  // Clean phone number (keep digits only)
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  
  let message = "";
  if (typeOrMessage === 'catering') {
    const eventType = details?.eventType || "[event type]";
    const dates = details?.dates || "[date]";
    const guests = details?.guests || "[approximate guests]";
    message = `Hello Etege Hotel & Catering. I would like a catering quotation for ${eventType} on ${dates} for approximately ${guests} guests.`;
  } else if (typeOrMessage === 'event') {
    const dates = details?.dates || "[preferred date]";
    const guests = details?.guests || "[guest count]";
    message = `Hello Etege Hotel & Catering. I would like to arrange an event consultation for a banquet or wedding reception on ${dates} for ${guests} guests.`;
  } else if (typeOrMessage === 'hotel') {
    message = "Hello Etege Hotel & Catering. I would like to inquire about your event venue and catering services.";
  } else if (typeOrMessage === 'general') {
    message = "Hello Etege Hotel & Catering. I would like to make an inquiry regarding your catering and banquet event services in Addis Ababa.";
  } else {
    // Custom pre-formatted message
    message = typeOrMessage;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
