"use client";

import {
	Binary,
	CodeXml,
	Container,
	SquareTerminal,
	Webhook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type React from "react";
import { GithubIcon, LinkedinIcon } from "@/components/sections/contact";

type Footer = {
	section?: {
		title: string;
		links: Array<{ label: string; href: string; icon: React.ReactElement }>;
	};
	description?: string;
	socialLinks?: Array<{
		icon: React.ReactElement;
		href: string;
		label: string;
	}>;
	copyright?: string;
	legalLinks?: Array<{
		label: string;
		href: string;
	}>;
};

export default function Footer() {
	const tf = useTranslations("Footer");
	const tn = useTranslations("Navigation");

	const description = tf("description");
	const copyright = tf("copyright", { date: new Date().getFullYear() });

	const section: Footer["section"] = {
		title: tf("section.title"),
		links: [
			{
				label: tn("home"),
				href: "#hero",
				icon: (
					<Binary
						className="size-28 opacity-50 -translate-x-1/4 group-hover:translate-x-0 translate-y-1/8 transition-transform duration-300"
						strokeLinecap="inherit"
					/>
				),
			},
			{
				label: tn("about"),
				href: "#about",
				icon: (
					<CodeXml
						className="size-28 opacity-50 -translate-x-1/4 group-hover:translate-x-0 translate-y-1/8 transition-transform duration-300"
						strokeLinecap="inherit"
					/>
				),
			},
			{
				label: tn("projects"),
				href: "#projects",
				icon: (
					<Container
						className="size-28 opacity-50 -translate-x-1/4 group-hover:translate-x-0 translate-y-1/8 transition-transform duration-300"
						strokeLinecap="inherit"
					/>
				),
			},
			{
				label: tn("testimonials"),
				href: "#testimonials",
				icon: (
					<SquareTerminal
						className="size-28 opacity-50 -translate-x-1/4 group-hover:translate-x-0 translate-y-1/8 transition-transform duration-300"
						strokeLinecap="inherit"
					/>
				),
			},
			{
				label: tn("contact"),
				href: "#contact",
				icon: (
					<Webhook
						className="size-28 opacity-50 -translate-x-1/4 group-hover:translate-x-0 translate-y-1/8 transition-transform duration-300"
						strokeLinecap="inherit"
					/>
				),
			},
		],
	};

	const socialLinks: Footer["socialLinks"] = [
		{
			icon: <GithubIcon className="size-5" />,
			href: "https://github.com/ST3V3DG",
			label: "Github",
		},
		{
			icon: <LinkedinIcon className="size-5" />,
			href: "https://www.linkedin.com/in/steve-diego-takoudjou-53332926b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAw%2B0rmZJQM2%2Bpe9jCQQBug%3D%3D",
			label: "LinkedIn",
		},
	];

	const legalLinks: Footer["legalLinks"] = [
		// { label: tf("legal.privacy"), href: "#" },
		// { label: tf("legal.terms"), href: "#" },
	];

	return (
		<footer className="bg-background pt-32 lg:sticky lg:bottom-0 lg:left-0 lg:right-0 focus-within:outline-none">
			<div className="flex flex-col justify-center items-center max-w-7xl px-6 mx-auto focus-within:outline-none">
				<div className="grid grid-cols-1 lg:grid-cols-5 w-full justify-between gap-10 lg:items-start lg:text-left focus-within:outline-none">
					<div className="flex flex-col justify-between gap-6 lg:items-start focus-within:outline-none lg:col-span-2">
						{/* Logo */}
						<div className="flex items-center gap-2 lg:justify-start focus-within:outline-none">
							<Link aria-label="home" href="/">
								<Image
									src="/svgs/S.D.svg"
									alt="logo"
									height={50}
									width={100}
								/>
							</Link>
						</div>
						<p className="max-w-[70%] text-lg text-muted-foreground">
							{description}
						</p>
						<ul className="flex items-center space-x-6 text-muted-foreground focus-within:outline-none">
							{socialLinks?.map((social, idx) => (
								<li
									key={idx}
									className="hover:text-accent transition duration-300"
								>
									<Link
										href={social.href}
										aria-label={social.label}
									>
										{social.icon}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="focus-within:outline-none lg:col-span-3">
						<div className="ml-auto text-end focus-within:outline-none">
							<h3 className="mb-4 font-bold text-2xl">
								{section.title}
							</h3>
							<ul className="text-muted-foreground lg:text-7xl text-3xl focus-within:outline-none">
								{section.links.map((link, linkIdx) => (
									<li
										key={linkIdx}
										className="hover:text-accent transition duration-300"
									>
										<Link
											aria-label={link.label}
											className="flex items-center gap-4 h-20 justify-between overflow-hidden group"
											href={link.href}
										>
											<div className="overflow-hidden">
												{link.icon}
											</div>
											<span>{link.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-lg font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
					<p className="order-2 lg:order-1">{copyright}</p>
					<ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
						{legalLinks?.map((link, idx) => (
							<li
								key={idx}
								className="hover:text-accent transition duration-300"
							>
								<Link aria-label={link.label} href={link.href}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
