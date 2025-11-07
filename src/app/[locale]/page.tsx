import SectionLine from "@/components/common/SectionLine";
import SectionLayout from "@/components/layout/SectionLayout";
import AboutUsSection from "@/components/pages/home/AboutUsSection";
import CollectionPreviewSection from "@/components/pages/home/CollectionPreviewSection";
import DesignPitchSection from "@/components/pages/home/DesignPitchSection";
import LifestyleHero from "@/components/pages/home/LifestyleHero";
import StudioCollabShowcaseSection from "@/components/pages/home/StudioCollabShowcaseSection";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import ValueHeroSection from "@/components/pages/home/ValueHeroSection";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage.aboutUs");
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
          {t("title")}
        </h2>
      </SectionLayout>
      <SectionLine />
      <AboutUsSection />
      <SectionLine />
      <StudioCollabShowcaseSection />
      <SectionLine height={0} />
    </>
  );
}
