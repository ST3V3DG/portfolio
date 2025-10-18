import AboutSection from "@/components/about-section";
import CtaSection from "@/components/cta-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
	return (
		<>
			<Header />
			<main className="overflow-x-hidden">
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<TestimonialSection />
				<CtaSection />
				<FaqSection />
				<Footer />
			</main>
		</>
	);
}
