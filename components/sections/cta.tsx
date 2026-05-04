import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CallToAction() {
	const t = useTranslations("CTA");

	return (
		<section className="bg-background z-1" id="cta">
			<div className="mx-auto max-w-7xl max-md:px-6">
				<div className="lg:border-x">
					<Separator />
					<div className="flex flex-col items-center justify-between md:flex-row w-full">
						<div className="p-4 flex items-center">
							<h2 className="text-center font-bold text-2xl md:text-left md:text-4xl">
								{t("title")}
							</h2>
						</div>
						<div className="flex items-center justify-center gap-2 p-4 md:border-l *:rounded-none">
							<Button
								asChild
								className="bg-accent font-bold text-background hover:bg-accent/80 transition duration-300"
								size="lg"
							>
								<Link
									href="https://wa.me/+237676068279"
									target="_blank"
								>
									{t("letStart")}
								</Link>
							</Button>
						</div>
					</div>
					{/*<Separator />*/}
					{/*<div aria-hidden="true" className="h-32" />*/}
				</div>
			</div>
		</section>
	);
}
