'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-blue-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 lg:py-20 md:mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-hedvig font-bold text-heading mb-4">
            Algemene Voorwaarden Salfin
          </h1>
          <p className="text-lg sm:text-xl text-body mb-2">
            Versie 2.2 – 01-01-2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          
          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 1 – Identiteit</h2>
            <div className="text-body leading-relaxed space-y-2">
              <p><strong>Salfin</strong></p>
              <p>Herikerbergweg 32</p>
              <p>1101 CM Amsterdam</p>
              <p>Nederland</p>
              <p>Telefoon: 085 212 6475</p>
              <p>E-mail: support@salfin.nl</p>
              <p>Website: www.salfin.nl</p>
              <p>KvK-nummer: 91994527</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 2 – Definities</h2>
            <p className="text-body leading-relaxed mb-4">In deze algemene voorwaarden wordt verstaan onder:</p>
            <ul className="space-y-2 text-body leading-relaxed">
              <li><strong>• Salfin:</strong> Salfin B.V.</li>
              <li><strong>• Opdrachtgever:</strong> iedere natuurlijke persoon of rechtspersoon die handelt in de uitoefening van beroep of bedrijf en een overeenkomst aangaat met Salfin.</li>
              <li><strong>• Overeenkomst:</strong> iedere overeenkomst tussen Salfin en Opdrachtgever, inclusief wijzigingen en aanvullingen.</li>
              <li><strong>• Diensten:</strong> alle administratieve, boekhoudkundige, fiscale, financiële en aanverwante werkzaamheden van Salfin.</li>
              <li><strong>• Meerwerk:</strong> werkzaamheden die buiten de overeengekomen scope of het gekozen abonnement vallen.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 3 – Toepasselijkheid</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>3.1</strong> Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van Salfin.</p>
              <p><strong>3.2</strong> Afwijkingen zijn uitsluitend geldig indien deze uitdrukkelijk en schriftelijk zijn overeengekomen.</p>
              <p><strong>3.3</strong> De toepasselijkheid van algemene voorwaarden van Opdrachtgever wordt uitdrukkelijk uitgesloten.</p>
              <p><strong>3.4</strong> Bij strijdigheid tussen deze algemene voorwaarden en een overeenkomst prevaleert de overeenkomst.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 4 – Totstandkoming van de overeenkomst</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>4.1</strong> Een overeenkomst komt tot stand door:</p>
              <ul className="ml-4 space-y-1">
                <li>• schriftelijke of digitale acceptatie;</li>
                <li>• ondertekening van een overeenkomst; of</li>
                <li>• feitelijke aanvang van de dienstverlening door Salfin.</li>
              </ul>
              <p><strong>4.2</strong> Salfin is gerechtigd opdrachten te weigeren of te beëindigen indien voortzetting redelijkerwijs niet van haar kan worden verlangd.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 5 – Uitvoering van de dienstverlening</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>5.1</strong> Salfin voert haar werkzaamheden uit naar beste inzicht en vermogen en uitsluitend op basis van een inspanningsverplichting.</p>
              <p><strong>5.2</strong> Salfin verstrekt geen garanties ten aanzien van fiscale uitkomsten, besparingen, subsidies, winstontwikkeling of andere financiële resultaten.</p>
              <p><strong>5.3</strong> Salfin baseert haar werkzaamheden op de door Opdrachtgever aangeleverde informatie en is niet gehouden deze te controleren op juistheid of volledigheid, behoudens evidente onjuistheden die in redelijkheid niet mogen worden genegeerd.</p>
              <p><strong>5.4</strong> Door Salfin genoemde termijnen zijn indicatief en nimmer fatale termijnen.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 6 – Abonnementen, advies en sturing</h2>
            
            <div className="space-y-4 text-body leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">6.1 Algemeen</h3>
                <p>Salfin biedt haar dienstverlening aan via de abonnementsvormen Brons, Zilver en Goud.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">6.2 Brons-abonnement (ZZP / basis)</h3>
                <p><strong>6.2.1</strong> Het Brons-abonnement is gericht op administratieve ondersteuning en boekhoudkundige verwerking.</p>
                <p><strong>6.2.2</strong> Binnen het Brons-abonnement wordt geen fiscaal, juridisch, financieel of strategisch advies verstrekt.</p>
                <p><strong>6.2.3</strong> Toelichtingen of opmerkingen binnen dit abonnement zijn uitsluitend bedoeld ter feitelijke afstemming en kunnen niet als advies worden aangemerkt.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">6.3 Zilver-abonnement (sturing & advies)</h3>
                <p><strong>6.3.1</strong> Binnen het Zilver-abonnement kan Salfin, naast administratieve dienstverlening, advies en sturing bieden op administratief, fiscaal en financieel gebied.</p>
                <p><strong>6.3.2</strong> Advies en sturing:</p>
                <ul className="ml-4 space-y-1">
                  <li>• vinden plaats binnen de overeengekomen scope;</li>
                  <li>• zijn gebaseerd op door Opdrachtgever aangeleverde informatie;</li>
                  <li>• betreffen uitsluitend een inspanningsverplichting.</li>
                </ul>
                <p><strong>6.3.3</strong> Salfin verstrekt geen garanties ten aanzien van uitkomsten of resultaten.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">6.4 Goud-abonnement (strategisch adviseur)</h3>
                <p><strong>6.4.1</strong> Binnen het Goud-abonnement treedt Salfin op als strategisch financieel en administratief sparringpartner.</p>
                <p><strong>6.4.2</strong> Strategische ondersteuning kan onder meer betrekking hebben op:</p>
                <ul className="ml-4 space-y-1">
                  <li>• financiële structuur en inzicht;</li>
                  <li>• fiscale en administratieve optimalisatie;</li>
                  <li>• begeleiding bij groei, besluitvorming en bedrijfsontwikkeling.</li>
                </ul>
                <p><strong>6.4.3</strong> Strategische advisering betreft altijd een inspanningsverplichting. Salfin verstrekt geen bindende adviezen, garanties of prognoses.</p>
                <p><strong>6.4.4</strong> De uiteindelijke besluitvorming en verantwoordelijkheid blijven te allen tijde bij Opdrachtgever.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">6.5 Meerwerk en scopebewaking</h3>
                <p><strong>6.5.1</strong> Werkzaamheden buiten de scope van het gekozen abonnement worden aangemerkt als meerwerk.</p>
                <p><strong>6.5.2</strong> Meerwerk wordt gefactureerd tegen het geldende uurtarief van Salfin, tenzij schriftelijk anders overeengekomen.</p>
                <p><strong>6.5.3</strong> Indien gedurende twee opeenvolgende maanden structureel werkzaamheden worden verricht die het gekozen abonnement overschrijden, is Salfin gerechtigd:</p>
                <ul className="ml-4 space-y-1">
                  <li>• een passend abonnement voor te stellen; of</li>
                  <li>• de werkzaamheden als meerwerk te blijven factureren.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading mb-2">6.6 Eigen verantwoordelijkheid opdrachtgever</h3>
                <p><strong>6.6.1</strong> Ongeacht het gekozen abonnement blijft Opdrachtgever volledig verantwoordelijk voor alle beslissingen, aangiften, keuzes en naleving van wet- en regelgeving.</p>
                <p><strong>6.6.2</strong> Salfin treedt niet op als fiscaal vertegenwoordiger en dient geen aangiften in zonder expliciete schriftelijke machtiging van Opdrachtgever.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 7 – Verplichtingen van opdrachtgever</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>7.1</strong> Opdrachtgever is volledig verantwoordelijk voor tijdige, volledige en juiste aanlevering van gegevens.</p>
              <p><strong>7.2</strong> Gevolgen van onjuiste of te late aanlevering komen volledig voor rekening van Opdrachtgever.</p>
              <p><strong>7.3</strong> Extra werkzaamheden als gevolg hiervan worden aangemerkt als meerwerk.</p>
              <p><strong>7.4</strong> Bij structurele tekortkomingen is Salfin gerechtigd haar werkzaamheden op te schorten.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 8 – Tarieven en betaling</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>8.1</strong> Alle tarieven zijn exclusief btw, tenzij anders vermeld.</p>
              <p><strong>8.2</strong> Facturatie vindt plaats conform overeenkomst, veelal per kwartaal vooruit.</p>
              <p><strong>8.3</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum.</p>
              <p><strong>8.4</strong> Bij niet-tijdige betaling is Salfin gerechtigd wettelijke handelsrente, incassokosten en opschorting van dienstverlening toe te passen.</p>
              <p><strong>8.5</strong> Salfin is gerechtigd tarieven jaarlijks te indexeren. Opdrachtgever wordt hiervan minimaal 30 dagen vooraf schriftelijk geïnformeerd.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 9 – Aansprakelijkheid</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>9.1</strong> Iedere aansprakelijkheid van Salfin is beperkt tot het laagste van:</p>
              <ul className="ml-4 space-y-1">
                <li>• het bedrag dat Opdrachtgever in het lopende kalenderjaar aan Salfin heeft betaald; of</li>
                <li>• € 5.000,-</li>
              </ul>
              <p><strong>9.2</strong> Salfin is uitsluitend aansprakelijk voor directe schade als gevolg van een toerekenbare tekortkoming in de uitvoering van de overeenkomst.</p>
              <p><strong>9.3</strong> Salfin is nimmer aansprakelijk voor:</p>
              <ul className="ml-4 space-y-1">
                <li>• indirecte schade;</li>
                <li>• gevolgschade;</li>
                <li>• gederfde winst;</li>
                <li>• boetes, naheffingen of rente;</li>
                <li>• schade voortvloeiend uit beslissingen van Opdrachtgever.</li>
              </ul>
              <p><strong>9.4</strong> Iedere aanspraak vervalt indien deze niet binnen 12 maanden na ontdekking schriftelijk aan Salfin is gemeld.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 10 – Overmacht</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>10.1</strong> Salfin is niet gehouden tot nakoming indien sprake is van overmacht.</p>
              <p><strong>10.2</strong> Onder overmacht wordt mede verstaan: ziekte, storingen, uitval van systemen, overheidsmaatregelen en andere omstandigheden buiten de invloedssfeer van Salfin.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 11 – Geheimhouding en gegevens</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>11.1</strong> Partijen zijn verplicht tot geheimhouding van vertrouwelijke informatie.</p>
              <p><strong>11.2</strong> Salfin verwerkt persoonsgegevens conform de geldende privacywetgeving (AVG) en haar privacyverklaring.</p>
              <p><strong>11.3</strong> Indien Salfin als verwerker optreedt, wordt een separate verwerkersovereenkomst gesloten.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 12 – Opschorting en beëindiging</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>12.1</strong> Salfin is gerechtigd de overeenkomst met onmiddellijke ingang te beëindigen indien Opdrachtgever tekortschiet in zijn verplichtingen of sprake is van wanbetaling.</p>
              <p><strong>12.2</strong> Opdrachtgever kan de overeenkomst schriftelijk opzeggen met inachtneming van een opzegtermijn van één maand.</p>
              <p><strong>12.3</strong> Beëindiging ontslaat Opdrachtgever niet van betalingsverplichtingen.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 13 – Intellectueel eigendom</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>13.1</strong> Alle door Salfin gebruikte methodieken, formats, systemen en werkwijzen blijven eigendom van Salfin.</p>
              <p><strong>13.2</strong> Opdrachtgever verkrijgt geen eigendomsrechten.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 14 – Toepasselijk recht en geschillen</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>14.1</strong> Op alle rechtsverhoudingen tussen Salfin en Opdrachtgever is uitsluitend Nederlands recht van toepassing.</p>
              <p><strong>14.2</strong> Geschillen worden exclusief voorgelegd aan de bevoegde rechtbank te Amsterdam.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-hedvig font-bold text-heading mb-4">Artikel 15 – Slotbepaling</h2>
            <div className="space-y-3 text-body leading-relaxed">
              <p><strong>15.1</strong> Indien een bepaling nietig of vernietigbaar blijkt, blijven de overige bepalingen onverminderd van kracht.</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
