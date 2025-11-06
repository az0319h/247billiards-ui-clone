import SectionLine from "@/components/common/SectionLine";
import CollectionPreviewSection from "@/components/pages/home/CollectionPreviewSection";
import DesignPitchSection from "@/components/pages/home/DesignPitchSection";
import LifestyleHero from "@/components/pages/home/LifestyleHero";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import ValueHeroSection from "@/components/pages/home/ValueHeroSection";

export default async function Home() {
  return (
    <>
      <ValueHeroSection />
      <LifestyleHero />
      <TestimonialsSection />
      <DesignPitchSection />
      <SectionLine />
      <CollectionPreviewSection />
      <SectionLine height={0} />
      About
    </>
  );
}
