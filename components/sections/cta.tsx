import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CallToAction() {
	const t = useTranslations("CTA");

	return (
		<section className="bg-background z-1 cv-auto border-b-px" id="cta">
			<div className="mx-auto max-w-7xl">
				<div className="lg:border-x">
					<Separator />
					<div className="flex flex-col justify-center md:justify-between items-center gap-4 md:flex-row w-full *:py-12 md:*:py-6 md:*:px-6">
						<div className="max-md:pb-0 flex items-center">
							<h2 className="text-center font-bold text-2xl md:text-left md:text-3xl">
								{t("title")}
							</h2>
            </div>
						
						<div className="flex items-center justify-center md:border-l gap-2 max-md:pt-0 *:rounded-none">
							<Button
								asChild
								className="bg-accent font-bold text-background hover:bg-accent/80 transition duration-300"
								size="lg"
							>
								<Link
									href="#"
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
