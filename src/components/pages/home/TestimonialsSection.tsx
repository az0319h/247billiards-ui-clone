import CarouselPosts from "@/components/common/CarouselPosts";
import SectionLayout from "@/components/layout/SectionLayout";
import { getTranslations } from "next-intl/server";

export default async function TestimonialsSection() {
  const t = await getTranslations("HomePage");
  const title = t("testimonials.title");

  return (
    <SectionLayout paddingTop="pt-[15vh]">
      <div className="relative">
        <h2 className="text-30-regular mb-24 sm:mb-10 sm:text-[7rem] sm:leading-[7rem]">
          {title}
        </h2>
        <CarouselPosts />
      </div>
    </SectionLayout>
  );
}
