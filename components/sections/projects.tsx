import { useTranslations } from "next-intl";
import { type CardData, StickyProjects } from "@/components/sticky-projects";

const projects: CardData[] = [
  {
    id: 1,
    url: "https://fashionstudio.vercel.app",
    name: "Fashion Studio",
    image: "/images/rubber-laptop-mockup-fashion-studio.png",
    alt: "Fashion Studio website on a laptop mockup",
    keywords: ["Fashion", "Studio", "B&W"],
  },
  {
    id: 2,
    url: "https://odysia-hotel.vercel.app",
    name: "Odysia Hotel",
    image: "/images/mac-odysia.png",
    alt: "Odysia Hotel website on a mac",
    keywords: ["Journey", "Odysia", "Hotel"],
  },
  {
    id: 3,
    url: "https://optiride.vercel.app",
    name: "OptiRide",
    image: "/images/ipad-optiride.png",
    alt: "Optiride project on an Ipad",
    keywords: ["Carpooling", "Trip", "Ride"],
  },
  {
    id: 4,
    url: "#",
    name: "Buildocs",
    image: "/images/mac-book-pro-16-buildocs.png",
    alt: "Buildocs project on a mac book pro 16 mockup",
    keywords: ["Software", "Specs", "PM"],
  },
  {
    id: 5,
    url: "https://hoodiego.vercel.app",
    name: "Hoodiego",
    image: "/images/laptop-hoodiego.png",
    alt: "Buildocs website on a laptop",
    keywords: ["Hoodies", "Orange", "Comfort"],
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects">
      <div className="py-32 flex flex-col gap-12 relative z-1 max-w-7xl mx-auto bg-background">
        <div className="flex flex-col gap-4 justify-between text-center">
          <h2 className="md:text-7xl lg:text-9xl text-5xl text-accent mb-4">
            {t("title")}
          </h2>
          <p className="max-w-120 mb-8 text-pretty mx-auto text-2xl">
            {t("description")}
          </p>
        </div>
        <StickyProjects cards={projects} />
      </div>
    </section>
  );
}
