import { useTranslations } from "next-intl";
import { StickyProjects } from "@/components/sticky-projects";

export default function Projects() {
	const t = useTranslations("Projects");

	const projects = [
		{
			image: "/images/ipad-optiride.png",
			alt: "",
			id: 1,
		},
		{
			image: "/images/ipad-optiride.png",
			alt: "",
			id: 2,
		},
		{
			image: "/images/ipad-optiride.png",
			alt: "",
			id: 3,
		},
	];

	return (
		<section id="projects">
			<div className="py-32 flex flex-col gap-12 relative z-1 max-w-7xl px-6 mx-auto">
				<div className="flex flex-col gap-4 justify-between text-center">
					<h2 className="md:text-7xl text-5xl text-accent mb-4">
						{t("title")}
					</h2>
					<p className="max-w-120 mb-8 text-pretty mx-auto">
						{t("description")}
					</p>
				</div>
				<StickyProjects cards={projects} />
			</div>
		</section>
	);
}
