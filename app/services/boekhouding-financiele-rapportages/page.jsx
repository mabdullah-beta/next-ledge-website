import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Boekhouding & Financiële Rapportages | SalFin',
  description: 'Professionele boekhouding en financiële rapportages. SalFin zorgt voor correcte, actuele administratie en heldere financiële inzichten voor betere besluitvorming.',
  keywords: 'boekhouding, financiële rapportages, administratie, balans, winst en verlies, btw aangiften',
};

export default function BoekhoudingFinancieleRapportagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base font-medium text-white/80">Boekhouding & Financiële Rapportages</span>
          </div>
          <h1 className="font-hedvig text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Boekhouding & Financiële Rapportages
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl">
            Boekhouding als fundament van de organisatie
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Boekhouding als fundament */}
          <div className="mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Boekhouding vormt de basis van iedere organisatie. Het is het gestructureerd vastleggen van financiële feiten, zodat op elk moment inzicht bestaat in de actuele financiële situatie. Alleen wanneer de boekhouding correct, volledig en up-to-date is, ontstaat een betrouwbaar beeld van waar de organisatie staat.
              </p>
              <p>
                SalFin ondersteunt organisaties bij het zorgvuldig inrichten en bijhouden van de boekhouding. Wij zorgen voor structuur, consistentie en controle in de financiële administratie, zodat cijfers betrouwbaar zijn en gebruikt kunnen worden waarvoor ze bedoeld zijn.
              </p>
            </div>
          </div>

          {/* Inrichting van de boekhouding */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Inrichting van de boekhouding
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Een goede boekhouding begint bij een juiste inrichting. SalFin ondersteunt bij het opzetten en structureren van de financiële administratie, afgestemd op de organisatie en haar activiteiten.
              </p>
              <p>Dit omvat onder andere:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het opstellen en inrichten van het grootboekschema</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het bepalen en toepassen van kostenplaatsen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het vastleggen van kostendragers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Het logisch structureren van financiële gegevens</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Een juiste inrichting voorkomt fouten, maakt inzicht mogelijk en zorgt voor overzicht in de administratie.
            </p>
          </div>

          {/* Dagelijkse en periodieke verwerking */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Dagelijkse en periodieke verwerking
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Na inrichting verzorgen wij de verwerking van financiële transacties. Deze verwerking gebeurt gestructureerd en volgens vaste afspraken, zodat de administratie actueel en controleerbaar blijft.
              </p>
              <p>Onderdeel hiervan zijn onder andere:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Verwerking van inkoop- en verkoopfacturen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Bank- en kasverwerking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Verwerking van memoriaalboekingen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Loonjournaalposten</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Periodieke afsluitingen</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Door de administratie continu bij te houden, blijven cijfers actueel en betrouwbaar.
            </p>
          </div>

          {/* Automatisering als ondersteuning */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Automatisering als ondersteuning van het proces
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Om het werk voor ondernemers te vereenvoudigen, zet SalFin automatisering in waar dit toegevoegde waarde heeft. Denk aan het automatisch verwerken van facturen, banktransacties en koppelingen met andere systemen.
              </p>
              <p>Automatisering is bij ons geen doel op zich, maar een middel om:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Handmatig werk te verminderen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Fouten te beperken</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Processen efficiënter te laten verlopen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Informatie sneller beschikbaar te maken</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Waar nodig automatiseren wij processen, zonder de controle uit handen te geven. De kwaliteit van de boekhouding blijft altijd leidend.
            </p>
          </div>

          {/* Financiële rapportages */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Financiële rapportages: inzicht in de huidige cijfers
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Een goed bijgehouden boekhouding maakt het mogelijk om financiële rapportages op te stellen. Deze rapportages geven inzicht in de huidige financiële positie van de organisatie.
              </p>
              <p>SalFin ondersteunt bij het opstellen van onder andere:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Balans</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Winst- en verliesrekening</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Tussentijdse financiële overzichten</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Deze rapportages zijn gebaseerd op actuele gegevens en geven een feitelijk beeld van de financiële situatie op dat moment.
            </p>
          </div>

          {/* Correcte administratie als basis */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Correcte administratie als basis voor verplichtingen
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Een correcte boekhouding is noodzakelijk voor het voldoen aan wettelijke en fiscale verplichtingen. Vanuit de administratie worden onder andere btw-, IB- en VPB-aangiften opgesteld, evenals de jaarrekening.
              </p>
              <p>Door de administratie strak en actueel te houden:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>zijn aangiften gebaseerd op juiste gegevens</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>wordt correctiewerk achteraf beperkt</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>blijven dossiers inzichtelijk en herleidbaar</span>
              </li>
            </ul>
          </div>

          {/* Waarom dit zo belangrijk is */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Waarom dit zo belangrijk is
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Administratie die achterloopt of onjuist is, leidt tot onduidelijkheid en risico's. Beslissingen worden dan genomen op basis van verouderde of onvolledige informatie.
              </p>
              <p>
                SalFin is ontstaan vanuit ondernemerschap en begrijpt hoe belangrijk het is om te kunnen vertrouwen op cijfers. Daarom zien wij boekhouding niet als een administratieve verplichting, maar als een kernproces dat rust, overzicht en betrouwbaarheid moet bieden.
              </p>
              <p>
                Wij zorgen dat de boekhouding klopt, actueel is en aansluit bij de organisatie. Dat maakt het werk voor ondernemers overzichtelijker en zorgt voor grip op de huidige financiële situatie.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Kennismaken
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Wil je een boekhouding die correct is ingericht, actueel wordt bijgehouden en ondersteund wordt door slimme automatisering?
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
