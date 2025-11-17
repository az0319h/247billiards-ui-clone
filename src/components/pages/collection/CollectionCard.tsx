import CTAButton from "@/components/common/CTAButton";
import { Link } from "@/i18n/routing";
import { div } from "framer-motion/client";
import Image from "next/image";

export interface CollectionCardType {
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  href: string;
}

export default function CollectionCard({
  image,
  title,
  subtitle,
  tag,
  href,
}: CollectionCardType) {
  return (
    <div className="mb-10">
      <Link href={href}>
        <div className="flex flex-col gap-6">
          <div className="relative w-full sm:h-[70vh] aspect-video">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition-opacity duration-200 hover:opacity-80"
            />
          </div>
          <div className="text-14-regular lg:text-18-regular grid grid-cols-12 sm:text-16-regular lg:gap-[2vw]">
            <span className="col-start-1 col-end-3">{tag}</span>
            <div className="flex flex-col gap-4 col-start-7 col-end-13 mb-10">
              <p>{subtitle}</p>
              <h3 className="text-20-regular sm:text-32-regular lg:text-6xl">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
      <div className="sm:grid sm:grid-cols-12 lg:gap-[2vw]">
        <CTAButton
          href={href}
          label="Find Out More"
          className="col-start-7 text-nowrap"
        />
      </div>
    </div>
  );
}
