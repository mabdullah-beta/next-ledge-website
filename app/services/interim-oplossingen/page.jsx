'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Users,
  Clock,
  Shield,
  Check,
  Briefcase,
  Scale,
  Headphones,
  Zap,
} from 'lucide-react';

export default function InterimOplossingenPage() {
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
              Interim-oplossingen
              <br />
              voor salaris, finance & HR
            </h1>
            <p className="text-body-lg text-body mb-6">
              Flexibele ondersteuning wanneer continuïteit onder druk staat
            </p>
            <p className="text-body mb-8 leading-relaxed">
              Snel inzetbare interim-professionals met duidelijke afspraken,
              persoonlijke matching en maximale flexibiliteit.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Binnen één week passende consultant',
                '30 dagen opzegtermijn',
                'Match op inhoud én mens',
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
              <Users className="text-primary" />
            </div>
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <Briefcase className="text-green-600" />
            </div>
            <div className="w-28 h-28 bg-primary rounded-2xl flex items-center justify-center">
              <Zap className="w-14 h-14 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Why interim */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading">
              Wanneer interim-oplossingen het verschil maken
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Snel schakelen',
                text: 'Direct inzetbaar bij uitval, verlof of spoed',
              },
              {
                icon: Users,
                title: 'Capaciteit opvangen',
                text: 'Tijdelijke versterking zonder vaste verplichting',
              },
              {
                icon: Shield,
                title: 'Continuïteit',
                text: 'Processen blijven draaien zonder risico',
              },
              {
                icon: Briefcase,
                title: 'Projectmatig',
                text: 'Ondersteuning bij implementaties of achterstanden',
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

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading">
              Onze aanpak in stappen
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              ['1', 'Intake op locatie', 'Inhoud & cultuur in kaart'],
              ['2', 'Matching', 'Hard & soft skills gecombineerd'],
              ['3', 'Voorstel', 'Drie passende kandidaten'],
              ['4', 'Start', 'Afstemming & onboarding'],
              ['5', 'Begeleiding', 'Nazorg en overdracht'],
            ].map(([nr, title, text]) => (
              <div key={nr} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold">
                  {nr}
                </div>
                <h3 className="font-semibold text-heading mb-2">{title}</h3>
                <p className="text-body text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Transparante afspraken
            </h3>
            <ul className="space-y-3">
              {[
                '30 dagen opzegtermijn',
                'Geen kleine letters',
                'Geen verrassingen achteraf',
                'Netjes afbouwen en overdragen',
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
              Vaste partner, flexibele schil
            </h3>
            <p className="text-body leading-relaxed">
              SalFin denkt mee op de lange termijn. Interim-inzet is eenvoudig te
              combineren met onze diensten binnen salarisadministratie,
              accounting, HR en IT-oplossingen.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-hedvig text-heading-lg text-white mb-6">
            Snel interim-ondersteuning nodig?
          </h2>
          <p className="text-white/80 text-body-lg mb-8">
            Wij denken vandaag nog met je mee.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Neem contact op met SalFin
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
