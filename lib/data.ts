import { Github, Linkedin, Mail, Twitter, Shield, Brain, Link, Play, Award, Code, Database, Terminal, Cpu, Zap, Globe, FileText, Smartphone } from 'lucide-react';

export const siteConfig = {
    name: "Sreeram M R",
    title: "AI/ML Engineer | Software Developer | Intelligent Systems Builder",
    description: "Building Intelligent Systems with AI, Automation & Scalable Software. Computer Science student focused on AI/ML, intelligent applications, automation systems, and real-world software engineering.",
    email: "sreeram4@zohomail.in",
    phone: "+91 70121 63651",
    location: "Thiruvananthapuram, Kerala, India",
    socials: [
        { name: "GitHub", href: "https://github.com/sreeram0343", icon: Github },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/sreeram4/", icon: Linkedin },
        { name: "Email", href: "mailto:sreeram4@zohomail.in", icon: Mail },
    ],
    resumeUrl: "/assets/resume.pdf"
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Model Accuracy", value: "92%" },
    { label: "Hackathons Won", value: "1" },
    { label: "Open Source", value: "Active" }
];

export const skills = [
    {
        category: "Programming Languages",
        icon: Code,
        items: ["Python", "Java", "C", "C++"]
    },
    {
        category: "AI & Machine Learning",
        icon: Brain,
        items: ["Deep Learning", "Computer Vision", "NLP", "Anomaly Detection"]
    },
    {
        category: "Software & Tools",
        icon: Smartphone,
        items: ["Flask", "MySQL", "MongoDB", "Tkinter"]
    },
    {
        category: "Data & Analytics",
        icon: Database,
        items: ["Pandas", "NumPy", "Data Visualization"]
    },
    {
        category: "Core Concepts",
        icon: Terminal,
        items: ["OOP", "Data Structures", "REST APIs", "System Design"]
    }
];

export const projects = [
    {
        title: "SecuRock – AI-Powered SOC-as-a-Service",
        description: "AI-driven monitoring platform with intelligent log analysis and threat pattern detection. Features an automated monitoring pipeline that reduced alert fatigue by 40%.",
        techStack: ["Python", "Wazuh", "Suricata", "OpenSearch"],
        highlights: [
            "AI-driven monitoring platform",
            "Intelligent log analysis",
            "Threat pattern detection",
            "Automated monitoring pipeline",
            "Reduced alert fatigue by 40%"
        ],
        links: {
            github: "https://github.com/sreeram0343/SecuRock",
            demo: "#"
        },
        icon: Shield,
        date: "2026",
        featured: true
    },
    {
        title: "VeriFace – AI Authenticity & Deepfake Detection",
        description: "Deepfake detection system with 92% accuracy. Features real-time image verification and an optimized inference pipeline for AI-powered identity analysis.",
        techStack: ["Deep Learning", "Python", "Flask"],
        highlights: [
            "Deepfake detection system",
            "92% accuracy",
            "Real-time image verification",
            "Optimized inference pipeline",
            "AI-powered identity analysis"
        ],
        links: {
            github: "https://github.com/sreeram0343/VeriFace",
            demo: "#"
        },
        icon: Brain,
        date: "2025",
        featured: true
    },
    {
        title: "Arthadhan – AI Financial Intelligence Platform",
        description: "Financial analytics engine and transaction processing system with ML-powered expense categorization and interactive dashboards for data-driven insights.",
        techStack: ["Machine Learning", "SQL", "Dashboards"],
        highlights: [
            "Financial analytics engine",
            "Transaction processing system",
            "ML-powered expense categorization",
            "Interactive dashboards",
            "Data-driven financial insights"
        ],
        links: {
            github: "https://github.com/sreeram0343/Arthadhan",
            demo: "#"
        },
        icon: Database,
        date: "2025",
        featured: true
    },
    {
        title: "Netflix Content Analytics",
        description: "Exploratory Data Analysis discovering trends, genre popularity, and regional viewing insights using Python's data science stack with visualization dashboards.",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        highlights: [
            "Exploratory Data Analysis",
            "Trend discovery",
            "Genre popularity analysis",
            "Regional viewing insights",
            "Visualization dashboards"
        ],
        links: {
            github: "https://github.com/sreeram0343/Netflix-Analytics",
            demo: "#"
        },
        icon: Play,
        date: "2025",
        featured: false
    }
];

export const education = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "APJ Abdul Kalam Technological University (KTU)",
        subInstitution: "Lourdes Matha College",
        year: "2023 – 2027",
        description: "Focusing on Artificial Intelligence, Machine Learning, and software engineering."
    },
    {
        degree: "Higher Secondary Education",
        institution: "Government Higher Secondary School, Neyyattinkara",
        year: "2021 – 2023",
        description: "Completed with a focus on science and mathematics."
    }
];

export const certifications = [
    {
        name: "Artificial Intelligence and Machine Learning",
        issuer: "Infosys Springboard",
        year: "2025",
        icon: Brain
    },
    {
        name: "SQL Advanced Certification",
        issuer: "HackerRank",
        year: "2025",
        icon: Database
    },
    {
        name: "Python Programming Certification",
        issuer: "Udemy",
        year: "2024",
        icon: Terminal
    },
    {
        name: "Google Cybersecurity Certification",
        issuer: "Google",
        year: "2023",
        icon: Shield
    }
];

export const achievements = [
    {
        title: "Google Vortexa Hackathon Winner",
        description: "Built AI-powered SOC MVP in under 6 hours. Secured 1st place.",
        icon: Award
    },
    {
        title: "Placement Operations Lead",
        description: "Lourdes Matha College 2026. Leading efforts to connect students with industry leaders.",
        icon: Zap
    }
];

export const experience = [
    {
        role: "AI/ML Enthusiast & Student Researcher",
        company: "Self-Project / Academic",
        period: "2023 - Present",
        description: "Developing intelligent systems and exploring real-world applications of AI and automation."
    }
];
