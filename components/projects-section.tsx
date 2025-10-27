"use client";

import { CheckCircle } from "lucide-react";
import { motion, useMotionValue, useTransform, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import ThreeDMarquee from "./ui/3d-marquee";

export type WebsitesImages = {
	src?: string;
	href?: string;
};

type BentoItem = {
	id: string;
	title: string;
	description: string;
	image?: string;
	images?: WebsitesImages[];
	href?: string;
	feature?: "requirements" | "website" | "landing-page";
	requirementsItems?: string[];
	size?: "sm" | "md" | "lg";
	className?: string;
};

const bentoItems: BentoItem[] = [
	{
		id: "requirements",
		title: "High quality websites",
		description: "I insure high quality websites for my clients.",
		href: "#",
		feature: "requirements",
		requirementsItems: [
			"SEO",
			"Accessibility",
			"Performance",
			"Best Practice",
			"User Interface",
			"User Experience",
			"Light and dark mode support",
		],
		// size: "lg",
		// className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
	},
	{
		id: "landing-page",
		title: "From a landing page",
		description: "I create a landing page for my clients.",
		href: "https://optiride.vercel.app",
		image: "/images/optiride/optiride.webp",
		feature: "landing-page",
		size: "sm",
		// className: "col-span-2 row-span-1 col-start-1 col-end-3",
	},
	{
		id: "website",
		title: "To entire websites",
		description: "I also create multi-pages websites.",
		href: "https://mckmedicalcare.vercel.app",
		feature: "website",
		images: [
			{
				src: "/images/mckmedicalcare/mckmedicalcare-home.webp",
				href: "https://medicalcare.vercel.app",
			},
			{
				src: "/images/mckmedicalcare/mckmedicalcare-specialities.webp",
				href: "https://medicalcare.vercel.app",
			},
			{
				src: "/images/mckmedicalcare/mckmedicalcare-about.webp",
				href: "https://medicalcare.vercel.app",
			},
			{
				src: "/images/mckmedicalcare/mckmedicalcare-contact.webp",
				href: "https://medicalcare.vercel.app",
			},
		],
		size: "md",
		// className: "col-span-4 row-span-1",
	},
];

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const staggercontainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3,
		},
	},
};

const Requirements = ({ items }: { items: string[] }) => {
	return (
		<ul className="mt-2 space-y-1.5">
			{items.map((item, index) => (
				<motion.li
					key={`requirements-${item.toLowerCase().replace(/\s+/g, "-")}`}
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 * index }}
					className="flex items-center gap-2"
				>
					<CheckCircle className="size-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
					<span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
				</motion.li>
			))}
		</ul>
	);
};

function LandingPage({ image, href }: { image: string | undefined; href: string | undefined }) {
	return (
		<Link href={href ?? "#"} target="_blank" className="mt-4 rounded-lg size-full overflow-hidden">
			<Image
				src={image || "/images/optiride/optiride.webp"}
				alt="Optiride landing page"
				width={500}
				height={500}
				className="w-full rounded-lg hover:-translate-y-[142rem] transition duration-[20s] ease-linear"
			/>
		</Link>
	);
}

function Website({ images }: { images: WebsitesImages[] | undefined }) {
	images = images || [
		{
			src: "/images/mckmedicalcare/mckmedicalcare-home.webp",
			href: "https://medicalcare.vercel.app",
		},
		{
			src: "/images/mckmedicalcare/mckmedicalcare-specialities.webp",
			href: "https://medicalcare.vercel.app",
		},
		{
			src: "/images/mckmedicalcare/mckmedicalcare-about.webp",
			href: "https://medicalcare.vercel.app",
		},
		{
			src: "/images/mckmedicalcare/mckmedicalcare-contact.webp",
			href: "https://medicalcare.vercel.app",
		},
	];
	return (
		<div className="mx-auto mt-10 size-full rounded-lg bg-gray-950/5 ring-1 ring-neutral-700/10 dark:bg-neutral-800 overflow-hidden">
			<ThreeDMarquee images={images} />
		</div>
	);
}

const BentoCard = ({ item }: { item: BentoItem }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [2, -2]);
	const rotateY = useTransform(x, [-100, 100], [-2, 2]);

	function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
		const rect = event.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;
		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;
		x.set(xPct * 100);
		y.set(yPct * 100);
	}

	return (
		<motion.div
			variants={fadeInUp}
			whileHover={{ y: -5 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className="size-full  "
			onMouseMove={handleMouseMove}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
				minHeight: "24rem",
			}}
		>
			<div
				className={`group relative flex flex-col gap-4 h-full rounded-xl p-5 bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50/30 dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-900/30 border border-neutral-200/60 dark:border-neutral-800/60 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:via-white/20 before:to-transparent dark:before:from-black/10 dark:before:via-black/20 dark:before:to-transparent before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-0 after:rounded-xl after:bg-neutral-50/70 dark:after:bg-neutral-900/70 after:z-[-1] backdrop-blur-[4px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:border-neutral-300/50 dark:hover:border-neutral-700/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:backdrop-blur-[6px] hover:bg-gradient-to-b hover:from-neutral-50/60 hover:via-neutral-50/30 hover:to-neutral-50/20 dark:hover:from-neutral-800/60 dark:hover:via-neutral-800/30 dark:hover:to-neutral-800/20 transition-all duration-500 ease-out ${item.className}`}
				// tabIndex={0}
				// aria-label={`${item.title} - ${item.description}`}
			>
				<div className="relative flex flex-col gap-3 h-full translate-z-5">
					<div className="space-y-2 flex-1 flex flex-col overflow-hidden">
						<div className="flex items-center justify-between">
							<h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
								{item.title}
							</h3>
							{/*<div className="text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<ArrowUpRight className="size-5" />
							</div>*/}
						</div>

						<p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight">
							{item.description}
						</p>

						{/* Feature specific content */}
						{item.feature === "requirements" && item.requirementsItems && (
							<Requirements items={item.requirementsItems} />
						)}

						{item.feature === "landing-page" && <LandingPage image={item.image} href={item.href} />}

						{item.feature === "website" && <Website images={item.images} />}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default function ProjectsSection() {
	return (
		<section id="projects" className="relative py-24 bg-white dark:bg-black">
			<div className="max-w-6xl px-6 mx-auto">
				<h2 className="text-3xl lg:text-5xl text-center font-bold mb-8">Projects</h2>
				<p className="text-lg opacity-80 font-medium mb-16 text-center">What I've done for other people</p>
				{/* Bento Grid */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={staggercontainer}
					className="grid gap-6"
				>
					<div className="grid md:grid-cols-3 gap-6 *:max-h-[400px]">
						<motion.div variants={fadeInUp} className="md:col-span-1">
							<BentoCard item={bentoItems[0]} />
						</motion.div>
						<motion.div variants={fadeInUp} className="md:col-span-2">
							<BentoCard item={bentoItems[1]} />
						</motion.div>
					</div>
					<div className="grid grid-cols-1 gap-6 *:max-h-[400px]">
						<motion.div variants={fadeInUp}>
							<BentoCard item={bentoItems[2]} />
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
