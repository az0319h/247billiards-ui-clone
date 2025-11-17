import FooterMarquee from "@/components/common/FooterMarquee";
import SectionLayout from "@/components/layout/SectionLayout";
import CollectionCard from "@/components/pages/collection/CollectionCard";
import { getTranslations } from "next-intl/server";

export default async function CollectionPage() {
  const t = await getTranslations("CollectionPage");

  const collectionItems = [
    {
      image: "/collections/collection1-banner.jpg",
      title: t("items.billiards.title"),
      subtitle: t("items.billiards.subtitle"),
      tag: t("items.billiards.tag"),
      href: "/collection/billiards",
    },
    {
      image: "/collections/collection2-banner.jpg",
      title: t("items.pingPong.title"),
      subtitle: t("items.pingPong.subtitle"),
      tag: t("items.pingPong.tag"),
      href: "/collection/ping-pong",
    },
    {
      image: "/collections/collection3-banner.jpg",
      title: t("items.dumbbells.title"),
      subtitle: t("items.dumbbells.subtitle"),
      tag: t("items.dumbbells.tag"),
      href: "/collection/dumbbells",
    },
  ];
  return (
    <>
      <SectionLayout paddingBottom="pb-37.5">
        <div className="sm:grid sm:grid-cols-3 lg:grid-cols-8">
          <div className="flex flex-col gap-4 lg:col-end-6 sm:col-start-1 sm:col-end-3 mb-2.5">
            <span className="text-16-regular lg:text-18-regular">
              {t("intro.eyebrow")}
            </span>
            <h2 className="font-medium text-[2.2rem] leading-[2.5rem] sm:text-5xl sm:leading-12 lg:text-[5rem] lg:leading-[5rem]">
              {t("intro.headline")}
            </h2>
          </div>
        </div>
        <div>
          {collectionItems.map((item, index) => (
            <CollectionCard key={index} {...item} />
          ))}
        </div>
      </SectionLayout>
      <FooterMarquee />
    </>
  );
}
