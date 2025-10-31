"use client";

import { motion } from "framer-motion";
import LocaleSwitcher from "../common/LocaleSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function SubMenu({ onClose }: { onClose: () => void }) {
  const t = useTranslations("Header");
  return (
    <motion.div
      initial={{ height: 0, opacity: 1 }}
      animate={{ height: "100vh", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.1, 0.9, 0.9, 1] }}
      className="fixed inset-0 bg-black  z-40 flex flex-col px-7.5 "
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.65, // 메뉴가 열리고 난 뒤 나타남
          duration: 0.1,
          ease: "easeOut",
        }}
      >
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className="text-white pt-22.5 "
        >
          <ul className="flex text-24-medium sm:text-32-medium flex-col items-center gap-2 [&_li_a]:block text-center [&_li_a]:w-full [&_li]:w-full [&_li]:py-3 sm:[&_li]:py-5">
            <li>
              <Link href="/collection" onClick={onClose}>
                {t("collection")}
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={onClose}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={onClose}>
                {t("contact")}
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={onClose}>
                {t("projects")}
              </Link>
            </li>
          </ul>

          <div className="flex justify-center">
            <LocaleSwitcher />
          </div>
        </nav>
        <div className="flex flex-col gap-2 mt-8 py-8 text-white border-t border-line-100 text-18-medium">
          <a href="https://www.facebook.com/247billiards/" target="_blank">
            Facebook
          </a>
          <a href="https://www.instagram.com/247billiards/" target="_blank">
            Instagram
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2F247Billiards"
            target="_blank"
          >
            X
          </a>
          <a href="https://at.pinterest.com/247billiards/" target="_blank">
            Pinterest
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
