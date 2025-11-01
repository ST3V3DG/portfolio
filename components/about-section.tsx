"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// const defaultAchievements = [
// 	{ label: "Companies Supported", value: "300+" },
// 	{ label: "Projects Finalized", value: "800+" },
// 	{ label: "Happy Customers", value: "99%" },
// 	{ label: "Recognized Awards", value: "10+" },
// ];

const technologies = [
	{
		src: "/images/technos/laravel-brand.png",
		alt: "Laravel logo",
		className: "h-20",
	},
	{
		src: "/images/technos/next-js-brand.webp",
		alt: "Next.js logo",
		className: "h-20",
	},
	{
		src: "/images/technos/django-brand.png",
		alt: "Django logo",
		className: "h-12",
	},
	{
		src: "/images/technos/shadcn-ui-brand.png",
		alt: "Shadcn UI logo",
	},
	{
		src: "/images/technos/tailwind-css-brand.png",
		alt: "Tailwind CSS logo",
		className: "h-8",
	},
];

export default function AboutSection() {
	gsap.registerPlugin(useGSAP, ScrollTrigger);

	const fadeInElements = useRef<HTMLImageElement[]>([]);

	const pushRef = (element: HTMLImageElement) => {
		if (element && !fadeInElements.current.includes(element)) {
			fadeInElements.current.push(element);
		}
	};

	useGSAP(() => {
		for (let i = 0; i <= fadeInElements.current.length; i += 1) {
			gsap.from(fadeInElements.current[i], {
				scrollTrigger: {
					trigger: fadeInElements.current[i],
					start: "top bottom",
					end: "bottom 90%",
					scrub: 2,
					toggleActions: "play pause resume reset",
				},
				opacity: 0,
				y: 50,
				ease: "power3.inOut",
			});
		}

		// gsap.from(".fade-in", {
		//   scrollTrigger: {
		//     trigger: ".fade-in",
		//     start: "top bottom",
		//     end: "bottom 50%",
		//     markers: true,
		//     scrub: 2,
		//     toggleActions: "play pause resume reset",
		//   },
		//   opacity: 0,
		//   y: 50,
		//   ease: "power3.inOut",
		//   stagger: 1,
		// });
	});

	return (
		<section className="relative bg-white pt-16 pb-32 lg:pt-24 lg:pb-20" id="about">
			<div className="mx-auto max-w-6xl px-6">
				<h2 className="mb-12 text-center font-semibold text-3xl text-black lg:text-5xl">About Me</h2>
				<div className="mb-14 grid gap-5 text-center text-black md:grid-cols-2 md:text-left">
					<div className="flex flex-col items-center justify-between">
						<h3 className="text-2xl md:text-center lg:text-3xl">My Experience</h3>
						<div className="hidden w-full flex-1 gap-4 pt-8 md:flex md:flex-col">
							<Image
								alt={technologies[0].alt}
								className="fade-in lg:self-start"
								height={300}
								ref={pushRef}
								src={technologies[0].src}
								width={300}
							/>
							<Image
								alt={technologies[1].alt}
								className="fade-in ml-auto lg:ml-0 lg:self-end"
								height={200}
								ref={pushRef}
								src={technologies[1].src}
								width={200}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<p className="text-center first-letter:ml-8 md:text-left">
							With 3 years of hands-on experience in software development, I've successfully contributed
							to numerous projects (Web apps and websites). My background includes full involvement in the
							software lifecycle, from requirements analysis and architecture design to testing and
							deployment, ensuring scalable and maintanable solutions.
						</p>
						<p className="text-center first-letter:ml-8 md:text-left">
							Throughout my career, I've worked with cross-functional teams, managed codebases of
							different complexity level and adapted quickly to envolving technologies. My experience in
							both frontend and backend development enables me to deliver effecient, user-center and
							high-performance apps.
						</p>
					</div>
				</div>
				<div className="mb-14 grid gap-5 text-center text-black md:grid-cols-2 md:text-left">
					<div className="order-2 flex flex-col gap-4 md:order-1">
						<p className="text-center first-letter:ml-8 md:text-left">
							I'm a highly skilled software developer with strong expertise in technologies like React.js
							(Next.js), Laravel, Django, Tailwind CSS, SQL and more. My technical proficiency spans a
							wide range of areas, including full-stack web development, API design, database
							optimization, and soon, cloud integration.
						</p>
						<p className="text-center first-letter:ml-8 md:text-left">
							Beyond technical skills, I excel in problem-solving, clean code and architecture practices
							and continous learning. I'm passoniate about writing efficient, reliable and elegant code,
							while also maintaining a keen focus on collaboration, documentation and quality standard.
						</p>
					</div>
					<div className="order-1 flex flex-col items-center justify-between md:order-2">
						<h3 className="text-2xl md:text-center lg:text-3xl">My Skils</h3>
						<div className="hidden w-full flex-1 justify-between pt-8 md:flex md:flex-col">
							<Image
								alt={technologies[2].alt}
								className="fade-in lg:self-start"
								height={150}
								ref={pushRef}
								src={technologies[2].src}
								width={150}
							/>
							<Image
								alt={technologies[3].alt}
								className="fade-in mx-auto lg:mx-0 lg:self-center"
								height={200}
								ref={pushRef}
								src={technologies[3].src}
								width={200}
							/>
							<Image
								alt={technologies[4].alt}
								className="fade-in ml-auto lg:mx-0 lg:self-end"
								height={200}
								ref={pushRef}
								src={technologies[4].src}
								width={200}
							/>
						</div>
					</div>
				</div>
				{/*<div className="grid mb-14 gap-4 max-h-72 md:grid-cols-2 lg:grid-cols-3 *:rounded-lg lg:grid-rows-3">
					<Card className="bg-white lg:col-span-2 overflow-hidden shadow-lg hover:shadow-xl transition">
  					<CardContent className="size-full bg-white">
  						<Image
  							src="/images/technos/laravel.png"
  							alt="Laravel logo"
  							width={500}
  							height={500}
  							className="size-full object-contain scale-200"
  						/>
  					</CardContent>
					</Card>
					<Card className="bg-white lg:row-span-2 overflow-hidden shadow-lg hover:shadow-xl transition">
					<CardContent className="p-4 size-full bg-white">
						<Image
							src="/images/technos/next-js.webp"
							alt="Next.js logo"
							width={500}
							height={500}
							className="size-full object-contain"
						/>
					</CardContent>
					</Card>
					<Card className="bg-white lg:row-span-2 overflow-hidden shadow-lg hover:shadow-xl transition">
					<CardContent className="p-4 size-full bg-white">
						<Image
							src="/images/technos/django.png"
							alt="Django logo"
							width={500}
							height={500}
							className="size-full object-contain"
						/>
					</CardContent>
					</Card>
					<Card className="bg-white lg:row-span-2 overflow-hidden shadow-lg hover:shadow-xl transition">
					<CardContent className="p-4 size-full bg-white">
						<Image
							src="/images/technos/tailwind-css.png"
							alt="Tailwind CSS logo"
							width={500}
							height={500}
							className="size-full object-contain"
						/>
					</CardContent>
					</Card>
					<Card className="bg-white md:col-span-2 lg:col-span-1 overflow-hidden shadow-lg hover:shadow-xl transition">
					<CardContent className="size-full bg-white">
						<Image
							src="/images/technos/shadcn-ui.png"
							alt="Shadcn UI logo"
							width={500}
							height={20}
							className="size-full object-contain"
						/>
					</CardContent>
					</Card>
				</div>*/}
				<div>
					{/*<p className="text-center">{companiesTitle} </p>*/}
					<div className="mt-8 flex flex-wrap justify-center gap-8 md:hidden">
						{technologies.map((technology, index) => (
							<div className="flex items-center gap-3" key={technology.src + index}>
								<Image
									alt={technology.alt}
									className={cn("h-12 w-auto", technology.className)}
									height={500}
									src={technology.src}
									width={500}
								/>
							</div>
						))}
					</div>
				</div>
				{/*<div className="bg-muted relative overflow-hidden rounded-xl p-10 md:p-16">
					<div className="flex flex-col gap-4 text-center md:text-left">
						<h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
						<p className="text-muted-foreground max-w-xl">{achievementsDescription}</p>
					</div>
					<div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
						{achievements.map((item, idx) => (
							<div className="flex flex-col gap-4" key={item.label + idx}>
								<p>{item.label}</p>
								<span className="text-4xl font-semibold md:text-5xl">{item.value}</span>
							</div>
						))}
					</div>
					<div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
				</div>*/}
			</div>
			<div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden">
				<svg
					className="relative block h-24 w-full"
					data-name="Layer 1"
					preserveAspectRatio="none"
					viewBox="0 0 1200 120"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="fill-black"
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					/>
				</svg>
			</div>
		</section>
	);
}
