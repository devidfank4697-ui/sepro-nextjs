'use client';

import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter Team',
      price: '$8,999',
      period: 'per month',
      description: 'Perfect for small projects and startups',
      features: [
        '2 Developers',
        'Basic Support',
        'Weekly Updates',
        'Code Repository Access',
        'Basic Deployment'
      ],
      buttonText: 'View Details',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Team',
      price: '$14,999',
      period: 'per month',
      description: 'Most popular for growing businesses',
      features: [
        '4 Developers',
        '1 Project Manager',
        '1 Tech Lead',
        '1 Designer',
        '1 QA Tester',
        'CRM Tools Access',
        'Advanced Deployment',
        'Daily Updates',
        'Priority Support'
      ],
      buttonText: 'View Details',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Team',
      price: '$24,999',
      period: 'per month',
      description: 'For large-scale projects and enterprises',
      features: [
        '6 Developers',
        '1 Project Manager',
        '2 Tech Leads',
        '2 Designers',
        '2 QA Testers',
        '1 DevOps Engineer',
        '1 Solution Architect',
        'Advanced CRM Tools',
        'Enterprise Deployment',
        '24/7 Support',
        'Custom Solutions',
        'On-site Visits Available'
      ],
      buttonText: 'View Details',
      popular: false
    }
  ];

  const handlePlanClick = (planId: string) => {
    // Redirect to detailed pricing page
    window.location.href = `/pricing/${planId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1020] via-[#0F4082] to-[#2f57c4] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple & Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#2f57c4]">Pricing</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose the perfect team for your project. Click any plan to see detailed information and team composition.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Team Size</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with a basic team or scale up to enterprise-grade development
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.popular ? 'border-2 border-[#2f57c4]' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handlePlanClick(plan.id)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white hover:shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We can create a tailored team structure based on your specific requirements
          </p>
          <button className="bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Contact Sales Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
