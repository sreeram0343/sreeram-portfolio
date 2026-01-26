import { Github, Linkedin, Mail, Twitter, Shield, Brain, Link, Play, Award, Code, Database, Terminal } from 'lucide-react';

export const siteConfig = {
    name: "Sreeram M R",
    title: "AI & Machine Learning Innovator",
    description: "Building intelligent systems that transform data into insights. Passionate about AI-powered security solutions and cutting-edge deep learning research.",
    email: "sreeram4@zohomail.in",
    location: "Kerala, India",
    socials: [
        { name: "GitHub", href: "https://github.com/", icon: Github },
        { name: "LinkedIn", href: "https://linkedin.com/in/", icon: Linkedin },
        { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
        { name: "Email", href: "mailto:sreeram4@zohomail.in", icon: Mail },
    ]
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Model Accuracy", value: "92%" },
    { label: "Certifications", value: "4+" },
    { label: "Experience", value: "2 Years" }
];

export const skills = [
    {
        category: "Languages",
        icon: Code,
        items: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript"]
    },
    {
        category: "AI & ML",
        icon: Brain,
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Deep Learning"]
    },
    {
        category: "Databases & Tools",
        icon: Database,
        items: ["MySQL", "MongoDB", "PostgreSQL", "Git", "Docker", "FastAPI"]
    },
    {
        category: "Security",
        icon: Shield,
        items: ["Network Security", "Threat Detection", "SOC Automation", "Cyber Forensics"]
    }
];

export const projects = [
    {
        title: "SecuRock - Automated SOC",
        description: "Designed an automated Security Operations Center platform reducing incident response time from 3 minutes to under 5 seconds. Achieved 90%+ accuracy in behavior-based threat detection.",
        tags: ["Python", "Security", "Automation", "AI"],
        links: {
            github: "#",
            demo: "#"
        },
        icon: Shield,
        date: "Jan 2026",
        featured: true
    },
    {
        title: "VeriFace - AI Detection Tool",
        description: "Built an AI-powered detection system that classifies images as real, AI-generated, or deepfake with 94% accuracy using EfficientNet-B4 and advanced forensic analysis.",
        tags: ["Deep Learning", "PyTorch", "Computer Vision"],
        links: {
            github: "#",
            demo: "#"
        },
        icon: Brain,
        date: "Dec 2025",
        featured: true
    },
    {
        title: "Phishing URL Detection",
        description: "Built a detection system with 92% classification accuracy using ML models trained on 7,000+ URLs. Created a GUI application used by 40+ testers.",
        tags: ["Machine Learning", "Cybersecurity", "Python"],
        links: {
            github: "#"
        },
        icon: Link,
        date: "Aug 2024",
        featured: false
    },
    {
        title: "Netflix Data Analytics",
        description: "Processed 8,800+ records with 100% data validation. Improved insight retrieval speed by 50% using optimized OOP modules and advanced data visualization.",
        tags: ["Python", "Data Analysis", "Pandas"],
        links: {
            github: "#"
        },
        icon: Play,
        date: "Sep 2025",
        featured: false
    }
];

export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Lourdes Matha College of Science and Technology",
        year: "2023 - Present",
        description: "Focusing on AI/ML, Data Science, and Network Security."
    }
];

export const certifications = [
    {
        name: "Google Cybersecurity",
        issuer: "Google",
        icon: Shield
    },
    {
        name: "Python Programming",
        issuer: "Udemy",
        icon: Terminal
    },
    {
        name: "SQL Advanced",
        issuer: "HackerRank",
        icon: Database
    },
    {
        name: "AI & Machine Learning",
        issuer: "Infosys Springboard",
        icon: Brain
    }
];
