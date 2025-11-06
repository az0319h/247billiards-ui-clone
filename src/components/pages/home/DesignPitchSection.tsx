import SectionLayout from "@/components/layout/SectionLayout";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function DesignPitchSection() {
  const t = await getTranslations("HomePage.designPitch");

  return (
    <SectionLayout>
      <div className="flex flex-col gap-10 lg:gap-12">
        <p className="flex flex-col lg:block  gap-0 text-[2.2rem] lg:text-[5rem] lg:leading-[5.5rem] sm:text-[2.75rem] sm:leading-[3rem] leading-[2.5rem] font-medium">
          {t("title")}

          <span className="text-gray-200 before:content-[''] lg:before:content-['\00a0']">
            {t("subtitle")}
          </span>
        </p>
        <Link
          href={"/collection"}
          className="bg-black transition-all duration-300 hover:text-black hover:bg-hover-200 w-fit py-6 px-12 text-center text-16-medium text-white rounded-sm"
        >
          {t("cta")}
        </Link>
      </div>
    </SectionLayout>
  );
}
