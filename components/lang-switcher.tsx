/** biome-ignore-all lint/style/noNonNullAssertion: Allow non null assertions for refs */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useContext, useRef } from "react";
import { Button } from "@/components/ui/button";
import { PagePreloaderContext } from "@/providers/page-preloader";

export default function LangSwitcher() {
	const triggerRef = useRef<HTMLButtonElement>(null);
	gsap.registerPlugin(useGSAP);
	const tl = useContext(PagePreloaderContext);

	const t = useTranslations("lang");

	useGSAP(
		() => {
			tl?.from(triggerRef.current?.parentElement?.parentElement!, {
				yPercent: 100,
				duration: 1,
			});
		},
		{ dependencies: [triggerRef.current] },
	);

	return (
		<div className="fixed right-4 bottom-4 z-10 w-12 h-36 overflow-hidden focus-within:outline-none">
			<div className="relative h-full focus-within:outline-none">
				<Button
					className="absolute bottom-0 left-0 w-full font-clash-display text-xs rounded-none z-10 h-1/3 aspect-square bg-accent hover:bg-accent/80 transition duration-300 uppercase"
					ref={triggerRef}
				>
					<Link href={`/${t("switch")}`}>{t("switch")}</Link>
				</Button>
			</div>
		</div>
	);
}
