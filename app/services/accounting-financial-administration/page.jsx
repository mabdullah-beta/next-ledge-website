"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import { ArrowRight, ChevronRight, Star, TimerIcon, ShieldCheck, CheckCircle2, Calculator, FileText, TrendingUp, Users, Database, Zap, DollarSign, BarChart3, Settings, FileSpreadsheet, Building2, Wrench, CheckCircle } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/app/components/FAQ";

export default function AccountingFinancialAdministrationPage() {
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
                                <Calculator className="w-4 h-4 text-white" />
                                <span className="text-sm font-medium text-white">Professionele Boekhouding</span>
                            </div>
                            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                                Boekhouding & Financiële Administratie
                            </h1>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                                Professionele boekhouding met strategische meerwaarde. Complete financiële administratie, 
                                VAT compliance en business intelligence voor optimale bedrijfsvoering.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                                <Link
                                    href="/#contact"
                                    className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                                >
                                    <span>Start vandaag</span>
                                    <ArrowRight size={20} />
                                </Link>
                                <div className="flex items-center gap-2 text-white/80">
                                    <CheckCircle size={16} />
                                    <span className="text-sm">Vertrouwd door 500+ bedrijven</span>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="absolute -bottom-1 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent"></div>
                </section>

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

                    {/* Accounting Software & Tools Section */}
                    <div className="bg-gray-50 -mx-4 px-4 py-16 mb-20">
                        <div className="max-w-6xl mx-auto">
                            <FadeUp>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                                        <Calculator className="w-4 h-4 mr-2" />
                                        Software & Integraties
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-hedvig">
                                        Professionele Accounting Software
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        We werken met toonaangevende accounting platforms voor optimale efficiency en accuracy
                                    </p>
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.1}>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-12">
                                    {[
                                        { name: "QuickBooks", icon: DollarSign, color: "text-green-600" },
                                        { name: "Xero", icon: BarChart3, color: "text-blue-600" },
                                        { name: "SAP", icon: Building2, color: "text-blue-700" },
                                        { name: "Sage", icon: Settings, color: "text-green-700" },
                                        { name: "Excel", icon: FileSpreadsheet, color: "text-green-600" },
                                        { name: "Exact", icon: Calculator, color: "text-blue-600" }
                                    ].map((software, index) => {
                                        const Icon = software.icon;
                                        return (
                                            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                                                <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-2 hover:bg-gray-200 transition-colors duration-300`}>
                                                    <Icon className={`w-6 h-6 ${software.color} hover:scale-110 transition-transform duration-300`} />
                                                </div>
                                                <span className="text-xs font-medium text-gray-700">{software.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </FadeUp>

                            <FadeUp delay={0.2}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            title: "Cloud Accounting",
                                            description: "Real-time toegang tot uw financiële data via moderne cloud platforms",
                                            icon: Database,
                                            features: ["24/7 Toegankelijkheid", "Automatische Backups", "Multi-user Access"]
                                        },
                                        {
                                            title: "Automated Processing",
                                            description: "Geautomatiseerde factuurverwerking en bankreconciliatie voor efficiency",
                                            icon: Zap,
                                            features: ["OCR Scanning", "Auto-categorisatie", "Smart Matching"]
                                        },
                                        {
                                            title: "Integration Services",
                                            description: "Naadloze koppeling met uw bestaande business systemen",
                                            icon: TrendingUp,
                                            features: ["API Koppelingen", "Data Synchronisatie", "Custom Workflows"]
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

                    {/* Compliance & Services Section */}
                    <FadeUp delay={0.3}>
                        <div className="mb-20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-hedvig">
                                    Compliance & Specialized Services
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    Complete naleving van Nederlandse wet- en regelgeving met gespecialiseerde dienstverlening
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Compliance Services</h3>
                                    {[
                                        {
                                            title: "VAT & Tax Compliance",
                                            description: "Complete BTW-aangiften, voorlopige aanslagen en jaarlijkse belastingaangiften",
                                            tools: ["BTW-software", "Belastingdienst API", "Compliance Monitoring"]
                                        },
                                        {
                                            title: "Annual Financial Statements",
                                            description: "Professionele jaarrekeningen volgens Nederlandse accounting standards",
                                            tools: ["RJ Richtlijnen", "XBRL Taxonomie", "Audit Trail"]
                                        },
                                        {
                                            title: "Payroll Administration",
                                            description: "Complete salarisadministratie met UWV en belastingdienst rapportage",
                                            tools: ["Loonheffingen", "Pensioenfonds", "Verzekeringen"]
                                        }
                                    ].map((service, index) => (
                                        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                                            <p className="text-gray-600 mb-4">{service.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.tools.map((tool, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Value-Added Services</h3>
                                    <div className="bg-primary rounded-2xl p-8 text-white">
                                        <div className="flex items-center mb-4">
                                            <FileText className="w-8 h-8 mr-3" />
                                            <h4 className="text-xl font-bold">Financial Health Analysis</h4>
                                        </div>
                                        <p className="text-white/90 mb-6">
                                            Maandelijkse financiële health checks met KPI analysis, 
                                            cash flow forecasting en performance benchmarking.
                                        </p>
                                        <ul className="space-y-2 text-white/90">
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Liquidity & Solvency Analysis
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Profitability & Efficiency Metrics
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Industry Benchmarking
                                            </li>
                                            <li className="flex items-center">
                                                <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                                                Strategic Recommendations
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">Specialized Expertise</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { name: "E-commerce", icon: Users },
                                                { name: "SaaS/Tech", icon: Database },
                                                { name: "Manufacturing", icon: Zap },
                                                { name: "Professional Services", icon: Star },
                                                { name: "Real Estate", icon: TrendingUp },
                                                { name: "Non-Profit", icon: ShieldCheck }
                                            ].map((specialty, index) => {
                                                const Icon = specialty.icon;
                                                return (
                                                    <div key={index} className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                            <Icon className="w-4 h-4 text-primary" />
                                                        </div>
                                                        <span className="text-gray-700 font-medium text-sm">{specialty.name}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
