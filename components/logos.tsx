import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

type logo = {
	src: string;
	alt: string;
	height: number;
	width: number;
};

const logos: logo[] = [
	{
		src: "/svgs/linux.svg",
		alt: "Linux Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/postman.svg",
		alt: "Postman Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/github.svg",
		alt: "GitHub Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/laravel.svg",
		alt: "Laravel Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/next-js.svg",
		alt: "Next.js Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/django.svg",
		alt: "Django Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/typescript.svg",
		alt: "TypeScript Logo",
		height: 20,
		width: 20,
	},
	{
		src: "/svgs/git.svg",
		alt: "Git Logo",
		height: 20,
		width: 20,
	},
];

export default function Logos() {
	return (
		<div className="mb-2">
			<InfiniteSlider
				speedOnHover={20}
				speed={40}
				gap={75}
				direction="horizontal"
				className="w-full"
			>
				{logos.map((logo, index) => (
					<div className="flex" key={index}>
						<Image
							className="mx-auto h-12 lg:h-16 invert w-fit opacity-50"
							src={logo.src}
							alt={logo.alt}
							height={logo.height}
							width={logo.width}
						/>
					</div>
				))}
			</InfiniteSlider>
		</div>
	);
}
