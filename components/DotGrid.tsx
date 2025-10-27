"use client";
import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TypingText } from "@/components/ui/typing-text";
import HeroImage from "./hero-image";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import AvatarGroup from "./avatar-group";

gsap.registerPlugin(InertiaPlugin);

const throttle = (func: (...args: any[]) => void, limit: number) => {
	let lastCall = 0;
	return function (this: any, ...args: any[]) {
		const now = performance.now();
		if (now - lastCall >= limit) {
			lastCall = now;
			func.apply(this, args);
		}
	};
};

type Dot = {
	cx: number;
	cy: number;
	xOffset: number;
	yOffset: number;
	_inertiaApplied: boolean;
};

export type DotGridProps = {
	dotSize?: number;
	gap?: number;
	baseColor?: string;
	activeColor?: string;
	proximity?: number;
	speedTrigger?: number;
	shockRadius?: number;
	shockStrength?: number;
	maxSpeed?: number;
	resistance?: number;
	returnDuration?: number;
	className?: string;
	style?: React.CSSProperties;
};

function hexToRgb(hex: string) {
	const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
	if (!m) return { r: 0, g: 0, b: 0 };
	return {
		r: parseInt(m[1], 16),
		g: parseInt(m[2], 16),
		b: parseInt(m[3], 16),
	};
}

