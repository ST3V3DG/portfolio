import type { Variants } from "framer-motion";
import { ArrowRight, ChevronsDown, Star } from "lucide-react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TypingText } from "@/components/ui/typing-text";
import AvatarGroup from "./avatar-group";
import Model from "./3d-model";
// import HeroImage from "./hero-image";

export default function HeroSection() {
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
		<section className="relative lg:h-dvh">
			<Spotlight className="-top-40 md:-top-20 left-0 md:left-60" fill="white" />

			<div className="place-center mx-auto flex h-full max-w-6xl items-center justify-center px-6 pt-28 pb-40 lg:pt-0 lg:pb-0">
				{/*<div className="grid min-w-full items-center gap-8 md:grid-rows-1 lg:grid-cols-7 lg:gap-0">*/}
				<div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
					<AnimatedGroup className="z-10" variants={transitionVariants}>
						<Link
							className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-white/10 p-0.5 pl-4 shadow-md shadow-zinc-950/5 backdrop-blur-3xl transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
							href="#contact"
						>
							<span className="text-foreground text-sm">A outstanding websites creator</span>
							<span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700" />

							<div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
								<div className="-translate-x-1/2 flex w-12 duration-500 ease-in-out group-hover:translate-x-0">
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
					<h1 className="z-10 mt-8 text-nowrap font-bold text-5xl text-blue-700 md:text-6xl lg:mt-4 xl:text-7xl">
						Hey there,
						<br />
						<TypingText
							className="font-serif italic"
							cursor="_"
							cursorClassName="w-8 overflow-hidden hidden md:block"
							loop={true}
							texts={["I'm Steve D!", "I'm a developer!", "nice to meet you!"]}
						/>
					</h1>
					<div className="z-10 mt-4 max-w-xl text-pretty text-gray-300">
						I help enhance your online presence by strengthening your visibility, credibility, and growth.
						My goal is to lay a solid foundation for a{" "}
						<span className="before:-z-10 relative text-nowrap bg-underline pl-0.75 before:absolute before:bottom-0 before:left-0 before:h-1.5 before:bg-blue-700">
							modern strategy
						</span>
						, whether professional or personal.
					</div>

					<div className="z-10 mt-8 flex flex-col gap-4 md:mt-4 md:flex-row">
						<div>
							<AvatarGroup />
						</div>
						<div className="flex flex-col items-center justify-center gap-1 md:items-start">
							<div className="flex w-full items-center justify-center gap-0.5 md:justify-start">
								<Star className="size-4 fill-amber-300 text-amber-300" />
								<Star className="size-4 fill-amber-300 text-amber-300" />
								<Star className="size-4 fill-amber-300 text-amber-300" />
								<Star className="size-4 fill-amber-300 text-amber-300" />
								<Star className="size-4 fill-amber-300 text-amber-300" />
							</div>
							<p className="text-white/70 text-xs">Trusted by many people</p>
						</div>
					</div>

					<div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
						<Button
							asChild
							className="before:-z-10 group relative z-10 rounded-full bg-transparent px-0 text-base before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-full before:border-2 before:border-blue-700 hover:bg-transparent"
							size="lg"
						>
							<Link href="#">
								<span className="group-hover:-translate-y-2 group-active:-translate-y-1 flex size-full items-center text-nowrap rounded-full bg-blue-700 px-5 font-serif text-lg text-white italic transition duration-300">
									Contact me
								</span>
							</Link>
						</Button>
						<Button asChild className="rounded-full" key={2} size="lg" variant="ghost">
							<Link
								className="group relative z-10 z-50 px-5 text-base before:absolute before:bottom-0 before:z-50 before:h-0.5 before:w-[80%] before:rounded-full before:bg-white/5 before:transition-all before:duration-300 hover:before:size-full hover:before:ring hover:before:ring-white/5 dark:hover:bg-transparent"
								href="#projects"
							>
								<span>
									See projects{" "}
									<ArrowRight className="inline-block transition duration-300 group-hover:translate-x-1" />
								</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
			{/*</div>*/}

			<div className="absolute top-0 right-0 size-full lg:row-start-1">
				<Model />
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
						className="fill-white"
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
					/>
				</svg>
			</div>
			<Button
				asChild
				className="absolute right-1/2 bottom-4 hidden size-12 animate-pulse items-center justify-center rounded-full border border-white lg:flex"
			>
				<Link className="bg-transparent text-white hover:bg-transparent" href={"#about"}>
					<ChevronsDown className="size-6" />
				</Link>
			</Button>
		</section>
	);
}
