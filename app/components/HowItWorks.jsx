'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    id: '01',
    title: 'Eenvoudig en efficiënt',
    abt: 'Makkelijke en soepele planning',
    description: 'Plan moeiteloos een consult om je doelen, behoeften en uitdagingen te bespreken. We luisteren, analyseren je situatie en bepalen waar automatisering en optimalisatie de grootste impact kunnen hebben zodat we snel en effectief kunnen starten.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    imagePosition: 'left',
    icon: Clock,
    benefits: ['Snelle intake', 'Duidelijke planning', 'Persoonlijk advies']
  },
  {
    id: '02',
    title: 'Automatiseren waar het telt',
    abt: 'Minder handmatig werk, meer duidelijkheid',
    description: "Automatisering betekent niet dat de menselijke betrokkenheid verdwijnt. We blijven nauw betrokken, geven proactief advies en denken met je mee bij belangrijke beslissingen. Je krijgt een vaste expert die jouw bedrijf echt begrijpt.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    imagePosition: 'right',
    icon: CheckCircle,
    benefits: ['Slimme automatisering', 'Menselijke expertise', 'Proactief advies']
  },
  {
    id: '03',
    title: 'Persoonlijke begeleiding',
    abt: 'Altijd een expert aan je zijde',
    description: 'Van implementatie tot optimalisatie bieden we doorlopende begeleiding en aanpassingen om langdurige groei voor jou te verzekeren.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    imagePosition: 'left',
    icon: Users,
    benefits: ['Vaste contactpersoon', 'Continue optimalisatie', 'Langdurige groei']
  },
  {
    id: '04',
    title: 'Groeien met vertrouwen',
    abt: 'Van cijfers naar strategie',
    description: 'Met duidelijke cijfers en slimme financiële inzichten helpen we je stevige, strategische keuzes te maken. Of je nu wilt opschalen, investeren of efficiënter wilt werken, SalFin geeft je de helderheid om vooruit te komen.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'right',
    icon: TrendingUp,
    benefits: ['Strategische inzichten', 'Datagedreven beslissingen', 'Duurzame groei']
  }
];

// Progress Indicator Component
function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center justify-center mb-12 md:mb-16" id='howitworks'>
      <div className="flex items-center gap-3">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index < currentStep 
                  ? 'bg-primary shadow-lg' 
                  : index === currentStep 
                    ? 'bg-primary-light shadow-md' 
                    : 'bg-gray-300'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: index === currentStep ? 1.2 : 1,
                transition: { duration: 0.3 }
              }}
            />
            {index < totalSteps - 1 && (
              <div className={`w-8 h-0.5 mx-2 transition-all duration-500 ${
                index < currentStep ? 'bg-primary' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Benefits List Component
function BenefitsList({ benefits, isVisible }) {
  return (
    <motion.div
      className="mt-6 space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
        >
          <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
          <span className="text-sm-custom text-body font-medium">{benefit}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function StepItem({ step, index, onInView }) {
  const stepRef = useRef(null);
  const isInView = useInView(stepRef, { 
    once: false, 
    amount: 0.4,
    callback: (inView) => {
      if (inView) {
        onInView(index);
      }
    }
  });
  
  const IconComponent = step.icon;

  return (
    <div ref={stepRef} className="relative">
      {/* Timeline Line Segment - only between steps, not after the last one */}
      {index < steps.length - 1 && (
        <div className="absolute left-[22px] sm:left-[26px] md:left-1/2 top-[calc(50%+20px)] sm:top-[calc(50%+24px)] md:top-[calc(50%+28px)] w-px h-[calc(100%+3rem)] sm:h-[calc(100%+4rem)] md:h-[calc(100%+6.5rem)] bg-gray-300 md:-translate-x-1/2"></div>
      )}

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Enhanced Number Badge with Icon - Desktop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Outer ring */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-primary/10">
              {/* Inner circle with icon */}
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              {/* Step number badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">{step.id}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Row - Desktop */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 items-center">
          {step.imagePosition === 'left' ? (
            <>
              {/* Image on Left - Animated */}
              <motion.div
                className="pr-8 lg:pr-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative w-[85%] lg:w-[80%] h-[240px] lg:h-[295px] rounded-2xl lg:rounded-3xl overflow-hidden ml-auto">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </motion.div>

              {/* Content on Right - Animated */}
              <motion.div
                className="pl-12 lg:pl-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-radius-card p-6 lg:p-8">
                  <h3 className="font-hedvig text-heading-sm text-heading mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <h4 className='text-body-base font-semibold text-primary mb-4 tracking-tight'>
                    {step.abt}
                  </h4>
                  <p className="antialiased text-body text-body-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <BenefitsList benefits={step.benefits} isVisible={isInView} />
                  
                 
                </div>
              </motion.div>
            </>
          ) : (
            <>
              {/* Content on Left - Animated */}
              <motion.div
                className="pr-12 lg:pr-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-radius-card p-6 lg:p-8 text-right">
                  <h3 className="font-hedvig text-heading-sm text-heading mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <h4 className='text-body-base font-semibold text-primary mb-4 tracking-tight'>
                    {step.abt}
                  </h4>
                  <p className="antialiased text-body text-body-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="flex justify-end">
                    <div className="text-left">
                      <BenefitsList benefits={step.benefits} isVisible={isInView} />
                    </div>
                  </div>
                  
                </div>
              </motion.div>

              {/* Image on Right - Animated */}
              <motion.div
                className="pl-8 lg:pl-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                <div className="relative w-[85%] lg:w-[80%] h-[240px] lg:h-[295px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pl-10 sm:pl-14">
        {/* Enhanced Number Badge - Mobile */}
        <div className="absolute left-[22px] sm:left-[26px] top-0 -translate-x-1/2 z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Outer ring */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-3 border-primary/10">
              {/* Inner circle with icon */}
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-white" />
              </div>
              {/* Step number badge */}
              <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">{step.id}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image First - Mobile - Animated */}
        <motion.div
          className="mb-6 sm:mb-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full h-[240px] sm:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>

        {/* Content Below Image - Mobile - Animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-radius-card p-5 sm:p-6 shadow-lg border border-gray-100">
            <h3 className="font-hedvig text-card-title sm:text-heading-sm text-heading mb-2 sm:mb-3 tracking-tight">
              {step.title}
            </h3>
            <h4 className='text-sm-custom sm:text-body-base font-semibold text-primary mb-3 sm:mb-4 tracking-tight'>
              {step.abt}
            </h4>
            <p className="antialiased text-body text-sm-custom sm:text-body-base leading-relaxed mb-4 sm:mb-5">
              {step.description}
            </p>
            
            <BenefitsList benefits={step.benefits} isVisible={isInView} />
            
            <motion.button 
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-light transition-all duration-300 font-semibold text-sm-custom mt-5 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ontdek meer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepInView = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <section className="tracking-tight font-inter w-full bg-linear-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="dot-indicator bg-primary rounded-full"></div>
            <span className="font-inter text-sm-custom sm:text-body-base font-semibold text-primary">Hoe het werkt</span>
          </motion.div>
          
          <motion.h2 
            className="font-hedvig text-heading-lg-mobile md:text-heading-lg text-heading leading-tight mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Een bewezen proces om je grootste doelen te bereiken
          </motion.h2>
          
          <motion.button 
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl hover:bg-primary-light"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-semibold text-sm-custom sm:text-body-base">Neem contact op</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} />

        {/* Steps with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="space-y-16 sm:space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} onInView={handleStepInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}