import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LangSwitcher from "@/components/lang-switcher";
import About from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import CallToAction from "@/components/sections/cta";
import { FrequentlyAskQuestion } from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import { Testimonials3D } from "@/components/sections/testimonials-3d";
import AppShell from "@/providers/app-shell";

export default function Home() {
	return (
		<AppShell>
			<div className="relative z-1 w-full bg-background border-b">
				<Header />
				<main className="isolate">
					<Hero />
					<About />
					<Projects />
					<Testimonials3D />
					<FrequentlyAskQuestion />
					<Contact />
					<CallToAction />
				</main>
			</div>
			<Footer />
			<Cursor />
			<LangSwitcher />
		</AppShell>
	);
}