import { notFound } from "next/navigation";
import { getPackageBySlug, getCateringPackages } from "@/lib/storage/store";
import { PackageDetailClient } from "@/components/catering/PackageDetailClient";
import type { Metadata } from "next";



interface PackagePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const packages = await getCateringPackages();
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const pkg = await getPackageBySlug(params.slug);
  if (!pkg) {
    return { title: "Package Not Found | Etege Hotel & Catering" };
  }

  return {
    title: `${pkg.name} | Etege Catering Addis Ababa`,
    description: pkg.description,
    openGraph: {
      title: `${pkg.name} — Etege Hotel & Catering`,
      description: pkg.description,
      images: [{ url: pkg.coverImage }],
    },
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const pkg = await getPackageBySlug(params.slug);
  if (!pkg) {
    notFound();
  }

  return <PackageDetailClient pkg={pkg} />;
}
