import { Github } from "lucide-react";
import Link from "next/link";

const links = [
	{
		title: "About",
		href: "#about",
	},
	{
		title: "Projects",
		href: "#projects",
	},
	{
		title: "Testimonial",
		href: "#testimonial",
	},
	{
		title: "FAQ",
		href: "#faq",
	},
];

export default function Footer() {
	return (
		<footer className="overflow-y-hidden border-muted border-t bg-black py-12 md:pb-0">
			<div className="mx-auto max-w-5xl px-6">
				<Link
					aria-label="go home"
					className="mx-auto flex size-10 items-center justify-center rounded-full bg-white p-2 text-center font-extrabold text-black italic"
					href="/"
				>
					SD
				</Link>

				<div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
					{links.map((link, index) => (
						<Link
							className="block text-muted-foreground duration-150 hover:text-primary"
							href={link.href}
							key={index}
						>
							<span>{link.title}</span>
						</Link>
					))}
				</div>
				<div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
					<Link
						aria-label="Github"
						className="block text-muted-foreground hover:text-primary"
						href="https://github.com/ST3V3DG"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github fill="#a1a1a1" />
					</Link>
					<Link
						aria-label="LinkedIn"
						className="block text-muted-foreground hover:text-primary"
						href="https://www.linkedin.com/in/steve-diego-takoudjou-53332926b"
						rel="noopener noreferrer"
						target="_blank"
					>
						<svg
							className="size-6"
							height="1em"
							viewBox="0 0 24 24"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
								fill="currentColor"
							/>
						</svg>
					</Link>
				</div>
				<span className="block text-center text-muted-foreground text-sm">
					{" "}
					© {new Date().getFullYear()} STEVE D, All rights reserved
				</span>
			</div>
			<p className="hidden overflow-hidden pt-12 text-center font-black text-[15rem] text-white/5 italic leading-48 md:block xl:tracking-[2.15rem]">
				STEVE<span className="hidden lg:inline-block">.D</span>
			</p>
		</footer>
	);
}
