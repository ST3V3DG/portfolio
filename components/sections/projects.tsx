import { useTranslations } from "next-intl";
import { type CardData, StickyProjects } from "@/components/sticky-projects";

type Project = CardData & {
	translationKey:
		| "fashionStudio"
		| "odysiaHotel"
		| "mdsEnrollment"
		| "buildocs"
    | "hoodiego"
    | "krys-male";
};

const demoUsername = process.env.NEXT_PUBLIC_MDS_DEMO_USERNAME;
const demoPassword = process.env.NEXT_PUBLIC_MDS_DEMO_PASSWORD;

const projects: Project[] = [
	{
		id: 1,
		url: "https://fashionstudio.vercel.app",
		name: "Fashion Studio",
		image: "/images/rubber-laptop-mockup-fashion-studio.png",
		alt: "Fashion Studio website on a laptop mockup",
		keywords: ["Fashion", "Studio", "B&W"],
		translationKey: "fashionStudio",
	},
	{
		id: 2,
		url: "https://odysia-hotel.vercel.app",
		name: "Odysia Hotel",
		image: "/images/mac-odysia.png",
		alt: "Odysia Hotel website on a mac",
		keywords: ["Journey", "Odysia", "Hotel"],
		translationKey: "odysiaHotel",
	},
	{
		id: 3,
		url: "https://stevedg.pythonanywhere.com/admin/login/?next=/admin/",
		name: "MDS Enrollment Manager",
		image: "/images/ipad-mds.png",
		alt: "MDS Enrollment Manager dashboard on an iPad",
		keywords: ["Enrollment", "Manager", "MDS"],
		translationKey: "mdsEnrollment",
		credentials:
			demoUsername && demoPassword
				? { username: demoUsername, password: demoPassword }
				: undefined,
	},
	{
		id: 4,
		url: "#",
		name: "Buildocs",
		image: "/images/mac-book-pro-16-buildocs.png",
		alt: "Buildocs project on a mac book pro 16 mockup",
		keywords: ["Software", "Specs", "PM"],
		translationKey: "buildocs",
	},
	{
		id: 5,
		url: "https://hoodiego.vercel.app",
		name: "Hoodiego",
		image: "/images/laptop-hoodiego.png",
		alt: "Hoodiego hoodie store on a laptop",
		keywords: ["Hoodies", "Orange", "Comfort"],
		translationKey: "hoodiego",
	},
	{
		id: 6,
		url: "https://krys-male.vercel.app",
		name: "Krys-male",
		image: "/images/krys-male-smartphone.png",
		alt: "Illustrator portfolio on smartphones",
		keywords: ["Illustration", "Creative", "Cover"],
		translationKey: "krys-male",
	},
];

export default function Projects() {
	const t = useTranslations("Projects");

	const cards: CardData[] = projects.map(
		({ translationKey, ...project }) => ({
			...project,
			description: t(`items.${translationKey}.description`),
			credentials: project.credentials
				? { ...project.credentials, note: t("demoNote") }
				: undefined,
		}),
	);

	return (
		<section id="projects">
			<div className="py-32 flex flex-col gap-36 relative z-1 max-w-7xl mx-auto bg-background">
				<div className="flex flex-col gap-4 justify-between text-center px-4">
					<h2 className="md:text-7xl lg:text-9xl text-5xl text-accent mb-4">
						{t("title")}
					</h2>
					<p className="max-w-144 text-pretty mx-auto text-2xl">
						{t("description")}
					</p>
				</div>
				<StickyProjects cards={cards} />
			</div>
		</section>
	);
}
