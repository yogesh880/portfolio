"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChatBot } from "./chatbot";
import { SectionHeading } from "./section-heading";
import { ThemeToggle } from "./theme-toggle";

const stats = [
    { value: "3+", label: "Years of full-stack experience" },
    { value: "1000+", label: "Requests/sec handled" },
    { value: "30%", label: "Query performance gains" },
];

const skills = [
    {
        title: "Frontend",
        items: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI", "Tailwind CSS"],
    },
    {
        title: "Backend & Data",
        items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Oracle PL/SQL", "Stored Procedures"],
    },
    {
        title: "Tools & Practices",
        items: ["Git", "GitHub", "Azure DevOps", "Postman", "Agile/Scrum", "Unit Testing", "CI/CD (Basic)"],
    },
];

const experience = [
    {
        role: "System Engineer",
        company: "Tata Consultancy Services",
        period: "Jun 2023 — Present",
        location: "Kolkata, India",
        overview:
            "Delivered production-grade web features for enterprise applications, improving performance, scalability, and collaboration across cross-functional teams.",
        responsibilities: [
            "Built responsive React/Redux interfaces that cut page load time by 20%.",
            "Developed Node.js and Express APIs sustaining 1000+ requests/sec under load.",
            "Optimized Oracle PL/SQL workflows to boost query performance by 30%.",
        ],
        stack: ["React.js", "Redux", "Node.js", "JavaScript", "TypeScript", "Express.js", "JWT Authentication", "Oracle PL/SQL", "Material UI", "Tailwind CSS"],
        achievements: [
            "Improved query performance by 30%.",
            "Delivered high-availability API endpoints for enterprise workflows.",
            "Reduced page load time and improved user experience across key dashboards.",
        ],
    },
    // {
    //     role: "System Engineer",
    //     company: "Tata Consultancy Services",
    //     period: "Jul 2022 — Jun 2023",
    //     location: "Kolkata, India",
    //     overview:
    //         "Delivered production-grade web features for enterprise applications, improving performance, scalability, and collaboration across cross-functional teams.",
    //     responsibilities: [
    //         "Built responsive React/Redux interfaces that cut page load time by 20%.",
    //         "Developed Node.js and Express APIs sustaining 1000+ requests/sec under load.",
    //         "Optimized Oracle PL/SQL workflows to boost query performance by 30%.",
    //     ],
    //     stack: ["React.js", "Redux", "Node.js", "Express.js", "Oracle PL/SQL", "Tailwind CSS"],
    //     achievements: [
    //         "Improved query performance by 30%.",
    //         "Delivered high-availability API endpoints for enterprise workflows.",
    //         "Reduced page load time and improved user experience across key dashboards.",
    //     ],
    // },
];

const projects = [
    {
        title: "SkillBridge",
        summary:
            "A full-stack job portal with JWT authentication, role-based access, admin job management, filtering, pagination, and deployment from local development to live hosting.",
        hoverDetail:
            "A secure, deployment-ready platform focused on protected routes, admin workflows, and polished job discovery experiences.",
        highlights: ["JWT-based auth", "Admin controls", "Live deployment flow"],
        stack: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT"],
    },
    {
        title: "MI Store Clone",
        summary:
            "A responsive e-commerce frontend clone with product navigation, cart interactions, and routing-focused UI implementation.",
        hoverDetail:
            "A UI-focused storefront experience designed around smooth product browsing, navigation, and cart interactions.",
        highlights: ["Product navigation", "Cart interactions", "Responsive UI"],
        stack: ["React.js", "Hooks", "React Router", "CSS"],
    },
];

const achievements = [
    'Recognized with "Star of the Month" and "Best Team Award" at Tata Consultancy Services',
    "Solved 200+ algorithmic challenges on LeetCode and HackerRank to strengthen problem-solving skills",
    "Collaborated closely with engineering, product, and design teams in Agile/Scrum delivery cycles",
];

// const projectDetails = [
//     {
//         title: "SkillBridge",
//         summary: "A full-stack job portal built to learn production-level patterns and end-to-end deployment.",
//         bullets: [
//             "Implemented JWT-based authentication and protected routes",
//             "Built admin job management with filtering, pagination, and role-based access",
//             "Deployed frontend and backend independently with CI from local to live",
//         ],
//     },
// ];

