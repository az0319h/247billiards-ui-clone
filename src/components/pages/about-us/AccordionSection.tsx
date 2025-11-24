import SectionLayout from "@/components/layout/SectionLayout";
import AccordionList from "./AccordionList";
import { useTranslations } from "next-intl";

export default function AccordionSection() {
  const t = useTranslations("AboutPage.accordionSection");
  const items = t.raw("items");
  return (
    <SectionLayout>
      <AccordionList items={items} />
    </SectionLayout>
  );
}
