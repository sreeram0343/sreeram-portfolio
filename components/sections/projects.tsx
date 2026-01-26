"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export const ProjectsSection = () => {
    return (
        <Section id="projects">
            <SectionHeading>Featured Projects</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full group">
                        {/* Gradient Header (Placeholder for Image) */}
                        <div className="h-48 bg-gradient-to-br from-primary/20 via-background to-secondary/20 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <project.icon className="w-16 h-16 text-primary/40 group-hover:text-primary/80 transition-colors duration-500 transform group-hover:scale-110" />
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-secondary text-xs font-bold tracking-widest uppercase mb-1 block">{project.date}</span>
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                            </div>

                            <p className="text-foreground/70 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Button variant="outline" size="sm" icon={<Github className="w-4 h-4" />} as="a" href={project.links.github}>
                                        Code
                                    </Button>
                                    {project.links.demo && (
                                        <Button variant="ghost" size="sm" icon={<ExternalLink className="w-4 h-4" />} as="a" href={project.links.demo}>
                                            Live Demo
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="secondary" icon={<ArrowRight className="w-4 h-4" />} as="a" href="https://github.com">
                    View All Projects
                </Button>
            </div>
        </Section>
    );
};
