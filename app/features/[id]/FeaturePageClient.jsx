"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import featuresData from "../../../data/features.json";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Clock,
    MessageCircle,
    ShieldCheck,
    CheckCircle2,
    Layers,
    Settings,
    Link2,
    BarChart3,
    TrendingUp,
    Activity,
    Database,
    Lock,
    FileCheck,
    Shield,
    Users,
    RefreshCw,
    CalendarClock,
    Zap,
    Cpu,
    Workflow,
    Wrench,
    LineChart,
    Plus, Minus, ArrowRight
} from "lucide-react"
import FAQSection from "@/app/components/FAQ";

export const iconMap = {
    // Consultation Services
    Clock,
    MessageCircle,
    ShieldCheck,

    // Custom / Tailored Solutions
    Layers,
    Settings,
    Link2,
    CheckCircle2,

    // Analytics & Financial Insights
    BarChart3,
    TrendingUp,
    Activity,
    LineChart,

    // Data & Control / Governance
    Database,
    Lock,
    FileCheck,
    Shield,

    // Ongoing Support
    Users,
    RefreshCw,
    CalendarClock,

    // Automation & IT
    Zap,
    Cpu,
    Workflow,
    Wrench
}


export default function FeaturePageClient({ id }) {
    const [feature, setFeature] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    useEffect(() => {
        if (id) {
            const found = featuresData.features.find(
                (item) => item.id === parseInt(id) || item.slug === id
            );
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFeature(found);
            setLoading(false);
        }
    }, [id]);

    if (loading || !feature) return null;

    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Artistic */}
            <section className="relative py-28 overflow-hidden bg-primary">
                {/* Gradient Blobs */}
                {/* <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div> */}

                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            {feature.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            {feature.shortDescription}
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Feature Image - Asymmetric */}
            <section className="max-w-5xl mx-auto px-6 -mt-10 mb-20">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                        src={feature.image}
                        fill
                        className="object-cover transition scale-105 group-hover:scale-110 duration-700"
                        alt={feature.title}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
            </section>

            {/* About Section (Portfolio Style) */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-hedvig">
                                What We Created
                            </h2>
                            <p className="mt-6 text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {feature.longContent && (
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    {feature.longContent}
                                </p>
                            )}
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src={feature.image}
                                width={500}
                                height={400}
                                className="rounded-xl shadow-xl object-cover"
                                alt="feature visual"
                            />
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Highlights - creative grid */}
            {feature.highlights && (
                <section className="max-w-5xl mx-auto px-6 mb-24">
                    <FadeUp>
                        <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 text-center mb-8">
                            Key benefits
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {feature.highlights.map((h, i) => {
                                const Icon = iconMap[h?.icon] || CheckCircle2
                                return (
                                    <div key={i} className="flex justify-center">

                                        <div className="text-center px-2 w-full max-w-sm">
                                            <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">

                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                                {h.text}
                                            </h3>                                    </div>

                                    </div>

                                )
                            }
                            )}
                        </div>
                    </FadeUp>
                </section>
            )}

            {/* FAQ - modern accordion */}
            {feature.faqs && (
                <section className="max-w-3xl mx-auto px-6 mb-18">
                    <FAQSection faqs={feature.faqs} title="FAQs" allowEyebrow={false} allowMultipleOpen={false} />

                </section>
            )}

            {/* CTA - Creative Floating Card */}
            <section className="py-16 px-6 mb-24">
                <FadeUp>
                    <div className="max-w-4xl mx-auto text-center rounded-2xl p-12 bg-primary text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 blur-2xl"></div>

                        <h2 className="text-4xl font-bold mb-4">Let’s Build Something Great</h2>
                        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                            Ready to bring {feature.title} to your business?
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
                            <Link
                                href="/#contact"
                                className="bg-white text-black pl-4 pr-1.5 py-1 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm group w-full sm:w-auto"
                            >
                                <span>Get in touch</span>
                                <span className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-full flex items-center justify-center text-white overflow-hidden relative flex-shrink-0">
                                    <ArrowRight
                                        size={18}
                                        strokeWidth={2.5}
                                        className="transition-transform duration-300 group-hover:translate-x-6"
                                    />
                                    <ArrowRight
                                        size={18}
                                        strokeWidth={2.5}
                                        className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0"
                                    />
                                </span>
                            </Link>

                        </div>
                    </div>
                </FadeUp>
            </section>

            <Footer />
        </div>
    );
}
