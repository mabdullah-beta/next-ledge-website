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
    <section className="w-full bg-primary px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-2 items-center">
          {/* Left Side - Form */}
          <div className='md:px-12 py-20  '>
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium text-white/80">Contact us</span>
              </div>
              <h2 className="font-hedvig text-[38px] md:text-4xl text-white leading-tight max-w-sm">
                Get in touch with our experts team
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                     className="w-full bg-primary-light border-primary-light rounded-2xl px-6 py-3 text-white placeholder-white focus:outline-none border focus:border-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  className="w-full bg-primary-light border-primary-light rounded-2xl px-6 py-3 text-white placeholder-white focus:outline-none border focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Date and Service */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="dd/mm/yyyy"
                    value={formData.date}
                    onChange={handleChange}
                     className="w-full bg-primary-light border-primary-light rounded-2xl px-4 py-3 text-white placeholder-white focus:outline-none border focus:border-white transition-colors font-medium"
                    style={{ colorScheme: 'dark' }}
                    required
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-primary-light border-primary-light rounded-2xl px-4 py-3 text-white focus:outline-none border focus:border-white transition-colors  font-medium appearance-none"
                    style={{
                      color: '#ffffff',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1em 1.5em',
                      paddingRight: '3rem'
                    }}
                    required

                  >
                    <option value="" style={{ color: '#ffffff' }}>Service...</option>
                    <option value="consulting" style={{ color: '#ffffff' }}>Business Consulting</option>
                    <option value="strategy" style={{ color: '#ffffff' }}>Strategy Development</option>
                    <option value="analytics" style={{ color: '#ffffff' }}>Data Analytics</option>
                    <option value="transformation" style={{ color: '#ffffff' }}>Digital Transformation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget */}
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-primary-light border-primary-light rounded-2xl px-4 py-3 text-white focus:outline-none border focus:border-white transition-colors  font-medium appearance-none"
                  style={{
                    color: '#ffffff',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em 1em',
                    paddingRight: '3rem'
                  }}
                    required

                >
                  <option value="" style={{ color: '#ffffff' }}>Budget...</option>
                  <option value="5k-10k" style={{ color: '#ffffff' }}>$5,000 - $10,000</option>
                  <option value="10k-25k" style={{ color: '#ffffff' }}>$10,000 - $25,000</option>
                  <option value="25k-50k" style={{ color: '#ffffff' }}>$25,000 - $50,000</option>
                  <option value="50k+" style={{ color: '#ffffff' }}>$50,000+</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="How Can We Help?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-primary-light border border-primary-light rounded-2xl px-6 py-4 text-white placeholder-white focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-primary-light text-white font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-secondary-dark transition-colors text-base"
                >
                  <span>Submit your Form</span>
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-full min-h-[600px] lg:min-h-[700px] rounded-3xl overflow-hidden w-[85%]">
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