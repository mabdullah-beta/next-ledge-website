"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import {
    BarChart3,
    TrendingUp,
    Activity,
    ArrowRight,
} from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function PracticalFinancialInsightsPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section */}
            <section className="relative py-28 overflow-hidden bg-primary">
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            Praktische financiële inzichten
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Heldere uitleg en overzichtelijke inzichten die je helpen je cijfers te begrijpen en de controle te behouden.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-6 mt-10 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-hedvig">
                                Wat we hebben gerealiseerd
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Zet complexe financiële data om in bruikbare inzichten met duidelijke visualisaties en
                                heldere toelichting die jouw besluitvorming versterken.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                Financiële data kan overweldigend zijn, maar dat hoeft niet. Onze dienst voor praktische
                                financiële inzichten zet complexe cijfers om in duidelijke, actiegerichte informatie die je
                                kunt gebruiken om weloverwogen zakelijke beslissingen te nemen. We gaan verder dan
                                basisrapportages en bieden context, analyse en aanbevelingen die specifiek zijn voor jouw
                                bedrijfssituatie.

                                We gebruiken geavanceerde datavisualisatietechnieken om financiële informatie te presenteren
                                in intuïtieve formats die trends zichtbaar maken, kansen identificeren en mogelijke
                                knelpunten vroegtijdig signaleren.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&auto=format"
                                width={500}
                                height={400}
                                className="rounded-xl shadow-xl object-cover"
                                alt="feature visual"
                            />
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Highlights */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <FadeUp>
                    <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 text-center mb-8">
                        Belangrijkste voordelen
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Interactieve financiële dashboards
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Actiegerichte data-interpretaties
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Real-time prestatie-tracking
                                </h3>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mb-18">
                <FAQSection
                    title="Veelgestelde vragen"
                    allowEyebrow={false}
                    allowMultipleOpen={false}
                    faqs={[
                        {
                            id: 1,
                            question: "Hoe vaak ontvang ik financiële inzichten?",
                            answer:
                                "We leveren inzichten volgens een planning die past bij jouw bedrijfsbehoeften—meestal wekelijks, maandelijks of per kwartaal. Daarnaast bieden we real-time dashboards die je op elk moment kunt raadplegen voor actuele informatie.",
                        },
                        {
                            id: 2,
                            question: "Kunnen jullie technische financiële concepten in eenvoudige taal uitleggen?",
                            answer:
                                "Zeker. Onze experts zijn sterk in het vertalen van complexe financiële data naar heldere, begrijpelijke taal. We focussen op praktische gevolgen en concrete aanbevelingen, in plaats van technisch jargon.",
                        },
                        {
                            id: 3,
                            question: "Bieden jullie branche-specifieke benchmarks?",
                            answer:
                                "Ja, we gebruiken relevante branchebenchmarks en prestatie-indicatoren om je te helpen begrijpen hoe jouw bedrijf zich verhoudt tot vergelijkbare organisaties en waar er verbeterkansen liggen.",
                        },
                    ]}
                />
            </section>

            {/* CTA */}
            <section className="py-16 px-6 mb-24">
                <FadeUp>
                    <div className="max-w-4xl mx-auto text-center rounded-2xl p-12 bg-primary text-white shadow-2xl relative overflow-hidden">
                        <h2 className="text-4xl font-bold mb-4">Laten we samen iets moois bouwen</h2>
                        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                            Klaar om praktische financiële inzichten in te zetten voor jouw organisatie?
                        </p>

                        <Link
                            href="/#contact"
                            className="bg-white text-black pl-4 pr-1.5 py-1 rounded-full font-semibold inline-flex items-center gap-3"
                        >
                            <span>Neem contact op</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </FadeUp>
            </section>

            <Footer />
        </div>
    );
}
