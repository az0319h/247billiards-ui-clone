import { Link } from "@/i18n/routing";
import Image from "next/image";

interface ProjectItemProps {
  id: string;
  title: string;
  date: string;
  src: string;
}

export default function ProjectItem({
  id,
  title,
  date,
  src,
}: ProjectItemProps) {
  return (
    <Link href={`/projects/${Number(id)}`} className="block min-h-125 group  ">
      <div className="group-hover:-translate-y-2.5 duration-500 ease-in-out">
        <div className="relative">
          <div
            className="
            relative w-full h-70 mb-2.5
            after:content-['Projects']
            after:absolute after:left-2.5 after:top-2.5
            after:py-0.5 after:px-2.5 after:bg-black/50 after:text-white
          "
          >
            <Image
              src={src}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-16-regular">{date}</div>
        <div className="text-30-regular mb-2.5">{title}</div>
      </div>
    </Link>
  );
}
