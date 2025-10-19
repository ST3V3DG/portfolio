import Image from "next/image";

type AboutProps = {
	title?: string;
	description?: string;
	mainImage?: {
		src: string;
		alt: string;
	};
	secondaryImage?: {
		src: string;
		alt: string;
	};
	breakout?: {
		src: string;
		alt: string;
		title?: string;
		description?: string;
		buttonText?: string;
		buttonUrl?: string;
	};
	companiesTitle?: string;
	companies?: Array<{
		src: string;
		alt: string;
	}>;
	achievementsTitle?: string;
	achievementsDescription?: string;
	achievements?: Array<{
		label: string;
		value: string;
	}>;
};

const defaultAchievements = [
	{ label: "Companies Supported", value: "300+" },
	{ label: "Projects Finalized", value: "800+" },
	{ label: "Happy Customers", value: "99%" },
	{ label: "Recognized Awards", value: "10+" },
];

export default function AboutSection({
	title = "About Me",
	description = "I'm a fullstack wed developer with 3 years in web development. I've build many web app and website using modren technologies for best performance, nice UX/UI design and great SEO.",
	mainImage = {
		src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
		alt: "placeholder",
	},
	achievementsTitle = "Our Achievements in Numbers",
	achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
	achievements = defaultAchievements,
}: AboutProps = {}) {
	return (
		<section id="about" className="py-32 relative bg-white">
			<div className="max-w-6xl px-6 mx-auto">
				<div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left text-black">
					<h2 className="text-3xl lg:text-5xl font-semibold">{title}</h2>
					<p className="text-normal">{description}</p>
				</div>
				<div className="grid mb-14 gap-6 max-h-96 md:grid-cols-2 lg:grid-cols-3 *:rounded-xl lg:grid-rows-3">
					<div className="lg:col-span-2">
						<Image
							src={mainImage.src}
							alt={mainImage.alt}
							width={500}
							height={40}
							className="size-full object-cover"
						/>
					</div>
					<div className="lg:row-span-2">
						<Image
							src={mainImage.src}
							alt={mainImage.alt}
							width={500}
							height={500}
							className="size-full object-cover"
						/>
					</div>
					<div className="lg:row-span-2">
						<Image
							src={mainImage.src}
							alt={mainImage.alt}
							width={500}
							height={500}
							className="size-full object-cover"
						/>
					</div>
					<div className="lg:row-span-2">
						<Image
							src={mainImage.src}
							alt={mainImage.alt}
							width={500}
							height={500}
							className="size-full object-cover"
						/>
					</div>
					<div className="md:col-span-2 lg:col-span-1">
						<Image
							src={mainImage.src}
							alt={mainImage.alt}
							width={500}
							height={20}
							className="size-full object-cover"
						/>
					</div>
				</div>
				{/*<div className="py-32">
          <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div>
        </div>*/}
				<div className="bg-muted relative overflow-hidden rounded-xl p-10 md:p-16">
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
						className="fill-black"
					></path>
				</svg>
			</div>
		</section>
	);
}
