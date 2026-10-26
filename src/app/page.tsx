import { getCateringPackages, getGallery, getTestimonials } from "@/lib/storage/store";
import { HeroSection } from "@/components/home/HeroSection";
import { TwoWorldsSection } from "@/components/home/TwoWorldsSection";
import { TraditionIntro } from "@/components/home/TraditionIntro";
import { CulinaryShowcase } from "@/components/home/CulinaryShowcase";
import { CateringHighlights } from "@/components/home/CateringHighlights";
import { ExperienceShowcase } from "@/components/home/ExperienceShowcase";
import { WhyChooseEtege } from "@/components/home/WhyChooseEtege";
import { HomeGalleryPreview } from "@/components/home/HomeGalleryPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BranchLocationsSection } from "@/components/home/BranchLocationsSection";
import { SplitCTASection } from "@/components/home/SplitCTASection";

export default async function HomePage() {
  const packages = await getCateringPackages();
  const gallery = await getGallery();
  const testimonials = await getTestimonials();

  return (
    <>
      <HeroSection />
      <TwoWorldsSection />
      <TraditionIntro />
      <CulinaryShowcase />
      <CateringHighlights packages={packages} />
      <ExperienceShowcase />
      <WhyChooseEtege />
      <HomeGalleryPreview gallery={gallery} />
      <TestimonialsSection testimonials={testimonials} />
      <BranchLocationsSection />
      <SplitCTASection />
    </>
  );
}
