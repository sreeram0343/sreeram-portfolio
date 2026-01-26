"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card = ({ className, children, hoverEffect = true }: CardProps) => {
    return (
        <motion.div
            className={cn(
                "glass-panel rounded-xl overflow-hidden relative group",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
        >
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300",
                hoverEffect && "group-hover:opacity-100"
            )} />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
