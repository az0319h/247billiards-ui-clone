"use client";
import SectionLayout from "@/components/layout/SectionLayout";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function LatestNewsSection() {
  const t = useTranslations("HomePage.latestNews");

  return (
    <SectionLayout paddingTop="md:pt-10">
      <h2 className="text-5xl sm:text-[7rem]">{t("title")}</h2>
      <Link
        href={"/projects"}
        className={`mt-10 block bg-black transition-all duration-300 hover:text-black hover:bg-gray-700 w-fit py-5 px-12 text-center text-16-medium text-white rounded-sm `}
      >
        {t("cta")}
      </Link>
    </SectionLayout>
  );
}
