import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

// const defaultAchievements = [
// 	{ label: "Companies Supported", value: "300+" },
// 	{ label: "Projects Finalized", value: "800+" },
// 	{ label: "Happy Customers", value: "99%" },
// 	{ label: "Recognized Awards", value: "10+" },
// ];

const technologies = 
  [
    {
      src: "/images/technos/laravel.png",
			alt: "Laravel logo",
			className: "h-20"
    },
    {
      src: "/images/technos/next-js.webp",
			alt: "Next.js logo",
			className: "h-20"
    },
    {
      src: "/images/technos/django.png",
      alt: "Django logo",
      className: "h-12"
    },
    {
      src: "/images/technos/shadcn-ui.png",
      alt: "Shadcn UI logo"
    },
    {
      src: "/images/technos/tailwind-css.png",
      alt: "Tailwind CSS logo",
      className: "h-8"
    }
  ]

export default function AboutSection() {
	return (
		<section id="about" className="pb-32 pt-16 lg:pb-50 lg:pt-24  relative bg-white">
			<div className="max-w-6xl px-6 mx-auto">
			  <h2 className="text-black text-center text-3xl lg:text-5xl font-semibold mb-12">About Me</h2>
				<div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left text-black">
					<h3 className="text-2xl lg:text-3xl md:text-center">My Experience</h3>
					<div className="flex flex-col gap-4">
  					<p className="text-center md:text-left first-letter:ml-8">
   					  With 3 years of hands-on experience in software development, I've successfully contributed to numerous projects (Web apps and websites). My background includes full involvement in the software lifecycle, from requirements analysis and architecture design to testing and deployment, ensuring scalable and maintanable solutions.
  					</p>
  					<p className="text-center md:text-left first-letter:ml-8">
  					  Throughout my career, I've worked with cross-functional teams, managed codebases of different complexity level and adapted quickly to envolving technologies. My experience in both frontend and backend development enables me to deliver effecient, user-center and high-performance apps.
  					</p>
					</div>
				</div>
				<div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left text-black">
  				<div className="order-2 md:order-1 flex flex-col gap-4">
   					<p className="text-center md:text-left first-letter:ml-8">					
     					I'm a highly skilled software developer with strong expertise in technologies like React.js (Next.js), Laravel, Django, Tailwind CSS, SQL and more. My technical proficiency spans a wide range of areas, including full-stack web development, API design, database optimization, and soon, cloud integration.
   					</p>
   					<p className="text-center md:text-left first-letter:ml-8">					
     					Beyond technical skills, I excel in problem-solving, clean code and architecture practices and continous learning. I'm passoniate about writing efficient, reliable and elegant code, while also maintaining a keen focus on collaboration, documentation and quality standard.
   					</p>
  				</div>
					<h3 className="text-2xl lg:text-3xl md:text-center order-1 md:order-2">My Skils</h3>
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
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {technologies.map((technology, index) => (
              <div className="flex items-center gap-3" key={technology.src + index}>
                <Image
                  src={technology.src}
                  alt={technology.alt}
                  className={cn("h-12 w-auto", technology.className)}
                  width={500}
                  height={500}
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
