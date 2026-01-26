"use client";

import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(useGSAP);

interface HeroProps {
    title: string;
    description: string;
    badgeText?: string;
    badgeLabel?: string;
    ctaButtons?: Array<{ text: string; href?: string; primary?: boolean }>;
    microDetails?: Array<string>;
}

const SyntheticHero = ({
    title,
    description,
    badgeText = "System Online",
    badgeLabel = "Status",
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
            className="relative flex items-center justify-center min-h-[90vh] overflow-hidden"
        >
            {/* Canvas removed from here, now global */}

            {/* Clean, minimalist content layer */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20">
                <div ref={badgeWrapperRef}>
                    <Badge className="mb-8 bg-white/5 hover:bg-white/10 text-primary-foreground backdrop-blur-md border border-primary/20 uppercase tracking-wider font-medium flex items-center gap-2 px-4 py-1.5 shadow-[0_0_20px_-10px_var(--primary)]">
                        <span className="text-[10px] font-light tracking-[0.18em] text-primary-foreground/70">
                            {badgeLabel}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-light tracking-tight text-white">
                            {badgeText}
                        </span>
                    </Badge>
                </div>

                <h1
                    ref={headingRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl"
                >
                    {title}
                </h1>

                <p
                    ref={paragraphRef}
                    className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
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
                            className={!button.primary ? "bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm" : "backdrop-blur-sm bg-primary/90"}
                        >
                            {button.text}
                        </Button>
                    ))}
                </div>

                {microDetails.length > 0 && (
                    <ul
                        ref={microRef}
                        className="mt-12 flex flex-wrap justify-center gap-8 text-xs font-medium tracking-widest uppercase text-foreground/50"
                    >
                        {microDetails.map((detail, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-primary/50 shadow-[0_0_10px_var(--primary)]" />
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
