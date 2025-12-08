import Header from "./components/Header";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Slider from "./components/Services";
import TestimonialSection from "./components/Testimonial";
import KeyBenefits from "./components/KeyBenefits";
import PricingPlans from "./components/Pricing";
import HowItWorksSection from "./components/HowItWorks";
import ImpactSection from "./components/Impact";
// import TeamSection from "./components/Team";
import FAQSection from "./components/FAQ";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import FlowchartSection from "./components/Flowchart";
import ChatWidget from "./services/widget/page";


export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Header />
      <Hero />
      <Comparison />
      <Slider />
      <TestimonialSection />
      <KeyBenefits />
      {/* <PricingPlans /> */}
      <HowItWorksSection />
      <ImpactSection />
      {/* <TeamSection /> */}
      {/* <FlowchartSection /> */}
      <FAQSection />
      <ChatWidget />
      <ContactSection />
      <Footer />
    </div>
  );
}
