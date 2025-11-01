import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// type FaqItem = {
// 	id: string;
// 	question: string;
// 	answer: string;
// };

// type FaqProps = {
// 	heading: string;
// 	description: string;
// 	items?: FaqItem[];
// 	supportHeading: string;
// 	supportDescription: string;
// 	supportButtonText: string;
// 	supportButtonUrl: string;
// };

const faqItems = [
	{
		id: "faq-1",
		question: "What services do you offer?",
		answer: "I offer a range of web development services, including custom website design and development, e-commerce solutions, and content management systems. I can also help with website maintenance and updates.",
	},
	{
		id: "faq-2",
		question: "What technologies do you specialize in?",
		answer: "I specialize in front-end development with React, Next.js, and TypeScript. I also have experience with back-end technologies like Node.js, Express, and databases such as PostgreSQL and MongoDB.",
	},
	{
		id: "faq-3",
		question: "What is your development process?",
		answer: "My development process is collaborative and iterative. I start with a discovery phase to understand your needs, followed by design, development, and testing. I provide regular updates and seek feedback throughout the process to ensure the final product meets your expectations.",
	},
	{
		id: "faq-4",
		question: "How long does it take to build a website?",
		answer: "The timeline for building a website varies depending on the complexity of the project. A simple brochure website can take a few weeks, while a more complex web application can take several months. I will provide a detailed timeline after our initial consultation.",
	},
	{
		id: "faq-5",
		question: "How can I get started?",
		answer: "The best way to get started is to contact me through the contact form on my website. Please provide as much detail as possible about your project, and I will get back to you within 24 hours to schedule a consultation.",
	},
];

const heading = "Frequently asked questions";
const description =
	"Find answers to common questions about me and my work. Can't find what you're looking for? Contact me.";
const items = faqItems;

export default function FaqSection() {
	return (
		<section
			className="relative min-h-screen w-full bg-radial-[200%_120%_at_50%_90%] from-65% from-black to-70% to-white pt-40 lg:bg-radial-[125%_125%_at_50%_90%] lg:pt-60"
			id="faq"
		>
			{/*<div className="min-h-screen w-full relative">*/}
			{/* Radial Gradient Background from Bottom */}
			{/*<div
      className="absolute inset-0 z-0"
    />*/}
			{/* Your Content/Components */}
			{/*</div>*/}
			<div className="mx-auto max-w-6xl space-y-16 px-6 pt-16 pb-16 lg:pt-0">
				<div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
					<h2 className="mb-3 font-semibold text-3xl md:mb-4 lg:mb-6 lg:text-5xl">{heading}</h2>
					<p className="text-muted-foreground lg:text-lg">{description}</p>
				</div>
				<Accordion className="mx-auto w-full lg:max-w-3xl" collapsible type="single">
					{items.map((item) => (
						<AccordionItem key={item.id} value={item.id}>
							<AccordionTrigger className="cursor-pointer transition-opacity duration-300 focus-within:ring-0 hover:no-underline hover:opacity-60">
								<div className="cursor-pointer font-medium sm:py-1 lg:py-2 lg:text-lg">
									{item.question}
								</div>
							</AccordionTrigger>
							<AccordionContent className="sm:mb-1 lg:mb-2">
								<div className="text-muted-foreground lg:text-lg">{item.answer}</div>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
