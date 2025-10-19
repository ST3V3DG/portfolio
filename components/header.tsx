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
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="fixed w-full z-50">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<NavbarButton href="#contact" className="rounded-full">
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
								key={`mobile-link-${index}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
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
