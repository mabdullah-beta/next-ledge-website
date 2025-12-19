"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import { FadeUp } from "../../components/MotionWrapper";
import Link from "next/link";
import { Users, RefreshCw, CalendarClock, ArrowRight } from "lucide-react";
import FAQSection from "@/app/components/FAQ";

export default function OngoingAdministrativeSupportPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            {/* Hero Section */}
            <section className="relative py-28 overflow-hidden bg-primary">
                <div className="max-w-5xl mx-auto px-6 text-center relative">
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-hedvig font-semibold text-gray-100">
                            Doorlopende administratieve ondersteuning
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Consistente opvolging en communicatie gedurende het hele jaar, zodat je administratie
                            georganiseerd en up-to-date blijft.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-6 mt-10 mb-24">
                <FadeUp>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 font-hedvig">
                                Wat we hebben gerealiseerd
                            </h2>

                            <p className="mt-6 text-gray-600 leading-relaxed">
                                Doorlopende administratieve ondersteuning met een vaste contactpersoon,
                                regelmatige evaluaties en proactief onderhoud van je financiële systemen.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                Administratieve kwaliteit vraagt om voortdurende aandacht en onderhoud. Onze
                                doorlopende administratieve ondersteuning zorgt ervoor dat je financiële systemen,
                                processen en documentatie het hele jaar door actueel, compliant en geoptimaliseerd
                                blijven — niet alleen tijdens het belastingseizoen of bij jaarlijkse evaluaties.

                                We wijzen een vaste accountmanager toe die jouw bedrijfsvoering door en door leert
                                kennen en fungeert als jouw primaire aanspreekpunt. Deze continuïteit zorgt ervoor
                                dat we jouw veranderende behoeften begrijpen en je in de loop van de tijd steeds
                                waardevollere ondersteuning kunnen bieden.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-2xl rounded-full"></div>

                            <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop&auto=format"
                                width={500}
                                height={400}
                                className="rounded-xl shadow-xl object-cover"
                                alt="feature visual"
                            />
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
