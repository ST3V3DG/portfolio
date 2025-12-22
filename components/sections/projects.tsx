"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

        const svgTl = gsap.timeline();

        svgTl.from("#projects svg path", {
            drawSVG: 0,
            scrollTrigger: {
                trigger: "#projects",
                start: "top center",
                end: "bottom center",
                scrub: 2,
            },
        });
    });
    return <section id="projects" className="px-6 py-32 min-h-[200dvh] flex flex-col gap-12 bg-background relative z-1">
        <div className="flex flex-col gap-4 justify-between text-center">
            <h2 className="md:text-7xl text-5xl text-accent">Projects</h2>
            <p>Check out some of my projects below</p>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 grow *:border *:overflow-hidden">
            <div className="lg:col-span-2 lg:row-span-2">
                <Link aria-label="eden cosmetics" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://eden-cosmetics.vercel.app/">
                    <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/mac-eden-cosmetics.png" width={1500} />
                    <div className="absolute inset-0  bg-linear-to-b from-transparent to-black to-75% opacity-0 group-hover:opacity-50 transition duration- pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                        <h3 className="flex items-center gap-1"><span>Eden Cosmetics</span><ExternalLink className="size-3 stroke-4" /></h3>
                        <ul className="flex flex-col justify-between items-end font-clash-display">
                            <li>Cosmetics</li>
                            <li>Eden</li>
                            <li>Care</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className="lg:col-span-2 lg:row-span-1">
                <Link aria-label="crypto trade alpha" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://crypto-trade-alpha.vercel.app/">
                    <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/iphone-crypto-trade-alpha.png" width={1500} />
                    <div className="absolute inset-0  bg-linear-to-b from-transparent to-black to-75% opacity-0 group-hover:opacity-50 transition duration- pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                        <h3 className="flex items-center gap-1"><span>Crypto Trade Alpha</span><ExternalLink className="size-3 stroke-4" /></h3>
                        <ul className="flex flex-col justify-between items-end font-clash-display">
                            <li>Crypto</li>
                            <li>Trade</li>
                            <li>Alpha</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className="lg:col-span-2 lg:row-span-1">
                <Link aria-label="fashion studio" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://fashionstudio.vercel.app/">
                    <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/mac-fashion-studio.png" width={1500} />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black to-75% opacity-0 group-hover:opacity-50 transition duration- pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                        <h3 className="flex items-center gap-1"><span>Fashion Studio</span><ExternalLink className="size-3 stroke-4" /></h3>
                        <ul className="flex flex-col justify-between items-end font-clash-display">
                            <li>Fashion</li>
                            <li>Studio</li>
                            <li>B&W</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className="lg:col-span-3 lg:row-span-1">
                <Link aria-label="odysia hotel" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://odysia-hotel.vercel.app/">
                    <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/mac-odysia.png" width={1500} />
                    <div className="absolute inset-0  bg-linear-to-b from-transparent to-black to-75% opacity-0 group-hover:opacity-50 transition duration- pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                        <h3 className="flex items-center gap-1"><span>Odysia Hotel</span><ExternalLink className="size-3 stroke-4" /></h3>
                        <ul className="flex flex-col justify-between items-end font-clash-display">
                            <li>Journey</li>
                            <li>Odysia</li>
                            <li>Hotel</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className="lg:col-span-1 lg:row-span-1">
                <Link aria-label="steve the developer" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://stevethedeveloper.vercel.app/">
                    <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/ipad-air-steve-the-developer.png" width={1500} />
                    <div className="absolute inset-0  bg-linear-to-b from-transparent to-black to-75% opacity-0 group-hover:opacity-50 transition duration- pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                        <h3 className="flex items-center gap-1"><span>Steve.D</span><ExternalLink className="size-3 stroke-4" /></h3>
                        <ul className="flex flex-col justify-between items-end font-clash-display">
                            <li>Developer</li>
                            <li>Steve.D</li>
                            <li>Web</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className="lg:col-span-4 lg:row-span-1">
                <Link aria-label="mck medical care" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://mckmedicalcare.vercel.app/">
                    <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={2000} src="/images/iphone-mck-medical-care.png" width={2000} />
                    <div className="absolute inset-0  bg-linear-to-b from-transparent to-black to-75% opacity-0 group-hover:opacity-50 transition duration- pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                        <h3 className="flex items-center gap-1"><span>MCK Medical Care</span><ExternalLink className="size-3 stroke-4" /></h3>
                        <ul className="flex flex-col justify-between items-end font-clash-display">
                            <li>Medical</li>
                            <li>Care</li>
                            <li>Trip</li>
                        </ul>
                    </div>
                </Link>
            </div>
        </div>
        <svg className="absolute hidden lg:block -top-2 right-0 w-full h-[calc(100%+25px)] -z-1" viewBox="0 0 332 825" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path d="M56.5002 0C56.5002 0 0.5 50 0.5 108C0.5 230 205.5 209 253 209C300.5 209 339.5 232 339.5 296C339.5 360 208.741 498.737 228 546.5C253 608.5 356.5 598 356.5 672.5C356.5 747 269.5 823.5 269.5 823.5" stroke="var(--secondary)" strokeWidth="8" />
        </svg>
    </section>
}