"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    as?: any;
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, icon, as: Component = "button", ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--primary)]",
            secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_-5px_var(--secondary)]",
            outline: "border border-primary/50 text-primary hover:bg-primary/10",
            ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        const MotionComponent = motion(Component);

        return (
            <MotionComponent
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
                {icon && <span className="ml-2">{icon}</span>}
            </MotionComponent>
        );
    }
);
Button.displayName = "Button";

export { Button };
