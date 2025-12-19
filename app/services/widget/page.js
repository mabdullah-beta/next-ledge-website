"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X } from "lucide-react";
import Lottie from "lottie-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import botAnimation from "@/public/animations/Fox-Programmer.json";
import Image from "next/image";
// import botClosedAnimation from "@/public/animations/Fox-Closed.json"; // <-- add closed animation

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(true);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! I’m your finance fox. Ask me anything!",
        },
    ]);

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const scrollRef = useRef(null);
    const textareaRef = useRef(null);

    /* Auto-scroll on new messages */
    useEffect(() => {
        const viewport =
            scrollRef.current?.querySelector(
                "[data-radix-scroll-area-viewport]"
            );

        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }, [messages, loading]);

    /* Auto-grow input field */
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                Math.min(textareaRef.current.scrollHeight, 96) + "px"; // 6rem = 96px
        }
    }, [query]);

    const widgetRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                widgetRef.current &&
                !widgetRef.current.contains(event.target) &&
                !event.composedPath().some((el) =>
                    el?.classList?.contains("fox-launcher")
                )
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    useEffect(() => {
        if (isOpen) return; // Don’t show when widget is open

        setShowGreeting(true);

        const appearDuration = 4000;
        const intervalDuration = 12000;

        const hideTimer = setTimeout(() => {
            setShowGreeting(false);
        }, appearDuration);

        const cycleTimer = setInterval(() => {
            setShowGreeting(true);

            setTimeout(() => setShowGreeting(false), appearDuration);
        }, intervalDuration);

        return () => {
            clearTimeout(hideTimer);
            clearInterval(cycleTimer);
        };
    }, [isOpen]);


    const sendMessage = async () => {
        const trimmed = query.trim();
        if (!trimmed || loading) return;

        const userMsg = { role: "user", content: trimmed };
        const updatedMessages = [...messages, userMsg];

        setMessages(updatedMessages);
        setQuery("");
        setLoading(true);
        setShowGreeting(false);

        try {
            const agentId =
                process.env.NEXT_PUBLIC_AGENT_ID ||
                process.env.AGENT_ID ||
                "";

            const res = await fetch(`/api/chatbot/${agentId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            if (!res.ok) throw new Error(`HTTP error! ${res.status}`);

            const contentType = res.headers.get("content-type");

            if (contentType?.includes("application/json")) {
                const data = await res.json();
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            data.response || "I couldn't generate a response.",
                    },
                ]);
                setLoading(false);
                return;
            }

            /* Streaming response */
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = "";

            setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

            setLoading(false);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split("\n");

                for (const line of lines) {
                    if (!line.startsWith("data: ")) continue;

                    const json = line.replace("data: ", "");
                    if (json === "[DONE]") break;

                    try {
                        const parsed = JSON.parse(json);
                        if (parsed.content) {
                            assistantMessage += parsed.content;

                            setMessages((prev) => {
                                const updated = [...prev];
                                updated[updated.length - 1].content =
                                    assistantMessage;
                                return updated;
                            });
                        }
                    } catch { }
                }
            }
        } catch (err) {
            console.error(err);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, something went wrong. Please try again.",
                },
            ]);
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating greeting message */}
            {!isOpen && showGreeting && (
                <div className="fixed bottom-32 -right-10 bg-white shadow-lg p-3 rounded-2xl text-sm 
                    border border-slate-200 animate-fade-in z-[200] max-w-[230px] transform -translate-x-1/2">
                    <div className="relative">
                        Hi 👋 I'm your finance fox. Ask me anything!
                        {/* Thought bubble tail */}
                        
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-3">
                            <div className="w-2 h-2 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-2">
                            <div className="w-1.5 h-1.5 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
                        </div>
                    </div>
                </div>
            )}


            {/* Animated fox launcher */}
            <button
                type="button"
                aria-label="Open AI assistant chat"
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen) setShowGreeting(false);
                }}
                className="fox-launcher cursor-pointer fixed bottom-2 right-2 h-36 w-36 hover:scale-105 transition-all duration-300 z-[250]"
            >
                <Lottie
                    animationData={isOpen ? botAnimation : botAnimation}
                    loop
                    autoplay
                />
            </button>

            {/* Chat widget */}
            {isOpen && (
                <div ref={widgetRef} className="fixed bottom-24 right-6 w-[360px] max-w-[95%] z-[150]">
                    <div className="rounded-2xl bg-white shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50">
                            <div className="font-semibold text-sm">
                                Finance Fox
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-lg hover:bg-slate-200"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 pt-3 pb-2">
                            <ScrollArea className="h-80 overflow-y-auto" ref={scrollRef}>
                                <div className="pr-2 space-y-3 pb-6">
                                    {messages.map((msg, i) => (
                                        <div
                                            key={i}
                                            className={`flex gap-2 ${msg.role === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                                }`}
                                        >
                                            {/* Assistant avatar */}
                                            {msg.role !== "user" && (
                                                <div className="mt-1 h-8 w-8 rounded-full overflow-hidden flex items-center justify-center">
                                                    <Image
                                                        src="/fox.png"
                                                        alt="Finance Fox"
                                                        width={50}
                                                        height={50}
                                                        className="rounded-full"
                                                    />
                                                </div>
                                            )}

                                            <div
                                                className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[80%]
                                                ${msg.role === "user"
                                                        ? "bg-blue-100 text-blue-900"
                                                        : "bg-slate-100 text-slate-900"
                                                    }`}
                                            >
                                                {msg.role === "user" ? (
                                                    // User messages - plain text
                                                    msg.content
                                                ) : (
                                                    // Assistant messages - render markdown with tables
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm]}
                                                        components={{
                                                            // Wrapper for horizontal scroll
                                                            table: ({ node, ...props }) => (
                                                                <div className="overflow-x-auto my-2 -mx-2">
                                                                    <table className="min-w-full border-collapse" {...props} />
                                                                </div>
                                                            ),
                                                            thead: ({ node, ...props }) => (
                                                                <thead className="bg-slate-200" {...props} />
                                                            ),
                                                            th: ({ node, ...props }) => (
                                                                <th className="border border-slate-300 px-2 py-1.5 text-xs font-semibold text-left whitespace-nowrap" {...props} />
                                                            ),
                                                            td: ({ node, ...props }) => (
                                                                <td className="border border-slate-300 px-2 py-1.5 text-xs" {...props} />
                                                            ),
                                                            tbody: ({ node, ...props }) => (
                                                                <tbody className="bg-white" {...props} />
                                                            ),
                                                            // Style other markdown elements
                                                            p: ({ node, ...props }) => (
                                                                <p className="mb-2 last:mb-0" {...props} />
                                                            ),
                                                            ul: ({ node, ...props }) => (
                                                                <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />
                                                            ),
                                                            ol: ({ node, ...props }) => (
                                                                <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />
                                                            ),
                                                            li: ({ node, ...props }) => (
                                                                <li className="text-sm" {...props} />
                                                            ),
                                                            strong: ({ node, ...props }) => (
                                                                <strong className="font-semibold" {...props} />
                                                            ),
                                                            em: ({ node, ...props }) => (
                                                                <em className="italic" {...props} />
                                                            ),
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {loading && (
                                        <div className="flex animate-pulse items-center gap-2 text-xs text-slate-500">
                                            <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                                            <span>Finance Fox is thinking…</span>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </div>

                        {/* Input Bar */}
                        <div className="px-4 pb-4 pt-1">
                            <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2">
                                <textarea
                                    ref={textareaRef}
                                    placeholder="Ask something…"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    rows={1}
                                    className="w-full resize-none bg-transparent text-sm outline-none focus:ring-0 overflow-y-auto"
                                    style={{
                                        maxHeight: "6rem", // ~4 rows
                                        lineHeight: "1.4rem"
                                    }}
                                />


                                <button
                                    onClick={sendMessage}
                                    disabled={loading || !query.trim()}
                                    className="p-2 rounded-full hover:bg-slate-200 transition disabled:opacity-40"
                                >
                                    <Send className="h-4 w-4 text-slate-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
