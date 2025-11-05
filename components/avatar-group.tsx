"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarGroup() {
	const users = [
		{ name: "Sophie Martin", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" },
		{ name: "Leo Anderson", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" },
		{ name: "Chloe Thompson", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" },
		{ name: "Max Rodriguez", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp" },
		{ name: "Zoe Garcia", image: "/https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp" },
		{ name: "Additional Users", count: 3 },
	];

	return (
		<div className="-space-x-2 flex items-center *:ring-3 *:ring-background">
			{users.slice(0, 4).map((user, index) => (
				<Avatar className="size-10" key={index}>
					<AvatarImage alt={user.name} src={user.image} />
					<AvatarFallback>
						{user.name
							.split(" ")
							.map((n) => n[0])
							.join("")}
					</AvatarFallback>
				</Avatar>
			))}
			{users.length > 4 && (
				<Avatar className="z-10 size-10 font-medium text-muted-foreground text-sm">
					<AvatarFallback>+{users.slice(4).reduce((acc, user) => acc + (user.count || 1), 0)}</AvatarFallback>
				</Avatar>
			)}
		</div>
	);
}
