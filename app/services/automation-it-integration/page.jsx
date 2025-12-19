"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, Star, TimerIcon, ShieldCheck, CheckCircle2, BarChart3, TrendingUp, Database, Zap, Users, Target, Award, Lightbulb, FileSpreadsheet, PieChart, Activity, Building2, Settings, LineChart } from "lucide-react";
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
                                    Transformeer uw bedrijf met geavanceerde automatisering, business intelligence en analytics. 
                                    We implementeren Power BI dashboards, predictive analytics en AI-gedreven oplossingen die 
                                    uw financiële processen optimaliseren. Van real-time KPI monitoring tot machine learning 
                                    modellen - wij maken uw organisatie volledig datagedreven en toekomstbestendig.
                                </p>
                            </div>
                        </FadeUp>
                    </div>
                </div>

                {/* Business Analytics Services Section */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <FadeUp>
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                                    <BarChart3 className="w-4 h-4 mr-2" />
                                    Business Analytics & BI
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-hedvig">
                                    Krachtige Analytics & Business Intelligence
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
                                    Transformeer uw data in bruikbare inzichten met onze geavanceerde analytics-oplossingen. 
                                    Van Power BI dashboards tot predictive analytics - wij helpen u datagedreven beslissingen te nemen.
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {[
                                    {
                                        title: "Power BI Implementatie",
                                        description: "Complete Power BI setup, dashboard ontwikkeling en gebruikerstraining voor realtime business insights",
                                        icon: BarChart3,
                                        features: ["Custom Dashboards", "Data Modeling", "Automated Reports", "Mobile Access"]
                                    },
                                    {
                                        title: "Advanced Analytics",
                                        description: "Predictive analytics, machine learning modellen en AI-gedreven inzichten voor strategische planning",
                                        icon: TrendingUp,
                                        features: ["Predictive Models", "Trend Analysis", "Forecasting", "AI Insights"]
                                    },
                                    {
                                        title: "Data Integration",
                                        description: "Naadloze integratie van verschillende databronnen voor een 360° view van uw bedrijfsvoering",
                                        icon: Database,
                                        features: ["Multi-source Integration", "Real-time Sync", "Data Cleansing", "ETL Processes"]
                                    }
                                ].map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                                                <Icon className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
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

                {/* Technology Partners Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <FadeUp>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-hedvig">
                                    Onze Technology Partners
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    We werken met toonaangevende platforms om u de beste analytics en BI-oplossingen te bieden
                                </p>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                                {[
                                    { name: "Microsoft Power BI", icon: BarChart3, color: "text-yellow-600" },
                                    { name: "Tableau", icon: PieChart, color: "text-blue-600" },
                                    { name: "Microsoft Excel", icon: FileSpreadsheet, color: "text-green-600" },
                                    { name: "Google Analytics", icon: Activity, color: "text-orange-600" },
                                    { name: "Salesforce", icon: LineChart, color: "text-blue-700" },
                                    { name: "SAP", icon: Building2, color: "text-blue-800" }
                                ].map((partner, index) => {
                                    const Icon = partner.icon;
                                    return (
                                        <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                                            <div className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-2 shadow-sm hover:shadow-md transition-all duration-300`}>
                                                <Icon className={`w-7 h-7 ${partner.color} hover:scale-110 transition-transform duration-300`} />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700 text-center">{partner.name}</span>
                                        </div>
                                    );
                                })}
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
                                        question: "Welke Power BI en analytics oplossingen implementeren jullie?",
                                        answer:
                                            "We implementeren complete Power BI ecosystemen inclusief real-time dashboards, KPI monitoring, predictive analytics en custom DAX formules. Daarnaast integreren we Tableau, Excel Power Query, Google Analytics en andere BI-tools voor een 360° view van uw bedrijfsdata. Onze oplossingen omvatten ook machine learning modellen voor forecasting en trend analysis.",
                                    },
                                    {
                                        id: 2,
                                        question: "Hoe bepalen jullie welke analytics strategie geschikt is voor mijn bedrijf?",
                                        answer:
                                            "We starten met een data maturity assessment van uw huidige databronnen, KPI's en rapportagebehoeften. Op basis van deze analyse ontwikkelen we een op maat gemaakte analytics roadmap met Power BI implementatie, data modeling, ETL processen en gebruikerstraining. We adviseren ook over data governance, security en mobile analytics toegang.",
                                    },
                                    {
                                        id: 3,
                                        question:
                                            "Welke ondersteuning bieden jullie na implementatie van analytics oplossingen?",
                                        answer:
                                            "Na implementatie bieden we 24/7 technische support, maandelijkse dashboard optimalisatie, nieuwe feature rollouts en gebruikerstraining. We monitoren ook de performance van uw analytics omgeving en bieden proactieve updates voor nieuwe Power BI features, security patches en data source integraties om uw BI-investering te maximaliseren.",
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
                                    Met onze geavanceerde business intelligence en analytics oplossingen transformeren we 
                                    uw data in strategische inzichten. We implementeren Power BI dashboards, predictive 
                                    analytics modellen en real-time KPI monitoring systemen die uw besluitvorming 
                                    revolutioneren. Door machine learning algoritmes, automated reporting en advanced 
                                    data visualization technieken verkrijgt uw organisatie niet alleen complete 
                                    transparantie in financiële performance, maar ook voorspellende inzichten voor 
                                    toekomstige trends, risico's en kansen - waardoor u altijd een stap vooruit bent.
                                </p>

                                <h3 className="text-2xl font-bold text-center mb-10">
                                    Belangrijkste voordelen
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        {
                                            title: "Real-time Insights",
                                            desc: "Live dashboards en automated KPI monitoring",
                                            icon: TimerIcon,
                                        },
                                        {
                                            title: "Data-driven Decisions",
                                            desc: "Predictive analytics en machine learning inzichten",
                                            icon: CheckCircle2,
                                        },
                                        {
                                            title: "Scalable BI Platform",
                                            desc: "Power BI ecosysteem dat meegroeit met uw organisatie",
                                            icon: Star,
                                        },
                                        {
                                            title: "Advanced Analytics",
                                            desc: "AI-gedreven forecasting en trend analysis",
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

                    {/* Analytics Implementation Process */}
                    <FadeUp delay={0.3}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-hedvig">
                                    Onze Analytics Implementatie Aanpak
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    Een gestructureerde aanpak voor het implementeren van business intelligence en analytics oplossingen
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Data Assessment",
                                        description: "Analyse van bestaande databronnen, kwaliteit en integratiemogelijkheden",
                                        icon: Database
                                    },
                                    {
                                        step: "02", 
                                        title: "Strategy Design",
                                        description: "Ontwikkeling van een op maat gemaakte analytics strategie en roadmap",
                                        icon: Target
                                    },
                                    {
                                        step: "03",
                                        title: "Implementation",
                                        description: "Technische implementatie van dashboards, reports en analytics tools",
                                        icon: Zap
                                    },
                                    {
                                        step: "04",
                                        title: "Training & Support",
                                        description: "Gebruikerstraining en doorlopende ondersteuning voor optimaal gebruik",
                                        icon: Users
                                    }
                                ].map((process, index) => {
                                    const Icon = process.icon;
                                    return (
                                        <div key={index} className="relative">
                                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-2xl font-bold text-primary/20">{process.step}</span>
                                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                                        <Icon className="w-6 h-6 text-primary" />
                                                    </div>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                                            </div>
                                            {index < 3 && (
                                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-linear-to-r from-primary/30 to-transparent transform -translate-y-1/2"></div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </FadeUp>

                    {/* Success Metrics & Results */}
                    <FadeUp delay={0.4}>
                        <div className="mb-20">
                            <div className="bg-linear-to-br from-primary/5 to-blue-50 rounded-3xl p-12">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 text-sm font-medium text-primary mb-4">
                                        <Award className="w-4 h-4 mr-2" />
                                        Bewezen Resultaten
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-hedvig">
                                        Meetbare Impact voor Onze Klanten
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        Onze analytics oplossingen leveren concrete resultaten die direct bijdragen aan bedrijfsgroei
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {[
                                        {
                                            metric: "85%",
                                            label: "Tijdbesparing",
                                            description: "Gemiddelde reductie in rapportagetijd",
                                            icon: TimerIcon
                                        },
                                        {
                                            metric: "60%",
                                            label: "Betere Besluitvorming",
                                            description: "Snellere en meer accurate business decisions",
                                            icon: Lightbulb
                                        },
                                        {
                                            metric: "40%",
                                            label: "Cost Reduction",
                                            description: "Gemiddelde kostenbesparing door automatisering",
                                            icon: TrendingUp
                                        },
                                        {
                                            metric: "95%",
                                            label: "Client Satisfaction",
                                            description: "Tevredenheidscore van onze analytics klanten",
                                            icon: Star
                                        }
                                    ].map((stat, index) => {
                                        const Icon = stat.icon;
                                        return (
                                            <div key={index} className="text-center">
                                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4">
                                                    <Icon className="w-8 h-8 text-primary" />
                                                </div>
                                                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                                                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                                                <div className="text-sm text-gray-600">{stat.description}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Analytics Capabilities Showcase */}
                    <FadeUp delay={0.5}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-hedvig">
                                    Uitgebreide Analytics Capabilities
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    Van basale rapportage tot geavanceerde AI-gedreven analytics - wij bieden het volledige spectrum
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Analytics Services</h3>
                                    {[
                                        {
                                            title: "Financial Reporting & KPI Dashboards",
                                            description: "Real-time financiële dashboards met key performance indicators",
                                            tools: ["Power BI", "Excel", "Tableau"]
                                        },
                                        {
                                            title: "Predictive Analytics & Forecasting", 
                                            description: "Machine learning modellen voor trendanalyse en voorspellingen",
                                            tools: ["Python", "R", "Azure ML"]
                                        },
                                        {
                                            title: "Customer Analytics & Segmentation",
                                            description: "Klantgedrag analyse en segmentatie voor targeted marketing",
                                            tools: ["Google Analytics", "Salesforce", "Power BI"]
                                        },
                                        {
                                            title: "Operational Analytics & Process Mining",
                                            description: "Optimalisatie van bedrijfsprocessen door data-gedreven inzichten",
                                            tools: ["Process Mining Tools", "Custom Dashboards"]
                                        }
                                    ].map((capability, index) => (
                                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h4>
                                            <p className="text-gray-600 mb-4">{capability.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {capability.tools.map((tool, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Integrations</h3>
                                    <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8">
                                        <div className="grid grid-cols-2 gap-6">
                                            {[
                                                { name: "ERP Systems", icon: Database },
                                                { name: "CRM Platforms", icon: Users },
                                                { name: "Cloud Services", icon: Zap },
                                                { name: "APIs & Webhooks", icon: Target },
                                                { name: "Data Warehouses", icon: Database },
                                                { name: "Real-time Streams", icon: TrendingUp }
                                            ].map((integration, index) => {
                                                const Icon = integration.icon;
                                                return (
                                                    <div key={index} className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                            <Icon className="w-5 h-5 text-primary" />
                                                        </div>
                                                        <span className="text-gray-700 font-medium">{integration.name}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="bg-primary rounded-2xl p-8 text-white">
                                        <h4 className="text-xl font-bold mb-4">Power BI Specialization</h4>
                                        <p className="text-white/90 mb-6">
                                            Als Microsoft Power BI specialists bieden wij end-to-end implementaties, 
                                            van data modeling tot advanced DAX formules en custom visuals.
                                        </p>
                                        <ul className="space-y-2 text-white/90">
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Power BI Pro & Premium implementatie
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Custom DAX formules & measures
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Row-level security & governance
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Mobile-first dashboard design
                                            </li>
                                        </ul>
                                    </div>
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
