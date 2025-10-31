"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

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
    <div>
      <button onClick={() => switchLocale("en")} disabled={locale === "en"}>
        EN
      </button>
      <span>/</span>
      <button onClick={() => switchLocale("ko")} disabled={locale === "ko"}>
        KO
      </button>
    </div>
  );
}
