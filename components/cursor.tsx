"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Cursor() {
	gsap.registerPlugin(useGSAP);

	const cursorRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		document.addEventListener("mousemove", (event) => {
			if (!cursorRef.current) return;

			gsap.to(cursorRef.current, {
				opacity: 1,
				x: event.clientX,
				y: event.clientY,
				duration: 0.3,
				ease: "power4.out",
			});
		});

		document.addEventListener("mouseout", () => {
			if (!cursorRef.current) return;

			gsap.to(cursorRef.current, {
				opacity: 0,
				duration: 0.3,
				ease: "power4.out",
			});
		});

		document.querySelectorAll("a, button").forEach((el) => {
			el.addEventListener("mouseenter", () => {
				gsap.to(cursorRef.current, {
					scale: 2,
					duration: 0.3,
					ease: "power4.out",
				});
			});
			el.addEventListener("mouseleave", () => {
				gsap.to(cursorRef.current, {
					scale: 1,
					duration: 0.3,
					ease: "power4.out",
				});
			});
		});
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
