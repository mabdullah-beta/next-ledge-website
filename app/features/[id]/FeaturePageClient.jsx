"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import featuresData from "../../../data/features.json";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { useState, useEffect } from "react";
import { CheckCircle2, Plus, Minus, ArrowRight } from "lucide-react";

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
            <section className="relative py-28 overflow-hidden">
                {/* Gradient Blobs */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-light/20 blur-3xl rounded-full"></div>

                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-900">
                            {feature.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
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
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
                            Key Benefits
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {feature.highlights.map((h, i) => (
                                <div
                                    key={i}
                                    className="p-6 border bg-white rounded-xl shadow-md hover:shadow-xl transition"
                                >
                                    <CheckCircle2 className="text-primary h-6 w-6 mb-3" />
                                    <p className="text-gray-700 leading-relaxed">{h}</p>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </section>
            )}

            {/* FAQ - modern accordion */}
            {feature.faqs && (
                <section className="max-w-3xl mx-auto px-6 mb-24">
                    <FadeUp>
                        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                            FAQs
                        </h2>

                        <div className="space-y-4">
                            {feature.faqs.map((faq, index) => (
                                <div key={index} className="border rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                                    >
                                        <span className="font-medium text-gray-900 text-lg">
                                            {faq.question}
                                        </span>
                                        {openFaqIndex === index ? (
                                            <Minus className="h-5 w-5 text-gray-600" />
                                        ) : (
                                            <Plus className="h-5 w-5 text-gray-600" />
                                        )}
                                    </button>

                                    {openFaqIndex === index && (
                                        <div className="px-6 py-4 bg-white border-t text-gray-700">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </FadeUp>
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

                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
                        >
                            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </FadeUp>
            </section>

            <Footer />
        </div>
    );
}
