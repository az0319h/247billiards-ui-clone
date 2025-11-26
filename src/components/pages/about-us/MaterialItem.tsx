import Image from "next/image";
import { MaterialItemProps } from "./OurMaterialsSection";

export default function MaterialItem({
  title,
  content,
  src,
}: MaterialItemProps) {
  return (
    <div className="flex flex-col gap-6 sm:gap-16 lg:flex-row">
      <div className="relative w-full lg:min-w-[20rem] lg:max-w-[20rem] h-[14rem] sm:h-[24rem] lg:h-[14rem]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-20-regular sm:text-32-regular lg:text-[1.65rem]">
          {title}
        </p>
        <p className="text-14-regular sm:text-18-regular">{content}</p>
      </div>
    </div>
  );
}
