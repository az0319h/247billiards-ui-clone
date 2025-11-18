"use client";

import SectionLayout from "@/components/layout/SectionLayout";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutHeroSection() {
  const t = useTranslations("AboutPage");

  return (
    <SectionLayout>
      <h2 className="text-7xl sm:text-9xl lg:mb-16 lg:text-[12rem]">
        {t.rich("hero.title", {
          break: () => <br />,
        })}
      </h2>
      <div className="sm:grid sm:grid-cols-3 lg:grid-cols-8 sm:grid-rows-[auto_auto]">
        <div className="sm:col-start-1 sm:col-end-4 sm:row-start-1 lg:col-start-4 lg:col-end-9 lg:row-start-1 lg:row-end-3  sm:row-end-2 relative w-full aspect-square my-10 lg:my-0">
          <Image
            src={"/about/about-us.jpg"}
            alt="about-us"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="sm:col-start-1 sm:col-end-2 sm:row-start-2 lg:col-end-3 lg:row-start-1">
          <p className="mb-10 text-20-medium sm:text-28-medium md:text-32-medium lg:leading-[3.5rem] lg:text-[3.2rem]">
            {t.rich("hero.highlight", {
              break: () => <br />,
            })}
          </p>
        </div>
        <div className="lg:self-end sm:col-start-2 sm:col-end-4 sm:row-start-2 lg:col-start-1 lg:col-end-3 text-14-regular text-gray-600 flex flex-col gap-6">
          <span>{t("story.label")}</span>
          <p className="sm:text-18-regular sm:text-black">{t("story.body")}</p>
        </div>
      </div>
    </SectionLayout>
  );
}
