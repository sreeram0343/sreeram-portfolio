"use client";

import React, { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { Mail, MapPin, Send, Github, Linkedin, FileText, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactSection = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <Section id="contact" className="pb-20">
            <SectionHeading>Get In Touch</SectionHeading>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold text-white leading-tight">
                            Let&apos;s build something <span className="text-gradient">intelligent</span> together.
                        </h3>
                        <p className="text-foreground/60 leading-relaxed text-lg font-light">
                            Open to AI/ML, software engineering, internships, collaborations, and innovative technology opportunities.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-primary/10 transition-all duration-300 border border-white/10 hover:border-primary/30">
                            <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Email</div>
                                <div className="font-medium text-white/80 group-hover:text-primary transition-colors">{siteConfig.email}</div>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/sreeram4" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-secondary/10 transition-all duration-300 border border-white/10 hover:border-secondary/30">
                            <div className="p-3 rounded-xl bg-secondary/20 text-secondary group-hover:scale-110 transition-transform">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">LinkedIn</div>
                                <div className="font-medium text-white/80 group-hover:text-secondary transition-colors">sreeram4</div>
                            </div>
                        </a>

                        <a href="https://github.com/sreeram0343" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                            <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                                <Github className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">GitHub</div>
                                <div className="font-medium text-white/80 transition-colors">sreeram0343</div>
                            </div>
                        </a>

                        <a href={siteConfig.resumeUrl} download className="group flex items-center gap-4 p-5 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary/40 shadow-[0_0_20px_-10px_var(--primary)]">
                            <div className="p-3 rounded-xl bg-primary/30 text-white group-hover:scale-110 transition-transform">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Resume</div>
                                <div className="font-medium text-white">Download PDF</div>
                            </div>
                        </a>
                    </div>
                </div>

                <Card className="p-10 bg-white/[0.02] border-white/5 relative overflow-hidden backdrop-blur-md">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                    
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all placeholder:text-foreground/20 text-white"
                                    placeholder="Enter your name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all placeholder:text-foreground/20 text-white"
                                    placeholder="your@email.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all resize-none placeholder:text-foreground/20 text-white"
                                placeholder="How can we collaborate?"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_25px_-5px_var(--primary)] transition-all duration-300" disabled={isSubmitting}>
                            {isSubmitting ? "Processing..." : (
                                isSent ? "Message Sent Successfully!" : (
                                    <>Initiate Connection <Send className="w-4 h-4 ml-2" /></>
                                )
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
            
            <div className="mt-32 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">
                    &ldquo;The best way to predict the future is to invent it.&rdquo;
                </p>
            </div>
        </Section>
    );
};
