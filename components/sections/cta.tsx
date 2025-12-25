import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section id="cta" className="border-x bg-background pb-32">
            <div className="flex flex-col justify-between md:flex-row border-y w-full">
                <div className="border-b p-4 md:border-b-0">
                    <h2 className="text-center font-bold text-lg md:text-left md:text-2xl">
                        Let your website shape your digital footprint.
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-2 p-4 md:border-l *:rounded-none *:cursor-pointer">
                    <Button variant="secondary">Contact Sales</Button>
                    <Button className="bg-accent text-background hover:bg-accent/80 transition duration-300">Get Started</Button>
                </div>
            </div>
        </section>
    );
}
