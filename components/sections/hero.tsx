"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import Logos from "@/components/logos";
import { PagePreloaderContext } from "@/providers/page-preloader";

export default function Hero() {
  gsap.registerPlugin(useGSAP);
  const tl = useContext(PagePreloaderContext);

  const t = useTranslations("Hero");

  useGSAP(
    () => {
      tl?.to("h1 div > span:nth-child(1)", {
        xPercent: 201,
        duration: 2,
        ease: "power3.inOut",
      });
    },
    { dependencies: [tl] },
  );

  return (
    <section id="hero" className="bg-background-grainy">
      <div className="pt-16 max-w-7xl px-6 mx-auto lg:h-screen">
        <div className="grid grid-rows-3 grid-cols-1 size-full xl:gap-38">
          <h1 className="text-[2.5rem] sm:text-[6rem] md:text-[4rem] lg:text-[5.5rem] 2xl:text-[7rem] leading-none text-balance capitalize text-accent">
            <div>{t("titleLine1")}</div>{" "}
            <div className="overflow-hidden w-fit relative z-20">
              <span
                aria-hidden="true"
                className="absolute -left-full bottom-0 size-full bg-primary -z-1"
              />
              <span className="mix-blend-luminosity">{t("titleLine2")}</span>
            </div>
          </h1>
          <div className="flex lg:flex-row flex-col justify-start lg:justify-between gap-12 row-span-2">
            <div className="lg:w-1/2 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4 opacity-50 text-lg">
                <p>{t("description1")}</p>
                <p>{t("description2")}</p>
              </div>
              <Logos />
            </div>
            <div className="lg:w-1/2 overflow-hidden">
              <Image
                alt="Hero image"
                className="hover:scale-110 transition duration-300 size-full object-cover"
                height={1500}
                priority
                src="/images/i.png"
                width={1500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
