'use client';

import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Perfect for small teams looking to streamline consulting processes',
    price: '$99',
    period: '/Month',
    buttonText: 'Request Consultation',
    buttonStyle: 'border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
    bgColor: '#fcfffb',
    features: [
      'Personalized strategy sessions',
      'Essential business analytics',
      'Core reporting tools',
      'Up to 5 team members',
      'Dedicated email support',
      'Customizable workflow insights'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Designed for growing consulting firms needing insights & support.',
    price: '$299',
    period: '/Month',
    buttonText: 'Get Started',
    buttonStyle: 'bg-teal-800 text-white hover:bg-teal-900',
    bgColorHeader: '#eeffe5',
    bgColorFeatures: '#ffffff',
    isPopular: true,
    features: [
      'Unlimited strategy consultations',
      'Advanced business analytics',
      'Up to 10 team members',
      'Comprehensive reporting suite',
      'Up to 10 team members',
      'Priority email & chat support'
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
         <div className="font-hedvig text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
           <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Pricing</span>
          </div>
          <h2 className="text-[38px] md:text-[45px]  text-gray-900  mx-auto max-w-2xl">
            Flexible pricing tailored toyour business needs
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="font-inter grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[850px] mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="relative">
              {/* Card */}
              <div 
                className="rounded-3xl overflow-hidden shadow-lg border border-gray-200"
                style={
                  plan.id === 'premium' 
                    ? { background: 'linear-gradient(to bottom, #efffe5 0%, #ffffff 100%)' }
                    : { backgroundColor: plan.bgColor }
                }
              >
                {/* Header Section */}
                <div className="p-8 pb-6">
                  {/* Title and Popular Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[28px] font-semibold text-gray-900">
                      {plan.name}
                    </h3>
                    {plan.isPopular && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-800 text-white text-xs font-medium rounded-full">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-[18px] mb-5 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span className="text-6xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 px-4 rounded-full text-base font-semibold transition-all duration-200 ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features Section */}
                <div className="p-8 pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-gray-700 text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}