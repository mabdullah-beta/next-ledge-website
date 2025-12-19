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
    Video,
    Phone,
    Mail,
    Calendar,
    Users,
    CheckCircle
} from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function FlexibleConsultationsPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Enhanced */}
            <section className="relative py-32 overflow-hidden bg-linear-to-br from-primary to-primary-light">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <MessageCircle className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">24/7 Beschikbaar</span>
                        </div>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                            Flexibele consultaties
                        </h1>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                            Eenvoudige toegang tot administratieve ondersteuning wanneer je behoefte hebt aan duidelijkheid of begeleiding.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link
                                href="/#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                            >
                                <span>Plan een consultatie</span>
                                <ArrowRight size={20} />
                            </Link>
                            <div className="flex items-center gap-2 text-white/80">
                                <Clock size={16} />
                                <span className="text-sm">Binnen 24 uur beschikbaar</span>
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
                                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                                <div className="text-gray-600">Responstijd</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                                <div className="text-gray-600">Communicatiekanalen</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                                <div className="text-gray-600">Klanttevredenheid</div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Consultation Types */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-hedvig font-bold text-gray-900 mb-4">
                                Kies jouw ideale consultatiemethode
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Verschillende kanalen voor elke situatie en voorkeur
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Video className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Videogesprekken</h3>
                                <p className="text-gray-600 text-sm mb-4">Persoonlijke sessies met scherm delen voor complexe vraagstukken</p>
                                <div className="text-xs text-primary font-medium">Meest populair</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefoongesprekken</h3>
                                <p className="text-gray-600 text-sm mb-4">Snelle consultaties voor directe vragen en ondersteuning</p>
                                <div className="text-xs text-green-600 font-medium">Binnen 2 uur</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <MessageCircle className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Chat & Berichten</h3>
                                <p className="text-gray-600 text-sm mb-4">Asynchrone communicatie voor niet-urgente vragen</p>
                                <div className="text-xs text-blue-600 font-medium">24/7 beschikbaar</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail Consultaties</h3>
                                <p className="text-gray-600 text-sm mb-4">Gedetailleerde analyses en uitgebreide adviezen</p>
                                <div className="text-xs text-purple-600 font-medium">Binnen 24 uur</div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Flexibele Planning</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-hedvig mb-6">
                                Administratieve expertise op jouw moment
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Deskundige administratieve ondersteuning op jouw moment, met verschillende consultatiemogelijkheden die passen bij jouw agenda en werkstijl.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Geen langdurige verplichtingen</h4>
                                        <p className="text-gray-600 text-sm">Betaal alleen voor de consultaties die je nodig hebt</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Directe toegang tot experts</h4>
                                        <p className="text-gray-600 text-sm">Spreek direct met ervaren administratieve professionals</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Meerdere communicatiekanalen</h4>
                                        <p className="text-gray-600 text-sm">Kies het kanaal dat het beste bij jouw situatie past</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 blur-3xl rounded-full"></div>

                            <div className="relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width={500}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full"
                                    alt="Flexible consultation meeting"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-medium text-gray-700">Expert beschikbaar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Enhanced Benefits */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <FadeUp>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-hedvig font-bold text-gray-900 mb-4">
                            Waarom kiezen voor onze flexibele consultaties?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Toegankelijke expertise zonder de complexiteit van langdurige contracten
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <Clock className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Directe toegang tot experts
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Spreek binnen 24 uur met ervaren administratieve professionals die jouw specifieke situatie begrijpen.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Geen wachttijden of tussenpersonen</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Directe lijn naar specialisten</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Meerdere communicatiekanalen
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Kies het communicatiekanaal dat het beste past bij jouw situatie, voorkeur en urgentie van de vraag.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Video, telefoon, chat & e-mail</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>24/7 beschikbaarheid voor urgente vragen</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Geen langdurige verplichtingen
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Betaal alleen voor de consultaties die je nodig hebt, zonder maandelijkse abonnementen of minimale contractperiodes.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Pay-per-use model</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Transparante prijsstelling</span>
                                </li>
                            </ul>
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
