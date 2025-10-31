import LocaleSwitcher from "@/components/common/LocaleSwitcher";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import logo from "@/assets/logo.svg";
export default async function Home() {
  const t = await getTranslations("HomePage"); // 네임스페이스

  return (
    <div>
      {t("title")}
      <LocaleSwitcher />
      <Image src={logo} alt="" width={80} height={38} />
    </div>
  );
}
