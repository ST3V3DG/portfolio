"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Cursor from "@/components/cursor";
import LangSwitcher from "@/components/lang-switcher";
import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const pathname = usePathname();

  const locale = routing.locales.find((locale) =>
    pathname.startsWith(`/${locale}`),
  );

  return (
    <>
      <main className="grid h-screen place-content-center px-6 text-center bg-background-grainy">
          <h1 className="font-clash-display text-9xl font-semibold text-accent">
            404
          </h1>
          <h2 className="text-2xl font-medium text-accent md:text-4xl capitalize">
            {t("title")}
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            {t("description")}
          </p>
          <Button asChild className="mt-4 bg-accent rounded-none hover:bg-accent/90 transition duration-200 w-fit mx-auto text-base" size="lg">
            <Link href={`/${locale}`}>{t("backHome")}</Link>
          </Button>
      </main>
      <Cursor />
      <LangSwitcher />
    </>
  );
}
