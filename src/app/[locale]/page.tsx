import SectionLine from "@/components/common/SectionLine";
import SectionLayout from "@/components/layout/SectionLayout";
import AboutUsSection from "@/components/pages/home/AboutUsSection";
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
      <SectionLayout>
        <h2 className="text-[5rem] lg:text-[12rem] sm:text-[7.5rem] sm:leading-[7.5rem] lg:leading-[12rem] leading-[5rem]">
          About—us
        </h2>
      </SectionLayout>
      <SectionLine />
      <AboutUsSection />
    </>
  );
}
