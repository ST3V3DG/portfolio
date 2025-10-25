import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const items = [
	{
		name: "Emma Wilson",
		title: "Product Designer, TechCorp",
		image: "https://cdn.badtz-ui.com/images/components/avatar-proof/avatar-2.webp",
		body: "This design system has transformed our workflow. The components are intuitive and well-documented.",
	},
	{
		name: "Lucas Chen",
		title: "Frontend Developer, WebFlow",
		image: "https://cdn.badtz-ui.com/images/components/avatar-proof/avatar-1.webp",
		body: "The components are well-structured and customizable. They've significantly reduced our development time.",
	},
	{
		name: "Sophia Martinez",
		title: "UI/UX Lead, DesignHub",
		image: "https://cdn.badtz-ui.com/images/components/avatar-proof/avatar-5.webp",
		body: "Every component feels polished and professional. It's become our go-to resource for all projects.",
	},
	{
		name: "Oliver Thompson",
		title: "Creative Director, StudioX",
		image: "https://cdn.badtz-ui.com/images/components/avatar-proof/avatar-4.webp",
		body: "This design system brings consistency and efficiency to our creative process. Beautiful and functional.",
	},
];

function TestimonialCard({ item }: { item: (typeof items)[number] }) {
	return (
		<div className="relative flex h-full w-[20rem] flex-col items-start justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
			<div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">{item.body}</div>
			<div className="mt-auto flex items-center gap-4">
				<div className="relative size-10 overflow-hidden rounded-full">
					<Image
						src={item.image}
						alt={item.name}
						className="h-full w-full object-cover"
						width={500}
						height={500}
					/>
				</div>
				<div className="flex flex-col">
					<div className="text-sm font-medium text-neutral-950 dark:text-neutral-50">{item.name}</div>
					<div className="text-xs text-neutral-500 dark:text-neutral-400">{item.title}</div>
				</div>
			</div>
		</div>
	);
}

export default function TestimonialSection() {
	return (
		<section id="testimonials" className="pb-40 lg:pt-24 bg-white dark:bg-black overflow-hidden relative">
			<h2 className="text-3xl lg:text-5xl text-center font-bold mb-8">Testimonials</h2>
			<p className="text-lg opacity-80 font-medium mb-16 text-center">What people say about my work</p>
			<div className="relative mx-auto overflow- min-h-96">
				<div className="from-background absolute inset-y-0 left-0 z-10 w-30 bg-gradient-to-r to-transparent" />
				<div className="from-background absolute inset-y-0 right-0 z-10 w-30 bg-gradient-to-l to-transparent" />
				<Marquee className="py-2 rotate-4 md:rotate-10" direction="left" repeat={10}>
					{[...items, ...items].map((item, index) => (
						<TestimonialCard key={index} item={item} />
					))}
				</Marquee>
				<Marquee className="py-2 -rotate-4 translate-y-1/2" direction="right">
					{[...items, ...items].map((item, index) => (
						<TestimonialCard key={index} item={item} />
					))}
				</Marquee>
			</div>
			{/*<div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
				<svg
					className="block relative h-28 w-full"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-white"
					></path>
				</svg>
			</div>*/}
		</section>
	);
}
