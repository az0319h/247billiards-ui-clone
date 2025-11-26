import SectionLine from "@/components/common/SectionLine";
import SectionOverflow from "@/components/common/SectionOverflow";
import AboutHeroSection from "@/components/pages/about-us/AboutHeroSection";
import AccordionSection from "@/components/pages/about-us/AccordionSection";
import OurMaterialsSection from "@/components/pages/about-us/OurMaterialsSection";
import ReThinkingHeroSection from "@/components/pages/about-us/ReThinkingHeroSection";
import ScrollHorizontalTitle from "@/components/pages/about-us/ScrollHorizontalTitle";
import AboutUsSection from "@/components/pages/home/AboutUsSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <ScrollHorizontalTitle />
      <SectionOverflow />
      <SectionOverflow />
      <SectionOverflow />
      <AboutUsSection />
      <SectionLine />
      <ReThinkingHeroSection />
      <AccordionSection />
      <OurMaterialsSection />
    </>
  );
}
