import { Plus } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FrequentlyAskQuestion() {
    const t = useTranslations('FAQ');

    const faqs = [
        {
            id: "item-1",
            title: t("item1.question"),
            content: t("item1.answer"),
        },
        {
            id: "item-2",
            title: t("item2.question"),
            content: t("item2.answer"),
        },
        {
            id: "item-3",
            title: t("item3.question"),
            content: t("item3.answer"),
        },
        {
            id: "item-4",
            title: t("item4.question"),
            content: t("item4.answer"),
        },
        {
            id: "item-5",
            title: t("item5.question"),
            content: t("item5.answer"),
        },
        {
            id: "item-6",
            title: t("item6.question"),
            content: t("item6.answer"),
        },
    ];

    return (
        <section className="bg-secondary py-32">
            <div className="grid md:min-h-screen w-full grid-cols-1 md:grid-cols-2 gap-16 focus-within:outline-none max-w-7xl px-6 mx-auto">
                <div className="px-4 focus-within:outline-none">
                    <div className="space-y-5 focus-within:outline-none">
                        <h2 className="text-balance font-bold text-4xl md:text-6xl lg:font-black">
                            {t("title")}
                        </h2>
                        <p className="text-muted-foreground">
                            {t("description")}
                        </p>
                        <p className="text-muted-foreground focus-within:outline-none">
                            {"Can't find what you're looking for? "}
                            <Link className="text-primary hover:underline" href="#contact">
                                {t("contactMe")}
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

                                <AccordionTrigger className="px-4 py-4 text-[16px] leading-6 hover:no-underline cursor-pointer focus:ring-0">
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
