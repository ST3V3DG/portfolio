"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Link from "next/link";
import SplitText from "gsap/SplitText";


export default function Header() {
	gsap.registerPlugin(SplitText);

	const t = useTranslations('Navigation');

	const headerLinks = [
		{
			label: t("home"),
			href: "#hero",
		},
		{
			label: t("about"),
			href: "#about",
		},
		{
			label: t("projects"),
			href: "#projects",
		},
		{
			label: t("testimonials"),
			href: "#testimonials",
		},
		{
			label: t("contact"),
			href: "#contact",
		},
	];

	const [open, setOpen] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(null);

	useGSAP(() => {
		gsap.set(mobileMenuRef.current, {
			top: "-100%",
		});

		// const splitText = new SplitText(mobileMenuRef.current?.querySelectorAll("li") as unknown as HTMLElement[], {
		// 	type: "chars",
		// 	autoSplit: true,
		// });

		tl.current = gsap.timeline({
			paused: true,
		});

		tl.current.to(mobileMenuRef.current, {
			top: 0,
			duration: 1,
			ease: "power4.inOut",
		}).from(mobileMenuRef.current?.querySelectorAll("li") as unknown as HTMLElement[], {
			yPercent: 100,
			opacity: 0,
			duration: 1,
			ease: "power4.inOut",
			stagger: 0.1,
		}, "-=0.5");
	}, { dependencies: [mobileMenuRef] });

	const { contextSafe } = useGSAP({ dependencies: [tl, open], scope: headerRef, revertOnUpdate: true });

	const animateMobileMenu = contextSafe(() => {
		if (!open) {
			tl.current?.play();
			setOpen(!open);
		} else {
			tl.current?.reverse();
			setOpen(!open);
		}
	});
	return (
		<header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-background font-clash-display border-b focus-within:outline-none **:focus-within:outline-none">
			<div className="size-full max-w-7xl px-6 mx-auto flex justify-between bg-background">
				<Link aria-label="home" href="/" className="text-xl font-bold py-6 w-26">

				</Link>
				<nav className="hidden md:block">
					<ul className={`grid grid-cols-5 gap-4 text-center h-full`}>
						{headerLinks.map((link, index) => (
							<li className={`flex justify-center items-center relative before:absolute before:bottom-1.5 before:left-0 before:h-1 before:bg-accent before:w-full before:scale-x-0 hover:before:scale-x-90 before:content-[''] before:transition before:duration-300 ${link.label === "Contact" ? "bg-accent text-background hover:text-primary hover:bg-transparent transition duration-300" : ""}`} key={index}>
								<Link aria-label={link.label} className="py-4 px-2 w-full" href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>
				<button className="md:hidden" type="button" onClick={() => animateMobileMenu()} aria-label="open">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu size-8 text-foreground/50 relative" aria-hidden="true"><path className={`transition duration-300 origin-center ${open ? "-rotate-45 absolute top-1/2 left-1/2 translate-x-1.25 translate-y-1.25" : "rotate-0"}`} d="M4 5h16"></path><path className={`transition duration-300 ${open ? "opacity-0" : "opacity-100"}`} d="M4 12h16"></path><path className={`transition duration-300 origin-center ${open ? "rotate-45 absolute top-1/2 left-1/2 translate-x-1.25 -translate-y-1.25" : "rotate-0"}`} d="M4 19h16"></path></svg>
				</button>
			</div>
			<div ref={mobileMenuRef}
				className="fixed md:hidden left-0 right-0 h-dvh -z-1 bg-background/90 flex flex-col gap-16 transition duration-300 px-6 focus-within:outline-none"
			>
				<nav className="h-full">
					<ul className="flex flex-col gap-2 p-2 *:p-2 *:border-b *:border-accent h-[calc(100%-4rem)] justify-center text-5xl text-primary">
						{headerLinks.map((link, index) => (
							<li key={index}>
								<Link aria-label={link.label} href={link.href} onClick={() => setOpen(!open)}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
