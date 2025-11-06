import CTAButton from "@/components/common/CTAButton";
import SectionLayout from "@/components/layout/SectionLayout";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function DesignPitchSection() {
  const t = await getTranslations("HomePage.designPitch");

  return (
    <SectionLayout paddingTop="pt-[15vh]">
      <div className="flex flex-col">
        <p className="flex flex-col lg:block  gap-0 text-[2.2rem] lg:text-[5rem] lg:leading-[5.5rem] sm:text-[2.75rem] sm:leading-[3rem] leading-[2.5rem] font-medium">
          {t("title")}

          <span className="text-gray-200 before:content-[''] lg:before:content-['\00a0']">
            {t("subtitle")}
          </span>
        </p>
        <CTAButton href="/collection" label={t("cta")} />
      </div>
    </SectionLayout>
  );
}
