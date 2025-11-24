import AccordionItem from "./AccordionItem";

interface Item {
  title: string;
  subTitle: string;
  content: string;
  src: string;
}

interface AccordionListProps {
  items: Item[];
}

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}
