"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, Star, TimerIcon, ShieldCheck, CheckCircle2, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";

export default function BudgetingForecastingPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            <main className="flex-1">
                {/* Hero Section - Enhanced */}
                <section className="relative py-32 overflow-hidden bg-linear-to-br from-primary to-primary-light">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                        <FadeUp>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <TrendingUp className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">Financiële Planning</span>
                            </div>
                            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                                Budgettering & Prognoses
                            </h1>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                                Plan vandaag met morgen in gedachten. Realistische budgetten, financiële prognoses 
                                en groeiscenario's voor optimale voorbereiding.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                                <Link
                                    href="/#contact"
                                    className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                                >
                                    <span>Plan budget</span>
                                    <ArrowRight size={20} />
                                </Link>
                                <div className="flex items-center gap-2 text-white/80">
                                    <CheckCircle size={16} />
                                    <span className="text-sm">Realistische prognoses</span>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent"></div>
                </section>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Image + FAQ */}
                    <FadeUp>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-br from-blue-100/30 to-gray-100/30 rounded-3xl blur-xl"></div>

                                <Image
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                                    alt="Budgettering & Prognoses"
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
                                            <div className="text-sm font-medium text-gray-900">Vooruit plannen</div>
                                            <div className="text-xs text-gray-500">Voorbereid op de toekomst</div>
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
                                        question:
                                            "Hoe stellen jullie een realistisch budget op voor een bedrijf met schommelende inkomsten?",
                                        answer:
                                            "We analyseren historische data, seizoenspatronen en marktomstandigheden om flexibele budgetten op te stellen. Met behulp van rolling forecasts en scenarioplanning passen we prognoses regelmatig aan op basis van de werkelijke prestaties, zodat je budget relevant en toepasbaar blijft, zelfs bij wisselende inkomsten.",
                                    },
                                    {
                                        id: 2,
                                        question: "Welke scenario’s modelleren jullie doorgaans in financiële prognoses?",
                                        answer:
                                            "We modelleren best-case-, worst-case- en meest waarschijnlijke scenario’s op basis van factoren zoals marktuitbreiding, kostenveranderingen, nieuwe investeringen of economische ontwikkelingen. Dit helpt je om je voor te bereiden op verschillende uitkomsten, risico’s te beheersen en groeikansen te identificeren onder uiteenlopende omstandigheden.",
                                    },
                                    {
                                        id: 3,
                                        question: "Hoe kan forecasting helpen bij langetermijnplanning?",
                                        answer:
                                            "Forecasting geeft een toekomstgericht inzicht in je kasstromen, winstgevendheid en financieringsbehoeften. Het helpt je bij het plannen van grote investeringen, het beoordelen van financieringsopties, het stellen van haalbare groeidoelen en het zekerstellen van voldoende middelen om kansen te benutten en uitdagingen het hoofd te bieden.",
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
                                    Wij begeleiden je bij de voorbereiding op de toekomst door budgetten en financiële
                                    plannen te creëren die zowel realistisch als flexibel zijn. Door je huidige
                                    financiële situatie zorgvuldig te analyseren, helpen we je inkomsten, uitgaven en
                                    kasstromen te prognosticeren op een manier die aansluit bij je bedrijfsdoelen. Met
                                    gedetailleerde prognoses en praktische strategieën krijg je helder inzicht in hoe
                                    de keuzes die je vandaag maakt, je bedrijf morgen beïnvloeden. Uiteindelijk is ons
                                    doel om je te voorzien van een financieel kompas dat onzekerheid vermindert,
                                    vertrouwen vergroot en je bedrijf in staat stelt om in elk toekomstscenario te
                                    floreren.
                                </p>

                                <h3 className="text-2xl font-bold text-center mb-10">
                                    Belangrijkste voordelen
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        {
                                            title: "Tijdbesparing",
                                            desc: "Snellere planning dankzij duidelijke prognoses",
                                            icon: TimerIcon,
                                        },
                                        {
                                            title: "Vertrouwen",
                                            desc: "Beslissingen nemen met een financieel stappenplan",
                                            icon: CheckCircle2,
                                        },
                                        {
                                            title: "Strategisch inzicht",
                                            desc: "Scenario’s en groeimogelijkheden verkennen",
                                            icon: Star,
                                        },
                                        {
                                            title: "Risicobeheersing",
                                            desc: "Voorbereid zijn op veranderingen en onzekerheden",
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
                                Klaar om met vertrouwen te plannen?
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
