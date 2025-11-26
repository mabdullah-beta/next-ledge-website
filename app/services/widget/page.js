"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X } from "lucide-react";
import Lottie from "lottie-react";
import botAnimation from "@/public/animations/Fox-Programmer.json";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! I’m your AI assistant. How can I help you today?",
        },
    ]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    // auto-scroll on new messages
    useEffect(() => {
        if (scrollRef.current) {
            const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }
    }, [messages, loading]);

    const sendMessage = async () => {
        const trimmed = query.trim();
        if (!trimmed || loading) return;

        const userMsg = { role: "user", content: trimmed };
        const updatedMessages = [...messages, userMsg];

        setMessages(updatedMessages);
        setQuery("");
        setLoading(true);

        try {
            const agentId = process.env.NEXT_PUBLIC_AGENT_ID || process.env.AGENT_ID || "";

            const res = await fetch(`/api/chatbot/${agentId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            const data = await res.json();

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: data.response ?? "I couldn’t generate a response.",
                },
            ]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, something went wrong. Please try again.",
                },
            ]);
        } finally {
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
            {/* Animated Lottie launcher */}
            <button
                type="button"
                aria-label="Open AI assistant chat"
                onClick={() => setIsOpen(prev => !prev)}
                className="fixed bottom-0 right-0 z-100 h-40 w-40 hover:cursor-pointer hover:translate-y-1 transition-all duration-300"
            >
                <Lottie
                    animationData={botAnimation}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                />
            </button>

            {/* Chat card */}
            {isOpen && (
                <div className="fixed bottom-30 right-6 w-[360px] max-w-[calc(100%-2rem)] z-50">
                    <div className="rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                            <div className="font-semibold text-sm">Ask Super AI</div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-full hover:bg-slate-100 transition hover:cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="px-4 pt-4 pb-2">
                            <ScrollArea className="h-80" ref={scrollRef}>
                                <div className="pr-2 space-y-3">
                                    {messages.map((msg, i) => {
                                        const isUser = msg.role === "user";
                                        return (
                                            <div
                                                key={i}
                                                className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"
                                                    }`}
                                            >
                                                {/* Avatar for assistant only */}
                                                {!isUser && (
                                                    <div className="mt-1 h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />
                                                )}

                                                <div
                                                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed max-w-[80%] ${isUser
                                                        ? "bg-blue-50 text-blue-900"
                                                        : "bg-slate-100 text-slate-900"
                                                        }`}
                                                >
                                                    {msg.content}
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {loading && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                                            <span>Assistant is typing…</span>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </div>

                        {/* Input bar */}
                        <div className="px-4 pb-4 pt-1">
                            <div className="flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5">
                                <Input
                                    className="border-none bg-transparent shadow-none px-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                                    placeholder="How else can I help?"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />

                                <button
                                    type="button"
                                    onClick={sendMessage}
                                    disabled={loading || !query.trim()}
                                    className="p-1 rounded-full hover:bg-slate-200 transition disabled:opacity-40"
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
