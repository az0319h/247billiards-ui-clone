import FooterMarquee from "@/components/common/FooterMarquee";
import FormCTAButton from "@/components/common/FormCTAButton";
import SectionLayout from "@/components/layout/SectionLayout";
import { getTranslations } from "next-intl/server";
import { HiArrowUpRight } from "react-icons/hi2";

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <>
      <SectionLayout
        paddingBottom="pb-[15vh]"
        className="lg:pb-0 md:min-h-[calc(100vh-16vh)]"
      >
        <div className="lg:grid-cols-12 lg:grid-rows-1 grid grid-cols-2  lg:gap-y-[2vw] grid-rows-[auto_auto_auto] gap-x-[2vw] gap-y-[3vh]">
          <div className="col-start-1 col-end-3 row-start-1 lg:col-end-4">
            <h2 className="text-24-regular md:text-32-regular lg:text-[3.2rem] lg:leading-[3.2rem]">
              {t("title")}
            </h2>
            <p className="text-14-medium md:text-18-medium lg:text-18-semibold text-gray-800">
              {t("description")}
            </p>
          </div>
          <div className="col-start-1 col-end-3 row-start-2 lg:row-start-1 lg:col-start-5 lg:col-end-10">
            <form>
              <div className="flex flex-col [&_*:focus]:border [&_*:focus]:border-primary-400 [&_*]:w-full [&_*]:h-20 [&_*]:text-22-medium [&_*]:mb-2.5 [&_*]:border-b [&_*]:border-gray-500 [&_*]:py-2 [&_*]:py-2 [&_*]:pr-3">
                <input type="text" placeholder={t("form.firstName")} required />
                <input type="text" placeholder={t("form.lastName")} required />
                <input type="email" placeholder={t("form.email")} required />
                <input type="text" placeholder={t("form.phone")} required />
                <textarea
                  rows={5}
                  maxLength={5000}
                  placeholder={t("form.message")}
                  className="min-h-48"
                  required
                ></textarea>
              </div>

              <FormCTAButton label={t("form.submit")} />
            </form>
          </div>
          <div className="mt-2.5 lg:mt-0 flex flex-col gap-3.5 lg:gap-14 lg:col-start-11 lg:col-end-13">
            <div
              className="
                text-16-medium flex flex-col
                [&_a]:w-fit
                [&_a]:py-0.5
                [&_a]:flex
                [&_a]:gap-2.5
                [&_a]:items-center
                [&_a]:text-gray-800
                [&_a]:transition-colors [&_a]:duration-300 [&_a]:ease-in-out
                [&_a]:hover:text-gray-500
              "
            >
              <h3 className="mb-2 text-16-medium opacity-50 ">
                {t("sidebar.socialTitle")}
              </h3>
              <a href="https://www.facebook.com/247billiards/" target="_blank">
                {t("sidebar.social.facebook")}
                <HiArrowUpRight />
              </a>
              <a href="https://www.instagram.com/247billiards/" target="_blank">
                {t("sidebar.social.instagram")}
                <HiArrowUpRight />
              </a>
              <a href="https://x.com/247Billiards" target="_blank">
                {t("sidebar.social.x")}
                <HiArrowUpRight />
              </a>
              <a href="https://at.pinterest.com/247billiards/" target="_blank">
                {t("sidebar.social.pinterest")}
                <HiArrowUpRight />
              </a>
            </div>
            <div
              className="
                text-16-medium flex flex-col
                [&_span]:w-fit
                [&_span]:py-0.5
                [&_span]:flex
                [&_span]:gap-2.5
                [&_span]:items-center
                [&_span]:text-gray-800
                [&_span]:transition-colors [&_span]:duration-300 [&_span]:ease-in-out
                [&_span]:hover:text-gray-500
              "
            >
              <h3 className="mb-2 text-16-medium opacity-50 ">
                {t("sidebar.generalTitle")}
              </h3>
              <span>{t("sidebar.phone")}</span>
              <span>{t("sidebar.email")}</span>
            </div>
          </div>
        </div>
      </SectionLayout>
      <FooterMarquee />
    </>
  );
}
