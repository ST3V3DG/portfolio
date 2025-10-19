import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CtaProps = {
	title?: string;
	description?: string;
	buttonText?: string;
	buttonUrl?: string;
	items?: string[];
};

const defaultItems = ["Best Ranking", "Support", "Clean Design", "Great Performance", "Handsome user experience"];

export default function CtaSection({
	title = "Here we go !",
	description = "Tell me what you want and I'll build what you need.",
	buttonText = "Get Started",
	buttonUrl = "#",
	items = defaultItems,
}: CtaProps) {
	return (
		<section id="contact" className="pt-32 relative bg-blue-700">
			<div className="max-w-6xl px-6 mx-auto">
				<div className="bg-black flex flex-col items-start justify-between gap-6 rounded-xl px-6 py-10 md:flex-row lg:px-20 lg:py-16">
					<div>
						<h2 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h2>
						<p className="text-muted-foreground text-normal">{description}</p>
						<Button className="mt-6 rounded-full" asChild>
							<Link href={buttonUrl} target="_blank">
								{buttonText} <ArrowRight className="size-4" />
							</Link>
						</Button>
					</div>
					<div className="md:w-1/3">
						<ul className="flex flex-col space-y-2 text-sm font-medium">
							{items.map((item, idx) => (
								<li className="flex items-center" key={idx}>
									<CheckCircle className="mr-4 size-4 flex-shrink-0" />
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
