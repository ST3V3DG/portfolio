import { Button } from "@/components/ui/button";
import { BorderSeparator } from "./contact";

export default function CallToAction() {
    return (
        <section id="cta" className="bg-background">
            <div className="mx-auto max-w-7xl max-md:px-6">
                <div className="border-x">
                    <BorderSeparator />
                    <div className="flex flex-col justify-between md:flex-row w-full">
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
                    <BorderSeparator />
                    <div aria-hidden="true" className="h-32"/>
                </div>
            </div>
        </section>
    );
}
