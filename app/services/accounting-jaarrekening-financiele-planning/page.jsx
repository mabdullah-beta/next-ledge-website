'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  BarChart3,
  FileText,
  TrendingUp,
  Layers,
  ShieldCheck,
  Check,
} from 'lucide-react';


export default function AccountingJaarrekeningFinancielePlanningPage() {
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
              Accounting, Jaarrekening
              <br />
              & Financiële Planning
            </h1>
            <p className="text-body-lg text-body mb-6">
              Van correcte vastlegging naar inzicht en overzicht
            </p>
            <p className="text-body mb-8 leading-relaxed">
              Wanneer de administratie op orde is, ontstaat ruimte voor
              verdieping. Accounting, jaarrekening en financiële planning
              brengen samenhang, duiding en structuur in cijfers.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Inzicht in prestaties en ontwikkelingen',
                'Formele verantwoording en vastlegging',
                'Structuur in vooruitkijken en sturen',
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

          {/* Visual card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-80 flex items-center justify-center relative">
            <div className="absolute top-6 left-6 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="text-primary" />
            </div>
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-green-600" />
            </div>
            <div className="w-28 h-28 bg-primary rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-14 h-14 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading">
              Samenhang in cijfers en sturing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Accounting',
                text: 'Analyse en duiding van cijfers',
              },
              {
                icon: FileText,
                title: 'Jaarrekening',
                text: 'Formele vastlegging en verantwoording',
              },
              {
                icon: TrendingUp,
                title: 'Planning',
                text: 'Begroten en vooruitkijken',
              },
              {
                icon: Layers,
                title: 'Samenhang',
                text: 'Consistent financieel beeld',
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

      {/* Accounting */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Accounting & financiële inzichten
            </h3>
            <p className="text-body leading-relaxed mb-4">
              Accounting richt zich op het begrijpen van cijfers: prestaties,
              kostenstructuren en ontwikkelingen binnen de organisatie.
            </p>
            <ul className="space-y-3">
              {[
                'Analyse van financiële resultaten',
                'Inzicht in kosten, marges en opbrengsten',
                'Signaleren en toelichten van afwijkingen',
                'Periodieke managementrapportages',
                'Uitleg en duiding van cijfers',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Jaarrekening */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Jaarrekening & verantwoording
            </h3>
            <p className="text-body leading-relaxed mb-4">
              De jaarrekening vormt het formele sluitstuk van een boekjaar en is
              de basis voor verantwoording richting externe partijen.
            </p>
            <ul className="space-y-3">
              {[
                'Samenstellen van de jaarrekening',
                'Toelichting op balans en resultaat',
                'Afstemming met administratie',
                'Voorbereiding voor externe partijen',
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

      {/* Planning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Financiële planning & sturing
            </h3>
            <p className="text-body leading-relaxed mb-4">
              Financiële planning helpt bij het vooruitkijken en het volgen van
              doelstellingen op basis van actuele cijfers.
            </p>
            <ul className="space-y-3">
              {[
                'Opstellen van begrotingen',
                'Uitwerken van scenario’s',
                'Vergelijken van planning en realisatie',
                'Signaleren van afwijkingen',
                'Aanbevelingen op basis van cijfers',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-green-500 w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Duidelijke rollen & afspraken
            </h3>
            <ul className="space-y-3">
              {[
                'Heldere rolverdeling',
                'Transparante werkwijze',
                'Vast aanspreekpunt',
                'Consistente financiële informatie',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <ShieldCheck className="text-primary w-4 h-4" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-hedvig text-heading-lg text-white mb-6">
            Grip op cijfers en koers
          </h2>
          <p className="text-white/80 text-body-lg mb-8">
            Ondersteuning bij accounting, jaarrekening en financiële planning —
            met duidelijke afspraken en structuur.
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
