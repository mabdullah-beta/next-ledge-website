"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Layers, Settings, Link2, CheckCircle2, ArrowRight } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function TailoredAdministrativeSolutionsPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Artistic */}
            <section className="relative py-28 overflow-hidden bg-primary">
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            Op maat gemaakte administratieve oplossingen
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Werkprocessen en systemen afgestemd op jouw bedrijfsbehoeften, van dagelijkse boekhouding
                            tot gestructureerde financiële processen.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* About Section (Portfolio Style) */}
            <section className="max-w-5xl mx-auto px-6 mb-24 mt-10">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-hedvig">
                                Wat we hebben gerealiseerd
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Wij ontwikkelen op maat gemaakte administratieve systemen en workflows die specifiek
                                zijn ontworpen voor jouw bedrijfsvoering, met efficiëntie en compliance op elk niveau.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                Elk bedrijf heeft unieke administratieve behoeften, en standaardoplossingen zorgen
                                vaak voor meer problemen dan ze oplossen. Onze op maat gemaakte administratieve
                                oplossingen starten met een grondige analyse van je huidige processen, knelpunten en
                                bedrijfsdoelstellingen. Vervolgens ontwerpen en implementeren we systemen die precies
                                aansluiten op jouw specifieke eisen, met behoud van schaalbaarheid voor toekomstige groei.

                                Onze aanpak combineert best practices uit de sector met innovatieve inzichten om
                                administratieve workflows te creëren die zowel efficiënt als compliant zijn.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format"
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
                                    <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                    Bedrijfsspecifiek workflow-ontwerp
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                    Schaalbare systeemarchitectuur
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Link2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                    Naadloze integratie met bestaande tools
                                </h3>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mb-18">
                <FAQSection
                    faqs={[
                        {
                            id: 1,
                            question: "Hoe zorgen jullie ervoor dat de oplossingen aansluiten op onze specifieke behoeften?",
                            answer:
                                "We starten met een uitgebreide ontdekkingsfase waarin we je huidige processen analyseren, knelpunten identificeren en je bedrijfsdoelstellingen begrijpen. Op basis hiervan ontwerpen we oplossingen, met meerdere feedbackmomenten tijdens de implementatie.",
                        },
                        {
                            id: 2,
                            question: "Kunnen jullie oplossingen integreren met onze bestaande software?",
                            answer:
                                "Ja, we zijn gespecialiseerd in het naadloos integreren van oplossingen met bestaande tools. We werken met uiteenlopende boekhoudsoftware, CRM-systemen, projectmanagementtools en maatwerkapplicaties om soepele samenwerking te garanderen.",
                        },
                        {
                            id: 3,
                            question: "Welke ondersteuning bieden jullie na de implementatie?",
                            answer:
                                "We bieden uitgebreide training voor je team, duidelijke documentatie en doorlopende technische ondersteuning. Daarnaast voeren we regelmatige systeemreviews en updates uit om ervoor te zorgen dat de oplossingen blijven aansluiten bij je veranderende behoeften.",
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

                        <h2 className="text-4xl font-bold mb-4">Laten we samen iets moois bouwen</h2>
                        <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                            Klaar om op maat gemaakte administratieve oplossingen in te zetten voor jouw organisatie?
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
