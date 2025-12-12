"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import servicesData from "../../../data/services.json";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { CheckCircle2, ArrowRight, ChevronRight, Star, TimerIcon, ShieldCheck } from "lucide-react";
import { useInView } from "framer-motion";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";


const benefits = []
// Split benefits into rows (3 items per row)
const firstRow = benefits.slice(0, 3);
const secondRow = benefits.slice(3, 6);

export default function ServicePage() {
    const params = useParams();
    const id = params?.id;
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);


    // State to track which FAQ is open
    const [openFaqIndex, setOpenFaqIndex] = useState(null);


    const firstRowRef = useRef(null);
    const secondRowRef = useRef(null);

    const isFirstRowInView = useInView(firstRowRef, { once: true, amount: 0.3 });
    const isSecondRowInView = useInView(secondRowRef, { once: true, amount: 0.3 });


    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    useEffect(() => {
        if (id) {
            const foundService = servicesData.find(item =>
                item.id === parseInt(id) || item.id.toString() === id
            );
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setService(foundService);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col mt-20">
                <Header />
                <main className="flex-1 py-12 text-center flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
                        <div className="text-xl text-gray-600">Loading service details...</div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col mt-20">
                <Header />
                <main className="flex-1 py-12 text-center">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="text-5xl mb-6">⚠️</div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service not found</h1>
                        <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                        <a href="/services" className="inline-flex items-center text-primary hover:text-primary font-medium">
                            <ChevronRight className="rotate-180 mr-2 h-4 w-4" />
                            Browse all services
                        </a>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Gradient Background */}
                <div className="bg-primary py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <FadeUp>
                            <div className="text-center space-y-6 max-w-3xl mx-auto">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-primary mb-2 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                    Our Services
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold font-hedvig text-white leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </FadeUp>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Image and FAQ Grid */}
                    <FadeUp>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            {/* Image with decorative element */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-br from-blue-100/30 to-gray-100/30 rounded-3xl blur-xl"></div>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={800}
                                    height={600}
                                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <Star className="h-5 w-5 text-primary fill-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Expert Service</div>
                                            <div className="text-xs text-gray-500">Trusted by 500+ businesses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            {service.faqs && service.faqs.length > 0 && (
                                <FAQSection faqs={service.faqs} title="Common Questions" allowEyebrow={false} allowMultipleOpen={false} />
                            )}
                        </div>
                    </FadeUp>

                    {/* Detailed Content Section */}
                    <FadeUp delay={0.2}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
                                    <div className="dot-indicator bg-primary rounded-full"></div>
                                    <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Comprehensive Service Details</span>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Expect</h2>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-inter leading-relaxed">
                                <div className="bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm mb-8">
                                    <p className="text-lg text-gray-700 mb-6">
                                        {service.content}
                                    </p>

                                    {/* Key Benefits */}
                                    <div className="mt-10">
                                        <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 text-center mb-8">
                                            Key benefits
                                        </h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                                            {[
                                                { title: "Time Savings", desc: "Reduce administrative workload by up to 70%", icon: TimerIcon },
                                                { title: "Cost Efficiency", desc: "Optimize operations and reduce unnecessary expenses", icon: CheckCircle2 },
                                                { title: "Strategic Insight", desc: "Data-driven decisions for sustainable growth", icon: Star },
                                                { title: "Risk Mitigation", desc: "Proactive compliance and risk management", icon: ShieldCheck }
                                            ].map((benefit, index) => {
                                                const Icon = benefit.icon
                                                return (
                                                    <div key={index} className="flex justify-center">
                                                        <div className="text-center px-2 w-full max-w-sm">
                                                            {/* Icon */}
                                                            <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                                            </div>

                                                            {/* Title */}
                                                            <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                                                {benefit.title}
                                                            </h3>

                                                            {/* Description */}
                                                            <p className="text-gray-600 text-[14px] sm:text-[15px] lg:text-base leading-relaxed mx-auto">
                                                                {benefit.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Process/How It Works */}
                    <FadeUp delay={0.3}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">A simple, transparent process designed for your convenience</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { step: "01", title: "Initial Consultation", desc: "We discuss your needs and goals" },
                                    { step: "02", title: "Custom Strategy", desc: "Tailored plan development" },
                                    { step: "03", title: "Implementation", desc: "Seamless execution & setup" },
                                    { step: "04", title: "Ongoing Support", desc: "Continuous optimization & reporting" }
                                ].map((step, index) => (
                                    <div key={index} className="relative">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
                                            <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                                            <p className="text-gray-600 text-sm">{step.desc}</p>
                                        </div>
                                        {index < 3 && (
                                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-100"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    {/* CTA Section */}
                    <FadeUp delay={0.4}>
                        <div className="bg-linear-to-r from-primary to-primary/90 rounded-4xl p-8 md:p-12 text-center text-white shadow-xl">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                                <p className="text-white/90 text-lg mb-8">
                                    Join hundreds of satisfied clients who trust us with their financial success
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

                                    <Link
                                        href="/#services"
                                        className="font-inter bg-transparent px-5 py-2.5 sm:py-2 rounded-full text-[15px] sm:text-[16px] md:text-lg font-semibold text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-center w-full sm:w-auto"
                                    >
                                        What we do
                                    </Link>
                                </div>

                                <p className="text-white/80 text-sm mt-6">
                                    Schedule a free 30-minute consultation • No commitment required
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </main>

            <Footer />
        </div>
    );
}