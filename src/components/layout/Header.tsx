import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import LocaleSwitcher from "../common/LocaleSwitcher";
export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="lg:flex lg:justify-between lg:items-center px-5 py-4 sm:px-7.5 sm:py-5 lg:py-4">
        <Link href="/" className="block w-15 lg:w-20">
          <Image src={logo} alt={t("logoAlt")} />
        </Link>

        <button
          className="lg:hidden absolute top-1/2 -translate-1/2 right-2 sm:right-5 size-6 rounded-full bg-black"
          aria-label={t("menuOpen")}
        />

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className="text-black-100 text-14-medium lg:flex hidden gap-2 [&_a]:hover:bg-hover-100 [&_a]:px-5.5 [&_a]:block [&_a]:rounded-full [&_a]:bg-white-100 [&_a]:py-3"
        >
          <ul className="flex items-center gap-2">
            <li>
              <Link href="/collection">{t("collection")}</Link>
            </li>
            <li>
              <Link href="/about">{t("about")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("projects")}</Link>
            </li>
          </ul>

          <div
            className="ml-3.5 flex items-center"
            aria-label={t("languageSwitcher")}
          >
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
