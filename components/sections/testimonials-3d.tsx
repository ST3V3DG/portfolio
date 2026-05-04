"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const cards: Testimonials3DCard[] = [
	{
		image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
		alt: "Gori the Gorilla",
		number: "01 / 5",
		name: "Gori",
		role: "Jungle Sage",
		quote: "Strength isn't in the muscles. It's in knowing when to hold back.",
	},
	{
		image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
		alt: "Snap the Croc",
		number: "02 / 5",
		name: "Snap",
		role: "Swamp King",
		quote: "Make moves in silence. Let success make the noise.",
	},
	{
		image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
		alt: "Crowley the Crow",
		number: "03 / 5",
		name: "Crowley",
		role: "Night Watcher",
		quote: "I've seen it all from above. Perspective changes everything.",
	},
	{
		image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
		alt: "Foxy the Fox",
		number: "04 / 5",
		name: "Foxy",
		role: "Forest Trickster",
		quote: "Stay sharp. The forest rewards the clever.",
	},
	{
		image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
		alt: "Slither the Snake",
		number: "05 / 5",
		name: "Slither",
		role: "Desert Whisper",
		quote: "Patience isn't waiting. It's knowing exactly when to strike.",
	},
];

gsap.registerPlugin(ScrollTrigger);

export type Testimonials3DCard = {
	image: string;
	alt?: string;
	number: string;
	name: string;
	role: string;
	quote: string;
};

export function Testimonials3D() {
	const containerRef = useRef<HTMLDivElement>(null);
	const divRefs = useRef<HTMLElement[]>([]);
	const t = useTranslations("Testimonials");

	useGSAP(
		() => {
			const divs = divRefs.current.filter(Boolean);
			if (divs.length === 0) return;

			const triggers: ScrollTrigger[] = [];

			divs.forEach((divEl, index) => {
				const content = divEl.querySelector(".div-3d-content");
				if (!content) return;

				if (index < divs.length - 1) {
					triggers.push(
						ScrollTrigger.create({
							trigger: divEl,
							start: "top top",
							endTrigger: divs[divs.length - 1],
							end: "top top",
							pin: true,
							pinSpacing: false,
						}),
					);

					triggers.push(
						ScrollTrigger.create({
							trigger: divs[index + 1],
							start: "top bottom",
							end: "top top",
							onUpdate: (self) => {
								const progress = self.progress;
								gsap.set(content, {
									opacity: 1 - progress,
									y: `-${25 * progress}%`,
									z: -800 * progress,
									rotationX: 80 * progress,
									transformOrigin: "center center",
								});
							},
						}),
					);
				}
			});

			return () => triggers.forEach((trigger) => trigger.kill());
		},
		{ scope: containerRef, dependencies: [cards] },
	);

	return (
		<section ref={containerRef} className="overflow-x-hidden border-b">
			<div className="flex max-w-7xl px-6 pb-6 mx-auto min-h-screen flex-col items-center justify-center py-8 text-center">
				<h2 className="mb-4 text-5xl font-bold md:text-7xl text-accent">
					{t("title")}
				</h2>
				<p className="max-w-120 mb-8 text-pretty mx-auto">
					{t("description")}
				</p>
			</div>

			<div className="w-full">
				{cards.map((card, index) => (
					<div
						key={index}
						ref={(element) => {
							if (element) divRefs.current[index] = element;
						}}
						className="flex min-h-screen items-center justify-center"
						style={{
							perspective: 1000,
							transformStyle: "preserve-3d",
						}}
					>
						<div className="div-3d-content relative h-[90%] w-full overflow-hidden md:aspect-9/14 md:w-auto origin-center">
							<Image
								src={card.image}
								alt={card.alt ?? card.name}
								fill
								className="object-cover"
								// sizes="(max-width: 768px) 92vw, (max-width: 1024px) 50vw, 500px"
							/>
							<div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 md:p-10">
								<div>
									<span className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
										{card.number}
									</span>
									<h2 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl">
										{card.name}
									</h2>
									<p className="text-sm font-medium tracking-wide text-white/70 md:text-base">
										{card.role}
									</p>
									<div className="my-4 h-0.5 w-10 rounded-full bg-linear-to-r from-accent to-white" />
									<blockquote className="text-xs italic leading-relaxed text-muted-foreground md:text-sm">
										&quot;{card.quote}&quot;
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
