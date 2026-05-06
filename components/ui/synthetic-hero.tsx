"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(useGSAP);

interface HeroProps {
    title: string;
    description: string;
    badgeText?: string;
    badgeLabel?: string;
    ctaButtons?: Array<{ text: string; href?: string; primary?: boolean; download?: boolean }>;
    microDetails?: Array<string>;
}

const TypingEffect = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                if (i >= text.length) clearInterval(interval);
            }, 50);
            return () => clearInterval(interval);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

const SyntheticHero = ({
    title,
    description,
    badgeText = "AI Engineer",
    badgeLabel = "Focus",
    ctaButtons = [],
    microDetails = [],
}: HeroProps) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const badgeWrapperRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const microRef = useRef<HTMLUListElement | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (badgeWrapperRef.current) {
                gsap.set(badgeWrapperRef.current, { autoAlpha: 0, y: -20 });
                tl.to(badgeWrapperRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0);
            }

            if (headingRef.current) {
                gsap.set(headingRef.current, { autoAlpha: 0, y: 30, filter: "blur(10px)" });
                tl.to(headingRef.current, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 }, 0.2);
            }

            if (paragraphRef.current) {
                gsap.set(paragraphRef.current, { autoAlpha: 0, y: 20 });
                tl.to(paragraphRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.4);
            }

            if (ctaRef.current) {
                gsap.set(ctaRef.current, { autoAlpha: 0, y: 20 });
                tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.6);
            }

            if (microRef.current?.children) {
                gsap.set(microRef.current.children, { autoAlpha: 0, y: 10 });
                tl.to(microRef.current.children, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.8);
            }
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            className="relative flex items-center justify-center min-h-screen overflow-hidden py-20"
        >
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
                <div ref={badgeWrapperRef}>
                    <Badge className="mb-8 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-primary/20 uppercase tracking-wider font-medium flex items-center gap-2 px-4 py-1.5 shadow-[0_0_20px_-10px_var(--primary)]">
                        <span className="text-[10px] font-light tracking-[0.18em] text-primary/70">
                            {badgeLabel}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--primary)]" />
                        <span className="text-xs font-light tracking-tight">
                            {badgeText}
                        </span>
                    </Badge>
                </div>

                <h1
                    ref={headingRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl"
                >
                    <TypingEffect text={title} delay={0.5} />
                    <span className="inline-block w-[2px] h-[0.8em] bg-primary ml-1 animate-pulse align-middle" />
                </h1>

                <p
                    ref={paragraphRef}
                    className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                >
                    {description}
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {ctaButtons.map((button, index) => (
                        <Button
                            key={index}
                            variant={button.primary ? "primary" : "outline"}
                            size="lg"
                            href={button.href}
                            as="a"
                            download={button.download}
                            className={!button.primary ? "bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105" : "backdrop-blur-sm bg-primary/90 hover:bg-primary transition-all duration-300 hover:scale-105 shadow-[0_0_20px_-5px_var(--primary)]"}
                        >
                            {button.text}
                        </Button>
                    ))}
                </div>

                {microDetails.length > 0 && (
                    <ul
                        ref={microRef}
                        className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/40"
                    >
                        {microDetails.map((detail, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="h-px w-4 bg-primary/30" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default SyntheticHero;
