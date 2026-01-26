"use client";

import React, { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { Mail, MapPin, Send } from "lucide-react";
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
        <Section id="contact" className="pb-0">
            <SectionHeading>Get In Touch</SectionHeading>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold">Let's build something amazing together.</h3>
                    <p className="text-foreground/70 leading-relaxed">
                        I'm currently available for internships and freelance projects. If you have a project that needs some creative AI touch, I'd love to hear about it.
                    </p>

                    <div className="space-y-4">
                        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm text-foreground/50">Email</div>
                                <div className="font-medium">{siteConfig.email}</div>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm text-foreground/50">Location</div>
                                <div className="font-medium">{siteConfig.location}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : (
                                isSent ? "Message Sent!" : (
                                    <>Send Message <Send className="w-4 h-4 ml-2" /></>
                                )
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </Section>
    );
};
