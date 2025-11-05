"use client";

import LogoMarquee from "@/components/common/LogoMarquee";
import { useTranslations } from "next-intl";

export default function LifestyleHero() {
  const t = useTranslations("HomePage.lifestyleHero");

  const bigTitles = t.raw("bigTitle");
  const pillars = t.raw("pillars");

  return (
    <div className="bg-black-500 overflow-hidden text-white">
      <LogoMarquee />
      <div className="px-5 md:px-8 pt-12 pb-32 md:pt-24 overflow-hidden">
        {/* Dynamic Big Titles */}
        <div className="text-nowrap text-[3.4375rem] sm:text-[8.125rem] md:text-[16rem] leading-none flex flex-col gap-0">
          {bigTitles.map((line: string, i: number) => (
            <div
              key={i}
              className={
                i === 1 ? "text-center" : i === 3 ? "text-right" : undefined
              }
            >
              {line}
            </div>
          ))}
        </div>
        <div className="py-16 sm:py-32 grid grid-cols-3 sm:grid-cols-8">
          <h2 className="col-start-1 col-end-3 sm:col-end-8 md:text-[3.2rem] md:leading-[3.2rem] sm:text-32-regular md:col-start-5 md:col-end-9">
            {t("subheading")}
          </h2>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-3 xl:grid-cols-12 xl:grid-rows-none">
          {pillars.map((text: string, index: number) => (
            <div
              key={index}
              className="p-4.5 border rounded-md border-line-200 flex flex-col gap-21 justify-between xl:col-span-2"
            >
              <div>0{index + 1}</div>
              <div>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
