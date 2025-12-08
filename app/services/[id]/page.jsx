"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import servicesData from "../../../data/services.json";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { CheckCircle2, ArrowRight, ChevronRight, Star } from "lucide-react";

export default function ServicePage() {
    const params = useParams();
    const id = params?.id;
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    // State to track which FAQ is open
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

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
                <div className="bg-linear-to-r from-gray-50 to-blue-50 py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <FadeUp>
                            <div className="text-center space-y-6 max-w-3xl mx-auto">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-700 mb-2 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                    Our Services
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold font-hedvig text-gray-900 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed">
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
                                <div className="space-y-6">
                                    <div className="flex items-center mb-2">
                                        <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>
                                    </div>

                                    <div className="space-y-4">
                                        {service.faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white shadow-sm"
                                            >
                                                <button
                                                    onClick={() => toggleFaq(index)}
                                                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                                                >
                                                    <span className="font-medium text-gray-900 text-base pr-6 font-inter group-hover:text-primary transition-colors">
                                                        {faq.question}
                                                    </span>
                                                    <span className="text-gray-400 text-xl shrink-0 group-hover:text-primary transition-colors">
                                                        {openFaqIndex === index ? "−" : "+"}
                                                    </span>
                                                </button>

                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                                        }`}
                                                >
                                                    <div className="px-6 py-5 bg-gray-50/50">
                                                        <p className="text-gray-700 leading-relaxed text-sm font-inter">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </FadeUp>

                    {/* Detailed Content Section */}
                    <FadeUp delay={0.2}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 mb-4 shadow-sm">
                                    Comprehensive Service Details
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
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                { title: "Time Savings", desc: "Reduce administrative workload by up to 70%" },
                                                { title: "Cost Efficiency", desc: "Optimize operations and reduce unnecessary expenses" },
                                                { title: "Strategic Insight", desc: "Data-driven decisions for sustainable growth" },
                                                { title: "Risk Mitigation", desc: "Proactive compliance and risk management" }
                                            ].map((benefit, index) => (
                                                <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 shrink-0">
                                                        <span className="text-primary font-bold">{index + 1}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                                                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
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
                        <div className="bg-linear-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                                <p className="text-white/90 text-lg mb-8">
                                    Join hundreds of satisfied clients who trust us with their financial success
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition hover:scale-105 transform duration-300 shadow-lg"
                                    >
                                        Get Started Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                    <a
                                        href="/services"
                                        className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition shadow-lg"
                                    >
                                        View All Services
                                    </a>
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