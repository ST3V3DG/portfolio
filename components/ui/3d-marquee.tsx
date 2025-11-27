"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { WebsitesImages } from "../projects-section";

export default function ThreeDMarquee({ images, className }: { images: WebsitesImages[]; className?: string }) {
	// Split the images array into 4 equal parts
	const chunkSize = Math.ceil(images.length / 4);
	const chunks = Array.from({ length: 4 }, (_, colIndex) => {
		const start = colIndex * chunkSize;
		return images.slice(start, start + chunkSize);
	});
	return (
		<div className={cn("mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100", className)}>
			<div className="flex size-full items-center justify-center">
				<div className="size-[1720px] shrink-0 scale-50">
					<div
						className="transform-3d relative top-96 right-1/2 grid size-full origin-top-left grid-cols-2 gap-8 sm:translate-x-1/6"
						style={{
							transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
						}}
					>
						{chunks.map((subarray, colIndex) => (
							<motion.div
								animate={{ y: colIndex % 2 === 0 ? 150 : -150 }}
								className="flex flex-col items-start gap-8"
								key={`${colIndex}marquee`}
								transition={{
									duration: colIndex % 2 === 0 ? 10 : 15,
									repeat: Number.POSITIVE_INFINITY,
									repeatType: "reverse",
								}}
							>
								<GridLineVertical className="-left-4" offset="0" />
								{subarray.map((image, imageIndex) => (
									<Link
										className="relative"
										href={image.href ?? ""}
										key={imageIndex + String(image.src)}
										target="_blank"
									>
										<GridLineHorizontal className="-top-4" offset="0" />
										<motion.img
											alt={`${imageIndex + 1}`}
											className="aspect-9/16 rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
											fetchPriority="low"
											height={700}
											key={imageIndex + String(image.src)}
											src={String(image.src)}
											transition={{
												duration: 0.3,
												ease: "easeInOut",
											}}
											whileHover={{
												y: -10,
											}}
											width={970}
										/>
									</Link>
								))}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const GridLineHorizontal = ({ className, offset }: { className?: string; offset?: string }) => {
	return (
		<div
			className={cn(
				"absolute left-[calc(var(--offset)/2*-1)] h-(--height) w-[calc(100%+var(--offset))]",
				"bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
				"g-size-[var(--width)_var(--height)]",
				"[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
				"mask-exclude",
				"z-30",
				"dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
				className
			)}
			style={
				{
					"--background": "#ffffff",
					"--color": "rgba(0, 0, 0, 0.2)",
					"--height": "1px",
					"--width": "5px",
					"--fade-stop": "90%",
					"--offset": offset || "200px", //-100px if you want to keep the line inside
					"--color-dark": "rgba(255, 255, 255, 0.2)",
					maskComposite: "exclude",
				} as React.CSSProperties
			}
		/>
	);
};

const GridLineVertical = ({ className, offset }: { className?: string; offset?: string }) => {
	return (
		<div
			className={cn(
				"absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-(--width)",
				"bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
				"bg-size-[var(--width)_var(--height)]",
				"[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),linear-gradient(black,black)]",
				"mask-exclude",
				"z-30",
				"dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
				className
			)}
			style={
				{
					"--background": "#ffffff",
					"--color": "rgba(0, 0, 0, 0.2)",
					"--height": "5px",
					"--width": "1px",
					"--fade-stop": "90%",
					"--offset": offset || "150px", //-100px if you want to keep the line inside
					"--color-dark": "rgba(255, 255, 255, 0.2)",
					maskComposite: "exclude",
				} as React.CSSProperties
			}
		/>
	);
};
