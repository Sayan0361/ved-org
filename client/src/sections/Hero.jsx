import React from "react";
import Hero1 from "../assets/HeroSection/Hero1.png";
import Hero2 from "../assets/HeroSection/Hero2.png";
import ArrowDown from "../assets/HeroSection/ArrowDown.png";

export default function Hero() {
  return (
    <section className="w-full min-h-auto bg-white overflow-hidden">
      {/* Responsive padding */}
      <div className="px-6 md:px-8 lg:px-12 xl:px-16 pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">
          {/* LEFT COLUMN: Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6 md:mb-8 text-black tracking-wider">
              Luxora UV Marble
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg leading-relaxed md:leading-[1.7] text-gray-700 mb-8 md:mb-10 max-w-xl">
              Premium UV marble sheets are becoming a top interior choice in Kolkata due to their high-gloss finish, durability, and resistance to moisture and scratches. They offer the luxury look of real marble at an affordable cost, making them ideal for modern homes, offices, and commercial spaces. With easy installation and a wide range of designs, they provide a stylish and long-lasting solution perfectly suited to Kolkata's climate and contemporary design needs.
            </p>

            {/* CTA + Stats Row */}
            <div className="flex flex-col gap-2">
              {/* Start Project Button - Fixed width and smaller size */}
              <button className="w-[180px] md:w-[200px] px-4 py-2.5 bg-black text-white font-montserrat font-semibold text-sm hover:bg-gray-900 transition-colors duration-200">
                Start Project
              </button>

              {/* Gap of 2 lines */}
              <div className="h-8 md:h-10"></div>

              {/* 100+ Project Complete */}
              <div className="flex flex-col">
                <div className="font-montserrat font-semibold text-4xl md:text-5xl lg:text-6xl text-black leading-none">
                  100+
                </div>
                <div className="font-montserrat font-medium text-sm md:text-base text-gray-600 mt-1 md:mt-2">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Images */}
          <div className="relative w-full">
            {/* Mobile Layout: Stacked */}
            <div className="lg:hidden flex flex-col gap-6">
              {/* Top Image (Hero1) - Reduced height */}
              <div className="w-full">
                <img
                  src={Hero1}
                  alt="Luxora UV Marble showcase"
                  className="w-full h-48 md:h-56 object-cover rounded-sm"
                />
              </div>

              {/* Bottom Image with Border and Arrow (Hero2) */}
              <div className="relative">
                {/* Border Rectangle - Behind Hero2 */}
                <div className="absolute -left-2 -top-2 w-20 h-16 md:w-24 md:h-20 border-2 border-black bg-transparent z-0"></div>

                {/* Bottom Image (Hero2) - Reduced height */}
                <img
                  src={Hero2}
                  alt="Luxora UV Marble installation"
                  className="w-full h-48 md:h-56 object-cover rounded-sm relative z-10"
                />

                {/* Arrow Down - On top of second image, bottom right */}
                <button
                  onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                  className="absolute right-1 bottom-1 w-8 h-8 md:w-10 md:h-10 z-20 cursor-pointer hover:scale-105 transition-transform"
                  aria-label="Scroll down"
                >
                  <img
                    src={ArrowDown}
                    alt="Scroll down"
                    className="w-full h-full object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Top Image (Hero1) - Reduced height */}
              <div className="w-full mb-6">
                <img
                  src={Hero1}
                  alt="Luxora UV Marble showcase"
                  className="w-full max-w-md ml-auto h-64 object-cover rounded-sm shadow-lg"
                />
              </div>

              {/* Container for Hero2 with border and arrow */}
              <div className="relative">
                {/* Border Rectangle - Behind Hero2 */}
                <div className="absolute -left-4 -top-3 w-40 h-32 border-2 border-black bg-transparent z-0"></div>

                {/* Bottom Image (Hero2) - Reduced height */}
                <img
                  src={Hero2}
                  alt="Luxora UV Marble installation detail"
                  className="relative w-full max-w-lg h-72 object-cover rounded-sm shadow-lg z-10"
                />

                {/* Arrow Down - On top of second image, bottom right */}
                <button
                  onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                  className="absolute bottom-0 w-12 h-12 z-20 cursor-pointer hover:scale-105 transition-transform"
                  aria-label="Scroll down"
                >
                  <img
                    src={ArrowDown}
                    alt="Scroll down"
                    className="w-full h-full rounded-md object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}