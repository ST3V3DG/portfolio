"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export type CardData = {
  id: number | string;
  image: string;
  name: string;
  alt?: string;
  url?: string;
  keywords: string[];
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
  const imageBoxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      const imageBoxElements = imageBoxRefs.current;
      const totalCards = imageBoxElements.length;

      if (!imageBoxElements[0]) return;

      gsap.set(imageBoxElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageBoxElements[i]) continue;
        gsap.set(imageBoxElements[i], {
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
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageBoxElements[i];
        const nextImage = imageBoxElements[i + 1];
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

      let refreshTimeout: ReturnType<typeof setTimeout> | null = null;
      const resizeObserver = new ResizeObserver(() => {
        if (refreshTimeout) clearTimeout(refreshTimeout);
        refreshTimeout = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        if (refreshTimeout) clearTimeout(refreshTimeout);
        resizeObserver.disconnect();
        scrollTimeline.kill();
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
            <Link href={card.url ?? "#"} target="_blank" key={card.id}>
              <div
                className="absolute size-full isolate"
                ref={(element) => {
                  imageBoxRefs.current[index] = element;
                }}
              >
                <Image
                  src={card.image}
                  alt={card.alt || ""}
                  className={cn("size-full object-cover", imageClassName)}
                  height={1000}
                  sizes="100vw"
                  width={1500}
                />

                <div className="absolute inset-0  bg-linear-to-b from-transparent to-black lg:to-120% pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 text-accent p-6 flex justify-between items-start">
                  <h3 className="flex items-center gap-1">
                    <span>{card.name}</span>
                    <ExternalLink className="size-4 stroke-4" />
                  </h3>
                  <ul className="flex flex-col justify-between items-end font-clash-display">
                    {card.keywords.map((keyword, index) => {
                      return <li key={index}>{keyword}</li>
                    })}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
