"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("portfolio-theme") as
            | "light"
            | "dark"
            | null;
        const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        const activeTheme = storedTheme ?? preferredTheme;

        setTheme(activeTheme);
        document.documentElement.classList.toggle("dark", activeTheme === "dark");
        document.documentElement.style.colorScheme = activeTheme;
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        document.documentElement.style.colorScheme = nextTheme;
        window.localStorage.setItem("portfolio-theme", nextTheme);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-lg shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/90"
            aria-label="Toggle color theme"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
