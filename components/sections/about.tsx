"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Binary, CodeXml, SquareTerminal, Webhook } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function About() {
	const headingBoxRef = useRef<HTMLDivElement>(null);
	const t = useTranslations("About");
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline();
		const matchMedia = gsap.matchMedia();

		matchMedia.add("(min-width: 64rem)", () => {
			tl.to("#hero-image-box", {
				top: "150%",
				left: "50%",
				rotate: 10,
				xPercent: -50,
				yPercent: -50,
				scrollTrigger: {
					trigger: "#about",
					start: "top bottom",
					end: "bottom bottom",
					invalidateOnRefresh: true,
					scrub: 1,
					onUpdate: (self) => {
						if (self.progress > 0.1) {
							document
								.getElementById("hero-image-box")
								?.classList.add("z-10");
						} else {
							document
								.getElementById("hero-image-box")
								?.classList.remove("z-10");
						}
					},
					onLeave: () => {
						document
							.getElementById("hero-image-box")
							?.classList.remove("lg:block");
						document
							.querySelector("[alt='About image']")
							?.classList.remove("hidden");
					},
					onEnterBack: () => {
						document
							.getElementById("hero-image-box")
							?.classList.add("lg:block");
						document
							.querySelector("[alt='About image']")
							?.classList.add("hidden");
					},
				},
			});
		});

		const aboutCardsAndHeadingTimeline = gsap.timeline();

		matchMedia.add("(min-width: 48rem)", () => {
			aboutCardsAndHeadingTimeline
				.to(headingBoxRef.current, {
					opacity: 1,
				})
				.to(headingBoxRef.current, {
				  delay: 2,
					opacity: 0,
				})
				.to(".about-card", {
					y: -10,
					opacity: 1,
					stagger: 0.5,
				});

			ScrollTrigger.create({
				animation: aboutCardsAndHeadingTimeline,
				trigger: "#about",
				pin: true,
				start: "top top",
				end: "+=200%",
				scrub: true,
			});
		});

		matchMedia.add("(max-width: 48rem)", () => {
			const aboutCards = document.querySelectorAll(".about-card");

			aboutCards.forEach((aboutCard) => {
				gsap.to(aboutCard, {
					opacity: 1,
					scrollTrigger: {
						trigger: aboutCard,
						start: "top bottom",
						end: "bottom bottom",
						scrub: 1,
					},
				});
			});
		});
	});

	const abouts = [
		{
			title: t("item1.title"),
			description: t("item1.description"),
			icon: (
				<Webhook
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
		{
			title: t("item2.title"),
			className: "lg:col-start-3",
			description: t("item2.description"),
			icon: (
				<Binary
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
		{
			title: t("item3.title"),
			className: "lg:col-start-1",
			description: t("item3.description"),
			icon: (
				<SquareTerminal
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
		{
			title: t("item4.title"),
			className: "lg:col-start-3",
			description: t("item4.description"),
			icon: (
				<CodeXml
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
	];

	return (
		<section id="about">
			<div className="py-32 flex flex-col justify-center items-center gap-16 max-w-7xl px-6 mx-auto relative min-h-screen">
				<div className="lg:grid hidden absolute bottom-0 w-full h-[calc(100%-7rem)] place-content-center grid-cols-3 grid-rows-2">
					{abouts.map((item, index) => (
						<div
							className={cn(
								"grid grid-cols-3 gap-2 overflow-hidden transition-all duration-300 origin-left group about-card opacity-0",
								item.className,
							)}
							key={index}
						>
							<div className="overflow-hidden md:border-r shrink-0">
								<p className="text-8xl font-bold text-accent font-clash-display writing-mode-vertical-lr md:scale-[-1] text-center">
									{item.title}
								</p>
							</div>
							<div className="col-span-2 flex flex-col justify-between overflow-hidden">
								<p>{item.description}</p>
								{item.icon}
							</div>
						</div>
					))}
				</div>

				<div
					className="flex flex-col gap-2 items-center justify-center text-center lg:opacity-0 md:max-lg:absolute md:max-lg:inset-0 mb-12 md:mb-0"
					ref={headingBoxRef}
				>
					<h2 className="md:text-7xl lg:text-9xl text-5xl text-accent mb-4">
						{t("title")}
					</h2>
					<p className="max-w-120 text-pretty mx-auto mix-blend-exclusion text-2xl">
						{t("description")}
					</p>
				</div>

				<div className="lg:flex hidden absolute size-full top-0 left-0 justify-center -z-1">
					<div className="size-full relative">
						<div
							className="w-1/3 aspect-3/4 bg-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
							id="background-image-box"
						>
							<Image
								alt="About image"
								className="hover:scale-110 transition duration-300 size-full object-cover rotate-10 hidden"
								height={1500}
								priority
								src="/images/i.png"
								width={500}
							/>
						</div>
					</div>
				</div>

				<div className="grid lg:hidden grid-cols-1 md:grid-cols-2 justify-center max-md:gap-16 max-md:[&>div:nth-child(even)>div:first-child]:order-2 max-md:[&>div:nth-child(odd)>div:first-child]:scale-[-1] max-md:[&>div:nth-child(odd)>div:last-child>p]:text-end max-md:[&>div:nth-child(even)>div:last-child]:order-1 max-md:[&>div>div:nth-child(1)]:border-l max-md:[&>div:nth-child(even)>div:last-child>svg]:self-start max-md:[&>div:nth-child(even)>div:last-child>svg]:-translate-x-1/3 md:absolute md:w-full md:h-[calc(100%-14rem)] md:bottom-0">
					{abouts.map((item, index) => (
						<div
							className="grid grid-cols-3 gap-2 h-96 overflow-hidden transition-all duration-300 origin-left group about-card opacity-0 translate-y-12.5"
							key={index}
						>
							<div className="overflow-hidden md:border-r shrink-0">
								<p className="text-8xl font-bold text-accent font-clash-display writing-mode-vertical-lr md:scale-[-1] text-center">
									{item.title}
								</p>
							</div>
							<div className="col-span-2 flex flex-col justify-between overflow-hidden">
								<p className="md:opacity-50 group-hover:opacity-100 transition-all duration-300 min-w-52">
									{item.description}
								</p>
								{item.icon}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
