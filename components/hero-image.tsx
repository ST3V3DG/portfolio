import { CloudOrbit, OrbitingImage } from "@/components/ui/cloud-orbit";

const orbitingImagesData = [
	{
		speed: 0,
		radius: 125,
		size: 53,
		startAt: 1.1,
		images: [
			{
				name: "Django Logo",
				url: "/images/technos/django.webp",
			},
		],
	},
	{
		speed: 0,
		radius: 140,
		size: 85,
		startAt: 0.25,
		images: [
			{
				name: "Laravel Logo",
				url: "/images/technos/laravel.webp",
			},
		],
	},
	{
		speed: 0,
		radius: 130,
		size: 73,
		startAt: 0.4375,
		images: [
			{
				name: "Shadcn UI Logo",
				url: "/images/technos/shadcn-ui.webp",
			},
		],
	},
	{
		speed: 0,
		radius: 120,
		size: 49,
		startAt: 0.61,
		images: [
			{
				name: "Tailwind Logo",
				url: "/images/technos/tailwind-css.webp",
			},
		],
	},
	// {
	// 	speed: 0,
	// 	radius: 136,
	// 	size: 40,
	// 	startAt: 0.65625,
	// 	images: [
	// 		{
	// 			name: "Next.js Logo",
	// 			url: "/images/technos/next-js-removebg.webp",
	// 		},
	// 	],
	// },
	{
		speed: 0,
		radius: 130,
		size: 75,
		startAt: 0.78,
		images: [
			{
				name: "Next.js Logo",
				url: "/images/technos/next-js-removebg.webp",
			},
		],
	},
	{
		speed: 0,
		radius: 124,
		size: 73,
		startAt: 0.9375,
		images: [
			{
				name: "React Logo",
				url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/react-logo.webp",
			},
		],
	},
];

export default function HeroImage({ className }: { className?: string }) {
	return (
		<CloudOrbit
			duration={3}
			size={160}
			images={[
				{
					name: "Charlie Avatar",
					url: "https://cdn.badtz-ui.com/images/components/cloud-orbit/avatar-1.webp",
				},
			]}
			className={className}
		>
			{orbitingImagesData.map((orbit, index) => (
				<OrbitingImage
					key={`orbit-${index}`}
					speed={orbit.speed}
					radius={orbit.radius}
					size={orbit.size}
					startAt={orbit.startAt}
					images={orbit.images}
					duration={3}
				/>
			))}
		</CloudOrbit>
	);
}
