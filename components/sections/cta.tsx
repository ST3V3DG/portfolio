import { useTranslations } from "next-intl";
import { BorderSeparator } from "@/components/sections/contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
    const t = useTranslations('CTA');

    return (
        <section id="cta" className="bg-secondary">
            <div className="mx-auto max-w-7xl max-md:px-6">
                <div className="lg:border-x">
                    <BorderSeparator />
                    <div className="flex flex-col items-center justify-between md:flex-row w-full">
                        <div className="p-4 flex items-center">
                            <h2 className="text-center font-bold text-lg md:text-left md:text-2xl">
                                {t('title')}
                            </h2>
                        </div>
                        <div className="flex items-center justify-center gap-2 p-4 md:border-l *:rounded-none">
                            <Button asChild className="bg-accent font-bold text-background hover:bg-accent/80 transition duration-300" size="lg"><Link href="https://wa.me/+237676068279" target="_blank">{t('letStart')}</Link></Button>
                        </div>
                    </div>
                    <BorderSeparator />
                    <div aria-hidden="true" className="h-32" />
                </div>
            </div>
        </section>
    );
}
