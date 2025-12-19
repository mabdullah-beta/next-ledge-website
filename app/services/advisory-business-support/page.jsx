"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, Star, TimerIcon, ShieldCheck, CheckCircle2, Target, TrendingUp, Users, Lightbulb, BarChart3, Briefcase, Award, Zap } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";

export default function AdvisoryBusinessSupportPage() {
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
                                    Advies & Bedrijfsondersteuning
                                </h1>

                                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-inter leading-relaxed">
                                    Strategische business consulting voor duurzame groei. Wij bieden executive advisory, 
                                    financial planning, market analysis en operational excellence consulting. Van startup 
                                    tot scale-up - onze data-driven approach en proven methodologies helpen u strategische 
                                    beslissingen te nemen, risico's te mitigeren en sustainable competitive advantage 
                                    te creëren voor long-term business success.
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
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                                    alt="Advies & Bedrijfsondersteuning"
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
                                            <div className="text-sm font-medium text-gray-900">Vertrouwde adviseur</div>
                                            <div className="text-xs text-gray-500">Ondersteuning in elke fase</div>
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
                                        question: "Wat houdt jullie doorlopende adviesondersteuning in?",
                                        answer:
                                            "Onze ondersteuning omvat regelmatige strategiesessies, prestatie-evaluaties en operationele analyses. We helpen je financiële resultaten te interpreteren, uitdagingen zoals kasstroombeperkingen of prijsstrategieën aan te pakken en actieplannen te ontwikkelen voor korte- en langetermijndoelen.",
                                    },
                                    {
                                        id: 2,
                                        question: "Hoe helpen jullie bij het identificeren van nieuwe groeikansen?",
                                        answer:
                                            "We analyseren je financiële data, marktpositie en operationele efficiëntie om onbenut potentieel te ontdekken — zoals nieuwe inkomstenstromen, kostenbesparingen of procesverbeteringen. Vervolgens werken we samen om deze kansen te evalueren en te prioriteren op basis van je doelen en middelen.",
                                    },
                                    {
                                        id: 3,
                                        question:
                                            "Op welke manier treden jullie op als strategische partner in plaats van alleen dienstverlener?",
                                        answer:
                                            "We worden een verlengstuk van je team en investeren tijd om je visie en uitdagingen te begrijpen. We doen proactieve aanbevelingen, stellen aannames ter discussie op basis van data en ondersteunen belangrijke beslissingen — van uitbreiding en aanwerving tot financiering en exitplanning — zodat elke stap is gebaseerd op financiële helderheid en strategisch inzicht.",
                                    },
                                ]}
                            />
                        </div>
                    </FadeUp>

                    {/* Strategic Consulting Services Section */}
                    <div className="bg-gray-50 -mx-4 px-4 py-16 mb-20">
                        <div className="max-w-6xl mx-auto">
                            <FadeUp>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        Strategic Consulting
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-hedvig">
                                        Executive Advisory Services
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        Comprehensive business consulting voor C-level executives en ondernemers
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.1}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {[
                                        {
                                            title: "Strategic Planning",
                                            description: "Long-term business strategy development, market positioning en competitive analysis",
                                            icon: Target,
                                            features: ["SWOT Analysis", "Market Research", "Strategic Roadmaps", "KPI Framework"]
                                        },
                                        {
                                            title: "Financial Advisory",
                                            description: "CFO-level financial guidance, investment planning en capital structure optimization",
                                            icon: TrendingUp,
                                            features: ["Financial Modeling", "Investment Analysis", "Risk Assessment", "Valuation Services"]
                                        },
                                        {
                                            title: "Operational Excellence",
                                            description: "Process optimization, organizational development en performance management",
                                            icon: Zap,
                                            features: ["Process Mapping", "Efficiency Analysis", "Change Management", "Performance Metrics"]
                                        }
                                    ].map((service, index) => {
                                        const Icon = service.icon;
                                        return (
                                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                                <p className="text-gray-600 mb-4">{service.description}</p>
                                                <ul className="space-y-2">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                            </FadeUp>
                        </div>
                    </div>

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
                                    We staan aan je zijde in elke fase van je ondernemersreis en bieden begeleiding en
                                    ondersteuning terwijl je groeit en verandert. Door je prestatiegegevens zorgvuldig
                                    te analyseren, helpen we je sterke punten te herkennen, zwakke plekken bloot te
                                    leggen en kansen te zien die anders misschien onopgemerkt blijven. Ons team werkt
                                    samen met jou om uitdagingen aan te pakken, oplossingen te bedenken en strategieën
                                    te ontwikkelen die aansluiten bij jouw doelen en visie. In plaats van te vertrouwen
                                    op aannames, baseren we elke aanbeveling op solide data en grondige analyse, zodat
                                    je met vertrouwen weloverwogen beslissingen kunt nemen. Met onze samenwerking krijg
                                    je niet alleen een dienstverlener, maar een betrouwbare adviseur die betrokken is
                                    bij jouw groei en zich inzet voor het succes van je bedrijf.
                                </p>

                                <h3 className="text-2xl font-bold text-center mb-10">
                                    Belangrijkste voordelen
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        {
                                            title: "Tijdbesparing",
                                            desc: "Snellere beslissingen dankzij deskundige begeleiding",
                                            icon: TimerIcon,
                                        },
                                        {
                                            title: "Helderheid",
                                            desc: "Duidelijk inzicht in resultaten en vervolgstappen",
                                            icon: CheckCircle2,
                                        },
                                        {
                                            title: "Strategisch inzicht",
                                            desc: "Kansen identificeren op basis van data",
                                            icon: Star,
                                        },
                                        {
                                            title: "Vertrouwen",
                                            desc: "Vooruitgaan zonder giswerk",
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
                                Klaar voor strategische ondersteuning?
                            </h2>
                            <p className="mb-8 text-white/90">
                                Sluit je aan bij honderden tevreden klanten die ons vertrouwen met hun financiële succes
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
