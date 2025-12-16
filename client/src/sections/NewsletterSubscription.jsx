import React, { useState } from 'react';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Add subscription logic here
    setEmail('');
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-[Montserrat]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
          Subscribe to Our Newsletter for Design Insights
        </h2>
        
        <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-gray-900 sm:rounded-l"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#1F1F1F] rounded-md text-white px-8 py-4 font-medium hover:bg-gray-800 transition-colors sm:rounded-r whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}