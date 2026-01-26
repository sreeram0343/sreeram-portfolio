"use client";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { ShaderBackground } from "@/components/ui/shader-background";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <ShaderBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
