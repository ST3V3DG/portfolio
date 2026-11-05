"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Maximize2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, Flip, useGSAP);

type ProjectCredentials = {
	username: string;
	password: string;
	note?: string;
};

export type CardData = {
	id: number | string;
	image: string;
	name: string;
	alt?: string;
	url?: string;
	keywords: string[];
	description?: string;
	credentials?: ProjectCredentials;
};

type StickyProjectProps = {
	cards: CardData[];
	className?: string;
	containerClassName?: string;
	imageClassName?: string;
};

type ActiveCard = {
	card: CardData;
	index: number;
};

export const StickyProjects = ({
	cards,
	className,
	containerClassName,
	imageClassName,
}: StickyProjectProps) => {
	const t = useTranslations("Projects");
	const container = useRef<HTMLDivElement>(null);
	const imageBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
	const cardImageRefs = useRef<(HTMLImageElement | null)[]>([]);
	const dialogRef = useRef<HTMLDialogElement>(null);
	const dialogImageRef = useRef<HTMLImageElement>(null);
	const detailsRef = useRef<HTMLDivElement>(null);
	const pendingFlipRef = useRef<Flip.FlipState | null>(null);
	const flipTimelineRef = useRef<gsap.core.Timeline | null>(null);
	const phaseRef = useRef<"idle" | "opening" | "open" | "closing">("idle");
	const [activeCard, setActiveCard] = useState<ActiveCard | null>(null);

	const { contextSafe } = useGSAP(
		() => {
			if (
				typeof window !== "undefined" &&
				window.matchMedia("(prefers-reduced-motion: reduce)").matches
			) {
				return;
			}
			const imageBoxElements = imageBoxRefs.current;
			const totalCards = imageBoxElements.length;

			if (!imageBoxElements[0]) return;

			gsap.set(imageBoxElements[0], { y: "0%", scale: 1, rotation: 0 });

			for (let i = 1; i < totalCards; i++) {
				if (!imageBoxElements[i]) continue;
				gsap.set(imageBoxElements[i], {
					y: "100%",
					scale: 1,
					rotation: 0,
				});
			}

			const scrollTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: ".sticky-cards",
					start: "top top",
					end: `+=${window.innerHeight * (totalCards - 1)}`,
					pin: true,
					scrub: 1,
					pinSpacing: true,
					invalidateOnRefresh: true,
				},
			});

			for (let i = 0; i < totalCards - 1; i++) {
				const currentImage = imageBoxElements[i];
				const nextImage = imageBoxElements[i + 1];
				const position = i;
				if (!currentImage || !nextImage) continue;

				scrollTimeline.to(
					currentImage,
					{
						scale: 0.7,
						rotation: 5,
						duration: 1,
						ease: "none",
					},
					position,
				);

				scrollTimeline.to(
					nextImage,
					{
						y: "0%",
						duration: 1,
						ease: "none",
					},
					position,
				);
			}

			let refreshTimeout: ReturnType<typeof setTimeout> | null = null;
			const resizeObserver = new ResizeObserver(() => {
				if (refreshTimeout) clearTimeout(refreshTimeout);
				refreshTimeout = setTimeout(() => {
					ScrollTrigger.refresh();
				}, 150);
			});

			if (container.current) {
				resizeObserver.observe(container.current);
			}

			return () => {
				if (refreshTimeout) clearTimeout(refreshTimeout);
				resizeObserver.disconnect();
				scrollTimeline.kill();
			};
		},
		{ scope: container },
	);

	const openProject = contextSafe((card: CardData, index: number) => {
		if (phaseRef.current !== "idle") return;

		const sourceImage = cardImageRefs.current[index];
		if (!sourceImage) return;

		pendingFlipRef.current = Flip.getState(sourceImage);
		phaseRef.current = "opening";
		setActiveCard({ card, index });
	});

	const closeProject = contextSafe(() => {
		const dialog = dialogRef.current;
		if (!dialog?.open || phaseRef.current === "closing") return;

		const sourceImage = activeCard
			? cardImageRefs.current[activeCard.index]
			: null;
		const modalImage = dialogImageRef.current;
		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		phaseRef.current = "closing";
		flipTimelineRef.current?.kill();
		flipTimelineRef.current = null;

		if (reduceMotion || !sourceImage || !modalImage) {
			dialog.close();
			return;
		}

		if (detailsRef.current) {
			gsap.to(detailsRef.current, {
				opacity: 0,
				y: 10,
				duration: 0.2,
				ease: "power2.in",
			});
		}

		const destinationState = Flip.getState(sourceImage);

		flipTimelineRef.current = Flip.to(destinationState, {
			targets: modalImage,
			duration: 0.7,
			ease: "power4.in",
			absolute: true,
			onComplete: () => {
				dialog.close();
			},
		});
	});

	// The dialog content is rendered first, then the image is flipped from the
	// card into the modal on the next layout pass.
	useGSAP(
		() => {
			const dialog = dialogRef.current;
			const modalImage = dialogImageRef.current;
			const state = pendingFlipRef.current;

			if (!activeCard || !dialog || !modalImage || !state) return;

			pendingFlipRef.current = null;

			if (!dialog.open) {
				dialog.showModal();
			}

			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				phaseRef.current = "open";
				return;
			}

			flipTimelineRef.current = Flip.from(state, {
				targets: modalImage,
				duration: 0.85,
				ease: "power4.inOut",
				absolute: true,
				onComplete: () => {
					phaseRef.current = "open";
					flipTimelineRef.current = null;
				},
			});

			if (detailsRef.current) {
				gsap.fromTo(
					detailsRef.current.querySelectorAll("[data-dialog-reveal]"),
					{ opacity: 0, y: 18 },
					{
						opacity: 1,
						y: 0,
						duration: 0.5,
						stagger: 0.06,
						ease: "power2.out",
						delay: 0.18,
					},
				);
			}
		},
		{ dependencies: [activeCard], scope: container },
	);

	const handleBackdropClick = (
		event: React.MouseEvent<HTMLDialogElement>,
	) => {
		const dialog = dialogRef.current;
		if (!dialog || event.target !== dialog) return;

		const rect = dialog.getBoundingClientRect();
		const isInsideDialog =
			event.clientX >= rect.left &&
			event.clientX <= rect.right &&
			event.clientY >= rect.top &&
			event.clientY <= rect.bottom;

		if (!isInsideDialog) {
			closeProject();
		}
	};

	const handleDialogClose = () => {
		phaseRef.current = "idle";
		flipTimelineRef.current = null;
		setActiveCard(null);
	};

	const projectUrl = activeCard?.card.url;
	const hasProjectUrl = Boolean(projectUrl && projectUrl !== "#");

	return (
		<div className={cn("relative size-full", className)} ref={container}>
			<div className="sticky-cards relative flex w-full h-screen items-center justify-center overflow-hidden">
				<div
					className={cn(
						"relative size-full overflow-hidden",
						containerClassName,
					)}
				>
					{cards.map((card, index) => (
						<div
							className="group absolute size-full isolate"
							key={card.id}
							ref={(element) => {
								imageBoxRefs.current[index] = element;
							}}
						>
							<Image
								alt={card.alt || ""}
								className={cn(
									"size-full object-cover",
									imageClassName,
								)}
								data-flip-id={`project-image-${card.id}`}
								height={1000}
								ref={(element) => {
									cardImageRefs.current[index] = element;
								}}
								sizes="100vw"
								src={card.image}
								width={1500}
							/>

							<div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-120% pointer-events-none"></div>

							<span className="pointer-events-none absolute right-0 top-0 flex items-center gap-2 border bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-black opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
								{t("viewDetails")}
								<Maximize2 className="size-4" />
							</span>

							<div className="absolute bottom-0 left-0 right-0 text-accent p-6 flex justify-between items-start">
								<h3 className="flex items-center gap-1">
									<span>{card.name}</span>
									<Maximize2 className="size-4 stroke-4" />
								</h3>
								<ul className="flex flex-col justify-between items-end font-clash-display">
									{card.keywords.map((keyword, index) => {
										return <li key={index}>{keyword}</li>;
									})}
								</ul>
							</div>

							<button
								aria-haspopup="dialog"
								aria-label={t("openProject", {
									name: card.name,
								})}
								className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
								onClick={() => openProject(card, index)}
								type="button"
							/>
						</div>
					))}
				</div>
			</div>

			<dialog
				aria-labelledby="project-dialog-title"
				className="project-dialog m-0 h-dvh max-h-none w-full max-w-none overflow-visible border-0 bg-background p-0 text-foreground 2xl:m-auto 2xl:w-1/2 2xl:aspect-video 2xl:h-auto"
				closedby="any"
				onCancel={(event) => {
					event.preventDefault();
					closeProject();
				}}
				onClick={handleBackdropClick}
				onClose={handleDialogClose}
				ref={dialogRef}
			>
				{activeCard && (
					<>
						<div className="grid size-full grid-cols-1 grid-rows-[minmax(0,42dvh)_minmax(0,1fr)] lg:grid-cols-2 lg:grid-rows-1">
							<div
								className="dialog-scroll order-2 flex min-h-0 flex-col justify-between gap-10 overflow-y-auto overscroll-contain bg-background px-6 py-10 sm:px-8 lg:order-1 lg:px-12 lg:py-16 xl:px-16"
								ref={detailsRef}
							>
								<div className="flex flex-col gap-8">
									<div className="flex flex-col gap-4">
										<p
											className="text-xs uppercase tracking-[0.3em] text-accent"
											data-dialog-reveal
										>
											{t("projectLabel", {
												index: activeCard.index + 1,
											})}
										</p>
										<h2
											className="text-balance text-4xl leading-none md:text-5xl xl:text-6xl"
											data-dialog-reveal
											id="project-dialog-title"
										>
											{activeCard.card.name}
										</h2>
									</div>

									<div
										className="flex flex-col gap-3"
										data-dialog-reveal
									>
										<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
											{t("keywordsLabel")}
										</p>
										<ul className="flex flex-wrap gap-2">
											{activeCard.card.keywords.map(
												(keyword) => (
													<li
														className="border border-border bg-card/20 px-3 py-1 text-sm text-foreground/90"
														key={keyword}
													>
														{keyword}
													</li>
												),
											)}
										</ul>
									</div>

									{activeCard.card.description && (
										<div
											className="flex flex-col gap-3"
											data-dialog-reveal
										>
											<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
												{t("descriptionLabel")}
											</p>
											<p className="max-w-prose text-pretty text-lg leading-relaxed text-muted-foreground">
												{activeCard.card.description}
											</p>
										</div>
									)}

									{activeCard.card.credentials && (
										<div
											className="rounded-xl border border-border bg-card/20 p-4"
											data-dialog-reveal
										>
											<p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
												{t("demoCredentials")}
											</p>
											<dl className="grid gap-3 text-sm sm:grid-cols-2">
												<div className="flex flex-col gap-1">
													<dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
														{t("username")}
													</dt>
													<dd className="font-mono text-foreground">
														{
															activeCard.card
																.credentials
																.username
														}
													</dd>
												</div>
												<div className="flex flex-col gap-1">
													<dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
														{t("password")}
													</dt>
													<dd className="font-mono text-foreground">
														{
															activeCard.card
																.credentials
																.password
														}
													</dd>
												</div>
											</dl>
											{activeCard.card.credentials
												.note && (
												<p className="mt-3 text-sm text-muted-foreground">
													{
														activeCard.card
															.credentials.note
													}
												</p>
											)}
										</div>
									)}
								</div>

								<div
									className="border-t border-border pt-6"
									data-dialog-reveal
								>
									{hasProjectUrl ? (
										<Button
											asChild
											className="h-12 w-full rounded-none bg-accent font-bold text-background transition-colors hover:bg-accent/80 sm:w-auto"
											size="lg"
										>
											<Link
												href={projectUrl ?? "#"}
												rel="noopener noreferrer"
												target="_blank"
											>
												{t("visit")}
												<ExternalLink className="size-4" />
											</Link>
										</Button>
									) : (
										<Button
											className="h-12 w-full rounded-none bg-accent font-bold text-background sm:w-auto"
											disabled
											size="lg"
										>
											{t("visit")}
											<ExternalLink className="size-4" />
										</Button>
									)}
								</div>
							</div>

							<div className="relative order-1 min-h-0 bg-muted/20 lg:order-2">
								<Image
									alt={activeCard.card.alt || ""}
									className="size-full object-cover"
									data-flip-id={`project-image-${activeCard.card.id}`}
									height={1000}
									ref={dialogImageRef}
									sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 50vw, 100vw"
									src={activeCard.card.image}
									width={1500}
								/>
								<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent lg:bg-linear-to-r" />
							</div>
						</div>

						<Button
							aria-label={t("close")}
							className="absolute right-4 top-4 z-20 md:right-6 md:top-6 rounded-none size-11"
							onClick={closeProject}
							type="button"
							variant="secondary"
						>
							<X className="size-4" />
						</Button>
					</>
				)}
			</dialog>
		</div>
	);
};
