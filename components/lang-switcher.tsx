/** biome-ignore-all lint/style/noNonNullAssertion: Allow non null assertions for refs */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useContext, useRef } from "react";
import { PagePreloaderContext } from "@/providers/page-preloader";

gsap.registerPlugin(useGSAP);

export default function LangSwitcher() {
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const tl = useContext(PagePreloaderContext);

  const t = useTranslations("lang");

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      tl?.to(triggerRef.current!, {
        opacity: 1,
        duration: 0.2,
        ease: "none",
      }, "<");
    },
    { dependencies: [triggerRef.current] },
  );

  return (
    <Link
      className="font-clash-display text-xs text-black bg-accent hover:bg-accent/80 transition duration-300 uppercase fixed right-4 bottom-4 z-10 size-11 flex justify-center items-center will-change-auto opacity-0"
      ref={triggerRef}
      href={`/${t("switch")}`}
    >
      {t("switch")}
    </Link>
  );
}
