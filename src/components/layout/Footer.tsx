"use client";

import Image from "next/image";
import logo from "@/assets/footer_logo.png";
import SectionLayout from "./SectionLayout";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Locale, useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;

  const switchLocale = (nextLocale: Locale) => {
    if (locale === nextLocale) return;
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <footer
      className="
        block w-full bg-black-300 text-white z-0 
        /* ↓ xl 이상에서만 sticky + 내부스크롤 안전 확보(svh) + 스크롤바 숨김 */
        lg:sticky lg:bottom-0 xl:left-0
        lg:max-h-[100svh] lg:overflow-y-auto scrollbar-y-none
      "
    >
      <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-between">
        <div className="">
          <div className="relative w-full h-[20vh] md:h-[30vh] lg:md:h-[35vh] xl:h-[55vh] overflow-hidden">
            <Image
              src={logo}
              alt="footer_logo"
              width={0}
              height={0}
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
        <SectionLayout>
          <div className=" md:gap-x-6 lg:gap-y-6 md:grid-rows-[auto_auto_auto] lg:grid-cols-8 lg:grid-rows-[auto_auto] md:gap-y-12 md:grid-cols-3  text-gray-200 text-14-regular lg:text-16-regular [&_h4]:text-white mt-15 grid grid-cols-1 gap-2.5 [&>div]:flex-col [&>div]:gap-2 [&>div]:flex [&_h4]:pb-2 [&_h4]:border-b [&_h4]:border-line-400 ">
            <div className="lg:col-start-1 lg:col-end-2">
              <h4>{t("brand")}</h4>
              <div>
                <p>{t("address1")}</p>
                <p>{t("address2")}</p>
                <p>{t("address3")}</p>
              </div>
            </div>
            <div className="lg:col-start-3 lg:col-end-5">
              <h4>{t("contact")}</h4>
              <div>
                <p>{t("phone")}</p>
                <p>{t("email")}</p>
              </div>
            </div>
            <div className="md:row-start-2 md:col-start-1 md:col-end-2 lg:row-start-1  lg:col-start-6 lg:col-end-7">
              <h4>{t("legal")}</h4>
              <div>
                <Link href="/imprint" className="block hover:underline">
                  {t("imprint")}
                </Link>
                <Link href="/privacy-policy" className="block hover:underline">
                  {t("privacy")}
                </Link>
              </div>
            </div>
            <div className="md:row-start-2 md:col-start-2 md:col-end-3 lg:row-start-1  lg:col-start-8 lg:col-end-9">
              <h4>{t("language")}</h4>
              <div className="flex flex-col [&_button]:w-fit">
                <button
                  onClick={() => switchLocale("en")}
                  disabled={locale === "en"}
                >
                  {t("english")}
                </button>
                <button
                  onClick={() => switchLocale("ko")}
                  disabled={locale === "ko"}
                >
                  {t("korean")}
                </button>
              </div>
            </div>
            <div className="md:row-start-3 lg:text-16-regular md:col-start-1 md:col-end-2 text-14-regular py-5 lg:row-start-2  lg:col-start-1 lg:col-end-2">
              {t("rights")}
            </div>
          </div>
        </SectionLayout>
      </div>
    </footer>
  );
}
