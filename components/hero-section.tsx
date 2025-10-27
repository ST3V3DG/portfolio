import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DotGrid from "./DotGrid";

export default function HeroSection() {
	return (
		<section className="relative lg:h-dvh">
			<DotGrid
				className="-z-50"
				dotSize={4}
				gap={15}
				baseColor="#232323"
				activeColor="#ffffff"
				proximity={120}
				shockRadius={250}
				shockStrength={5}
				resistance={750}
				returnDuration={1.5}
			/>

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
				<Link className="hover:bg-transparent  text-white bg-transparent" href={"#about"}>
					<ChevronsDown className="size-6" />
				</Link>
			</Button>
		</section>
	);
}