const DotGrid: React.FC<DotGridProps> = ({
	dotSize = 16,
	gap = 32,
	baseColor = "#5227FF",
	activeColor = "#5227FF",
	proximity = 150,
	speedTrigger = 100,
	shockRadius = 250,
	shockStrength = 5,
	maxSpeed = 5000,
	resistance = 750,
	returnDuration = 1.5,
	className = "",
	style,
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const dotsRef = useRef<Dot[]>([]);
	const pointerRef = useRef({
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		speed: 0,
		lastTime: 0,
		lastX: 0,
		lastY: 0,
	});

	const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
	const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

	const circlePath = useMemo(() => {
		if (typeof window === "undefined" || !window.Path2D) return null;

		const p = new Path2D();
		p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
		return p;
	}, [dotSize]);

	const buildGrid = useCallback(() => {
		const wrap = wrapperRef.current;
		const canvas = canvasRef.current;
		if (!wrap || !canvas) return;

		const { width, height } = wrap.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;

		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		const ctx = canvas.getContext("2d");
		if (ctx) ctx.scale(dpr, dpr);

		const cols = Math.floor((width + gap) / (dotSize + gap));
		const rows = Math.floor((height + gap) / (dotSize + gap));
		const cell = dotSize + gap;

		const gridW = cell * cols - gap;
		const gridH = cell * rows - gap;

		const extraX = width - gridW;
		const extraY = height - gridH;

		const startX = extraX / 2 + dotSize / 2;
		const startY = extraY / 2 + dotSize / 2;

		const dots: Dot[] = [];
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const cx = startX + x * cell;
				const cy = startY + y * cell;
				dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
			}
		}
		dotsRef.current = dots;
	}, [dotSize, gap]);

	useEffect(() => {
		if (!circlePath) return;

		let rafId: number;
		const proxSq = proximity * proximity;

		const draw = () => {
			const canvas = canvasRef.current;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const { x: px, y: py } = pointerRef.current;

			for (const dot of dotsRef.current) {
				const ox = dot.cx + dot.xOffset;
				const oy = dot.cy + dot.yOffset;
				const dx = dot.cx - px;
				const dy = dot.cy - py;
				const dsq = dx * dx + dy * dy;

				let style = baseColor;
				if (dsq <= proxSq) {
					const dist = Math.sqrt(dsq);
					const t = 1 - dist / proximity;
					const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
					const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
					const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
					style = `rgb(${r},${g},${b})`;
				}

				ctx.save();
				ctx.translate(ox, oy);
				ctx.fillStyle = style;
				ctx.fill(circlePath);
				ctx.restore();
			}

			rafId = requestAnimationFrame(draw);
		};

		draw();
		return () => cancelAnimationFrame(rafId);
	}, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

	useEffect(() => {
		buildGrid();
		let ro: ResizeObserver | null = null;
		if ("ResizeObserver" in window) {
			ro = new ResizeObserver(buildGrid);
			wrapperRef.current && ro.observe(wrapperRef.current);
		} else {
			(window as Window).addEventListener("resize", buildGrid);
		}
		return () => {
			if (ro) ro.disconnect();
			else window.removeEventListener("resize", buildGrid);
		};
	}, [buildGrid]);

	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			const now = performance.now();
			const pr = pointerRef.current;
			const dt = pr.lastTime ? now - pr.lastTime : 16;
			const dx = e.clientX - pr.lastX;
			const dy = e.clientY - pr.lastY;
			let vx = (dx / dt) * 1000;
			let vy = (dy / dt) * 1000;
			let speed = Math.hypot(vx, vy);
			if (speed > maxSpeed) {
				const scale = maxSpeed / speed;
				vx *= scale;
				vy *= scale;
				speed = maxSpeed;
			}
			pr.lastTime = now;
			pr.lastX = e.clientX;
			pr.lastY = e.clientY;
			pr.vx = vx;
			pr.vy = vy;
			pr.speed = speed;

			const rect = canvasRef.current!.getBoundingClientRect();
			pr.x = e.clientX - rect.left;
			pr.y = e.clientY - rect.top;

			for (const dot of dotsRef.current) {
				const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
				if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
					dot._inertiaApplied = true;
					gsap.killTweensOf(dot);
					const pushX = dot.cx - pr.x + vx * 0.005;
					const pushY = dot.cy - pr.y + vy * 0.005;
					gsap.to(dot, {
						inertia: { xOffset: pushX, yOffset: pushY, resistance },
						onComplete: () => {
							gsap.to(dot, {
								xOffset: 0,
								yOffset: 0,
								duration: returnDuration,
								ease: "elastic.out(1,0.75)",
							});
							dot._inertiaApplied = false;
						},
					});
				}
			}
		};

		const onClick = (event: MouseEvent) => {
			const rect = canvasRef.current!.getBoundingClientRect();
			const cx = event.clientX - rect.left;
			const cy = event.clientY - rect.top;
			for (const dot of dotsRef.current) {
				const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
				if (dist < shockRadius && !dot._inertiaApplied) {
					dot._inertiaApplied = true;
					gsap.killTweensOf(dot);
					const falloff = Math.max(0, 1 - dist / shockRadius);
					const pushX = (dot.cx - cx) * shockStrength * falloff;
					const pushY = (dot.cy - cy) * shockStrength * falloff;
					gsap.to(dot, {
						inertia: { xOffset: pushX, yOffset: pushY, resistance },
						onComplete: () => {
							gsap.to(dot, {
								xOffset: 0,
								yOffset: 0,
								duration: returnDuration,
								ease: "elastic.out(1,0.75)",
							});
							dot._inertiaApplied = false;
						},
					});
				}
			}
		};

		const throttledMove = throttle(onMove, 50);
		window.addEventListener("mousemove", throttledMove, { passive: true });
		window.addEventListener("click", onClick);

		return () => {
			window.removeEventListener("mousemove", throttledMove);
			window.removeEventListener("click", onClick);
		};
	}, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

	const transitionVariants = {
		item: {
			hidden: {
				opacity: 0,
				filter: "blur(12px)",
				y: 12,
			},
			visible: {
				opacity: 1,
				filter: "blur(0px)",
				y: 0,
				transition: {
					type: "spring",
					bounce: 0.3,
					duration: 1.5,
				},
			},
		},
	} satisfies { item: Variants };

	return (
		<div className={cn("flex items-center justify-center size-full relative", className)} style={style}>
			<div ref={wrapperRef} className="size-full relative">
				<canvas ref={canvasRef} className="absolute inset-0 size-full pointer-events-none" />
				<div className="pt-36 pb-60">
					<div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-7 gap-56 lg:gap-0 items-center">
						<div className="text-center lg:col-span-5 lg:text-left w-full flex flex-col items-center lg:items-start">
							<AnimatedGroup variants={transitionVariants}>
								<Link
									href="#"
									className="hover:bg-background backdrop-blur-3xl dark:hover:border-t-border bg-white/10 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
								>
									<span className="text-foreground text-sm">A outstanding websites creator</span>
									<span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

									<div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
										<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
											<span className="flex size-6">
												<ArrowRight className="m-auto size-3" />
											</span>
											<span className="flex size-6">
												<ArrowRight className="m-auto size-3" />
											</span>
										</div>
									</div>
								</Link>
							</AnimatedGroup>
							<h1 className="mt-8 text-nowrap text-5xl font-bold md:text-6xl lg:mt-4 xl:text-7xl text-blue-700 z-10">
								Hey there,
								<br />
								<TypingText
									texts={["I'm Steve D!", "I'm a developer!", "nice to meet you!"]}
									className="italic font-serif"
									loop={true}
									cursor="_"
									cursorClassName="w-8 overflow-hidden hidden md:block"
								/>
							</h1>
							<div className="mt-4 text-pretty max-w-2xl z-10">
								I increase web presence of my clients by creating{" "}
								<PointerHighlight
									containerClassName="inline-flex"
									pointerClassName="text-blue-700"
									rectangleClassName="border-blue-700 rounded-xs border-2"
								>
									<span className="text-nowrap py-1 px-2 italic font-serif text-2xl">
										amazing websites
									</span>
								</PointerHighlight>{" "}
								to convert more visitors.
							</div>
							
							<div className="flex gap-4 flex-col md:flex-row mt-4 z-50">
							  <div>
									<AvatarGroup />
									</div>
									<div className="flex flex-col items-center md:items-start justify-between">
									<div className="flex items-center justify-between">
									<Star className="fill-amber-300 text-amber-300 size-5" />
									<Star className="fill-amber-300 text-amber-300 size-5" />
									<Star className="fill-amber-300 text-amber-300 size-5" />
									<Star className="fill-amber-300 text-amber-300 size-5" />
									<Star className="fill-amber-300 text-amber-300 size-5" />
									</div>
									<p className="text-sm">Trust by many people</p>
									</div>
							</div>

							<div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
								<Button
									asChild
									size="lg"
									className="px-0 text-base before:absolute before:top-0 before:left-0 before:w-full before:border-2 before:border-blue-700 before:h-full before:rounded-full before:-z-10 z-50 relative rounded-full hover:bg-transparent bg-transparent group"
								>
									<Link href="#">
										<span className="px-5 rounded-full flex items-center text-nowrap text-white size-full transition duration-300 bg-blue-700 group-hover:-translate-y-2 group-active:-translate-y-1 font-serif text-lg italic z-10">
											Contact me
										</span>
									</Link>
								</Button>
								<Button key={2} asChild size="lg" variant="ghost" className="rounded-full">
									<Link
										href="#"
										className="dark:hover:bg-transparent relative px-5 text-base hover:before:ring hover:before:ring-white/5 before:absolute before:bottom-0 before:w-[80%] before:h-0.5 before:transition-all before:duration-300 before:rounded-full before:bg-white/5 hover:before:size-full before:z-50 z-50"
									>
										<span className="text-nowrap">Request demos</span>
									</Link>
								</Button>
							</div>
						</div>
						<div className="w-full">
							<HeroImage className="scale-120 lg:scale-125" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DotGrid;
