import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Salarisadministratie & HR-ondersteuning | SalFin',
  description: 'Professionele salarisadministratie en HR-ondersteuning voor organisaties met personeel. SalFin verzorgt loonverwerking, HR-administratie en procesondersteuning, ondersteund door Nmbrs en actuele wet- en regelgeving.',
  keywords: 'salarisadministratie, HR-ondersteuning, loonverwerking, Nmbrs, arbeidsvoorwaarden, cao',
};

export default function SalarisadministratieHRPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base font-medium text-white/80">Salarisadministratie & HR</span>
          </div>
          <h1 className="font-hedvig text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Salarisadministratie & HR
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl">
            Professionele salarisadministratie en HR-ondersteuning voor organisaties die hun personeels- en loonprocessen zorgvuldig en gestructureerd willen inrichten.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Salarisadministratie als kernproces */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Salarisadministratie als zorgvuldig ingericht kernproces
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Salarisadministratie is een essentieel onderdeel van iedere organisatie met personeel. Het vereist een correcte verwerking van looncomponenten, fiscale verplichtingen en arbeidsvoorwaarden, met inachtneming van geldende wet- en regelgeving.
              </p>
              <p>
                SalFin verzorgt salarisadministratie voor organisaties waar loonverwerking vraagt om ervaring, overzicht en een consistente werkwijze. Wij ondersteunen bij de uitvoering en beheersing van het salarisproces, met aandacht voor continuïteit en controle.
              </p>
              <p>
                Onze dienstverlening is gebaseerd op actuele vakkennis en professionele standaarden, ondersteund door moderne systemen.
              </p>
            </div>
          </div>

          {/* Ondersteund door systemen */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Ondersteund door systemen, uitgevoerd door specialisten
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                SalFin werkt met Nmbrs, een veelgebruikt loon- en HR-systeem binnen Nederland. Dit systeem ondersteunt een gestructureerde inrichting van salaris- en HR-processen en draagt bij aan consistente gegevensverwerking.
              </p>
              <p>
                De inzet van software ontslaat niet van inhoudelijke verantwoordelijkheid. Iedere salarisverwerking wordt uitgevoerd en gecontroleerd door een vaste specialist, die bekend is met de inrichting van jouw organisatie en de gemaakte afspraken.
              </p>
            </div>
          </div>

          {/* Werkzaamheden */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Werkzaamheden binnen salarisadministratie
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SalFin ondersteunt onder andere bij:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Periodieke salarisverwerking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Aangifte en afdracht van loonheffingen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Toepassing en verwerking van cao's en arbeidsvoorwaarden</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Verwerking van personele mutaties</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Signalering van relevante wijzigingen in wet- en regelgeving</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Beantwoording van vragen over loonstroken en salarisverwerking</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              De werkzaamheden worden uitgevoerd binnen afgesproken kaders en verantwoordelijkheden.
            </p>
          </div>

          {/* Duidelijke verantwoordelijkheden */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Werken met duidelijke verantwoordelijkheden
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                SalFin is een Nederlands administratiekantoor en ondersteunt organisaties bij de uitvoering van salarisadministratie. De verantwoordelijkheid voor personeelsbeleid en besluitvorming blijft bij de organisatie zelf.
              </p>
              <p>Wij werken met:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Een vast aanspreekpunt</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Duidelijke afspraken over taken en verantwoordelijkheden</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Een consistente en controleerbare werkwijze</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Dit draagt bij aan voorspelbaarheid en continuïteit in het salarisproces.
            </p>
          </div>

          {/* HR-ondersteuning */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              HR-ondersteuning gericht op inrichting en vastlegging
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                HR-vraagstukken nemen toe naarmate organisaties groeien of veranderen. SalFin ondersteunt bij het inrichten en onderhouden van HR-processen en HR-administratie, met aandacht voor structuur, vastlegging en naleving van geldende regelgeving.
              </p>
              <p>
                Onze HR-ondersteuning is uitvoerend en adviserend van aard en gericht op het correct vastleggen en beheren van personeelsgegevens en processen.
              </p>
            </div>
          </div>

          {/* Praktische HR-ondersteuning */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Praktische HR-ondersteuning binnen wettelijke kaders
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                De HR-dienstverlening van SalFin is praktisch en toepasbaar. Wij werken geen standaardmodellen uit, maar sluiten aan bij de inrichting en behoeften van de organisatie.
              </p>
              <p>Onze ondersteuning richt zich op:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het structureren van HR-processen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het vastleggen van afspraken en procedures</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het ondersteunen bij de administratieve en procesmatige kant van HR</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Discretie, zorgvuldigheid en duidelijke vastlegging vormen hierbij de basis.
            </p>
          </div>

          {/* HR-werkzaamheden */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              HR-werkzaamheden
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SalFin ondersteunt onder andere bij:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Opstellen en beheren van arbeidsovereenkomsten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Beheer van personeelsdossiers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Ondersteuning bij in-, door- en uitstroom van medewerkers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Administratieve ondersteuning bij ziekteverzuim en dossiervorming</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Vastleggen van HR-beleid en interne procedures</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Ondersteuning bij arbeidsrechtelijke vraagstukken (niet-procederend)</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Waar nodig vindt afstemming plaats met externe adviseurs of juristen.
            </p>
          </div>

          {/* Samenhang */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Samenhang tussen HR en salarisadministratie
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                HR-gegevens en salarisadministratie zijn nauw met elkaar verbonden. Door de geïntegreerde inrichting binnen Nmbrs worden gegevens consistent vastgelegd en verwerkt.
              </p>
              <p>Dit draagt bij aan:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Consistente gegevensverwerking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Beperking van administratieve fouten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Overzicht in personeels- en looninformatie</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Eén centraal aanspreekpunt</span>
              </li>
            </ul>
          </div>

          {/* Salarispakketten */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-8">
              Salarispakketten
            </h2>
            
            <div className="grid gap-8 md:gap-12">
              {/* Standaard */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="font-hedvig text-xl sm:text-2xl text-gray-900 mb-4">Standaard</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Standaardinrichting van Nmbrs met gebruikelijke loon- en urencomponenten en een eenvoudig grootboekschema.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Niet aanpasbaar of uitbreidbaar.
                </p>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Optionele modules:</p>
                  <p className="text-gray-600">Declaraties • Verlof • Digitale HR-processen • Verzuimregistratie</p>
                </div>
              </div>

              {/* Standaard Plus */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="font-hedvig text-xl sm:text-2xl text-gray-900 mb-4">Standaard Plus</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Standaardinrichting van Nmbrs met mogelijkheid tot standaard cao-inrichting.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beperkt aanpasbaar tot maximaal 10 eigen loon- of urencodes of één aangepast grootboekschema.
                </p>
              </div>

              {/* Op maat */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="font-hedvig text-xl sm:text-2xl text-gray-900 mb-4">Op maat</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Volledige inrichting afgestemd op de organisatie.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Eigen loon- en urenstructuren en een organisatie-specifiek grootboekschema.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Kennismaken
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Wil je salarisadministratie en HR-ondersteuning zorgvuldig en professioneel laten uitvoeren, met duidelijke afspraken en vaste aanspreekpunten?
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
