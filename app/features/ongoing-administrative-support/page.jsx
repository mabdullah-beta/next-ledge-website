"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Users, RefreshCw, CalendarClock, ArrowRight, Headphones, Shield, CheckCircle, Clock, UserCheck } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function OngoingAdministrativeSupportPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section - Enhanced */}
            <section className="relative py-32 overflow-hidden bg-linear-to-br from-primary to-primary-light">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <FadeUp>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Headphones className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Doorlopende Zorg</span>
                        </div>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[49px] font-hedvig font-normal text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4 sm:mb-5 md:mb-6">
                            Doorlopende administratieve ondersteuning
                        </h1>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-inter font-normal text-white/80 leading-relaxed mt-6 max-w-3xl mx-auto">
                            Consistente opvolging en communicatie gedurende het hele jaar, zodat je administratie
                            georganiseerd en up-to-date blijft.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                            <Link
                                href="/#contact"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 shadow-lg"
                            >
                                <span>Start samenwerking</span>
                                <ArrowRight size={20} />
                            </Link>
                            <div className="flex items-center gap-2 text-white/80">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm">Vaste accountmanager</span>
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
                                <div className="text-4xl font-bold text-primary mb-2">1-2h</div>
                                <div className="text-gray-600">Responstijd</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">365</div>
                                <div className="text-gray-600">Dagen per jaar</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                <div className="text-gray-600">Vaste contactpersoon</div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Service Features */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-hedvig font-bold text-gray-900 mb-4">
                                Wat omvat onze doorlopende ondersteuning?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Complete administratieve zorg het hele jaar door
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <UserCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Vaste Accountmanager</h3>
                                <p className="text-gray-600 text-sm">Een toegewezen expert die jouw bedrijf door en door kent</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <RefreshCw className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proactieve Monitoring</h3>
                                <p className="text-gray-600 text-sm">Continue bewaking van je financiële systemen en processen</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <CalendarClock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regelmatige Evaluaties</h3>
                                <p className="text-gray-600 text-sm">Kwartaalse reviews en optimalisatie van je administratie</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Snelle Responstijd</h3>
                                <p className="text-gray-600 text-sm">Reactie binnen 1-2 uur tijdens kantooruren</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Bewaking</h3>
                                <p className="text-gray-600 text-sm">Automatische controle op wet- en regelgeving</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Training</h3>
                                <p className="text-gray-600 text-sm">Doorlopende scholing van jouw administratieve team</p>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Dedicated Support</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-hedvig mb-6">
                                Jouw administratie in vertrouwde handen
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Doorlopende administratieve ondersteuning met een vaste contactpersoon,
                                regelmatige evaluaties en proactief onderhoud van je financiële systemen.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Persoonlijke accountmanager</h4>
                                        <p className="text-gray-600 text-sm">Een vaste expert die jouw bedrijf door en door kent</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Proactieve systeembewaking</h4>
                                        <p className="text-gray-600 text-sm">Continue monitoring en optimalisatie van je processen</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Seizoensgebonden schaalbaarheid</h4>
                                        <p className="text-gray-600 text-sm">Extra capaciteit tijdens drukke periodes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/50 blur-3xl rounded-full"></div>

                            <div className="relative bg-linear-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&auto=format"
                                    width={500}
                                    height={400}
                                    className="rounded-xl shadow-lg object-cover w-full"
                                    alt="Ongoing administrative support team"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700">Team beschikbaar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* Highlights */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <FadeUp>
                    <h2 className="font-hedvig max-w-2xl text-[26px] sm:text-[32px] md:text-[38px] lg:text-heading-lg text-gray-900 leading-tight mx-auto px-4 text-center mb-8">
                        Belangrijkste voordelen
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Vast accountmanagement
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Proactieve systeemmonitoring
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="text-center px-2 w-full max-w-sm">
                                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl mb-4 sm:mb-5">
                                    <CalendarClock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-900">
                                    Regelmatige prestatie-evaluaties
                                </h3>
                            </div>
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
                            question: "Wat houdt ‘doorlopende ondersteuning’ precies in?",
                            answer:
                                "Onze doorlopende ondersteuning omvat regelmatige check-ins, systeemmonitoring, proactief onderhoud, continue procesverbetering en beschikbaarheid om vragen of problemen op te lossen wanneer ze zich voordoen. Het is een complete ondersteuning die meegroeit met jouw organisatie.",
                        },
                        {
                            id: 2,
                            question: "Hoe snel kan ik hulp krijgen wanneer ik die nodig heb?",
                            answer:
                                "Met onze doorlopende ondersteuning heb je direct contact met je vaste accountmanager, die doorgaans binnen 1 tot 2 uur reageert tijdens kantooruren. Voor urgente situaties bieden we prioriteitsondersteuning met snelle responstijden.",
                        },
                        {
                            id: 3,
                            question: "Kunnen jullie omgaan met seizoensgebonden schommelingen in administratieve werkdruk?",
                            answer:
                                "Zeker. We schalen onze ondersteuning mee met jouw bedrijfscycli, met extra capaciteit tijdens drukke periodes zoals het belastingseizoen, jaarafsluitingen of groeifases, en efficiënte ondersteuning tijdens rustigere momenten.",
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
                            Klaar om doorlopende administratieve ondersteuning in te zetten voor jouw organisatie?
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
