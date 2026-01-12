import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
	quote: string;
	author: {
		name: string;
		role: string;
		avatar: {
			src: string;
			alt: string;
		};
	};
};

export default function Testimonial() {
	const t = useTranslations("Testimonials");

	const testimonials: Testimonial[] = [
		{
			quote: t("item1.quote"),
			author: {
				name: t("item1.authorName"),
				role: t("item1.authorRole"),
				avatar: {
					src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
					alt: "Customer Name",
				},
			},
		},
		{
			quote: t("item2.quote"),
			author: {
				name: t("item2.authorName"),
				role: t("item2.authorRole"),
				avatar: {
					src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
					alt: "Customer Name",
				},
			},
		},
	];
	return (
		<section id="testimonials" className="bg-secondary">
			<div className="py-32 flex flex-col justify-center items-center gap-16 max-w-7xl px-6 mx-auto">
				<div className="flex flex-col gap-2 items-center justify-center text-center">
					<h2 className="md:text-7xl text-5xl text-accent">
						{t("title")}
					</h2>
					<p>{t("description")}</p>
				</div>
				<div className="flex flex-col gap-16 md:flex-row items-center text-center max-w-5xl">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center"
						>
							<blockquote className="mb-8 max-w-4xl px-8 font-medium lg:text-xl">
								&ldquo;{testimonial.quote}&rdquo;
							</blockquote>
							<div className="flex items-center gap-2 md:gap-4">
								<Avatar className="size-12">
									<AvatarImage
										src={testimonial.author.avatar.src}
										alt={testimonial.author.avatar.alt}
									/>
									<AvatarFallback>
										{testimonial.author.name}
									</AvatarFallback>
								</Avatar>
								<div className="text-left">
									<p className="text-sm font-medium md:text-base">
										{testimonial.author.name}
									</p>
									<p className="text-sm text-muted-foreground md:text-base">
										{testimonial.author.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
