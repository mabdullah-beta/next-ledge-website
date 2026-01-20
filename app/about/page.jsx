'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import {
  Building2,
  Users,
  Target,
  TrendingUp,
  Shield,
MapPin,
  ArrowRight,
  Check
} from 'lucide-react';

export default function AboutPage() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Praktijkgericht',
      description: 'Ontstaan vanuit de praktijk van het ondernemen, met begrip voor de uitdagingen van besluitvorming op basis van cijfers.'
    },
    {
      icon: Users,
      title: 'Samenhang',
      description: 'Salaris, HR en finance zijn met elkaar verbonden. Wij werken vanuit die samenhang voor overzicht en voorspelbaarheid.'
    },
    {
      icon: TrendingUp,
      title: 'Inzicht',
      description: 'Administratie moet richting geven, niet alleen verwerken. Cijfers zijn het startpunt voor betere beslissingen.'
    },
    {
      icon: Shield,
      title: 'Betrouwbaarheid',
      description: 'Duidelijke afspraken, transparante werkwijze en een vast aanspreekpunt voor continuïteit en vertrouwen.'
    }
  ];


  return (
    <div className="min-h-screen bg-blue-50/30">
      <Header />

      {/* Hero Section */}
      <section className="py-12 lg:py-20 md:mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={heroRef}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6">
              <div className="dot-indicator bg-primary rounded-full"></div>
              <span className="font-inter text-sm sm:text-base font-semimedium text-primary">Over SalFin</span>
            </div>
            
            <h1 className="font-hedvig text-heading-lg text-heading mb-6">
              Ontstaan vanuit de praktijk
              <br />
              van het ondernemen
            </h1>
            
            <p className="text-body-lg text-body mb-8 max-w-3xl mx-auto">
              SalFin brengt rust in organisaties waar geld en mensen samenkomen door salarisadministratie, HR en finance met elkaar te verbinden.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto relative">
              <div className="absolute top-6 left-6 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="text-primary" />
              </div>
              <div className="absolute bottom-6 right-6 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-green-600" />
              </div>
              <div className="w-28 h-28 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-14 h-14 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-hedvig text-heading-lg text-heading mb-6">
                Waarom SalFin anders werkt
              </h2>
              <div className="space-y-6 text-body leading-relaxed">
                <p>
                  Ondernemen vraagt om keuzes, vaak op momenten waarop cijfers nog niet volledig zijn of verschillende signalen afgeven. In die situaties blijkt administratie regelmatig onvoldoende: correct verwerkt, maar niet bruikbaar voor sturing.
                </p>
                <p>
                  Daarom werkt SalFin anders. Wij richten processen zo in dat informatie niet alleen klopt, maar ook richting geeft. Door salarisadministratie, HR en finance met elkaar te verbinden ontstaat overzicht, voorspelbaarheid en ruimte om gecontroleerd te handelen.
                </p>
                <p>
                  Onze rol is niet uitvoerend alleen, maar structurerend en ondersteunend in besluitvorming. We staan naast je als vaste partner of als flexibele schil, met duidelijke afspraken en geen kleine letters.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Administratie die richting geeft, niet alleen verwerkt',
                'Samenhang tussen salaris, HR en financiële processen',
                'Ondersteuning bij besluitvorming op basis van cijfers',
                'Flexibele partnerschap met duidelijke afspraken'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-heading">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={valuesRef}
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-hedvig text-heading-lg text-heading mb-4">
              Onze kernwaarden
            </h2>
            <p className="text-body text-body-lg max-w-3xl mx-auto">
              Deze principes vormen de basis van hoe wij werken en ondersteunen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isValuesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-heading mb-2">{value.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Location & Contact */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-hedvig text-heading-lg text-heading mb-6">
                Gevestigd in Amsterdam
              </h2>
              <p className="text-body leading-relaxed mb-6">
                Vanuit Amsterdam ondersteunen wij organisaties door heel Nederland bij salarisadministratie, HR en financiële processen. Door onze centrale ligging en digitale werkwijze zijn wij flexibel inzetbaar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-heading">Amsterdam, Nederland</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-heading">Landelijke ondersteuning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-heading">Digitaal en op locatie</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-hedvig text-heading-sm mb-6">
                Klaar voor de volgende stap?
              </h3>
              <p className="text-body mb-6 leading-relaxed">
                Ontdek hoe SalFin jouw organisatie kan ondersteunen bij salarisadministratie, HR en financiële processen. We denken graag met je mee.
              </p>
              <button
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-medium transition-all shadow-sm flex items-center gap-2 group"
              >
                Plan een kennismaking
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-hedvig text-heading-lg text-white mb-6">
            Rust in organisaties waar geld en mensen samenkomen
          </h2>
          <p className="text-white/80 text-body-lg mb-8">
            Ontdek hoe SalFin jouw organisatie kan ondersteunen met praktische oplossingen voor salaris, HR en finance.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Neem contact op
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
