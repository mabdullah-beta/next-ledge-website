import Header from "../components/Header";
import Footer from "../components/Footer";
import workSteps from "../../data/work.json";
import Image from "next/image";
import { FadeUp } from "../components/MotionWrapper";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                                    >
                                        Begin Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                    <a
                                        href="/services"
                                        className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
                                    >
                                        Learn More
                                    </a>
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