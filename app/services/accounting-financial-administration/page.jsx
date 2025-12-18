"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, ChevronRight, Star, TimerIcon, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";

export default function AccountingFinancialAdministrationPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Gradient Background */}
                <div className="bg-primary py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <FadeUp>
                            <div className="text-center space-y-6 max-w-3xl mx-auto">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-primary mb-2 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                                    Onze diensten
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold font-hedvig text-white leading-tight">
                                    Boekhouding & Financiële Administratie
                                </h1>

                                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed">
                                    Nauwkeurig, compliant en altijd up-to-date. Wij verzorgen je boekhouding,
                                    btw-aangiften, jaarrekeningen en alle andere administratieve taken met precisie.
                                    Maar we gaan verder dan de basis — we helpen je je cijfers te begrijpen, zodat je
                                    kunt zien hoe gezond je bedrijf werkelijk is.
                                </p>
                            </div>
                        </FadeUp>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Image and FAQ Grid */}
                    <FadeUp>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            {/* Image with decorative element */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-br from-blue-100/30 to-gray-100/30 rounded-3xl blur-xl"></div>

                                <Image
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                                    alt="Boekhouding & Financiële Administratie"
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
                                            <div className="text-sm font-medium text-gray-900">Expertservice</div>
                                            <div className="text-xs text-gray-500">Vertrouwd door 500+ bedrijven</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <FAQSection
                                title="Veelgestelde vragen"
                                allowEyebrow={false}
                                allowMultipleOpen={false}
                                faqs={[
                                    {
                                        id: 1,
                                        question: "Welke specifieke taken verzorgen jullie onder boekhouding en btw-aangiften?",
                                        answer:
                                            "Wij verzorgen de dagelijkse boekhouding, waaronder het verwerken van transacties, het afstemmen van bankafschriften en het opstellen van btw-aangiften voor indiening bij de belastingdienst. Daarnaast verzorgen we de jaarrekening, salarisadministratie en zorgen we ervoor dat alle gegevens voldoen aan de geldende regelgeving.",
                                    },
                                    {
                                        id: 2,
                                        question:
                                            "Hoe helpen jullie mij de financiële gezondheid van mijn bedrijf te begrijpen, naast basisrapportages?",
                                        answer:
                                            "We analyseren je financiële data om trends, winstdrijvers en mogelijke risico’s te herkennen. We geven regelmatig reviews waarin we key performance indicators (KPI’s), kasstroompatronen en operationele efficiëntiemetrics in eenvoudige taal uitleggen, zodat je weloverwogen beslissingen kunt nemen.",
                                    },
                                    {
                                        id: 3,
                                        question: "Wat maakt jullie aanpak anders dan standaard accountantsdiensten?",
                                        answer:
                                            "We combineren technische compliance met strategisch inzicht. Naast nauwkeurigheid en naleving van wet- en regelgeving richten we ons op het vergroten van jouw financiële kennis. We vertalen complexe data naar bruikbare bedrijfsinzichten en fungeren als zowel compliance-experts als strategische partners in jouw groei.",
                                    },
                                ]}
                            />
                        </div>
                    </FadeUp>

                    {/* Detailed Content Section */}
                    <FadeUp delay={0.2}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
                                    <div className="dot-indicator bg-primary rounded-full"></div>
                                    <span className="font-inter text-sm sm:text-base font-semimedium text-primary">
                                        Uitgebreide servicedetails
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat je kunt verwachten</h2>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 font-inter leading-relaxed">
                                <div className="bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm mb-8">
                                    <p className="text-lg text-gray-700 mb-6">
                                        Ons team zorgt ervoor dat elk onderdeel van je financieel beheer met precisie,
                                        consistentie en volledige naleving van alle regelgeving wordt uitgevoerd. Van het
                                        bijhouden van accurate administratie en het beheren van btw-aangiften tot het
                                        opstellen van gedetailleerde jaarstukken: wij regelen de technische details, zodat
                                        jij je kunt focussen op de groei van je bedrijf. We doen meer dan alleen cijfers
                                        beheren: we analyseren je financiële data om bruikbare inzichten te leveren, zodat
                                        je begrijpt waar je bedrijf floreert en waar verbeteringen mogelijk zijn. Ons doel
                                        is om complexe financiële informatie om te zetten in praktische kennis, zodat je
                                        bedrijf niet alleen compliant is, maar ook klaar staat voor langdurig succes en
                                        veerkracht.
                                    </p>

                                    {/* Key Benefits */}
                                    <div className="mt-10">
                                        <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 text-center mb-8">
                                            Belangrijkste voordelen
                                        </h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                                            {[
                                                {
                                                    title: "Tijdbesparing",
                                                    desc: "Verminder de administratieve werkdruk met tot wel 70%",
                                                    icon: TimerIcon,
                                                },
                                                {
                                                    title: "Kostenefficiëntie",
                                                    desc: "Optimaliseer processen en verlaag onnodige kosten",
                                                    icon: CheckCircle2,
                                                },
                                                {
                                                    title: "Strategisch inzicht",
                                                    desc: "Datagedreven beslissingen voor duurzame groei",
                                                    icon: Star,
                                                },
                                                {
                                                    title: "Risicobeheersing",
                                                    desc: "Proactieve compliance en risicomanagement",
                                                    icon: ShieldCheck,
                                                },
                                            ].map((benefit, index) => {
                                                const Icon = benefit.icon;
                                                return (
                                                    <div key={index} className="flex justify-center">
                                                        <div className="text-center px-2 w-full max-w-sm">
                                                            <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />
                                                            </div>

                                                            <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900 mb-2 sm:mb-3">
                                                                {benefit.title}
                                                            </h3>

                                                            <p className="text-gray-600 text-[14px] sm:text-[15px] lg:text-base leading-relaxed mx-auto">
                                                                {benefit.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Process/How It Works */}
                    <FadeUp delay={0.3}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hoe het werkt</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Een eenvoudig, transparant proces dat is ontworpen voor jouw gemak
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { step: "01", title: "Eerste kennismaking", desc: "We bespreken je behoeften en doelen" },
                                    { step: "02", title: "Maatwerkstrategie", desc: "Ontwikkeling van een plan op maat" },
                                    { step: "03", title: "Implementatie", desc: "Vlotte uitvoering en inrichting" },
                                    { step: "04", title: "Doorlopende ondersteuning", desc: "Continue optimalisatie en rapportage" },
                                ].map((step, index) => (
                                    <div key={index} className="relative">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
                                            <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                                            <p className="text-gray-600 text-sm">{step.desc}</p>
                                        </div>
                                        {index < 3 && (
                                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-100"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    {/* CTA Section */}
                    <FadeUp delay={0.4}>
                        <div className="bg-linear-to-r from-primary to-primary/90 rounded-4xl p-8 md:p-12 text-center text-white shadow-xl">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-3xl font-bold mb-4">Klaar om je bedrijf te transformeren?</h2>
                                <p className="text-white/90 text-lg mb-8">
                                    Sluit je aan bij honderden tevreden klanten die ons vertrouwen met hun financiële succes
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

                                    <Link
                                        href="/#services"
                                        className="font-inter bg-transparent px-5 py-2.5 sm:py-2 rounded-full text-[15px] sm:text-[16px] md:text-lg font-semibold text-white border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-center w-full sm:w-auto"
                                    >
                                        Wat we doen
                                    </Link>
                                </div>

                                <p className="text-white/80 text-sm mt-6">
                                    Plan een gratis consult van 30 minuten • Geen verplichtingen
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </main>

            <Footer />
        </div>
    );
}
