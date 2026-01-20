'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Cpu,
  Database,
  ShieldCheck,
  Repeat,
  BarChart3,
  Bot,
  Check,
} from 'lucide-react';



export default function AutomatiseringITOplossingenPage() {
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
              Automatisering &
              <br />
              IT-oplossingen
            </h1>
            <p className="text-body-lg text-body mb-6">
              Praktische IT die werkt voor de organisatie
            </p>
            <p className="text-body mb-8 leading-relaxed">
              Automatisering is geen doel op zich. IT moet processen
              vereenvoudigen, overzicht creëren en betrouwbare informatie
              toegankelijk maken.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Structuur en overzicht in data',
                'Veilig en beheersbaar ingericht',
                'Toepasbaar in de dagelijkse praktijk',
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
              <Database className="text-primary" />
            </div>
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-green-600" />
            </div>
            <div className="w-28 h-28 bg-primary rounded-2xl flex items-center justify-center">
              <Cpu className="w-14 h-14 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Why IT via SalFin */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading">
              IT-oplossingen met structuur
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Database,
                title: 'Centrale data',
                text: 'Eén veilige bron van informatie',
              },
              {
                icon: ShieldCheck,
                title: 'Veiligheid',
                text: 'Duidelijke toegangsrechten',
              },
              {
                icon: Repeat,
                title: 'Automatisering',
                text: 'Minder handmatig werk',
              },
              {
                icon: BarChart3,
                title: 'Inzicht',
                text: 'Heldere dashboards',
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

      {/* Data lake */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Data centraal en veilig ingericht
            </h3>
            <p className="text-body leading-relaxed mb-4">
              Wij richten een centrale, beveiligde cloudomgeving in waarin data
              uit verschillende systemen samenkomt. Dit vormt een uitbreidbaar
              data-lake binnen de IT-omgeving van de organisatie.
            </p>
            <ul className="space-y-3">
              {[
                'Data blijft eigendom van de organisatie',
                'Eén centrale bron van waarheid',
                'Duidelijke rechten en beveiliging',
                'Uitbreidbaar zonder herinrichting',
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
              Structuur & automatisering
            </h3>
            <p className="text-body leading-relaxed mb-4">
              Automatisering wordt alleen toegepast wanneer het aantoonbaar
              waarde toevoegt aan het proces.
            </p>
            <ul className="space-y-3">
              {[
                'Koppelingen tussen applicaties',
                'Automatische dataverwerking',
                'Minder handmatige handelingen',
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

      {/* Dashboards & AI */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-hedvig text-heading-sm mb-6">
              Dashboards & rapportage
            </h3>
            <ul className="space-y-3">
              {[
                'Financiële cijfers',
                'Ontwikkelingen en afwijkingen',
                'Samengevoegde data uit meerdere systemen',
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
              AI-ondersteuning
            </h3>
            <p className="text-body leading-relaxed mb-4">
              Een AI-chatbot kan worden gekoppeld aan het data-lake om cijfers te
              verklaren en samen te vatten, altijd binnen de beveiligde
              omgeving.
            </p>
            <ul className="space-y-3">
              {[
                'Beantwoorden van vragen',
                'Samenvatten van informatie',
                'Duiden van afwijkingen',
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

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-hedvig text-heading-lg text-white mb-6">
            Grip op data en processen
          </h2>
          <p className="text-white/80 text-body-lg mb-8">
            IT-oplossingen die inzicht geven, processen vereenvoudigen en
            controle behouden.
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
