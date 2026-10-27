"use client"; 

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function FrequentlyAskQuestion() {
	const t = useTranslations("FAQ");
	
  useGSAP(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    ScrollTrigger.create({
      trigger: "#contact",
      pin: "#faq",
      start: "top bottom",
      end: "bottom bottom",
      pinSpacing: false,
      scrub: true,
    });
  });

	const faqs = [
		{
			id: "item-1",
			title: t("item1.question"),
			content: t("item1.answer"),
		},
		{
			id: "item-2",
			title: t("item2.question"),
			content: t("item2.answer"),
		},
		{
			id: "item-3",
			title: t("item3.question"),
			content: t("item3.answer"),
		},
		{
			id: "item-4",
			title: t("item4.question"),
			content: t("item4.answer"),
		},
		{
			id: "item-5",
			title: t("item5.question"),
			content: t("item5.answer"),
		},
		{
			id: "item-6",
			title: t("item6.question"),
			content: t("item6.answer"),
		},
	];

	return (
		<section id="faq" className="-z-1">
			<div className="grid md:h-screen overflow-hidden w-full grid-cols-1 md:grid-cols-2 gap-16 focus-within:outline-none max-w-7xl px-6 mx-auto">
				<div className="px-4 focus-within:outline-none place-content-center">
					<div className="space-y-5 focus-within:outline-none">
						<h2 className="text-balance font-bold md:text-7xl text-5xl lg:font-black text-accent">
							{t("title")}
						</h2>
						<p className="text-muted-foreground text-2xl">
							{t("description")}
						</p>
						<p className="text-muted-foreground focus-within:outline-none text-2xl">
							{"Can't find what you're looking for? "}
							{t("paragraph")}{" "}
							<Link
								className="text-primary hover:underline"
								href="#contact"
							>
								{t("contactMe")}
							</Link>
						</p>
					</div>
				</div>
				<div className="relative place-content-center focus-within:outline-none">
					{/* vertical guide line */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-y-0 left-3 h-full w-px bg-border focus-within:outline-none"
					/>

					<div
            className="focus-within:outline-none"
            data-slot="accordion"
						data-orientation="vertical"
					>
						{faqs.map((item) => (
              <details
                name="faq-item"
                className="group relative border-b pl-5 first:border-t last:border-b focus-within:outline-none"
								data-orientation="vertical"
								key={item.id}
							>
								{/*  plus */}
								<Plus
									aria-hidden="true"
									className="bottom-[-5.5px] -translate-x-1/2 pointer-events-none absolute left-[12.5px] size-2.5 text-muted-foreground group-last:hidden"
								/>

								<summary  data-slot="accordion-trigger" className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 text-left font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 p-4 text-[16px] leading-6 hover:no-underline focus:ring-0">
                  {item.title}
									<ChevronDown className="size-4 lucide-chevron-down" />
								</summary>

                <p data-orientation="vertical" data-slot="accordion-content" className="px-4 pb-4 overflow-hidden text-sm text-muted-foreground" style={{ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)"}}>
									{item.content}
								</p>
							</details>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
