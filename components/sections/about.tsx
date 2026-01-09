import { Binary, CodeXml, SquareTerminal, Webhook } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
	const t = useTranslations("About");

	const about = [
		{
			title: t("item1.title"),
			description: t("item1.description"),
			icon: (
				<Webhook
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
		{
			title: t("item2.title"),
			description: t("item2.description"),
			icon: (
				<Binary
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
		{
			title: t("item3.title"),
			description: t("item3.description"),
			icon: (
				<SquareTerminal
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
		{
			title: t("item4.title"),
			description: t("item4.description"),
			icon: (
				<CodeXml
					className="size-40 opacity-10 translate-x-1/3 self-end group-hover:translate-x-0 transition-all duration-300"
					strokeLinecap="inherit"
				/>
			),
		},
	];

	return (
		<section id="about" className="bg-secondary">
			<div className="py-32 flex flex-col justify-center items-center gap-16 max-w-7xl px-6 mx-auto">
				<div className="flex flex-col gap-2 items-center justify-center text-center">
					<h2 className="md:text-7xl text-5xl text-accent">
						{t("title")}
					</h2>
					<p>{t("description")}</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center max-md:gap-16 max-md:[&>div:nth-child(even)>div:first-child]:order-2 max-md:[&>div:nth-child(odd)>div:first-child]:scale-[-1] max-md:[&>div:nth-child(odd)>div:last-child>p]:text-end max-md:[&>div:nth-child(even)>div:last-child]:order-1 max-md:[&>div>div:nth-child(1)]:border-l max-md:[&>div:nth-child(even)>div:last-child>svg]:self-start max-md:[&>div:nth-child(even)>div:last-child>svg]:-translate-x-1/3">
					{about.map((feature, index) => (
						<div
							className="grid grid-cols-3 gap-2 h-96 lg:w-1/4 lg:hover:w-1/2 overflow-hidden transition-all duration-300 origin-left group"
							key={index}
						>
							<div className="overflow-hidden md:border-r shrink-0">
								<p className="text-8xl font-bold text-accent font-clash-display writing-mode-vertical-lr md:scale-[-1] text-center">
									{feature.title}
								</p>
							</div>
							<div className="col-span-2 flex flex-col justify-between overflow-hidden">
								<p className="md:opacity-50 group-hover:opacity-100 transition-all duration-300 min-w-52">
									{feature.description}
								</p>
								{feature.icon}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
