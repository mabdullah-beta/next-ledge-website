'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    date: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
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
                <span className="text-xs sm:text-sm font-medium text-white/80">Neem contact met ons op</span>
              </div>
              <h2 className="font-hedvig text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] text-white leading-tight max-w-sm mx-auto lg:mx-0">
                Neem contact op met ons expertenteam
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 font-inter">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Volledige naam"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white focus:outline focus:outline-white transition-colors"
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
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white focus:outline focus:outline-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Date and Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="dd/mm/jjjj"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white focus:outline focus:outline-white transition-colors font-medium"
                    style={{ colorScheme: 'dark' }}
                    required
                  />
                </div>
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
                    <option value="" style={{ color: '#ffffff' }}>Dienst...</option>
                    <option value="consulting" style={{ color: '#ffffff' }}>Bedrijfsadvies</option>
                    <option value="strategy" style={{ color: '#ffffff' }}>Strategie ontwikkeling</option>
                    <option value="analytics" style={{ color: '#ffffff' }}>Data analyse</option>
                    <option value="transformation" style={{ color: '#ffffff' }}>Digitale transformatie</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget */}
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white focus:outline focus:outline-white transition-colors font-medium appearance-none"
                  style={{
                    color: '#ffffff',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1em 1em',
                    paddingRight: '2.5rem'
                  }}
                  required
                >
                  <option value="" style={{ color: '#ffffff' }}>Budget...</option>
                  <option value="5k-10k" style={{ color: '#ffffff' }}>$5,000 tot $10,000</option>
                  <option value="10k-25k" style={{ color: '#ffffff' }}>$10,000 tot $25,000</option>
                  <option value="25k-50k" style={{ color: '#ffffff' }}>$25,000 tot $50,000</option>
                  <option value="50k+" style={{ color: '#ffffff' }}>$50,000 of meer</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Hoe kunnen we helpen?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-primary-light/30 rounded-xl sm:rounded-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-white focus:outline focus:outline-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Full width on mobile */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-primary-light/30 text-white font-semibold pl-4 sm:pl-5 md:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full hover:bg-secondary-dark transition-colors text-sm sm:text-base"
                >
                  <span>Verstuur je formulier</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
                  </span>
                </button>
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