import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

export default function LogoSection() {
	return (
		<section className="bg-background pb-16 md:pb-32">
			<div className="group relative m-auto max-w-6xl px-6">
				<div className="flex flex-col items-center md:flex-row">
					<div className="md:max-w-44 md:border-r md:pr-6">
						<p className="text-end text-sm">Powering the best teams</p>
					</div>
					<div className="relative py-6 md:w-[calc(100%-11rem)]">
						<InfiniteSlider gap={112} speed={40} speedOnHover={20}>
							<div className="flex">
								<Image
									alt="Nvidia Logo"
									className="mx-auto h-5 w-fit dark:invert"
									height={20}
									src="https://html.tailus.io/blocks/customers/nvidia.svg"
									width={20}
								/>
							</div>

							<div className="flex">
								<Image
									alt="Column Logo"
									className="mx-auto h-4 w-fit dark:invert"
									height={16}
									src="https://html.tailus.io/blocks/customers/column.svg"
									width={16}
								/>
							</div>
							<div className="flex">
								<Image
									alt="GitHub Logo"
									className="mx-auto h-4 w-fit dark:invert"
									height={16}
									src="https://html.tailus.io/blocks/customers/github.svg"
									width={16}
								/>
							</div>
							<div className="flex">
								<Image
									alt="Nike Logo"
									className="mx-auto h-5 w-fit dark:invert"
									height={20}
									src="https://html.tailus.io/blocks/customers/nike.svg"
									width={20}
								/>
							</div>
							<div className="flex">
								<Image
									alt="Lemon Squeezy Logo"
									className="mx-auto h-5 w-fit dark:invert"
									height={20}
									src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
									width={20}
								/>
							</div>
							<div className="flex">
								<Image
									alt="Laravel Logo"
									className="mx-auto h-4 w-fit dark:invert"
									height={16}
									src="https://html.tailus.io/blocks/customers/laravel.svg"
									width={16}
								/>
							</div>
							<div className="flex">
								<Image
									alt="Lilly Logo"
									className="mx-auto h-7 w-fit dark:invert"
									height={28}
									src="https://html.tailus.io/blocks/customers/lilly.svg"
									width={28}
								/>
							</div>

							<div className="flex">
								<Image
									alt="OpenAI Logo"
									className="mx-auto h-6 w-fit dark:invert"
									height={24}
									src="https://html.tailus.io/blocks/customers/openai.svg"
									width={24}
								/>
							</div>
						</InfiniteSlider>

						<div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
						<div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />
						<ProgressiveBlur
							blurIntensity={1}
							className="pointer-events-none absolute top-0 left-0 h-full w-20"
							direction="left"
						/>
						<ProgressiveBlur
							blurIntensity={1}
							className="pointer-events-none absolute top-0 right-0 h-full w-20"
							direction="right"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
