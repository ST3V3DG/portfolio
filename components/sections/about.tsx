import { Binary,
	CodeXml,
	// Container,
	SquareTerminal,
	// Terminal,
	Webhook } from "lucide-react";

const about = [
	{
		title: "01",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		icon: <Webhook className="size-40 opacity-10 translate-x-1/3 self-end" strokeLinecap="inherit" />
	},
	{
		title: "02",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		icon: <Binary className="size-40 opacity-10 translate-x-1/3 self-end" strokeLinecap="inherit" />
	},
	{
		title: "03",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		icon: <SquareTerminal className="size-40 opacity-10 translate-x-1/3 self-end" strokeLinecap="inherit" />
	},
	{
		title: "04",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		icon: <CodeXml className="size-40 opacity-10 translate-x-1/3 self-end" strokeLinecap="inherit" />
	},
	// {
	// 	title: "05",
	// 	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	// 	icon: <Terminal className="size-40 opacity-10 translate-x-1/3 self-end" strokeLinecap="inherit" />
	// },
	// {
	// 	title: "06",
	// 	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
	// 	icon: <Container className="size-40 opacity-10 translate-x-1/3 self-end" strokeLinecap="inherit" />
	// },
];

export default function About() {
	return (
		<section id="about" className="px-6 py-32 flex flex-col justify-center items-center gap-16 bg-secondary">
			<div className="flex flex-col gap-2 items-center justify-center text-center">
				<h2 className="md:text-7xl text-5xl text-accent">About me</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
			</div>
			<div className="flex flex-col md:flex-row justify-center max-md:gap-16 max-md:[&>div:nth-child(even)>div:first-child]:order-2 max-md:[&>div:nth-child(odd)>div:first-child]:scale-[-1] max-md:[&>div:nth-child(odd)>div:last-child>p]:text-end max-md:[&>div:nth-child(even)>div:last-child]:order-1 max-md:[&>div>div:nth-child(1)]:border-l max-md:[&>div:nth-child(even)>div:last-child>svg]:self-start max-md:[&>div:nth-child(even)>div:last-child>svg]:-translate-x-1/3">
				{about.map((feature, index) => (
					<div className="grid grid-cols-3 gap-2 h-96 lg:w-1/4 lg:hover:w-1/2 overflow-hidden transition-all duration-300 origin-left group" key={index}>
						<div className="overflow-hidden md:border-r shrink-0">
							<p className="text-8xl font-bold text-accent font-clash-display writing-mode-vertical-lr md:scale-[-1] text-center">
								{feature.title}
							</p>
						</div>
						<div className="col-span-2 flex flex-col justify-between overflow-hidden">
							<p className="md:opacity-50 group-hover:opacity-100 transition-all duration-300 min-w-52">{feature.description}</p>
							{feature.icon}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
