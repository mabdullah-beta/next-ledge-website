'use client';

import { Check, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer"

const pricingPlans = [
    {
        id: 'standard',
        name: 'Standaard',
        description: 'Ideaal voor kleine teams die hun adviesprocessen willen stroomlijnen',
        price: '€99',
        period: '/Maand',
        buttonText: 'Consult aanvragen',
        buttonStyle: 'border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
        bgColor: 'bg-cream',
        features: [
            'Persoonlijke strategische sessies',
            'Essentiële bedrijfsanalyses',
            'Basis rapportagetools',
            'Tot 5 teamleden',
            'Toegewijde e-mailondersteuning',
            'Aanpasbare workflow-inzichten'
        ]
    },
    {
        id: 'premium',
        name: 'Premium',
        description: 'Ontworpen voor groeiende adviesbureaus die diepgaand inzicht en ondersteuning nodig hebben.',
        price: '€299',
        period: '/Maand',
        buttonText: 'Aan de slag',
        buttonStyle: 'bg-primary text-white hover:bg-secondary-dark',
        bgColorHeader: 'bg-mint-light',
        bgColorFeatures: '#ffffff',
        isPopular: true,
        features: [
            'Onbeperkte strategische consultaties',
            'Geavanceerde bedrijfsanalyses',
            'Tot 10 teamleden',
            'Uitgebreide rapportagesuite',
            'Tot 10 teamleden',
            'Prioritaire e-mail- en chatondersteuning'
        ]
    }
];

export default function PricingPlans() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <div>
            <Header />
            <section ref={sectionRef} className="w-full bg-blue-50/30 py-30 px-4" id="pricing">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="font-hedvig text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="dot-indicator bg-primary rounded-full"></div>
                            <span className="text-base font-medium text-primary">Prijzen</span>
                        </div>
                        <h2 className="font-hedvig text-heading-lg text-gray-900 mx-auto max-w-2xl">
                            Flexibele prijzen afgestemd op jouw bedrijfsbehoeften
                        </h2>
                    </div>

                    {/* Pricing Cards */}
                    <div className="font-inter grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[850px] mx-auto">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.15
                                }}
                            >
                                {/* Card */}
                                <div
                                    className={`rounded-3xl overflow-hidden shadow-lg border border-gray-200 ${plan.id === 'premium'
                                        ? 'bg-gradient-to-b from-primary/10 to-white'
                                        : plan.bgColor
                                        }`}
                                >
                                    {/* Header Section */}
                                    <div className="p-8 pb-6">
                                        {/* Title and Popular Badge */}
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="md:text-[28px] text-[24px] font-semibold text-gray-900">
                                                {plan.name}
                                            </h3>
                                            {plan.isPopular && (
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                                                    <Sparkles className="w-3 h-3" />
                                                    Populair
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 text-lg mb-4 leading-relaxed antialiased">
                                            {plan.description}
                                        </p>

                                        {/* Price */}
                                        <div className="flex items-baseline mb-4">
                                            <span className="font-hedvig text-[35px] md:text-[45px] font-bold text-gray-900">
                                                {plan.price}
                                            </span>
                                            <span className="text-xl text-gray-600 ml-2">
                                                {plan.period}
                                            </span>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            className={`w-full py-2.5 px-4 rounded-full text-base font-semibold transition-all duration-200 ${plan.buttonStyle}`}
                                        >
                                            {plan.buttonText}
                                        </button>
                                    </div>

                                    {/* Features Section */}
                                    <div className="p-8 pt-6">
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                                    <span className="text-gray-700 text-base antialiased">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}