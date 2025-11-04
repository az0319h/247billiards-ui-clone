import Image from "next/image";
import notFoundImage from "@/assets/404.svg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-0 md:items-center gap-8 justify-center px-7.5 left-0 top-0 z-[9999] fixed w-full min-h-full bg-black-600 text-white">
      <Image src={notFoundImage} alt="404" className="md:h-[20vh] w-100" />
      <div className="flex flex-col gap-8 md:gap-5">
        <div className="text-4xl md:text-5xl">{t("title")}</div>
        <p className="max-w-75">{t("message")}</p>
        <Link
          href={"/"}
          className="bg-white md:mt-5 max-w-50 w-full px-10 py-5 text-center text-black text-16-medium hover:bg-black-200 hover:text-white transition-all duration-300"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
