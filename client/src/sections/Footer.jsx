import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const services = [
    'Interior design',
    'Outdoor design', 
    'Lighting design',
    'Office design',
    'Home Renovation',
    'Kitchen Design'
  ];

  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column - Company Info with Brackets */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bracket Header */}
            <div className="flex items-center mb-4">
              <span className="text-2xl font-light mr-2">[</span>
              <h2 className="text-3xl font-semibold tracking-wide">VEDA ORGANIZATION</h2>
              <span className="text-2xl font-light ml-2">]</span>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              A professional interior design company known for creating modern and aesthetically pleasing spaces. 
              It blends creativity with practical design solutions to meet each client's lifestyle and requirements.
              The firm focuses on quality materials, thoughtful planning, and elegant finishing. Its work aims to enhance comfort and deliver a refined visual experience in every project.
            </p>
          </div>

          {/* Middle Column - Our Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-semibold tracking-wide">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="relative">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors text-base block py-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-semibold tracking-wide">Contact</h3>
            
            <div className="space-y-4 text-gray-300">
              {/* Address Section */}
              <div className="flex flex-col space-y-1">
                <span className="font-semibold text-white">Address:</span>
                <p>47 Garfa Main Rd, Sucheta Nagar, Haltu, Kolkata, West Bengal, 700078</p>
              </div>

              {/* Email Section */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Email:</span>
                <a 
                  href="mailto:info@vedaorg.in" 
                  className="hover:text-white transition-colors"
                >
                  info@vedaorg.in
                </a>
              </div>

              {/* Phone Section */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Ph No:</span>
                <a 
                  href="tel:+916289949209" 
                  className="hover:text-white transition-colors"
                >
                  6289949209
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 pt-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
            <p>© 2024 VEDA ORGANIZATION. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
