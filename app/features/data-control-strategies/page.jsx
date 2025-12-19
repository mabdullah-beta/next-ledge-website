"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Database, Lock, FileCheck, ArrowRight, Shield, BarChart3, Users, CheckCircle } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function DataControlStrategiesPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Enhanced */}
            <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary to-primary-light">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Shield className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Veilige & Compliant</span>
                        </div>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                            Data- & controlestrategieën
                        </h1>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                            Goed gestructureerde rapportages die beter overzicht bieden en helpen bij het nemen van
                            weloverwogen beslissingen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link
                                href="/#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                            >
                                <span>Start vandaag</span>
                                <ArrowRight size={20} />
                            </Link>
                            <div className="flex items-center gap-2 text-white/80">
                                <CheckCircle size={16} />
                                <span className="text-sm">Implementatie binnen 4-6 weken</span>
                            </div>
                        </div>
                    </FadeUp>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Statistics Section */}
            <section className="max-w-6xl mx-auto px-6 -mt-10 mb-20">
                <FadeUp>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                                <div className="text-gray-600">Data nauwkeurigheid</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">4-6</div>
                                <div className="text-gray-600">Weken implementatie</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                <div className="text-gray-600">Monitoring & controle</div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* About Section (Portfolio Style) */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <Database className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Data Governance</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-hedvig mb-6">
                                Volledige controle over je financiële data
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We implementeren uitgebreide systemen voor datamanagement en controle die volledige
                                transparantie en governance bieden over je financiële processen.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Geautomatiseerde validatie</h4>
                                        <p className="text-gray-600 text-sm">Robuuste validatieprocessen voor 99.9% nauwkeurigheid</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Audit trails</h4>
                                        <p className="text-gray-600 text-sm">Volledige transparantie in alle financiële activiteiten</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Compliance monitoring</h4>
                                        <p className="text-gray-600 text-sm">Voldoet aan alle relevante wet- en regelgeving</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 blur-3xl rounded-full"></div>

                            <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format"
                                    width={500}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full"
                                    alt="Data control dashboard"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700">Live monitoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Process Steps */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-hedvig font-bold text-gray-900 mb-4">
                                Hoe we jouw data beveiligen
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Een gestructureerde aanpak in 4 stappen voor maximale controle
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">1</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse</h3>
                                <p className="text-gray-600 text-sm">Uitgebreide evaluatie van huidige datastromen en risico's</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">2</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ontwerp</h3>
                                <p className="text-gray-600 text-sm">Maatwerk governance framework specifiek voor jouw organisatie</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">3</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementatie</h3>
                                <p className="text-gray-600 text-sm">Gefaseerde uitrol met training en ondersteuning</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">4</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring</h3>
                                <p className="text-gray-600 text-sm">Continue bewaking en optimalisatie van alle processen</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Enhanced Benefits */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <FadeUp>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-hedvig font-bold text-gray-900 mb-4">
                            Waarom kiezen voor onze data- & controlestrategieën?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Profiteer van bewezen expertise en geavanceerde technologie voor optimale databeveiliging
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <Database className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Uitgebreide datagovernance
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Volledige controle over data-eigenaarschap, toegangsbeheer en kwaliteitsborging met geautomatiseerde workflows.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Geautomatiseerde data validatie</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Real-time kwaliteitsmonitoring</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <Lock className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Geautomatiseerde controlesystemen
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Intelligente controlemechanismen die afwijkingen detecteren en automatisch corrigerende maatregelen nemen.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>24/7 geautomatiseerde monitoring</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Proactieve risicodetectie</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <FileCheck className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Borging van wet- en regelgeving
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Automatische compliance-checks en rapportages die voldoen aan alle relevante wet- en regelgeving.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>GDPR & AVG compliant</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Geautomatiseerde audit trails</span>
                                </li>
                            </ul>
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
