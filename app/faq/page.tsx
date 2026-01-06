'use client';

// Centralized FAQ page showing all page-specific FAQs
import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { 
  HomeFAQ, 
  CareersFAQ, 
  PortfolioFAQ, 
  ContactUsFAQ, 
  AboutUsFAQ, 
  WhyOscormFAQ, 
  HowItWorksFAQ, 
  CaseStudiesFAQ, 
  PricingFAQ 
} from "@/components/ui/faq-content";

interface FAQSection {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
}

export default function FaqPage() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const faqSections: FAQSection[] = [
    {
      id: 'home',
      title: 'Home Page FAQ',
      description: 'General questions about our services and platform',
      component: <HomeFAQ />
    },
    {
      id: 'about',
      title: 'About Us FAQ',
      description: 'Learn more about Oscorm and our company',
      component: <AboutUsFAQ />
    },
    {
      id: 'why-oscorm',
      title: 'Why Oscorm FAQ',
      description: 'What makes us different from other agencies',
      component: <WhyOscormFAQ />
    },
    {
      id: 'how-it-works',
      title: 'How It Works FAQ',
      description: 'Understand our process and methodology',
      component: <HowItWorksFAQ />
    },
        {
      id: 'portfolio',
      title: 'Portfolio FAQ',
      description: 'Questions about our projects and case studies',
      component: <PortfolioFAQ />
    },
    {
      id: 'case-studies',
      title: 'Case Studies FAQ',
      description: 'Detailed information about our success stories',
      component: <CaseStudiesFAQ />
    },
    {
      id: 'careers',
      title: 'Careers FAQ',
      description: 'Job opportunities and working at Oscorm',
      component: <CareersFAQ />
    },
    {
      id: 'contact',
      title: 'Contact Us FAQ',
      description: 'How to get in touch with our team',
      component: <ContactUsFAQ />
    },
    {
      id: 'pricing',
      title: 'Pricing FAQ',
      description: 'Questions about our pricing plans',
      component: <PricingFAQ />
    }
  ];

  const activeFAQ = faqSections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center" 
               style={{backgroundImage: `linear-gradient(rgba(11, 16, 32, 0.9), rgba(15, 64, 130, 0.9)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`}}>
        <div className="text-white max-w-4xl px-5">
          <h1 className="text-[3rem] md:text-[2.5rem] font-semibold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl md:text-lg opacity-90 max-w-3xl mx-auto">
            Find answers to common questions about our services, company, and how we can help you succeed.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          {/* Active Section Description */}
          {activeFAQ && (
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {activeFAQ.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {activeFAQ.description}
              </p>
            </div>
          )}
        </div>

        {/* FAQ Content */}
        {activeFAQ && (
          <div className="max-w-4xl mx-auto">
            {activeFAQ.component}
          </div>
        )}

        {/* Quick Links Section */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Can't find what you're looking for?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h4>
              <p className="text-gray-600 mb-4">Get in touch with our support team</p>
              <a href="/contact-us" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Support →
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Schedule a Call</h4>
              <p className="text-gray-600 mb-4">Book a consultation with our experts</p>
              <a href="/hire-us" className="text-blue-600 hover:text-blue-700 font-medium">
                Book a Call →
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#2f57c4] to-[#00D4AA] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Browse Resources</h4>
              <p className="text-gray-600 mb-4">Explore our case studies and portfolio</p>
              <a href="/portfolio" className="text-blue-600 hover:text-blue-700 font-medium">
                View Resources →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
