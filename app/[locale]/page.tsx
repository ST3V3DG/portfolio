"use client";

import { type LenisRef, ReactLenis } from 'lenis/react';
import { useRef } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LangSwitcher from '@/components/lang-switcher';
import About from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import CallToAction from "@/components/sections/cta";
import { FrequentlyAskQuestion } from '@/components/sections/faq';
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import PagePreloader from "@/providers/page-preloader";

export default function Home() {
    const lenisRef = useRef<LenisRef>(null);

    return (
        <>
            <ReactLenis root ref={lenisRef} />
            <PagePreloader>
                <div className="relative z-1 w-full">
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Projects />
                        <Testimonials />
                        <Contact />
                        <CallToAction />
                        <FrequentlyAskQuestion />
                    </main>
                </div>
                <LangSwitcher />
                <Footer />
            </PagePreloader>
        </>
    );
}
