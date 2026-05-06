"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type CardData = {
  id: number | string;
  image: string;
  alt?: string;
  url?: string;
};

type StickyProjectProps = {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
};

export const StickyProjects = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyProjectProps) => {
  const container = useRef(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], {
          y: "100%",
          scale: 1,
          rotation: 0,
        });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className={cn("relative size-full", className)} ref={container}>
      <div className="sticky-cards relative flex w-full h-screen items-center justify-center overflow-hidden">
        <div
          className={cn(
            "relative size-full overflow-hidden",
            containerClassName,
          )}
        >
          {cards.map((card, index) => (
            <Link href={card.url ?? "#"} key={card.id}>
              <Image
                src={card.image}
                alt={card.alt || ""}
                className={cn(
                  "absolute size-full object-cover",
                  imageClassName,
                )}
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                height={1000}
                width={1500}
              />

              {/*<div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-75% lg:opacity-0 lg:group-hover:opacity-50 transition duration-300 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 lg:group-hover:opacity-100 text-accent transition duration-300 p-6 flex justify-between items-start">
                <h3 className="flex items-center gap-1">
                  <span>Eden Cosmetics</span>
                  <ExternalLink className="size-3 stroke-4" />
                </h3>
                <ul className="flex flex-col justify-between items-end font-clash-display">
                  <li>Cosmetics</li>
                  <li>Eden</li>
                  <li>Care</li>
                </ul>
              </div>*/}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
