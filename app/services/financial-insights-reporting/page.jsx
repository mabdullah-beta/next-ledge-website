"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, Star, TimerIcon, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";

export default function FinancialInsightsReportingPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <div className="bg-primary py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <FadeUp>
                            <div className="text-center space-y-6 max-w-3xl mx-auto">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-primary mb-2 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                    Onze diensten
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold font-hedvig text-white leading-tight">
                                    Financiële inzichten & rapportage
                                </h1>

                                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed">
                                    Helderheid die betere beslissingen mogelijk maakt. We vertalen financiële data naar
                                    duidelijke inzichten via visuele rapportages en prestatiedashboards. Met de juiste
                                    informatie op het juiste moment kun je de gezondheid van je bedrijf monitoren en
                                    met vertrouwen beslissingen nemen.
                                </p>
                            </div>
                        </FadeUp>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Image + FAQ */}
                    <FadeUp>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-br from-blue-100/30 to-gray-100/30 rounded-3xl blur-xl"></div>

                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                                    alt="Financiële inzichten & rapportage"
                                    width={800}
                                    height={600}
                                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                                    priority
                                />

                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <Star className="h-5 w-5 text-primary fill-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Heldere rapportage</div>
                                            <div className="text-xs text-gray-500">Inzichten waar je op kunt sturen</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FAQSection
                                title="Veelgestelde vragen"
                                allowEyebrow={false}
                                allowMultipleOpen={false}
                                faqs={[
                                    {
                                        id: 1,
                                        question: "Welke soorten dashboards en visuele rapportages bieden jullie aan?",
                                        answer:
                                            "We ontwikkelen maatwerkdashboards met realtime KPI’s zoals omzettrends, winstmarges, kasstroomstatus en operationele kosten. Deze bevatten interactieve grafieken, diagrammen en scorecards die op elk moment toegankelijk zijn via beveiligde online platforms.",
                                    },
                                    {
                                        id: 2,
                                        question:
                                            "Hoe vaak ontvang ik deze inzichten en kunnen ze worden afgestemd op mijn specifieke doelen?",
                                        answer:
                                            "Rapportages kunnen wekelijks, maandelijks of per kwartaal worden gepland, afhankelijk van jouw behoeften. We stemmen elk dashboard af op de metrics die voor jouw bedrijf het belangrijkst zijn — of het nu gaat om verkoopprestaties, projectrendement of budgetbewaking.",
                                    },
                                    {
                                        id: 3,
                                        question: "Hoe vertalen deze inzichten zich naar betere beslissingen voor mijn bedrijf?",
                                        answer:
                                            "Door complexe data op een intuïtieve en visuele manier te presenteren, helpen we je snel kansen te herkennen, potentiële problemen te signaleren en voortgang ten opzichte van doelen te meten. Hierdoor kun je middelen effectiever inzetten, strategieën tijdig bijsturen en met vertrouwen datagedreven beslissingen nemen.",
                                    },
                                ]}
                            />
                        </div>
                    </FadeUp>

                    {/* Content */}
                    <FadeUp delay={0.2}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Wat je kunt verwachten
                                </h2>
                            </div>

                            <div className="bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm">
                                <p className="text-lg text-gray-700 mb-10 font-inter leading-relaxed">
                                    We zetten complexe financiële data om in betekenisvolle inzichten die je helpen
                                    slimmere en beter onderbouwde beslissingen te nemen. Door gebruik te maken van
                                    interactieve visuele rapportages en intuïtieve prestatiedashboards presenteren we
                                    je bedrijfsgegevens op een manier die eenvoudig te begrijpen en toe te passen is.
                                    Met tijdige, nauwkeurige en visueel heldere informatie binnen handbereik kun je
                                    strategisch plannen, middelen effectief alloceren en haalbare groeidoelen
                                    vaststellen. Onze focus ligt op het omzetten van data naar toepasbare kennis,
                                    zodat elke beslissing wordt ondersteund door inzichten in plaats van aannames en
                                    je bedrijf wordt gepositioneerd voor duurzaam succes en vertrouwen in de financiële
                                    toekomst.
                                </p>

                                <h3 className="text-2xl font-bold text-center mb-10">
                                    Belangrijkste voordelen
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        {
                                            title: "Tijdbesparing",
                                            desc: "Snellere toegang tot kerncijfers en rapportages",
                                            icon: TimerIcon,
                                        },
                                        {
                                            title: "Helderheid",
                                            desc: "Visuele dashboards die complexe data vereenvoudigen",
                                            icon: CheckCircle2,
                                        },
                                        {
                                            title: "Strategisch inzicht",
                                            desc: "KPI’s en prestaties met vertrouwen volgen",
                                            icon: Star,
                                        },
                                        {
                                            title: "Controle",
                                            desc: "Problemen vroeg signaleren en snel handelen",
                                            icon: ShieldCheck,
                                        },
                                    ].map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={i} className="text-center">
                                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-2xl mb-4">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* CTA */}
                    <FadeUp delay={0.3}>
                        <div className="bg-linear-to-r from-primary to-primary/90 rounded-4xl p-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Klaar voor heldere financiële inzichten?
                            </h2>
                            <p className="mb-8 text-white/90">
                                Plan een gratis consult van 30 minuten — geen verplichtingen.
                            </p>

                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold"
                            >
                                Neem contact op
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </main>

            <Footer />
        </div>
    );
}
