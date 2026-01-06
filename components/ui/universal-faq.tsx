'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface UniversalFAQProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
  className?: string
}

export default function UniversalFAQ({ 
  items, 
  title = "Frequently Asked Questions", 
  subtitle = "Get answers to common questions about our services",
  className = "" 
}: UniversalFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-blue-500 shadow-lg' 
                  : 'hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h4 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h4>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {activeIndex === index && (
                <div className="px-8 pb-6 pt-0 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
