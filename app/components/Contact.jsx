'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: '',
    companySize: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          service: '',
          companySize: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full bg-primary px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 sm:gap-8 lg:gap-4 items-center">

          {/* Left Side - Form */}
          <div className='px-0 sm:px-4 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20'>
            {/* Header - Centered on mobile, left-aligned on desktop */}
            <div className="mb-8 sm:mb-10 md:mb-12 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-5 md:mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium text-white/80">Contact opnemen met SalFin</span>
              </div>
              <h2 className="font-hedvig text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] text-white leading-tight max-w-lg mx-auto lg:mx-0 mb-4">
                Plan eenvoudig een kennismaking
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Vertel kort waar je hulp bij nodig hebt, dan nemen wij contact met je op.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 font-inter">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Naam (voor- en achternaam)"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/80 focus:outline focus:outline-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mailadres"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/80 focus:outline focus:outline-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone and Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefoonnummer (optioneel)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/80 focus:outline focus:outline-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Bedrijfsnaam (optioneel)"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/80 focus:outline focus:outline-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Service and Company Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:outline focus:outline-white transition-colors font-medium appearance-none"
                    style={{
                      color: '#ffffff',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" style={{ color: '#ffffff' }}>Waar kunnen we je bij helpen?</option>
                    <option value="salarisondersteuning" style={{ color: '#ffffff' }}>Salarisondersteuning</option>
                    <option value="hr-ondersteuning" style={{ color: '#ffffff' }}>HR-ondersteuning</option>
                    <option value="boekhouding" style={{ color: '#ffffff' }}>Boekhouding & financiële administratie</option>
                    <option value="accounting" style={{ color: '#ffffff' }}>Accounting & inzichten</option>
                    <option value="planning" style={{ color: '#ffffff' }}>Financiële planning & sturing</option>
                    <option value="automatisering" style={{ color: '#ffffff' }}>Automatisering & IT-oplossingen</option>
                    <option value="interim" style={{ color: '#ffffff' }}>Interim-oplossingen</option>
                    <option value="anders" style={{ color: '#ffffff' }}>Anders / nog niet zeker</option>
                  </select>
                </div>
                <div>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:outline focus:outline-white transition-colors font-medium appearance-none"
                    style={{
                      color: '#ffffff',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      backgroundSize: '1em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" style={{ color: '#ffffff' }}>Omvang van de organisatie</option>
                    <option value="zzp" style={{ color: '#ffffff' }}>ZZP / eenmanszaak</option>
                    <option value="2-10" style={{ color: '#ffffff' }}>2–10 medewerkers</option>
                    <option value="11-50" style={{ color: '#ffffff' }}>11–50 medewerkers</option>
                    <option value="50+" style={{ color: '#ffffff' }}>50+ medewerkers</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Korte toelichting (waar loop je tegenaan of wat wil je verbeteren?)"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white/80 focus:outline focus:outline-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Full width on mobile */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex cursor-pointer items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-primary-light/30 text-white font-semibold pl-4 sm:pl-5 md:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full hover:bg-secondary-dark transition-colors text-sm sm:text-base ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{isSubmitting ? 'Bezig met verzenden...' : 'Verstuur aanvraag'}</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
                  </span>
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <p className="text-green-100 text-sm font-medium">
                      ✅ Bedankt! Je aanvraag is succesvol verzonden. We nemen zo snel mogelijk contact met je op.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-100 text-sm font-medium">
                      ❌ Er is iets misgegaan bij het verzenden. Probeer het opnieuw of neem direct contact met ons op.
                    </p>
                  </div>
                )}

                <p className="text-white/60 text-xs sm:text-sm mt-3 text-center sm:text-left">
                  Na ontvangst nemen we contact met je op om de vraag te bespreken en te bepalen hoe we kunnen ondersteunen.
                </p>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-full lg:min-h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden w-full lg:w-[85%]">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1000&fit=crop"
              alt="Person with headphones working on laptop"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}