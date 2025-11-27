import SectionLayout from "@/components/layout/SectionLayout";
import ProjectItem from "./projectItem";
import { getTranslations } from "next-intl/server";

export interface ProjectData {
  id: string;
  title: string;
  subTitle: string;
  date: string;
  src: string;
  content: string;
  location?: string;
  details?: string;
}

export default async function ProjectList() {
  const t = await getTranslations("ProjectsPage");
  const projects = t.raw("projects");

  return (
    <SectionLayout>
      <h2 className="mb-10 text-4xl sm:text-8xl md:text-9xl lg:text-[8.2rem]">
        {t("title")}
      </h2>
      <p className="mb-10 text-20-regular sm:text-32-regular lg:text-[3.2rem] lg:leading-[3.5rem]">
        {t("description")}
      </p>
      <div className="md:grid grid-cols-3 gap-y-2.5 gap-x-5">
        {projects.map((project: ProjectData, index: number) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </SectionLayout>
  );
}
