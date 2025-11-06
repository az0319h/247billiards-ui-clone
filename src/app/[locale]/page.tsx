import LifestyleHero from "@/components/pages/home/LifestyleHero";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import ValueHeroSection from "@/components/pages/home/ValueHeroSection";

export default async function Home() {
  return (
    <>
      <ValueHeroSection />
      <LifestyleHero />
      <TestimonialsSection />
    </>
  );
}
