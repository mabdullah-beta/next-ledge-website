"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import {
    Clock,
    MessageCircle,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function FlexibleConsultationsPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Artistic */}
            <section className="relative py-28 overflow-hidden bg-primary">
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            Flexibele consultaties
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Eenvoudige toegang tot administratieve ondersteuning wanneer je behoefte hebt aan duidelijkheid of begeleiding.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Feature Image - Asymmetric */}
            <section className="max-w-5xl mx-auto px-6 -mt-10 mb-20">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        fill
                        className="object-cover transition scale-105 group-hover:scale-110 duration-700"
                        alt="Flexibele consultaties"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>

                    <div className="pointer-events-none absolute inset-0"></div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-hedvig">
                                Wat we hebben gerealiseerd
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Deskundige administratieve ondersteuning op jouw moment, met verschillende consultatiemogelijkheden.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Bij Nexledge geloven we dat toegang tot deskundige begeleiding eenvoudig en afgestemd moet zijn op jouw agenda.
                                Ons flexibele consultatiemodel verlaagt de drempel tussen jou en de administratieve inzichten die je nodig hebt
                                om met vertrouwen beslissingen te nemen. We begrijpen dat zakelijke vragen zich niet altijd beperken tot kantooruren.
                                Daarom bieden we meerdere communicatiekanalen aan. Of je nu een dringende compliancevraag hebt, een nieuwe financiële
                                strategie wilt bespreken of verduidelijking zoekt over je huidige rapportages — ons team staat voor je klaar via
                                moderne en toegankelijke kanalen.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                    Directe toegang tot experts
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                    Meerdere communicatiekanalen
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                    Geen langdurige verplichtingen
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
                            question: "Hoe snel kan ik een consultatie inplannen?",
                            answer:
                                "Voor dringende vragen bieden we consultaties op dezelfde dag aan. In de meeste gevallen is er binnen 24 uur beschikbaarheid voor standaard consultaties.",
                        },
                        {
                            id: 2,
                            question: "Welke communicatiekanalen ondersteunen jullie?",
                            answer:
                                "We bieden videogesprekken, telefoongesprekken, chatberichten en e-mailconsultaties aan.",
                        },
                    ]}
                />
            </section>

            {/* CTA */}
            <section className="py-16 px-6 mb-24">
                <FadeUp>
                    <div className="max-w-4xl mx-auto text-center rounded-2xl p-12 bg-primary text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 blur-2xl"></div>

                        <h2 className="text-4xl font-bold mb-4">Laten we samen iets moois bouwen</h2>
                        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                            Klaar om flexibele consultaties in te zetten voor jouw organisatie?
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
