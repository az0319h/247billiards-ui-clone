import SectionLayout from "@/components/layout/SectionLayout";
import MaterialItem from "./MaterialItem";
import { getTranslations } from "next-intl/server";

export default async function OurMaterialsSection() {
  const t = await getTranslations("AboutPage.materialsSection");
  const materialItems = t.raw("items");

  return (
    <SectionLayout paddingTop="pt-[10rem] sm:pt-[8rem] lg:pt-[12rem]">
      <div className="lg:grid lg:grid-cols-8 ">
        <h2 className="text-[1.65rem] mb-10 lg:col-start-1 lg:col-end-2">
          Our Meterials
        </h2>
        <div className="flex flex-col gap-8 sm:gap-12 lg:col-start-4 lg:col-end-9">
          {materialItems.map((item, index) => (
            <MaterialItem key={index} {...item} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
