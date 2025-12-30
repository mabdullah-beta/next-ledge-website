import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Interim-oplossingen Salaris, Finance & HR | SalFin',
  description: 'Snel interim ondersteuning nodig binnen salaris, finance of HR? SalFin stelt binnen één week passende consultants voor. Duidelijke afspraken, 30 dagen opzegtermijn en persoonlijke matching.',
  keywords: 'interim, tijdelijke ondersteuning, salaris, finance, HR, consultants, flexibele inzet',
};

export default function InterimOplossingenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm sm:text-base font-medium text-white/80">Interim-oplossingen</span>
          </div>
          <h1 className="font-hedvig text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Interim-oplossingen
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl">
            Flexibele ondersteuning binnen salaris, finance en HR
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
                Heb je tijdelijk extra ondersteuning nodig binnen salarisadministratie, finance of HR?
              </p>
              <p>
                SalFin biedt interim-oplossingen binnen deze driehoek wanneer continuïteit, capaciteit of expertise onder druk staat. Wij zorgen voor snelle inzet, duidelijke afspraken en een consultant die past bij jouw organisatie.
              </p>
            </div>
          </div>

          {/* Snel schakelen */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Snel schakelen wanneer het nodig is
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Wanneer er spoed is, schakelen wij snel. Na het eerste contact zorgen wij ervoor dat binnen één week een passende consultant wordt voorgesteld.
              </p>
              <p>Dit kan bijvoorbeeld nodig zijn bij:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Ziekte of uitval</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Zwangerschapsverlof</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Tijdelijke capaciteitsvraagstukken</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Overbrugging bij vacatures</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Projectmatige ondersteuning</span>
              </li>
            </ul>
          </div>

          {/* Intake op locatie */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Intake op locatie: match op inhoud én mens
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Elke organisatie en hulpvraag is uniek. Daarom starten wij altijd met een intake op locatie. Tijdens dit gesprek brengen we niet alleen de werkzaamheden in kaart, maar kijken we ook nadrukkelijk naar de organisatiecultuur en samenwerking.
              </p>
              <p>Wij matchen op:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Inhoudelijke kennis en ervaring (hard skills)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Persoonlijkheid, communicatie en werkstijl (soft skills)</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Zo zorgen we dat de consultant niet alleen functioneel past, maar ook goed landt binnen het team.
            </p>
          </div>

          {/* Voorstel van kandidaten */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Voorstel van passende kandidaten
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Na de intake stellen wij drie kandidaten voor die voldoen aan de afgesproken criteria.
              </p>
              <p>Van iedere kandidaat hebben wij:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>De ervaring en inzetbaarheid beoordeeld</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Een referentiecheck uitgevoerd</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Na de gesprekken plannen we in overleg een startdatum.
            </p>
          </div>

          {/* Transparante afspraken */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Transparante afspraken, maximale flexibiliteit
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>SalFin werkt met duidelijke en eenvoudige afspraken:</p>
            </div>
            <ul className="space-y-3 text-gray-600 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Opzegtermijn van 30 dagen, ook tijdens de contractperiode</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Geen kleine letters</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Geen onduidelijke voorwaarden</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <span>Geen verrassingen achteraf</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-6">
              Is de ondersteuning niet langer nodig, dan bouwen we netjes af en zorgen we voor overdracht.
            </p>
          </div>

          {/* Flexibele schil en vaste partner */}
          <div className="mb-16">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
              Jouw flexibele schil en vaste partner
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                SalFin is meer dan een leverancier van capaciteit. Wij denken mee, blijven betrokken en fungeren als flexibele schil wanneer dat nodig is.
              </p>
              <p>
                Je kunt interim-inzet combineren met onze andere diensten, zoals salarisadministratie, boekhouding, accounting of IT-oplossingen. Zo blijft alles overzichtelijk en afgestemd.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-hedvig text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Kennismaken
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Heb je snel interim-ondersteuning nodig binnen salaris, finance of HR?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Neem contact op met SalFin en bespreek de mogelijkheden
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
