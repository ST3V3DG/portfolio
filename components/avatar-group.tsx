"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarGroup() {
	const users = [
		{ name: "Sophie Martin", image: "/avatars/avatar-15.jpg" },
		{ name: "Leo Anderson", image: "/avatars/avatar-16.jpg" },
		{ name: "Chloe Thompson", image: "/avatars/avatar-17.jpg" },
		{ name: "Max Rodriguez", image: "/avatars/avatar-18.jpg" },
		{ name: "Zoe Garcia", image: "/avatars/avatar-19.jpg" },
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
