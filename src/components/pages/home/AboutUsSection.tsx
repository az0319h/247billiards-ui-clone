import SectionLayout from "@/components/layout/SectionLayout";
import { getTranslations } from "next-intl/server";

export default async function AboutUsSection() {
  const t = await getTranslations("HomePage.aboutUs");

  return (
    <SectionLayout>
      <div className="sm:grid sm:grid-cols-3 lg:grid-cols-8">
        <p className="lg:col-start-1 lg:text-[3.2rem] lg:text-black lg:col-end-3 mb-10 sm:text-32-regular text-20-regular text-gray-600">
          {t("missionTitle")}
        </p>
        <div className="col-start-2 col-end-4 lg:col-start-4 lg:col-end-9">
          <div className="text-20-medium sm:text-32-medium lg:text-[3.2rem] lg:leading-[3.5rem]">
            <p>{t("intro")}</p>
            <div className="lg:text-[1.65rem] lg:leading-[2rem] pt-10 sm:pt-12 grid gap-7.5 sm:gap-16 sm:text-16-medium grid-cols-2 sm:grid-rows-none grid-rows-2">
              <p className="col-span-2 sm:col-auto lg:col-start-2 lg:row-start-1">
                {t("paragraph1")}
              </p>
              <p className="col-span-2 sm:col-auto lg:col-start-1 lg:row-start-1">
                {t("paragraph2")}
              </p>
            </div>
          </div>
          <div
            className={`max-w-405 mx-auto h-[1px] bg-line-300 my-8 sm:my-16 md:my-24`}
          />
          <div className="text-nowrap lg:[&_span]:text-black [&_span]:text-14-regular [&_span]:text-18-regular [&_span]:text-gray-600  sm:gap-16 sm:grid-cols-2 grid grid-cols-1 gap-7.5 [&_div]:flex [&_div]:flex-col [&_p]:text-[5rem] sm:[&_p]:text-[6.5rem] md:[&_p]:text-[7.5rem] lg:[&_p]:text-[12rem] sm:[&_p]:leading-[6.5rem] lg:[&_p]:leading-[12rem] md:[&_p]:leading-[7.5rem] [&_p]:leading-[5rem] [&_div]:gap-2 [&_div]:items-center lg:[&_div]:items-start ">
            <div>
              <p>{t("stats.years.value")}</p>
              <span>{t("stats.years.label")}</span>
            </div>
            <div>
              <p>{t("stats.employees.value")}</p>
              <span>{t("stats.employees.label")}</span>
            </div>
            <div>
              <p>{t("stats.projects.value")}</p>
              <span>{t("stats.projects.label")}</span>
            </div>
            <div>
              <p>{t("stats.options.value")}</p>
              <span>{t("stats.options.label")}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
