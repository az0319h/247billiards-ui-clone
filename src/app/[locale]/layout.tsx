import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { pretendard } from "../fonts/fonts";
import Header from "@/components/layout/Header";
import Providers from "@/providers/providers";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("RootMetaData");
  return {
    title:
      "247 Clone – Luxury Billiard Tables, Ping Pong Tables & Designer Dumbbells | Frontend Portfolio",
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`w-full min-h-screen bg-gray-100  ${pretendard.className}`}
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="md:pt-[16vh] pt-25">{children}</main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
