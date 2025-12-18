"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, Star, TimerIcon, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";

export default function AutomationITIntegrationPage() {
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
                                    Automatisering & IT-integratie
                                </h1>

                                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed">
                                    Efficiëntie door slimme technologie. We analyseren waar automatisering en IT jouw
                                    financiële processen kunnen vereenvoudigen, tijd kunnen besparen en handmatig werk
                                    kunnen verminderen. Onze focus is om je up-to-date te houden met ontwikkelingen in
                                    AI en digitale tools — zodat je bedrijf soepeler draait en meer datagedreven wordt.
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
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                                    alt="Automatisering & IT-integratie"
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
                                            <div className="text-sm font-medium text-gray-900">Slimme automatisering</div>
                                            <div className="text-xs text-gray-500">Moderne & schaalbare systemen</div>
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
                                        question: "Welke financiële processen kunnen doorgaans worden geautomatiseerd?",
                                        answer:
                                            "We automatiseren repetitieve taken zoals factuurverwerking, onkostenbeheer, bankafstemmingen, het genereren van financiële rapportages en betalingsherinneringen. Dit vermindert handmatige invoer, minimaliseert fouten en geeft je team ruimte voor werk met meer toegevoegde waarde.",
                                    },
                                    {
                                        id: 2,
                                        question: "Hoe bepalen jullie welke IT-oplossingen geschikt zijn voor mijn bedrijf?",
                                        answer:
                                            "We starten met een grondige analyse van je huidige workflows, knelpunten en bedrijfsdoelen. Op basis daarvan adviseren we oplossingen op maat — zoals cloudboekhoudsoftware, AP/AR-automatiseringstools of AI-gestuurde analyseplatformen — die aansluiten op je bestaande systemen en meegroeien met je organisatie.",
                                    },
                                    {
                                        id: 3,
                                        question:
                                            "Kunnen jullie helpen bij de implementatie van nieuwe digitale tools en welke ondersteuning bieden jullie daarna?",
                                        answer:
                                            "Ja, we begeleiden het volledige implementatieproces, inclusief inrichting, datamigratie en training van medewerkers. Na de implementatie bieden we doorlopende technische ondersteuning, regelmatige systeemreviews en updates over nieuwe functies of relevante AI-ontwikkelingen, zodat je tools effectief en actueel blijven.",
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
                                    Door gebruik te maken van moderne technologie helpen we bedrijven hun financiële
                                    processen te stroomlijnen door te identificeren waar automatisering en IT-oplossingen
                                    de grootste impact kunnen hebben. Door je bestaande processen zorgvuldig te evalueren,
                                    brengen we repetitieve taken in kaart die geautomatiseerd kunnen worden, waardoor
                                    menselijke fouten worden verminderd en waardevolle tijd vrijkomt voor strategische
                                    initiatieven. Met onze ondersteuning wordt je organisatie niet alleen sneller en
                                    nauwkeuriger in haar financiële werkzaamheden, maar verkrijgt zij ook bruikbare
                                    inzichten uit realtime data, wat leidt tot beter onderbouwde beslissingen en
                                    strategischere planning.
                                </p>

                                <h3 className="text-2xl font-bold text-center mb-10">
                                    Belangrijkste voordelen
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        {
                                            title: "Tijdbesparing",
                                            desc: "Minder handmatig werk en repetitieve taken",
                                            icon: TimerIcon,
                                        },
                                        {
                                            title: "Nauwkeurigheid",
                                            desc: "Minimaliseer menselijke fouten in financiële processen",
                                            icon: CheckCircle2,
                                        },
                                        {
                                            title: "Schaalbaarheid",
                                            desc: "Systemen die meegroeien met je bedrijf",
                                            icon: Star,
                                        },
                                        {
                                            title: "Toekomstbestendig",
                                            desc: "Altijd up-to-date met AI en digitale tools",
                                            icon: ShieldCheck,
                                        },
                                    ].map((item, i) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={i} className="text-center">
                                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-2xl mb-4">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h4 className="text-lg font-semibold mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {item.desc}
                                                </p>
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
                                Klaar om je bedrijf te transformeren?
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
