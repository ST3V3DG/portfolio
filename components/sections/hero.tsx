"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useContext } from "react";
import GridDistortion from "@/components/grid-distortion";
import Logos from "@/components/logos";
import { PagePreloaderContext } from "@/providers/page-preloader";

export default function Hero() {
    gsap.registerPlugin(useGSAP);
    const tl = useContext(PagePreloaderContext);

    useGSAP(() => {
        tl?.to("h1 div > span:nth-child(1)", {
            xPercent: 200,
            duration: 2,
            ease: "power3.inOut",
        });
    }, { dependencies: [tl] });

    return (
        <section id="hero" className="px-6 pt-16 bg-background lg:h-dvh">
            <div className="flex flex-col gap-6 justify-between h-full">
                <h1 className="md:text-8xl sm:text-6xl text-4xl text-accent"><span>Minimalistic and Premium</span>{" "}<div className="overflow-hidden w-fit relative z-20">
                    <span aria-hidden="true" className="absolute -left-full bottom-0 size-full bg-primary -z-1"></span>
                    <span className="mix-blend-luminosity">looking website creator</span>
                </div></h1>
                <div className="flex md:flex-row flex-col justify-between gap-16 grow">
                    <div className="md:w-1/2 flex flex-col justify-between gap-16">
                        <p className="opacity-50 text-lg">
                            Make your brand stand out with a modern and premium looking website for you or your business to showcase your products and services. I'm specialized in creating high-performance, visually stunning digital experiences that drive results and elevate your brand identity to the next level.
                        </p>
                        <Logos />
                    </div>
                    <div className="md:w-1/2">
                        <GridDistortion
                            imageSrc="https://static.vecteezy.com/system/resources/thumbnails/065/464/910/small/a-man-with-a-beard-smiles-for-the-camera-free-photo.jpeg"
                            grid={10}
                            mouse={0.1}
                            strength={0.15}
                            relaxation={0.9}
                            className="grayscale hidden lg:block"
                        />
                        <Image alt="Hero image" className="grayscale size-full object-cover lg:hidden" height={500} src="https://static.vecteezy.com/system/resources/thumbnails/065/464/910/small/a-man-with-a-beard-smiles-for-the-camera-free-photo.jpeg" width={500} />
                    </div>
                </div>
            </div>
        </section>
    );
}