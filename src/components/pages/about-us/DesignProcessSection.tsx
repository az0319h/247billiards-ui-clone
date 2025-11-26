"use client";

import SectionLayout from "@/components/layout/SectionLayout";
import Image from "next/image";
import { useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTranslations } from "next-intl";

export default function DesignProcessSection() {
  const t = useTranslations("AboutPage.collaboratorsSection");

  const images = [
    "/about/person1.jpg",
    "/about/person2.jpg",
    "/about/person3.jpg",
    "/about/person4.jpg",
    "/about/person5.jpg",
    "/about/person6.jpg",
    "/about/person7.jpg",
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  // motion value + spring
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <SectionLayout>
      <h2 className="mb-5 md:mb-6 lg:mb-[4vh] text-[6vw] leading-[6vw]">
        {t("title")}
      </h2>

      <div
        className="grid grid-cols-4 gap-5 md:grid-cols-4 md:grid-rows-3 lg:flex lg:flex-row-reverse lg:justify-end  lg:flex-wrap lg:grid-cols-none lg:grid-rows-none"
        onMouseMove={handleMouseMove}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
                : ""
            }
          >
            <div
              className={`relative md:h-[20vw] md:max-h-[20vw] lg:h-[10.4vw]  lg:max-h-[10.4vw] lg:w-[8.3vw]  h-[28vw] max-h-[40vw] 
                ${index === 0 ? "md:h-full md:max-h-none lg:h-[10.4vw] lg:max-h-[10.4vw]" : ""}
                 ${activeImage === image ? "after:content-[''] after:absolute after:inset-0 after:ring-1 after:ring-white after:opacity-60 after:z-40" : ""}

            `}
              onMouseEnter={() => setActiveImage(image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 프리뷰 */}
      {activeImage && (
        <motion.div
          className="max-w-[60vw] max-h-[80vh] lg:max-w-[41vw] lg:max-h-[70vh] w-[40vw] lg:w-[20vw]
          md:hidden lg:block fixed top-0 left-0 pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{
            x: smoothX,
            y: smoothY,
            aspectRatio: "2 / 3",
          }}
        >
          <Image
            src={activeImage}
            alt="hover-preview"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      )}
    </SectionLayout>
  );
}
