import Header from "./components/Header";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Slider from "./components/Services";
import TestimonialSection from "./components/Testimonial";
import AboutSalFin from "./components/AboutSalFin";
import KeyBenefits from "./components/KeyBenefits";
import HowItWorksSection from "./components/HowItWorks";
import ImpactSection from "./components/Impact";
// import TeamSection from "./components/Team";
import FAQSection from "./components/FAQ";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import FlowchartSection from "./components/Flowchart";
import ChatWidget from "./services/widget/page";
import { defaultFaqs } from "@/data/Faqs";

export const metadata = {
  title: 'SalFin - Moderne Boekhouding & IT Oplossingen',
  description: 'SalFin combineert professionele boekhouding met slimme IT oplossingen. We maken je administratie efficiënt, je cijfers duidelijk, en je bedrijf klaar voor groei.',
  keywords: 'boekhouding, administratie, IT oplossingen, financiële diensten, Nederland',
  openGraph: {
    title: 'SalFin - Moderne Boekhouding & IT Oplossingen',
    description: 'Professionele boekhouding met slimme IT oplossingen voor efficiënte administratie en bedrijfsgroei.',
    url: 'https://salfin.com',
    siteName: 'SalFin',
    locale: 'nl_NL',
    type: 'website',
  }
};


export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Header />
      <Hero />
      <Comparison />
      <Slider />
      {/* <TestimonialSection /> */}
      <AboutSalFin />
      <KeyBenefits />
      {/* <PricingPlans /> */}
      <HowItWorksSection />
      {/* <ImpactSection /> */}
      {/* <TeamSection /> */}
      {/* <FlowchartSection /> */}
      {/* <FAQSection /> */}
      <ChatWidget />
      <ContactSection />
      <Footer />
    </div>
  );
}
