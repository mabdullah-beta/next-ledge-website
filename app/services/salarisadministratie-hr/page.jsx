'use client';

import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Check, Calculator, Scale, Users, Folder, Clock, Zap, TrendingUp, Shield, BarChart3, User, Headphones } from 'lucide-react';


export default function SalarisadministratieHRPage() {
  const handleContactClick = () => {
    // Scroll to contact section or navigate to contact page
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section on this page, navigate to home page contact section
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-blue-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-50/30 py-12 lg:py-20 md:mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="lg:pr-8">
              <h1 className="font-hedvig text-heading-lg text-heading leading-tight mb-4">
                Professionele salarisadministratie
                <br />
                en HR-ondersteuning
              </h1>
              <p className="text-body-lg text-body mb-6">
                voor Groeiende Organisaties
              </p>
              <p className="text-body mb-8 leading-relaxed">
                Correcte salarisverwerking en HR-administratie conform wet- en regelgeving
              </p>
              
              {/* Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-heading">Salarisverwerking & loonheffingen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-heading">HR-administratie & personeelsdossiers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-heading">Nmbrs-integratie & automatisering</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                Plan een kennismaking
              </button>
            </div>
            
            {/* Right Column - Illustration */}
            <div className="lg:pl-8">
              <div className="relative">
                {/* Illustration placeholder - matching the design's illustration style */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-center h-80">
                    <div className="relative w-full h-full">
                      {/* Main illustration elements */}
                      <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Calculator className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="absolute bottom-4 left-8 w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Users className="w-10 h-10 text-gray-600" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-2xl flex items-center justify-center">
                        <Folder className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute bottom-4 right-8 w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-yellow-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading mb-4">
              Waarom goede <span className="text-primary">salarisadministratie</span> en HR-ondersteuning cruciaal is
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Correcte loonafhandeling</h3>
              <p className="text-body text-sm">Nauwkeurige verwerking van salarissen conform wet- en regelgeving</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Wet- en regelgeving</h3>
              <p className="text-body text-sm">Up-to-date kennis van alle fiscale en juridische vereisten</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Minder fouten & overzicht</h3>
              <p className="text-body text-sm">Systematische aanpak voorkomt kostbare administratieve fouten</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Folder className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">HR-Structuur & Dossierbeheer</h3>
              <p className="text-body text-sm">Georganiseerde personeelsdossiers en HR-processen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Salarisadministratie */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="font-hedvig text-heading-sm text-heading mb-6">Salarisadministratie</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Salarisverwerking & aangiftes</h3>
                    <p className="text-body text-sm">Periodieke loonverwerking en correcte afdracht van loonheffingen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Loonheffingen & cao's</h3>
                    <p className="text-body text-sm">Toepassing van arbeidsvoorwaarden en cao-bepalingen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Mutaties & loonstroken</h3>
                    <p className="text-body text-sm">Verwerking van personele wijzigingen en salarisoverzichten</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* HR-Ondersteuning */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="font-hedvig text-heading-sm text-heading mb-6">HR-Ondersteuning</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Arbeidsovereenkomsten</h3>
                    <p className="text-body text-sm">Opstellen en beheren van contracten en arbeidsvoorwaarden</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Folder className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Personeelsbeheer</h3>
                    <p className="text-body text-sm">Dossiervorming en administratieve HR-ondersteuning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Verzuim & Instroom</h3>
                    <p className="text-body text-sm">Begeleiding bij ziekteverzuim en personeelsmutaties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading mb-4">
              Onze aanpak in stappen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-heading mb-2">Intake & inrichting</h3>
              <p className="text-body text-sm">Kennismaking en systeeminrichting op maat</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-heading mb-2">Integratie met Nmbrs</h3>
              <p className="text-body text-sm">Koppeling met moderne loon- en HR-software</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-heading mb-2">Vaste specialist</h3>
              <p className="text-body text-sm">Toegewezen specialist voor persoonlijke begeleiding</p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-heading mb-2">Uitvoering & Controle</h3>
              <p className="text-body text-sm">Maandelijkse verwerking met kwaliteitscontrole</p>
            </div>
            
            {/* Step 5 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                5
              </div>
              <h3 className="font-semibold text-heading mb-2">Proactieve Signalering</h3>
              <p className="text-body text-sm">Tijdige updates over wet- en regelgeving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading mb-4">
              Onze Pakketten
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standaard */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-hedvig text-2xl text-gray-900 mb-4">Standaard</h3>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Basisinrichting Nmbrs</span>
                </div>
                <p className="text-gray-600 text-sm ml-6">Includes loonstroken en componenten</p>
                <p className="text-gray-600 text-sm ml-6">Loonheffingen en aangiftes maken</p>
                <p className="text-gray-600 text-sm ml-6">Maandelijkse verwerking</p>
              </div>
            </div>
            
            {/* Standaard Plus */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-blue-200">
              <h3 className="font-hedvig text-2xl text-gray-900 mb-4">Standaard Plus</h3>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">CAO's & extra codes</span>
                </div>
                <p className="text-gray-600 text-sm ml-6">Beperkt maatwerk mogelijk</p>
                <p className="text-gray-600 text-sm ml-6">Standaard cao-inrichting</p>
                <p className="text-gray-600 text-sm ml-6">Nu, we geven een ideaal en extra looncode mogelijk</p>
              </div>
            </div>
            
            {/* Op maat */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-hedvig text-2xl text-gray-900 mb-4">Op maat</h3>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Volledig maatwerk</span>
                </div>
                <p className="text-gray-600 text-sm ml-6">Complete inrichting op maat</p>
                <p className="text-gray-600 text-sm ml-6">Eigen loon- en urenstructuren</p>
                <p className="text-gray-600 text-sm ml-6">Gedetailleerde looncode met systemen en processen op organisatie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-hedvig text-heading-lg text-heading mb-4">
              Wat je bereikt met onze ondersteuning
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Minder fouten</h3>
              <p className="text-body text-sm">Systematische controles voorkomen kostbare administratieve fouten</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Inzicht & Consistentie</h3>
              <p className="text-body text-sm">Overzichtelijke rapportages en consistente gegevensverwerking</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Personeelsinzicht</h3>
              <p className="text-body text-sm">Professionele HR-ondersteuning voor groeiende organisaties</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Eén aanspreekpunt</h3>
              <p className="text-body text-sm">Persoonlijke begeleiding door vaste specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-hedvig text-heading-lg text-white mb-6">
            Wil je je salaris- en HR-processen optimaliseren?
          </h2>
          <p className="text-white/80 text-body-lg mb-8">
            Of bel direct +31 123 456 789
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Plan een vrijblijvend kennismakingsgesprek
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
