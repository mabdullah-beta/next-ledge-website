"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Layers, Settings, Link2, CheckCircle2, ArrowRight, Puzzle, CheckCircle, Cog } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function TailoredAdministrativeSolutionsPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Enhanced */}
            <section className="relative py-32 overflow-hidden bg-linear-to-br from-primary to-primary-light">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Puzzle className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Maatwerk Oplossingen</span>
                        </div>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                            Op maat gemaakte administratieve oplossingen
                        </h1>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                            Werkprocessen en systemen afgestemd op jouw bedrijfsbehoeften, van dagelijkse boekhouding
                            tot gestructureerde financiële processen.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link
                                href="/#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                            >
                                <span>Ontwerp oplossing</span>
                                <ArrowRight size={20} />
                            </Link>
                            <div className="flex items-center gap-2 text-white/80">
                                <Cog className="w-4 h-4" />
                                <span className="text-sm">100% op maat gemaakt</span>
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
                                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                <div className="text-gray-600">Op maat gemaakt</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">6-8</div>
                                <div className="text-gray-600">Weken implementatie</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">Schaalbaar</div>
                                <div className="text-gray-600">Voor groei</div>
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
                                <Layers className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Custom Solutions</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-hedvig mb-6">
                                Jouw unieke bedrijf verdient unieke oplossingen
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Wij ontwikkelen op maat gemaakte administratieve systemen en workflows die specifiek
                                zijn ontworpen voor jouw bedrijfsvoering, met efficiëntie en compliance op elk niveau.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Bedrijfsspecifiek ontwerp</h4>
                                        <p className="text-gray-600 text-sm">Workflows die perfect aansluiten bij jouw processen</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Schaalbare architectuur</h4>
                                        <p className="text-gray-600 text-sm">Groeit mee met je bedrijf en toekomstige behoeften</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Naadloze integratie</h4>
                                        <p className="text-gray-600 text-sm">Verbindt met al je bestaande tools en systemen</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 blur-3xl rounded-full"></div>

                            <div className="relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&auto=format"
                                    width={500}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full"
                                    alt="Tailored administrative solutions"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Settings className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-medium text-gray-700">Custom built</span>
                                    </div>
                                </div>
                            </div>
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
