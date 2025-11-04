import MaxLayout from "@/components/layout/MaxLayout";
import BannerSlider from "./BannerSlider";
import { useTranslations } from "next-intl";

export default function ValueHeroSection() {
  const t = useTranslations("HomePage.hero");

  return (
    <MaxLayout>
      <div className="text-gray-300 lg:grid-cols-8 grid grid-cols-4 grid-rows-2 text-14-regular sm:grid-rows-none">
        <div className="col-start-1 col-end-3 sm:col-end-2">{t("lead")}</div>
        <div className="col-start-3 lg:col-start-7 lg:col-end-8 col-end-5  sm:col-end-4 justify-self-end sm:justify-self-start">
          {t("slogan")}
        </div>
        <div className="row-start-2 lg:col-start-8 lg:justify-self-end col-start-4 sm:row-start-1 justify-self-end sm:justify-self-start">
          {t("since")}
        </div>
      </div>
      <BannerSlider />
    </MaxLayout>
  );
}
