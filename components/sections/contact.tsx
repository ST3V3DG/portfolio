"use client";

import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

const APP_EMAIL = "stevediego2004@gmail.com";
const APP_PHONE = "+237 676 06 82 79";
const APP_PHONE_2 = "";

export function Contact() {
    const socialLinks = [
        {
            icon: GithubIcon,
            href: "https://github.com/ST3V3DG",
            label: "GitHub",
        },
        {
            icon: LinkedinIcon,
            href: "https://www.linkedin.com/in/steve-diego-takoudjou-53332926b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAw%2B0rmZJQM2%2Bpe9jCQQBug%3D%3D",
            label: "LinkedIn",
        },
    ];

    return (
        <section id="contact" className="bg-background">
            <div className="pt-32 lg:border-x max-w-7xl max-md:px-6 mx-auto">
                <div className="flex grow flex-col justify-center md:items-center gap-4 ">
                    <h2 className="text-5xl md:text-7xl text-accent">Contact Me</h2>
                    <p className="mb-16 text-base text-muted-foreground">
                        Contact me for any questions or inquiries.
                    </p>
                </div>
                <BorderSeparator />
                <div className="grid md:grid-cols-3">
                    <Box
                        description="We respond to all emails within 24 hours."
                        icon={Mail}
                        title="Email"
                    >
                        <Link
                            className="font-medium font-mono text-sm tracking-wide hover:underline"
                            href={`mailto:${APP_EMAIL}`}
                            aria-label="Email"
                        >
                            {APP_EMAIL}
                        </Link>
                    </Box>
                    <Box
                        description="Drop by our office for a chat."
                        icon={MapPin}
                        title="Location"
                    >
                        <span className="font-medium font-mono text-sm tracking-wide">
                            Littoral-Douala, Cameroon
                        </span>
                    </Box>
                    <Box
                        className="border-b-0 md:border-r-0"
                        description="We're available Mon-Fri, 9am-5pm."
                        icon={Phone}
                        title="Phone"
                    >
                        <div>
                            <Link
                                className="block font-medium font-mono text-sm tracking-wide hover:underline"
                                href={`tel:${APP_PHONE}`}
                                aria-label="Phone 1"
                            >
                                {APP_PHONE}
                            </Link>
                            <Link
                                className="block font-medium font-mono text-sm tracking-wide hover:underline"
                                href={`tel:${APP_PHONE_2}`}
                                aria-label="Phone 2"
                            >
                                {APP_PHONE_2}
                            </Link>
                        </div>
                    </Box>
                </div>
                <BorderSeparator />
                <div className="z-1 flex h-full flex-col items-center justify-center gap-4 py-12">
                    <h2 className="text-center font-medium text-2xl text-muted-foreground tracking-tight md:text-3xl">
                        Find me <span className="text-accent">online</span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-2">
                        {socialLinks.map((link) => (
                            <Link aria-label={link.label}
                                className="flex items-center gap-x-2 border bg-card px-3 py-1.5 shadow hover:bg-accent transition duration- group"
                                href={link.href}
                                key={link.label}
                                // rel="noopener noreferrer"
                                target="_blank"
                            >
                                <link.icon className="size-3.5 fill-current group-hover:fill-primary transition duration-300 stroke-0" />
                                <span className="font-medium font-mono text-xs tracking-wide">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function BorderSeparator({ className }: React.ComponentProps<"div">) {
    return (
        <div aria-hidden="true" className={cn("absolute inset-x-0 h-px w-full border-b", className)} />
    );
}

type ContactBox = React.ComponentProps<"div"> & {
    icon: LucideIcon;
    title: string;
    description: string;
};

function Box({
    title,
    description,
    className,
    children,
    ...props
}: ContactBox) {
    return (
        <section
            className={cn(
                "flex flex-col justify-between border-b md:border-r md:border-b-0",
                className
            )}
        >
            <div className="flex items-center gap-x-3 border-b bg-secondary/50 px-12 py-4 dark:bg-secondary/20">
                <props.icon className="size-5 text-muted-foreground" strokeWidth={1} />
                <h2 className="font-heading font-medium text-lg tracking-wider">
                    {title}
                </h2>
            </div>
            <div className="flex items-center gap-x-2 p-12">{children}</div>
            {/* <div className="border-t p-4">
                <p className="text-muted-foreground text-sm">{description}</p>
            </div> */}
        </section>
    );
}

export const GithubIcon = (props: React.ComponentProps<"svg">) => (
    <svg fill="currentColor" viewBox="0 0 1024 1024" aria-label="Github" role="img" {...props}>
        <path
            clipRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
            fillRule="evenodd"
            transform="scale(64)"
        />
    </svg>
);

export const LinkedinIcon = (props: React.ComponentProps<"svg">) => (
    <svg aria-label="Linkedin" role="img" viewBox="0 0 382 382" fill="currentColor" {...props}>

        <g strokeWidth="0" />

        <g strokeLinecap="round" strokeLinejoin="round" />

        <g> <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" /> </g>

    </svg>
);

// const XIcon = (props: React.ComponentProps<"svg">) => (
//     <svg
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-label="X"
//         role="img"
//         {...props}
//     >
//         <path
//             className="fill-current group-hover:fill-primary transition duration-300"
//             d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z"
//         />
//     </svg>
// );
