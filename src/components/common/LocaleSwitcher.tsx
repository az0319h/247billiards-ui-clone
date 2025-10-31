"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { RxDividerVertical } from "react-icons/rx";

type Locale = "en" | "ko";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;

  const switchLocale = (nextLocale: Locale) => {
    if (locale === nextLocale) return;
    router.push(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex gap-2.5 items-center [&_button]:text-gray-200 [&_button]:text-16-regular">
      <button onClick={() => switchLocale("en")} disabled={locale === "en"}>
        EN
      </button>
      <RxDividerVertical />
      <button onClick={() => switchLocale("ko")} disabled={locale === "ko"}>
        KO
      </button>
    </div>
  );
}
