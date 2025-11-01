"use client";
import Link from "next/link";
import { useState } from "react";
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavBody,
	Navbar,
	NavbarButton,
	NavbarLogo,
	NavItems,
} from "@/components/ui/resizable-navbar";

export function Header() {
	const navItems = [
		{
			name: "About",
			link: "#about",
		},
		{
			name: "Projects",
			link: "#projects",
		},
		{
			name: "Testimonial",
			link: "#testimonials",
		},
		{
			name: "FAQ",
			link: "#faq",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="fixed z-50 w-full">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<NavbarButton className="rounded-full" href="#contact">
						Contact
					</NavbarButton>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
						{navItems.map((item, index) => (
							<Link
								className="relative text-neutral-600 dark:text-neutral-300"
								href={item.link}
								key={`mobile-link-${index}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<span className="block">{item.name}</span>
							</Link>
						))}
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
			{/* Navbar */}
		</header>
	);
}
