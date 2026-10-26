import { getGallery } from "@/lib/storage/store";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Gallery | Etege Hotel & Catering Addis Ababa",
  description: "Browse photographs of Etege Catering wedding banquets, traditional Ethiopian culinary delicacies, and grand celebration setups in Addis Ababa.",
};



export default async function GalleryPage() {
  const gallery = await getGallery();
  return <GalleryClient initialGallery={gallery} />;
}
