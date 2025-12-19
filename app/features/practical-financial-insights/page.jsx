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
    PieChart,
    CheckCircle,
    Target
} from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function PracticalFinancialInsightsPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Enhanced */}
            <section className="relative py-32 overflow-hidden bg-linear-to-br from-primary to-primary-light">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <PieChart className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Data Insights</span>
                        </div>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                            Praktische financiële inzichten
                        </h1>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                            Heldere uitleg en overzichtelijke inzichten die je helpen je cijfers te begrijpen en de controle te behouden.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link
                                href="/#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                            >
                                <span>Ontdek inzichten</span>
                                <ArrowRight size={20} />
                            </Link>
                            <div className="flex items-center gap-2 text-white/80">
                                <Target className="w-4 h-4" />
                                <span className="text-sm">Real-time dashboards</span>
                            </div>
                        </div>
                    </FadeUp>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent"></div>
            </section>

            {/* Statistics Section */}
            <section className="max-w-6xl mx-auto px-6 -mt-10 mb-20">
                <FadeUp>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">Real-time</div>
                                <div className="text-gray-600">Dashboards</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">Weekly</div>
                                <div className="text-gray-600">Rapportages</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                <div className="text-gray-600">Begrijpelijk</div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <BarChart3 className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Financial Intelligence</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-hedvig mb-6">
                                Van cijfers naar inzichten naar actie
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Zet complexe financiële data om in bruikbare inzichten met duidelijke visualisaties en
                                heldere toelichting die jouw besluitvorming versterken.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Interactieve dashboards</h4>
                                        <p className="text-gray-600 text-sm">Real-time inzicht in je financiële prestaties</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Actiegerichte aanbevelingen</h4>
                                        <p className="text-gray-600 text-sm">Concrete stappen voor verbetering van je resultaten</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Branche benchmarks</h4>
                                        <p className="text-gray-600 text-sm">Vergelijk je prestaties met sectorgenoten</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 blur-3xl rounded-full"></div>

                            <div className="relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&auto=format"
                                    width={500}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full"
                                    alt="Financial insights dashboard"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium text-gray-700">Live data</span>
                                    </div>
                                </div>
                            </div>
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
