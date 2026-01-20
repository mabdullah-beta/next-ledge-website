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
  title: 'SalFin - Ondersteuning bij salaris, HR en finance',
  description: 'SalFin ondersteunt organisaties bij salarisadministratie, HR en financiële processen door te werken vanuit samenhang, zorgvuldige inrichting en waar nodig interim-oplossingen.',
  keywords: 'salarisadministratie, HR, financiële processen, interim-oplossingen, Nederland',
  openGraph: {
    title: 'SalFin - Ondersteuning bij salaris, HR en finance',
    description: 'SalFin ondersteunt organisaties bij salarisadministratie, HR en financiële processen door te werken vanuit samenhang, zorgvuldige inrichting en waar nodig interim-oplossingen.',
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
      <AboutSalFin />
      <Slider />
      {/* <TestimonialSection /> */}
      
      
      {/* <PricingPlans /> */}
      <HowItWorksSection />
      {/* <ImpactSection /> */}
      {/* <TeamSection /> */}
      {/* <FlowchartSection /> */}
      {/* <FAQSection /> */}
      <ChatWidget />
      <KeyBenefits />
      <ContactSection />
      <Footer />
    </div>
  );
}
