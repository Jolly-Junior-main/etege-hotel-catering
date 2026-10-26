import { FoodMenuClient } from "@/components/foodmenu/FoodMenuClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Table Menu | Etege Hotel & Catering Addis Ababa",
  description: "Scan table QR code to explore Etege Hotel & Catering menu, kitfo, sizzling tibs, fasting platters, pastry, and traditional buna ceremony.",
  openGraph: {
    title: "Digital Table Menu | Etege Hotel & Catering",
    description: "Scan table QR code to choose authentic Ethiopian specialties, sizzling clay-pot tibs, fasting platters, and traditional coffee ceremony.",
    images: ["https://etege-hotel.pages.dev/images/og-share.png"],
  },
};

export default function FoodMenuPage() {
  return <FoodMenuClient />;
}
