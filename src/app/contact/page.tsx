import { ContactClient } from "@/components/contact/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Etege Hotel & Catering Addis Ababa",
  description: "Contact Etege Hotel & Catering in Addis Ababa. Main Arada Hub (+251 912 01 17 01), Branch 2 (+251 960 27 60 90), direct Telegram @EtegeCatering and WhatsApp support.",
};

export default function ContactPage() {
  return <ContactClient />;
}
