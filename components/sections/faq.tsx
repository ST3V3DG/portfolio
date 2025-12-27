import { Plus } from "lucide-react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        id: "item-1",
        title: "How we will collaborate?",
        content:
            "After you validate the brief, I will start working on the home page. If it sounds ok for you, I will finalize the project and send you the final files.",
    },
    {
        id: "item-2",
        title: "Who can benefit from my services?",
        content:
            "Anyone who wants to create a website can benefit from my services (personal, small business, or startup).",
    },
    {
        id: "item-3",
        title: "What features does my services include?",
        content:
            "I offer a sophisticate and professional website design, with a focus on user experience, conversion rate optimization, search engines optimization (SEO), performance and accessibility.",
    },
    {
        id: "item-4",
        title: "How long does it take to complete a project?",
        content:
            "Based on the requirements, I can take between 1 week to 2 months to complete a project (depends on the complexity of the project).",
    },
    {
        id: "item-5",
        title: "What payment methods do you accept?",
        content:
            "For now, I accept payments through PayPal, Orange Money, and MTN Mobile Money.",
    },
    {
        id: "item-6",
        title: "Can you handle hosting?",
        content:
            "Yeah, I can handle buying the domain name and put your website online.",
    },
];

export function FrequentlyAskQuestion() {
    return (
        <section className="bg-secondary py-32">
            <div className="grid md:min-h-screen w-full grid-cols-1 md:grid-cols-2 gap-16 focus-within:outline-none max-w-7xl px-6 mx-auto">
                <div className="px-4 focus-within:outline-none">
                    <div className="space-y-5 focus-within:outline-none">
                        <h2 className="text-balance font-bold text-4xl md:text-6xl lg:font-black">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-muted-foreground">
                            Quick answers to common questions me and my work. Open any question to
                            learn more.
                        </p>
                        <p className="text-muted-foreground focus-within:outline-none">
                            {"Can't find what you're looking for? "}
                            <Link className="text-primary hover:underline" href="#contact">
                                Contact Me
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="relative place-content-center focus-within:outline-none">
                    {/* vertical guide line */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-3 h-full w-px bg-border focus-within:outline-none"
                    />

                    <Accordion className="focus-within:outline-none" collapsible type="single">
                        {faqs.map((item) => (
                            <AccordionItem
                                className="group relative border-b pl-5 first:border-t last:border-b focus-within:outline-none"
                                key={item.id}
                                value={item.id}
                            >
                                {/*  plus */}
                                <Plus
                                    aria-hidden="true"
                                    className="-bottom-[5.5px] -translate-x-1/2 pointer-events-none absolute left-[12.5px] size-2.5 text-muted-foreground group-last:hidden"
                                />

                                <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline cursor-pointer focus:ring-0">
                                    {item.title}
                                </AccordionTrigger>

                                <AccordionContent className="p-4 text-muted-foreground">
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
