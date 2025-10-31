import LocaleSwitcher from "@/components/common/LocaleSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage"); // 네임스페이스

  return (
    <div>
      {t("title")}
      <LocaleSwitcher />
    </div>
  );
}
