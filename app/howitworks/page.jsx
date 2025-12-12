import Header from "../components/Header";
import Footer from "../components/Footer";
import workSteps from "../../data/work.json";
import Image from "next/image";
import { FadeUp } from "../components/MotionWrapper";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WorkPage() {
    return (
        <div className="min-h-screen flex flex-col mt-20">
            <Header />

            <main className="flex-1 py-16">
                <div className="max-w-4xl mx-auto px-4">

                    {/* Page Header */}
                    <FadeUp>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold font-hedvig text-heading mb-4">
                                Our Process
                            </h1>
                            <p className="text-body text-lg max-w-2xl mx-auto">
                                A clear, step-by-step approach to delivering exceptional results for your business.
                            </p>
                        </div>
                    </FadeUp>

                    {/* Process Steps */}
                    <div className="space-y-20">
                        {workSteps.map((step, index) => (
                            <FadeUp key={step.id} delay={index * 0.1}>
                                <div className="text-center">

                                    {/* Step Number */}
                                    <div className="mb-8">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                                            {step.id}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-heading font-hedvig mb-4">
                                            {step.title}
                                        </h3>

                                        {step.subtitle && (
                                            <p className="text-md font-medium mb-6">
                                                {step.subtitle}
                                            </p>
                                        )}

                                        <div className="max-w-2xl mx-auto">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                width={800}
                                                height={500}
                                                className="w-full h-auto rounded-xl shadow-lg mb-6"
                                            />
                                        </div>

                                        <p className="text-body text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    {step.benefits && step.benefits.length > 0 && (
                                        <div className="max-w-2xl mx-auto">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {step.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-start p-4 bg-gray-50 rounded-lg">
                                                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                                        <span className="text-body text-left">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                    {/* Process Overview */}
                    <FadeUp delay={0.3}>
                        <div className="mt-20">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl font-bold text-heading mb-3 font-hedvig">The Complete Journey</h2>
                                <p className="text-body max-w-2xl mx-auto text-md">
                                    From discovery to delivery, every step is designed for your success.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {[
                                    { number: "01", title: "Discovery", desc: "We listen and understand your needs" },
                                    { number: "02", title: "Strategy", desc: "We plan the perfect solution" },
                                    { number: "03", title: "Execution", desc: "We implement with precision" },
                                    { number: "04", title: "Support", desc: "We provide ongoing assistance" }
                                ].map((phase, index) => (
                                    <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                                        <div className="text-3xl font-bold text-primary mb-3">{phase.number}</div>
                                        <h3 className="font-semibold text-heading mb-2">{phase.title}</h3>
                                        <p className="text-sm text-body">{phase.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeUp>

                    {/* CTA */}
                    <FadeUp delay={0.4}>
                        <div className="mt-20 text-center">
                            <div className="bg-primary text-white p-10 rounded-2xl">
                                <h2 className="text-2xl font-bold mb-4">Start Your Journey Today</h2>
                                <p className="text-white/90 mb-8 max-w-md mx-auto">
                                    Ready to experience our proven process?
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
                                    <Link
                                        href="/#contact"
                                        className="bg-white text-black pl-4 pr-1.5 py-1 rounded-full text-[15px] sm:text-[16px] font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm group w-full sm:w-auto"
                                    >
                                        <span>Begin Now</span>
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
                                        Learn More
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </FadeUp>

                </div>
            </main>

            <Footer />
        </div>
    );
}