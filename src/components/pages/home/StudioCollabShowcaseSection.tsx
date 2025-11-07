import CTAButton from "@/components/common/CTAButton";
import SectionLayout from "@/components/layout/SectionLayout";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function StudioCollabShowcaseSection() {
  const t = await getTranslations("HomePage.studioCollabShowcase");
  return (
    <SectionLayout>
      <div className="sm:grid sm:grid-cols-3 sm:grid-rows-[auto_auto_auto] lg:grid-cols-8 lg:grid-rows-[auto_auto]">
        <p className="lg:text-[3.2rem] lg:leading-[3.5rem] lg:col-start-1 lg:col-end-4  hidden sm:block lg:mr-10  mb-10 text-32-regular sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-3">
          {t("headline")}
        </p>
        <div className=" lg:py-0 lg:col-start-4 lg:col-end-9 lg:row-start-1 lg:row-end-3   py-10 sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-4 ">
          <div className="relative w-full h-full aspect-[1.287]">
            <Image
              src={"/home/ping_pong_table.jpg"}
              alt="ping_pong_table.jpg"
              width={0}
              height={0}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="sm:hidden mb-10 text-20-regular">{t("headline")}</p>

        <div className="lg:self-end lg:col-start-1 lg:col-end-3 lg:row-start-2  flex flex-col gap-4 sm:gap-6 sm:row-start-3 sm:col-start-1 sm:col-end-3">
          <h3 className="text-gray-500 text-12-regular">{t("productTitle")}</h3>
          <p className="sm:text-black text-gray-600 text-14-regular sm:text-18-regular">
            {t.rich("description", {
              highlight: (chunks) => (
                <span className="text-primary-300 font-medium">{chunks}</span>
              ),
            })}
          </p>
          <CTAButton
            href={"https://www.studiofaporsche.com/case/247-billiard-table/"}
            label={t("cta")}
          />
        </div>
      </div>
    </SectionLayout>
  );
}
