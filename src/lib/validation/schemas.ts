import { z } from "zod";

export const reservationInquirySchema = z.object({
  customerName: z.string().min(2, "Full name must be at least 2 characters"),
  customerEmail: z.string().email("Please provide a valid email address"),
  customerPhone: z.string().min(7, "Please provide a valid phone number with country code"),
  roomId: z.string().min(1, "Please select a room"),
  roomName: z.string().min(1, "Room name is required"),
  checkInDate: z.string().refine((val) => {
    const date = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return !isNaN(date.getTime()) && date >= today;
  }, "Check-in date cannot be in the past"),
  checkOutDate: z.string().min(1, "Check-out date is required"),
  adults: z.number().int().min(1, "At least 1 adult is required").max(10, "Maximum 10 adults per inquiry"),
  children: z.number().int().min(0).max(8).default(0),
  specialRequests: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
}).refine((data) => {
  const checkIn = new Date(data.checkInDate);
  const checkOut = new Date(data.checkOutDate);
  return checkOut > checkIn;
}, {
  message: "Check-out date must be after check-in date",
  path: ["checkOutDate"],
});

export type ReservationInquiryInput = z.infer<typeof reservationInquirySchema>;

export const cateringInquirySchema = z.object({
  customerName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(7, "Please provide a valid phone number with country code"),
  eventType: z.string().min(1, "Please specify your event type"),
  eventDate: z.string().refine((val) => {
    const date = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return !isNaN(date.getTime()) && date >= today;
  }, "Event date cannot be in the past"),
  eventLocation: z.string().min(3, "Please provide the event location or city venue"),
  estimatedGuests: z.number().int().min(10, "Catering services require a minimum of 10 guests"),
  packageId: z.string().optional(),
  packageName: z.string().optional(),
  budgetRange: z.string().optional(),
  additionalNotes: z.string().max(1500, "Notes cannot exceed 1500 characters").optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted regarding this quote"),
});

export type CateringInquiryInput = z.infer<typeof cateringInquirySchema>;

export const contactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(7, "Please provide a valid phone number"),
  subject: z.enum(["hotel", "catering", "event", "general"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  consent: z.boolean().refine((val) => val === true, "Please confirm consent to be contacted"),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
