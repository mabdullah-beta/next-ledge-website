import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Accounting, Jaarrekening & Financiële Planning | SalFin',
  description: 'Van correcte vastlegging naar inzicht en overzicht. SalFin ondersteunt bij accounting, jaarrekeningen en financiële planning voor betere bedrijfssturing.',
  keywords: 'accounting, jaarrekening, financiële planning, managementrapportages, begrotingen, scenario planning',
};

export default function AccountingJaarrekeningFinancielePlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base font-medium text-white/80">Accounting, Jaarrekening & Financiële Planning</span>
          </div>
          <h1 className="font-hedvig text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Accounting, Jaarrekening & Financiële Planning
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl">
            Van correcte vastlegging naar inzicht en overzicht
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
                Wanneer de boekhouding op orde is, ontstaat ruimte voor verdieping. Accounting en financiële planning bouwen voort op een correcte administratie en richten zich op inzicht, duiding en samenhang. Daarnaast vraagt iedere organisatie om formele financiële verantwoording, zoals de jaarrekening.
              </p>
              <p>
                SalFin ondersteunt organisaties bij deze vervolgstappen: van financiële analyse en rapportages tot het opstellen van de jaarrekening en het bieden van structuur in financiële planning.
              </p>
            </div>
          </div>

          {/* Accounting & Financiële Inzichten */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Accounting & Financiële Inzichten
            </h2>
            <h3 className="font-hedvig text-xl sm:text-2xl text-gray-900 mb-4">
              Begrijpen wat de cijfers betekenen
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Accounting richt zich op het analyseren en interpreteren van financiële gegevens die voortkomen uit de boekhouding. Het doel is inzicht krijgen in prestaties, kostenstructuren en financiële ontwikkelingen.
              </p>
              <p>
                SalFin ondersteunt bij het vertalen van cijfers naar heldere inzichten die begrijpelijk zijn voor de organisatie.
              </p>
            </div>

            <h4 className="font-hedvig text-lg sm:text-xl text-gray-900 mb-4 mt-8">
              Werkzaamheden binnen accounting & inzichten
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Analyse van financiële resultaten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Inzicht in kosten, marges en opbrengsten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Signaleren en toelichten van afwijkingen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Periodieke managementrapportages</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Uitleg en duiding van financiële cijfers</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              De focus ligt op het heden en recente verleden: wat laten de cijfers zien en hoe zijn deze te verklaren?
            </p>
          </div>

          {/* Jaarrekening & Formele Verantwoording */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Jaarrekening & Formele Verantwoording
            </h2>
            <h3 className="font-hedvig text-xl sm:text-2xl text-gray-900 mb-4">
              Vastlegging en verantwoording van het boekjaar
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Een belangrijk onderdeel van financiële verslaglegging is het opstellen van de jaarrekening. Dit document geeft een formeel overzicht van de financiële positie en resultaten over een boekjaar en vormt de basis voor verantwoording richting onder andere de Belastingdienst en andere belanghebbenden.
              </p>
              <p>SalFin ondersteunt bij:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het samenstellen van de jaarrekening</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Toelichting op balans en winst- en verliesrekening</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Afstemming van cijfers met de gevoerde administratie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Voorbereiding en aanlevering van informatie voor externe partijen</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              De jaarrekening vormt het sluitstuk van een correct gevoerde administratie.
            </p>
          </div>

          {/* Financiële Planning & Sturing */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Financiële Planning & Sturing
            </h2>
            <h3 className="font-hedvig text-xl sm:text-2xl text-gray-900 mb-4">
              Structuur aanbrengen in vooruitkijken
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Financiële planning & sturing richt zich op het vooruitkijken en het volgen van financiële doelstellingen. Op basis van actuele cijfers ondersteunt SalFin bij het opstellen van financiële plannen en het monitoren van de voortgang.
              </p>
              <p>
                Deze dienstverlening is ondersteunend en adviserend van aard en helpt organisaties om grip te houden op hun financiële koers.
              </p>
            </div>

            <h4 className="font-hedvig text-lg sm:text-xl text-gray-900 mb-4 mt-8">
              Werkzaamheden binnen financiële planning & sturing
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Opstellen van begrotingen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Uitwerken van financiële scenario's</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Vergelijken van planning en realisatie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Signaleren van afwijkingen ten opzichte van de begroting</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Aandachtspunten en aanbevelingen op basis van cijfers</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Besluitvorming en eindverantwoordelijkheid blijven bij de organisatie.
            </p>
          </div>

          {/* Hoe deze diensten elkaar aanvullen */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Hoe deze diensten elkaar aanvullen
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>Deze onderdelen vormen samen een logisch geheel:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Accounting & inzichten zorgen voor begrip van de cijfers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Jaarrekening zorgt voor formele vastlegging en verantwoording</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Financiële planning & sturing gebruikt inzichten om vooruit te kijken en te volgen</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Door deze samenhang ontstaat consistentie in cijfers, overzicht in prestaties en structuur in financiële processen.
            </p>
          </div>

          {/* Werken met duidelijke rollen */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Werken met duidelijke rollen en afspraken
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                SalFin ondersteunt organisaties binnen afgesproken kaders en verantwoordelijkheden. Wij leveren analyses, rapportages en ondersteuning, zonder bestuurlijke of eindverantwoordelijkheid over te nemen.
              </p>
              <p>Dit betekent:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Heldere rolverdeling</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Transparante werkwijze</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Vast aanspreekpunt</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Consistente financiële informatie</span>
              </li>
            </ul>
          </div>

          {/* Waarom SalFin */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Waarom SalFin
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                SalFin is ontstaan vanuit ondernemerschap en begrijpt dat cijfers pas waarde krijgen wanneer ze correct zijn vastgelegd én goed worden begrepen. Wij werken gestructureerd, nuchter en zonder onnodige complexiteit.
              </p>
              <p>Onze kracht ligt in het verbinden van:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Correcte administratie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Heldere inzichten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Formele verantwoording</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Realistische financiële planning</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Altijd afgestemd op de organisatie en haar manier van werken.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Kennismaken
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Wil je ondersteuning bij accounting, jaarrekening en financiële planning, met duidelijke afspraken en één vast aanspreekpunt?
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
