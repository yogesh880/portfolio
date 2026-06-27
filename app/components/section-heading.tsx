type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description: string;
    align?: "left" | "center";
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    return (
        <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">
                {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {description}
            </p>
        </div>
    );
}
