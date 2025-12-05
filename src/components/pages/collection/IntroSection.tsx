import SectionLayout from "@/components/layout/SectionLayout";

export default function IntroSection({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <SectionLayout>
      <div className="grid grid-cols-2 lg:grid-cols-8">
        <div className="col-end-2 lg:col-start-1 xl:col-end-3 lg:col-end-4 flex flex-col gap-4 lg:text-18-regular">
          <h1>{subTitle}</h1>
          <p className="text-[2.2rem] font-medium mb-2.5 md:text-5xl md:leading-14 lg:text-[5rem] lg:leading-[6rem]">
            {title}
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
0;
