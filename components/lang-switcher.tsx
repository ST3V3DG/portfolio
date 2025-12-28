"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {  useRef } from "react";
import { Button } from "@/components/ui/button";

export default function LangSwitcher() {
    const langSwitcherRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const t = useTranslations("lang");

    function showUp() {
        langSwitcherRef.current?.classList.toggle("translate-y-full");
        langSwitcherRef.current?.classList.toggle("opacity-0");
    }
    
    return (
        <div className="fixed right-4 bottom-4 z-10 w-12 h-36 overflow-hidden focus-within:outline-none">
            <div className="relative h-full focus-within:outline-none">
                <Button className="absolute bottom-0 left-0 w-full font-clash-display text-xs rounded-none z-10 h-1/3 bg-accent hover:bg-accent/80 cursor-pointer transition duration-300 uppercase" ref={triggerRef} onClick={showUp}>
                    {t("current")}
                </Button>
                <div ref={langSwitcherRef} className="flex flex-col h-24 translate-y-full transition duration-300 opacity-0">
                    <Button className="border border-b-0 hover:bg-accent/80 rounded-none h-1/2 uppercase" variant="ghost" asChild>
                        <Link href={t("current")}>{t("current")}</Link>
                    </Button>
                    <Button className="border hover:bg-accent/80 rounded-none h-1/2 uppercase" variant="ghost" asChild>
                        <Link href={t("switch")}>{t("switch")}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}