const certifications = [
    {
        title: "React.js & Redux Development",
        issuer: "Project-based learning",
        detail: "Built responsive frontends and state-driven interfaces for production-style applications.",
    },
    {
        title: "Node.js & REST API Design",
        issuer: "Hands-on engineering",
        detail: "Created scalable APIs with authentication, validation, and deployment workflows.",
    },
    {
        title: "Oracle PL/SQL Optimization",
        issuer: "Professional practice",
        detail: "Improved query performance and reduced database load in high-traffic reporting workflows.",
    },
];

const education = [
    {
        institution: "Techno Main Salt Lake",
        degree: "Electronics And Instrumentation Engineering",
        period: "August 2018 - June 2022",
        grade: "GPA: 8.61",
    },
    {
        institution: "GOVT. HIGH SCHOOL NAUBATPUR, PATNA",
        degree: "Intermediate, Board - BSEB",
        period: "April 2016 - April 2017",
        grade: "67.4%",
    },
    {
        institution: "HIGH SCHOOL CHECHAUL, NAUBATPUR, PATNA",
        degree: "Matriculation, Board - BSEB",
        period: "April 2014 - April 2015",
        grade: "69.4%",
    },
];

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/yk880485",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5V9.75Zm4.86 0h2.76v1.13h.04c.38-.72 1.32-1.48 2.72-1.48 2.92 0 3.46 1.92 3.46 4.41V18h-2.88v-7.42c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.9V18H10.36V9.75Z" />
            </svg>
        ),
    },
];

