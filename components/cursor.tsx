"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Cursor() {
	const cursorRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			return;
		}

		if (!cursorRef.current) return;

		const xTo = gsap.quickTo(cursorRef.current, "x", {
			duration: 0.3,
			ease: "power4.out",
		});
		const yTo = gsap.quickTo(cursorRef.current, "y", {
			duration: 0.3,
			ease: "power4.out",
		});

		const handleMouseMove = (event: MouseEvent) => {
			if (!cursorRef.current) return;
			gsap.to(cursorRef.current, {
				opacity: 1,
				duration: 0.3,
				ease: "power4.out",
				overwrite: "auto",
			});
			xTo(event.clientX);
			yTo(event.clientY);
		};

		const handleMouseOut = () => {
			if (!cursorRef.current) return;
			gsap.to(cursorRef.current, {
				opacity: 0,
				duration: 0.3,
				ease: "power4.out",
			});
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseout", handleMouseOut);

		const hoverTargets = document.querySelectorAll("a, button");
		const handleEnter = () => {
			if (!cursorRef.current) return;
			gsap.to(cursorRef.current, {
				scale: 2,
				duration: 0.3,
				ease: "power4.out",
			});
		};
		const handleLeave = () => {
			if (!cursorRef.current) return;
			gsap.to(cursorRef.current, {
				scale: 1,
				duration: 0.3,
				ease: "power4.out",
			});
		};
		hoverTargets.forEach((el) => {
			el.addEventListener("mouseenter", handleEnter);
			el.addEventListener("mouseleave", handleLeave);
		});

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseout", handleMouseOut);
			hoverTargets.forEach((el) => {
				el.removeEventListener("mouseenter", handleEnter);
				el.removeEventListener("mouseleave", handleLeave);
			});
		};
	});
	return (
		<div
			id="cursor"
			ref={cursorRef}
			aria-hidden="true"
			className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full mix-blend-difference pointer-events-none z-9999 bg-primary opacity-0 hidden md:block"
		></div>
	);
}
