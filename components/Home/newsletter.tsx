'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="w-full py-16 px-4 bg-blue-50 pb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Subscribe To Our Newsletter 
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get the latest insights delivered to your inbox weekly
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-base whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-green-600 font-medium text-lg py-8">
            ✓ Thanks for subscribing!
          </div>
        )}
        
        <p className="text-sm text-gray-500 mt-6">
          No spam, unsubscribe anytime
        </p>
      </div>
    </div>
  );
}
