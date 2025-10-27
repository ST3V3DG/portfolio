import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CtaProps = {
	title?: string;
	description?: string;
	buttonText?: string;
	buttonUrl?: string;
	items?: string[];
};

const defaultItems = ["Best Ranking", "Support", "Clean Design", "Great Performance", "Handsome user experience"];

export default function CtaSection({
	title = "Let's create something together!",
	description = "You imagine, I build.",
	buttonText = "Contact Me",
	buttonUrl = "https://wa.me/+237676068279",
	items = defaultItems,
}: CtaProps) {
	return (
		<section id="contact" className="pt-32 lg:pt-62 lg:pb-32 relative bg-white">
			<div className="absolute top-0 left-0 w-full overflow-hidden">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="fill-black"
					></path>
				</svg>
			</div>
			<div className="max-w-6xl px-6 mx-auto">
				<div className="bg-black flex flex-col items-start justify-between gap-6 rounded-xl px-6 py-10 md:flex-row lg:px-20 lg:py-24 z-50 border">
					<div>
						<h2 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h2>
						<p className="text-muted-foreground text-normal">{description}</p>
						<Button className="mt-6 rounded-full cursor-pointer p-0 group gap-0" asChild>
							<Link href={buttonUrl} target="_blank" className="flex items-center pl-3 justify-center">
								<span>{buttonText}</span>{" "}
								<span className="h-full aspect-square flex items-center justify-center rounded-full group-hover:translate-x-1 transition">
									<ArrowRight className="size-4" />
								</span>
							</Link>
						</Button>
					</div>
					<div className="md:w-1/3">
						<ul className="flex flex-col space-y-2 text-sm font-medium">
							{items.map((item, idx) => (
								<li className="flex items-center" key={idx}>
									<CheckCircle className="text-emerald-500 dark:text-emerald-400 mr-4 size-4 flex-shrink-0" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
