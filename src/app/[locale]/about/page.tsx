import SectionLine from "@/components/common/SectionLine";
import SectionOverflow from "@/components/common/SectionOverflow";
import AboutHeroSection from "@/components/pages/about-us/AboutHeroSection";
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
      여기서 부터 작성
    </>
  );
}
