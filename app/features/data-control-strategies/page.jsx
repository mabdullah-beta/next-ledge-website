"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Database, Lock, FileCheck, ArrowRight } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function DataControlStrategiesPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Artistic */}
            <section className="relative py-28 overflow-hidden bg-primary">
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            Data- & controlestrategieën
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Goed gestructureerde rapportages die beter overzicht bieden en helpen bij het nemen van
                            weloverwogen beslissingen.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* About Section (Portfolio Style) */}
            <section className="max-w-5xl mx-auto px-6 mt-10 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-hedvig">
                                Wat we hebben gerealiseerd
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                We implementeren uitgebreide systemen voor datamanagement en controle die volledige
                                transparantie en governance bieden over je financiële processen.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                In de huidige datagedreven bedrijfsomgeving is effectieve controle over financiële
                                informatie essentieel voor risicobeheersing en strategische besluitvorming. Onze
                                data- en controlestrategieën bieden gestructureerde kaders om je financiële data
                                veilig, overzichtelijk en met vertrouwen te beheren en te benutten.

                                We ontwikkelen uitgebreide datagovernancesystemen die zorgen voor nauwkeurigheid,
                                consistentie en veiligheid binnen al je financiële informatie. Onze aanpak omvat het
                                vastleggen van duidelijke data-eigenaarschap, het implementeren van robuuste
                                validatieprocessen en het opzetten van audit trails die volledige transparantie bieden
                                in je financiële activiteiten.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format"
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
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <FadeUp>
                    <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 text-center mb-8">
                        Belangrijkste voordelen
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Uitgebreide datagovernance
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Geautomatiseerde controlesystemen
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Borging van wet- en regelgeving
                                </h3>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* FAQ - modern accordion */}
            <section className="max-w-3xl mx-auto px-6 mb-18">
                <FAQSection
                    faqs={[
                        {
                            id: 1,
                            question: "Hoe zorgen jullie ervoor dat onze data veilig blijft?",
                            answer:
                                "We implementeren meerdere beveiligingslagen, waaronder toegangsbeheer, encryptie, audit trails en regelmatige beveiligingscontroles. We volgen best practices binnen de sector en voldoen aan relevante wetgeving op het gebied van gegevensbescherming om je informatie optimaal te beveiligen.",
                        },
                        {
                            id: 2,
                            question: "Kunnen jullie systemen helpen bij naleving van wet- en regelgeving?",
                            answer:
                                "Ja, onze controlestrategieën zijn ontworpen om te voldoen aan relevante financiële wet- en regelgeving. We verwerken compliance-eisen in onze controlekaders en leveren documentatie ter ondersteuning van audits en toezichthoudende instanties.",
                        },
                        {
                            id: 3,
                            question: "Hoe snel kunnen deze controlestrategieën worden geïmplementeerd?",
                            answer:
                                "De implementatietijd hangt af van de complexiteit van je organisatie, maar doorgaans implementeren we kerncontroleframeworks binnen 4–6 weken. Meer uitgebreide systemen worden meestal binnen 8–12 weken volledig uitgerold en geoptimaliseerd.",
                        },
                    ]}
                    title="Veelgestelde vragen"
                    allowEyebrow={false}
                    allowMultipleOpen={false}
                />
            </section>

            {/* CTA - Creative Floating Card */}
            <section className="py-16 px-6 mb-24">
                <FadeUp>
                    <div className="max-w-4xl mx-auto text-center rounded-2xl p-12 bg-primary text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 blur-2xl"></div>

                        <h2 className="text-4xl font-bold mb-4">
                            Laten we samen iets moois bouwen
                        </h2>
                        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                            Klaar om data- & controlestrategieën toe te passen binnen jouw organisatie?
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
                            <Link
                                href="/#contact"
                                className="bg-white text-black pl-4 pr-1.5 py-1 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm group w-full sm:w-auto"
                            >
                                <span>Neem contact op</span>
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
