import type { Variants } from "framer-motion";
import { ArrowRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TypingText } from "@/components/ui/typing-text";
import HeroImage from "./hero-image";
import { Particles } from "./particles";

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
			{/* Interactive particles */}
			<Particles
				className="absolute inset-0 -z-10"
				quantity={500}
				ease={90}
				staticity={10}
				color="#fff"
				size={0.9}
			/>

			<div className="pt-36 pb-60">
				<div className="mx-auto grid max-w-6xl px-6 lg:grid-cols-7 gap-56 lg:gap-0 items-center ">
					<div className="text-center lg:col-span-5 lg:text-left w-full flex flex-col items-center lg:items-start">
						<AnimatedGroup variants={transitionVariants}>
							<Link
								href="#"
								className="hover:bg-background backdrop-blur-3xl dark:hover:border-t-border bg-white/10 group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
							>
								<span className="text-foreground text-sm">A standalone websites creator</span>
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
								cursorClassName="w-8 overflow-hidden"
							/>
						</h1>
						<div className="mt-4 text-pretty max-w-2xl">
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

						<div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
							<Button
								asChild
								size="lg"
								className="px-0 text-base before:absolute before:top-0 before:left-0 before:w-full before:border-2 before:border-blue-700 before:h-full before:rounded-full before:-z-10 z-10 relative rounded-full hover:bg-transparent bg-transparent group"
							>
								<Link href="#">
									<span className="px-5 rounded-full flex items-center text-nowrap text-white size-full transition duration-300 bg-blue-700 group-hover:-translate-y-2 group-active:-translate-y-1 font-serif text-lg italic">
										Contact me
									</span>
								</Link>
							</Button>
							<Button
								key={2}
								asChild
								size="lg"
								variant="ghost"
								className="relative px-5 text-base rounded-full hover:ring hover:bg-transparent hover:ring-white/5 before:absolute before:bottom-0 before:w-[80%] before:h-0.5 before:transition-all before:duration-300 before:rounded-full before:bg-white/5 hover:before:bg-transparent hover:before:size-full"
							>
								<Link href="#">
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
			<div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
				<svg
					className="block relative h-24 w-full"
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
			</div>
			<Button
				asChild
				className="absolute hidden bottom-4 right-1/2 rounded-full size-12 border border-white lg:flex items-center justify-center animate-pulse"
			>
				<Link className="hover:bg-transparent  text-white bg-transparent" href={"#about"} prefetch>
					<ChevronsDown className="size-6" />
				</Link>
			</Button>
		</section>
	);
}
