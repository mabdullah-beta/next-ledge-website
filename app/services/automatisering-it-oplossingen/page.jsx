import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Automatisering & IT-oplossingen | SalFin',
  description: 'Praktische IT-oplossingen die werken voor uw organisatie. SalFin ontwerpt en realiseert automatisering, dashboards en AI-ondersteuning met focus op structuur en veiligheid.',
  keywords: 'automatisering, IT-oplossingen, dashboards, Power BI, AI-chatbot, data-lake, koppelingen',
};

export default function AutomatiseringITOplossingenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base font-medium text-white/80">Automatisering & IT-oplossingen</span>
          </div>
          <h1 className="font-hedvig text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Automatisering & IT-oplossingen
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl">
            Praktische IT die werkt voor de organisatie
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Intro */}
          <div className="mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Automatisering en IT zijn geen doel op zich. Ze moeten het werk eenvoudiger maken, overzicht creëren en zorgen dat informatie toegankelijk is.
              </p>
              <p>
                SalFin ondersteunt organisaties bij het ontwerpen en realiseren van IT-oplossingen die aansluiten op de dagelijkse praktijk. Onze focus ligt op structuur, veiligheid en toepasbaarheid.
              </p>
            </div>
          </div>

          {/* Data centraal en veilig */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Data centraal en veilig ingericht
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Wij richten een centrale, beveiligde cloudomgeving in binnen de IT-omgeving van de klant. Deze omgeving fungeert als één centrale plek waar data uit verschillende applicaties samenkomt. Dit vormt een uitbreidbaar data-lake dat continu kan worden gevoed met nieuwe databronnen.
              </p>
              <p>Belangrijk hierbij:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Data blijft eigendom van de organisatie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Eén centrale bron van informatie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Duidelijke toegangsrechten en beveiliging</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Uitbreidbaar zonder herinrichting</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Zo ontstaat overzicht zonder versnippering.
            </p>
          </div>

          {/* Structuur en automatisering */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Structuur en automatisering waar het waarde toevoegt
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                SalFin ondersteunt bij het structureren van data en het automatiseren van processen waar dit daadwerkelijk bijdraagt aan efficiëntie en betrouwbaarheid.
              </p>
              <p>Denk aan:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Koppelingen tussen applicaties</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Automatische verwerking van datastromen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Verminderen van handmatige handelingen</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Automatisering wordt alleen toegepast wanneer dit het proces aantoonbaar verbetert.
            </p>
          </div>

          {/* Dashboards en inzicht */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Dashboards en inzicht
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Op basis van de centrale dataomgeving ontwikkelen wij overzichtelijke dashboards, bijvoorbeeld in Power BI of via maatwerkoplossingen.
              </p>
              <p>Deze dashboards geven inzicht in:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Financiële cijfers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Ontwikkelingen en afwijkingen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Samengevoegde data uit meerdere systemen</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              De focus ligt op duidelijkheid en relevantie.
            </p>
          </div>

          {/* AI-ondersteuning */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              AI-ondersteuning voor uitleg en duiding
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Op het data-lake kan een AI-chatbot worden aangesloten die helpt bij het interpreteren van data. Deze chatbot werkt uitsluitend met de beschikbare, beveiligde data van de organisatie.
              </p>
              <p>De AI ondersteunt bij:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het beantwoorden van vragen over cijfers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het samenvatten van informatie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het duiden van afwijkingen</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              De controle over data en interpretatie blijft altijd bij de organisatie.
            </p>
          </div>

          {/* Aanvullende IT-oplossingen */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Aanvullende IT-oplossingen
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Waar nodig ondersteunt SalFin bij aanvullende IT-oplossingen, zoals klantportalen of maatwerkapplicaties, altijd gericht op gebruiksgemak, veiligheid en overzicht.
              </p>
            </div>
          </div>

          {/* Waarom automatisering via SalFin */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Waarom automatisering via SalFin
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>IT-oplossingen die aansluiten op de praktijk</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Data centraal, veilig en beheersbaar</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Geen onnodige complexiteit</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Heldere afspraken en duidelijke structuur</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              SalFin combineert financiële kennis met IT-inzicht, zodat technologie ondersteunend blijft aan de organisatie.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Kennismaken
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Wil je IT-oplossingen die data samenbrengen, processen vereenvoudigen en inzicht geven, zonder de controle te verliezen?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Neem contact op met SalFin voor een kennismakingsgesprek
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
