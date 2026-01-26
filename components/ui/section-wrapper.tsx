"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export const Section = ({ id, className, children, delay = 0 }: SectionProps) => {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className="container mx-auto px-4 md:px-6"
            >
                {children}
            </motion.div>
        </section>
    );
};

export const SectionHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={cn(
        "text-3xl md:text-5xl font-bold mb-12 text-center",
        className
    )}>
        <span className="text-gradient inline-block pb-2 border-b-2 border-primary/30">
            {children}
        </span>
    </h2>
);
