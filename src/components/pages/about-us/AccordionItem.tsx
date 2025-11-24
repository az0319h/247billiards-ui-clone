"use client";

import Image from "next/image";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

interface AccordionItemProps {
  title: string;
  subTitle: string;
  content: string;
  src: string;
}

export default function AccordionItem({
  title,
  subTitle,
  content,
  src,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-7">
      <button
        className="w-full flex justify-between items-center text-20-regular sm:text-32-regular"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span className="sm:text-22-regular">
          {open ? <HiMinus /> : <HiPlus />}
        </span>
      </button>

      <div
        className={`overflow-hidden ${open ? "pt-6 sm:pt-12 pb-24" : "max-h-0"}`}
      >
        <div className="flex flex-col  sm:grid gap-8 sm:grid-cols-2 sm:grid-rows-[auto_auto] lg:grid-cols-3 lg:gap-[8rem] lg:grid-rows-1">
          <div className="sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2">
            <div className="relative h-[32vh] sm:h-[50rem] rounded-md overflow-hidden transition-opacity duration-200 hover:opacity-80 ">
              <Image
                src={src}
                alt={title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:col-start-1 sm:col-end-3 lg:col-start-3 lg:row-end-2 lg:justify-end">
            <h2 className="text-20-regular sm:text-32-regular lg:text-[1.65rem]">
              {subTitle}
            </h2>
            <p
              className="text-14-regular text-gray-600 text-18-regular sm:text-black
            "
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
