"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ImageType = {
	url: string;
	name: string;
};

type CloudOrbitProps = {
	duration?: number;
	children?: ReactNode;
	size?: number;
	className?: string;
	images?: ImageType[];
	[key: string]: string | number | boolean | ReactNode | ImageType[] | undefined;
};

export function CloudOrbit({ duration = 2, children, size = 200, className, images = [], ...props }: CloudOrbitProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const lastTimestamp = useRef(0);

	useEffect(() => {
		let animationFrameId: number;

		const updateFrame = (timestamp: number) => {
			if (lastTimestamp.current === 0) {
				lastTimestamp.current = timestamp;
			}

			const elapsedTime = (timestamp - lastTimestamp.current) / 1000;
			const currentImageIndex = Math.floor(elapsedTime / duration) % images.length;

			setCurrentIndex(currentImageIndex);

			animationFrameId = requestAnimationFrame(updateFrame);
		};

		if (images.length > 0) {
			animationFrameId = requestAnimationFrame(updateFrame);
		}

		return () => cancelAnimationFrame(animationFrameId);
	}, [duration, images.length]);

	return (
		<div
			className={cn("relative flex size-full select-none items-center justify-center rounded-full", className)}
			style={
				{
					"--size": `${size}px`,
				} as CSSProperties
			}
			{...props}
		>
			<AnimatePresence>
				{images.length > 0 &&
					images.map(
						(image, index) =>
							index === currentIndex && (
								<motion.img
									alt={image.name}
									animate={{ opacity: 1, scale: [0.8, 1] }}
									className={cn(
										"absolute z-10 rounded-[inherit] border border-gray-100 bg-white/5 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800",
										className
									)}
									exit={{ opacity: 0, scale: [1, 0.8] }}
									height={size}
									initial={{ opacity: 0, scale: 0.8 }}
									key={image.url}
									src={image.url}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 7,
									}}
									width={size}
									// style={{ width: size, height: size }}
								/>
							)
					)}
			</AnimatePresence>
			{children}
		</div>
	);
}

type OrbitingImageProps = {
	speed?: number;
	radius?: number;
	startAt?: number;
	size?: number;
	className?: string;
	images?: ImageType[];
	duration?: number;
	[key: string]: string | number | boolean | ReactNode | ImageType[] | undefined;
};

export function OrbitingImage({
	speed = 20,
	radius = 100,
	startAt = 0,
	size = 80,
	className,
	images = [],
	duration = 2,
	...props
}: OrbitingImageProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const lastTimestamp = useRef(0);

	useEffect(() => {
		let animationFrameId: number;

		const updateFrame = (timestamp: number) => {
			if (lastTimestamp.current === 0) {
				lastTimestamp.current = timestamp;
			}

			const elapsedTime = (timestamp - lastTimestamp.current) / 1000;
			const currentImageIndex = Math.floor(elapsedTime / duration) % images.length;

			setCurrentIndex(currentImageIndex);

			animationFrameId = requestAnimationFrame(updateFrame);
		};

		if (images.length > 0) {
			animationFrameId = requestAnimationFrame(updateFrame);
		}

		return () => cancelAnimationFrame(animationFrameId);
	}, [duration, images.length]);

	return (
		<motion.div
			animate={{
				transform: [
					`rotate(${startAt * 360}deg) translateY(-${radius}px) rotate(-${startAt * 360}deg)`,
					`rotate(${startAt * 360 + 90}deg) translateY(-${radius}px) rotate(-${startAt * 360 + 90}deg)`,
					`rotate(${startAt * 360 + 180}deg) translateY(-${radius}px) rotate(-${startAt * 360 + 180}deg)`,
					`rotate(${startAt * 360 + 270}deg) translateY(-${radius}px) rotate(-${startAt * 360 + 270}deg)`,
					`rotate(${startAt * 360 + 360}deg) translateY(-${radius}px) rotate(-${startAt * 360 + 360}deg)`,
				],
			}}
			className={cn(
				"absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]",
				className
			)}
			style={{
				width: size,
				height: size,
				position: "absolute",
				left: "50%",
				top: "50%",
				marginLeft: -size / 2,
				marginTop: -size / 2,
			}}
			transition={{
				duration: speed,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			}}
			{...props}
		>
			<AnimatePresence>
				{images.length > 0 &&
					images.map(
						(image, index) =>
							index === currentIndex && (
								<motion.div
									animate={{ opacity: 1, scale: [0.8, 1] }}
									className={cn(
										"rounded-full border border-gray-100 bg-white/5 p-[10%] dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800",
										className
									)}
									exit={{ opacity: 0, scale: [1, 0.8] }}
									initial={{ opacity: 0, scale: 0.8 }}
									key={image.url}
									style={{
										width: `${size}px`,
										height: `${size}px`,
										position: "absolute",
									}}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 7,
									}}
								>
									<Image
										alt={image.name}
										className="flex size-full items-center justify-center object-contain"
										height={500}
										src={image.url}
										width={500}
									/>
								</motion.div>
							)
					)}
			</AnimatePresence>
		</motion.div>
	);
}
