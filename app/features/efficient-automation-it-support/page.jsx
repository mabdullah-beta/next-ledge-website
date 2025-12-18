"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Zap, Workflow, Wrench, ArrowRight } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function EfficientAutomationITSupportPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section */}
            <section className="relative py-28 overflow-hidden bg-primary">
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            Efficiënte automatisering & IT-ondersteuning
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Implementatie van handige tools en automatiseringen die je administratieve werk stroomlijnen
                            en handmatige taken verminderen.
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
                                Zet technologie in om repetitieve taken te automatiseren, systemen te integreren en je
                                administratieve workflows te optimaliseren voor maximale efficiëntie.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                Handmatige administratieve taken kosten waardevolle tijd en vergroten het risico op fouten.
                                Onze service voor efficiënte automatisering en IT-ondersteuning identificeert kansen om
                                technologie in te zetten voor het automatiseren van routinematige processen, het integreren
                                van losse systemen en het optimaliseren van je totale administratieve workflow.

                                We starten met een uitgebreide procesanalyse om automatiseringskansen te identificeren die
                                de hoogste return on investment opleveren. Vervolgens ontwerpen en implementeren we
                                automatiseringsoplossingen op maat die jouw specifieke knelpunten aanpakken — of het nu gaat
                                om het automatiseren van factuurverwerking, het stroomlijnen van rapportages of het
                                integreren van boekhoudsoftware met andere bedrijfssystemen.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format"
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
                                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Implementatie van procesautomatisering
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Expertise in systeemintegraties
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Doorlopende technische ondersteuning
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
                            question: "Welke soorten processen kunnen worden geautomatiseerd?",
                            answer:
                                "We kunnen een breed scala aan administratieve processen automatiseren, waaronder factuurverwerking, onkostenbeheer, het genereren van rapportages, data-invoer, afstemmingstaken, compliance-monitoring en communicatieworkflows. We beoordelen elk proces afzonderlijk om het automatiseringspotentieel te bepalen.",
                        },
                        {
                            id: 2,
                            question: "Hoeveel tijd kan automatisering besparen?",
                            answer:
                                "Doorgaans besparen onze automatiseringsoplossingen 20–70% van de tijd die aan handmatige administratieve taken wordt besteed, afhankelijk van de processen. Sommige klanten hebben aangegeven tot wel 40 uur per week te besparen binnen hun administratieve functies.",
                        },
                        {
                            id: 3,
                            question: "Bieden jullie training voor nieuwe geautomatiseerde systemen?",
                            answer:
                                "Ja, we bieden uitgebreide training voor je team, inclusief praktische sessies, gedetailleerde documentatie en doorlopende ondersteuning, zodat iedereen de nieuwe systemen effectief en met vertrouwen kan gebruiken.",
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
                            Klaar om efficiënte automatisering & IT-ondersteuning toe te passen binnen jouw organisatie?
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
