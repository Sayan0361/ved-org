import React, { useState } from 'react';
import { testimonials } from '../constants/testimonials';

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <div className="min-h-screen font-[Montserrat] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-right mb-2 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 font-[Montserrat]">
            What Our Customers Say<br />About Us
          </h2>
        </div>

        {/* Main Content - Image with Overlapping Cards */}
        <div className="relative">
          {/* Background Interior Image */}
          <div className="w-full lg:w-2/5 h-96 lg:h-[600px]">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop"
                alt="Modern interior with Luxora UV Marble"
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Buttons */}
              <div className="absolute bottom-6 left-6 flex gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Overlapping Testimonial Cards */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/4 lg:right-0 mt-8 lg:mt-0 flex flex-col gap-6 lg:flex-row lg:gap-8 lg:pr-8">
            {/* First Testimonial Card */}
            <div className="bg-[#1F1F1F] text-white p-8 sm:p-10 rounded-lg shadow-2xl flex flex-col justify-between lg:w-1/2 transition-all duration-500">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L12 24h4l2.243-5.757C19.328 17.157 20 15.657 20 14c0-3.314-2.686-6-6-6H10zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L24 24h4l2.243-5.757C31.328 17.157 32 15.657 32 14c0-3.314-2.686-6-6-6h-4z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-base sm:text-lg leading-relaxed mb-8 grow">
                "{visibleTestimonials[0].text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* <img
                  src={visibleTestimonials[0].image}
                  alt={visibleTestimonials[0].name}
                  className="w-14 h-14 rounded-full object-cover"
                /> */}
                <div>
                  <h4 className="font-bold text-lg">{visibleTestimonials[0].name}</h4>
                  {/* <p className="text-gray-400 text-sm">{visibleTestimonials[0].location}</p> */}
                </div>
              </div>
            </div>

            {/* Second Testimonial Card - Hidden on mobile */}
            <div className="bg-[#1F1F1F] text-white p-8 sm:p-10 rounded-lg shadow-2xl flex-col justify-between lg:w-1/2 hidden lg:flex transition-all duration-500">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L12 24h4l2.243-5.757C19.328 17.157 20 15.657 20 14c0-3.314-2.686-6-6-6H10zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757L24 24h4l2.243-5.757C31.328 17.157 32 15.657 32 14c0-3.314-2.686-6-6-6h-4z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-base sm:text-lg leading-relaxed mb-8 grow">
                "{visibleTestimonials[1].text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* <img
                  src={visibleTestimonials[1].image}
                  alt={visibleTestimonials[1].name}
                  className="w-14 h-14 rounded-full object-cover"
                /> */}
                <div>
                  <h4 className="font-bold text-lg">{visibleTestimonials[1].name}</h4>
                  {/* <p className="text-gray-400 text-sm">{visibleTestimonials[1].location}</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gray-900'
                    : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}