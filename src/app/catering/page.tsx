import { getCateringPackages } from "@/lib/storage/store";
import { CateringClient } from "@/components/catering/CateringClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Services & Event Packages | Etege Hotel & Catering Addis Ababa",
  description: "Bespoke banquet and outdoor catering for weddings, corporate conferences, and private celebrations across Addis Ababa, Ethiopia.",
};



export default async function CateringPage() {
  const packages = await getCateringPackages();
  return <CateringClient initialPackages={packages} />;
}
