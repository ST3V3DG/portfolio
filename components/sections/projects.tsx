"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Projects() {
    const t = useTranslations('Projects');

    useGSAP(() => {
        gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

        const svgTl = gsap.timeline();

        svgTl.from("#projects svg path", {
            drawSVG: 0,
            scrollTrigger: {
                trigger: "#projects",
                start: "top center",
                end: "bottom center",
                scrub: 4,
            },
        });
    });
    return <section id="projects" className="bg-background focus-within:outline-none">
        <div className="py-32 flex flex-col gap-12 bg-background relative z-1 max-w-7xl px-6 mx-auto focus-within:outline-none">
            <div className="flex flex-col gap-4 justify-between text-center focus-within:outline-none">
                <h2 className="md:text-7xl text-5xl text-accent">{t('title')}</h2>
                <p>{t('description')}</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 grow *:border *:overflow-hidden focus-within:outline-none">
                <div className="lg:col-span-2 lg:row-span-2">
                    <Link aria-label="eden cosmetics" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://eden-cosmetics.vercel.app/">
                        <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/mac-eden-cosmetics.png" width={1500} />
                        <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
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
                        <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
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
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
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
                        <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
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
                        <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                            <h3 className="flex items-center gap-1"><span>Steve.D</span><ExternalLink className="size-3 stroke-4" /></h3>
                            <ul className="flex flex-col justify-between items-end font-clash-display">
                                <li>Developer</li>
                                <li>Steve.D</li>
                                <li>Web</li>
                            </ul>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-2 lg:row-span-1">
                    <Link aria-label="mck medical care" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://mckmedicalcare.vercel.app/">
                        <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/iphone-mck-medical-care.png" width={1500} />
                        <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                            <h3 className="flex items-center gap-1"><span>MCK Medical Care</span><ExternalLink className="size-3 stroke-4" /></h3>
                            <ul className="flex flex-col justify-between items-end font-clash-display">
                                <li>Medical</li>
                                <li>Travel</li>
                                <li>Care</li>
                            </ul>
                        </div>
                    </Link>
                </div>
                <div className="lg:col-span-2 lg:row-span-1">
                    <Link aria-label="optiride" className="group relative lg:grayscale lg:hover:grayscale-0 transition duration-300" target="_blank" href="https://optiride.vercel.app/">
                        <Image alt="project image" className="size-full object-cover group-hover:scale-110 transition duration-300" height={1500} src="/images/ipad-optiride.png" width={1500} />
                        <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                            <h3 className="flex items-center gap-1"><span>OptiRide</span><ExternalLink className="size-3 stroke-4" /></h3>
                            <ul className="flex flex-col justify-between items-end font-clash-display">
                                <li>Carpooling</li>
                                <li>Ride</li>
                                <li>Trip</li>
                            </ul>
                        </div>
                    </Link>
                </div>
            </div>
            <svg className="absolute hidden lg:block -top-16 left-0 w-full h-[calc(110%)] -z-1" viewBox="-10 0 332 825" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
                <path d="M33.4762 0.309937C33.4762 0.309937 -26.8329 76.2484 15.6671 116.31C58.167 156.371 138.586 157.603 138.586 157.603C192.167 157.603 313.667 140.31 313.667 210.31C280.167 301.81 85.667 186.31 55.167 301.81C55.167 420.31 356.167 338.31 313.667 441.81C296.699 483.133 175.45 575.357 138.586 618.31C62.4045 707.074 55.167 791.31 55.167 791.31" stroke="var(--secondary)" strokeWidth="8" />
            </svg>
        </div>
    </section>
}