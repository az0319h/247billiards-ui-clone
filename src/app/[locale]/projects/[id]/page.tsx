import FooterMarquee from "@/components/common/FooterMarquee";
import SectionLayout from "@/components/layout/SectionLayout";
import { ProjectData } from "@/components/pages/projects/projecList";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("ProjectsPage");
  const projects = t.raw("projects");

  const { title, subTitle, date, src, content, location, details } =
    projects.find((project: ProjectData) => Number(project.id) === Number(id));

  return (
    <>
      <SectionLayout>
        <div>
          <h2 className="mb-2.5 text-[2.2rem] font-medium lg:text-[5rem] lg:leading-[4.8rem] md:mb-4">
            {title}
          </h2>
          <div className="text-16-regular">{date}</div>
          <div className="relative w-full aspect-[3/4] my-5">
            <Image
              src={src}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover "
            />
          </div>
          <div>
            <div className="text-24-medium mb-2.5 sm:text-5xl sm:leading-14">
              {subTitle}
            </div>
            <div className="text-18-regular mb-[5vh] lg:mb-6 md:text-[1.65rem] md:leading-[2.3rem] lg:text-18-regular">
              {content}
            </div>
            <div>
              <div className="text-18-regular mb-[5vh] md:text-[1.65rem] lg:mb-0 lg:text-18-regular">
                {location}
              </div>
              <div className="text-18-regular mb-[5vh] md:text-[1.65rem] lg:mb-0 lg:text-18-regular">
                {details}
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
      <FooterMarquee />
    </>
  );
}