export function PortfolioShell() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeProject, setActiveProject] = useState(projects[0]?.title ?? "");
    const [activeExperience, setActiveExperience] = useState(experience[0]?.role ?? "");

    const activeProjectData = projects.find((project) => project.title === activeProject) ?? projects[0];

    useEffect(() => {
        const updateScrollProgress = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
            setScrollProgress(currentProgress);
        };

        updateScrollProgress();
        window.addEventListener("scroll", updateScrollProgress, { passive: true });

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_rgba(248,250,252,0.96),_rgba(255,255,255,1))] text-slate-900 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,1))] dark:text-slate-100">
            <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-slate-200/70 dark:bg-slate-800/70" aria-hidden="true">
                <div
                    className="h-full origin-left bg-cyan-500 transition-[width] duration-200"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>
            <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
                    <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-slate-900 uppercase dark:text-white">
                        Yogesh Kumar
                    </a>
                    <div className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
                        {navLinks.map((link) => (
                            <a key={link.href} className="transition hover:text-cyan-600 dark:hover:text-cyan-400" href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="/Yogesh_Kumar_Resume.docx"
                            download
                            className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:inline-flex dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                        >
                            Resume
                        </a>
                        <ThemeToggle />
                    </div>
                </nav>
                <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 pb-3 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </header>

            <main id="home" className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-24 px-6 py-1 lg:px-8 lg:py-2">
                <section className="grid items-center gap-12 animate-[fadeInUp_0.7s_ease-out] lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="max-w-2xl">
                        <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                            Full Stack Developer | React.js | Node.js | PL/SQL
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                            I build fast, reliable web applications with modern full-stack engineering.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            I am a Full Stack Developer with 3 years of experience at Tata Consultancy Services, delivering scalable MERN-stack applications and database optimizations that improve performance and user experience.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                            >
                                Explore projects
                            </a>
                            <a
                                href="#contact"
                                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                            >
                                Let&apos;s talk
                            </a>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={link.name}
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-2xl border border-slate-200/75 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                                    <dt className="text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</dt>
                                    <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative mx-auto w-full max-w-md">
                        <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                            <Image
                                src="/profile-avatar.svg"
                                alt="Abstract portrait illustration"
                                width={640}
                                height={760}
                                priority
                                className="rounded-[1.5rem]"
                            />
                        </div>
                    </div>
                </section>

                <section id="about" className="scroll-mt-24 grid gap-10 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)] animate-[fadeInUp_0.7s_ease-out_0.1s_both] dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                    <SectionHeading
                        eyebrow="About"
                        title="Turning product requirements into scalable web experiences."
                        description="I combine frontend craftsmanship, backend reliability, and database optimization to deliver impactful applications in fast-moving teams."
                    />
                    <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        <p>
                            My work spans responsive UIs, RESTful APIs, and performance tuning for enterprise systems. At Tata Consultancy Services, I have contributed to production web applications that serve active users efficiently while maintaining strong code quality and collaboration in Agile environments.
                        </p>
                        <p>
                            I hold a B.Tech in Electronics and Instrumentation Engineering from Techno Main Salt Lake and continue to strengthen my problem-solving skills through hands-on engineering work and algorithmic challenges.
                        </p>
                    </div>
                </section>

                <section id="skills" className="scroll-mt-24 space-y-8 animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
                    <SectionHeading
                        eyebrow="Skills"
                        title="A practical toolkit for building modern web products."
                        description="My stack covers frontend development, backend APIs, database optimization, and collaborative engineering practices."
                    />
                    <div className="grid gap-6 md:grid-cols-3">
                        {skills.map((skill) => (
                            <div key={skill.title} className="rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/80">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{skill.title}</h3>
                                <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                                    {skill.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="experience" className="scroll-mt-24 space-y-8 animate-[fadeInUp_0.7s_ease-out_0.3s_both]">
                    <SectionHeading
                        eyebrow=" Experience"
                        title="Building reliable software in production environments."
                        description="My experience has centered on enterprise applications where performance, scalability, and maintainability are critical."
                    />
                    <div className="relative pl-8 md:pl-10">
                        <div className="absolute left-4 top-8 h-full w-px bg-slate-300 dark:bg-slate-700" />
                        <div className="space-y-10">
                            {experience.map((item, index) => {
                                const expanded = activeExperience === item.role;
                                return (
                                    <article
                                        key={item.period}
                                        className="relative overflow-visible rounded-[1.5rem] border border-slate-200/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/80"
                                    >
                                        <div className="absolute -left-6 top-8 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-cyan-500 text-sm font-semibold text-white shadow-xl dark:border-slate-900">
                                            <span className="animate-pulse">{index + 1}</span>
                                        </div>
                                        <button
                                            type="button"
                                            className="w-full px-8 py-6 text-left"
                                            onClick={() => setActiveExperience(expanded ? "" : item.role)}
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="min-w-0">
                                                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">{item.company}</p>
                                                    <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.location}</p>
                                                </div>
                                                <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                                                    {item.period}
                                                </div>
                                            </div>
                                            <p className="mt-4 text-slate-600 dark:text-slate-300">{item.overview}</p>
                                            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                                                <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>▾</span>
                                                {expanded ? "Hide details" : "View details"}
                                            </div>
                                        </button>
                                        <div className={`overflow-hidden border-t border-slate-200 transition-all duration-300 dark:border-slate-700 ${expanded ? "max-h-[2000px]" : "max-h-0"}`}>
                                            <div className="px-8 pb-6 pt-4">
                                                <div className="grid gap-6 lg:grid-cols-3">
                                                    <div className="space-y-3">
                                                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 dark:text-white">Responsibilities</p>
                                                        <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                                            {item.responsibilities.map((responsibility) => (
                                                                <li key={responsibility} className="flex items-start gap-2">
                                                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
                                                                    <span>{responsibility}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 dark:text-white">Tech stack</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {item.stack.map((tech) => (
                                                                <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 dark:text-white">Achievements</p>
                                                        <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                                            {item.achievements.map((achievement) => (
                                                                <li key={achievement} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                                                                    {achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section id="projects" className="scroll-mt-24 space-y-8 animate-[fadeInUp_0.7s_ease-out_0.6s_both]">
                    <SectionHeading
                        eyebrow="Selected projects"
                        title="Hands-on work shaped by real product needs."
                        description="A snapshot of projects that reflect my full-stack approach, from user interfaces to backend logic and deployment."
                    />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                onMouseEnter={() => setActiveProject(project.title)}
                                onFocus={() => setActiveProject(project.title)}
                                tabIndex={0}
                                className={`flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-slate-900/80 ${activeProject === project.title ? "border-cyan-500/60 shadow-[0_20px_50px_rgba(34,211,238,0.18)]" : ""}`}
                            >
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">{activeProject === project.title ? project.hoverDetail : project.summary}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900/80">
                        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">Hover preview</p>
                                <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{activeProjectData?.title}</h3>
                            </div>
                            <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{activeProjectData?.hoverDetail}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {activeProjectData?.highlights?.map((highlight) => (
                                <span key={highlight} className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300">
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <section id="project-details" className="scroll-mt-24 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)] animate-[fadeInUp_0.7s_ease-out_0.5s_both] dark:border-slate-800 dark:bg-slate-900/80 lg:p-10">
                    <SectionHeading
                        eyebrow="Project Details"
                        title="A closer look at how I approach building products."
                        description="I focus on clear architecture, reliable implementation, and thoughtful user experience from concept to release."
                    />
                    <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                        {projectDetails.map((project) => (
                            <div key={project.title} className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-950/70">
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="mt-4 text-slate-600 dark:text-slate-300">{project.summary}</p>
                                <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
                                    {project.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-2">
                                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-6 text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">Approach</p>
                            <ul className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">Design for scale from the start with clean component boundaries.</li>
                                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">Pair strong UI polish with robust API and database decisions.</li>
                                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">Deliver iteratively and keep the product maintainable over time.</li>
                            </ul>
                        </div>
                    </div>
                </section> */}

                <section id="education" className="scroll-mt-24 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)] animate-[fadeInUp_0.7s_ease-out_0.8s_both] dark:border-slate-800 dark:bg-slate-900/80 lg:p-10">
                    <SectionHeading
                        eyebrow=" Education"
                        title="Academic background and formation."
                        description="A focused study path in engineering and applied systems, built on strong academic performance and practical project work."
                    />
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {education.map((item) => (
                            <div key={item.institution} className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-950/70">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-300">
                                        <span className="text-xl"></span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.institution}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-300">{item.degree}</p>
                                    </div>
                                </div>
                                <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                    <p className="font-medium text-slate-900 dark:text-white">{item.period}</p>
                                    <p>{item.grade}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="achievements" className="scroll-mt-24 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/80 lg:p-8">
                    <SectionHeading
                        eyebrow="Achievements"
                        title="Recognized for impact and consistent delivery."
                        description="The work I am most proud of comes from strong execution, ownership, and meaningful team contribution."
                    />
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {achievements.map((achievement) => (
                            <div key={achievement} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
                                {achievement}
                            </div>
                        ))}
                    </div>
                </section>


                <section id="certifications" className="scroll-mt-24 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)] animate-[fadeInUp_0.7s_ease-out_0.8s_both] dark:border-slate-800 dark:bg-slate-900/80 lg:p-10">
                    <SectionHeading
                        eyebrow="Certifications"
                        title="Professional growth grounded in hands-on delivery."
                        description="My learning path is shaped by real product work, performance tuning, and practical implementation across the full stack."
                    />
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {certifications.map((certification) => (
                            <div key={certification.title} className="rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-950/70">
                                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{certification.issuer}</p>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{certification.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{certification.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="scroll-mt-24 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 text-slate-900 shadow-[0_20px_60px_rgba(2,6,23,0.12)] animate-[fadeInUp_0.7s_ease-out_0.8s_both] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(2,6,23,0.2)] dark:border-slate-800 dark:bg-slate-950 dark:text-white lg:p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">Contact</p>
                            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                                Let&apos;s build something reliable and impactful together.
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                                I am open to opportunities where I can contribute to full-stack product development, performance improvements, and user-focused engineering.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:yk880485@gmail.com"
                                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                            >
                                yk880485@gmail.com
                            </a>
                            <a
                                href="tel:+919472137283"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                            >
                                +91 9472137283
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-slate-200/80 bg-white/70 py-6 text-center text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
                <div className="mb-3 flex justify-center gap-3">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.name}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <p>© 2026 Yogesh Kumar. Built with Next.js.</p>
            </footer>

            <ChatBot />
        </div>
    );
}
