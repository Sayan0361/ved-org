import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { services } from "../constants/footer";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F1F1F] text-white font-[Montserrat]">
      {/* Padding FIX */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid + gap FIX */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">
                [ V E D A ORGANIZATION ]
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                A professional interior design company known for creating modern and aesthetically pleasing spaces.
                It blends creativity with practical design solutions to meet each client’s lifestyle and requirements.
              </p>
            </div>

            {/* Middle Column */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Our Services
              </h3>
              <ul className="space-y-1">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Contact
              </h3>

              <div className="space-y-3 text-gray-300 text-sm">
                <div>
                  <span className="font-semibold text-white">Address:</span>
                  <p className="leading-relaxed">
                    47 Garfa Main Rd, Sucheta Nagar, Haltu, Kolkata, 700078
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a href="mailto:info@vedaorg.in" className="hover:text-white">
                    info@vedaorg.in
                  </a>
                </div>

                <div>
                  <span className="font-semibold text-white">Ph No:</span>{" "}
                  <a href="tel:+916289949209" className="hover:text-white">
                    6289949209
                  </a>
                </div>
              </div>

              {/* Icons FIX */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#313131] p-2.5 rounded-full hover:bg-[#0b0b0b]"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#313131] p-2.5 rounded-full hover:bg-[#0b0b0b]"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-500">
            <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs sm:text-sm gap-4">
              <p>© {new Date().getFullYear()} VEDA ORGANIZATION. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Cookies</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
