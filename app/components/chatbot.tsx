"use client";

import { useState } from "react";

type Message = {
    id: number;
    role: "assistant" | "user";
    text: string;
};

function getAssistantReply(input: string) {
    const text = input.toLowerCase();

    if (text.includes("skill") || text.includes("stack") || text.includes("tech")) {
        return "Yogesh works with React.js, Redux, Node.js, Express.js, Oracle PL/SQL, Git, GitHub, Azure DevOps, and Postman.";
    }

    if (text.includes("experience") || text.includes("tcs") || text.includes("work")) {
        return "He has 3+ years of experience at Tata Consultancy Services, building production web apps and improving API and database performance.";
    }

    if (text.includes("project") || text.includes("skillbridge") || text.includes("mi store")) {
        return "His notable projects include SkillBridge, a full-stack job portal, and a responsive MI Store clone frontend.";
    }

    if (text.includes("contact") || text.includes("email") || text.includes("phone")) {
        return "You can reach Yogesh at yk880485@gmail.com or +91 9472137283.";
    }

    if (text.includes("education") || text.includes("btech")) {
        return "He holds a B.Tech in Electronics and Instrumentation Engineering from Techno Main Salt Lake, Kolkata, with a CGPA of 8.61.";
    }

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! I can tell you about Yogesh's skills, experience, projects, education, and contact details.";
    }

    return "Try asking about skills, experience, projects, education, or contact details.";
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            role: "assistant",
            text: "Hi! I’m Yogesh’s portfolio assistant. Ask me about his skills, experience, projects, or contact info.",
        },
    ]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const trimmed = input.trim();

        if (!trimmed) {
            return;
        }

        const userMessage: Message = {
            id: Date.now(),
            role: "user",
            text: trimmed,
        };

        setMessages((previous) => [...previous, userMessage]);
        setInput("");

        window.setTimeout(() => {
            const assistantMessage: Message = {
                id: Date.now() + 1,
                role: "assistant",
                text: getAssistantReply(trimmed),
            };
            setMessages((previous) => [...previous, assistantMessage]);
        }, 250);
    };

    return (
        <div className="fixed bottom-4 right-4 z-[70]">
            {!isOpen ? (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-cyan-600 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                    💬 Chat with me
                </button>
            ) : (
                <div className="w-[320px] rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                        <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Portfolio Assistant</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Ask me anything about Yogesh</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                            aria-label="Close chat"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex h-72 flex-col gap-2 overflow-y-auto px-4 py-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === "assistant"
                                        ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                        : "ml-auto bg-cyan-600 text-white"
                                    }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3 dark:border-slate-800">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                placeholder="Type a question..."
                                className="flex-1 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 dark:border-slate-700 dark:bg-slate-950"
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-cyan-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
