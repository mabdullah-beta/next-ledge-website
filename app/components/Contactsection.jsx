'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <section className="w-full bg-teal-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium text-white/80">Contact us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                Get in touch with our<br />experts team
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-teal-800/50 border border-teal-700/50 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-teal-600 transition-colors"
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
                    className="w-full bg-teal-800/50 border border-teal-700/50 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-teal-600 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Date and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="date"
                    name="date"
                    placeholder="dd/mm/yyyy"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-teal-800/50 border border-teal-700/50 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-teal-600 transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-teal-800/50 border border-teal-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-600 transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.5rem center',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option value="">Service...</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="strategy">Strategy Development</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="transformation">Digital Transformation</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget */}
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-teal-800/50 border border-teal-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-600 transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.5rem center',
                    backgroundSize: '1.25rem'
                  }}
                >
                  <option value="">Budget...</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
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
                  className="w-full bg-teal-800/50 border border-teal-700/50 rounded-2xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:border-teal-600 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-white text-teal-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1000&fit=crop"
              alt="Person with headphones working on laptop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

  
    </section>
  );
}
