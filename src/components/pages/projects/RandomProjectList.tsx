import SectionLayout from "@/components/layout/SectionLayout";
import { ProjectData } from "./projecList";
import { getTranslations } from "next-intl/server";
import ProjectItem from "./projectItem";

export default async function RandomProjectList({ id }: { id: string }) {
  const t = await getTranslations("ProjectsPage");
  const projects = t.raw("projects");

  const randomProjects = projects
    .filter((project: ProjectData) => Number(project.id) !== Number(id)) // 현재 id 제외
    .sort(() => Math.random() - 0.5) // 무작위 섞기
    .slice(0, 3); // 앞에서 3개 선택

  return (
    <SectionLayout paddingTop="pt-[10rem] sm:pt-[8rem] lg:pt-[12rem]">
      <h2 className="mb-10 text-5xl sm:text-[7rem]">
        {t("randomProjectTitle")}
      </h2>
      <div className="md:grid grid-cols-3 gap-y-2.5 gap-x-5">
        {randomProjects.map((project: ProjectData) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </SectionLayout>
  );
}
