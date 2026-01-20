'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  BookOpen,
  Layers,
  Repeat,
  Cpu,
  BarChart3,
  ShieldCheck,
  Check,
} from 'lucide-react';


export default function BoekhoudingFinancieleRapportagesPage() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-blue-50/30">
      <Header />

      {/* Hero */}
      <section className="py-12 lg:py-20 md:mt-10">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-hedvig text-heading-lg text-heading mb-4">
              Boekhouding &
              <br />
              Financiële Rapportages
            </h1>
            <p className="text-body-lg text-body mb-6">
              Boekhouding als fundament van de organisatie
            </p>
            <p className="text-body mb-8 leading-relaxed">
              Correcte, actuele administratie vormt de basis voor betrouwbare
              rapportages, fiscale verplichtingen en onderbouwde beslissingen.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Correct en up-to-date ingericht',
                'Structuur, controle en overzicht',
                'Heldere financiële inzichten',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-heading">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-medium transition-all shadow-sm"
            >
              Plan een kennismaking
            </button>
          </div>

          {/* Illustration card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-80 flex items-center justify-center relative">
            <div className="absolute top-6 left-6 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="text-primary" />
            </div>
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="text-green-600" />
            </div>
            <div className="w-28 h-28 bg-primary rounded-2xl flex items-center justify-center">
              <Layers className="w-14 h-14 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Why bookkeeping */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading">
              Waarom goede boekhouding essentieel is
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Layers,
                title: 'Structuur',
                text: 'Logisch ingerichte administratie geeft overzicht',
              },
              {
                icon: Repeat,
                title: 'Continu inzicht',
                text: 'Altijd actuele cijfers beschikbaar',
              },
              {
                icon: ShieldCheck,
                title: 'Betrouwbaarheid',
                text: 'Correcte basis voor aangiftes en jaarrekening',
              },
              {
                icon: BarChart3,
                title: 'Besluitvorming',
                text: 'Feitelijk inzicht in financiële positie',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-heading mb-2">{title}</h3>
                <p className="text-body text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Inrichting */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Inrichting van de boekhouding
            </h3>
            <ul className="space-y-3">
              {[
                'Grootboekschema',
                'Kostenplaatsen',
                'Kostendragers',
                'Logische structuur van gegevens',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verwerking */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Dagelijkse & periodieke verwerking
            </h3>
            <ul className="space-y-3">
              {[
                'Inkoop- en verkoopfacturen',
                'Bank- en kasverwerking',
                'Memoriaalboekingen',
                'Loonjournaalposten',
                'Periodieke afsluitingen',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Automation & reporting */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Slimme automatisering
            </h3>
            <p className="text-body leading-relaxed mb-4">
              Automatisering ondersteunt het proces, zonder controle te
              verliezen.
            </p>
            <ul className="space-y-3">
              {[
                'Minder handmatig werk',
                'Minder fouten',
                'Snellere informatievoorziening',
                'Efficiëntere processen',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Financiële rapportages
            </h3>
            <ul className="space-y-3">
              {[
                'Balans',
                'Winst- en verliesrekening',
                'Tussentijdse rapportages',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-hedvig text-heading-lg text-heading mb-6">
            Correcte administratie als basis
          </h2>
          <p className="text-body leading-relaxed">
            Een strakke boekhouding is noodzakelijk voor btw-, IB- en
            VPB-aangiften en de jaarrekening. Door de administratie actueel te
            houden, blijven dossiers inzichtelijk en correcties beperkt.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-hedvig text-heading-lg text-white mb-6">
            Grip op je cijfers?
          </h2>
          <p className="text-white/80 text-body-lg mb-8">
            Wij zorgen voor een boekhouding die klopt en rust geeft.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Plan een kennismakingsgesprek
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
