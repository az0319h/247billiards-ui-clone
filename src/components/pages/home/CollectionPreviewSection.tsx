import CTAButton from "@/components/common/CTAButton";
import SectionLayout from "@/components/layout/SectionLayout";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CollectionPreviewSection() {
  const t = useTranslations("HomePage.collectionPreview");
  const items = t.raw("items") as Array<{
    src?: string;
    title: string;
    subtitle: string;
    href: string;
  }>;

  // 이미지 경로는 title에 매핑하거나, items에 src를 추가
  const imageSrcMap: Record<string, string> = {
    "THE 247 BILLIARD TABLE": "/collections/collection1-main.jpg",
    "THE 247 PING PONG TABLE": "/collections/collection2-main.jpg",
    "THE 247 DUMBBELL SET": "/collections/collection3-main.jpg",
    "247 빌리어드 테이블": "/collections/collection1-main.jpg",
    "247 핑퐁 테이블": "/collections/collection2-main.jpg",
    "247 덤벨 세트": "/collections/collection3-main.jpg",
  };

  return (
    <SectionLayout paddingBottom="pb-16 lg:pb-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="group flex flex-col">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={
                  imageSrcMap[item.title] ?? "/collections/collection1-main.jpg"
                }
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-110"
              />
            </div>
            <div className="py-2.5 sm:py-3 flex lg:flex-col justify-between">
              <h2 className="text-16-regular lg:text-18-regular">
                {item.title}
              </h2>
              <span className="text-12-regular lg:text-14-regular text-gray-500">
                {item.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <CTAButton href={"/collection"} label={t("ctaLabel")} />
      </div>
    </SectionLayout>
  );
}
