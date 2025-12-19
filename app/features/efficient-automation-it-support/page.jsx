"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Zap, Workflow, Wrench, ArrowRight, Cpu, Clock, TrendingUp, CheckCircle, BarChart3 } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function EfficientAutomationITSupportPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Enhanced */}
            <section className="relative py-32 overflow-hidden bg-linear-to-br from-primary to-primary-light">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Cpu className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Smart Automation</span>
                        </div>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                            Efficiënte automatisering & IT-ondersteuning
                        </h1>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                            Implementatie van handige tools en automatiseringen die je administratieve werk stroomlijnen
                            en handmatige taken verminderen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link
                                href="/#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                            >
                                <span>Automatiseer nu</span>
                                <ArrowRight size={20} />
                            </Link>
                            <div className="flex items-center gap-2 text-white/80">
                                <Clock size={16} />
                                <span className="text-sm">Bespaar tot 40 uur per week</span>
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
                                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                                <div className="text-gray-600">Tijdbesparing</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">40h</div>
                                <div className="text-gray-600">Per week bespaard</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                                <div className="text-gray-600">Minder fouten</div>
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
                                <Zap className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Process Automation</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-hedvig mb-6">
                                Transformeer je administratie met slimme automatisering
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Zet technologie in om repetitieve taken te automatiseren, systemen te integreren en je
                                administratieve workflows te optimaliseren voor maximale efficiëntie.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Intelligente procesanalyse</h4>
                                        <p className="text-gray-600 text-sm">Identificeer automatiseringskansen met de hoogste ROI</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Maatwerk automatisering</h4>
                                        <p className="text-gray-600 text-sm">Oplossingen specifiek ontworpen voor jouw knelpunten</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Naadloze integratie</h4>
                                        <p className="text-gray-600 text-sm">Verbind al je systemen voor optimale workflow</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 blur-3xl rounded-full"></div>

                            <div className="relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format"
                                    width={500}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full"
                                    alt="Automation dashboard"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium text-gray-700">70% efficiency boost</span>
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
                                Van handmatig naar geautomatiseerd in 4 stappen
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Onze bewezen methode voor succesvolle automatisering
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Procesanalyse</h3>
                                <p className="text-gray-600 text-sm">Identificeer automatiseringskansen en bereken ROI per proces</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Cpu className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ontwerp & Ontwikkeling</h3>
                                <p className="text-gray-600 text-sm">Maatwerk automatiseringsoplossingen voor jouw specifieke behoeften</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Workflow className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementatie</h3>
                                <p className="text-gray-600 text-sm">Gefaseerde uitrol met minimale verstoring van dagelijkse activiteiten</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Wrench className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ondersteuning</h3>
                                <p className="text-gray-600 text-sm">Continue monitoring, onderhoud en optimalisatie van alle systemen</p>
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
                            Waarom kiezen voor onze automatiseringsoplossingen?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Bewezen expertise in het transformeren van handmatige processen naar efficiënte workflows
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Implementatie van procesautomatisering
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Transformeer repetitieve taken naar geautomatiseerde workflows die 24/7 draaien zonder menselijke tussenkomst.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Factuurverwerking automatisering</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Geautomatiseerde rapportages</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <Workflow className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Expertise in systeemintegraties
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Verbind al je verschillende systemen naadloos voor een uniforme dataflow en geïntegreerde workflows.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>API koppelingen & data synchronisatie</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Cross-platform compatibiliteit</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                                <Wrench className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Doorlopende technische ondersteuning
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Proactieve monitoring en onderhoud zorgen ervoor dat je automatiseringen altijd optimaal functioneren.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>24/7 monitoring & alerting</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Regelmatige updates & optimalisaties</span>
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
