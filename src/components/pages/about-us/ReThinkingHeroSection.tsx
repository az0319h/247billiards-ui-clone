"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLayout from "@/components/layout/SectionLayout";
import { useTranslations } from "next-intl";

export default function ReThinkingHeroSection() {
  const t = useTranslations("AboutPage.rethinkingHero");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <SectionLayout>
      <div className="flex flex-col gap-16 md:gap-32">
        <div className="xl:grid xl:grid-cols-4">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 30, rotateX: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }
                : {}
            }
            className=" xl:col-start-1 xl:col-end-4 pt-25 text-7xl lg:text-[12rem] min-h-10 sm:pt-36 sm:text-[7.5rem] sm:min-h-217.5 md:min-h-145.5 lg:min-h-175"
          >
            {t("headline")}
          </motion.p>
        </div>

        <div className="md:grid grid-cols-2 lg:grid-cols-3">
          <p className="pb-[4rem] sm:pb-[8rem] sm:text-[1.48rem] text-gray-800 md:col-start-2 lg:col-start-3">
            {t("description")}
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
