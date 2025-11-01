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

const Requirements = ({ items }: { items: string[] }) => (
	<ul className="mt-2 space-y-1.5">
		{items.map((item, index) => (
			<motion.li
				animate={{ opacity: 1, x: 0 }}
				className="flex items-center gap-2"
				initial={{ opacity: 0, x: -10 }}
				key={`requirements-${item.toLowerCase().replace(/\s+/g, "-")}`}
				transition={{ delay: 0.1 * index }}
			>
				<CheckCircle className="size-4 flex-shrink-0 text-emerald-500 dark:text-emerald-400" />
				<span className="text-neutral-700 text-sm dark:text-neutral-300">{item}</span>
			</motion.li>
		))}
	</ul>
);

function LandingPage({ image, href }: { image: string | undefined; href: string | undefined }) {
	return (
		<Link className="mt-4 size-full overflow-hidden rounded-lg" href={href ?? "#"} target="_blank">
			<Image
				alt="Optiride landing page"
				className="hover:-translate-y-[142rem] w-full rounded-lg transition duration-[20s] ease-linear"
				height={500}
				src={image || "/images/optiride/optiride.webp"}
				width={500}
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
		<div className="mx-auto mt-10 size-full overflow-hidden rounded-lg bg-gray-950/5 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
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
			className="size-full"
			onMouseMove={handleMouseMove}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
				minHeight: "24rem",
			}}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			variants={fadeInUp}
			whileHover={{ y: -5 }}
		>
			<div
				className={`group relative flex h-full flex-col gap-4 rounded-xl border border-neutral-200/60 bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50/30 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] backdrop-blur-[4px] transition-all duration-500 ease-out before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/10 before:via-white/20 before:to-transparent before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-0 after:z-[-1] after:rounded-xl after:bg-neutral-50/70 hover:border-neutral-300/50 hover:bg-gradient-to-b hover:from-neutral-50/60 hover:via-neutral-50/30 hover:to-neutral-50/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:backdrop-blur-[6px] dark:border-neutral-800/60 dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-900/30 dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)] dark:hover:border-neutral-700/50 dark:hover:from-neutral-800/60 dark:hover:via-neutral-800/30 dark:hover:to-neutral-800/20 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] dark:after:bg-neutral-900/70 dark:before:from-black/10 dark:before:via-black/20 dark:before:to-transparent ${item.className}`}
				// tabIndex={0}
				// aria-label={`${item.title} - ${item.description}`}
			>
				<div className="translate-z-5 relative flex h-full flex-col gap-3">
					<div className="flex flex-1 flex-col space-y-2 overflow-hidden">
						<div className="flex items-center justify-between">
							<h3 className="font-semibold text-neutral-900 text-xl tracking-tight transition-colors duration-300 group-hover:text-neutral-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
								{item.title}
							</h3>
							{/*<div className="text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<ArrowUpRight className="size-5" />
							</div>*/}
						</div>

						<p className="text-neutral-600 text-sm tracking-tight dark:text-neutral-400">
							{item.description}
						</p>

						{/* Feature specific content */}
						{item.feature === "requirements" && item.requirementsItems && (
							<Requirements items={item.requirementsItems} />
						)}

						{item.feature === "landing-page" && <LandingPage href={item.href} image={item.image} />}

						{item.feature === "website" && <Website images={item.images} />}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default function ProjectsSection() {
	return (
		<section className="relative bg-white py-24 dark:bg-black" id="projects">
			<div className="mx-auto max-w-6xl px-6">
				<h2 className="mb-8 text-center font-bold text-3xl lg:text-5xl">Projects</h2>
				<p className="mb-16 text-center font-medium text-lg opacity-80">What I've done for other people</p>
				{/* Bento Grid */}
				<motion.div
					className="grid gap-6"
					initial="hidden"
					variants={staggercontainer}
					viewport={{ once: true }}
					whileInView="visible"
				>
					<div className="grid gap-6 *:max-h-[400px] md:grid-cols-3">
						<motion.div className="md:col-span-1" variants={fadeInUp}>
							<BentoCard item={bentoItems[0]} />
						</motion.div>
						<motion.div className="md:col-span-2" variants={fadeInUp}>
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
